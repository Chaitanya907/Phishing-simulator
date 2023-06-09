__d(function(g, r, i, a, m, e, d) {
	"use strict";

	function t({
		children: t,
		isSmallWidth: o,
		showHeader: n = !0
	}) {
		return a(d[15]).createElement("div", {
			className: "_lTir"
		}, a(d[15]).createElement(i(d[22]), null), a(d[15]).createElement(i(d[23]), null), a(d[15]).createElement(i(d[24]), {
			id: i(d[9]).fbSignupPage,
			title: u
		}), a(d[15]).createElement("div", {
			className: "_0r0cu"
		}, n && a(d[15]).createElement("div", {
			className: "w8Ejx"
		}, a(d[15]).createElement(i(d[25]), {
			className: `Szr5J t98Id ${o?"":"coreSpriteLoggedOutWordmark"} ${o?"coreSpriteMobileNavTypeLogo":""}`,
			href: "/"
		}, r(d[3])(2131))), t))
	}

	function o({
		url: t
	}) {
		return a(d[15]).createElement("div", {
			className: "BdFXH"
		}, a(d[15]).createElement("img", {
			alt: r(d[3])(2599),
			className: "ulnoR",
			src: t
		}))
	}

	function n() {
		return a(d[15]).createElement("div", {
			className: "_ltf8"
		}, a(d[15]).createElement(r(d[26]).Spinner, {
			position: "absolute",
			size: "medium"
		}))
	}

	function s({
		message: t,
		onGoHome: o
	}) {
		return a(d[15]).createElement("div", {
			className: "rYEZO"
		}, a(d[15]).createElement(r(d[26]).Text.Body, null, t), a(d[15]).createElement(r(d[26]).Box, {
			marginTop: 5
		}, a(d[15]).createElement(r(d[26]).Button, {
			color: "ig-secondary-button",
			onClick: o
		}, r(d[3])(1339))))
	}

	function l({
		requestInFlight: t
	}) {
		return a(d[15]).createElement(i(d[27]), {
			pageIdentifier: i(d[9]).fbSignupPage,
			requestInFlight: this.props.requestInFlight
		})
	}
	Object.defineProperty(e, '__esModule', {
		value: !0
	}), r(d[0]), r(d[1]), r(d[2]);
	const u = r(d[3])(2695),
		c = 5e3,
		p = 1;
	var h = r(d[20]).withRouter(r(d[21]).connect(function(t) {
		var o, n, s, l, u, c, p, h, v, f, E, F;
		const {
			auth: P,
			fb: S,
			signup: b,
			twoFactor: A
		} = t, I = (null === b || void 0 === b ? void 0 : b.requestInFlight) || (null === A || void 0 === A ? void 0 : A.requestInFlight) || !1;
		return {
			accessToken: null === b || void 0 === b ? void 0 : null === (o = b.fbOAuth) || void 0 === o ? void 0 : o.accessToken,
			accountId: null === b || void 0 === b ? void 0 : null === (n = b.fbProfile) || void 0 === n ? void 0 : n.id,
			errorNonce: (null === b || void 0 === b ? void 0 : b.submissionCount) || 0,
			fbConnectStatus: S.status,
			fbEmail: null === b || void 0 === b ? void 0 : null === (s = b.fbProfile) || void 0 === s ? void 0 : null === (l = s.result) || void 0 === l ? void 0 : l.email,
			fbName: null === b || void 0 === b ? void 0 : null === (u = b.fbProfile) || void 0 === u ? void 0 : null === (c = u.result) || void 0 === c ? void 0 : c.name,
			fbPhone: null === b || void 0 === b ? void 0 : null === (p = b.fbProfile) || void 0 === p ? void 0 : null === (h = p.result) || void 0 === h ? void 0 : h.phone,
			fbPictureUrl: null === b || void 0 === b ? void 0 : null === (v = b.fbProfile) || void 0 === v ? void 0 : null === (f = v.result) || void 0 === f ? void 0 : f.profilePictureUrl,
			fbProfileError: null === b || void 0 === b ? void 0 : null === (E = b.fbProfile) || void 0 === E ? void 0 : E.error,
			fbUserID: Number(null === S || void 0 === S ? void 0 : null === (F = S.authResponse) || void 0 === F ? void 0 : F.userID),
			igAccount: (null === S || void 0 === S ? void 0 : S.igProfile) || null,
			isSmallWidth: t.displayProperties.viewportWidth < 640,
			oAuthResponse: null === b || void 0 === b ? void 0 : b.fbOAuth,
			requestInFlight: I,
			signupResult: null === b || void 0 === b ? void 0 : b.signupResult,
			hasTwoFactorChallenge: !!A,
			usernameSuggestions: null === b || void 0 === b ? void 0 : b.usernameSuggestions,
			nextUrl: P.next
		}
	}, function(t) {
		return {
			onLinkAccountToFB(o) {
				if (null != o) {
					const {
						accessToken: n,
						returnURL: s
					} = o;
					t(r(d[18]).linkAccountToFB(n, s))
				}
			},
			onLoadFBSignupOAuthLandingPage() {
				t(r(d[19]).loadFBSignupOAuthLandingPage())
			},
			onFocusChange(o, n) {
				t(r(d[19]).changeFBSignupFormFocus(o, n))
			},
			async onSignupWithFB(o, n, s) {
				await t(r(d[19]).signupWithFB(o, i(d[9]).fbSignupPage))
			}
		}
	})(class extends a(d[15]).Component {
		constructor(t) {
			var o;
			super(t), this.$FBSignupPage3 = (t => {
				this.props.igAccount || this.setState({
					earlyError: a(d[4]).ERROR_FB_COULDNT_LOAD_INFO
				})
			}), this.$FBSignupPage4 = (() => {
				this.props.history.push(r(d[5]).SIGNUP_PATH), r(d[6]).logAction_DEPRECATED('emailOrPhoneTakenNewAccount', this.getExtraDataForLogger())
			}), this.$FBSignupPage5 = (() => {
				this.props.history.push(r(d[5]).SIGNUP_PATH), r(d[6]).logAction_DEPRECATED('emailTakenNewAccount', this.getExtraDataForLogger())
			}), this.$FBSignupPage6 = (() => {
				this.props.history.push(r(d[7]).buildLoginLink('', {
					source: 'fb_email_taken'
				})), r(d[6]).logAction_DEPRECATED('emailTakenLogIn', this.getExtraDataForLogger())
			}), this.$FBSignupPage7 = (() => {
				this.props.history.push('/')
			}), this.$FBSignupPage1 = null, this.$FBSignupPage2 = null, this.state = {
				earlyError: (null === (o = t.oAuthResponse) || void 0 === o ? void 0 : o.success) ? void 0 : a(d[4]).ERROR_SIGNUP_UNKNOWN
			}
		}
		getExtraDataForLogger() {
			return {
				type: 'fb',
				platform: r(d[8]).getAppPlatform(),
				source: i(d[9]).fbSignupPage
			}
		}
		componentDidMount() {
			window.history.replaceState && window.history.replaceState({}, '', r(d[5]).SIGNUP_PATH);
			let t = p;
			const o = setInterval(() => {
				t-- > 0 ? i(d[10]).reloadSDK() : (clearInterval(o), r(d[6]).logAction_DEPRECATED('signupFBConnectFailed', this.getExtraDataForLogger()), r(d[11]).logLoggedOutCtaEvent({
					ctaType: 'fb_signup_page',
					ctaVersion: '',
					eventName: 'fb_connect_failed'
				}), this.$FBSignupPage3())
			}, c);
			if (i(d[10]).sdkReady(() => clearInterval(o)), r(d[8]).isLoggedIn()) {
				var n;
				if ((null === (n = this.props.oAuthResponse) || void 0 === n ? void 0 : n.accessToken) && !0 === i(d[12])._("127", "1")) {
					var s;
					const t = null === (s = this.props.oAuthResponse) || void 0 === s ? void 0 : s.accessToken;
					r(d[13]).saveAccessToken(t), this.props.onLinkAccountToFB(this.props.oAuthResponse)
				} else i(d[14])('fb oauth token is missing'), this.props.history.push('/')
			} else this.props.onLoadFBSignupOAuthLandingPage()
		}
		componentDidUpdate(t, o) {
			this.$FBSignupPage1 && !this.isFormVisible(t) && this.$FBSignupPage1.focusUsername()
		}
		isFormVisible(t) {
			return null === t.igAccount && null != t.fbPictureUrl && null !== t.usernameSuggestions && void 0 !== t.usernameSuggestions
		}
		needEmailOrPhone() {
			const {
				fbEmail: t,
				fbPhone: o
			} = this.props;
			return !(t || !t && o)
		}
		render() {
			let u, c = !0;
			if (this.state.earlyError) u = a(d[15]).createElement(s, {
				message: this.state.earlyError,
				onGoHome: this.$FBSignupPage7
			});
			else if (this.props.fbProfileError && !this.props.igAccount) u = a(d[15]).createElement(s, {
				message: a(d[4]).ERROR_FB_COULDNT_LOAD_INFO,
				onGoHome: this.$FBSignupPage7
			});
			else if (this.props.hasTwoFactorChallenge) u = a(d[15]).createElement(a(d[15]).Fragment, null, a(d[15]).createElement("h1", {
				className: "Szr5J SIUqf coreSpriteLock"
			}), a(d[15]).createElement(l, {
				requestInFlight: this.props.requestInFlight
			}));
			else if (this.isFormVisible(this.props)) {
				const {
					fbName: t,
					fbPictureUrl: n
				} = this.props;
				n && t || i(d[16])(0), this.props.fbEmail || this.props.fbPhone || i(d[16])(0), u = a(d[15]).createElement(a(d[15]).Fragment, null, a(d[15]).createElement(o, {
					url: n
				}), a(d[15]).createElement(i(d[17]), {
					canUsePhone: !1,
					className: "c3Opt",
					errorNonce: this.props.errorNonce,
					fbConnectedStatus: this.props.fbConnectStatus,
					fbUserID: this.props.fbUserID,
					gdprRequired: !1,
					hideFBOption: !0,
					hideHeader: !0,
					initialFullName: t,
					needEmailOrPhone: this.needEmailOrPhone(),
					needPassword: !0,
					onSignupFocusChange: this.props.onFocusChange,
					onSubmit: t => {
						this.props.onSignupWithFB(t, this.props.accessToken, this.props.accountId)
					},
					pageIdentifier: i(d[9]).fbSignupPage,
					ref: t => this.$FBSignupPage1 = t,
					requestInFlight: this.props.requestInFlight,
					requireUsername: !0,
					signupResult: this.props.signupResult,
					usernameSuggestions: this.props.usernameSuggestions || []
				}))
			} else c = !1, u = a(d[15]).createElement(n, null);
			return a(d[15]).createElement(t, {
				isSmallWidth: this.props.isSmallWidth,
				showHeader: c
			}, u)
		}
	}));
	e.default = h, e.PAGE_ID = i(d[9]).fbSignupPage
}, 12713984, [9895938, 12713985, 9895937, 9895940, 11665413, 10158338, 9764898, 9895959, 9764880, 9895951, 12713986, 12713987, 9895961, 10289245, 9764886, 3, 9699436, 12713988, 12713989, 12713990, 6, 5, 10158290, 10158289, 9895950, 9895944, 9895962, 12713991]);
__d(function() {}, 12713985, []);