(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5405], {
    14329: function (e, t, n) {
        "use strict";
        var i = n(59499), r = n(37667), s = n.n(r), o = n(94184), c = n.n(o), a = n(25447), l = n.n(a), d = n(39755),
            _ = n(85893);

        function m(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), n.push.apply(n, i)
            }
            return n
        }

        function u(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? m(Object(n), !0).forEach(function (t) {
                    (0, i.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }

        t.Z = function (e) {
            var t = e.children, n = e.className, i = e.style, r = (0, d.QU)(s().Children.count(t)), o = r.ref,
                a = r.aniCount;
            return (0, _.jsx)("div", {
                className: "".concat(l().AniImg, " ").concat(n),
                ref: o,
                style: i,
                children: s().Children.map(t, function (e, t) {
                    return s().isValidElement(e) ? s().cloneElement(e, {
                        className: c()(l()["transition-item"], e.props.className),
                        style: u(u({}, e.props.style), {}, {opacity: a >= t ? 1 : 0})
                    }) : e
                })
            })
        }
    }, 83530: function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, {
            __N_SSP: function () {
                return eh
            }, default: function () {
                return eg
            }
        });
        var i = n(59499), r = n(37667), s = n(11163), o = n(45894), c = n(77532), a = n(39755), l = n(94184),
            d = n.n(l), _ = n(65363), m = n(64508), u = n.n(m), x = n(14329), f = n(4730), p = n(13372), h = n.n(p),
            g = n(85893), j = ["imgClassName", "imgStyle", "alt", "className", "style", "loading"];

        function b(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), n.push.apply(n, i)
            }
            return n
        }

        var w = function (e) {
            var t = e.imgClassName, n = e.imgStyle, r = e.alt, s = e.className, o = e.style, c = e.loading,
                a = (0, f.Z)(e, j);
            return (0, g.jsx)("div", {
                className: d()(h().aspectRatioImg, s),
                style: o,
                children: (0, g.jsx)("img", function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? b(Object(n), !0).forEach(function (t) {
                            (0, i.Z)(e, t, n[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach(function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                    }
                    return e
                }({alt: r, className: d()(h()["inner-img"], t), style: n, loading: void 0 === c ? "lazy" : c}, a))
            })
        }, y = function (e) {
            var t = e.className, n = (0, a.$G)().t;
            return (0, g.jsxs)(x.Z, {
                className: d()(t, u().benefits),
                children: [(0, g.jsx)(w, {
                    src: n("home-benefits-img-women"),
                    alt: "benefits-women",
                    className: u().left
                }), (0, g.jsx)(w, {src: n("home-benefits-img-man"), alt: "benefits-man", className: u().right})]
            })
        }, O = n(85832), v = function (e) {
            var t = e.className, n = (0, a.$G)().t, i = (0, O.lw)().isMobile;
            return (0, g.jsxs)(x.Z, {
                className: d()(t, u().zero),
                children: [i ? (0, g.jsx)(w, {
                    src: n("home-zero-img-account-mobile"),
                    alt: "zero-Create currency account",
                    className: u().img1
                }) : (0, g.jsx)(w, {
                    src: n("home-zero-img-account"),
                    alt: "zero-Create currency account",
                    className: u().img1
                }), (0, g.jsx)(w, {src: n("home-zero-img-fee"), alt: "zero-fee", className: u().img2})]
            })
        }, N = function (e) {
            var t = e.className, n = (0, a.$G)().t;
            return (0, g.jsx)(x.Z, {
                className: d()(t, u().streamlined),
                children: (0, g.jsx)(w, {
                    src: n("home-streamlined-img-streamlined"),
                    alt: "streamlined",
                    className: u().img1
                })
            })
        }, P = function (e) {
            var t = e.className, n = (0, a.$G)().t;
            return (0, g.jsxs)(x.Z, {
                className: d()(t, u().account),
                children: [(0, g.jsxs)("div", {
                    className: u().center,
                    children: [(0, g.jsx)(w, {
                        src: n("home-account-img-img6"),
                        alt: "Payment received",
                        className: u().img1
                    }), (0, g.jsx)(w, {src: n("home-account-img-img5"), alt: "xt", className: u().img2})]
                }), (0, g.jsxs)("div", {
                    className: u().left,
                    children: [(0, g.jsx)(w, {
                        src: n("home-account-img-img1"),
                        alt: "us",
                        className: u().img1
                    }), (0, g.jsx)(w, {
                        src: n("home-account-img-img2"),
                        alt: "as",
                        className: u().img2
                    }), (0, g.jsx)(w, {
                        src: n("home-account-img-img3"),
                        alt: "switzerland",
                        className: u().img3
                    }), (0, g.jsx)(w, {
                        src: n("home-account-img-img4"),
                        alt: "Add more currencies",
                        className: u().img4
                    })]
                }), (0, g.jsx)(w, {src: n("home-account-img-img7"), alt: "Credited", className: u().right})]
            })
        }, z = n(5215), k = n.n(z), D = n(26069);

        function E(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), n.push.apply(n, i)
            }
            return n
        }

        function Z(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? E(Object(n), !0).forEach(function (t) {
                    (0, i.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }

        var S = function () {
                var e, t = (0, a.$G)().t, n = (0, O.lw)().isMobile, i = t("home-description-ul") || [];
                return (0, g.jsxs)("section", {
                    className: k().root,
                    children: [(0, g.jsxs)("div", {
                        className: "xt-row",
                        children: [n ? (0, g.jsx)(D.Z, {
                            className: "xt-h2 ".concat(k().mobileTitle),
                            onlyOneRow: !0,
                            children: t("home-description-title-ul")
                        }) : (0, g.jsx)(D.Z, {
                            className: "xt-h2 ".concat(k().title),
                            children: t("home-description-title-ul")
                        }), (0, g.jsx)("ul", {
                            className: k().content,
                            children: null == i ? void 0 : null === (e = i.map) || void 0 === e ? void 0 : e.call(i, function (e) {
                                return (0, g.jsx)(_.YP, Z(Z({className: k().item}, e), {}, {icon: ""}), e.title)
                            })
                        })]
                    }), (0, g.jsx)("img", {
                        src: "https://cdn-global.xtransfer.com/benefits-bg_dd02513582f7a295.svg",
                        alt: "benefits-bg",
                        className: k().benefitsGg,
                        loading: "lazy"
                    })]
                })
            }, W = n(12196), B = n.n(W), C = n(32247), G = n(81904), T = n.n(G), A = n(79686),
            q = ["currentSlide", "slideCount", "children"];

        function I(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), n.push.apply(n, i)
            }
            return n
        }

        var R = function (e) {
            e.currentSlide, e.slideCount;
            var t = e.children, n = (0, f.Z)(e, q);
            return (0, r.isValidElement)(t) ? (0, r.cloneElement)(t, function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? I(Object(n), !0).forEach(function (t) {
                        (0, i.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }({}, n)) : (0, g.jsx)(r.Fragment, {children: t})
        }, Y = ["children", "length", "arrowPosition", "className", "autoplay"];

        function F(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), n.push.apply(n, i)
            }
            return n
        }

        function H(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? F(Object(n), !0).forEach(function (t) {
                    (0, i.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : F(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }

        var M = function (e) {
            var t, n = e.children, s = e.length, o = e.arrowPosition, c = void 0 === o ? "center" : o, a = e.className,
                l = e.autoplay, _ = (0, f.Z)(e, Y), m = (0, r.useRef)(null);
            return (0, r.useEffect)(function () {
                var e = (40 * s - 8) / 2 + 80, t = m.current,
                    n = null == t ? void 0 : t.querySelector(".slick-arrow.slick-prev"),
                    i = null == t ? void 0 : t.querySelector(".slick-arrow.slick-next");
                switch (c) {
                    case"left":
                        n.style.left = "0", i.style.right = "calc(100% - ".concat(2 * e, "px)");
                        break;
                    case"right":
                        n.style.left = "calc(100% - ".concat(2 * e, "px)"), i.style.right = "0";
                        break;
                    default:
                        n.style.left = "calc(50% - ".concat(e, "px)"), i.style.right = "calc(50% - ".concat(e, "px)")
                }
            }, [c, s]), (0, g.jsx)("div", {
                className: d()(T().wrapper, (t = {}, (0, i.Z)(t, T().leftArrow, "left" === c), (0, i.Z)(t, T().rightArrow, "right" === c), t), a),
                ref: m,
                children: (0, g.jsx)(C.l, H(H({
                    prevArrow: (0, g.jsx)(R, {children: (0, g.jsx)(A.Z, {type: "xthoutui"})}),
                    nextArrow: (0, g.jsx)(R, {children: (0, g.jsx)(A.Z, {type: "xtqianjin"})}),
                    autoplay: void 0 === l || l
                }, _), {}, {children: n}))
            })
        }, Q = n(1349), J = n.n(Q), K = n(17469), U = function (e) {
            var t = e.info, n = e.button, i = e.onClick, r = t.title, s = t.desc, o = t.img, c = t.url;
            return (0, g.jsxs)("div", {
                className: d()("xt-row", J().wrapper),
                onClick: i,
                "data-sensors-click": "true",
                children: [(0, g.jsx)("div", {
                    className: J().left,
                    children: (0, g.jsxs)("div", {
                        className: J().inner,
                        children: [(0, g.jsx)("h3", {
                            className: d()("xt-h3", J().title),
                            children: r
                        }), (0, g.jsx)("span", {
                            className: d()("xt-text", J().desc),
                            children: s
                        }), (0, g.jsx)(K.Z, {
                            onClick: function () {
                                return window.open(c, "_blank")
                            }, className: J().btn, text: n, "data-sensors-click": "true"
                        })]
                    })
                }), (0, g.jsx)("div", {
                    className: J().right,
                    children: (0, g.jsx)(x.Z, {
                        className: J().inner,
                        children: (0, g.jsx)("img", {
                            src: o,
                            alt: "media-image",
                            loading: "lazy",
                            className: J().img,
                            "data-type": "scale"
                        })
                    })
                })]
            })
        };

        function V(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), n.push.apply(n, i)
            }
            return n
        }

        function X(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? V(Object(n), !0).forEach(function (t) {
                    (0, i.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : V(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }

        var L = function () {
            var e, t = (0, a.$G)().t, n = (0, O.lw)().isMobile,
                i = [t("home-media-ul-1"), t("home-media-ul-2"), t("home-media-ul-3")];
            return (0, g.jsxs)("section", {
                className: B().section,
                children: [(0, g.jsx)(D.Z, {children: t("home-media-title")}), n ? (0, g.jsx)("div", {
                    className: B().mobileContent,
                    children: i.map(function (e, n) {
                        return (0, g.jsx)(U, {
                            info: X(X({}, e), {}, {img: t("home-media-img-media".concat(n + 1))}),
                            button: t("home-media-button"),
                            onClick: function () {
                                return window.open(null == e ? void 0 : e.url, "_blank")
                            },
                            "data-sensors-click": "true"
                        }, n)
                    })
                }) : (0, g.jsx)("div", {
                    className: B().content,
                    children: (0, g.jsx)(M, {
                        arrows: !0,
                        length: null !== (e = null == i ? void 0 : i.length) && void 0 !== e ? e : 0,
                        children: i.map(function (e, n) {
                            return (0, g.jsx)(U, {
                                info: X(X({}, e), {}, {img: t("home-media-img-media".concat(n + 1))}),
                                button: t("home-media-button")
                            }, n)
                        })
                    })
                })]
            })
        }, $ = n(46687), ee = n.n($), et = n(83367), en = n.n(et), ei = function (e) {
            var t = e.info, n = t.img, i = t.desc, r = t.author;
            return (0, g.jsx)("div", {
                className: d()("xt-row", en().wrapper),
                children: (0, g.jsxs)("div", {
                    className: en().card,
                    children: [(0, g.jsx)(x.Z, {
                        className: en().imgContainer,
                        children: (0, g.jsx)("img", {
                            src: n,
                            "data-type": "scale",
                            alt: "customer-image",
                            className: en().img,
                            loading: "lazy"
                        })
                    }), (0, g.jsxs)("div", {
                        className: en().content,
                        title: i,
                        children: [(0, g.jsx)(A.Z, {
                            type: "xtyinhao",
                            className: en().iconfont
                        }), (0, g.jsx)("span", {
                            className: "xt-text ".concat(en().desc),
                            children: i
                        }), (0, g.jsx)("span", {className: en().author, children: r})]
                    })]
                })
            })
        };

        function er(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), n.push.apply(n, i)
            }
            return n
        }

        function es(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? er(Object(n), !0).forEach(function (t) {
                    (0, i.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : er(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }

        var eo = function (e) {
            var t, n = e.ns, i = e.nsPrefix, r = (0, a.$G)().t,
                s = [r("".concat(n, "-").concat(i, "-ul-1")), r("".concat(n, "-").concat(i, "-ul-2")), r("".concat(n, "-").concat(i, "-ul-3"))];
            return (0, g.jsxs)("section", {
                className: ee().section,
                children: [(0, g.jsx)(D.Z, {children: r("".concat(n, "-").concat(i, "-title"))}), (0, g.jsx)(M, {
                    arrows: !0,
                    length: null !== (t = null == s ? void 0 : s.length) && void 0 !== t ? t : 0,
                    children: s.map(function (e, t) {
                        return (0, g.jsx)(ei, {info: es(es({}, e), {}, {img: r("home-customer-img-customer".concat(t + 1))})}, t)
                    })
                })]
            })
        }, ec = n(46572), ea = n.n(ec), el = function (e) {
            var t, n, i, r, s, o, c, l, m = e.ns, u = e.nsPrefix, x = (0, a.$G)().t,
                f = [x("".concat(m, "-").concat(u, "-ul-fund")), x("".concat(m, "-").concat(u, "-ul-transaction")), x("".concat(m, "-").concat(u, "-ul-data")), x("".concat(m, "-").concat(u, "-ul-platform"))];
            return (0, g.jsxs)("section", {
                className: d()("xt-row", ea().section),
                children: [(0, g.jsx)(D.Z, {
                    className: ea().title,
                    children: x("".concat(m, "-").concat(u, "-title"))
                }), (0, g.jsxs)("div", {
                    className: ea().contentWrapper,
                    children: [(0, g.jsx)(_.dg, {
                        icon: (0, g.jsx)(A.Z, {
                            type: "xtzijinanquan",
                            className: ea().iconfont
                        }),
                        title: null === (t = f[0]) || void 0 === t ? void 0 : t.title,
                        desc: null === (n = f[0]) || void 0 === n ? void 0 : n.desc,
                        className: ea().iconSec
                    }), (0, g.jsx)(_.dg, {
                        icon: (0, g.jsx)(A.Z, {type: "xtjiaoyianquan", className: ea().iconfont}),
                        title: null === (i = f[1]) || void 0 === i ? void 0 : i.title,
                        className: ea().iconSec,
                        desc: null === (r = f[1]) || void 0 === r ? void 0 : r.desc
                    }), (0, g.jsx)(_.dg, {
                        icon: (0, g.jsx)(A.Z, {type: "xtyinsibaohu", className: ea().iconfont}),
                        title: null === (s = f[2]) || void 0 === s ? void 0 : s.title,
                        desc: null === (o = f[2]) || void 0 === o ? void 0 : o.desc,
                        className: ea().iconSec
                    }), (0, g.jsx)(_.dg, {
                        icon: (0, g.jsx)(A.Z, {type: "xtxitonganquan", className: ea().iconfont}),
                        title: null === (c = f[3]) || void 0 === c ? void 0 : c.title,
                        desc: null === (l = f[3]) || void 0 === l ? void 0 : l.desc,
                        className: ea().iconSec
                    })]
                })]
            })
        }, ed = n(42577), e_ = n.n(ed), em = function (e) {
            var t = (0, a.$G)().t, n = (0, O.lw)().isMobile, i = {
                usd: t("home-topBanner-img-usd"),
                eur: t("home-topBanner-img-eur"),
                gbp: t("home-topBanner-img-gbp"),
                hkd: t("home-topBanner-img-hkd"),
                curve: t("home-topBanner-img-curve"),
                curveBg: t("home-topBanner-img-curveBg"),
                security: t("home-topBanner-img-security"),
                account: t("home-topBanner-img-account")
            };
            return (0, g.jsxs)(r.Fragment, {
                children: [(0, g.jsx)(_.Yr, {
                    title: t(e.isMobile || n ? "home-topBanner-mobile-title" : "home-topBanner-title"),
                    id: "homeTopBanner",
                    cusImg: (0, g.jsxs)(g.Fragment, {
                        children: [(0, g.jsx)("div", {
                            className: d()(e_().shadow, e_().curveBgWrapper),
                            children: (0, g.jsx)("img", {src: i.curveBg, alt: "curveBg", className: "fill-image"})
                        }), (0, g.jsx)("div", {
                            className: d()(e_().shadow, e_().curveWrapper),
                            children: (0, g.jsx)("img", {src: i.curve, alt: "curve", className: "fill-image"})
                        }), (0, g.jsx)("div", {
                            className: d()(e_().shadow, e_().usdWrapper),
                            children: (0, g.jsx)("img", {src: i.usd, alt: "usd", className: "fill-image"})
                        }), (0, g.jsx)("div", {
                            className: d()(e_().shadow, e_().eurWrapper),
                            children: (0, g.jsx)("img", {src: i.eur, alt: "eur", className: "fill-image"})
                        }), (0, g.jsx)("div", {
                            className: d()(e_().shadow, e_().gbpWrapper),
                            children: (0, g.jsx)("img", {src: i.gbp, alt: "gbp", className: "fill-image"})
                        }), (0, g.jsx)("div", {
                            className: d()(e_().shadow, e_().hkdWrapper),
                            children: (0, g.jsx)("img", {src: i.hkd, alt: "hkd", className: "fill-image"})
                        }), (0, g.jsx)("div", {
                            className: d()(e_().shadow, e_().securityWrapper),
                            children: (0, g.jsx)("img", {src: i.security, alt: "security", className: "fill-image"})
                        }), (0, g.jsx)("div", {
                            className: d()(e_().shadow, e_().accountWrapper),
                            children: (0, g.jsx)("img", {src: i.account, alt: "account", className: "fill-image"})
                        })]
                    }),
                    desc: t("home-topBanner-ul")
                }), (0, g.jsxs)(_.dI, {
                    className: e_().TitleBanner,
                    children: [(0, g.jsx)(S, {}), (0, g.jsx)(_.tJ, {
                        title: t("home-benefits-title"),
                        id: "benefits",
                        left: {title: t("home-benefits-subTitle"), subTitle: t("home-benefits-desc")},
                        children: (0, g.jsx)(y, {})
                    }), (0, g.jsx)(_.tJ, {
                        id: "account",
                        left: {title: t("home-account-subTitle"), subTitle: t("home-account-desc")},
                        children: (0, g.jsx)(P, {})
                    }), (0, g.jsx)(_.tJ, {
                        id: "zero",
                        left: {title: t("home-zero-subTitle"), subTitle: t("home-zero-desc")},
                        children: (0, g.jsx)(v, {})
                    }), (0, g.jsx)(_.tJ, {
                        id: "streamlined",
                        left: {title: t("home-streamlined-subTitle"), subTitle: t("home-streamlined-desc")},
                        children: (0, g.jsx)(N, {})
                    })]
                }), (0, g.jsxs)(_.dI, {
                    children: [(0, g.jsx)(el, {
                        ns: "home",
                        nsPrefix: "security"
                    }), (0, g.jsx)(eo, {ns: "home", nsPrefix: "customer"}), (0, g.jsx)(L, {})]
                }), (0, g.jsx)(_.Q9, {title: t("home-contact-us-banner-title")})]
            })
        }, eu = n(72768);

        function ex(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), n.push.apply(n, i)
            }
            return n
        }

        function ef(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ex(Object(n), !0).forEach(function (t) {
                    (0, i.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ex(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }

        var ep = function (e) {
            var t = (0, O.qM)().isHK, n = (0, s.useRouter)().locale, i = (0, s.useRouter)();
            return ((0, a.UD)({router: i}), t && ("zh-HK" === n || "zh" === n)) ? (0, g.jsx)(c.Z, {children: (0, g.jsx)(em, ef({}, e))}) : (0, g.jsx)(o.Z, {children: (0, g.jsx)(eu.Z, ef({}, e))})
        };
        ep.getLayout = c.H;
        var eh = !0, eg = ep
    }, 48312: function (e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function () {
            return n(83530)
        }])
    }, 25447: function (e) {
        e.exports = {AniImg: "index_AniImg__JsNSR", "transition-item": "index_transition-item__2JnE2"}
    }, 13372: function (e) {
        e.exports = {aspectRatioImg: "index_aspectRatioImg___suq3", "inner-img": "index_inner-img__k4FQE"}
    }, 81904: function (e) {
        e.exports = {
            wrapper: "index_wrapper__lTj0I",
            leftArrow: "index_leftArrow__EqCpu",
            rightArrow: "index_rightArrow__R_vO_"
        }
    }, 83367: function (e) {
        e.exports = {
            "font-weight-700": "index_font-weight-700__9XkGC",
            "font-weight-500": "index_font-weight-500__nans6",
            "font-weight-400": "index_font-weight-400__ccw4M",
            underline: "index_underline__YPJVx",
            "row-padding": "index_row-padding__pK6eG",
            "xt-row-new": "index_xt-row-new__U4K_y",
            "hidden-pc": "index_hidden-pc__COthS",
            "xt-safe-row": "index_xt-safe-row__LIW9I",
            "xt-new-shadow": "index_xt-new-shadow__lSH6B",
            "hidden-mobile": "index_hidden-mobile__emOMs",
            "contact-us-modal-container": "index_contact-us-modal-container__ousOy",
            "atom-modal-body": "index_atom-modal-body__kgos7",
            "atom-select-item-option": "index_atom-select-item-option__fpTpf",
            "font-size-12": "index_font-size-12__qgqFZ",
            "font-size-14": "index_font-size-14__ieTqO",
            "font-size-16": "index_font-size-16__xyCaj",
            "font-size-20": "index_font-size-20__IPgUH",
            "font-size-24": "index_font-size-24__1I5nm",
            "font-size-28": "index_font-size-28__L_grm",
            "font-size-32": "index_font-size-32__XsPBd",
            "font-size-36": "index_font-size-36__yADC4",
            "font-size-40": "index_font-size-40__seKO_",
            "font-size-48": "index_font-size-48__te38u",
            "font-size-52": "index_font-size-52__BHpAe",
            "font-size-56": "index_font-size-56__6bPlP",
            "font-size-64": "index_font-size-64__NujvF",
            "flex-center": "index_flex-center__gQiD2",
            "flex-between": "index_flex-between__xOfsB",
            ellipsis: "index_ellipsis__hH_kS",
            "unset-ellipsis": "index_unset-ellipsis__TEiwt",
            wrapper: "index_wrapper__o4Gqg",
            card: "index_card__dqU9K",
            imgContainer: "index_imgContainer__R0pFq",
            img: "index_img___vJ4u",
            content: "index_content__VTw4R",
            iconfont: "index_iconfont__6FdxH",
            desc: "index_desc__jv2dY",
            author: "index_author__oSYbA"
        }
    }, 1349: function (e) {
        e.exports = {
            nowrap: "index_nowrap__8I63e",
            "fixed-absolute-width": "index_fixed-absolute-width__vlQAh",
            "about-us-month": "index_about-us-month__BreR0",
            "fill-image": "index_fill-image__YukM9",
            hidden: "index_hidden__Yi3bF",
            "safe-bottom": "index_safe-bottom__NO_d6",
            "mobile-inner-button": "index_mobile-inner-button__fL9Um",
            "mobile-button": "index_mobile-button__ukTxz",
            "max-2-line": "index_max-2-line__PB3JH",
            "xt-image": "index_xt-image__oujNg",
            "xt-shadow": "index_xt-shadow__GQE0P",
            "xt-row": "index_xt-row__68Ua1",
            "xt-h1": "index_xt-h1__B_DRb",
            "xt-h2": "index_xt-h2__5EJF0",
            "xt-h3": "index_xt-h3__CNkDQ",
            "xt-h4": "index_xt-h4__rLlGM",
            "xt-h5": "index_xt-h5__3Amdw",
            "xt-text": "index_xt-text__pMb65",
            "mobileInput-clear": "index_mobileInput-clear__YmKMn",
            "font-weight-700": "index_font-weight-700__6tixr",
            "font-weight-500": "index_font-weight-500__Ebtew",
            "font-weight-400": "index_font-weight-400__Z4F7q",
            underline: "index_underline__MaIFP",
            "row-padding": "index_row-padding__6Q8zi",
            "xt-row-new": "index_xt-row-new__u6nRr",
            "hidden-pc": "index_hidden-pc__9YpK9",
            "xt-safe-row": "index_xt-safe-row__FW6uz",
            "xt-new-shadow": "index_xt-new-shadow__963pQ",
            "hidden-mobile": "index_hidden-mobile__p2dyw",
            "contact-us-modal-container": "index_contact-us-modal-container__5r5GR",
            "atom-modal-body": "index_atom-modal-body__WSzjb",
            "atom-select-item-option": "index_atom-select-item-option__Fv_JQ",
            "font-size-12": "index_font-size-12__yAWrL",
            "font-size-14": "index_font-size-14__XuQW6",
            "font-size-16": "index_font-size-16__hnD1z",
            "font-size-20": "index_font-size-20__1BWX1",
            "font-size-24": "index_font-size-24__rk46S",
            "font-size-28": "index_font-size-28__XaqOm",
            "font-size-32": "index_font-size-32__u5QcP",
            "font-size-36": "index_font-size-36__7nQAm",
            "font-size-40": "index_font-size-40__wV4Ge",
            "font-size-48": "index_font-size-48__MaHMs",
            "font-size-52": "index_font-size-52__e9RFj",
            "font-size-56": "index_font-size-56__JZmG3",
            "font-size-64": "index_font-size-64__hxyOK",
            "flex-center": "index_flex-center__bGy91",
            "flex-between": "index_flex-between__whDMv",
            ellipsis: "index_ellipsis__SvXEK",
            "unset-ellipsis": "index_unset-ellipsis__kTEen",
            wrapper: "index_wrapper__v1Vuy",
            inner: "index_inner__X2Jil",
            left: "index_left__VY2K2",
            right: "index_right___Afvw",
            title: "index_title__7RXoq",
            desc: "index_desc__UXqxb",
            btn: "index_btn__Ak7AI",
            img: "index_img__gI7Hx"
        }
    }, 42577: function (e) {
        e.exports = {
            TitleBanner: "index_TitleBanner___7KGk",
            shadow: "index_shadow__EkP99",
            curveBgWrapper: "index_curveBgWrapper__mJBiL",
            curveWrapper: "index_curveWrapper__8hOBn",
            usdWrapper: "index_usdWrapper__3DY2W",
            eurWrapper: "index_eurWrapper__NYyCG",
            gbpWrapper: "index_gbpWrapper__UkhS6",
            hkdWrapper: "index_hkdWrapper__L687v",
            securityWrapper: "index_securityWrapper__xpHvl",
            accountWrapper: "index_accountWrapper__E8TvA"
        }
    }, 64508: function (e) {
        e.exports = {
            benefits: "index_benefits__9Dn1F",
            left: "index_left__nGYGW",
            right: "index_right__3WUQG",
            account: "index_account__Ly2Uj",
            center: "index_center__Cyh24",
            img1: "index_img1__4lKZG",
            img2: "index_img2__dV8Gx",
            img3: "index_img3__ha03V",
            img4: "index_img4__LGCaT",
            zero: "index_zero__loG3p",
            streamlined: "index_streamlined__xTqdj"
        }
    }, 46687: function (e) {
        e.exports = {section: "index_section__j3Eek"}
    }, 5215: function (e) {
        e.exports = {
            root: "index_root__OuyBZ",
            content: "index_content__OPRH4",
            item: "index_item__H0A9r",
            benefitsGg: "index_benefitsGg__GxYEl",
            mobileTitle: "index_mobileTitle__CQ1hy",
            title: "index_title__Tv8vc"
        }
    }, 12196: function (e) {
        e.exports = {
            section: "index_section__UU_OY",
            mobileContent: "index_mobileContent__BQWn7",
            content: "index_content__N9kV_"
        }
    }, 46572: function (e) {
        e.exports = {
            section: "index_section__HTA8z",
            title: "index_title__wHT4V",
            contentWrapper: "index_contentWrapper__o2eEw",
            iconSec: "index_iconSec__PABYP",
            iconfont: "index_iconfont__dKYE9"
        }
    }
}, function (e) {
    e.O(0, [3662, 6898, 6492, 6342, 5480, 7016, 2247, 5894, 4391, 9774, 2888, 179], function () {
        return e(e.s = 48312)
    }), _N_E = e.O()
}]);
//# sourceMappingURL=index-366cb774b2416ea7.js.map