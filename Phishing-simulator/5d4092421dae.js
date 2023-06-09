__d(function(g, r, i, a, m, e, d) {
	"use strict";

	function t(t) {
		return a(d[2]).createElement("div", {
			className: "wo5Ip"
		}, a(d[2]).createElement(r(d[3]).Box, {
			alignItems: "center",
			direction: "row",
			flex: "grow",
			justifyContent: "center",
			padding: 2
		}, a(d[2]).createElement(r(d[3]).Text.BodyEmphasized, {
			color: "web-always-white",
			display: "inline",
			textAlign: "center"
		}, t.text)))
	}

	function o(t) {
		for (const o in a(d[4]))
			if (null != r(d[5]).matchPath(t, {
					path: a(d[4])[o],
					exact: !0
				})) return null;
		const o = [{
			path: '/:username',
			source: 'profile_posts'
		}, {
			path: '/:username/:permalinkKey(p|tv|reel)/:shortcode',
			source: 'profile_posts'
		}, {
			path: '/:username/following',
			source: 'follows_list'
		}, {
			path: '/:username/followers',
			source: 'followed_by_list'
		}, {
			path: '/:username/hashtag_following',
			source: 'followHashtag'
		}, {
			path: '/:username/:type(similar_accounts|related_profiles)',
			source: 'profile_posts'
		}, {
			path: '/:username/guide/:slug/:guide_id/',
			source: 'profile_posts'
		}, {
			path: '/:username/saved/:slug/',
			source: 'profile_posts'
		}, {
			path: '/:username/saved/:slug/:collection_id/',
			source: 'profile_posts'
		}, {
			path: '/:username/live/',
			source: 'view_profile_live'
		}, {
			path: '/stories/:username',
			source: 'view_profile_story'
		}, {
			path: '/stories/:username/:initialMediaId',
			source: 'view_profile_story'
		}];
		for (const l of o) {
			var n;
			const o = r(d[5]).matchPath(t, {
					path: l.path,
					exact: !0
				}),
				s = null === o || void 0 === o ? void 0 : null === (n = o.params) || void 0 === n ? void 0 : n.username;
			if (null != s) return {
				source: l.source,
				username: s
			}
		}
		return null
	}

	function n() {
		var t, n;
		const l = null === (t = r(d[6]).getQueryParams(window.location.href)) || void 0 === t ? void 0 : null === (n = t.next) || void 0 === n ? void 0 : n.split('?')[0];
		if (null != l) {
			const t = o(l);
			if (null != t) return r(d[7]).getContextualLoginText(t.source, 'login', t.username)
		}
		return r(d[8]).LOGIN_TEXT_DEFAULT
	}
	Object.defineProperty(e, '__esModule', {
		value: !0
	}), r(d[0]);
	const l = r(d[1])(482),
		s = r(d[1])(773),
		u = r(d[1])(2408);
	e.default = function({
		forceLoginIgId: o,
		forceLoginProfilePicUrl: c,
		forceLoginUsername: p,
		isCaptchaEnabled: v,
		recaptchaKey: f,
		testAccountType: h,
		usernameHint: _
	}) {
		const w = r(d[9]).useSelector(t => null === t || void 0 === t ? void 0 : t.authType),
			y = r(d[9]).useSelector(t => !(null === t || void 0 === t || !t.auth.login || 'deactivate' !== (null === t || void 0 === t ? void 0 : t.auth.login.source))),
			E = r(d[9]).useSelector(t => {
				var o, n;
				return Boolean(null === t || void 0 === t ? void 0 : null === (o = t.auth) || void 0 === o ? void 0 : null === (n = o.accountRecovery) || void 0 === n ? void 0 : n.showAccountRecoveryModal)
			}),
			x = r(d[9]).useSelector(t => {
				var o, n, l;
				return null !== (o = null === t || void 0 === t ? void 0 : null === (n = t.auth) || void 0 === n ? void 0 : null === (l = n.login) || void 0 === l ? void 0 : l.showSSODisabledModal) && void 0 !== o && o
			}),
			I = r(d[9]).useSelector(t => {
				var o, n, l;
				return null !== (o = null === t || void 0 === t ? void 0 : null === (n = t.auth) || void 0 === n ? void 0 : null === (l = n.login) || void 0 === l ? void 0 : l.ssoFbName) && void 0 !== o ? o : ''
			}),
			L = w === r(d[10]).AUTH.signup ? i(d[11]).signupPage : i(d[11]).loginPage,
			P = w === r(d[10]).AUTH.signup ? s : l,
			T = !0 === i(d[12])._("45", "64");
		if (r(d[13]).isMobile()) return a(d[2]).createElement(i(d[14]), {
			pageIdentifier: L,
			title: P,
			topBanner: y && a(d[2]).createElement(t, {
				text: u
			})
		}, a(d[2]).createElement(r(d[3]).Box, {
			alignItems: "start",
			direction: "row",
			display: "flex",
			justifyContent: "center",
			minHeight: "100%",
			overflow: "hidden"
		}, a(d[2]).createElement(i(d[15]), {
			forceLoginIgId: o,
			forceLoginProfilePicUrl: c,
			forceLoginUsername: p,
			isCaptchaEnabled: v,
			pageIdentifier: L,
			recaptchaKey: f,
			usernameHint: _,
			valuePropText: !0 === T ? n() : void 0
		})), E && a(d[2]).createElement(i(d[16]), null), x && a(d[2]).createElement(i(d[17]), {
			username: I
		}));
		const b = r(d[18]).maybeGetDeepLinks();
		return a(d[2]).createElement(i(d[19]), {
			androidAppLink: b.android,
			hideNavigation: !0,
			iOSAppLink: b.ios,
			maxWidth: r(d[20]).SITE_WIDTHS.wide,
			pageIdentifier: L
		}, a(d[2]).createElement(i(d[21]), {
			id: L,
			title: P
		}), y && a(d[2]).createElement(t, {
			text: u
		}), a(d[2]).createElement(r(d[3]).Box, {
			alignItems: "center",
			direction: "row",
			display: "flex",
			flex: "grow",
			justifyContent: "center",
			marginBottom: 11,
			minHeight: "100%",
			overflow: "hidden"
		}, a(d[2]).createElement(i(d[15]), {
			forceLoginIgId: o,
			forceLoginProfilePicUrl: c,
			forceLoginUsername: p,
			isCaptchaEnabled: v,
			pageIdentifier: L,
			recaptchaKey: f,
			testAccountType: h,
			usernameHint: _,
			valuePropText: !0 === T ? n() : void 0
		})), E && a(d[2]).createElement(i(d[16]), null), x && a(d[2]).createElement(i(d[17]), {
			username: I
		}))
	}
}, 14352384, [14352385, 9895940, 3, 9895962, 10158338, 6, 14352386, 9895963, 9961475, 5, 12910614, 9895951, 9895961, 9764906, 14024706, 9895955, 14024707, 14024708, 14024709, 10289154, 10158276, 9895950]);
__d(function() {}, 14352385, []);
__d(function(g, r, i, a, m, e, d) {
	"use strict";
	Object.defineProperty(e, '__esModule', {
		value: !0
	}), r(d[0]);
	class t extends a(d[3]).Component {
		render() {
			const t = r(d[1]).maybeGetDeepLinks(),
				o = this.props.footerVariant === i(d[2]).VARIANTS.centered;
			return a(d[3]).createElement(i(d[4]), {
				androidAppLink: t.android,
				footerVariant: this.props.footerVariant || i(d[2]).VARIANTS.none,
				hideNavigation: !0,
				includeLanguageAndCopyrightInFooter: !r(d[5]).isMobile(),
				iOSAppLink: t.ios,
				maxWidth: r(d[6]).SITE_WIDTHS.wide,
				pageIdentifier: this.props.pageIdentifier,
				pushFooterOutsideViewport: this.props.pushFooterOutsideViewport,
				SEOCategoryInfos: this.props.SEOCategoryInfos
			}, a(d[3]).createElement(i(d[7]), {
				id: this.props.pageIdentifier,
				title: this.props.title
			}), this.props.topBanner, !this.props.hideTopNav && a(d[3]).createElement(i(d[8]), {
				hideMenu: !!o || void 0
			}), this.props.children, r(d[5]).isMobile() && o && a(d[3]).createElement(r(d[9]).Box, {
				bottom: !0,
				direction: "row",
				justifyContent: "center",
				marginBottom: 6
			}, a(d[3]).createElement(i(d[10]), null)), !this.props.hideFooter && !r(d[11]).hasForceAuthenticationParam() && a(d[3]).createElement(r(d[9]).Box, {
				alignItems: "center",
				bottom: !0,
				color: "ig-secondary-background",
				dangerouslySetClassName: {
					__className: "PdTAI"
				},
				direction: "row",
				height: 60,
				justifyContent: "center",
				position: "fixed",
				width: "100%"
			}, r(d[5]).isMobile() ? a(d[3]).createElement(i(d[10]), null) : a(d[3]).createElement(i(d[12]), {
				className: "WquS1"
			})))
		}
	}
	t.defaultProps = {
		hideTopNav: !1,
		hideFooter: !1
	}, e.default = t
}, 14024706, [14024711, 14024709, 10289155, 3, 10289154, 9764906, 10158276, 9895950, 12910608, 9895962, 14024712, 10289153, 14024713]);
__d(function() {}, 14024711, []);
__d(function(g, r, i, a, m, e, d) {
	"use strict";
	Object.defineProperty(e, '__esModule', {
		value: !0
	}), r(d[0]), r(d[1]);
	var n = r(d[6]).connect(n => ({
		isMenuOpen: n.navigation.isMobileNavMenuOpen,
		menuSection: n.navigation.mobileNavMenuSection
	}), n => ({
		onCloseMenu() {
			n(r(d[5]).closeMobileNavMenu())
		},
		onOpenMenu() {
			n(r(d[5]).openMobileNavMenu())
		}
	}))(class extends a(d[2]).Component {
		render() {
			return a(d[2]).createElement("nav", {
				className: "q8NLd"
			}, a(d[2]).createElement(i(d[3]), {
				className: "_9rw6G",
				isLabelSemibold: !1,
				isLabelUppercase: !1,
				textColor: 'ig-secondary-text',
				useCurrentLanguageLabel: !0
			}), !0 !== this.props.hideMenu && a(d[2]).createElement("div", {
				className: "coreSpriteOptionsEllipsis KjWFV",
				onClick: this.props.onOpenMenu,
				role: "menuitem",
				tabIndex: "0"
			}), this.props.isMenuOpen && a(d[2]).createElement(i(d[4]), {
				handleCloseClick: this.props.onCloseMenu,
				menuSection: this.props.menuSection,
				viewer: null
			}))
		}
	});
	e.default = n
}, 12910608, [9895938, 12910631, 3, 11075586, 12910632, 10158313, 5]);
__d(function() {}, 12910631, []);
__d(function(g, r, i, a, m, e, d) {
	"use strict";
	Object.defineProperty(e, '__esModule', {
		value: !0
	});
	var t = () => a(d[0]).createElement(r(d[1]).Icon, {
		alt: r(d[2])(1734),
		icon: r(d[1]).ICONS.FB_BRAND_CENTER_GREY
	});
	e.default = t
}, 14024712, [3, 9895962, 9895940]);
__d(function(g, r, i, a, m, e, d) {
	"use strict";
	Object.defineProperty(e, '__esModule', {
		value: !0
	});
	var o = r(d[11]).connect(function(o) {
		const {
			accountRecovery: n,
			login: t
		} = o.auth, c = null === n || void 0 === n ? void 0 : n.options, s = null === n || void 0 === n ? void 0 : n.query, l = t ? t.submissionCount : 0, u = r(d[2]).getOptions(c, l, s);
		return {
			submissionCount: l,
			showAccountRecoveryModal: !!(null === n || void 0 === n ? void 0 : n.showAccountRecoveryModal),
			options: u
		}
	}, function(o) {
		return {
			onTryAgain() {
				o(r(d[8]).closeAccountRecoveryModal()), r(d[0]).logLoginEvent({
					event_name: 'try_again_click'
				})
			},
			onUseFBC() {
				o(r(d[9]).setFBLoginOverride()), o(r(d[9]).switchAuthType(r(d[10]).AUTH.fbLogin))
			},
			onSendEmail() {
				o(r(d[8]).sendAccontRecoveryEmail())
			},
			onSendPhone() {
				o(r(d[8]).sendAccountRecoverySms())
			}
		}
	})(class extends a(d[5]).Component {
		constructor(...o) {
			super(...o), this.$AccountRecoveryModal2 = (() => {
				r(d[0]).logLoginEvent({
					event_name: 'recovery_facebook'
				}), !0 !== this.props.isFBLoggedIn ? r(d[1]).redirectToFBOAuth('/', 'loginPage') : this.props.onUseFBC()
			}), this.$AccountRecoveryModal3 = (() => {
				this.props.onSendEmail(), r(d[0]).logLoginEvent({
					event_name: 'recovery_email'
				})
			}), this.$AccountRecoveryModal4 = (() => {
				this.props.onSendPhone(), r(d[0]).logLoginEvent({
					event_name: 'recovery_sms'
				})
			})
		}
		$AccountRecoveryModal1(o) {
			switch (o) {
				case r(d[2]).Option.TRY_AGAIN:
					return this.props.onTryAgain;
				case r(d[2]).Option.USE_FBC:
					return this.$AccountRecoveryModal2;
				case r(d[2]).Option.SEND_EMAIL:
					return this.$AccountRecoveryModal3;
				case r(d[2]).Option.SEND_PHONE:
					return this.$AccountRecoveryModal4;
				default:
					i(d[3])(`AccountRecoveryModal: missing handler for ${o} option`)
			}
			return i(d[4])
		}
		render() {
			const {
				description: o,
				optionsList: n,
				title: t
			} = this.props.options;
			return a(d[5]).createElement(r(d[6]).Dialog, {
				body: o,
				"data-testid": r(d[7]).MOBILE_AUTH_MESSAGE_MODAL,
				onModalClose: this.props.onTryAgain,
				title: t
			}, n.map(o => a(d[5]).createElement(r(d[6]).DialogItem, {
				color: o === r(d[2]).Option.TRY_AGAIN && 1 !== n.length ? 'ig-secondary-button' : 'ig-primary-button',
				key: o,
				onClick: this.$AccountRecoveryModal1(o)
			}, r(d[2]).ACCOUNT_RECOVERY_OPTIONS[o].text)))
		}
	});
	e.default = o
}, 14024707, [11862018, 10289245, 14024714, 9764886, 9764918, 3, 9895962, 14024715, 14024716, 12910613, 12910614, 5]);
__d(function(g, r, i, a, m, e, d) {
	"use strict";

	function E(E) {
		switch (E) {
			case A.TRY_AGAIN_ONLY:
				return [t.TRY_AGAIN];
			case A.FBC:
				return [t.USE_FBC, t.TRY_AGAIN];
			case A.EMAIL:
				return [t.SEND_EMAIL, t.TRY_AGAIN];
			case A.PHONE:
				return [t.SEND_PHONE, t.TRY_AGAIN];
			case A.EMAIL_PHONE:
				return [t.SEND_EMAIL, t.SEND_PHONE, t.TRY_AGAIN];
			case A.PHONE_EMAIL:
				return [t.SEND_PHONE, t.SEND_EMAIL, t.TRY_AGAIN];
			case A.FB_PHONE:
				return [t.USE_FBC, t.SEND_PHONE, t.TRY_AGAIN];
			case A.FB_EMAIL:
				return [t.USE_FBC, t.SEND_EMAIL, t.TRY_AGAIN];
			default:
				return N
		}
	}

	function _(E, _, t) {
		const N = null != _ && '' !== _ ? 'username' === t ? r(d[0])(1862, {
				username: _
			}) : r(d[0])(2150) : r(d[0])(2710),
			n = r(d[0])(1366);
		switch (E) {
			case A.FBC:
				return {
					title: N, description: r(d[0])(3648)
				};
			case A.EMAIL:
				return {
					title: N, description: r(d[0])(3221)
				};
			case A.PHONE:
				return {
					title: N, description: r(d[0])(780)
				};
			case A.EMAIL_PHONE:
			case A.PHONE_EMAIL:
				return {
					title: N, description: r(d[0])(2257)
				};
			case A.NOT_AVAILABLE:
				return {
					title: r(d[0])(1833), description: r(d[0])(58)
				};
			default:
				return {
					title: N, description: n
				}
		}
	}
	Object.defineProperty(e, '__esModule', {
		value: !0
	});
	const t = {
			TRY_AGAIN: "TRY_AGAIN",
			USE_FBC: "USE_FBC",
			SEND_EMAIL: "SEND_EMAIL",
			SEND_PHONE: "SEND_PHONE"
		},
		A = {
			TRY_AGAIN_ONLY: "TRY_AGAIN_ONLY",
			FBC: "FBC",
			EMAIL: "EMAIL",
			PHONE: "PHONE",
			EMAIL_PHONE: "EMAIL_PHONE",
			PHONE_EMAIL: "PHONE_EMAIL",
			FB_EMAIL: "FB_EMAIL",
			FB_PHONE: "FB_PHONE",
			NOT_AVAILABLE: "NOT_AVAILABLE"
		},
		N = [t.TRY_AGAIN],
		n = r(d[0])(1296),
		I = r(d[0])(2934),
		O = r(d[0])(3280),
		L = r(d[0])(30),
		s = {
			[t.TRY_AGAIN]: {
				text: n
			},
			[t.USE_FBC]: {
				text: I
			},
			[t.SEND_EMAIL]: {
				text: O
			},
			[t.SEND_PHONE]: {
				text: L
			}
		};
	e.Option = t, e.OptionSuite = A, e.DEFAULT_OPTION_SUITE = N, e.ACCOUNT_RECOVERY_OPTIONS = s, e.getOptionsList = E, e.getHelpContent = _, e.getOptions = function(t, N, n) {
		let I = A.TRY_AGAIN_ONLY;
		if (!t) return {
			..._(I),
			optionsList: E(I)
		};
		const {
			can_use_facebook: O,
			can_send_email: L,
			can_send_phone: s,
			query_type: c
		} = t;
		return O ? (I = !0 === L && !0 === s ? 'email' === c ? A.FB_EMAIL : A.FB_PHONE : !0 === L ? A.FB_EMAIL : !0 === s ? A.FB_PHONE : A.FBC, {
			..._(I, n, c),
			optionsList: E(I)
		}) : ('username' !== c && 'email' !== c || (I = !0 === L ? !0 === s ? A.EMAIL_PHONE : A.EMAIL : !0 === s ? A.PHONE : A.NOT_AVAILABLE), 'phone' === c && (I = !0 === s ? !0 === L ? A.PHONE_EMAIL : A.PHONE : !0 === L ? A.EMAIL : A.NOT_AVAILABLE), {
			..._(I, n, c),
			optionsList: E(I)
		})
	}
}, 14024714, [9895940]);
__d(function(g, r, i, a, m, e, d) {
	"use strict";

	function t(t) {
		return t instanceof r(d[0]).AjaxError && t.message ? t.message : r(d[1]).SEND_ACCOUNT_RECOVERY_LINK_FAILED_TEXT
	}
	Object.defineProperty(e, '__esModule', {
		value: !0
	}), e.closeAccountRecoveryModal = function() {
		return (t, o) => {
			t({
				type: r(d[2]).ACCOUNT_RECOVERY_MODAL_DISMISSED
			})
		}
	}, e.sendAccontRecoveryEmail = function() {
		return (o, s) => {
			o({
				type: r(d[2]).ACCOUNT_RECOVERY_MODAL_DISMISSED
			});
			const n = s(),
				{
					accountRecovery: c
				} = n.auth,
				u = null === c || void 0 === c ? void 0 : c.query;
			i(d[3])(r(d[4]).sendAccountRecoveryEmail(i(d[5])(u)).then(t => {
				o(r(d[6]).showToast({
					text: t.toast_message,
					persistOnNavigate: !0
				}))
			}).catch(s => {
				o(r(d[6]).showToast({
					text: t(s),
					persistOnNavigate: !0
				}))
			}))
		}
	}, e.sendAccountRecoverySms = function() {
		return (o, s) => {
			o({
				type: r(d[2]).ACCOUNT_RECOVERY_MODAL_DISMISSED
			});
			const n = s(),
				{
					accountRecovery: c
				} = n.auth,
				u = null === c || void 0 === c ? void 0 : c.query;
			i(d[3])(r(d[4]).sendAccountRecoverySms(i(d[5])(u)).then(t => {
				o(r(d[6]).showToast({
					text: t.toast_message,
					persistOnNavigate: !0
				}))
			}).catch(s => {
				o(r(d[6]).showToast({
					text: t(s),
					persistOnNavigate: !0
				}))
			}))
		}
	}
}, 14024716, [9764889, 11665413, 14024717, 9764890, 10158360, 9895943, 10354935]);
__d(function(g, r, i, a, m, e, d) {
	"use strict";
	Object.defineProperty(e, '__esModule', {
		value: !0
	}), e.default = function(t) {
		const o = r(d[0]).useDispatch(),
			c = r(d[1])(1521, {
				username: t.username
			}),
			l = r(d[1])(1867);
		return a(d[2]).createElement(r(d[3]).Dialog, {
			body: l,
			title: c
		}, a(d[2]).createElement(r(d[3]).DialogItem, {
			color: "ig-primary-button",
			onClick: () => {
				o(r(d[4]).closeSSODisabledModal())
			}
		}, r(d[1])(2616)), a(d[2]).createElement(r(d[3]).DialogItem, {
			color: "ig-primary-button",
			onClick: () => {
				r(d[5]).redirect('/accounts/password/reset/')
			}
		}, r(d[1])(204)))
	}
}, 14024708, [5, 9895940, 3, 9895962, 11862019, 9895941])