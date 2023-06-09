/*!CK:4242223540!*/ /*1448310794,*/

if (self.CavalryLogger) {
	CavalryLogger.start_js(["ccpBO"]);
}

/**
 * @providesModule Int64
 * @preserve-header
 * @nolint
 * @nopackage
 */
__d("Int64", [], function a(b, c, d, e, f, g) {
	c.__markCompiled && c.__markCompiled();
	Int64 = function(h, i) {
		this.low_ = h;
		this.high_ = i;
	};
	Int64.IntCache_ = {};
	Int64.fromInt = function(h) {
		if (-128 <= h && h < 128) {
			var i = Int64.IntCache_[h];
			if (i) return i;
		}
		var j = new Int64(h | 0, h < 0 ? -1 : 0);
		if (-128 <= h && h < 128) Int64.IntCache_[h] = j;
		return j;
	};
	Int64.fromNumber = function(h) {
		if (isNaN(h) || !isFinite(h)) {
			return Int64.ZERO;
		} else if (h <= -Int64.TWO_PWR_63_DBL_) {
			return Int64.MIN_VALUE;
		} else if (h + 1 >= Int64.TWO_PWR_63_DBL_) {
			return Int64.MAX_VALUE;
		} else if (h < 0) {
			return Int64.fromNumber(-h).negate();
		} else return new Int64((h % Int64.TWO_PWR_32_DBL_) | 0, (h / Int64.TWO_PWR_32_DBL_) | 0);
	};
	Int64.fromBits = function(h, i) {
		return new Int64(h, i);
	};
	Int64.fromString = function(h, i) {
		if (h.length == 0) throw Error('number format error: empty string');
		var j = i || 10;
		if (j < 2 || 36 < j) throw Error('radix out of range: ' + j);
		if (h.charAt(0) == '-') {
			return Int64.fromString(h.substring(1), j).negate();
		} else if (h.indexOf('-') >= 0) throw Error('number format error: interior "-" character: ' + h);
		var k = Int64.fromNumber(Math.pow(j, 8)),
			l = Int64.ZERO;
		for (var m = 0; m < h.length; m += 8) {
			var n = Math.min(8, h.length - m),
				o = parseInt(h.substring(m, m + n), j);
			if (n < 8) {
				var p = Int64.fromNumber(Math.pow(j, n));
				l = l.multiply(p).add(Int64.fromNumber(o));
			} else {
				l = l.multiply(k);
				l = l.add(Int64.fromNumber(o));
			}
		}
		return l;
	};
	Int64.TWO_PWR_16_DBL_ = 1 << 16;
	Int64.TWO_PWR_24_DBL_ = 1 << 24;
	Int64.TWO_PWR_32_DBL_ = Int64.TWO_PWR_16_DBL_ * Int64.TWO_PWR_16_DBL_;
	Int64.TWO_PWR_31_DBL_ = Int64.TWO_PWR_32_DBL_ / 2;
	Int64.TWO_PWR_48_DBL_ = Int64.TWO_PWR_32_DBL_ * Int64.TWO_PWR_16_DBL_;
	Int64.TWO_PWR_64_DBL_ = Int64.TWO_PWR_32_DBL_ * Int64.TWO_PWR_32_DBL_;
	Int64.TWO_PWR_63_DBL_ = Int64.TWO_PWR_64_DBL_ / 2;
	Int64.ZERO = Int64.fromInt(0);
	Int64.ONE = Int64.fromInt(1);
	Int64.NEG_ONE = Int64.fromInt(-1);
	Int64.MAX_VALUE = Int64.fromBits(4294967295 | 0, 2147483647 | 0);
	Int64.MIN_VALUE = Int64.fromBits(0, 2147483648 | 0);
	Int64.TWO_PWR_24_ = Int64.fromInt(1 << 24);
	Int64.prototype.toInt = function() {
		return this.low_;
	};
	Int64.prototype.toNumber = function() {
		return this.high_ * Int64.TWO_PWR_32_DBL_ + this.getLowBitsUnsigned();
	};
	Int64.prototype.toUnsignedBits = function() {
		var h = [],
			i = 31;
		for (var j = 32; j < 64; j++) {
			h[j] = (this.low_ >> i) & 1;
			i -= 1;
		}
		i = 31;
		for (var j = 0; j < 32; j++) {
			h[j] = (this.high_ >> i) & 1;
			i -= 1;
		}
		return h.join('');
	};
	Int64.prototype.toString = function(h) {
		var i = h || 10;
		if (i < 2 || 36 < i) throw Error('radix out of range: ' + i);
		if (this.isZero()) return '0';
		if (this.isNegative())
			if (this.equals(Int64.MIN_VALUE)) {
				var j = Int64.fromNumber(i),
					k = this.div(j),
					l = k.multiply(j).subtract(this);
				return k.toString(i) + l.toInt().toString(i);
			} else return '-' + this.negate().toString(i);
		var m = Int64.fromNumber(Math.pow(i, 6)),
			l = this,
			n = '';
		while (true) {
			var o = l.div(m),
				p = l.subtract(o.multiply(m)).toInt(),
				q = p.toString(i);
			l = o;
			if (l.isZero()) {
				return q + n;
			} else {
				while (q.length < 6) q = '0' + q;
				n = '' + q + n;
			}
		}
	};
	Int64.prototype.getHighBits = function() {
		return this.high_;
	};
	Int64.prototype.getLowBits = function() {
		return this.low_;
	};
	Int64.prototype.getLowBitsUnsigned = function() {
		return (this.low_ >= 0) ? this.low_ : Int64.TWO_PWR_32_DBL_ + this.low_;
	};
	Int64.prototype.getNumBitsAbs = function() {
		if (this.isNegative()) {
			if (this.equals(Int64.MIN_VALUE)) {
				return 64;
			} else return this.negate().getNumBitsAbs();
		} else {
			var h = this.high_ != 0 ? this.high_ : this.low_;
			for (var i = 31; i > 0; i--)
				if ((h & (1 << i)) != 0) break;
			return this.high_ != 0 ? i + 33 : i + 1;
		}
	};
	Int64.prototype.isZero = function() {
		return this.high_ == 0 && this.low_ == 0;
	};
	Int64.prototype.isNegative = function() {
		return this.high_ < 0;
	};
	Int64.prototype.isOdd = function() {
		return (this.low_ & 1) == 1;
	};
	Int64.prototype.equals = function(h) {
		return (this.high_ == h.high_) && (this.low_ == h.low_);
	};
	Int64.prototype.notEquals = function(h) {
		return (this.high_ != h.high_) || (this.low_ != h.low_);
	};
	Int64.prototype.lessThan = function(h) {
		return this.compare(h) < 0;
	};
	Int64.prototype.lessThanOrEqual = function(h) {
		return this.compare(h) <= 0;
	};
	Int64.prototype.greaterThan = function(h) {
		return this.compare(h) > 0;
	};
	Int64.prototype.greaterThanOrEqual = function(h) {
		return this.compare(h) >= 0;
	};
	Int64.prototype.compare = function(h) {
		if (this.equals(h)) return 0;
		var i = this.isNegative(),
			j = h.isNegative();
		if (i && !j) return -1;
		if (!i && j) return 1;
		if (this.subtract(h).isNegative()) {
			return -1;
		} else return 1;
	};
	Int64.prototype.negate = function() {
		if (this.equals(Int64.MIN_VALUE)) {
			return Int64.MIN_VALUE;
		} else return this.not().add(Int64.ONE);
	};
	Int64.prototype.add = function(h) {
		var i = this.high_ >>> 16,
			j = this.high_ & 65535,
			k = this.low_ >>> 16,
			l = this.low_ & 65535,
			m = h.high_ >>> 16,
			n = h.high_ & 65535,
			o = h.low_ >>> 16,
			p = h.low_ & 65535,
			q = 0,
			r = 0,
			s = 0,
			t = 0;
		t += l + p;
		s += t >>> 16;
		t &= 65535;
		s += k + o;
		r += s >>> 16;
		s &= 65535;
		r += j + n;
		q += r >>> 16;
		r &= 65535;
		q += i + m;
		q &= 65535;
		return Int64.fromBits((s << 16) | t, (q << 16) | r);
	};
	Int64.prototype.subtract = function(h) {
		return this.add(h.negate());
	};
	Int64.prototype.multiply = function(h) {
		if (this.isZero()) {
			return Int64.ZERO;
		} else if (h.isZero()) return Int64.ZERO;
		if (this.equals(Int64.MIN_VALUE)) {
			return h.isOdd() ? Int64.MIN_VALUE : Int64.ZERO;
		} else if (h.equals(Int64.MIN_VALUE)) return this.isOdd() ? Int64.MIN_VALUE : Int64.ZERO;
		if (this.isNegative()) {
			if (h.isNegative()) {
				return this.negate().multiply(h.negate());
			} else return this.negate().multiply(h).negate();
		} else if (h.isNegative()) return this.multiply(h.negate()).negate();
		if (this.lessThan(Int64.TWO_PWR_24_) && h.lessThan(Int64.TWO_PWR_24_)) return Int64.fromNumber(this.toNumber() * h.toNumber());
		var i = this.high_ >>> 16,
			j = this.high_ & 65535,
			k = this.low_ >>> 16,
			l = this.low_ & 65535,
			m = h.high_ >>> 16,
			n = h.high_ & 65535,
			o = h.low_ >>> 16,
			p = h.low_ & 65535,
			q = 0,
			r = 0,
			s = 0,
			t = 0;
		t += l * p;
		s += t >>> 16;
		t &= 65535;
		s += k * p;
		r += s >>> 16;
		s &= 65535;
		s += l * o;
		r += s >>> 16;
		s &= 65535;
		r += j * p;
		q += r >>> 16;
		r &= 65535;
		r += k * o;
		q += r >>> 16;
		r &= 65535;
		r += l * n;
		q += r >>> 16;
		r &= 65535;
		q += i * p + j * o + k * n + l * m;
		q &= 65535;
		return Int64.fromBits((s << 16) | t, (q << 16) | r);
	};
	Int64.prototype.div = function(h) {
		if (h.isZero()) {
			throw Error('division by zero');
		} else if (this.isZero()) return Int64.ZERO;
		if (this.equals(Int64.MIN_VALUE)) {
			if (h.equals(Int64.ONE) || h.equals(Int64.NEG_ONE)) {
				return Int64.MIN_VALUE;
			} else if (h.equals(Int64.MIN_VALUE)) {
				return Int64.ONE;
			} else {
				var i = this.shiftRight(1),
					j = i.div(h).shiftLeft(1);
				if (j.equals(Int64.ZERO)) {
					return h.isNegative() ? Int64.ONE : Int64.NEG_ONE;
				} else {
					var k = this.subtract(h.multiply(j)),
						l = j.add(k.div(h));
					return l;
				}
			}
		} else if (h.equals(Int64.MIN_VALUE)) return Int64.ZERO;
		if (this.isNegative()) {
			if (h.isNegative()) {
				return this.negate().div(h.negate());
			} else return this.negate().div(h).negate();
		} else if (h.isNegative()) return this.div(h.negate()).negate();
		var m = Int64.ZERO,
			k = this;
		while (k.greaterThanOrEqual(h)) {
			var j = Math.max(1, Math.floor(k.toNumber() / h.toNumber())),
				n = Math.ceil(Math.log(j) / Math.LN2),
				o = (n <= 48) ? 1 : Math.pow(2, n - 48),
				p = Int64.fromNumber(j),
				q = p.multiply(h);
			while (q.isNegative() || q.greaterThan(k)) {
				j -= o;
				p = Int64.fromNumber(j);
				q = p.multiply(h);
			}
			if (p.isZero()) p = Int64.ONE;
			m = m.add(p);
			k = k.subtract(q);
		}
		return m;
	};
	Int64.prototype.modulo = function(h) {
		return this.subtract(this.div(h).multiply(h));
	};
	Int64.prototype.not = function() {
		return Int64.fromBits(~this.low_, ~this.high_);
	};
	Int64.prototype.and = function(h) {
		return Int64.fromBits(this.low_ & h.low_, this.high_ & h.high_);
	};
	Int64.prototype.or = function(h) {
		return Int64.fromBits(this.low_ | h.low_, this.high_ | h.high_);
	};
	Int64.prototype.xor = function(h) {
		return Int64.fromBits(this.low_ ^ h.low_, this.high_ ^ h.high_);
	};
	Int64.prototype.shiftLeft = function(h) {
		h &= 63;
		if (h == 0) {
			return this;
		} else {
			var i = this.low_;
			if (h < 32) {
				var j = this.high_;
				return Int64.fromBits(i << h, (j << h) | (i >>> (32 - h)));
			} else return Int64.fromBits(0, i << (h - 32));
		}
	};
	Int64.prototype.shiftRight = function(h) {
		h &= 63;
		if (h == 0) {
			return this;
		} else {
			var i = this.high_;
			if (h < 32) {
				var j = this.low_;
				return Int64.fromBits((j >>> h) | (i << (32 - h)), i >> h);
			} else return Int64.fromBits(i >> (h - 32), i >= 0 ? 0 : -1);
		}
	};
	Int64.prototype.shiftRightUnsigned = function(h) {
		h &= 63;
		if (h == 0) {
			return this;
		} else {
			var i = this.high_;
			if (h < 32) {
				var j = this.low_;
				return Int64.fromBits((j >>> h) | (i << (32 - h)), i >>> h);
			} else if (h == 32) {
				return Int64.fromBits(i, 0);
			} else return Int64.fromBits(i >>> (h - 32), 0);
		}
	};
	f.exports = Int64;
}, null)