/*!CK:5509582!*/ /*1439193037,*/

if (self.CavalryLogger) {
  CavalryLogger.start_js(["AWb\/8"]);
}

__d('RegistrationInterstitialCaptcha', ['CSS', 'DOM', 'Input', '$'], function a(b, c, d, e, f, g, h, i, j, k) {
  if (c.__markCompiled) c.__markCompiled();
  var l = {
    havePermission: false,
    linkContainerID: 'add_parent_link_container',
    emailFieldContainerID: 'parent_email_field_container',
    emailFieldID: 'parent_email_field',
    show: function () {
      var m = k('reg_pc'),
        n = k('reg_box'),
        o = k('reg_captcha'),
        p = k('reg_error'),
        q = k('tos_container'),
        r = k('security_check_header'),
        s = k('kid_captcha_container');
      i.setContent(k('content'), n);
      s.appendChild(o);
      m.appendChild(q);
      m.appendChild(p);
      h.hide(r);
      h.hide(k('captcha_buttons'));
      h.show(m);
    },
    toggleAddParent: function () {
      var m = k(this.linkContainerID),
        n = k(this.emailFieldContainerID);
      if (!this.havePermission) {
        h.show(m);
      } else {
        h.hide(m);
        h.hide(n);
      }
      this.havePermission = !this.havePermission;
    },
    showEmailField: function (m) {
      j.setPlaceholder(k(this.emailFieldID), m);
      h.show(k(this.emailFieldContainerID));
      h.hide(k(this.linkContainerID));
    }
  };
  f.exports = l;
}, null);