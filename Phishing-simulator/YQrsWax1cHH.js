/*!CK:2991621725!*/ /*1449627376,*/

if (self.CavalryLogger) {
  CavalryLogger.start_js(["JGrDY"]);
}

__d('Recaptcha', ['AsyncRequest', 'Bootloader', 'CaptchaClientConfig', 'CSS', 'CurrentLocale', 'DOM', 'Event', 'Keys', 'ge', 'fbt'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
  if (c.__markCompiled) c.__markCompiled();
  var r, s = {
      tabindex: 0,
      callback: null
    },
    t = {
      en_US: 'en',
      en_GB: 'en',
      en_PI: 'en',
      nl_NL: 'nl',
      nl_BE: 'nl',
      fr_FR: 'fr',
      fr_CA: 'fr',
      de_DE: 'de',
      es_LA: 'es',
      es_ES: 'es',
      es_CL: 'es',
      es_CO: 'es',
      es_MX: 'es',
      es_VE: 'es',
      ru_RU: 'ru',
      tr_TR: 'tr'
    },
    u = false,
    v = {
      widget: null,
      timer_id: -1,
      fail_timer_id: -1,
      type: 'image',
      ajax_verify_cb: null,
      audio_only: false,
      $: function (w) {
        if (typeof w == "string") {
          return document.getElementById(w);
        } else return w;
      },
      setFocusOnLoad: function (w) {
        u = w;
      },
      create: function (w, x) {
        v.destroy();
        if (w) v.widget = v.$(w);
        v._init_options(x);
        v._call_challenge(j.recaptchaPublicKey);
      },
      destroy: function () {
        var w = v.$('recaptcha_challenge_field');
        if (w) w.parentNode.removeChild(w);
        if (v.timer_id != -1) clearInterval(v.timer_id);
        v.timer_id = -1;
        var x = v.$('recaptcha_image');
        if (x) x.innerHTML = "";
        if (v.widget) {
          v.widget.style.display = "none";
          v.widget = null;
        }
      },
      focus_response_field: function () {
        var w = v.$,
          x = w('captcha_response');
        try {
          x.focus();
        } catch (y) {}
      },
      get_challenge: function () {
        if (typeof b.RecaptchaState == "undefined") return null;
        return b.RecaptchaState.challenge;
      },
      get_response: function () {
        var w = v.$,
          x = w('captcha_response');
        if (!x) return null;
        return x.value;
      },
      ajax_verify: function (w) {
        v.ajax_verify_cb = w;
        var x = v._get_api_server() + "/ajaxverify" + "?c=" + encodeURIComponent(v.get_challenge()) + "&response=" + encodeURIComponent(v.get_response());
        v._add_script(x);
      },
      _ajax_verify_callback: function (w) {
        v.ajax_verify_cb(w);
      },
      _get_api_server: function () {
        var w = window.location.protocol,
          x;
        if (typeof b._RecaptchaOverrideApiServer != "undefined") {
          x = b._RecaptchaOverrideApiServer;
        } else x = "www.google.com";
        return w + "//" + x;
      },
      _call_challenge: function (w) {
        if (!v.audio_only) v.fail_timer_id = setTimeout(function () {
          if (v.fail_timer_id == -1) v.logAction('timeout');
          v.createCaptcha();
        }, 15000);
        var x = v._get_api_server() + "/recaptcha/api/challenge?k=" + w + "&ajax=1&xcachestop=" + Math.random();
        if (p('extra_challenge_params') != null) x += "&" + p('extra_challenge_params').value;
        v._add_script(x);
      },
      _add_script: function (w) {
        i.requestJSResource(w);
      },
      _init_options: function (w) {
        var x = s,
          y = w || {};
        for (var z in y) x[z] = y[z];
        r = x;
      },
      challenge_callback: function () {
        if (!v.audio_only) {
          clearTimeout(v.fail_timer_id);
          v._reset_timer();
        }
        if (window.addEventListener) window.addEventListener('unload', function (y) {
          v.destroy();
        }, false);
        if (v._is_ie() && window.attachEvent) window.attachEvent('onbeforeunload', function () {});
        if (navigator.userAgent.indexOf("KHTML") > 0) {
          var w = document.createElement('iframe');
          w.src = "about:blank";
          w.style.height = "0px";
          w.style.width = "0px";
          w.style.visibility = "hidden";
          w.style.border = "none";
          var x = document.createTextNode("This frame prevents back/forward cache problems in Safari.");
          w.appendChild(x);
          document.body.appendChild(w);
        }
        v._finish_widget();
        if (v.audio_only) v.switch_type('audio');
        v.logAction('shown');
      },
      _finish_widget: function () {
        var w = v.$,
          x = b.RecaptchaState,
          y = r,
          z = document.createElement("input");
        z.type = "password";
        z.setAttribute("autocomplete", "off");
        z.style.display = "none";
        z.name = "recaptcha_challenge_field";
        z.id = "recaptcha_challenge_field";
        w('captcha_response').parentNode.insertBefore(z, w('captcha_response'));
        w('captcha_response').setAttribute("autocomplete", "off");
        w('recaptcha_image').style.width = '300px';
        w('recaptcha_image').style.height = '57px';
        v.should_focus = false;
        if (!v.audio_only) {
          v._set_challenge(x.challenge, 'image');
        } else v._set_challenge(x.challenge, 'audio');
        if (y.tabindex) w('captcha_response').tabIndex = y.tabindex;
        if (v.widget) v.widget.style.display = '';
        if (y.callback) y.callback();
        w('recaptcha_loading').style.display = "none";
      },
      switch_type: function (w) {
        var x = v;
        x.type = w;
        x.$('recaptcha_type').value = w;
        x.reload(x.type == 'audio' ? 'a' : 'v');
      },
      reload: function (w) {
        var x = v,
          y = x.$,
          z = b.RecaptchaState;
        if (typeof w == "undefined") w = 'r';
        var aa = z.server + "reload?c=" + z.challenge + "&k=" + z.site + "&reason=" + w + "&type=" + x.type + "&lang=" + v.getLang();
        if (p('extra_challenge_params') != null) aa += "&" + p('extra_challenge_params').value;
        x.should_focus = w != 't';
        x._add_script(aa);
      },
      finish_reload: function (w, x) {
        b.RecaptchaState.is_incorrect = false;
        v._set_challenge(w, x);
      },
      _set_challenge: function (w, x) {
        var y = v,
          z = b.RecaptchaState,
          aa = y.$;
        z.challenge = w;
        y.type = x;
        aa('recaptcha_challenge_field').value = z.challenge;
        aa('recaptcha_challenge_field').defaultValue = z.challenge;
        aa('recaptcha_image').innerHtml = "";
        if (x == 'audio') {
          m.setContent(document.getElementById('recaptcha_image'), v.setAudioCaptchaControls());
        } else if (x == 'image') {
          var ba = z.server + 'image?c=' + z.challenge;
          aa('recaptcha_image').innerHTML = "<img style='display:block;' height='57' width='300' src='" + ba + "'/>";
        }
        v._css_toggle("recaptcha_had_incorrect_sol", "recaptcha_nothad_incorrect_sol", z.is_incorrect);
        v._css_toggle("recaptcha_is_showing_audio", "recaptcha_isnot_showing_audio", x == 'audio');
        if (y.should_focus) y.focus_response_field();
        y._reset_timer();
      },
      _reset_timer: function () {
        var w = b.RecaptchaState;
        clearInterval(v.timer_id);
        v.timer_id = setInterval(function () {
          return v.reload('t');
        }, (w.timeout - 60 * 5) * 1000);
      },
      _clear_input: function () {
        var w = v.$('captcha_response');
        w.value = "";
      },
      _displayerror: function (w) {
        var x = v.$;
        m.empty('recaptcha_image');
        x('recaptcha_image').appendChild(document.createTextNode(w));
      },
      reloaderror: function (w) {
        v._displayerror(w);
      },
      _is_ie: function () {
        return navigator.userAgent.indexOf("MSIE") > 0 && !window.opera;
      },
      _css_toggle: function (w, x, y) {
        var z = v.widget;
        if (!z) z = document.body;
        var aa = z.className;
        aa = aa.replace(new RegExp("(^|\\s+)" + w + "(\\s+|$)"), ' ');
        aa = aa.replace(new RegExp("(^|\\s+)" + x + "(\\s+|$)"), ' ');
        aa += " " + (y ? w : x);
        k.setClass(z, aa);
      },
      handlePlayPress: function (event) {
        var w = n.getKeyCode(event);
        if (w === o.RETURN || w === o.SPACE) {
          n.prevent(event);
          this.playAgain();
        }
      },
      handlePlayClick: function (event) {
        n.prevent(event);
        this.playAgain();
      },
      playAgain: function () {
        m.setContent(document.getElementById('recaptcha_audio_container'), v.getAudioCaptchaHtml());
      },
      setAudioCaptchaControls: function () {
        var w = b.RecaptchaState,
          x = w.server + 'image?c=' + w.challenge;
        if (x.indexOf('https://') == 0) x = 'http://' + x.substring(8);
        var y = m.create('div'),
          z = m.create('a', {
            href: '#',
            'class': 'recaptcha_audio_cant_hear_link recaptcha_text',
            role: 'button',
            tabindex: '0',
            onclick: this.handlePlayClick.bind(this),
            onkeyup: this.handlePlayPress.bind(this)
          }, q._("Play audio captcha")),
          aa = m.create('a', {
            'class': 'recaptcha_audio_cant_hear_link recaptcha_text',
            target: '_blank',
            href: x
          }, q._("Open the audio file in a new window")),
          ba = m.create('div', {
            id: 'recaptcha_audio_container'
          });
        if (v.checkFlashVer()) m.appendContent(y, z);
        m.appendContent(y, aa);
        m.appendContent(y, ba);
        return y;
      },
      getAudioCaptchaHtml: function () {
        var w = v,
          x = b.RecaptchaState,
          y = x.server + 'image?c=' + x.challenge;
        if (y.indexOf('https://') == 0) y = 'http://' + y.substring(8);
        var z = x.server + '/img/audiocaptcha.swf?v2',
          aa;
        if (w._is_ie()) {
          aa = m.create('object', {
            classid: 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',
            id: 'audiocaptcha',
            width: '0',
            height: '0',
            codebase: 'https://fpdownload.macromedia.com/get/flashplayer/current/' + 'swflash.cab'
          });
          var ba = [{
            name: 'movie',
            value: z
          }, {
            name: 'quality',
            value: 'high'
          }, {
            name: 'bgcolor',
            value: '869ca7'
          }, {
            name: 'allowScriptAccess',
            value: 'always'
          }];
          ba.forEach(function (ca) {
            m.appendContent(m.create('param', ca));
          });
        } else aa = m.create('embed', {
          src: z,
          url: z,
          quality: 'high',
          bgcolor: '#869ca7',
          width: '0',
          height: '0',
          name: 'audiocaptcha',
          align: 'middle',
          play: 'true',
          loop: 'false',
          allowScriptAccess: 'always',
          type: 'application/x-shockwave-flash',
          pluginspage: 'http://get.adobe.com/flashplayer'
        });
        return aa;
      },
      gethttpwavurl: function () {
        var w = b.RecaptchaState;
        if (v.type == 'audio') {
          var x = w.server + "image?c=" + w.challenge;
          if (x.indexOf("https://") == 0) x = "http://" + x.substring(8);
          return x;
        }
        return "";
      },
      checkFlashVer: function () {
        var w = navigator.appVersion.indexOf("MSIE") != -1 ? true : false,
          x = navigator.appVersion.toLowerCase().indexOf("win") != -1 ? true : false,
          y = navigator.userAgent.indexOf("Opera") != -1 ? true : false,
          z = -1;
        if (navigator.plugins != null && navigator.plugins.length > 0) {
          if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
            var aa = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "",
              ba = navigator.plugins["Shockwave Flash" + aa].description,
              ca = ba.split(" "),
              da = ca[2].split(".");
            z = da[0];
          }
        } else if (w && x && !y) try {
          var fa = new window.ActiveXObject('ShockwaveFlash.ShockwaveFlash.7'),
            ga = fa.GetVariable("$version");
          z = ga.split(" ")[1].split(",")[0];
        } catch (ea) {}
        return z >= 9;
      },
      getLang: function () {
        return t[l.get()] || 'en';
      },
      createCaptcha: function () {
        var w = {};
        if (u) w.callback = v.focus_response_field;
        setTimeout(function () {
          return v.create('captcha', w);
        }, 0);
      },
      createAudioCaptcha: function () {
        setTimeout(function () {
          v._init_options({});
          v.audio_only = true;
          v._call_challenge(j.recaptchaPublicKey);
        }, 0);
      },
      logAction: function (w) {
        new h().setURI('/ajax/captcha/recaptcha_log_actions.php').setData({
          action: w,
          ua: navigator.userAgent,
          location: window.location.href
        }).setMethod('GET').setReadOnly(true).send();
      }
    };
  f.exports = v;
  b.Recaptcha = v;
}, null);
__d('JPPhoneCaptcha', ['AsyncRequest', 'AsyncSignal', 'CSS', 'Dialog', 'DOM', 'Event', 'Parent', '$', 'cx', 'bind', 'emptyFunction', 'fbt'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) {
  if (c.__markCompiled) c.__markCompiled();

  function t(u, v, w, x, y) {
    var z = (function () {
      this._dom = o(u);
      this._hash = w;
      this._altCaptcha = y;
      var aa = n.byTag(this._dom, 'form'),
        ba = l.scry(aa, '.' + "_58me");
      ba && j.hide(ba);
      var ca = l.find(this._dom, 'img');
      ca.onerror = ca.onload = (function () {
        if (ca.width == 1 && ca.height == 1) this.showAlternateCaptcha();
      }).bind(this);
      ca.src = v;
      m.listen(l.find(this._dom, 'a.qr-skip-link'), 'click', this.showAlternateCaptcha.bind(this));
      setTimeout(this.checkStatus.bind(this), t.initialPoll);
      t._currentInstance = this;
    }).bind(this);
    if (t._overrideDelay) {
      x = false;
      delete t._overrideDelay;
    }
    if (x) {
      t._delayedCaptcha = z;
    } else z();
  }
  t.initialPoll = 5000;
  t.pollInterval = 2000;
  t.createCaptcha = function () {
    if (t._currentInstance) {
      t._currentInstance._destroyed = true;
      t._overrideDelay = true;
      delete t._currentInstance;
    }
    if (t._delayedCaptcha) {
      t._delayedCaptcha();
      delete t._delayedCaptcha;
    }
  };
  Object.assign(t.prototype, {
    checkStatus: function () {
      new h('/captcha/qr_async.php').setData({
        hash: this._hash
      }).setOption('suppressErrorHandlerWarning', true).setErrorHandler(r).setReadOnly(true).setMethod('GET').setHandler((function (u) {
        var v = u.getPayload();
        if (this._destroyed) return;
        if (v === false) {
          this.showAlternateCaptcha();
        } else if (v === true) {
          new k().setTitle(s._("You are almost there!")).setBody(s._("Please continue to the next page to finish the registration.")).setButtons(k.CLOSE).setCloseHandler(q(this, this.proceedToNux)).show();
          this._destroyed = true;
        }
      }).bind(this)).setFinallyHandler((function () {
        !this._destroyed && setTimeout(this.checkStatus.bind(this), t.pollInterval);
      }).bind(this)).send();
    },
    proceedToNux: function () {
      var u = n.byTag(this._dom, 'form'),
        v = l.scry(u, '#captcha_buttons input');
      if (v.length == 1 && v[0].onclick) {
        v[0].onclick();
      } else u.submit();
      this._destroyed = true;
    },
    showAlternateCaptcha: function () {
      t._alternateCaptchaShown = true;
      t._stupidGlobalFunction();
      l.setContent(this._dom, this._altCaptcha);
      this._destroyed = true;
      var u = n.byTag(this._dom, 'form'),
        v = l.scry(u, '.' + "_58me");
      v && j.show(v);
      new i('/captcha/qr_async.php', {
        skip: true,
        hash: this._hash
      }).send();
      return false;
    }
  });
  f.exports = t;
}, null);
__d("XRegistrationFormLoggingController", ["XController"], function a(b, c, d, e, f, g) {
  c.__markCompiled && c.__markCompiled();
  f.exports = c("XController").create("\/reg\/log\/", {
    action: {
      type: "String"
    },
    reg_instance: {
      type: "String"
    },
    category: {
      type: "Enum",
      enumType: 1
    },
    type: {
      type: "Enum",
      enumType: 1
    },
    field: {
      type: "Enum",
      enumType: 1
    }
  });
}, null);
__d('RegistrationLogger', ['AsyncSignal', 'RegistrationClientConfig', 'XRegistrationFormLoggingController'], function a(b, c, d, e, f, g, h, i, j) {
  if (c.__markCompiled) c.__markCompiled();
  var k = {
    bumpInlineValidation: function (l, m, n) {
      if (!i.logging.enabled) return;
      var o = j.getURIBuilder().setEnum('category', i.logging.categories.INLINE).setEnum('type', m).setEnum('field', l).setString('reg_instance', n).getURI();
      new h(o.toString(), {}).setHandler(this.handleResponse).send();
    },
    logFormFocus: function (l, m) {
      var n = j.getURIBuilder().setString('action', l).setString('reg_instance', m).getURI();
      new h(n.toString(), {}).setHandler(this.handleResponse).send();
    },
    handleResponse: function (l) {
      !l;
    }
  };
  f.exports = k;
}, null);
__d('RegistrationController', ['Promise', 'Animation', 'AsyncRequest', 'CSS', 'DataStore', 'DeferredCookie', 'DOM', 'Event', 'Focus', 'Form', 'HTML', 'JPPhoneCaptcha', 'Recaptcha', 'RegistrationClientConfig', 'RegistrationInterstitialCaptcha', 'RegistrationLogger', 'Style', '$', 'cx', 'ge', 'goURI', 'invariant'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca) {
  if (c.__markCompiled) c.__markCompiled();
  var da = {
    init: function (fa, ga, ha, ia, ja, ka, la, ma, na, oa, pa, qa, ra) {
      this.captchaPaneShown = false;
      this.errorField = null;
      this.hasLoggedFocus = false;
      this.focusListeners = [];
      this.regForm = fa;
      this.logFocusName = ha;
      this.responseCallback = this.handleResponse;
      this.tosContainerNode = la;
      this.regPagesMsgNode = ma;
      this.captchaButtonsNode = na;
      this.regButton = ia;
      this.captchaRegButton = ja;
      this.asyncStatus = oa;
      this.captchaAsyncStatus = pa;
      this.contactpointVariant = qa;
      this.confirmComponent = ra;
      this.initListeners(ia, ja, ka);
      this.childValidators = this.childValidators || [];
      this.shownFlyout = this.shownFlyout || null;
      this.confirmationDialog = this.confirmationDialog || null;
    },
    initListeners: function (fa, ga, ha) {
      this.focusListeners = [o.listen(this.regForm, 'click', this.logFormFocus.bind(this)), o.listen(this.regForm, 'keypress', this.logFormFocus.bind(this))];
      o.listen(fa, 'click', this.didAttemptFormSubmit.bind(this));
      o.listen(ga, 'click', this.didAttemptFormSubmit.bind(this));
      o.listen(ha, 'click', (function () {
        this.hideCaptcha();
        this.showRegistrationPane();
      }).bind(this));
      e(['FormTypeABTester'], (function (ja) {
        this.regForm.ab_tester = new ja(this.regForm);
        o.listen(fa, 'click', ea.bind(this, this.regForm));
        o.listen(ga, 'click', ea.bind(this, this.regForm));
      }).bind(this));
      if (this.contactpointVariant === 'hide') {
        var ia = this.getField(u.fields.EMAIL);
        o.listen(ia, 'focus', (function (ja) {
          k.show(this.confirmComponent);
        }).bind(this));
      }
    },
    didAttemptFormSubmit: function () {
      m.flushAllCookies();
      this.validateForm();
    },
    validateForm: function () {
      if (this.confirmationDialog) this.confirmationDialog.copyContactpointToConfirmationField();
      var fa = this.childValidators.map(function (ga) {
        return ga.runAllValidations();
      });
      h.all(fa).done((function () {
        return this.preSubmitForm();
      }).bind(this), (function () {
        for (var ga = 0; ga < this.childValidators.length; ++ga) {
          var ha = this.childValidators[ga];
          if (!ha.fieldIsValid()) return ha.focusField();
        }
        ca(0);
      }).bind(this));
    },
    preSubmitForm: function () {
      if (this.confirmationDialog) {
        this.confirmationDialog.show();
      } else this.submitForm();
    },
    submitForm: function () {
      var fa = q.serialize(this.regForm);
      if (!this.captchaPaneShown) {
        fa.ignore = 'captcha';
      } else this.disableMarketingButton(this.captchaRegButton);
      if (this.errorField && aa(this.errorField)) y(this.errorField).setAttribute('title', '');
      k.show(this.asyncStatus);
      k.show(this.captchaAsyncStatus);
      this.disableMarketingButton(this.regButton);
      new j().setURI('/ajax/register.php').setData(fa).setHandler(this.responseCallback.bind(this)).setErrorHandler(this.handleErrorResponse.bind(this)).send();
    },
    disableMarketingButton: function (fa) {
      fa.disabled = true;
      k.addClass(fa, "_67u");
    },
    enableMarketingButton: function (fa) {
      fa.disabled = false;
      k.removeClass(fa, "_67u");
    },
    handleErrorResponse: function (fa) {
      k.hide(this.asyncStatus);
      k.hide(this.captchaAsyncStatus);
      this.enableMarketingButton(this.regButton);
      this.fadeInValidationError();
    },
    handleResponse: function (fa) {
      k.hide(this.asyncStatus);
      k.hide(this.captchaAsyncStatus);
      var ga = fa.getPayload();
      if (ga.redirect) {
        k.show(this.captchaAsyncStatus);
        ba(ga.redirect, true);
      } else if (ga.field_validation_succeeded) {
        this.handleFieldValidationSucceeded(ga);
      } else if (ga.preconfirmation_cp) {
        k.show(this.asyncStatus);
        this.handlePreconfirmation(ga);
      } else {
        this.enableMarketingButton(this.regButton);
        if (ga.bad_captcha) {
          this.handleBadCaptcha(ga);
        } else if (ga.tooyoung) {
          this.handleTooYoung(ga);
        } else if (ga.tos_error) {
          this.handleTOSError(ga);
        } else if (ga.ask_to_login_instead) {
          var ha = aa('email');
          if (ha) ha.value = ga.ask_to_login_instead;
          var ia = aa('asked_to_login');
          if (ia) ia.value = 1;
        } else this.handleValidationError(ga);
      }
    },
    handleValidationError: function (fa) {
      this.showValidationError(fa.field, fa.error);
    },
    handlePreconfirmation: function (fa) {
      var ga = y('preconfform'),
        ha = y('preconfcp');
      ha.value = fa.preconfirmation_cp;
      ga.submit();
    },
    handleBadCaptcha: function (fa) {
      this.enableMarketingButton(this.captchaRegButton);
      n.setContent(y('outer_captcha_box'), fa.xhp);
      this.showCaptchaPane();
      this.showValidationError('captcha_response', fa.error);
    },
    handleFieldValidationSucceeded: function (fa) {
      this.hideValidationError();
      this.showCaptchaPane();
      if (fa.show_captcha_interstitial) v.show();
    },
    handleTooYoung: function (fa) {
      n.setContent(this.regForm, fa.xhp);
    },
    handleTOSError: function (fa) {
      this.showCaptchaPane();
      this.enableMarketingButton(this.captchaRegButton);
      this.showValidationError('captcha_response', fa.error);
    },
    showCaptchaPane: function () {
      k.hide('reg_form_box');
      var fa = y('captcha'),
        ga = l.get(fa, 'captcha-class', 'FacebookCaptcha');
      if (ga == 'ReCaptchaCaptcha') {
        t.createCaptcha();
      } else if (ga == 'JPPhoneCaptcha') s.createCaptcha();
      k.show('reg_captcha');
      k.show(this.tosContainerNode);
      k.hide(this.regPagesMsgNode);
      k.show(this.captchaButtonsNode);
      try {
        aa('captcha_response').focus();
      } catch (ha) {}
      this.captchaPaneShown = true;
    },
    hideCaptcha: function () {
      aa('reg_captcha') && k.hide('reg_captcha');
      k.hide(this.tosContainerNode);
      k.hide(this.captchaButtonsNode);
      this.hideValidationError();
      this.captchaPaneShown = false;
    },
    showValidationError: function (fa, ga) {
      k.hide(this.regPagesMsgNode);
      this.hideValidationError();
      var ha = y('reg_error_inner');
      if (!fa) fa = aa('name') ? 'name' : 'firstname';
      this.errorField = fa;
      try {
        y(fa).setAttribute('title', ga.replace(/<.+?>/g, ''));
        y(fa).focus();
      } catch (ia) {}
      n.setContent(ha, r(ga));
      this.fadeInValidationError();
    },
    fadeInValidationError: function () {
      var fa = y('reg_error');
      x.set(fa, 'opacity', 0);
      new i(fa).show().to('height', 'auto').duration(100).checkpoint().from('opacity', 0).to('opacity', 1).duration(400).go();
      p.set(fa);
    },
    hideValidationError: function () {
      if (k.shown(y('reg_error')) && x.getOpacity(y('reg_error')) > 0) k.hide(y('reg_error'));
    },
    showRegistrationPane: function () {
      k.show('reg_form_box');
      k.show(this.regPagesMsgNode);
    },
    logFormFocus: function () {
      if (this.hasLoggedFocus) return;
      var fa = this.logFocusName,
        ga = this.regForm.reg_instance && this.regForm.reg_instance.value;
      w.logFormFocus(fa, ga);
      this.hasLoggedFocus = true;
      this.focusListeners.forEach(function (ha) {
        ha.remove();
      });
      this.focusListeners = [];
    },
    getField: function (fa) {
      !this.regForm ? ca(0) : undefined;
      return this.regForm[fa];
    },
    getRegInstance: function () {
      var fa = this.getField('reg_instance');
      return fa && fa.value;
    },
    enrollChildValidator: function (fa) {
      this.childValidators = this.childValidators || [];
      this.childValidators.push(fa);
      if (fa.addListener) {
        fa.addListener('show', function (ga) {
          if (this.shownFlyout) this.shownFlyout.hide();
          ga.show();
          this.shownFlyout = ga;
        }, this);
        fa.addListener('hide', function (ga) {
          ga.hide();
        }, this);
      }
    },
    registerContactpointDialog: function (fa) {
      this.confirmationDialog = fa;
    }
  };

  function ea(fa) {
    fa.ab_test_data.value = fa.ab_tester.getData();
    return true;
  }
  f.exports = da;
}, null);
__d('ErrorContextualDialogXUITheme', ['cx'], function a(b, c, d, e, f, g, h) {
  if (c.__markCompiled) c.__markCompiled();
  var i = {
    wrapperClassName: "_572t",
    arrowDimensions: {
      offset: 12,
      length: 22
    }
  };
  f.exports = i;
}, null);
__d('RegistrationFieldValidator', ['ContextualDialog', 'CSS', 'Deferred', 'DOMQuery', 'ErrorContextualDialogXUITheme', 'Event', 'EventEmitter', 'Focus', 'LayerAutoFocus', 'LayerRefocusOnHide', 'RegistrationClientConfig', 'RegistrationController', 'RegistrationLogger', 'csx', 'cx', 'getActiveElement', 'getOrCreateDOMID', 'invariant'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y) {
  if (c.__markCompiled) c.__markCompiled();
  var z, aa;
  'use strict';
  z = babelHelpers.inherits(ba, n);
  aa = z && z.prototype;

  function ba(ca, da, ea, fa, ga, ha) {
    aa.constructor.call(this);
    this.wrapper = ca;
    this.field = da;
    this.position = ea;
    this.behavior = fa;
    this.fieldType = ga;
    this.inputs = ha;
    this.flyout = null;
    this.steps = [];
    this.stepContexts = [];
    this.stepMarkups = [];
    this.stepLoggingTypes = [];
    this.stepArgs = [];
    this.isValid = true;
    this.stepCounter = null;
    this.stepProgress = null;
    s.enrollChildValidator(this);
    this.addListener('validated', this.maybeShowPersistent, this);
    this.addListener('validated', this.maybeDismissFlyout, this);
    this.setupListenersForField();
    this.setupListenersForFeedbackIcon("._5dbc");
    this.setupListenersForFeedbackIcon("._5dbd");
  }
  ba.prototype.setupListenersForField = function () {
    m.listen(this.field, 'focus', this.dismissPersistent.bind(this));
    m.listen(this.field, 'focus', this.maybeShowFlyout.bind(this));
    m.listen(this.field, 'blur', this.dismissFlyout.bind(this));
    switch (this.behavior) {
    case 'follow':
      m.listen(this.field, 'blur', this.validateField.bind(this, 0, []));
      break;
    case 'follow-except-empty':
      m.listen(this.field, 'blur', this.validateField.bind(this, 0, [r.logging.types.IS_EMPTY]));
      break;
    case 'follow-none':
      break;
    default:
      y(0);
      break;
    }
  };
  ba.prototype.setupListenersForFeedbackIcon = function (ca) {
    var da = k.scry(this.wrapper, ca);
    for (var ea = 0; ea < da.length; ea++) m.listen(da[ea], 'click', this.focusField.bind(this));
  };
  ba.prototype.getField = function () {
    return this.field;
  };
  ba.prototype.getFieldName = function () {
    return this.field.name;
  };
  ba.prototype.getFlyoutContext = function () {
    return this.field;
  };
  ba.prototype.addValidationStep = function (ca, da, ea, fa) {
    this.stepMarkups.push(da);
    this.stepLoggingTypes.push(ca);
    this.steps.push(ea);
    this.stepContexts.push(fa);
    this.stepArgs.push(Array.prototype.slice.call(arguments, 4));
  };
  ba.prototype.validateField = function (ca, da) {
    if (this.stepCounter === null && ca === 0) {
      !(this.stepProgress === null) ? y(0): undefined;
      this.stepCounter = 0;
      this.stepProgress = new j();
    } else if (this.stepCounter !== null && this.stepCounter + 1 === ca) {
      this.stepCounter = ca;
    } else return;
    !(0 <= this.stepCounter) ? y(0): undefined;
    !(this.stepCounter <= this.steps.length) ? y(0): undefined;
    !(this.stepProgress !== null) ? y(0): undefined;
    if (this.stepCounter < this.steps.length) {
      ca = this.stepCounter;
      if (da.indexOf(this.stepLoggingTypes[ca]) >= 0) {
        this.validateField(ca + 1, da);
      } else {
        var ea = this.steps[ca].apply(this.stepContexts[ca], [this.getField()].concat(this.stepArgs[ca]));
        ea.done((function () {
          return this.validateField(ca + 1, da);
        }).bind(this), (function () {
          return this.$RegistrationFieldValidator1();
        }).bind(this));
      }
    } else {
      this.isValid = true;
      this.emit('validated', true);
      this.stepProgress.resolve();
      this.stepCounter = null;
      this.stepProgress = null;
    }
  };
  ba.prototype.$RegistrationFieldValidator1 = function () {
    this.isValid = false;
    var ca = this.stepMarkups[this.stepCounter].cloneNode(true),
      da = this.stepLoggingTypes[this.stepCounter];
    if (!this.flyout) {
      this.flyout = new h({
        context: this.getFlyoutContext(),
        position: this.position,
        theme: l
      }, ca).disableBehavior(p).disableBehavior(q);
    } else this.flyout.setInnerContent(ca);
    this.stepCounter = null;
    this.emit('validated', false);
    this.stepProgress.reject();
    this.stepProgress = null;
    var ea = s.getRegInstance();
    t.bumpInlineValidation(this.getFieldName(), da, ea);
    this.field.setAttribute('aria-describedby', x(ca));
  };
  ba.prototype.runAllValidations = function () {
    this.validateField(0, []);
    return this.stepProgress.getPromise();
  };
  ba.prototype.isFocused = function () {
    return w() === this.field;
  };
  ba.prototype.focusField = function () {
    o.set(this.field);
  };
  ba.prototype.fieldIsValid = function () {
    return this.isValid;
  };
  ba.prototype.maybeShowFlyout = function () {
    if (this.isFocused() && !this.isValid) {
      !this.flyout ? y(0) : undefined;
      this.emit('show', this.flyout);
      this.field.setAttribute('aria-invalid', 'true');
    }
  };
  ba.prototype.maybeShowPersistent = function () {
    i.conditionClass(this.wrapper, "_5634", !this.isFocused() && !this.isValid);
  };
  ba.prototype.dismissPersistent = function () {
    i.removeClass(this.wrapper, "_5634");
  };
  ba.prototype.dismissFlyout = function () {
    if (this.flyout) this.emit('hide', this.flyout);
  };
  ba.prototype.maybeDismissFlyout = function () {
    if (this.isValid) {
      this.dismissFlyout();
      this.field.removeAttribute('aria-invalid');
      this.field.removeAttribute('aria-describedby');
    }
  };
  f.exports = ba;
}, null);
__d('RegistrationMultipleInputValidator', ['DataStore', 'DOM', 'Event', 'Focus', 'RegistrationClientConfig', 'RegistrationFieldValidator', 'getActiveElement', 'invariant'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
  if (c.__markCompiled) c.__markCompiled();
  var p, q;
  'use strict';
  p = babelHelpers.inherits(r, m);
  q = p && p.prototype;

  function r(s, t, u, v, w, x) {
    var y;
    switch (w) {
    case l.validators.types.SELECTORS:
      y = 'select';
      break;
    case l.validators.types.RADIO:
      y = 'input[type="radio"]';
      break;
    default:
      o(0);
    }
    var z = [],
      aa = i.scry(t, y);
    z.push.apply(z, aa);
    !(z.length === x) ? o(0): undefined;
    q.constructor.call(this, s, t, u, v, w, z);
  }
  r.prototype.setupListenersForField = function () {
    !(this.inputs != null) ? o(0): undefined;
    this.inputs.forEach(function (s) {
      j.listen(s, 'focus', this.dismissPersistent.bind(this));
      j.listen(s, 'focus', this.maybeShowFlyout.bind(this));
      if (this.fieldType === l.validators.types.RADIO) {
        j.listen(s, 'click', (function () {
          if (!this.isFocused()) this.emit('fieldblur');
        }).bind(this));
      } else j.listen(s, 'blur', (function () {
        setTimeout((function t() {
          if (!this.isFocused()) this.emit('fieldblur');
        }).bind(this), 0);
      }).bind(this));
    }, this);
    this.addListener('fieldblur', this.dismissFlyout, this);
    switch (this.behavior) {
    case 'follow':
      this.addListener('fieldblur', this.validateField.bind(this, 0, []));
      break;
    case 'follow-except-empty':
      this.addListener('fieldblur', this.validateField.bind(this, 0, [l.logging.types.IS_EMPTY]));
      break;
    case 'follow-none':
      break;
    default:
      o(0);
      break;
    }
  };
  r.prototype.getField = function () {
    return this.inputs;
  };
  r.prototype.getFieldName = function () {
    return h.get(this.field, 'name');
  };
  r.prototype.getFlyoutContext = function () {
    return this.inputs[0];
  };
  r.prototype.isFocused = function () {
    var s = n();
    for (var t = 0; t < this.inputs.length; t++)
      if (this.inputs[t] === s) return true;
    return false;
  };
  r.prototype.focusField = function () {
    k.set(this.inputs[0]);
  };
  f.exports = r;
}, null);
__d("XRegistrationValidateController", ["XController"], function a(b, c, d, e, f, g) {
  c.__markCompiled && c.__markCompiled();
  f.exports = c("XController").create("\/ajax\/registration\/validation\/{type}\/", {
    type: {
      type: "Enum",
      required: true,
      enumType: 1
    },
    contactpoint: {
      type: "String"
    }
  });
}, null);
__d('RegistrationInlineValidations', ['Promise', 'AsyncRequest', 'DataStore', 'RegistrationClientConfig', 'RegistrationController', 'RegistrationFieldValidator', 'RegistrationMultipleInputValidator', 'XRegistrationValidateController', 'invariant'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
  'use strict';
  if (c.__markCompiled) c.__markCompiled();

  function q(da) {
    return new h(function (ea, fa) {
      if (!da.value || /^\s*$/.exec(da.value)) {
        fa();
      } else ea();
    });
  }

  function r(da) {
    return new h(function (ea, fa) {
      for (var ga = 0; ga < da.length; ga++)
        if (!da[ga].value || da[ga].value === '0') {
          fa();
          return;
        } ea();
    });
  }

  function s(da) {
    return new h(function (ea, fa) {
      for (var ga = 0; ga < da.length; ga++)
        if (da[ga].checked) {
          ea();
          return;
        } fa();
    });
  }
  var t = /@|\d/;

  function u(da) {
    return new h(function (ea, fa) {
      function ga(ja) {
        var ka = ja.getPayload();
        if (ka.valid === true) {
          ea();
        } else fa();
      }

      function ha(ja) {
        ea();
      }
      if (!t.exec(da.value)) {
        fa();
      } else {
        var ia = o.getURIBuilder().setEnum('type', k.logging.types.CONTACTPOINT_INVALID).setString('contactpoint', da.value).getURI();
        new i().setURI(ia).setMethod('GET').setReadOnly(true).setHandler(ga).setErrorHandler(ha).send();
      }
    });
  }

  function v(da, ea) {
    return new h(function (fa, ga) {
      var ha = l.getField(ea);
      if (ha.value === da.value) {
        fa();
      } else ga();
    });
  }

  function w(da) {
    var ea = k.logging.types.IS_EMPTY,
      fa = k.messages.INCORRECT_NAME;
    da.addValidationStep(ea, fa, q);
  }

  function x(da) {
    var ea = k.logging.types.IS_EMPTY,
      fa = k.messages.INCORRECT_CONTACTPOINT;
    da.addValidationStep(ea, fa, q);
    ea = k.logging.types.CONTACTPOINT_INVALID;
    fa = k.messages.INVALID_CONTACTPOINT;
    da.addValidationStep(ea, fa, u);
  }

  function y(da) {
    var ea = k.logging.types.IS_EMPTY,
      fa = k.messages.INCORRECT_CONTACTPOINT_CONF;
    da.addValidationStep(ea, fa, q);
    ea = k.logging.types.CONTACTPOINT_MATCH;
    fa = k.messages.CONTACTPOINT_RETYPE_DIFFERENT;
    var ga = k.fields.EMAIL;
    da.addValidationStep(ea, fa, v, null, ga);
  }

  function z(da) {
    var ea = k.logging.types.IS_EMPTY,
      fa = k.messages.PASSWORD_BLANK;
    da.addValidationStep(ea, fa, q);
  }

  function aa(da) {
    var ea = k.logging.types.IS_EMPTY,
      fa = k.messages.INCOMPLETE_BIRTHDAY;
    da.addValidationStep(ea, fa, r);
  }

  function ba(da) {
    var ea = k.logging.types.IS_EMPTY,
      fa = k.messages.NO_GENDER;
    da.addValidationStep(ea, fa, s);
  }

  function ca(da, ea, fa, ga) {
    var ha = null,
      ia = j.get(ea, 'type');
    switch (ia) {
    case k.validators.types.TEXT:
      ha = new m(da, ea, fa, ga);
      break;
    case k.validators.types.SELECTORS:
      var ja = 3;
      ha = new n(da, ea, fa, ga, ia, ja);
      break;
    case k.validators.types.RADIO:
      var ka = 2;
      ha = new n(da, ea, fa, ga, ia, ka);
      break;
    default:
      p(0);
    }
    switch (ha.getFieldName()) {
    case k.fields.FIRSTNAME:
    case k.fields.LASTNAME:
      w(ha);
      break;
    case k.fields.EMAIL:
      x(ha);
      break;
    case k.fields.EMAIL_CONFIRMATION:
      y(ha);
      break;
    case k.fields.PASSWORD:
      z(ha);
      break;
    case k.fields.BIRTHDAY_WRAPPER:
      aa(ha);
      break;
    case k.fields.GENDER_WRAPPER:
      ba(ha);
      break;
    default:
      p(0);
    }
  }
  f.exports = f.exports || {};
  f.exports.register = ca;
}, null);
__d('useragentcm', ['Bootloader', 'UACMConfig', 'ge'], function a(b, c, d, e, f, g, h, i, j) {
  if (c.__markCompiled) c.__markCompiled();

  function k() {
    var l = false,
      m = {
        ffid: typeof i.ffid == "undefined" ? 0 : i.ffid,
        ffid1: typeof i.ffid1 == "undefined" ? 0 : i.ffid1,
        ffid2: typeof i.ffid2 == "undefined" ? 0 : i.ffid2,
        ffid3: typeof i.ffid3 == "undefined" ? 0 : i.ffid3,
        ffid4: typeof i.ffid4 == "undefined" ? 0 : i.ffid4,
        ffver: typeof i.ffver == "undefined" ? 0 : i.ffver
      };
    m.qp = document.location;
    var n = j('login_form');
    if (n && n.action) m.qm = n.action;
    var o = '\x66\x61\x63\x65\x62\x6f\x6f\x6b',
      p = new RegExp('(^|\\.)' + o + '\\.com$', 'i').test(document.location.hostname);
    if (!p) {
      l = true;
    } else if (m.qm) {
      var q = m.qm.split('?')[0].split('#')[0],
        r = 65535;
      for (var s = 0; s < q.length; s++) {
        var t = (r >> 8 ^ q.charCodeAt(s)) & 255;
        t ^= t >> 4;
        r = (r << 8 ^ t << 12 ^ t << 5 ^ t) & 65535;
      }
      if (i.ffver && i.ffver != r) l = true;
    }
    if (l) {
      var u = document.location.protocol + '//www.' + o + '.com/ajax/ua_callback.php';
      if (document.referrer) m.qr1 = document.referrer;
      h.loadModules(["AsyncSignal"], function (v) {
        new v(u, m).send();
      });
    }
  }
  f.exports = k;
}, null);
__d('legacy:si-countermeasures', ['useragentcm'], function a(b, c, d, e) {
  if (c.__markCompiled) c.__markCompiled();
  b.useragentcm = c('useragentcm');
}, 3);