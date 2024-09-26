(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5894], {
    45894: function (e, t, n) {
        "use strict";
        n.d(t, {
            Z: function () {
                return tv
            }
        });
        var l, r, i, a, o, c, s, d, u, L, p, m, f, h, v, _, x, b, g, w, j, C, y, O, H, E, M, k, Z, N = n(59499),
            R = n(37667), P = n(39755), I = n(54745), V = n(6489), D = n(37546), S = n(45191), W = n(61069), F = n.n(W),
            B = n(85893), A = function (e) {
                var t = e.children;
                return (0, B.jsx)("main", {className: F().main, id: "international-main", children: t})
            }, q = n(94184), T = n.n(q), z = n(41664), U = n.n(z), K = n(65363), G = n(75942), Y = n(98225), Q = n(44860),
            J = n.n(Q), X = function (e) {
                var t = e.menus, n = e.policies, l = e.copyright, r = e.email, i = e.links, a = e.className,
                    o = (0, P.$G)().t, c = function (e) {
                        return (0, B.jsx)(K.Kk, {
                            href: e.value,
                            className: J().text,
                            rel: e.rel,
                            onClick: e.onClick,
                            "data-sensors-click": "true",
                            children: e.label
                        }, e.label)
                    };
                return (0, B.jsxs)("footer", {
                    className: T()(J().footer, a), id: "international-footer", children: [(0, B.jsxs)("section", {
                        className: T()("xt-safe-row", J().navs),
                        children: [(0, B.jsx)("div", {
                            className: J().menus, children: t.map(function (e, t) {
                                var n;
                                return (0, B.jsxs)("ul", {
                                    className: T()(J().menuItem),
                                    children: [(0, B.jsx)("li", {
                                        className: T()(J().title),
                                        children: e.label
                                    }, e.label), null === (n = e.children) || void 0 === n ? void 0 : n.map(function (e) {
                                        return (0, B.jsx)("li", {className: J().item, children: c(e)}, e.label)
                                    })]
                                }, t)
                            })
                        }), (0, B.jsxs)("div", {
                            className: J().contact,
                            children: [(0, B.jsx)("div", {
                                className: J().email,
                                children: r
                            }), (0, B.jsxs)("div", {
                                className: J().social,
                                children: [(0, B.jsx)("div", {
                                    className: J().title,
                                    children: o("common-followUs")
                                }), (0, B.jsx)("ul", {
                                    className: J().socialMedias, children: i.map(function (e, t) {
                                        var n = e.title, l = e.href, r = e.icon;
                                        return (0, B.jsx)("li", {
                                            className: J().socialLink,
                                            children: (0, B.jsx)(U(), {
                                                href: l,
                                                title: n,
                                                target: "_blank",
                                                rel: "noopener noreferrer nofollow",
                                                "data-sensors-click": "true",
                                                children: (0, B.jsx)(K.bQ, {type: r})
                                            })
                                        }, t)
                                    })
                                })]
                            })]
                        })]
                    }), (0, B.jsxs)("section", {
                        className: T()("xt-safe-row", J().policy),
                        children: [(0, B.jsx)(Y.n, {
                            alt: "xtransfer",
                            src: G.FL,
                            className: J().logo
                        }), (0, B.jsx)("ul", {
                            className: J().policiesWrapper, children: n.map(function (e, t) {
                                return (0, B.jsx)("li", {className: J().policyItem, children: c(e)}, t)
                            })
                        })]
                    }), (0, B.jsxs)("section", {
                        className: T()("xt-safe-row", J().copyrightWrapper),
                        children: [(0, B.jsx)("div", {className: J().divider}), (0, B.jsx)("div", {
                            className: J().copyright,
                            children: l
                        }), (0, B.jsx)("div", {
                            className: J().annotation,
                            children: '"China\'s No.1 B2B Cross-Border Trade Payment Platform" is based on the "Research report on financial service demand of China\'s SME foreign trade enterprises in 2023" released by iiMedia Research in July 2023'
                        })]
                    })]
                })
            }, $ = n(11163), ee = n(43070), et = n(69998), en = n(17469), el = n(30054), er = n(4730), ei = n(72775),
            ea = n(16573), eo = n.n(ea), ec = n(12611),
            es = ["loginText", "registerText", "beforeClickLogin", "beforeClickRegister"];

        function ed(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                t && (l = l.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), n.push.apply(n, l)
            }
            return n
        }

        function eu(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ed(Object(n), !0).forEach(function (t) {
                    (0, N.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ed(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }

        var eL = function (e) {
            e.loginText, e.registerText;
            var t = e.beforeClickLogin, n = e.beforeClickRegister, l = (0, er.Z)(e, es), r = (0, $.useRouter)().locale,
                i = (0, P.$G)().t;
            return (0, B.jsxs)("div", {
                className: T()(eo().menu),
                children: [(0, B.jsx)(ei.z, eu(eu({
                    onClick: function () {
                        var e;
                        null == t || t(), null !== (e = window) && void 0 !== e && e.location && ((0, V.Px)(r || "zh-HK"), location.href = "".concat(ec.ym).concat(window.location.search))
                    }, className: T()(eo().button, eo().login)
                }, l), {}, {
                    "data-sensors-click": "true",
                    children: i("new-common-login")
                })), (0, B.jsx)(ei.z, eu(eu({
                    onClick: function () {
                        var e, t, l, i;
                        null == n || n(), null !== (e = window) && void 0 !== e && e.location && ((0, V.Px)(r || "zh-HK"), null === (t = window) || void 0 === t || null === (l = t.ttq) || void 0 === l || null === (i = l.track) || void 0 === i || i.call(l, "CreateClick", {
                            value: "0.5",
                            currency: "USD"
                        }), location.href = "".concat(ec.Nz).concat(window.location.search))
                    }, className: T()(eo().button, eo().register)
                }, l), {}, {"data-sensors-click": "true", children: i("new-common-register")}))]
            })
        }, ep = n(85832), em = n(8529), ef = n(8412), eh = n(28633), ev = n.n(eh), e_ = n(88072), ex = function (e) {
            var t = e.menus, n = e.className, l = e.children;
            e.showAd;
            var r = (0, $.useRouter)().pathname, i = (0, ep.qM)(), a = i.isHK, o = i.isLanding, c = (0, R.useRef)(null),
                s = function (e) {
                    return (0, B.jsx)("li", {children: e.label}, e.label)
                }, d = function (e) {
                    var t;
                    if (null !== (t = e.children) && void 0 !== t && t.length) {
                        var n = (0, B.jsx)(ee.v, {
                            selectable: !0,
                            forceSubMenuRender: !0,
                            items: e.children.map(function (e) {
                                return {
                                    label: (0, B.jsx)(K.Kk, {
                                        href: e.value,
                                        onClick: null != e && e.onClick ? function (t) {
                                            var n;
                                            return null == e ? void 0 : null === (n = e.onClick) || void 0 === n ? void 0 : n.call(e, t)
                                        } : function () {
                                        },
                                        "data-sensors-click": "true",
                                        children: e.label
                                    }, e.value), key: e.value
                                }
                            })
                        });
                        return (0, B.jsx)(et.L, {
                            getPopupContainer: function (e) {
                                return e
                            }, overlay: n, placement: "bottom", children: s(e)
                        }, e.label)
                    }
                    return s(e)
                };
            return (0, B.jsxs)("header", {
                className: T()(ev().headerWrapper, n),
                id: "international-header",
                ref: c,
                children: [l, (0, B.jsxs)("div", {
                    className: T()("xt-safe-row", ev().header),
                    children: [(0, B.jsx)(em.Z, {className: ev().logo}), (0, B.jsxs)("div", {
                        className: T()(ev().menusWrapper),
                        children: [(0, B.jsx)("ul", {
                            className: T()(ev().menus),
                            id: "international-header-menu",
                            children: t.map(function (e) {
                                return d(e)
                            })
                        }), (0, B.jsx)("div", {className: ev().language, children: (0, B.jsx)(el.Z, {newHeader: !0})})]
                    }), r === ec.RQ ? null : !o && a ? (0, B.jsx)(eL, {}) : (0, B.jsx)(en.Z, {
                        className: ev().contactUSButton,
                        showIcon: !1,
                        source: o ? e_.lB.HOME_LANDING : "",
                        style: {margin: 0},
                        beforeClick: function () {
                            (0, ef.Ds)("hongkongsite_click", {
                                hk_official_url: window.location.href,
                                hk_official_button_name: "联络我们"
                            })
                        }
                    })]
                })]
            })
        }, eb = n(73582), eg = n(83551), ew = n.n(eg), ej = ["children"];

        function eC(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                t && (l = l.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), n.push.apply(n, l)
            }
            return n
        }

        function ey(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? eC(Object(n), !0).forEach(function (t) {
                    (0, N.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eC(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }

        var eO = function (e) {
            var t = e.children, n = (0, er.Z)(e, ej);
            return (0, B.jsx)("div", ey(ey({className: ew().button}, n), {}, {children: t}))
        }, eH = function (e) {
            var t = (0, $.useRouter)().locale, n = (0, P.$G)().t, l = (0, P.LJ)().utmSearchSource;
            return (0, B.jsxs)("div", {
                className: T()(ew().menu), children: [(0, B.jsx)(eO, {
                    onClick: function () {
                        var e;
                        null !== (e = window) && void 0 !== e && e.location && ((0, V.Px)(t || "zh-HK"), location.href = "".concat(ec.ym, "?").concat(l))
                    },
                    className: T()(ew().button, ew().login),
                    "data-sensors-click": "true",
                    children: n("new-common-login")
                }), (0, B.jsx)(eO, {
                    onClick: function () {
                        var e, n, r, i;
                        null !== (e = window) && void 0 !== e && e.location && ((0, V.Px)(t || "zh-HK"), null === (n = window) || void 0 === n || null === (r = n.ttq) || void 0 === r || null === (i = r.track) || void 0 === i || i.call(r, "CreateClick", {
                            value: "0.5",
                            currency: "USD"
                        }), location.href = "".concat(ec.Nz, "?").concat(l))
                    },
                    className: T()(ew().button, ew().register),
                    "data-sensors-click": "true",
                    children: n("new-common-register")
                })]
            })
        }, eE = n(94058), eM = n.n(eE), ek = ["title", "titleId"];

        function eZ() {
            return (eZ = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l])
                }
                return e
            }).apply(this, arguments)
        }

        var eN = (0, R.forwardRef)(function (e, t) {
            var n = e.title, a = e.titleId, o = function (e, t) {
                if (null == e) return {};
                var n, l, r = function (e, t) {
                    if (null == e) return {};
                    var n, l, r = {}, i = Object.keys(e);
                    for (l = 0; l < i.length; l++) n = i[l], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }(e, ek);
            return R.createElement("svg", eZ({
                width: 40,
                height: 40,
                viewBox: "0 0 40 40",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": a
            }, o), n ? R.createElement("title", {id: a}, n) : null, l || (l = R.createElement("g", {clipPath: "url(#clip0_2229_10154)"}, R.createElement("path", {
                d: "M0 0H40V40H0V0Z",
                fill: "#DE2910"
            }), R.createElement("path", {
                d: "M16 8.2L5.8 14.8L10 4L13.6 14.8L4 8.2H16Z",
                fill: "#FFDE00"
            }), R.createElement("path", {
                d: "M18.4825 2.5816L22.1169 4.36168L18.3127 5.01534L20.7787 2.13455L20.5413 6.00795L18.4825 2.5816Z",
                fill: "#FFDE00"
            }), R.createElement("path", {
                d: "M23.1149 6.11022L25.772 9.16632L22.0107 8.28753L25.4057 6.59226L23.6785 10.0703L23.1149 6.11022Z",
                fill: "#FFDE00"
            }), R.createElement("path", {
                d: "M23.9511 11.9159L25.1293 15.7927L22.053 13.4534L25.8464 13.2921L22.848 15.7631L23.9511 11.9159Z",
                fill: "#FFDE00"
            }), R.createElement("path", {
                d: "M20.7819 16.0655L20.3729 20.0925L18.4399 16.7505L21.9979 18.0645L18.2819 19.1855L20.7819 16.0655Z",
                fill: "#FFDE00"
            }), R.createElement("path", {
                d: "M0 -7.5H51.25V43.75H0V-7.5Z",
                fill: "#8B2CFF"
            }), R.createElement("g", {clipPath: "url(#clip1_2229_10154)"}, R.createElement("path", {
                d: "M30.7433 16.627C30.6308 16.2745 30.5033 15.9295 30.3608 15.592C30.0784 14.9225 29.7318 14.282 29.3258 13.6795C29.1083 13.3945 28.8946 13.117 28.6846 12.847C27.6287 11.5659 26.3025 10.5343 24.8009 9.82633C23.2993 9.11834 21.6597 8.75144 19.9996 8.75196C19.2439 8.7512 18.4901 8.82658 17.7496 8.97696C16.6684 9.19712 15.6259 9.57624 14.6558 10.102C12.4036 11.3187 10.6337 13.2672 9.63833 15.6257C9.49583 15.9632 9.36833 16.297 9.25583 16.627C8.91643 17.7197 8.74571 18.8578 8.74958 20.002C8.74571 21.1462 8.91643 22.2842 9.25583 23.377C9.36833 23.7295 9.49583 24.0745 9.63833 24.412C10.0633 25.415 10.6318 26.351 11.3258 27.1907C11.5583 27.4682 11.8021 27.7344 12.0571 27.9895C12.822 28.7556 13.6935 29.4073 14.6446 29.9244C15.6194 30.4434 16.6658 30.8149 17.7496 31.0269C18.4901 31.1773 19.2439 31.2527 19.9996 31.2519C22.211 31.2514 24.3733 30.5991 26.2161 29.3766C28.0589 28.154 29.5006 26.4155 30.3608 24.3782C30.5033 24.0407 30.6308 23.6957 30.7433 23.3432C31.0793 22.2613 31.25 21.1348 31.2496 20.002C31.2534 18.8578 31.0827 17.7197 30.7433 16.627ZM19.9996 29.0019H19.7296C19.6884 28.5003 19.6884 27.9961 19.7296 27.4944C20.0642 26.3086 20.6908 25.2256 21.5521 24.3445C21.9512 24.1741 22.3784 24.0788 22.8121 24.0632C23.4148 24.0596 24.0026 23.8754 24.4996 23.5345C24.6289 23.4082 24.7236 23.2509 24.7748 23.0776C24.826 22.9043 24.832 22.7207 24.7921 22.5445C24.6675 22.0612 24.4483 21.6075 24.147 21.2097C23.8457 20.8118 23.4685 20.4778 23.0371 20.227C22.528 20.0638 21.9967 19.9803 21.4621 19.9795C20.678 19.9713 19.9014 19.8267 19.1671 19.552C18.9517 19.3997 18.7553 19.2222 18.5821 19.0232C18.2078 18.5757 17.7285 18.2278 17.1871 18.0107C16.9598 17.9717 16.7269 17.9816 16.5038 18.0398C16.2806 18.098 16.0725 18.2031 15.8933 18.3482C15.1151 18.8694 14.1831 19.1114 13.2496 19.0345C12.5203 18.9381 11.7986 18.7915 11.0896 18.5957C11.425 16.4753 12.5073 14.5447 14.1412 13.1522C15.775 11.7597 17.8528 10.9971 19.9996 11.002H20.7533C20.6584 11.7961 20.7118 12.601 20.9108 13.3757C21.2119 13.869 21.6913 14.2275 22.2496 14.377L22.5871 14.5345C22.7103 14.9913 22.7103 15.4726 22.5871 15.9295C22.4867 16.2288 22.4867 16.5526 22.5871 16.852C23.3248 17.6018 24.2617 18.1249 25.2871 18.3595H25.5458C25.6448 18.3634 25.7435 18.3476 25.8363 18.3128C25.929 18.278 26.0139 18.225 26.0858 18.157C26.3445 17.8306 26.5149 17.4432 26.5808 17.032C26.7954 17.1061 27.0244 17.1284 27.2493 17.0971C27.4741 17.0658 27.6884 16.9818 27.8746 16.852C28.0481 16.6425 28.147 16.3813 28.1558 16.1095C28.8155 17.4846 29.1148 19.0048 29.0258 20.5273C28.9368 22.0499 28.4623 23.5248 27.6469 24.8137C26.8315 26.1026 25.702 27.1631 24.3643 27.8957C23.0266 28.6283 21.5247 29.009 19.9996 29.0019Z",
                fill: "white"
            })))), r || (r = R.createElement("rect", {
                x: .375,
                y: .375,
                width: 39.25,
                height: 39.25,
                rx: 9.625,
                stroke: "#DADAE3",
                strokeWidth: .75
            })), i || (i = R.createElement("defs", null, R.createElement("clipPath", {id: "clip0_2229_10154"}, R.createElement("rect", {
                width: 40,
                height: 40,
                rx: 10,
                fill: "white"
            })), R.createElement("clipPath", {id: "clip1_2229_10154"}, R.createElement("rect", {
                width: 22.5,
                height: 22.5,
                fill: "white",
                transform: "translate(8.75 8.75)"
            })))))
        }), eR = ["title", "titleId"];

        function eP() {
            return (eP = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l])
                }
                return e
            }).apply(this, arguments)
        }

        var eI = (0, R.forwardRef)(function (e, t) {
            var n = e.title, l = e.titleId, r = function (e, t) {
                if (null == e) return {};
                var n, l, r = function (e, t) {
                    if (null == e) return {};
                    var n, l, r = {}, i = Object.keys(e);
                    for (l = 0; l < i.length; l++) n = i[l], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }(e, eR);
            return R.createElement("svg", eP({
                width: 40,
                height: 41,
                viewBox: "0 0 40 41",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": l
            }, r), n ? R.createElement("title", {id: l}, n) : null, a || (a = R.createElement("g", {clipPath: "url(#clip0_1925_11921)"}, R.createElement("path", {
                d: "M0 0.5H40V40.5H0V0.5Z",
                fill: "#DE2910"
            }), R.createElement("path", {
                d: "M16.0005 8.7L5.80049 15.3L10.0005 4.5L13.6005 15.3L4.00049 8.7H16.0005Z",
                fill: "#FFDE00"
            }), R.createElement("path", {
                d: "M18.4825 3.0816L22.1169 4.86168L18.3127 5.51534L20.7787 2.63455L20.5413 6.50795L18.4825 3.0816Z",
                fill: "#FFDE00"
            }), R.createElement("path", {
                d: "M23.1152 6.61022L25.7723 9.66632L22.0109 8.78753L25.4059 7.09226L23.6788 10.5703L23.1152 6.61022Z",
                fill: "#FFDE00"
            }), R.createElement("path", {
                d: "M23.9511 12.4169L25.1293 16.2937L22.053 13.9544L25.8464 13.7931L22.848 16.264L23.9511 12.4169Z",
                fill: "#FFDE00"
            }), R.createElement("path", {
                d: "M20.7819 16.5655L20.3729 20.5925L18.4399 17.2505L21.9979 18.5645L18.2819 19.6855L20.7819 16.5655Z",
                fill: "#FFDE00"
            }))), o || (o = R.createElement("rect", {
                x: .375,
                y: .875,
                width: 39.25,
                height: 39.25,
                rx: 9.625,
                stroke: "#DADAE3",
                strokeWidth: .75
            })), c || (c = R.createElement("defs", null, R.createElement("clipPath", {id: "clip0_1925_11921"}, R.createElement("rect", {
                y: .5,
                width: 40,
                height: 40,
                rx: 10,
                fill: "white"
            })))))
        }), eV = ["title", "titleId"];

        function eD() {
            return (eD = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l])
                }
                return e
            }).apply(this, arguments)
        }

        var eS = (0, R.forwardRef)(function (e, t) {
            var n = e.title, l = e.titleId, r = function (e, t) {
                if (null == e) return {};
                var n, l, r = function (e, t) {
                    if (null == e) return {};
                    var n, l, r = {}, i = Object.keys(e);
                    for (l = 0; l < i.length; l++) n = i[l], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }(e, eV);
            return R.createElement("svg", eD({
                width: 40,
                height: 41,
                viewBox: "0 0 40 41",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": l
            }, r), n ? R.createElement("title", {id: l}, n) : null, s || (s = R.createElement("g", {clipPath: "url(#clip0_1925_11954)"}, R.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0 0.5H76.0007V3.57695H0V0.5ZM0 6.65391H76.0007V9.73086H0V6.65391ZM0 12.8078H76.0007V15.8848H0V12.8078ZM0 18.9617H76.0007V22.0387H0V18.9617ZM0 25.1156H76.0007V28.1926H0V25.1156ZM0 31.2695H76.0007V34.3465H0V31.2695ZM0 37.4234H76.0007V40.5004H0V37.4234Z",
                fill: "#DE2910"
            }), R.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0 3.57715H76.0007V6.6541H0V3.57715ZM0 9.73106H76.0007V12.808H0V9.73106ZM0 15.885H76.0007V18.9619H0V15.885ZM0 22.0389H76.0007V25.1158H0V22.0389ZM0 28.1928H76.0007V31.2697H0V28.1928ZM0 34.3467H76.0007V37.4236H0V34.3467Z",
                fill: "white"
            }), R.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0 0.5H30.4003V22.0387H0V0.5Z",
                fill: "#00008B"
            }), R.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M2.52324 1.42285L2.83093 2.2844H3.69248L2.98478 2.80748L3.26171 3.63826L2.52324 3.11518L1.84631 3.63826L2.12323 2.80748L1.38477 2.2844H2.30785L2.52324 1.42285ZM7.60021 1.42285L7.87714 2.2844H8.76945L8.03098 2.80748L8.33868 3.63826L7.60021 3.11518L6.86174 3.63826L7.16944 2.80748L6.43097 2.2844H7.32329L7.60021 1.42285ZM12.6772 1.42285L12.9541 2.2844H13.8464L13.108 2.80748L13.4157 3.63826L12.6772 3.11518L11.9387 3.63826L12.2464 2.80748L11.5079 2.2844H12.4003L12.6772 1.42285ZM17.7234 1.42285L18.0311 2.2844H18.8926L18.1849 2.80748L18.4619 3.63826L17.7234 3.11518L17.0157 3.63826L17.2926 2.80748L16.5541 2.2844H17.4772L17.7234 1.42285ZM22.8004 1.42285L23.0773 2.2844H23.9696L23.2311 2.80748L23.5388 3.63826L22.7696 3.11518L22.0619 3.63826L22.3388 2.80748L21.6003 2.2844H22.4927L22.8004 1.42285ZM27.8773 1.42285L28.1543 2.2844H29.0466L28.3081 2.80748L28.6158 3.63826L27.8773 3.11518L27.1389 3.63826L27.4466 2.80748L26.7081 2.2844H27.6004L27.8773 1.42285ZM5.07711 3.57672L5.35404 4.43827H6.24635L5.50788 4.96135L5.81558 5.79213L5.07711 5.26904L4.33864 5.79213L4.64634 4.96135L3.90787 4.43827H4.80018L5.07711 3.57672ZM10.1233 3.57672L10.431 4.43827H11.2926L10.5849 4.96135L10.8618 5.79213L10.1233 5.26904L9.41561 5.79213L9.69254 4.96135L8.95407 4.43827H9.87716L10.1233 3.57672ZM15.2003 3.57672L15.4772 4.43827H16.3695L15.6311 4.96135L15.9388 5.79213L15.2003 5.26904L14.4618 5.79213L14.7695 4.96135L14.031 4.43827H14.9234L15.2003 3.57672ZM20.2773 3.57672L20.5542 4.43827H21.4465L20.708 4.96135L21.0157 5.79213L20.2773 5.26904L19.5388 5.79213L19.8465 4.96135L19.108 4.43827H20.0003L20.2773 3.57672ZM25.3235 3.57672L25.6312 4.43827H26.4619L25.7542 4.96135L26.0312 5.79213L25.2927 5.26904L24.585 5.79213L24.8619 4.96135L24.1235 4.43827H25.0465L25.3235 3.57672ZM2.55401 5.73059L2.80016 6.59213H3.72325L2.98478 7.11522L3.26171 7.94599L2.52324 7.42291L1.84631 7.94599L2.12323 7.11522L1.38477 6.59213H2.30785L2.55401 5.73059ZM7.60021 5.73059L7.87714 6.59213H8.76945L8.06175 7.11522L8.33868 7.94599L7.60021 7.42291L6.89251 7.94599L7.16944 7.11522L6.43097 6.59213H7.32329L7.60021 5.73059ZM12.6772 5.73059L12.9541 6.59213H13.8464L13.108 7.11522L13.4157 7.94599L12.6772 7.42291L11.9387 7.94599L12.2464 7.11522L11.5079 6.59213H12.4003L12.6772 5.73059ZM17.7234 5.73059L18.0311 6.59213H18.8926L18.1849 7.11522L18.4619 7.94599L17.7234 7.42291L17.0157 7.94599L17.2926 7.11522L16.5541 6.59213H17.4772L17.7234 5.73059ZM22.8004 5.73059L23.0773 6.59213H23.9696L23.2619 7.11522L23.5388 7.94599L22.8004 7.42291L22.0927 7.94599L22.3696 7.11522L21.6311 6.59213H22.5234L22.8004 5.73059ZM27.8773 5.73059L28.1543 6.59213H29.0466L28.3081 7.11522L28.6158 7.94599L27.8773 7.42291L27.1389 7.94599L27.4466 7.11522L26.7081 6.59213H27.6004L27.8773 5.73059ZM5.07711 7.88445L5.35404 8.746H6.24635L5.50788 9.26908L5.81558 10.0999L5.07711 9.57678L4.33864 10.0999L4.64634 9.26908L3.90787 8.746H4.80018L5.07711 7.88445ZM10.1233 7.88445L10.431 8.746H11.2926L10.5849 9.26908L10.8618 10.0999L10.1233 9.57678L9.41561 10.0999L9.69254 9.26908L8.95407 8.746H9.87716L10.1233 7.88445ZM15.2003 7.88445L15.4772 8.746H16.3695L15.6618 9.26908L15.9388 10.0999L15.2003 9.57678L14.4926 10.0999L14.7695 9.26908L14.031 8.746H14.9234L15.2003 7.88445ZM20.2773 7.88445L20.5542 8.746H21.4465L20.708 9.26908L21.0157 10.0999L20.2773 9.57678L19.5388 10.0999L19.8465 9.26908L19.108 8.746H20.0003L20.2773 7.88445ZM25.3235 7.88445L25.6312 8.746H26.4619L25.7542 9.26908L26.0312 10.0999L25.2927 9.57678L24.585 10.0999L24.8619 9.26908L24.1235 8.746H25.0465L25.3235 7.88445ZM2.55401 10.0383L2.80016 10.8999H3.72325L2.98478 11.4229L3.26171 12.2537L2.52324 11.7306L1.84631 12.2537L2.12323 11.4229L1.38477 10.8999H2.30785L2.55401 10.0383ZM7.60021 10.0383L7.87714 10.8999H8.76945L8.06175 11.4229L8.33868 12.2537L7.60021 11.7306L6.89251 12.2537L7.16944 11.4229L6.43097 10.8999H7.32329L7.60021 10.0383ZM12.6772 10.0383L12.9541 10.8999H13.8464L13.108 11.4229L13.4157 12.2537L12.6772 11.7306L11.9387 12.2537L12.2464 11.4229L11.5079 10.8999H12.4003L12.6772 10.0383ZM17.7234 10.0383L18.0311 10.8999H18.8926L18.1849 11.4229L18.4619 12.2537L17.7234 11.7306L17.0157 12.2537L17.2926 11.4229L16.5541 10.8999H17.4772L17.7234 10.0383ZM22.8004 10.0383L23.0773 10.8999H23.9696L23.2619 11.4229L23.5388 12.2537L22.8004 11.7306L22.0927 12.2537L22.3696 11.4229L21.6311 10.8999H22.5234L22.8004 10.0383ZM27.8773 10.0383L28.1543 10.8999H29.0466L28.3081 11.4229L28.6158 12.2537L27.8773 11.7306L27.1389 12.2537L27.4466 11.4229L26.7081 10.8999H27.6004L27.8773 10.0383ZM5.07711 12.1922L5.35404 13.0537H6.24635L5.50788 13.5768L5.81558 14.4076L5.07711 13.8845L4.33864 14.4076L4.64634 13.5768L3.90787 13.0537H4.80018L5.07711 12.1922ZM10.1233 12.1922L10.431 13.0537H11.2926L10.5849 13.5768L10.8618 14.4076L10.1233 13.8845L9.41561 14.4076L9.69254 13.5768L8.95407 13.0537H9.87716L10.1233 12.1922ZM15.2003 12.1922L15.4772 13.0537H16.3695L15.6618 13.5768L15.9388 14.4076L15.2003 13.8845L14.4926 14.4076L14.7695 13.5768L14.031 13.0537H14.9234L15.2003 12.1922ZM20.2773 12.1922L20.5542 13.0537H21.4465L20.708 13.5768L21.0157 14.4076L20.2773 13.8845L19.5388 14.4076L19.8465 13.5768L19.108 13.0537H20.0003L20.2773 12.1922ZM25.3235 12.1922L25.6312 13.0537H26.4619L25.7542 13.5768L26.0312 14.4076L25.2927 13.8845L24.585 14.4076L24.8619 13.5768L24.1235 13.0537H25.0465L25.3235 12.1922ZM2.55401 14.3461L2.80016 15.2076H3.72325L2.98478 15.7307L3.26171 16.5615L2.52324 16.0384L1.84631 16.5615L2.12323 15.7307L1.38477 15.2076H2.30785L2.55401 14.3461ZM7.60021 14.3461L7.87714 15.2076H8.76945L8.06175 15.7307L8.33868 16.5615L7.60021 16.0384L6.89251 16.5615L7.16944 15.7307L6.43097 15.2076H7.32329L7.60021 14.3461ZM12.6772 14.3461L12.9541 15.2076H13.8464L13.108 15.7307L13.4157 16.5615L12.6772 16.0384L11.9387 16.5615L12.2464 15.7307L11.5079 15.2076H12.4003L12.6772 14.3461ZM17.7234 14.3461L18.0311 15.2076H18.8926L18.1849 15.7307L18.4619 16.5615L17.7234 16.0384L17.0157 16.5615L17.2926 15.7307L16.5541 15.2076H17.4772L17.7234 14.3461ZM22.8004 14.3461L23.0773 15.2076H23.9696L23.2619 15.7307L23.5388 16.5615L22.8004 16.0384L22.0927 16.5615L22.3696 15.7307L21.6311 15.2076H22.5234L22.8004 14.3461ZM27.8773 14.3461L28.1543 15.2076H29.0466L28.3081 15.7307L28.6158 16.5615L27.8773 16.0384L27.1389 16.5615L27.4466 15.7307L26.7081 15.2076H27.6004L27.8773 14.3461ZM5.07711 16.4999L5.35404 17.3615H6.24635L5.50788 17.8846L5.81558 18.7153L5.07711 18.1922L4.33864 18.7153L4.64634 17.8846L3.90787 17.3615H4.80018L5.07711 16.4999ZM10.1233 16.4999L10.431 17.3615H11.2926L10.5849 17.8846L10.8618 18.7153L10.1233 18.1922L9.41561 18.7153L9.69254 17.8846L8.95407 17.3615H9.87716L10.1233 16.4999ZM15.2003 16.4999L15.4772 17.3615H16.3695L15.6618 17.8846L15.9388 18.7153L15.2003 18.1922L14.4926 18.7153L14.7695 17.8846L14.031 17.3615H14.9234L15.2003 16.4999ZM20.2773 16.4999L20.5542 17.3615H21.4465L20.708 17.8846L21.0157 18.7153L20.2773 18.1922L19.5388 18.7153L19.8465 17.8846L19.108 17.3615H20.0003L20.2773 16.4999ZM25.3235 16.4999L25.6312 17.3615H26.4619L25.7542 17.8846L26.0312 18.7153L25.2927 18.1922L24.585 18.7153L24.8619 17.8846L24.1235 17.3615H25.0465L25.3235 16.4999ZM2.55401 18.6538L2.80016 19.5153H3.72325L2.98478 20.0384L3.26171 20.8692L2.52324 20.3461L1.84631 20.8692L2.12323 20.0384L1.38477 19.5153H2.30785L2.55401 18.6538ZM7.60021 18.6538L7.87714 19.5153H8.76945L8.06175 20.0384L8.33868 20.8692L7.60021 20.3461L6.89251 20.8692L7.16944 20.0384L6.43097 19.5153H7.32329L7.60021 18.6538ZM12.6772 18.6538L12.9541 19.5153H13.8464L13.108 20.0384L13.4157 20.8692L12.6772 20.3461L11.9387 20.8692L12.2464 20.0384L11.5079 19.5153H12.4003L12.6772 18.6538ZM17.7234 18.6538L18.0311 19.5153H18.8926L18.1849 20.0384L18.4619 20.8692L17.7234 20.3461L17.0157 20.8692L17.2926 20.0384L16.5541 19.5153H17.4772L17.7234 18.6538ZM22.8004 18.6538L23.0773 19.5153H23.9696L23.2619 20.0384L23.5388 20.8692L22.8004 20.3461L22.0927 20.8692L22.3696 20.0384L21.6311 19.5153H22.5234L22.8004 18.6538ZM27.8773 18.6538L28.1543 19.5153H29.0466L28.3081 20.0384L28.6158 20.8692L27.8773 20.3461L27.1389 20.8692L27.4466 20.0384L26.7081 19.5153H27.6004L27.8773 18.6538Z",
                fill: "white"
            }))), d || (d = R.createElement("rect", {
                x: .375,
                y: .875,
                width: 39.25,
                height: 39.25,
                rx: 9.625,
                stroke: "#DADAE3",
                strokeWidth: .75
            })), u || (u = R.createElement("defs", null, R.createElement("clipPath", {id: "clip0_1925_11954"}, R.createElement("rect", {
                y: .5,
                width: 40,
                height: 40,
                rx: 10,
                fill: "white"
            })))))
        }), eW = ["title", "titleId"];

        function eF() {
            return (eF = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l])
                }
                return e
            }).apply(this, arguments)
        }

        var eB = (0, R.forwardRef)(function (e, t) {
            var n = e.title, l = e.titleId, r = function (e, t) {
                if (null == e) return {};
                var n, l, r = function (e, t) {
                    if (null == e) return {};
                    var n, l, r = {}, i = Object.keys(e);
                    for (l = 0; l < i.length; l++) n = i[l], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }(e, eW);
            return R.createElement("svg", eF({
                width: 40,
                height: 41,
                viewBox: "0 0 40 41",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": l
            }, r), n ? R.createElement("title", {id: l}, n) : null, L || (L = R.createElement("g", {clipPath: "url(#clip0_1925_11951)"}, R.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M-10 0.5H50V40.5019H-10V0.5Z",
                fill: "white"
            }), R.createElement("path", {
                d: "M20.0004 32.9378C26.8671 32.9378 32.4337 27.3713 32.4337 20.5045C32.4337 13.6379 26.8671 8.07129 20.0004 8.07129C13.1337 8.07129 7.56714 13.6379 7.56714 20.5045C7.56714 27.3713 13.1337 32.9378 20.0004 32.9378Z",
                fill: "#ED0000"
            }))), p || (p = R.createElement("rect", {
                x: .375,
                y: .875,
                width: 39.25,
                height: 39.25,
                rx: 9.625,
                stroke: "#DADAE3",
                strokeWidth: .75
            })), m || (m = R.createElement("defs", null, R.createElement("clipPath", {id: "clip0_1925_11951"}, R.createElement("rect", {
                y: .5,
                width: 40,
                height: 40,
                rx: 10,
                fill: "white"
            })))))
        }), eA = ["title", "titleId"];

        function eq() {
            return (eq = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l])
                }
                return e
            }).apply(this, arguments)
        }

        var eT = (0, R.forwardRef)(function (e, t) {
            var n = e.title, l = e.titleId, r = function (e, t) {
                if (null == e) return {};
                var n, l, r = function (e, t) {
                    if (null == e) return {};
                    var n, l, r = {}, i = Object.keys(e);
                    for (l = 0; l < i.length; l++) n = i[l], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }(e, eA);
            return R.createElement("svg", eq({
                width: 40,
                height: 41,
                viewBox: "0 0 40 41",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": l
            }, r), n ? R.createElement("title", {id: l}, n) : null, f || (f = R.createElement("g", {clipPath: "url(#clip0_1925_11971)"}, R.createElement("path", {
                d: "M0 0.5H40V40.5H0V0.5Z",
                fill: "#00008B"
            }), R.createElement("path", {
                d: "M40 0.5V5.5L25.1562 20.5L40 35.1094V40.5H34.7656L19.8438 25.8125L5.3125 40.5H0V35.1875L14.5312 20.5781L0 6.28125V0.5H4.84375L19.8438 15.1875L34.375 0.5H40Z",
                fill: "white"
            }), R.createElement("path", {
                d: "M14.375 25.8125L15.2344 28.4688L3.28125 40.5H0V40.2656L14.375 25.8125ZM24.0625 24.875L28.2812 25.5L40 36.9844V40.5L24.0625 24.875ZM40 0.5L25 15.8125L24.6875 12.375L36.4062 0.5H40ZM0 0.578125L15.0781 15.3438L10.4688 14.7188L0 4.32812V0.578125Z",
                fill: "#DE2910"
            }), R.createElement("path", {
                d: "M13.75 0.5V40.5H26.25V0.5H13.75ZM0 14.25V26.75H40V14.25H0Z",
                fill: "white"
            }), R.createElement("path", {
                d: "M0 16.75V24.25H40V16.75H0ZM16.25 0.5V40.5H23.75V0.5H16.25Z",
                fill: "#DE2910"
            }))), h || (h = R.createElement("rect", {
                x: .375,
                y: .875,
                width: 39.25,
                height: 39.25,
                rx: 9.625,
                stroke: "#DADAE3",
                strokeWidth: .75
            })), v || (v = R.createElement("defs", null, R.createElement("clipPath", {id: "clip0_1925_11971"}, R.createElement("rect", {
                y: .5,
                width: 40,
                height: 40,
                rx: 10,
                fill: "white"
            })))))
        }), ez = ["title", "titleId"];

        function eU() {
            return (eU = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l])
                }
                return e
            }).apply(this, arguments)
        }

        var eK = (0, R.forwardRef)(function (e, t) {
            var n = e.title, l = e.titleId, r = function (e, t) {
                if (null == e) return {};
                var n, l, r = function (e, t) {
                    if (null == e) return {};
                    var n, l, r = {}, i = Object.keys(e);
                    for (l = 0; l < i.length; l++) n = i[l], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }(e, ez);
            return R.createElement("svg", eU({
                width: 40,
                height: 41,
                viewBox: "0 0 40 41",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": l
            }, r), n ? R.createElement("title", {id: l}, n) : null, _ || (_ = R.createElement("g", {clipPath: "url(#clip0_1925_11928)"}, R.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M49.2737 41.193H-8.85913V0.5H49.2737V41.193Z",
                fill: "#DE2910"
            }), R.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M19.3821 20.1924C19.3821 20.1924 15.2806 18.426 15.8657 13.8486C16.4345 11.6447 17.4407 10.1463 19.2673 9.33144C20.1229 9.08289 21.0031 8.92885 21.8923 8.87207C21.6517 9.09082 21.4548 9.31504 21.3564 9.59395C21.1595 10.0971 21.3017 10.5783 21.5642 11.0596C21.9053 11.6319 22.1076 12.2762 22.1548 12.9408C22.2148 13.45 22.1392 13.9661 21.9356 14.4366C21.732 14.9072 21.4077 15.3156 20.9954 15.6205C20.4704 16.0197 19.847 16.1619 19.3439 16.6213C18.9328 16.9966 18.6755 17.511 18.622 18.065C18.6056 19.3447 18.9556 19.5252 19.3821 20.1979V20.1924Z",
                fill: "white"
            }), R.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18.5996 13.5718V13.5537V13.5718Z",
                fill: "#DE2910"
            }), R.createElement("path", {
                d: "M18.5996 13.5718V13.5537",
                stroke: "#222222",
                strokeWidth: 2.7125
            }), R.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18.6821 13.511C18.7147 13.5446 18.714 13.5982 18.6804 13.6309C18.3892 13.9143 18.1578 14.3441 18.0009 14.8576C17.8444 15.3701 17.7638 15.9603 17.7702 16.5586C17.7831 17.7591 18.1452 18.9706 18.9181 19.6535C18.9531 19.6845 18.9565 19.738 18.9255 19.7731C18.8945 19.8082 18.8409 19.8115 18.8058 19.7805C17.9818 19.0524 17.6138 17.7839 17.6007 16.5604C17.5941 15.9466 17.6766 15.3389 17.8388 14.808C18.0007 14.2782 18.2436 13.8193 18.5622 13.5094C18.5957 13.4767 18.6494 13.4775 18.6821 13.511Z",
                fill: "#DE2910"
            }), R.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18.5884 12.6953L19.1134 12.5805L19.1735 12.0664L19.436 12.5039L19.961 12.3891L19.6001 12.7773L19.8626 13.2148L19.3704 13.018L19.0095 13.4062L19.0751 12.8977",
                fill: "#DE2910"
            }), R.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M19.7318 19.893C19.7318 19.893 20.2185 15.4523 24.763 14.6758C27.038 14.5719 28.7662 15.0969 30.0841 16.6008C30.5704 17.3458 30.9738 18.1416 31.2873 18.9742C31.0083 18.8101 30.7404 18.6898 30.4396 18.6734C29.9037 18.6351 29.488 18.9141 29.1052 19.3023C28.6677 19.7836 28.1755 20.1391 27.4755 20.418C27.0066 20.6235 26.4919 20.7018 25.9831 20.6452C25.4743 20.5885 24.9893 20.3989 24.5771 20.0953C24.0357 19.7125 23.724 19.1601 23.1333 18.8101C22.6545 18.5264 22.0873 18.4309 21.5419 18.5422C20.3115 18.9086 20.2458 19.2914 19.7263 19.893H19.7318Z",
                fill: "white"
            }), R.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M25.8345 17.2082L25.8526 17.2021L25.8345 17.2082Z",
                fill: "#DE2910"
            }), R.createElement("path", {
                d: "M25.8345 17.2082L25.8526 17.2021",
                stroke: "#222222",
                strokeWidth: 2.7125
            }), R.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M22.7345 17.2886C21.5894 17.6523 20.5358 18.3521 20.1097 19.2916C20.0904 19.3342 20.0402 19.3531 19.9975 19.3338C19.9549 19.3144 19.936 19.2642 19.9553 19.2216C20.4097 18.2196 21.5164 17.4976 22.6832 17.127C23.2685 16.9412 23.8741 16.842 24.429 16.8408C24.9829 16.8397 25.4923 16.9363 25.8809 17.1477C25.922 17.1701 25.9372 17.2216 25.9148 17.2627C25.8924 17.3038 25.841 17.319 25.7998 17.2966C25.4447 17.1034 24.9663 17.0093 24.4293 17.0104C23.8934 17.0115 23.3051 17.1074 22.7345 17.2886Z",
                fill: "#DE2910"
            }), R.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M26.6657 16.9395L26.9282 17.4098L27.4368 17.3168L27.0978 17.6996L27.3657 18.1645L26.8845 17.9293L26.5399 18.3121L26.5892 17.7871L26.1079 17.552L26.6165 17.4645",
                fill: "#DE2910"
            }), R.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M20.0382 20.2148C20.0382 20.2148 24.4022 19.2632 26.5843 23.332C27.4046 25.4539 27.4593 27.2586 26.4476 28.9867C25.9007 29.6976 25.2608 30.2992 24.5772 30.8789C24.6429 30.5617 24.6702 30.2664 24.5937 29.982C24.4624 29.4625 24.0632 29.1562 23.571 28.9156C22.9617 28.6491 22.4239 28.2425 22.0015 27.7289C21.6564 27.3495 21.4176 26.8857 21.3091 26.3845C21.2006 25.8833 21.2263 25.3623 21.3835 24.8742C21.5749 24.2398 22.0015 23.764 22.1437 23.0968C22.2613 22.5518 22.1716 21.9825 21.8921 21.5C21.1593 20.4554 20.771 20.5156 20.0327 20.2148H20.0382Z",
                fill: "white"
            }), R.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M24.5225 25.1475L24.5345 25.1656L24.5225 25.1475Z",
                fill: "#DE2910"
            }), R.createElement("path", {
                d: "M24.5225 25.1475L24.5345 25.1656",
                stroke: "#222222",
                strokeWidth: 2.7125
            }), R.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M20.6482 20.288C20.653 20.2414 20.6946 20.2076 20.7412 20.2124C21.8361 20.3253 22.8737 21.1453 23.5961 22.1341C23.9586 22.6301 24.245 23.1729 24.4219 23.6988C24.5985 24.2238 24.6679 24.7376 24.5893 25.1734C24.581 25.2195 24.5369 25.2501 24.4909 25.2418C24.4448 25.2335 24.4142 25.1894 24.4225 25.1434C24.4943 24.7452 24.4324 24.2617 24.2613 23.7529C24.0904 23.245 23.8125 22.7176 23.4592 22.2341C22.7503 21.2637 21.7507 20.4869 20.7238 20.381C20.6772 20.3762 20.6434 20.3346 20.6482 20.288Z",
                fill: "#DE2910"
            }), R.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M25.0365 25.8541L24.6811 26.2533L24.9271 26.7072L24.4568 26.4994L24.1014 26.9041L24.1725 26.3736L23.7021 26.1713L24.2107 26.051L24.2818 25.5205L24.5279 25.9744",
                fill: "#DE2910"
            }), R.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M19.9396 20.6631C19.9396 20.6631 22.0724 24.5842 18.7857 27.8271C16.9755 29.2053 15.2583 29.7631 13.3169 29.2764C12.4802 28.9592 11.7255 28.5107 10.9763 28.0186C11.2935 27.9912 11.5888 27.9365 11.8404 27.7779C12.2998 27.5045 12.4857 27.0396 12.5787 26.4982C12.6616 25.8378 12.8996 25.2063 13.2732 24.6553C13.5411 24.2177 13.9199 23.8587 14.3713 23.6147C14.8227 23.3708 15.3306 23.2505 15.8435 23.2662C16.4998 23.2717 17.0794 23.5451 17.7576 23.4959C18.3149 23.4568 18.8376 23.2111 19.2232 22.8068C20.0216 21.8061 19.8576 21.4506 19.9341 20.6631H19.9396Z",
                fill: "white"
            }), R.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16.4628 26.3506L16.4507 26.3687L16.4628 26.3506Z",
                fill: "#DE2910"
            }), R.createElement("path", {
                d: "M16.4628 26.3506L16.4507 26.3687",
                stroke: "#222222",
                strokeWidth: 2.7125
            }), R.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M20.0388 21.2739C20.0848 21.2654 20.129 21.2959 20.1374 21.342C20.3349 22.4229 19.8397 23.6475 19.0938 24.6177C18.7196 25.1044 18.2791 25.5314 17.8238 25.8488C17.3693 26.1656 16.8951 26.3764 16.4536 26.4236C16.4071 26.4285 16.3653 26.3948 16.3603 26.3483C16.3554 26.3017 16.3891 26.26 16.4356 26.255C16.8391 26.2119 17.2864 26.0167 17.7269 25.7097C18.1665 25.4033 18.5946 24.9888 18.9594 24.5144C19.6914 23.5623 20.1559 22.3861 19.9706 21.3725C19.9622 21.3264 19.9927 21.2823 20.0388 21.2739Z",
                fill: "#DE2910"
            }), R.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M15.931 27.0447L15.4442 26.815L15.0778 27.1814L15.1435 26.6729L14.6567 26.4432L15.1872 26.3611L15.2474 25.8525L15.5099 26.3119L16.0349 26.2299L15.6685 26.5908",
                fill: "#DE2910"
            }), R.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M19.4524 20.576C19.4524 20.576 16.461 23.8955 12.3157 21.8666C10.4126 20.6197 9.31338 19.1869 9.12744 17.1963C9.14932 16.3049 9.32432 15.4408 9.5376 14.5713C9.67432 14.8611 9.8165 15.1182 10.0517 15.3041C10.4618 15.6486 10.9649 15.6705 11.5009 15.5775C12.1514 15.4367 12.826 15.4517 13.4696 15.6213C13.9709 15.7284 14.435 15.9658 14.8152 16.3095C15.1954 16.6533 15.4783 17.0912 15.6353 17.5791C15.854 18.208 15.7829 18.8369 16.0563 19.4658C16.2795 19.9767 16.6851 20.3862 17.1938 20.6143C18.397 21.0354 18.6813 20.7674 19.4524 20.576Z",
                fill: "white"
            }), R.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12.9305 19.1865H12.9124H12.9305Z",
                fill: "#DE2910"
            }), R.createElement("path", {
                d: "M12.9305 19.1865H12.9124",
                stroke: "#222222",
                strokeWidth: 2.7125
            }), R.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12.9032 19.0932C12.9454 19.0731 12.996 19.0911 13.0161 19.1334C13.1897 19.4989 13.5216 19.8555 13.9571 20.1688C14.3917 20.4815 14.9246 20.7476 15.4932 20.9342C16.6342 21.3087 17.8983 21.3569 18.7928 20.8461C18.8335 20.8229 18.8852 20.8371 18.9084 20.8777C18.9317 20.9184 18.9175 20.9701 18.8769 20.9934C17.923 21.538 16.603 21.4769 15.4403 21.0953C14.857 20.9039 14.3082 20.6303 13.8581 20.3064C13.4088 19.9831 13.053 19.6062 12.863 19.2061C12.8429 19.1638 12.8609 19.1133 12.9032 19.0932Z",
                fill: "#DE2910"
            }), R.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12.0976 18.9195L12.1522 18.3836L11.6929 18.1648L12.1905 18.0555L12.2452 17.5195L12.5022 17.9898L12.9944 17.8805L12.6554 18.2797L12.9069 18.75L12.4421 18.5258",
                fill: "#DE2910"
            }))), x || (x = R.createElement("rect", {
                x: .375,
                y: .875,
                width: 39.25,
                height: 39.25,
                rx: 9.625,
                stroke: "#DADAE3",
                strokeWidth: .75
            })), b || (b = R.createElement("defs", null, R.createElement("clipPath", {id: "clip0_1925_11928"}, R.createElement("rect", {
                y: .5,
                width: 40,
                height: 40,
                rx: 10,
                fill: "white"
            })))))
        }), eG = function (e) {
            var t = e.open, n = e.close, l = e.beforeClick, r = (0, ep.qM)().hosts, i = r.official, a = r.hk, o = r.us,
                c = r.uk;
            return t ? (0, B.jsx)("div", {
                className: eM().regionSelectorMask, children: (0, B.jsxs)("div", {
                    className: eM().regionSelectorWrapper,
                    children: [(0, B.jsx)("div", {
                        className: eM().header,
                        children: (0, B.jsx)("span", {
                            className: eM().title,
                            onClick: n,
                            "data-sensors-click": "true",
                            children: "Cancel"
                        })
                    }), (0, B.jsx)("div", {
                        className: eM().main,
                        children: (0, B.jsx)("ul", {
                            className: eM().regions,
                            children: [{text: "Global  (English)", link: "https://".concat(a), Icon: eN}, {
                                text: "中国",
                                link: "https://".concat(i, "?lang=zh"),
                                Icon: eI
                            }, {text: "中国香港", link: "https://".concat(a, "/zh-HK"), Icon: eK}, {
                                text: "日本",
                                link: "https://".concat(i, "?lang=ja"),
                                Icon: eB
                            }, {text: "United States", link: "https://".concat(o), Icon: eS}, {
                                text: "United Kingdom",
                                link: "https://".concat(c),
                                Icon: eT
                            }].map(function (e, t) {
                                var n = e.text, r = e.link, i = e.Icon;
                                return (0, B.jsx)("li", {
                                    className: eM().regionItemWrapper,
                                    onClick: function () {
                                        l(), window.location.href = r
                                    },
                                    "data-sensors-click": "true",
                                    children: (0, B.jsxs)("div", {
                                        className: eM().regionContent,
                                        children: [(0, B.jsx)("span", {
                                            className: eM().iconWrapper,
                                            children: (0, B.jsx)(i, {className: eM().icon})
                                        }), (0, B.jsx)("span", {children: n})]
                                    })
                                }, t)
                            })
                        })
                    }), (0, B.jsx)("div", {
                        className: eM().footer,
                        children: (0, B.jsx)("div", {className: eM().line})
                    })]
                })
            }) : null
        }, eY = function (e) {
            var t = e.beforeClick, n = (0, R.useState)(!1), l = n[0], r = n[1];
            return (0, B.jsxs)("div", {
                className: eM().areaSelectorWrapper,
                children: [(0, B.jsxs)("div", {
                    className: T()(eM().header),
                    onClick: function () {
                        r(!0)
                    },
                    "data-sensors-click": "true",
                    children: [(0, B.jsx)("span", {children: "Please select"}), (0, B.jsx)("span", {
                        className: eM().locationIconWrapper,
                        children: (0, B.jsx)(eN, {className: eM().icon})
                    })]
                }), (0, B.jsx)(eG, {
                    open: l, close: function () {
                        r(!1)
                    }, beforeClick: t
                })]
            })
        }, eQ = n(49454), eJ = n.n(eQ), eX = ["title", "titleId"];

        function e$() {
            return (e$ = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l])
                }
                return e
            }).apply(this, arguments)
        }

        var e1 = (0, R.forwardRef)(function (e, t) {
            var n = e.title, l = e.titleId, r = function (e, t) {
                if (null == e) return {};
                var n, l, r = function (e, t) {
                    if (null == e) return {};
                    var n, l, r = {}, i = Object.keys(e);
                    for (l = 0; l < i.length; l++) n = i[l], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }(e, eX);
            return R.createElement("svg", e$({
                width: 28,
                height: 28,
                viewBox: "0 0 28 28",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": l
            }, r), n ? R.createElement("title", {id: l}, n) : null, g || (g = R.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0.666656 0.666016H27.3333V5.99935H0.666656V0.666016ZM0.666656 21.9993H27.3333V27.3327H0.666656V21.9993ZM0.666656 11.3327H27.3333V16.666H0.666656V11.3327Z",
                fill: "currentColor"
            })))
        }), e2 = ["title", "titleId"];

        function e0() {
            return (e0 = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l])
                }
                return e
            }).apply(this, arguments)
        }

        var e3 = (0, R.forwardRef)(function (e, t) {
            var n = e.title, l = e.titleId, r = function (e, t) {
                if (null == e) return {};
                var n, l, r = function (e, t) {
                    if (null == e) return {};
                    var n, l, r = {}, i = Object.keys(e);
                    for (l = 0; l < i.length; l++) n = i[l], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }(e, e2);
            return R.createElement("svg", e0({
                width: 40,
                height: 40,
                viewBox: "0 0 40 40",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": l
            }, r), n ? R.createElement("title", {id: l}, n) : null, w || (w = R.createElement("g", {clipPath: "url(#clip0_1904_11113)"}, R.createElement("path", {
                d: "M31.3357 6.33789L33.6915 8.69611L8.67736 33.6849L6.32153 31.3267L31.3357 6.33789Z",
                fill: "#191C1F"
            }), R.createElement("path", {
                d: "M8.67728 6.33789L6.32145 8.69611L31.3356 33.6849L33.6914 31.3267L8.67728 6.33789Z",
                fill: "#191C1F"
            }))), j || (j = R.createElement("defs", null, R.createElement("clipPath", {id: "clip0_1904_11113"}, R.createElement("rect", {
                width: 40,
                height: 40,
                fill: "white"
            })))))
        }), e5 = ["title", "titleId"];

        function e7() {
            return (e7 = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l])
                }
                return e
            }).apply(this, arguments)
        }

        var e4 = (0, R.forwardRef)(function (e, t) {
            var n = e.title, l = e.titleId, r = function (e, t) {
                if (null == e) return {};
                var n, l, r = function (e, t) {
                    if (null == e) return {};
                    var n, l, r = {}, i = Object.keys(e);
                    for (l = 0; l < i.length; l++) n = i[l], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }(e, e5);
            return R.createElement("svg", e7({
                width: 16,
                height: 16,
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": l
            }, r), n ? R.createElement("title", {id: l}, n) : null, C || (C = R.createElement("path", {
                d: "M8.94321 11.1383C8.42251 11.659 7.57829 11.659 7.05759 11.1383L1.95996 6.04068L3.37417 4.62646L8.00107 9.2529L12.6266 4.62646L14.0408 6.04068L8.94321 11.1383Z",
                fill: "currentColor"
            })))
        }), e8 = ["title", "titleId"];

        function e6() {
            return (e6 = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l])
                }
                return e
            }).apply(this, arguments)
        }

        var e9 = (0, R.forwardRef)(function (e, t) {
            var n = e.title, l = e.titleId, r = function (e, t) {
                if (null == e) return {};
                var n, l, r = function (e, t) {
                    if (null == e) return {};
                    var n, l, r = {}, i = Object.keys(e);
                    for (l = 0; l < i.length; l++) n = i[l], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }(e, e8);
            return R.createElement("svg", e6({
                width: 16,
                height: 16,
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": l
            }, r), n ? R.createElement("title", {id: l}, n) : null, y || (y = R.createElement("path", {
                d: "M7.05759 4.86172C7.57829 4.34102 8.42251 4.34102 8.94321 4.86172L14.0408 9.95935L12.6266 11.3736L7.99973 6.74712L3.37417 11.3736L1.95996 9.95935L7.05759 4.86172Z",
                fill: "currentColor"
            })))
        }), te = function (e) {
            var t = e.expanded, n = e.onChange, l = e.beforeClick;
            return (0, B.jsxs)("div", {
                className: eJ().nav,
                children: [(0, B.jsx)(em.Z, {
                    className: eJ().logo,
                    mobile: !0,
                    onClick: l,
                    "data-sensors-click": "true"
                }), (0, B.jsx)("span", {
                    onClick: n,
                    "data-sensors-click": "true",
                    children: t ? (0, B.jsx)(e3, {className: eJ().closeIcon}) : (0, B.jsx)(e1, {className: eJ().closeIcon})
                })]
            })
        }, tt = function (e) {
            var t, n = e.menus, l = e.className, r = e.children, i = (0, ep.qM)(), a = i.isLanding, o = i.isHK,
                c = (0, R.useState)(!1), s = c[0], d = c[1],
                u = (0, R.useRef)(V.jU ? null === (t = window) || void 0 === t ? void 0 : t.document.body.style.overflow : "initial"),
                L = (0, $.useRouter)().asPath, p = (0, R.useState)(null), m = p[0], f = p[1];
            (0, R.useEffect)(function () {
                document.body.style.overflow = s ? "hidden" : u.current
            }, [s]);
            var h = function () {
                d(!s)
            }, v = function () {
                d(!1)
            };
            return (0, B.jsxs)("header", {
                className: T()(eJ().header, eJ().root, l),
                id: "international-mobileHeader",
                children: [r, (0, B.jsxs)("div", {
                    className: eJ().inner, children: [(0, B.jsx)(te, {onChange: h, expanded: s}), (0, B.jsxs)("div", {
                        className: T()(eJ().content, (0, N.Z)({}, "".concat(eJ().visible), s)),
                        children: [(0, B.jsx)(te, {
                            onChange: h,
                            expanded: s,
                            beforeClick: v
                        }), (0, B.jsxs)("section", {
                            className: eJ().menuRoot,
                            children: [(0, B.jsx)("div", {
                                className: eJ().menus, children: n.map(function (e, t) {
                                    var n, l = m === t;
                                    return (0, B.jsxs)("ul", {
                                        className: T()(eJ().menuItem),
                                        children: [(0, B.jsxs)("li", {
                                            className: T()(eJ().title),
                                            onClick: function () {
                                                if (l) {
                                                    f(null);
                                                    return
                                                }
                                                f(t)
                                            },
                                            "data-sensors-click": "true",
                                            children: [(0, B.jsx)("span", {children: e.label}), (0, B.jsx)("span", {
                                                className: eJ().iconWrapper,
                                                children: l ? (0, B.jsx)(e9, {className: eJ().arrowIcon}) : (0, B.jsx)(e4, {className: eJ().arrowIcon})
                                            })]
                                        }, e.label), (0, B.jsx)("ul", {
                                            className: T()(eJ().subItems, l && eJ().itemSelected),
                                            children: null === (n = e.children) || void 0 === n ? void 0 : n.map(function (e) {
                                                return (0, B.jsx)("li", {
                                                    className: T()(eJ().item),
                                                    onClick: v,
                                                    "data-sensors-click": "true",
                                                    children: (0, B.jsx)(U(), {
                                                        style: {width: "100%"},
                                                        href: (0, eb.Z)({asPath: L, toPath: e.value || ""}),
                                                        "data-sensors-click": "true",
                                                        children: e.label
                                                    })
                                                }, e.label)
                                            })
                                        })]
                                    }, t)
                                })
                            }), (0, B.jsx)(eY, {beforeClick: v})]
                        }), (0, B.jsx)("section", {
                            className: eJ().footer,
                            children: !a && o ? (0, B.jsx)(eH, {className: eJ().linkButton}) : (0, B.jsx)(en.Z, {
                                className: eJ().linkButton,
                                showIcon: !1,
                                beforeClick: v
                            })
                        })]
                    })]
                })]
            })
        }, tn = n(25842), tl = n.n(tn), tr = function (e) {
            var t = e.menus, n = e.policies, l = e.copyright, r = e.email, i = e.links, a = e.className,
                o = (0, P.$G)().t, c = (0, R.useState)(null), s = c[0], d = c[1], u = function (e) {
                    return (0, B.jsx)(K.Kk, {
                        href: e.value,
                        className: tl().text,
                        rel: e.rel,
                        onClick: e.onClick,
                        "data-sensors-click": "true",
                        children: e.label
                    }, e.label)
                };
            return (0, B.jsxs)("footer", {
                className: T()(tl().footer, a), id: "international-footer", children: [(0, B.jsxs)("section", {
                    className: T()("xt-safe-row", tl().navs),
                    children: [(0, B.jsx)("div", {
                        className: tl().menus, children: t.map(function (e, t) {
                            var n, l = s === t;
                            return (0, B.jsxs)("ul", {
                                className: T()(tl().menuItem),
                                children: [(0, B.jsxs)("li", {
                                    className: T()(tl().title),
                                    onClick: function () {
                                        if (l) {
                                            d(null);
                                            return
                                        }
                                        d(t)
                                    },
                                    "data-sensors-click": "true",
                                    children: [(0, B.jsx)("span", {children: e.label}), l ? (0, B.jsx)(e9, {className: tl().arrowIcon}) : (0, B.jsx)(e4, {className: tl().arrowIcon})]
                                }, e.label), (0, B.jsx)("ul", {
                                    className: T()(tl().subItems, l && tl().itemSelected),
                                    children: null === (n = e.children) || void 0 === n ? void 0 : n.map(function (e) {
                                        return (0, B.jsx)("li", {className: T()(tl().item), children: u(e)}, e.label)
                                    })
                                })]
                            }, t)
                        })
                    }), (0, B.jsxs)("div", {
                        className: tl().contact,
                        children: [(0, B.jsx)("div", {
                            className: tl().email,
                            children: r
                        }), (0, B.jsxs)("div", {
                            className: tl().social,
                            children: [(0, B.jsxs)("div", {
                                className: tl().title,
                                children: [o("common-followUs"), ":"]
                            }), (0, B.jsx)("ul", {
                                className: tl().socialMedias, children: i.map(function (e, t) {
                                    var n = e.title, l = e.href, r = e.icon;
                                    return (0, B.jsx)("li", {
                                        className: tl().socialLink,
                                        children: (0, B.jsx)("a", {
                                            href: l,
                                            title: n,
                                            target: "_blank",
                                            rel: "noopener noreferrer nofollow",
                                            children: (0, B.jsx)(K.bQ, {type: r})
                                        })
                                    }, t)
                                })
                            })]
                        })]
                    })]
                }), (0, B.jsxs)("section", {
                    className: T()("xt-safe-row", tl().policy),
                    children: [(0, B.jsx)("img", {
                        alt: "logo",
                        src: G.fB,
                        className: tl().logo
                    }), (0, B.jsx)("ul", {
                        className: tl().policiesWrapper, children: n.map(function (e, t) {
                            return (0, B.jsx)("li", {className: tl().policyItem, children: u(e)}, t)
                        })
                    })]
                }), (0, B.jsxs)("section", {
                    className: T()("xt-safe-row", tl().copyrightWrapper),
                    children: [(0, B.jsx)("div", {className: tl().divider}), (0, B.jsx)("div", {
                        className: tl().copyright,
                        children: l
                    })]
                })]
            })
        }, ti = n(80131), ta = n(23279), to = n.n(ta), tc = ["title", "titleId"];

        function ts() {
            return (ts = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l])
                }
                return e
            }).apply(this, arguments)
        }

        var td = (0, R.forwardRef)(function (e, t) {
            var n = e.title, l = e.titleId, r = function (e, t) {
                if (null == e) return {};
                var n, l, r = function (e, t) {
                    if (null == e) return {};
                    var n, l, r = {}, i = Object.keys(e);
                    for (l = 0; l < i.length; l++) n = i[l], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }(e, tc);
            return R.createElement("svg", ts({
                width: 60,
                height: 60,
                viewBox: "0 0 60 60",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": l
            }, r), n ? R.createElement("title", {id: l}, n) : null, O || (O = R.createElement("rect", {
                width: 60,
                height: 60,
                rx: 12,
                fill: "#FF7A00"
            })), H || (H = R.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M23.3509 35.1066C22.8622 35.7524 22.8622 36.6086 23.3509 37.2547L26.8083 41.7837H34.3652L26.3727 31.1387L23.3509 35.1066Z",
                fill: "white"
            })), E || (E = R.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M42.3501 41.7829H45.7466V25.8154H40.4355V39.714C40.4355 40.8568 41.2926 41.7829 42.3501 41.7829Z",
                fill: "white"
            })), M || (M = R.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M24.4433 27.9454L16.6476 18.2148H8.65606L17.3016 29.101C17.7138 29.6046 17.7842 30.2365 17.4006 30.8128L8.57031 41.7859H16.826L24.5759 32.0116C25.5754 30.7889 25.4421 29.1681 24.4433 27.9454Z",
                fill: "white"
            })), k || (k = R.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M26.2735 28.86L34.3671 18.2148H26.8386L23.348 22.7725C22.8658 23.4022 22.8658 24.2365 23.348 24.8663L26.2735 28.86Z",
                fill: "white"
            })), Z || (Z = R.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M36.5104 18.2148L32.8486 22.777H50.5442C51.6658 22.777 52.5753 21.9241 52.5753 20.8723V18.2148H36.5104Z",
                fill: "white"
            })))
        }), tu = n(56342), tL = n(4817), tp = n.n(tL), tm = function () {
            var e = (0, R.useState)(!1), t = e[0], n = e[1], l = (0, $.useRouter)().query.utm_source,
                r = void 0 === l ? "" : l, i = to()(function () {
                    n(!0), (0, tu.jM)({
                        appInfo: tu.gT.A, fallbackUrl: "/app", utmSource: r, onFailed: function () {
                            n(!1)
                        }, onSuccess: function () {
                            n(!1)
                        }
                    })
                }, 500);
            return (0, B.jsxs)("div", {
                className: tp().wrapper,
                children: [(0, B.jsxs)("div", {
                    className: tp().left,
                    children: [(0, B.jsx)(td, {className: tp().squareLogo}), (0, B.jsx)("span", {
                        className: tp().desc,
                        children: "Use XTransfer anytime, anywhere"
                    })]
                }), (0, B.jsx)(ei.Z, {
                    className: tp().guideBtn,
                    type: "primary",
                    onClick: i,
                    suffix: t ? (0, B.jsx)("span", {className: tp().loading}) : null,
                    "data-sensors-click": "true",
                    children: "GET APP"
                })]
            })
        };

        function tf(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                t && (l = l.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), n.push.apply(n, l)
            }
            return n
        }

        function th(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? tf(Object(n), !0).forEach(function (t) {
                    (0, N.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tf(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }

        var tv = function (e) {
            var t = e.children, n = e.disabledAppGuideBanner, l = (0, P.$G)().t, r = (0, ep.qM)(), i = r.isUS,
                a = r.isUK, o = r.isLanding, c = r.isMobile, s = r.host, d = (0, P.Fe)().inApp, u = i || a,
                L = (0, I.Z)(V.jU ? document : void 0), p = [{
                    label: l("common-products-services"),
                    value: "javascript:;",
                    children: [{label: l("common-business-wallet"), value: ec.hy}, {
                        label: l("common-add-receive-money"),
                        value: ec.Ym
                    }, {label: l("common-currency-send-money"), value: ec.p$}, {
                        label: l("common-currency-exchange"),
                        value: ec.DV
                    }, {label: l("common-pricing"), value: ec.LC}]
                }, {
                    label: l("common-about-us"),
                    value: "javascript:;",
                    children: u ? [{label: l("common-company"), value: ec.wz}, {
                        label: l("common-career"),
                        value: ec.vg
                    }, {label: l("common-partner"), value: ec.JR}] : [{
                        label: l("common-company"),
                        value: ec.wz
                    }, {label: l("common-news-and-blog"), value: ec.MG}, {
                        label: l("common-career"),
                        value: ec.vg
                    }, {label: l("common-partner"), value: ec.JR}]
                }, {
                    label: l("common-help-support"),
                    value: "javascript:;",
                    children: u || o ? [{label: l("common-contact-us"), value: ec.RQ}] : [{
                        label: l("common-faqs"),
                        value: ec.Sd,
                        onClick: function () {
                            (0, V.Ds)("FUND_click", {button_name: "Global-bar-helpcenter"})
                        }
                    }, {label: l("common-contact-us"), value: ec.RQ}]
                }], m = {menus: p}, f = {
                    menus: [].concat(p).concat(u || o ? [] : [{
                        label: "Resources",
                        value: "javascript:;",
                        children: [{label: l("common-knowledge-hub"), value: ec.Cu}, {
                            label: l("common-hs-code"),
                            value: ec.oP
                        }, {
                            label: l("common-exchange-rate"),
                            value: "https://".concat(s).concat(ec.rp)
                        }, {label: l("common-community"), value: ec.zt}, {label: l("common-swift-code"), value: ec.IK}]
                    }]),
                    policies: [{
                        label: l("common-securityPolicy"),
                        value: ec.Vg,
                        rel: "noopener noreferrer nofollow"
                    }, {
                        label: l("common-cookiePolicy"),
                        value: ec.Zb,
                        rel: "noopener noreferrer nofollow"
                    }, {label: l("common-websiteTerms"), value: ec.$6, rel: "noopener noreferrer nofollow"}],
                    copyright: l("common-copyright-2024"),
                    email: l("common-email"),
                    links: [{
                        href: l("new-common-FaceBook-link"),
                        title: "FaceBook",
                        icon: "xtFacebook"
                    }, {href: l("common-Linkedin"), title: "LinkedIn", icon: "xtLinkedin"}, {
                        href: l("common-Instagram"),
                        title: "Instagram",
                        icon: "xtinstagram"
                    }, {
                        href: l("common-Youtube"),
                        title: "Youtube",
                        icon: "xtyoutube"
                    }, {href: l("new-common-Twitter-link"), title: "Twitter", icon: "xttuitetwitter"}]
                }, h = (0, R.useCallback)(function (e) {
                    var t = document.getElementById("international-header");
                    t && (e ? t.classList.add("xt-new-shadow") : t.classList.remove("xt-new-shadow"))
                }, []);
            (0, R.useEffect)(function () {
                null == L || L.top, h(((null == L ? void 0 : L.top) || 0) > 0)
            }, [h, null == L ? void 0 : L.top]), (0, R.useEffect)(function () {
                document.body.removeAttribute("style")
            }, []);
            var v = (0, R.useMemo)(function () {
                if (!n && c && !o) return {paddingBottom: "13.8667vw"}
            }, [c, o]);
            return (0, B.jsxs)("div", {
                style: v,
                children: [(0, B.jsx)(S.Z, {
                    if: !!c,
                    else: (0, B.jsx)(ex, th(th({}, m), {}, {children: (0, B.jsx)(ti.Z, {})})),
                    children: (0, B.jsx)(tt, th(th({}, m), {}, {children: (0, B.jsx)(ti.Z, {})}))
                }), (0, B.jsx)(A, {children: t}), (0, B.jsx)(S.Z, {
                    if: !!c,
                    else: (0, B.jsx)(X, th({}, f)),
                    children: (0, B.jsx)(tr, th({}, f))
                }), (0, B.jsx)(S.Z, {
                    if: !n && !!c && !o && !d,
                    children: (0, B.jsx)(tm, {})
                }), (null == L ? void 0 : L.top) === 0 && (0, B.jsx)(D.Z, {})]
            })
        }
    }, 83551: function (e) {
        e.exports = {
            menu: "index_menu__j8LDT",
            button: "index_button__H5lRw",
            register: "index_register__n2vQ8",
            login: "index_login__BrTTy"
        }
    }, 94058: function (e) {
        e.exports = {
            areaSelectorWrapper: "index_areaSelectorWrapper__ALoOY",
            header: "index_header__FvyOR",
            locationIconWrapper: "index_locationIconWrapper__zMZAd",
            icon: "index_icon__wAmgv",
            regionSelectorMask: "index_regionSelectorMask__LlsSl",
            regionSelectorWrapper: "index_regionSelectorWrapper__sTY3v",
            expand: "index_expand__bgdVJ",
            title: "index_title__y49Dh",
            main: "index_main__pfKBn",
            regions: "index_regions__5AOaC",
            regionItemWrapper: "index_regionItemWrapper__PqpJd",
            regionContent: "index_regionContent__bsY0d",
            iconWrapper: "index_iconWrapper___Qe5c",
            footer: "index_footer__fDSaI",
            line: "index_line___rVpx"
        }
    }, 16573: function (e) {
        e.exports = {
            menu: "index_menu__mXxCs",
            login: "index_login__Jg_wX",
            register: "index_register__nFWKr",
            earn: "index_earn__DAG9p",
            btnWrapper: "index_btnWrapper__AsAxv",
            move: "index_move__I1vUi",
            btnText: "index_btnText__6e8lS",
            textMove: "index_textMove__2dCil",
            button: "index_button__DRNLY"
        }
    }, 44860: function (e) {
        e.exports = {
            footer: "index_footer__Xzj36",
            "variable-item": "index_variable-item__tOOD0",
            navs: "index_navs__kj2Hb",
            menus: "index_menus__TRW1b",
            menuItem: "index_menuItem__XRerP",
            title: "index_title__bBN84",
            item: "index_item__MONYl",
            contact: "index_contact__9MBuu",
            email: "index_email__F88n9",
            social: "index_social__fO2jW",
            socialMedias: "index_socialMedias__kvmqO",
            socialLink: "index_socialLink__dWBPP",
            downloadGuide: "index_downloadGuide__WAZYi",
            appWrapper: "index_appWrapper__Yx7cd",
            downloadDesc: "index_downloadDesc__yhBJK",
            policy: "index_policy__5HjMN",
            logo: "index_logo__gC0B5",
            policiesWrapper: "index_policiesWrapper__o47iq",
            policyItem: "index_policyItem__B71qj",
            copyrightWrapper: "index_copyrightWrapper__nMCqf",
            divider: "index_divider__Oow9u",
            copyright: "index_copyright__re3Cy",
            annotation: "index_annotation__2tvRs"
        }
    }, 25842: function (e) {
        e.exports = {
            footer: "index_footer__F5_C9",
            navs: "index_navs__a_IN6",
            menus: "index_menus__Lz8SY",
            menuItem: "index_menuItem__aGXwE",
            title: "index_title__Dm4lk",
            arrowIcon: "index_arrowIcon__L4Hjm",
            subItems: "index_subItems__0qaht",
            itemSelected: "index_itemSelected__8O9PV",
            item: "index_item__oRIo1",
            contact: "index_contact__KAPFu",
            email: "index_email__3XEqz",
            social: "index_social__Ic2oZ",
            socialMedias: "index_socialMedias__PvPCy",
            socialLink: "index_socialLink__VuuVm",
            policy: "index_policy__HWb_F",
            logo: "index_logo__yTcSH",
            policiesWrapper: "index_policiesWrapper__a8Fb2",
            policyItem: "index_policyItem__IWO_1",
            copyrightWrapper: "index_copyrightWrapper__4aceH",
            divider: "index_divider__96P3W",
            copyright: "index_copyright__Up_RP"
        }
    }, 28633: function (e) {
        e.exports = {
            headerWrapper: "index_headerWrapper__GsdHQ",
            "variable-dropdownMenu": "index_variable-dropdownMenu__REJmr",
            header: "index_header__hhqFz",
            logo: "index_logo__0utZh",
            menusWrapper: "index_menusWrapper__l2A_C",
            menus: "index_menus__aNstu",
            language: "index_language__tMaFN",
            contactUSButton: "index_contactUSButton__mt9Tl"
        }
    }, 49454: function (e) {
        e.exports = {
            header: "index_header__sFaPJ",
            inner: "index_inner__whoWx",
            nav: "index_nav__gqwxA",
            logo: "index_logo___Uftw",
            closeIcon: "index_closeIcon__Ff1YW",
            content: "index_content__0wwUz",
            menuRoot: "index_menuRoot__NLKOz",
            menus: "index_menus__mbmp9",
            menuItem: "index_menuItem__ZbBcS",
            title: "index_title__iQYIw",
            iconWrapper: "index_iconWrapper__LLlWz",
            arrowIcon: "index_arrowIcon__qwqkq",
            subItems: "index_subItems__AfebL",
            itemSelected: "index_itemSelected__Y2jmI",
            item: "index_item__ilw41",
            visible: "index_visible__O7qfO",
            footer: "index_footer__cx1e7",
            linkButton: "index_linkButton__gY_VL"
        }
    }, 61069: function (e) {
        e.exports = {main: "index_main__DQvu_"}
    }, 4817: function (e) {
        e.exports = {
            wrapper: "index_wrapper___ifBg",
            left: "index_left__1sNhF",
            squareLogo: "index_squareLogo__CsAd3",
            desc: "index_desc__nnZ8W",
            guideBtn: "index_guideBtn__Qp5hS",
            loading: "index_loading__0oFj4",
            circle: "index_circle__UqpYT"
        }
    }
}]);
//# sourceMappingURL=5894-d091197a58b4b428.js.map