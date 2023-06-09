/*!CK:2979162428!*/ /*1449831414,*/

if (self.CavalryLogger) {
  CavalryLogger.start_js(["7FuKs"]);
}

__d("ChatPerfEvent", [], function a(b, c, d, e, f, g) {
  c.__markCompiled && c.__markCompiled();
  f.exports = {
    ASYNC_REQUEST: "async_request",
    SIDEBAR_FROM_CLIENT_TTI: "sidebar_from_client_tti",
    SIDEBAR_FROM_SERVER_TTI: "sidebar_from_server_tti",
    TTI: "tti",
    CHAT_CONVERSATION_TTI: "chat_conversation_tti"
  };
}, null);
__d("SocialGoodCharityActionsLoggerEvents", [], function a(b, c, d, e, f, g) {
  c.__markCompiled && c.__markCompiled();
  f.exports = {
    INITIALIZATION_BEGIN: "initialization_begin",
    INITIALIZATION: "initialization",
    PREPARE_PAYMENT_METHOD: "prepare_payment_method",
    PUX_METHOD: "pux_method",
    NUX_METHOD: "nux_method",
    FRAUD_CHECK_BEGIN: "fraud_check_begin",
    FRAUD_CHECK: "fraud_check",
    CHARGE_CREDENTIAL: "charge_credential",
    COMPLETE_DONATE: "complete_donate",
    FUNDRAISER_PAGE_SHARE_IMPRESSION: "fundraiser_page_share_impression",
    CHANGE_DONATION_AMOUNT: "change_donation_amount",
    CHOOSE_PAYMENT_METHOD: "choose_payment_method",
    CLICK_ADD_PAYMENT_METHOD: "click_add_payment_method",
    ADD_PAYMENT_METHOD: "add_payment_method",
    DONATE_CLICK: "donate_click",
    DONATE_CANCEL: "donate_cancel",
    LEARN_MORE_CLICK: "learn_more_click",
    INVITE_CLICK: "invite_click",
    INVITE_COMPLETE: "invite_complete",
    SHARE_CLICK: "share_click",
    SHARE_CLICK_CANCEL: "share_click_cancel",
    SHARE_COMPLETE: "share_complete",
    JOIN_CLICK: "join_click",
    JOIN_COMPLETE: "join_complete",
    LEAVE_CLICK: "leave_click",
    LEAVE_COMPLETE: "leave_complete",
    UNFOLLOW_CLICK: "unfollow_click",
    UNFOLLOW_COMPLETE: "unfollow_complete",
    FOLLOW_CLICK: "follow_click",
    FOLLOW_COMPLETE: "follow_complete",
    VIEW_FUNDRAISER: "view_fundraiser"
  };
}, null);
__d("SocialGoodCharityActionsLoggerParentEvents", [], function a(b, c, d, e, f, g) {
  c.__markCompiled && c.__markCompiled();
  f.exports = {
    DONATE: "donate",
    INTERACT: "interact",
    CREATE: "create"
  };
}, null);
__d("UFILikeWebDriverIDs", [], function a(b, c, d, e, f, g) {
  c.__markCompiled && c.__markCompiled();
  f.exports = {
    LIKE_LINK: "fb-ufi-likelink",
    UNLIKE_LINK: "fb-ufi-unlikelink"
  };
}, null);
__d('AppUserRoleConstants.brands', [], function a(b, c, d, e, f, g) {
  if (c.__markCompiled) c.__markCompiled();
  var h = {
    ADMIN: 'ADMIN',
    MANAGER: 'MANAGER',
    EMPLOYEE: 'EMPLOYEE',
    NO_PERMISSION: 'NO_PERMISSION'
  };
  f.exports = h;
}, null);
__d("ChannelClientID", [], function a(b, c, d, e, f, g) {
  if (c.__markCompiled) c.__markCompiled();
  var h = (Math.random() * 2147483648 | 0).toString(16),
    i = {
      getID: function () {
        return h;
      }
    };
  f.exports = i;
}, null);
__d('UFIRootRegistry', [], function a(b, c, d, e, f, g) {
  if (c.__markCompiled) c.__markCompiled();
  var h = {},
    i = [],
    j = {
      registerController: function (k, l) {
        h[k] = l;
      },
      registerSnowliftNode: function (k) {
        i.push(k.root.id);
      },
      isSnowliftNode: function (k) {
        return i.indexOf(k) >= 0;
      },
      cleanupSnowliftNodes: function () {
        i.forEach(function (k) {
          return h[k] && h[k]();
        });
        h = {};
        i = [];
      }
    };
  f.exports = j;
}, null);
__d('UFICentralUpdates', ['Arbiter', 'BanzaiLogger', 'BanzaiODS', 'ChannelConstants', 'LiveTimer', 'ShortProfiles', 'UFIConstants', 'fbt'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
  if (c.__markCompiled) c.__markCompiled();
  j.setEntitySample('feedback', .0001);
  var p = 0,
    q = {},
    r = {},
    s = {},
    t = {},
    u = [];

  function v() {
    if (!p) {
      var z = s,
        aa = q,
        ba = r,
        ca = t;
      s = {};
      q = {};
      r = {};
      t = {};
      if (Object.keys(z).length) x('feedback-id-changed', z);
      if (Object.keys(aa).length) x('feedback-updated', aa);
      if (Object.keys(ba).length) x('comments-updated', ba);
      if (Object.keys(ca).length) x('instance-updated', ca);
      u.pop();
    }
  }

  function w() {
    if (u.length) {
      return u[u.length - 1];
    } else return n.UFIPayloadSourceType.UNKNOWN;
  }

  function x(event, z) {
    y.inform(event, {
      updates: z,
      payloadSource: w()
    });
  }
  var y = Object.assign(new h(), {
    handleUpdate: function (z, aa) {
      if (Object.keys(aa).length) this.synchronizeInforms((function () {
        u.push(z);
        var ba = babelHelpers._extends({
          payloadsource: w()
        }, aa);
        this.inform('update-feedback', ba);
        this.inform('update-comment-lists', ba);
        this.inform('update-comments', ba);
        this.inform('update-actions', ba);
        (aa.profiles || []).forEach(function (ca) {
          m.set(ca.id, ca);
        });
        if (aa.servertime) l.restart(aa.servertime);
      }).bind(this));
    },
    didUpdateFeedback: function (z) {
      q[z] = true;
      v();
    },
    didUpdateComment: function (z) {
      r[z] = true;
      v();
    },
    didUpdateFeedbackID: function (z, aa) {
      s[z] = aa;
      v();
    },
    didUpdateInstanceState: function (z, aa) {
      if (!t[z]) t[z] = {};
      t[z][aa] = true;
      v();
    },
    synchronizeInforms: function (z) {
      p++;
      try {
        z();
      } catch (aa) {
        throw aa;
      } finally {
        p--;
        v();
      }
    }
  });
  f.exports = y;
}, null);
__d('ClientIDs', ['randomInt'], function a(b, c, d, e, f, g, h) {
  if (c.__markCompiled) c.__markCompiled();
  var i = {},
    j = {
      getNewClientID: function () {
        var k = Date.now(),
          l = k + ':' + (h(0, 4294967295) + 1);
        i[l] = true;
        return l;
      },
      isExistingClientID: function (k) {
        return !!i[k];
      }
    };
  f.exports = j;
}, null);
__d('LiveWWWFeedbackTypedLogger', ['Banzai', 'GeneratedLoggerUtils', 'nullthrows'], function a(b, c, d, e, f, g, h, i, j) {
  'use strict';
  if (c.__markCompiled) c.__markCompiled();

  function k() {
    this.clear();
  }
  k.prototype.log = function () {
    i.log('logger:LiveWWWFeedbackLoggerConfig', this.$LiveWWWFeedbackTypedLogger1, h.BASIC);
  };
  k.prototype.logVital = function () {
    i.log('logger:LiveWWWFeedbackLoggerConfig', this.$LiveWWWFeedbackTypedLogger1, h.VITAL);
  };
  k.prototype.clear = function () {
    this.$LiveWWWFeedbackTypedLogger1 = {};
    return this;
  };
  k.prototype.updateData = function (m) {
    this.$LiveWWWFeedbackTypedLogger1 = babelHelpers._extends({}, this.$LiveWWWFeedbackTypedLogger1, m);
    return this;
  };
  k.prototype.setCommentID = function (m) {
    this.$LiveWWWFeedbackTypedLogger1.comment_id = m;
    return this;
  };
  k.prototype.setEvent = function (m) {
    this.$LiveWWWFeedbackTypedLogger1.event = m;
    return this;
  };
  k.prototype.setIsMSite = function (m) {
    this.$LiveWWWFeedbackTypedLogger1.is_m_site = m;
    return this;
  };
  k.prototype.setMechanism = function (m) {
    this.$LiveWWWFeedbackTypedLogger1.mechanism = m;
    return this;
  };
  k.prototype.setOriginatedLocally = function (m) {
    this.$LiveWWWFeedbackTypedLogger1.originated_locally = m;
    return this;
  };
  k.prototype.setRecipientID = function (m) {
    this.$LiveWWWFeedbackTypedLogger1.recipient_id = m;
    return this;
  };
  k.prototype.setTimeSinceSub = function (m) {
    this.$LiveWWWFeedbackTypedLogger1.time_since_sub = m;
    return this;
  };
  k.prototype.setUpdateType = function (m) {
    this.$LiveWWWFeedbackTypedLogger1.update_type = m;
    return this;
  };
  k.prototype.setVC = function (m) {
    this.$LiveWWWFeedbackTypedLogger1.vc = m;
    return this;
  };
  var l = {
    comment_id: true,
    event: true,
    is_m_site: true,
    mechanism: true,
    originated_locally: true,
    recipient_id: true,
    time_since_sub: true,
    update_type: true,
    vc: true
  };
  f.exports = k;
}, null);
__d('UFIFeedbackTargets', ['ClientIDs', 'KeyedCallbackManager', 'LiveWWWFeedbackTypedLogger', 'UFICentralUpdates', 'UFIConstants'], function a(b, c, d, e, f, g, h, i, j, k, l) {
  if (c.__markCompiled) c.__markCompiled();
  var m = new i();

  function n(y) {
    var z = {};
    y.forEach(function (aa) {
      var ba = babelHelpers._extends({}, aa);
      delete ba.commentlist;
      delete ba.commentcount;
      z[aa.entidentifier] = ba;
      k.didUpdateFeedback(aa.entidentifier);
    });
    m.addResourcesAndExecute(z);
  }

  function o(y, z) {
    for (var aa = 0; aa < y.length; aa++) {
      var ba = y[aa];
      switch (ba.actiontype) {
      case l.UFIActionType.LIKE_ACTION:
        q(ba, z);
        break;
      case l.UFIActionType.TOGGLE_PIN:
        r(ba);
        break;
      case l.UFIActionType.SUBSCRIBE_ACTION:
        s(ba);
        break;
      case l.UFIActionType.DISABLE_COMMENTS:
        t(ba);
        break;
      case l.UFIActionType.REACTION:
        u(ba);
        break;
      }
    }
  }

  function p(y) {
    for (var z = 0; z < y.length; z++) {
      var aa = y[z];
      if (aa.orig_ftentidentifier) w(aa.orig_ftentidentifier, aa.ftentidentifier);
    }
  }

  function q(y, z) {
    var aa = v(y);
    if (aa) {
      var ba = y.clientid && h.isExistingClientID(y.clientid);
      if (z === l.UFIPayloadSourceType.LIVE_SEND) new j().setEvent('update_view').setUpdateType('like').setOriginatedLocally(ba).log();
      y.hasviewerliked = !!y.hasviewerliked;
      if (ba && y.hasviewerliked != aa.hasviewerliked) return;
      aa.likecount = y.likecount || 0;
      aa.likesentences = y.likesentences;
      if (y.actorid == aa.actorforpost) {
        aa.hasviewerliked = y.hasviewerliked;
      } else if (y.hasviewerliked != aa.hasviewerliked) {
        aa.likesentences = {
          current: y.likesentences.alternate,
          alternate: y.likesentences.current
        };
        if (aa.hasviewerliked) {
          aa.likecount++;
        } else aa.likecount--;
      }
      if (y.actorid != aa.actorforpost) aa.likesentences.isunseen = true;
      n([aa]);
    }
  }

  function r(y) {
    var z = v(y),
      aa = y.newcommenttoken,
      ba = y.newpinstate;
    if (ba === 'PIN') {
      z.pinnedcommenttoken = aa;
    } else if (aa === z.pinnedcommenttoken) z.pinnedcommenttoken = null;
    n([z]);
  }

  function s(y) {
    var z = v(y);
    if (z) {
      y.hasviewersubscribed = !!y.hasviewersubscribed;
      if (y.clientid && h.isExistingClientID(y.clientid) && y.hasviewersubscribed != z.hasviewersubscribed) return;
      if (y.actorid == z.actorforpost) z.hasviewersubscribed = y.hasviewersubscribed;
      n([z]);
    }
  }

  function t(y) {
    var z = v(y);
    if (z) {
      z.cancomment = !!y.cancomment;
      z.arecommentsdisabled = !!y.arecommentsdisabled;
      z.commentdisablednotice = y.commentdisablednotice;
      n([z]);
    }
  }

  function u(y) {
    var z = v(y);
    if (z) {
      if (y.clientid && h.isExistingClientID(y.clientid) && y.viewerreaction !== z.viewerreaction) return;
      if (z.actorforpost == y.actorid || z.viewerreaction == y.viewerreaction) {
        z.importantreactorids = y.importantreactorids;
        z.reactioncount = y.reactioncount;
        z.reactioncountmap = y.reactioncountmap;
        z.reactioncountreduced = y.reactioncountreduced;
        z.reactionsentences = y.reactionsentences;
        z.reactorids = y.reactorids;
        z.userreactions = y.userreactions;
        z.viewerreaction = y.viewerreaction;
      }
      n([z]);
    }
  }

  function v(y) {
    if (y.orig_entidentifier) w(y.orig_entidentifier, y.entidentifier);
    return m.getResource(y.entidentifier);
  }

  function w(y, z) {
    var aa = m.getResource(y);
    if (aa) {
      m.setResource(y, null);
      aa.entidentifier = z;
      m.setResource(z, aa);
      k.didUpdateFeedbackID(y, z);
    }
  }
  var x = {
    getFeedbackTarget: function (y, z) {
      var aa = m.executeOrEnqueue(y, z),
        ba = m.getUnavailableResources(aa);
      ba.length;
      return aa;
    },
    getFeedbackTargetIfExists: function (y) {
      return m.getResource(y) || null;
    },
    getActorIDForFeedbackTargetIfExists: function (y) {
      var z = m.getResource(y);
      return z ? z.actorforpost : null;
    },
    handleNFB: function (y, z) {
      var aa = m.getResource(y);
      if (aa) {
        aa.nfbcount = z || 0;
        n([aa]);
      }
    },
    unsubscribe: function (y) {
      m.unsubscribe(y);
    }
  };
  k.subscribe('update-feedback', function (y, z) {
    var aa = z.feedbacktargets;
    if (aa && aa.length) n(aa);
  });
  k.subscribe('update-actions', function (y, z) {
    if (z.actions && z.actions.length) o(z.actions, z.payloadsource);
  });
  k.subscribe('update-comments', function (y, z) {
    if (z.comments && z.comments.length) p(z.comments);
  });
  f.exports = x;
}, 6);
__d('Tooltip.react', ['React', 'TooltipMixin'], function a(b, c, d, e, f, g, h, i) {
  if (c.__markCompiled) c.__markCompiled();
  var j = h.PropTypes,
    k = h.createClass({
      displayName: 'Tooltip',
      propTypes: {
        display: j.oneOf(['inline', 'block'])
      },
      getDefaultProps: function () {
        return {
          display: 'inline'
        };
      },
      mixins: [i],
      render: function () {
        if (this.props.display === 'block') return (h.createElement('div', this.props, this.props.children));
        return h.createElement('span', this.props, this.props.children);
      }
    });
  f.exports = k;
}, null);
__d('UFIActorIconContainer.react', ['React', 'ShortProfiles', 'UFIActorIcon.react', 'UFIBusinessActorIcon.react', 'XUISpinner.react', 'cx', 'joinClasses'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n) {
  if (c.__markCompiled) c.__markCompiled();
  var o = h.PropTypes,
    p = h.createElement(l, {
      size: 'large'
    }),
    q = h.createClass({
      displayName: 'UFIActorIconContainer',
      propTypes: {
        actorID: o.string.isRequired,
        className: o.string
      },
      getInitialState: function () {
        return {
          actor: null
        };
      },
      componentWillMount: function () {
        this._fetchActorData();
      },
      componentDidUpdate: function (r) {
        if (this.props.actorID !== r.actorID) this._fetchActorData();
      },
      _fetchActorData: function () {
        i.get(this.props.actorID, (function (r) {
          return this.setState({
            actor: r
          });
        }).bind(this));
      },
      render: function () {
        var r = this.state.actor;
        if (!r) return p;
        var s = n("img UFIActorImage _54ru", this.props.className);
        return (r.isBusinessPersona ? h.createElement(k, {
          classNames: s,
          firstName: r.firstName,
          lastName: r.lastName,
          textClassNames: "UFIBusinessActorIconText"
        }) : h.createElement(j, {
          alt: r.name,
          className: s,
          src: r.thumbSrc
        }));
      }
    });
  f.exports = q;
}, null);
__d('UFICommentLink.react', ['React', 'TrackingNodes', 'cx', 'emptyFunction', 'fbt', 'ix'], function a(b, c, d, e, f, g, h, i, j, k, l, m) {
  if (c.__markCompiled) c.__markCompiled();
  var n = h.PropTypes,
    o = h.createClass({
      displayName: 'UFICommentLink',
      propTypes: {
        onClick: n.func,
        href: n.string,
        ajaxify: n.string,
        rel: n.string
      },
      getDefaultProps: function () {
        return {
          ufiExperiments: {},
          onClick: k
        };
      },
      render: function () {
        var p = l._("Comment"),
          q = l._("Leave a comment"),
          r = '{ "tn": "' + i.encodeTN(i.types.COMMENT_LINK) + '", "type": 24 }';
        return (h.createElement('a', {
          className: "comment_link _5yxe",
          role: 'button',
          href: this.props.href ? this.props.href : '#',
          title: q,
          ajaxify: this.props.ajaxify,
          rel: this.props.rel,
          onClick: this.props.onClick,
          'data-ft': r
        }, p));
      }
    });
  f.exports = o;
}, null);
__d('CacheStorage', ['ErrorUtils', 'EventListener', 'ExecutionEnvironment', 'FBJSON', 'WebStorage'], function a(b, c, d, e, f, g, h, i, j, k, l) {
  if (c.__markCompiled) c.__markCompiled();
  var m, n, o, p, q = {
      memory: x,
      localstorage: v,
      sessionstorage: w
    },
    r = '_@_',
    s = '3b',
    t = 'CacheStorageVersion';

  function u(z) {
    'use strict';
    this._store = z;
  }
  u.prototype.getStore = function () {
    'use strict';
    return this._store;
  };
  u.prototype.keys = function () {
    'use strict';
    var z = [];
    for (var aa = 0; aa < this._store.length; aa++) z.push(this._store.key(aa));
    return z;
  };
  u.prototype.get = function (z) {
    'use strict';
    return this._store.getItem(z);
  };
  u.prototype.set = function (z, aa) {
    'use strict';
    this._store.setItem(z, aa);
  };
  u.prototype.remove = function (z) {
    'use strict';
    this._store.removeItem(z);
  };
  u.prototype.clear = function () {
    'use strict';
    this._store.clear();
  };
  m = babelHelpers.inherits(v, u);
  n = m && m.prototype;

  function v() {
    'use strict';
    n.constructor.call(this, l.getLocalStorage());
  }
  v.available = function () {
    'use strict';
    return !!l.getLocalStorage();
  };
  o = babelHelpers.inherits(w, u);
  p = o && o.prototype;

  function w() {
    'use strict';
    p.constructor.call(this, l.getSessionStorage());
  }
  w.available = function () {
    'use strict';
    return !!l.getSessionStorage();
  };

  function x() {
    'use strict';
    this._store = {};
  }
  x.prototype.getStore = function () {
    'use strict';
    return this._store;
  };
  x.prototype.keys = function () {
    'use strict';
    return Object.keys(this._store);
  };
  x.prototype.get = function (z) {
    'use strict';
    if (this._store[z] === undefined) return null;
    return this._store[z];
  };
  x.prototype.set = function (z, aa) {
    'use strict';
    this._store[z] = aa;
  };
  x.prototype.remove = function (z) {
    'use strict';
    if (z in this._store) delete this._store[z];
  };
  x.prototype.clear = function () {
    'use strict';
    this._store = {};
  };
  x.available = function () {
    'use strict';
    return true;
  };

  function y(z, aa) {
    'use strict';
    this._key_prefix = aa || '_cs_';
    if (z == 'AUTO' || !z)
      for (var ba in q) {
        var ca = q[ba];
        if (ca.available()) {
          z = ba;
          break;
        }
      }
    if (z)
      if (!q[z] || !q[z].available()) {
        j.canUseDOM;
        this._backend = new x();
      } else this._backend = new q[z]();
    var da = this.useBrowserStorage();
    if (da) i.listen(window, 'storage', this._onBrowserValueChanged.bind(this));
    var ea = da ? this._backend.getStore().getItem(t) : this._backend.getStore()[t];
    if (ea !== s) this.clear();
  }
  y.prototype.useBrowserStorage = function () {
    'use strict';
    return this._backend.getStore() === l.getLocalStorage() || this._backend.getStore() === l.getSessionStorage();
  };
  y.prototype.addValueChangeCallback = function (z) {
    'use strict';
    this._changeCallbacks = this._changeCallbacks || [];
    this._changeCallbacks.push(z);
    return {
      remove: (function () {
        this._changeCallbacks.slice(this._changeCallbacks.indexOf(z), 1);
      }).bind(this)
    };
  };
  y.prototype._onBrowserValueChanged = function (z) {
    'use strict';
    if (this._changeCallbacks && String(z.key).startsWith(this._key_prefix)) this._changeCallbacks.forEach(function (aa) {
      aa(z.key, z.oldValue, z.newValue);
    });
  };
  y.prototype.keys = function () {
    'use strict';
    var z = [];
    h.guard((function () {
      if (this._backend) {
        var aa = this._backend.keys(),
          ba = this._key_prefix.length;
        for (var ca = 0; ca < aa.length; ca++)
          if (aa[ca].substr(0, ba) == this._key_prefix) z.push(aa[ca].substr(ba));
      }
    }).bind(this), 'CacheStorage')();
    return z;
  };
  y.prototype.set = function (z, aa, ba) {
    'use strict';
    if (this._backend) {
      var ca;
      if (typeof aa == 'string') {
        ca = r + aa;
      } else if (!ba) {
        ca = {
          __t: Date.now(),
          __v: aa
        };
        ca = k.stringify(ca);
      } else ca = k.stringify(aa);
      var da = this._backend,
        ea = this._key_prefix + z,
        fa = true;
      while (fa) try {
        da.set(ea, ca);
        fa = false;
      } catch (ga) {
        var ha = da.keys().length;
        this._evictCacheEntries();
        fa = da.keys().length < ha;
      }
    }
  };
  y.prototype._evictCacheEntries = function () {
    'use strict';
    var z = [],
      aa = this._backend;
    aa.keys().forEach(function (ca) {
      if (ca === t) return;
      var da = aa.get(ca);
      if (da === undefined) {
        aa.remove(ca);
        return;
      }
      if (y._hasMagicPrefix(da)) return;
      try {
        da = k.parse(da, f.id);
      } catch (ea) {
        aa.remove(ca);
        return;
      }
      if (da && da.__t !== undefined && da.__v !== undefined) z.push([ca, da.__t]);
    });
    z.sort(function (ca, da) {
      return ca[1] - da[1];
    });
    for (var ba = 0; ba < Math.ceil(z.length / 2); ba++) aa.remove(z[ba][0]);
  };
  y.prototype.get = function (z, aa) {
    'use strict';
    var ba;
    if (this._backend) {
      h.applyWithGuard(function () {
        ba = this._backend.get(this._key_prefix + z);
      }, this, null, function () {
        ba = null;
      }, 'CacheStorage:get');
      if (ba !== null) {
        if (y._hasMagicPrefix(ba)) {
          ba = ba.substr(r.length);
        } else try {
          ba = k.parse(ba, f.id);
          if (ba && ba.__t !== undefined && ba.__v !== undefined) ba = ba.__v;
        } catch (ca) {
          ba = undefined;
        }
      } else ba = undefined;
    }
    if (ba === undefined && aa !== undefined) {
      ba = aa;
      this.set(z, ba);
    }
    return ba;
  };
  y.prototype.remove = function (z) {
    'use strict';
    if (this._backend) h.applyWithGuard(this._backend.remove, this._backend, [this._key_prefix + z], null, 'CacheStorage:remove');
  };
  y.prototype.clear = function () {
    'use strict';
    if (this._backend) {
      h.applyWithGuard(this._backend.clear, this._backend, null, null, null, 'CacheStorage:clear');
      if (this.useBrowserStorage()) {
        this._backend.getStore().setItem(t, s);
      } else this._backend.getStore()[t] = s;
    }
  };
  y.getAllStorageTypes = function () {
    'use strict';
    return Object.keys(q);
  };
  y._hasMagicPrefix = function (z) {
    'use strict';
    return z.substr(0, r.length) === r;
  };
  f.exports = y;
}, null);
__d('MarauderLogger', ['Banzai', 'CacheStorage', 'MarauderConfig'], function a(b, c, d, e, f, g, h, i, j) {
  if (c.__markCompiled) c.__markCompiled();
  var k = 'client_event',
    l = 'navigation',
    m = 180000,
    n = 'marauder',
    o = 'marauder_last_event_time',
    p = 'marauder_last_session_id',
    q = {},
    r = [],
    s = false,
    t = null,
    u = null,
    v = null,
    w = 0,
    x, y, z = false,
    aa = new i('localstorage', '');

  function ba() {
    aa.set(o, ca());
  }
  h.subscribe(h.SHUTDOWN, ba);

  function ca() {
    x = x || aa.get(o) || 0;
    return x;
  }

  function da() {
    if (!z) {
      y = aa.get(p);
      z = true;
    }
    var sa = Date.now();
    if (!y || sa - m > ca()) {
      y = sa.toString(16) + '-' + (~~(Math.random() * 16777215)).toString(16);
      aa.set(p, y);
    }
    return y;
  }

  function ea() {
    return {
      user_agent: window.navigator.userAgent,
      screen_height: window.screen.availHeight,
      screen_width: window.screen.availWidth,
      density: window.screen.devicePixelRatio || null,
      platform: window.navigator.platform || null,
      locale: window.navigator.language || null
    };
  }

  function fa() {
    return {
      locale: navigator.language
    };
  }

  function ga(sa, ta, ua, va, wa, xa, ya) {
    var za = ya || Date.now();
    x = ya ? Date.now() : za;
    ta = ta || t;
    return {
      name: sa,
      time: za / 1000,
      module: ta,
      obj_type: va,
      obj_id: wa,
      uuid: xa,
      extra: ua
    };
  }

  function ha(sa, ta, ua) {
    return ga('content', null, {
      flags: ta
    }, null, null, sa, ua);
  }

  function ia(sa) {
    var ta = window.__mrdr;
    if (ta)
      for (var ua in ta) {
        var va = ta[ua];
        if (va[3] !== 0) {
          delete ta[ua];
          if (ua === "1")
            if (v !== null) {
              ua = v;
            } else continue;
          sa.push(ha(ua, 1, va[1]));
          sa.push(ha(ua, 2, va[2]));
          sa.push(ha(ua, 3, va[3]));
        }
      }
  }

  function ja(sa) {
    ia(sa);
    if (sa.length === 0) return;
    if (s) sa.push(ga('counters', null, q));
    var ta = h.BASIC,
      ua = j.gk_enabled;
    if (w === 0 && ua) {
      sa.push(ga('device_status', null, fa()));
      ta = {
        delay: 5000
      };
    }
    if (ua && Math.random() < .01) sa.push(ga('device_info', null, ea()));
    if (v !== null)
      for (var va = 0; va < sa.length; va++) {
        var wa = sa[va];
        if (wa.uuid === null || wa.uuid === undefined) wa.uuid = v;
      }
    var xa = {
        app_ver: j.app_version,
        data: sa,
        log_type: k,
        seq: w++,
        session_id: da()
      },
      ya = aa.get('device_id');
    if (ya) xa.device_id = ya;
    q = {};
    s = false;
    h.post(n, xa, ta);
  }

  function ka(sa) {
    if (!q[sa]) q[sa] = 0;
    q[sa]++;
    s = true;
  }

  function la(sa, ta, ua, va, wa, xa, ya) {
    ja([ga(sa, ta, ua, va, wa, xa, ya)]);
  }

  function ma(sa, ta) {
    if (t !== ta) {
      r.push(ga(l, t, {
        dest_module: ta,
        source_url: u,
        destination_url: sa
      }));
      t = ta;
      u = sa;
    }
  }

  function na(sa, ta) {
    if (t !== ta) {
      v = null;
      ma(sa, ta);
    }
  }

  function oa(sa, ta, ua) {
    la(ta ? 'show_module' : 'hide_module', sa, ua);
  }

  function pa(sa) {
    t = sa;
  }

  function qa() {
    return t;
  }

  function ra(sa) {
    if (v === null) {
      v = sa;
      if (sa !== null) {
        ja(r);
        r = [];
      }
    }
  }
  f.exports = {
    count: ka,
    log: la,
    navigateTo: na,
    navigateWithinSession: ma,
    toggleModule: oa,
    setUUID: ra,
    setNavigationModule: pa,
    getNavigationModule: qa
  };
}, null);
__d('UFICommentVPVTracker.react', ['OnVisible.react', 'React', 'UFICommentVPVs', 'UFIConfig', 'clearTimeout', 'setTimeout'], function a(b, c, d, e, f, g, h, i, j, k, l, m) {
  'use strict';
  if (c.__markCompiled) c.__markCompiled();
  var n = i.PropTypes,
    o = i.createClass({
      displayName: 'UFICommentVPVTracker',
      propTypes: {
        comment: n.object.isRequired,
        contextArgs: n.object.isRequired
      },
      render: function () {
        var p = this.props.comment.id,
          q = this.props.contextArgs.instanceid,
          r = this.props.children;
        if (!j.hasLoggedVPV(q, p)) r = i.createElement(h, {
          onVisible: this.maybeScheduleVPVLogging,
          onHidden: this.cancelScheduledVPVLogging
        }, r);
        return r;
      },
      maybeScheduleVPVLogging: function () {
        if (this.state.timer !== null) return;
        var p = this.props.comment.id,
          q = this.props.contextArgs.instanceid;
        if (j.hasLoggedVPV(q, p)) return;
        this.setState({
          timer: m((function () {
            j.logVPV(q, p);
            this.setState({
              timer: null
            });
          }).bind(this), k.vpvLoggingTimeout)
        });
      },
      cancelScheduledVPVLogging: function () {
        if (this.state.timer === null) return;
        l(this.state.timer);
        this.setState({
          timer: null
        });
      },
      getInitialState: function () {
        return {
          timer: null
        };
      },
      shouldComponentUpdate: function (p, q) {
        return q.timer === this.state.timer;
      },
      componentWillReceiveProps: function () {
        this.cancelScheduledVPVLogging();
      },
      componentWillUnmount: function () {
        this.cancelScheduledVPVLogging();
      }
    });
  f.exports = o;
}, null);
__d('UFIInlineShareConfirmation.react', ['React', 'UFIImageBlock.react', 'cx', 'joinClasses'], function a(b, c, d, e, f, g, h, i, j, k) {
  if (c.__markCompiled) c.__markCompiled();
  var l = h.PropTypes,
    m = [l.object, l.string],
    n = h.createClass({
      displayName: 'UFIInlineShareConfirmation',
      propTypes: {
        isError: l.bool.isRequired,
        isFirstComponent: l.bool,
        isLastComponent: l.bool,
        message: l.oneOfType(m).isRequired
      },
      render: function () {
        var o = k("UFIRow" + (' ' + "UFIInlineShareConfirmation") + (this.props.isError ? ' ' + "UFIInlineShareError" : '') + (this.props.isFirstComponent ? ' ' + "_4204" : '') + (this.props.isLastComponent ? ' ' + "_2o9m" : ''));
        return (h.createElement('div', {
          className: o
        }, h.createElement(i, null, h.createElement('i', {
          className: 'UFIConfirmationIcon',
          role: 'presentation'
        }), this._getText())));
      },
      _getText: function () {
        if (this.props.message.__html) return h.createElement('span', {
          dangerouslySetInnerHTML: this.props.message
        });
        return h.createElement('span', null, this.props.message);
      }
    });
  f.exports = n;
}, null);
__d('UFIPagerGenerator', ['NumberFormat', 'React', 'TrackingNodes', 'UFICommentOrdering', 'UFIConfig', 'UFIConstants', 'UFIPager.react', 'UFIPagerLabel', 'fbt', 'invariant'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
  'use strict';
  if (c.__markCompiled) c.__markCompiled();
  var r = m.UFIPaging,
    s = {
      isBottomPager: function (t, u) {
        return k.inverted(u) && !t;
      },
      needsStartOfRangePager: function (t) {
        return t > 0;
      },
      renderPagers: function (t, u, v, w, x) {
        var y = t.deletedCounts[u],
          z = t.commentCounts[u],
          aa = z - y,
          ba = w - y,
          ca = l.numberDelimiter,
          da = u !== t.id,
          ea, fa = this.isBottomPager(da, t.orderingMode),
          ga = {
            topPager: null,
            bottomPager: null
          };
        !!isNaN(aa) ? q(0) : undefined;
        !!isNaN(ba) ? q(0) : undefined;
        var ha = t.ranges[u],
          ia = ha.isLoadingPrev(),
          ja = ha.isLoadingNext(),
          ka = {
            delimiter: ca,
            count: 0
          },
          la = t.feedback.commentsentenceinfo;
        if (la) {
          ka.commenters = la.explicit_commenter_names;
          ka.othersCount = la.other_commenter_count;
        }
        var ma = v + w == z;
        if (z < t.pageSize && ma || ba === 0) {
          ea = Math.min(z, t.pageSize);
          var na = function () {
              return x(fa ? r.BOTTOM : r.TOP, {
                offset: z - ea,
                length: ea
              });
            },
            oa;
          if (ba === 0) {
            if (aa == 1) {
              oa = o.VIEW_ONE;
            } else {
              ka.count = aa;
              oa = o.VIEW_ALL;
            }
          } else if (aa - ba == 1) {
            oa = o.VIEW_ONE_MORE;
          } else {
            oa = o.VIEW_MORE_EXPLICIT;
            ka.count = aa - ba;
          }
          var pa = j.getTrackingInfo(j.types.VIEW_ALL_COMMENTS),
            qa = o.getLabel(oa, da, t.feedback.isqanda, ka),
            ra = i.createElement(n, {
              key: 'allPager' + u,
              ref: fa ? 'topLevelBottomPager' : null,
              contextArgs: t.contextArgs,
              isUnseen: t.feedback.hasunseencollapsed,
              isLoading: ia,
              isReply: da,
              pagerLabel: qa,
              onPagerClick: na,
              'data-ft': pa
            });
          if (fa) {
            ga.bottomPager = ra;
          } else ga.topPager = ra;
          return ga;
        }
        var sa = o.getLabel(o.VIEW_MORE, da, t.feedback.isqanda, ka),
          ta = o.getLabel(o.VIEW_PREVIOUS, da, t.feedback.isqanda, ka);
        if (this.needsStartOfRangePager(v)) {
          var ua = Math.max(v - t.pageSize, 0);
          ea = v + w - ua;
          var va;
          if (!da || ba > 1) {
            var wa = h.formatIntegerWithDelimiter(ba, ca),
              xa = h.formatIntegerWithDelimiter(aa, ca);
            va = p._("{countshown} of {totalcount}", [p.param('countshown', wa), p.param('totalcount', xa)]);
          }
          var ya = function () {
            return x(fa ? r.BOTTOM : r.TOP, {
              offset: ua,
              length: ea
            });
          };
          if (fa) {
            ga.bottomPager = i.createElement(n, {
              key: 'bottomPager' + u,
              ref: !da ? 'topLevelBottomPager' : null,
              contextArgs: t.contextArgs,
              isLoading: ia,
              isReply: da,
              pagerLabel: sa,
              onPagerClick: ya,
              countSentence: va
            });
          } else ga.topPager = i.createElement(n, {
            key: 'topPager' + u,
            contextArgs: t.contextArgs,
            isLoading: ia,
            isReply: da,
            pagerLabel: ta,
            onPagerClick: ya,
            countSentence: va
          });
        }
        if (v + w < z) {
          ea = Math.min(w + t.pageSize, z - v);
          var za = function () {
            return x(fa ? r.TOP : r.BOTTOM, {
              offset: v,
              length: ea
            });
          };
          if (fa) {
            ga.topPager = i.createElement(n, {
              key: 'topPager' + u,
              contextArgs: t.contextArgs,
              isLoading: ja,
              isReply: da,
              pagerLabel: ta,
              onPagerClick: za
            });
          } else ga.bottomPager = i.createElement(n, {
            key: 'bottomPager',
            ref: !da ? 'topLevelBottomPager' : null,
            contextArgs: t.contextArgs,
            isLoading: ja,
            isReply: da,
            pagerLabel: sa,
            onPagerClick: za
          });
        }
        return ga;
      }
    };
  f.exports = s;
}, null);
__d('ScrollableArea.react', ['Bootloader', 'React', 'ReactDOM', 'Style', 'cx', 'joinClasses', 'Scrollable'], function a(b, c, d, e, f, g, h, i, j, k, l, m) {
  if (c.__markCompiled) c.__markCompiled();
  c('Scrollable');
  var n = i.PropTypes,
    o = "uiScrollableArea native",
    p = "uiScrollableAreaWrap scrollable",
    q = "uiScrollableAreaBody",
    r = "uiScrollableAreaContent",
    s = i.createClass({
      displayName: 'ReactScrollableArea',
      propTypes: {
        width: n.number,
        height: n.oneOfType([n.number, n.string]),
        onScroll: n.func,
        shadow: n.bool,
        fade: n.bool,
        persistent: n.bool
      },
      render: function () {
        var t = {
          height: this.props.height
        };
        return (i.createElement('div', babelHelpers._extends({}, this.props, {
          className: m(this.props.className, o),
          ref: 'root',
          style: babelHelpers._extends({}, this.props.style || {}, t)
        }), i.createElement('div', {
          className: p,
          ref: 'wrap'
        }, i.createElement('div', {
          className: q,
          ref: 'body'
        }, i.createElement('div', {
          className: r
        }, this.props.children)))));
      },
      getArea: function () {
        return this._area;
      },
      componentDidMount: function () {
        h.loadModules(["ScrollableArea"], this._loadScrollableArea);
      },
      componentDidUpdate: function (t) {
        if (t.width !== this.props.width) this._setWidthFromProps();
        var u = this.getArea();
        if (u) u.throttledAdjustGripper();
      },
      componentWillUnmount: function () {
        this._area && this._area.destroy();
      },
      _loadScrollableArea: function (t) {
        this._area = t.fromNative(j.findDOMNode(this.refs.root), {
          fade: this.props.fade,
          persistent: this.props.persistent,
          shadow: this.props.shadow === undefined ? true : this.props.shadow,
          tabIndex: this.props.tabIndex
        });
        this._setWidthFromProps();
        this.props.onScroll && this._area.subscribe('scroll', this.props.onScroll);
      },
      _setWidthFromProps: function () {
        var t = j.findDOMNode(this.refs.body);
        k.set(t, 'width', this.props.width + 'px');
      }
    });
  f.exports = s;
}, null);
__d('dotAccess', [], function a(b, c, d, e, f, g) {
  if (c.__markCompiled) c.__markCompiled();

  function h(i, j, k) {
    var l = j.split('.');
    do {
      var m = l.shift();
      i = i[m] || k && (i[m] = {});
    } while (l.length && i);
    return i;
  }
  f.exports = h;
}, null);
__d('uuid', [], function a(b, c, d, e, f, g) {
  if (c.__markCompiled) c.__markCompiled();

  function h() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (i) {
      var j = Math.random() * 16 | 0,
        k = i == 'x' ? j : j & 3 | 8;
      return k.toString(16);
    });
  }
  f.exports = h;
}, null);
__d('Layout.react', ['React', 'cx', 'joinClasses'], function a(b, c, d, e, f, g, h, i, j) {
  if (c.__markCompiled) c.__markCompiled();
  var k = h.createClass({
    displayName: 'Layout',
    render: function () {
      var l = [],
        m = [],
        n = null;
      h.Children.forEach(this.props.children, function (p, q) {
        if (!p) return;
        var r = n !== null,
          s = h.cloneElement(p, {
            className: j(p.props.className, r ? "_4bl8" : ''),
            key: q
          });
        if (n === null) {
          if (p.type === k.FillColumn) {
            n = s;
          } else l.push(s);
        } else m.push(s);
      });
      m.reverse();
      var o = l.concat(m);
      if (n) o.push(n);
      return (h.createElement('div', babelHelpers._extends({}, this.props, {
        className: j(this.props.className, 'clearfix')
      }), o));
    }
  });
  k.Column = h.createClass({
    displayName: 'Column',
    render: function () {
      return (h.createElement('div', babelHelpers._extends({}, this.props, {
        className: j(this.props.className, "_4bl7")
      })));
    }
  });
  k.FillColumn = h.createClass({
    displayName: 'FillColumn',
    render: function () {
      return (h.createElement('div', babelHelpers._extends({}, this.props, {
        className: j(this.props.className, "_4bl9")
      })));
    }
  });
  f.exports = k;
}, null);
__d('StoreBasedStateMixinHelper', ['SubscriptionsHandler', 'invariant'], function a(b, c, d, e, f, g, h, i) {
  'use strict';
  if (c.__markCompiled) c.__markCompiled();

  function j(k) {
    this.$StoreBasedStateMixinHelper1 = k;
    this.$StoreBasedStateMixinHelper2 = new h();
  }
  j.prototype.subscribeCallback = function (k) {
    var l = this.$StoreBasedStateMixinHelper1.map(function (m) {
      if (m.hasChanged && m.getDispatchToken && m.addListener) {
        return m.addListener(k);
      } else if (m.subscribe) {
        return m.subscribe('change', k);
      } else if (m.addListener) {
        return m.addListener('change', k);
      } else i(0);
    });
    if (this.$StoreBasedStateMixinHelper1.length > 0) this.$StoreBasedStateMixinHelper2.addSubscriptions.apply(this.$StoreBasedStateMixinHelper2, l);
  };
  j.prototype.release = function () {
    this.$StoreBasedStateMixinHelper2.release();
  };
  f.exports = j;
}, null);
__d('ReactDispatcher_DEPRECATED', ['Dispatcher_DEPRECATED', 'ReactDOM'], function a(b, c, d, e, f, g, h, i) {
  if (c.__markCompiled) c.__markCompiled();
  var j, k;
  'use strict';
  j = babelHelpers.inherits(l, h);
  k = j && j.prototype;
  l.prototype.dispatch = function (m) {
    i.unstable_batchedUpdates((function () {
      k.dispatch.call(this, m);
    }).bind(this));
  };

  function l() {
    j.apply(this, arguments);
  }
  f.exports = l;
}, null);
__d('FluxStoreGroup', ['FluxStoreGroup-upstream'], function a(b, c, d, e, f, g, h) {
  if (c.__markCompiled) c.__markCompiled();
  var i, j;
  i = babelHelpers.inherits(k, h);
  j = i && i.prototype;

  function k(l, m) {
    'use strict';
    j.constructor.call(this, l, m);
    if (this.__dispatcher.explicitlyRegisterStore) this.__dispatcher.explicitlyRegisterStore(this);
  }
  f.exports = k;
}, null);
__d('FluxStore', ['EventEmitter', 'invariant'], function a(b, c, d, e, f, g, h, i) {
  'use strict';
  if (c.__markCompiled) c.__markCompiled();

  function j(k) {
    this.__className = this.constructor.name;
    this.__changed = false;
    this.__changeEvent = 'change';
    this.__dispatcher = k;
    this.__emitter = new h();
    this.$FluxStore1 = k.register((function (l) {
      this.__invokeOnDispatch(l);
    }).bind(this));
  }
  j.prototype.addListener = function (k) {
    return this.__emitter.addListener(this.__changeEvent, k);
  };
  j.prototype.getDispatcher = function () {
    return this.__dispatcher;
  };
  j.prototype.getDispatchToken = function () {
    return this.$FluxStore1;
  };
  j.prototype.hasChanged = function () {
    !this.__dispatcher.isDispatching() ? i(0) : undefined;
    return this.__changed;
  };
  j.prototype.__emitChange = function () {
    !this.__dispatcher.isDispatching() ? i(0) : undefined;
    this.__changed = true;
  };
  j.prototype.__invokeOnDispatch = function (k) {
    this.__changed = false;
    this.__onDispatch(k);
    if (this.__changed) this.__emitter.emit(this.__changeEvent);
  };
  j.prototype.__onDispatch = function (k) {
    i(0);
  };
  f.exports = j;
}, null);
__d('ImmutableValue', ['invariant', 'isNode', 'keyOf'], function a(b, c, d, e, f, g, h, i, j) {
  'use strict';
  if (c.__markCompiled) c.__markCompiled();
  var k = j({
    _DONT_EVER_TYPE_THIS_SECRET_KEY: null
  });

  function l(m) {
    !(m === l[k]) ? h(0): undefined;
  }
  l.mergeAllPropertiesInto = function (m, n) {
    var o = n.length;
    for (var p = 0; p < o; p++) Object.assign(m, n[p]);
  };
  l.deepFreezeRootNode = function (m) {
    if (i(m)) return;
    Object.freeze(m);
    for (var n in m)
      if (m.hasOwnProperty(n)) l.recurseDeepFreeze(m[n]);
    Object.seal(m);
  };
  l.recurseDeepFreeze = function (m) {
    if (i(m) || !l.shouldRecurseFreeze(m)) return;
    Object.freeze(m);
    for (var n in m)
      if (m.hasOwnProperty(n)) l.recurseDeepFreeze(m[n]);
    Object.seal(m);
  };
  l.shouldRecurseFreeze = function (m) {
    return (typeof m === 'object' && !(m instanceof l) && m !== null);
  };
  l._DONT_EVER_TYPE_THIS_SECRET_KEY = Math.random();
  f.exports = l;
}, null);
__d('mergeHelpers', ['invariant', 'keyMirror', 'FbtResult'], function a(b, c, d, e, f, g, h, i, j) {
  'use strict';
  if (c.__markCompiled) c.__markCompiled();
  var k = 36,
    l = function (n) {
      return typeof n !== 'object' || n instanceof Date || n === null || n instanceof j;
    },
    m = {
      MAX_MERGE_DEPTH: k,
      isTerminal: l,
      normalizeMergeArg: function (n) {
        return n === undefined || n === null ? {} : n;
      },
      checkMergeArrayArgs: function (n, o) {
        !(Array.isArray(n) && Array.isArray(o)) ? h(0): undefined;
      },
      checkMergeObjectArgs: function (n, o) {
        m.checkMergeObjectArg(n);
        m.checkMergeObjectArg(o);
      },
      checkMergeObjectArg: function (n) {
        !(!l(n) && !Array.isArray(n)) ? h(0): undefined;
      },
      checkMergeIntoObjectArg: function (n) {
        !((!l(n) || typeof n === 'function') && !Array.isArray(n)) ? h(0): undefined;
      },
      checkMergeLevel: function (n) {
        !(n < k) ? h(0): undefined;
      },
      checkArrayStrategy: function (n) {
        !(n === undefined || n in m.ArrayStrategies) ? h(0): undefined;
      },
      ArrayStrategies: i({
        Clobber: true,
        IndexByIndex: true
      })
    };
  f.exports = m;
}, null);
__d('ImmutableObject', ['ImmutableValue', 'invariant', 'keyOf', 'mergeHelpers'], function a(b, c, d, e, f, g, h, i, j, k) {
  if (c.__markCompiled) c.__markCompiled();
  var l, m;
  'use strict';
  var n = k.checkMergeObjectArgs,
    o = k.isTerminal,
    p = j({
      _DONT_EVER_TYPE_THIS_SECRET_KEY: null
    });

  function q(t) {
    !(t instanceof h) ? i(0): undefined;
  }
  l = babelHelpers.inherits(r, h);
  m = l && l.prototype;

  function r() {
    m.constructor.call(this, h[p]);
    h.mergeAllPropertiesInto(this, arguments);
  }
  r.create = function () {
    var t = Object.create(r.prototype);
    r.apply(t, arguments);
    return t;
  };
  r.set = function (t, u) {
    q(t);
    !(typeof u === 'object' && u !== undefined && !Array.isArray(u)) ? i(0): undefined;
    return new r(t, u);
  };
  r.setProperty = function (t, u, v) {
    var w = {};
    w[u] = v;
    return r.set(t, w);
  };
  r.deleteProperty = function (t, u) {
    var v = {};
    for (var w in t)
      if (w !== u && t.hasOwnProperty(w)) v[w] = t[w];
    return new r(v);
  };
  r.setDeep = function (t, u) {
    q(t);
    return s(t, u);
  };
  r.values = function (t) {
    return Object.keys(t).map(function (u) {
      return t[u];
    });
  };

  function s(t, u) {
    n(t, u);
    var v = {},
      w = Object.keys(t);
    for (var x = 0; x < w.length; x++) {
      var y = w[x];
      if (!u.hasOwnProperty(y)) {
        v[y] = t[y];
      } else if (o(t[y]) || o(u[y])) {
        v[y] = u[y];
      } else v[y] = s(t[y], u[y]);
    }
    var z = Object.keys(u);
    for (x = 0; x < z.length; x++) {
      var aa = z[x];
      if (t.hasOwnProperty(aa)) continue;
      v[aa] = u[aa];
    }
    return (t instanceof h ? new r(v) : u instanceof h ? new r(v) : v);
  }
  f.exports = r;
}, null);
__d('abstractMethod', ['invariant'], function a(b, c, d, e, f, g, h) {
  'use strict';
  if (c.__markCompiled) c.__markCompiled();

  function i(j, k) {
    h(0);
  }
  f.exports = i;
}, null);
__d('FeedBlacklistButton', ['Arbiter', 'Event'], function a(b, c, d, e, f, g, h, i) {
  if (c.__markCompiled) c.__markCompiled();
  var j = {
    BLACKLIST: 'feed_blacklist',
    UNBLACKLIST: 'feed_unblacklist',
    init: function (k, l, m, n) {
      i.listen(l, 'click', function () {
        var o = {
          profile_id: n
        };
        h.inform(j.BLACKLIST, o);
        h.inform('UnfollowingUser', o);
      });
      i.listen(m, 'click', function () {
        var o = {
          profile_id: n
        };
        h.inform(j.UNBLACKLIST, o);
        h.inform('FollowingUser', o);
      });
      h.subscribe(j.BLACKLIST, function (o, p) {
        if (n == p.profile_id) k.swap();
      });
      h.subscribe(j.UNBLACKLIST, function (o, p) {
        if (n == p.profile_id) k.unswap();
      });
    }
  };
  f.exports = b.FeedBlacklistButton || j;
}, null);
__d('SubscriptionLevels', [], function a(b, c, d, e, f, g) {
  if (c.__markCompiled) c.__markCompiled();
  var h = {
    ALL: '162318810514679',
    DEFAULT: '271670892858696',
    TOP: '266156873403755'
  };
  f.exports = h;
}, null);
__d('EditSubscriptions', ['Arbiter', 'AsyncRequest', 'CSS', 'DOM', 'Event', 'FeedBlacklistButton', 'MenuDeprecated', 'Parent', 'SubscriptionLevels', 'arrayContains', 'cx', 'ge', 'getOrCreateDOMID'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
  if (c.__markCompiled) c.__markCompiled();
  var u = 45,
    v = [p.ALL, p.DEFAULT, p.TOP],
    w = {},
    x = {},
    y = {},
    z = {},
    aa = {},
    ba = {},
    ca = {},
    da = {},
    ea = {},
    fa = {},
    ga = {},
    ha = "/ajax/follow/follow_profile.php",
    ia = "/ajax/follow/unfollow_profile.php",
    ja = "/ajax/settings/notifications/notify_me.php",
    ka = {},
    la = {},
    ma = {},
    na = null,
    oa = {};

  function pa(nb) {
    return q(v, nb);
  }

  function qa(nb, ob, pb, qb) {
    var rb = o.byClass(qb, 'uiMenuItem') || o.byClass(qb, "_54ni"),
      sb = t(nb);
    if (!rb || !k.contains(nb, rb)) {
      return;
    } else if (j.hasClass(rb, 'SubscribeMenuSubscribeCheckbox')) {
      if (y[ob]) {
        va(sb, ob);
      } else ua(sb, ob);
      return false;
    } else if (j.hasClass(rb, 'SubscribeMenuUnsubscribe')) {
      va(sb, ob);
      return false;
    } else if (j.hasClass(rb, 'SubscribeMenuSettingsItem')) {
      hb(nb, true);
      return false;
    } else if (j.hasClass(rb, 'SubscriptionMenuGoBack')) {
      hb(nb, false);
      return false;
    } else if (j.hasClass(rb, 'SubscriptionMenuItem')) {
      sa(nb, ob, pb, rb);
      return false;
    } else if (j.hasClass(rb, 'SubscribeMenuNotifyMeCheckbox')) {
      ra(nb, ob);
      return false;
    }
  }

  function ra(nb, ob) {
    if (z[ob]) {
      lb(nb, ob);
    } else kb(nb, ob);
  }

  function sa(nb, ob, pb, qb) {
    if (j.hasClass(qb, 'SubscriptionMenuLevel')) {
      if (n.isItemChecked(qb)) return;
      fb(nb, ob, ya(qb), true, pb);
    } else if (j.hasClass(qb, 'SubscriptionMenuCategory')) {
      cb(ob, qb, !n.isItemChecked(qb), true, pb);
    } else if (j.hasClass(qb, 'SubscriptionAppStory')) eb(ob, qb, !n.isItemChecked(qb), pb);
  }

  function ta(nb) {
    return oa[nb] ? oa[nb] : 0;
  }

  function ua(nb, ob) {
    var pb = {
      profile_id: ob
    };
    h.inform('FollowingUser', pb);
    h.inform(m.UNBLACKLIST, pb);
    new i().setURI(ha).setMethod('POST').setData({
      profile_id: ob,
      location: ta(nb)
    }).setErrorHandler(h.inform.bind(null, 'FollowUserFail', pb)).send();
  }

  function va(nb, ob) {
    var pb = {
      profile_id: ob
    };
    h.inform('UnfollowingUser', pb);
    h.inform(m.BLACKLIST, pb);
    new i().setURI(ia).setMethod('POST').setData({
      profile_id: ob,
      location: ta(nb)
    }).setErrorHandler(h.inform.bind(null, 'UnfollowUserFail', pb)).send();
  }

  function wa(nb, ob, pb) {
    var qb = {
      profile_id: nb,
      level: da[nb],
      custom_categories: ea[nb],
      location: pb
    };
    new i().setURI('/ajax/follow/manage_subscriptions.php').setData(qb).send();
  }

  function xa(nb, ob) {
    var pb = ea[ob] || [],
      qb = n.getItems(nb);
    qb.forEach(function (rb) {
      if (j.hasClass(rb, 'SubscriptionMenuCategory')) {
        var sb = ya(rb);
        if (q(pb, sb)) {
          ab(rb);
        } else bb(rb);
      } else if (j.hasClass(rb, 'SubscriptionAppStory')) {
        var tb = ya(rb);
        if (ma[ob] && ma[ob][tb]) {
          ab(rb);
        } else bb(rb);
      }
    });
    fb(nb, ob, da[ob], false);
  }

  function ya(nb) {
    var ob = k.scry(nb, 'input')[0];
    return ob && ob.value;
  }

  function za(nb) {
    return k.find(nb, 'a.itemAnchor');
  }

  function ab(nb) {
    j.addClass(nb, 'checked');
    za(nb).setAttribute('aria-checked', true);
  }

  function bb(nb) {
    j.removeClass(nb, 'checked');
    za(nb).setAttribute('aria-checked', false);
  }

  function cb(nb, ob, pb, qb, rb) {
    if (pb) {
      ab(ob);
    } else bb(ob);
    var sb = ya(ob);
    if (pa(sb)) {
      pb && db(nb, sb);
    } else if (pb) {
      if (!q(ea[nb], sb)) ea[nb].push(sb);
    } else {
      var tb = ea[nb].indexOf(sb);
      if (tb !== -1) ea[nb].splice(tb, 1);
    }
    if (qb) wa(nb, sb, rb);
  }

  function db(nb, ob) {
    da[nb] = ob;
    h.inform('SubscriptionLevelUpdated', {
      profile_id: nb,
      level: ob
    });
  }

  function eb(nb, ob, pb, qb) {
    var rb = '/ajax/feed/filter_action/',
      sb = ya(ob),
      tb = {
        actor_id: nb,
        app_id: sb
      };
    if (pb) {
      ab(ob);
      rb += 'resubscribe_user_app/';
      tb.action = 'resubscribe_user_app';
      if (!ma[nb]) ma[nb] = {};
      ma[nb][sb] = true;
    } else {
      bb(ob);
      rb += 'unsubscribe_user_app_checkbox/';
      tb.action = 'unsubscribe_user_app_checkbox';
      if (ma[nb]) ma[nb][sb] = false;
    }
    new i().setURI(rb).setData(tb).send();
  }

  function fb(nb, ob, pb, qb, rb) {
    var sb = k.scry(nb, '.SubscriptionMenuLevel'),
      tb = null;
    sb.forEach(function (ub) {
      if (ya(ub) == pb) {
        tb = ub;
      } else if (n.isItemChecked(ub)) cb(ob, ub, false, false);
    });
    tb && cb(ob, tb, true, qb, rb);
  }

  function gb(nb, ob, pb) {
    y[ob] = pb;
    j.conditionClass(nb, 'isUnsubscribed', !pb);
    var qb = k.scry(nb, 'li.SubscribeMenuSubscribeCheckbox');
    if (qb.length !== 0) {
      var rb = qb[0];
      if (pb) {
        ab(rb);
      } else bb(rb);
    }
  }

  function hb(nb, ob) {
    j.conditionClass(nb, 'subscriptionMenuOpen', ob);
  }

  function ib(nb, ob, pb) {
    var qb = k.find(nb, ".FriendListSubscriptionsMenu"),
      rb = k.find(qb, ".uiMenuInner");
    if (na != null) na.forEach(function (sb) {
      rb.removeChild(sb);
    });
    pb.forEach(function (sb) {
      rb.appendChild(sb);
    });
    na = pb;
  }
  h.subscribe('UnfollowUser', function (nb, ob) {
    if (fa[ob.profile_id]) {
      db(ob.profile_id, fa[ob.profile_id]);
      ea[ob.profile_id] = ga[ob.profile_id].slice();
    }
  });
  h.subscribe('UpdateSubscriptionLevel', function (nb, ob) {
    var pb = ob.profile_id + '',
      qb = ob.level + '';
    db(pb, qb);
    var rb;
    for (rb in w)
      if (w[rb] === pb) {
        var sb = s(rb);
        sb && fb(sb, pb, qb, false);
      }
  });
  h.subscribe('listeditor/close_editor', function () {
    var nb;
    for (nb in w) {
      var ob = s(nb);
      ob && hb(ob, false);
    }
  });

  function jb(nb, ob, pb) {
    z[ob] = pb;
    var qb = la[ob];
    if (qb) {
      if (pb) {
        qb.select();
      } else qb.deselect();
      return;
    }
    var rb = k.scry(nb, 'li.SubscribeMenuNotifyMeCheckbox');
    if (rb.length !== 0) {
      var sb = rb[0];
      j.conditionShow(sb, true);
      var tb = k.scry(nb, 'li.SubscribeMenuNotifyMeCheckboxSeparator');
      if (tb.length > 0) j.conditionShow(tb[0], true);
      if (pb) {
        ab(sb);
      } else bb(sb);
    }
  }

  function kb(nb, ob) {
    var pb = {
      profile_id: ob
    };
    h.inform('EnableNotifsForUser', pb);
    new i().setURI(ja).setMethod('POST').setData({
      notifier_id: ob,
      enable: true
    }).setErrorHandler(h.inform.bind(null, 'EnableNotifsForUserFail', pb)).send();
  }

  function lb(nb, ob) {
    var pb = {
      profile_id: ob
    };
    h.inform('DisableNotifsForUser', pb);
    new i().setURI(ja).setMethod('POST').setData({
      notifier_id: ob,
      enable: false
    }).setErrorHandler(h.inform.bind(null, 'DisableNotifsForUserFail', pb)).send();
  }
  var mb = {
    init: function (nb, ob, pb) {
      var qb = t(nb);
      oa[qb] = pb;
      if (!w[qb]) l.listen(nb, 'click', function (rb) {
        return qa(nb, w[qb], pb, rb.getTarget());
      });
      if (pb === u && ka[ob].length) ib(nb, ob, ka[ob]);
      if (da[ob]) xa(nb, ob);
      w[qb] = ob;
      j.conditionClass(nb, 'NonFriendSubscriptionMenu', !x[ob]);
      j.conditionClass(nb, 'cannotSubscribe', !aa[ob]);
      j.conditionClass(nb, 'noSubscriptionLevels', ba[ob] && !ca[ob]);
      j.conditionClass(nb, 'noSubscribeCheckbox', !x[ob] && !ba[ob]);
      gb(nb, ob, y[ob]);
      jb(nb, ob, z[ob]);
      h.subscribe(['FollowUser', 'FollowingUser', 'UnfollowUserFail'], (function (rb, sb) {
        if (sb.profile_id == ob) gb(nb, ob, true);
      }).bind(this));
      h.subscribe(['UnfollowUser', 'UnfollowingUser', 'FollowUserFail'], (function (rb, sb) {
        if (sb.profile_id == ob) {
          h.inform('SubMenu/Reset');
          gb(nb, ob, false);
        }
      }).bind(this));
      h.subscribe(['EnableNotifsForUser', 'DisableNotifsForUserFail'], (function (rb, sb) {
        if (sb.profile_id == ob) jb(nb, ob, true);
      }).bind(this));
      h.subscribe(['DisableNotifsForUser', 'EnableNotifsForUserFail'], (function (rb, sb) {
        if (sb.profile_id == ob) jb(nb, ob, false);
      }).bind(this));
      h.subscribe('listeditor/friend_lists_changed', (function (rb, sb) {
        if (sb.notify_state) {
          var tb = sb.added_uid ? sb.added_uid : sb.removed_uid;
          jb(nb, tb, sb.notify_state.is_notified);
        }
      }).bind(this));
    },
    getSubscriptions: function (nb) {
      return {
        level: da[nb],
        custom_categories: ea[nb]
      };
    },
    registerTimelineNotifySelector: function (nb, ob) {
      var pb = nb.getInitialMenu(),
        qb = nb.getContentRoot();
      pb.forEachItem(function (rb) {
        var sb = rb.getRoot();
        if (j.hasClass(sb, 'SubscribeMenuNotifyMeCheckbox')) {
          la[ob] = rb;
          jb(qb, ob, z[ob]);
        }
      });
      pb.subscribe('itemclick', function (rb, sb) {
        if (sb.item === la[ob]) ra(qb, ob);
        return true;
      });
    },
    toggleNotificationsOnJoin: function (nb, ob) {
      if (z[nb] !== ob) ra(null, nb);
    },
    setSubscriptions: function (nb, ob, pb, qb, rb, sb, tb, ub, vb, wb, xb, yb) {
      db(nb, tb + '');
      x[nb] = ob;
      y[nb] = pb;
      aa[nb] = qb;
      ba[nb] = rb;
      ca[nb] = sb;
      fa[nb] = vb + '';
      ea[nb] = ub.map(String);
      ga[nb] = wb.map(String);
      ka[nb] = yb;
      z[nb] = xb;
    }
  };
  f.exports = b.EditSubscriptions || mb;
}, null);
__d("XPubcontentChainedSuggestionsController", ["XController"], function a(b, c, d, e, f, g) {
  c.__markCompiled && c.__markCompiled();
  f.exports = c("XController").create("\/pubcontent\/chained_suggestions\/", {
    pageid: {
      type: "String"
    },
    profileid: {
      type: "Int"
    },
    eh: {
      type: "Bool",
      defaultValue: false
    },
    friendid: {
      type: "Int"
    }
  });
}, null);
__d('SubscribeButton', ['Arbiter', 'AsyncRequest', 'Button', 'CSS', 'Event', 'TooltipData', 'XPubcontentChainedSuggestionsController'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n) {
  if (c.__markCompiled) c.__markCompiled();
  var o = {
    SUBSCRIBED: 'FollowingUser',
    UNSUBSCRIBED: 'UnfollowingUser',
    RECAP: 'RecapUser',
    _enable: function (p) {
      j.setEnabled(p, true);
      m.remove(p);
    },
    _disable: function (p, q) {
      j.setEnabled(p, false);
      if (q) m.set(p, q);
    },
    init: function (p, q, r, s, t, u, v, w, x) {
      w = typeof w !== 'undefined' ? w : false;
      var y = typeof x !== 'undefined';
      if (y && !v && !w) o._disable(q, x);
      l.listen(q, 'click', function () {
        h.inform(o.SUBSCRIBED, {
          profile_id: s,
          suppress: true
        });
      });
      h.subscribe(o.SUBSCRIBED, function (z, aa) {
        if (s == aa.profile_id) {
          if (!t) r.suppressNextMouseEnter && r.suppressNextMouseEnter();
          if (y) {
            if (typeof aa.connected !== 'undefined') v = aa.connected;
            if (v || w) o._enable(q);
          }
          p.swap();
          if (u === true && aa.chaining !== false) {
            var ba = n.getURIBuilder().setInt('profileid', s).getURI();
            new i().setURI(ba).send();
          }
        }
      });
      h.subscribe(o.UNSUBSCRIBED, function (z, aa) {
        if (s == aa.profile_id) {
          p.unswap();
          r.hideFlyout && r.hideFlyout();
          if (y) {
            if (typeof aa.connected !== 'undefined') v = aa.connected;
            if (!v && !w) o._disable(q, x);
          }
          h.inform('SubMenu/Reset');
        }
      });
    },
    initSubscribe: function (p, q) {
      l.listen(p, 'click', function () {
        setTimeout(h.inform.bind(h, o.SUBSCRIBED, {
          profile_id: q
        }), 0);
      });
    },
    initUnsubscribe: function (p, q) {
      l.listen(p, 'click', function () {
        setTimeout(h.inform.bind(h, o.UNSUBSCRIBED, {
          profile_id: q
        }), 0);
      });
    },
    initSubscribeMenuItem: function (p, q, r) {
      k.hide(q);
      this._initMenuItem(p, q, r);
    },
    initUnsubscribeMenuItem: function (p, q, r) {
      k.hide(p);
      this._initMenuItem(p, q, r);
    },
    _initMenuItem: function (p, q, r) {
      this.initSubscribe(p, r);
      this.initUnsubscribe(q, r);
      h.subscribe(o.SUBSCRIBED, function (s, t) {
        k.hide(p);
        k.show(q);
      });
      h.subscribe(o.UNSUBSCRIBED, function (s, t) {
        k.hide(q);
        k.show(p);
      });
    }
  };
  f.exports = o;
}, null);
__d('LitestandStoryInsertionStatus', ['ArbiterMixin'], function a(b, c, d, e, f, g, h) {
  if (c.__markCompiled) c.__markCompiled();
  var i = 'check',
    j = {
      registerBlocker: function (k) {
        return j.subscribe(i, function (l, m) {
          if (m.can_insert && k()) m.can_insert = false;
        });
      },
      canInsert: function () {
        var k = {
          can_insert: true
        };
        j.inform(i, k);
        return k.can_insert;
      }
    };
  Object.assign(j, h);
  f.exports = j;
}, null);
__d('ConnectionsPYMLTypedLogger', ['Banzai', 'GeneratedLoggerUtils', 'nullthrows'], function a(b, c, d, e, f, g, h, i, j) {
  'use strict';
  if (c.__markCompiled) c.__markCompiled();

  function k() {
    this.clear();
  }
  k.prototype.log = function () {
    i.log('logger:ConnectionsPYMLLoggerConfig', this.$ConnectionsPYMLTypedLogger1, h.BASIC);
  };
  k.prototype.logVital = function () {
    i.log('logger:ConnectionsPYMLLoggerConfig', this.$ConnectionsPYMLTypedLogger1, h.VITAL);
  };
  k.prototype.clear = function () {
    this.$ConnectionsPYMLTypedLogger1 = {};
    return this;
  };
  k.prototype.updateData = function (m) {
    this.$ConnectionsPYMLTypedLogger1 = babelHelpers._extends({}, this.$ConnectionsPYMLTypedLogger1, m);
    return this;
  };
  k.prototype.setEvent = function (m) {
    this.$ConnectionsPYMLTypedLogger1.event = m;
    return this;
  };
  k.prototype.setLikeSource = function (m) {
    this.$ConnectionsPYMLTypedLogger1.like_source = m;
    return this;
  };
  k.prototype.setPageID = function (m) {
    this.$ConnectionsPYMLTypedLogger1.page_id = m;
    return this;
  };
  k.prototype.updateExtraData = function (m) {
    m = j(i.serializeMap(m));
    i.checkExtraDataFieldNames(m, l);
    this.$ConnectionsPYMLTypedLogger1 = babelHelpers._extends({}, this.$ConnectionsPYMLTypedLogger1, m);
    return this;
  };
  k.prototype.addToExtraData = function (m, n) {
    var o = {};
    o[m] = n;
    return this.updateExtraData(o);
  };
  var l = {
    event: true,
    like_source: true,
    page_id: true
  };
  f.exports = k;
}, null);
__d('SocialGoodCharityActionsTypedLogger', ['Banzai', 'GeneratedLoggerUtils', 'nullthrows'], function a(b, c, d, e, f, g, h, i, j) {
  'use strict';
  if (c.__markCompiled) c.__markCompiled();

  function k() {
    this.clear();
  }
  k.prototype.log = function () {
    i.log('logger:SocialGoodCharityActionsLoggerConfig', this.$SocialGoodCharityActionsTypedLogger1, h.BASIC);
  };
  k.prototype.logVital = function () {
    i.log('logger:SocialGoodCharityActionsLoggerConfig', this.$SocialGoodCharityActionsTypedLogger1, h.VITAL);
  };
  k.prototype.clear = function () {
    this.$SocialGoodCharityActionsTypedLogger1 = {};
    return this;
  };
  k.prototype.updateData = function (m) {
    this.$SocialGoodCharityActionsTypedLogger1 = babelHelpers._extends({}, this.$SocialGoodCharityActionsTypedLogger1, m);
    return this;
  };
  k.prototype.setAbTestNamesToGroups = function (m) {
    this.$SocialGoodCharityActionsTypedLogger1.ab_test_names_to_groups = i.serializeMap(m);
    return this;
  };
  k.prototype.setAttributes = function (m) {
    this.$SocialGoodCharityActionsTypedLogger1.attributes = i.serializeMap(m);
    return this;
  };
  k.prototype.setCampaignID = function (m) {
    this.$SocialGoodCharityActionsTypedLogger1.campaign_id = m;
    return this;
  };
  k.prototype.setCampaignType = function (m) {
    this.$SocialGoodCharityActionsTypedLogger1.campaign_type = m;
    return this;
  };
  k.prototype.setEvent = function (m) {
    this.$SocialGoodCharityActionsTypedLogger1.event = m;
    return this;
  };
  k.prototype.setFundraiserID = function (m) {
    this.$SocialGoodCharityActionsTypedLogger1.fundraiser_id = m;
    return this;
  };
  k.prototype.setHasPaymentMethodOnFile = function (m) {
    this.$SocialGoodCharityActionsTypedLogger1.has_payment_method_on_file = m;
    return this;
  };
  k.prototype.setParentEventType = function (m) {
    this.$SocialGoodCharityActionsTypedLogger1.parent_event_type = m;
    return this;
  };
  k.prototype.setSourceAttributes = function (m) {
    this.$SocialGoodCharityActionsTypedLogger1.source_attributes = i.serializeMap(m);
    return this;
  };
  k.prototype.setVC = function (m) {
    this.$SocialGoodCharityActionsTypedLogger1.vc = m;
    return this;
  };
  k.prototype.updateExtraData = function (m) {
    m = j(i.serializeMap(m));
    i.checkExtraDataFieldNames(m, l);
    this.$SocialGoodCharityActionsTypedLogger1 = babelHelpers._extends({}, this.$SocialGoodCharityActionsTypedLogger1, m);
    return this;
  };
  k.prototype.addToExtraData = function (m, n) {
    var o = {};
    o[m] = n;
    return this.updateExtraData(o);
  };
  var l = {
    ab_test_names_to_groups: true,
    attributes: true,
    campaign_id: true,
    campaign_type: true,
    event: true,
    fundraiser_id: true,
    has_payment_method_on_file: true,
    parent_event_type: true,
    source_attributes: true,
    vc: true
  };
  f.exports = k;
}, null);
__d('MercuryLoggingHelper', [], function a(b, c, d, e, f, g) {
  if (c.__markCompiled) c.__markCompiled();
  var h = {
    obfuscateThread: function (i) {
      var j = babelHelpers._extends({}, i);
      if (i && i.snippet && i.snippet.length > 5) j.snippet = i.snippet.substr(0, 5) + '...';
      return j;
    },
    obfuscateMessage: function (i) {
      var j = babelHelpers._extends({}, i);
      if (i && i.body && i.body.length > 5) j.body = i.body.substr(0, 5) + '...';
      return j;
    }
  };
  f.exports = h;
}, null);
__d('MercuryServerDispatcher', ['AsyncRequest', 'BanzaiLogger', 'ChatPerfEvent', 'CurrentUser', 'LogHistory', 'MercuryLoggingHelper', 'areJSONRepresentationsEqual', 'debounceAcrossTransitions', 'performanceAbsoluteNow'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
  'use strict';
  if (c.__markCompiled) c.__markCompiled();
  var q = {},
    r = l.getInstance('mercury_server_dispatcher'),
    s = false,
    t = {
      IMMEDIATE: 'immediate',
      IDEMPOTENT: 'idempotent',
      BATCH_SUCCESSIVE: 'batch-successive',
      BATCH_SUCCESSIVE_UNIQUE: 'batch-successive-unique',
      BATCH_SUCCESSIVE_PIGGYBACK_ON_ERROR: 'batch-successive-piggyback-retry',
      BATCH_DEFERRED_MULTI: 'batch-deferred-multi',
      BATCH_CONDITIONAL: 'batch-conditional',
      DEFAULT_ENDPOINT_ID: 'mercuryServerDispatcherDefaultEndpointID',
      registerEndpoints: function (w) {
        for (var x in w) {
          var y = w[x],
            z = y.request_user_id || k.getID(),
            aa = y.endpoint_id || t.DEFAULT_ENDPOINT_ID;
          if (!q[x]) q[x] = {};
          if (!q[x][z]) q[x][z] = {};
          q[x][z][aa] = new u(x, y);
        }
      },
      trySend: function (w, x, y, z, aa) {
        z = z || k.getID();
        aa = aa || t.DEFAULT_ENDPOINT_ID;
        q[w][z][aa].trySend(x, y);
      }
    };

  function u(w, x) {
    var y = x.mode || t.IMMEDIATE;
    switch (y) {
    case t.IMMEDIATE:
    case t.IDEMPOTENT:
    case t.BATCH_SUCCESSIVE:
    case t.BATCH_SUCCESSIVE_UNIQUE:
    case t.BATCH_SUCCESSIVE_PIGGYBACK_ON_ERROR:
    case t.BATCH_DEFERRED_MULTI:
    case t.BATCH_CONDITIONAL:
      break;
    default:
      throw new Error('Invalid MercuryServerDispatcher mode ' + y);
    }
    this._endpoint = w;
    this._mode = y;
    this._customHeader = x.customHeader;
    this._requestUserID = x.request_user_id;
    this._combineData = x.batch_function;
    this._combineDataIf = x.batch_if;
    this._batchSizeLimit = x.batch_size_limit;
    this._batches = [];
    this._handler = x.handler;
    this._errorHandler = x.error_handler;
    this._transportErrorHandler = x.transport_error_handler || x.error_handler;
    this._connectionRetries = x.connection_retries || 0;
    this._timeoutHandler = x.timeout_handler;
    this._timeout = x.timeout;
    this._serverDialogCancelHandler = x.server_dialog_cancel_handler || x.error_handler;
    this._deferredSend = o(this._batchSend, 0, this);
  }
  Object.assign(u.prototype, {
    _inFlight: 0,
    _handler: null,
    _errorHandler: null,
    _transportErrorHandler: null,
    _timeoutHandler: null,
    _timeout: null,
    _serverDialogCancelHandler: null,
    _combineData: null,
    trySend: function (w, x) {
      if (s) return;
      if (w === undefined) w = null;
      var y = x || this._mode;
      if (y == t.IMMEDIATE) {
        this._send(w);
      } else if (y == t.IDEMPOTENT) {
        if (!this._inFlight) this._send(w);
      } else if (y == t.BATCH_SUCCESSIVE || y == t.BATCH_SUCCESSIVE_UNIQUE) {
        if (!this._inFlight) {
          this._send(w);
        } else this._batchData(w);
      } else if (y == t.BATCH_CONDITIONAL) {
        var z = this._batches[0] && this._batches[0].getData();
        if (this._inFlight && (this._combineDataIf(this._pendingRequestData, w) || this._combineDataIf(z, w))) {
          this._batchData(w);
        } else this._send(w);
      } else if (y == t.BATCH_DEFERRED_MULTI) {
        this._batchData(w);
        this._deferredSend();
      } else if (y == t.BATCH_SUCCESSIVE_PIGGYBACK_ON_ERROR) {
        this._batchData(w);
        if (!this._inFlight) this._batchSend();
      }
    },
    _send: function (w) {
      this._inFlight++;
      this._pendingRequestData = babelHelpers._extends({}, w);
      if (this._requestUserID != k.getID()) w.request_user_id = this._requestUserID;
      var x = [];
      if (w && w.message_batch)
        for (var y = 0; y < w.message_batch.length; y++) {
          var z = m.obfuscateMessage(w.message_batch[y]);
          x.push(z);
        }
      var aa = x.length ? babelHelpers._extends({}, w, {
        message_batch: x
      }) : w;
      r.log('send', {
        endpoint: this._endpoint,
        data: aa,
        inflight_count: this._inFlight
      });
      var ba = p(),
        ca = new h(this._endpoint).setData(w).setOption('retries', this._connectionRetries).setHandler((function (da) {
          i.log('ChatPerfLoggerConfig', {
            event: j.ASYNC_REQUEST,
            duration: p() - ba,
            endpoint: this._endpoint
          });
          this._handleResponse(da);
        }).bind(this)).setErrorHandler(this._handleError.bind(this)).setTransportErrorHandler(this._handleTransportError.bind(this)).setServerDialogCancelHandler(this._handleServerDialogCancel.bind(this)).setAllowCrossPageTransition(true);
      if (this._customHeader) ca.setRequestHeader(this._customHeader.name, this._customHeader.value);
      if (this._timeout && this._timeoutHandler) ca.setTimeoutHandler(this._timeout, this._handleTimeout.bind(this));
      ca.send();
    },
    _batchData: function (w, x) {
      if (this._mode == t.BATCH_SUCCESSIVE_UNIQUE && this._pendingRequestData !== undefined && n(w, this._pendingRequestData)) {
        return;
      } else {
        var y = this._batches.length - 1;
        if (y >= 0 && !this._hasReachedBatchLimit(this._batches[y])) {
          x ? this._batches[y].combineWithOlder(w, this._combineData) : this._batches[y].combineWith(w, this._combineData);
        } else this._batches.push(new v(w));
        r.debug('batch', {
          endpoint: this._endpoint,
          batches: this._batches,
          batch_limit: this._batchSizeLimit
        });
      }
    },
    _hasReachedBatchLimit: function (w) {
      return this._batchSizeLimit && w.getSize() >= this._batchSizeLimit;
    },
    _batchSend: function () {
      if (this._batches[0]) {
        this._send(this._batches[0].getData());
        this._batches.shift();
      }
    },
    _handleResponse: function (w) {
      this._inFlight--;
      r.log('response', {
        endpoint: this._endpoint,
        inflight_count: this._inFlight
      });
      var x = w.getPayload();
      s = x && x.kill_chat;
      if (s) r.log('killswitch_enabled', {
        endpoint: this._endpoint,
        inflight_count: this._inFlight
      });
      if (x && x.error_payload) {
        if (this._errorHandler) this._errorHandler(w);
      } else this._handler && this._handler(x, w.getRequest());
      if (this._mode == t.BATCH_SUCCESSIVE || this._mode == t.BATCH_SUCCESSIVE_UNIQUE || this._mode == t.BATCH_SUCCESSIVE_PIGGYBACK_ON_ERROR || this._mode == t.BATCH_CONDITIONAL) this._batchSend();
      delete this._pendingRequestData;
    },
    _postErrorHandler: function () {
      r.error('error', {
        endpoint: this._endpoint,
        inflight_count: this._inFlight - 1
      });
      this._inFlight--;
      var w = this._mode;
      if (w == t.BATCH_SUCCESSIVE || w == t.BATCH_SUCCESSIVE_UNIQUE || w == t.BATCH_CONDITIONAL) {
        this._batchSend();
      } else if (w == t.BATCH_SUCCESSIVE_PIGGYBACK_ON_ERROR)
        if (this._batches[0]) {
          this._batchData(this._pendingRequestData, true);
          this._batchSend();
        } else this._batchData(this._pendingRequestData, true);
      delete this._pendingRequestData;
    },
    _handleError: function (w) {
      this._errorHandler && this._errorHandler(w);
      this._postErrorHandler();
    },
    _handleTransportError: function (w) {
      this._transportErrorHandler && this._transportErrorHandler(w);
      this._postErrorHandler();
    },
    _handleTimeout: function (w) {
      this._timeoutHandler && this._timeoutHandler(w);
      this._postErrorHandler();
    },
    _handleServerDialogCancel: function (w) {
      this._serverDialogCancelHandler && this._serverDialogCancelHandler(w);
      this._postErrorHandler();
    }
  });

  function v(w) {
    this._data = w;
    this._size = 1;
  }
  Object.assign(v.prototype, {
    getData: function () {
      return this._data;
    },
    getSize: function () {
      return this._size;
    },
    combineWith: function (w, x) {
      this._data = x(this._data, w);
      this._size++;
    },
    combineWithOlder: function (w, x) {
      this._data = x(w, this._data);
      this._size++;
    }
  });
  f.exports = t;
}, null);
__d('DialogHideOnSuccess', ['CSS', 'cx'], function a(b, c, d, e, f, g, h, i) {
  if (c.__markCompiled) c.__markCompiled();

  function j(k) {
    'use strict';
    this._layer = k;
  }
  j.prototype.enable = function () {
    'use strict';
    this._subscription = this._layer.subscribe('success', this._handle.bind(this));
  };
  j.prototype.disable = function () {
    'use strict';
    this._subscription.unsubscribe();
    this._subscription = null;
  };
  j.prototype._handle = function (k, event) {
    'use strict';
    if (h.hasClass(event.getTarget(), "_s")) this._layer.hide();
  };
  Object.assign(j.prototype, {
    _subscription: null
  });
  f.exports = j;
}, null);
__d('FBID', [], function a(b, c, d, e, f, g) {
  'use strict';
  if (c.__markCompiled) c.__markCompiled();
  var h = {
    isUser: function (i) {
      return i < 2.2e+09 || i >= 1e+14 && i <= 100099999989999 || i >= 8.9e+13 && i <= 89999999999999 || i >= 6.000001e+13 && i <= 60000019999999;
    }
  };
  f.exports = h;
}, null);
__d('RTLKeys', ['Keys', 'Locale'], function a(b, c, d, e, f, g, h, i) {
  if (c.__markCompiled) c.__markCompiled();
  var j = babelHelpers._extends({}, h);
  if (i.isRTL()) {
    j.LEFT = h.RIGHT;
    j.RIGHT = h.LEFT;
  }
  f.exports = j;
}, null);
__d('SystemEvents', ['Arbiter', 'ErrorUtils', 'SystemEventsInitialData', 'UserAgent_DEPRECATED', 'setIntervalAcrossTransitions'], function a(b, c, d, e, f, g, h, i, j, k, l) {
  if (c.__markCompiled) c.__markCompiled();
  var m = new h(),
    n = [],
    o = 1000;
  l(function () {
    for (var y = 0; y < n.length; y++) n[y]();
  }, o);

  function p() {
    return (/c_user=(\d+)/.test(document.cookie) && RegExp.$1 || 0);
  }

  function q() {
    return j.ORIGINAL_USER_ID;
  }
  var r = q(),
    s = navigator.onLine;

  function t() {
    if (!s) {
      s = true;
      m.inform(m.ONLINE, s);
    }
  }

  function u() {
    if (s) {
      s = false;
      m.inform(m.ONLINE, s);
    }
  }
  if (k.ie()) {
    if (k.ie() >= 11) {
      window.addEventListener('online', t, false);
      window.addEventListener('offline', u, false);
    } else if (k.ie() >= 8) {
      window.attachEvent('onload', function () {
        document.body.ononline = t;
        document.body.onoffline = u;
      });
    } else n.push(function () {
      (navigator.onLine ? t : u)();
    });
  } else if (window.addEventListener)
    if (!k.chrome()) {
      window.addEventListener('online', t, false);
      window.addEventListener('offline', u, false);
    } var v = r;
  n.push(function () {
    var y = p();
    if (v != y) {
      m.inform(m.USER, y);
      v = y;
    }
  });
  var w = Date.now();

  function x() {
    var y = Date.now(),
      z = y - w,
      aa = z < 0 || z > 10000;
    w = y;
    if (aa) m.inform(m.TIME_TRAVEL, z);
    return aa;
  }
  n.push(x);
  n.push(function () {
    if (window.onerror != i.onerror) window.onerror = i.onerror;
  });
  Object.assign(m, {
    USER: 'SystemEvents/USER',
    ONLINE: 'SystemEvents/ONLINE',
    TIME_TRAVEL: 'SystemEvents/TIME_TRAVEL',
    isPageOwner: function (y) {
      return (y || p()) == r;
    },
    isOnline: function () {
      return k.chrome() || s;
    },
    checkTimeTravel: x
  });
  f.exports = m;
}, null);
__d('Tour', ['Arbiter', 'LayerDestroyOnHide', 'LayerHideOnEscape', 'NavigationMessage', 'PageEvents'], function a(b, c, d, e, f, g, h, i, j, k, l) {
  if (c.__markCompiled) c.__markCompiled();

  function m() {
    'use strict';
    if (m._instance) m._instance.setTourComplete();
    m._instance = this;
  }
  m.prototype.init = function () {
    'use strict';
    this._pageLeaveToken = h.subscribe(l.AJAXPIPE_ONUNLOAD, this.handleLeavePage.bind(this));
    this._navigationBeginToken = h.subscribe(k.NAVIGATION_BEGIN, this.handleTransition.bind(this));
    this.steps = {};
    return this;
  };
  m.prototype.registerStep = function (n, o) {
    'use strict';
    n.disableBehavior(i);
    n.disableBehavior(j);
    this.steps[o] = n;
    n.subscribe('show', function () {
      n.inform('tour-dialog-show', n);
    });
    if (!this.getTourStarted()) this.setTourStart();
  };
  m.prototype._unsubscribeSubscriptions = function () {
    'use strict';
    this._navigationBeginToken.unsubscribe();
    this._pageLeaveToken.unsubscribe();
  };
  m.prototype.handleLeavePage = function () {
    'use strict';
    this._unsubscribeSubscriptions();
  };
  m.prototype.handleTransition = function () {
    'use strict';
    this._unsubscribeSubscriptions();
  };
  m.prototype.handleTourStart = function () {
    'use strict';
  };
  m.prototype.handleTourStop = function () {
    'use strict';
  };
  m.prototype.handleTourComplete = function () {
    'use strict';
  };
  m.prototype.showStep = function (n) {
    'use strict';
    var o = this.steps[n];
    if (!(this.openDialog == o)) this.hideOpenDialog();
    if (!o) return;
    this.openDialog = o;
    o.show();
  };
  m.prototype.hideOpenDialog = function () {
    'use strict';
    if (this.openDialog) {
      this.openDialog.hide();
      this.openDialog = null;
    }
  };
  m.prototype.getTourStarted = function () {
    'use strict';
    return this.tourStarted;
  };
  m.prototype.setTourStart = function () {
    'use strict';
    this.tourStarted = true;
    this.handleTourStart();
  };
  m.prototype.setTourStop = function () {
    'use strict';
    this.tourStarted = false;
    this.hideOpenDialog();
    this.handleTourStop();
  };
  m.prototype.setTourComplete = function () {
    'use strict';
    if (this.tourComplete) return;
    this.setTourStop();
    this.tourComplete = true;
    this.handleTourComplete();
  };
  m.prototype.hideStep = function (n) {
    'use strict';
    var o = this.steps[n];
    o && o.hide();
  };
  m.getInstance = function () {
    'use strict';
    return m._instance || (m._instance = new m());
  };
  Object.assign(m.prototype, {
    tourStarted: false,
    tourComplete: false,
    _navigationBeginToken: null,
    _pageLeaveToken: null,
    steps: {},
    openDialog: null
  });
  f.exports = m;
}, null);
__d('XHPTemplate', ['DataStore', 'DOM', 'HTML', 'XHPTemplateProcessor'], function a(b, c, d, e, f, g, h, i, j) {
  if (c.__markCompiled) c.__markCompiled();
  var k = c('XHPTemplateProcessor').processor;

  function l(n) {
    'use strict';
    if (k instanceof Function) n = k(n);
    this._model = n;
  }
  l.prototype.render = function () {
    'use strict';
    if (j.isHTML(this._model)) this._model = i.setContent(document.createDocumentFragment(), this._model)[0];
    return this._model.cloneNode(true);
  };
  l.prototype.build = function () {
    'use strict';
    return new m(this.render());
  };
  l.getNode = function (n, o) {
    'use strict';
    return l.getNodes(n)[o];
  };
  l.getNodes = function (n) {
    'use strict';
    var o = h.get(n, 'XHPTemplate:nodes');
    if (!o) {
      o = {};
      var p = i.scry(n, '[data-jsid]');
      p.push(n);
      var q = p.length;
      while (q--) {
        var r = p[q];
        o[r.getAttribute('data-jsid')] = r;
        r.removeAttribute('data-jsid');
      }
      h.set(n, 'XHPTemplate:nodes', o);
    }
    return o;
  };

  function m(n) {
    'use strict';
    this._root = n;
    this._populateNodes();
  }
  m.prototype._populateNodes = function () {
    'use strict';
    this._nodes = {};
    this._leaves = {};
    var n = this._root.getElementsByTagName('*');
    for (var o = 0, p = n.length; o < p; o++) {
      var q = n[o],
        r = q.getAttribute('data-jsid');
      if (r) {
        q.removeAttribute('data-jsid');
        this._nodes[r] = q;
        this._leaves[r] = !q.childNodes.length;
      }
    }
  };
  m.prototype.getRoot = function () {
    'use strict';
    return this._root;
  };
  m.prototype.getNode = function (n) {
    'use strict';
    return this._nodes[n];
  };
  m.prototype.setNodeProperty = function (n, o, p) {
    'use strict';
    this.getNode(n)[o] = p;
    return this;
  };
  m.prototype.setNodeContent = function (n, o) {
    'use strict';
    if (!this._leaves[n]) throw new Error("Can't setContent on non-leaf node: " + n);
    i.setContent(this.getNode(n), o);
    return this;
  };
  f.exports = l;
}, null);
__d('PageFanning', ['Animation', 'AsyncRequest', 'CSS', 'DOM', 'Parent', 'URI', 'ActorURI', '$', 'collectDataAttributes', 'ConnectionsPYMLTypedLogger'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
  if (c.__markCompiled) c.__markCompiled();
  var r = {
    setFanStatus: function (t, u, v, w, x, y, z) {
      var aa = {
        ft: {}
      };
      if (t) aa = {
        ft: p(t, ['ft']).ft
      };
      var ba = new m(window.location.href).getQueryData();
      if (v)
        if (ba.ref === 'pyml_feed') {
          new q().setEvent('like_page').setLikeSource('profile').setPageID(parseInt(u, 10)).log();
        } else if (ba.ref === 'pyml_permalink') new q().setEvent('like_page').setLikeSource('post_permalink').setPageID(parseInt(u, 10)).log();
      x = x || function (fa) {
        var ga = fa.getPayload();
        if (!ga || !t) return;
        if (ga.reload) {
          r.reloadOnFanStatusChanged();
        } else s(t, ga);
      };
      var ca = {
        fbpage_id: u,
        add: v,
        reload: w
      };
      if (z != null) Object.assign(ca, z);
      Object.assign(ca, aa);
      var da = '/ajax/pages/fan_status.php';
      if (z != null && z.actor_id != null) da = n.create(da, z.actor_id);
      var ea = new i().setURI(da).setData(ca).setNectarModuleDataSafe(t).setHandler(x);
      if (y) ea.setErrorHandler(y);
      ea.send();
      return false;
    },
    reloadOnFanStatusChanged: function () {
      var t = m.getRequestURI();
      window.location.href = t;
    },
    toggleLikeOnFanStatusChanged: function (t, u) {
      var v = o('liked_pages_like_action_' + t),
        w = o('liked_pages_undo_action_' + t);
      j.conditionClass(v, 'hidden_elem', u);
      j.conditionClass(w, 'hidden_elem', !u);
    }
  };

  function s(t, u) {
    var v = u.feedback;
    if (!v) return;
    if (l.byClass(t, 'fbTimelineEscapeSectionItem')) t = l.byClass(t, 'fan_status_inactive') || t;
    var w = k.create('span', {
      className: 'fan_status_inactive'
    }, v);
    t.parentNode.replaceChild(w, t);
    var x = function () {
      if (u.can_repeat_action) w.parentNode.replaceChild(t, w);
    };
    new h(w).duration(3000).checkpoint().to('backgroundColor', '#FFFFFF').duration(1000).ondone(x).go();
  }
  f.exports = r;
}, null);
__d('SocialGoodCharityActionsLoggerUtils', ['SocialGoodCharityActionsLoggerEvents', 'SocialGoodCharityActionsLoggerParentEvents', 'SocialGoodCharityActionsTypedLogger'], function a(b, c, d, e, f, g, h, i, j) {
  if (c.__markCompiled) c.__markCompiled();
  var k = {
    logAction: function (event, l, m, n) {
      new j().setEvent(event).setParentEventType(l).setCampaignID(m.campaign_id).setCampaignType(m.campaign_type).setAttributes(m.attributes).setSourceAttributes(m.source_attributes).setFundraiserID(m.fundraiser_id).log();
    },
    logJoinActionClick: function (l, m) {
      var event = l ? h.JOIN_CLICK : h.LEAVE_CLICK;
      this.logAction(event, i.INTERACT, m);
    },
    logFollowActionClick: function (l, m) {
      var event = l ? h.FOLLOW_CLICK : h.UNFOLLOW_CLICK;
      this.logAction(event, i.INTERACT, m);
    },
    logShareActionClick: function (l) {
      this.logAction(h.SHARE_CLICK, i.INTERACT, l);
    },
    logInviteActionClick: function (l) {
      this.logAction(h.INVITE_CLICK, i.INTERACT, l);
    }
  };
  f.exports = k;
}, null);
__d("XPagesLikeCountController", ["XController"], function a(b, c, d, e, f, g) {
  c.__markCompiled && c.__markCompiled();
  f.exports = c("XController").create("\/pages\/x\/updateLikeCountDomString\/", {
    page_id: {
      type: "Int",
      required: true
    },
    like_id: {
      type: "String",
      required: true
    }
  });
}, null);
__d('PageLikeButton', ['Arbiter', 'AsyncRequest', 'AsyncResponse', 'EditSubscriptions', 'Event', 'FeedBlacklistButton', 'PageFanning', 'PageLikeConstants', 'SocialGoodCharityActionsLoggerUtils', 'SubscribeButton', 'Tour', 'XPagesLikeCountController'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) {
  if (c.__markCompiled) c.__markCompiled();
  var t = {
    init: function (u, v, w, x, y, z, aa, ba, ca, da, ea, fa) {
      var ga = this._getOption(fa, 'isLazy');
      this._subscribe(o.LIKED, ga, (function (ia, ja) {
        if (this._shouldUpdateButton(x, fa, ja)) {
          u.swap();
          if (!ca) w.suppressNextMouseEnter && w.suppressNextMouseEnter();
          if (this._getOption(fa, 'is_fundraiser')) k.toggleNotificationsOnJoin(x, true);
        }
      }).bind(this));
      this._subscribe(o.UNLIKED, ga, (function (ia, ja) {
        if (this._shouldUpdateButton(x, fa, ja)) {
          u.unswap();
          w.hideFlyout && w.hideFlyout();
          if (this._getOption(fa, 'is_fundraiser')) k.toggleNotificationsOnJoin(x, false);
        }
      }).bind(this));
      if (ea) this._subscribe(o.SPM_CALLOUT, ga, (function (ia, ja) {
        if (this._shouldUpdateButton(x, fa, ja)) {
          ea.show();
          h._releaseAllEvents(o.SPM_CALLOUT);
        }
      }).bind(this));
      var ha = (function (event) {
        var ia = u.getCurrentButton();
        this._likeButtonAction(x, y, z, aa, ia, event, fa);
      }).bind(this);
      l.listen(v, 'click', ha);
      if (ga) h.subscribe(o.LAZY_CLICK, function (ia, ja) {
        var event = ja.event,
          ka = ja.node;
        if (ka !== v) return;
        ha(event);
      });
    },
    _subscribe: function (event, u, v) {
      var w = u ? [event, event + '.lazy'] : [event];
      h.subscribe(w, v);
    },
    initCallout: function (u, v) {
      var w = document.getElementById('pageActionLikeCalloutButton');
      l.listen(w, 'click', this._likeButtonAction(u, v, null, null, null));
    },
    initUnlike: function (u, v, w, x) {
      var y = this._getOption(x, 'actor_id');
      l.listen(u, 'click', (function (event) {
        this.doUnlikeAction(event, v, w, y, x);
      }).bind(this));
    },
    doUnlikeAction: function (event, u, v, w, x) {
      this._saveLike(event.getTarget(), u, false, function (y) {
        h.inform(o.LIKED, {
          profile_id: u,
          actor_id: w
        });
        j.defaultErrorHandler(y);
      }, v, null, null, x);
      this.informUnlike(u, w);
    },
    informLike: function (u, v, w, x) {
      var y = this._getOption(x, 'actor_id'),
        z = {
          profile_id: u,
          actor_id: y,
          target: v,
          origin: w
        };
      h.inform(o.LIKED, z);
      z.connected = true;
      h.inform(q.SUBSCRIBED, z);
      h.inform(m.UNBLACKLIST, z);
    },
    informLikeSuccess: function (u) {
      var v = {
        profile_id: u
      };
      h.inform(o.LIKED_SUCCESS, v);
      h.inform(o.SPM_CALLOUT, v);
    },
    informUnlike: function (u, v) {
      var w = {
        profile_id: u,
        actor_id: v
      };
      setTimeout(h.inform.bind(h, o.UNLIKED, w), 0);
      w.connected = false;
      setTimeout(h.inform.bind(h, q.UNSUBSCRIBED, w), 0);
      h.inform(m.BLACKLIST, w);
    },
    updateLikeCount: function (u, v) {
      h.subscribe(o.LIKED_SUCCESS, function (w, x) {
        var y = x.profile_id;
        if (v == y) {
          var z = s.getURIBuilder().setInt('page_id', v).setString('like_id', u).getURI();
          new i().setURI(z).send();
        }
      });
    },
    _saveLike: function (u, v, w, x, y, z, aa, ba) {
      var ca = this._getOption(ba, 'actor_id');
      r.getInstance().hideStep('low_page_likes');
      if (this._getOption(ba, 'is_fundraiser') && this._getOption(ba, 'logging_info')) p.logJoinActionClick(w, this._getOption(ba, 'logging_info'));
      n.setFanStatus(u, v, w, false, (function () {
        t.informLikeSuccess(v);
        if (!w && this._getOption(ba, 'reload_on_unlike') || w && this._getOption(ba, 'reload_on_like')) location.reload();
      }).bind(this), x, {
        fan_origin: y,
        fan_source: z,
        cat: aa,
        actor_id: ca
      });
    },
    _likeButtonAction: function (u, v, w, x, y, event, z) {
      var aa = this._getOption(z, 'actor_id');
      this._saveLike(event.getTarget(), u, true, function (ba) {
        h.inform(o.UNLIKED, {
          profile_id: u,
          actor_id: aa
        });
        j.defaultErrorHandler(ba);
      }, v, w, x, z);
      t.informLike(u, y, v, z);
    },
    _shouldUpdateButton: function (u, v, w) {
      var x = this._getOption(v, 'actor_id');
      if (u === w.profile_id) {
        if (x === null) return true;
        if (w.actor_id !== null && x === w.actor_id) return true;
      }
      return false;
    },
    _getOption: function (u, v) {
      if (u && v in u) return u[v];
      return null;
    }
  };
  f.exports = t;
  b.PageLikeButton = t;
}, null);
__d('SnowflakePermalinkUtils', ['URI'], function a(b, c, d, e, f, g, h) {
  if (c.__markCompiled) c.__markCompiled();
  var i = /\/[^/]+\/(albums\/([^/]+)|posts\/([a-zA-Z]+[^/]+))\/([^/]+\/)?/,
    j = /\/[^/]+\/(albums|posts)\/([^/]+)\/([^/]+\/)?/,
    k = {
      isPermalinkURI: function (l) {
        l = new h(l);
        return i.test(l.getPath());
      },
      parseURI: function (l) {
        if (!this.isPermalinkURI(l)) return {};
        l = new h(l);
        var m = l.getPath().match(j);
        return {
          setToken: m[2],
          entIdentifierToken: m[3],
          photoID: l.getQueryData().photo_id
        };
      }
    };
  f.exports = k;
}, null);
__d('ClipboardPhotoUploader', ['ArbiterMixin', 'AsyncRequest', 'mixin'], function a(b, c, d, e, f, g, h, i, j) {
  if (c.__markCompiled) c.__markCompiled();
  var k, l;
  k = babelHelpers.inherits(m, j(h));
  l = k && k.prototype;

  function m(n, o) {
    'use strict';
    l.constructor.call(this);
    this.uploadURIString = n;
    this.data = o;
  }
  m.prototype.handlePaste = function (event) {
    'use strict';
    var n = m.getImages(event);
    for (var o = 0; o < n.length; ++o) {
      var p = new FormData();
      p.append('pasted_file', n[o]);
      var q = new i();
      q.setURI(this.uploadURIString).setData(this.data).setRawData(p).setHandler((function (r) {
        this.inform('upload_success', r);
      }).bind(this)).setErrorHandler((function (r) {
        this.inform('upload_error', r);
      }).bind(this)).setAbortHandler((function (r) {
        this.inform('upload_error', r);
      }).bind(this));
      this.inform('upload_start');
      q.send();
      break;
    }
  };
  m.getImages = function (event) {
    'use strict';
    if (!event.clipboardData) return [];
    var n = event.clipboardData.items;
    if (!n) return [];
    var o, p = [];
    for (var q = 0; q < n.length; ++q) {
      o = n[q];
      if (o.kind === 'string') return [];
      if (o.kind === 'file' && o.type.indexOf('image/') !== -1) p.push(o.getAsFile());
      if (o.kind === 'blob') p.push(o.blob);
    }
    return p;
  };
  f.exports = m;
}, null);
__d('CommentPrelude', ['Arbiter', 'BanzaiODS', 'ErrorUtils', 'CSS', 'Parent', 'clickRefAction', 'ex'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n) {
  if (c.__markCompiled) c.__markCompiled();

  function o(u, v) {
    if (u === 'ufi.react' || u === 'ufi_mentions_input.react' || u === 'ufi_controller' || u === 'action_link_bling' || u === 'action_link_timeline_bling') return;
    var w = new Error(n('Deprecated CommentPrelude action %s called from ref %s', v || 'unknown', u || 'unknown'));
    w.type = 'warn';
    j.reportError(w);
    i.bumpEntityKey('comment_prelude', u);
  }

  function p(u, v, w) {
    o(w, 'click');
    var x = l.byTag(u, 'form');
    if (!x || !k.hasClass(x, 'collapsible_comments')) return;
    m('ufi', u, null, 'FORCE');
    return q(u, v, w);
  }

  function q(u, v, w) {
    o(w, 'expand');
    var x = l.byTag(u, 'form');
    if (!x || !k.hasClass(x, 'collapsible_comments')) return;
    r(x, w);
    if (v !== false) {
      var y = x.add_comment_text_text || x.add_comment_text,
        z = y.length;
      if (z)
        if (!l.byClass(y[z - 1], 'UFIReplyList')) {
          y = y[z - 1];
        } else if (!l.byClass(y[0], 'UFIReplyList')) {
        y = y[0];
      } else y = null;
      if (y) {
        y.focus();
        h.inform('comment/focus', {
          element: y
        });
      }
    }
    return false;
  }

  function r(u, v) {
    o(v, 'uncollapse');
    if (!u || !k.hasClass(u, 'collapsible_comments')) return;
    var w = k.removeClass.bind(null, u, 'collapsed_comments');
    if (window.ScrollAwareDOM) {
      window.ScrollAwareDOM.monitor(u, w);
    } else w();
  }

  function s(u) {
    var v = u.getAttribute('data-comment-prelude-ref');
    o(v, 'blingbox');
    var w = l.byTag(u, 'form');
    if (!w || !k.hasClass(w, 'collapsible_comments')) return;
    k.toggleClass(w, 'collapsed_comments');
  }
  var t = {
    click: p,
    expand: q,
    uncollapse: r,
    onBlingboxClick: s,
    logRef: o
  };
  f.exports = t;
}, null);
__d('SwapButton', ['DOM', 'Event', 'Focus'], function a(b, c, d, e, f, g, h, i, j) {
  if (c.__markCompiled) c.__markCompiled();

  function k(m, n, o) {
    h.insertAfter(n, m);
    h.remove(n);
    o && j.setWithoutOutline(m);
  }

  function l(m, n, o) {
    'use strict';
    this._swapperButton = m;
    this._swappeeButton = n;
    i.listen(m, 'click', k.bind(null, n, m, true));
    if (o) i.listen(n, 'click', k.bind(null, m, n, true));
  }
  l.prototype.swap = function (m) {
    'use strict';
    if (this._swapperButton.parentNode) k(this._swappeeButton, this._swapperButton, m);
  };
  l.prototype.unswap = function (m) {
    'use strict';
    if (!this._swapperButton.parentNode) k(this._swapperButton, this._swappeeButton, m);
  };
  l.prototype.toggle = function (m) {
    'use strict';
    if (this._swapperButton.parentNode) {
      this.swap(m);
    } else this.unswap(m);
  };
  l.prototype.getCurrentButton = function () {
    'use strict';
    return this._swapperButton.parentNode ? this._swapperButton : this._swappeeButton;
  };
  Object.assign(l.prototype, {
    _swapperButton: null,
    _swappeeButton: null
  });
  f.exports = l;
}, null);
__d('HoverButton', ['AsyncRequest', 'CSS', 'DOM', 'URI', 'cx'], function a(b, c, d, e, f, g, h, i, j, k, l) {
  if (c.__markCompiled) c.__markCompiled();

  function m(n, o, p, q) {
    'use strict';
    this._button = n;
    this._flyout = o;
    this._flyoutAjaxify = q;
    this._flyoutContent = p;
    o.subscribe('show', this._onShow.bind(this));
    o.subscribe('hide', this._onHide.bind(this));
  }
  m.prototype.showFlyoutBriefly = function () {
    'use strict';
    this.showFlyout();
    this._flyout.hideFlyoutDelayed(5000);
  };
  m.prototype.showFlyout = function () {
    'use strict';
    this._flyout.showFlyout(this._button, true);
    this._flyout.inform('show', this._button);
  };
  m.prototype.hideFlyout = function () {
    'use strict';
    this._flyout.hideFlyout(true);
    this._flyout.inform('hide', this._button);
  };
  m.prototype.enableButton = function () {
    'use strict';
    this._flyout.initNode(this._button);
  };
  m.prototype.disableButton = function () {
    'use strict';
    this.hideFlyout();
    this._flyout.deactivateNode(this._button);
  };
  m.prototype._onShow = function (n, o) {
    'use strict';
    i.addClass(o, "_52nd");
    if (i.hasClass(o, 'uiButton') || i.hasClass(o, "_42fu")) i.addClass(o, 'selected');
    if (this._flyoutAjaxify) {
      i.addClass(this._flyoutContent, 'async_saving');
      new h().setURI(new k(this._flyoutAjaxify)).setHandler((function (p) {
        i.removeClass(this._flyoutContent, 'async_saving');
        j.setContent(this._flyoutContent, p.payload);
      }).bind(this)).send();
      this._flyoutAjaxify = null;
    }
  };
  m.prototype._onHide = function (n, o) {
    'use strict';
    i.removeClass(o, "_52nd");
    if (i.hasClass(o, 'uiButton') || i.hasClass(o, "_42fu")) i.removeClass(o, 'selected');
  };
  m.prototype.destroy = function () {
    'use strict';
    this.hideFlyout();
    this._flyout.destroy();
  };
  m.prototype.suppressNextMouseEnter = function () {
    'use strict';
    this._flyout.setActiveNode(this._button);
  };
  Object.assign(m.prototype, {
    _button: null,
    _flyout: null,
    _flyoutAjaxify: null,
    _flyoutContent: null
  });
  f.exports = m;
}, null);
__d('HoverFlyout', ['Arbiter', 'ArbiterMixin', 'DataStore', 'Event', 'Keys', 'arrayContains', 'mixin', 'removeFromArray', 'shield'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
  if (c.__markCompiled) c.__markCompiled();
  var q, r;
  q = babelHelpers.inherits(s, n(i));
  r = q && q.prototype;

  function s(t, u, v, w) {
    'use strict';
    r.constructor.call(this);
    if (t) {
      this._showDelay = v;
      this._hideDelay = w;
      this.init(t);
      if (u) this.initNode(u);
    }
    h.subscribe('SwapButtonDEPRECATED/focusOnJoinButton', p(this.hideFlyout, this), h.SUBSCRIBE_ALL);
  }
  s.prototype.init = function (t) {
    'use strict';
    this._flyout = t;
    this._showDelay = this._showDelay || 0;
    this._hideDelay = this._hideDelay || 100;
    this._showTimeout = null;
    this._hideTimeout = null;
    this._flyoutSubscriptions = [this._flyout.subscribe('mouseenter', this._onFlyoutMouseEnter.bind(this)), this._flyout.subscribe('mouseleave', p(this.hideFlyout, this))];
    this._nodes = [];
    this._dataStoreUnique = 'HoverFlyout_' + Date.now() + '_listeners';
    return this;
  };
  s.prototype.initNode = function (t) {
    'use strict';
    if (m(this._nodes, t)) return this;
    this._nodes.push(t);
    j.set(t, this._dataStoreUnique, [k.listen(t, 'mouseenter', this._onNodeMouseEnter.bind(this, t)), k.listen(t, 'mouseleave', p(this.hideFlyout, this)), k.listen(t, 'click', this._onNodeMouseEnter.bind(this, t)), k.listen(t, 'keydown', this._onNodeKeyEscape.bind(this))]);
    return this;
  };
  s.prototype.deactivateNode = function (t) {
    'use strict';
    var u = j.get(t, this._dataStoreUnique);
    if (u)
      while (u.length) u.pop().remove();
    o(this._nodes, t);
  };
  s.prototype.setShowDelay = function (t) {
    'use strict';
    this._showDelay = t;
    return this;
  };
  s.prototype.setHideDelay = function (t) {
    'use strict';
    this._hideDelay = t;
    return this;
  };
  s.prototype.showFlyout = function (t, u) {
    'use strict';
    this.setActiveNode(t);
    if (u) {
      this._flyout.setContext(t).show();
      this.inform('show', t);
    } else this._showTimeout = setTimeout(this.showFlyout.bind(this, t, true), this._showDelay);
    return this;
  };
  s.prototype.hideFlyout = function (t) {
    'use strict';
    clearTimeout(this._showTimeout);
    if (t) {
      this._flyout.hide();
      this._activeNode && this.inform('hide', this._activeNode);
      this._activeNode = null;
    } else this._hideTimeout = setTimeout(this.hideFlyout.bind(this, true), this._hideDelay);
  };
  s.prototype.hideFlyoutDelayed = function (t) {
    'use strict';
    clearTimeout(this._showTimeout);
    clearTimeout(this._hideTimeout);
    this._hideTimeout = setTimeout(this.hideFlyout.bind(this, true), t);
  };
  s.prototype.getActiveNode = function () {
    'use strict';
    return this._activeNode;
  };
  s.prototype.setActiveNode = function (t) {
    'use strict';
    clearTimeout(this._hideTimeout);
    if (this._activeNode && this._activeNode !== t) this.hideFlyout(true);
    this._activeNode = t;
    return this;
  };
  s.prototype.clearNodes = function () {
    'use strict';
    for (var t = this._nodes.length; t > 0; t--) this.deactivateNode(this._nodes[t - 1]);
  };
  s.prototype.destroy = function () {
    'use strict';
    while (this._flyoutSubscriptions.length) this._flyout.unsubscribe(this._flyoutSubscriptions.pop());
    this.clearNodes();
  };
  s.prototype._onNodeMouseEnter = function (t) {
    'use strict';
    if (this._activeNode === t) {
      clearTimeout(this._hideTimeout);
    } else this.showFlyout(t);
  };
  s.prototype._onFlyoutMouseEnter = function () {
    'use strict';
    clearTimeout(this._hideTimeout);
  };
  s.prototype._onNodeKeyEscape = function (event) {
    'use strict';
    if (k.getKeyCode(event) === l.ESC) {
      this._activeNode && this.inform('hide', this._activeNode);
      this._activeNode = null;
    }
  };
  f.exports = b.HoverFlyout || s;
}, null);
__d('AccessibleLayer', ['DOM', 'Event', 'Focus', 'fbt'], function a(b, c, d, e, f, g, h, i, j, k) {
  if (c.__markCompiled) c.__markCompiled();

  function l(m) {
    'use strict';
    this._layer = m;
  }
  l.prototype.enable = function () {
    'use strict';
    this._afterShowSubscription = this._layer.subscribe('aftershow', this._onAfterShow.bind(this));
  };
  l.prototype.disable = function () {
    'use strict';
    this._listener && this._listener.remove();
    this._afterShowSubscription.unsubscribe();
    this._listener = this._afterShowSubscription = null;
  };
  l.prototype._closeListener = function (event) {
    'use strict';
    var m = this._layer.getCausalElement();
    if (m)
      if (m.tabIndex == -1) {
        m.tabIndex = 0;
        j.setWithoutOutline(m);
      } else j.set(m);
    this._layer.hide();
  };
  l.prototype._onAfterShow = function () {
    'use strict';
    var m = this._layer.getContentRoot();
    if (h.scry(m, '.layer_close_elem')[0]) return;
    var n = h.create('a', {
      className: 'accessible_elem layer_close_elem',
      href: '#',
      role: 'button'
    }, [k._("Close pop-up and return")]);
    h.appendContent(m, n);
    this._listener = i.listen(n, 'click', this._closeListener.bind(this));
  };
  f.exports = l;
}, null);
__d('ContextualDialogARIA', ['DOM', 'getOrCreateDOMID'], function a(b, c, d, e, f, g, h, i) {
  if (c.__markCompiled) c.__markCompiled();

  function j(k) {
    'use strict';
    this._layer = k;
  }
  j.prototype.enable = function () {
    'use strict';
    this._subscription = this._layer.subscribe('beforeshow', this._addAriaAttribute.bind(this));
  };
  j.prototype.disable = function () {
    'use strict';
    this._subscription.unsubscribe();
    this._subscription = null;
  };
  j.prototype._addAriaAttribute = function () {
    'use strict';
    var k = this._layer.getCausalElement();
    if (!k) return;
    var l = h.scry(this._layer.getRoot(), '.accessible_elem');
    if (l.length) k.setAttribute('aria-describedby', i(l[0]));
  };
  f.exports = j;
}, null);
__d('LayerMouseHooks', ['Arbiter', 'ContextualThing', 'Event', 'Layer'], function a(b, c, d, e, f, g, h, i, j, k) {
  if (c.__markCompiled) c.__markCompiled();
  var l = new h();

  function m(n) {
    'use strict';
    this._layer = n;
    this._subscriptions = [];
    this._currentlyActive = false;
  }
  m.prototype.enable = function () {
    'use strict';
    this._subscriptions = [l.subscribe('mouseenter', this._handleActive.bind(this)), l.subscribe('mouseleave', this._handleInactive.bind(this)), this._layer.subscribe('hide', (function () {
      this._currentlyActive = false;
    }).bind(this))];
  };
  m.prototype.disable = function () {
    'use strict';
    while (this._subscriptions.length) this._subscriptions.pop().unsubscribe();
    this._subscriptions = [];
    this._currentlyActive = false;
  };
  m.prototype._handleActive = function (n, o) {
    'use strict';
    if (!this._currentlyActive && this._isNodeWithinStack(o)) {
      this._layer.inform('mouseenter');
      this._currentlyActive = true;
    }
  };
  m.prototype._handleInactive = function (n, o) {
    'use strict';
    if (this._currentlyActive)
      if (!o || !this._isNodeWithinStack(o)) {
        this._layer.inform('mouseleave');
        this._currentlyActive = false;
      }
  };
  m.prototype._isNodeWithinStack = function (n) {
    'use strict';
    return i.containsIncludingLayers(this._layer.getContentRoot(), n);
  };
  k.subscribe('show', function (n, o) {
    var p = o.getContentRoot(),
      q = [j.listen(p, 'mouseenter', function () {
        l.inform('mouseenter', p);
      }), j.listen(p, 'mouseleave', function (s) {
        l.inform('mouseleave', s.getRelatedTarget());
      })],
      r = o.subscribe('hide', function () {
        while (q.length) q.pop().remove();
        r.unsubscribe();
        q = r = null;
      });
  });
  f.exports = m;
}, null);
__d('ContextualDialogArrow', ['CSS', 'DOM', 'JSXDOM', 'Locale', 'Style', 'Vector', 'cx'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n) {
  if (c.__markCompiled) c.__markCompiled();
  var o = {
      bottom: "_53ik",
      top: "_53il",
      right: "_53im",
      left: "_53in"
    },
    p = {
      above: 'bottom',
      below: 'top',
      left: 'right',
      right: 'left'
    };

  function q(r) {
    'use strict';
    this._layer = r;
  }
  q.prototype.enable = function () {
    'use strict';
    this._subscription = this._layer.subscribe(['adjust', 'reposition'], this._handle.bind(this));
    h.addClass(this._layer.getContentRoot(), "_5v-0");
  };
  q.prototype.disable = function () {
    'use strict';
    this._subscription.unsubscribe();
    this._subscription = null;
    h.removeClass(this._layer.getContentRoot(), "_5v-0");
  };
  q.prototype._handle = function (r, s) {
    'use strict';
    if (r === 'adjust') {
      this._repositionArrow(s);
    } else this._repositionRoot(s);
  };
  q.prototype._repositionRoot = function (r) {
    'use strict';
    var s = r.getAlignment();
    if (s == 'center') return;
    var t = this._layer.getRoot(),
      u = this._layer.getContext(),
      v = r.isVertical(),
      w = this._layer.getArrowDimensions(),
      x = w.offset,
      y = w.length,
      z = m.getElementDimensions(u),
      aa = v ? z.x : z.y;
    if (aa >= y + x * 2) return;
    var ba = y / 2 + x,
      ca = aa / 2,
      da = parseInt(ba - ca, 10);
    if (v) {
      var ea = null;
      if (s == 'left') {
        ea = k.isRTL() ? 'right' : 'left';
      } else ea = k.isRTL() ? 'left' : 'right';
      var fa = parseInt(l.get(t, ea), 10);
      l.set(t, ea, fa - da + 'px');
    } else {
      var ga = parseInt(l.get(t, 'top'), 10);
      l.set(t, 'top', ga - da + 'px');
    }
  };
  q.prototype._repositionArrow = function (r) {
    'use strict';
    var s = this._layer.getContentRoot(),
      t = r.getPosition(),
      u = p[t];
    for (var v in o) h.conditionClass(s, o[v], u === v);
    if (t == 'none') return;
    if (!this._arrow) this._arrow = j.i({
      className: "_53io"
    });
    if (!i.contains(s, this._arrow)) i.appendContent(s, this._arrow);
    l.set(this._arrow, 'top', '');
    l.set(this._arrow, 'left', '');
    l.set(this._arrow, 'right', '');
    l.set(this._arrow, 'margin', '');
    var w = q.getOffsetPercent(r),
      x = q.getOffset(r, w, this._layer),
      y = q.getOffsetSide(r);
    l.set(this._arrow, y, w + '%');
    l.set(this._arrow, 'margin-' + y, x + 'px');
  };
  q.getOffsetPercent = function (r) {
    'use strict';
    var s = r.getAlignment(),
      t = r.getPosition();
    if (t == 'above' || t == 'below')
      if (s == 'center') {
        return 50;
      } else if (s == 'right') return 100;
    return 0;
  };
  q.getOffsetSide = function (r) {
    'use strict';
    var s = r.isVertical();
    return s ? k.isRTL() ? 'right' : 'left' : 'top';
  };
  q.getOffset = function (r, s, t) {
    'use strict';
    var u = t.getArrowDimensions(),
      v = u.offset,
      w = u.length,
      x = r.getAlignment(),
      y = x == 'center' ? 0 : v;
    y += w * s / 100;
    if (x != 'left') y *= -1;
    return y;
  };
  Object.assign(q.prototype, {
    _subscription: null,
    _arrow: null
  });
  f.exports = q;
}, null);
__d('ContextualDialogDefaultTheme', ['cx'], function a(b, c, d, e, f, g, h) {
  if (c.__markCompiled) c.__markCompiled();
  var i = {
    wrapperClassName: "_53ip",
    arrowDimensions: {
      offset: 15,
      length: 16
    }
  };
  f.exports = i;
}, null);
__d('ContextualDialogKeepInViewport', ['ContextualLayerDimensions', 'Event', 'Style', 'Vector', 'throttle'], function a(b, c, d, e, f, g, h, i, j, k, l) {
  if (c.__markCompiled) c.__markCompiled();

  function m(n) {
    'use strict';
    this._layer = n;
    this._listeners = [];
    this._subscription = null;
    this._minimumTop = null;
  }
  m.prototype.enable = function () {
    'use strict';
    var n = this._layer.getArrowDimensions();
    this._arrowOffset = n.offset;
    var o = n.length;
    this._arrowBuffer = this._arrowOffset + o;
    this._subscription = this._layer.subscribe(['show', 'hide', 'reposition'], (function (p, q) {
      if (this._layer.isFixed()) return;
      if (p == 'reposition') {
        this._calculateMinimumTop(q);
        this._adjustForScroll();
      } else if (p == 'show') {
        this._attachScroll();
        this._adjustForScroll();
      } else this._detachScroll();
    }).bind(this));
    if (this._layer.isShown()) this._attachScroll();
  };
  m.prototype.disable = function () {
    'use strict';
    if (this._layer.isShown()) this._detachScroll();
    this._subscription.unsubscribe();
    this._subscription = null;
  };
  m.prototype._attachScroll = function () {
    'use strict';
    var n = l(this._adjustForScroll.bind(this)),
      o = this._layer.getContextScrollParent() || window;
    this._listeners = [i.listen(o, 'scroll', n), i.listen(window, 'resize', n)];
  };
  m.prototype._detachScroll = function () {
    'use strict';
    while (this._listeners.length) this._listeners.pop().remove();
    this._listeners = [];
  };
  m.prototype._getContentHeight = function () {
    'use strict';
    if (!this._layer._contentWrapper) return 0;
    return k.getElementDimensions(this._layer._contentWrapper).y;
  };
  m.prototype._getContextY = function () {
    'use strict';
    return k.getElementPosition(this._layer.getContext()).y;
  };
  m.prototype._calculateMinimumTop = function (n) {
    'use strict';
    if (n.isVertical()) return;
    this._minimumTop = this._getContextY() - (this._getContentHeight() - this._arrowBuffer) + n.getOffsetY();
  };
  m.prototype._adjustForScroll = function () {
    'use strict';
    var n = this._layer.getOrientation(),
      o = this._layer.getContent();
    if (n.isVertical() || !o) return;
    var p = h.getViewportRect(this._layer),
      q = p.b - this._minimumTop;
    if (q < 0) return;
    var r = this._getContentHeight(),
      s = r - (this._arrowBuffer + this._arrowOffset),
      t = Math.max(0, Math.min(s, s - (q - r)));
    j.set(o, 'top', -t + 'px');
  };
  f.exports = m;
}, null);
__d('ContextualDialogFitInViewport_PUSHSAFE', ['Style', 'Vector'], function a(b, c, d, e, f, g, h, i) {
  if (c.__markCompiled) c.__markCompiled();
  var j = 50,
    k = 10;

  function l(m) {
    'use strict';
    this._layer = m;
    this._contentHeight = null;
    this._contextY = null;
  }
  l.prototype.enable = function () {
    'use strict';
    var m = this._layer.getArrowDimensions();
    this._arrowOffset = m.offset;
    var n = m.length;
    this._arrowBuffer = this._arrowOffset + n;
    this._subscription = this._layer.subscribe(['reposition'], (function (o, p) {
      if (!this._layer.isFixed() || p.isVertical()) return;
      this._adjustPosition();
    }).bind(this));
  };
  l.prototype.disable = function () {
    'use strict';
    this._subscription.unsubscribe();
    this._subscription = null;
  };
  l.prototype._getContentHeight = function () {
    'use strict';
    return i.getElementDimensions(this._layer._contentWrapper).y;
  };
  l.prototype._getContextY = function () {
    'use strict';
    return i.getElementPosition(this._layer.getContext(), 'viewport').y;
  };
  l.prototype._adjustPosition = function () {
    'use strict';
    var m = this._getContextY(),
      n = this._getContentHeight();
    if (m === this._contextY && n === this._contentHeight) return;
    this._contextY = m;
    this._contentHeight = n;
    var o = i.getViewportDimensions().y,
      p = Math.min(Math.max(0, m + n + k - o), Math.max(0, m - j), n - this._arrowOffset - this._arrowBuffer);
    h.set(this._layer.getContent(), 'top', -p + 'px');
  };
  f.exports = l;
}, null);
__d('ContextualDialog', ['ContextualDialogARIA', 'AccessibleLayer', 'ContextualDialogArrow', 'ContextualDialogDefaultTheme', 'ContextualDialogKeepInViewport', 'ContextualDialogFitInViewport_PUSHSAFE', 'ContextualLayer', 'CSS', 'DOM', 'Event', 'JSXDOM', 'LayerButtons', 'LayerFormHooks', 'LayerRefocusOnHide', 'LayerHideOnTransition', 'LayerMouseHooks', 'Style', 'csx', 'cx', 'invariant', 'removeFromArray', 'shield'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca) {
  if (c.__markCompiled) c.__markCompiled();
  var da, ea, fa = 0,
    ga = 300;
  da = babelHelpers.inherits(ha, n);
  ea = da && da.prototype;

  function ha(ia, ja) {
    'use strict';
    ea.constructor.call(this, ia, ja);
    this._footer = null;
  }
  ha.prototype._configure = function (ia, ja) {
    'use strict';
    Object.assign(ia, ia.theme || k);
    var ka = ia.arrowBehavior || j;
    ia.addedBehaviors = ia.addedBehaviors || [];
    ia.addedBehaviors.push(ka);
    ea._configure.call(this, ia, ja);
    this._footer = p.scry(ja, "div._572u")[0];
    if (this._footer)
      if (this._footer.children.length === 1 && this._footer.children[0].nodeName === 'DIV' && this._footer.children[0].children.length === 0) {
        this._footer.parentNode.removeChild(this._footer);
      } else o.addClass(this.getContentRoot(), "_kc");
    if (ia.hoverContext) this._registerHoverHandlers(ia.hoverContext, ia.hoverShowDelay, ia.hoverHideDelay);
  };
  ha.prototype._registerHoverHandlers = function (ia, ja, ka) {
    'use strict';
    if (ja == null) ja = fa;
    if (ka == null) ka = ga;
    var la, ma, na = (function (event) {
        clearTimeout(ma);
        la = setTimeout(ca(this.show, this), ja);
      }).bind(this),
      oa = (function (event) {
        if (this._isHoverLocked()) return;
        clearTimeout(la);
        ma = setTimeout(this.hide.bind(this), ka);
      }).bind(this),
      pa = q.listen(ia, 'mouseenter', na),
      qa = q.listen(ia, 'mouseleave', oa),
      ra = this.subscribe('mouseenter', na),
      sa = this.subscribe('mouseleave', oa);
    this.subscribe('destroy', function () {
      clearTimeout(ma);
      pa.remove();
      qa.remove();
      ra.unsubscribe();
      sa.unsubscribe();
    });
  };
  ha.prototype._getDefaultBehaviors = function () {
    'use strict';
    var ia = ea._getDefaultBehaviors.call(this);
    ba(ia, v);
    return ia.concat([i, u, l, m, s, t, w, h]);
  };
  ha.prototype._buildWrapper = function (ia, ja) {
    'use strict';
    this._innerWrapper = r.div(null, ja);
    var ka = ea._buildWrapper.call(this, ia, this._innerWrapper);
    o.addClass(ka, ia.wrapperClassName);
    this.replaceEntireLayerContents(ja);
    !(this.getContent() === ja) ? aa(0): undefined;
    this.setWidth(ia.width);
    return ka;
  };
  ha.prototype.getContentRoot = function () {
    'use strict';
    !!!this._innerWrapper ? aa(0) : undefined;
    return this._innerWrapper;
  };
  ha.prototype.setContent = function (ia) {
    'use strict';
    aa(0);
  };
  ha.prototype.replaceEntireLayerContents = function (ia) {
    'use strict';
    this._content = null;
    p.empty(this.getContentRoot());
    this.setInnerContent(ia);
  };
  ha.prototype.setInnerContent = function (ia) {
    'use strict';
    o.addClass(ia, "_53ij");
    if (this.getContent()) {
      p.replace(this.getContent(), ia);
    } else p.appendContent(this.getContentRoot(), ia);
    this._content = ia;
    this.isShown() && this.updatePosition();
  };
  ha.prototype.setWidth = function (ia) {
    'use strict';
    x.set(this.getContentRoot(), 'width', ia ? Math.floor(ia) + 'px' : '');
    return this;
  };
  ha.prototype.getFooter = function () {
    'use strict';
    return this._footer;
  };
  ha.prototype.lockHover = function () {
    'use strict';
    this._hoverLocked = true;
    return this;
  };
  ha.prototype.unlockHover = function () {
    'use strict';
    this._hoverLocked = false;
    return this;
  };
  ha.prototype._isHoverLocked = function () {
    'use strict';
    return !!this._hoverLocked;
  };
  ha.setContext = function (ia, ja) {
    'use strict';
    ia.setContext(ja);
  };
  f.exports = ha;
}, null);
__d('ContextualDialogXUITheme', ['cx'], function a(b, c, d, e, f, g, h) {
  if (c.__markCompiled) c.__markCompiled();
  var i = {
    wrapperClassName: "_53ii",
    arrowDimensions: {
      offset: 12,
      length: 16
    }
  };
  f.exports = i;
}, null);
__d('VideoFeedFastPreloadController', ['Run', 'DOMQuery'], function a(b, c, d, e, f, g, h, i) {
  if (c.__markCompiled) c.__markCompiled();
  var j = 0,
    k = {
      preload: function (l) {
        if (j < 2) {
          l = i.scry(l, 'video')[0];
          if (l instanceof b.HTMLVideoElement) {
            if (!j) h.onBeforeUnload(function () {
              return k.reset();
            });
            l.preload = 'auto';
            j += 1;
          }
        }
      },
      reset: function () {
        j = 0;
      }
    };
  k.reset();
  f.exports = k;
}, null);
__d('VideoDisplayTimePlayButton', ['CSS', 'DataStore', 'Event'], function a(b, c, d, e, f, g, h, i, j) {
  if (c.__markCompiled) c.__markCompiled();
  var k = {},
    l = '_spinner',
    m = {
      getClicked: function (n) {
        return i.get(n, 'clicked', false);
      },
      register: function (n, o) {
        var p = n.id;
        k[p] = j.listen(n, 'click', function () {
          if (o) {
            h.hide(n);
            h.show(o);
          }
          i.set(n, 'clicked', true);
        });
        if (o) k[p + l] = j.listen(o, 'click', function () {
          h.hide(o);
          h.show(n);
          i.set(n, 'clicked', false);
        });
      },
      unregister: function (n) {
        var o = n.id;
        if (k.hasOwnProperty(o)) k[o].remove();
        var p = o + l;
        if (k.hasOwnProperty(p)) k[p].remove();
      }
    };
  f.exports = m;
}, null);
__d('VideosRenderingInstrumentation', ['DataStore', 'VideoPlayerHTML5Experiments', 'performanceAbsoluteNow'], function a(b, c, d, e, f, g, h, i, j) {
  if (c.__markCompiled) c.__markCompiled();
  var k = {
    storeRenderTime: function (l) {
      var m = i.useMonotonicallyIncreasingTimers ? j() : Date.now();
      h.set(l, 'videos_rendering_instrumentation', m);
      return m;
    },
    retrieveRenderTime: function (l) {
      var m = h.get(l, 'videos_rendering_instrumentation', NaN);
      if (Number.isNaN(m)) m = k.storeRenderTime(l);
      return m;
    }
  };
  f.exports = k;
}, null);
__d("XFeedNUXSaveSeenStateController", ["XController"], function a(b, c, d, e, f, g) {
  c.__markCompiled && c.__markCompiled();
  f.exports = c("XController").create("\/feed\/nux\/seen\/save\/", {
    link_id: {
      type: "String"
    },
    key: {
      type: "String",
      required: true
    },
    seen: {
      type: "Bool",
      defaultValue: false
    },
    env: {
      type: "Enum",
      enumType: 0
    }
  });
}, null);
__d("XLiveStreamingCommentsAsyncController", ["XController"], function a(b, c, d, e, f, g) {
  c.__markCompiled && c.__markCompiled();
  f.exports = c("XController").create("\/videos\/livecomments\/", {
    eft_id: {
      type: "String",
      required: true
    }
  });
}, null);
__d("XUFICommentTooltipController", ["XController"], function a(b, c, d, e, f, g) {
  c.__markCompiled && c.__markCompiled();
  f.exports = c("XController").create("\/ufi\/comment\/tooltip\/", {
    ft_ent_identifier: {
      type: "String",
      required: true
    },
    seen_user_fbids: {
      type: "IntVector",
      defaultValue: []
    }
  });
}, null);
__d("XUFIReactionProfileBrowserController", ["XController"], function a(b, c, d, e, f, g) {
  c.__markCompiled && c.__markCompiled();
  f.exports = c("XController").create("\/ufi\/reaction\/profile\/browser\/", {
    ft_ent_identifier: {
      type: "String",
      required: true
    }
  });
}, null);
__d("XUFIReactionProfileDialogController", ["XController"], function a(b, c, d, e, f, g) {
  c.__markCompiled && c.__markCompiled();
  f.exports = c("XController").create("\/ufi\/reaction\/profile\/dialog\/", {
    reaction_type: {
      type: "Enum",
      enumType: 0
    },
    ft_ent_identifier: {
      type: "String",
      required: true
    },
    __asyncDialog: {
      type: "Int"
    }
  });
}, null);
__d("XUFITypingIndicatorController", ["XController"], function a(b, c, d, e, f, g) {
  c.__markCompiled && c.__markCompiled();
  f.exports = c("XController").create("\/ufi\/typing\/{feedback_id}\/{update}\/", {
    feedback_id: {
      type: "String",
      required: true
    },
    parent_comment_id: {
      type: "String"
    },
    update: {
      type: "Enum",
      required: true,
      enumType: 1
    }
  });
}, null);