/*!-----------------------------------------------------------------
    Name: Khaki - HTML Multipurpose Bootstrap 4 Template
    Version: 2.0.2
    Author: nK
    Website: https://nkdev.info/
    Purchase: https://themeforest.net/item/khaki-multiconcept-bootstrap-4-html-template/16826910?ref=_nK
    Support: https://nk.ticksy.com/
    License: You must have a valid license purchased only from ThemeForest (the above link) in order to legally use the theme for your project.
    Copyright 2020.
-------------------------------------------------------------------*/
! function(n) {
  var i = {};

  function a(t) {
    if (i[t]) return i[t].exports;
    var e = i[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return n[t].call(e.exports, e, e.exports, a), e.l = !0, e.exports
  }
  a.m = n, a.c = i, a.d = function(t, e, n) {
    a.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: n
    })
  }, a.r = function(t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, a.t = function(e, t) {
    if (1 & t && (e = a(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (a.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var i in e) a.d(n, i, function(t) {
        return e[t]
      }.bind(null, i));
    return n
  }, a.n = function(t) {
    var e = t && t.__esModule ? function() {
      return t.default
    } : function() {
      return t
    };
    return a.d(e, "a", e), e
  }, a.o = function(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, a.p = "", a(a.s = 3)
}([, , function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "options", function() {
    return i
  });
  var i = {
    enableSearchAutofocus: !0,
    enableActionLikeAnimation: !0,
    enableShortcuts: !0,
    enableMouseParallax: !0,
    scrollToAnchorSpeed: 700,
    parallaxSpeed: .8,
    navigationHoverEffect: 4,
    templates: {
      secondaryNavbarBackItem: "Back",
      likeAnimationLiked: "Liked!",
      likeAnimationDisliked: "Disliked!",
      plainVideoIcon: '<span class="nk-video-icon"><span class="ion-md-play pl-4"></span></span>',
      plainVideoLoadIcon: '<span class="nk-loading-spinner"><i></i></span>',
      fullscreenVideoClose: '<span class="nk-icon-close"></span>',
      gifIcon: '<span class="nk-gif-icon"><span class="fa fa-hand-pointer-o"></span></span>',
      quickViewPortfolio: '<div class="nk-page-nav">\n                <a href="javascript:void(0)" class="nk-page-nav-prev">\n                    <div class="icon">\n                        <span class="ion-ios-arrow-back"></span>\n                    </div>\n                    <div class="nk-page-nav-title"></div>\n                    <div class="nk-page-nav-img">\n                        <div style="background-image: url();"></div>\n                    </div>\n                </a>\n                <a href="javascript:void(0)" class="nk-page-nav-next">\n                    <div class="icon">\n                        <span class="ion-ios-arrow-forward"></span>\n                    </div>\n                    <div class="nk-page-nav-title"></div>\n                    <div class="nk-page-nav-img">\n                        <div style="background-image: url();"></div>\n                    </div>\n                </a>\n            </div>',
      quickViewStore: '<div class="nk-page-nav-2">\n                <a href="javascript:void(0)" class="nk-page-nav-prev">\n                    <div class="icon">\n                        <span class="ion-ios-arrow-back"></span>\n                    </div>\n                    <div class="nk-page-nav-img">\n                        <img src="" alt="">\n                    </div>\n                    <div class="nk-page-nav-title">\n                        <div class="nk-product-category mt-0"></div>\n                        <h5 class="nk-product-title mb-0"></h5>\n                    </div>\n                </a>\n                <a href="javascript:void(0)" class="nk-page-nav-next">\n                    <div class="icon">\n                        <span class="ion-ios-arrow-forward"></span>\n                    </div>\n                    <div class="nk-page-nav-img">\n                        <img src="" alt="">\n                    </div>\n                    <div class="nk-page-nav-title">\n                        <div class="nk-product-category mt-0"></div>\n                        <h5 class="nk-product-title mb-0"></h5>\n                    </div>\n                </a>\n            </div>',
      quickViewCloseIcon: '<span class="nk-icon-close"></span>',
      audioPlaylistButton: '<div class="nk-audio-playlist-play-pause">\n                <span class="nk-audio-playlist-play">\n                    <span class="ion-ios-play"></span>\n                </span>\n                <span class="nk-audio-playlist-pause">\n                    <span class="ion-ios-pause"></span>\n                </span>\n            </div>',
      audioPlainButton: '<div class="nk-audio-plain-play-pause">\n                <span class="nk-audio-plain-play">\n                    <span class="ion-ios-play"></span>\n                </span>\n                <span class="nk-audio-plain-pause">\n                    <span class="ion-ios-pause"></span>\n                </span>\n            </div>',
      instagram: '<div class="col-4">\n                <a href="{{link}}" target="_blank">\n                    <img src="{{image}}" alt="{{caption}}" class="nk-img-stretch">\n                </a>\n            </div>',
      instagramLoadingText: "Loading...",
      instagramFailText: "Failed to fetch data",
      instagramApiPath: "php/instagram/instagram.php",
      twitter: '<div class="nk-twitter">\n                <span class="nk-twitter-icon fa fa-twitter"></span>\n                <div class="nk-twitter-date">\n                    <span>{{date}}</span>\n                </div>\n                <div class="nk-twitter-text">\n                   {{tweet}}\n                </div>\n            </div>',
      twitterLoadingText: "Loading...",
      twitterFailText: "Failed to fetch data",
      twitterApiPath: "php/twitter/tweet.php",
      countdown: "<div>\n                <span>%D</span>\n                Days\n            </div>\n            <div>\n                <span>%H</span>\n                Hours\n            </div>\n            <div>\n                <span>%M</span>\n                Minutes\n            </div>\n            <div>\n                <span>%S</span>\n                Seconds\n            </div>"
    },
    shortcuts: {
      toggleSearch: "s",
      showSearch: "",
      closeSearch: "esc",
      toggleShare: "n",
      showShare: "",
      closeShare: "esc",
      closeFullscreenVideo: "esc",
      closeQuckView: "esc",
      audioPlayerPlayPause: "shift+p",
      audioPlayerPlay: "",
      audioPlayerPause: "",
      audioPlayerForward: "shift+right",
      audioPlayerBackward: "shift+left",
      audioPlayerVolumeUp: "shift+up",
      audioPlayerVolumeDown: "shift+down",
      audioPlayerMute: "shift+m",
      audioPlayerLoop: "shift+l",
      audioPlayerShuffle: "shift+s",
      audioPlayerPlaylist: "shift+a",
      audioPlayerPin: "shift+r",
      postLike: "l",
      postDislike: "d",
      postScrollToComments: "c",
      toggleSideLeftNavbar: "alt+l",
      openSideLeftNavbar: "",
      closeSideLeftNavbar: "esc",
      toggleSideRightNavbar: "alt+r",
      openSideRightNavbar: "",
      closeSideRightNavbar: "esc",
      toggleFullscreenNavbar: "alt+f",
      openFullscreenNavbar: "",
      closeFullscreenNavbar: "esc"
    },
    events: {
      actionHeart: function(e) {
        e.updateIcon(), setTimeout(function() {
          var t = e.currentNum + ("like" === e.type ? 1 : -1);
          e.updateNum(t)
        }, 300)
      },
      actionLike: function(n) {
        n.updateIcon(), setTimeout(function() {
          var t = 0;
          "like" === n.type && (n.isLiked && (t = -2), n.isDisliked && (t = 1)), "dislike" === n.type && (n.isLiked && (t = -1), n.isDisliked && (t = 2));
          var e = n.currentNum + ("like" === n.type ? 1 : -1) + t;
          n.updateNum(e)
        }, 300)
      },
      quickViewOpen: function() {},
      beforeQuickViewClose: function() {},
      quickViewClosed: function() {},
      beforeQuickViewLoad: function() {},
      quickViewLoad: function() {},
      quickViewLoaded: function() {}
    }
  }
}, function(t, e, n) {
  t.exports = n(4)
}, function(t, e, n) {
  "use strict";
  n.r(e);
  var a = n(2),
    o = n(5),
    s = n(6),
    r = n(7),
    l = n(8),
    c = n(9),
    d = n(10),
    u = n(11),
    p = n(12),
    f = n(13),
    h = n(14),
    v = n(15),
    g = n(16),
    k = n(17),
    m = n(18),
    b = n(19),
    y = n(20),
    w = n(21),
    $ = n(22),
    O = n(23),
    j = n(24),
    x = n(25),
    C = n(26),
    P = n(27),
    S = n(28),
    T = n(29),
    _ = n(30),
    I = n(31),
    F = n(32),
    V = n(33),
    M = n(34),
    A = n(35),
    N = n(36),
    L = n(37),
    B = n(38),
    q = n(39),
    D = n(40),
    R = n(41),
    H = n(42),
    z = n(43),
    E = n(44),
    W = n(45),
    Q = n(46),
    Y = n(47),
    J = n(48);

  function U(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
    }
  }
  var i = function() {
    function t() {
      ! function(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t), this.options = a.options
    }
    var e, n, i;
    return e = t, (n = [{
      key: "init",
      value: function() {
        var t = this;
        return t.initSharePlace(), t.initNavbar(), t.initNavbarSide(), t.initNavbarFullscreen(), t.initNavbarDropEffect1(), t.initSearchBlock(), t.initHeaderTitle(), t.initSideButtons(), t.initStore(), t.initActionsLike(), t.initBackgroundImages(), t.initLinkEffects(), t.initCounters(), t.initAnchors(), t.initLinesForBoxes(), t.initImageBoxes(), t.initVideoFullscreen(), t.initVideoBlocks(), t.initGIF(), t.initFullPage(), t.initQuickView(), t.initInfoBoxes(), t.initForms(), t.initFormsMailChimp(), t.initAudioPlayer(), t.initFacebook(), t.initInstagram(), t.initTwitter(), t.initShortcuts(), t.initPluginObjectFitImages(), t.initPluginStickySidebar(), t.initPluginFastClick(), t.initPluginNano(), t.initPluginJarallax(), t.initPluginFlickity(), t.initPluginIsotope(), t.initPluginPhotoswipe(), t.initPluginTabs(), t.initPluginAccordions(), t.initPluginCountdown(), t.initPluginTypedjs(), t
      }
    }, {
      key: "setOptions",
      value: function(t) {
        return s.setOptions.call(this, t)
      }
    }, {
      key: "debounceResize",
      value: function(t) {
        return o.debounceResize.call(this, t)
      }
    }, {
      key: "throttleScroll",
      value: function(t) {
        return o.throttleScroll.call(this, t)
      }
    }, {
      key: "bodyOverflow",
      value: function(t) {
        return o.bodyOverflow.call(this, t)
      }
    }, {
      key: "isInViewport",
      value: function(t, e) {
        return o.isInViewport.call(this, t, e)
      }
    }, {
      key: "scrollTo",
      value: function(t, e) {
        return o.scrollTo.call(this, t, e)
      }
    }, {
      key: "key",
      value: function(t, e) {
        return r.key.call(this, t, e)
      }
    }, {
      key: "initShortcuts",
      value: function() {
        return r.initShortcuts.call(this)
      }
    }, {
      key: "initLinkEffects",
      value: function() {
        return l.initLinkEffects.call(this)
      }
    }, {
      key: "initSharePlace",
      value: function() {
        return c.initSharePlace.call(this)
      }
    }, {
      key: "initHeaderTitle",
      value: function() {
        return v.initHeaderTitle.call(this)
      }
    }, {
      key: "initNavbar",
      value: function() {
        return d.initNavbar.call(this)
      }
    }, {
      key: "initNavbarSide",
      value: function() {
        return u.initNavbarSide.call(this)
      }
    }, {
      key: "initNavbarFullscreen",
      value: function() {
        return p.initNavbarFullscreen.call(this)
      }
    }, {
      key: "initNavbarDropEffect1",
      value: function() {
        return f.initNavbarDropEffect1.call(this)
      }
    }, {
      key: "initSearchBlock",
      value: function() {
        return h.initSearchBlock.call(this)
      }
    }, {
      key: "initCounters",
      value: function() {
        return g.initCounters.call(this)
      }
    }, {
      key: "initSideButtons",
      value: function() {
        return k.initSideButtons.call(this)
      }
    }, {
      key: "initActionsLike",
      value: function() {
        return m.initActionsLike.call(this)
      }
    }, {
      key: "initStore",
      value: function() {
        return b.initStore.call(this)
      }
    }, {
      key: "initBackgroundImages",
      value: function() {
        return y.initBackgroundImages.call(this)
      }
    }, {
      key: "parallaxMouseInit",
      value: function() {
        return w.parallaxMouseInit.call(this)
      }
    }, {
      key: "initAnchors",
      value: function() {
        return $.initAnchors.call(this)
      }
    }, {
      key: "initLinesForBoxes",
      value: function() {
        return O.initLinesForBoxes.call(this)
      }
    }, {
      key: "initImageBoxes",
      value: function() {
        return j.initImageBoxes.call(this)
      }
    }, {
      key: "initVideoFullscreen",
      value: function() {
        return x.initVideoFullscreen.call(this)
      }
    }, {
      key: "initVideoBlocks",
      value: function() {
        return C.initVideoBlocks.call(this)
      }
    }, {
      key: "initGIF",
      value: function() {
        return P.initGIF.call(this)
      }
    }, {
      key: "initFullPage",
      value: function() {
        return S.initFullPage.call(this)
      }
    }, {
      key: "initQuickView",
      value: function() {
        return T.initQuickView.call(this)
      }
    }, {
      key: "initInfoBoxes",
      value: function() {
        return _.initInfoBoxes.call(this)
      }
    }, {
      key: "initForms",
      value: function() {
        return I.initForms.call(this)
      }
    }, {
      key: "initFormsMailChimp",
      value: function() {
        return F.initFormsMailChimp.call(this)
      }
    }, {
      key: "initAudioPlayer",
      value: function() {
        return V.initAudioPlayer.call(this)
      }
    }, {
      key: "initFacebook",
      value: function() {
        return M.initFacebook.call(this)
      }
    }, {
      key: "initInstagram",
      value: function() {
        return A.initInstagram.call(this)
      }
    }, {
      key: "initTwitter",
      value: function() {
        return N.initTwitter.call(this)
      }
    }, {
      key: "initPluginObjectFitImages",
      value: function() {
        return L.initPluginObjectFitImages.call(this)
      }
    }, {
      key: "initPluginStickySidebar",
      value: function() {
        return B.initPluginStickySidebar.call(this)
      }
    }, {
      key: "initPluginFastClick",
      value: function() {
        return q.initPluginFastClick.call(this)
      }
    }, {
      key: "initPluginNano",
      value: function(t) {
        return D.initPluginNano.call(this, t)
      }
    }, {
      key: "initPluginJarallax",
      value: function(t) {
        return R.initPluginJarallax.call(this, t)
      }
    }, {
      key: "initPluginFlickity",
      value: function(t) {
        return H.initPluginFlickity.call(this, t)
      }
    }, {
      key: "initPluginIsotope",
      value: function(t) {
        return z.initPluginIsotope.call(this, t)
      }
    }, {
      key: "initPluginPhotoswipe",
      value: function(t) {
        return E.initPluginPhotoswipe.call(this, t)
      }
    }, {
      key: "initPluginTabs",
      value: function(t) {
        return W.initPluginTabs.call(this, t)
      }
    }, {
      key: "initPluginAccordions",
      value: function(t) {
        return Q.initPluginAccordions.call(this, t)
      }
    }, {
      key: "initPluginCountdown",
      value: function(t) {
        return Y.initPluginCountdown.call(this, t)
      }
    }, {
      key: "initPluginTypedjs",
      value: function(t) {
        return J.initPluginTypedjs.call(this, t)
      }
    }]) && U(e.prototype, n), i && U(e, i), t
  }();
  window.Khaki = new i
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "$", function() {
    return i
  }), n.d(e, "tween", function() {
    return a
  }), n.d(e, "isIOs", function() {
    return o
  }), n.d(e, "isMobile", function() {
    return s
  }), n.d(e, "isFireFox", function() {
    return r
  }), n.d(e, "isTouch", function() {
    return l
  }), n.d(e, "$wnd", function() {
    return c
  }), n.d(e, "$doc", function() {
    return d
  }), n.d(e, "$body", function() {
    return u
  }), n.d(e, "wndW", function() {
    return p
  }), n.d(e, "wndH", function() {
    return f
  }), n.d(e, "docH", function() {
    return h
  }), n.d(e, "debounceResize", function() {
    return b
  }), n.d(e, "throttleScroll", function() {
    return _
  }), n.d(e, "pageBorderSize", function() {
    return w
  }), n.d(e, "bodyOverflow", function() {
    return M
  }), n.d(e, "isBodyOverflowed", function() {
    return F
  }), n.d(e, "isInViewport", function() {
    return A
  }), n.d(e, "scrollTo", function() {
    return N
  });
  var i = jQuery,
    a = window.TweenMax,
    o = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
    s = /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/g.test(navigator.userAgent || navigator.vendor || window.opera),
    r = "undefined" != typeof InstallTrigger,
    l = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch;
  i("html").addClass(s ? "is-mobile" : "is-desktop");
  var c = i(window),
    d = i(document),
    u = i("body"),
    p = 0,
    f = 0,
    h = 0;

  function v() {
    p = c.width(), f = c.height(), h = d.height()
  }
  v(), c.on("resize load orientationchange", v);
  var g, k = [];

  function m() {
    clearTimeout(g), g = setTimeout(function() {
      if (k.length)
        for (var t = 0; t < k.length; t++) k[t]()
    }, 50)
  }

  function b(t) {
    "function" == typeof t ? k.push(t) : window.dispatchEvent(new Event("resize"))
  }
  c.on("ready load resize orientationchange", m), m();
  var y = i(".nk-page-border .nk-page-border-t"),
    w = y.height() || 0;
  b(function() {
    w = y.height() || 0
  });
  var $, O, j, x, C, P = [],
    S = 0;

  function T() {
    var e = c.scrollTop(),
      n = "";
    n = S < e ? "down" : e < S ? "up" : "none", 0 === e ? n = "start" : h - f <= e && (n = "end"), P.forEach(function(t) {
      "function" == typeof t && t(n, e, S, c)
    }), S = e
  }

  function _(t) {
    P.push(t)
  }
  c.on("scroll load resize orientationchange", function() {
    P.length && ($ = !0)
  }), setInterval(function() {
    $ && ($ = !1, window.requestAnimationFrame(T))
  }, 250);
  var I = i(".nk-header > *");

  function F() {
    return O
  }

  function V() {
    var t = window.innerWidth;
    if (!t) {
      var e = document.documentElement.getBoundingClientRect();
      t = e.right - Math.abs(e.left)
    }
    j = u[0].clientWidth < t, x = function() {
      var t = document.createElement("div");
      t.className = "nk-body-scrollbar-measure", u[0].appendChild(t);
      var e = t.offsetWidth - t.clientWidth;
      return u[0].removeChild(t), e
    }()
  }

  function M(t) {
    t && !O ? (O = 1, V(), void 0 === C && (C = u.css("padding-right") || ""), j && (u.add(I).add(".nk-navbar-full").css("paddingRight", "".concat(x, "px")), i(".nk-nav-toggler-right").css("marginRight", "".concat(x, "px"))), u.css("overflow", "hidden")) : !t && O && (O = 0, u.css("overflow", ""), u.css("paddingRight", C), I.add(".nk-navbar-full").css("paddingRight", ""), i(".nk-nav-toggler-right").css("marginRight", ""))
  }

  function A(t, e) {
    var n = t[0].getBoundingClientRect(),
      i = 1;
    if (n.right <= 0 || n.left >= p) i = 0;
    else if (n.bottom < 0 && n.top <= f) i = 0;
    else {
      var a = Math.max(0, n.height + n.top),
        o = Math.max(0, n.height - (n.top + n.height - f)),
        s = Math.max(0, -n.top),
        r = Math.max(0, n.top + n.height - f);
      n.height < f ? i = 1 - (s || r) / n.height : a <= f ? i = a / f : o <= f && (i = o / f), i = i < 0 ? 0 : i
    }
    return e ? [i, n] : i
  }

  function N(t, e) {
    var n = !1,
      i = this.options.scrollToAnchorSpeed / 1e3;
    !1 !== (n = "top" === t ? 0 : "bottom" === t ? Math.max(0, h - f) : "number" == typeof t ? t : !!t.offset && t.offset().top) && c.scrollTop() !== n ? (a.to(c, i, {
      scrollTo: {
        y: n,
        autoKill: !o
      },
      ease: Power2.easeOut,
      overwrite: 5
    }), e && a.delayedCall(i, e)) : "function" == typeof e && e()
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "setOptions", function() {
    return i
  });
  var o = n(5);

  function i(t) {
    var e = this,
      n = o.$.extend({}, this.options.templates, t && t.templates || {}),
      i = o.$.extend({}, this.options.shortcuts, t && t.shortcuts || {}),
      a = o.$.extend({}, this.options.events, t && t.events || {});
    e.options = o.$.extend({}, e.options, t), e.options.templates = n, e.options.shortcuts = i, e.options.events = a
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "key", function() {
    return a
  }), n.d(e, "initShortcuts", function() {
    return o
  });
  var i = n(5);

  function a(t, e) {
    void 0 !== window.key && (t = this.options && this.options.shortcuts && this.options.shortcuts[t]) && window.key(t, e)
  }

  function o() {
    if (void 0 !== window.key && this.options.enableShortcuts) {
      var e = this;
      e.key("toggleSearch", function() {
        e.toggleSearch()
      }), e.key("openSearch", function() {
        e.openSearch()
      }), e.key("closeSearch", function() {
        e.closeSearch()
      }), e.key("toggleShare", function() {
        e.toggleShare()
      }), e.key("openShare", function() {
        e.openShare()
      }), e.key("closeShare", function() {
        e.closeShare()
      }), e.key("closeFullscreenVideo", function() {
        e.closeFullScreenVideo && e.closeFullScreenVideo()
      }), e.key("closeQuckView", function() {
        e.closeQuickView && e.closeQuickView()
      }), e.key("audioPlayerPlayPause", function() {
        e.audioPlayer && (e.audioPlayer.playing ? e.audioPlayer.pause() : e.audioPlayer.play())
      }), e.key("audioPlayerPlay", function() {
        e.audioPlayer && e.audioPlayer.play()
      }), e.key("audioPlayerPause", function() {
        e.audioPlayer && e.audioPlayer.pause()
      }), e.key("audioPlayerBackward", function() {
        e.audioPlayer && e.audioPlayer.skip("prev")
      }), e.key("audioPlayerForward", function() {
        e.audioPlayer && e.audioPlayer.skip("next")
      }), e.key("audioPlayerVolumeUp", function() {
        e.audioPlayer && e.audioPlayer.setVolume(e.audioPlayer.volume + 10)
      }), e.key("audioPlayerVolumeDown", function() {
        e.audioPlayer && e.audioPlayer.setVolume(e.audioPlayer.volume - 10)
      }), e.key("audioPlayerMute", function() {
        e.audioPlayer && e.audioPlayer.mute(!e.audioPlayer.muted)
      }), e.key("audioPlayerLoop", function() {
        e.audioPlayer && e.audioPlayer.setLoop()
      }), e.key("audioPlayerShuffle", function() {
        e.audioPlayer && e.audioPlayer.setShuffle()
      }), e.key("audioPlayerPlaylist", function() {
        e.audioPlayer && e.audioPlayer.showPlaylist()
      }), e.key("audioPlayerPin", function() {
        e.audioPlayer && e.audioPlayer.pin(!e.audioPlayer.pinned)
      }), e.key("postLike", function() {
        Object(i.$)(".nk-portfolio-item-single .nk-portfolio-item-details, .nk-blog-post-single .nk-post-meta").find(".nk-action-heart:not(.liked), .nk-action-like .like-icon").click()
      }), e.key("postDislike", function() {
        Object(i.$)(".nk-portfolio-item-single .nk-portfolio-item-details, .nk-blog-post-single .nk-post-meta").find(".nk-action-heart.liked, .nk-action-like .dislike-icon").click()
      }), e.key("postScrollToComments", function() {
        var t = Object(i.$)("#comments");
        t.length && e.scrollTo(t)
      });
      var t = Object(i.$)(".nk-navbar-left-side");
      e.key("toggleSideLeftNavbar", function() {
        e.toggleSide(t)
      }), e.key("openSideLeftNavbar", function() {
        e.openSide(t)
      }), e.key("closeSideLeftNavbar", function() {
        e.closeSide(t)
      });
      var n = Object(i.$)(".nk-navbar-right-side");
      e.key("toggleSideRightNavbar", function() {
        e.toggleSide(n)
      }), e.key("openSideRightNavbar", function() {
        e.openSide(n)
      }), e.key("closeSideRightNavbar", function() {
        e.closeSide(n)
      }), e.key("toggleFullscreenNavbar", function() {
        e.toggleFullscreenNavbar()
      }), e.key("openFullscreenNavbar", function() {
        e.openFullscreenNavbar()
      }), e.key("closeFullscreenNavbar", function() {
        e.closeFullscreenNavbar()
      }), window.key.filter = function(t) {
        var e = (t.target || t.srcElement).tagName,
          n = (t.target || t.srcElement).getAttribute("contenteditable");
        return window.key.isPressed("esc") || !(n || "INPUT" === e || "SELECT" === e || "TEXTAREA" === e)
      }
    }
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initLinkEffects", function() {
    return a
  });
  var i = n(5);

  function a() {
    function o(t, e, n) {
      var i = e["add" === n ? "next" : "prev"]();
      e["".concat(n, "Class")]("active");
      var a = t.data("timeout");
      clearTimeout(a), i.length && t.data("timeout", setTimeout(function() {
        o(t, i, n)
      }, 40))
    }
    this.options.navigationHoverEffect && Object(i.$)(".nk-navbar:not(.nk-navbar-no-link-effect) ul > li > a:not(.btn):not(.nk-btn):not(.no-link-effect)").addClass("link-effect-".concat(this.options.navigationHoverEffect)), Object(i.$)(".link-effect-1:not(.ready)").each(function() {
      Object(i.$)(this).addClass("ready");
      var t = Object(i.$)(this).text().replace(/([^\x00-\x80]|\w)/g, "<span>$&</span>");
      Object(i.$)(this).html(t)
    }), i.$doc.on("mouseover", ".link-effect-1.ready", function() {
      o(Object(i.$)(this), Object(i.$)(this).children("span:not(.active):first"), "add")
    }).on("mouseleave", ".link-effect-1.ready", function() {
      o(Object(i.$)(this), Object(i.$)(this).children("span.active:last"), "remove")
    }), Object(i.$)(".link-effect-2:not(.ready), .link-effect-3:not(.ready)").each(function() {
      Object(i.$)(this).addClass("ready"), Object(i.$)(this).html(function(t, e) {
        return Object(i.$)("<span>").html(e).prepend(Object(i.$)('<span class="link-effect-shade">').html(e))
      })
    }), Object(i.$)(".link-effect-4:not(.ready)").each(function() {
      Object(i.$)(this).addClass("ready"), Object(i.$)(this).html(function(t, e) {
        return Object(i.$)("<span>").html(e).prepend()
      })
    })
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initSharePlace", function() {
    return i
  });
  var a = n(5);

  function i() {
    var t, e = this,
      n = Object(a.$)(".nk-share-place");

    function i(t, e) {
      e = Math.pow(10, e);
      for (var n = ["k", "m", "b", "t"], i = n.length - 1; 0 <= i; i--) {
        var a = Math.pow(10, 3 * (i + 1));
        if (a <= t) {
          1e3 === (t = Math.round(t * e / a) / e) && i < n.length - 1 && (t = 1, i++), t += n[i];
          break
        }
      }
      return t
    }
    Object(a.$)('<div class="nk-share-place-overlay">').appendTo(a.$body), void 0 !== a.$.fn.socialityShare ? Object(a.$)(".nk-share-icons").socialityShare().on("counter.sociality-share", function(t, e, n) {
      Object(a.$)(this).find('[data-share="'.concat(e, '"] .sociality-share-counter')).html(i(n, 1) || "")
    }) : void 0 !== a.$.fn.socialLikes && Object(a.$)(".nk-share-icons").socialLikes().on("counter.social-likes", function(t, e, n) {
      Object(a.$)(this).find(".social-likes__counter_".concat(e)).html(i(n, 1) || "")
    }), e.toggleShare = function() {
      t ? e.closeShare() : e.openShare()
    }, e.openShare = function() {
      t || (t = 1, n.addClass("open"), a.$wnd.trigger("nk-open-share-place", [n]))
    }, e.closeShare = function() {
      t && (t = 0, n.removeClass("open"), a.$wnd.trigger("nk-close-share-place", [n]))
    }, a.$doc.on("click", ".nk-share-toggle", function(t) {
      e.toggleShare(), t.preventDefault()
    }), a.$doc.on("click", ".nk-share-place-overlay", function() {
      e.closeShare()
    }), a.$wnd.on("scroll resize", function() {
      e.closeShare()
    })
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initNavbar", function() {
    return i
  });
  var f = n(5);

  function i() {
    var n = this,
      a = Object(f.$)(".nk-navbar-top"),
      i = Object(f.$)(".nk-contacts-top"),
      t = Object(f.$)(".nk-navbar-left"),
      e = Object(f.$)("[data-nav-mobile]");
    if (e.length) {
      e.each(function() {
        var t = Object(f.$)(Object(f.$)(this).html());
        Object(f.$)(Object(f.$)(this).attr("data-nav-mobile")).find(".nk-navbar-mobile-content > ul.nk-nav").append(t)
      });
      var o = Object(f.$)(".nk-navbar-mobile-content > ul.nk-nav");
      o.find(".nk-mega-item > .dropdown").each(function() {
        var t = Object(f.$)(this).children("ul").addClass("dropdown");
        t.find("> li > label").each(function() {
          Object(f.$)(this).next().addClass("dropdown"), Object(f.$)(this).parent().addClass("nk-drop-item"), Object(f.$)(this).replaceWith(Object(f.$)('<a href="#"></a>').html(Object(f.$)(this).html()))
        }), Object(f.$)(this).replaceWith(t)
      }), o.find(".nk-mega-item").removeClass("nk-mega-item")
    }
    var s, r = a.length ? a.offset().top - f.pageBorderSize : 0,
      l = Object(f.$)("<div>").hide();

    function c() {
      f.$wnd.scrollTop() >= r ? (a.addClass("nk-navbar-fixed"), l.show()) : (a.removeClass("nk-navbar-fixed"), l.hide())
    }

    function d(t) {
      if (t.length) {
        var e = t.find(".nk-sign-form :focus").filter("input, textarea, select, button");
        if (e.length) return void e.on("blur", function() {
          setTimeout(function() {
            d(t)
          }, 10)
        });
        t.removeClass("open"), f.tween.to(t.children(".dropdown"), .3, {
          opacity: 0,
          display: "none",
          onComplete: function() {
            n.parallaxMouseInit()
          }
        }), f.$wnd.trigger("nk-closed-submenu", [t])
      }
    }

    function u(t) {
      t.hasClass("open") || (function(t) {
        var e = t.children(".dropdown");
        if (t.parent().is(".nk-nav")) {
          var n = t.parents(".nk-navbar:eq(0)"),
            i = n.children(".container");
          i = i.length ? i : n, e.css("display", "none");
          var a = "auto" !== e.css("right"),
            o = t.parents(".nk-contacts-top:eq(0)"),
            s = {
              marginLeft: "",
              marginRight: "",
              marginTop: 0,
              display: "block"
            };
          e.css(s);
          var r = e[0].getBoundingClientRect(),
            l = i[0].getBoundingClientRect(),
            c = t[0].getBoundingClientRect();
          r.right > l.right && (s.marginLeft = l.right - r.right, e.css(s), r = e[0].getBoundingClientRect()), r.left - f.pageBorderSize < 0 && (s.marginLeft = f.pageBorderSize - r.left, e.css(s), r = e[0].getBoundingClientRect());
          var d = r.left + (s.marginLeft || 0);
          d > c.left && (s.marginLeft = (s.marginLeft || 0) - (d - c.left)), a && (s.marginRight = -1 * s.marginLeft, s.marginLeft = ""), s.marginTop = n.innerHeight() - e.offset().top + n.offset().top + 5, o.length && (s.marginTop += parseFloat(o.css("padding-bottom") || 0)), s.display = "none", e.css(s)
        } else {
          e.css("display", "block"), t.removeClass("nk-drop-left");
          var u = e[0].getBoundingClientRect();
          e.css("display", ""), u.left + u.width > f.wndW && t.addClass("nk-drop-left")
        }
      }(t), f.tween.set(t.children(".dropdown"), {
        y: -4
      }), f.tween.to(t.children(".dropdown"), .3, {
        opacity: 1,
        y: 0,
        display: "block"
      }), t.addClass("open"), n.parallaxMouseInit(), f.$wnd.trigger("nk-opened-submenu", [t]))
    }
    a.hasClass("nk-navbar-sticky") && (a.after(l), l.height(a.innerHeight()), n.debounceResize(function() {
      l.height(a.innerHeight())
    }), f.$wnd.on("scroll resize", c), c()), t.find(".nk-nav-icons").on("click", "li.nk-drop-item", function(t) {
      t.preventDefault();
      var e = Object(f.$)(this),
        n = e.siblings(".open").add(e.siblings().find(".open"));
      clearTimeout(s), d(n), u(e)
    }), t.on("mouseenter", "li.nk-drop-item", function() {
      clearTimeout(s)
    }), a.add(i).on("mouseenter", "li.nk-drop-item", function() {
      var t = Object(f.$)(this),
        e = t.closest(i).length ? a : i,
        n = t.siblings(".open").add(t.siblings().find(".open")).add(t.parents(".nk-nav:eq(0)").siblings().find(".open")).add(t.parents(".nk-nav:eq(0)").siblings(".open")).add(t.parents(".nk-nav:eq(0)").parent().siblings().find(".open")).add(e.find(".open"));
      clearTimeout(s), d(n), u(t)
    }).on("mouseleave", "li.nk-drop-item", function() {
      var t = Object(f.$)(this);
      clearTimeout(s), s = setTimeout(function() {
        d(t)
      }, 200)
    }), a.add(i).add(t).on("mouseleave", function() {
      clearTimeout(s), s = setTimeout(function() {
        d(a.add(i).add(t.find(".nk-nav-icons")).find(".open"))
      }, 400)
    });
    var p = a.filter(".nk-navbar-autohide");
    n.throttleScroll(function(t, e) {
      var n = "nk-onscroll-hide",
        i = "nk-onscroll-show";
      "down" === t && 400 < e ? p.removeClass(i).addClass(n) : "up" !== t && "end" !== t && "start" !== t || p.removeClass(n).addClass(i), a.hasClass("nk-navbar-transparent") && a["".concat(70 < e ? "add" : "remove", "Class")]("nk-navbar-solid")
    })
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initNavbarSide", function() {
    return i
  });
  var a = n(5);

  function i() {
    var n = this,
      t = Object(a.$)('<div class="nk-navbar-overlay">').appendTo(a.$body),
      e = Object(a.$)(".nk-navbar-side");

    function i() {
      Object(a.$)("[data-nav-toggle]").each(function() {
        var t = Object(a.$)(Object(a.$)(this).attr("data-nav-toggle")).hasClass("open");
        Object(a.$)(this)["".concat(t ? "add" : "remove", "Class")]("active")
      })
    }
    n.toggleSide = function(t, e) {
      n[t.hasClass("open") ? "closeSide" : "openSide"](t, e)
    }, n.openSide = function(t) {
      t.addClass("open"), n.parallaxMouseInit(), i()
    }, n.closeSide = function(t) {
      t.each(function() {
        Object(a.$)(this).removeClass("open"), n.parallaxMouseInit(), i()
      })
    }, a.$doc.on("click", "[data-nav-toggle]", function(t) {
      var e = Object(a.$)(Object(a.$)(this).attr("data-nav-toggle"));
      e.hasClass("open") ? n.closeSide(e) : (Object(a.$)("[data-nav-toggle]").each(function() {
        n.closeSide(Object(a.$)(Object(a.$)(this).attr("data-nav-toggle")))
      }), n.openSide(e)), t.preventDefault()
    }), t.on("click", function() {
      n.closeSide(e)
    }), n.debounceResize(function() {
      e.filter(".open").each(function() {
        Object(a.$)(this).is(":visible") || n.closeSide(Object(a.$)(this))
      })
    })
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initNavbarFullscreen", function() {
    return i
  });
  var s = n(5);

  function i() {
    var e, n, i = this,
      a = Object(s.$)(".nk-navbar-full"),
      o = Object(s.$)(".nk-navbar-top");
    i.toggleFullscreenNavbar = function() {
      i[n ? "closeFullscreenNavbar" : "openFullscreenNavbar"]()
    }, i.openFullscreenNavbar = function() {
      if (!n && a.length) {
        n = 1;
        var t = a.find(".nk-nav .nk-drop-item.open > .dropdown:not(.closed) > li > a");
        t.length || (t = a.find(".nk-nav > li > a")), Object(s.$)(".nk-navbar-full-toggle").addClass("active"), e = o[0] ? o[0].getBoundingClientRect() : 0, a.css({
          paddingTop: e ? e.top + e.height : 0
        }), s.tween.set(t, {
          y: -10,
          opacity: 0
        }), a.addClass("open"), i.initPluginNano(a), s.tween.staggerTo(t, .3, {
          y: 0,
          opacity: 1,
          delay: .1
        }, .05), i.bodyOverflow(1), s.$wnd.trigger("nk-open-full-navbar", [a])
      }
    }, i.closeFullscreenNavbar = function(t) {
      n && a.length && (n = 0, Object(s.$)(".nk-navbar-full-toggle").removeClass("active"), a.removeClass("open"), t || i.bodyOverflow(0), s.$wnd.trigger("nk-close-full-navbar", [a]))
    }, s.$doc.on("click", ".nk-navbar-full-toggle", function(t) {
      i.toggleFullscreenNavbar(), t.preventDefault()
    }), s.$wnd.on("nk-open-search-block", function() {
      i.closeFullscreenNavbar(1)
    }), s.$wnd.on("nk-open-share-place", i.closeFullscreenNavbar)
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initNavbarDropEffect1", function() {
    return i
  });
  var u = n(5);

  function i() {
    var d = this,
      t = Object(u.$)(".nk-navbar-side, .nk-navbar-full").find(".nk-nav");

    function e(t) {
      var e = t.parents(".nk-navbar:eq(0)"),
        n = e.find(".nk-nav"),
        i = n.children(".nano-content"),
        a = n.parent(),
        o = e.find(".nk-nav .nk-drop-item.open > .dropdown:not(.closed)");
      if (o.length) {
        var s = o.innerHeight();
        if (a.hasClass("nk-nav-row-center")) {
          o.css({
            top: 0
          }), n.hide();
          var r = a.innerHeight();
          n.show();
          var l = r,
            c = a.offset().top - o.offset().top;
          s < l && (c += (r - s) / 2), o.css({
            top: c
          })
        }
        n.css("height", s), d.initPluginNano(e), u.tween.to(i, .3, {
          scrollTo: {
            y: 0
          },
          delay: .2
        })
      } else n.css("height", "");
      d.initPluginNano(e)
    }

    function n(t, e) {
      var n = e.find("> .dropdown > li > a"),
        i = e.parent().find("> li > a");
      if (t) e.addClass("open").parent().addClass("closed");
      else {
        e.removeClass("open").parent().removeClass("closed");
        var a = n;
        n = i, i = a
      }
      u.tween.set(n, {
        x: t ? "20%" : "-20%",
        opacity: 0,
        display: "block"
      }, .1), u.tween.staggerTo(n, .2, {
        x: "0%",
        opacity: 1,
        delay: .1
      }, .05), u.tween.staggerTo(i, .2, {
        x: t ? "-20%" : "20%",
        opacity: 0
      }, .05, function() {
        i.css("display", "none")
      })
    }
    t.find(".dropdown").prepend('<li class="bropdown-back"><a href="#">'.concat(d.options.templates.secondaryNavbarBackItem, "</a></li>")), t.on("click", ".nk-drop-item > a", function(t) {
      n(!0, Object(u.$)(this).parent()), e(Object(u.$)(this)), t.preventDefault()
    }), t.on("click", ".bropdown-back > a", function(t) {
      n(!1, Object(u.$)(this).parent().parent().parent()), e(Object(u.$)(this)), t.preventDefault()
    })
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initSearchBlock", function() {
    return i
  });
  var o = n(5);

  function i() {
    var t, e, n = this,
      i = Object(o.$)(".nk-search"),
      a = Object(o.$)(".nk-navbar-top");
    n.toggleSearch = function() {
      n["".concat(e ? "close" : "open", "Search")]()
    }, n.openSearch = function() {
      e || (e = 1, Object(o.$)(".nk-search-toggle").addClass("active"), t = a[0] ? a[0].getBoundingClientRect() : 0, i.css({
        paddingTop: t ? t.bottom : 0
      }), i.addClass("open"), n.options.enableSearchAutofocus && setTimeout(function() {
        i.find(".nk-search-field input").focus()
      }, 100), o.$wnd.trigger("nk-open-search-block", [i]))
    }, n.closeSearch = function() {
      e && (e = 0, Object(o.$)(".nk-search-toggle").removeClass("active"), i.removeClass("open"), o.$wnd.trigger("nk-close-search-block", [i]))
    }, o.$doc.on("click", ".nk-search-toggle", function(t) {
      n.toggleSearch(), t.preventDefault()
    }), o.$wnd.on("nk-open-full-navbar", function() {
      n.closeSearch()
    }), o.$wnd.on("nk-open-share-place", function() {
      n.closeSearch()
    }), o.$wnd.on("scroll", function() {
      n.closeSearch()
    })
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initHeaderTitle", function() {
    return i
  });
  var r = n(5);

  function i() {
    var n = Object(r.$)(".nk-header"),
      i = n.hasClass("nk-header-opaque"),
      a = Object(r.$)(".nk-navbar-top").hasClass("nk-header-transparent"),
      o = Object(r.$)(".nk-header-title > .nk-header-table"),
      s = Object(r.$)(".nk-header-title-full > .nk-header-table");
    i && o.css("padding-top", 0), this.debounceResize(function() {
      if (!a && !i || s.length && i) {
        var t = n.outerHeight() || 0;
        if (a || i || o.css("padding-top", t), s.length) {
          var e = "100vh";
          i && (e = "calc(100vh - ".concat(t, "px)")), s.css("min-height", e)
        }
      }
    })
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initCounters", function() {
    return i
  });
  var s = n(5);

  function i() {
    var a = this,
      n = Object(s.$)(".nk-progress.nk-count"),
      i = Object(s.$)(".nk-count:not(.nk-progress)");
    n.each(function() {
      Object(s.$)(this).attr("data-nk-count", Object(s.$)(this).attr("data-progress")).attr("data-nk-mask", Object(s.$)(this).attr("data-progress-mask")).find(".nk-progress-line > div").css("width", "".concat(Object(s.$)(this).attr("data-nk-count-from") || "0", "%")).find(".nk-progress-percent").html("")
    }), i.each(function() {
      Object(s.$)(this).attr("data-nk-count", Object(s.$)(this).attr("data-nk-count") || parseInt(Object(s.$)(this).text(), 10)).html(Object(s.$)(this).attr("data-nk-count-from") || "0")
    });
    var o = 1;

    function t() {
      if (o) {
        var t = n.filter("[data-nk-count]"),
          e = i.filter("[data-nk-count]");
        o = t.length + e.length, n.filter("[data-nk-count]").each(function() {
          var t = Object(s.$)(this);
          if (a.isInViewport(t)) {
            var e = {
                curr: t.attr("data-nk-count-from") || "0",
                to: t.attr("data-nk-count"),
                mask: t.attr("data-nk-mask") || "{$}%"
              },
              n = t.find(".nk-progress-line > div"),
              i = t.find(".nk-progress-percent");
            s.tween.to(n, 1, {
              width: "".concat(e.to, "%")
            }), s.tween.to(e, 1, {
              curr: e.to,
              roundProps: "curr",
              ease: Circ.easeIn,
              onUpdate: function() {
                i.text(e.mask.replace("{$}", e.curr))
              }
            }), t.removeAttr("data-nk-count")
          }
        }), i.filter("[data-nk-count]").each(function() {
          var t = Object(s.$)(this);
          if (a.isInViewport(t)) {
            var e = {
              curr: t.text(),
              to: t.attr("data-nk-count")
            };
            t.removeAttr("data-nk-count data-nk-count-from"), s.tween.to(e, 1, {
              curr: e.to,
              roundProps: "curr",
              ease: Circ.easeIn,
              onUpdate: function() {
                t.text(e.curr)
              }
            })
          }
        })
      }
    }
    a.throttleScroll(t), t()
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initSideButtons", function() {
    return a
  });
  var i = n(5);

  function a() {
    var e = this,
      n = Object(i.$)(".nk-side-buttons");
    e.throttleScroll(function(t, e) {
      400 < e ? n.addClass("nk-side-buttons-show-scroll-top") : n.removeClass("nk-side-buttons-show-scroll-top")
    }), i.$doc.on("click", ".nk-scroll-top", function(t) {
      t.preventDefault(), e.scrollTo("top")
    })
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initActionsLike", function() {
    return i
  });
  var f = n(5);

  function i() {
    var n, i, u = this;

    function p(t) {
      var e = "like" === t ? n : i;
      e.removeClass("active"), e[0].offsetHeight, e.addClass("active")
    }
    u.options.enableActionLikeAnimation && (n = Object(f.$)('<div class="nk-like-animation">'.concat(u.options.templates.likeAnimationLiked, "</div>")).appendTo(f.$body), i = Object(f.$)('<div class="nk-dislike-animation">'.concat(u.options.templates.likeAnimationDisliked, "</div>")).appendTo(f.$body)), f.$doc.on("click", ".nk-action-heart", function(t) {
      t.preventDefault();
      var e = Object(f.$)(this);
      if (!e.hasClass("busy")) {
        var n, i, a = e.find(".num"),
          o = e.hasClass("liked") ? "dislike" : "like",
          s = e.parents(".nk-comment:eq(0), .nk-blog-post:eq(0)").eq(0);
        e.addClass("busy"), u.options.events.actionHeart({
          $dom: e,
          $parent: s,
          type: o,
          currentNum: parseInt(a.text(), 10),
          updateNum: function(t) {
            a.text(t), (n = 1) && i && e.removeClass("busy")
          },
          updateIcon: function() {
            e["like" == o ? "addClass" : "removeClass"]("liked"), i = 1, n && i && e.removeClass("busy"), u.options.enableActionLikeAnimation && p(o)
          }
        })
      }
    }), f.$doc.on("click", ".nk-action-like .like-icon, .nk-action-like .dislike-icon", function(t) {
      t.preventDefault();
      var e = Object(f.$)(this),
        n = e.parent();
      if (!n.hasClass("busy")) {
        var i, a, o = n.hasClass("liked"),
          s = n.hasClass("disliked"),
          r = e.hasClass("dislike-icon"),
          l = n.find(".num"),
          c = n.parents(".nk-comment:eq(0), .nk-blog-post:eq(0)").eq(0),
          d = r ? "dislike" : "like";
        n.addClass("busy"), u.options.events.actionLike({
          $dom: e,
          $parent: c,
          type: d,
          isLiked: o,
          isDisliked: s,
          currentNum: parseInt(l.text(), 10),
          updateNum: function(t) {
            l.text((0 < t ? "+" : "") + t), (i = 1) && a && n.removeClass("busy")
          },
          updateIcon: function() {
            n.removeClass("liked disliked"), o && !r || s && r || n.addClass("like" == d ? "liked" : "disliked"), a = 1, i && a && n.removeClass("busy"), u.options.enableActionLikeAnimation && ("like" == d && !o || "dislike" == d && !s) && p(d)
          }
        })
      }
    })
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initStore", function() {
    return i
  });
  var d = n(5);

  function i() {
    var i = this;
    d.$doc.on("click", "a.nk-product-rating", function(t) {
      var e = this.hash;
      if (e) {
        var n = Object(d.$)(e).parents(".nk-tabs:eq(0)");
        n.length && i.scrollTo(n), Object(d.$)(".nk-tabs").find('[data-toggle="tab"][href="'.concat(e, '"]')).click()
      }
      t.preventDefault()
    }), Object(d.$)(".nk-product-carousel").each(function() {
      var a = Object(d.$)(this).find(".nk-carousel-inner"),
        t = Object(d.$)(this).find(".nk-product-carousel-thumbs"),
        o = t.children(),
        s = 0,
        r = 0,
        e = 0,
        n = !1;

      function l() {
        s = o[0]._gsTransform && o[0]._gsTransform.y ? o[0]._gsTransform.y : 0, r = t.height(), e = o.height()
      }
      o.on("click", "> div", function() {
        if (!n) {
          var t = Object(d.$)(this).index();
          a.flickity("select", t)
        }
      }), a.on("select.flickity", function() {
        var t = a.data("flickity");
        if (t) {
          var e = o.children().removeClass("active").eq(t.selectedIndex).addClass("active");
          l();
          var n = e.position().top + s;
          if (n < 0) d.tween.to(o, .2, {
            y: s - n
          });
          else {
            var i = e.outerHeight(!0);
            r < n + i && d.tween.to(o, .2, {
              y: s - (n + i - r)
            })
          }
        }
      });
      var i = !1,
        c = new Hammer.Manager(t[0]);
      c.add(new Hammer.Pan({
        pointers: 1,
        threshold: 0
      })), c.on("pan press", function(t) {
        t.preventDefault(), !1 === i && (l(), i = s), n = !0, r < e && (s = Math.min(0, Math.max(t.deltaY + i, r - e)), d.tween.set(o, {
          y: s
        })), t.isFinal && (i = !1, setTimeout(function() {
          n = !1
        }, 0))
      })
    })
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initBackgroundImages", function() {
    return a
  });
  var i = n(5);
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "parallaxMouseInit", function() {
    return a
  });
  var r = n(5);

  function l(t) {
    return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }
  var i, c = !1,
    d = 1;

  function o(e, n, i) {
    var a, o, s;
    c.each(function() {
      var t = Object(r.$)(this);
      "object" === l(a = t.data("nk-parallax-mouse-data")) && (a.is_in_viewport || i && d) && (s = i ? (o = -a.size * e, -a.size * n) : (o = (a.rect.width - (e - a.rect.left)) / a.rect.width, s = (a.rect.height - (n - a.rect.top)) / a.rect.height, (1 < o || o < 0 || 1 < s || s < 0) && (s = o = .5), o = a.size * (o - .5) * 2, a.size * (s - .5) * 2), i && d ? t.css({
        transform: "translateX(".concat(o, "px) translateY(").concat(s, "px) translateZ(0)"),
        willChange: "transform"
      }) : t.css({
        transition: "transform ".concat(i ? 2 : a.speed, "s  cubic-bezier(0.22, 0.63, 0.6, 0.88)"),
        transform: "translateX(".concat(o, "px) translateY(").concat(s, "px) translateZ(0)"),
        willChange: "transform"
      }))
    }), d = 0
  }

}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initAnchors", function() {
    return i
  });
  var c = n(5);

  function i() {
    var o = this,
      s = Object(c.$)(".nk-navbar-left-side"),
      r = Object(c.$)(".nk-navbar-right-side");
    c.$doc.on("click", ".navbar a, .nk-navbar a, a.btn, a.nk-btn, a.nk-anchor", function(t) {
      var e = this.hash,
        n = this.baseURI === window.location.href;
      if (e && n) try {
        var i = Object(c.$)(e),
          a = e.replace(/^#/, "");
        !i.length && "top" !== a && "bottom" !== a || (o.closeSide(s), o.closeSide(r), o.closeFullscreenNavbar(), o.scrollTo(i.length ? i : a), t.preventDefault())
      } catch (t) {}
    });
    var t = Object(c.$)('.nk-navbar .nk-nav > li > a[href*="#"]'),
      l = [];

    function e() {
      for (var t = 0; t < l.length; t++) {
        var e = l[t],
          n = 0,
          i = c.wndH;
        e.$block.length && (n = e.$block.offset().top, i = e.$block.innerHeight()), e.activate = n - c.wndH / 2, e.deactivate = n + i - c.wndH / 2
      }
    }

    function n(t, e) {
      for (var n = 0; n < l.length; n++) {
        var i = l[n],
          a = e >= i.activate && e < i.deactivate;
        i.$item[a ? "addClass" : "removeClass"]("active")
      }
    }
    t.each(function() {
      var t = this.hash.replace(/^#/, "");
      if (t) {
        var e = Object(c.$)(this).parent(),
          n = Object(c.$)("#".concat(t));
        if (t && n.length || "top" === t) {
          var i = function(t) {
            for (var e = 0; e < l.length; e++)
              if (l[e].hash === t) return e;
            return !1
          }(t);
          !1 === i ? l.push({
            hash: t,
            $item: e,
            $block: n
          }) : l[i].$item = l[i].$item.add(e)
        }
      }
    }), l.length && (e(), n(0, c.$wnd.scrollTop()), o.throttleScroll(n), o.debounceResize(e))
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initLinesForBoxes", function() {
    return i
  });
  var s = n(5);

  function i() {
    var t;

    function e() {
      t.each(function() {
        var t = 0,
          e = [],
          n = 0,
          i = Object(s.$)(this);
        if (i.children("*").each(function() {
            n = Object(s.$)(this).position().top, t !== n ? (t = n, e.push(Object(s.$)(this))) : e[e.length - 1] ? e[e.length - 1] = e[e.length - 1].add(Object(s.$)(this)) : e[(e.length || 1) - 1] = Object(s.$)(this)
          }), i.hasClass("vc_row")) {
          Object(s.$)(this).find("> div > div > div > .nk-box-line").removeClass("nk-box-line-top nk-box-last");
          for (var a = 0; a < e.length; a++) e[a].last().find("> div > div > .nk-box-line").addClass("nk-box-last"), 0 < a && e[a].find("> div > div > .nk-box-line").addClass("nk-box-line-top")
        } else {
          i.find("> * > .nk-box-line").removeClass("nk-box-line-top nk-box-last");
          for (var o = 0; o < e.length; o++) e[o].last().children(".nk-box-line").addClass("nk-box-last"), 0 < o && e[o].children(".nk-box-line").addClass("nk-box-line-top")
        }
      })
    }
    Object(s.$)(".row").each(function() {
      Object(s.$)(this).find("> * > .nk-box-line").length && (t = t ? t.add(Object(s.$)(this)) : Object(s.$)(this))
    }), Object(s.$)(".vc_row").each(function() {
      Object(s.$)(this).find("> div > div > div > .nk-box-line").length && (t = t ? t.add(Object(s.$)(this)) : Object(s.$)(this))
    }), t && (e(), this.debounceResize(e))
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initImageBoxes", function() {
    return i
  });
  var c = n(5);

  function i() {
    var l, e, n, i, a, t, o, s = ".nk-image-box-1:not(.nk-no-effect), .nk-image-box-1-a:not(.nk-no-effect), .nk-image-box-2:not(.nk-no-effect), .nk-image-box-3:not(.nk-no-effect), .nk-image-box-4:not(.nk-no-effect), .nk-image-box-5:not(.nk-no-effect)";
    Object(c.$)(s).each(function() {
      (e = Object(c.$)(this).find("img, div.nk-portfolio-image")).attr("data-from") && c.tween.to(e, 2, {
        scale: e.attr("data-from")
      })
    }), c.$doc.on("mouseenter", s, function() {
      l = Object(c.$)(this), e = l.find("img, div.nk-portfolio-image"), t = e.attr("data-from") || 1, o = e.attr("data-to") || 1.05, c.tween.to(e, 1, {
        scale: o
      }), a = 1
    }).on("mouseleave", s, function() {
      a = 0, c.tween.to(e, 1, {
        scale: t,
        x: 0,
        y: 0
      })
    }).on("mousemove", s, function(t) {
      window.requestAnimationFrame(function() {
        a && (n = l[0].getBoundingClientRect(), i = [(n.width / 2 - t.clientX + n.left) / (n.width / 2), (n.height / 2 - t.clientY + n.top) / (n.height / 2)], c.tween.to(e, 7, {
          x: n.width * (o - 1) * i[0] / 2,
          y: n.height * (o - 1) * i[1] / 2
        }))
      })
    }), c.$doc.on("mouseenter mouseleave", ".nk-image-box-5", function(t) {
      var e = Object(c.$)(this).find(".nk-image-box-overlay"),
        n = l[0].getBoundingClientRect(),
        i = (n.width / 2 - t.clientX + n.left) / (n.width / 2),
        a = (n.height / 2 - t.clientY + n.top) / (n.height / 2),
        o = "mouseenter" === t.type,
        s = "0%",
        r = "0%";
      Math.abs(i) > Math.abs(a) ? s = (0 < i ? "-10" : "10") + s : r = (0 < a ? "-10" : "10") + r, o && c.tween.set(e, {
        x: s,
        y: r
      }), c.tween.to(e, .25, {
        x: o ? "0%" : s,
        y: o ? "0%" : r,
        display: o ? "flex" : "none",
        ease: Power1.easeInOut
      })
    })
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initVideoFullscreen", function() {
    return i
  });
  var a = n(5);

  function i() {
    if (void 0 !== window.VideoWorker) {
      var n, i = this;
      i.openFullScreenVideo = function(t) {
        function e() {
          var t, e;
          16 / 9 > a.wndW / a.wndH ? e = (t = .9 * a.wndW) / (16 / 9) : t = (e = .9 * a.wndH) * (16 / 9), i.FullScreenVideoWrapper.css({
            width: t,
            height: e,
            top: (a.wndH - e) / 2,
            left: (a.wndW - t) / 2
          })
        }
        a.isMobile ? window.open(t) : n || (n = 1, i.FullScreenVideoApi = new VideoWorker(t, {
          autoplay: 1,
          loop: 0,
          mute: 0,
          controls: 1
        }), i.FullScreenVideo || (i.FullScreenVideo = Object(a.$)('<div class="nk-video-fullscreen"></div>').appendTo(a.$body), i.closeFullScreenVideo = function() {
          n && (n = 0, i.FullScreenVideoApi.pause(), i.FullScreenVideo.removeClass("active"), setTimeout(function() {
            i.FullScreenVideoWrapper.html("")
          }, 200), i.bodyOverflow(0))
        }, Object(a.$)('<div class="nk-video-fullscreen-close">'.concat(i.options.templates.fullscreenVideoClose, "</div>")).on("click", i.closeFullScreenVideo).appendTo(i.FullScreenVideo), i.FullScreenVideoWrapper = Object(a.$)('<div class="nk-video-fullscreen-cont"></div>').appendTo(i.FullScreenVideo), e(), i.debounceResize(e)), i.FullScreenVideoApi && i.FullScreenVideoApi.isValid() && i.FullScreenVideoApi.getIframe(function(t) {
          var e = Object(a.$)(t).parent();
          i.FullScreenVideoWrapper.append(t), e.remove(), "undefined" != typeof soundManager && soundManager.pauseAll(), i.FullScreenVideo.addClass("active"), i.bodyOverflow(1)
        }))
      }, a.$doc.on("click", ".nk-video-fullscreen-toggle", function(t) {
        t.preventDefault(), i.openFullScreenVideo(Object(a.$)(this).attr("href"))
      })
    }
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initVideoBlocks", function() {
    return i
  });
  var c = n(5);

  function i() {
    if (void 0 !== window.VideoWorker) {
      var r = this;
      Object(c.$)(".nk-plain-video[data-video]:not(.nk-plain-video-enabled)").addClass("nk-plain-video-enabled").each(function() {
        var n, i = Object(c.$)(this),
          t = Object(c.$)(this).attr("data-video"),
          e = Object(c.$)(this).attr("data-video-thumb"),
          a = new VideoWorker(t, {
            autoplay: 0,
            loop: 0,
            mute: 0,
            controls: 1
          });
        if (a && a.isValid()) {
          var o = 0,
            s = 0;
          if (i.on("click", function() {
              c.isMobile ? window.open(a.url) : s || (s = 1, o ? a.play() : (i.find(".nk-video-plain-toggle").html(r.options.templates.plainVideoLoadIcon || r.options.templates.plainVideoIcon), a.getIframe(function(t) {
                var e = (n = Object(c.$)(t)).parent();
                n.appendTo(i), e.remove(), a.play()
              })))
            }), i.append('<span class="nk-video-plain-toggle"></span>'), l(i), e ? i.css("background-image", 'url("'.concat(e, '")')) : a.getImageURL(function(t) {
              i.css("background-image", 'url("'.concat(t, '")'))
            }), c.isMobile) return;
          a.on("ready", function() {
            a.play()
          }), a.on("play", function() {
            i.addClass("active"), o || (l(i), o = 1), "undefined" != typeof soundManager && soundManager.pauseAll()
          }), a.on("pause", function() {
            i.removeClass("active"), s = 0
          })
        }
      })
    }

    function l(t) {
      t.find(".nk-video-plain-toggle").html(r.options.templates.plainVideoIcon)
    }
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initGIF", function() {
    return i
  });
  var s = n(5);

  function i() {
    var e = this;

    function o(t) {
      var e, n, i, a = Object(s.$)(t);
      t.gifPlaying || (t.gifPlaying = !0, t.khGifLoaded ? (a.addClass("nk-gif-playing"), a.find("img").attr("src", a.find("img").attr("data-gif"))) : t.khGifLoading || (t.khGifLoading = 1, a.addClass("nk-gif-loading"), e = a.find("img").attr("data-gif"), n = function() {
        t.khGifLoaded = 1, a.removeClass("nk-gif-loading"), t.gifPlaying && (t.gifPlaying = !1, o(t))
      }, (i = new Image).onload = function() {
        n()
      }, i.src = e))
    }

    function n(t) {
      var e = Object(s.$)(t);
      t.gifPlaying && (t.gifPlaying = !1, e.removeClass("nk-gif-playing"), e.find("img").attr("src", e.find("img").attr("data-gif-static")))
    }
    Object(s.$)(".nk-gif").each(function() {
      var t = Object(s.$)(this);
      t.append('<a class="nk-gif-toggle">'.concat(e.options.templates.gifIcon, "</a>")), t.append('<div class="nk-loading-spinner"><i></i></div>'), t.find("img").attr("data-gif-static", t.find("img").attr("src"))
    }), Object(s.$)(".nk-gif-hover").on("mouseenter", function() {
      Object(s.$)(this).addClass("hover"), o(this)
    }).on("mouseleave", function() {
      Object(s.$)(this).removeClass("hover"), n(this)
    }), Object(s.$)(".nk-gif-click").on("click", function() {
      this.gifPlaying ? (Object(s.$)(this).removeClass("hover"), n(this)) : (Object(s.$)(this).addClass("hover"), o(this))
    });
    var t = Object(s.$)(".nk-gif-viewport");
    t.length && e.throttleScroll(function() {
      t.each(function() {
        var t = e.isInViewport(Object(s.$)(this), 1);
        (t[0] ? t[1].height / s.wndH < .7 ? 1 === t[0] ? o : n : .7 <= t[0] ? o : n : n)(this)
      })
    }), Object(s.$)(".nk-gif:not(.nk-gif-click):not(.nk-gif-hover):not(.nk-gif-viewport)").each(function() {
      o(this)
    })
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initFullPage", function() {
    return i
  });
  var O = n(5);

  function i() {
    var o = Object(O.$)(".nk-fullpage:eq(0)"),
      s = o.find(".nk-fullpage-item");
    if (o.length && s.length) {
      var r = this;
      v(), r.debounceResize(v);
      for (var t = '<ul class="nk-fullpage-nav">', e = 0; e < s.length; e++) t += "<li>".concat(e + 1, "</li>");
      t += "</ul>";
      var a, l, c, d, n, i, u = (t = Object(O.$)(t)).children("li");
      O.$body.append(t), 1 === r.isInViewport(o) && 0 === O.$wnd.scrollTop() && (g(0), k()), t.on("click", "> li", function() {
        d = c = l = !1, w(s.eq(Object(O.$)(this).index()))
      }), "onwheel" in document.createElement("div") ? i = "wheel" : "onmousewheel" in document.createElement("div") && (i = "mousewheel"), i && O.$wnd.on(i, function(t) {
        !0 === y(t.originalEvent.deltaY) ? ($(t.originalEvent.deltaY, function() {
          n = 0
        }), t.preventDefault()) : m()
      });
      var p, f = 0,
        h = 0;
      O.$wnd.on("touchstart", function(t) {
        f = t.originalEvent.touches[0].screenY, h = 0
      }), O.$wnd.on("touchmove touchend", function(t) {
        var e = !(!t.originalEvent.touches || !t.originalEvent.touches.length) && t.originalEvent.touches[0].screenY;
        !0 === y(h = !1 === e ? h : f - e) ? ("touchend" === t.type && $(h, function() {
          n = 0
        }), t.preventDefault()) : m()
      }), O.$wnd.on("scroll resize", function() {
        n = 1, clearTimeout(p), p = setTimeout(function() {
          n && (d = c = l = !1, $())
        }, 1e3)
      }), r.debounceResize(function() {
        l && l.length && (a || w(l))
      })
    }

    function v() {
      s.css("height", O.wndH)
    }

    function g(t) {
      u.removeClass("active"), u.eq(t).addClass("active")
    }

    function k() {
      t.addClass("active")
    }

    function m() {
      t.removeClass("active")
    }

    function b(t) {
      var e = !l && !c && !d;
      if (e) {
        var n, i = r.isInViewport(o, 1);
        if (i[0]) s.each(function() {
          var t = r.isInViewport(Object(O.$)(this));
          return !t || (n = Object(O.$)(this), t < .5 && n.next(".nk-fullpage-item").length && (n = n.next(".nk-fullpage-item")), !1)
        }), 1 === i[0] ? (c = (l = n).next(".nk-fullpage-item"), d = l.prev(".nk-fullpage-item")) : 0 < i[1].top ? c = n : d = n
      }
      if (!e) {
        var a = l;
        0 < t ? (d = a, c = (l = c).next(".nk-fullpage-item")) : t < 0 && (c = a, d = (l = d).prev(".nk-fullpage-item"))
      }
      return !(!l || !l.length) && l
    }

    function y(t) {
      var e = d && d.length,
        n = c && c.length;
      if (e || n || (b(), e = d && d.length, n = c && c.length), e && n || a) return !0;
      var i = r.isInViewport(o);
      return .5 < i && (d = c = l = !1, b(), e = d && d.length, n = c && c.length, !e && t < 0 && 1 === i && 0 === O.$wnd.scrollTop() || (e && t < 0 || n && 0 < t))
    }

    function w(t, e) {
      t && !Object(O.isBodyOverflowed)() && (a = 1, r.scrollTo(t, function() {
        a = 0, e && e()
      }), g(t.index()), k())
    }

    function $(t, e) {
      a || w(b(t), e)
    }
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initQuickView", function() {
    return i
  });
  var v = n(5);

  function i() {
    if (Object(v.$)(".nk-portfolio-quick-view, .nk-product-quick-view").length) {
      var c = this,
        i = c.options.templates.quickViewPortfolio,
        o = c.options.templates.quickViewStore,
        s = "is-store-qv-nav",
        r = "is-portfolio-qv-nav",
        l = !1,
        d = !1,
        u = Object(v.$)('<div class="nk-quick-view"></div>').appendTo(v.$body),
        p = Object(v.$)('<div class="nk-quick-view-cont"></div>').appendTo(u),
        f = Object(v.$)('<div class="nk-quick-view-nav"></div>').appendTo(u);
      c.openQuickView = function(t) {
        if (!l && t && t.href) {
          l = !0;
          var e, n = t.href,
            a = Object(v.$)(t).hasClass("nk-product-quick-view");
          if (c.options.events.quickViewOpen(u), !d) e = a ? Object(v.$)(t).parents(".nk-store:eq(0)").find(".nk-product").find(".nk-product-quick-view:eq(0)") : Object(v.$)(t).parents('.nk-isotope, [class*="nk-carousel"]').eq(0).find(".nk-isotope-item").find(".nk-portfolio-quick-view:eq(0)"), d = [], e.each(function() {
            var t = Object(v.$)(this).parents(a ? ".nk-product:eq(0)" : ".nk-isotope-item:eq(0)"),
              e = "",
              n = "",
              i = "";
            i = a ? (e = t.find(".nk-product-title").text() || "", n = t.find(".nk-product-category").html() || "", t.find(".nk-product-image > img").attr("src") || "") : (e = t.find(".nk-portfolio-title").text() || "", n = t.find(".nk-portfolio-category").html() || "", t.find("img.nk-portfolio-image").attr("src") || ""), d.push({
              url: this.href,
              title: e,
              category: n,
              image: i,
              item: this
            })
          });
          u.addClass("active"), f.html(a ? o : i).removeClass("".concat(s, " ").concat(r)).addClass(a ? s : r), c.bodyOverflow(1), h(n)
        }
      }, c.closeQuickView = function() {
        c.options.events.beforeQuickViewClose(u), u.removeClass("active"), p.html(""), c.options.events.quickViewClosed(u), c.bodyOverflow(0), l = d = !1
      }, Object(v.$)('<div class="nk-quick-view-close">'.concat(c.options.templates.quickViewCloseIcon, "</div>")).on("click", c.closeQuickView).appendTo(u), f.on("click", ".nk-page-nav .nk-page-nav-prev:not(.disabled), .nk-page-nav .nk-page-nav-next:not(.disabled),.nk-page-nav-2 .nk-page-nav-prev:not(.disabled), .nk-page-nav-2 .nk-page-nav-next:not(.disabled)", function(t) {
        t.preventDefault(), h(this.href)
      }), v.$body.on("click", ".nk-portfolio-quick-view, .nk-product-quick-view", function(t) {
        t.preventDefault(), c.openQuickView(this)
      })
    }

    function h(t) {
      p.html('<div class="nk-loading-spinner mauto"><i></i></div>'), u.removeClass("loaded");
      var e = Object(v.$)("<iframe>").appendTo(p);
      if (e.on("load", function() {
          var t = Object(v.$)(this.contentDocument);
          c.options.events.beforeQuickViewLoad(t), t.find(".nk-portfolio-item-single").siblings("*:not(.nk-header-title)").remove(), t.find(".nk-product-quick-view, .nk-portfolio-quick-view, .nk-share-place, .nk-share-place-overlay, .nk-header,.nk-navbar, .nk-navbar-overlay, .nk-page-nav, .nk-page-nav-2, .nk-page-nav-3, .nk-side-buttons, .nk-search, .nk-footer").remove(), t.find("a").each(function() {
            "_blank" !== this.target && (this.target = "_parent")
          }), c.options.events.quickViewLoad(t), u.addClass("loaded")
        }), e.attr("src", t), d) {
        for (var n, i, a, o = 0; o < d.length; o++) d[o].url === t && (n = a, i = d[o + 1]), a = d[o];
        var s = f.find(".nk-page-nav-prev"),
          r = f.find(".nk-page-nav-next"),
          l = r.find(".nk-page-nav-title > .nk-product-category").length;
        s["".concat(n ? "remove" : "add", "Class")]("disabled"), s.attr("href", n && n.url || "javascript:void(0)"), s.find(".nk-page-nav-img > div").css("background-image", 'url("'.concat(n && n.image || "", '")')), s.find(".nk-page-nav-img > img").attr("src", n && n.image || ""), l ? (s.find(".nk-page-nav-title > .nk-product-title").html(n && n.title || ""), s.find(".nk-page-nav-title > .nk-product-category").html(n && n.category || "")) : s.find(".nk-page-nav-title").html(n && n.title || ""), r["".concat(i ? "remove" : "add", "Class")]("disabled"), r.attr("href", i && i.url || "javascript:void(0)"), r.find(".nk-page-nav-img > div").css("background-image", 'url("'.concat(i && i.image || "", '")')), r.find(".nk-page-nav-img > img").attr("src", i && i.image || ""), l ? (r.find(".nk-page-nav-title > .nk-product-title").html(i && i.title || ""), r.find(".nk-page-nav-title > .nk-product-category").html(i && i.category || "")) : r.find(".nk-page-nav-title").html(i && i.title || "")
      }
    }
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initInfoBoxes", function() {
    return a
  });
  var i = n(5);

  function a() {
    var n = this;
    i.$doc.on("click", ".nk-info-box .nk-info-box-close", function(t) {
      t.preventDefault();
      var e = Object(i.$)(this).parents(".nk-info-box:eq(0)");
      i.tween.to(e, .3, {
        opacity: 0,
        onComplete: function() {
          i.tween.to(e, .3, {
            height: 0,
            padding: 0,
            margin: 0,
            display: "none",
            onComplete: function() {
              n.debounceResize()
            }
          })
        }
      })
    })
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initForms", function() {
    return i
  });
  var d = n(5);

  function i() {
    var a = this;
    Object(d.$)('<span class="nk-form-control-number-up"></span>').insertAfter(".nk-form-control-number input"), Object(d.$)('<span class="nk-form-control-number-down"></span>').insertAfter(".nk-form-control-number input"), d.$doc.on("click", ".nk-form-control-number-up", function() {
      var t, e = Object(d.$)(this).siblings("input"),
        n = e.attr("max") || 9999999,
        i = parseFloat(e.val());
      t = n <= i ? i : i + 1, e.val(t), e.trigger("change")
    }), d.$doc.on("click", ".nk-form-control-number-down", function() {
      var t, e = Object(d.$)(this).siblings("input"),
        n = e.attr("min") || -9999999,
        i = parseFloat(e.val());
      t = i <= n ? i : i - 1, e.val(t), e.trigger("change")
    });
    var o = Object(d.$)(".nk-sign-form"),
      s = o.find(".nk-sign-form-lost"),
      r = o.find(".nk-sign-form-login"),
      l = o.find(".nk-sign-form-register"),
      e = o.find(".nk-sign-form-lost-toggle"),
      n = o.find(".nk-sign-form-login-toggle"),
      i = o.find(".nk-sign-form-register-toggle");

    function c(n, t) {
      var e = 1 < arguments.length && void 0 !== t && t;
      d.tween.set(o, {
        height: "auto"
      }), d.tween.set(o, {
        height: o.outerHeight(!0)
      });
      var i = s.filter(".active").add(l.filter(".active")).add(r.filter(".active"));
      d.tween.set(i, {
        position: "absolute",
        display: "block",
        x: 0
      }), d.tween.set(n, {
        position: "absolute",
        display: "none",
        x: e ? "-60%" : "60%"
      }), d.tween.to(i, .2, {
        opacity: 0,
        x: e ? "60%" : "-60%",
        display: "none",
        force3D: !0
      }), d.tween.to(n, .2, {
        opacity: 1,
        display: "block",
        x: "0%",
        force3D: !0,
        onComplete: function() {
          d.tween.set(n, {
            position: "relative"
          });
          var t = o.outerHeight(!0);
          d.tween.set(o, {
            height: "auto"
          });
          var e = o.outerHeight(!0);
          d.tween.set(o, {
            height: t
          }), d.tween.to(o, .2, {
            height: e
          })
        }
      }), i.removeClass("active"), n.addClass("active")
    }
    o.on("click", ".nk-sign-form-login-toggle:not(.active)", function(t) {
      t.preventDefault(), c(r, !0), e.removeClass("active"), n.addClass("active"), i.removeClass("active")
    }), o.on("click", ".nk-sign-form-lost-toggle:not(.active)", function(t) {
      t.preventDefault(), c(s), e.addClass("active"), n.removeClass("active"), i.removeClass("active")
    }), o.on("click", ".nk-sign-form-register-toggle:not(.active)", function(t) {
      t.preventDefault(), c(l), e.removeClass("active"), n.removeClass("active"), i.addClass("active")
    }), void 0 !== d.$.fn.ajaxSubmit && void 0 !== d.$.validator && (Object(d.$)("form:not(.nk-form-ajax):not(.nk-mchimp):not([novalidate])").each(function() {
      Object(d.$)(this).validate({
        errorClass: "nk-error",
        errorElement: "div",
        errorPlacement: function(t, e) {
          var n = e.parent(".input-group"),
            i = e.parent(".nk-form-control-number");
          n.length ? n.after(t) : i.length ? i.parent().after(t) : e.after(t), a.debounceResize()
        }
      })
    }), Object(d.$)("form.nk-form-ajax:not([novalidate])").each(function() {
      Object(d.$)(this).validate({
        errorClass: "nk-error",
        errorElement: "div",
        errorPlacement: function(t, e) {
          var n = e.parent(".input-group");
          n.length ? n.after(t) : e.after(t), a.debounceResize()
        },
        submitHandler: function(e) {
          var n = Object(d.$)(e).find(".nk-form-response-success"),
            i = Object(d.$)(e).find(".nk-form-response-error");
          Object(d.$)(e).ajaxSubmit({
            type: "POST",
            success: function(t) {
              (t = JSON.parse(t)).type && "success" === t.type ? (i.hide(), n.html(t.response).show(), e.reset()) : (n.hide(), i.html(t.response).show()), a.debounceResize()
            },
            error: function(t) {
              n.hide(), i.html(t.responseText).show(), a.debounceResize()
            }
          })
        }
      })
    }))
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initFormsMailChimp", function() {
    return a
  });
  var l = n(5);

  function a() {
    var t = Object(l.$)("form.nk-mchimp");
    if (void 0 !== l.$.fn.ajaxSubmit && void 0 !== l.$.validator && t.length) {
      var u = this;
      l.$.validator.addMethod("mc_birthday", function(t, e, n) {
        var i = !1,
          a = Object(l.$)("input:not(:hidden)", Object(l.$)(e).closest(n));
        if (0 === a.filter(":filled").length && this.optional(e)) i = !0;
        else {
          var o = [];
          o.month = a.filter('input[name*="[month]"]').val(), o.day = a.filter('input[name*="[day]"]').val(), --o.month;
          var s = new Date(1970, o.month, o.day);
          i = s.getDate() === o.day && s.getMonth() === o.month
        }
        return i
      }, "Please enter a valid month and day."), l.$.validator.addMethod("mc_date", function(t, e, n) {
        var i = !1,
          a = Object(l.$)("input:not(:hidden)", Object(l.$)(e).closest(n));
        if (0 === a.filter(":filled").length && this.optional(e)) i = !0;
        else {
          var o = [];
          o.month = a.filter('input[name*="[month]"]').val(), o.day = a.filter('input[name*="[day]"]').val(), o.year = a.filter('input[name*="[year]"]').val(), --o.month, o.year.length < 4 && (o.year = parseInt(o.year, 10) < 50 ? 2e3 + parseInt(o.year, 10) : 1900 + parseInt(o.year, 10));
          var s = new Date(o.year, o.month, o.day);
          i = s.getDate() === o.day && s.getMonth() === o.month && s.getFullYear() === o.year
        }
        return i
      }, "Please enter a valid date"), l.$.validator.addMethod("mc_phone", function(t, e, n) {
        var i = Object(l.$)("input:filled:not(:hidden)", Object(l.$)(e).closest(n));
        return !(0 !== i.length || !this.optional(e)) || 10 === (t = i.eq(0).val() + i.eq(1).val() + i.eq(2).val()).length && t.match(/[0-9]{9}/)
      }, "Please specify a valid phone number"), l.$.validator.addMethod("skip_or_complete_group", function(t, e, n) {
        var i = Object(l.$)("input:not(:hidden)", Object(l.$)(e).closest(n)),
          a = i.eq(0),
          o = a.data("valid_skip") ? a.data("valid_skip") : l.$.extend({}, this),
          s = i.filter(function() {
            return o.elementValue(this)
          }).length,
          r = 0 === s || s === i.length;
        return a.data("valid_skip", o), Object(l.$)(e).data("being_validated") || (i.data("being_validated", !0), i.each(function() {
          o.element(this)
        }), i.data("being_validated", !1)), r
      }, l.$.validator.format("Please supply missing fields.")), l.$.validator.addMethod("skip_or_fill_minimum", function(t, e, n) {
        var i = Object(l.$)(n[1], e.form),
          a = i.eq(0),
          o = a.data("valid_skip") ? a.data("valid_skip") : l.$.extend({}, this),
          s = i.filter(function() {
            return o.elementValue(this)
          }).length,
          r = 0 === s || s >= n[0];
        return a.data("valid_skip", o), Object(l.$)(e).data("being_validated") || (i.data("being_validated", !0), i.each(function() {
          o.element(this)
        }), i.data("being_validated", !1)), r
      }, l.$.validator.format("Please either skip these fields or fill at least {0} of them.")), l.$.validator.addMethod("zipcodeUS", function(t, e) {
        return this.optional(e) || /^\d{5}-\d{4}$|^\d{5}$/.test(t)
      }, "The specified US ZIP Code is invalid"), t.each(function() {
        var c = Object(l.$)(this);
        if (c.length) var d = c.validate({
          errorClass: "nk-error",
          errorElement: "div",
          groups: function() {
            var i = {};
            return c.find(".input-group").each(function() {
              var t = Object(l.$)(this).find("input:text:not(:hidden)");
              if (1 < t.length) {
                var e = t.first().attr("name"),
                  n = l.$.map(t, function(t) {
                    return t.name
                  });
                i[e.substring(0, e.indexOf("["))] = n.join(" ")
              }
            }), i
          },
          errorPlacement: function(t, e) {
            e.closest(".input-group").after(t), u.debounceResize()
          },
          submitHandler: function() {
            var r = c.find(".nk-form-response-success"),
              l = c.find(".nk-form-response-error"),
              t = c.attr("action");
            t = t.replace("/post?u=", "/post-json?u="), t += "&c=?", c.ajaxSubmit({
              type: "GET",
              dataType: "json",
              contentType: "application/json; charset=utf-8",
              url: t,
              success: function(e) {
                if (r.hide(), l.hide(), "success" === e.result) r.show().html(e.msg), c[0].reset();
                else {
                  var n, a = -1;
                  try {
                    var t = e.msg.split(" - ", 2);
                    n = void 0 === t[1] ? e.msg : (i = parseInt(t[0], 10), i.toString() === t[0] ? (a = t[0], t[1]) : (a = -1, e.msg))
                  } catch (t) {
                    a = -1, n = e.msg
                  }
                  try {
                    if (-1 === a) l.show().html(n);
                    else {
                      var o = c.find("input[name]:eq(".concat(a, ")")).attr("name"),
                        s = {};
                      s[o] = n, d.showErrors(s)
                    }
                  } catch (t) {
                    l.show().html(n)
                  }
                }
                u.debounceResize()
              },
              error: function(t) {
                r.hide(), l.html(t.responseText).show(), u.debounceResize()
              }
            })
          }
        })
      }), l.$.validator.addClassRules("birthday", {
        digits: !0,
        mc_birthday: ".datefield"
      }), l.$.validator.addClassRules("datepart", {
        digits: !0,
        mc_date: ".datefield"
      }), l.$.validator.addClassRules("phonepart", {
        digits: !0,
        mc_phone: ".phonefield"
      })
    }
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initAudioPlayer", function() {
    return i
  });
  var $ = n(5);

  function i() {
    if ("undefined" != typeof soundManager) {
      var u, o, l = this,
        p = Object($.$)(".nk-audio-player-main:not(.nk-audio-player-main-enabled)"),
        n = p.find(".nk-audio-title > div"),
        e = p.find(".nk-audio-time"),
        f = p.find(".nk-audio-play-pause .nk-audio-play"),
        h = p.find(".nk-audio-play-pause .nk-audio-pause"),
        v = p.find(".nk-audio-prev"),
        g = p.find(".nk-audio-next"),
        i = p.find(".nk-audio-progress"),
        a = i.find(".nk-audio-progress-current"),
        k = p.find(".nk-audio-volume-icon"),
        m = p.find(".nk-audio-volume .nk-audio-volume-inner"),
        s = m.find(".nk-audio-volume-current"),
        b = p.find(".nk-audio-player-playlist-inner");
      $.isIOs && p.find(".nk-audio-volume").remove(), y.prototype = {
        createPlaylist: function(t, e) {
          if (t && t.list && t.list.length) {
            var n = this,
              i = $.$.extend(!0, {}, n.playlist);
            n.playlist = $.$.extend(!0, {}, t), n.playlistShuffle = [];
            for (var a, o = "", s = 0; s < n.playlist.list.length; s++) a = n.playlist.list[s], n.playlistShuffle.push(s), o += '\n                    <li data-index="'.concat(s, '">\n                        <div class="container nk-playlist-item-cont">\n                            <div>').concat('\n                <div class="nk-playlist-play-pause">\n                    <span class="nk-playlist-play"><span class="ion-ios-play"></span></span>\n                    <span class="nk-playlist-pause"><span class="ion-ios-pause"></span></span>\n                </div>', '</div>\n                            <div class="nk-playlist-title"><div>').concat(a.title, '</div></div>\n                            <div class="nk-playlist-right">\n                                ').concat(a.buttons || "", "\n                                ").concat(a.duration ? ' <span class="nk-playlist-item-duration">'.concat(a.duration, "</span>") : "", "\n                            </div>\n                        </div>\n                    </li>");
            if (b.html(o), function(t, e, n, i) {
                for (n = t.length; n;) e = Math.random() * (1 + --n) || 0, i = t[n], t[n] = t[e], t[e] = i
              }(n.playlistShuffle), n.playlist.id) {
              var r = Object($.$)("#".concat(n.playlist.id));
              JSON.stringify(r.data("nk-playlist-data")) === JSON.stringify(n.playlist) ? n.$pagePlaylist = r : n.$pagePlaylist = null
            } else n.$pagePlaylist = null;
            JSON.stringify(i) === JSON.stringify(n.playlist) ? e === n.index ? n.playing ? n.pause() : n.play() : void 0 !== e && n.skipTo(e) : (i.id && Object($.$)("#".concat(i.id)).find("[data-index]").removeClass("nk-audio-playlist-item-playing nk-audio-playlist-item-active"), void 0 !== e && n.skipTo(e)), i = null, p.addClass("show"), l.initPluginNano()
          }
        },
        play: function(t) {
          t = "number" == typeof t ? t : this.index, this.playlist.list[t] || (t = 0);
          var e = this.playlist.list[t];
          this.index = t, soundManager.pauseAll(), u.play({
            url: e.src
          }), n.html(e.title)
        },
        pause: function() {
          soundManager.pauseAll()
        },
        skip: function(t) {
          var e = this,
            n = 0;
          if (e.shuffle) {
            var i = e.playlistShuffle.indexOf(e.index);
            i = parseInt(i, 10), "prev" === t ? (n = i - 1) < 0 && (n = e.playlistShuffle.length - 1) : (n = i + 1) >= e.playlistShuffle.length && (n = 0), n = e.playlistShuffle[n]
          } else "prev" === t ? (n = e.index - 1) < 0 && (n = e.playlist.list.length - 1) : (n = e.index + 1) >= e.playlist.list.length && (n = 0);
          e.skipTo(n)
        },
        skipTo: function(t) {
          u.stop(), i.data("busy") || (a[0].style.width = "0%"), this.progress = 0, this.play(t)
        },
        setVolume: function(t, e) {
          t = Math.min(100, Math.max(0, t)), u.setVolume(t), u.muted || e || this.mute(!1), this.volume = t, this.updateVolumeBar()
        },
        mute: function(t) {
          this.muted = void 0 !== t ? t : !u.muted, this.muted ? u.mute() : u.unmute(), this.updateVolumeBar()
        },
        updateVolumeBar: function() {
          var t = this;
          $.isIOs || (p.removeClass("volume-muted volume-half volume-small"), s[0].style.width = "".concat(t.volume, "%"), t.muted || 0 === t.volume ? p.addClass("volume-muted") : t.volume < 20 ? p.addClass("volume-small") : t.volume < 70 && p.addClass("volume-half"))
        },
        seek: function(t) {
          u.setPosition(u.duration * t)
        },
        step: function() {
          var t = u.position || 0;
          this.progress = t / u.duration, e[0].innerHTML = this.formatTime(Math.round(t)), i.data("busy") || (a[0].style.width = "".concat(100 * this.progress || 0, "%"))
        },
        formatTime: function(t) {
          var e = Math.round(t / 1e3) || 0,
            n = Math.floor(e / 60) || 0,
            i = e - 60 * (n = (n < 10 ? "0" : 0) + n);
          return "".concat(n, ":").concat(i < 10 ? "0" : "").concat(i)
        },
        setLoop: function(t) {
          void 0 !== t ? p["".concat(t ? "add" : "remove", "Class")]("nk-audio-player-loop") : p.toggleClass("nk-audio-player-loop"), this.loop = p.hasClass("nk-audio-player-loop")
        },
        setShuffle: function(t) {
          void 0 !== t ? p["".concat(t ? "add" : "remove", "Class")]("nk-audio-player-shuffle") : p.toggleClass("nk-audio-player-shuffle"), this.shuffle = p.hasClass("nk-audio-player-shuffle")
        },
        pin: function(t) {
          void 0 !== t ? p["".concat(t ? "add" : "remove", "Class")]("nk-audio-player-pin") : p.toggleClass("nk-audio-player-pin"), this.pinned = p.hasClass("nk-audio-player-pin")
        },
        showPlaylist: function(t) {
          void 0 !== t ? p["".concat(t ? "add" : "remove", "Class")]("nk-audio-player-playlist-opened") : p.toggleClass("nk-audio-player-playlist-opened"), this.pinned = p.hasClass("nk-audio-player-playlist-opened")
        }
      };
      var r = [];
      Object($.$)("ul.nk-audio-playlist:not(.nk-audio-playlist-enabled)").addClass("nk-audio-playlist-enabled").each(function() {
        var t = Object($.$)(this).attr("id") || !1,
          e = Object($.$)(this).hasClass("nk-audio-playlist-hidden"),
          n = Object($.$)(this).hasClass("active"),
          i = [];
        if (Object($.$)(this).find("> li").each(function() {
            var t = Object($.$)(this).attr("data-src");
            t && (Object($.$)(this).attr("data-index", i.length), i.push({
              title: Object($.$)(this).find(".nk-audio-playlist-title").html() || "",
              src: t,
              duration: Object($.$)(this).find(".nk-audio-playlist-duration").text() || "",
              buttons: Object($.$)(this).find(".nk-audio-playlist-buttons").html() || ""
            }), e || Object($.$)(this).prepend(l.options.templates.audioPlaylistButton))
          }), i.length) {
          var a = {
            id: t,
            isHidden: e,
            isActive: n,
            list: i
          };
          r.push(a), Object($.$)(this).data("nk-playlist-data", a), Object($.$)(this).on("click", "li[data-index]", function() {
            o.createPlaylist(a, parseInt(Object($.$)(this).attr("data-index"), 10))
          })
        }
      });
      var c = Object($.$)(".nk-audio-plain:not(.nk-audio-plain-enabled)");
      c.prepend(l.options.templates.audioPlainButton), w.prototype = {
        play: function() {
          soundManager.pauseAll(), this.api.play({
            url: this.url
          })
        },
        pause: function() {
          soundManager.pauseAll()
        },
        seek: function(t) {
          this.api.setPosition(this.api.duration * t)
        },
        step: function() {
          var t = this,
            e = t.api.position || 0;
          t.progress = e / t.api.duration, t.$timer[0].innerHTML = t.formatTime(Math.round(e)), i.data("busy") || (t.$progress[0].style.width = "".concat(100 * t.progress || 0, "%"))
        },
        formatTime: function(t) {
          var e = Math.round(t / 1e3) || 0,
            n = Math.floor(e / 60) || 0,
            i = e - 60 * (n = (n < 10 ? "0" : 0) + n);
          return "".concat(n, ":").concat(i < 10 ? "0" : "").concat(i)
        }
      }, "undefined" != typeof Hammer && Object($.$)(".nk-audio-plain:not(.nk-audio-plain-enabled), .nk-audio-player-main:not(.nk-audio-player-main-enabled)").find(".nk-audio-progress").each(function() {
        var e, n, i, a = Object($.$)(this),
          o = a.children(),
          s = !1,
          t = new Hammer.Manager(a[0]);
        t.add(new Hammer.Pan({
          pointers: 1,
          threshold: 0
        })), t.add(new Hammer.Press({
          time: 1
        })), t.on("pan press pressup", function(t) {
          "press" !== t.type && !1 !== s || (a.data("busy", !0), n = a.width(), s = t.pointers[0].clientX - a[0].getBoundingClientRect().left, a.addClass("hover")), i = Math.min(1, Math.max(0, (s + t.deltaX) / n)), o[0].style.width = "".concat(100 * i, "%"), !t.isFinal && "pressup" !== t.type || ((e = e || a.parents(".nk-audio-player-main, .nk-audio-plain")[0].audioAPI) && e.seek(i), a.removeClass("hover"), a.data("busy", !1), s = !1), t.preventDefault()
        })
      }), p.addClass("nk-audio-player-main-enabled"), c.addClass("nk-audio-plain-enabled");
      var d = this;
      soundManager.onready(function() {
        if (r.length) {
          var t = r.find(function(t) {
            return t.isActive
          });
          o = new y({
            playlist: t,
            start: 0,
            volume: 100,
            autoplay: p.hasClass("nk-audio-player-autoplay"),
            pinned: p.hasClass("nk-audio-player-pin")
          }), p[0].audioAPI = o, d.audioPlayer = o
        }
        c.length && c.each(function() {
          this.audioAPI = new w(Object($.$)(this))
        })
      })
    }

    function y(t) {
      var e = this;
      if (e.options = t, e.playlist = t.playlist, e.index = t.start || 0, e.volume = void 0 !== t.volume ? t.volume : 100, e.pinned = t.pinned || !1, e.loop = !1, e.shuffle = !1, e.progress = 0, e.muted = !1, e.playing = !1, localStorage && void 0 !== localStorage.khakiAudioPlayer) {
        var n = JSON.parse(localStorage.khakiAudioPlayer);
        e.playlist = n.playlist || e.options.playlist, e.index = n.index, e.volume = n.volume, e.pinned = n.pinned, e.loop = n.loop, e.shuffle = n.shuffle, e.progress = n.progress, e.muted = n.muted, e.playing = n.playing
      }
      e.createPlaylist(e.playlist);
      var i = !0;

      function a() {
        e.playing = !0, p.addClass("nk-audio-player-playing"), b.find(".nk-playlist-item-playing, .nk-playlist-item-active").removeClass("nk-playlist-item-playing nk-playlist-item-active"), b.find("[data-index=".concat(e.index, "]")).addClass("nk-playlist-item-playing nk-playlist-item-active"), e.$pagePlaylist && (e.$pagePlaylist.find("[data-index]").removeClass("nk-audio-playlist-item-playing nk-audio-playlist-item-active"), e.$pagePlaylist.find("[data-index=".concat(e.index, "]")).addClass("nk-audio-playlist-item-playing nk-audio-playlist-item-active"))
      }

      function o() {
        e.playing = !1, p.removeClass("nk-audio-player-playing"), b.find(".nk-playlist-item-playing").removeClass("nk-playlist-item-playing"), e.$pagePlaylist && e.$pagePlaylist.find("[data-index].nk-audio-playlist-item-playing").removeClass("nk-audio-playlist-item-playing")
      }

      function s() {
        localStorage && (localStorage.khakiAudioPlayer = JSON.stringify({
          playlist: e.playlist,
          index: e.index,
          volume: e.volume,
          pinned: e.pinned,
          loop: e.loop,
          shuffle: e.shuffle,
          progress: e.progress,
          muted: e.muted,
          playing: e.playing
        }))
      }
      if (u = soundManager.createSound({
          volume: e.volume,
          whileplaying: function() {
            e.step()
          },
          onplay: a,
          onresume: a,
          onpause: o,
          onstop: o,
          onload: function(t) {
            !t && this._iO && this._iO.onerror && this._iO.onerror()
          },
          onerror: function() {},
          onfinish: function() {
            e.loop ? e.play() : e.skip("right")
          },
          onbufferchange: function() {
            i && u.duration && (i = !1, e.seek(e.progress))
          }
        }), e.playlist && e.playlist.list && e.playlist.list.length && (e.options.autoplay || e.playing ? e.play() : (e.play(), e.pause())), e.updateVolumeBar(), p.css("transition", "none"), e.pin(e.pinned, !0), setTimeout(function() {
          p.css("transition", "")
        }, 1), e.setLoop(e.loop), e.setShuffle(e.shuffle), localStorage && (Object($.$)(window).on("unload", s), setInterval(s, 2e4)), f.on("click", function() {
          e.play()
        }), h.on("click", function() {
          e.pause()
        }), v.on("click", function() {
          e.skip("prev")
        }), g.on("click", function() {
          e.skip("next")
        }), k.on("click", function() {
          e.mute()
        }), "undefined" != typeof Hammer) {
        var r, l, c = !1,
          d = new Hammer.Manager(m[0]);
        d.add(new Hammer.Pan({
          pointers: 1,
          threshold: 0
        })), d.add(new Hammer.Press({
          time: 1
        })), d.on("pan press pressup", function(t) {
          "press" !== t.type && !1 !== c || (r = m.width(), c = t.pointers[0].clientX - m[0].getBoundingClientRect().left, m.addClass("hover")), l = 100 * Math.min(1, Math.max(0, (c + t.deltaX) / r)), e.setVolume(l), !t.isFinal && "pressup" !== t.type || (m.removeClass("hover"), c = !1), t.preventDefault()
        })
      }
      b.on("click", "> [data-index]", function() {
        var t = parseInt(Object($.$)(this).attr("data-index"), 10);
        e.index === t ? e.playing ? e.pause() : e.play() : e.skipTo(t)
      }), b.on("click", ".nk-playlist-right a", function(t) {
        t.stopPropagation()
      }), Object($.$)(".nk-audio-pin").on("click", function(t) {
        e.pin(), t.preventDefault()
      }), p.on("click", ".nk-audio-settings .nk-audio-loop", function() {
        e.setLoop()
      }), p.on("click", ".nk-audio-settings .nk-audio-shuffle", function() {
        e.setShuffle()
      }), p.on("click", ".nk-audio-settings .nk-audio-playlist", function() {
        e.showPlaylist()
      })
    }

    function w(t) {
      var e = this;

      function n() {
        t.addClass("nk-audio-plain-playing")
      }

      function i() {
        e.seek(0), e.step(), e.$item.removeClass("nk-audio-plain-playing"), e.$timer.text(e.$timer.attr("data-duration"))
      }
      e.$item = t, e.url = t.attr("data-src"), e.$playPauseBtn = t.find(".nk-audio-plain-play-pause"), e.$progress = t.find(".nk-audio-progress-current"), e.$timer = t.find(".nk-audio-plain-duration"), e.$timer.attr("data-duration", e.$timer.text()), e.api = soundManager.createSound({
        volume: 100,
        whileplaying: function() {
          e.step()
        },
        onplay: n,
        onresume: n,
        onpause: function() {
          e.$item.removeClass("nk-audio-plain-playing"), e.$timer.text(e.$timer.attr("data-duration"))
        },
        onstop: i,
        onfinish: i,
        onload: function(t) {
          !t && this._iO && this._iO.onerror && this._iO.onerror()
        }
      }), e.$playPauseBtn.on("click", function() {
        !e.api.paused && e.api.playState && e.api.url ? e.pause() : e.play()
      })
    }
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initFacebook", function() {
    return a
  });
  var i = n(5);

  function a() {
    Object(i.$)(".fb-page").length && (i.$body.append('<div id="fb-root"></div>'), function(t, e, n) {
      if ("file:" !== window.location.protocol) {
        var i = t.getElementsByTagName(e)[0];
        if (!t.getElementById(n)) {
          var a = t.createElement(e);
          a.id = n, a.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4", i.parentNode.insertBefore(a, i)
        }
      }
    }(document, "script", "facebook-jssdk"))
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initInstagram", function() {
    return a
  });
  var i = n(5);

  function a() {
    var t = this,
      e = Object(i.$)(".nk-instagram");

    function r(t, e) {
      for (var n = ["link", "image", "caption"], i = 0, a = n.length; i < a; i++) e = e.replace(new RegExp("{{".concat(n[i], "}}"), "gi"), t[n[i]]);
      return e
    }
    e.length && t.options.templates.instagram && e.each(function() {
      var o = Object(i.$)(this),
        s = {
          userID: o.attr("data-instagram-user-id") || null,
          count: o.attr("data-instagram-count") || 6,
          template: o.attr("data-instagram-template") || t.options.templates.instagram,
          quality: o.attr("data-instagram-quality") || "sm",
          loadingText: t.options.templates.instagramLoadingText,
          failText: t.options.templates.instagramFailText,
          apiPath: t.options.templates.instagramApiPath
        };
      if ("file:" === window.location.protocol) return o.html('<div class="col-12">'.concat(s.failText, "</div>")), void console.error("You should run your website on the server with PHP to get working Instagram");
      o.html('<div class="col-12">'.concat(s.loadingText, "</div>")), i.$.getJSON(s.apiPath, {
        userID: s.userID,
        count: s.count
      }, function(t) {
        o.html("");
        for (var e = 0; e < s.count; e++) {
          var n = !1;
          if (t[e]) n = t[e];
          else {
            if (!t.statuses || !t.statuses[e]) break;
            n = t.statuses[e]
          }
          var i = "thumbnail";
          "md" === s.quality && (i = "low_resolution"), "lg" === s.quality && (i = "standard_resolution");
          var a = {
            link: n.link,
            image: n.images[i].url,
            caption: n.caption
          };
          o.append(r(a, s.template))
        }
      }).fail(function(t) {
        o.html('<div class="col-12">'.concat(s.failText, "</div>")), i.$.error(t.responseText)
      })
    })
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initTwitter", function() {
    return a
  });
  var i = n(5);

  function a() {
    var t = this,
      e = Object(i.$)(".nk-twitter-list");

    function s(t, e) {
      for (var n = ["date", "tweet", "avatar", "url", "retweeted", "screen_name", "user_name"], i = 0, a = n.length; i < a; i++) e = e.replace(new RegExp("{{".concat(n[i], "}}"), "gi"), t[n[i]]);
      return e
    }
    e.length && t.options.templates.twitter && e.each(function() {
      var a = Object(i.$)(this),
        o = {
          username: a.attr("data-twitter-user-name") || null,
          list: null,
          hashtag: a.attr("data-twitter-hashtag") || null,
          count: a.attr("data-twitter-count") || 2,
          hideReplies: "true" === a.attr("data-twitter-hide-replies"),
          template: a.attr("data-twitter-template") || t.options.templates.twitter,
          loadingText: t.options.templates.twitterLoadingText,
          failText: t.options.templates.twitterFailText,
          apiPath: t.options.templates.twitterApiPath
        };
      if ("file:" === window.location.protocol) return a.html(o.failText), void console.error("You should run you website on webserver with PHP to get working Twitter");
      a.html("<span>".concat(o.loadingText, "</span>")), i.$.getJSON(o.apiPath, {
        username: o.username,
        list: o.list,
        hashtag: o.hashtag,
        count: o.count,
        exclude_replies: o.hideReplies
      }, function(t) {
        a.html("");
        for (var e = 0; e < o.count; e++) {
          var n = !1;
          if (t[e]) n = t[e];
          else {
            if (!t.statuses || !t.statuses[e]) break;
            n = t.statuses[e]
          }
          var i = {
            user_name: n.user.name,
            date: n.date_formatted,
            tweet: n.text_entitled,
            avatar: '<img src="'.concat(n.user.profile_image_url, '" />'),
            url: "https://twitter.com/".concat(n.user.screen_name, "/status/").concat(n.id_str),
            retweeted: n.retweeted,
            screen_name: "@".concat(n.user.screen_name)
          };
          a.append(s(i, o.template))
        }
      }).fail(function(t) {
        a.html(o.failText), i.$.error(t.responseText)
      })
    })
  }
}, function(t, e, n) {
  "use strict";

  function i() {
    "undefined" != typeof objectFitImages && objectFitImages()
  }
  n.r(e), n.d(e, "initPluginObjectFitImages", function() {
    return i
  })
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initPluginStickySidebar", function() {
    return a
  });
  var i = n(5);

  function a() {
    void 0 !== i.$.fn.stick_in_parent && Object(i.$)(".nk-sidebar-sticky").each(function() {
      var t = Object(i.$)(this),
        e = t.parent();
      e.addClass("nk-sidebar-sticky-parent"), t.wrapInner("<div>").children().stick_in_parent({
        parent: e,
        recalc_every: 50,
        offset_top: parseInt(t.attr("data-offset-top"), 10) || 0,
        spacer: !1
      }).on("sticky_kit:unbottom sticky_kit:stick sticky_kit:bottom", function() {
        e.css("min-height", Object(i.$)(this).height())
      }).on("sticky_kit:unstick", function() {
        e.css("min-height", "")
      })
    })
  }
}, function(t, e, n) {
  "use strict";

  function i() {
    "undefined" != typeof FastClick && FastClick.attach(document.body)
  }
  n.r(e), n.d(e, "initPluginFastClick", function() {
    return i
  })
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initPluginNano", function() {
    return a
  });
  var i = n(5);

  function a(t) {
    void 0 !== i.$.fn.nanoScroller && (t || i.$doc).find(".nano").nanoScroller()
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initPluginJarallax", function() {
    return i
  });
  var h = n(5);

}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initPluginFlickity", function() {
    return i
  });
  var p = n(5);

  function o(t) {
    Object(p.$)('<div class="nk-flickity-arrow nk-flickity-arrow-prev"><span class="nk-icon-arrow-left"></span></div>').on("click", function() {
      t.flickity("previous")
    }).appendTo(t), Object(p.$)('<div class="nk-flickity-arrow nk-flickity-arrow-next"><span class="nk-icon-arrow-right"></span></div>').on("click", function() {
      t.flickity("next")
    }).appendTo(t)
  }

  function s(t) {
    var e, n, i = t.children(".nk-carousel-inner").data("flickity"),
      a = i.selectedIndex;
    n = 0 === a ? (e = 1, i.cells.length - 1) : a === i.cells.length - 1 ? (e = 0, i.cells.length - 2) : (e = a + 1, a - 1);
    var o = Object(p.$)(i.cells[e].element),
      s = Object(p.$)(i.cells[n].element),
      r = Object(p.$)(i.cells[a].element),
      l = o.find(".nk-carousel-item-name").text(),
      c = s.find(".nk-carousel-item-name").text(),
      d = r.find(".nk-carousel-item-name").html(),
      u = r.find(".nk-carousel-item-links").html();
    t.find(".nk-carousel-next > .nk-carousel-arrow-name").html(l), t.find(".nk-carousel-prev > .nk-carousel-arrow-name").html(c), t.find(".nk-carousel-current > .nk-carousel-name").html(d), t.find(".nk-carousel-current > .nk-carousel-links").html(u)
  }

  function r(t) {
    t.on("dragStart.flickity", function() {
      Object(p.$)(this).find(".flickity-viewport").addClass("is-dragging")
    }), t.on("dragEnd.flickity", function() {
      Object(p.$)(this).find(".flickity-viewport").removeClass("is-dragging")
    })
  }

  function i() {
    if (void 0 !== window.Flickity) {
      Flickity.prototype.imagesLoaded = function() {
        if (this.options.imagesLoaded) {
          var i = this,
            a = !1;
          imagesLoaded(this.slider).on("progress", function(t, e) {
            var n = i.getParentCell(e.img);
            i.cellSizeChange(n && n.element), i.options.freeScroll || i.positionSliderAtSelected(), clearTimeout(a), a = setTimeout(function() {
              i.dispatchEvent("imagesLoadedTimeout", null, [e.img, n.element])
            }, 100)
          })
        }
      };
      var t = Object(p.$)(".nk-carousel > .nk-carousel-inner:not(.flickity-enabled)").parent();
      t.length && (t.children(".nk-carousel-inner").each(function() {
        Object(p.$)(this).flickity({
          pageDots: "true" === Object(p.$)(this).parent().attr("data-dots") || !1,
          autoPlay: parseFloat(Object(p.$)(this).parent().attr("data-autoplay")) || !1,
          prevNextButtons: !1,
          wrapAround: !0,
          cellAlign: Object(p.$)(this).parent().attr("data-cell-align") || "center"
        }), "true" === Object(p.$)(this).parent().attr("data-arrows") && o(Object(p.$)(this)), s(Object(p.$)(this).parent())
      }).on("select.flickity", function() {
        s(Object(p.$)(this).parent())
      }), t.on("click", ".nk-carousel-next", function() {
        Object(p.$)(this).parent().children(".nk-carousel-inner").flickity("next")
      }), t.on("click", ".nk-carousel-prev", function() {
        Object(p.$)(this).parent().children(".nk-carousel-inner").flickity("previous")
      }), r(t.children(".nk-carousel-inner"))), Object(p.$)(".nk-carousel-2 > .nk-carousel-inner:not(.flickity-enabled)").each(function() {
        Object(p.$)(this).flickity({
          pageDots: "true" === Object(p.$)(this).parent().attr("data-dots") || !1,
          autoPlay: parseFloat(Object(p.$)(this).parent().attr("data-autoplay")) || !1,
          prevNextButtons: !1,
          wrapAround: !0,
          imagesLoaded: !0,
          cellAlign: Object(p.$)(this).parent().attr("data-cell-align") || "center"
        }), "true" === Object(p.$)(this).parent().attr("data-arrows") && o(Object(p.$)(this)), r(Object(p.$)(this))
      });
      var e = Object(p.$)(".nk-carousel-3 > .nk-carousel-inner:not(.flickity-enabled)").parent();
      e.length && (e.children(".nk-carousel-inner").each(function() {
        Object(p.$)(this).flickity({
          pageDots: "true" === Object(p.$)(this).parent().attr("data-dots") || !1,
          autoPlay: parseFloat(Object(p.$)(this).parent().attr("data-autoplay")) || !1,
          prevNextButtons: !1,
          wrapAround: !0,
          imagesLoaded: !0,
          cellAlign: Object(p.$)(this).parent().attr("data-cell-align") || "center"
        }), s(Object(p.$)(this).parent()), "true" === Object(p.$)(this).parent().attr("data-arrows") && o(Object(p.$)(this))
      }).on("select.flickity", function() {
        s(Object(p.$)(this).parent())
      }).on("imagesLoadedTimeout.flickity", function() {
        i()
      }), e.on("click", ".nk-carousel-next", function() {
        Object(p.$)(this).parents(".nk-carousel-3:eq(0)").children(".nk-carousel-inner").flickity("next")
      }), e.on("click", ".nk-carousel-prev", function() {
        Object(p.$)(this).parents(".nk-carousel-3:eq(0)").children(".nk-carousel-inner").flickity("previous")
      }), i(), this.debounceResize(i), r(e.children(".nk-carousel-inner")));
      var n = Object(p.$)(".nk-carousel-1, .nk-carousel-1, .nk-carousel-2, .nk-carousel-3").filter(".nk-store:not(.nk-store-carousel-enabled)").addClass(".nk-store-carousel-enabled");
      n.length && (n.children(".nk-carousel-inner").on("imagesLoadedTimeout.flickity", function() {
        i()
      }), this.debounceResize(a), a())
    }

    function i() {
      e.each(function() {
        var t = Object(p.$)(this).find("img"),
          e = Object(p.$)(this).attr("data-size") || .8,
          n = p.wndH * e,
          i = Math.min(Object(p.$)(this).parent().width(), p.wndW) * e;
        t.each(function() {
          this.naturalWidth && this.naturalHeight && n * this.naturalWidth / this.naturalHeight > i && (n = i * this.naturalHeight / this.naturalWidth)
        }), t.css("height", n), Object(p.$)(this).children(".nk-carousel-inner").flickity("reposition")
      })
    }

    function a() {
      n.each(function() {
        var t, e = 0,
          n = 0,
          i = [],
          a = 0,
          o = 0;
        Object(p.$)(this).find(".nk-product").each(function() {
          if ((t = Object(p.$)(this)).css("height", ""), a = t.position().top, n !== a) {
            for (o = 0; o < i.length; o++) i[o].css("height", e);
            i.length = 0, n = a, e = t.innerHeight(), i.push(t)
          } else i.push(t), e = e < t.innerHeight() ? t.innerHeight() : e;
          for (o = 0; o < i.length; o++) i[o].css("height", e)
        })
      })
    }
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initPluginIsotope", function() {
    return a
  });
  var i = n(5);

  function a() {
    if (void 0 !== window.Isotope) {
      var e = this;
      Object(i.$)(".nk-isotope").each(function() {
        var n = Object(i.$)(this).isotope({
          itemSelector: ".nk-isotope-item"
        });
        void 0 !== i.$.fn.imagesLoaded && n.imagesLoaded().progress(function() {
          n.isotope("layout")
        }), n.on("arrangeComplete", function() {
          e.debounceResize()
        });
        var t = Object(i.$)(this).prev(".nk-isotope-filter");
        t.length && t.on("click", "[data-filter]", function(t) {
          t.preventDefault();
          var e = Object(i.$)(this).attr("data-filter");
          Object(i.$)(this).addClass("active").siblings().removeClass("active"), n.isotope({
            filter: "*" === e ? "" : "[data-filter*=".concat(e, "]")
          })
        })
      })
    }
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initPluginPhotoswipe", function() {
    return i
  });
  var b = n(5);

  function i() {
    var t = Object(b.$)(".nk-popup-gallery");
    if ("undefined" != typeof PhotoSwipe && t.length) {
      b.$body.append('<div id="gallery" class="pswp" tabindex="-1" role="dialog" aria-hidden="true">\n          <div class="pswp__bg"></div>\n          <div class="pswp__scroll-wrap">\n            <div class="pswp__container">\n              <div class="pswp__item"></div>\n              <div class="pswp__item"></div>\n              <div class="pswp__item"></div>\n            </div>\n            <div class="pswp__ui pswp__ui--hidden">\n              <div class="pswp__top-bar">\n                <div class="pswp__counter"></div>\n                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>\n                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>\n                <div class="pswp__preloader">\n                  <div class="pswp__preloader__icn">\n                    <div class="pswp__preloader__cut">\n                      <div class="pswp__preloader__donut"></div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class="pswp__loading-indicator"><div class="pswp__loading-indicator__line"></div></div>\n              <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>\n              <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>\n              <div class="pswp__caption">\n                <div class="pswp__caption__center">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>');
      var e = 0;
      t.each(function() {
        var i = Object(b.$)(this);
        i.attr("data-pswp-uid", e + 1), i.on("click", "a.nk-gallery-item", function(t) {
          t.preventDefault();
          var e = 0,
            n = this;
          i.find("a.nk-gallery-item").each(function(t) {
            return this !== n || (e = t, !1)
          }), a(e, i[0])
        }), e++
      });
      var n = function() {
        var t = window.location.hash.substring(1),
          e = {};
        if (t.length < 5) return e;
        for (var n = t.split("&"), i = 0; i < n.length; i++)
          if (n[i]) {
            var a = n[i].split("=");
            a.length < 2 || (e[a[0]] = a[1])
          } return e.gid && (e.gid = parseInt(e.gid, 10)), e
      }();
      n.pid && n.gid && a(n.pid, t.get(n.gid - 1), !0, !0)
    }

    function a(t, e, n, i) {
      var a, o, s, r, l, c, d = Object(b.$)(".pswp")[0],
        u = (a = e, l = Object(b.$)(a).find("a.nk-gallery-item"), c = [], l.each(function() {
          o = Object(b.$)(this).find("img"), s = (this.getAttribute("data-size") || "1920x1080").split("x"), (r = {
            src: this.getAttribute("href"),
            w: parseInt(s[0], 10),
            h: parseInt(s[1], 10),
            author: this.getAttribute("data-author")
          }).el = this, 0 < o.length && (r.msrc = o[0].getAttribute("src"), 1 < o.length && (r.title = Object(b.$)(o).filter(".photoswipe-description").html()));
          var t = this.getAttribute("data-med") || r.src;
          t && (s = (this.getAttribute("data-med-size") || this.getAttribute("data-size") || "1920x1080").split("x"), r.m = {
            src: t,
            w: parseInt(s[0], 10),
            h: parseInt(s[1], 10)
          }), r.o = {
            src: r.src,
            w: r.w,
            h: r.h
          }, c.push(r)
        }), c),
        p = {
          captionAndToolbarShowEmptyCaptions: !1,
          mainClass: "pswp--minimal--dark",
          barsSize: {
            top: 0,
            bottom: 0
          },
          captionEl: !0,
          fullscreenEl: !1,
          shareEl: !1,
          bgOpacity: .85,
          tapToClose: !0,
          tapToToggleControls: !1,
          addCaptionHTMLFn: function(t, e) {
            if (!t.title && !t.author) return e.children[0].innerHTML = "", !1;
            var n = "";
            return t.title && (n += t.title), t.author && (t.title && (n += "<br>"), n += "<small>".concat(t.author, "</small>")), e.children[0].innerHTML = n, !0
          },
          galleryUID: e.getAttribute("data-pswp-uid"),
          getThumbBoundsFn: function(t) {
            var e = u[t].el.children[0],
              n = window.pageYOffset || document.documentElement.scrollTop,
              i = e.getBoundingClientRect();
            return {
              x: i.left,
              y: i.top + n,
              w: i.width
            }
          }
        };
      if (i)
        if (p.galleryPIDs) {
          for (var f = 0; f < u.length; f++)
            if (u[f].pid === t) {
              p.index = f;
              break
            }
        } else p.index = parseInt(t, 10) - 1;
      else p.index = parseInt(t, 10);
      if (!Number.isNaN(p.index)) {
        n && (p.showAnimationDuration = 0);
        var h, v, g = new PhotoSwipe(d, PhotoSwipeUI_Default, u, p),
          k = !1,
          m = !0;
        g.listen("beforeResize", function() {
          var t = window.devicePixelRatio ? window.devicePixelRatio : 1;
          t = Math.min(t, 2.5), 1200 <= (h = g.viewportSize.x * t) || !g.likelyTouchDevice && 800 < h || 1200 < window.screen.width ? k || (v = k = !0) : k && (v = !(k = !1)), v && !m && g.invalidateCurrItems(), m = m && !1, v = !1
        }), g.listen("gettingData", function(t, e) {
          k ? (e.src = e.o.src, e.w = e.o.w, e.h = e.o.h) : (e.src = e.m.src, e.w = e.m.w, e.h = e.m.h)
        }), g.init()
      }
    }
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initPluginTabs", function() {
    return a
  });
  var i = n(5);

  function a() {
    var t = this;
    i.$wnd.on("shown.bs.tab", function() {
      t.debounceResize()
    })
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initPluginAccordions", function() {
    return a
  });
  var i = n(5);

  function a() {
    var t = this;
    i.$wnd.on("shown.bs.collapse", function() {
      t.debounceResize()
    })
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initPluginCountdown", function() {
    return a
  });
  var i = n(5);

  function a() {
    if (void 0 !== i.$.fn.countdown && "undefined" != typeof moment && void 0 !== moment.tz) {
      var n = this;
      Object(i.$)(".nk-countdown").each(function() {
        var t = Object(i.$)(this).attr("data-timezone"),
          e = Object(i.$)(this).attr("data-end");
        e = moment.tz(e, t).toDate(), Object(i.$)(this).countdown(e, function(t) {
          Object(i.$)(this).html(t.strftime(n.options.templates.countdown))
        })
      })
    }
  }
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "initPluginTypedjs", function() {
    return i
  });
  var c = n(5);

  function i() {
    Object(c.$)(".nk-typed").each(function() {
      var t = Object(c.$)(this),
        e = [];
      if (t.children("span").each(function() {
          e.push(Object(c.$)(this).html())
        }), e.length) {
        t.html("");
        var n = !t.attr("data-loop") || "true" === t.attr("data-loop"),
          i = !!t.attr("data-shuffle") && "true" === t.attr("data-shuffle"),
          a = t.attr("data-type-speed") ? parseInt(t.attr("data-type-speed"), 10) : 30,
          o = t.attr("data-start-delay") ? parseInt(t.attr("data-start-delay"), 10) : 0,
          s = t.attr("data-back-speed") ? parseInt(t.attr("data-back-speed"), 10) : 10,
          r = t.attr("data-back-delay") ? parseInt(t.attr("data-back-delay"), 10) : 1e3,
          l = t.attr("data-cursor");
        l ? "false" === l && (l = !1) : l = "|", new Typed(Object(c.$)("<span>").appendTo(t)[0], {
          strings: e,
          typeSpeed: a,
          startDelay: o,
          backSpeed: s,
          backDelay: r,
          shuffle: i,
          loop: n,
          loopCount: !1,
          showCursor: !!l,
          cursorChar: l
        }), setTimeout(function() {
          t.addClass("ready")
        }, 0)
      }
    })
  }
}]);
