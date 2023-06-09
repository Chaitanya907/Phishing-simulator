/*!CK:12850256!*/ /*1442205518,*/

if (self.CavalryLogger) {
	CavalryLogger.start_js(["+ClWy"]);
}

__d('QuickSandHeader', ['sha256', 'Int64'], function a(b, c, d, e, f, g, h, i) {
	if (c.__markCompiled) c.__markCompiled();

	function j(k, l) {
		'use strict';
		this.$QuickSandHeader1 = 1 << l;
		this.$QuickSandHeader2 = this.$QuickSandHeader1 / 2;
		this.$QuickSandHeader3 = i.fromInt(this.$QuickSandHeader2 - 1);
		this.$QuickSandHeader4 = [];
		this.$QuickSandHeader5 = 0;
		this.$QuickSandHeader6 = 0;
		this.$QuickSandHeader7 = 0;
		this.$QuickSandHeader8 = 0;
		var m = h(k),
			n = this.$QuickSandHeader9(this.$QuickSandHeader10(m)),
			o = this.$QuickSandHeader9(this.$QuickSandHeader10(m).slice(8));
		this.$QuickSandHeader4.push(n.xor(i.fromString('736f6d6570736575', 16)));
		this.$QuickSandHeader4.push(o.xor(i.fromString('646f72616e646f6d', 16)));
		this.$QuickSandHeader4.push(n.xor(i.fromString('6c7967656e657261', 16)));
		this.$QuickSandHeader4.push(o.xor(i.fromString('7465646279746573', 16)));
	}
	j.prototype.sipEdge = function(k) {
		'use strict';
		return [this.sipNode(k, 0), this.sipNode(k, 1)];
	};
	j.prototype.sipNode = function(k, l) {
		'use strict';
		return this.$QuickSandHeader11(2 * k + l).and(this.$QuickSandHeader3).toInt();
	};
	j.prototype.getSize = function() {
		'use strict';
		return this.$QuickSandHeader1;
	};
	j.prototype.getHalfSize = function() {
		'use strict';
		return this.$QuickSandHeader2;
	};
	j.prototype.$QuickSandHeader12 = function(k, l) {
		'use strict';
		return k.shiftLeft(l).or(k.shiftRightUnsigned(64 - l));
	};
	j.prototype.$QuickSandHeader9 = function(k) {
		'use strict';
		var l = new i.fromInt(k[0]),
			m = i.fromInt(k[1]).shiftLeft(8),
			n = i.fromInt(k[2]).shiftLeft(16),
			o = i.fromInt(k[3]).shiftLeft(24),
			p = i.fromInt(k[4]).shiftLeft(32),
			q = i.fromInt(k[5]).shiftLeft(40),
			r = i.fromInt(k[6]).shiftLeft(48),
			s = i.fromInt(k[7]).shiftLeft(56);
		return l.or(m).or(n).or(o).or(p).or(q).or(r).or(s);
	};
	j.prototype.$QuickSandHeader13 = function() {
		'use strict';
		this.$QuickSandHeader5 = this.$QuickSandHeader5.add(this.$QuickSandHeader6);
		this.$QuickSandHeader7 = this.$QuickSandHeader7.add(this.$QuickSandHeader8);
		this.$QuickSandHeader6 = this.$QuickSandHeader12(this.$QuickSandHeader6, 13);
		this.$QuickSandHeader8 = this.$QuickSandHeader12(this.$QuickSandHeader8, 16);
		this.$QuickSandHeader6 = this.$QuickSandHeader6.xor(this.$QuickSandHeader5);
		this.$QuickSandHeader8 = this.$QuickSandHeader8.xor(this.$QuickSandHeader7);
		this.$QuickSandHeader5 = this.$QuickSandHeader12(this.$QuickSandHeader5, 32);
		this.$QuickSandHeader7 = this.$QuickSandHeader7.add(this.$QuickSandHeader6);
		this.$QuickSandHeader5 = this.$QuickSandHeader5.add(this.$QuickSandHeader8);
		this.$QuickSandHeader6 = this.$QuickSandHeader12(this.$QuickSandHeader6, 17);
		this.$QuickSandHeader8 = this.$QuickSandHeader12(this.$QuickSandHeader8, 21);
		this.$QuickSandHeader6 = this.$QuickSandHeader6.xor(this.$QuickSandHeader7);
		this.$QuickSandHeader8 = this.$QuickSandHeader8.xor(this.$QuickSandHeader5);
		this.$QuickSandHeader7 = this.$QuickSandHeader12(this.$QuickSandHeader7, 32);
	};
	j.prototype.$QuickSandHeader10 = function(k) {
		'use strict';
		for (var l = [], m = 0; m < k.length; m += 2) l.push(parseInt(k.substr(m, 2), 16));
		return l;
	};
	j.prototype.$QuickSandHeader11 = function(k) {
		'use strict';
		var l = i.fromInt(k);
		this.$QuickSandHeader5 = this.$QuickSandHeader4[0];
		this.$QuickSandHeader6 = this.$QuickSandHeader4[1];
		this.$QuickSandHeader7 = this.$QuickSandHeader4[2];
		this.$QuickSandHeader8 = this.$QuickSandHeader4[3].xor(l);
		for (var m = 0; m < 2; m++) this.$QuickSandHeader13();
		this.$QuickSandHeader5 = this.$QuickSandHeader5.xor(l);
		this.$QuickSandHeader7 = this.$QuickSandHeader7.xor(i.fromString('ff', 16));
		for (m = 0; m < 4; m++) this.$QuickSandHeader13();
		return this.$QuickSandHeader5.xor(this.$QuickSandHeader6).xor(this.$QuickSandHeader7).xor(this.$QuickSandHeader8);
	};
	f.exports = j;
}, null);
__d('QuickSandSolver', ['AsyncRequest', 'Base64', 'Form', 'QuickSandHeader', 'sha256'], function a(b, c, d, e, f, g, h, i, j, k, l) {
	if (c.__markCompiled) c.__markCompiled();
	var m = {
		solveAndEncode: function(n, o, p, q, r, s) {
			var t = JSON.stringify([this.solve(n, o, p, q, r), s]);
			return i.encode(t);
		},
		solveAndUpdateForm: function(n, o, p, q, r, s, t) {
			var u = this.solveAndEncode(n, o, p, q, r, t),
				v = document.getElementById(s);
			j.createHiddenInputs({
				qsstamp: u
			}, v);
		},
		solveAndSendRequestBack: function(n, o) {
			var p = this.solveAndEncode(o.__iterations, o.__header, o.__graphSizeShift, o.__proofSize, o.__edgePercentage, o.__blob);
			n.data.qsstamp = p;
			n.send();
		},
		solveAndCallAsyncController: function(n, o, p, q, r, s) {
			var t = this.solveAndEncode(n, o, p, q, r, s);
			new h().setURI('/qs/').setData({
				qsstamp: t
			}).send();
		},
		solve: function(n, o, p, q, r) {
			var s = [],
				t = o;
			for (var u = 0; u < n; u++) {
				s.push(m.solveOneIteration(t, p, q, r));
				t = m.hashList(s[u]);
			}
			return s;
		},
		solveOneIteration: function(n, o, p, q) {
			var r = 8192,
				s = new k(n, o),
				t = q * s.getSize() / 100,
				u = [],
				v = [],
				w = [];
			for (var x = 0; x < t; x++) {
				var y = s.sipEdge(x),
					z = y[0],
					aa = y[1];
				z += 1;
				aa += 1 + s.getHalfSize();
				var ba = u[z],
					ca = u[aa];
				if (ba == aa || ca == z) continue;
				v[0] = z;
				w[0] = aa;
				var da = m.path(ba, v, u, r),
					ea = m.path(ca, w, u, r);
				if (v[da] == w[ea]) {
					var fa = Math.min(da, ea);
					for (da -= fa, ea -= fa; v[da] != w[ea]; da++, ea++);
					var ga = da + ea + 1;
					if (ga == p) return m.recoverSolution(da, ea, v, w, s, p, t);
					continue;
				}
				if (da < ea) {
					while (da--) u[v[da + 1]] = v[da];
					u[z] = aa;
				} else {
					while (ea--) u[w[ea + 1]] = w[ea];
					u[aa] = z;
				}
			}
			return [];
		},
		path: function(n, o, p, q) {
			var r = 0;
			for (r = 0; n; n = p[n]) {
				if (++r >= q) {
					while (r-- && o[r] != n);
					if (r < 0) {
						throw "Maximum path length was exceeded";
					} else throw "Illegal cycle has occurred";
				}
				o[r] = n;
			}
			return r;
		},
		recoverSolution: function(n, o, p, q, r, s, t) {
			var u = function() {};
			u.prototype.add = function(aa) {
				this[aa] = true;
			};
			u.prototype.remove = function(aa) {
				delete this[aa];
			};
			var v = [],
				w = new u();
			w.add([p[0], q[0]]);
			while (n--) w.add([p[n + 1 & ~1], p[n | 1]]);
			while (o--) w.add([q[o | 1], q[o + 1 & ~1]]);
			var x = 0;
			for (var y = 0; y < t; y++) {
				var z = [1 + r.sipNode(y, 0), 1 + r.getHalfSize() + r.sipNode(y, 1)];
				if (z in w) {
					v[x++] = y;
					w.remove(z);
				}
			}
			return v;
		},
		hashList: function(n) {
			var o = n.join('-');
			return l(o);
		}
	};
	f.exports = m;
}, null);