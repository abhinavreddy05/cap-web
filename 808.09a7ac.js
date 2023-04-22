/*! For license information please see 808.09a7ac.js.LICENSE.txt */
(self.webpackChunkidlefinance = self.webpackChunkidlefinance || []).push([
    [808], {
        98595: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                CLASSES: () => ge,
                CLASS_ACTIVE: () => pe,
                CLASS_ARROW: () => Jt,
                CLASS_ARROWS: () => Zt,
                CLASS_ARROW_NEXT: () => te,
                CLASS_ARROW_PREV: () => Qt,
                CLASS_AUTOPLAY: () => ae,
                CLASS_CLONE: () => Ut,
                CLASS_CONTAINER: () => Kt,
                CLASS_INITIALIZED: () => le,
                CLASS_LIST: () => Yt,
                CLASS_LOADING: () => me,
                CLASS_NEXT: () => fe,
                CLASS_PAGINATION: () => ee,
                CLASS_PAGINATION_PAGE: () => ie,
                CLASS_PAUSE: () => oe,
                CLASS_PLAY: () => ne,
                CLASS_PREV: () => ue,
                CLASS_PROGRESS: () => re,
                CLASS_PROGRESS_BAR: () => se,
                CLASS_ROOT: () => jt,
                CLASS_SLIDE: () => Xt,
                CLASS_SLIDER: () => qt,
                CLASS_SPINNER: () => he,
                CLASS_TRACK: () => Wt,
                CLASS_VISIBLE: () => ce,
                EVENT_ACTIVE: () => ft,
                EVENT_ARROWS_MOUNTED: () => _t,
                EVENT_ARROWS_UPDATED: () => Tt,
                EVENT_AUTOPLAY_PAUSE: () => Vt,
                EVENT_AUTOPLAY_PLAY: () => It,
                EVENT_AUTOPLAY_PLAYING: () => Bt,
                EVENT_CLICK: () => ut,
                EVENT_DESTROY: () => At,
                EVENT_DRAG: () => Ct,
                EVENT_DRAGGED: () => St,
                EVENT_DRAGGING: () => xt,
                EVENT_HIDDEN: () => dt,
                EVENT_INACTIVE: () => ct,
                EVENT_LAZYLOAD_LOADED: () => Rt,
                EVENT_MOUNTED: () => nt,
                EVENT_MOVE: () => ht,
                EVENT_MOVED: () => lt,
                EVENT_NAVIGATION_MOUNTED: () => wt,
                EVENT_PAGINATION_MOUNTED: () => kt,
                EVENT_PAGINATION_UPDATED: () => Mt,
                EVENT_READY: () => ot,
                EVENT_REFRESH: () => yt,
                EVENT_REPOSITIONED: () => bt,
                EVENT_RESIZE: () => Dt,
                EVENT_RESIZED: () => Et,
                EVENT_SCROLL: () => Pt,
                EVENT_SCROLLED: () => Ft,
                EVENT_SHIFTED: () => pt,
                EVENT_SLIDE_KEYDOWN: () => gt,
                EVENT_UPDATED: () => vt,
                EVENT_VISIBLE: () => mt,
                EventBus: () => at,
                EventInterface: () => Lt,
                RequestInterval: () => Nt,
                STATUS_CLASSES: () => de,
                Splide: () => $e,
                SplideRenderer: () => We,
                State: () => Gt,
                Throttle: () => zt,
                default: () => $e
            });
            const r = "splide";

            function s(t) {
                t.length = 0
            }

            function a(t) {
                return !l(t) && "object" == typeof t
            }

            function n(t) {
                return Array.isArray(t)
            }

            function o(t) {
                return "string" == typeof t
            }

            function h(t) {
                return void 0 === t
            }

            function l(t) {
                return null === t
            }

            function p(t) {
                return t instanceof HTMLElement
            }

            function u(t) {
                return n(t) ? t : [t]
            }

            function f(t, e) {
                u(t).forEach(e)
            }

            function c(t, e) {
                return t.indexOf(e) > -1
            }

            function m(t, e) {
                return t.push(...u(e)), t
            }
            const d = Array.prototype;

            function g(t, e, i) {
                return d.slice.call(t, e, i)
            }

            function y(t, e, i) {
                t && f(e, (e => {
                    e && t.classList[i ? "add" : "remove"](e)
                }))
            }

            function v(t, e) {
                y(t, o(e) ? e.split(" ") : e, !0)
            }

            function D(t, e) {
                f(e, t.appendChild.bind(t))
            }

            function E(t, e) {
                f(t, (t => {
                    const i = e.parentNode;
                    i && i.insertBefore(t, e)
                }))
            }

            function b(t, e) {
                return p(t) && (t.msMatchesSelector || t.matches).call(t, e)
            }

            function C(t, e) {
                return t ? g(t.children).filter((t => b(t, e))) : []
            }

            function x(t, e) {
                return e ? C(t, e)[0] : t.firstElementChild
            }

            function S(t, e, i) {
                if (t) {
                    let r = Object.keys(t);
                    r = i ? r.reverse() : r;
                    for (let i = 0; i < r.length; i++) {
                        const s = r[i];
                        if ("__proto__" !== s && !1 === e(t[s], s)) break
                    }
                }
                return t
            }

            function P(t) {
                return g(arguments, 1).forEach((e => {
                    S(e, ((i, r) => {
                        t[r] = e[r]
                    }))
                })), t
            }

            function F(t, e) {
                return S(e, ((e, i) => {
                    n(e) ? t[i] = e.slice() : a(e) ? t[i] = F(a(t[i]) ? t[i] : {}, e) : t[i] = e
                })), t
            }

            function A(t, e) {
                t && f(e, (e => {
                    t.removeAttribute(e)
                }))
            }

            function _(t, e, i) {
                a(e) ? S(e, ((e, i) => {
                    _(t, i, e)
                })) : l(i) ? A(t, e) : t.setAttribute(e, String(i))
            }

            function T(t, e, i) {
                const r = document.createElement(t);
                return e && (o(e) ? v(r, e) : _(r, e)), i && D(i, r), r
            }

            function k(t, e, i) {
                if (h(i)) return getComputedStyle(t)[e];
                if (!l(i)) {
                    const {
                        style: r
                    } = t;
                    i = `${i}`, r[e] !== i && (r[e] = i)
                }
            }

            function M(t, e) {
                k(t, "display", e)
            }

            function w(t, e) {
                return t.getAttribute(e)
            }

            function I(t, e) {
                return t && t.classList.contains(e)
            }

            function B(t) {
                return t.getBoundingClientRect()
            }

            function V(t) {
                f(t, (t => {
                    t && t.parentNode && t.parentNode.removeChild(t)
                }))
            }

            function R(t) {
                return x((new DOMParser).parseFromString(t, "text/html").body)
            }

            function L(t, e) {
                t.preventDefault(), e && (t.stopPropagation(), t.stopImmediatePropagation())
            }

            function N(t, e) {
                return t && t.querySelector(e)
            }

            function G(t, e) {
                return g(t.querySelectorAll(e))
            }

            function z(t, e) {
                y(t, e, !1)
            }

            function O(t) {
                return o(t) ? t : t ? `${t}px` : ""
            }

            function H(t, e = "") {
                if (!t) throw new Error(`[splide] ${e}`)
            }

            function $(t) {
                setTimeout(t)
            }
            const j = () => {};

            function q(t) {
                return requestAnimationFrame(t)
            }
            const {
                min: W,
                max: Y,
                floor: X,
                ceil: U,
                abs: K
            } = Math;

            function Z(t, e, i, r) {
                const s = W(e, i),
                    a = Y(e, i);
                return r ? s < t && t < a : s <= t && t <= a
            }

            function J(t, e, i) {
                const r = W(e, i),
                    s = Y(e, i);
                return W(Y(r, t), s)
            }

            function Q(t) {
                return +(t > 0) - +(t < 0)
            }

            function tt(t) {
                return t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
            }

            function et(t, e) {
                return f(e, (e => {
                    t = t.replace("%s", `${e}`)
                })), t
            }

            function it(t) {
                return t < 10 ? `0${t}` : `${t}`
            }
            const rt = {};

            function st(t) {
                return `${t}${it(rt[t]=(rt[t]||0)+1)}`
            }

            function at() {
                let t = {};

                function e(e, r) {
                    i(e, ((e, i) => {
                        const s = t[e];
                        t[e] = s && s.filter((t => t._key ? t._key !== r : r || t._namespace !== i))
                    }))
                }

                function i(t, e) {
                    u(t).join(" ").split(" ").forEach((t => {
                        const i = t.split(".");
                        e(i[0], i[1])
                    }))
                }
                return {
                    on: function(e, r, s, a = 10) {
                        i(e, ((e, i) => {
                            t[e] = t[e] || [], m(t[e], {
                                _event: e,
                                _callback: r,
                                _namespace: i,
                                _priority: a,
                                _key: s
                            }).sort(((t, e) => t._priority - e._priority))
                        }))
                    },
                    off: e,
                    offBy: function(i) {
                        S(t, ((t, r) => {
                            e(r, i)
                        }))
                    },
                    emit: function(e) {
                        (t[e] || []).forEach((t => {
                            t._callback.apply(t, g(arguments, 1))
                        }))
                    },
                    destroy: function() {
                        t = {}
                    }
                }
            }
            const nt = "mounted",
                ot = "ready",
                ht = "move",
                lt = "moved",
                pt = "shifted",
                ut = "click",
                ft = "active",
                ct = "inactive",
                mt = "visible",
                dt = "hidden",
                gt = "slide:keydown",
                yt = "refresh",
                vt = "updated",
                Dt = "resize",
                Et = "resized",
                bt = "repositioned",
                Ct = "drag",
                xt = "dragging",
                St = "dragged",
                Pt = "scroll",
                Ft = "scrolled",
                At = "destroy",
                _t = "arrows:mounted",
                Tt = "arrows:updated",
                kt = "pagination:mounted",
                Mt = "pagination:updated",
                wt = "navigation:mounted",
                It = "autoplay:play",
                Bt = "autoplay:playing",
                Vt = "autoplay:pause",
                Rt = "lazyload:loaded";

            function Lt(t) {
                const {
                    event: e
                } = t, i = {};
                let r = [];

                function s(t, e, i) {
                    a(t, e, ((t, e) => {
                        r = r.filter((r => !!(r[0] !== t || r[1] !== e || i && r[2] !== i) || (t.removeEventListener(e, r[2], r[3]), !1)))
                    }))
                }

                function a(t, e, i) {
                    f(t, (t => {
                        t && e.split(" ").forEach(i.bind(null, t))
                    }))
                }

                function n() {
                    r = r.filter((t => s(t[0], t[1]))), e.offBy(i)
                }
                return e.on(At, n, i), {
                    on: function(t, r, s) {
                        e.on(t, r, i, s)
                    },
                    off: function(t) {
                        e.off(t, i)
                    },
                    emit: e.emit,
                    bind: function(t, e, i, s) {
                        a(t, e, ((t, e) => {
                            r.push([t, e, i, s]), t.addEventListener(e, i, s)
                        }))
                    },
                    unbind: s,
                    destroy: n
                }
            }

            function Nt(t, e, i, r) {
                const {
                    now: s
                } = Date;
                let a, n, o = 0,
                    h = !0,
                    l = 0;

                function p() {
                    if (!h) {
                        const n = s() - a;
                        if (n >= t ? (o = 1, a = s()) : o = n / t, i && i(o), 1 === o && (e(), r && ++l >= r)) return u();
                        q(p)
                    }
                }

                function u() {
                    h = !0
                }

                function f() {
                    cancelAnimationFrame(n), o = 0, n = 0, h = !0
                }
                return {
                    start: function(e) {
                        !e && f(), a = s() - (e ? o * t : 0), h = !1, q(p)
                    },
                    rewind: function() {
                        a = s(), o = 0, i && i(o)
                    },
                    pause: u,
                    cancel: f,
                    set: function(e) {
                        t = e
                    },
                    isPaused: function() {
                        return h
                    }
                }
            }

            function Gt(t) {
                let e = t;
                return {
                    set: function(t) {
                        e = t
                    },
                    is: function(t) {
                        return c(u(t), e)
                    }
                }
            }

            function zt(t, e) {
                let i;
                return function() {
                    i || (i = Nt(e || 0, (() => {
                        t.apply(this, arguments), i = null
                    }), null, 1), i.start())
                }
            }
            const Ot = "ttb",
                Ht = {
                    marginRight: ["marginBottom", "marginLeft"],
                    autoWidth: ["autoHeight"],
                    fixedWidth: ["fixedHeight"],
                    paddingLeft: ["paddingTop", "paddingRight"],
                    paddingRight: ["paddingBottom", "paddingLeft"],
                    width: ["height"],
                    left: ["top", "right"],
                    right: ["bottom", "left"],
                    x: ["y"],
                    X: ["Y"],
                    Y: ["X"],
                    ArrowLeft: ["ArrowUp", "ArrowRight"],
                    ArrowRight: ["ArrowDown", "ArrowLeft"]
                };

            function $t(t, e, i) {
                return {
                    resolve: function(t, e) {
                        const {
                            direction: r
                        } = i;
                        return Ht[t]["rtl" !== r || e ? r === Ot ? 0 : -1 : 1] || t
                    },
                    orient: function(t) {
                        return t * ("rtl" === i.direction ? 1 : -1)
                    }
                }
            }
            const jt = r,
                qt = "splide__slider",
                Wt = "splide__track",
                Yt = "splide__list",
                Xt = "splide__slide",
                Ut = `${Xt}--clone`,
                Kt = `${Xt}__container`,
                Zt = "splide__arrows",
                Jt = "splide__arrow",
                Qt = `${Jt}--prev`,
                te = `${Jt}--next`,
                ee = "splide__pagination",
                ie = `${ee}__page`,
                re = "splide__progress",
                se = `${re}__bar`,
                ae = "splide__autoplay",
                ne = "splide__play",
                oe = "splide__pause",
                he = "splide__spinner",
                le = "is-initialized",
                pe = "is-active",
                ue = "is-prev",
                fe = "is-next",
                ce = "is-visible",
                me = "is-loading",
                de = [pe, ce, ue, fe, me],
                ge = {
                    slide: Xt,
                    clone: Ut,
                    arrows: Zt,
                    arrow: Jt,
                    prev: Qt,
                    next: te,
                    pagination: ee,
                    page: ie,
                    spinner: he
                },
                ye = "role",
                ve = "aria-controls",
                De = "aria-current",
                Ee = "aria-label",
                be = "aria-hidden",
                Ce = "tabindex",
                xe = "aria-orientation",
                Se = [ye, ve, De, Ee, be, xe, Ce, "disabled"],
                Pe = "slide",
                Fe = "loop",
                Ae = "fade";
            const _e = "http://www.w3.org/2000/svg",
                Te = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",
                ke = {
                    passive: !1,
                    capture: !0
                },
                Me = "touchmove mousemove",
                we = "touchend touchcancel mouseup",
                Ie = ["Left", "Right", "Up", "Down"],
                Be = "keydown",
                Ve = "data-splide-lazy",
                Re = "data-splide-lazy-srcset",
                Le = [" ", "Enter", "Spacebar"];
            var Ne = Object.freeze({
                __proto__: null,
                Options: function(t, e, i) {
                    const r = zt(h);
                    let s, a, n;

                    function o(t) {
                        t && removeEventListener("resize", r)
                    }

                    function h() {
                        const e = (r = t => t[1].matches, g(a).filter(r)[0] || []);
                        var r;
                        e[0] !== n && function(e) {
                            const r = i.breakpoints[e] || s;
                            r.destroy ? (t.options = s, t.destroy("completely" === r.destroy)) : (t.state.is(5) && (o(!0), t.mount()), t.options = r)
                        }(n = e[0])
                    }
                    return {
                        setup: function() {
                            try {
                                F(i, JSON.parse(w(t.root, "data-splide")))
                            } catch (t) {
                                H(!1, t.message)
                            }
                            s = F({}, i);
                            const {
                                breakpoints: e
                            } = i;
                            if (e) {
                                const t = "min" === i.mediaQuery;
                                a = Object.keys(e).sort(((e, i) => t ? +i - +e : +e - +i)).map((e => [e, matchMedia(`(${t?"min":"max"}-width:${e}px)`)])), h()
                            }
                        },
                        mount: function() {
                            a && addEventListener("resize", r)
                        },
                        destroy: o
                    }
                },
                Direction: $t,
                Elements: function(t, e, i) {
                    const {
                        on: a
                    } = Lt(t), {
                        root: n
                    } = t, o = {}, h = [];
                    let l, p, u, f;

                    function c() {
                        ! function() {
                            p = x(n, `.${qt}`), u = N(n, `.${Wt}`), f = x(u, `.${Yt}`), H(u && f, "A track/list element is missing."), m(h, C(f, `.${Xt}:not(.${Ut})`));
                            const t = D(`.${ae}`),
                                e = D(`.${Zt}`);
                            P(o, {
                                root: n,
                                slider: p,
                                track: u,
                                list: f,
                                slides: h,
                                arrows: e,
                                autoplay: t,
                                prev: N(e, `.${Qt}`),
                                next: N(e, `.${te}`),
                                bar: N(D(`.${re}`), `.${se}`),
                                play: N(t, `.${ne}`),
                                pause: N(t, `.${oe}`)
                            })
                        }(),
                        function() {
                            const t = n.id || st(r);
                            n.id = t, u.id = u.id || `${t}-track`, f.id = f.id || `${t}-list`
                        }(), v(n, l = E())
                    }

                    function d() {
                        [n, u, f].forEach((t => {
                            A(t, "style")
                        })), s(h), z(n, l)
                    }

                    function g() {
                        d(), c()
                    }

                    function y() {
                        z(n, l), v(n, l = E())
                    }

                    function D(t) {
                        return x(n, t) || x(p, t)
                    }

                    function E() {
                        return [`${jt}--${i.type}`, `${jt}--${i.direction}`, i.drag && `${jt}--draggable`, i.isNavigation && `${jt}--nav`, pe]
                    }
                    return P(o, {
                        setup: c,
                        mount: function() {
                            a(yt, g, 8), a(vt, y)
                        },
                        destroy: d
                    })
                },
                Slides: function(t, e, i) {
                    const {
                        on: r,
                        emit: a,
                        bind: n
                    } = Lt(t), {
                        slides: h,
                        list: l
                    } = e.Elements, m = [];

                    function d() {
                        h.forEach(((t, e) => {
                            S(t, e, -1)
                        }))
                    }

                    function g() {
                        F((t => {
                            t.destroy()
                        })), s(m)
                    }

                    function C() {
                        g(), d()
                    }

                    function S(e, i, r) {
                        const s = function(t, e, i, r) {
                            const {
                                on: s,
                                emit: a,
                                bind: n,
                                destroy: o
                            } = Lt(t), {
                                Components: h,
                                root: l,
                                options: p
                            } = t, {
                                isNavigation: u,
                                updateOnMove: f
                            } = p, {
                                resolve: c
                            } = h.Direction, m = w(r, "style"), d = i > -1, g = x(r, `.${Kt}`), v = p.focusableNodes && G(r, p.focusableNodes);
                            let D;

                            function E() {
                                const s = d ? i : e,
                                    a = et(p.i18n.slideX, s + 1),
                                    n = t.splides.map((t => t.splide.root.id)).join(" ");
                                _(r, Ee, a), _(r, ve, n), _(r, ye, "menuitem"), S(P())
                            }

                            function b() {
                                D || C()
                            }

                            function C() {
                                if (!D) {
                                    const {
                                        index: i
                                    } = t;
                                    S(P()),
                                        function(t) {
                                            const e = !t && (!P() || d);
                                            _(r, be, e || null), _(r, Ce, !e && p.slideFocus ? 0 : null), v && v.forEach((t => {
                                                _(t, Ce, e ? -1 : null)
                                            })), t !== I(r, ce) && (y(r, ce, t), a(t ? mt : dt, F))
                                        }(function() {
                                            if (t.is(Ae)) return P();
                                            const e = B(h.Elements.track),
                                                i = B(r),
                                                s = c("left"),
                                                a = c("right");
                                            return X(e[s]) <= U(i[s]) && X(i[a]) <= U(e[a])
                                        }()), y(r, ue, e === i - 1), y(r, fe, e === i + 1)
                                }
                            }

                            function S(t) {
                                t !== I(r, pe) && (y(r, pe, t), u && _(r, De, t || null), a(t ? ft : ct, F))
                            }

                            function P() {
                                const {
                                    index: r
                                } = t;
                                return r === e || p.cloneStatus && r === i
                            }
                            const F = {
                                index: e,
                                slideIndex: i,
                                slide: r,
                                container: g,
                                isClone: d,
                                mount: function() {
                                    d || (r.id = `${l.id}-slide${it(e+1)}`), n(r, "click keydown", (t => {
                                        a("click" === t.type ? ut : gt, F, t)
                                    })), s([yt, bt, pt, lt, Ft], C), s(wt, E), f && s(ht, b)
                                },
                                destroy: function() {
                                    D = !0, o(), z(r, de), A(r, Se), _(r, "style", m)
                                },
                                update: C,
                                style: function(t, e, i) {
                                    k(i && g || r, t, e)
                                },
                                isWithin: function(i, r) {
                                    let s = K(i - e);
                                    return d || !p.rewind && !t.is(Fe) || (s = W(s, t.length - s)), s <= r
                                }
                            };
                            return F
                        }(t, i, r, e);
                        s.mount(), m.push(s)
                    }

                    function P(t) {
                        return t ? T((t => !t.isClone)) : m
                    }

                    function F(t, e) {
                        P(e).forEach(t)
                    }

                    function T(t) {
                        return m.filter("function" == typeof t ? t : e => o(t) ? b(e.slide, t) : c(u(t), e.index))
                    }
                    return {
                        mount: function() {
                            d(), r(yt, C), r([nt, yt], (() => {
                                m.sort(((t, e) => t.index - e.index))
                            }))
                        },
                        destroy: g,
                        update: function() {
                            F((t => {
                                t.update()
                            }))
                        },
                        register: S,
                        get: P,
                        getIn: function(t) {
                            const {
                                Controller: r
                            } = e, s = r.toIndex(t), a = r.hasFocus() ? 1 : i.perPage;
                            return T((t => Z(t.index, s, s + a - 1)))
                        },
                        getAt: function(t) {
                            return T(t)[0]
                        },
                        add: function(t, e) {
                            f(t, (t => {
                                if (o(t) && (t = R(t)), p(t)) {
                                    const r = h[e];
                                    r ? E(t, r) : D(l, t), v(t, i.classes.slide),
                                        function(t, e) {
                                            const i = G(t, "img");
                                            let {
                                                length: r
                                            } = i;
                                            r ? i.forEach((t => {
                                                n(t, "load error", (() => {
                                                    --r || e()
                                                }))
                                            })) : e()
                                        }(t, a.bind(null, Dt))
                                }
                            })), a(yt)
                        },
                        remove: function(t) {
                            V(T(t).map((t => t.slide))), a(yt)
                        },
                        forEach: F,
                        filter: T,
                        style: function(t, e, i) {
                            F((r => {
                                r.style(t, e, i)
                            }))
                        },
                        getLength: function(t) {
                            return t ? h.length : m.length
                        },
                        isEnough: function() {
                            return m.length > i.perPage
                        }
                    }
                },
                Layout: function(t, e, i) {
                    const {
                        on: r,
                        bind: s,
                        emit: n
                    } = Lt(t), {
                        Slides: o
                    } = e, {
                        resolve: h
                    } = e.Direction, {
                        root: l,
                        track: p,
                        list: u
                    } = e.Elements, {
                        getAt: f
                    } = o;
                    let c, m;

                    function d() {
                        m = null, c = i.direction === Ot, k(l, "maxWidth", O(i.width)), k(p, h("paddingLeft"), y(!1)), k(p, h("paddingRight"), y(!0)), g()
                    }

                    function g() {
                        const t = B(l);
                        m && m.width === t.width && m.height === t.height || (k(p, "height", function() {
                            let t = "";
                            return c && (t = v(), H(t, "height or heightRatio is missing."), t = `calc(${t} - ${y(!1)} - ${y(!0)})`), t
                        }()), o.style(h("marginRight"), O(i.gap)), o.style("width", (i.autoWidth ? "" : O(i.fixedWidth) || (c ? "" : D())) || null), o.style("height", O(i.fixedHeight) || (c ? i.autoHeight ? "" : D() : v()) || null, !0), m = t, n(Et))
                    }

                    function y(t) {
                        const {
                            padding: e
                        } = i, r = h(t ? "right" : "left");
                        return e && O(e[r] || (a(e) ? 0 : e)) || "0px"
                    }

                    function v() {
                        return O(i.height || B(u).width * i.heightRatio)
                    }

                    function D() {
                        const t = O(i.gap);
                        return `calc((100%${t&&` + ${t}`})/${i.perPage||1}${t&&` - ${t}`})`
                    }

                    function E(t, e) {
                        const i = f(t);
                        if (i) {
                            const t = B(i.slide)[h("right")],
                                r = B(u)[h("left")];
                            return K(t - r) + (e ? 0 : b())
                        }
                        return 0
                    }

                    function b() {
                        const t = f(0);
                        return t && parseFloat(k(t.slide, h("marginRight"))) || 0
                    }
                    return {
                        mount: function() {
                            d(), s(window, "resize load", zt(n.bind(this, Dt))), r([vt, yt], d), r(Dt, g)
                        },
                        listSize: function() {
                            return B(u)[h("width")]
                        },
                        slideSize: function(t, e) {
                            const i = f(t || 0);
                            return i ? B(i.slide)[h("width")] + (e ? 0 : b()) : 0
                        },
                        sliderSize: function() {
                            return E(t.length - 1, !0) - E(-1, !0)
                        },
                        totalSize: E,
                        getPadding: function(t) {
                            return parseFloat(k(p, h("padding" + (t ? "Right" : "Left")))) || 0
                        }
                    }
                },
                Clones: function(t, e, i) {
                    const {
                        on: r,
                        emit: a
                    } = Lt(t), {
                        Elements: n,
                        Slides: h
                    } = e, {
                        resolve: l
                    } = e.Direction, p = [];
                    let u;

                    function f() {
                        (u = y()) && (function(e) {
                            const r = h.get().slice(),
                                {
                                    length: s
                                } = r;
                            if (s) {
                                for (; r.length < e;) m(r, r);
                                m(r.slice(-e), r.slice(0, e)).forEach(((a, o) => {
                                    const l = o < e,
                                        u = function(e, r) {
                                            const s = e.cloneNode(!0);
                                            return v(s, i.classes.clone), s.id = `${t.root.id}-clone${it(r+1)}`, s
                                        }(a.slide, o);
                                    l ? E(u, r[0].slide) : D(n.list, u), m(p, u), h.register(u, o - e + (l ? 0 : s), a.index)
                                }))
                            }
                        }(u), a(Dt))
                    }

                    function c() {
                        V(p), s(p)
                    }

                    function d() {
                        c(), f()
                    }

                    function g() {
                        u < y() && a(yt)
                    }

                    function y() {
                        let {
                            clones: e
                        } = i;
                        if (t.is(Fe)) {
                            if (!e) {
                                const r = function(t, e) {
                                    if (o(e)) {
                                        const i = T("div", {
                                            style: `width: ${e}; position: absolute;`
                                        }, t);
                                        e = B(i).width, V(i)
                                    }
                                    return e
                                }(n.list, i[l("fixedWidth")]);
                                e = (r && U(B(n.track)[l("width")] / r) || i[l("autoWidth")] && t.length || i.perPage) * (i.drag ? (i.flickMaxPages || 1) + 1 : 2)
                            }
                        } else e = 0;
                        return e
                    }
                    return {
                        mount: function() {
                            f(), r(yt, d), r([vt, Dt], g)
                        },
                        destroy: c
                    }
                },
                Move: function(t, e, i) {
                    const {
                        on: r,
                        emit: s
                    } = Lt(t), {
                        slideSize: a,
                        getPadding: n,
                        totalSize: o,
                        listSize: l,
                        sliderSize: p
                    } = e.Layout, {
                        resolve: u,
                        orient: f
                    } = e.Direction, {
                        list: c,
                        track: m
                    } = e.Elements;
                    let d;

                    function g() {
                        x() || (e.Scroll.cancel(), y(t.index), s(bt))
                    }

                    function y(t) {
                        v(E(t, !0))
                    }

                    function v(e, i) {
                        if (!t.is(Ae)) {
                            const r = i ? e : function(e) {
                                if (t.is(Fe)) {
                                    const t = f(e - b()),
                                        i = S(!1, e) && t < 0,
                                        r = S(!0, e) && t > 0;
                                    (i || r) && (e = D(e, r))
                                }
                                return e
                            }(e);
                            c.style.transform = `translate${u("X")}(${r}px)`, e !== r && s(pt)
                        }
                    }

                    function D(t, e) {
                        const i = t - C(e),
                            r = p();
                        return t - f(r * (U(K(i) / r) || 1)) * (e ? 1 : -1)
                    }

                    function E(e, r) {
                        const s = f(o(e - 1) - function(t) {
                            const {
                                focus: e
                            } = i;
                            return "center" === e ? (l() - a(t, !0)) / 2 : +e * a(t) || 0
                        }(e));
                        return r ? function(e) {
                            return i.trimSpace && t.is(Pe) && (e = J(e, 0, f(p() - l()))), e
                        }(s) : s
                    }

                    function b() {
                        const t = u("left");
                        return B(c)[t] - B(m)[t] + f(n(!1))
                    }

                    function C(t) {
                        return E(t ? e.Controller.getEnd() : 0, !!i.trimSpace)
                    }

                    function x() {
                        return t.state.is(4) && i.waitForTransition
                    }

                    function S(t, e) {
                        e = h(e) ? b() : e;
                        const i = !0 !== t && f(e) < f(C(!1)),
                            r = !1 !== t && f(e) > f(C(!0));
                        return i || r
                    }
                    return {
                        mount: function() {
                            d = e.Transition, r([nt, Et, vt, yt], g)
                        },
                        destroy: function() {
                            A(c, "style")
                        },
                        move: function(r, a, n, o) {
                            if (!x()) {
                                const {
                                    set: h
                                } = t.state, l = b();
                                r !== a && (d.cancel(), v(D(l, r > a), !0)), h(4), s(ht, a, n, r), d.start(a, (() => {
                                    h(3), s(lt, a, n, r), "move" === i.trimSpace && r !== n && l === b() ? e.Controller.go(r > n ? ">" : "<", !1, o) : o && o()
                                }))
                            }
                        },
                        jump: y,
                        translate: v,
                        shift: D,
                        cancel: function() {
                            v(b()), d.cancel()
                        },
                        toIndex: function(t) {
                            const i = e.Slides.get();
                            let r = 0,
                                s = 1 / 0;
                            for (let e = 0; e < i.length; e++) {
                                const a = i[e].index,
                                    n = K(E(a, !0) - t);
                                if (!(n <= s)) break;
                                s = n, r = a
                            }
                            return r
                        },
                        toPosition: E,
                        getPosition: b,
                        getLimit: C,
                        isBusy: x,
                        exceededLimit: S
                    }
                },
                Controller: function(t, e, i) {
                    const {
                        on: r
                    } = Lt(t), {
                        Move: s
                    } = e, {
                        getPosition: a,
                        getLimit: n
                    } = s, {
                        isEnough: l,
                        getLength: p
                    } = e.Slides, u = t.is(Fe), f = t.is(Pe);
                    let c, m, d, g = i.start || 0,
                        y = g;

                    function v() {
                        c = p(!0), m = i.perMove, d = i.perPage, g = J(g, 0, c - 1)
                    }

                    function D(t, i, r, a, n) {
                        const o = i ? t : _(t);
                        e.Scroll.scroll(i || r ? s.toPosition(o, !0) : t, a, (() => {
                            T(s.toIndex(s.getPosition())), n && n()
                        }))
                    }

                    function E(t) {
                        return C(!1, t)
                    }

                    function b(t) {
                        return C(!0, t)
                    }

                    function C(t, e) {
                        const i = m || (k() ? 1 : d),
                            r = x(g + i * (t ? -1 : 1), g);
                        return -1 !== r || !f || (s = a(), o = n(!t), 1, K(s - o) < 1) ? e ? r : P(r) : t ? 0 : S();
                        var s, o
                    }

                    function x(t, e, r) {
                        if (l()) {
                            const s = S();
                            t < 0 || t > s ? t = Z(0, t, e, !0) || Z(s, e, t, !0) ? F(A(t)) : u ? m || k() ? t : t < 0 ? -(c % d || d) : c : i.rewind ? t < 0 ? s : 0 : -1 : r || t === e || (t = m ? t : F(A(e) + (t < e ? -1 : 1)))
                        } else t = -1;
                        return t
                    }

                    function S() {
                        let t = c - d;
                        return (k() || u && m) && (t = c - 1), Y(t, 0)
                    }

                    function P(t) {
                        return u ? l() ? t % c + (t < 0 ? c : 0) : -1 : t
                    }

                    function F(t) {
                        return J(k() ? t : d * t, 0, S())
                    }

                    function A(t) {
                        return k() || (t = Z(t, c - d, c - 1) ? c - 1 : t, t = X(t / d)), t
                    }

                    function _(t) {
                        const e = s.toIndex(t);
                        return f ? J(e, 0, S()) : e
                    }

                    function T(t) {
                        t !== g && (y = g, g = t)
                    }

                    function k() {
                        return !h(i.focus) || i.isNavigation
                    }
                    return {
                        mount: function() {
                            v(), r([vt, yt], v, 9)
                        },
                        go: function(t, e, r) {
                            const a = function(t) {
                                let e = g;
                                if (o(t)) {
                                    const [, i, r] = t.match(/([+\-<>])(\d+)?/) || [];
                                    "+" === i || "-" === i ? e = x(g + +`${i}${+r||1}`, g, !0) : ">" === i ? e = r ? F(+r) : E(!0) : "<" === i && (e = b(!0))
                                } else e = u ? t : J(t, 0, S());
                                return e
                            }(t);
                            if (i.useScroll) D(a, !0, !0, i.speed, r);
                            else {
                                const t = P(a);
                                t > -1 && !s.isBusy() && (e || t !== g) && (T(t), s.move(a, t, y, r))
                            }
                        },
                        scroll: D,
                        getNext: E,
                        getPrev: b,
                        getAdjacent: C,
                        getEnd: S,
                        setIndex: T,
                        getIndex: function(t) {
                            return t ? y : g
                        },
                        toIndex: F,
                        toPage: A,
                        toDest: _,
                        hasFocus: k
                    }
                },
                Arrows: function(t, e, i) {
                    const {
                        on: r,
                        bind: s,
                        emit: a
                    } = Lt(t), {
                        classes: n,
                        i18n: o
                    } = i, {
                        Elements: h,
                        Controller: l
                    } = e;
                    let p, u = h.arrows,
                        f = h.prev,
                        c = h.next;
                    const m = {};

                    function d() {
                        if (i.arrows && (f && c || (u = T("div", n.arrows), f = g(!0), c = g(!1), p = !0, D(u, [f, c]), E(u, x("slider" === i.arrows && h.slider || t.root)))), f && c)
                            if (m.prev) M(u, !1 === i.arrows ? "none" : "");
                            else {
                                const {
                                    id: t
                                } = h.track;
                                _(f, ve, t), _(c, ve, t), m.prev = f, m.next = c,
                                    function() {
                                        const {
                                            go: t
                                        } = l;
                                        r([nt, lt, vt, yt, Ft], y), s(c, "click", (() => {
                                            t(">", !0)
                                        })), s(f, "click", (() => {
                                            t("<", !0)
                                        }))
                                    }(), a(_t, f, c)
                            }
                    }

                    function g(t) {
                        return R(`<button class="${n.arrow} ${t?n.prev:n.next}" type="button"><svg xmlns="${_e}" viewBox="0 0 40 40" width="40" height="40"><path d="${i.arrowPath||Te}" />`)
                    }

                    function y() {
                        const e = t.index,
                            i = l.getPrev(),
                            r = l.getNext(),
                            s = i > -1 && e < i ? o.last : o.prev,
                            n = r > -1 && e > r ? o.first : o.next;
                        f.disabled = i < 0, c.disabled = r < 0, _(f, Ee, s), _(c, Ee, n), a(Tt, f, c, i, r)
                    }
                    return {
                        arrows: m,
                        mount: function() {
                            d(), r(vt, d)
                        },
                        destroy: function() {
                            p ? V(u) : (A(f, Se), A(c, Se))
                        }
                    }
                },
                Autoplay: function(t, e, i) {
                    const {
                        on: r,
                        bind: s,
                        emit: a
                    } = Lt(t), n = Nt(i.interval, t.go.bind(t, ">"), (function(t) {
                        const {
                            bar: e
                        } = h;
                        e && k(e, "width", 100 * t + "%"), a(Bt, t)
                    })), {
                        isPaused: o
                    } = n, {
                        Elements: h
                    } = e;
                    let l, p, u;

                    function f(t) {
                        const e = t ? "pause" : "play",
                            r = h[e];
                        r && (_(r, ve, h.track.id), _(r, Ee, i.i18n[e]), s(r, "click", t ? m : c))
                    }

                    function c() {
                        o() && e.Slides.isEnough() && (n.start(!i.resetProgress), p = l = u = !1, a(It))
                    }

                    function m(t = !0) {
                        o() || (n.pause(), a(Vt)), u = t
                    }

                    function d() {
                        u || (l || p ? m(!1) : c())
                    }

                    function g() {
                        const r = e.Slides.getAt(t.index);
                        n.set(r && +w(r.slide, "data-splide-interval") || i.interval)
                    }
                    return {
                        mount: function() {
                            const {
                                autoplay: t
                            } = i;
                            t && (f(!0), f(!1), function() {
                                const {
                                    root: t
                                } = h;
                                i.pauseOnHover && s(t, "mouseenter mouseleave", (t => {
                                    l = "mouseenter" === t.type, d()
                                })), i.pauseOnFocus && s(t, "focusin focusout", (t => {
                                    p = "focusin" === t.type, d()
                                })), r([ht, Pt, yt], n.rewind), r(ht, g)
                            }(), "pause" !== t && c())
                        },
                        destroy: n.cancel,
                        play: c,
                        pause: m,
                        isPaused: o
                    }
                },
                Cover: function(t, e, i) {
                    const {
                        on: r
                    } = Lt(t);

                    function s(t) {
                        e.Slides.forEach((e => {
                            const i = x(e.container || e.slide, "img");
                            i && i.src && a(t, i, e)
                        }))
                    }

                    function a(t, e, i) {
                        i.style("background", t ? `center/cover no-repeat url("${e.src}")` : "", !0), M(e, t ? "none" : "")
                    }
                    return {
                        mount: function() {
                            i.cover && (r(Rt, ((t, e) => {
                                a(!0, t, e)
                            })), r([nt, vt, yt], s.bind(null, !0)))
                        },
                        destroy: function() {
                            s(!1)
                        }
                    }
                },
                Scroll: function(t, e, i) {
                    const {
                        on: r,
                        emit: s
                    } = Lt(t), {
                        Move: a
                    } = e, {
                        getPosition: n,
                        getLimit: o,
                        exceededLimit: h
                    } = a;
                    let l, p;

                    function u() {
                        const e = n(),
                            i = a.toIndex(e);
                        Z(i, 0, t.length - 1) || a.translate(a.shift(e, i > 0), !0), p && p(), s(Ft)
                    }

                    function f() {
                        l && l.cancel()
                    }

                    function c() {
                        l && !l.isPaused() && (f(), u())
                    }
                    return {
                        mount: function() {
                            r(ht, f), r([vt, yt], c)
                        },
                        destroy: f,
                        scroll: function e(r, c, m, d) {
                            const g = n();
                            let y = 1;
                            var v;
                            c = c || (v = K(r - g), Y(v / 1.5, 800)), p = m, f(), l = Nt(c, u, (s => {
                                const l = n(),
                                    p = (g + (r - g) * function(t) {
                                        const {
                                            easingFunc: e
                                        } = i;
                                        return e ? e(t) : 1 - Math.pow(1 - t, 4)
                                    }(s) - n()) * y;
                                var u;
                                a.translate(l + p), t.is(Pe) && !d && h() && (y *= .6, K(p) < 10 && (u = h(!1), e(o(!u), 600, null, !0)))
                            }), 1), s(Pt), l.start()
                        },
                        cancel: c
                    }
                },
                Drag: function(t, e, i) {
                    const {
                        on: r,
                        emit: s,
                        bind: n,
                        unbind: o
                    } = Lt(t), {
                        Move: h,
                        Scroll: l,
                        Controller: p
                    } = e, {
                        track: u
                    } = e.Elements, {
                        resolve: f,
                        orient: c
                    } = e.Direction, {
                        getPosition: m,
                        exceededLimit: d
                    } = h;
                    let g, y, v, D, E, C, x, S, P, F = !1;

                    function A() {
                        const {
                            drag: t
                        } = i;
                        N(!t), E = "free" === t
                    }

                    function _(t) {
                        if (!S) {
                            const {
                                noDrag: e
                            } = i, r = R(t), s = !e || !b(t.target, e);
                            x = !1, !s || !r && t.button || (h.isBusy() ? L(t, !0) : (P = r ? u : window, v = null, D = null, n(P, Me, T, ke), n(P, we, k, ke), h.cancel(), l.cancel(), M(t)))
                        }
                    }

                    function T(e) {
                        if (D || s(Ct), D = e, e.cancelable) {
                            const r = B(e) - B(y);
                            if (C) {
                                h.translate(g + function(e) {
                                    return e / (F && t.is(Pe) ? 5 : 1)
                                }(r));
                                const i = V(e) - V(y) > 200,
                                    a = F !== (F = d());
                                (i || a) && M(e), s(xt), x = !0, L(e)
                            } else {
                                let {
                                    dragMinThreshold: t
                                } = i;
                                t = a(t) ? t : {
                                    mouse: 0,
                                    touch: +t || 10
                                }, C = K(r) > (R(e) ? t.touch : t.mouse), I() && L(e)
                            }
                        }
                    }

                    function k(r) {
                        o(P, Me, T), o(P, we, k);
                        const {
                            index: a
                        } = t;
                        if (D) {
                            if (C || r.cancelable && I()) {
                                const s = function(e) {
                                        if (t.is(Fe) || !F) {
                                            const t = y === D && v || y,
                                                i = B(D) - B(t),
                                                r = V(e) - V(t),
                                                s = V(e) - V(D) < 200;
                                            if (r && s) return i / r
                                        }
                                        return 0
                                    }(r),
                                    n = function(t) {
                                        return m() + Q(t) * W(K(t) * (i.flickPower || 600), E ? 1 / 0 : e.Layout.listSize() * (i.flickMaxPages || 1))
                                    }(s);
                                E ? p.scroll(n) : t.is(Ae) ? p.go(a + c(Q(s))) : p.go(p.toDest(n), !0), L(r)
                            }
                            s(St)
                        } else E || m() === h.toPosition(a) || p.go(a, !0);
                        C = !1
                    }

                    function M(t) {
                        v = y, y = t, g = m()
                    }

                    function w(t) {
                        !S && x && L(t, !0)
                    }

                    function I() {
                        return K(B(D) - B(y)) > K(B(D, !0) - B(y, !0))
                    }

                    function B(t, e) {
                        return (R(t) ? t.touches[0] : t)[`page${f(e?"Y":"X")}`]
                    }

                    function V(t) {
                        return t.timeStamp
                    }

                    function R(t) {
                        return "undefined" != typeof TouchEvent && t instanceof TouchEvent
                    }

                    function N(t) {
                        S = t
                    }
                    return {
                        mount: function() {
                            n(u, Me, j, ke), n(u, we, j, ke), n(u, "touchstart mousedown", _, ke), n(u, "click", w, {
                                capture: !0
                            }), n(u, "dragstart", L), r([nt, vt], A)
                        },
                        disable: N,
                        isDragging: function() {
                            return C
                        }
                    }
                },
                Keyboard: function(t, e, i) {
                    const {
                        on: r,
                        bind: s,
                        unbind: a
                    } = Lt(t), {
                        root: n
                    } = t, {
                        resolve: o
                    } = e.Direction;
                    let h, l;

                    function u() {
                        const {
                            keyboard: t
                        } = i;
                        t && ("focused" === t ? (h = n, _(n, Ce, 0)) : h = window, s(h, Be, g))
                    }

                    function f() {
                        a(h, Be), p(h) && A(h, Ce)
                    }

                    function m() {
                        const t = l;
                        l = !0, $((() => {
                            l = t
                        }))
                    }

                    function d() {
                        f(), u()
                    }

                    function g(e) {
                        if (!l) {
                            const {
                                key: i
                            } = e, r = c(Ie, i) ? `Arrow${i}` : i;
                            r === o("ArrowLeft") ? t.go("<") : r === o("ArrowRight") && t.go(">")
                        }
                    }
                    return {
                        mount: function() {
                            u(), r(vt, d), r(ht, m)
                        },
                        destroy: f,
                        disable: function(t) {
                            l = t
                        }
                    }
                },
                LazyLoad: function(t, e, i) {
                    const {
                        on: r,
                        off: s,
                        bind: a,
                        emit: n
                    } = Lt(t), o = "sequential" === i.lazyLoad;
                    let h = [],
                        l = 0;

                    function p() {
                        f(), u()
                    }

                    function u() {
                        e.Slides.forEach((t => {
                            G(t.slide, "[data-splide-lazy], [data-splide-lazy-srcset]").forEach((e => {
                                const r = w(e, Ve),
                                    s = w(e, Re);
                                if (r !== e.src || s !== e.srcset) {
                                    const a = i.classes.spinner,
                                        n = e.parentElement,
                                        o = x(n, `.${a}`) || T("span", a, n);
                                    _(o, ye, "presentation"), h.push({
                                        _img: e,
                                        _Slide: t,
                                        src: r,
                                        srcset: s,
                                        _spinner: o
                                    }), !e.src && M(e, "none")
                                }
                            }))
                        })), o && d()
                    }

                    function f() {
                        l = 0, h = []
                    }

                    function c() {
                        h = h.filter((e => {
                            const r = i.perPage * ((i.preloadPages || 1) + 1) - 1;
                            return !e._Slide.isWithin(t.index, r) || m(e)
                        })), h.length || s(lt)
                    }

                    function m(t) {
                        const {
                            _img: e
                        } = t;
                        v(t._Slide.slide, me), a(e, "load error", (e => {
                            ! function(t, e) {
                                const {
                                    _Slide: i
                                } = t;
                                z(i.slide, me), e || (V(t._spinner), M(t._img, ""), n(Rt, t._img, i), n(Dt)), o && d()
                            }(t, "error" === e.type)
                        })), ["srcset", "src"].forEach((i => {
                            t[i] && (_(e, i, t[i]), A(e, "src" === i ? Ve : Re))
                        }))
                    }

                    function d() {
                        l < h.length && m(h[l++])
                    }
                    return {
                        mount: function() {
                            i.lazyLoad && (u(), r(yt, p), o || r([nt, yt, lt, Ft], c))
                        },
                        destroy: f
                    }
                },
                Pagination: function(t, e, i) {
                    const {
                        on: r,
                        emit: a,
                        bind: n,
                        unbind: o
                    } = Lt(t), {
                        Slides: h,
                        Elements: l,
                        Controller: p
                    } = e, {
                        hasFocus: u,
                        getIndex: f
                    } = p, c = [];
                    let m;

                    function d() {
                        g(), i.pagination && h.isEnough() && (function() {
                            const {
                                length: e
                            } = t, {
                                classes: r,
                                i18n: s,
                                perPage: a
                            } = i, o = "slider" === i.pagination && l.slider || l.root, p = u() ? e : U(e / a);
                            m = T("ul", r.pagination, o);
                            for (let t = 0; t < p; t++) {
                                const e = T("li", null, m),
                                    i = T("button", {
                                        class: r.page,
                                        type: "button"
                                    }, e),
                                    o = h.getIn(t).map((t => t.slide.id)),
                                    l = !u() && a > 1 ? s.pageX : s.slideX;
                                n(i, "click", y.bind(null, t)), _(i, ve, o.join(" ")), _(i, Ee, et(l, t + 1)), c.push({
                                    li: e,
                                    button: i,
                                    page: t
                                })
                            }
                        }(), a(kt, {
                            list: m,
                            items: c
                        }, D(t.index)), E())
                    }

                    function g() {
                        m && (V(m), c.forEach((t => {
                            o(t.button, "click")
                        })), s(c), m = null)
                    }

                    function y(t) {
                        p.go(`>${t}`, !0, (() => {
                            const e = h.getAt(p.toIndex(t));
                            var i;
                            e && ((i = e.slide).setActive && i.setActive() || i.focus({
                                preventScroll: !0
                            }))
                        }))
                    }

                    function D(t) {
                        return c[p.toPage(t)]
                    }

                    function E() {
                        const t = D(f(!0)),
                            e = D(f());
                        t && (z(t.button, pe), A(t.button, De)), e && (v(e.button, pe), _(e.button, De, !0)), a(Mt, {
                            list: m,
                            items: c
                        }, t, e)
                    }
                    return {
                        items: c,
                        mount: function() {
                            d(), r([vt, yt], d), r([ht, Ft], E)
                        },
                        destroy: g,
                        getAt: D,
                        update: E
                    }
                },
                Sync: function(t, e, i) {
                    const {
                        list: r
                    } = e.Elements, a = [];

                    function n() {
                        t.splides.forEach((e => {
                            var i;
                            !e.isParent && (i = e.splide, [t, i].forEach((e => {
                                const r = Lt(e),
                                    s = e === t ? i : t;
                                r.on(ht, ((t, e, i) => {
                                    s.go(s.is(Fe) ? i : t)
                                })), a.push(r)
                            })))
                        })), i.isNavigation && function() {
                            const e = Lt(t),
                                {
                                    on: i
                                } = e;
                            i(ut, l), i(gt, p), i([nt, vt], h), _(r, ye, "menu"), a.push(e), e.emit(wt, t.splides)
                        }()
                    }

                    function o() {
                        A(r, Se), a.forEach((t => {
                            t.destroy()
                        })), s(a)
                    }

                    function h() {
                        _(r, xe, i.direction !== Ot ? "horizontal" : null)
                    }

                    function l(e) {
                        t.go(e.index)
                    }

                    function p(t, e) {
                        c(Le, e.key) && (l(t), L(e))
                    }
                    return {
                        mount: n,
                        destroy: o,
                        remount: function() {
                            o(), n()
                        }
                    }
                },
                Wheel: function(t, e, i) {
                    const {
                        bind: r
                    } = Lt(t);

                    function s(r) {
                        if (r.cancelable) {
                            const {
                                deltaY: s
                            } = r;
                            if (s) {
                                const a = s < 0;
                                t.go(a ? "<" : ">"),
                                    function(r) {
                                        return !i.releaseWheel || t.state.is(4) || -1 !== e.Controller.getAdjacent(r)
                                    }(a) && L(r)
                            }
                        }
                    }
                    return {
                        mount: function() {
                            i.wheel && r(e.Elements.track, "wheel", s, ke)
                        }
                    }
                }
            });
            const Ge = {
                type: "slide",
                speed: 400,
                waitForTransition: !0,
                perPage: 1,
                cloneStatus: !0,
                arrows: !0,
                pagination: !0,
                interval: 5e3,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                resetProgress: !0,
                keyboard: !0,
                easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                drag: !0,
                direction: "ltr",
                slideFocus: !0,
                trimSpace: !0,
                focusableNodes: "a, button, textarea, input, select, iframe",
                classes: ge,
                i18n: {
                    prev: "Previous slide",
                    next: "Next slide",
                    first: "Go to first slide",
                    last: "Go to last slide",
                    slideX: "Go to slide %s",
                    pageX: "Go to page %s",
                    play: "Start autoplay",
                    pause: "Pause autoplay"
                }
            };

            function ze(t, e, i) {
                const {
                    on: r
                } = Lt(t);
                return {
                    mount: function() {
                        r([nt, yt], (() => {
                            $((() => {
                                e.Slides.style("transition", `opacity ${i.speed}ms ${i.easing}`)
                            }))
                        }))
                    },
                    start: function(t, i) {
                        const {
                            track: r
                        } = e.Elements;
                        k(r, "height", O(B(r).height)), $((() => {
                            i(), k(r, "height", "")
                        }))
                    },
                    cancel: j
                }
            }

            function Oe(t, e, i) {
                const {
                    bind: r
                } = Lt(t), {
                    Move: s,
                    Controller: a
                } = e, {
                    list: n
                } = e.Elements;
                let o;

                function h() {
                    l("")
                }

                function l(t) {
                    k(n, "transition", t)
                }
                return {
                    mount: function() {
                        r(n, "transitionend", (t => {
                            t.target === n && o && (h(), o())
                        }))
                    },
                    start: function(e, r) {
                        const n = s.toPosition(e, !0),
                            h = s.getPosition(),
                            p = function(e) {
                                const {
                                    rewindSpeed: r
                                } = i;
                                if (t.is(Pe) && r) {
                                    const t = a.getIndex(!0),
                                        i = a.getEnd();
                                    if (0 === t && e >= i || t >= i && 0 === e) return r
                                }
                                return i.speed
                            }(e);
                        K(n - h) >= 1 && p >= 1 ? (l(`transform ${p}ms ${i.easing}`), s.translate(n, !0), o = r) : (s.jump(e), r())
                    },
                    cancel: h
                }
            }
            const He = class {
                constructor(t, e) {
                    this.event = at(), this.Components = {}, this.state = Gt(1), this.splides = [], this._options = {}, this._Extensions = {};
                    const i = o(t) ? N(document, t) : t;
                    H(i, `${i} is invalid.`), this.root = i, F(Ge, He.defaults), F(F(this._options, Ge), e || {})
                }
                mount(t, e) {
                    const {
                        state: i,
                        Components: r
                    } = this;
                    return H(i.is([1, 5]), "Already mounted!"), i.set(1), this._Components = r, this._Transition = e || this._Transition || (this.is(Ae) ? ze : Oe), this._Extensions = t || this._Extensions, S(P({}, Ne, this._Extensions, {
                        Transition: this._Transition
                    }), ((t, e) => {
                        const i = t(this, r, this._options);
                        r[e] = i, i.setup && i.setup()
                    })), S(r, (t => {
                        t.mount && t.mount()
                    })), this.emit(nt), v(this.root, le), i.set(3), this.emit(ot), this
                }
                sync(t) {
                    return this.splides.push({
                        splide: t
                    }), t.splides.push({
                        splide: this,
                        isParent: !0
                    }), this.state.is(3) && (this._Components.Sync.remount(), t.Components.Sync.remount()), this
                }
                go(t) {
                    return this._Components.Controller.go(t), this
                }
                on(t, e) {
                    return this.event.on(t, e, null, 20), this
                }
                off(t) {
                    return this.event.off(t), this
                }
                emit(t) {
                    return this.event.emit(t, ...g(arguments, 1)), this
                }
                add(t, e) {
                    return this._Components.Slides.add(t, e), this
                }
                remove(t) {
                    return this._Components.Slides.remove(t), this
                }
                is(t) {
                    return this._options.type === t
                }
                refresh() {
                    return this.emit(yt), this
                }
                destroy(t = !0) {
                    const {
                        event: e,
                        state: i
                    } = this;
                    return i.is(1) ? e.on(ot, this.destroy.bind(this, t), this) : (S(this._Components, (e => {
                        e.destroy && e.destroy(t)
                    }), !0), e.emit(At), e.destroy(), t && s(this.splides), i.set(5)), this
                }
                get options() {
                    return this._options
                }
                set options(t) {
                    const {
                        _options: e
                    } = this;
                    F(e, t), this.state.is(1) || this.emit(vt, e)
                }
                get length() {
                    return this._Components.Slides.getLength(!0)
                }
                get index() {
                    return this._Components.Controller.getIndex()
                }
            };
            let $e = He;
            $e.defaults = {}, $e.STATES = {
                CREATED: 1,
                MOUNTED: 2,
                IDLE: 3,
                MOVING: 4,
                DESTROYED: 5
            };
            const je = {
                listTag: "ul",
                slideTag: "li"
            };
            class qe {
                constructor(t, e) {
                    this.styles = {}, this.id = t, this.options = e
                }
                rule(t, e, i, r) {
                    r = r || "default";
                    const s = this.styles[r] = this.styles[r] || {};
                    (s[t] = s[t] || {})[e] = i
                }
                build() {
                    let t = "";
                    return this.styles.default && (t += this.buildSelectors(this.styles.default)), Object.keys(this.styles).sort(((t, e) => "min" === this.options.mediaQuery ? +t - +e : +e - +t)).forEach((e => {
                        "default" !== e && (t += `@media screen and (max-width: ${e}px) {`, t += this.buildSelectors(this.styles[e]), t += "}")
                    })), t
                }
                buildSelectors(t) {
                    let e = "";
                    return S(t, ((t, i) => {
                        i = `#${this.id} ${i}`.trim(), e += `${i} {`, S(t, ((t, i) => {
                            (t || 0 === t) && (e += `${i}: ${t};`)
                        })), e += "}"
                    })), e
                }
            }
            class We {
                constructor(t, e, i, r) {
                    this.slides = [], this.options = {}, this.breakpoints = [], F(Ge, r || {}), F(F(this.options, Ge), e || {}), this.contents = t, this.config = P({}, je, i || {}), this.id = this.config.id || st("splide"), this.Style = new qe(this.id, this.options), this.Direction = $t(0, 0, this.options), H(this.contents.length, "Provide at least 1 content."), this.init()
                }
                static clean(t) {
                    const {
                        on: e
                    } = Lt(t), {
                        root: i
                    } = t, r = G(i, `.${Ut}`);
                    e(nt, (() => {
                        V(x(i, "style"))
                    })), V(r)
                }
                init() {
                    this.parseBreakpoints(), this.initSlides(), this.registerRootStyles(), this.registerTrackStyles(), this.registerSlideStyles(), this.registerListStyles()
                }
                initSlides() {
                    m(this.slides, this.contents.map(((t, e) => {
                        (t = o(t) ? {
                            html: t
                        } : t).styles = t.styles || {}, t.attrs = t.attrs || {}, this.cover(t);
                        const i = `${this.options.classes.slide} ${0===e?pe:""}`;
                        return P(t.attrs, {
                            class: `${i} ${t.attrs.class||""}`.trim(),
                            style: this.buildStyles(t.styles)
                        }), t
                    }))), this.isLoop() && this.generateClones(this.slides)
                }
                registerRootStyles() {
                    this.breakpoints.forEach((([t, e]) => {
                        this.Style.rule(" ", "max-width", O(e.width), t)
                    }))
                }
                registerTrackStyles() {
                    const {
                        Style: t
                    } = this, e = `.${Wt}`;
                    this.breakpoints.forEach((([i, r]) => {
                        t.rule(e, this.resolve("paddingLeft"), this.cssPadding(r, !1), i), t.rule(e, this.resolve("paddingRight"), this.cssPadding(r, !0), i), t.rule(e, "height", this.cssTrackHeight(r), i)
                    }))
                }
                registerListStyles() {
                    const {
                        Style: t
                    } = this, e = `.${Yt}`;
                    this.breakpoints.forEach((([i, r]) => {
                        t.rule(e, "transform", this.buildTranslate(r), i), this.cssSlideHeight(r) || t.rule(e, "aspect-ratio", this.cssAspectRatio(r), i)
                    }))
                }
                registerSlideStyles() {
                    const {
                        Style: t
                    } = this, e = `.${Xt}`;
                    this.breakpoints.forEach((([i, r]) => {
                        t.rule(e, "width", this.cssSlideWidth(r), i), t.rule(e, "height", this.cssSlideHeight(r) || "100%", i), t.rule(e, this.resolve("marginRight"), O(r.gap) || "0px", i), t.rule(`${e} > img`, "display", r.cover ? "none" : "inline", i)
                    }))
                }
                buildTranslate(t) {
                    const {
                        resolve: e,
                        orient: i
                    } = this.Direction, r = [];
                    return r.push(this.cssOffsetClones(t)), r.push(this.cssOffsetGaps(t)), this.isCenter(t) && (r.push(this.buildCssValue(i(-50), "%")), r.push(...this.cssOffsetCenter(t))), r.filter(Boolean).map((t => `translate${e("X")}(${t})`)).join(" ")
                }
                cssOffsetClones(t) {
                    const {
                        resolve: e,
                        orient: i
                    } = this.Direction, r = this.getCloneCount();
                    if (this.isFixedWidth(t)) {
                        const {
                            value: s,
                            unit: a
                        } = this.parseCssValue(t[e("fixedWidth")]);
                        return this.buildCssValue(i(s) * r, a)
                    }
                    return `${i(100*r/t.perPage)}%`
                }
                cssOffsetCenter(t) {
                    const {
                        resolve: e,
                        orient: i
                    } = this.Direction;
                    if (this.isFixedWidth(t)) {
                        const {
                            value: r,
                            unit: s
                        } = this.parseCssValue(t[e("fixedWidth")]);
                        return [this.buildCssValue(i(r / 2), s)]
                    }
                    const r = [],
                        {
                            perPage: s,
                            gap: a
                        } = t;
                    if (r.push(`${i(50/s)}%`), a) {
                        const {
                            value: t,
                            unit: e
                        } = this.parseCssValue(a), n = (t / s - t) / 2;
                        r.push(this.buildCssValue(i(n), e))
                    }
                    return r
                }
                cssOffsetGaps(t) {
                    const e = this.getCloneCount();
                    if (e && t.gap) {
                        const {
                            orient: i
                        } = this.Direction, {
                            value: r,
                            unit: s
                        } = this.parseCssValue(t.gap);
                        if (this.isFixedWidth(t)) return this.buildCssValue(i(r * e), s);
                        const {
                            perPage: a
                        } = t, n = e / a;
                        return this.buildCssValue(i(n * r), s)
                    }
                    return ""
                }
                resolve(t) {
                    return tt(this.Direction.resolve(t))
                }
                cssPadding(t, e) {
                    const {
                        padding: i
                    } = t, r = this.Direction.resolve(e ? "right" : "left", !0);
                    return i && O(i[r] || (a(i) ? 0 : i)) || "0px"
                }
                cssTrackHeight(t) {
                    let e = "";
                    return this.isVertical() && (e = this.cssHeight(t), H(e, '"height" is missing.'), e = `calc(${e} - ${this.cssPadding(t,!1)} - ${this.cssPadding(t,!0)})`), e
                }
                cssHeight(t) {
                    return O(t.height)
                }
                cssSlideWidth(t) {
                    return t.autoWidth ? "" : O(t.fixedWidth) || (this.isVertical() ? "" : this.cssSlideSize(t))
                }
                cssSlideHeight(t) {
                    return O(t.fixedHeight) || (this.isVertical() ? t.autoHeight ? "" : this.cssSlideSize(t) : this.cssHeight(t))
                }
                cssSlideSize(t) {
                    const e = O(t.gap);
                    return `calc((100%${e&&` + ${e}`})/${t.perPage||1}${e&&` - ${e}`})`
                }
                cssAspectRatio(t) {
                    const {
                        heightRatio: e
                    } = t;
                    return e ? "" + 1 / e : ""
                }
                buildCssValue(t, e) {
                    return `${t}${e}`
                }
                parseCssValue(t) {
                    return o(t) ? {
                        value: parseFloat(t) || 0,
                        unit: t.replace(/\d*(\.\d*)?/, "") || "px"
                    } : {
                        value: t,
                        unit: "px"
                    }
                }
                parseBreakpoints() {
                    const {
                        breakpoints: t
                    } = this.options;
                    this.breakpoints.push(["default", this.options]), t && S(t, ((t, e) => {
                        this.breakpoints.push([e, F(F({}, this.options), t)])
                    }))
                }
                isFixedWidth(t) {
                    return !!t[this.Direction.resolve("fixedWidth")]
                }
                isLoop() {
                    return this.options.type === Fe
                }
                isCenter(t) {
                    if ("center" === t.focus) {
                        if (this.isLoop()) return !0;
                        if (this.options.type === Pe) return !this.options.trimSpace
                    }
                    return !1
                }
                isVertical() {
                    return this.options.direction === Ot
                }
                buildClasses() {
                    const {
                        options: t
                    } = this;
                    return [jt, `${jt}--${t.type}`, `${jt}--${t.direction}`, t.drag && `${jt}--draggable`, t.isNavigation && `${jt}--nav`, pe, !this.config.hidden && "is-rendered"].filter(Boolean).join(" ")
                }
                buildAttrs(t) {
                    let e = "";
                    return S(t, ((t, i) => {
                        e += t ? ` ${tt(i)}="${t}"` : ""
                    })), e.trim()
                }
                buildStyles(t) {
                    let e = "";
                    return S(t, ((t, i) => {
                        e += ` ${tt(i)}:${t};`
                    })), e.trim()
                }
                renderSlides() {
                    const {
                        slideTag: t
                    } = this.config;
                    return this.slides.map((e => `<${t} ${this.buildAttrs(e.attrs)}>${e.html||""}</${t}>`)).join("")
                }
                cover(t) {
                    const {
                        styles: e,
                        html: i = ""
                    } = t;
                    if (this.options.cover && !this.options.lazyLoad) {
                        const t = i.match(/<img.*?src\s*=\s*(['"])(.+?)\1.*?>/);
                        t && t[2] && (e.background = `center/cover no-repeat url('${t[2]}')`)
                    }
                }
                generateClones(t) {
                    const {
                        classes: e
                    } = this.options, i = this.getCloneCount(), r = t.slice();
                    for (; r.length < i;) m(r, r);
                    m(r.slice(-i).reverse(), r.slice(0, i)).forEach(((r, s) => {
                        const a = P({}, r.attrs, {
                                class: `${r.attrs.class} ${e.clone}`
                            }),
                            n = P({}, r, {
                                attrs: a
                            });
                        s < i ? t.unshift(n) : t.push(n)
                    }))
                }
                getCloneCount() {
                    if (this.isLoop()) {
                        const {
                            options: t
                        } = this;
                        return t.clones ? t.clones : Y(...this.breakpoints.map((([, t]) => t.perPage))) * ((t.flickMaxPages || 1) + 1)
                    }
                    return 0
                }
                renderArrows() {
                    let t = "";
                    return t += `<div class="${this.options.classes.arrows}">`, t += this.renderArrow(!0), t += this.renderArrow(!1), t += "</div>", t
                }
                renderArrow(t) {
                    const {
                        classes: e,
                        i18n: i
                    } = this.options, r = {
                        class: `${e.arrow} ${t?e.prev:e.next}`,
                        type: "button",
                        ariaLabel: t ? i.prev : i.next
                    };
                    return `<button ${this.buildAttrs(r)}><svg xmlns="${_e}" viewBox="0 0 40 40" width="40" height="40"><path d="${this.options.arrowPath||Te}" /></svg></button>`
                }
                html() {
                    const {
                        rootClass: t,
                        listTag: e,
                        arrows: i,
                        beforeTrack: r,
                        afterTrack: s,
                        slider: a,
                        beforeSlider: n,
                        afterSlider: o
                    } = this.config;
                    let h = "";
                    return h += `<div id="${this.id}" class="${this.buildClasses()} ${t||""}">`, h += `<style>${this.Style.build()}</style>`, a && (h += n || "", h += '<div class="splide__slider">'), h += r || "", i && (h += this.renderArrows()), h += '<div class="splide__track">', h += `<${e} class="splide__list">`, h += this.renderSlides(), h += `</${e}>`, h += "</div>", h += s || "", a && (h += "</div>", h += o || ""), h += "</div>", h
                }
            }
        },
        32067: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                CustomEase: () => C,
                default: () => C
            });
            var r = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                s = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
                a = Math.PI / 180,
                n = (Math.PI, Math.sin),
                o = Math.cos,
                h = Math.abs,
                l = Math.sqrt,
                p = (Math.atan2, function(t) {
                    return "number" == typeof t
                }),
                u = 1e5,
                f = function(t) {
                    return Math.round(t * u) / u || 0
                };

            function c(t, e, i, r, s, p, u, f, c) {
                if (t !== f || e !== c) {
                    i = h(i), r = h(r);
                    var m = s % 360 * a,
                        d = o(m),
                        g = n(m),
                        y = Math.PI,
                        v = 2 * y,
                        D = (t - f) / 2,
                        E = (e - c) / 2,
                        b = d * D + g * E,
                        C = -g * D + d * E,
                        x = b * b,
                        S = C * C,
                        P = x / (i * i) + S / (r * r);
                    P > 1 && (i = l(P) * i, r = l(P) * r);
                    var F = i * i,
                        A = r * r,
                        _ = (F * A - F * S - A * x) / (F * S + A * x);
                    _ < 0 && (_ = 0);
                    var T = (p === u ? -1 : 1) * l(_),
                        k = T * (i * C / r),
                        M = T * (-r * b / i),
                        w = (t + f) / 2 + (d * k - g * M),
                        I = (e + c) / 2 + (g * k + d * M),
                        B = (b - k) / i,
                        V = (C - M) / r,
                        R = (-b - k) / i,
                        L = (-C - M) / r,
                        N = B * B + V * V,
                        G = (V < 0 ? -1 : 1) * Math.acos(B / l(N)),
                        z = (B * L - V * R < 0 ? -1 : 1) * Math.acos((B * R + V * L) / l(N * (R * R + L * L)));
                    isNaN(z) && (z = y), !u && z > 0 ? z -= v : u && z < 0 && (z += v), G %= v, z %= v;
                    var O, H = Math.ceil(h(z) / (v / 4)),
                        $ = [],
                        j = z / H,
                        q = 4 / 3 * n(j / 2) / (1 + o(j / 2)),
                        W = d * i,
                        Y = g * i,
                        X = g * -r,
                        U = d * r;
                    for (O = 0; O < H; O++) b = o(s = G + O * j), C = n(s), B = o(s += j), V = n(s), $.push(b - q * C, C + q * b, B + q * V, V - q * B, B, V);
                    for (O = 0; O < $.length; O += 2) b = $[O], C = $[O + 1], $[O] = b * W + C * X + w, $[O + 1] = b * Y + C * U + I;
                    return $[O - 2] = f, $[O - 1] = c, $
                }
            }
            var m, d, g = function() {
                    return m || "undefined" != typeof window && (m = window.gsap) && m.registerPlugin && m
                },
                y = function() {
                    (m = g()) ? (m.registerEase("_CE", C.create), d = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
                },
                v = function(t) {
                    return ~~(1e3 * t + (t < 0 ? -.5 : .5)) / 1e3
                },
                D = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
                E = /[cLlsSaAhHvVtTqQ]/g,
                b = function t(e, i, r, s, a, n, o, h, l, p, u) {
                    var f, c = (e + r) / 2,
                        m = (i + s) / 2,
                        d = (r + a) / 2,
                        g = (s + n) / 2,
                        y = (a + o) / 2,
                        v = (n + h) / 2,
                        D = (c + d) / 2,
                        E = (m + g) / 2,
                        b = (d + y) / 2,
                        C = (g + v) / 2,
                        x = (D + b) / 2,
                        S = (E + C) / 2,
                        P = o - e,
                        F = h - i,
                        A = Math.abs((r - o) * F - (s - h) * P),
                        _ = Math.abs((a - o) * F - (n - h) * P);
                    return p || (p = [{
                        x: e,
                        y: i
                    }, {
                        x: o,
                        y: h
                    }], u = 1), p.splice(u || p.length - 1, 0, {
                        x,
                        y: S
                    }), (A + _) * (A + _) > l * (P * P + F * F) && (f = p.length, t(e, i, c, m, D, E, x, S, l, p, u), t(x, S, b, C, y, v, o, h, l, p, u + 1 + (p.length - f))), p
                },
                C = function() {
                    function t(t, e, i) {
                        d || y(), this.id = t, this.setData(e, i)
                    }
                    var e = t.prototype;
                    return e.setData = function(t, e) {
                        e = e || {};
                        var i, a, n, o, l, p, u, f, d, g = (t = t || "0,0,1,1").match(D),
                            y = 1,
                            v = [],
                            C = [],
                            x = e.precision || 1,
                            S = x <= 1;
                        if (this.data = t, (E.test(t) || ~t.indexOf("M") && t.indexOf("C") < 0) && (g = function(t) {
                                var e, i, a, n, o, l, p, u, f, m, d, g, y, v, D, E = (t + "").replace(s, (function(t) {
                                        var e = +t;
                                        return e < 1e-4 && e > -1e-4 ? 0 : e
                                    })).match(r) || [],
                                    b = [],
                                    C = 0,
                                    x = 0,
                                    S = 2 / 3,
                                    P = E.length,
                                    F = 0,
                                    A = "ERROR: malformed path: " + t,
                                    _ = function(t, e, i, r) {
                                        m = (i - t) / 3, d = (r - e) / 3, p.push(t + m, e + d, i - m, r - d, i, r)
                                    };
                                if (!t || !isNaN(E[0]) || isNaN(E[1])) return console.log(A), b;
                                for (e = 0; e < P; e++)
                                    if (y = o, isNaN(E[e]) ? l = (o = E[e].toUpperCase()) !== E[e] : e--, a = +E[e + 1], n = +E[e + 2], l && (a += C, n += x), e || (u = a, f = n), "M" === o) p && (p.length < 8 ? b.length -= 1 : F += p.length), C = u = a, x = f = n, p = [a, n], b.push(p), e += 2, o = "L";
                                    else if ("C" === o) p || (p = [0, 0]), l || (C = x = 0), p.push(a, n, C + 1 * E[e + 3], x + 1 * E[e + 4], C += 1 * E[e + 5], x += 1 * E[e + 6]), e += 6;
                                else if ("S" === o) m = C, d = x, "C" !== y && "S" !== y || (m += C - p[p.length - 4], d += x - p[p.length - 3]), l || (C = x = 0), p.push(m, d, a, n, C += 1 * E[e + 3], x += 1 * E[e + 4]), e += 4;
                                else if ("Q" === o) m = C + (a - C) * S, d = x + (n - x) * S, l || (C = x = 0), C += 1 * E[e + 3], x += 1 * E[e + 4], p.push(m, d, C + (a - C) * S, x + (n - x) * S, C, x), e += 4;
                                else if ("T" === o) m = C - p[p.length - 4], d = x - p[p.length - 3], p.push(C + m, x + d, a + (C + 1.5 * m - a) * S, n + (x + 1.5 * d - n) * S, C = a, x = n), e += 2;
                                else if ("H" === o) _(C, x, C = a, x), e += 1;
                                else if ("V" === o) _(C, x, C, x = a + (l ? x - C : 0)), e += 1;
                                else if ("L" === o || "Z" === o) "Z" === o && (a = u, n = f, p.closed = !0), ("L" === o || h(C - a) > .5 || h(x - n) > .5) && (_(C, x, a, n), "L" === o && (e += 2)), C = a, x = n;
                                else if ("A" === o) {
                                    if (v = E[e + 4], D = E[e + 5], m = E[e + 6], d = E[e + 7], i = 7, v.length > 1 && (v.length < 3 ? (d = m, m = D, i--) : (d = D, m = v.substr(2), i -= 2), D = v.charAt(1), v = v.charAt(0)), g = c(C, x, +E[e + 1], +E[e + 2], +E[e + 3], +v, +D, (l ? C : 0) + 1 * m, (l ? x : 0) + 1 * d), e += i, g)
                                        for (i = 0; i < g.length; i++) p.push(g[i]);
                                    C = p[p.length - 2], x = p[p.length - 1]
                                } else console.log(A);
                                return (e = p.length) < 6 ? (b.pop(), e = 0) : p[0] === p[e - 2] && p[1] === p[e - 1] && (p.closed = !0), b.totalPoints = F + e, b
                            }(t)[0]), 4 === (i = g.length)) g.unshift(0, 0), g.push(1, 1), i = 8;
                        else if ((i - 2) % 6) throw "Invalid CustomEase";
                        for (0 == +g[0] && 1 == +g[i - 2] || function(t, e, i) {
                                i || 0 === i || (i = Math.max(+t[t.length - 1], +t[1]));
                                var r, s = -1 * +t[0],
                                    a = -i,
                                    n = t.length,
                                    o = 1 / (+t[n - 2] + s),
                                    h = -e || (Math.abs(+t[n - 1] - +t[1]) < .01 * (+t[n - 2] - +t[0]) ? function(t) {
                                        var e, i = t.length,
                                            r = 1e20;
                                        for (e = 1; e < i; e += 6) + t[e] < r && (r = +t[e]);
                                        return r
                                    }(t) + a : +t[n - 1] + a);
                                for (h = h ? 1 / h : -o, r = 0; r < n; r += 2) t[r] = (+t[r] + s) * o, t[r + 1] = (+t[r + 1] + a) * h
                            }(g, e.height, e.originY), this.segment = g, o = 2; o < i; o += 6) a = {
                            x: +g[o - 2],
                            y: +g[o - 1]
                        }, n = {
                            x: +g[o + 4],
                            y: +g[o + 5]
                        }, v.push(a, n), b(a.x, a.y, +g[o], +g[o + 1], +g[o + 2], +g[o + 3], n.x, n.y, 1 / (2e5 * x), v, v.length - 1);
                        for (i = v.length, o = 0; o < i; o++) u = v[o], f = v[o - 1] || u, (u.x > f.x || f.y !== u.y && f.x === u.x || u === f) && u.x <= 1 ? (f.cx = u.x - f.x, f.cy = u.y - f.y, f.n = u, f.nx = u.x, S && o > 1 && Math.abs(f.cy / f.cx - v[o - 2].cy / v[o - 2].cx) > 2 && (S = 0), f.cx < y && (f.cx ? y = f.cx : (f.cx = .001, o === i - 1 && (f.x -= .001, y = Math.min(y, .001), S = 0)))) : (v.splice(o--, 1), i--);
                        if (l = 1 / (i = 1 / y + 1 | 0), p = 0, u = v[0], S) {
                            for (o = 0; o < i; o++) d = o * l, u.nx < d && (u = v[++p]), a = u.y + (d - u.x) / u.cx * u.cy, C[o] = {
                                x: d,
                                cx: l,
                                y: a,
                                cy: 0,
                                nx: 9
                            }, o && (C[o - 1].cy = a - C[o - 1].y);
                            C[i - 1].cy = v[v.length - 1].y - a
                        } else {
                            for (o = 0; o < i; o++) u.nx < o * l && (u = v[++p]), C[o] = u;
                            p < v.length - 1 && (C[o - 1] = v[v.length - 2])
                        }
                        return this.ease = function(t) {
                            var e = C[t * i | 0] || C[i - 1];
                            return e.nx < t && (e = e.n), e.y + (t - e.x) / e.cx * e.cy
                        }, this.ease.custom = this, this.id && m && m.registerEase(this.id, this.ease), this
                    }, e.getSVGData = function(e) {
                        return t.getSVGData(this, e)
                    }, t.create = function(e, i, r) {
                        return new t(e, i, r).ease
                    }, t.register = function(t) {
                        m = t, y()
                    }, t.get = function(t) {
                        return m.parseEase(t)
                    }, t.getSVGData = function(e, i) {
                        var r, s, a, n, o, h, l, u, c, d, g = (i = i || {}).width || 100,
                            y = i.height || 100,
                            D = i.x || 0,
                            E = (i.y || 0) + y,
                            b = m.utils.toArray(i.path)[0];
                        if (i.invert && (y = -y, E = 0), "string" == typeof e && (e = m.parseEase(e)), e.custom && (e = e.custom), e instanceof t) r = function(t) {
                            p(t[0]) && (t = [t]);
                            var e, i, r, s, a = "",
                                n = t.length;
                            for (i = 0; i < n; i++) {
                                for (s = t[i], a += "M" + f(s[0]) + "," + f(s[1]) + " C", e = s.length, r = 2; r < e; r++) a += f(s[r++]) + "," + f(s[r++]) + " " + f(s[r++]) + "," + f(s[r++]) + " " + f(s[r++]) + "," + f(s[r]) + " ";
                                s.closed && (a += "z")
                            }
                            return a
                        }(function(t, e, i, r, s, a, n) {
                            for (var o, h, l, p, u, f = t.length; --f > -1;)
                                for (h = (o = t[f]).length, l = 0; l < h; l += 2) p = o[l], u = o[l + 1], o[l] = p * e + 0 * u + a, o[l + 1] = 0 * p + u * s + n;
                            return t._dirty = 1, t
                        }([e.segment], g, 0, 0, -y, D, E));
                        else {
                            for (r = [D, E], n = 1 / (l = Math.max(5, 200 * (i.precision || 1))), u = 5 / (l += 2), c = v(D + n * g), s = ((d = v(E + e(n) * -y)) - E) / (c - D), a = 2; a < l; a++) o = v(D + a * n * g), h = v(E + e(a * n) * -y), (Math.abs((h - d) / (o - c) - s) > u || a === l - 1) && (r.push(c, d), s = (h - d) / (o - c)), c = o, d = h;
                            r = "M" + r.join(",")
                        }
                        return b && b.setAttribute("d", r), r
                    }, t
                }();
            g() && m.registerPlugin(C), C.version = "3.10.4"
        },
        1578: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                SplitText: () => P,
                default: () => P
            });
            var r = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

            function s(t) {
                var e = t.nodeType,
                    i = "";
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += s(t)
                } else if (3 === e || 4 === e) return t.nodeValue;
                return i
            }
            var a, n, o, h = /(?:\r|\n|\t\t)/g,
                l = /(?:\s\s+)/g,
                p = function(t) {
                    return n.getComputedStyle(t)
                },
                u = Array.isArray,
                f = [].slice,
                c = function(t, e) {
                    var i;
                    return u(t) ? t : "string" == (i = typeof t) && !e && t ? f.call(a.querySelectorAll(t), 0) : t && "object" === i && "length" in t ? f.call(t, 0) : t ? [t] : []
                },
                m = function(t) {
                    return "absolute" === t.position || !0 === t.absolute
                },
                d = function(t, e) {
                    for (var i, r = e.length; --r > -1;)
                        if (i = e[r], t.substr(0, i.length) === i) return i.length
                },
                g = function(t, e) {
                    void 0 === t && (t = "");
                    var i = ~t.indexOf("++"),
                        r = 1;
                    return i && (t = t.split("++").join("")),
                        function() {
                            return "<" + e + " style='position:relative;display:inline-block;'" + (t ? " class='" + t + (i ? r++ : "") + "'>" : ">")
                        }
                },
                y = function t(e, i, r) {
                    var s = e.nodeType;
                    if (1 === s || 9 === s || 11 === s)
                        for (e = e.firstChild; e; e = e.nextSibling) t(e, i, r);
                    else 3 !== s && 4 !== s || (e.nodeValue = e.nodeValue.split(i).join(r))
                },
                v = function(t, e) {
                    for (var i = e.length; --i > -1;) t.push(e[i])
                },
                D = function(t, e, i) {
                    for (var r; t && t !== e;) {
                        if (r = t._next || t.nextSibling) return r.textContent.charAt(0) === i;
                        t = t.parentNode || t._parent
                    }
                },
                E = function t(e) {
                    var i, r, s = c(e.childNodes),
                        a = s.length;
                    for (i = 0; i < a; i++)(r = s[i])._isSplit ? t(r) : i && r.previousSibling && 3 === r.previousSibling.nodeType ? (r.previousSibling.nodeValue += 3 === r.nodeType ? r.nodeValue : r.firstChild.nodeValue, e.removeChild(r)) : 3 !== r.nodeType && (e.insertBefore(r.firstChild, r), e.removeChild(r))
                },
                b = function(t, e) {
                    return parseFloat(e[t]) || 0
                },
                C = function(t, e, i, r, s, n, o) {
                    var h, l, u, f, c, d, g, C, x, S, P, F, A = p(t),
                        _ = b("paddingLeft", A),
                        T = -999,
                        k = b("borderBottomWidth", A) + b("borderTopWidth", A),
                        M = b("borderLeftWidth", A) + b("borderRightWidth", A),
                        w = b("paddingTop", A) + b("paddingBottom", A),
                        I = b("paddingLeft", A) + b("paddingRight", A),
                        B = b("fontSize", A) * (e.lineThreshold || .2),
                        V = A.textAlign,
                        R = [],
                        L = [],
                        N = [],
                        G = e.wordDelimiter || " ",
                        z = e.tag ? e.tag : e.span ? "span" : "div",
                        O = e.type || e.split || "chars,words,lines",
                        H = s && ~O.indexOf("lines") ? [] : null,
                        $ = ~O.indexOf("words"),
                        j = ~O.indexOf("chars"),
                        q = m(e),
                        W = e.linesClass,
                        Y = ~(W || "").indexOf("++"),
                        X = [],
                        U = "flex" === A.display,
                        K = t.style.display;
                    for (Y && (W = W.split("++").join("")), U && (t.style.display = "block"), u = (l = t.getElementsByTagName("*")).length, c = [], h = 0; h < u; h++) c[h] = l[h];
                    if (H || q)
                        for (h = 0; h < u; h++)((d = (f = c[h]).parentNode === t) || q || j && !$) && (F = f.offsetTop, H && d && Math.abs(F - T) > B && ("BR" !== f.nodeName || 0 === h) && (g = [], H.push(g), T = F), q && (f._x = f.offsetLeft, f._y = F, f._w = f.offsetWidth, f._h = f.offsetHeight), H && ((f._isSplit && d || !j && d || $ && d || !$ && f.parentNode.parentNode === t && !f.parentNode._isSplit) && (g.push(f), f._x -= _, D(f, t, G) && (f._wordEnd = !0)), "BR" === f.nodeName && (f.nextSibling && "BR" === f.nextSibling.nodeName || 0 === h) && H.push([])));
                    for (h = 0; h < u; h++)
                        if (d = (f = c[h]).parentNode === t, "BR" !== f.nodeName)
                            if (q && (x = f.style, $ || d || (f._x += f.parentNode._x, f._y += f.parentNode._y), x.left = f._x + "px", x.top = f._y + "px", x.position = "absolute", x.display = "block", x.width = f._w + 1 + "px", x.height = f._h + "px"), !$ && j)
                                if (f._isSplit)
                                    for (f._next = l = f.nextSibling, f.parentNode.appendChild(f); l && 3 === l.nodeType && " " === l.textContent;) f._next = l.nextSibling, f.parentNode.appendChild(l), l = l.nextSibling;
                                else f.parentNode._isSplit ? (f._parent = f.parentNode, !f.previousSibling && f.firstChild && (f.firstChild._isFirst = !0), f.nextSibling && " " === f.nextSibling.textContent && !f.nextSibling.nextSibling && X.push(f.nextSibling), f._next = f.nextSibling && f.nextSibling._isFirst ? null : f.nextSibling, f.parentNode.removeChild(f), c.splice(h--, 1), u--) : d || (F = !f.nextSibling && D(f.parentNode, t, G), f.parentNode._parent && f.parentNode._parent.appendChild(f), F && f.parentNode.appendChild(a.createTextNode(" ")), "span" === z && (f.style.display = "inline"), R.push(f));
                    else f.parentNode._isSplit && !f._isSplit && "" !== f.innerHTML ? L.push(f) : j && !f._isSplit && ("span" === z && (f.style.display = "inline"), R.push(f));
                    else H || q ? (f.parentNode && f.parentNode.removeChild(f), c.splice(h--, 1), u--) : $ || t.appendChild(f);
                    for (h = X.length; --h > -1;) X[h].parentNode.removeChild(X[h]);
                    if (H) {
                        for (q && (S = a.createElement(z), t.appendChild(S), P = S.offsetWidth + "px", F = S.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(S)), x = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
                        for (C = " " === G && (!q || !$ && !j), h = 0; h < H.length; h++) {
                            for (g = H[h], (S = a.createElement(z)).style.cssText = "display:block;text-align:" + V + ";position:" + (q ? "absolute;" : "relative;"), W && (S.className = W + (Y ? h + 1 : "")), N.push(S), u = g.length, l = 0; l < u; l++) "BR" !== g[l].nodeName && (f = g[l], S.appendChild(f), C && f._wordEnd && S.appendChild(a.createTextNode(" ")), q && (0 === l && (S.style.top = f._y + "px", S.style.left = _ + F + "px"), f.style.top = "0px", F && (f.style.left = f._x - F + "px")));
                            0 === u ? S.innerHTML = "&nbsp;" : $ || j || (E(S), y(S, String.fromCharCode(160), " ")), q && (S.style.width = P, S.style.height = f._h + "px"), t.appendChild(S)
                        }
                        t.style.cssText = x
                    }
                    q && (o > t.clientHeight && (t.style.height = o - w + "px", t.clientHeight < o && (t.style.height = o + k + "px")), n > t.clientWidth && (t.style.width = n - I + "px", t.clientWidth < n && (t.style.width = n + M + "px"))), U && (K ? t.style.display = K : t.style.removeProperty("display")), v(i, R), $ && v(r, L), v(s, N)
                },
                x = function(t, e, i, n) {
                    var o, p, u, f, c, g, v, D, E = e.tag ? e.tag : e.span ? "span" : "div",
                        b = ~(e.type || e.split || "chars,words,lines").indexOf("chars"),
                        C = m(e),
                        x = e.wordDelimiter || " ",
                        S = " " !== x ? "" : C ? "&#173; " : " ",
                        P = "</" + E + ">",
                        F = 1,
                        A = e.specialChars ? "function" == typeof e.specialChars ? e.specialChars : d : null,
                        _ = a.createElement("div"),
                        T = t.parentNode;
                    for (T.insertBefore(_, t), _.textContent = t.nodeValue, T.removeChild(t), v = -1 !== (o = s(t = _)).indexOf("<"), !1 !== e.reduceWhiteSpace && (o = o.replace(l, " ").replace(h, "")), v && (o = o.split("<").join("{{LT}}")), c = o.length, p = (" " === o.charAt(0) ? S : "") + i(), u = 0; u < c; u++)
                        if (g = o.charAt(u), A && (D = A(o.substr(u), e.specialChars))) g = o.substr(u, D || 1), p += b && " " !== g ? n() + g + "</" + E + ">" : g, u += D - 1;
                        else if (g === x && o.charAt(u - 1) !== x && u) {
                        for (p += F ? P : "", F = 0; o.charAt(u + 1) === x;) p += S, u++;
                        u === c - 1 ? p += S : ")" !== o.charAt(u + 1) && (p += S + i(), F = 1)
                    } else "{" === g && "{{LT}}" === o.substr(u, 6) ? (p += b ? n() + "{{LT}}</" + E + ">" : "{{LT}}", u += 5) : g.charCodeAt(0) >= 55296 && g.charCodeAt(0) <= 56319 || o.charCodeAt(u + 1) >= 65024 && o.charCodeAt(u + 1) <= 65039 ? (f = ((o.substr(u, 12).split(r) || [])[1] || "").length || 2, p += b && " " !== g ? n() + o.substr(u, f) + "</" + E + ">" : o.substr(u, f), u += f - 1) : p += b && " " !== g ? n() + g + "</" + E + ">" : g;
                    t.outerHTML = p + (F ? P : ""), v && y(T, "{{LT}}", "<")
                },
                S = function t(e, i, r, s) {
                    var a, n, o = c(e.childNodes),
                        h = o.length,
                        l = m(i);
                    if (3 !== e.nodeType || h > 1) {
                        for (i.absolute = !1, a = 0; a < h; a++)(n = o[a])._next = n._isFirst = n._parent = n._wordEnd = null, (3 !== n.nodeType || /\S+/.test(n.nodeValue)) && (l && 3 !== n.nodeType && "inline" === p(n).display && (n.style.display = "inline-block", n.style.position = "relative"), n._isSplit = !0, t(n, i, r, s));
                        return i.absolute = l, void(e._isSplit = !0)
                    }
                    x(e, i, r, s)
                },
                P = function() {
                    function t(t, e) {
                        o || (a = document, n = window, o = 1), this.elements = c(t), this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e)
                    }
                    var e = t.prototype;
                    return e.split = function(t) {
                        this.isSplit && this.revert(), this.vars = t = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
                        for (var e, i, r, s = this.elements.length, a = t.tag ? t.tag : t.span ? "span" : "div", n = g(t.wordsClass, a), o = g(t.charsClass, a); --s > -1;) r = this.elements[s], this._originals[s] = r.innerHTML, e = r.clientHeight, i = r.clientWidth, S(r, t, n, o), C(r, t, this.chars, this.words, this.lines, i, e);
                        return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
                    }, e.revert = function() {
                        var t = this._originals;
                        if (!t) throw "revert() call wasn't scoped properly.";
                        return this.elements.forEach((function(e, i) {
                            return e.innerHTML = t[i]
                        })), this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
                    }, t.create = function(e, i) {
                        return new t(e, i)
                    }, t
                }();
            P.version = "3.10.4"
        },
        11248: (module, exports, __webpack_require__) => {
            var __WEBPACK_AMD_DEFINE_RESULT__, root, factory;
            "undefined" != typeof navigator && (root = window || {}, factory = function(window) {
                "use strict";
                var svgNS = "http://www.w3.org/2000/svg",
                    locationHref = "",
                    initialDefaultFrame = -999999,
                    subframeEnabled = !0,
                    expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                    cachedColors = {},
                    bmRnd, bmPow = Math.pow,
                    bmSqrt = Math.sqrt,
                    bmFloor = Math.floor,
                    bmMax = Math.max,
                    bmMin = Math.min,
                    BMMath = {};

                function ProjectInterface() {
                    return {}
                }! function() {
                    var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                        i = e.length;
                    for (t = 0; t < i; t += 1) BMMath[e[t]] = Math[e[t]]
                }(), BMMath.random = Math.random, BMMath.abs = function(t) {
                    if ("object" == typeof t && t.length) {
                        var e, i = createSizedArray(t.length),
                            r = t.length;
                        for (e = 0; e < r; e += 1) i[e] = Math.abs(t[e]);
                        return i
                    }
                    return Math.abs(t)
                };
                var defaultCurveSegments = 150,
                    degToRads = Math.PI / 180,
                    roundCorner = .5519;

                function roundValues(t) {
                    bmRnd = t ? Math.round : function(t) {
                        return t
                    }
                }

                function styleDiv(t) {
                    t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d"
                }

                function BMEnterFrameEvent(t, e, i, r) {
                    this.type = t, this.currentTime = e, this.totalTime = i, this.direction = r < 0 ? -1 : 1
                }

                function BMCompleteEvent(t, e) {
                    this.type = t, this.direction = e < 0 ? -1 : 1
                }

                function BMCompleteLoopEvent(t, e, i, r) {
                    this.type = t, this.currentLoop = i, this.totalLoops = e, this.direction = r < 0 ? -1 : 1
                }

                function BMSegmentStartEvent(t, e, i) {
                    this.type = t, this.firstFrame = e, this.totalFrames = i
                }

                function BMDestroyEvent(t, e) {
                    this.type = t, this.target = e
                }

                function BMRenderFrameErrorEvent(t, e) {
                    this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
                }

                function BMConfigErrorEvent(t) {
                    this.type = "configError", this.nativeError = t
                }

                function BMAnimationConfigErrorEvent(t, e) {
                    this.type = t, this.nativeError = e
                }
                roundValues(!1);
                var createElementID = (_count = 0, function() {
                        return "__lottie_element_" + (_count += 1)
                    }),
                    _count;

                function HSVtoRGB(t, e, i) {
                    var r, s, a, n, o, h, l, p;
                    switch (h = i * (1 - e), l = i * (1 - (o = 6 * t - (n = Math.floor(6 * t))) * e), p = i * (1 - (1 - o) * e), n % 6) {
                        case 0:
                            r = i, s = p, a = h;
                            break;
                        case 1:
                            r = l, s = i, a = h;
                            break;
                        case 2:
                            r = h, s = i, a = p;
                            break;
                        case 3:
                            r = h, s = l, a = i;
                            break;
                        case 4:
                            r = p, s = h, a = i;
                            break;
                        case 5:
                            r = i, s = h, a = l
                    }
                    return [r, s, a]
                }

                function RGBtoHSV(t, e, i) {
                    var r, s = Math.max(t, e, i),
                        a = Math.min(t, e, i),
                        n = s - a,
                        o = 0 === s ? 0 : n / s,
                        h = s / 255;
                    switch (s) {
                        case a:
                            r = 0;
                            break;
                        case t:
                            r = e - i + n * (e < i ? 6 : 0), r /= 6 * n;
                            break;
                        case e:
                            r = i - t + 2 * n, r /= 6 * n;
                            break;
                        case i:
                            r = t - e + 4 * n, r /= 6 * n
                    }
                    return [r, o, h]
                }

                function addSaturationToRGB(t, e) {
                    var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                    return i[1] += e, i[1] > 1 ? i[1] = 1 : i[1] <= 0 && (i[1] = 0), HSVtoRGB(i[0], i[1], i[2])
                }

                function addBrightnessToRGB(t, e) {
                    var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                    return i[2] += e, i[2] > 1 ? i[2] = 1 : i[2] < 0 && (i[2] = 0), HSVtoRGB(i[0], i[1], i[2])
                }

                function addHueToRGB(t, e) {
                    var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                    return i[0] += e / 360, i[0] > 1 ? i[0] -= 1 : i[0] < 0 && (i[0] += 1), HSVtoRGB(i[0], i[1], i[2])
                }
                var rgbToHex = function() {
                    var t, e, i = [];
                    for (t = 0; t < 256; t += 1) e = t.toString(16), i[t] = 1 === e.length ? "0" + e : e;
                    return function(t, e, r) {
                        return t < 0 && (t = 0), e < 0 && (e = 0), r < 0 && (r = 0), "#" + i[t] + i[e] + i[r]
                    }
                }();

                function BaseEvent() {}
                BaseEvent.prototype = {
                    triggerEvent: function(t, e) {
                        if (this._cbs[t])
                            for (var i = this._cbs[t].length, r = 0; r < i; r += 1) this._cbs[t][r](e)
                    },
                    addEventListener: function(t, e) {
                        return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
                            function() {
                                this.removeEventListener(t, e)
                            }.bind(this)
                    },
                    removeEventListener: function(t, e) {
                        if (e) {
                            if (this._cbs[t]) {
                                for (var i = 0, r = this._cbs[t].length; i < r;) this._cbs[t][i] === e && (this._cbs[t].splice(i, 1), i -= 1, r -= 1), i += 1;
                                this._cbs[t].length || (this._cbs[t] = null)
                            }
                        } else this._cbs[t] = null
                    }
                };
                var createTypedArray = function() {
                    function t(t, e) {
                        var i, r = 0,
                            s = [];
                        switch (t) {
                            case "int16":
                            case "uint8c":
                                i = 1;
                                break;
                            default:
                                i = 1.1
                        }
                        for (r = 0; r < e; r += 1) s.push(i);
                        return s
                    }
                    return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(e, i) {
                        return "float32" === e ? new Float32Array(i) : "int16" === e ? new Int16Array(i) : "uint8c" === e ? new Uint8ClampedArray(i) : t(e, i)
                    } : t
                }();

                function createSizedArray(t) {
                    return Array.apply(null, {
                        length: t
                    })
                }

                function createNS(t) {
                    return document.createElementNS(svgNS, t)
                }

                function createTag(t) {
                    return document.createElement(t)
                }

                function DynamicPropertyContainer() {}
                DynamicPropertyContainer.prototype = {
                    addDynamicProperty: function(t) {
                        -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
                    },
                    iterateDynamicProperties: function() {
                        var t;
                        this._mdf = !1;
                        var e = this.dynamicProperties.length;
                        for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
                    },
                    initDynamicPropertyContainer: function(t) {
                        this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
                    }
                };
                var getBlendMode = (blendModeEnums = {
                        0: "source-over",
                        1: "multiply",
                        2: "screen",
                        3: "overlay",
                        4: "darken",
                        5: "lighten",
                        6: "color-dodge",
                        7: "color-burn",
                        8: "hard-light",
                        9: "soft-light",
                        10: "difference",
                        11: "exclusion",
                        12: "hue",
                        13: "saturation",
                        14: "color",
                        15: "luminosity"
                    }, function(t) {
                        return blendModeEnums[t] || ""
                    }),
                    blendModeEnums, Matrix = function() {
                        var t = Math.cos,
                            e = Math.sin,
                            i = Math.tan,
                            r = Math.round;

                        function s() {
                            return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
                        }

                        function a(i) {
                            if (0 === i) return this;
                            var r = t(i),
                                s = e(i);
                            return this._t(r, -s, 0, 0, s, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        }

                        function n(i) {
                            if (0 === i) return this;
                            var r = t(i),
                                s = e(i);
                            return this._t(1, 0, 0, 0, 0, r, -s, 0, 0, s, r, 0, 0, 0, 0, 1)
                        }

                        function o(i) {
                            if (0 === i) return this;
                            var r = t(i),
                                s = e(i);
                            return this._t(r, 0, s, 0, 0, 1, 0, 0, -s, 0, r, 0, 0, 0, 0, 1)
                        }

                        function h(i) {
                            if (0 === i) return this;
                            var r = t(i),
                                s = e(i);
                            return this._t(r, -s, 0, 0, s, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        }

                        function l(t, e) {
                            return this._t(1, e, t, 1, 0, 0)
                        }

                        function p(t, e) {
                            return this.shear(i(t), i(e))
                        }

                        function u(r, s) {
                            var a = t(s),
                                n = e(s);
                            return this._t(a, n, 0, 0, -n, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(r), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(a, -n, 0, 0, n, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        }

                        function f(t, e, i) {
                            return i || 0 === i || (i = 1), 1 === t && 1 === e && 1 === i ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1)
                        }

                        function c(t, e, i, r, s, a, n, o, h, l, p, u, f, c, m, d) {
                            return this.props[0] = t, this.props[1] = e, this.props[2] = i, this.props[3] = r, this.props[4] = s, this.props[5] = a, this.props[6] = n, this.props[7] = o, this.props[8] = h, this.props[9] = l, this.props[10] = p, this.props[11] = u, this.props[12] = f, this.props[13] = c, this.props[14] = m, this.props[15] = d, this
                        }

                        function m(t, e, i) {
                            return i = i || 0, 0 !== t || 0 !== e || 0 !== i ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1) : this
                        }

                        function d(t, e, i, r, s, a, n, o, h, l, p, u, f, c, m, d) {
                            var g = this.props;
                            if (1 === t && 0 === e && 0 === i && 0 === r && 0 === s && 1 === a && 0 === n && 0 === o && 0 === h && 0 === l && 1 === p && 0 === u) return g[12] = g[12] * t + g[15] * f, g[13] = g[13] * a + g[15] * c, g[14] = g[14] * p + g[15] * m, g[15] *= d, this._identityCalculated = !1, this;
                            var y = g[0],
                                v = g[1],
                                D = g[2],
                                E = g[3],
                                b = g[4],
                                C = g[5],
                                x = g[6],
                                S = g[7],
                                P = g[8],
                                F = g[9],
                                A = g[10],
                                _ = g[11],
                                T = g[12],
                                k = g[13],
                                M = g[14],
                                w = g[15];
                            return g[0] = y * t + v * s + D * h + E * f, g[1] = y * e + v * a + D * l + E * c, g[2] = y * i + v * n + D * p + E * m, g[3] = y * r + v * o + D * u + E * d, g[4] = b * t + C * s + x * h + S * f, g[5] = b * e + C * a + x * l + S * c, g[6] = b * i + C * n + x * p + S * m, g[7] = b * r + C * o + x * u + S * d, g[8] = P * t + F * s + A * h + _ * f, g[9] = P * e + F * a + A * l + _ * c, g[10] = P * i + F * n + A * p + _ * m, g[11] = P * r + F * o + A * u + _ * d, g[12] = T * t + k * s + M * h + w * f, g[13] = T * e + k * a + M * l + w * c, g[14] = T * i + k * n + M * p + w * m, g[15] = T * r + k * o + M * u + w * d, this._identityCalculated = !1, this
                        }

                        function g() {
                            return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
                        }

                        function y(t) {
                            for (var e = 0; e < 16;) {
                                if (t.props[e] !== this.props[e]) return !1;
                                e += 1
                            }
                            return !0
                        }

                        function v(t) {
                            var e;
                            for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
                            return t
                        }

                        function D(t) {
                            var e;
                            for (e = 0; e < 16; e += 1) this.props[e] = t[e]
                        }

                        function E(t, e, i) {
                            return {
                                x: t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12],
                                y: t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13],
                                z: t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                            }
                        }

                        function b(t, e, i) {
                            return t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12]
                        }

                        function C(t, e, i) {
                            return t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13]
                        }

                        function x(t, e, i) {
                            return t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                        }

                        function S() {
                            var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                                e = this.props[5] / t,
                                i = -this.props[1] / t,
                                r = -this.props[4] / t,
                                s = this.props[0] / t,
                                a = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                                n = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
                                o = new Matrix;
                            return o.props[0] = e, o.props[1] = i, o.props[4] = r, o.props[5] = s, o.props[12] = a, o.props[13] = n, o
                        }

                        function P(t) {
                            return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
                        }

                        function F(t) {
                            var e, i = t.length,
                                r = [];
                            for (e = 0; e < i; e += 1) r[e] = P(t[e]);
                            return r
                        }

                        function A(t, e, i) {
                            var r = createTypedArray("float32", 6);
                            if (this.isIdentity()) r[0] = t[0], r[1] = t[1], r[2] = e[0], r[3] = e[1], r[4] = i[0], r[5] = i[1];
                            else {
                                var s = this.props[0],
                                    a = this.props[1],
                                    n = this.props[4],
                                    o = this.props[5],
                                    h = this.props[12],
                                    l = this.props[13];
                                r[0] = t[0] * s + t[1] * n + h, r[1] = t[0] * a + t[1] * o + l, r[2] = e[0] * s + e[1] * n + h, r[3] = e[0] * a + e[1] * o + l, r[4] = i[0] * s + i[1] * n + h, r[5] = i[0] * a + i[1] * o + l
                            }
                            return r
                        }

                        function _(t, e, i) {
                            return this.isIdentity() ? [t, e, i] : [t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]]
                        }

                        function T(t, e) {
                            if (this.isIdentity()) return t + "," + e;
                            var i = this.props;
                            return Math.round(100 * (t * i[0] + e * i[4] + i[12])) / 100 + "," + Math.round(100 * (t * i[1] + e * i[5] + i[13])) / 100
                        }

                        function k() {
                            for (var t = 0, e = this.props, i = "matrix3d("; t < 16;) i += r(1e4 * e[t]) / 1e4, i += 15 === t ? ")" : ",", t += 1;
                            return i
                        }

                        function M(t) {
                            return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? r(1e4 * t) / 1e4 : t
                        }

                        function w() {
                            var t = this.props;
                            return "matrix(" + M(t[0]) + "," + M(t[1]) + "," + M(t[4]) + "," + M(t[5]) + "," + M(t[12]) + "," + M(t[13]) + ")"
                        }
                        return function() {
                            this.reset = s, this.rotate = a, this.rotateX = n, this.rotateY = o, this.rotateZ = h, this.skew = p, this.skewFromAxis = u, this.shear = l, this.scale = f, this.setTransform = c, this.translate = m, this.transform = d, this.applyToPoint = E, this.applyToX = b, this.applyToY = C, this.applyToZ = x, this.applyToPointArray = _, this.applyToTriplePoints = A, this.applyToPointStringified = T, this.toCSS = k, this.to2dCSS = w, this.clone = v, this.cloneFromProps = D, this.equals = y, this.inversePoints = F, this.inversePoint = P, this.getInverseMatrix = S, this._t = this.transform, this.isIdentity = g, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
                        }
                    }();
                ! function(t, e) {
                    var i = this,
                        r = 256,
                        s = e.pow(r, 6),
                        a = e.pow(2, 52),
                        n = 2 * a,
                        o = 255;

                    function h(t) {
                        var e, i = t.length,
                            s = this,
                            a = 0,
                            n = s.i = s.j = 0,
                            h = s.S = [];
                        for (i || (t = [i++]); a < r;) h[a] = a++;
                        for (a = 0; a < r; a++) h[a] = h[n = o & n + t[a % i] + (e = h[a])], h[n] = e;
                        s.g = function(t) {
                            for (var e, i = 0, a = s.i, n = s.j, h = s.S; t--;) e = h[a = o & a + 1], i = i * r + h[o & (h[a] = h[n = o & n + e]) + (h[n] = e)];
                            return s.i = a, s.j = n, i
                        }
                    }

                    function l(t, e) {
                        return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
                    }

                    function p(t, e) {
                        var i, r = [],
                            s = typeof t;
                        if (e && "object" == s)
                            for (i in t) try {
                                r.push(p(t[i], e - 1))
                            } catch (t) {}
                        return r.length ? r : "string" == s ? t : t + "\0"
                    }

                    function u(t, e) {
                        for (var i, r = t + "", s = 0; s < r.length;) e[o & s] = o & (i ^= 19 * e[o & s]) + r.charCodeAt(s++);
                        return f(e)
                    }

                    function f(t) {
                        return String.fromCharCode.apply(0, t)
                    }
                    e.seedrandom = function(o, c, m) {
                        var d = [],
                            g = u(p((c = !0 === c ? {
                                entropy: !0
                            } : c || {}).entropy ? [o, f(t)] : null === o ? function() {
                                try {
                                    var e = new Uint8Array(r);
                                    return (i.crypto || i.msCrypto).getRandomValues(e), f(e)
                                } catch (e) {
                                    var s = i.navigator,
                                        a = s && s.plugins;
                                    return [+new Date, i, a, i.screen, f(t)]
                                }
                            }() : o, 3), d),
                            y = new h(d),
                            v = function() {
                                for (var t = y.g(6), e = s, i = 0; t < a;) t = (t + i) * r, e *= r, i = y.g(1);
                                for (; t >= n;) t /= 2, e /= 2, i >>>= 1;
                                return (t + i) / e
                            };
                        return v.int32 = function() {
                            return 0 | y.g(4)
                        }, v.quick = function() {
                            return y.g(4) / 4294967296
                        }, v.double = v, u(f(y.S), t), (c.pass || m || function(t, i, r, s) {
                            return s && (s.S && l(s, y), t.state = function() {
                                return l(y, {})
                            }), r ? (e.random = t, i) : t
                        })(v, g, "global" in c ? c.global : this == e, c.state)
                    }, u(e.random(), t)
                }([], BMMath);
                var BezierFactory = function() {
                    var t = {
                            getBezierEasing: function(t, i, r, s, a) {
                                var n = a || ("bez_" + t + "_" + i + "_" + r + "_" + s).replace(/\./g, "p");
                                if (e[n]) return e[n];
                                var o = new l([t, i, r, s]);
                                return e[n] = o, o
                            }
                        },
                        e = {},
                        i = .1,
                        r = "function" == typeof Float32Array;

                    function s(t, e) {
                        return 1 - 3 * e + 3 * t
                    }

                    function a(t, e) {
                        return 3 * e - 6 * t
                    }

                    function n(t) {
                        return 3 * t
                    }

                    function o(t, e, i) {
                        return ((s(e, i) * t + a(e, i)) * t + n(e)) * t
                    }

                    function h(t, e, i) {
                        return 3 * s(e, i) * t * t + 2 * a(e, i) * t + n(e)
                    }

                    function l(t) {
                        this._p = t, this._mSampleValues = r ? new Float32Array(11) : new Array(11), this._precomputed = !1, this.get = this.get.bind(this)
                    }
                    return l.prototype = {
                        get: function(t) {
                            var e = this._p[0],
                                i = this._p[1],
                                r = this._p[2],
                                s = this._p[3];
                            return this._precomputed || this._precompute(), e === i && r === s ? t : 0 === t ? 0 : 1 === t ? 1 : o(this._getTForX(t), i, s)
                        },
                        _precompute: function() {
                            var t = this._p[0],
                                e = this._p[1],
                                i = this._p[2],
                                r = this._p[3];
                            this._precomputed = !0, t === e && i === r || this._calcSampleValues()
                        },
                        _calcSampleValues: function() {
                            for (var t = this._p[0], e = this._p[2], r = 0; r < 11; ++r) this._mSampleValues[r] = o(r * i, t, e)
                        },
                        _getTForX: function(t) {
                            for (var e = this._p[0], r = this._p[2], s = this._mSampleValues, a = 0, n = 1; 10 !== n && s[n] <= t; ++n) a += i;
                            var l = a + (t - s[--n]) / (s[n + 1] - s[n]) * i,
                                p = h(l, e, r);
                            return p >= .001 ? function(t, e, i, r) {
                                for (var s = 0; s < 4; ++s) {
                                    var a = h(e, i, r);
                                    if (0 === a) return e;
                                    e -= (o(e, i, r) - t) / a
                                }
                                return e
                            }(t, l, e, r) : 0 === p ? l : function(t, e, i, r, s) {
                                var a, n, h = 0;
                                do {
                                    (a = o(n = e + (i - e) / 2, r, s) - t) > 0 ? i = n : e = n
                                } while (Math.abs(a) > 1e-7 && ++h < 10);
                                return n
                            }(t, a, a + i, e, r)
                        }
                    }, t
                }();

                function extendPrototype(t, e) {
                    var i, r, s = t.length;
                    for (i = 0; i < s; i += 1)
                        for (var a in r = t[i].prototype) Object.prototype.hasOwnProperty.call(r, a) && (e.prototype[a] = r[a])
                }

                function getDescriptor(t, e) {
                    return Object.getOwnPropertyDescriptor(t, e)
                }

                function createProxyFunction(t) {
                    function e() {}
                    return e.prototype = t, e
                }

                function bezFunction() {
                    var t = Math;

                    function e(t, e, i, r, s, a) {
                        var n = t * r + e * s + i * a - s * r - a * t - i * e;
                        return n > -.001 && n < .001
                    }
                    var i = function(t, e, i, r) {
                        var s, a, n, o, h, l, p = defaultCurveSegments,
                            u = 0,
                            f = [],
                            c = [],
                            m = bezierLengthPool.newElement();
                        for (n = i.length, s = 0; s < p; s += 1) {
                            for (h = s / (p - 1), l = 0, a = 0; a < n; a += 1) o = bmPow(1 - h, 3) * t[a] + 3 * bmPow(1 - h, 2) * h * i[a] + 3 * (1 - h) * bmPow(h, 2) * r[a] + bmPow(h, 3) * e[a], f[a] = o, null !== c[a] && (l += bmPow(f[a] - c[a], 2)), c[a] = f[a];
                            l && (u += l = bmSqrt(l)), m.percents[s] = h, m.lengths[s] = u
                        }
                        return m.addedLength = u, m
                    };

                    function r(t) {
                        this.segmentLength = 0, this.points = new Array(t)
                    }

                    function s(t, e) {
                        this.partialLength = t, this.point = e
                    }
                    var a, n = (a = {}, function(t, i, n, o) {
                        var h = (t[0] + "_" + t[1] + "_" + i[0] + "_" + i[1] + "_" + n[0] + "_" + n[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
                        if (!a[h]) {
                            var l, p, u, f, c, m, d, g = defaultCurveSegments,
                                y = 0,
                                v = null;
                            2 === t.length && (t[0] !== i[0] || t[1] !== i[1]) && e(t[0], t[1], i[0], i[1], t[0] + n[0], t[1] + n[1]) && e(t[0], t[1], i[0], i[1], i[0] + o[0], i[1] + o[1]) && (g = 2);
                            var D = new r(g);
                            for (u = n.length, l = 0; l < g; l += 1) {
                                for (d = createSizedArray(u), c = l / (g - 1), m = 0, p = 0; p < u; p += 1) f = bmPow(1 - c, 3) * t[p] + 3 * bmPow(1 - c, 2) * c * (t[p] + n[p]) + 3 * (1 - c) * bmPow(c, 2) * (i[p] + o[p]) + bmPow(c, 3) * i[p], d[p] = f, null !== v && (m += bmPow(d[p] - v[p], 2));
                                y += m = bmSqrt(m), D.points[l] = new s(m, d), v = d
                            }
                            D.segmentLength = y, a[h] = D
                        }
                        return a[h]
                    });

                    function o(t, e) {
                        var i = e.percents,
                            r = e.lengths,
                            s = i.length,
                            a = bmFloor((s - 1) * t),
                            n = t * e.addedLength,
                            o = 0;
                        if (a === s - 1 || 0 === a || n === r[a]) return i[a];
                        for (var h = r[a] > n ? -1 : 1, l = !0; l;)
                            if (r[a] <= n && r[a + 1] > n ? (o = (n - r[a]) / (r[a + 1] - r[a]), l = !1) : a += h, a < 0 || a >= s - 1) {
                                if (a === s - 1) return i[a];
                                l = !1
                            }
                        return i[a] + (i[a + 1] - i[a]) * o
                    }
                    var h = createTypedArray("float32", 8);
                    return {
                        getSegmentsLength: function(t) {
                            var e, r = segmentsLengthPool.newElement(),
                                s = t.c,
                                a = t.v,
                                n = t.o,
                                o = t.i,
                                h = t._length,
                                l = r.lengths,
                                p = 0;
                            for (e = 0; e < h - 1; e += 1) l[e] = i(a[e], a[e + 1], n[e], o[e + 1]), p += l[e].addedLength;
                            return s && h && (l[e] = i(a[e], a[0], n[e], o[0]), p += l[e].addedLength), r.totalLength = p, r
                        },
                        getNewSegment: function(e, i, r, s, a, n, l) {
                            a < 0 ? a = 0 : a > 1 && (a = 1);
                            var p, u = o(a, l),
                                f = o(n = n > 1 ? 1 : n, l),
                                c = e.length,
                                m = 1 - u,
                                d = 1 - f,
                                g = m * m * m,
                                y = u * m * m * 3,
                                v = u * u * m * 3,
                                D = u * u * u,
                                E = m * m * d,
                                b = u * m * d + m * u * d + m * m * f,
                                C = u * u * d + m * u * f + u * m * f,
                                x = u * u * f,
                                S = m * d * d,
                                P = u * d * d + m * f * d + m * d * f,
                                F = u * f * d + m * f * f + u * d * f,
                                A = u * f * f,
                                _ = d * d * d,
                                T = f * d * d + d * f * d + d * d * f,
                                k = f * f * d + d * f * f + f * d * f,
                                M = f * f * f;
                            for (p = 0; p < c; p += 1) h[4 * p] = t.round(1e3 * (g * e[p] + y * r[p] + v * s[p] + D * i[p])) / 1e3, h[4 * p + 1] = t.round(1e3 * (E * e[p] + b * r[p] + C * s[p] + x * i[p])) / 1e3, h[4 * p + 2] = t.round(1e3 * (S * e[p] + P * r[p] + F * s[p] + A * i[p])) / 1e3, h[4 * p + 3] = t.round(1e3 * (_ * e[p] + T * r[p] + k * s[p] + M * i[p])) / 1e3;
                            return h
                        },
                        getPointInSegment: function(e, i, r, s, a, n) {
                            var h = o(a, n),
                                l = 1 - h;
                            return [t.round(1e3 * (l * l * l * e[0] + (h * l * l + l * h * l + l * l * h) * r[0] + (h * h * l + l * h * h + h * l * h) * s[0] + h * h * h * i[0])) / 1e3, t.round(1e3 * (l * l * l * e[1] + (h * l * l + l * h * l + l * l * h) * r[1] + (h * h * l + l * h * h + h * l * h) * s[1] + h * h * h * i[1])) / 1e3]
                        },
                        buildBezierData: n,
                        pointOnLine2D: e,
                        pointOnLine3D: function(i, r, s, a, n, o, h, l, p) {
                            if (0 === s && 0 === o && 0 === p) return e(i, r, a, n, h, l);
                            var u, f = t.sqrt(t.pow(a - i, 2) + t.pow(n - r, 2) + t.pow(o - s, 2)),
                                c = t.sqrt(t.pow(h - i, 2) + t.pow(l - r, 2) + t.pow(p - s, 2)),
                                m = t.sqrt(t.pow(h - a, 2) + t.pow(l - n, 2) + t.pow(p - o, 2));
                            return (u = f > c ? f > m ? f - c - m : m - c - f : m > c ? m - c - f : c - f - m) > -1e-4 && u < 1e-4
                        }
                    }
                }! function() {
                    for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
                    window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
                        var i = (new Date).getTime(),
                            r = Math.max(0, 16 - (i - t)),
                            s = setTimeout((function() {
                                e(i + r)
                            }), r);
                        return t = i + r, s
                    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
                        clearTimeout(t)
                    })
                }();
                var bez = bezFunction();

                function dataFunctionManager() {
                    function t(s, a, n) {
                        var o, h, l, p, u, f, c, m = s.length;
                        for (h = 0; h < m; h += 1)
                            if ("ks" in (o = s[h]) && !o.completed) {
                                if (o.completed = !0, o.tt && (s[h - 1].td = o.tt), o.hasMask) {
                                    var d = o.masksProperties;
                                    for (p = d.length, l = 0; l < p; l += 1)
                                        if (d[l].pt.k.i) r(d[l].pt.k);
                                        else
                                            for (f = d[l].pt.k.length, u = 0; u < f; u += 1) d[l].pt.k[u].s && r(d[l].pt.k[u].s[0]), d[l].pt.k[u].e && r(d[l].pt.k[u].e[0])
                                }
                                0 === o.ty ? (o.layers = e(o.refId, a), t(o.layers, a, n)) : 4 === o.ty ? i(o.shapes) : 5 === o.ty && (0 !== (c = o).t.a.length || "m" in c.t.p || (c.singleShape = !0))
                            }
                    }

                    function e(t, e) {
                        for (var i = 0, r = e.length; i < r;) {
                            if (e[i].id === t) return e[i].layers.__used ? JSON.parse(JSON.stringify(e[i].layers)) : (e[i].layers.__used = !0, e[i].layers);
                            i += 1
                        }
                        return null
                    }

                    function i(t) {
                        var e, s, a;
                        for (e = t.length - 1; e >= 0; e -= 1)
                            if ("sh" === t[e].ty)
                                if (t[e].ks.k.i) r(t[e].ks.k);
                                else
                                    for (a = t[e].ks.k.length, s = 0; s < a; s += 1) t[e].ks.k[s].s && r(t[e].ks.k[s].s[0]), t[e].ks.k[s].e && r(t[e].ks.k[s].e[0]);
                        else "gr" === t[e].ty && i(t[e].it)
                    }

                    function r(t) {
                        var e, i = t.i.length;
                        for (e = 0; e < i; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
                    }

                    function s(t, e) {
                        var i = e ? e.split(".") : [100, 100, 100];
                        return t[0] > i[0] || !(i[0] > t[0]) && (t[1] > i[1] || !(i[1] > t[1]) && (t[2] > i[2] || !(i[2] > t[2]) && null))
                    }
                    var a, n = function() {
                            var t = [4, 4, 14];

                            function e(t) {
                                var e, i, r, s = t.length;
                                for (e = 0; e < s; e += 1) 5 === t[e].ty && (void 0, r = (i = t[e]).t.d, i.t.d = {
                                    k: [{
                                        s: r,
                                        t: 0
                                    }]
                                })
                            }
                            return function(i) {
                                if (s(t, i.v) && (e(i.layers), i.assets)) {
                                    var r, a = i.assets.length;
                                    for (r = 0; r < a; r += 1) i.assets[r].layers && e(i.assets[r].layers)
                                }
                            }
                        }(),
                        o = (a = [4, 7, 99], function(t) {
                            if (t.chars && !s(a, t.v)) {
                                var e, i, n, o, h, l = t.chars.length;
                                for (e = 0; e < l; e += 1)
                                    if (t.chars[e].data && t.chars[e].data.shapes)
                                        for (n = (h = t.chars[e].data.shapes[0].it).length, i = 0; i < n; i += 1)(o = h[i].ks.k).__converted || (r(h[i].ks.k), o.__converted = !0)
                            }
                        }),
                        h = function() {
                            var t = [4, 1, 9];

                            function e(t) {
                                var i, r, s, a = t.length;
                                for (i = 0; i < a; i += 1)
                                    if ("gr" === t[i].ty) e(t[i].it);
                                    else if ("fl" === t[i].ty || "st" === t[i].ty)
                                    if (t[i].c.k && t[i].c.k[0].i)
                                        for (s = t[i].c.k.length, r = 0; r < s; r += 1) t[i].c.k[r].s && (t[i].c.k[r].s[0] /= 255, t[i].c.k[r].s[1] /= 255, t[i].c.k[r].s[2] /= 255, t[i].c.k[r].s[3] /= 255), t[i].c.k[r].e && (t[i].c.k[r].e[0] /= 255, t[i].c.k[r].e[1] /= 255, t[i].c.k[r].e[2] /= 255, t[i].c.k[r].e[3] /= 255);
                                    else t[i].c.k[0] /= 255, t[i].c.k[1] /= 255, t[i].c.k[2] /= 255, t[i].c.k[3] /= 255
                            }

                            function i(t) {
                                var i, r = t.length;
                                for (i = 0; i < r; i += 1) 4 === t[i].ty && e(t[i].shapes)
                            }
                            return function(e) {
                                if (s(t, e.v) && (i(e.layers), e.assets)) {
                                    var r, a = e.assets.length;
                                    for (r = 0; r < a; r += 1) e.assets[r].layers && i(e.assets[r].layers)
                                }
                            }
                        }(),
                        l = function() {
                            var t = [4, 4, 18];

                            function e(t) {
                                var i, r, s;
                                for (i = t.length - 1; i >= 0; i -= 1)
                                    if ("sh" === t[i].ty)
                                        if (t[i].ks.k.i) t[i].ks.k.c = t[i].closed;
                                        else
                                            for (s = t[i].ks.k.length, r = 0; r < s; r += 1) t[i].ks.k[r].s && (t[i].ks.k[r].s[0].c = t[i].closed), t[i].ks.k[r].e && (t[i].ks.k[r].e[0].c = t[i].closed);
                                else "gr" === t[i].ty && e(t[i].it)
                            }

                            function i(t) {
                                var i, r, s, a, n, o, h = t.length;
                                for (r = 0; r < h; r += 1) {
                                    if ((i = t[r]).hasMask) {
                                        var l = i.masksProperties;
                                        for (a = l.length, s = 0; s < a; s += 1)
                                            if (l[s].pt.k.i) l[s].pt.k.c = l[s].cl;
                                            else
                                                for (o = l[s].pt.k.length, n = 0; n < o; n += 1) l[s].pt.k[n].s && (l[s].pt.k[n].s[0].c = l[s].cl), l[s].pt.k[n].e && (l[s].pt.k[n].e[0].c = l[s].cl)
                                    }
                                    4 === i.ty && e(i.shapes)
                                }
                            }
                            return function(e) {
                                if (s(t, e.v) && (i(e.layers), e.assets)) {
                                    var r, a = e.assets.length;
                                    for (r = 0; r < a; r += 1) e.assets[r].layers && i(e.assets[r].layers)
                                }
                            }
                        }(),
                        p = {
                            completeData: function(e, i) {
                                e.__complete || (h(e), n(e), o(e), l(e), t(e.layers, e.assets, i), e.__complete = !0)
                            }
                        };
                    return p.checkColors = h, p.checkChars = o, p.checkShapes = l, p.completeLayers = t, p
                }
                var dataManager = dataFunctionManager();

                function getFontProperties(t) {
                    for (var e = t.fStyle ? t.fStyle.split(" ") : [], i = "normal", r = "normal", s = e.length, a = 0; a < s; a += 1) switch (e[a].toLowerCase()) {
                        case "italic":
                            r = "italic";
                            break;
                        case "bold":
                            i = "700";
                            break;
                        case "black":
                            i = "900";
                            break;
                        case "medium":
                            i = "500";
                            break;
                        case "regular":
                        case "normal":
                            i = "400";
                            break;
                        case "light":
                        case "thin":
                            i = "200"
                    }
                    return {
                        style: r,
                        weight: t.fWeight || i
                    }
                }
                var FontManager = function() {
                        var t = {
                                w: 0,
                                size: 0,
                                shapes: []
                            },
                            e = [];

                        function i(t, e) {
                            var i = createTag("span");
                            i.setAttribute("aria-hidden", !0), i.style.fontFamily = e;
                            var r = createTag("span");
                            r.innerText = "giItT1WQy@!-/#", i.style.position = "absolute", i.style.left = "-10000px", i.style.top = "-10000px", i.style.fontSize = "300px", i.style.fontVariant = "normal", i.style.fontStyle = "normal", i.style.fontWeight = "normal", i.style.letterSpacing = "0", i.appendChild(r), document.body.appendChild(i);
                            var s = r.offsetWidth;
                            return r.style.fontFamily = function(t) {
                                var e, i = t.split(","),
                                    r = i.length,
                                    s = [];
                                for (e = 0; e < r; e += 1) "sans-serif" !== i[e] && "monospace" !== i[e] && s.push(i[e]);
                                return s.join(",")
                            }(t) + ", " + e, {
                                node: r,
                                w: s,
                                parent: i
                            }
                        }

                        function r(t, e) {
                            var i = createNS("text");
                            i.style.fontSize = "100px";
                            var r = getFontProperties(e);
                            return i.setAttribute("font-family", e.fFamily), i.setAttribute("font-style", r.style), i.setAttribute("font-weight", r.weight), i.textContent = "1", e.fClass ? (i.style.fontFamily = "inherit", i.setAttribute("class", e.fClass)) : i.style.fontFamily = e.fFamily, t.appendChild(i), createTag("canvas").getContext("2d").font = e.fWeight + " " + e.fStyle + " 100px " + e.fFamily, i
                        }
                        e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                        var s = function() {
                            this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
                        };
                        return s.getCombinedCharacterCodes = function() {
                            return e
                        }, s.prototype = {
                            addChars: function(t) {
                                if (t) {
                                    var e;
                                    this.chars || (this.chars = []);
                                    var i, r, s = t.length,
                                        a = this.chars.length;
                                    for (e = 0; e < s; e += 1) {
                                        for (i = 0, r = !1; i < a;) this.chars[i].style === t[e].style && this.chars[i].fFamily === t[e].fFamily && this.chars[i].ch === t[e].ch && (r = !0), i += 1;
                                        r || (this.chars.push(t[e]), a += 1)
                                    }
                                }
                            },
                            addFonts: function(t, e) {
                                if (t) {
                                    if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
                                    var s, a = t.list,
                                        n = a.length,
                                        o = n;
                                    for (s = 0; s < n; s += 1) {
                                        var h, l, p = !0;
                                        if (a[s].loaded = !1, a[s].monoCase = i(a[s].fFamily, "monospace"), a[s].sansCase = i(a[s].fFamily, "sans-serif"), a[s].fPath) {
                                            if ("p" === a[s].fOrigin || 3 === a[s].origin) {
                                                if ((h = document.querySelectorAll('style[f-forigin="p"][f-family="' + a[s].fFamily + '"], style[f-origin="3"][f-family="' + a[s].fFamily + '"]')).length > 0 && (p = !1), p) {
                                                    var u = createTag("style");
                                                    u.setAttribute("f-forigin", a[s].fOrigin), u.setAttribute("f-origin", a[s].origin), u.setAttribute("f-family", a[s].fFamily), u.type = "text/css", u.innerText = "@font-face {font-family: " + a[s].fFamily + "; font-style: normal; src: url('" + a[s].fPath + "');}", e.appendChild(u)
                                                }
                                            } else if ("g" === a[s].fOrigin || 1 === a[s].origin) {
                                                for (h = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), l = 0; l < h.length; l += 1) - 1 !== h[l].href.indexOf(a[s].fPath) && (p = !1);
                                                if (p) {
                                                    var f = createTag("link");
                                                    f.setAttribute("f-forigin", a[s].fOrigin), f.setAttribute("f-origin", a[s].origin), f.type = "text/css", f.rel = "stylesheet", f.href = a[s].fPath, document.body.appendChild(f)
                                                }
                                            } else if ("t" === a[s].fOrigin || 2 === a[s].origin) {
                                                for (h = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), l = 0; l < h.length; l += 1) a[s].fPath === h[l].src && (p = !1);
                                                if (p) {
                                                    var c = createTag("link");
                                                    c.setAttribute("f-forigin", a[s].fOrigin), c.setAttribute("f-origin", a[s].origin), c.setAttribute("rel", "stylesheet"), c.setAttribute("href", a[s].fPath), e.appendChild(c)
                                                }
                                            }
                                        } else a[s].loaded = !0, o -= 1;
                                        a[s].helper = r(e, a[s]), a[s].cache = {}, this.fonts.push(a[s])
                                    }
                                    0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                                } else this.isLoaded = !0
                            },
                            getCharData: function(e, i, r) {
                                for (var s = 0, a = this.chars.length; s < a;) {
                                    if (this.chars[s].ch === e && this.chars[s].style === i && this.chars[s].fFamily === r) return this.chars[s];
                                    s += 1
                                }
                                return ("string" == typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", e, i, r)), t
                            },
                            getFontByName: function(t) {
                                for (var e = 0, i = this.fonts.length; e < i;) {
                                    if (this.fonts[e].fName === t) return this.fonts[e];
                                    e += 1
                                }
                                return this.fonts[0]
                            },
                            measureText: function(t, e, i) {
                                var r = this.getFontByName(e),
                                    s = t.charCodeAt(0);
                                if (!r.cache[s + 1]) {
                                    var a = r.helper;
                                    if (" " === t) {
                                        a.textContent = "|" + t + "|";
                                        var n = a.getComputedTextLength();
                                        a.textContent = "||";
                                        var o = a.getComputedTextLength();
                                        r.cache[s + 1] = (n - o) / 100
                                    } else a.textContent = t, r.cache[s + 1] = a.getComputedTextLength() / 100
                                }
                                return r.cache[s + 1] * i
                            },
                            checkLoadedFonts: function() {
                                var t, e, i, r = this.fonts.length,
                                    s = r;
                                for (t = 0; t < r; t += 1) this.fonts[t].loaded ? s -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, i = this.fonts[t].monoCase.w, e.offsetWidth !== i ? (s -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, i = this.fonts[t].sansCase.w, e.offsetWidth !== i && (s -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
                                0 !== s && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
                            },
                            setIsLoaded: function() {
                                this.isLoaded = !0
                            }
                        }, s
                    }(),
                    PropertyFactory = function() {
                        var t = initialDefaultFrame,
                            e = Math.abs;

                        function i(t, e) {
                            var i, s = this.offsetTime;
                            "multidimensional" === this.propType && (i = createTypedArray("float32", this.pv.length));
                            for (var a, n, o, h, l, p, u, f, c = e.lastIndex, m = c, d = this.keyframes.length - 1, g = !0; g;) {
                                if (a = this.keyframes[m], n = this.keyframes[m + 1], m === d - 1 && t >= n.t - s) {
                                    a.h && (a = n), c = 0;
                                    break
                                }
                                if (n.t - s > t) {
                                    c = m;
                                    break
                                }
                                m < d - 1 ? m += 1 : (c = 0, g = !1)
                            }
                            var y, v, D, E, b, C, x, S, P, F, A = n.t - s,
                                _ = a.t - s;
                            if (a.to) {
                                a.bezierData || (a.bezierData = bez.buildBezierData(a.s, n.s || a.e, a.to, a.ti));
                                var T = a.bezierData;
                                if (t >= A || t < _) {
                                    var k = t >= A ? T.points.length - 1 : 0;
                                    for (h = T.points[k].point.length, o = 0; o < h; o += 1) i[o] = T.points[k].point[o]
                                } else {
                                    a.__fnct ? f = a.__fnct : (f = BezierFactory.getBezierEasing(a.o.x, a.o.y, a.i.x, a.i.y, a.n).get, a.__fnct = f), l = f((t - _) / (A - _));
                                    var M, w = T.segmentLength * l,
                                        I = e.lastFrame < t && e._lastKeyframeIndex === m ? e._lastAddedLength : 0;
                                    for (u = e.lastFrame < t && e._lastKeyframeIndex === m ? e._lastPoint : 0, g = !0, p = T.points.length; g;) {
                                        if (I += T.points[u].partialLength, 0 === w || 0 === l || u === T.points.length - 1) {
                                            for (h = T.points[u].point.length, o = 0; o < h; o += 1) i[o] = T.points[u].point[o];
                                            break
                                        }
                                        if (w >= I && w < I + T.points[u + 1].partialLength) {
                                            for (M = (w - I) / T.points[u + 1].partialLength, h = T.points[u].point.length, o = 0; o < h; o += 1) i[o] = T.points[u].point[o] + (T.points[u + 1].point[o] - T.points[u].point[o]) * M;
                                            break
                                        }
                                        u < p - 1 ? u += 1 : g = !1
                                    }
                                    e._lastPoint = u, e._lastAddedLength = I - T.points[u].partialLength, e._lastKeyframeIndex = m
                                }
                            } else {
                                var B, V, R, L, N;
                                if (d = a.s.length, y = n.s || a.e, this.sh && 1 !== a.h)
                                    if (t >= A) i[0] = y[0], i[1] = y[1], i[2] = y[2];
                                    else if (t <= _) i[0] = a.s[0], i[1] = a.s[1], i[2] = a.s[2];
                                else {
                                    v = i, E = (D = function(t, e, i) {
                                        var r, s, a, n, o, h = [],
                                            l = t[0],
                                            p = t[1],
                                            u = t[2],
                                            f = t[3],
                                            c = e[0],
                                            m = e[1],
                                            d = e[2],
                                            g = e[3];
                                        return (s = l * c + p * m + u * d + f * g) < 0 && (s = -s, c = -c, m = -m, d = -d, g = -g), 1 - s > 1e-6 ? (r = Math.acos(s), a = Math.sin(r), n = Math.sin((1 - i) * r) / a, o = Math.sin(i * r) / a) : (n = 1 - i, o = i), h[0] = n * l + o * c, h[1] = n * p + o * m, h[2] = n * u + o * d, h[3] = n * f + o * g, h
                                    }(r(a.s), r(y), (t - _) / (A - _)))[0], b = D[1], C = D[2], x = D[3], S = Math.atan2(2 * b * x - 2 * E * C, 1 - 2 * b * b - 2 * C * C), P = Math.asin(2 * E * b + 2 * C * x), F = Math.atan2(2 * E * x - 2 * b * C, 1 - 2 * E * E - 2 * C * C), v[0] = S / degToRads, v[1] = P / degToRads, v[2] = F / degToRads
                                } else
                                    for (m = 0; m < d; m += 1) 1 !== a.h && (t >= A ? l = 1 : t < _ ? l = 0 : (a.o.x.constructor === Array ? (a.__fnct || (a.__fnct = []), a.__fnct[m] ? f = a.__fnct[m] : (B = void 0 === a.o.x[m] ? a.o.x[0] : a.o.x[m], V = void 0 === a.o.y[m] ? a.o.y[0] : a.o.y[m], R = void 0 === a.i.x[m] ? a.i.x[0] : a.i.x[m], L = void 0 === a.i.y[m] ? a.i.y[0] : a.i.y[m], f = BezierFactory.getBezierEasing(B, V, R, L).get, a.__fnct[m] = f)) : a.__fnct ? f = a.__fnct : (B = a.o.x, V = a.o.y, R = a.i.x, L = a.i.y, f = BezierFactory.getBezierEasing(B, V, R, L).get, a.__fnct = f), l = f((t - _) / (A - _)))), y = n.s || a.e, N = 1 === a.h ? a.s[m] : a.s[m] + (y[m] - a.s[m]) * l, "multidimensional" === this.propType ? i[m] = N : i = N
                            }
                            return e.lastIndex = c, i
                        }

                        function r(t) {
                            var e = t[0] * degToRads,
                                i = t[1] * degToRads,
                                r = t[2] * degToRads,
                                s = Math.cos(e / 2),
                                a = Math.cos(i / 2),
                                n = Math.cos(r / 2),
                                o = Math.sin(e / 2),
                                h = Math.sin(i / 2),
                                l = Math.sin(r / 2);
                            return [o * h * n + s * a * l, o * a * n + s * h * l, s * h * n - o * a * l, s * a * n - o * h * l]
                        }

                        function s() {
                            var e = this.comp.renderedFrame - this.offsetTime,
                                i = this.keyframes[0].t - this.offsetTime,
                                r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                            if (!(e === this._caching.lastFrame || this._caching.lastFrame !== t && (this._caching.lastFrame >= r && e >= r || this._caching.lastFrame < i && e < i))) {
                                this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                                var s = this.interpolateValue(e, this._caching);
                                this.pv = s
                            }
                            return this._caching.lastFrame = e, this.pv
                        }

                        function a(t) {
                            var i;
                            if ("unidimensional" === this.propType) i = t * this.mult, e(this.v - i) > 1e-5 && (this.v = i, this._mdf = !0);
                            else
                                for (var r = 0, s = this.v.length; r < s;) i = t[r] * this.mult, e(this.v[r] - i) > 1e-5 && (this.v[r] = i, this._mdf = !0), r += 1
                        }

                        function n() {
                            if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                                if (this.lock) this.setVValue(this.pv);
                                else {
                                    var t;
                                    this.lock = !0, this._mdf = this._isFirstFrame;
                                    var e = this.effectsSequence.length,
                                        i = this.kf ? this.pv : this.data.k;
                                    for (t = 0; t < e; t += 1) i = this.effectsSequence[t](i);
                                    this.setVValue(i), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                                }
                        }

                        function o(t) {
                            this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                        }

                        function h(t, e, i, r) {
                            this.propType = "unidimensional", this.mult = i || 1, this.data = e, this.v = i ? e.k * i : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = r, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = n, this.setVValue = a, this.addEffect = o
                        }

                        function l(t, e, i, r) {
                            var s;
                            this.propType = "multidimensional", this.mult = i || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = r, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                            var h = e.k.length;
                            for (this.v = createTypedArray("float32", h), this.pv = createTypedArray("float32", h), this.vel = createTypedArray("float32", h), s = 0; s < h; s += 1) this.v[s] = e.k[s] * this.mult, this.pv[s] = e.k[s];
                            this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = n, this.setVValue = a, this.addEffect = o
                        }

                        function p(e, r, h, l) {
                            this.propType = "unidimensional", this.keyframes = r.k, this.offsetTime = e.data.st, this.frameId = -1, this._caching = {
                                lastFrame: t,
                                lastIndex: 0,
                                value: 0,
                                _lastKeyframeIndex: -1
                            }, this.k = !0, this.kf = !0, this.data = r, this.mult = h || 1, this.elem = e, this.container = l, this.comp = e.comp, this.v = t, this.pv = t, this._isFirstFrame = !0, this.getValue = n, this.setVValue = a, this.interpolateValue = i, this.effectsSequence = [s.bind(this)], this.addEffect = o
                        }

                        function u(e, r, h, l) {
                            var p;
                            this.propType = "multidimensional";
                            var u, f, c, m, d = r.k.length;
                            for (p = 0; p < d - 1; p += 1) r.k[p].to && r.k[p].s && r.k[p + 1] && r.k[p + 1].s && (u = r.k[p].s, f = r.k[p + 1].s, c = r.k[p].to, m = r.k[p].ti, (2 === u.length && (u[0] !== f[0] || u[1] !== f[1]) && bez.pointOnLine2D(u[0], u[1], f[0], f[1], u[0] + c[0], u[1] + c[1]) && bez.pointOnLine2D(u[0], u[1], f[0], f[1], f[0] + m[0], f[1] + m[1]) || 3 === u.length && (u[0] !== f[0] || u[1] !== f[1] || u[2] !== f[2]) && bez.pointOnLine3D(u[0], u[1], u[2], f[0], f[1], f[2], u[0] + c[0], u[1] + c[1], u[2] + c[2]) && bez.pointOnLine3D(u[0], u[1], u[2], f[0], f[1], f[2], f[0] + m[0], f[1] + m[1], f[2] + m[2])) && (r.k[p].to = null, r.k[p].ti = null), u[0] === f[0] && u[1] === f[1] && 0 === c[0] && 0 === c[1] && 0 === m[0] && 0 === m[1] && (2 === u.length || u[2] === f[2] && 0 === c[2] && 0 === m[2]) && (r.k[p].to = null, r.k[p].ti = null));
                            this.effectsSequence = [s.bind(this)], this.data = r, this.keyframes = r.k, this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = h || 1, this.elem = e, this.container = l, this.comp = e.comp, this.getValue = n, this.setVValue = a, this.interpolateValue = i, this.frameId = -1;
                            var g = r.k[0].s.length;
                            for (this.v = createTypedArray("float32", g), this.pv = createTypedArray("float32", g), p = 0; p < g; p += 1) this.v[p] = t, this.pv[p] = t;
                            this._caching = {
                                lastFrame: t,
                                lastIndex: 0,
                                value: createTypedArray("float32", g)
                            }, this.addEffect = o
                        }
                        return {
                            getProp: function(t, e, i, r, s) {
                                var a;
                                if (e.k.length)
                                    if ("number" == typeof e.k[0]) a = new l(t, e, r, s);
                                    else switch (i) {
                                        case 0:
                                            a = new p(t, e, r, s);
                                            break;
                                        case 1:
                                            a = new u(t, e, r, s)
                                    } else a = new h(t, e, r, s);
                                return a.effectsSequence.length && s.addDynamicProperty(a), a
                            }
                        }
                    }(),
                    TransformPropertyFactory = function() {
                        var t = [0, 0];

                        function e(t, e, i) {
                            if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(i || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
                                    k: [0, 0, 0]
                                }, 1, 0, this), e.rx) {
                                if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) {
                                    var r, s = e.or.k.length;
                                    for (r = 0; r < s; r += 1) e.or.k[r].to = null, e.or.k[r].ti = null
                                }
                                this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0
                            } else this.r = PropertyFactory.getProp(t, e.r || {
                                k: 0
                            }, 0, degToRads, this);
                            e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t, e.a || {
                                k: [0, 0, 0]
                            }, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || {
                                k: [100, 100, 100]
                            }, 1, .01, this), e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
                                _mdf: !1,
                                v: 1
                            }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
                        }
                        return e.prototype = {
                            applyToMatrix: function(t) {
                                var e = this._mdf;
                                this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                            },
                            getValue: function(e) {
                                if (this.elem.globalData.frameId !== this.frameId) {
                                    if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || e) {
                                        var i;
                                        if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                            var r, s;
                                            if (i = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (r = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / i, 0), s = this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (r = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0), s = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / i, 0)) : (r = this.p.pv, s = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / i, this.p.offsetTime));
                                            else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                                r = [], s = [];
                                                var a = this.px,
                                                    n = this.py;
                                                a._caching.lastFrame + a.offsetTime <= a.keyframes[0].t ? (r[0] = a.getValueAtTime((a.keyframes[0].t + .01) / i, 0), r[1] = n.getValueAtTime((n.keyframes[0].t + .01) / i, 0), s[0] = a.getValueAtTime(a.keyframes[0].t / i, 0), s[1] = n.getValueAtTime(n.keyframes[0].t / i, 0)) : a._caching.lastFrame + a.offsetTime >= a.keyframes[a.keyframes.length - 1].t ? (r[0] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / i, 0), r[1] = n.getValueAtTime(n.keyframes[n.keyframes.length - 1].t / i, 0), s[0] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / i, 0), s[1] = n.getValueAtTime((n.keyframes[n.keyframes.length - 1].t - .01) / i, 0)) : (r = [a.pv, n.pv], s[0] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / i, a.offsetTime), s[1] = n.getValueAtTime((n._caching.lastFrame + n.offsetTime - .01) / i, n.offsetTime))
                                            } else r = s = t;
                                            this.v.rotate(-Math.atan2(r[1] - s[1], r[0] - s[0]))
                                        }
                                        this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                                    }
                                    this.frameId = this.elem.globalData.frameId
                                }
                            },
                            precalculateMatrix: function() {
                                if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                                    if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                                        if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                        this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                                    }
                                    this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                                }
                            },
                            autoOrient: function() {}
                        }, extendPrototype([DynamicPropertyContainer], e), e.prototype.addDynamicProperty = function(t) {
                            this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
                        }, e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
                            getTransformProperty: function(t, i, r) {
                                return new e(t, i, r)
                            }
                        }
                    }();

                function ShapePath() {
                    this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
                }
                ShapePath.prototype.setPathData = function(t, e) {
                    this.c = t, this.setLength(e);
                    for (var i = 0; i < e;) this.v[i] = pointPool.newElement(), this.o[i] = pointPool.newElement(), this.i[i] = pointPool.newElement(), i += 1
                }, ShapePath.prototype.setLength = function(t) {
                    for (; this._maxLength < t;) this.doubleArrayLength();
                    this._length = t
                }, ShapePath.prototype.doubleArrayLength = function() {
                    this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
                }, ShapePath.prototype.setXYAt = function(t, e, i, r, s) {
                    var a;
                    switch (this._length = Math.max(this._length, r + 1), this._length >= this._maxLength && this.doubleArrayLength(), i) {
                        case "v":
                            a = this.v;
                            break;
                        case "i":
                            a = this.i;
                            break;
                        case "o":
                            a = this.o;
                            break;
                        default:
                            a = []
                    }(!a[r] || a[r] && !s) && (a[r] = pointPool.newElement()), a[r][0] = t, a[r][1] = e
                }, ShapePath.prototype.setTripleAt = function(t, e, i, r, s, a, n, o) {
                    this.setXYAt(t, e, "v", n, o), this.setXYAt(i, r, "o", n, o), this.setXYAt(s, a, "i", n, o)
                }, ShapePath.prototype.reverse = function() {
                    var t = new ShapePath;
                    t.setPathData(this.c, this._length);
                    var e = this.v,
                        i = this.o,
                        r = this.i,
                        s = 0;
                    this.c && (t.setTripleAt(e[0][0], e[0][1], r[0][0], r[0][1], i[0][0], i[0][1], 0, !1), s = 1);
                    var a, n = this._length - 1,
                        o = this._length;
                    for (a = s; a < o; a += 1) t.setTripleAt(e[n][0], e[n][1], r[n][0], r[n][1], i[n][0], i[n][1], a, !1), n -= 1;
                    return t
                };
                var ShapePropertyFactory = function() {
                        var t = -999999;

                        function e(t, e, i) {
                            var r, s, a, n, o, h, l, p, u, f = i.lastIndex,
                                c = this.keyframes;
                            if (t < c[0].t - this.offsetTime) r = c[0].s[0], a = !0, f = 0;
                            else if (t >= c[c.length - 1].t - this.offsetTime) r = c[c.length - 1].s ? c[c.length - 1].s[0] : c[c.length - 2].e[0], a = !0;
                            else {
                                for (var m, d, g = f, y = c.length - 1, v = !0; v && (m = c[g], !((d = c[g + 1]).t - this.offsetTime > t));) g < y - 1 ? g += 1 : v = !1;
                                if (f = g, !(a = 1 === m.h)) {
                                    if (t >= d.t - this.offsetTime) p = 1;
                                    else if (t < m.t - this.offsetTime) p = 0;
                                    else {
                                        var D;
                                        m.__fnct ? D = m.__fnct : (D = BezierFactory.getBezierEasing(m.o.x, m.o.y, m.i.x, m.i.y).get, m.__fnct = D), p = D((t - (m.t - this.offsetTime)) / (d.t - this.offsetTime - (m.t - this.offsetTime)))
                                    }
                                    s = d.s ? d.s[0] : m.e[0]
                                }
                                r = m.s[0]
                            }
                            for (h = e._length, l = r.i[0].length, i.lastIndex = f, n = 0; n < h; n += 1)
                                for (o = 0; o < l; o += 1) u = a ? r.i[n][o] : r.i[n][o] + (s.i[n][o] - r.i[n][o]) * p, e.i[n][o] = u, u = a ? r.o[n][o] : r.o[n][o] + (s.o[n][o] - r.o[n][o]) * p, e.o[n][o] = u, u = a ? r.v[n][o] : r.v[n][o] + (s.v[n][o] - r.v[n][o]) * p, e.v[n][o] = u
                        }

                        function i() {
                            var e = this.comp.renderedFrame - this.offsetTime,
                                i = this.keyframes[0].t - this.offsetTime,
                                r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                                s = this._caching.lastFrame;
                            return s !== t && (s < i && e < i || s > r && e > r) || (this._caching.lastIndex = s < e ? this._caching.lastIndex : 0, this.interpolateShape(e, this.pv, this._caching)), this._caching.lastFrame = e, this.pv
                        }

                        function r() {
                            this.paths = this.localShapeCollection
                        }

                        function s(t) {
                            (function(t, e) {
                                if (t._length !== e._length || t.c !== e.c) return !1;
                                var i, r = t._length;
                                for (i = 0; i < r; i += 1)
                                    if (t.v[i][0] !== e.v[i][0] || t.v[i][1] !== e.v[i][1] || t.o[i][0] !== e.o[i][0] || t.o[i][1] !== e.o[i][1] || t.i[i][0] !== e.i[i][0] || t.i[i][1] !== e.i[i][1]) return !1;
                                return !0
                            })(this.v, t) || (this.v = shapePool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                        }

                        function a() {
                            if (this.elem.globalData.frameId !== this.frameId)
                                if (this.effectsSequence.length)
                                    if (this.lock) this.setVValue(this.pv);
                                    else {
                                        var t, e;
                                        this.lock = !0, this._mdf = !1, t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                                        var i = this.effectsSequence.length;
                                        for (e = 0; e < i; e += 1) t = this.effectsSequence[e](t);
                                        this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId
                                    }
                            else this._mdf = !1
                        }

                        function n(t, e, i) {
                            this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
                            var s = 3 === i ? e.pt.k : e.ks.k;
                            this.v = shapePool.clone(s), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = r, this.effectsSequence = []
                        }

                        function o(t) {
                            this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                        }

                        function h(e, s, a) {
                            this.propType = "shape", this.comp = e.comp, this.elem = e, this.container = e, this.offsetTime = e.data.st, this.keyframes = 3 === a ? s.pt.k : s.ks.k, this.k = !0, this.kf = !0;
                            var n = this.keyframes[0].s[0].i.length;
                            this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, n), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = r, this._caching = {
                                lastFrame: t,
                                lastIndex: 0
                            }, this.effectsSequence = [i.bind(this)]
                        }
                        n.prototype.interpolateShape = e, n.prototype.getValue = a, n.prototype.setVValue = s, n.prototype.addEffect = o, h.prototype.getValue = a, h.prototype.interpolateShape = e, h.prototype.setVValue = s, h.prototype.addEffect = o;
                        var l = function() {
                                var t = roundCorner;

                                function e(t, e) {
                                    this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                                }
                                return e.prototype = {
                                    reset: r,
                                    getValue: function() {
                                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                                    },
                                    convertEllToPath: function() {
                                        var e = this.p.v[0],
                                            i = this.p.v[1],
                                            r = this.s.v[0] / 2,
                                            s = this.s.v[1] / 2,
                                            a = 3 !== this.d,
                                            n = this.v;
                                        n.v[0][0] = e, n.v[0][1] = i - s, n.v[1][0] = a ? e + r : e - r, n.v[1][1] = i, n.v[2][0] = e, n.v[2][1] = i + s, n.v[3][0] = a ? e - r : e + r, n.v[3][1] = i, n.i[0][0] = a ? e - r * t : e + r * t, n.i[0][1] = i - s, n.i[1][0] = a ? e + r : e - r, n.i[1][1] = i - s * t, n.i[2][0] = a ? e + r * t : e - r * t, n.i[2][1] = i + s, n.i[3][0] = a ? e - r : e + r, n.i[3][1] = i + s * t, n.o[0][0] = a ? e + r * t : e - r * t, n.o[0][1] = i - s, n.o[1][0] = a ? e + r : e - r, n.o[1][1] = i + s * t, n.o[2][0] = a ? e - r * t : e + r * t, n.o[2][1] = i + s, n.o[3][0] = a ? e - r : e + r, n.o[3][1] = i - s * t
                                    }
                                }, extendPrototype([DynamicPropertyContainer], e), e
                            }(),
                            p = function() {
                                function t(t, e) {
                                    this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                                }
                                return t.prototype = {
                                    reset: r,
                                    getValue: function() {
                                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                                    },
                                    convertStarToPath: function() {
                                        var t, e, i, r, s = 2 * Math.floor(this.pt.v),
                                            a = 2 * Math.PI / s,
                                            n = !0,
                                            o = this.or.v,
                                            h = this.ir.v,
                                            l = this.os.v,
                                            p = this.is.v,
                                            u = 2 * Math.PI * o / (2 * s),
                                            f = 2 * Math.PI * h / (2 * s),
                                            c = -Math.PI / 2;
                                        c += this.r.v;
                                        var m = 3 === this.data.d ? -1 : 1;
                                        for (this.v._length = 0, t = 0; t < s; t += 1) {
                                            i = n ? l : p, r = n ? u : f;
                                            var d = (e = n ? o : h) * Math.cos(c),
                                                g = e * Math.sin(c),
                                                y = 0 === d && 0 === g ? 0 : g / Math.sqrt(d * d + g * g),
                                                v = 0 === d && 0 === g ? 0 : -d / Math.sqrt(d * d + g * g);
                                            d += +this.p.v[0], g += +this.p.v[1], this.v.setTripleAt(d, g, d - y * r * i * m, g - v * r * i * m, d + y * r * i * m, g + v * r * i * m, t, !0), n = !n, c += a * m
                                        }
                                    },
                                    convertPolygonToPath: function() {
                                        var t, e = Math.floor(this.pt.v),
                                            i = 2 * Math.PI / e,
                                            r = this.or.v,
                                            s = this.os.v,
                                            a = 2 * Math.PI * r / (4 * e),
                                            n = .5 * -Math.PI,
                                            o = 3 === this.data.d ? -1 : 1;
                                        for (n += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                                            var h = r * Math.cos(n),
                                                l = r * Math.sin(n),
                                                p = 0 === h && 0 === l ? 0 : l / Math.sqrt(h * h + l * l),
                                                u = 0 === h && 0 === l ? 0 : -h / Math.sqrt(h * h + l * l);
                                            h += +this.p.v[0], l += +this.p.v[1], this.v.setTripleAt(h, l, h - p * a * s * o, l - u * a * s * o, h + p * a * s * o, l + u * a * s * o, t, !0), n += i * o
                                        }
                                        this.paths.length = 0, this.paths[0] = this.v
                                    }
                                }, extendPrototype([DynamicPropertyContainer], t), t
                            }(),
                            u = function() {
                                function t(t, e) {
                                    this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                                }
                                return t.prototype = {
                                    convertRectToPath: function() {
                                        var t = this.p.v[0],
                                            e = this.p.v[1],
                                            i = this.s.v[0] / 2,
                                            r = this.s.v[1] / 2,
                                            s = bmMin(i, r, this.r.v),
                                            a = s * (1 - roundCorner);
                                        this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + i, e - r + s, t + i, e - r + s, t + i, e - r + a, 0, !0), this.v.setTripleAt(t + i, e + r - s, t + i, e + r - a, t + i, e + r - s, 1, !0), 0 !== s ? (this.v.setTripleAt(t + i - s, e + r, t + i - s, e + r, t + i - a, e + r, 2, !0), this.v.setTripleAt(t - i + s, e + r, t - i + a, e + r, t - i + s, e + r, 3, !0), this.v.setTripleAt(t - i, e + r - s, t - i, e + r - s, t - i, e + r - a, 4, !0), this.v.setTripleAt(t - i, e - r + s, t - i, e - r + a, t - i, e - r + s, 5, !0), this.v.setTripleAt(t - i + s, e - r, t - i + s, e - r, t - i + a, e - r, 6, !0), this.v.setTripleAt(t + i - s, e - r, t + i - a, e - r, t + i - s, e - r, 7, !0)) : (this.v.setTripleAt(t - i, e + r, t - i + a, e + r, t - i, e + r, 2), this.v.setTripleAt(t - i, e - r, t - i, e - r + a, t - i, e - r, 3))) : (this.v.setTripleAt(t + i, e - r + s, t + i, e - r + a, t + i, e - r + s, 0, !0), 0 !== s ? (this.v.setTripleAt(t + i - s, e - r, t + i - s, e - r, t + i - a, e - r, 1, !0), this.v.setTripleAt(t - i + s, e - r, t - i + a, e - r, t - i + s, e - r, 2, !0), this.v.setTripleAt(t - i, e - r + s, t - i, e - r + s, t - i, e - r + a, 3, !0), this.v.setTripleAt(t - i, e + r - s, t - i, e + r - a, t - i, e + r - s, 4, !0), this.v.setTripleAt(t - i + s, e + r, t - i + s, e + r, t - i + a, e + r, 5, !0), this.v.setTripleAt(t + i - s, e + r, t + i - a, e + r, t + i - s, e + r, 6, !0), this.v.setTripleAt(t + i, e + r - s, t + i, e + r - s, t + i, e + r - a, 7, !0)) : (this.v.setTripleAt(t - i, e - r, t - i + a, e - r, t - i, e - r, 1, !0), this.v.setTripleAt(t - i, e + r, t - i, e + r - a, t - i, e + r, 2, !0), this.v.setTripleAt(t + i, e + r, t + i - a, e + r, t + i, e + r, 3, !0)))
                                    },
                                    getValue: function() {
                                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                                    },
                                    reset: r
                                }, extendPrototype([DynamicPropertyContainer], t), t
                            }();
                        return {
                            getShapeProp: function(t, e, i) {
                                var r;
                                return 3 === i || 4 === i ? r = (3 === i ? e.pt : e.ks).k.length ? new h(t, e, i) : new n(t, e, i) : 5 === i ? r = new u(t, e) : 6 === i ? r = new l(t, e) : 7 === i && (r = new p(t, e)), r.k && t.addDynamicProperty(r), r
                            },
                            getConstructorFunction: function() {
                                return n
                            },
                            getKeyframedConstructorFunction: function() {
                                return h
                            }
                        }
                    }(),
                    ShapeModifiers = (ob = {}, modifiers = {}, ob.registerModifier = function(t, e) {
                        modifiers[t] || (modifiers[t] = e)
                    }, ob.getModifier = function(t, e, i) {
                        return new modifiers[t](e, i)
                    }, ob),
                    ob, modifiers;

                function ShapeModifier() {}

                function TrimModifier() {}

                function RoundCornersModifier() {}

                function PuckerAndBloatModifier() {}

                function RepeaterModifier() {}

                function ShapeCollection() {
                    this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
                }

                function DashProperty(t, e, i, r) {
                    var s;
                    this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = i, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(r);
                    var a, n = e.length || 0;
                    for (s = 0; s < n; s += 1) a = PropertyFactory.getProp(t, e[s].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[s] = {
                        n: e[s].n,
                        p: a
                    };
                    this.k || this.getValue(!0), this._isAnimated = this.k
                }

                function GradientProperty(t, e, i) {
                    this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
                    var r = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
                    this.o = createTypedArray("float32", r), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = r, this.initDynamicPropertyContainer(i), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
                }
                ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t) {
                    if (!this.closed) {
                        t.sh.container.addDynamicProperty(t.sh);
                        var e = {
                            shape: t.sh,
                            data: t,
                            localShapeCollection: shapeCollectionPool.newShapeCollection()
                        };
                        this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
                    }
                }, ShapeModifier.prototype.init = function(t, e) {
                    this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                }, ShapeModifier.prototype.processKeys = function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
                }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
                    this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
                }, TrimModifier.prototype.addShapeToModifier = function(t) {
                    t.pathsData = []
                }, TrimModifier.prototype.calculateShapeEdges = function(t, e, i, r, s) {
                    var a = [];
                    e <= 1 ? a.push({
                        s: t,
                        e
                    }) : t >= 1 ? a.push({
                        s: t - 1,
                        e: e - 1
                    }) : (a.push({
                        s: t,
                        e: 1
                    }), a.push({
                        s: 0,
                        e: e - 1
                    }));
                    var n, o, h = [],
                        l = a.length;
                    for (n = 0; n < l; n += 1) {
                        var p, u;
                        (o = a[n]).e * s < r || o.s * s > r + i || (p = o.s * s <= r ? 0 : (o.s * s - r) / i, u = o.e * s >= r + i ? 1 : (o.e * s - r) / i, h.push([p, u]))
                    }
                    return h.length || h.push([0, 0]), h
                }, TrimModifier.prototype.releasePathsData = function(t) {
                    var e, i = t.length;
                    for (e = 0; e < i; e += 1) segmentsLengthPool.release(t[e]);
                    return t.length = 0, t
                }, TrimModifier.prototype.processShapes = function(t) {
                    var e, i, r, s;
                    if (this._mdf || t) {
                        var a = this.o.v % 360 / 360;
                        if (a < 0 && (a += 1), (e = this.s.v > 1 ? 1 + a : this.s.v < 0 ? 0 + a : this.s.v + a) > (i = this.e.v > 1 ? 1 + a : this.e.v < 0 ? 0 + a : this.e.v + a)) {
                            var n = e;
                            e = i, i = n
                        }
                        e = 1e-4 * Math.round(1e4 * e), i = 1e-4 * Math.round(1e4 * i), this.sValue = e, this.eValue = i
                    } else e = this.sValue, i = this.eValue;
                    var o, h, l, p, u, f = this.shapes.length,
                        c = 0;
                    if (i === e)
                        for (s = 0; s < f; s += 1) this.shapes[s].localShapeCollection.releaseShapes(), this.shapes[s].shape._mdf = !0, this.shapes[s].shape.paths = this.shapes[s].localShapeCollection, this._mdf && (this.shapes[s].pathsData.length = 0);
                    else if (1 === i && 0 === e || 0 === i && 1 === e) {
                        if (this._mdf)
                            for (s = 0; s < f; s += 1) this.shapes[s].pathsData.length = 0, this.shapes[s].shape._mdf = !0
                    } else {
                        var m, d, g = [];
                        for (s = 0; s < f; s += 1)
                            if ((m = this.shapes[s]).shape._mdf || this._mdf || t || 2 === this.m) {
                                if (h = (r = m.shape.paths)._length, u = 0, !m.shape._mdf && m.pathsData.length) u = m.totalShapeLength;
                                else {
                                    for (l = this.releasePathsData(m.pathsData), o = 0; o < h; o += 1) p = bez.getSegmentsLength(r.shapes[o]), l.push(p), u += p.totalLength;
                                    m.totalShapeLength = u, m.pathsData = l
                                }
                                c += u, m.shape._mdf = !0
                            } else m.shape.paths = m.localShapeCollection;
                        var y, v = e,
                            D = i,
                            E = 0;
                        for (s = f - 1; s >= 0; s -= 1)
                            if ((m = this.shapes[s]).shape._mdf) {
                                for ((d = m.localShapeCollection).releaseShapes(), 2 === this.m && f > 1 ? (y = this.calculateShapeEdges(e, i, m.totalShapeLength, E, c), E += m.totalShapeLength) : y = [
                                        [v, D]
                                    ], h = y.length, o = 0; o < h; o += 1) {
                                    v = y[o][0], D = y[o][1], g.length = 0, D <= 1 ? g.push({
                                        s: m.totalShapeLength * v,
                                        e: m.totalShapeLength * D
                                    }) : v >= 1 ? g.push({
                                        s: m.totalShapeLength * (v - 1),
                                        e: m.totalShapeLength * (D - 1)
                                    }) : (g.push({
                                        s: m.totalShapeLength * v,
                                        e: m.totalShapeLength
                                    }), g.push({
                                        s: 0,
                                        e: m.totalShapeLength * (D - 1)
                                    }));
                                    var b = this.addShapes(m, g[0]);
                                    if (g[0].s !== g[0].e) {
                                        if (g.length > 1)
                                            if (m.shape.paths.shapes[m.shape.paths._length - 1].c) {
                                                var C = b.pop();
                                                this.addPaths(b, d), b = this.addShapes(m, g[1], C)
                                            } else this.addPaths(b, d), b = this.addShapes(m, g[1]);
                                        this.addPaths(b, d)
                                    }
                                }
                                m.shape.paths = d
                            }
                    }
                }, TrimModifier.prototype.addPaths = function(t, e) {
                    var i, r = t.length;
                    for (i = 0; i < r; i += 1) e.addShape(t[i])
                }, TrimModifier.prototype.addSegment = function(t, e, i, r, s, a, n) {
                    s.setXYAt(e[0], e[1], "o", a), s.setXYAt(i[0], i[1], "i", a + 1), n && s.setXYAt(t[0], t[1], "v", a), s.setXYAt(r[0], r[1], "v", a + 1)
                }, TrimModifier.prototype.addSegmentFromArray = function(t, e, i, r) {
                    e.setXYAt(t[1], t[5], "o", i), e.setXYAt(t[2], t[6], "i", i + 1), r && e.setXYAt(t[0], t[4], "v", i), e.setXYAt(t[3], t[7], "v", i + 1)
                }, TrimModifier.prototype.addShapes = function(t, e, i) {
                    var r, s, a, n, o, h, l, p, u = t.pathsData,
                        f = t.shape.paths.shapes,
                        c = t.shape.paths._length,
                        m = 0,
                        d = [],
                        g = !0;
                    for (i ? (o = i._length, p = i._length) : (i = shapePool.newElement(), o = 0, p = 0), d.push(i), r = 0; r < c; r += 1) {
                        for (h = u[r].lengths, i.c = f[r].c, a = f[r].c ? h.length : h.length + 1, s = 1; s < a; s += 1)
                            if (m + (n = h[s - 1]).addedLength < e.s) m += n.addedLength, i.c = !1;
                            else {
                                if (m > e.e) {
                                    i.c = !1;
                                    break
                                }
                                e.s <= m && e.e >= m + n.addedLength ? (this.addSegment(f[r].v[s - 1], f[r].o[s - 1], f[r].i[s], f[r].v[s], i, o, g), g = !1) : (l = bez.getNewSegment(f[r].v[s - 1], f[r].v[s], f[r].o[s - 1], f[r].i[s], (e.s - m) / n.addedLength, (e.e - m) / n.addedLength, h[s - 1]), this.addSegmentFromArray(l, i, o, g), g = !1, i.c = !1), m += n.addedLength, o += 1
                            }
                        if (f[r].c && h.length) {
                            if (n = h[s - 1], m <= e.e) {
                                var y = h[s - 1].addedLength;
                                e.s <= m && e.e >= m + y ? (this.addSegment(f[r].v[s - 1], f[r].o[s - 1], f[r].i[0], f[r].v[0], i, o, g), g = !1) : (l = bez.getNewSegment(f[r].v[s - 1], f[r].v[0], f[r].o[s - 1], f[r].i[0], (e.s - m) / y, (e.e - m) / y, h[s - 1]), this.addSegmentFromArray(l, i, o, g), g = !1, i.c = !1)
                            } else i.c = !1;
                            m += n.addedLength, o += 1
                        }
                        if (i._length && (i.setXYAt(i.v[p][0], i.v[p][1], "i", p), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), m > e.e) break;
                        r < c - 1 && (i = shapePool.newElement(), g = !0, d.push(i), o = 0)
                    }
                    return d
                }, ShapeModifiers.registerModifier("tm", TrimModifier), extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
                    this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
                }, RoundCornersModifier.prototype.processPath = function(t, e) {
                    var i, r = shapePool.newElement();
                    r.c = t.c;
                    var s, a, n, o, h, l, p, u, f, c, m, d, g = t._length,
                        y = 0;
                    for (i = 0; i < g; i += 1) s = t.v[i], n = t.o[i], a = t.i[i], s[0] === n[0] && s[1] === n[1] && s[0] === a[0] && s[1] === a[1] ? 0 !== i && i !== g - 1 || t.c ? (o = 0 === i ? t.v[g - 1] : t.v[i - 1], l = (h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = m = s[0] + (o[0] - s[0]) * l, u = d = s[1] - (s[1] - o[1]) * l, f = p - (p - s[0]) * roundCorner, c = u - (u - s[1]) * roundCorner, r.setTripleAt(p, u, f, c, m, d, y), y += 1, o = i === g - 1 ? t.v[0] : t.v[i + 1], l = (h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = f = s[0] + (o[0] - s[0]) * l, u = c = s[1] + (o[1] - s[1]) * l, m = p - (p - s[0]) * roundCorner, d = u - (u - s[1]) * roundCorner, r.setTripleAt(p, u, f, c, m, d, y), y += 1) : (r.setTripleAt(s[0], s[1], n[0], n[1], a[0], a[1], y), y += 1) : (r.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], y), y += 1);
                    return r
                }, RoundCornersModifier.prototype.processShapes = function(t) {
                    var e, i, r, s, a, n, o = this.shapes.length,
                        h = this.rd.v;
                    if (0 !== h)
                        for (i = 0; i < o; i += 1) {
                            if (n = (a = this.shapes[i]).localShapeCollection, a.shape._mdf || this._mdf || t)
                                for (n.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, s = a.shape.paths._length, r = 0; r < s; r += 1) n.addShape(this.processPath(e[r], h));
                            a.shape.paths = a.localShapeCollection
                        }
                    this.dynamicProperties.length || (this._mdf = !1)
                }, ShapeModifiers.registerModifier("rd", RoundCornersModifier), extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
                    this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
                }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
                    var i = e / 100,
                        r = [0, 0],
                        s = t._length,
                        a = 0;
                    for (a = 0; a < s; a += 1) r[0] += t.v[a][0], r[1] += t.v[a][1];
                    r[0] /= s, r[1] /= s;
                    var n, o, h, l, p, u, f = shapePool.newElement();
                    for (f.c = t.c, a = 0; a < s; a += 1) n = t.v[a][0] + (r[0] - t.v[a][0]) * i, o = t.v[a][1] + (r[1] - t.v[a][1]) * i, h = t.o[a][0] + (r[0] - t.o[a][0]) * -i, l = t.o[a][1] + (r[1] - t.o[a][1]) * -i, p = t.i[a][0] + (r[0] - t.i[a][0]) * -i, u = t.i[a][1] + (r[1] - t.i[a][1]) * -i, f.setTripleAt(n, o, h, l, p, u, a);
                    return f
                }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
                    var e, i, r, s, a, n, o = this.shapes.length,
                        h = this.amount.v;
                    if (0 !== h)
                        for (i = 0; i < o; i += 1) {
                            if (n = (a = this.shapes[i]).localShapeCollection, a.shape._mdf || this._mdf || t)
                                for (n.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, s = a.shape.paths._length, r = 0; r < s; r += 1) n.addShape(this.processPath(e[r], h));
                            a.shape.paths = a.localShapeCollection
                        }
                    this.dynamicProperties.length || (this._mdf = !1)
                }, ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
                    this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
                }, RepeaterModifier.prototype.applyTransforms = function(t, e, i, r, s, a) {
                    var n = a ? -1 : 1,
                        o = r.s.v[0] + (1 - r.s.v[0]) * (1 - s),
                        h = r.s.v[1] + (1 - r.s.v[1]) * (1 - s);
                    t.translate(r.p.v[0] * n * s, r.p.v[1] * n * s, r.p.v[2]), e.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), e.rotate(-r.r.v * n * s), e.translate(r.a.v[0], r.a.v[1], r.a.v[2]), i.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), i.scale(a ? 1 / o : o, a ? 1 / h : h), i.translate(r.a.v[0], r.a.v[1], r.a.v[2])
                }, RepeaterModifier.prototype.init = function(t, e, i, r) {
                    for (this.elem = t, this.arr = e, this.pos = i, this.elemsData = r, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[i]); i > 0;) i -= 1, this._elements.unshift(e[i]);
                    this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                }, RepeaterModifier.prototype.resetElements = function(t) {
                    var e, i = t.length;
                    for (e = 0; e < i; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
                }, RepeaterModifier.prototype.cloneElements = function(t) {
                    var e = JSON.parse(JSON.stringify(t));
                    return this.resetElements(e), e
                }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
                    var i, r = t.length;
                    for (i = 0; i < r; i += 1) t[i]._render = e, "gr" === t[i].ty && this.changeGroupRender(t[i].it, e)
                }, RepeaterModifier.prototype.processShapes = function(t) {
                    var e, i, r, s, a, n = !1;
                    if (this._mdf || t) {
                        var o, h = Math.ceil(this.c.v);
                        if (this._groups.length < h) {
                            for (; this._groups.length < h;) {
                                var l = {
                                    it: this.cloneElements(this._elements),
                                    ty: "gr"
                                };
                                l.it.push({
                                    a: {
                                        a: 0,
                                        ix: 1,
                                        k: [0, 0]
                                    },
                                    nm: "Transform",
                                    o: {
                                        a: 0,
                                        ix: 7,
                                        k: 100
                                    },
                                    p: {
                                        a: 0,
                                        ix: 2,
                                        k: [0, 0]
                                    },
                                    r: {
                                        a: 1,
                                        ix: 6,
                                        k: [{
                                            s: 0,
                                            e: 0,
                                            t: 0
                                        }, {
                                            s: 0,
                                            e: 0,
                                            t: 1
                                        }]
                                    },
                                    s: {
                                        a: 0,
                                        ix: 3,
                                        k: [100, 100]
                                    },
                                    sa: {
                                        a: 0,
                                        ix: 5,
                                        k: 0
                                    },
                                    sk: {
                                        a: 0,
                                        ix: 4,
                                        k: 0
                                    },
                                    ty: "tr"
                                }), this.arr.splice(0, 0, l), this._groups.splice(0, 0, l), this._currentCopies += 1
                            }
                            this.elem.reloadShapes(), n = !0
                        }
                        for (a = 0, r = 0; r <= this._groups.length - 1; r += 1) {
                            if (o = a < h, this._groups[r]._render = o, this.changeGroupRender(this._groups[r].it, o), !o) {
                                var p = this.elemsData[r].it,
                                    u = p[p.length - 1];
                                0 !== u.transform.op.v ? (u.transform.op._mdf = !0, u.transform.op.v = 0) : u.transform.op._mdf = !1
                            }
                            a += 1
                        }
                        this._currentCopies = h;
                        var f = this.o.v,
                            c = f % 1,
                            m = f > 0 ? Math.floor(f) : Math.ceil(f),
                            d = this.pMatrix.props,
                            g = this.rMatrix.props,
                            y = this.sMatrix.props;
                        this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                        var v, D, E = 0;
                        if (f > 0) {
                            for (; E < m;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), E += 1;
                            c && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, c, !1), E += c)
                        } else if (f < 0) {
                            for (; E > m;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), E -= 1;
                            c && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -c, !0), E -= c)
                        }
                        for (r = 1 === this.data.m ? 0 : this._currentCopies - 1, s = 1 === this.data.m ? 1 : -1, a = this._currentCopies; a;) {
                            if (D = (i = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (r / (this._currentCopies - 1)), 0 !== E) {
                                for ((0 !== r && 1 === s || r !== this._currentCopies - 1 && -1 === s) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), this.matrix.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]), v = 0; v < D; v += 1) i[v] = this.matrix.props[v];
                                this.matrix.reset()
                            } else
                                for (this.matrix.reset(), v = 0; v < D; v += 1) i[v] = this.matrix.props[v];
                            E += 1, a -= 1, r += s
                        }
                    } else
                        for (a = this._currentCopies, r = 0, s = 1; a;) i = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, a -= 1, r += s;
                    return n
                }, RepeaterModifier.prototype.addShape = function() {}, ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeCollection.prototype.addShape = function(t) {
                    this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
                }, ShapeCollection.prototype.releaseShapes = function() {
                    var t;
                    for (t = 0; t < this._length; t += 1) shapePool.release(this.shapes[t]);
                    this._length = 0
                }, DashProperty.prototype.getValue = function(t) {
                    if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                        var e = 0,
                            i = this.dataProps.length;
                        for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < i; e += 1) "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
                    }
                }, extendPrototype([DynamicPropertyContainer], DashProperty), GradientProperty.prototype.comparePoints = function(t, e) {
                    for (var i = 0, r = this.o.length / 2; i < r;) {
                        if (Math.abs(t[4 * i] - t[4 * e + 2 * i]) > .01) return !1;
                        i += 1
                    }
                    return !0
                }, GradientProperty.prototype.checkCollapsable = function() {
                    if (this.o.length / 2 != this.c.length / 4) return !1;
                    if (this.data.k.k[0].s)
                        for (var t = 0, e = this.data.k.k.length; t < e;) {
                            if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                            t += 1
                        } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                    return !0
                }, GradientProperty.prototype.getValue = function(t) {
                    if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                        var e, i, r, s = 4 * this.data.p;
                        for (e = 0; e < s; e += 1) i = e % 4 == 0 ? 100 : 255, r = Math.round(this.prop.v[e] * i), this.c[e] !== r && (this.c[e] = r, this._cmdf = !t);
                        if (this.o.length)
                            for (s = this.prop.v.length, e = 4 * this.data.p; e < s; e += 1) i = e % 2 == 0 ? 100 : 1, r = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== r && (this.o[e - 4 * this.data.p] = r, this._omdf = !t);
                        this._mdf = !t
                    }
                }, extendPrototype([DynamicPropertyContainer], GradientProperty);
                var buildShapeString = function(t, e, i, r) {
                        if (0 === e) return "";
                        var s, a = t.o,
                            n = t.i,
                            o = t.v,
                            h = " M" + r.applyToPointStringified(o[0][0], o[0][1]);
                        for (s = 1; s < e; s += 1) h += " C" + r.applyToPointStringified(a[s - 1][0], a[s - 1][1]) + " " + r.applyToPointStringified(n[s][0], n[s][1]) + " " + r.applyToPointStringified(o[s][0], o[s][1]);
                        return i && e && (h += " C" + r.applyToPointStringified(a[s - 1][0], a[s - 1][1]) + " " + r.applyToPointStringified(n[0][0], n[0][1]) + " " + r.applyToPointStringified(o[0][0], o[0][1]), h += "z"), h
                    },
                    audioControllerFactory = function() {
                        function t(t) {
                            this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
                        }
                        return t.prototype = {
                                addAudio: function(t) {
                                    this.audios.push(t)
                                },
                                pause: function() {
                                    var t, e = this.audios.length;
                                    for (t = 0; t < e; t += 1) this.audios[t].pause()
                                },
                                resume: function() {
                                    var t, e = this.audios.length;
                                    for (t = 0; t < e; t += 1) this.audios[t].resume()
                                },
                                setRate: function(t) {
                                    var e, i = this.audios.length;
                                    for (e = 0; e < i; e += 1) this.audios[e].setRate(t)
                                },
                                createAudio: function(t) {
                                    return this.audioFactory ? this.audioFactory(t) : Howl ? new Howl({
                                        src: [t]
                                    }) : {
                                        isPlaying: !1,
                                        play: function() {
                                            this.isPlaying = !0
                                        },
                                        seek: function() {
                                            this.isPlaying = !1
                                        },
                                        playing: function() {},
                                        rate: function() {},
                                        setVolume: function() {}
                                    }
                                },
                                setAudioFactory: function(t) {
                                    this.audioFactory = t
                                },
                                setVolume: function(t) {
                                    this._volume = t, this._updateVolume()
                                },
                                mute: function() {
                                    this._isMuted = !0, this._updateVolume()
                                },
                                unmute: function() {
                                    this._isMuted = !1, this._updateVolume()
                                },
                                getVolume: function() {
                                    return this._volume
                                },
                                _updateVolume: function() {
                                    var t, e = this.audios.length;
                                    for (t = 0; t < e; t += 1) this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
                                }
                            },
                            function() {
                                return new t
                            }
                    }(),
                    ImagePreloader = function() {
                        var t = function() {
                            var t = createTag("canvas");
                            t.width = 1, t.height = 1;
                            var e = t.getContext("2d");
                            return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t
                        }();

                        function e() {
                            this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                        }

                        function i() {
                            this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                        }

                        function r(t, e, i) {
                            var r = "";
                            if (t.e) r = t.p;
                            else if (e) {
                                var s = t.p; - 1 !== s.indexOf("images/") && (s = s.split("/")[1]), r = e + s
                            } else r = i, r += t.u ? t.u : "", r += t.p;
                            return r
                        }

                        function s(t) {
                            var e = 0,
                                i = setInterval(function() {
                                    (t.getBBox().width || e > 500) && (this._imageLoaded(), clearInterval(i)), e += 1
                                }.bind(this), 50)
                        }

                        function a(t) {
                            var e = {
                                    assetData: t
                                },
                                i = r(t, this.assetsPath, this.path);
                            return assetLoader.load(i, function(t) {
                                e.img = t, this._footageLoaded()
                            }.bind(this), function() {
                                e.img = {}, this._footageLoaded()
                            }.bind(this)), e
                        }

                        function n() {
                            this._imageLoaded = e.bind(this), this._footageLoaded = i.bind(this), this.testImageLoaded = s.bind(this), this.createFootageData = a.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
                        }
                        return n.prototype = {
                            loadAssets: function(t, e) {
                                var i;
                                this.imagesLoadedCb = e;
                                var r = t.length;
                                for (i = 0; i < r; i += 1) t[i].layers || (t[i].t ? 3 === t[i].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t[i]))) : (this.totalImages += 1, this.images.push(this._createImageData(t[i]))))
                            },
                            setAssetsPath: function(t) {
                                this.assetsPath = t || ""
                            },
                            setPath: function(t) {
                                this.path = t || ""
                            },
                            loadedImages: function() {
                                return this.totalImages === this.loadedAssets
                            },
                            loadedFootages: function() {
                                return this.totalFootages === this.loadedFootagesCount
                            },
                            destroy: function() {
                                this.imagesLoadedCb = null, this.images.length = 0
                            },
                            getAsset: function(t) {
                                for (var e = 0, i = this.images.length; e < i;) {
                                    if (this.images[e].assetData === t) return this.images[e].img;
                                    e += 1
                                }
                                return null
                            },
                            createImgData: function(e) {
                                var i = r(e, this.assetsPath, this.path),
                                    s = createTag("img");
                                s.crossOrigin = "anonymous", s.addEventListener("load", this._imageLoaded, !1), s.addEventListener("error", function() {
                                    a.img = t, this._imageLoaded()
                                }.bind(this), !1), s.src = i;
                                var a = {
                                    img: s,
                                    assetData: e
                                };
                                return a
                            },
                            createImageData: function(e) {
                                var i = r(e, this.assetsPath, this.path),
                                    s = createNS("image");
                                isSafari ? this.testImageLoaded(s) : s.addEventListener("load", this._imageLoaded, !1), s.addEventListener("error", function() {
                                    a.img = t, this._imageLoaded()
                                }.bind(this), !1), s.setAttributeNS("http://www.w3.org/1999/xlink", "href", i), this._elementHelper.append ? this._elementHelper.append(s) : this._elementHelper.appendChild(s);
                                var a = {
                                    img: s,
                                    assetData: e
                                };
                                return a
                            },
                            imageLoaded: e,
                            footageLoaded: i,
                            setCacheType: function(t, e) {
                                "svg" === t ? (this._elementHelper = e, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
                            }
                        }, n
                    }(),
                    featureSupport = function() {
                        var t = {
                            maskType: !0
                        };
                        return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), t
                    }(),
                    filtersFactory = {
                        createFilter: function(t, e) {
                            var i = createNS("filter");
                            return i.setAttribute("id", t), !0 !== e && (i.setAttribute("filterUnits", "objectBoundingBox"), i.setAttribute("x", "0%"), i.setAttribute("y", "0%"), i.setAttribute("width", "100%"), i.setAttribute("height", "100%")), i
                        },
                        createAlphaToLuminanceFilter: function() {
                            var t = createNS("feColorMatrix");
                            return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
                        }
                    },
                    assetLoader = function() {
                        function t(t) {
                            return t.response && "object" == typeof t.response ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
                        }
                        return {
                            load: function(e, i, r) {
                                var s, a = new XMLHttpRequest;
                                try {
                                    a.responseType = "json"
                                } catch (t) {}
                                a.onreadystatechange = function() {
                                    if (4 === a.readyState)
                                        if (200 === a.status) s = t(a), i(s);
                                        else try {
                                            s = t(a), i(s)
                                        } catch (t) {
                                            r && r(t)
                                        }
                                }, a.open("GET", e, !0), a.send()
                            }
                        }
                    }();

                function TextAnimatorProperty(t, e, i) {
                    this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = i, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                        alignment: {}
                    }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(i)
                }

                function TextAnimatorDataProperty(t, e, i) {
                    var r = {
                            propType: !1
                        },
                        s = PropertyFactory.getProp,
                        a = e.a;
                    this.a = {
                        r: a.r ? s(t, a.r, 0, degToRads, i) : r,
                        rx: a.rx ? s(t, a.rx, 0, degToRads, i) : r,
                        ry: a.ry ? s(t, a.ry, 0, degToRads, i) : r,
                        sk: a.sk ? s(t, a.sk, 0, degToRads, i) : r,
                        sa: a.sa ? s(t, a.sa, 0, degToRads, i) : r,
                        s: a.s ? s(t, a.s, 1, .01, i) : r,
                        a: a.a ? s(t, a.a, 1, 0, i) : r,
                        o: a.o ? s(t, a.o, 0, .01, i) : r,
                        p: a.p ? s(t, a.p, 1, 0, i) : r,
                        sw: a.sw ? s(t, a.sw, 0, 0, i) : r,
                        sc: a.sc ? s(t, a.sc, 1, 0, i) : r,
                        fc: a.fc ? s(t, a.fc, 1, 0, i) : r,
                        fh: a.fh ? s(t, a.fh, 0, 0, i) : r,
                        fs: a.fs ? s(t, a.fs, 0, .01, i) : r,
                        fb: a.fb ? s(t, a.fb, 0, .01, i) : r,
                        t: a.t ? s(t, a.t, 0, 0, i) : r
                    }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, i), this.s.t = e.s.t
                }

                function LetterProps(t, e, i, r, s, a) {
                    this.o = t, this.sw = e, this.sc = i, this.fc = r, this.m = s, this.p = a, this._mdf = {
                        o: !0,
                        sw: !!e,
                        sc: !!i,
                        fc: !!r,
                        m: !0,
                        p: !0
                    }
                }

                function TextProperty(t, e) {
                    this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                        ascent: 0,
                        boxWidth: this.defaultBoxWidth,
                        f: "",
                        fStyle: "",
                        fWeight: "",
                        fc: "",
                        j: "",
                        justifyOffset: "",
                        l: [],
                        lh: 0,
                        lineWidths: [],
                        ls: "",
                        of: "",
                        s: "",
                        sc: "",
                        sw: 0,
                        t: 0,
                        tr: 0,
                        sz: 0,
                        ps: null,
                        fillColorAnim: !1,
                        strokeColorAnim: !1,
                        strokeWidthAnim: !1,
                        yOffset: 0,
                        finalSize: 0,
                        finalText: [],
                        finalLineHeight: 0,
                        __complete: !1
                    }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
                }
                TextAnimatorProperty.prototype.searchProperties = function() {
                    var t, e, i = this._textData.a.length,
                        r = PropertyFactory.getProp;
                    for (t = 0; t < i; t += 1) e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
                    this._textData.p && "m" in this._textData.p ? (this._pathData = {
                        f: r(this._elem, this._textData.p.f, 0, 0, this),
                        l: r(this._elem, this._textData.p.l, 0, 0, this),
                        r: this._textData.p.r,
                        m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                    }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = r(this._elem, this._textData.m.a, 1, 0, this)
                }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
                    if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
                        this._isFirstFrame = !1;
                        var i, r, s, a, n, o, h, l, p, u, f, c, m, d, g, y, v, D, E, b = this._moreOptions.alignment.v,
                            C = this._animatorsData,
                            x = this._textData,
                            S = this.mHelper,
                            P = this._renderType,
                            F = this.renderedLetters.length,
                            A = t.l;
                        if (this._hasMaskedPath) {
                            if (E = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                                var _, T = E.v;
                                for (this._pathData.r && (T = T.reverse()), n = {
                                        tLength: 0,
                                        segments: []
                                    }, a = T._length - 1, y = 0, s = 0; s < a; s += 1) _ = bez.buildBezierData(T.v[s], T.v[s + 1], [T.o[s][0] - T.v[s][0], T.o[s][1] - T.v[s][1]], [T.i[s + 1][0] - T.v[s + 1][0], T.i[s + 1][1] - T.v[s + 1][1]]), n.tLength += _.segmentLength, n.segments.push(_), y += _.segmentLength;
                                s = a, E.v.c && (_ = bez.buildBezierData(T.v[s], T.v[0], [T.o[s][0] - T.v[s][0], T.o[s][1] - T.v[s][1]], [T.i[0][0] - T.v[0][0], T.i[0][1] - T.v[0][1]]), n.tLength += _.segmentLength, n.segments.push(_), y += _.segmentLength), this._pathData.pi = n
                            }
                            if (n = this._pathData.pi, o = this._pathData.f.v, f = 0, u = 1, l = 0, p = !0, d = n.segments, o < 0 && E.v.c)
                                for (n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength), u = (m = d[f = d.length - 1].points).length - 1; o < 0;) o += m[u].partialLength, (u -= 1) < 0 && (u = (m = d[f -= 1].points).length - 1);
                            c = (m = d[f].points)[u - 1], g = (h = m[u]).partialLength
                        }
                        a = A.length, i = 0, r = 0;
                        var k, M, w, I, B, V = 1.2 * t.finalSize * .714,
                            R = !0;
                        w = C.length;
                        var L, N, G, z, O, H, $, j, q, W, Y, X, U = -1,
                            K = o,
                            Z = f,
                            J = u,
                            Q = -1,
                            tt = "",
                            et = this.defaultPropsArray;
                        if (2 === t.j || 1 === t.j) {
                            var it = 0,
                                rt = 0,
                                st = 2 === t.j ? -.5 : -1,
                                at = 0,
                                nt = !0;
                            for (s = 0; s < a; s += 1)
                                if (A[s].n) {
                                    for (it && (it += rt); at < s;) A[at].animatorJustifyOffset = it, at += 1;
                                    it = 0, nt = !0
                                } else {
                                    for (M = 0; M < w; M += 1)(k = C[M].a).t.propType && (nt && 2 === t.j && (rt += k.t.v * st), (B = C[M].s.getMult(A[s].anIndexes[M], x.a[M].s.totalChars)).length ? it += k.t.v * B[0] * st : it += k.t.v * B * st);
                                    nt = !1
                                }
                            for (it && (it += rt); at < s;) A[at].animatorJustifyOffset = it, at += 1
                        }
                        for (s = 0; s < a; s += 1) {
                            if (S.reset(), z = 1, A[s].n) i = 0, r += t.yOffset, r += R ? 1 : 0, o = K, R = !1, this._hasMaskedPath && (u = J, c = (m = d[f = Z].points)[u - 1], g = (h = m[u]).partialLength, l = 0), tt = "", Y = "", q = "", X = "", et = this.defaultPropsArray;
                            else {
                                if (this._hasMaskedPath) {
                                    if (Q !== A[s].line) {
                                        switch (t.j) {
                                            case 1:
                                                o += y - t.lineWidths[A[s].line];
                                                break;
                                            case 2:
                                                o += (y - t.lineWidths[A[s].line]) / 2
                                        }
                                        Q = A[s].line
                                    }
                                    U !== A[s].ind && (A[U] && (o += A[U].extra), o += A[s].an / 2, U = A[s].ind), o += b[0] * A[s].an * .005;
                                    var ot = 0;
                                    for (M = 0; M < w; M += 1)(k = C[M].a).p.propType && ((B = C[M].s.getMult(A[s].anIndexes[M], x.a[M].s.totalChars)).length ? ot += k.p.v[0] * B[0] : ot += k.p.v[0] * B), k.a.propType && ((B = C[M].s.getMult(A[s].anIndexes[M], x.a[M].s.totalChars)).length ? ot += k.a.v[0] * B[0] : ot += k.a.v[0] * B);
                                    for (p = !0; p;) l + g >= o + ot || !m ? (v = (o + ot - l) / h.partialLength, N = c.point[0] + (h.point[0] - c.point[0]) * v, G = c.point[1] + (h.point[1] - c.point[1]) * v, S.translate(-b[0] * A[s].an * .005, -b[1] * V * .01), p = !1) : m && (l += h.partialLength, (u += 1) >= m.length && (u = 0, d[f += 1] ? m = d[f].points : E.v.c ? (u = 0, m = d[f = 0].points) : (l -= h.partialLength, m = null)), m && (c = h, g = (h = m[u]).partialLength));
                                    L = A[s].an / 2 - A[s].add, S.translate(-L, 0, 0)
                                } else L = A[s].an / 2 - A[s].add, S.translate(-L, 0, 0), S.translate(-b[0] * A[s].an * .005, -b[1] * V * .01, 0);
                                for (M = 0; M < w; M += 1)(k = C[M].a).t.propType && (B = C[M].s.getMult(A[s].anIndexes[M], x.a[M].s.totalChars), 0 === i && 0 === t.j || (this._hasMaskedPath ? B.length ? o += k.t.v * B[0] : o += k.t.v * B : B.length ? i += k.t.v * B[0] : i += k.t.v * B));
                                for (t.strokeWidthAnim && (H = t.sw || 0), t.strokeColorAnim && (O = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && ($ = [t.fc[0], t.fc[1], t.fc[2]]), M = 0; M < w; M += 1)(k = C[M].a).a.propType && ((B = C[M].s.getMult(A[s].anIndexes[M], x.a[M].s.totalChars)).length ? S.translate(-k.a.v[0] * B[0], -k.a.v[1] * B[1], k.a.v[2] * B[2]) : S.translate(-k.a.v[0] * B, -k.a.v[1] * B, k.a.v[2] * B));
                                for (M = 0; M < w; M += 1)(k = C[M].a).s.propType && ((B = C[M].s.getMult(A[s].anIndexes[M], x.a[M].s.totalChars)).length ? S.scale(1 + (k.s.v[0] - 1) * B[0], 1 + (k.s.v[1] - 1) * B[1], 1) : S.scale(1 + (k.s.v[0] - 1) * B, 1 + (k.s.v[1] - 1) * B, 1));
                                for (M = 0; M < w; M += 1) {
                                    if (k = C[M].a, B = C[M].s.getMult(A[s].anIndexes[M], x.a[M].s.totalChars), k.sk.propType && (B.length ? S.skewFromAxis(-k.sk.v * B[0], k.sa.v * B[1]) : S.skewFromAxis(-k.sk.v * B, k.sa.v * B)), k.r.propType && (B.length ? S.rotateZ(-k.r.v * B[2]) : S.rotateZ(-k.r.v * B)), k.ry.propType && (B.length ? S.rotateY(k.ry.v * B[1]) : S.rotateY(k.ry.v * B)), k.rx.propType && (B.length ? S.rotateX(k.rx.v * B[0]) : S.rotateX(k.rx.v * B)), k.o.propType && (B.length ? z += (k.o.v * B[0] - z) * B[0] : z += (k.o.v * B - z) * B), t.strokeWidthAnim && k.sw.propType && (B.length ? H += k.sw.v * B[0] : H += k.sw.v * B), t.strokeColorAnim && k.sc.propType)
                                        for (j = 0; j < 3; j += 1) B.length ? O[j] += (k.sc.v[j] - O[j]) * B[0] : O[j] += (k.sc.v[j] - O[j]) * B;
                                    if (t.fillColorAnim && t.fc) {
                                        if (k.fc.propType)
                                            for (j = 0; j < 3; j += 1) B.length ? $[j] += (k.fc.v[j] - $[j]) * B[0] : $[j] += (k.fc.v[j] - $[j]) * B;
                                        k.fh.propType && ($ = B.length ? addHueToRGB($, k.fh.v * B[0]) : addHueToRGB($, k.fh.v * B)), k.fs.propType && ($ = B.length ? addSaturationToRGB($, k.fs.v * B[0]) : addSaturationToRGB($, k.fs.v * B)), k.fb.propType && ($ = B.length ? addBrightnessToRGB($, k.fb.v * B[0]) : addBrightnessToRGB($, k.fb.v * B))
                                    }
                                }
                                for (M = 0; M < w; M += 1)(k = C[M].a).p.propType && (B = C[M].s.getMult(A[s].anIndexes[M], x.a[M].s.totalChars), this._hasMaskedPath ? B.length ? S.translate(0, k.p.v[1] * B[0], -k.p.v[2] * B[1]) : S.translate(0, k.p.v[1] * B, -k.p.v[2] * B) : B.length ? S.translate(k.p.v[0] * B[0], k.p.v[1] * B[1], -k.p.v[2] * B[2]) : S.translate(k.p.v[0] * B, k.p.v[1] * B, -k.p.v[2] * B));
                                if (t.strokeWidthAnim && (q = H < 0 ? 0 : H), t.strokeColorAnim && (W = "rgb(" + Math.round(255 * O[0]) + "," + Math.round(255 * O[1]) + "," + Math.round(255 * O[2]) + ")"), t.fillColorAnim && t.fc && (Y = "rgb(" + Math.round(255 * $[0]) + "," + Math.round(255 * $[1]) + "," + Math.round(255 * $[2]) + ")"), this._hasMaskedPath) {
                                    if (S.translate(0, -t.ls), S.translate(0, b[1] * V * .01 + r, 0), x.p.p) {
                                        D = (h.point[1] - c.point[1]) / (h.point[0] - c.point[0]);
                                        var ht = 180 * Math.atan(D) / Math.PI;
                                        h.point[0] < c.point[0] && (ht += 180), S.rotate(-ht * Math.PI / 180)
                                    }
                                    S.translate(N, G, 0), o -= b[0] * A[s].an * .005, A[s + 1] && U !== A[s + 1].ind && (o += A[s].an / 2, o += .001 * t.tr * t.finalSize)
                                } else {
                                    switch (S.translate(i, r, 0), t.ps && S.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                                        case 1:
                                            S.translate(A[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[A[s].line]), 0, 0);
                                            break;
                                        case 2:
                                            S.translate(A[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[A[s].line]) / 2, 0, 0)
                                    }
                                    S.translate(0, -t.ls), S.translate(L, 0, 0), S.translate(b[0] * A[s].an * .005, b[1] * V * .01, 0), i += A[s].l + .001 * t.tr * t.finalSize
                                }
                                "html" === P ? tt = S.toCSS() : "svg" === P ? tt = S.to2dCSS() : et = [S.props[0], S.props[1], S.props[2], S.props[3], S.props[4], S.props[5], S.props[6], S.props[7], S.props[8], S.props[9], S.props[10], S.props[11], S.props[12], S.props[13], S.props[14], S.props[15]], X = z
                            }
                            F <= s ? (I = new LetterProps(X, q, W, Y, tt, et), this.renderedLetters.push(I), F += 1, this.lettersChangedFlag = !0) : (I = this.renderedLetters[s], this.lettersChangedFlag = I.update(X, q, W, Y, tt, et) || this.lettersChangedFlag)
                        }
                    }
                }, TextAnimatorProperty.prototype.getValue = function() {
                    this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
                }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), LetterProps.prototype.update = function(t, e, i, r, s, a) {
                    this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
                    var n = !1;
                    return this.o !== t && (this.o = t, this._mdf.o = !0, n = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, n = !0), this.sc !== i && (this.sc = i, this._mdf.sc = !0, n = !0), this.fc !== r && (this.fc = r, this._mdf.fc = !0, n = !0), this.m !== s && (this.m = s, this._mdf.m = !0, n = !0), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, this._mdf.p = !0, n = !0), n
                }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }, TextProperty.prototype.setCurrentData = function(t) {
                    t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
                }, TextProperty.prototype.searchProperty = function() {
                    return this.searchKeyframes()
                }, TextProperty.prototype.searchKeyframes = function() {
                    return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
                }, TextProperty.prototype.addEffect = function(t) {
                    this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
                }, TextProperty.prototype.getValue = function(t) {
                    if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
                        this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                        var e = this.currentData,
                            i = this.keysIndex;
                        if (this.lock) this.setCurrentData(this.currentData);
                        else {
                            var r;
                            this.lock = !0, this._mdf = !1;
                            var s = this.effectsSequence.length,
                                a = t || this.data.d.k[this.keysIndex].s;
                            for (r = 0; r < s; r += 1) a = i !== this.keysIndex ? this.effectsSequence[r](a, a.t) : this.effectsSequence[r](this.currentData, a.t);
                            e !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
                        }
                    }
                }, TextProperty.prototype.getKeyframeValue = function() {
                    for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, r = t.length; i <= r - 1 && !(i === r - 1 || t[i + 1].t > e);) i += 1;
                    return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s
                }, TextProperty.prototype.buildFinalText = function(t) {
                    for (var e, i = FontManager.getCombinedCharacterCodes(), r = [], s = 0, a = t.length; s < a;) e = t.charCodeAt(s), -1 !== i.indexOf(e) ? r[r.length - 1] += t.charAt(s) : e >= 55296 && e <= 56319 && (e = t.charCodeAt(s + 1)) >= 56320 && e <= 57343 ? (r.push(t.substr(s, 2)), s += 1) : r.push(t.charAt(s)), s += 1;
                    return r
                }, TextProperty.prototype.completeTextData = function(t) {
                    t.__complete = !0;
                    var e, i, r, s, a, n, o, h = this.elem.globalData.fontManager,
                        l = this.data,
                        p = [],
                        u = 0,
                        f = l.m.g,
                        c = 0,
                        m = 0,
                        d = 0,
                        g = [],
                        y = 0,
                        v = 0,
                        D = h.getFontByName(t.f),
                        E = 0,
                        b = getFontProperties(D);
                    t.fWeight = b.weight, t.fStyle = b.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), i = t.finalText.length, t.finalLineHeight = t.lh;
                    var C, x = t.tr / 1e3 * t.finalSize;
                    if (t.sz)
                        for (var S, P, F = !0, A = t.sz[0], _ = t.sz[1]; F;) {
                            S = 0, y = 0, i = (P = this.buildFinalText(t.t)).length, x = t.tr / 1e3 * t.finalSize;
                            var T = -1;
                            for (e = 0; e < i; e += 1) C = P[e].charCodeAt(0), r = !1, " " === P[e] ? T = e : 13 !== C && 3 !== C || (y = 0, r = !0, S += t.finalLineHeight || 1.2 * t.finalSize), h.chars ? (o = h.getCharData(P[e], D.fStyle, D.fFamily), E = r ? 0 : o.w * t.finalSize / 100) : E = h.measureText(P[e], t.f, t.finalSize), y + E > A && " " !== P[e] ? (-1 === T ? i += 1 : e = T, S += t.finalLineHeight || 1.2 * t.finalSize, P.splice(e, T === e ? 1 : 0, "\r"), T = -1, y = 0) : (y += E, y += x);
                            S += D.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && _ < S ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = P, i = t.finalText.length, F = !1)
                        }
                    y = -x, E = 0;
                    var k, M = 0;
                    for (e = 0; e < i; e += 1)
                        if (r = !1, 13 === (C = (k = t.finalText[e]).charCodeAt(0)) || 3 === C ? (M = 0, g.push(y), v = y > v ? y : v, y = -2 * x, s = "", r = !0, d += 1) : s = k, h.chars ? (o = h.getCharData(k, D.fStyle, h.getFontByName(t.f).fFamily), E = r ? 0 : o.w * t.finalSize / 100) : E = h.measureText(s, t.f, t.finalSize), " " === k ? M += E + x : (y += E + x + M, M = 0), p.push({
                                l: E,
                                an: E,
                                add: c,
                                n: r,
                                anIndexes: [],
                                val: s,
                                line: d,
                                animatorJustifyOffset: 0
                            }), 2 == f) {
                            if (c += E, "" === s || " " === s || e === i - 1) {
                                for ("" !== s && " " !== s || (c -= E); m <= e;) p[m].an = c, p[m].ind = u, p[m].extra = E, m += 1;
                                u += 1, c = 0
                            }
                        } else if (3 == f) {
                        if (c += E, "" === s || e === i - 1) {
                            for ("" === s && (c -= E); m <= e;) p[m].an = c, p[m].ind = u, p[m].extra = E, m += 1;
                            c = 0, u += 1
                        }
                    } else p[u].ind = u, p[u].extra = 0, u += 1;
                    if (t.l = p, v = y > v ? y : v, g.push(y), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
                    else switch (t.boxWidth = v, t.j) {
                        case 1:
                            t.justifyOffset = -t.boxWidth;
                            break;
                        case 2:
                            t.justifyOffset = -t.boxWidth / 2;
                            break;
                        default:
                            t.justifyOffset = 0
                    }
                    t.lineWidths = g;
                    var w, I, B, V, R = l.a;
                    n = R.length;
                    var L = [];
                    for (a = 0; a < n; a += 1) {
                        for ((w = R[a]).a.sc && (t.strokeColorAnim = !0), w.a.sw && (t.strokeWidthAnim = !0), (w.a.fc || w.a.fh || w.a.fs || w.a.fb) && (t.fillColorAnim = !0), V = 0, B = w.s.b, e = 0; e < i; e += 1)(I = p[e]).anIndexes[a] = V, (1 == B && "" !== I.val || 2 == B && "" !== I.val && " " !== I.val || 3 == B && (I.n || " " == I.val || e == i - 1) || 4 == B && (I.n || e == i - 1)) && (1 === w.s.rn && L.push(V), V += 1);
                        l.a[a].s.totalChars = V;
                        var N, G = -1;
                        if (1 === w.s.rn)
                            for (e = 0; e < i; e += 1) G != (I = p[e]).anIndexes[a] && (G = I.anIndexes[a], N = L.splice(Math.floor(Math.random() * L.length), 1)[0]), I.anIndexes[a] = N
                    }
                    t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = D.ascent * t.finalSize / 100
                }, TextProperty.prototype.updateDocumentData = function(t, e) {
                    e = void 0 === e ? this.keysIndex : e;
                    var i = this.copyData({}, this.data.d.k[e].s);
                    i = this.copyData(i, t), this.data.d.k[e].s = i, this.recalculate(e), this.elem.addDynamicProperty(this)
                }, TextProperty.prototype.recalculate = function(t) {
                    var e = this.data.d.k[t].s;
                    e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
                }, TextProperty.prototype.canResizeFont = function(t) {
                    this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                }, TextProperty.prototype.setMinimumFontSize = function(t) {
                    this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                };
                var TextSelectorProp = function() {
                        var t = Math.max,
                            e = Math.min,
                            i = Math.floor;

                        function r(t, e) {
                            this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || {
                                k: 0
                            }, 0, 0, this), this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
                                v: 100
                            }, this.o = PropertyFactory.getProp(t, e.o || {
                                k: 0
                            }, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || {
                                k: 0
                            }, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || {
                                k: 0
                            }, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
                        }
                        return r.prototype = {
                            getMult: function(r) {
                                this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                                var s = 0,
                                    a = 0,
                                    n = 1,
                                    o = 1;
                                this.ne.v > 0 ? s = this.ne.v / 100 : a = -this.ne.v / 100, this.xe.v > 0 ? n = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
                                var h = BezierFactory.getBezierEasing(s, a, n, o).get,
                                    l = 0,
                                    p = this.finalS,
                                    u = this.finalE,
                                    f = this.data.sh;
                                if (2 === f) l = h(l = u === p ? r >= u ? 1 : 0 : t(0, e(.5 / (u - p) + (r - p) / (u - p), 1)));
                                else if (3 === f) l = h(l = u === p ? r >= u ? 0 : 1 : 1 - t(0, e(.5 / (u - p) + (r - p) / (u - p), 1)));
                                else if (4 === f) u === p ? l = 0 : (l = t(0, e(.5 / (u - p) + (r - p) / (u - p), 1))) < .5 ? l *= 2 : l = 1 - 2 * (l - .5), l = h(l);
                                else if (5 === f) {
                                    if (u === p) l = 0;
                                    else {
                                        var c = u - p,
                                            m = -c / 2 + (r = e(t(0, r + .5 - p), u - p)),
                                            d = c / 2;
                                        l = Math.sqrt(1 - m * m / (d * d))
                                    }
                                    l = h(l)
                                } else 6 === f ? (u === p ? l = 0 : (r = e(t(0, r + .5 - p), u - p), l = (1 + Math.cos(Math.PI + 2 * Math.PI * r / (u - p))) / 2), l = h(l)) : (r >= i(p) && (l = t(0, e(r - p < 0 ? e(u, 1) - (p - r) : u - r, 1))), l = h(l));
                                return l * this.a.v
                            },
                            getValue: function(t) {
                                this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                                var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                                    i = this.o.v / e,
                                    r = this.s.v / e + i,
                                    s = this.e.v / e + i;
                                if (r > s) {
                                    var a = r;
                                    r = s, s = a
                                }
                                this.finalS = r, this.finalE = s
                            }
                        }, extendPrototype([DynamicPropertyContainer], r), {
                            getTextSelectorProp: function(t, e, i) {
                                return new r(t, e, i)
                            }
                        }
                    }(),
                    poolFactory = function(t, e, i) {
                        var r = 0,
                            s = t,
                            a = createSizedArray(s);
                        return {
                            newElement: function() {
                                return r ? a[r -= 1] : e()
                            },
                            release: function(t) {
                                r === s && (a = pooling.double(a), s *= 2), i && i(t), a[r] = t, r += 1
                            }
                        }
                    },
                    pooling = {
                        double: function(t) {
                            return t.concat(createSizedArray(t.length))
                        }
                    },
                    pointPool = poolFactory(8, (function() {
                        return createTypedArray("float32", 2)
                    })),
                    shapePool = (factory = poolFactory(4, (function() {
                        return new ShapePath
                    }), (function(t) {
                        var e, i = t._length;
                        for (e = 0; e < i; e += 1) pointPool.release(t.v[e]), pointPool.release(t.i[e]), pointPool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
                        t._length = 0, t.c = !1
                    })), factory.clone = function(t) {
                        var e, i = factory.newElement(),
                            r = void 0 === t._length ? t.v.length : t._length;
                        for (i.setLength(r), i.c = t.c, e = 0; e < r; e += 1) i.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
                        return i
                    }, factory),
                    factory, shapeCollectionPool = function() {
                        var t = {
                                newShapeCollection: function() {
                                    return e ? r[e -= 1] : new ShapeCollection
                                },
                                release: function(t) {
                                    var s, a = t._length;
                                    for (s = 0; s < a; s += 1) shapePool.release(t.shapes[s]);
                                    t._length = 0, e === i && (r = pooling.double(r), i *= 2), r[e] = t, e += 1
                                }
                            },
                            e = 0,
                            i = 4,
                            r = createSizedArray(i);
                        return t
                    }(),
                    segmentsLengthPool = poolFactory(8, (function() {
                        return {
                            lengths: [],
                            totalLength: 0
                        }
                    }), (function(t) {
                        var e, i = t.lengths.length;
                        for (e = 0; e < i; e += 1) bezierLengthPool.release(t.lengths[e]);
                        t.lengths.length = 0
                    })),
                    bezierLengthPool = poolFactory(8, (function() {
                        return {
                            addedLength: 0,
                            percents: createTypedArray("float32", defaultCurveSegments),
                            lengths: createTypedArray("float32", defaultCurveSegments)
                        }
                    })),
                    markerParser = function() {
                        function t(t) {
                            for (var e, i = t.split("\r\n"), r = {}, s = 0, a = 0; a < i.length; a += 1) 2 === (e = i[a].split(":")).length && (r[e[0]] = e[1].trim(), s += 1);
                            if (0 === s) throw new Error;
                            return r
                        }
                        return function(e) {
                            for (var i = [], r = 0; r < e.length; r += 1) {
                                var s = e[r],
                                    a = {
                                        time: s.tm,
                                        duration: s.dr
                                    };
                                try {
                                    a.payload = JSON.parse(e[r].cm)
                                } catch (i) {
                                    try {
                                        a.payload = t(e[r].cm)
                                    } catch (t) {
                                        a.payload = {
                                            name: e[r]
                                        }
                                    }
                                }
                                i.push(a)
                            }
                            return i
                        }
                    }();

                function BaseRenderer() {}

                function SVGRenderer(t, e) {
                    this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
                    var i = "";
                    if (e && e.title) {
                        var r = createNS("title"),
                            s = createElementID();
                        r.setAttribute("id", s), r.textContent = e.title, this.svgElement.appendChild(r), i += s
                    }
                    if (e && e.description) {
                        var a = createNS("desc"),
                            n = createElementID();
                        a.setAttribute("id", n), a.textContent = e.description, this.svgElement.appendChild(a), i += " " + n
                    }
                    i && this.svgElement.setAttribute("aria-labelledby", i);
                    var o = createNS("defs");
                    this.svgElement.appendChild(o);
                    var h = createNS("g");
                    this.svgElement.appendChild(h), this.layerElement = h, this.renderConfig = {
                        preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                        progressiveLoad: e && e.progressiveLoad || !1,
                        hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                        viewBoxOnly: e && e.viewBoxOnly || !1,
                        viewBoxSize: e && e.viewBoxSize || !1,
                        className: e && e.className || "",
                        id: e && e.id || "",
                        focusable: e && e.focusable,
                        filterSize: {
                            width: e && e.filterSize && e.filterSize.width || "100%",
                            height: e && e.filterSize && e.filterSize.height || "100%",
                            x: e && e.filterSize && e.filterSize.x || "0%",
                            y: e && e.filterSize && e.filterSize.y || "0%"
                        }
                    }, this.globalData = {
                        _mdf: !1,
                        frameNum: -1,
                        defs: o,
                        renderConfig: this.renderConfig
                    }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
                }

                function CanvasRenderer(t, e) {
                    this.animationItem = t, this.renderConfig = {
                        clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                        context: e && e.context || null,
                        progressiveLoad: e && e.progressiveLoad || !1,
                        preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                        className: e && e.className || "",
                        id: e && e.id || ""
                    }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                        frameNum: -1,
                        _mdf: !1,
                        renderConfig: this.renderConfig,
                        currentGlobalAlpha: -1
                    }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas"
                }

                function HybridRenderer(t, e) {
                    this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                        className: e && e.className || "",
                        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                        hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                        filterSize: {
                            width: e && e.filterSize && e.filterSize.width || "400%",
                            height: e && e.filterSize && e.filterSize.height || "400%",
                            x: e && e.filterSize && e.filterSize.x || "-100%",
                            y: e && e.filterSize && e.filterSize.y || "-100%"
                        }
                    }, this.globalData = {
                        _mdf: !1,
                        frameNum: -1,
                        renderConfig: this.renderConfig
                    }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
                }

                function MaskElement(t, e, i) {
                    this.data = t, this.element = e, this.globalData = i, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
                    var r, s, a = this.globalData.defs,
                        n = this.masksProperties ? this.masksProperties.length : 0;
                    this.viewData = createSizedArray(n), this.solidPath = "";
                    var o, h, l, p, u, f, c = this.masksProperties,
                        m = 0,
                        d = [],
                        g = createElementID(),
                        y = "clipPath",
                        v = "clip-path";
                    for (r = 0; r < n; r += 1)
                        if (("a" !== c[r].mode && "n" !== c[r].mode || c[r].inv || 100 !== c[r].o.k || c[r].o.x) && (y = "mask", v = "mask"), "s" !== c[r].mode && "i" !== c[r].mode || 0 !== m ? l = null : ((l = createNS("rect")).setAttribute("fill", "#ffffff"), l.setAttribute("width", this.element.comp.data.w || 0), l.setAttribute("height", this.element.comp.data.h || 0), d.push(l)), s = createNS("path"), "n" === c[r].mode) this.viewData[r] = {
                            op: PropertyFactory.getProp(this.element, c[r].o, 0, .01, this.element),
                            prop: ShapePropertyFactory.getShapeProp(this.element, c[r], 3),
                            elem: s,
                            lastPath: ""
                        }, a.appendChild(s);
                        else {
                            var D;
                            if (m += 1, s.setAttribute("fill", "s" === c[r].mode ? "#000000" : "#ffffff"), s.setAttribute("clip-rule", "nonzero"), 0 !== c[r].x.k ? (y = "mask", v = "mask", f = PropertyFactory.getProp(this.element, c[r].x, 0, null, this.element), D = createElementID(), (p = createNS("filter")).setAttribute("id", D), (u = createNS("feMorphology")).setAttribute("operator", "erode"), u.setAttribute("in", "SourceGraphic"), u.setAttribute("radius", "0"), p.appendChild(u), a.appendChild(p), s.setAttribute("stroke", "s" === c[r].mode ? "#000000" : "#ffffff")) : (u = null, f = null), this.storedData[r] = {
                                    elem: s,
                                    x: f,
                                    expan: u,
                                    lastPath: "",
                                    lastOperator: "",
                                    filterId: D,
                                    lastRadius: 0
                                }, "i" === c[r].mode) {
                                h = d.length;
                                var E = createNS("g");
                                for (o = 0; o < h; o += 1) E.appendChild(d[o]);
                                var b = createNS("mask");
                                b.setAttribute("mask-type", "alpha"), b.setAttribute("id", g + "_" + m), b.appendChild(s), a.appendChild(b), E.setAttribute("mask", "url(" + locationHref + "#" + g + "_" + m + ")"), d.length = 0, d.push(E)
                            } else d.push(s);
                            c[r].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[r] = {
                                elem: s,
                                lastPath: "",
                                op: PropertyFactory.getProp(this.element, c[r].o, 0, .01, this.element),
                                prop: ShapePropertyFactory.getShapeProp(this.element, c[r], 3),
                                invRect: l
                            }, this.viewData[r].prop.k || this.drawPath(c[r], this.viewData[r].prop.v, this.viewData[r])
                        }
                    for (this.maskElement = createNS(y), n = d.length, r = 0; r < n; r += 1) this.maskElement.appendChild(d[r]);
                    m > 0 && (this.maskElement.setAttribute("id", g), this.element.maskedElement.setAttribute(v, "url(" + locationHref + "#" + g + ")"), a.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
                }

                function HierarchyElement() {}

                function FrameElement() {}

                function TransformElement() {}

                function RenderableElement() {}

                function RenderableDOMElement() {}

                function ProcessedElement(t, e) {
                    this.elem = t, this.pos = e
                }

                function SVGStyleData(t, e) {
                    this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null
                }

                function SVGShapeData(t, e, i) {
                    this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = i, this.lvl = e, this._isAnimated = !!i.k;
                    for (var r = 0, s = t.length; r < s;) {
                        if (t[r].mProps.dynamicProperties.length) {
                            this._isAnimated = !0;
                            break
                        }
                        r += 1
                    }
                }

                function SVGTransformData(t, e, i) {
                    this.transform = {
                        mProps: t,
                        op: e,
                        container: i
                    }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
                }

                function SVGStrokeStyleData(t, e, i) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i, this._isAnimated = !!this._isAnimated
                }

                function SVGFillStyleData(t, e, i) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i
                }

                function SVGGradientFillStyleData(t, e, i) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, i)
                }

                function SVGGradientStrokeStyleData(t, e, i) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, i), this._isAnimated = !!this._isAnimated
                }

                function ShapeGroupData() {
                    this.it = [], this.prevViewData = [], this.gr = createNS("g")
                }
                BaseRenderer.prototype.checkLayers = function(t) {
                    var e, i, r = this.layers.length;
                    for (this.completeLayers = !0, e = r - 1; e >= 0; e -= 1) this.elements[e] || (i = this.layers[e]).ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
                    this.checkPendingElements()
                }, BaseRenderer.prototype.createItem = function(t) {
                    switch (t.ty) {
                        case 2:
                            return this.createImage(t);
                        case 0:
                            return this.createComp(t);
                        case 1:
                            return this.createSolid(t);
                        case 3:
                            return this.createNull(t);
                        case 4:
                            return this.createShape(t);
                        case 5:
                            return this.createText(t);
                        case 6:
                            return this.createAudio(t);
                        case 13:
                            return this.createCamera(t);
                        case 15:
                            return this.createFootage(t);
                        default:
                            return this.createNull(t)
                    }
                }, BaseRenderer.prototype.createCamera = function() {
                    throw new Error("You're using a 3d camera. Try the html renderer.")
                }, BaseRenderer.prototype.createAudio = function(t) {
                    return new AudioElement(t, this.globalData, this)
                }, BaseRenderer.prototype.createFootage = function(t) {
                    return new FootageElement(t, this.globalData, this)
                }, BaseRenderer.prototype.buildAllItems = function() {
                    var t, e = this.layers.length;
                    for (t = 0; t < e; t += 1) this.buildItem(t);
                    this.checkPendingElements()
                }, BaseRenderer.prototype.includeLayers = function(t) {
                    var e;
                    this.completeLayers = !1;
                    var i, r = t.length,
                        s = this.layers.length;
                    for (e = 0; e < r; e += 1)
                        for (i = 0; i < s;) {
                            if (this.layers[i].id === t[e].id) {
                                this.layers[i] = t[e];
                                break
                            }
                            i += 1
                        }
                }, BaseRenderer.prototype.setProjectInterface = function(t) {
                    this.globalData.projectInterface = t
                }, BaseRenderer.prototype.initItems = function() {
                    this.globalData.progressiveLoad || this.buildAllItems()
                }, BaseRenderer.prototype.buildElementParenting = function(t, e, i) {
                    for (var r = this.elements, s = this.layers, a = 0, n = s.length; a < n;) s[a].ind == e && (r[a] && !0 !== r[a] ? (i.push(r[a]), r[a].setAsParent(), void 0 !== s[a].parent ? this.buildElementParenting(t, s[a].parent, i) : t.setHierarchy(i)) : (this.buildItem(a), this.addPendingElement(t))), a += 1
                }, BaseRenderer.prototype.addPendingElement = function(t) {
                    this.pendingElements.push(t)
                }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
                    var e, i = t.length;
                    for (e = 0; e < i; e += 1)
                        if (t[e].xt) {
                            var r = this.createComp(t[e]);
                            r.initExpressions(), this.globalData.projectInterface.registerComposition(r)
                        }
                }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
                    this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
                        w: t.w,
                        h: t.h
                    }
                }, extendPrototype([BaseRenderer], SVGRenderer), SVGRenderer.prototype.createNull = function(t) {
                    return new NullElement(t, this.globalData, this)
                }, SVGRenderer.prototype.createShape = function(t) {
                    return new SVGShapeElement(t, this.globalData, this)
                }, SVGRenderer.prototype.createText = function(t) {
                    return new SVGTextLottieElement(t, this.globalData, this)
                }, SVGRenderer.prototype.createImage = function(t) {
                    return new IImageElement(t, this.globalData, this)
                }, SVGRenderer.prototype.createComp = function(t) {
                    return new SVGCompElement(t, this.globalData, this)
                }, SVGRenderer.prototype.createSolid = function(t) {
                    return new ISolidElement(t, this.globalData, this)
                }, SVGRenderer.prototype.configAnimation = function(t) {
                    this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)"), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
                    var e = this.globalData.defs;
                    this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
                    var i = createNS("clipPath"),
                        r = createNS("rect");
                    r.setAttribute("width", t.w), r.setAttribute("height", t.h), r.setAttribute("x", 0), r.setAttribute("y", 0);
                    var s = createElementID();
                    i.setAttribute("id", s), i.appendChild(r), this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + s + ")"), e.appendChild(i), this.layers = t.layers, this.elements = createSizedArray(t.layers.length)
                }, SVGRenderer.prototype.destroy = function() {
                    var t;
                    this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
                    var e = this.layers ? this.layers.length : 0;
                    for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy();
                    this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                }, SVGRenderer.prototype.updateContainerSize = function() {}, SVGRenderer.prototype.buildItem = function(t) {
                    var e = this.elements;
                    if (!e[t] && 99 !== this.layers[t].ty) {
                        e[t] = !0;
                        var i = this.createItem(this.layers[t]);
                        e[t] = i, expressionsPlugin && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(i), i.initExpressions()), this.appendElementInPos(i, t), this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? i.setMatte(e[t - 1].layerId) : (this.buildItem(t - 1), this.addPendingElement(i)))
                    }
                }, SVGRenderer.prototype.checkPendingElements = function() {
                    for (; this.pendingElements.length;) {
                        var t = this.pendingElements.pop();
                        if (t.checkParenting(), t.data.tt)
                            for (var e = 0, i = this.elements.length; e < i;) {
                                if (this.elements[e] === t) {
                                    t.setMatte(this.elements[e - 1].layerId);
                                    break
                                }
                                e += 1
                            }
                    }
                }, SVGRenderer.prototype.renderFrame = function(t) {
                    if (this.renderedFrame !== t && !this.destroyed) {
                        var e;
                        null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                        var i = this.layers.length;
                        for (this.completeLayers || this.checkLayers(t), e = i - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                        if (this.globalData._mdf)
                            for (e = 0; e < i; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
                    }
                }, SVGRenderer.prototype.appendElementInPos = function(t, e) {
                    var i = t.getBaseElement();
                    if (i) {
                        for (var r, s = 0; s < e;) this.elements[s] && !0 !== this.elements[s] && this.elements[s].getBaseElement() && (r = this.elements[s].getBaseElement()), s += 1;
                        r ? this.layerElement.insertBefore(i, r) : this.layerElement.appendChild(i)
                    }
                }, SVGRenderer.prototype.hide = function() {
                    this.layerElement.style.display = "none"
                }, SVGRenderer.prototype.show = function() {
                    this.layerElement.style.display = "block"
                }, extendPrototype([BaseRenderer], CanvasRenderer), CanvasRenderer.prototype.createShape = function(t) {
                    return new CVShapeElement(t, this.globalData, this)
                }, CanvasRenderer.prototype.createText = function(t) {
                    return new CVTextElement(t, this.globalData, this)
                }, CanvasRenderer.prototype.createImage = function(t) {
                    return new CVImageElement(t, this.globalData, this)
                }, CanvasRenderer.prototype.createComp = function(t) {
                    return new CVCompElement(t, this.globalData, this)
                }, CanvasRenderer.prototype.createSolid = function(t) {
                    return new CVSolidElement(t, this.globalData, this)
                }, CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRenderer.prototype.ctxTransform = function(t) {
                    if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13])
                        if (this.renderConfig.clearCanvas) {
                            this.transformMat.cloneFromProps(t);
                            var e = this.contextData.cTr.props;
                            this.transformMat.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props);
                            var i = this.contextData.cTr.props;
                            this.canvasContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13])
                        } else this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
                }, CanvasRenderer.prototype.ctxOpacity = function(t) {
                    if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= t < 0 ? 0 : t, void(this.globalData.currentGlobalAlpha = this.contextData.cO);
                    this.contextData.cO *= t < 0 ? 0 : t, this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO, this.globalData.currentGlobalAlpha = this.contextData.cO)
                }, CanvasRenderer.prototype.reset = function() {
                    this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
                }, CanvasRenderer.prototype.save = function(t) {
                    if (this.renderConfig.clearCanvas) {
                        t && this.canvasContext.save();
                        var e, i = this.contextData.cTr.props;
                        this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();
                        var r = this.contextData.saved[this.contextData.cArrPos];
                        for (e = 0; e < 16; e += 1) r[e] = i[e];
                        this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1
                    } else this.canvasContext.save()
                }, CanvasRenderer.prototype.restore = function(t) {
                    if (this.renderConfig.clearCanvas) {
                        t && (this.canvasContext.restore(), this.globalData.blendMode = "source-over"), this.contextData.cArrPos -= 1;
                        var e, i = this.contextData.saved[this.contextData.cArrPos],
                            r = this.contextData.cTr.props;
                        for (e = 0; e < 16; e += 1) r[e] = i[e];
                        this.canvasContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]), i = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = i, this.globalData.currentGlobalAlpha !== i && (this.canvasContext.globalAlpha = i, this.globalData.currentGlobalAlpha = i)
                    } else this.canvasContext.restore()
                }, CanvasRenderer.prototype.configAnimation = function(t) {
                    if (this.animationItem.wrapper) {
                        this.animationItem.container = createTag("canvas");
                        var e = this.animationItem.container.style;
                        e.width = "100%", e.height = "100%";
                        var i = "0px 0px 0px";
                        e.transformOrigin = i, e.mozTransformOrigin = i, e.webkitTransformOrigin = i, e["-webkit-transform"] = i, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
                    } else this.canvasContext = this.renderConfig.context;
                    this.data = t, this.layers = t.layers, this.transformCanvas = {
                        w: t.w,
                        h: t.h,
                        sx: 0,
                        sy: 0,
                        tx: 0,
                        ty: 0
                    }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize()
                }, CanvasRenderer.prototype.updateContainerSize = function() {
                    var t, e, i, r;
                    if (this.reset(), this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr), this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr, e = this.canvasContext.canvas.height * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
                        var s = this.renderConfig.preserveAspectRatio.split(" "),
                            a = s[1] || "meet",
                            n = s[0] || "xMidYMid",
                            o = n.substr(0, 4),
                            h = n.substr(4);
                        i = t / e, (r = this.transformCanvas.w / this.transformCanvas.h) > i && "meet" === a || r < i && "slice" === a ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === o && (r < i && "meet" === a || r > i && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o && (r < i && "meet" === a || r > i && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === h && (r > i && "meet" === a || r < i && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === h && (r > i && "meet" === a || r < i && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0
                    } else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
                    this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
                }, CanvasRenderer.prototype.destroy = function() {
                    var t;
                    for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
                    this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
                }, CanvasRenderer.prototype.renderFrame = function(t, e) {
                    if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
                        var i;
                        this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
                        var r = this.layers.length;
                        for (this.completeLayers || this.checkLayers(t), i = 0; i < r; i += 1)(this.completeLayers || this.elements[i]) && this.elements[i].prepareFrame(t - this.layers[i].st);
                        if (this.globalData._mdf) {
                            for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), i = r - 1; i >= 0; i -= 1)(this.completeLayers || this.elements[i]) && this.elements[i].renderFrame();
                            !0 !== this.renderConfig.clearCanvas && this.restore()
                        }
                    }
                }, CanvasRenderer.prototype.buildItem = function(t) {
                    var e = this.elements;
                    if (!e[t] && 99 !== this.layers[t].ty) {
                        var i = this.createItem(this.layers[t], this, this.globalData);
                        e[t] = i, i.initExpressions()
                    }
                }, CanvasRenderer.prototype.checkPendingElements = function() {
                    for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
                }, CanvasRenderer.prototype.hide = function() {
                    this.animationItem.container.style.display = "none"
                }, CanvasRenderer.prototype.show = function() {
                    this.animationItem.container.style.display = "block"
                }, extendPrototype([BaseRenderer], HybridRenderer), HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRenderer.prototype.checkPendingElements = function() {
                    for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
                }, HybridRenderer.prototype.appendElementInPos = function(t, e) {
                    var i = t.getBaseElement();
                    if (i) {
                        var r = this.layers[e];
                        if (r.ddd && this.supports3d) this.addTo3dContainer(i, e);
                        else if (this.threeDElements) this.addTo3dContainer(i, e);
                        else {
                            for (var s, a, n = 0; n < e;) this.elements[n] && !0 !== this.elements[n] && this.elements[n].getBaseElement && (a = this.elements[n], s = (this.layers[n].ddd ? this.getThreeDContainerByPos(n) : a.getBaseElement()) || s), n += 1;
                            s ? r.ddd && this.supports3d || this.layerElement.insertBefore(i, s) : r.ddd && this.supports3d || this.layerElement.appendChild(i)
                        }
                    }
                }, HybridRenderer.prototype.createShape = function(t) {
                    return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this)
                }, HybridRenderer.prototype.createText = function(t) {
                    return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this)
                }, HybridRenderer.prototype.createCamera = function(t) {
                    return this.camera = new HCameraElement(t, this.globalData, this), this.camera
                }, HybridRenderer.prototype.createImage = function(t) {
                    return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this)
                }, HybridRenderer.prototype.createComp = function(t) {
                    return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
                }, HybridRenderer.prototype.createSolid = function(t) {
                    return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this)
                }, HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull, HybridRenderer.prototype.getThreeDContainerByPos = function(t) {
                    for (var e = 0, i = this.threeDElements.length; e < i;) {
                        if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
                        e += 1
                    }
                    return null
                }, HybridRenderer.prototype.createThreeDContainer = function(t, e) {
                    var i, r, s = createTag("div");
                    styleDiv(s);
                    var a = createTag("div");
                    if (styleDiv(a), "3d" === e) {
                        (i = s.style).width = this.globalData.compSize.w + "px", i.height = this.globalData.compSize.h + "px";
                        var n = "50% 50%";
                        i.webkitTransformOrigin = n, i.mozTransformOrigin = n, i.transformOrigin = n;
                        var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                        (r = a.style).transform = o, r.webkitTransform = o
                    }
                    s.appendChild(a);
                    var h = {
                        container: a,
                        perspectiveElem: s,
                        startPos: t,
                        endPos: t,
                        type: e
                    };
                    return this.threeDElements.push(h), h
                }, HybridRenderer.prototype.build3dContainers = function() {
                    var t, e, i = this.layers.length,
                        r = "";
                    for (t = 0; t < i; t += 1) this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== r && (r = "3d", e = this.createThreeDContainer(t, "3d")), e.endPos = Math.max(e.endPos, t)) : ("2d" !== r && (r = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t));
                    for (t = (i = this.threeDElements.length) - 1; t >= 0; t -= 1) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
                }, HybridRenderer.prototype.addTo3dContainer = function(t, e) {
                    for (var i = 0, r = this.threeDElements.length; i < r;) {
                        if (e <= this.threeDElements[i].endPos) {
                            for (var s, a = this.threeDElements[i].startPos; a < e;) this.elements[a] && this.elements[a].getBaseElement && (s = this.elements[a].getBaseElement()), a += 1;
                            s ? this.threeDElements[i].container.insertBefore(t, s) : this.threeDElements[i].container.appendChild(t);
                            break
                        }
                        i += 1
                    }
                }, HybridRenderer.prototype.configAnimation = function(t) {
                    var e = createTag("div"),
                        i = this.animationItem.wrapper,
                        r = e.style;
                    r.width = t.w + "px", r.height = t.h + "px", this.resizerElem = e, styleDiv(e), r.transformStyle = "flat", r.mozTransformStyle = "flat", r.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), i.appendChild(e), r.overflow = "hidden";
                    var s = createNS("svg");
                    s.setAttribute("width", "1"), s.setAttribute("height", "1"), styleDiv(s), this.resizerElem.appendChild(s);
                    var a = createNS("defs");
                    s.appendChild(a), this.data = t, this.setupGlobalData(t, s), this.globalData.defs = a, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
                }, HybridRenderer.prototype.destroy = function() {
                    var t;
                    this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
                    var e = this.layers ? this.layers.length : 0;
                    for (t = 0; t < e; t += 1) this.elements[t].destroy();
                    this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                }, HybridRenderer.prototype.updateContainerSize = function() {
                    var t, e, i, r, s = this.animationItem.wrapper.offsetWidth,
                        a = this.animationItem.wrapper.offsetHeight,
                        n = s / a;
                    this.globalData.compSize.w / this.globalData.compSize.h > n ? (t = s / this.globalData.compSize.w, e = s / this.globalData.compSize.w, i = 0, r = (a - this.globalData.compSize.h * (s / this.globalData.compSize.w)) / 2) : (t = a / this.globalData.compSize.h, e = a / this.globalData.compSize.h, i = (s - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, r = 0);
                    var o = this.resizerElem.style;
                    o.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + i + "," + r + ",0,1)", o.transform = o.webkitTransform
                }, HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRenderer.prototype.hide = function() {
                    this.resizerElem.style.display = "none"
                }, HybridRenderer.prototype.show = function() {
                    this.resizerElem.style.display = "block"
                }, HybridRenderer.prototype.initItems = function() {
                    if (this.buildAllItems(), this.camera) this.camera.setup();
                    else {
                        var t, e = this.globalData.compSize.w,
                            i = this.globalData.compSize.h,
                            r = this.threeDElements.length;
                        for (t = 0; t < r; t += 1) {
                            var s = this.threeDElements[t].perspectiveElem.style;
                            s.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2)) + "px", s.perspective = s.webkitPerspective
                        }
                    }
                }, HybridRenderer.prototype.searchExtraCompositions = function(t) {
                    var e, i = t.length,
                        r = createTag("div");
                    for (e = 0; e < i; e += 1)
                        if (t[e].xt) {
                            var s = this.createComp(t[e], r, this.globalData.comp, null);
                            s.initExpressions(), this.globalData.projectInterface.registerComposition(s)
                        }
                }, MaskElement.prototype.getMaskProperty = function(t) {
                    return this.viewData[t].prop
                }, MaskElement.prototype.renderFrame = function(t) {
                    var e, i = this.element.finalTransform.mat,
                        r = this.masksProperties.length;
                    for (e = 0; e < r; e += 1)
                        if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", i.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                            var s = this.storedData[e].expan;
                            this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + locationHref + "#" + this.storedData[e].filterId + ")")), s.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
                        }
                }, MaskElement.prototype.getMaskelement = function() {
                    return this.maskElement
                }, MaskElement.prototype.createLayerSolidPath = function() {
                    var t = "M0,0 ";
                    return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, (t += " h-" + this.globalData.compSize.w) + " v-" + this.globalData.compSize.h + " "
                }, MaskElement.prototype.drawPath = function(t, e, i) {
                    var r, s, a = " M" + e.v[0][0] + "," + e.v[0][1];
                    for (s = e._length, r = 1; r < s; r += 1) a += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[r][0] + "," + e.i[r][1] + " " + e.v[r][0] + "," + e.v[r][1];
                    if (e.c && s > 1 && (a += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), i.lastPath !== a) {
                        var n = "";
                        i.elem && (e.c && (n = t.inv ? this.solidPath + a : a), i.elem.setAttribute("d", n)), i.lastPath = a
                    }
                }, MaskElement.prototype.destroy = function() {
                    this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
                }, HierarchyElement.prototype = {
                    initHierarchy: function() {
                        this.hierarchy = [], this._isParent = !1, this.checkParenting()
                    },
                    setHierarchy: function(t) {
                        this.hierarchy = t
                    },
                    setAsParent: function() {
                        this._isParent = !0
                    },
                    checkParenting: function() {
                        void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
                    }
                }, FrameElement.prototype = {
                    initFrame: function() {
                        this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
                    },
                    prepareProperties: function(t, e) {
                        var i, r = this.dynamicProperties.length;
                        for (i = 0; i < r; i += 1)(e || this._isParent && "transform" === this.dynamicProperties[i].propType) && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
                    },
                    addDynamicProperty: function(t) {
                        -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
                    }
                }, TransformElement.prototype = {
                    initTransform: function() {
                        this.finalTransform = {
                            mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                                o: 0
                            },
                            _matMdf: !1,
                            _opMdf: !1,
                            mat: new Matrix
                        }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
                    },
                    renderTransform: function() {
                        if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                            var t, e = this.finalTransform.mat,
                                i = 0,
                                r = this.hierarchy.length;
                            if (!this.finalTransform._matMdf)
                                for (; i < r;) {
                                    if (this.hierarchy[i].finalTransform.mProp._mdf) {
                                        this.finalTransform._matMdf = !0;
                                        break
                                    }
                                    i += 1
                                }
                            if (this.finalTransform._matMdf)
                                for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), i = 0; i < r; i += 1) t = this.hierarchy[i].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
                        }
                    },
                    globalToLocal: function(t) {
                        var e = [];
                        e.push(this.finalTransform);
                        for (var i, r = !0, s = this.comp; r;) s.finalTransform ? (s.data.hasMask && e.splice(0, 0, s.finalTransform), s = s.comp) : r = !1;
                        var a, n = e.length;
                        for (i = 0; i < n; i += 1) a = e[i].mat.applyToPointArray(0, 0, 0), t = [t[0] - a[0], t[1] - a[1], 0];
                        return t
                    },
                    mHelper: new Matrix
                }, RenderableElement.prototype = {
                    initRenderable: function() {
                        this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
                    },
                    addRenderableComponent: function(t) {
                        -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
                    },
                    removeRenderableComponent: function(t) {
                        -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
                    },
                    prepareRenderableFrame: function(t) {
                        this.checkLayerLimits(t)
                    },
                    checkTransparency: function() {
                        this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
                    },
                    checkLayerLimits: function(t) {
                        this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
                    },
                    renderRenderable: function() {
                        var t, e = this.renderableComponents.length;
                        for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
                    },
                    sourceRectAtTime: function() {
                        return {
                            top: 0,
                            left: 0,
                            width: 100,
                            height: 100
                        }
                    },
                    getLayerSize: function() {
                        return 5 === this.data.ty ? {
                            w: this.data.textData.width,
                            h: this.data.textData.height
                        } : {
                            w: this.data.width,
                            h: this.data.height
                        }
                    }
                }, extendPrototype([RenderableElement, createProxyFunction({
                    initElement: function(t, e, i) {
                        this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
                    },
                    hide: function() {
                        this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
                    },
                    show: function() {
                        this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
                    },
                    renderFrame: function() {
                        this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                    },
                    renderInnerContent: function() {},
                    prepareFrame: function(t) {
                        this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
                    },
                    destroy: function() {
                        this.innerElem = null, this.destroyBaseElement()
                    }
                })], RenderableDOMElement), SVGStyleData.prototype.reset = function() {
                    this.d = "", this._mdf = !1
                }, SVGShapeData.prototype.setAsAnimated = function() {
                    this._isAnimated = !0
                }, extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, i) {
                    this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
                        k: 0
                    }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {
                        k: 0
                    }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = i, this.stops = [], this.setGradientData(i.pElem, e), this.setGradientOpacity(e, i), this._isAnimated = !!this._isAnimated
                }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
                    var i = createElementID(),
                        r = createNS(1 === e.t ? "linearGradient" : "radialGradient");
                    r.setAttribute("id", i), r.setAttribute("spreadMethod", "pad"), r.setAttribute("gradientUnits", "userSpaceOnUse");
                    var s, a, n, o = [];
                    for (n = 4 * e.g.p, a = 0; a < n; a += 4) s = createNS("stop"), r.appendChild(s), o.push(s);
                    t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + locationHref + "#" + i + ")"), this.gf = r, this.cst = o
                }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
                    if (this.g._hasOpacity && !this.g._collapsable) {
                        var i, r, s, a = createNS("mask"),
                            n = createNS("path");
                        a.appendChild(n);
                        var o = createElementID(),
                            h = createElementID();
                        a.setAttribute("id", h);
                        var l = createNS(1 === t.t ? "linearGradient" : "radialGradient");
                        l.setAttribute("id", o), l.setAttribute("spreadMethod", "pad"), l.setAttribute("gradientUnits", "userSpaceOnUse"), s = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                        var p = this.stops;
                        for (r = 4 * t.g.p; r < s; r += 2)(i = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), l.appendChild(i), p.push(i);
                        n.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + locationHref + "#" + o + ")"), this.of = l, this.ms = a, this.ost = p, this.maskId = h, e.msElem = n
                    }
                }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
                var SVGElementsRenderer = function() {
                    var t = new Matrix,
                        e = new Matrix;

                    function i(t, e, i) {
                        (i || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (i || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
                    }

                    function r(i, r, s) {
                        var a, n, o, h, l, p, u, f, c, m, d, g = r.styles.length,
                            y = r.lvl;
                        for (p = 0; p < g; p += 1) {
                            if (h = r.sh._mdf || s, r.styles[p].lvl < y) {
                                for (f = e.reset(), m = y - r.styles[p].lvl, d = r.transformers.length - 1; !h && m > 0;) h = r.transformers[d].mProps._mdf || h, m -= 1, d -= 1;
                                if (h)
                                    for (m = y - r.styles[p].lvl, d = r.transformers.length - 1; m > 0;) c = r.transformers[d].mProps.v.props, f.transform(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15]), m -= 1, d -= 1
                            } else f = t;
                            if (n = (u = r.sh.paths)._length, h) {
                                for (o = "", a = 0; a < n; a += 1)(l = u.shapes[a]) && l._length && (o += buildShapeString(l, l._length, l.c, f));
                                r.caches[p] = o
                            } else o = r.caches[p];
                            r.styles[p].d += !0 === i.hd ? "" : o, r.styles[p]._mdf = h || r.styles[p]._mdf
                        }
                    }

                    function s(t, e, i) {
                        var r = e.style;
                        (e.c._mdf || i) && r.pElem.setAttribute("fill", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i) && r.pElem.setAttribute("fill-opacity", e.o.v)
                    }

                    function a(t, e, i) {
                        n(t, e, i), o(0, e, i)
                    }

                    function n(t, e, i) {
                        var r, s, a, n, o, h = e.gf,
                            l = e.g._hasOpacity,
                            p = e.s.v,
                            u = e.e.v;
                        if (e.o._mdf || i) {
                            var f = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                            e.style.pElem.setAttribute(f, e.o.v)
                        }
                        if (e.s._mdf || i) {
                            var c = 1 === t.t ? "x1" : "cx",
                                m = "x1" === c ? "y1" : "cy";
                            h.setAttribute(c, p[0]), h.setAttribute(m, p[1]), l && !e.g._collapsable && (e.of.setAttribute(c, p[0]), e.of.setAttribute(m, p[1]))
                        }
                        if (e.g._cmdf || i) {
                            r = e.cst;
                            var d = e.g.c;
                            for (a = r.length, s = 0; s < a; s += 1)(n = r[s]).setAttribute("offset", d[4 * s] + "%"), n.setAttribute("stop-color", "rgb(" + d[4 * s + 1] + "," + d[4 * s + 2] + "," + d[4 * s + 3] + ")")
                        }
                        if (l && (e.g._omdf || i)) {
                            var g = e.g.o;
                            for (a = (r = e.g._collapsable ? e.cst : e.ost).length, s = 0; s < a; s += 1) n = r[s], e.g._collapsable || n.setAttribute("offset", g[2 * s] + "%"), n.setAttribute("stop-opacity", g[2 * s + 1])
                        }
                        if (1 === t.t)(e.e._mdf || i) && (h.setAttribute("x2", u[0]), h.setAttribute("y2", u[1]), l && !e.g._collapsable && (e.of.setAttribute("x2", u[0]), e.of.setAttribute("y2", u[1])));
                        else if ((e.s._mdf || e.e._mdf || i) && (o = Math.sqrt(Math.pow(p[0] - u[0], 2) + Math.pow(p[1] - u[1], 2)), h.setAttribute("r", o), l && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || i) {
                            o || (o = Math.sqrt(Math.pow(p[0] - u[0], 2) + Math.pow(p[1] - u[1], 2)));
                            var y = Math.atan2(u[1] - p[1], u[0] - p[0]),
                                v = e.h.v;
                            v >= 1 ? v = .99 : v <= -1 && (v = -.99);
                            var D = o * v,
                                E = Math.cos(y + e.a.v) * D + p[0],
                                b = Math.sin(y + e.a.v) * D + p[1];
                            h.setAttribute("fx", E), h.setAttribute("fy", b), l && !e.g._collapsable && (e.of.setAttribute("fx", E), e.of.setAttribute("fy", b))
                        }
                    }

                    function o(t, e, i) {
                        var r = e.style,
                            s = e.d;
                        s && (s._mdf || i) && s.dashStr && (r.pElem.setAttribute("stroke-dasharray", s.dashStr), r.pElem.setAttribute("stroke-dashoffset", s.dashoffset[0])), e.c && (e.c._mdf || i) && r.pElem.setAttribute("stroke", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i) && r.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || i) && (r.pElem.setAttribute("stroke-width", e.w.v), r.msElem && r.msElem.setAttribute("stroke-width", e.w.v))
                    }
                    return {
                        createRenderFunction: function(t) {
                            switch (t.ty) {
                                case "fl":
                                    return s;
                                case "gf":
                                    return n;
                                case "gs":
                                    return a;
                                case "st":
                                    return o;
                                case "sh":
                                case "el":
                                case "rc":
                                case "sr":
                                    return r;
                                case "tr":
                                    return i;
                                default:
                                    return null
                            }
                        }
                    }
                }();

                function ShapeTransformManager() {
                    this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
                }

                function CVShapeData(t, e, i, r) {
                    this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
                    var s, a = 4;
                    "rc" === e.ty ? a = 5 : "el" === e.ty ? a = 6 : "sr" === e.ty && (a = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, a, t);
                    var n, o = i.length;
                    for (s = 0; s < o; s += 1) i[s].closed || (n = {
                        transforms: r.addTransformSequence(i[s].transforms),
                        trNodes: []
                    }, this.styledShapes.push(n), i[s].elements.push(n))
                }

                function BaseElement() {}

                function NullElement(t, e, i) {
                    this.initFrame(), this.initBaseData(t, e, i), this.initFrame(), this.initTransform(t, e, i), this.initHierarchy()
                }

                function SVGBaseElement() {}

                function IShapeElement() {}

                function ITextElement() {}

                function ICompElement() {}

                function IImageElement(t, e, i) {
                    this.assetData = e.getAssetData(t.refId), this.initElement(t, e, i), this.sourceRect = {
                        top: 0,
                        left: 0,
                        width: this.assetData.w,
                        height: this.assetData.h
                    }
                }

                function ISolidElement(t, e, i) {
                    this.initElement(t, e, i)
                }

                function AudioElement(t, e, i) {
                    this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, i), this._isPlaying = !1, this._canPlay = !1;
                    var r = this.globalData.getAssetsPath(this.assetData);
                    this.audio = this.globalData.audioController.createAudio(r), this._currentTime = 0, this.globalData.audioController.addAudio(this), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                        _placeholder: !0
                    }
                }

                function FootageElement(t, e, i) {
                    this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, i)
                }

                function SVGCompElement(t, e, i) {
                    this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                        _placeholder: !0
                    }
                }

                function SVGTextLottieElement(t, e, i) {
                    this.textSpans = [], this.renderType = "svg", this.initElement(t, e, i)
                }

                function SVGShapeElement(t, e, i) {
                    this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, i), this.prevViewData = []
                }

                function SVGTintFilter(t, e) {
                    this.filterManager = e;
                    var i = createNS("feColorMatrix");
                    if (i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), i.setAttribute("result", "f1"), t.appendChild(i), (i = createNS("feColorMatrix")).setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), i.setAttribute("result", "f2"), t.appendChild(i), this.matrixFilter = i, 100 !== e.effectElements[2].p.v || e.effectElements[2].p.k) {
                        var r, s = createNS("feMerge");
                        t.appendChild(s), (r = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), s.appendChild(r), (r = createNS("feMergeNode")).setAttribute("in", "f2"), s.appendChild(r)
                    }
                }

                function SVGFillFilter(t, e) {
                    this.filterManager = e;
                    var i = createNS("feColorMatrix");
                    i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), t.appendChild(i), this.matrixFilter = i
                }

                function SVGGaussianBlurEffect(t, e) {
                    t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
                    var i = createNS("feGaussianBlur");
                    t.appendChild(i), this.feGaussianBlur = i
                }

                function SVGStrokeEffect(t, e) {
                    this.initialized = !1, this.filterManager = e, this.elem = t, this.paths = []
                }

                function SVGTritoneFilter(t, e) {
                    this.filterManager = e;
                    var i = createNS("feColorMatrix");
                    i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), i.setAttribute("result", "f1"), t.appendChild(i);
                    var r = createNS("feComponentTransfer");
                    r.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(r), this.matrixFilter = r;
                    var s = createNS("feFuncR");
                    s.setAttribute("type", "table"), r.appendChild(s), this.feFuncR = s;
                    var a = createNS("feFuncG");
                    a.setAttribute("type", "table"), r.appendChild(a), this.feFuncG = a;
                    var n = createNS("feFuncB");
                    n.setAttribute("type", "table"), r.appendChild(n), this.feFuncB = n
                }

                function SVGProLevelsFilter(t, e) {
                    this.filterManager = e;
                    var i = this.filterManager.effectElements,
                        r = createNS("feComponentTransfer");
                    (i[10].p.k || 0 !== i[10].p.v || i[11].p.k || 1 !== i[11].p.v || i[12].p.k || 1 !== i[12].p.v || i[13].p.k || 0 !== i[13].p.v || i[14].p.k || 1 !== i[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", r)), (i[17].p.k || 0 !== i[17].p.v || i[18].p.k || 1 !== i[18].p.v || i[19].p.k || 1 !== i[19].p.v || i[20].p.k || 0 !== i[20].p.v || i[21].p.k || 1 !== i[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", r)), (i[24].p.k || 0 !== i[24].p.v || i[25].p.k || 1 !== i[25].p.v || i[26].p.k || 1 !== i[26].p.v || i[27].p.k || 0 !== i[27].p.v || i[28].p.k || 1 !== i[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", r)), (i[31].p.k || 0 !== i[31].p.v || i[32].p.k || 1 !== i[32].p.v || i[33].p.k || 1 !== i[33].p.v || i[34].p.k || 0 !== i[34].p.v || i[35].p.k || 1 !== i[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", r)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (r.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(r), r = createNS("feComponentTransfer")), (i[3].p.k || 0 !== i[3].p.v || i[4].p.k || 1 !== i[4].p.v || i[5].p.k || 1 !== i[5].p.v || i[6].p.k || 0 !== i[6].p.v || i[7].p.k || 1 !== i[7].p.v) && (r.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(r), this.feFuncRComposed = this.createFeFunc("feFuncR", r), this.feFuncGComposed = this.createFeFunc("feFuncG", r), this.feFuncBComposed = this.createFeFunc("feFuncB", r))
                }

                function SVGDropShadowEffect(t, e) {
                    var i = e.container.globalData.renderConfig.filterSize;
                    t.setAttribute("x", i.x), t.setAttribute("y", i.y), t.setAttribute("width", i.width), t.setAttribute("height", i.height), this.filterManager = e;
                    var r = createNS("feGaussianBlur");
                    r.setAttribute("in", "SourceAlpha"), r.setAttribute("result", "drop_shadow_1"), r.setAttribute("stdDeviation", "0"), this.feGaussianBlur = r, t.appendChild(r);
                    var s = createNS("feOffset");
                    s.setAttribute("dx", "25"), s.setAttribute("dy", "0"), s.setAttribute("in", "drop_shadow_1"), s.setAttribute("result", "drop_shadow_2"), this.feOffset = s, t.appendChild(s);
                    var a = createNS("feFlood");
                    a.setAttribute("flood-color", "#00ff00"), a.setAttribute("flood-opacity", "1"), a.setAttribute("result", "drop_shadow_3"), this.feFlood = a, t.appendChild(a);
                    var n = createNS("feComposite");
                    n.setAttribute("in", "drop_shadow_3"), n.setAttribute("in2", "drop_shadow_2"), n.setAttribute("operator", "in"), n.setAttribute("result", "drop_shadow_4"), t.appendChild(n);
                    var o, h = createNS("feMerge");
                    t.appendChild(h), o = createNS("feMergeNode"), h.appendChild(o), (o = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), this.feMergeNode = o, this.feMerge = h, this.originalNodeAdded = !1, h.appendChild(o)
                }
                ShapeTransformManager.prototype = {
                    addTransformSequence: function(t) {
                        var e, i = t.length,
                            r = "_";
                        for (e = 0; e < i; e += 1) r += t[e].transform.key + "_";
                        var s = this.sequences[r];
                        return s || (s = {
                            transforms: [].concat(t),
                            finalTransform: new Matrix,
                            _mdf: !1
                        }, this.sequences[r] = s, this.sequenceList.push(s)), s
                    },
                    processSequence: function(t, e) {
                        for (var i, r = 0, s = t.transforms.length, a = e; r < s && !e;) {
                            if (t.transforms[r].transform.mProps._mdf) {
                                a = !0;
                                break
                            }
                            r += 1
                        }
                        if (a)
                            for (t.finalTransform.reset(), r = s - 1; r >= 0; r -= 1) i = t.transforms[r].transform.mProps.v.props, t.finalTransform.transform(i[0], i[1], i[2], i[3], i[4], i[5], i[6], i[7], i[8], i[9], i[10], i[11], i[12], i[13], i[14], i[15]);
                        t._mdf = a
                    },
                    processSequences: function(t) {
                        var e, i = this.sequenceList.length;
                        for (e = 0; e < i; e += 1) this.processSequence(this.sequenceList[e], t)
                    },
                    getNewKey: function() {
                        return this.transform_key_count += 1, "_" + this.transform_key_count
                    }
                }, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, BaseElement.prototype = {
                    checkMasks: function() {
                        if (!this.data.hasMask) return !1;
                        for (var t = 0, e = this.data.masksProperties.length; t < e;) {
                            if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
                            t += 1
                        }
                        return !1
                    },
                    initExpressions: function() {
                        this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                        var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
                        this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this), this.layerInterface.text = this.layerInterface.textInterface)
                    },
                    setBlendMode: function() {
                        var t = getBlendMode(this.data.bm);
                        (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
                    },
                    initBaseData: function(t, e, i) {
                        this.globalData = e, this.comp = i, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
                    },
                    getType: function() {
                        return this.type
                    },
                    sourceRectAtTime: function() {}
                }, NullElement.prototype.prepareFrame = function(t) {
                    this.prepareProperties(t, !0)
                }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
                    return null
                }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), SVGBaseElement.prototype = {
                    initRendererElement: function() {
                        this.layerElement = createNS("g")
                    },
                    createContainerElements: function() {
                        this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                        var t, e, i, r = null;
                        if (this.data.td) {
                            if (3 == this.data.td || 1 == this.data.td) {
                                var s = createNS("mask");
                                s.setAttribute("id", this.layerId), s.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), s.appendChild(this.layerElement), r = s, this.globalData.defs.appendChild(s), featureSupport.maskType || 1 != this.data.td || (s.setAttribute("mask-type", "luminance"), t = createElementID(), e = filtersFactory.createFilter(t), this.globalData.defs.appendChild(e), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (i = createNS("g")).appendChild(this.layerElement), r = i, s.appendChild(i), i.setAttribute("filter", "url(" + locationHref + "#" + t + ")"))
                            } else if (2 == this.data.td) {
                                var a = createNS("mask");
                                a.setAttribute("id", this.layerId), a.setAttribute("mask-type", "alpha");
                                var n = createNS("g");
                                a.appendChild(n), t = createElementID(), e = filtersFactory.createFilter(t);
                                var o = createNS("feComponentTransfer");
                                o.setAttribute("in", "SourceGraphic"), e.appendChild(o);
                                var h = createNS("feFuncA");
                                h.setAttribute("type", "table"), h.setAttribute("tableValues", "1.0 0.0"), o.appendChild(h), this.globalData.defs.appendChild(e);
                                var l = createNS("rect");
                                l.setAttribute("width", this.comp.data.w), l.setAttribute("height", this.comp.data.h), l.setAttribute("x", "0"), l.setAttribute("y", "0"), l.setAttribute("fill", "#ffffff"), l.setAttribute("opacity", "0"), n.setAttribute("filter", "url(" + locationHref + "#" + t + ")"), n.appendChild(l), n.appendChild(this.layerElement), r = n, featureSupport.maskType || (a.setAttribute("mask-type", "luminance"), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), i = createNS("g"), n.appendChild(l), i.appendChild(this.layerElement), r = i, n.appendChild(i)), this.globalData.defs.appendChild(a)
                            }
                        } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), r = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                        if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                            var p = createNS("clipPath"),
                                u = createNS("path");
                            u.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                            var f = createElementID();
                            if (p.setAttribute("id", f), p.appendChild(u), this.globalData.defs.appendChild(p), this.checkMasks()) {
                                var c = createNS("g");
                                c.setAttribute("clip-path", "url(" + locationHref + "#" + f + ")"), c.appendChild(this.layerElement), this.transformedElement = c, r ? r.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                            } else this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + f + ")")
                        }
                        0 !== this.data.bm && this.setBlendMode()
                    },
                    renderElement: function() {
                        this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
                    },
                    destroyBaseElement: function() {
                        this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
                    },
                    getBaseElement: function() {
                        return this.data.hd ? null : this.baseElement
                    },
                    createRenderableComponents: function() {
                        this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this)
                    },
                    setMatte: function(t) {
                        this.matteElement && this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + t + ")")
                    }
                }, IShapeElement.prototype = {
                    addShapeToModifiers: function(t) {
                        var e, i = this.shapeModifiers.length;
                        for (e = 0; e < i; e += 1) this.shapeModifiers[e].addShape(t)
                    },
                    isShapeInAnimatedModifiers: function(t) {
                        for (var e = this.shapeModifiers.length; 0 < e;)
                            if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
                        return !1
                    },
                    renderModifiers: function() {
                        if (this.shapeModifiers.length) {
                            var t, e = this.shapes.length;
                            for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
                            for (t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1);
                        }
                    },
                    lcEnum: {
                        1: "butt",
                        2: "round",
                        3: "square"
                    },
                    ljEnum: {
                        1: "miter",
                        2: "round",
                        3: "bevel"
                    },
                    searchProcessedElement: function(t) {
                        for (var e = this.processedElements, i = 0, r = e.length; i < r;) {
                            if (e[i].elem === t) return e[i].pos;
                            i += 1
                        }
                        return 0
                    },
                    addProcessedElement: function(t, e) {
                        for (var i = this.processedElements, r = i.length; r;)
                            if (i[r -= 1].elem === t) return void(i[r].pos = e);
                        i.push(new ProcessedElement(t, e))
                    },
                    prepareFrame: function(t) {
                        this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
                    }
                }, ITextElement.prototype.initElement = function(t, e, i) {
                    this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, i), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
                }, ITextElement.prototype.prepareFrame = function(t) {
                    this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
                }, ITextElement.prototype.createPathShape = function(t, e) {
                    var i, r, s = e.length,
                        a = "";
                    for (i = 0; i < s; i += 1) r = e[i].ks.k, a += buildShapeString(r, r.i.length, !0, t);
                    return a
                }, ITextElement.prototype.updateDocumentData = function(t, e) {
                    this.textProperty.updateDocumentData(t, e)
                }, ITextElement.prototype.canResizeFont = function(t) {
                    this.textProperty.canResizeFont(t)
                }, ITextElement.prototype.setMinimumFontSize = function(t) {
                    this.textProperty.setMinimumFontSize(t)
                }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, i, r, s) {
                    switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
                        case 1:
                            e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
                            break;
                        case 2:
                            e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0)
                    }
                    e.translate(r, s, 0)
                }, ITextElement.prototype.buildColor = function(t) {
                    return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
                }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, i) {
                    this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide()
                }, ICompElement.prototype.prepareFrame = function(t) {
                    if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
                        if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                        else {
                            var e = this.tm.v;
                            e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
                        }
                        var i, r = this.elements.length;
                        for (this.completeLayers || this.checkLayers(this.renderedFrame), i = r - 1; i >= 0; i -= 1)(this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st), this.elements[i]._mdf && (this._mdf = !0))
                    }
                }, ICompElement.prototype.renderInnerContent = function() {
                    var t, e = this.layers.length;
                    for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
                }, ICompElement.prototype.setElements = function(t) {
                    this.elements = t
                }, ICompElement.prototype.getElements = function() {
                    return this.elements
                }, ICompElement.prototype.destroyElements = function() {
                    var t, e = this.layers.length;
                    for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
                }, ICompElement.prototype.destroy = function() {
                    this.destroyElements(), this.destroyBaseElement()
                }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
                    var t = this.globalData.getAssetsPath(this.assetData);
                    this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
                }, IImageElement.prototype.sourceRectAtTime = function() {
                    return this.sourceRect
                }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
                    var t = createNS("rect");
                    t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
                }, AudioElement.prototype.prepareFrame = function(t) {
                    if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
                    else {
                        var e = this.tm.v;
                        this._currentTime = e
                    }
                }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
                    this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
                }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
                    this.audio.pause(), this._isPlaying = !1
                }, AudioElement.prototype.pause = function() {
                    this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
                }, AudioElement.prototype.resume = function() {
                    this._canPlay = !0
                }, AudioElement.prototype.setRate = function(t) {
                    this.audio.rate(t)
                }, AudioElement.prototype.volume = function(t) {
                    this.audio.volume(t)
                }, AudioElement.prototype.getBaseElement = function() {
                    return null
                }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
                    return null
                }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
                    this.layerInterface = FootageInterface(this)
                }, FootageElement.prototype.getFootageData = function() {
                    return this.footageData
                }, extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
                    this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
                }, SVGTextLottieElement.prototype.buildTextContents = function(t) {
                    for (var e = 0, i = t.length, r = [], s = ""; e < i;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (r.push(s), s = "") : s += t[e], e += 1;
                    return r.push(s), r
                }, SVGTextLottieElement.prototype.buildNewText = function() {
                    var t, e, i = this.textProperty.currentData;
                    this.renderedLetters = createSizedArray(i ? i.l.length : 0), i.fc ? this.layerElement.setAttribute("fill", this.buildColor(i.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), i.sc && (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)), this.layerElement.setAttribute("stroke-width", i.sw)), this.layerElement.setAttribute("font-size", i.finalSize);
                    var r = this.globalData.fontManager.getFontByName(i.f);
                    if (r.fClass) this.layerElement.setAttribute("class", r.fClass);
                    else {
                        this.layerElement.setAttribute("font-family", r.fFamily);
                        var s = i.fWeight,
                            a = i.fStyle;
                        this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", s)
                    }
                    this.layerElement.setAttribute("aria-label", i.t);
                    var n, o = i.l || [],
                        h = !!this.globalData.fontManager.chars;
                    e = o.length;
                    var l, p = this.mHelper,
                        u = "",
                        f = this.data.singleShape,
                        c = 0,
                        m = 0,
                        d = !0,
                        g = .001 * i.tr * i.finalSize;
                    if (!f || h || i.sz) {
                        var y, v, D = this.textSpans.length;
                        for (t = 0; t < e; t += 1) h && f && 0 !== t || (n = D > t ? this.textSpans[t] : createNS(h ? "path" : "text"), D <= t && (n.setAttribute("stroke-linecap", "butt"), n.setAttribute("stroke-linejoin", "round"), n.setAttribute("stroke-miterlimit", "4"), this.textSpans[t] = n, this.layerElement.appendChild(n)), n.style.display = "inherit"), p.reset(), p.scale(i.finalSize / 100, i.finalSize / 100), f && (o[t].n && (c = -g, m += i.yOffset, m += d ? 1 : 0, d = !1), this.applyTextPropertiesToMatrix(i, p, o[t].line, c, m), c += o[t].l || 0, c += g), h ? (l = (y = (v = this.globalData.fontManager.getCharData(i.finalText[t], r.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily)) && v.data || {}).shapes ? y.shapes[0].it : [], f ? u += this.createPathShape(p, l) : n.setAttribute("d", this.createPathShape(p, l))) : (f && n.setAttribute("transform", "translate(" + p.props[12] + "," + p.props[13] + ")"), n.textContent = o[t].val, n.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
                        f && n && n.setAttribute("d", u)
                    } else {
                        var E = this.textContainer,
                            b = "start";
                        switch (i.j) {
                            case 1:
                                b = "end";
                                break;
                            case 2:
                                b = "middle";
                                break;
                            default:
                                b = "start"
                        }
                        E.setAttribute("text-anchor", b), E.setAttribute("letter-spacing", g);
                        var C = this.buildTextContents(i.finalText);
                        for (e = C.length, m = i.ps ? i.ps[1] + i.ascent : 0, t = 0; t < e; t += 1)(n = this.textSpans[t] || createNS("tspan")).textContent = C[t], n.setAttribute("x", 0), n.setAttribute("y", m), n.style.display = "inherit", E.appendChild(n), this.textSpans[t] = n, m += i.finalLineHeight;
                        this.layerElement.appendChild(E)
                    }
                    for (; t < this.textSpans.length;) this.textSpans[t].style.display = "none", t += 1;
                    this._sizeChanged = !0
                }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
                    if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                        this._sizeChanged = !1;
                        var t = this.layerElement.getBBox();
                        this.bbox = {
                            top: t.y,
                            left: t.x,
                            width: t.width,
                            height: t.height
                        }
                    }
                    return this.bbox
                }, SVGTextLottieElement.prototype.renderInnerContent = function() {
                    if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                        var t, e;
                        this._sizeChanged = !0;
                        var i, r, s = this.textAnimator.renderedLetters,
                            a = this.textProperty.currentData.l;
                        for (e = a.length, t = 0; t < e; t += 1) a[t].n || (i = s[t], r = this.textSpans[t], i._mdf.m && r.setAttribute("transform", i.m), i._mdf.o && r.setAttribute("opacity", i.o), i._mdf.sw && r.setAttribute("stroke-width", i.sw), i._mdf.sc && r.setAttribute("stroke", i.sc), i._mdf.fc && r.setAttribute("fill", i.fc))
                    }
                }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
                    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
                }, SVGShapeElement.prototype.filterUniqueShapes = function() {
                    var t, e, i, r, s = this.shapes.length,
                        a = this.stylesList.length,
                        n = [],
                        o = !1;
                    for (i = 0; i < a; i += 1) {
                        for (r = this.stylesList[i], o = !1, n.length = 0, t = 0; t < s; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(r) && (n.push(e), o = e._isAnimated || o);
                        n.length > 1 && o && this.setShapesAsAnimated(n)
                    }
                }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
                    var e, i = t.length;
                    for (e = 0; e < i; e += 1) t[e].setAsAnimated()
                }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
                    var i, r = new SVGStyleData(t, e),
                        s = r.pElem;
                    return "st" === t.ty ? i = new SVGStrokeStyleData(this, t, r) : "fl" === t.ty ? i = new SVGFillStyleData(this, t, r) : "gf" !== t.ty && "gs" !== t.ty || (i = new("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, r), this.globalData.defs.appendChild(i.gf), i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), s.setAttribute("mask", "url(" + locationHref + "#" + i.maskId + ")"))), "st" !== t.ty && "gs" !== t.ty || (s.setAttribute("stroke-linecap", this.lcEnum[t.lc] || "round"), s.setAttribute("stroke-linejoin", this.ljEnum[t.lj] || "round"), s.setAttribute("fill-opacity", "0"), 1 === t.lj && s.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && s.setAttribute("fill-rule", "evenodd"), t.ln && s.setAttribute("id", t.ln), t.cl && s.setAttribute("class", t.cl), t.bm && (s.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(r), this.addToAnimatedContents(t, i), i
                }, SVGShapeElement.prototype.createGroupElement = function(t) {
                    var e = new ShapeGroupData;
                    return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e
                }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
                    var i = TransformPropertyFactory.getTransformProperty(this, t, this),
                        r = new SVGTransformData(i, i.o, e);
                    return this.addToAnimatedContents(t, r), r
                }, SVGShapeElement.prototype.createShapeElement = function(t, e, i) {
                    var r = 4;
                    "rc" === t.ty ? r = 5 : "el" === t.ty ? r = 6 : "sr" === t.ty && (r = 7);
                    var s = new SVGShapeData(e, i, ShapePropertyFactory.getShapeProp(this, t, r, this));
                    return this.shapes.push(s), this.addShapeToModifiers(s), this.addToAnimatedContents(t, s), s
                }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
                    for (var i = 0, r = this.animatedContents.length; i < r;) {
                        if (this.animatedContents[i].element === e) return;
                        i += 1
                    }
                    this.animatedContents.push({
                        fn: SVGElementsRenderer.createRenderFunction(t),
                        element: e,
                        data: t
                    })
                }, SVGShapeElement.prototype.setElementStyles = function(t) {
                    var e, i = t.styles,
                        r = this.stylesList.length;
                    for (e = 0; e < r; e += 1) this.stylesList[e].closed || i.push(this.stylesList[e])
                }, SVGShapeElement.prototype.reloadShapes = function() {
                    var t;
                    this._isFirstFrame = !0;
                    var e = this.itemsData.length;
                    for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
                    for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
                    this.renderModifiers()
                }, SVGShapeElement.prototype.searchShapes = function(t, e, i, r, s, a, n) {
                    var o, h, l, p, u, f, c = [].concat(a),
                        m = t.length - 1,
                        d = [],
                        g = [];
                    for (o = m; o >= 0; o -= 1) {
                        if ((f = this.searchProcessedElement(t[o])) ? e[o] = i[f - 1] : t[o]._render = n, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty) f ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], s), t[o]._render && r.appendChild(e[o].style.pElem), d.push(e[o].style);
                        else if ("gr" === t[o].ty) {
                            if (f)
                                for (l = e[o].it.length, h = 0; h < l; h += 1) e[o].prevViewData[h] = e[o].it[h];
                            else e[o] = this.createGroupElement(t[o]);
                            this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, s + 1, c, n), t[o]._render && r.appendChild(e[o].gr)
                        } else "tr" === t[o].ty ? (f || (e[o] = this.createTransformElement(t[o], r)), p = e[o].transform, c.push(p)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (f || (e[o] = this.createShapeElement(t[o], c, s)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty ? (f ? (u = e[o]).closed = !1 : ((u = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = u, this.shapeModifiers.push(u)), g.push(u)) : "rp" === t[o].ty && (f ? (u = e[o]).closed = !0 : (u = ShapeModifiers.getModifier(t[o].ty), e[o] = u, u.init(this, t, o, e), this.shapeModifiers.push(u), n = !1), g.push(u));
                        this.addProcessedElement(t[o], o + 1)
                    }
                    for (m = d.length, o = 0; o < m; o += 1) d[o].closed = !0;
                    for (m = g.length, o = 0; o < m; o += 1) g[o].closed = !0
                }, SVGShapeElement.prototype.renderInnerContent = function() {
                    var t;
                    this.renderModifiers();
                    var e = this.stylesList.length;
                    for (t = 0; t < e; t += 1) this.stylesList[t].reset();
                    for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
                }, SVGShapeElement.prototype.renderShape = function() {
                    var t, e, i = this.animatedContents.length;
                    for (t = 0; t < i; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
                }, SVGShapeElement.prototype.destroy = function() {
                    this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
                }, SVGTintFilter.prototype.renderFrame = function(t) {
                    if (t || this.filterManager._mdf) {
                        var e = this.filterManager.effectElements[0].p.v,
                            i = this.filterManager.effectElements[1].p.v,
                            r = this.filterManager.effectElements[2].p.v / 100;
                        this.matrixFilter.setAttribute("values", i[0] - e[0] + " 0 0 0 " + e[0] + " " + (i[1] - e[1]) + " 0 0 0 " + e[1] + " " + (i[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + r + " 0")
                    }
                }, SVGFillFilter.prototype.renderFrame = function(t) {
                    if (t || this.filterManager._mdf) {
                        var e = this.filterManager.effectElements[2].p.v,
                            i = this.filterManager.effectElements[6].p.v;
                        this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + i + " 0")
                    }
                }, SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
                    if (t || this.filterManager._mdf) {
                        var e = .3 * this.filterManager.effectElements[0].p.v,
                            i = this.filterManager.effectElements[1].p.v,
                            r = 3 == i ? 0 : e,
                            s = 2 == i ? 0 : e;
                        this.feGaussianBlur.setAttribute("stdDeviation", r + " " + s);
                        var a = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
                        this.feGaussianBlur.setAttribute("edgeMode", a)
                    }
                }, SVGStrokeEffect.prototype.initialize = function() {
                    var t, e, i, r, s = this.elem.layerElement.children || this.elem.layerElement.childNodes;
                    for (1 === this.filterManager.effectElements[1].p.v ? (r = this.elem.maskManager.masksProperties.length, i = 0) : r = 1 + (i = this.filterManager.effectElements[0].p.v - 1), (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); i < r; i += 1) t = createNS("path"), e.appendChild(t), this.paths.push({
                        p: t,
                        m: i
                    });
                    if (3 === this.filterManager.effectElements[10].p.v) {
                        var a = createNS("mask"),
                            n = createElementID();
                        a.setAttribute("id", n), a.setAttribute("mask-type", "alpha"), a.appendChild(e), this.elem.globalData.defs.appendChild(a);
                        var o = createNS("g");
                        for (o.setAttribute("mask", "url(" + locationHref + "#" + n + ")"); s[0];) o.appendChild(s[0]);
                        this.elem.layerElement.appendChild(o), this.masker = a, e.setAttribute("stroke", "#fff")
                    } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                        if (2 === this.filterManager.effectElements[10].p.v)
                            for (s = this.elem.layerElement.children || this.elem.layerElement.childNodes; s.length;) this.elem.layerElement.removeChild(s[0]);
                        this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff")
                    }
                    this.initialized = !0, this.pathMasker = e
                }, SVGStrokeEffect.prototype.renderFrame = function(t) {
                    var e;
                    this.initialized || this.initialize();
                    var i, r, s = this.paths.length;
                    for (e = 0; e < s; e += 1)
                        if (-1 !== this.paths[e].m && (i = this.elem.maskManager.viewData[this.paths[e].m], r = this.paths[e].p, (t || this.filterManager._mdf || i.prop._mdf) && r.setAttribute("d", i.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
                            var a;
                            if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                                var n = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                    o = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                    h = r.getTotalLength();
                                a = "0 0 0 " + h * n + " ";
                                var l, p = h * (o - n),
                                    u = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
                                    f = Math.floor(p / u);
                                for (l = 0; l < f; l += 1) a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                                a += "0 " + 10 * h + " 0 0"
                            } else a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
                            r.setAttribute("stroke-dasharray", a)
                        }
                    if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
                        var c = this.filterManager.effectElements[3].p.v;
                        this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * c[0]) + "," + bmFloor(255 * c[1]) + "," + bmFloor(255 * c[2]) + ")")
                    }
                }, SVGTritoneFilter.prototype.renderFrame = function(t) {
                    if (t || this.filterManager._mdf) {
                        var e = this.filterManager.effectElements[0].p.v,
                            i = this.filterManager.effectElements[1].p.v,
                            r = this.filterManager.effectElements[2].p.v,
                            s = r[0] + " " + i[0] + " " + e[0],
                            a = r[1] + " " + i[1] + " " + e[1],
                            n = r[2] + " " + i[2] + " " + e[2];
                        this.feFuncR.setAttribute("tableValues", s), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", n)
                    }
                }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
                    var i = createNS(t);
                    return i.setAttribute("type", "table"), e.appendChild(i), i
                }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, i, r, s) {
                    for (var a, n, o = 0, h = Math.min(t, e), l = Math.max(t, e), p = Array.call(null, {
                            length: 256
                        }), u = 0, f = s - r, c = e - t; o <= 256;) n = (a = o / 256) <= h ? c < 0 ? s : r : a >= l ? c < 0 ? r : s : r + f * Math.pow((a - t) / c, 1 / i), p[u] = n, u += 1, o += 256 / 255;
                    return p.join(" ")
                }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
                    if (t || this.filterManager._mdf) {
                        var e, i = this.filterManager.effectElements;
                        this.feFuncRComposed && (t || i[3].p._mdf || i[4].p._mdf || i[5].p._mdf || i[6].p._mdf || i[7].p._mdf) && (e = this.getTableValue(i[3].p.v, i[4].p.v, i[5].p.v, i[6].p.v, i[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || i[10].p._mdf || i[11].p._mdf || i[12].p._mdf || i[13].p._mdf || i[14].p._mdf) && (e = this.getTableValue(i[10].p.v, i[11].p.v, i[12].p.v, i[13].p.v, i[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || i[17].p._mdf || i[18].p._mdf || i[19].p._mdf || i[20].p._mdf || i[21].p._mdf) && (e = this.getTableValue(i[17].p.v, i[18].p.v, i[19].p.v, i[20].p.v, i[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || i[24].p._mdf || i[25].p._mdf || i[26].p._mdf || i[27].p._mdf || i[28].p._mdf) && (e = this.getTableValue(i[24].p.v, i[25].p.v, i[26].p.v, i[27].p.v, i[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || i[31].p._mdf || i[32].p._mdf || i[33].p._mdf || i[34].p._mdf || i[35].p._mdf) && (e = this.getTableValue(i[31].p.v, i[32].p.v, i[33].p.v, i[34].p.v, i[35].p.v), this.feFuncA.setAttribute("tableValues", e))
                    }
                }, SVGDropShadowEffect.prototype.renderFrame = function(t) {
                    if (t || this.filterManager._mdf) {
                        if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
                            var e = this.filterManager.effectElements[0].p.v;
                            this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
                        }
                        if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                            var i = this.filterManager.effectElements[3].p.v,
                                r = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                                s = i * Math.cos(r),
                                a = i * Math.sin(r);
                            this.feOffset.setAttribute("dx", s), this.feOffset.setAttribute("dy", a)
                        }
                    }
                };
                var _svgMatteSymbols = [];

                function SVGMatte3Effect(t, e, i) {
                    this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = i, i.matteElement = createNS("g"), i.matteElement.appendChild(i.layerElement), i.matteElement.appendChild(i.transformedElement), i.baseElement = i.matteElement
                }

                function SVGEffects(t) {
                    var e, i, r = t.data.ef ? t.data.ef.length : 0,
                        s = createElementID(),
                        a = filtersFactory.createFilter(s, !0),
                        n = 0;
                    for (this.filters = [], e = 0; e < r; e += 1) i = null, 20 === t.data.ef[e].ty ? (n += 1, i = new SVGTintFilter(a, t.effectsManager.effectElements[e])) : 21 === t.data.ef[e].ty ? (n += 1, i = new SVGFillFilter(a, t.effectsManager.effectElements[e])) : 22 === t.data.ef[e].ty ? i = new SVGStrokeEffect(t, t.effectsManager.effectElements[e]) : 23 === t.data.ef[e].ty ? (n += 1, i = new SVGTritoneFilter(a, t.effectsManager.effectElements[e])) : 24 === t.data.ef[e].ty ? (n += 1, i = new SVGProLevelsFilter(a, t.effectsManager.effectElements[e])) : 25 === t.data.ef[e].ty ? (n += 1, i = new SVGDropShadowEffect(a, t.effectsManager.effectElements[e])) : 28 === t.data.ef[e].ty ? i = new SVGMatte3Effect(a, t.effectsManager.effectElements[e], t) : 29 === t.data.ef[e].ty && (n += 1, i = new SVGGaussianBlurEffect(a, t.effectsManager.effectElements[e])), i && this.filters.push(i);
                    n && (t.globalData.defs.appendChild(a), t.layerElement.setAttribute("filter", "url(" + locationHref + "#" + s + ")")), this.filters.length && t.addRenderableComponent(this)
                }

                function CVContextData() {
                    var t;
                    for (this.saved = [], this.cArrPos = 0, this.cTr = new Matrix, this.cO = 1, this.savedOp = createTypedArray("float32", 15), t = 0; t < 15; t += 1) this.saved[t] = createTypedArray("float32", 16);
                    this._length = 15
                }

                function CVBaseElement() {}

                function CVImageElement(t, e, i) {
                    this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, i)
                }

                function CVCompElement(t, e, i) {
                    this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                        _placeholder: !0
                    }
                }

                function CVMaskElement(t, e) {
                    var i;
                    this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
                    var r = this.masksProperties.length,
                        s = !1;
                    for (i = 0; i < r; i += 1) "n" !== this.masksProperties[i].mode && (s = !0), this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i], 3);
                    this.hasMasks = s, s && this.element.addRenderableComponent(this)
                }

                function CVShapeElement(t, e, i) {
                    this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, i)
                }

                function CVSolidElement(t, e, i) {
                    this.initElement(t, e, i)
                }

                function CVTextElement(t, e, i) {
                    this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
                        fill: "rgba(0,0,0,0)",
                        stroke: "rgba(0,0,0,0)",
                        sWidth: 0,
                        fValue: ""
                    }, this.initElement(t, e, i)
                }

                function CVEffects() {}

                function HBaseElement() {}

                function HSolidElement(t, e, i) {
                    this.initElement(t, e, i)
                }

                function HCompElement(t, e, i) {
                    this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                        _placeholder: !0
                    }
                }

                function HShapeElement(t, e, i) {
                    this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, i), this.prevViewData = [], this.currentBBox = {
                        x: 999999,
                        y: -999999,
                        h: 0,
                        w: 0
                    }
                }

                function HTextElement(t, e, i) {
                    this.textSpans = [], this.textPaths = [], this.currentBBox = {
                        x: 999999,
                        y: -999999,
                        h: 0,
                        w: 0
                    }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, i)
                }

                function HImageElement(t, e, i) {
                    this.assetData = e.getAssetData(t.refId), this.initElement(t, e, i)
                }

                function HCameraElement(t, e, i) {
                    this.initFrame(), this.initBaseData(t, e, i), this.initHierarchy();
                    var r = PropertyFactory.getProp;
                    if (this.pe = r(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = r(this, t.ks.p.x, 1, 0, this), this.py = r(this, t.ks.p.y, 1, 0, this), this.pz = r(this, t.ks.p.z, 1, 0, this)) : this.p = r(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = r(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
                        var s, a = t.ks.or.k.length;
                        for (s = 0; s < a; s += 1) t.ks.or.k[s].to = null, t.ks.or.k[s].ti = null
                    }
                    this.or = r(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = r(this, t.ks.rx, 0, degToRads, this), this.ry = r(this, t.ks.ry, 0, degToRads, this), this.rz = r(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
                        mProp: this
                    }
                }

                function HEffects() {}
                SVGMatte3Effect.prototype.findSymbol = function(t) {
                    for (var e = 0, i = _svgMatteSymbols.length; e < i;) {
                        if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
                        e += 1
                    }
                    return null
                }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
                    var i = t.layerElement.parentNode;
                    if (i) {
                        for (var r, s = i.children, a = 0, n = s.length; a < n && s[a] !== t.layerElement;) a += 1;
                        a <= n - 2 && (r = s[a + 1]);
                        var o = createNS("use");
                        o.setAttribute("href", "#" + e), r ? i.insertBefore(o, r) : i.appendChild(o)
                    }
                }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
                    if (!this.findSymbol(e)) {
                        var i = createElementID(),
                            r = createNS("mask");
                        r.setAttribute("id", e.layerId), r.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
                        var s = t.globalData.defs;
                        s.appendChild(r);
                        var a = createNS("symbol");
                        a.setAttribute("id", i), this.replaceInParent(e, i), a.appendChild(e.layerElement), s.appendChild(a);
                        var n = createNS("use");
                        n.setAttribute("href", "#" + i), r.appendChild(n), e.data.hd = !1, e.show()
                    }
                    t.setMatte(e.layerId)
                }, SVGMatte3Effect.prototype.initialize = function() {
                    for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, i = 0, r = e.length; i < r;) e[i] && e[i].data.ind === t && this.setElementAsMask(this.elem, e[i]), i += 1;
                    this.initialized = !0
                }, SVGMatte3Effect.prototype.renderFrame = function() {
                    this.initialized || this.initialize()
                }, SVGEffects.prototype.renderFrame = function(t) {
                    var e, i = this.filters.length;
                    for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t)
                }, CVContextData.prototype.duplicate = function() {
                    var t = 2 * this._length,
                        e = this.savedOp;
                    this.savedOp = createTypedArray("float32", t), this.savedOp.set(e);
                    var i = 0;
                    for (i = this._length; i < t; i += 1) this.saved[i] = createTypedArray("float32", 16);
                    this._length = t
                }, CVContextData.prototype.reset = function() {
                    this.cArrPos = 0, this.cTr.reset(), this.cO = 1
                }, CVBaseElement.prototype = {
                    createElements: function() {},
                    initRendererElement: function() {},
                    createContainerElements: function() {
                        this.canvasContext = this.globalData.canvasContext, this.renderableEffectsManager = new CVEffects(this)
                    },
                    createContent: function() {},
                    setBlendMode: function() {
                        var t = this.globalData;
                        if (t.blendMode !== this.data.bm) {
                            t.blendMode = this.data.bm;
                            var e = getBlendMode(this.data.bm);
                            t.canvasContext.globalCompositeOperation = e
                        }
                    },
                    createRenderableComponents: function() {
                        this.maskManager = new CVMaskElement(this.data, this)
                    },
                    hideElement: function() {
                        this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
                    },
                    showElement: function() {
                        this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
                    },
                    renderFrame: function() {
                        if (!this.hidden && !this.data.hd) {
                            this.renderTransform(), this.renderRenderable(), this.setBlendMode();
                            var t = 0 === this.data.ty;
                            this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(t), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
                        }
                    },
                    destroy: function() {
                        this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
                    },
                    mHelper: new Matrix
                }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
                    if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                        var t = createTag("canvas");
                        t.width = this.assetData.w, t.height = this.assetData.h;
                        var e, i, r = t.getContext("2d"),
                            s = this.img.width,
                            a = this.img.height,
                            n = s / a,
                            o = this.assetData.w / this.assetData.h,
                            h = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                        n > o && "xMidYMid slice" === h || n < o && "xMidYMid slice" !== h ? e = (i = a) * o : i = (e = s) / o, r.drawImage(this.img, (s - e) / 2, (a - i) / 2, e, i, 0, 0, this.assetData.w, this.assetData.h), this.img = t
                    }
                }, CVImageElement.prototype.renderInnerContent = function() {
                    this.canvasContext.drawImage(this.img, 0, 0)
                }, CVImageElement.prototype.destroy = function() {
                    this.img = null
                }, extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
                    var t, e = this.canvasContext;
                    for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
                }, CVCompElement.prototype.destroy = function() {
                    var t;
                    for (t = this.layers.length - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
                    this.layers = null, this.elements = null
                }, CVMaskElement.prototype.renderFrame = function() {
                    if (this.hasMasks) {
                        var t, e, i, r, s = this.element.finalTransform.mat,
                            a = this.element.canvasContext,
                            n = this.masksProperties.length;
                        for (a.beginPath(), t = 0; t < n; t += 1)
                            if ("n" !== this.masksProperties[t].mode) {
                                var o;
                                this.masksProperties[t].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), r = this.viewData[t].v, e = s.applyToPointArray(r.v[0][0], r.v[0][1], 0), a.moveTo(e[0], e[1]);
                                var h = r._length;
                                for (o = 1; o < h; o += 1) i = s.applyToTriplePoints(r.o[o - 1], r.i[o], r.v[o]), a.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
                                i = s.applyToTriplePoints(r.o[o - 1], r.i[0], r.v[0]), a.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5])
                            }
                        this.element.globalData.renderer.save(!0), a.clip()
                    }
                }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
                    this.element = null
                }, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
                    opacity: 1,
                    _opMdf: !1
                }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
                    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
                }, CVShapeElement.prototype.createStyleElement = function(t, e) {
                    var i = {
                            data: t,
                            type: t.ty,
                            preTransforms: this.transformsManager.addTransformSequence(e),
                            transforms: [],
                            elements: [],
                            closed: !0 === t.hd
                        },
                        r = {};
                    if ("fl" === t.ty || "st" === t.ty ? (r.c = PropertyFactory.getProp(this, t.c, 1, 255, this), r.c.k || (i.co = "rgb(" + bmFloor(r.c.v[0]) + "," + bmFloor(r.c.v[1]) + "," + bmFloor(r.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (r.s = PropertyFactory.getProp(this, t.s, 1, null, this), r.e = PropertyFactory.getProp(this, t.e, 1, null, this), r.h = PropertyFactory.getProp(this, t.h || {
                            k: 0
                        }, 0, .01, this), r.a = PropertyFactory.getProp(this, t.a || {
                            k: 0
                        }, 0, degToRads, this), r.g = new GradientProperty(this, t.g, this)), r.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" === t.ty || "gs" === t.ty) {
                        if (i.lc = this.lcEnum[t.lc] || "round", i.lj = this.ljEnum[t.lj] || "round", 1 == t.lj && (i.ml = t.ml), r.w = PropertyFactory.getProp(this, t.w, 0, null, this), r.w.k || (i.wi = r.w.v), t.d) {
                            var s = new DashProperty(this, t.d, "canvas", this);
                            r.d = s, r.d.k || (i.da = r.d.dashArray, i.do = r.d.dashoffset[0])
                        }
                    } else i.r = 2 === t.r ? "evenodd" : "nonzero";
                    return this.stylesList.push(i), r.style = i, r
                }, CVShapeElement.prototype.createGroupElement = function() {
                    return {
                        it: [],
                        prevViewData: []
                    }
                }, CVShapeElement.prototype.createTransformElement = function(t) {
                    return {
                        transform: {
                            opacity: 1,
                            _opMdf: !1,
                            key: this.transformsManager.getNewKey(),
                            op: PropertyFactory.getProp(this, t.o, 0, .01, this),
                            mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
                        }
                    }
                }, CVShapeElement.prototype.createShapeElement = function(t) {
                    var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
                    return this.shapes.push(e), this.addShapeToModifiers(e), e
                }, CVShapeElement.prototype.reloadShapes = function() {
                    var t;
                    this._isFirstFrame = !0;
                    var e = this.itemsData.length;
                    for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
                    for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
                    this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
                }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
                    var e, i = this.stylesList.length;
                    for (e = 0; e < i; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
                }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
                    var t, e = this.stylesList.length;
                    for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop()
                }, CVShapeElement.prototype.closeStyles = function(t) {
                    var e, i = t.length;
                    for (e = 0; e < i; e += 1) t[e].closed = !0
                }, CVShapeElement.prototype.searchShapes = function(t, e, i, r, s) {
                    var a, n, o, h, l, p, u = t.length - 1,
                        f = [],
                        c = [],
                        m = [].concat(s);
                    for (a = u; a >= 0; a -= 1) {
                        if ((h = this.searchProcessedElement(t[a])) ? e[a] = i[h - 1] : t[a]._shouldRender = r, "fl" === t[a].ty || "st" === t[a].ty || "gf" === t[a].ty || "gs" === t[a].ty) h ? e[a].style.closed = !1 : e[a] = this.createStyleElement(t[a], m), f.push(e[a].style);
                        else if ("gr" === t[a].ty) {
                            if (h)
                                for (o = e[a].it.length, n = 0; n < o; n += 1) e[a].prevViewData[n] = e[a].it[n];
                            else e[a] = this.createGroupElement(t[a]);
                            this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, r, m)
                        } else "tr" === t[a].ty ? (h || (p = this.createTransformElement(t[a]), e[a] = p), m.push(e[a]), this.addTransformToStyleList(e[a])) : "sh" === t[a].ty || "rc" === t[a].ty || "el" === t[a].ty || "sr" === t[a].ty ? h || (e[a] = this.createShapeElement(t[a])) : "tm" === t[a].ty || "rd" === t[a].ty || "pb" === t[a].ty ? (h ? (l = e[a]).closed = !1 : ((l = ShapeModifiers.getModifier(t[a].ty)).init(this, t[a]), e[a] = l, this.shapeModifiers.push(l)), c.push(l)) : "rp" === t[a].ty && (h ? (l = e[a]).closed = !0 : (l = ShapeModifiers.getModifier(t[a].ty), e[a] = l, l.init(this, t, a, e), this.shapeModifiers.push(l), r = !1), c.push(l));
                        this.addProcessedElement(t[a], a + 1)
                    }
                    for (this.removeTransformFromStyleList(), this.closeStyles(f), u = c.length, a = 0; a < u; a += 1) c[a].closed = !0
                }, CVShapeElement.prototype.renderInnerContent = function() {
                    this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
                }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
                    (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
                }, CVShapeElement.prototype.drawLayer = function() {
                    var t, e, i, r, s, a, n, o, h, l = this.stylesList.length,
                        p = this.globalData.renderer,
                        u = this.globalData.canvasContext;
                    for (t = 0; t < l; t += 1)
                        if (("st" !== (o = (h = this.stylesList[t]).type) && "gs" !== o || 0 !== h.wi) && h.data._shouldRender && 0 !== h.coOp && 0 !== this.globalData.currentGlobalAlpha) {
                            for (p.save(), a = h.elements, "st" === o || "gs" === o ? (u.strokeStyle = "st" === o ? h.co : h.grd, u.lineWidth = h.wi, u.lineCap = h.lc, u.lineJoin = h.lj, u.miterLimit = h.ml || 0) : u.fillStyle = "fl" === o ? h.co : h.grd, p.ctxOpacity(h.coOp), "st" !== o && "gs" !== o && u.beginPath(), p.ctxTransform(h.preTransforms.finalTransform.props), i = a.length, e = 0; e < i; e += 1) {
                                for ("st" !== o && "gs" !== o || (u.beginPath(), h.da && (u.setLineDash(h.da), u.lineDashOffset = h.do)), s = (n = a[e].trNodes).length, r = 0; r < s; r += 1) "m" === n[r].t ? u.moveTo(n[r].p[0], n[r].p[1]) : "c" === n[r].t ? u.bezierCurveTo(n[r].pts[0], n[r].pts[1], n[r].pts[2], n[r].pts[3], n[r].pts[4], n[r].pts[5]) : u.closePath();
                                "st" !== o && "gs" !== o || (u.stroke(), h.da && u.setLineDash(this.dashResetter))
                            }
                            "st" !== o && "gs" !== o && u.fill(h.r), p.restore()
                        }
                }, CVShapeElement.prototype.renderShape = function(t, e, i, r) {
                    var s, a;
                    for (a = t, s = e.length - 1; s >= 0; s -= 1) "tr" === e[s].ty ? (a = i[s].transform, this.renderShapeTransform(t, a)) : "sh" === e[s].ty || "el" === e[s].ty || "rc" === e[s].ty || "sr" === e[s].ty ? this.renderPath(e[s], i[s]) : "fl" === e[s].ty ? this.renderFill(e[s], i[s], a) : "st" === e[s].ty ? this.renderStroke(e[s], i[s], a) : "gf" === e[s].ty || "gs" === e[s].ty ? this.renderGradientFill(e[s], i[s], a) : "gr" === e[s].ty ? this.renderShape(a, e[s].it, i[s].it) : e[s].ty;
                    r && this.drawLayer()
                }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
                    if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                        var i, r, s, a = t.trNodes,
                            n = e.paths,
                            o = n._length;
                        a.length = 0;
                        var h = t.transforms.finalTransform;
                        for (s = 0; s < o; s += 1) {
                            var l = n.shapes[s];
                            if (l && l.v) {
                                for (r = l._length, i = 1; i < r; i += 1) 1 === i && a.push({
                                    t: "m",
                                    p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                                }), a.push({
                                    t: "c",
                                    pts: h.applyToTriplePoints(l.o[i - 1], l.i[i], l.v[i])
                                });
                                1 === r && a.push({
                                    t: "m",
                                    p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                                }), l.c && r && (a.push({
                                    t: "c",
                                    pts: h.applyToTriplePoints(l.o[i - 1], l.i[0], l.v[0])
                                }), a.push({
                                    t: "z"
                                }))
                            }
                        }
                        t.trNodes = a
                    }
                }, CVShapeElement.prototype.renderPath = function(t, e) {
                    if (!0 !== t.hd && t._shouldRender) {
                        var i, r = e.styledShapes.length;
                        for (i = 0; i < r; i += 1) this.renderStyledShape(e.styledShapes[i], e.sh)
                    }
                }, CVShapeElement.prototype.renderFill = function(t, e, i) {
                    var r = e.style;
                    (e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * i.opacity)
                }, CVShapeElement.prototype.renderGradientFill = function(t, e, i) {
                    var r, s = e.style;
                    if (!s.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
                        var a, n = this.globalData.canvasContext,
                            o = e.s.v,
                            h = e.e.v;
                        if (1 === t.t) r = n.createLinearGradient(o[0], o[1], h[0], h[1]);
                        else {
                            var l = Math.sqrt(Math.pow(o[0] - h[0], 2) + Math.pow(o[1] - h[1], 2)),
                                p = Math.atan2(h[1] - o[1], h[0] - o[0]),
                                u = e.h.v;
                            u >= 1 ? u = .99 : u <= -1 && (u = -.99);
                            var f = l * u,
                                c = Math.cos(p + e.a.v) * f + o[0],
                                m = Math.sin(p + e.a.v) * f + o[1];
                            r = n.createRadialGradient(c, m, 0, o[0], o[1], l)
                        }
                        var d = t.g.p,
                            g = e.g.c,
                            y = 1;
                        for (a = 0; a < d; a += 1) e.g._hasOpacity && e.g._collapsable && (y = e.g.o[2 * a + 1]), r.addColorStop(g[4 * a] / 100, "rgba(" + g[4 * a + 1] + "," + g[4 * a + 2] + "," + g[4 * a + 3] + "," + y + ")");
                        s.grd = r
                    }
                    s.coOp = e.o.v * i.opacity
                }, CVShapeElement.prototype.renderStroke = function(t, e, i) {
                    var r = e.style,
                        s = e.d;
                    s && (s._mdf || this._isFirstFrame) && (r.da = s.dashArray, r.do = s.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * i.opacity), (e.w._mdf || this._isFirstFrame) && (r.wi = e.w.v)
                }, CVShapeElement.prototype.destroy = function() {
                    this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
                }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
                    var t = this.canvasContext;
                    t.fillStyle = this.data.sc, t.fillRect(0, 0, this.data.sw, this.data.sh)
                }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
                    var t = this.textProperty.currentData;
                    this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                    var e = !1;
                    t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
                    var i = !1;
                    t.sc && (i = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
                    var r, s, a, n, o, h, l, p, u, f, c, m, d = this.globalData.fontManager.getFontByName(t.f),
                        g = t.l,
                        y = this.mHelper;
                    this.stroke = i, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, s = t.finalText.length;
                    var v = this.data.singleShape,
                        D = .001 * t.tr * t.finalSize,
                        E = 0,
                        b = 0,
                        C = !0,
                        x = 0;
                    for (r = 0; r < s; r += 1) {
                        for (n = (a = this.globalData.fontManager.getCharData(t.finalText[r], d.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && a.data || {}, y.reset(), v && g[r].n && (E = -D, b += t.yOffset, b += C ? 1 : 0, C = !1), u = (l = n.shapes ? n.shapes[0].it : []).length, y.scale(t.finalSize / 100, t.finalSize / 100), v && this.applyTextPropertiesToMatrix(t, y, g[r].line, E, b), c = createSizedArray(u), p = 0; p < u; p += 1) {
                            for (h = l[p].ks.k.i.length, f = l[p].ks.k, m = [], o = 1; o < h; o += 1) 1 === o && m.push(y.applyToX(f.v[0][0], f.v[0][1], 0), y.applyToY(f.v[0][0], f.v[0][1], 0)), m.push(y.applyToX(f.o[o - 1][0], f.o[o - 1][1], 0), y.applyToY(f.o[o - 1][0], f.o[o - 1][1], 0), y.applyToX(f.i[o][0], f.i[o][1], 0), y.applyToY(f.i[o][0], f.i[o][1], 0), y.applyToX(f.v[o][0], f.v[o][1], 0), y.applyToY(f.v[o][0], f.v[o][1], 0));
                            m.push(y.applyToX(f.o[o - 1][0], f.o[o - 1][1], 0), y.applyToY(f.o[o - 1][0], f.o[o - 1][1], 0), y.applyToX(f.i[0][0], f.i[0][1], 0), y.applyToY(f.i[0][0], f.i[0][1], 0), y.applyToX(f.v[0][0], f.v[0][1], 0), y.applyToY(f.v[0][0], f.v[0][1], 0)), c[p] = m
                        }
                        v && (E += g[r].l, E += D), this.textSpans[x] ? this.textSpans[x].elem = c : this.textSpans[x] = {
                            elem: c
                        }, x += 1
                    }
                }, CVTextElement.prototype.renderInnerContent = function() {
                    var t, e, i, r, s, a, n = this.canvasContext;
                    n.font = this.values.fValue, n.lineCap = "butt", n.lineJoin = "miter", n.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
                    var o, h = this.textAnimator.renderedLetters,
                        l = this.textProperty.currentData.l;
                    e = l.length;
                    var p, u, f = null,
                        c = null,
                        m = null;
                    for (t = 0; t < e; t += 1)
                        if (!l[t].n) {
                            if ((o = h[t]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(o.p), this.globalData.renderer.ctxOpacity(o.o)), this.fill) {
                                for (o && o.fc ? f !== o.fc && (f = o.fc, n.fillStyle = o.fc) : f !== this.values.fill && (f = this.values.fill, n.fillStyle = this.values.fill), r = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < r; i += 1)
                                    for (a = (u = p[i]).length, this.globalData.canvasContext.moveTo(u[0], u[1]), s = 2; s < a; s += 6) this.globalData.canvasContext.bezierCurveTo(u[s], u[s + 1], u[s + 2], u[s + 3], u[s + 4], u[s + 5]);
                                this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill()
                            }
                            if (this.stroke) {
                                for (o && o.sw ? m !== o.sw && (m = o.sw, n.lineWidth = o.sw) : m !== this.values.sWidth && (m = this.values.sWidth, n.lineWidth = this.values.sWidth), o && o.sc ? c !== o.sc && (c = o.sc, n.strokeStyle = o.sc) : c !== this.values.stroke && (c = this.values.stroke, n.strokeStyle = this.values.stroke), r = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < r; i += 1)
                                    for (a = (u = p[i]).length, this.globalData.canvasContext.moveTo(u[0], u[1]), s = 2; s < a; s += 6) this.globalData.canvasContext.bezierCurveTo(u[s], u[s + 1], u[s + 2], u[s + 3], u[s + 4], u[s + 5]);
                                this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke()
                            }
                            o && this.globalData.renderer.restore()
                        }
                }, CVEffects.prototype.renderFrame = function() {}, HBaseElement.prototype = {
                    checkBlendMode: function() {},
                    initRendererElement: function() {
                        this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
                    },
                    createContainerElements: function() {
                        this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
                    },
                    renderElement: function() {
                        var t = this.transformedElement ? this.transformedElement.style : {};
                        if (this.finalTransform._matMdf) {
                            var e = this.finalTransform.mat.toCSS();
                            t.transform = e, t.webkitTransform = e
                        }
                        this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v)
                    },
                    renderFrame: function() {
                        this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                    },
                    destroy: function() {
                        this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
                    },
                    createRenderableComponents: function() {
                        this.maskManager = new MaskElement(this.data, this, this.globalData)
                    },
                    addEffects: function() {},
                    setMatte: function() {}
                }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
                    var t;
                    this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t)
                }, extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
                    this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
                }, HCompElement.prototype.addTo3dContainer = function(t, e) {
                    for (var i, r = 0; r < e;) this.elements[r] && this.elements[r].getBaseElement && (i = this.elements[r].getBaseElement()), r += 1;
                    i ? this.layerElement.insertBefore(t, i) : this.layerElement.appendChild(t)
                }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
                    var t;
                    if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
                    else {
                        t = createNS("svg");
                        var e = this.comp.data ? this.comp.data : this.globalData.compSize;
                        t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t)
                    }
                    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t
                }, HShapeElement.prototype.getTransformedPoint = function(t, e) {
                    var i, r = t.length;
                    for (i = 0; i < r; i += 1) e = t[i].mProps.v.applyToPointArray(e[0], e[1], 0);
                    return e
                }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
                    var i, r, s, a, n, o = t.sh.v,
                        h = t.transformers,
                        l = o._length;
                    if (!(l <= 1)) {
                        for (i = 0; i < l - 1; i += 1) r = this.getTransformedPoint(h, o.v[i]), s = this.getTransformedPoint(h, o.o[i]), a = this.getTransformedPoint(h, o.i[i + 1]), n = this.getTransformedPoint(h, o.v[i + 1]), this.checkBounds(r, s, a, n, e);
                        o.c && (r = this.getTransformedPoint(h, o.v[i]), s = this.getTransformedPoint(h, o.o[i]), a = this.getTransformedPoint(h, o.i[0]), n = this.getTransformedPoint(h, o.v[0]), this.checkBounds(r, s, a, n, e))
                    }
                }, HShapeElement.prototype.checkBounds = function(t, e, i, r, s) {
                    this.getBoundsOfCurve(t, e, i, r);
                    var a = this.shapeBoundingBox;
                    s.x = bmMin(a.left, s.x), s.xMax = bmMax(a.right, s.xMax), s.y = bmMin(a.top, s.y), s.yMax = bmMax(a.bottom, s.yMax)
                }, HShapeElement.prototype.shapeBoundingBox = {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }, HShapeElement.prototype.tempBoundingBox = {
                    x: 0,
                    xMax: 0,
                    y: 0,
                    yMax: 0,
                    width: 0,
                    height: 0
                }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, i, r) {
                    for (var s, a, n, o, h, l, p, u = [
                            [t[0], r[0]],
                            [t[1], r[1]]
                        ], f = 0; f < 2; ++f) a = 6 * t[f] - 12 * e[f] + 6 * i[f], s = -3 * t[f] + 9 * e[f] - 9 * i[f] + 3 * r[f], n = 3 * e[f] - 3 * t[f], a |= 0, n |= 0, 0 == (s |= 0) && 0 === a || (0 === s ? (o = -n / a) > 0 && o < 1 && u[f].push(this.calculateF(o, t, e, i, r, f)) : (h = a * a - 4 * n * s) >= 0 && ((l = (-a + bmSqrt(h)) / (2 * s)) > 0 && l < 1 && u[f].push(this.calculateF(l, t, e, i, r, f)), (p = (-a - bmSqrt(h)) / (2 * s)) > 0 && p < 1 && u[f].push(this.calculateF(p, t, e, i, r, f))));
                    this.shapeBoundingBox.left = bmMin.apply(null, u[0]), this.shapeBoundingBox.top = bmMin.apply(null, u[1]), this.shapeBoundingBox.right = bmMax.apply(null, u[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, u[1])
                }, HShapeElement.prototype.calculateF = function(t, e, i, r, s, a) {
                    return bmPow(1 - t, 3) * e[a] + 3 * bmPow(1 - t, 2) * t * i[a] + 3 * (1 - t) * bmPow(t, 2) * r[a] + bmPow(t, 3) * s[a]
                }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
                    var i, r = t.length;
                    for (i = 0; i < r; i += 1) t[i] && t[i].sh ? this.calculateShapeBoundingBox(t[i], e) : t[i] && t[i].it && this.calculateBoundingBox(t[i].it, e)
                }, HShapeElement.prototype.currentBoxContains = function(t) {
                    return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
                }, HShapeElement.prototype.renderInnerContent = function() {
                    if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                        var t = this.tempBoundingBox,
                            e = 999999;
                        if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
                        var i = !1;
                        if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), i = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), i = !0), i || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
                            this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                            var r = this.shapeCont.style,
                                s = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                            r.transform = s, r.webkitTransform = s
                        }
                    }
                }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
                    if (this.isMasked = this.checkMasks(), this.isMasked) {
                        this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
                        var t = createNS("g");
                        this.maskedElement.appendChild(t), this.innerElem = t
                    } else this.renderType = "html", this.innerElem = this.layerElement;
                    this.checkParenting()
                }, HTextElement.prototype.buildNewText = function() {
                    var t = this.textProperty.currentData;
                    this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                    var e = this.innerElem.style,
                        i = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
                    e.fill = i, e.color = i, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
                    var r, s, a = this.globalData.fontManager.getFontByName(t.f);
                    if (!this.globalData.fontManager.chars)
                        if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", a.fClass) this.innerElem.className = a.fClass;
                        else {
                            e.fontFamily = a.fFamily;
                            var n = t.fWeight,
                                o = t.fStyle;
                            e.fontStyle = o, e.fontWeight = n
                        }
                    var h, l, p, u = t.l;
                    s = u.length;
                    var f, c = this.mHelper,
                        m = "",
                        d = 0;
                    for (r = 0; r < s; r += 1) {
                        if (this.globalData.fontManager.chars ? (this.textPaths[d] ? h = this.textPaths[d] : ((h = createNS("path")).setAttribute("stroke-linecap", "butt"), h.setAttribute("stroke-linejoin", "round"), h.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[d] ? p = (l = this.textSpans[d]).children[0] : ((l = createTag("div")).style.lineHeight = 0, (p = createNS("svg")).appendChild(h), styleDiv(l)))) : this.isMasked ? h = this.textPaths[d] ? this.textPaths[d] : createNS("text") : this.textSpans[d] ? (l = this.textSpans[d], h = this.textPaths[d]) : (styleDiv(l = createTag("span")), styleDiv(h = createTag("span")), l.appendChild(h)), this.globalData.fontManager.chars) {
                            var g, y = this.globalData.fontManager.getCharData(t.finalText[r], a.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
                            if (g = y ? y.data : null, c.reset(), g && g.shapes && (f = g.shapes[0].it, c.scale(t.finalSize / 100, t.finalSize / 100), m = this.createPathShape(c, f), h.setAttribute("d", m)), this.isMasked) this.innerElem.appendChild(h);
                            else {
                                if (this.innerElem.appendChild(l), g && g.shapes) {
                                    document.body.appendChild(p);
                                    var v = p.getBBox();
                                    p.setAttribute("width", v.width + 2), p.setAttribute("height", v.height + 2), p.setAttribute("viewBox", v.x - 1 + " " + (v.y - 1) + " " + (v.width + 2) + " " + (v.height + 2));
                                    var D = p.style,
                                        E = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
                                    D.transform = E, D.webkitTransform = E, u[r].yOffset = v.y - 1
                                } else p.setAttribute("width", 1), p.setAttribute("height", 1);
                                l.appendChild(p)
                            }
                        } else if (h.textContent = u[r].val, h.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(h);
                        else {
                            this.innerElem.appendChild(l);
                            var b = h.style,
                                C = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
                            b.transform = C, b.webkitTransform = C
                        }
                        this.isMasked ? this.textSpans[d] = h : this.textSpans[d] = l, this.textSpans[d].style.display = "block", this.textPaths[d] = h, d += 1
                    }
                    for (; d < this.textSpans.length;) this.textSpans[d].style.display = "none", d += 1
                }, HTextElement.prototype.renderInnerContent = function() {
                    var t;
                    if (this.data.singleShape) {
                        if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                        if (this.isMasked && this.finalTransform._matMdf) {
                            this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style;
                            var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                            t.transform = e, t.webkitTransform = e
                        }
                    }
                    if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                        var i, r, s, a, n, o = 0,
                            h = this.textAnimator.renderedLetters,
                            l = this.textProperty.currentData.l;
                        for (r = l.length, i = 0; i < r; i += 1) l[i].n ? o += 1 : (a = this.textSpans[i], n = this.textPaths[i], s = h[o], o += 1, s._mdf.m && (this.isMasked ? a.setAttribute("transform", s.m) : (a.style.webkitTransform = s.m, a.style.transform = s.m)), a.style.opacity = s.o, s.sw && s._mdf.sw && n.setAttribute("stroke-width", s.sw), s.sc && s._mdf.sc && n.setAttribute("stroke", s.sc), s.fc && s._mdf.fc && (n.setAttribute("fill", s.fc), n.style.color = s.fc));
                        if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                            var p = this.innerElem.getBBox();
                            if (this.currentBBox.w !== p.width && (this.currentBBox.w = p.width, this.svgElement.setAttribute("width", p.width)), this.currentBBox.h !== p.height && (this.currentBBox.h = p.height, this.svgElement.setAttribute("height", p.height)), this.currentBBox.w !== p.width + 2 || this.currentBBox.h !== p.height + 2 || this.currentBBox.x !== p.x - 1 || this.currentBBox.y !== p.y - 1) {
                                this.currentBBox.w = p.width + 2, this.currentBBox.h = p.height + 2, this.currentBBox.x = p.x - 1, this.currentBBox.y = p.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
                                var u = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                                t.transform = u, t.webkitTransform = u
                            }
                        }
                    }
                }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
                    var t = this.globalData.getAssetsPath(this.assetData),
                        e = new Image;
                    this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
                }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
                    var t, e, i, r, s = this.comp.threeDElements.length;
                    for (t = 0; t < s; t += 1)
                        if ("3d" === (e = this.comp.threeDElements[t]).type) {
                            i = e.perspectiveElem.style, r = e.container.style;
                            var a = this.pe.v + "px",
                                n = "0px 0px 0px",
                                o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                            i.perspective = a, i.webkitPerspective = a, r.transformOrigin = n, r.mozTransformOrigin = n, r.webkitTransformOrigin = n, i.transform = o, i.webkitTransform = o
                        }
                }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
                    var t, e, i = this._isFirstFrame;
                    if (this.hierarchy)
                        for (e = this.hierarchy.length, t = 0; t < e; t += 1) i = this.hierarchy[t].finalTransform.mProp._mdf || i;
                    if (i || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                        if (this.mat.reset(), this.hierarchy)
                            for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                                var r = this.hierarchy[t].finalTransform.mProp;
                                this.mat.translate(-r.p.v[0], -r.p.v[1], r.p.v[2]), this.mat.rotateX(-r.or.v[0]).rotateY(-r.or.v[1]).rotateZ(r.or.v[2]), this.mat.rotateX(-r.rx.v).rotateY(-r.ry.v).rotateZ(r.rz.v), this.mat.scale(1 / r.s.v[0], 1 / r.s.v[1], 1 / r.s.v[2]), this.mat.translate(r.a.v[0], r.a.v[1], r.a.v[2])
                            }
                        if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                            var s;
                            s = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                            var a = Math.sqrt(Math.pow(s[0], 2) + Math.pow(s[1], 2) + Math.pow(s[2], 2)),
                                n = [s[0] / a, s[1] / a, s[2] / a],
                                o = Math.sqrt(n[2] * n[2] + n[0] * n[0]),
                                h = Math.atan2(n[1], o),
                                l = Math.atan2(n[0], -n[2]);
                            this.mat.rotateY(l).rotateX(-h)
                        }
                        this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                        var p = !this._prevMat.equals(this.mat);
                        if ((p || this.pe._mdf) && this.comp.threeDElements) {
                            var u, f, c;
                            for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)
                                if ("3d" === (u = this.comp.threeDElements[t]).type) {
                                    if (p) {
                                        var m = this.mat.toCSS();
                                        (c = u.container.style).transform = m, c.webkitTransform = m
                                    }
                                    this.pe._mdf && ((f = u.perspectiveElem.style).perspective = this.pe.v + "px", f.webkitPerspective = this.pe.v + "px")
                                }
                            this.mat.clone(this._prevMat)
                        }
                    }
                    this._isFirstFrame = !1
                }, HCameraElement.prototype.prepareFrame = function(t) {
                    this.prepareProperties(t, !0)
                }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
                    return null
                }, HEffects.prototype.renderFrame = function() {};
                var animationManager = function() {
                        var t = {},
                            e = [],
                            i = 0,
                            r = 0,
                            s = 0,
                            a = !0,
                            n = !1;

                        function o(t) {
                            for (var i = 0, s = t.target; i < r;) e[i].animation === s && (e.splice(i, 1), i -= 1, r -= 1, s.isPaused || p()), i += 1
                        }

                        function h(t, i) {
                            if (!t) return null;
                            for (var s = 0; s < r;) {
                                if (e[s].elem === t && null !== e[s].elem) return e[s].animation;
                                s += 1
                            }
                            var a = new AnimationItem;
                            return u(a, t), a.setData(t, i), a
                        }

                        function l() {
                            s += 1, m()
                        }

                        function p() {
                            s -= 1
                        }

                        function u(t, i) {
                            t.addEventListener("destroy", o), t.addEventListener("_active", l), t.addEventListener("_idle", p), e.push({
                                elem: i,
                                animation: t
                            }), r += 1
                        }

                        function f(t) {
                            var o, h = t - i;
                            for (o = 0; o < r; o += 1) e[o].animation.advanceTime(h);
                            i = t, s && !n ? window.requestAnimationFrame(f) : a = !0
                        }

                        function c(t) {
                            i = t, window.requestAnimationFrame(f)
                        }

                        function m() {
                            !n && s && a && (window.requestAnimationFrame(c), a = !1)
                        }
                        return t.registerAnimation = h, t.loadAnimation = function(t) {
                            var e = new AnimationItem;
                            return u(e, null), e.setParams(t), e
                        }, t.setSpeed = function(t, i) {
                            var s;
                            for (s = 0; s < r; s += 1) e[s].animation.setSpeed(t, i)
                        }, t.setDirection = function(t, i) {
                            var s;
                            for (s = 0; s < r; s += 1) e[s].animation.setDirection(t, i)
                        }, t.play = function(t) {
                            var i;
                            for (i = 0; i < r; i += 1) e[i].animation.play(t)
                        }, t.pause = function(t) {
                            var i;
                            for (i = 0; i < r; i += 1) e[i].animation.pause(t)
                        }, t.stop = function(t) {
                            var i;
                            for (i = 0; i < r; i += 1) e[i].animation.stop(t)
                        }, t.togglePause = function(t) {
                            var i;
                            for (i = 0; i < r; i += 1) e[i].animation.togglePause(t)
                        }, t.searchAnimations = function(t, e, i) {
                            var r, s = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                                a = s.length;
                            for (r = 0; r < a; r += 1) i && s[r].setAttribute("data-bm-type", i), h(s[r], t);
                            if (e && 0 === a) {
                                i || (i = "svg");
                                var n = document.getElementsByTagName("body")[0];
                                n.innerText = "";
                                var o = createTag("div");
                                o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", i), n.appendChild(o), h(o, t)
                            }
                        }, t.resize = function() {
                            var t;
                            for (t = 0; t < r; t += 1) e[t].animation.resize()
                        }, t.goToAndStop = function(t, i, s) {
                            var a;
                            for (a = 0; a < r; a += 1) e[a].animation.goToAndStop(t, i, s)
                        }, t.destroy = function(t) {
                            var i;
                            for (i = r - 1; i >= 0; i -= 1) e[i].animation.destroy(t)
                        }, t.freeze = function() {
                            n = !0
                        }, t.unfreeze = function() {
                            n = !1, m()
                        }, t.setVolume = function(t, i) {
                            var s;
                            for (s = 0; s < r; s += 1) e[s].animation.setVolume(t, i)
                        }, t.mute = function(t) {
                            var i;
                            for (i = 0; i < r; i += 1) e[i].animation.mute(t)
                        }, t.unmute = function(t) {
                            var i;
                            for (i = 0; i < r; i += 1) e[i].animation.unmute(t)
                        }, t.getRegisteredAnimations = function() {
                            var t, i = e.length,
                                r = [];
                            for (t = 0; t < i; t += 1) r.push(e[t].animation);
                            return r
                        }, t
                    }(),
                    AnimationItem = function() {
                        this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = subframeEnabled, this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = []
                    };
                extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
                    (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
                    var e = "svg";
                    switch (t.animType ? e = t.animType : t.renderer && (e = t.renderer), e) {
                        case "canvas":
                            this.renderer = new CanvasRenderer(this, t.rendererSettings);
                            break;
                        case "svg":
                            this.renderer = new SVGRenderer(this, t.rendererSettings);
                            break;
                        default:
                            this.renderer = new HybridRenderer(this, t.rendererSettings)
                    }
                    this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.configAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), assetLoader.load(t.path, this.configAnimation.bind(this), function() {
                        this.trigger("data_failed")
                    }.bind(this)))
                }, AnimationItem.prototype.setData = function(t, e) {
                    e && "object" != typeof e && (e = JSON.parse(e));
                    var i = {
                            wrapper: t,
                            animationData: e
                        },
                        r = t.attributes;
                    i.path = r.getNamedItem("data-animation-path") ? r.getNamedItem("data-animation-path").value : r.getNamedItem("data-bm-path") ? r.getNamedItem("data-bm-path").value : r.getNamedItem("bm-path") ? r.getNamedItem("bm-path").value : "", i.animType = r.getNamedItem("data-anim-type") ? r.getNamedItem("data-anim-type").value : r.getNamedItem("data-bm-type") ? r.getNamedItem("data-bm-type").value : r.getNamedItem("bm-type") ? r.getNamedItem("bm-type").value : r.getNamedItem("data-bm-renderer") ? r.getNamedItem("data-bm-renderer").value : r.getNamedItem("bm-renderer") ? r.getNamedItem("bm-renderer").value : "canvas";
                    var s = r.getNamedItem("data-anim-loop") ? r.getNamedItem("data-anim-loop").value : r.getNamedItem("data-bm-loop") ? r.getNamedItem("data-bm-loop").value : r.getNamedItem("bm-loop") ? r.getNamedItem("bm-loop").value : "";
                    "false" === s ? i.loop = !1 : "true" === s ? i.loop = !0 : "" !== s && (i.loop = parseInt(s, 10));
                    var a = r.getNamedItem("data-anim-autoplay") ? r.getNamedItem("data-anim-autoplay").value : r.getNamedItem("data-bm-autoplay") ? r.getNamedItem("data-bm-autoplay").value : !r.getNamedItem("bm-autoplay") || r.getNamedItem("bm-autoplay").value;
                    i.autoplay = "false" !== a, i.name = r.getNamedItem("data-name") ? r.getNamedItem("data-name").value : r.getNamedItem("data-bm-name") ? r.getNamedItem("data-bm-name").value : r.getNamedItem("bm-name") ? r.getNamedItem("bm-name").value : "", "false" === (r.getNamedItem("data-anim-prerender") ? r.getNamedItem("data-anim-prerender").value : r.getNamedItem("data-bm-prerender") ? r.getNamedItem("data-bm-prerender").value : r.getNamedItem("bm-prerender") ? r.getNamedItem("bm-prerender").value : "") && (i.prerender = !1), this.setParams(i)
                }, AnimationItem.prototype.includeLayers = function(t) {
                    t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
                    var e, i, r = this.animationData.layers,
                        s = r.length,
                        a = t.layers,
                        n = a.length;
                    for (i = 0; i < n; i += 1)
                        for (e = 0; e < s;) {
                            if (r[e].id === a[i].id) {
                                r[e] = a[i];
                                break
                            }
                            e += 1
                        }
                    if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
                        for (s = t.assets.length, e = 0; e < s; e += 1) this.animationData.assets.push(t.assets[e]);
                    this.animationData.__complete = !1, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(t.layers), expressionsPlugin && expressionsPlugin.initExpressions(this), this.loadNextSegment()
                }, AnimationItem.prototype.loadNextSegment = function() {
                    var t = this.animationData.segments;
                    if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
                    var e = t.shift();
                    this.timeCompleted = e.time * this.frameRate;
                    var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
                    this.segmentPos += 1, assetLoader.load(i, this.includeLayers.bind(this), function() {
                        this.trigger("data_failed")
                    }.bind(this))
                }, AnimationItem.prototype.loadSegments = function() {
                    this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
                }, AnimationItem.prototype.imagesLoaded = function() {
                    this.trigger("loaded_images"), this.checkLoaded()
                }, AnimationItem.prototype.preloadImages = function() {
                    this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
                }, AnimationItem.prototype.configAnimation = function(t) {
                    if (this.renderer) try {
                        this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
                    } catch (t) {
                        this.triggerConfigError(t)
                    }
                }, AnimationItem.prototype.waitForFontsLoaded = function() {
                    this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
                }, AnimationItem.prototype.checkLoaded = function() {
                    !this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages() && (this.isLoaded = !0, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
                        this.trigger("DOMLoaded")
                    }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play())
                }, AnimationItem.prototype.resize = function() {
                    this.renderer.updateContainerSize()
                }, AnimationItem.prototype.setSubframe = function(t) {
                    this.isSubframeEnabled = !!t
                }, AnimationItem.prototype.gotoFrame = function() {
                    this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame()
                }, AnimationItem.prototype.renderFrame = function() {
                    if (!1 !== this.isLoaded && this.renderer) try {
                        this.renderer.renderFrame(this.currentFrame + this.firstFrame)
                    } catch (t) {
                        this.triggerRenderFrameError(t)
                    }
                }, AnimationItem.prototype.play = function(t) {
                    t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
                }, AnimationItem.prototype.pause = function(t) {
                    t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this._idle = !0, this.trigger("_idle"), this.audioController.pause())
                }, AnimationItem.prototype.togglePause = function(t) {
                    t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause())
                }, AnimationItem.prototype.stop = function(t) {
                    t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
                }, AnimationItem.prototype.getMarkerData = function(t) {
                    for (var e, i = 0; i < this.markers.length; i += 1)
                        if ((e = this.markers[i]).payload && e.payload.name === t) return e;
                    return null
                }, AnimationItem.prototype.goToAndStop = function(t, e, i) {
                    if (!i || this.name === i) {
                        var r = Number(t);
                        if (isNaN(r)) {
                            var s = this.getMarkerData(t);
                            s && this.goToAndStop(s.time, !0)
                        } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                        this.pause()
                    }
                }, AnimationItem.prototype.goToAndPlay = function(t, e, i) {
                    if (!i || this.name === i) {
                        var r = Number(t);
                        if (isNaN(r)) {
                            var s = this.getMarkerData(t);
                            s && (s.duration ? this.playSegments([s.time, s.time + s.duration], !0) : this.goToAndStop(s.time, !0))
                        } else this.goToAndStop(r, e, i);
                        this.play()
                    }
                }, AnimationItem.prototype.advanceTime = function(t) {
                    if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                        var e = this.currentRawFrame + t * this.frameModifier,
                            i = !1;
                        e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (i = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), i && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
                    }
                }, AnimationItem.prototype.adjustSegment = function(t, e) {
                    this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
                }, AnimationItem.prototype.setSegment = function(t, e) {
                    var i = -1;
                    this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== i && this.goToAndStop(i, !0)
                }, AnimationItem.prototype.playSegments = function(t, e) {
                    if (e && (this.segments.length = 0), "object" == typeof t[0]) {
                        var i, r = t.length;
                        for (i = 0; i < r; i += 1) this.segments.push(t[i])
                    } else this.segments.push(t);
                    this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
                }, AnimationItem.prototype.resetSegments = function(t) {
                    this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
                }, AnimationItem.prototype.checkSegments = function(t) {
                    return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
                }, AnimationItem.prototype.destroy = function(t) {
                    t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.renderer = null, this.imagePreloader = null, this.projectInterface = null)
                }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
                    this.currentRawFrame = t, this.gotoFrame()
                }, AnimationItem.prototype.setSpeed = function(t) {
                    this.playSpeed = t, this.updaFrameModifier()
                }, AnimationItem.prototype.setDirection = function(t) {
                    this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
                }, AnimationItem.prototype.setVolume = function(t, e) {
                    e && this.name !== e || this.audioController.setVolume(t)
                }, AnimationItem.prototype.getVolume = function() {
                    return this.audioController.getVolume()
                }, AnimationItem.prototype.mute = function(t) {
                    t && this.name !== t || this.audioController.mute()
                }, AnimationItem.prototype.unmute = function(t) {
                    t && this.name !== t || this.audioController.unmute()
                }, AnimationItem.prototype.updaFrameModifier = function() {
                    this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
                }, AnimationItem.prototype.getPath = function() {
                    return this.path
                }, AnimationItem.prototype.getAssetsPath = function(t) {
                    var e = "";
                    if (t.e) e = t.p;
                    else if (this.assetsPath) {
                        var i = t.p; - 1 !== i.indexOf("images/") && (i = i.split("/")[1]), e = this.assetsPath + i
                    } else e = this.path, e += t.u ? t.u : "", e += t.p;
                    return e
                }, AnimationItem.prototype.getAssetData = function(t) {
                    for (var e = 0, i = this.assets.length; e < i;) {
                        if (t === this.assets[e].id) return this.assets[e];
                        e += 1
                    }
                    return null
                }, AnimationItem.prototype.hide = function() {
                    this.renderer.hide()
                }, AnimationItem.prototype.show = function() {
                    this.renderer.show()
                }, AnimationItem.prototype.getDuration = function(t) {
                    return t ? this.totalFrames : this.totalFrames / this.frameRate
                }, AnimationItem.prototype.trigger = function(t) {
                    if (this._cbs && this._cbs[t]) switch (t) {
                        case "enterFrame":
                            this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
                            break;
                        case "loopComplete":
                            this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
                            break;
                        case "complete":
                            this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                            break;
                        case "segmentStart":
                            this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
                            break;
                        case "destroy":
                            this.triggerEvent(t, new BMDestroyEvent(t, this));
                            break;
                        default:
                            this.triggerEvent(t)
                    }
                    "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
                }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
                    var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
                    this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
                }, AnimationItem.prototype.triggerConfigError = function(t) {
                    var e = new BMConfigErrorEvent(t, this.currentFrame);
                    this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
                };
                var Expressions = {
                    initExpressions: function(t) {
                        var e = 0,
                            i = [];
                        t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function() {
                            e += 1
                        }, t.renderer.globalData.popExpression = function() {
                            0 == (e -= 1) && function() {
                                var t, e = i.length;
                                for (t = 0; t < e; t += 1) i[t].release();
                                i.length = 0
                            }()
                        }, t.renderer.globalData.registerExpressionProperty = function(t) {
                            -1 === i.indexOf(t) && i.push(t)
                        }
                    }
                };
                expressionsPlugin = Expressions;
                var ExpressionManager = function() {
                        var ob = {},
                            Math = BMMath,
                            window = null,
                            document = null;

                        function $bm_isInstanceOfArray(t) {
                            return t.constructor === Array || t.constructor === Float32Array
                        }

                        function isNumerable(t, e) {
                            return "number" === t || "boolean" === t || "string" === t || e instanceof Number
                        }

                        function $bm_neg(t) {
                            var e = typeof t;
                            if ("number" === e || "boolean" === e || t instanceof Number) return -t;
                            if ($bm_isInstanceOfArray(t)) {
                                var i, r = t.length,
                                    s = [];
                                for (i = 0; i < r; i += 1) s[i] = -t[i];
                                return s
                            }
                            return t.propType ? t.v : -t
                        }
                        var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
                            easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
                            easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

                        function sum(t, e) {
                            var i = typeof t,
                                r = typeof e;
                            if ("string" === i || "string" === r) return t + e;
                            if (isNumerable(i, t) && isNumerable(r, e)) return t + e;
                            if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) return (t = t.slice(0))[0] += e, t;
                            if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e;
                            if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                                for (var s = 0, a = t.length, n = e.length, o = []; s < a || s < n;)("number" == typeof t[s] || t[s] instanceof Number) && ("number" == typeof e[s] || e[s] instanceof Number) ? o[s] = t[s] + e[s] : o[s] = void 0 === e[s] ? t[s] : t[s] || e[s], s += 1;
                                return o
                            }
                            return 0
                        }
                        var add = sum;

                        function sub(t, e) {
                            var i = typeof t,
                                r = typeof e;
                            if (isNumerable(i, t) && isNumerable(r, e)) return "string" === i && (t = parseInt(t, 10)), "string" === r && (e = parseInt(e, 10)), t - e;
                            if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) return (t = t.slice(0))[0] -= e, t;
                            if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e;
                            if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                                for (var s = 0, a = t.length, n = e.length, o = []; s < a || s < n;)("number" == typeof t[s] || t[s] instanceof Number) && ("number" == typeof e[s] || e[s] instanceof Number) ? o[s] = t[s] - e[s] : o[s] = void 0 === e[s] ? t[s] : t[s] || e[s], s += 1;
                                return o
                            }
                            return 0
                        }

                        function mul(t, e) {
                            var i, r, s, a = typeof t,
                                n = typeof e;
                            if (isNumerable(a, t) && isNumerable(n, e)) return t * e;
                            if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                                for (s = t.length, i = createTypedArray("float32", s), r = 0; r < s; r += 1) i[r] = t[r] * e;
                                return i
                            }
                            if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                                for (s = e.length, i = createTypedArray("float32", s), r = 0; r < s; r += 1) i[r] = t * e[r];
                                return i
                            }
                            return 0
                        }

                        function div(t, e) {
                            var i, r, s, a = typeof t,
                                n = typeof e;
                            if (isNumerable(a, t) && isNumerable(n, e)) return t / e;
                            if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                                for (s = t.length, i = createTypedArray("float32", s), r = 0; r < s; r += 1) i[r] = t[r] / e;
                                return i
                            }
                            if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                                for (s = e.length, i = createTypedArray("float32", s), r = 0; r < s; r += 1) i[r] = t / e[r];
                                return i
                            }
                            return 0
                        }

                        function mod(t, e) {
                            return "string" == typeof t && (t = parseInt(t, 10)), "string" == typeof e && (e = parseInt(e, 10)), t % e
                        }
                        var $bm_sum = sum,
                            $bm_sub = sub,
                            $bm_mul = mul,
                            $bm_div = div,
                            $bm_mod = mod;

                        function clamp(t, e, i) {
                            if (e > i) {
                                var r = i;
                                i = e, e = r
                            }
                            return Math.min(Math.max(t, e), i)
                        }

                        function radiansToDegrees(t) {
                            return t / degToRads
                        }
                        var radians_to_degrees = radiansToDegrees;

                        function degreesToRadians(t) {
                            return t * degToRads
                        }
                        var degrees_to_radians = radiansToDegrees,
                            helperLengthArray = [0, 0, 0, 0, 0, 0];

                        function length(t, e) {
                            if ("number" == typeof t || t instanceof Number) return e = e || 0, Math.abs(t - e);
                            var i;
                            e || (e = helperLengthArray);
                            var r = Math.min(t.length, e.length),
                                s = 0;
                            for (i = 0; i < r; i += 1) s += Math.pow(e[i] - t[i], 2);
                            return Math.sqrt(s)
                        }

                        function normalize(t) {
                            return div(t, length(t))
                        }

                        function rgbToHsl(t) {
                            var e, i, r = t[0],
                                s = t[1],
                                a = t[2],
                                n = Math.max(r, s, a),
                                o = Math.min(r, s, a),
                                h = (n + o) / 2;
                            if (n === o) e = 0, i = 0;
                            else {
                                var l = n - o;
                                switch (i = h > .5 ? l / (2 - n - o) : l / (n + o), n) {
                                    case r:
                                        e = (s - a) / l + (s < a ? 6 : 0);
                                        break;
                                    case s:
                                        e = (a - r) / l + 2;
                                        break;
                                    case a:
                                        e = (r - s) / l + 4
                                }
                                e /= 6
                            }
                            return [e, i, h, t[3]]
                        }

                        function hue2rgb(t, e, i) {
                            return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
                        }

                        function hslToRgb(t) {
                            var e, i, r, s = t[0],
                                a = t[1],
                                n = t[2];
                            if (0 === a) e = n, r = n, i = n;
                            else {
                                var o = n < .5 ? n * (1 + a) : n + a - n * a,
                                    h = 2 * n - o;
                                e = hue2rgb(h, o, s + 1 / 3), i = hue2rgb(h, o, s), r = hue2rgb(h, o, s - 1 / 3)
                            }
                            return [e, i, r, t[3]]
                        }

                        function linear(t, e, i, r, s) {
                            if (void 0 !== r && void 0 !== s || (r = e, s = i, e = 0, i = 1), i < e) {
                                var a = i;
                                i = e, e = a
                            }
                            if (t <= e) return r;
                            if (t >= i) return s;
                            var n, o = i === e ? 0 : (t - e) / (i - e);
                            if (!r.length) return r + (s - r) * o;
                            var h = r.length,
                                l = createTypedArray("float32", h);
                            for (n = 0; n < h; n += 1) l[n] = r[n] + (s[n] - r[n]) * o;
                            return l
                        }

                        function random(t, e) {
                            if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                                var i, r = e.length;
                                t || (t = createTypedArray("float32", r));
                                var s = createTypedArray("float32", r),
                                    a = BMMath.random();
                                for (i = 0; i < r; i += 1) s[i] = t[i] + a * (e[i] - t[i]);
                                return s
                            }
                            return void 0 === t && (t = 0), t + BMMath.random() * (e - t)
                        }

                        function createPath(t, e, i, r) {
                            var s, a = t.length,
                                n = shapePool.newElement();
                            n.setPathData(!!r, a);
                            var o, h, l = [0, 0];
                            for (s = 0; s < a; s += 1) o = e && e[s] ? e[s] : l, h = i && i[s] ? i[s] : l, n.setTripleAt(t[s][0], t[s][1], h[0] + t[s][0], h[1] + t[s][1], o[0] + t[s][0], o[1] + t[s][1], s, !0);
                            return n
                        }

                        function initiateExpression(elem, data, property) {
                            var val = data.x,
                                needsVelocity = /velocity(?![\w\d])/.test(val),
                                _needsRandom = -1 !== val.indexOf("random"),
                                elemType = elem.data.ty,
                                transform, $bm_transform, content, effect, thisProperty = property;
                            thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                                get: function() {
                                    return thisProperty.v
                                }
                            }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                            var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                                outPoint = elem.data.op / elem.comp.globalData.frameRate,
                                width = elem.data.sw ? elem.data.sw : 0,
                                height = elem.data.sh ? elem.data.sh : 0,
                                name = elem.data.nm,
                                loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                                numKeys = property.kf ? data.k.length : 0,
                                active = !this.data || !0 !== this.data.hd,
                                wiggle = function(t, e) {
                                    var i, r, s = this.pv.length ? this.pv.length : 1,
                                        a = createTypedArray("float32", s),
                                        n = Math.floor(5 * time);
                                    for (i = 0, r = 0; i < n;) {
                                        for (r = 0; r < s; r += 1) a[r] += -e + 2 * e * BMMath.random();
                                        i += 1
                                    }
                                    var o = 5 * time,
                                        h = o - Math.floor(o),
                                        l = createTypedArray("float32", s);
                                    if (s > 1) {
                                        for (r = 0; r < s; r += 1) l[r] = this.pv[r] + a[r] + (-e + 2 * e * BMMath.random()) * h;
                                        return l
                                    }
                                    return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * h
                                }.bind(this);

                            function loopInDuration(t, e) {
                                return loopIn(t, e, !0)
                            }

                            function loopOutDuration(t, e) {
                                return loopOut(t, e, !0)
                            }
                            thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                            var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                                time, velocity, value, text, textIndex, textTotal, selectorValue;

                            function lookAt(t, e) {
                                var i = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                                    r = Math.atan2(i[0], Math.sqrt(i[1] * i[1] + i[2] * i[2])) / degToRads;
                                return [-Math.atan2(i[1], i[2]) / degToRads, r, 0]
                            }

                            function easeOut(t, e, i, r, s) {
                                return applyEase(easeOutBez, t, e, i, r, s)
                            }

                            function easeIn(t, e, i, r, s) {
                                return applyEase(easeInBez, t, e, i, r, s)
                            }

                            function ease(t, e, i, r, s) {
                                return applyEase(easeInOutBez, t, e, i, r, s)
                            }

                            function applyEase(t, e, i, r, s, a) {
                                void 0 === s ? (s = i, a = r) : e = (e - i) / (r - i), e > 1 ? e = 1 : e < 0 && (e = 0);
                                var n = t(e);
                                if ($bm_isInstanceOfArray(s)) {
                                    var o, h = s.length,
                                        l = createTypedArray("float32", h);
                                    for (o = 0; o < h; o += 1) l[o] = (a[o] - s[o]) * n + s[o];
                                    return l
                                }
                                return (a - s) * n + s
                            }

                            function nearestKey(t) {
                                var e, i, r, s = data.k.length;
                                if (data.k.length && "number" != typeof data.k[0])
                                    if (i = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) i = 1, r = data.k[0].t;
                                    else {
                                        for (e = 0; e < s - 1; e += 1) {
                                            if (t === data.k[e].t) {
                                                i = e + 1, r = data.k[e].t;
                                                break
                                            }
                                            if (t > data.k[e].t && t < data.k[e + 1].t) {
                                                t - data.k[e].t > data.k[e + 1].t - t ? (i = e + 2, r = data.k[e + 1].t) : (i = e + 1, r = data.k[e].t);
                                                break
                                            }
                                        } - 1 === i && (i = e + 1, r = data.k[e].t)
                                    }
                                else i = 0, r = 0;
                                var a = {};
                                return a.index = i, a.time = r / elem.comp.globalData.frameRate, a
                            }

                            function key(t) {
                                var e, i, r;
                                if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
                                t -= 1, e = {
                                    time: data.k[t].t / elem.comp.globalData.frameRate,
                                    value: []
                                };
                                var s = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                                for (r = s.length, i = 0; i < r; i += 1) e[i] = s[i], e.value[i] = s[i];
                                return e
                            }

                            function framesToTime(t, e) {
                                return e || (e = elem.comp.globalData.frameRate), t / e
                            }

                            function timeToFrames(t, e) {
                                return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e
                            }

                            function seedRandom(t) {
                                BMMath.seedrandom(randSeed + t)
                            }

                            function sourceRectAtTime() {
                                return elem.sourceRectAtTime()
                            }

                            function substring(t, e) {
                                return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : ""
                            }

                            function substr(t, e) {
                                return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : ""
                            }

                            function posterizeTime(t) {
                                time = 0 === t ? 0 : Math.floor(time * t) / t, value = valueAtTime(time)
                            }
                            var index = elem.data.ind,
                                hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                                parent, randSeed = Math.floor(1e6 * Math.random()),
                                globalData = elem.globalData;

                            function executeExpression(t) {
                                return value = t, _needsRandom && seedRandom(randSeed), this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, "shape" === scoped_bm_rt.propType && (scoped_bm_rt = scoped_bm_rt.v), scoped_bm_rt)
                            }
                            return executeExpression
                        }
                        return ob.initiateExpression = initiateExpression, ob
                    }(),
                    expressionHelpers = {
                        searchExpressions: function(t, e, i) {
                            e.x && (i.k = !0, i.x = !0, i.initiateExpression = ExpressionManager.initiateExpression, i.effectsSequence.push(i.initiateExpression(t, e, i).bind(i)))
                        },
                        getSpeedAtTime: function(t) {
                            var e = this.getValueAtTime(t),
                                i = this.getValueAtTime(t + -.01),
                                r = 0;
                            if (e.length) {
                                var s;
                                for (s = 0; s < e.length; s += 1) r += Math.pow(i[s] - e[s], 2);
                                r = 100 * Math.sqrt(r)
                            } else r = 0;
                            return r
                        },
                        getVelocityAtTime: function(t) {
                            if (void 0 !== this.vel) return this.vel;
                            var e, i, r = -.001,
                                s = this.getValueAtTime(t),
                                a = this.getValueAtTime(t + r);
                            if (s.length)
                                for (e = createTypedArray("float32", s.length), i = 0; i < s.length; i += 1) e[i] = (a[i] - s[i]) / r;
                            else e = (a - s) / r;
                            return e
                        },
                        getValueAtTime: function(t) {
                            return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value
                        },
                        getStaticValueAtTime: function() {
                            return this.pv
                        },
                        setGroupProperty: function(t) {
                            this.propertyGroup = t
                        }
                    };
                ! function() {
                    function t(t, e, i) {
                        if (!this.k || !this.keyframes) return this.pv;
                        t = t ? t.toLowerCase() : "";
                        var r, s, a, n, o, h = this.comp.renderedFrame,
                            l = this.keyframes,
                            p = l[l.length - 1].t;
                        if (h <= p) return this.pv;
                        if (i ? s = p - (r = e ? Math.abs(p - this.elem.comp.globalData.frameRate * e) : Math.max(0, p - this.elem.data.ip)) : ((!e || e > l.length - 1) && (e = l.length - 1), r = p - (s = l[l.length - 1 - e].t)), "pingpong" === t) {
                            if (Math.floor((h - s) / r) % 2 != 0) return this.getValueAtTime((r - (h - s) % r + s) / this.comp.globalData.frameRate, 0)
                        } else {
                            if ("offset" === t) {
                                var u = this.getValueAtTime(s / this.comp.globalData.frameRate, 0),
                                    f = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                    c = this.getValueAtTime(((h - s) % r + s) / this.comp.globalData.frameRate, 0),
                                    m = Math.floor((h - s) / r);
                                if (this.pv.length) {
                                    for (n = (o = new Array(u.length)).length, a = 0; a < n; a += 1) o[a] = (f[a] - u[a]) * m + c[a];
                                    return o
                                }
                                return (f - u) * m + c
                            }
                            if ("continue" === t) {
                                var d = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                    g = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0);
                                if (this.pv.length) {
                                    for (n = (o = new Array(d.length)).length, a = 0; a < n; a += 1) o[a] = d[a] + (d[a] - g[a]) * ((h - p) / this.comp.globalData.frameRate) / 5e-4;
                                    return o
                                }
                                return d + (h - p) / .001 * (d - g)
                            }
                        }
                        return this.getValueAtTime(((h - s) % r + s) / this.comp.globalData.frameRate, 0)
                    }

                    function e(t, e, i) {
                        if (!this.k) return this.pv;
                        t = t ? t.toLowerCase() : "";
                        var r, s, a, n, o, h = this.comp.renderedFrame,
                            l = this.keyframes,
                            p = l[0].t;
                        if (h >= p) return this.pv;
                        if (i ? s = p + (r = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - p)) : ((!e || e > l.length - 1) && (e = l.length - 1), r = (s = l[e].t) - p), "pingpong" === t) {
                            if (Math.floor((p - h) / r) % 2 == 0) return this.getValueAtTime(((p - h) % r + p) / this.comp.globalData.frameRate, 0)
                        } else {
                            if ("offset" === t) {
                                var u = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                    f = this.getValueAtTime(s / this.comp.globalData.frameRate, 0),
                                    c = this.getValueAtTime((r - (p - h) % r + p) / this.comp.globalData.frameRate, 0),
                                    m = Math.floor((p - h) / r) + 1;
                                if (this.pv.length) {
                                    for (n = (o = new Array(u.length)).length, a = 0; a < n; a += 1) o[a] = c[a] - (f[a] - u[a]) * m;
                                    return o
                                }
                                return c - (f - u) * m
                            }
                            if ("continue" === t) {
                                var d = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                    g = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0);
                                if (this.pv.length) {
                                    for (n = (o = new Array(d.length)).length, a = 0; a < n; a += 1) o[a] = d[a] + (d[a] - g[a]) * (p - h) / .001;
                                    return o
                                }
                                return d + (d - g) * (p - h) / .001
                            }
                        }
                        return this.getValueAtTime((r - ((p - h) % r + p)) / this.comp.globalData.frameRate, 0)
                    }

                    function i(t, e) {
                        if (!this.k) return this.pv;
                        if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1) return this.pv;
                        var i, r, s = this.comp.renderedFrame / this.comp.globalData.frameRate,
                            a = s - t,
                            n = e > 1 ? (s + t - a) / (e - 1) : 1,
                            o = 0,
                            h = 0;
                        for (i = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e;) {
                            if (r = this.getValueAtTime(a + o * n), this.pv.length)
                                for (h = 0; h < this.pv.length; h += 1) i[h] += r[h];
                            else i += r;
                            o += 1
                        }
                        if (this.pv.length)
                            for (h = 0; h < this.pv.length; h += 1) i[h] /= e;
                        else i /= e;
                        return i
                    }

                    function r(t) {
                        this._transformCachingAtTime || (this._transformCachingAtTime = {
                            v: new Matrix
                        });
                        var e = this._transformCachingAtTime.v;
                        if (e.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                            var i = this.a.getValueAtTime(t);
                            e.translate(-i[0] * this.a.mult, -i[1] * this.a.mult, i[2] * this.a.mult)
                        }
                        if (this.appliedTransformations < 2) {
                            var r = this.s.getValueAtTime(t);
                            e.scale(r[0] * this.s.mult, r[1] * this.s.mult, r[2] * this.s.mult)
                        }
                        if (this.sk && this.appliedTransformations < 3) {
                            var s = this.sk.getValueAtTime(t),
                                a = this.sa.getValueAtTime(t);
                            e.skewFromAxis(-s * this.sk.mult, a * this.sa.mult)
                        }
                        if (this.r && this.appliedTransformations < 4) {
                            var n = this.r.getValueAtTime(t);
                            e.rotate(-n * this.r.mult)
                        } else if (!this.r && this.appliedTransformations < 4) {
                            var o = this.rz.getValueAtTime(t),
                                h = this.ry.getValueAtTime(t),
                                l = this.rx.getValueAtTime(t),
                                p = this.or.getValueAtTime(t);
                            e.rotateZ(-o * this.rz.mult).rotateY(h * this.ry.mult).rotateX(l * this.rx.mult).rotateZ(-p[2] * this.or.mult).rotateY(p[1] * this.or.mult).rotateX(p[0] * this.or.mult)
                        }
                        if (this.data.p && this.data.p.s) {
                            var u = this.px.getValueAtTime(t),
                                f = this.py.getValueAtTime(t);
                            if (this.data.p.z) {
                                var c = this.pz.getValueAtTime(t);
                                e.translate(u * this.px.mult, f * this.py.mult, -c * this.pz.mult)
                            } else e.translate(u * this.px.mult, f * this.py.mult, 0)
                        } else {
                            var m = this.p.getValueAtTime(t);
                            e.translate(m[0] * this.p.mult, m[1] * this.p.mult, -m[2] * this.p.mult)
                        }
                        return e
                    }

                    function s() {
                        return this.v.clone(new Matrix)
                    }
                    var a = TransformPropertyFactory.getTransformProperty;
                    TransformPropertyFactory.getTransformProperty = function(t, e, i) {
                        var n = a(t, e, i);
                        return n.dynamicProperties.length ? n.getValueAtTime = r.bind(n) : n.getValueAtTime = s.bind(n), n.setGroupProperty = expressionHelpers.setGroupProperty, n
                    };
                    var n = PropertyFactory.getProp;
                    PropertyFactory.getProp = function(r, s, a, o, h) {
                        var l = n(r, s, a, o, h);
                        l.kf ? l.getValueAtTime = expressionHelpers.getValueAtTime.bind(l) : l.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(l), l.setGroupProperty = expressionHelpers.setGroupProperty, l.loopOut = t, l.loopIn = e, l.smooth = i, l.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(l), l.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(l), l.numKeys = 1 === s.a ? s.k.length : 0, l.propertyIndex = s.ix;
                        var p = 0;
                        return 0 !== a && (p = createTypedArray("float32", 1 === s.a ? s.k[0].s.length : s.k.length)), l._cachingAtTime = {
                            lastFrame: initialDefaultFrame,
                            lastIndex: 0,
                            value: p
                        }, expressionHelpers.searchExpressions(r, s, l), l.k && h.addDynamicProperty(l), l
                    };
                    var o = ShapePropertyFactory.getConstructorFunction(),
                        h = ShapePropertyFactory.getKeyframedConstructorFunction();

                    function l() {}
                    l.prototype = {
                        vertices: function(t, e) {
                            this.k && this.getValue();
                            var i, r = this.v;
                            void 0 !== e && (r = this.getValueAtTime(e, 0));
                            var s = r._length,
                                a = r[t],
                                n = r.v,
                                o = createSizedArray(s);
                            for (i = 0; i < s; i += 1) o[i] = "i" === t || "o" === t ? [a[i][0] - n[i][0], a[i][1] - n[i][1]] : [a[i][0], a[i][1]];
                            return o
                        },
                        points: function(t) {
                            return this.vertices("v", t)
                        },
                        inTangents: function(t) {
                            return this.vertices("i", t)
                        },
                        outTangents: function(t) {
                            return this.vertices("o", t)
                        },
                        isClosed: function() {
                            return this.v.c
                        },
                        pointOnPath: function(t, e) {
                            var i = this.v;
                            void 0 !== e && (i = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(i));
                            for (var r, s = this._segmentsLength, a = s.lengths, n = s.totalLength * t, o = 0, h = a.length, l = 0; o < h;) {
                                if (l + a[o].addedLength > n) {
                                    var p = o,
                                        u = i.c && o === h - 1 ? 0 : o + 1,
                                        f = (n - l) / a[o].addedLength;
                                    r = bez.getPointInSegment(i.v[p], i.v[u], i.o[p], i.i[u], f, a[o]);
                                    break
                                }
                                l += a[o].addedLength, o += 1
                            }
                            return r || (r = i.c ? [i.v[0][0], i.v[0][1]] : [i.v[i._length - 1][0], i.v[i._length - 1][1]]), r
                        },
                        vectorOnPath: function(t, e, i) {
                            1 == t ? t = this.v.c : 0 == t && (t = .999);
                            var r = this.pointOnPath(t, e),
                                s = this.pointOnPath(t + .001, e),
                                a = s[0] - r[0],
                                n = s[1] - r[1],
                                o = Math.sqrt(Math.pow(a, 2) + Math.pow(n, 2));
                            return 0 === o ? [0, 0] : "tangent" === i ? [a / o, n / o] : [-n / o, a / o]
                        },
                        tangentOnPath: function(t, e) {
                            return this.vectorOnPath(t, e, "tangent")
                        },
                        normalOnPath: function(t, e) {
                            return this.vectorOnPath(t, e, "normal")
                        },
                        setGroupProperty: expressionHelpers.setGroupProperty,
                        getValueAtTime: expressionHelpers.getStaticValueAtTime
                    }, extendPrototype([l], o), extendPrototype([l], h), h.prototype.getValueAtTime = function(t) {
                        return this._cachingAtTime || (this._cachingAtTime = {
                            shapeValue: shapePool.clone(this.pv),
                            lastIndex: 0,
                            lastTime: initialDefaultFrame
                        }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
                    }, h.prototype.initiateExpression = ExpressionManager.initiateExpression;
                    var p = ShapePropertyFactory.getShapeProp;
                    ShapePropertyFactory.getShapeProp = function(t, e, i, r, s) {
                        var a = p(t, e, i, r, s);
                        return a.propertyIndex = e.ix, a.lock = !1, 3 === i ? expressionHelpers.searchExpressions(t, e.pt, a) : 4 === i && expressionHelpers.searchExpressions(t, e.ks, a), a.k && t.addDynamicProperty(a), a
                    }
                }(), TextProperty.prototype.getExpressionValue = function(t, e) {
                    var i = this.calculateExpression(e);
                    if (t.t !== i) {
                        var r = {};
                        return this.copyData(r, t), r.t = i.toString(), r.__complete = !1, r
                    }
                    return t
                }, TextProperty.prototype.searchProperty = function() {
                    var t = this.searchKeyframes(),
                        e = this.searchExpressions();
                    return this.kf = t || e, this.kf
                }, TextProperty.prototype.searchExpressions = function() {
                    return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
                };
                var ShapePathInterface = function(t, e, i) {
                        var r = e.sh;

                        function s(t) {
                            return "Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t ? s.path : null
                        }
                        var a = propertyGroupFactory(s, i);
                        return r.setGroupProperty(PropertyInterface("Path", a)), Object.defineProperties(s, {
                            path: {
                                get: function() {
                                    return r.k && r.getValue(), r
                                }
                            },
                            shape: {
                                get: function() {
                                    return r.k && r.getValue(), r
                                }
                            },
                            _name: {
                                value: t.nm
                            },
                            ix: {
                                value: t.ix
                            },
                            propertyIndex: {
                                value: t.ix
                            },
                            mn: {
                                value: t.mn
                            },
                            propertyGroup: {
                                value: i
                            }
                        }), s
                    },
                    propertyGroupFactory = function(t, e) {
                        return function(i) {
                            return (i = void 0 === i ? 1 : i) <= 0 ? t : e(i - 1)
                        }
                    },
                    PropertyInterface = function(t, e) {
                        var i = {
                            _name: t
                        };
                        return function(t) {
                            return (t = void 0 === t ? 1 : t) <= 0 ? i : e(t - 1)
                        }
                    },
                    ShapeExpressionInterface = function() {
                        function t(t, a, u) {
                            var f, c = [],
                                m = t ? t.length : 0;
                            for (f = 0; f < m; f += 1) "gr" === t[f].ty ? c.push(e(t[f], a[f], u)) : "fl" === t[f].ty ? c.push(i(t[f], a[f], u)) : "st" === t[f].ty ? c.push(r(t[f], a[f], u)) : "tm" === t[f].ty ? c.push(s(t[f], a[f], u)) : "tr" === t[f].ty || ("el" === t[f].ty ? c.push(n(t[f], a[f], u)) : "sr" === t[f].ty ? c.push(o(t[f], a[f], u)) : "sh" === t[f].ty ? c.push(ShapePathInterface(t[f], a[f], u)) : "rc" === t[f].ty ? c.push(h(t[f], a[f], u)) : "rd" === t[f].ty ? c.push(l(t[f], a[f], u)) : "rp" === t[f].ty && c.push(p(t[f], a[f], u)));
                            return c
                        }

                        function e(e, i, r) {
                            var s = function(t) {
                                switch (t) {
                                    case "ADBE Vectors Group":
                                    case "Contents":
                                    case 2:
                                        return s.content;
                                    default:
                                        return s.transform
                                }
                            };
                            s.propertyGroup = propertyGroupFactory(s, r);
                            var n = function(e, i, r) {
                                    var s, n = function(t) {
                                        for (var e = 0, i = s.length; e < i;) {
                                            if (s[e]._name === t || s[e].mn === t || s[e].propertyIndex === t || s[e].ix === t || s[e].ind === t) return s[e];
                                            e += 1
                                        }
                                        return "number" == typeof t ? s[t - 1] : null
                                    };
                                    n.propertyGroup = propertyGroupFactory(n, r), s = t(e.it, i.it, n.propertyGroup), n.numProperties = s.length;
                                    var o = a(e.it[e.it.length - 1], i.it[i.it.length - 1], n.propertyGroup);
                                    return n.transform = o, n.propertyIndex = e.cix, n._name = e.nm, n
                                }(e, i, s.propertyGroup),
                                o = a(e.it[e.it.length - 1], i.it[i.it.length - 1], s.propertyGroup);
                            return s.content = n, s.transform = o, Object.defineProperty(s, "_name", {
                                get: function() {
                                    return e.nm
                                }
                            }), s.numProperties = e.np, s.propertyIndex = e.ix, s.nm = e.nm, s.mn = e.mn, s
                        }

                        function i(t, e, i) {
                            function r(t) {
                                return "Color" === t || "color" === t ? r.color : "Opacity" === t || "opacity" === t ? r.opacity : null
                            }
                            return Object.defineProperties(r, {
                                color: {
                                    get: ExpressionPropertyInterface(e.c)
                                },
                                opacity: {
                                    get: ExpressionPropertyInterface(e.o)
                                },
                                _name: {
                                    value: t.nm
                                },
                                mn: {
                                    value: t.mn
                                }
                            }), e.c.setGroupProperty(PropertyInterface("Color", i)), e.o.setGroupProperty(PropertyInterface("Opacity", i)), r
                        }

                        function r(t, e, i) {
                            var r, s = propertyGroupFactory(l, i),
                                a = propertyGroupFactory(h, s);

                            function n(i) {
                                Object.defineProperty(h, t.d[i].nm, {
                                    get: ExpressionPropertyInterface(e.d.dataProps[i].p)
                                })
                            }
                            var o = t.d ? t.d.length : 0,
                                h = {};
                            for (r = 0; r < o; r += 1) n(r), e.d.dataProps[r].p.setGroupProperty(a);

                            function l(t) {
                                return "Color" === t || "color" === t ? l.color : "Opacity" === t || "opacity" === t ? l.opacity : "Stroke Width" === t || "stroke width" === t ? l.strokeWidth : null
                            }
                            return Object.defineProperties(l, {
                                color: {
                                    get: ExpressionPropertyInterface(e.c)
                                },
                                opacity: {
                                    get: ExpressionPropertyInterface(e.o)
                                },
                                strokeWidth: {
                                    get: ExpressionPropertyInterface(e.w)
                                },
                                dash: {
                                    get: function() {
                                        return h
                                    }
                                },
                                _name: {
                                    value: t.nm
                                },
                                mn: {
                                    value: t.mn
                                }
                            }), e.c.setGroupProperty(PropertyInterface("Color", s)), e.o.setGroupProperty(PropertyInterface("Opacity", s)), e.w.setGroupProperty(PropertyInterface("Stroke Width", s)), l
                        }

                        function s(t, e, i) {
                            function r(e) {
                                return e === t.e.ix || "End" === e || "end" === e ? r.end : e === t.s.ix ? r.start : e === t.o.ix ? r.offset : null
                            }
                            var s = propertyGroupFactory(r, i);
                            return r.propertyIndex = t.ix, e.s.setGroupProperty(PropertyInterface("Start", s)), e.e.setGroupProperty(PropertyInterface("End", s)), e.o.setGroupProperty(PropertyInterface("Offset", s)), r.propertyIndex = t.ix, r.propertyGroup = i, Object.defineProperties(r, {
                                start: {
                                    get: ExpressionPropertyInterface(e.s)
                                },
                                end: {
                                    get: ExpressionPropertyInterface(e.e)
                                },
                                offset: {
                                    get: ExpressionPropertyInterface(e.o)
                                },
                                _name: {
                                    value: t.nm
                                }
                            }), r.mn = t.mn, r
                        }

                        function a(t, e, i) {
                            function r(e) {
                                return t.a.ix === e || "Anchor Point" === e ? r.anchorPoint : t.o.ix === e || "Opacity" === e ? r.opacity : t.p.ix === e || "Position" === e ? r.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? r.rotation : t.s.ix === e || "Scale" === e ? r.scale : t.sk && t.sk.ix === e || "Skew" === e ? r.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? r.skewAxis : null
                            }
                            var s = propertyGroupFactory(r, i);
                            return e.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", s)), e.transform.mProps.p.setGroupProperty(PropertyInterface("Position", s)), e.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", s)), e.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", s)), e.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", s)), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", s)), e.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", s))), e.transform.op.setGroupProperty(PropertyInterface("Opacity", s)), Object.defineProperties(r, {
                                opacity: {
                                    get: ExpressionPropertyInterface(e.transform.mProps.o)
                                },
                                position: {
                                    get: ExpressionPropertyInterface(e.transform.mProps.p)
                                },
                                anchorPoint: {
                                    get: ExpressionPropertyInterface(e.transform.mProps.a)
                                },
                                scale: {
                                    get: ExpressionPropertyInterface(e.transform.mProps.s)
                                },
                                rotation: {
                                    get: ExpressionPropertyInterface(e.transform.mProps.r)
                                },
                                skew: {
                                    get: ExpressionPropertyInterface(e.transform.mProps.sk)
                                },
                                skewAxis: {
                                    get: ExpressionPropertyInterface(e.transform.mProps.sa)
                                },
                                _name: {
                                    value: t.nm
                                }
                            }), r.ty = "tr", r.mn = t.mn, r.propertyGroup = i, r
                        }

                        function n(t, e, i) {
                            function r(e) {
                                return t.p.ix === e ? r.position : t.s.ix === e ? r.size : null
                            }
                            var s = propertyGroupFactory(r, i);
                            r.propertyIndex = t.ix;
                            var a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                            return a.s.setGroupProperty(PropertyInterface("Size", s)), a.p.setGroupProperty(PropertyInterface("Position", s)), Object.defineProperties(r, {
                                size: {
                                    get: ExpressionPropertyInterface(a.s)
                                },
                                position: {
                                    get: ExpressionPropertyInterface(a.p)
                                },
                                _name: {
                                    value: t.nm
                                }
                            }), r.mn = t.mn, r
                        }

                        function o(t, e, i) {
                            function r(e) {
                                return t.p.ix === e ? r.position : t.r.ix === e ? r.rotation : t.pt.ix === e ? r.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? r.outerRadius : t.os.ix === e ? r.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? r.innerRoundness : null : r.innerRadius
                            }
                            var s = propertyGroupFactory(r, i),
                                a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                            return r.propertyIndex = t.ix, a.or.setGroupProperty(PropertyInterface("Outer Radius", s)), a.os.setGroupProperty(PropertyInterface("Outer Roundness", s)), a.pt.setGroupProperty(PropertyInterface("Points", s)), a.p.setGroupProperty(PropertyInterface("Position", s)), a.r.setGroupProperty(PropertyInterface("Rotation", s)), t.ir && (a.ir.setGroupProperty(PropertyInterface("Inner Radius", s)), a.is.setGroupProperty(PropertyInterface("Inner Roundness", s))), Object.defineProperties(r, {
                                position: {
                                    get: ExpressionPropertyInterface(a.p)
                                },
                                rotation: {
                                    get: ExpressionPropertyInterface(a.r)
                                },
                                points: {
                                    get: ExpressionPropertyInterface(a.pt)
                                },
                                outerRadius: {
                                    get: ExpressionPropertyInterface(a.or)
                                },
                                outerRoundness: {
                                    get: ExpressionPropertyInterface(a.os)
                                },
                                innerRadius: {
                                    get: ExpressionPropertyInterface(a.ir)
                                },
                                innerRoundness: {
                                    get: ExpressionPropertyInterface(a.is)
                                },
                                _name: {
                                    value: t.nm
                                }
                            }), r.mn = t.mn, r
                        }

                        function h(t, e, i) {
                            function r(e) {
                                return t.p.ix === e ? r.position : t.r.ix === e ? r.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? r.size : null
                            }
                            var s = propertyGroupFactory(r, i),
                                a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                            return r.propertyIndex = t.ix, a.p.setGroupProperty(PropertyInterface("Position", s)), a.s.setGroupProperty(PropertyInterface("Size", s)), a.r.setGroupProperty(PropertyInterface("Rotation", s)), Object.defineProperties(r, {
                                position: {
                                    get: ExpressionPropertyInterface(a.p)
                                },
                                roundness: {
                                    get: ExpressionPropertyInterface(a.r)
                                },
                                size: {
                                    get: ExpressionPropertyInterface(a.s)
                                },
                                _name: {
                                    value: t.nm
                                }
                            }), r.mn = t.mn, r
                        }

                        function l(t, e, i) {
                            function r(e) {
                                return t.r.ix === e || "Round Corners 1" === e ? r.radius : null
                            }
                            var s = propertyGroupFactory(r, i),
                                a = e;
                            return r.propertyIndex = t.ix, a.rd.setGroupProperty(PropertyInterface("Radius", s)), Object.defineProperties(r, {
                                radius: {
                                    get: ExpressionPropertyInterface(a.rd)
                                },
                                _name: {
                                    value: t.nm
                                }
                            }), r.mn = t.mn, r
                        }

                        function p(t, e, i) {
                            function r(e) {
                                return t.c.ix === e || "Copies" === e ? r.copies : t.o.ix === e || "Offset" === e ? r.offset : null
                            }
                            var s = propertyGroupFactory(r, i),
                                a = e;
                            return r.propertyIndex = t.ix, a.c.setGroupProperty(PropertyInterface("Copies", s)), a.o.setGroupProperty(PropertyInterface("Offset", s)), Object.defineProperties(r, {
                                copies: {
                                    get: ExpressionPropertyInterface(a.c)
                                },
                                offset: {
                                    get: ExpressionPropertyInterface(a.o)
                                },
                                _name: {
                                    value: t.nm
                                }
                            }), r.mn = t.mn, r
                        }
                        return function(e, i, r) {
                            var s;

                            function a(t) {
                                if ("number" == typeof t) return 0 === (t = void 0 === t ? 1 : t) ? r : s[t - 1];
                                for (var e = 0, i = s.length; e < i;) {
                                    if (s[e]._name === t) return s[e];
                                    e += 1
                                }
                                return null
                            }
                            return a.propertyGroup = propertyGroupFactory(a, (function() {
                                return r
                            })), s = t(e, i, a.propertyGroup), a.numProperties = s.length, a._name = "Contents", a
                        }
                    }(),
                    TextExpressionInterface = function(t) {
                        var e, i;

                        function r(t) {
                            switch (t) {
                                case "ADBE Text Document":
                                    return r.sourceText;
                                default:
                                    return null
                            }
                        }
                        return Object.defineProperty(r, "sourceText", {
                            get: function() {
                                t.textProperty.getValue();
                                var r = t.textProperty.currentData.t;
                                return r !== e && (t.textProperty.currentData.t = e, (i = new String(r)).value = r || new String(r)), i
                            }
                        }), r
                    },
                    LayerExpressionInterface = function() {
                        function t(t) {
                            var e = new Matrix;
                            return void 0 !== t ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e) : this._elem.finalTransform.mProp.applyToMatrix(e), e
                        }

                        function e(t, e) {
                            var i = this.getMatrix(e);
                            return i.props[12] = 0, i.props[13] = 0, i.props[14] = 0, this.applyPoint(i, t)
                        }

                        function i(t, e) {
                            var i = this.getMatrix(e);
                            return this.applyPoint(i, t)
                        }

                        function r(t, e) {
                            var i = this.getMatrix(e);
                            return i.props[12] = 0, i.props[13] = 0, i.props[14] = 0, this.invertPoint(i, t)
                        }

                        function s(t, e) {
                            var i = this.getMatrix(e);
                            return this.invertPoint(i, t)
                        }

                        function a(t, e) {
                            if (this._elem.hierarchy && this._elem.hierarchy.length) {
                                var i, r = this._elem.hierarchy.length;
                                for (i = 0; i < r; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t)
                            }
                            return t.applyToPointArray(e[0], e[1], e[2] || 0)
                        }

                        function n(t, e) {
                            if (this._elem.hierarchy && this._elem.hierarchy.length) {
                                var i, r = this._elem.hierarchy.length;
                                for (i = 0; i < r; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t)
                            }
                            return t.inversePoint(e)
                        }

                        function o(t) {
                            var e = new Matrix;
                            if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
                                var i, r = this._elem.hierarchy.length;
                                for (i = 0; i < r; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(e);
                                return e.inversePoint(t)
                            }
                            return e.inversePoint(t)
                        }

                        function h() {
                            return [1, 1, 1, 1]
                        }
                        return function(l) {
                            var p;

                            function u(t) {
                                switch (t) {
                                    case "ADBE Root Vectors Group":
                                    case "Contents":
                                    case 2:
                                        return u.shapeInterface;
                                    case 1:
                                    case 6:
                                    case "Transform":
                                    case "transform":
                                    case "ADBE Transform Group":
                                        return p;
                                    case 4:
                                    case "ADBE Effect Parade":
                                    case "effects":
                                    case "Effects":
                                        return u.effect;
                                    case "ADBE Text Properties":
                                        return u.textInterface;
                                    default:
                                        return null
                                }
                            }
                            u.getMatrix = t, u.invertPoint = n, u.applyPoint = a, u.toWorld = i, u.toWorldVec = e, u.fromWorld = s, u.fromWorldVec = r, u.toComp = i, u.fromComp = o, u.sampleImage = h, u.sourceRectAtTime = l.sourceRectAtTime.bind(l), u._elem = l;
                            var f = getDescriptor(p = TransformExpressionInterface(l.finalTransform.mProp), "anchorPoint");
                            return Object.defineProperties(u, {
                                hasParent: {
                                    get: function() {
                                        return l.hierarchy.length
                                    }
                                },
                                parent: {
                                    get: function() {
                                        return l.hierarchy[0].layerInterface
                                    }
                                },
                                rotation: getDescriptor(p, "rotation"),
                                scale: getDescriptor(p, "scale"),
                                position: getDescriptor(p, "position"),
                                opacity: getDescriptor(p, "opacity"),
                                anchorPoint: f,
                                anchor_point: f,
                                transform: {
                                    get: function() {
                                        return p
                                    }
                                },
                                active: {
                                    get: function() {
                                        return l.isInRange
                                    }
                                }
                            }), u.startTime = l.data.st, u.index = l.data.ind, u.source = l.data.refId, u.height = 0 === l.data.ty ? l.data.h : 100, u.width = 0 === l.data.ty ? l.data.w : 100, u.inPoint = l.data.ip / l.comp.globalData.frameRate, u.outPoint = l.data.op / l.comp.globalData.frameRate, u._name = l.data.nm, u.registerMaskInterface = function(t) {
                                u.mask = new MaskManagerInterface(t, l)
                            }, u.registerEffectsInterface = function(t) {
                                u.effect = t
                            }, u
                        }
                    }(),
                    FootageInterface = (dataInterfaceFactory = function(t) {
                        function e(t) {
                            return "Outline" === t ? e.outlineInterface() : null
                        }
                        return e._name = "Outline", e.outlineInterface = function(t) {
                            var e = "",
                                i = t.getFootageData();

                            function r(t) {
                                if (i[t]) return e = t, "object" == typeof(i = i[t]) ? r : i;
                                var s = t.indexOf(e);
                                if (-1 !== s) {
                                    var a = parseInt(t.substr(s + e.length), 10);
                                    return "object" == typeof(i = i[a]) ? r : i
                                }
                                return ""
                            }
                            return function() {
                                return e = "", i = t.getFootageData(), r
                            }
                        }(t), e
                    }, function(t) {
                        function e(t) {
                            return "Data" === t ? e.dataInterface : null
                        }
                        return e._name = "Data", e.dataInterface = dataInterfaceFactory(t), e
                    }),
                    dataInterfaceFactory, CompExpressionInterface = function(t) {
                        function e(e) {
                            for (var i = 0, r = t.layers.length; i < r;) {
                                if (t.layers[i].nm === e || t.layers[i].ind === e) return t.elements[i].layerInterface;
                                i += 1
                            }
                            return null
                        }
                        return Object.defineProperty(e, "_name", {
                            value: t.data.nm
                        }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e
                    },
                    TransformExpressionInterface = function(t) {
                        function e(t) {
                            switch (t) {
                                case "scale":
                                case "Scale":
                                case "ADBE Scale":
                                case 6:
                                    return e.scale;
                                case "rotation":
                                case "Rotation":
                                case "ADBE Rotation":
                                case "ADBE Rotate Z":
                                case 10:
                                    return e.rotation;
                                case "ADBE Rotate X":
                                    return e.xRotation;
                                case "ADBE Rotate Y":
                                    return e.yRotation;
                                case "position":
                                case "Position":
                                case "ADBE Position":
                                case 2:
                                    return e.position;
                                case "ADBE Position_0":
                                    return e.xPosition;
                                case "ADBE Position_1":
                                    return e.yPosition;
                                case "ADBE Position_2":
                                    return e.zPosition;
                                case "anchorPoint":
                                case "AnchorPoint":
                                case "Anchor Point":
                                case "ADBE AnchorPoint":
                                case 1:
                                    return e.anchorPoint;
                                case "opacity":
                                case "Opacity":
                                case 11:
                                    return e.opacity;
                                default:
                                    return null
                            }
                        }
                        var i, r, s, a;
                        return Object.defineProperty(e, "rotation", {
                            get: ExpressionPropertyInterface(t.r || t.rz)
                        }), Object.defineProperty(e, "zRotation", {
                            get: ExpressionPropertyInterface(t.rz || t.r)
                        }), Object.defineProperty(e, "xRotation", {
                            get: ExpressionPropertyInterface(t.rx)
                        }), Object.defineProperty(e, "yRotation", {
                            get: ExpressionPropertyInterface(t.ry)
                        }), Object.defineProperty(e, "scale", {
                            get: ExpressionPropertyInterface(t.s)
                        }), t.p ? a = ExpressionPropertyInterface(t.p) : (i = ExpressionPropertyInterface(t.px), r = ExpressionPropertyInterface(t.py), t.pz && (s = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", {
                            get: function() {
                                return t.p ? a() : [i(), r(), s ? s() : 0]
                            }
                        }), Object.defineProperty(e, "xPosition", {
                            get: ExpressionPropertyInterface(t.px)
                        }), Object.defineProperty(e, "yPosition", {
                            get: ExpressionPropertyInterface(t.py)
                        }), Object.defineProperty(e, "zPosition", {
                            get: ExpressionPropertyInterface(t.pz)
                        }), Object.defineProperty(e, "anchorPoint", {
                            get: ExpressionPropertyInterface(t.a)
                        }), Object.defineProperty(e, "opacity", {
                            get: ExpressionPropertyInterface(t.o)
                        }), Object.defineProperty(e, "skew", {
                            get: ExpressionPropertyInterface(t.sk)
                        }), Object.defineProperty(e, "skewAxis", {
                            get: ExpressionPropertyInterface(t.sa)
                        }), Object.defineProperty(e, "orientation", {
                            get: ExpressionPropertyInterface(t.or)
                        }), e
                    },
                    ProjectInterface = function() {
                        function t(t) {
                            this.compositions.push(t)
                        }
                        return function() {
                            function e(t) {
                                for (var e = 0, i = this.compositions.length; e < i;) {
                                    if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                                    e += 1
                                }
                                return null
                            }
                            return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
                        }
                    }(),
                    EffectsExpressionInterface = function() {
                        function t(i, r, s, a) {
                            function n(t) {
                                for (var e = i.ef, r = 0, s = e.length; r < s;) {
                                    if (t === e[r].nm || t === e[r].mn || t === e[r].ix) return 5 === e[r].ty ? l[r] : l[r]();
                                    r += 1
                                }
                                throw new Error
                            }
                            var o, h = propertyGroupFactory(n, s),
                                l = [],
                                p = i.ef.length;
                            for (o = 0; o < p; o += 1) 5 === i.ef[o].ty ? l.push(t(i.ef[o], r.effectElements[o], r.effectElements[o].propertyGroup, a)) : l.push(e(r.effectElements[o], i.ef[o].ty, a, h));
                            return "ADBE Color Control" === i.mn && Object.defineProperty(n, "color", {
                                get: function() {
                                    return l[0]()
                                }
                            }), Object.defineProperties(n, {
                                numProperties: {
                                    get: function() {
                                        return i.np
                                    }
                                },
                                _name: {
                                    value: i.nm
                                },
                                propertyGroup: {
                                    value: h
                                }
                            }), n.enabled = 0 !== i.en, n.active = n.enabled, n
                        }

                        function e(t, e, i, r) {
                            var s = ExpressionPropertyInterface(t.p);
                            return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", r)),
                                function() {
                                    return 10 === e ? i.comp.compInterface(t.p.v) : s()
                                }
                        }
                        return {
                            createEffectsInterface: function(e, i) {
                                if (e.effectsManager) {
                                    var r, s = [],
                                        a = e.data.ef,
                                        n = e.effectsManager.effectElements.length;
                                    for (r = 0; r < n; r += 1) s.push(t(a[r], e.effectsManager.effectElements[r], i, e));
                                    var o = e.data.ef || [],
                                        h = function(t) {
                                            for (r = 0, n = o.length; r < n;) {
                                                if (t === o[r].nm || t === o[r].mn || t === o[r].ix) return s[r];
                                                r += 1
                                            }
                                            return null
                                        };
                                    return Object.defineProperty(h, "numProperties", {
                                        get: function() {
                                            return o.length
                                        }
                                    }), h
                                }
                                return null
                            }
                        }
                    }(),
                    MaskManagerInterface = function() {
                        function t(t, e) {
                            this._mask = t, this._data = e
                        }
                        return Object.defineProperty(t.prototype, "maskPath", {
                                get: function() {
                                    return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                                }
                            }), Object.defineProperty(t.prototype, "maskOpacity", {
                                get: function() {
                                    return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                                }
                            }),
                            function(e) {
                                var i, r = createSizedArray(e.viewData.length),
                                    s = e.viewData.length;
                                for (i = 0; i < s; i += 1) r[i] = new t(e.viewData[i], e.masksProperties[i]);
                                return function(t) {
                                    for (i = 0; i < s;) {
                                        if (e.masksProperties[i].nm === t) return r[i];
                                        i += 1
                                    }
                                    return null
                                }
                            }
                    }(),
                    ExpressionPropertyInterface = function() {
                        var t = {
                                pv: 0,
                                v: 0,
                                mult: 1
                            },
                            e = {
                                pv: [0, 0, 0],
                                v: [0, 0, 0],
                                mult: 1
                            };

                        function i(t, e, i) {
                            Object.defineProperty(t, "velocity", {
                                get: function() {
                                    return e.getVelocityAtTime(e.comp.currentFrame)
                                }
                            }), t.numKeys = e.keyframes ? e.keyframes.length : 0, t.key = function(r) {
                                if (!t.numKeys) return 0;
                                var s;
                                s = "s" in e.keyframes[r - 1] ? e.keyframes[r - 1].s : "e" in e.keyframes[r - 2] ? e.keyframes[r - 2].e : e.keyframes[r - 2].s;
                                var a = "unidimensional" === i ? new Number(s) : Object.assign({}, s);
                                return a.time = e.keyframes[r - 1].t / e.elem.comp.globalData.frameRate, a.value = "unidimensional" === i ? s[0] : s, a
                            }, t.valueAtTime = e.getValueAtTime, t.speedAtTime = e.getSpeedAtTime, t.velocityAtTime = e.getVelocityAtTime, t.propertyGroup = e.propertyGroup
                        }

                        function r() {
                            return t
                        }
                        return function(s) {
                            return s ? "unidimensional" === s.propType ? function(e) {
                                e && "pv" in e || (e = t);
                                var r = 1 / e.mult,
                                    s = e.pv * r,
                                    a = new Number(s);
                                return a.value = s, i(a, e, "unidimensional"),
                                    function() {
                                        return e.k && e.getValue(), s = e.v * r, a.value !== s && ((a = new Number(s)).value = s, i(a, e, "unidimensional")), a
                                    }
                            }(s) : function(t) {
                                t && "pv" in t || (t = e);
                                var r = 1 / t.mult,
                                    s = t.data && t.data.l || t.pv.length,
                                    a = createTypedArray("float32", s),
                                    n = createTypedArray("float32", s);
                                return a.value = n, i(a, t, "multidimensional"),
                                    function() {
                                        t.k && t.getValue();
                                        for (var e = 0; e < s; e += 1) n[e] = t.v[e] * r, a[e] = n[e];
                                        return a
                                    }
                            }(s) : r
                        }
                    }(),
                    propertyGetTextProp;

                function SliderEffect(t, e, i) {
                    this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
                }

                function AngleEffect(t, e, i) {
                    this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
                }

                function ColorEffect(t, e, i) {
                    this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
                }

                function PointEffect(t, e, i) {
                    this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
                }

                function LayerIndexEffect(t, e, i) {
                    this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
                }

                function MaskIndexEffect(t, e, i) {
                    this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
                }

                function CheckboxEffect(t, e, i) {
                    this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
                }

                function NoValueEffect() {
                    this.p = {}
                }

                function EffectsManager(t, e) {
                    var i, r = t.ef || [];
                    this.effectElements = [];
                    var s, a = r.length;
                    for (i = 0; i < a; i += 1) s = new GroupEffect(r[i], e), this.effectElements.push(s)
                }

                function GroupEffect(t, e) {
                    this.init(t, e)
                }
                propertyGetTextProp = TextSelectorProp.getTextSelectorProp, TextSelectorProp.getTextSelectorProp = function(t, e, i) {
                    return 1 === e.t ? new TextExpressionSelectorPropFactory(t, e, i) : propertyGetTextProp(t, e, i)
                }, extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
                    var i;
                    this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
                    var r, s = this.data.ef.length,
                        a = this.data.ef;
                    for (i = 0; i < s; i += 1) {
                        switch (r = null, a[i].ty) {
                            case 0:
                                r = new SliderEffect(a[i], e, this);
                                break;
                            case 1:
                                r = new AngleEffect(a[i], e, this);
                                break;
                            case 2:
                                r = new ColorEffect(a[i], e, this);
                                break;
                            case 3:
                                r = new PointEffect(a[i], e, this);
                                break;
                            case 4:
                            case 7:
                                r = new CheckboxEffect(a[i], e, this);
                                break;
                            case 10:
                                r = new LayerIndexEffect(a[i], e, this);
                                break;
                            case 11:
                                r = new MaskIndexEffect(a[i], e, this);
                                break;
                            case 5:
                                r = new EffectsManager(a[i], e, this);
                                break;
                            default:
                                r = new NoValueEffect(a[i], e, this)
                        }
                        r && this.effectElements.push(r)
                    }
                };
                var lottie = {};

                function setLocationHref(t) {
                    locationHref = t
                }

                function searchAnimations() {
                    !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
                }

                function setSubframeRendering(t) {
                    subframeEnabled = t
                }

                function loadAnimation(t) {
                    return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t)
                }

                function setQuality(t) {
                    if ("string" == typeof t) switch (t) {
                        case "high":
                            defaultCurveSegments = 200;
                            break;
                        default:
                        case "medium":
                            defaultCurveSegments = 50;
                            break;
                        case "low":
                            defaultCurveSegments = 10
                    } else !isNaN(t) && t > 1 && (defaultCurveSegments = t);
                    roundValues(!(defaultCurveSegments >= 50))
                }

                function inBrowser() {
                    return "undefined" != typeof navigator
                }

                function installPlugin(t, e) {
                    "expressions" === t && (expressionsPlugin = e)
                }

                function getFactory(t) {
                    switch (t) {
                        case "propertyFactory":
                            return PropertyFactory;
                        case "shapePropertyFactory":
                            return ShapePropertyFactory;
                        case "matrix":
                            return Matrix;
                        default:
                            return null
                    }
                }

                function checkReady() {
                    "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
                }

                function getQueryVariable(t) {
                    for (var e = queryString.split("&"), i = 0; i < e.length; i += 1) {
                        var r = e[i].split("=");
                        if (decodeURIComponent(r[0]) == t) return decodeURIComponent(r[1])
                    }
                    return null
                }
                lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocationHref, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.__getFactory = getFactory, lottie.version = "5.7.8";
                var standalone = "__[STANDALONE]__",
                    animationData = "__[ANIMATIONDATA]__",
                    renderer = "",
                    queryString;
                if (standalone) {
                    var scripts = document.getElementsByTagName("script"),
                        index = scripts.length - 1,
                        myScript = scripts[index] || {
                            src: ""
                        };
                    queryString = myScript.src.replace(/^[^\?]+\??/, ""), renderer = getQueryVariable("renderer")
                }
                var readyStateCheckInterval = setInterval(checkReady, 100);
                return lottie
            }, void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                return factory(root)
            }.call(exports, __webpack_require__, exports, module)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
        }
    }
]);