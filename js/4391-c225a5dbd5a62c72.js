(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[4391], {
    85356: function (e, t, n) {
        "use strict";
        var i, r, a = n(37667), s = ["title", "titleId"];

        function c() {
            return (c = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }).apply(this, arguments)
        }

        var o = (0, a.forwardRef)(function (e, t) {
            var n = e.title, o = e.titleId, l = function (e, t) {
                if (null == e) return {};
                var n, i, r = function (e, t) {
                    if (null == e) return {};
                    var n, i, r = {}, a = Object.keys(e);
                    for (i = 0; i < a.length; i++) n = a[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }(e, s);
            return a.createElement("svg", c({
                width: 16,
                height: 16,
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": o
            }, l), n ? a.createElement("title", {id: o}, n) : null, i || (i = a.createElement("circle", {
                cx: 8,
                cy: 8,
                r: 8,
                fill: "#F56A00"
            })), r || (r = a.createElement("path", {
                d: "M4.66699 7.55556L6.73238 9.5521C6.99078 9.80188 7.40067 9.80188 7.65908 9.5521L11.3337 6",
                stroke: "white",
                strokeWidth: 1.33333,
                strokeLinecap: "round"
            })))
        });
        t.Z = o
    }, 10531: function (e, t, n) {
        "use strict";
        var i, r = n(37667), a = ["title", "titleId"];

        function s() {
            return (s = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }).apply(this, arguments)
        }

        var c = (0, r.forwardRef)(function (e, t) {
            var n = e.title, c = e.titleId, o = function (e, t) {
                if (null == e) return {};
                var n, i, r = function (e, t) {
                    if (null == e) return {};
                    var n, i, r = {}, a = Object.keys(e);
                    for (i = 0; i < a.length; i++) n = a[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }(e, a);
            return r.createElement("svg", s({
                width: 20,
                height: 20,
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": c
            }, o), n ? r.createElement("title", {id: c}, n) : null, i || (i = r.createElement("path", {
                d: "M13.7766 3.72212L19.6099 9.55545C19.854 9.79953 19.854 10.1953 19.6099 10.4393L13.7766 16.2727C13.5325 16.5167 13.1368 16.5167 12.8927 16.2727C12.6486 16.0286 12.6486 15.6329 12.8927 15.3888L17.6592 10.6224H1.04297C0.697791 10.6224 0.417969 10.3426 0.417969 9.9974C0.417969 9.65222 0.697791 9.3724 1.04297 9.3724H17.6592L12.8927 4.606C12.6639 4.37718 12.6496 4.01507 12.8498 3.76959L12.8927 3.72212C13.1368 3.47804 13.5325 3.47804 13.7766 3.72212Z",
                fill: "currentColor"
            })))
        });
        t.Z = c
    }, 75696: function (e, t, n) {
        "use strict";
        n.d(t, {
            II: function () {
                return s
            }, f2: function () {
                return r
            }, oA: function () {
                return a
            }
        });
        var i = n(97582);

        function r(e) {
            var t = e.siteCode;
            return (0, i.dX)("/fund/fx/rate/carousel/open", {siteCode: t})
        }

        function a(e) {
            return (0, i.dX)("/spotfx/graph/present-rate/get/open", e)
        }

        function s() {
            return (0, i.dX)("/fund/fx/currencyInfo")
        }
    }, 77007: function (e, t, n) {
        "use strict";
        var i = n(37667), r = n(94184), a = n.n(r), s = n(2261), c = n(94135), o = n(91448), l = n.n(o);
        n(56685), n(33135), n(50309);
        var d = n(85893);
        t.Z = (0, i.forwardRef)(function (e, t) {
            var n = e.children, r = (e.onChange, e.paginationComp), o = e.className, A = e.previewCount,
                _ = void 0 === A ? 2 : A, x = (0, i.useRef)(null), u = (0, i.useState)(0), p = u[0], m = u[1],
                h = (0, d.jsx)("div", {
                    className: "".concat(l().paginationWrapper, " pagination-wrapper"),
                    children: (0, d.jsx)("div", {
                        className: "".concat(l().pagination, " pagination"),
                        children: n.map(function (e, t) {
                            return (0, d.jsx)("div", {
                                className: a()("".concat(l().paginationItem, " pagination-item"), t === p && l().paginationItemActive),
                                onClick: function () {
                                    var e;
                                    null === (e = x.current) || void 0 === e || e.slideTo(t)
                                },
                                "data-sensors-click": "true"
                            }, t)
                        })
                    })
                });
            return r && (h = r), (0, d.jsxs)("div", {
                className: a()(l().wrapper, o),
                children: [(0, d.jsx)(s.tq, {
                    className: l().swiper,
                    loop: !0,
                    autoplay: {delay: 5e3, disableOnInteraction: !1},
                    modules: [c.pt],
                    centeredSlides: !0,
                    onSlideChange: function () {
                        var e, t;
                        (null === (e = x.current) || void 0 === e ? void 0 : e.realIndex) !== void 0 && m(null === (t = x.current) || void 0 === t ? void 0 : t.realIndex)
                    },
                    slidesPerView: "auto",
                    onSwiper: function (e) {
                        x.current = e, e.slideTo(_)
                    },
                    children: n.map(function (e, t) {
                        return (0, d.jsx)(s.o5, {className: l().slideItem, children: e}, t)
                    })
                }), h]
            })
        })
    }, 34195: function (e, t, n) {
        "use strict";
        n.d(t, {
            Z: function () {
                return en
            }
        });
        var i = n(16835), r = n(37667), a = n.n(r), s = n(96486), c = n.n(s), o = n(75496), l = n.n(o), d = n(28374),
            A = n(5480), _ = n(58251), x = n(59175), u = n(40424), p = n(48824), m = n(43070), h = n(52814),
            f = n(44826), g = n(69998), w = n(94184), b = n.n(w), v = n(9845), B = n.n(v), Q = n(85893),
            j = "CurrencyWithFlag", C = a().memo(function (e) {
                var t = e.id, n = e.currency, i = e.currencyKey, r = e.currencyLabel, a = e.iconSrc;
                return (0, Q.jsxs)("div", {
                    id: t,
                    className: b()(B().root, "".concat(j, "-wrapper")),
                    children: [!!a && (0, Q.jsx)("img", {
                        src: a,
                        alt: i,
                        className: b()(B().iconClassName, "".concat(j, "-icon"))
                    }), (0, Q.jsxs)("div", {
                        className: b()(B().label, "".concat(j, "-currencyWrapper")),
                        children: [!!n && (0, Q.jsx)("span", {
                            className: b()(B().currencyName, "".concat(j, "-currencyName")),
                            children: n
                        }), !!r && (0, Q.jsx)("span", {
                            className: b()(B().currencyLabel, "".concat(j, "-currencyLabel")),
                            children: r
                        })]
                    })]
                })
            }), E = n(9952), y = n.n(E), O = n(37763), N = n.n(O), k = n(85832), H = n(94550), D = n(33318), T = n(39755),
            L = function (e) {
                var t = (0, r.useState)(), n = t[0], i = t[1], a = n ? e.items.filter(function (e) {
                    return e.key.includes(n)
                }) : e.items;
                return (0, Q.jsxs)("div", {
                    className: y().searchMenu,
                    children: [(0, Q.jsx)("div", {
                        style: {padding: "8px 8px 0"},
                        children: (0, Q.jsx)(A.I.Search, {
                            allowClear: !0,
                            placeholder: e.placeholder,
                            onChange: function (e) {
                                i(e.target.value.toUpperCase())
                            }
                        })
                    }), 0 === a.length ? (0, Q.jsx)(u.H, {
                        iconographData: (0, Q.jsx)(p.e, {}),
                        description: e.emptyDescription,
                        mode: "bold",
                        style: {marginTop: 48, marginBottom: 48}
                    }) : (0, Q.jsx)(m.v, {
                        onClick: function (t) {
                            var n;
                            t.key !== e.value && (null === (n = e.onChange) || void 0 === n || n.call(e, t.key))
                        }, selectedKeys: [e.value], "data-sensors-click": "true", children: a.map(function (e) {
                            return (0, Q.jsx)(m.v.Item, {
                                children: (0, Q.jsx)(C, {
                                    currencyLabel: e.label,
                                    currencyKey: e.key,
                                    iconSrc: e.icon,
                                    currency: (0, Q.jsx)(N(), {
                                        highlightClassName: y().highlight,
                                        searchWords: n ? [n] : [],
                                        autoEscape: !1,
                                        textToHighlight: e.key
                                    })
                                })
                            }, e.key)
                        })
                    })]
                })
            }, P = function (e) {
                var t = e.currentCurrency, n = e.currentIcon, i = e.visible, r = e.onClick;
                return (0, Q.jsxs)(_.z, {
                    className: y().button,
                    onClick: r,
                    size: "small",
                    "data-sensors-click": "true",
                    children: [(0, Q.jsx)(C, {currency: t, iconSrc: n}), (0, Q.jsx)(h.J, {
                        name: "DropdownArrow",
                        style: {verticalAlign: "middle", marginLeft: "8px"},
                        size: 24,
                        rotate: i ? 0 : 180
                    })]
                })
            }, M = function (e) {
                var t = e.options, n = e.currentCurrency, i = e.currentCurrencyIcon, a = (0, T.$G)().t,
                    s = (0, r.useState)(!1), c = s[0], o = s[1], l = (0, k.qM)().isMobile, d = function () {
                        o(!0)
                    }, A = function () {
                        o(!1)
                    }, _ = function (t) {
                        var n;
                        null === (n = e.onChange) || void 0 === n || n.call(e, t), o(!1)
                    };
                return l ? (0, Q.jsxs)(r.Fragment, {
                    children: [(0, Q.jsx)(P, {
                        currentCurrency: n,
                        visible: c,
                        onClick: d,
                        currentIcon: i,
                        "data-sensors-click": "true"
                    }), (0, Q.jsx)(f.Y, {
                        title: (0, Q.jsx)("span", {
                            className: y().drawerTitle,
                            children: a("exchange-rate-carousel-drawer-title")
                        }),
                        extra: (0, Q.jsx)(H.Z, {
                            fillColor: "#999999",
                            size: "4.27vw",
                            onClick: A,
                            "data-sensors-click": "true"
                        }),
                        closable: !1,
                        height: "85%",
                        className: y().drawer,
                        placement: "bottom",
                        showFooter: !1,
                        onClose: A,
                        visible: c,
                        onCancel: function () {
                            o(!1)
                        },
                        onConfirm: function () {
                            o(!1)
                        },
                        children: t.map(function (e) {
                            return (0, Q.jsxs)("div", {
                                className: y().item,
                                onClick: function () {
                                    return _(e.key)
                                },
                                "data-sensors-click": "true",
                                children: [(0, Q.jsx)(C, {
                                    currencyKey: e.key,
                                    currency: e.key,
                                    currencyLabel: e.label,
                                    iconSrc: e.icon
                                }), n === e.key && (0, Q.jsx)(D.Z, {fillColor: "#FF7A00", className: y().icon})]
                            }, e.key)
                        })
                    })]
                }) : (0, Q.jsx)(Q.Fragment, {
                    children: (0, Q.jsx)(g.L, {
                        placement: "bottomRight",
                        trigger: ["click"],
                        overlay: (0, Q.jsx)(L, {
                            items: t,
                            value: n,
                            onChange: _,
                            placeholder: a("exchange-rate-carousel-search-input-placeholder"),
                            emptyDescription: a("exchange-rate-carousel-search-input-empty")
                        }),
                        onVisibleChange: function (e) {
                            return o(e)
                        },
                        children: (0, Q.jsx)(P, {
                            currentCurrency: n,
                            visible: c,
                            onClick: d,
                            currentIcon: i,
                            "data-sensors-click": "true"
                        })
                    })
                })
            }, I = n(80763), z = n(16947), G = n(95260), W = n(3609), F = n(35476), Y = n.n(F), Z = n(78840), U = n.n(Z),
            K = n(18393), R = n.n(K), S = n(75708), J = n.n(S), q = n(36492), X = n(75696), V = n(27484), $ = n.n(V);
        d.ZP.enableBoundaryChecking(!1), "object" == typeof U() && R()(U());
        var ee = function () {
            var e = (0, G.$G)().t, t = (0, k.qM)().isMobile, n = (0, I.ZA)().latestRatePoint, i = (0, r.useRef)(null),
                a = (0, r.useState)("MONTH"), s = a[0], c = a[1],
                o = (0, q.a)(["getGraphPresentRate", s, null == n ? void 0 : n.fromCcy, null == n ? void 0 : n.toCcy, "HK"], function () {
                    return (0, X.oA)({fromCcy: n.fromCcy, toCcy: n.toCcy, type: s, siteCode: "HK"})
                }, {enabled: !!n, staleTime: 120, cacheTime: 120, keepPreviousData: !0}), l = o.data;
            o.isLoading;
            var d = (l || {}).ratePointList, A = function (e) {
                c(e)
            };
            return null != d && d.length ? (0, Q.jsxs)("section", {
                className: "".concat(Y().root),
                children: [(0, Q.jsxs)("h3", {
                    className: Y().h2,
                    children: ["1 ", null == n ? void 0 : n.fromCcy, " = ", null == n ? void 0 : n.rate, " ", null == n ? void 0 : n.toCcy]
                }), (0, Q.jsx)("div", {
                    className: Y().chartContainer, children: (0, Q.jsx)(J(), {
                        highcharts: U(), options: {
                            chart: {
                                type: "areaspline",
                                height: t ? "57.8%" : "41.77%",
                                style: {fontSize: t ? "3.2vw" : "15px", color: "#696680", padding: 0}
                            },
                            title: {text: ""},
                            plotOptions: {
                                series: {
                                    marker: {
                                        enabled: !1,
                                        radius: 7,
                                        fillColor: "white",
                                        lineWidth: 6,
                                        lineColor: "orange",
                                        states: {
                                            hover: {
                                                enabled: !0,
                                                fillColor: "#FF7A00",
                                                lineColor: "#FFF",
                                                lineWidth: 6
                                            }
                                        }
                                    }
                                }
                            },
                            tooltip: {
                                backgroundColor: "transparent",
                                animation: !0,
                                style: {padding: 0},
                                useHTML: !0,
                                headerFormat: "",
                                pointFormat: "<div id='er-tooltip'><span id='er-tooltip-first'>{point.custom.tooltip}</span><span id='er-tooltip-sec'>{point.custom.extraTimeFormat}</span></div>",
                                crosshairs: !1
                            },
                            legend: {enabled: !1},
                            credits: {enabled: !1},
                            exporting: {enabled: !1},
                            series: [{
                                lineColor: "#FF7B00",
                                color: {
                                    linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
                                    stops: [[0, "rgba(235, 96, 37, 0.00)"], [1, "rgba(235, 120, 37, 0.12)"]]
                                },
                                threshold: null,
                                data: null == d ? void 0 : d.map(function (e) {
                                    return {
                                        y: Number(e.rate),
                                        custom: {
                                            extraTimeFormat: $()(null == e ? void 0 : e.rateTime).format("DD MMM YYYY, HH:mm"),
                                            tooltip: "1 ".concat(null == e ? void 0 : e.fromCcy, " = ").concat(null == e ? void 0 : e.rate, " ").concat(null == e ? void 0 : e.toCcy)
                                        }
                                    }
                                })
                            }],
                            xAxis: {
                                visible: !0,
                                lineColor: "#F1F5F9",
                                tickWidth: 0,
                                tickLength: 0,
                                categories: null == d ? void 0 : d.map(function (e) {
                                    return e.rateTime
                                }),
                                labels: {
                                    x: -10, rotation: 360, formatter: function (e) {
                                        var t = e.value, n = e.isFirst, i = e.isLast;
                                        return n || i ? "DAY" === s ? $()(t).format("HH:mm") : $()(t).format("MM-DD") : null
                                    }, style: {color: "#696680", width: 40}
                                },
                                useHTML: !0,
                                title: {text: ""},
                                crosshair: {color: "rgba(0, 0, 0, 0.1)", width: 1, dashStyle: "Dash"}
                            },
                            yAxis: {
                                title: {text: ""},
                                tickPixelInterval: 110,
                                allowDecimals: !0,
                                className: Y().chartYAxis,
                                gridLineWidth: 1,
                                gridLineColor: "#F1F5F9",
                                style: {color: "#696680"},
                                crosshair: {color: "rgba(0, 0, 0, 0.1)", width: 1, dashStyle: "Dash"}
                            }
                        }, ref: i
                    })
                }), (0, Q.jsxs)("div", {
                    className: Y().buttonGroup,
                    children: [(0, Q.jsx)(_.z, {
                        className: "".concat(Y().button, " ").concat("DAY" === s ? Y().active : ""),
                        onClick: function () {
                            return A("DAY")
                        },
                        "data-sensors-click": "true",
                        children: "Today"
                    }), (0, Q.jsx)(_.z, {
                        className: "".concat(Y().button, " ").concat("WEEK" === s ? Y().active : ""),
                        onClick: function () {
                            return A("WEEK")
                        },
                        "data-sensors-click": "true",
                        children: "Last 7 days"
                    }), (0, Q.jsx)(_.z, {
                        className: "".concat(Y().button, " ").concat("MONTH" === s ? Y().active : ""),
                        onClick: function () {
                            return A("MONTH")
                        },
                        "data-sensors-click": "true",
                        children: "Last 30 days"
                    })]
                })]
            }) : (0, Q.jsx)(u.H, {
                iconographData: (0, Q.jsx)(p.e, {}),
                description: e("exchange-rate-carousel-search-input-empty")
            })
        }, et = function (e) {
            return (0, Q.jsx)("div", {
                className: e.className || l().part,
                children: (0, Q.jsxs)("div", {
                    className: l().content,
                    children: [(0, Q.jsx)("div", {
                        className: l().left,
                        children: "string" == typeof (null == e ? void 0 : e.left) ? (0, Q.jsx)(A.I, {
                            className: l().value,
                            bordered: !1,
                            autoComplete: "off",
                            value: null == e ? void 0 : e.left,
                            disabled: !0
                        }) : e.left
                    }), (0, Q.jsx)("div", {
                        className: l().right,
                        children: (0, r.isValidElement)(null == e ? void 0 : e.right) ? e.right : (0, Q.jsx)("span", {children: null == e ? void 0 : e.right})
                    })]
                })
            })
        }, en = function (e) {
            var t, n = e.className, a = (0, G.$G)().t, s = (0, I.ZA)(), o = s.urlParsedCurrencies,
                u = s.currencyPairsData, p = s.amount, m = s.latestRatePoint, h = (0, I.dx)().setUrlParsedCurrencies,
                f = (0, r.useState)(p || z.Ln), g = f[0], w = f[1], b = (0, i.Z)(o, 2), v = b[0], B = b[1],
                j = function (e, t) {
                    t ? h(e, B) : h(v, e)
                };
            return (0, Q.jsx)("section", {
                className: "".concat(l()["exchange-carousel-root"], " ").concat(n || ""),
                id: "exchange-rate",
                children: (0, Q.jsxs)("div", {
                    className: l().inner, children: [(0, Q.jsxs)("div", {
                        className: l().carousel,
                        children: [(0, Q.jsx)(et, {
                            label: a("exchange-rate-carousel-from"),
                            left: (0, Q.jsx)(A.I, {
                                onChange: function (e) {
                                    if ((null == e ? void 0 : null === (t = e.target) || void 0 === t ? void 0 : t.value) === "" || (null == e ? void 0 : null === (n = e.target) || void 0 === n ? void 0 : n.value) === null) return w(0);
                                    var t, n, i, r,
                                        a = Number(null == e ? void 0 : null === (i = e.target) || void 0 === i ? void 0 : null === (r = i.value) || void 0 === r ? void 0 : r.replace(/,/g, ""));
                                    !a || 1 / 0 === a || c().isNaN(a) || w(a)
                                },
                                bordered: !1,
                                size: "small",
                                value: (0, x.oC)(g),
                                autoComplete: "off",
                                className: l().input
                            }),
                            right: (0, Q.jsx)(M, {
                                options: (0, x.zn)(u || []).filter(function (e) {
                                    return e.key !== (null == m ? void 0 : m.toCcy)
                                }),
                                currentCurrencyIcon: null == m ? void 0 : m.fromCcyIcon,
                                currentCurrency: v,
                                onChange: function (e) {
                                    return j(e, !0)
                                }
                            })
                        }), (0, Q.jsx)(_.z, {
                            icon: (0, Q.jsx)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "100%"
                                }, children: (0, Q.jsx)(W.Z, {className: l().icon})
                            }), type: "icon", onClick: function () {
                                h(B, v)
                            }, "data-sensors-click": "true"
                        }), (0, Q.jsx)(et, {
                            label: a("exchange-rate-carousel-to"),
                            left: (t = null == m ? void 0 : m.rate, 1 / 0 === g ? "∞" : c().isNumber(g) && t ? (0, x.oC)(d.ZP.times(g, Number(t || "1"))) : "--"),
                            right: (0, Q.jsx)(M, {
                                options: (0, x.IY)(v, u || []),
                                currentCurrencyIcon: null == m ? void 0 : m.toCcyIcon,
                                currentCurrency: B,
                                onChange: function (e) {
                                    return j(e)
                                }
                            })
                        })]
                    }), (0, Q.jsx)(ee, {})]
                })
            })
        }
    }, 50678: function (e, t, n) {
        "use strict";
        var i = n(59499), r = n(94184), a = n.n(r), s = n(39755), c = n(24188), o = n(85832), l = n(71928), d = n.n(l),
            A = n(85356), _ = n(37667), x = n(85893);
        t.Z = function (e) {
            var t, n = e.title, r = e.content, l = e.image, u = e.imageH5, p = e.right, m = e.placeholder,
                h = e.placeholderH5, f = e.video, g = e.loop, w = e.actions, b = e.reverse, v = e.asHead,
                B = void 0 !== v && v, Q = e.conspicuous, j = e.moduleName, C = e.fetchPriority, E = e.rightStyle,
                y = (0, s._i)(j), O = (0, o.qM)().isMobile, N = null;
            return "string" == typeof r ? N = (0, x.jsx)("p", {
                className: a()(B && d().descLarge, d().desc),
                children: r
            }) : Array.isArray(r) && (N = (0, x.jsx)("div", {
                className: d().contentsWrapper,
                children: r.map(function (e, t) {
                    return (0, x.jsxs)("p", {
                        className: a()(B && d().descLarge, d().desc),
                        children: [(0, x.jsx)("span", {
                            className: d().iconWrapper,
                            children: (0, x.jsx)(A.Z, {className: d().icon})
                        }), (0, x.jsx)("span", {children: e})]
                    }, t)
                })
            })), (0, x.jsx)("section", {
                ref: y,
                className: d().sectionWrapper,
                children: (0, x.jsxs)("div", {
                    className: a()("xt-safe-row", d().headBannerWrapper, (t = {}, (0, i.Z)(t, d().reverse, void 0 !== b && b), (0, i.Z)(t, d().expand, B), t)),
                    children: [(0, x.jsxs)("div", {
                        className: d().left,
                        children: [Q && (0, x.jsx)("p", {
                            className: d().conspicuous,
                            children: Q
                        }), B ? (0, x.jsx)("h1", {
                            className: d().title,
                            children: n
                        }) : (0, x.jsx)("h2", {
                            className: d().smallTitle,
                            children: n
                        }), N, w && (0, x.jsx)("div", {className: d().buttonsWrapper, children: w()})]
                    }), (0, x.jsx)("div", {
                        className: a()(d().right, (0, i.Z)({}, d().rightAsHeader, B)),
                        style: E,
                        children: (0, _.isValidElement)(p) ? p : O ? (0, x.jsx)(c.Z, {
                            style: {width: "100%"},
                            picture: u || l,
                            placeholder: h || u || l,
                            alt: n,
                            fetchPriority: C
                        }) : (0, x.jsx)(c.Z, {
                            style: {width: "100%"},
                            picture: l,
                            video: f,
                            loop: void 0 !== g && g,
                            placeholder: m || l
                        })
                    })]
                })
            })
        }
    }, 72768: function (e, t, n) {
        "use strict";
        n.d(t, {
            m: function () {
                return eB
            }, Z: function () {
                return eQ
            }
        });
        var i, r, a = n(11163), s = n(41664), c = n.n(s), o = n(50678), l = n(76070), d = n(37667), A = n(94184),
            _ = n.n(A), x = n(39755), u = ["title", "titleId"];

        function p() {
            return (p = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }).apply(this, arguments)
        }

        var m = (0, d.forwardRef)(function (e, t) {
            var n = e.title, r = e.titleId, a = function (e, t) {
                if (null == e) return {};
                var n, i, r = function (e, t) {
                    if (null == e) return {};
                    var n, i, r = {}, a = Object.keys(e);
                    for (i = 0; i < a.length; i++) n = a[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }(e, u);
            return d.createElement("svg", p({
                width: 16,
                height: 16,
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": r
            }, a), n ? d.createElement("title", {id: r}, n) : null, i || (i = d.createElement("path", {
                d: "M11.1381 7.05716C11.6588 7.57785 11.6588 8.42207 11.1381 8.94277L6.04044 14.0404L4.62623 12.6262L9.25267 7.9993L4.62623 3.37374L6.04044 1.95953L11.1381 7.05716Z",
                fill: "currentColor"
            })))
        }), h = ["title", "titleId"];

        function f() {
            return (f = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }).apply(this, arguments)
        }

        var g = (0, d.forwardRef)(function (e, t) {
            var n = e.title, i = e.titleId, a = function (e, t) {
                if (null == e) return {};
                var n, i, r = function (e, t) {
                    if (null == e) return {};
                    var n, i, r = {}, a = Object.keys(e);
                    for (i = 0; i < a.length; i++) n = a[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }(e, h);
            return d.createElement("svg", f({
                width: 16,
                height: 16,
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: t,
                "aria-labelledby": i
            }, a), n ? d.createElement("title", {id: i}, n) : null, r || (r = d.createElement("g", {id: "x-lowersmall-1"}, d.createElement("path", {
                id: "\xe8\xb7\xaf\xe5\xbe\x84",
                d: "M4.86193 8.94284C4.34123 8.42214 4.34123 7.57792 4.86193 7.05723L9.95956 1.95959L11.3738 3.37381L6.74733 8.0007L11.3738 12.6263L9.95956 14.0405L4.86193 8.94284Z",
                fill: "currentColor"
            }))))
        }), w = n(2261), b = n(94135), v = n(72791), B = n.n(v);
        n(56685), n(33135), n(50309);
        var Q = n(85893), j = (0, d.forwardRef)(function (e, t) {
                var n = e.children, i = e.setCurrentActiveIndex, r = e.isEnd, a = e.isStart, s = (0, d.useState)(!1),
                    c = s[0], o = s[1];
                return (0, d.useEffect)(function () {
                    return r && !a ? o(!0) : a && !r ? o(!1) : void 0
                }, [r, a]), (0, Q.jsx)("div", {
                    className: B().wrapper,
                    children: (0, Q.jsx)(w.tq, {
                        allowTouchMove: !1,
                        loop: !0,
                        speed: 800,
                        autoplay: {delay: 5e3, reverseDirection: c, disableOnInteraction: !1},
                        effect: "creative",
                        modules: [b.pt, b.gI],
                        creativeEffect: {
                            prev: {opacity: 0, shadow: !0, translate: [1, 0, -400], scale: .5},
                            next: {translate: ["100%", 0, 0]},
                            limitProgress: 10,
                            shadowPerProgress: !0
                        },
                        onSlideChange: function () {
                            t.current && i(t.current.activeIndex)
                        },
                        slidesPerView: "auto",
                        onSwiper: function (e) {
                            t && (t.current = e)
                        },
                        children: n.map(function (e, t) {
                            return (0, Q.jsx)(w.o5, {className: B().slideItem, children: e}, t)
                        })
                    })
                })
            }), C = n(33190), E = n(24188), y = n(58875), O = n.n(y), N = function (e) {
                var t = e.data, n = e.className, i = (0, x.$G)().t, r = (0, x._i)("Home-Customer testimonials"),
                    a = (0, d.useRef)(null), s = (0, d.useState)(0), c = s[0], o = s[1], l = c >= t.length - 1, A = c <= 0;
                return (0, Q.jsxs)("section", {
                    ref: r,
                    className: _()("xt-safe-row", O().wrapper, n),
                    children: [(0, Q.jsxs)("div", {
                        className: O().controller,
                        children: [(0, Q.jsx)("h2", {children: i("new-home-voice-main-title")}), (0, Q.jsxs)("div", {
                            className: O().buttonsWrapper,
                            children: [(0, Q.jsx)("div", {
                                className: _()(O().toLeft),
                                style: A ? {backgroundColor: "#EBEBF0"} : {},
                                onClick: function () {
                                    if (!A) {
                                        var e;
                                        null === (e = a.current) || void 0 === e || e.slidePrev()
                                    }
                                },
                                "data-sensors-click": "true",
                                children: (0, Q.jsx)("span", {
                                    style: A ? {color: "#B3B2C2"} : {},
                                    children: (0, Q.jsx)(g, {})
                                })
                            }), (0, Q.jsx)("div", {
                                className: _()(O().toRight),
                                style: l ? {backgroundColor: "#EBEBF0"} : {},
                                onClick: function () {
                                    if (!l) {
                                        var e;
                                        null === (e = a.current) || void 0 === e || e.slideNext()
                                    }
                                },
                                "data-sensors-click": "true",
                                children: (0, Q.jsx)("span", {
                                    style: l ? {color: "#B3B2C2"} : {},
                                    children: (0, Q.jsx)(m, {})
                                })
                            })]
                        })]
                    }), (0, Q.jsx)("div", {
                        className: O().customers,
                        children: (0, Q.jsx)(j, {
                            ref: a,
                            setCurrentActiveIndex: o,
                            isEnd: l,
                            isStart: A,
                            children: t.concat({}).map(function (e, t) {
                                var n = e.customPicture, i = e.thinking, r = e.name, a = e.position;
                                return (0, Q.jsxs)("div", {
                                    className: O().cardWrapper,
                                    children: [(0, Q.jsx)(E.Z, {
                                        alt: "",
                                        className: O().customer,
                                        picture: n,
                                        placeholder: C.Q$
                                    }), (0, Q.jsxs)("div", {
                                        className: O().thinking,
                                        children: [(0, Q.jsx)("p", {
                                            className: O().content,
                                            children: i
                                        }), (0, Q.jsxs)("div", {
                                            children: [(0, Q.jsx)("p", {
                                                className: O().name,
                                                children: r
                                            }), (0, Q.jsx)("p", {className: O().position, children: a})]
                                        })]
                                    })]
                                }, t)
                            })
                        })
                    })]
                })
            }, k = n(4730), H = n(22001), D = n.n(H), T = n(77007), L = n(98225), P = ["data", "className"],
            M = function (e) {
                var t = e.data, n = e.className;
                (0, k.Z)(e, P);
                var i = (0, x.$G)().t, r = (0, x._i)("Home-Customer testimonials");
                return (0, Q.jsxs)("section", {
                    ref: r,
                    className: _()(D().wrapper, n),
                    children: [(0, Q.jsx)("div", {
                        className: D().titleWrapper,
                        children: (0, Q.jsx)("h2", {children: i("new-home-voice-main-title")})
                    }), (0, Q.jsx)(T.Z, {
                        children: t.map(function (e, t) {
                            var n = e.avatar, i = e.thinking, r = e.name, a = e.position;
                            return (0, Q.jsxs)("div", {
                                className: D().customCard,
                                children: [(0, Q.jsx)(L.n, {
                                    className: D().customer,
                                    src: n,
                                    alt: ""
                                }), (0, Q.jsxs)("div", {
                                    className: D().thinking,
                                    children: [(0, Q.jsx)("p", {
                                        className: D().content,
                                        children: i
                                    }), (0, Q.jsxs)("div", {
                                        children: [(0, Q.jsx)("p", {
                                            className: D().name,
                                            children: r
                                        }), (0, Q.jsx)("p", {className: D().position, children: a})]
                                    })]
                                })]
                            }, t)
                        })
                    })]
                })
            }, I = function () {
                var e = [{
                    customPicture: "https://static.xtransfer.com/boss/static/user-voice1_eeca109d007e6c27.png",
                    avatar: "https://static.xtransfer.com/boss/static/user-voice-1-h5_4c16bc87bb348f94.png",
                    thinking: '"I use XTransfer not only to pay my Chinese suppliers, but also to pay and get paid globally. This account alone solves all my needs."',
                    name: "Mr. Ortiz Felipe",
                    position: "CEO, Guangzhou Afei Media Co., Ltd."
                }, {
                    customPicture: "https://static.xtransfer.com/boss/static/picture02_a253c95d03cadd80.png",
                    avatar: "https://static.xtransfer.com/boss/static/avatar02_df607fcc8839eb9c.png",
                    thinking: '"As both an importer and exporter, I\'ve found XTransfer to be invaluable in streamlining my payment processes. It has truly simplified international transactions for my business!"',
                    name: "Ms. Trịnh Thị Minh Kiều",
                    position: "CEO, Quang Minh Kieu Import Export Trading Service Co., Ltd."
                }, {
                    customPicture: "https://static.xtransfer.com/boss/static/picture03_e362f2fdfba0ca7c.png",
                    avatar: "https://static.xtransfer.com/boss/static/avatar03_4627f7c90cca0da1.png",
                    thinking: '"Cash flow has always been a big issue in export. It is secure and compliant to pay suppliers in mainland China through XTransfer, and the money arrives in no time."',
                    name: "Mr. Ryan Lee",
                    position: "CEO, Channel Technology Ltd."
                }, {
                    customPicture: "https://static.xtransfer.com/boss/static/picture04_6593da161d25c03e.png",
                    avatar: "https://static.xtransfer.com/boss/static/avatar04_64c85d7a85fa7148.png",
                    thinking: '"XTransfer is safe and compliant. Money arrives in seconds 24/7, which has sped up my trade process. Buyers are more willing to work with me because of that!"',
                    name: "Ms. Nan QIAO",
                    position: "General Manager, Yiwu Beicheng Trading Co., Ltd."
                }, {
                    customPicture: "https://static.xtransfer.com/boss/static/picture05_812dacf5ed318c03.png",
                    avatar: "https://static.xtransfer.com/boss/static/avatar05_ec4a3acde9bf1507.png",
                    thinking: '"XTransfer is not merely an online platform. Its knowledgeable staff are highly supportive in facilitating legitimate money transfer, effectively minimizing the risk of account freezes to zero."',
                    name: "Mr. Eddie CHOU",
                    position: "CEO, United Art Metals Factory Ltd."
                }, {
                    customPicture: "https://static.xtransfer.com/boss/static/picture06_42b272c0eaabb5ae.png",
                    avatar: "https://static.xtransfer.com/boss/static/avatar06_a40b1447d877cbaa.png",
                    thinking: '"With 20 years in the biometric industry and a global customer base, we\'ve used XTransfer for three years - a fast and convenient solution for payment collection."',
                    name: "Ms. Sissi TAO",
                    position: "General Manager, Granding New Technology Generation"
                }];
                return (0, Q.jsxs)(Q.Fragment, {
                    children: [(0, Q.jsx)(M, {
                        className: "hidden-pc",
                        data: e
                    }), (0, Q.jsx)(N, {className: "hidden-mobile", data: e})]
                })
            }, z = n(6489), G = n(26607), W = n.n(G), F = function () {
                var e = (0, x._i)("Home-Trusted partners"), t = (0, x.$G)().t,
                    n = {bankInfos: (0, z.As)(t("new-home-partners"), [])};
                return (0, Q.jsx)("section", {
                    ref: e,
                    className: _()(W().wrapper),
                    children: (0, Q.jsxs)("div", {
                        className: _()(W().container, "xt-safe-row"),
                        children: [(0, Q.jsx)("h2", {
                            className: W().title,
                            children: t("new-home-trusted-partners")
                        }), (0, Q.jsx)("div", {
                            className: W().partners, children: n.bankInfos.map(function (e, t) {
                                return (0, Q.jsx)("div", {
                                    className: W().bankLogoWrapper,
                                    children: (0, Q.jsx)(L.n, {alt: e.name, src: e.imageH5, srcClear: e.image})
                                }, t)
                            })
                        })]
                    })
                })
            }, Y = n(85832), Z = n(72775), U = n(45191), K = n(73582), R = n(7854), S = n.n(R), J = n(10531),
            q = function (e) {
                var t = e.className, n = e.data, i = e.ratio, r = n.title, s = n.content, o = n.picture,
                    l = n.hoverPicture, d = n.mobilePicture, A = n.mobileHoverPicture, u = n.dest,
                    p = (0, Y.lw)().isMobile, m = (0, a.useRouter)().asPath, h = (0, x.$G)().t,
                    f = (0, Q.jsx)("p", {className: S().content, children: s});
                return Array.isArray(s) && (f = (0, Q.jsx)(Q.Fragment, {
                    children: s.map(function (e, t) {
                        return (0, Q.jsx)("p", {className: _()(S().content), children: e}, t)
                    })
                })), (0, Q.jsxs)("div", {
                    className: _()(S().serviceCardWrapper, t),
                    onClick: function () {
                        window && !p && (window.location.href = (0, K.Z)({asPath: m, toPath: u}))
                    },
                    "data-sensors-click": "true",
                    children: [(0, Q.jsxs)("div", {
                        className: S().contentWrapper,
                        children: [(0, Q.jsx)("h3", {
                            className: S().cardTitle,
                            children: r
                        }), f, (0, Q.jsxs)(Z.z, {
                            type: "primary",
                            className: S().button,
                            children: [(0, Q.jsx)(c(), {
                                href: (0, K.Z)({asPath: m, toPath: u}),
                                "data-sensors-click": "true",
                                children: h("common-learn-more")
                            }), !p && (0, Q.jsx)(J.Z, {style: {marginLeft: "4px"}})]
                        })]
                    }), (0, Q.jsx)("div", {
                        className: S().image,
                        style: {paddingTop: i},
                        children: (0, Q.jsxs)(U.Z, {
                            if: !p,
                            else: (0, Q.jsxs)(Q.Fragment, {
                                children: [(0, Q.jsx)(L.n, {
                                    className: S().normalPicture,
                                    alt: "",
                                    src: d
                                }), (0, Q.jsx)(L.n, {className: S().hoverPicture, alt: "", src: A})]
                            }),
                            children: [(0, Q.jsx)(L.n, {
                                className: S().normalPicture,
                                alt: "",
                                src: o
                            }), (0, Q.jsx)(L.n, {className: S().hoverPicture, alt: "", src: l})]
                        })
                    })]
                })
            }, X = n(12611), V = n(39379), $ = n.n(V), ee = function () {
                var e = (0, Y.lw)().isMobile, t = (0, x.$G)().t, n = (0, x._i)("Home-Products"), i = [{
                    title: t("new-home-service-wallet-title"),
                    content: t("new-home-service-wallet-content"),
                    picture: "https://static.xtransfer.com/boss/static/wallet_20661a79a8dcbd27.png",
                    hoverPicture: "https://static.xtransfer.com/boss/static/wallet-y_9cfe6dac1ea82ac6.png",
                    mobilePicture: "https://static.xtransfer.com/boss/static/h5-wallet_fda344f5957953c1.png",
                    mobileHoverPicture: "https://static.xtransfer.com/boss/static/h5-wallet-y_6fe26397f2a5bf5e.png",
                    dest: X.hy
                }, {
                    title: t("new-home-service-add-title"),
                    content: t("new-home-service-add-content"),
                    picture: "https://static.xtransfer.com/boss/static/add-money_e54db786f1f9c51c.png",
                    hoverPicture: "https://static.xtransfer.com/boss/static/add-y_630ab17d94364363.png",
                    mobilePicture: "https://static.xtransfer.com/boss/static/h5-add_be04834981c678cc.png",
                    mobileHoverPicture: "https://static.xtransfer.com/boss/static/h5-add-y_00818a546ea1e60e.png",
                    dest: X.Ym
                }, {
                    title: t("new-home-service-receive-title"),
                    content: t("new-home-service-receive-content"),
                    picture: "https://static.xtransfer.com/boss/static/receive-money_11183f9c2b120d6c.png",
                    hoverPicture: "https://static.xtransfer.com/boss/static/send-y_aa1604618ba8573d.png",
                    mobilePicture: "https://static.xtransfer.com/boss/static/h5-receive_765f6525769e90cd.png",
                    mobileHoverPicture: "https://static.xtransfer.com/boss/static/h5-receive-y_1db1f01e52f9927e.png",
                    dest: X.Ym
                }, {
                    title: t("new-home-service-send-title"),
                    content: [t("new-home-service-exchange-content-line1"), t("new-home-service-exchange-content-line2"), t("new-home-service-exchange-content-line3")],
                    picture: "https://static.xtransfer.com/boss/static/send-money_1b94150860f9b0e0.png",
                    hoverPicture: "https://static.xtransfer.com/boss/static/receive-y_6cfe8ad84e4ce2b3.png",
                    mobilePicture: "https://static.xtransfer.com/boss/static/h5-send_52dc5358a7751380.png",
                    mobileHoverPicture: "https://static.xtransfer.com/boss/static/h5-send-y_4d4668212518f4e7.png",
                    dest: X.p$
                }, {
                    title: t("new-home-service-exchange-title"),
                    content: t("new-home-service-exchange-content"),
                    picture: "https://static.xtransfer.com/boss/static/exchange_86b85a6994f83dbe.png",
                    hoverPicture: "https://static.xtransfer.com/boss/static/exchange-y_3bf8f64803042579.png",
                    mobilePicture: "https://static.xtransfer.com/boss/static/h5-exchange_9f28c114b1869553.png",
                    mobileHoverPicture: "https://static.xtransfer.com/boss/static/h5-exchange-y_993cf9492447d88b.png",
                    dest: X.DV
                }];
                return (0, Q.jsxs)("section", {
                    ref: n,
                    className: _()($().container, "xt-safe-row"),
                    children: [(0, Q.jsx)("h2", {
                        className: $().title,
                        children: t("new-home-service-main-title")
                    }), (0, Q.jsx)("div", {
                        className: $().services,
                        children: e ? (0, Q.jsx)("ul", {
                            className: _()($().firstLine), children: i.map(function (e, t) {
                                return (0, Q.jsx)(q, {className: $().serviceItem, data: e}, t)
                            })
                        }) : (0, Q.jsxs)("div", {
                            children: [(0, Q.jsx)("ul", {
                                className: $().firstLine,
                                children: i.slice(0, 2).map(function (e, t) {
                                    return (0, Q.jsx)(q, {className: $().serviceItem, data: e, ratio: "43%"}, t)
                                })
                            }), (0, Q.jsx)("ul", {
                                className: $().secondLine, children: i.slice(2).map(function (e, t) {
                                    return (0, Q.jsx)(q, {className: $().serviceItem, data: e, ratio: "60.64%"}, t)
                                })
                            })]
                        })
                    })]
                })
            }, et = n(94065), en = n.n(et), ei = function () {
                var e = (0, x.$G)().t, t = (0, x._i)("Home-Fast facts"), n = [{
                    title: e("about-us-company-today-card-1-title"),
                    content: e("new-home-case-user-content")
                }, {
                    title: e("about-us-company-today-card-2-title"),
                    content: e("new-home-case-market-content")
                }, {
                    title: e("about-us-company-today-card-3-title"),
                    content: e("new-home-case-account-content")
                }, {
                    title: e("about-us-company-today-card-4-title"),
                    content: e("new-home-case-no1-content")
                }, {title: e("about-us-company-today-card-5-title"), content: e("new-home-case-processed-content")}];
                return (0, Q.jsx)("section", {
                    ref: t, className: _()(en().wrapper), children: (0, Q.jsxs)("div", {
                        className: _()(en().container, "xt-safe-row"),
                        children: [(0, Q.jsx)("h2", {
                            className: en().title,
                            children: e("new-home-case-title")
                        }), (0, Q.jsx)("p", {
                            className: en().subTitle,
                            children: e("new-home-case-subtitle")
                        }), (0, Q.jsx)("div", {
                            className: _()(en().advantages, "hidden-mobile"),
                            children: n.map(function (e, t) {
                                var n = e.title, i = e.content;
                                return (0, Q.jsxs)("div", {
                                    className: en().advantageWrapper,
                                    children: [(0, Q.jsx)("h3", {children: n}), (0, Q.jsx)("p", {children: i})]
                                }, t)
                            })
                        }), (0, Q.jsxs)("div", {
                            className: _()(en().advantages, "hidden-pc"),
                            children: [(0, Q.jsx)("div", {
                                className: en().firstLine,
                                children: n.slice(0, 3).map(function (e, t) {
                                    var n = e.title, i = e.content;
                                    return (0, Q.jsxs)("div", {
                                        className: en().advantageWrapper,
                                        children: [(0, Q.jsx)("h3", {children: n}), (0, Q.jsx)("p", {children: i})]
                                    }, t)
                                })
                            }), (0, Q.jsx)("div", {
                                className: en().secondLine, children: n.slice(3).map(function (e, t) {
                                    var n = e.title, i = e.content;
                                    return (0, Q.jsxs)("div", {
                                        className: en().advantageWrapper,
                                        children: [(0, Q.jsx)("h3", {children: n}), (0, Q.jsx)("p", {children: i})]
                                    }, t)
                                })
                            })]
                        })]
                    })
                })
            }, er = n(59499), ea = n(17469), es = n(35426), ec = n.n(es), eo = n(85356), el = function (e) {
                var t = e.title, n = e.active, i = e.content, r = e.image, a = e.imageH5, s = e.video, c = e.actions,
                    o = null;
                return o = "string" == typeof i ? (0, Q.jsx)("p", {
                    className: _()(ec().desc),
                    children: i
                }) : (0, Q.jsx)("div", {
                    className: ec().contentsWrapper, children: i.map(function (e, t) {
                        return (0, Q.jsxs)("p", {
                            className: _()(ec().desc),
                            children: [(0, Q.jsx)("span", {
                                className: ec().iconWrapper,
                                children: (0, Q.jsx)(eo.Z, {className: ec().icon})
                            }), (0, Q.jsx)("span", {children: e})]
                        }, t)
                    })
                }), (0, Q.jsx)("section", {
                    className: _()(ec().sectionWrapper),
                    children: (0, Q.jsxs)("div", {
                        className: _()("xt-safe-row", ec().slideCardWrapper),
                        children: [(0, Q.jsxs)("div", {
                            className: ec().left,
                            children: [(0, Q.jsxs)("div", {
                                children: [(0, Q.jsx)("h2", {
                                    className: ec().smallTitle,
                                    children: t
                                }), o]
                            }), c && (0, Q.jsx)("div", {className: ec().buttonsWrapper, children: c()})]
                        }), (0, Q.jsxs)("div", {
                            className: ec().right,
                            children: [(0, Q.jsx)(E.Z, {
                                active: !!n,
                                className: _()(ec().image).concat(" hidden-mobile"),
                                picture: r,
                                video: s,
                                placeholder: C.wK,
                                alt: ""
                            }), (0, Q.jsx)(E.Z, {
                                active: !!n,
                                className: _()(ec().image).concat(" hidden-pc"),
                                picture: a,
                                placeholder: C.wK,
                                alt: ""
                            })]
                        })]
                    })
                })
            }, ed = n(1194), eA = n.n(ed);
        n(42622), n(53274);
        var e_ = n(88072), ex = function () {
                var e = (0, x.$G)().t, t = (0, Y.qM)(), n = t.isLanding, i = t.isHK, r = (0, x._i)("Home-Advantages"),
                    a = (0, x.Q7)(), s = (0, d.useRef)(null), c = (0, d.useRef)(null), o = (0, d.useState)(0), l = o[0],
                    A = o[1], u = (0, Y.qM)().isMobile ? 5 : 7;
                (0, d.useEffect)(function () {
                    var e;
                    return c.current && (e = c.current.querySelector('[data-index="'.concat(l, '"]'))) && (e.style.transition = "transform ".concat(u, "s"), e.style.transform = "translateX(0)"), function () {
                        e && (e.style.transition = "unset", e.style.transform = "translateX(-100%)")
                    }
                }, [l]);
                var p = [{
                    title: e("home-advantages-reliable-title"),
                    desc: e("home-advantages-reliable-desc"),
                    picture: "https://static.xtransfer.com/boss/static/reliable_1aacc93a327da6ae.png",
                    pictureH5: "https://static.xtransfer.com/boss/static/Reliable_0a6d8270a9a1a467.png",
                    video: "https://static.xtransfer.com/boss/static/reliable_f0bc86a88f331721.mp4",
                    btnText: e("home-advantages-reliable-btn-text"),
                    btnTextMobile: e("common-sign-up-now")
                }, {
                    title: e("home-advantages-fast-title"),
                    desc: e("home-advantages-fast-desc"),
                    picture: "https://static.xtransfer.com/boss/static/fast-first-2x_81780a4e9e358f22.png",
                    pictureH5: "https://static.xtransfer.com/boss/static/Fast_62cc1947786bc517.png",
                    video: "https://static.xtransfer.com/boss/static/fast-mp4_2d2ca7a6a59bc507.mp4",
                    btnText: e("home-advantages-fast-btn-text"),
                    btnTextMobile: e("home-advantages-fast-mobile-btn-text")
                }, {
                    title: e("home-advantages-save-title"),
                    desc: e("home-advantages-save-desc"),
                    picture: "https://static.xtransfer.com/boss/static/save_575cab424226f6fd.png",
                    pictureH5: "https://static.xtransfer.com/boss/static/Save_9cdeec576671e9d2.png",
                    video: "https://static.xtransfer.com/boss/static/3.Save_973bf3b94d9c8e68.mp4",
                    btnText: e("home-advantages-save-btn-text"),
                    btnTextMobile: e("home-advantages-save-mobile-btn-text")
                }, {
                    title: e("home-advantages-simple-title"),
                    desc: e("home-advantages-simple-desc"),
                    picture: "https://static.xtransfer.com/boss/static/simple_5d5c52f12decb738.png",
                    pictureH5: "https://static.xtransfer.com/boss/static/Simple_eb42a8bcad02d02c.png",
                    video: "https://static.xtransfer.com/boss/static/4.simple_bfdd7456b33c225d.mp4",
                    btnText: e("home-advantages-simple-btn-text"),
                    btnTextMobile: e("home-advantages-simple-mobile-btn-text")
                }];
                return (0, Q.jsxs)("div", {
                    ref: r,
                    className: eA().container,
                    children: [(0, Q.jsx)(w.tq, {
                        effect: "fade",
                        autoplay: {delay: 1e3 * u, disableOnInteraction: !1},
                        allowTouchMove: !1,
                        fadeEffect: {crossFade: !0},
                        modules: [b.xW, b.W_, b.tl, b.pt],
                        onAutoplayTimeLeft: function (e) {
                            A(e.activeIndex)
                        },
                        onSwiper: function (e) {
                            s.current = e
                        },
                        children: p.map(function (e, t) {
                            var r = e.title, s = e.desc, c = e.picture, o = e.pictureH5, d = e.btnTextMobile, A = e.video;
                            return (0, Q.jsx)(w.o5, {
                                children: (0, Q.jsx)(el, {
                                    active: t === l,
                                    title: r,
                                    content: s,
                                    image: c,
                                    imageH5: o,
                                    video: A,
                                    actions: function () {
                                        return n || !i ? (0, Q.jsx)(ea.Z, {
                                            style: {borderRadius: "99px"},
                                            source: n ? e_.lB.HOME_LANDING : ""
                                        }) : (0, Q.jsx)(Z.z, {
                                            type: "primary",
                                            onClick: a,
                                            "data-sensors-click": "true",
                                            children: d
                                        })
                                    }
                                })
                            }, t)
                        })
                    }), (0, Q.jsxs)("div", {
                        className: _()("xt-safe-row", eA().paginationContainer),
                        children: [(0, Q.jsx)("div", {className: eA().left}), (0, Q.jsx)("div", {
                            className: eA().right,
                            children: (0, Q.jsx)("div", {
                                className: eA().pageNums, ref: c, children: p.map(function (e, t) {
                                    var n = e.btnText;
                                    return (0, Q.jsxs)("span", {
                                        className: _()(eA().pageItem, (0, er.Z)({}, eA().active, t === l)),
                                        onClick: function () {
                                            s.current && (s.current.slideTo(t), A(t))
                                        },
                                        "data-sensors-click": "true",
                                        children: [(0, Q.jsx)("span", {"data-index": t, className: eA().pageItemInner}), n]
                                    }, t)
                                })
                            })
                        })]
                    })]
                })
            }, eu = n(70349), ep = n(83820), em = n.n(ep), eh = n(11761), ef = n.n(eh), eg = n(58251), ew = n(34195),
            eb = n(80763), ev = function (e) {
                var t = (0, x.$G)().t, n = (0, x._i)("Home-ExchangeTool"), i = (0, Y.qM)(), r = i.isLanding, a = i.isHK,
                    s = (0, x.Q7)();
                return (0, Q.jsx)(eb.ZP, {
                    children: (0, Q.jsxs)("div", {
                        className: _()("xt-safe-row", ef().exchangeTool),
                        ref: n,
                        children: [(0, Q.jsxs)("div", {
                            className: "".concat(ef().left, " ").concat(e.leftClassName || ""),
                            children: [(0, Q.jsxs)("div", {
                                className: ef().content,
                                children: [(0, Q.jsx)("h2", {
                                    className: ef().title,
                                    children: e.title || t("XTS-18935.ExchangeTool.title")
                                }), (0, Q.jsx)("p", {
                                    className: "".concat(ef().desc, " p"),
                                    children: e.desc || t("XTS-18935.ExchangeTool.desc")
                                })]
                            }), r || !a ? (0, Q.jsx)(ea.Z, {
                                className: ef().button,
                                source: r ? e_.lB.HOME_LANDING : ""
                            }) : (0, Q.jsx)(eg.z, {
                                type: "primary",
                                onClick: s,
                                className: ef().button,
                                "data-sensors-click": "true",
                                children: t("common-sign-up-now")
                            })]
                        }), (0, Q.jsx)(ew.Z, {className: ef().right})]
                    })
                })
            }, eB = function (e) {
                var t = e.children, n = (0, a.useRouter)().asPath;
                return (0, Q.jsx)(c(), {
                    style: {color: "#222"},
                    href: (0, K.Z)({asPath: n, toPath: X.RQ}),
                    "data-sensors-click": "true",
                    children: t
                })
            }, eQ = function () {
                var e = (0, x.$G)().t, t = (0, Y.qM)(), n = t.isLanding, i = t.isHK, r = {
                    title: e("new-home-banner-title"),
                    bannerImage: e("new-home-banner-image"),
                    bannerImageH5: e("new-home-banner-image-h5"),
                    bannerVideo: e("new-home-banner-video")
                };
                return (0, Q.jsxs)(Q.Fragment, {
                    children: [(0, Q.jsx)(o.Z, {
                        asHead: !0,
                        reverse: !1,
                        moduleName: "Home-Header",
                        title: r.title,
                        image: r.bannerImage,
                        imageH5: r.bannerImageH5,
                        video: r.bannerVideo,
                        fetchPriority: "high",
                        loop: !0,
                        actions: function () {
                            return !n && i ? (0, Q.jsxs)(Q.Fragment, {
                                children: [(0, Q.jsx)(Z.z, {
                                    onClick: eu.g,
                                    type: "primary",
                                    "data-sensors-click": "true",
                                    children: e("common-get-started")
                                }), (0, Q.jsx)(Z.z, {
                                    className: em().contactBtn,
                                    style: {marginLeft: "20px"},
                                    children: (0, Q.jsx)(eB, {children: e("new-home-contact-us")})
                                })]
                            }) : (0, Q.jsx)(ea.Z, {style: {borderRadius: "99px"}, source: n ? e_.lB.HOME_LANDING : ""})
                        }
                    }), (0, Q.jsx)(F, {}), (0, Q.jsx)(ex, {}), (0, Q.jsx)(ee, {}), (0, Q.jsx)(ev, {}), (0, Q.jsx)(ei, {}), (0, Q.jsx)(I, {}), (0, Q.jsx)(l.Z, {
                        moduleName: "Home-CTA",
                        showCoin: !0
                    })]
                })
            }
    }, 24188: function (e, t, n) {
        "use strict";
        var i = n(59499), r = n(4730), a = n(37667), s = n(94184), c = n.n(s), o = n(42708), l = n(34070), d = n.n(l),
            A = n(85893),
            _ = ["picture", "video", "loop", "active", "placeholder", "className", "alt", "fetchPriority"];

        function x(e, t) {
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
                t % 2 ? x(Object(n), !0).forEach(function (t) {
                    (0, i.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }

        t.Z = function (e) {
            var t = e.picture, n = e.video, i = e.loop, s = e.active, l = void 0 === s || s, x = e.placeholder,
                p = e.className, m = e.alt, h = e.fetchPriority, f = (0, r.Z)(e, _), g = (0, o.YD)({threshold: .1}),
                w = g.ref, b = g.inView;
            return (0, a.useRef)(null), (0, a.useRef)(null), (0, a.useEffect)(function () {
                if (b) {
                    if (n && l) {
                        var e = document.querySelector('video[data-img="'.concat(t, '"]'));
                        e && (e.src = e.dataset.video, e.poster = e.dataset.img, e.load())
                    } else {
                        var i = document.querySelector('img[data-src="'.concat(t, '"]'));
                        if (i) {
                            var r = i.dataset.src;
                            i.removeAttribute("data-src"), i.src = r
                        }
                    }
                }
            }, [b, t, n, l, p, h]), (0, A.jsx)("div", u(u({
                ref: w,
                className: c()(d().wrapper, p)
            }, f), {}, {
                children: n ? (0, A.jsx)("video", {
                    "data-img": t,
                    "data-video": n,
                    className: d().video,
                    poster: x,
                    muted: !0,
                    autoPlay: !0,
                    loop: void 0 !== i && i,
                    playsInline: !0,
                    "webkit-playsinline": "true"
                }) : (0, A.jsx)("img", {alt: m, src: x, "data-src": t, className: d().image, fetchpriority: h})
            }))
        }
    }, 76070: function (e, t, n) {
        "use strict";
        var i = n(94184), r = n.n(i), a = n(39755), s = n(85832), c = n(72775), o = n(75942), l = n(47243), d = n.n(l),
            A = n(17469), _ = n(72768), x = n(98225), u = n(88072), p = n(85893);
        t.Z = function (e) {
            var t = e.moduleName, n = e.showCoin, i = (0, a.$G)().t, l = (0, s.qM)(), m = l.isLanding, h = l.isHK,
                f = (0, s.lw)().isMobile, g = (0, a.Q7)(), w = (0, a._i)(t);
            return (0, p.jsxs)("div", {
                ref: w,
                className: d().container,
                style: {backgroundColor: "#F5F5F7"},
                children: [(0, p.jsxs)("section", {
                    className: r()("xt-safe-row", d().xtCardWrapper),
                    children: [(0, p.jsx)("div", {className: d().cardPlaceHolder}), (0, p.jsx)(x.n, {
                        className: d().cardLogo,
                        alt: "",
                        src: o.x7
                    }), (0, p.jsxs)("div", {
                        className: d().xtCard,
                        children: [(0, p.jsxs)("div", {
                            className: d().contentWrapper,
                            children: [(0, p.jsx)("h2", {children: i("xt-cta-card-title")}), (0, p.jsx)("p", {
                                className: d().text,
                                children: i("xt-cta-card-text-line1")
                            }), (0, p.jsx)("p", {className: d().text, children: i("xt-cta-card-text-line2")})]
                        }), (0, p.jsx)("div", {
                            className: d().buttonsWrapper,
                            children: m || !h ? (0, p.jsx)(A.Z, {
                                style: {
                                    borderRadius: "99px",
                                    background: "#fff",
                                    border: "1px solid #838099",
                                    color: "#000"
                                }, source: m ? u.lB.HOME_LANDING : ""
                            }) : (0, p.jsxs)(p.Fragment, {
                                children: [(0, p.jsx)(c.z, {
                                    className: r()(d().btn, d().contactUs),
                                    children: (0, p.jsx)(_.m, {children: i("new-home-contact-us")})
                                }), (0, p.jsx)(c.z, {
                                    className: r()(d().btn, d().signUp),
                                    onClick: g,
                                    "data-sensors-click": "true",
                                    children: i("common-sign-up-now")
                                })]
                            })
                        })]
                    })]
                }), n && !1 === f && (0, p.jsxs)(p.Fragment, {
                    children: [(0, p.jsx)(x.n, {
                        src: "https://static.xtransfer.com/boss/static/1_7b39bd64d14cf878.png",
                        className: r()(d().topleft, d().coin),
                        alt: "coin"
                    }), (0, p.jsx)(x.n, {
                        src: "https://static.xtransfer.com/boss/static/3_ca5adf93fe360455.png",
                        className: r()(d().topright, d().coin),
                        alt: "coin"
                    }), (0, p.jsx)(x.n, {
                        src: "https://static.xtransfer.com/boss/static/2_a848350d673d5e71.png",
                        className: r()(d().bottomleft, d().coin),
                        alt: "coin"
                    }), (0, p.jsx)(x.n, {
                        src: "https://static.xtransfer.com/boss/static/4_0bc8c23b28edf68a.png",
                        className: r()(d().bottomright, d().coin),
                        alt: "coin"
                    })]
                })]
            })
        }
    }, 33190: function (e, t, n) {
        "use strict";
        n.d(t, {
            Q$: function () {
                return r
            }, gk: function () {
                return i
            }, wK: function () {
                return a
            }
        });
        var i = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhwAAAIcCAYAAAC9/nd8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAxMSURBVHgB7d3hdVTHGYDhWSogFVhUYKggooK4g+AKYldgVEGggkAHdgVWB+AKWCoIHWxmzIpItoCV2Dc5wPOcM7qLtEh/3/PNvbObEdvtdifzcjrX/bm+mWv9++7+CgD8b23nerO//jbXy7U2m812hDYjMCPjdF6+m+tvQ1gAwOdgO9f5XM9nfJyPIztacMzIWFOLf8z1w3g7wQAAPk/buc7mOj/W5OOTg0NoAMAXa229PJvr6aeGxycFx4yNFRqPh9AAgC/Zdq6zGR3Pxi3dKjj2N4L+a7y9GRQA+Dps53p4m2nHnXFD+6nGiyE2AOBrczLXi9kCP4wbutGEY/6Bf46392oAAF+3x3PScXbomw8Ojhkbawvl0QAAeOvZjI7vD3njQcExY2MdCvLtAAC4ah0a9uBjb/roPRz7yYbYAACuc3/fCh/0weCYv+CnYRsFAPiwR/v7PN/rvVsq+6dRngwAgMP8OLdXrm2Ha4Njf87GevTVgV4AwKHWyaQPrjun431bKr8OsQEA3Mxqh2vv5/hTcMzpxqPhE14BgNs5ve5gsCtbKvutlDXdOBkAALeztlbuza2VNxff+OOEY90oejIAAG5vba1cmXK8m3C4URQAOKIrU47LE47TITYAgOO4MuW4POF4NWynAADH82ZOOP6yXvw+4ZixcTrEBgBwXHf3jfFuS+XRAAA4vu/Wl9+3VGynAACR7dxWubfZP53yagAANO6tLZX7AwCgcyo4AIDafcEBANROVnB8MwAAOt+s4HC6KABQurueUtkNAIDQnQEAEBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAADnBAQDkBAcAkBMcAEBOcAAAOcEBAOQEBwCQExwAQE5wAAA5wQEA5AQHAJATHABATnAAALkVHNsBANDZruB4MwAAOm9WcLweAACd17ZUAIDayxUcLwcAQOflZrfbncwXrwYAQOPenc1msx22VQCAxna1xsU5HL8MAIDjO19fLoLj5wEAcHzP15fNxb92u92/5+XuAAA4jrWdcm+9uHy0+dMBAHA8ZxcvLk841nRjPa1iygEAfKp1kvmD/cMp/51wzG+sH5hyAADH8PwiNpbN5Z+YcgAAR7Cd6+Hl4Ljy8fT7KcfZAAC4vbPLsbFsrnvXnHT8Oi+nAwDgZt49mXLZnfe8+fvhY+sBgJtZ7fDwuh9cGxz7MYitFQDgJv60lXLhfROOFR1PhqdWAIDDnO3b4Vqb8RG73e7ZvPx9AABcbz0C++hDb/hocCwzOl7My/0BAHDVbzM2PtoId8YB5i96MPYfvgIAsPf8kNhYDgqOZT8qcSMpALA8/dg2ymUHB8cyf/HjeflxeGQWAL5WqwF+nE3ww03+00H3cPzRbrc7mZd1ONjJAAC+Fudzff++R18/5EYTjgvrD+1PEVsHhG0HAPAlu5hqPLxNbCy3mnBctp92rLHKenTWh74BwJfj4pPkn+w/b+3WPjk4LuzD43Sun4atFgD4nB0tNC4cLTgum/FxOi+P5vrrEB8A8DnYzvXLXD/PyDgfR5YEx2X7ycf9/fp2vA2Qu0OIAMD/w3a8nWCs6+u5Xs51ftt7Mw71HxMvBW1nr4dPAAAAAElFTkSuQmCC",
            r = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYYAAAIICAMAAABdDLniAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMA3+8gkIDPcGCwQBCgn79QLuYhwwAABalJREFUeNrs2UtuwzAMAFHqY8d26oT3P227apAi6QdorFnMu8KAEi3HM23p61xS/6TM63Rt8SdbN8BLlH2LXzpPNfUyZWlGIKj9xxAnIxygLPGddkkdojRHgaCe4omeOtAUD+2pQ+3xwJw62OwsIOzxxZQaoMedU2qIu32puakOUlvc+JA3zCU+LalRbsdScxgGqme/ngkm72eCevZmIJhckwhqfNhSg20R8ZYarHsmEZSIlhquxTU13OILN0GPNTXc6r9PgtlFiaBECsAMCGZAMAOCGRDMgGAGBDMgmAHBDAhmQDADghkQzIBgBgQzIJgBwQwIZkAwA4IZEMyAYAYEMyCYAcEMCGZAMAOCGRDMgGAGBDMgmAHBDAhmQDADghkQzIBgBgQzIJgBwQwIZkAwA4IZEMyAYAYEMyC8s0fHAgAAAACD/K2nsaMU0rCgYUHDgoYFDQsaFjQsaFjQsKBhQcOChgUNCxoWNCxoWNCwoGFBw4KGBQ0LGhY0LGhY0LCgYUHDgoYFDQsaFjQsaFjQsKBhQcOChgUNCxoWNCxoWNCwoGFBw4KGBQ0LGhY0LGhY0LCgYUHDgoYFDQsaFjQsaFjQsKBhQcOChgUNCxoWNCxoWNCwoGFBw4KGBQ0LGhY0LGhY0LCgYUHDgoYFDQsaFmKPjgUAAAAABvlbT2NHKaRhQcOChgUNCxoWNCxoWNCwoGFBw4KGBQ0LGhY0LGhY0LCgYUHDgoYFDQsaFjQsaFjQsKBhQcOChgUNCxoWNCxoWNCwoGFBw4KGBQ0LGhY0LGhY0LCgYUHDgoYFDQsaFjQsaFjQsKBhQcOChgUNCxoWNCxoWNCwoGFBw4KGBQ0LGhY0LGhY0LCgYUHDgoYFDQsaFjQsaFjQsKBhQcOChgUNCxoWNCxoWNCwoGFBw4KGBQ0LGhY0LGhY0LCgYUHDgoYFDQsaFjQsaFjQsKBhQcOChgUNCxoWNCxoWNCwoGFBw4KGBQ0LGhY0LGhY0LCgYUHDgoYFDQsaFjQsaFjQsKBhQcOChgUNCxoWNCxoWNCwoGFBw4KGBQ0LGhY0LGhY0LCgYUHDgoYFDQsaFjQsaFjQsKBhQcOChgUNCxoWNCxoWNCwoGFBw4KGBQ0LsUfHAgAAAACD/K2nsaMU0rCgYUHDgoYFDQsaFjQsaFjQsKBhQcOChgUNCxoWNCxoWNCwoGFBw4KGBQ0LGhY0LGhY0LCgYUHDgoYFDQsaFjQsaFjQsKBhQcOChgUNCxoWNCxoWNCwoGFBw4KGBQ0LGhY0LGhY0LCgYUHDgoYFDQsaFjQsaFjQsKBhQcOChgUNCxoWNCxoWNCwoGFBw4KGBQ0LGhY0LGhY0LCgYUHDgoYFDQsaFjQsaFjQsKBhQcOChgUNCxoWNCxoWNCwoGFBw4KGBQ0LGhY0LGhY0LCgYUHDgoYFDQsaFjQsaFjQsKBhQcOChgUNCxoWNCxoWNCwoGFBw4KGBQ0LGhY0LGhY0LCgYUHDgoYFDQsaFjQsaFjQsKBhQcOChgUNCxoWNCxoWNCwoGFBw4KGBQ0LGhY0LGhY0LCgYUHDgoYFDQsaFjQsaFjQsKBhQcOChoXas7vUhmEgisJXlvwbN5n9r7YJlBoMaSgkmvtwvi0cZiRbZLBABgtksEAGC2SwQAYLZLBABgtksEAGC2SwQAYLZLBABgtksEAGC2SwQAYLZLBABgtksEAGCyqBdEVTIN2kNZBuVQukG7UE0t1UA+mquCrlKxKHQ74vSVsg2aa7IZCq6GEMpFr0cGEcUg1VjEO+JjEO6UrVjzmQZtGvayBJ0aGylhIc5zNrKdmsA780sow62QPd7TrjNbS/SXfMQ7JdJ3xNJ2h6Yube2s0w66nKU1wn16q/LIToYJj1Qm1spg8bxoteq0zESd8Ih22nxEeUtulf6m1cJ2K8TZnWtlQ98Q0pz0x6PG9XQwAAAABJRU5ErkJggg==",
            a = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAggAAAJYAQMAAAA9vIzXAAAAA1BMVEX///+nxBvIAAAAPUlEQVR42u3BMQEAAADCIPunNsYeYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApA6asAAB9xzrcgAAAABJRU5ErkJggg=="
    }, 80763: function (e, t, n) {
        "use strict";
        n.d(t, {
            ZA: function () {
                return g
            }, dx: function () {
                return w
            }
        });
        var i = n(59499), r = n(16835), a = n(37667), s = n.n(a), c = n(36492), o = n(16947), l = n(59175),
            d = n(75696), A = n(96638), _ = n(85893);

        function x(e, t) {
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
                t % 2 ? x(Object(n), !0).forEach(function (t) {
                    (0, i.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }

        var p = {urlParsedCurrencies: o.a7, amount: o.Ln, from: o.a7[0], to: o.a7[1]}, m = {
            setUrlParsedCurrencies: function () {
                console.error("未成功初始化,请检查ExchangeRateProvider")
            }
        }, h = s().createContext(p), f = s().createContext(m);

        function g() {
            var e = s().useContext(h);
            return void 0 === e ? (console.error("useExchangeRateState must be used within a ExchangeRateContextProvider"), p) : e
        }

        function w() {
            var e = s().useContext(f);
            return void 0 === e ? m : e
        }

        t.ZP = function (e) {
            var t = e.children, n = (0, A.Z)(p), i = (0, r.Z)(n, 2), s = i[0], x = i[1], m = (0, a.useState)(o.a7),
                g = m[0], w = m[1], b = (0, c.a)(["getRateCarousel", "HK"], function () {
                    return (0, d.f2)({siteCode: "HK"})
                }, {cacheTime: 0, staleTime: 0}).data, v = (0, c.a)(["getCurrencyInfo"], d.II).data,
                B = (0, a.useMemo)(function () {
                    return (0, l.wO)(b || [], v)
                }, [b, v]), Q = (0, a.useCallback)(function (e, t) {
                    var n = (0, l.$q)(B, e, t);
                    n && w([n.fromCcy, n.toCcy])
                }, [B]);
            return (0, a.useEffect)(function () {
                if (B) {
                    var e = (0, l.$q)(B, g[0], g[1]), t = g[0], n = null == e ? void 0 : e.fromCcyName, i = g[1];
                    x({
                        amount: 1,
                        from: t,
                        fromName: n,
                        to: i,
                        toName: null == e ? void 0 : e.toCcyName,
                        latestRatePoint: e,
                        urlParsedCurrencies: [t, i]
                    })
                }
            }, [B, x, g]), (0, _.jsx)(f.Provider, {
                value: {setUrlParsedCurrencies: Q},
                children: (0, _.jsx)(h.Provider, {value: u(u({}, s), {}, {currencyPairsData: B}), children: t})
            })
        }
    }, 59175: function (e, t, n) {
        "use strict";
        n.d(t, {
            $q: function () {
                return s
            }, IY: function () {
                return c
            }, oC: function () {
                return l
            }, wO: function () {
                return d
            }, zn: function () {
                return o
            }
        });
        var i = n(59499);

        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), n.push.apply(n, i)
            }
            return n
        }

        function a(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach(function (t) {
                    (0, i.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }

        function s(e, t, n) {
            var i = t.toUpperCase(), r = n.toUpperCase(), a = e.filter(function (e) {
                return e.fromCcy === i
            }).filter(function (e) {
                return e.toCcy === r
            });
            return 1 === a.length ? a[0] : e.filter(function (e) {
                return e.fromCcy === i
            })[0]
        }

        function c(e, t) {
            var n = e.toUpperCase();
            return t.filter(function (e) {
                return e.fromCcy === n
            }).map(function (e) {
                return {key: e.toCcy, label: e.toCcyName || "", icon: e.toCcyIcon}
            })
        }

        function o(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "from", n = [],
                i = "".concat(t, "Ccy"), r = "".concat(t, "CcyName"), a = "".concat(t, "CcyIcon");
            return e.map(function (e) {
                return n.includes(e[i]) ? null : (n.push(e[i]), {key: e[i], label: e[r] || "", icon: e[a]})
            }).filter(Boolean)
        }

        function l(e) {
            var t = ("number" == typeof e ? e.toString() : e).indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(\d{3})+$)/g;
            return e.toString().replace(t, "$1,")
        }

        function d(e, t) {
            return e.map(function (e) {
                var n, i, r, s;
                return a(a({}, e), {}, {
                    fromCcyName: (null == t ? void 0 : null === (n = t.find(function (t) {
                        return t.currencyCode === e.fromCcy
                    })) || void 0 === n ? void 0 : n.currencyName) || "",
                    toCcyName: (null == t ? void 0 : null === (i = t.find(function (t) {
                        return t.currencyCode === e.toCcy
                    })) || void 0 === i ? void 0 : i.currencyName) || "",
                    fromCcyIcon: (null == t ? void 0 : null === (r = t.find(function (t) {
                        return t.currencyCode === e.fromCcy
                    })) || void 0 === r ? void 0 : r.currencyIcon) || "",
                    toCcyIcon: (null == t ? void 0 : null === (s = t.find(function (t) {
                        return t.currencyCode === e.toCcy
                    })) || void 0 === s ? void 0 : s.currencyIcon) || ""
                })
            })
        }
    }, 91448: function (e) {
        e.exports = {
            wrapper: "index_wrapper__qC1MV",
            swiper: "index_swiper__yof1p",
            slideItem: "index_slideItem__6G_VO",
            paginationWrapper: "index_paginationWrapper__TWjCF",
            pagination: "index_pagination__bq3s8",
            paginationItem: "index_paginationItem__qmuKg",
            paginationItemActive: "index_paginationItemActive__3f09h"
        }
    }, 9952: function (e) {
        e.exports = {
            "font-weight-700": "index_font-weight-700__PUwPY",
            "font-weight-500": "index_font-weight-500__PMMP_",
            "font-weight-400": "index_font-weight-400__mlHyU",
            underline: "index_underline__XMzez",
            "row-padding": "index_row-padding__Pda9f",
            "xt-row-new": "index_xt-row-new__696Ef",
            "hidden-pc": "index_hidden-pc__gpKvX",
            "xt-safe-row": "index_xt-safe-row__HWdiw",
            "xt-new-shadow": "index_xt-new-shadow__IYARx",
            "hidden-mobile": "index_hidden-mobile__gYIT3",
            "contact-us-modal-container": "index_contact-us-modal-container__JQVGL",
            "atom-modal-body": "index_atom-modal-body__zRdOg",
            "atom-select-item-option": "index_atom-select-item-option__RDuNZ",
            "font-size-12": "index_font-size-12__OLaeq",
            "font-size-14": "index_font-size-14__UZzxk",
            "font-size-16": "index_font-size-16__sl43Y",
            "font-size-20": "index_font-size-20__kJosS",
            "font-size-24": "index_font-size-24__54NzE",
            "font-size-28": "index_font-size-28___QMYx",
            "font-size-32": "index_font-size-32__Oausb",
            "font-size-36": "index_font-size-36__ymeM8",
            "font-size-40": "index_font-size-40__EG0I7",
            "font-size-48": "index_font-size-48__IsTBZ",
            "font-size-52": "index_font-size-52__Yb3rP",
            "font-size-56": "index_font-size-56__NkgGq",
            "font-size-64": "index_font-size-64__iNkoL",
            "flex-center": "index_flex-center__3yl0a",
            "flex-between": "index_flex-between__oC2w1",
            ellipsis: "index_ellipsis__NJ4fc",
            "unset-ellipsis": "index_unset-ellipsis__DIbxd",
            nowrap: "index_nowrap__Xdc9K",
            "fixed-absolute-width": "index_fixed-absolute-width__val_y",
            "about-us-month": "index_about-us-month__S4_J_",
            "fill-image": "index_fill-image__Yxf77",
            hidden: "index_hidden__ui0wa",
            "safe-bottom": "index_safe-bottom__3b_VO",
            "mobile-inner-button": "index_mobile-inner-button__qG33R",
            "mobile-button": "index_mobile-button__f6vh7",
            "max-2-line": "index_max-2-line__YuhNt",
            "xt-image": "index_xt-image__Ma6Pc",
            "xt-shadow": "index_xt-shadow__BUF5K",
            "xt-row": "index_xt-row__IXL0Q",
            "xt-h1": "index_xt-h1__XgDdn",
            "xt-h2": "index_xt-h2__TnZXh",
            "xt-h3": "index_xt-h3__2yAui",
            "xt-h4": "index_xt-h4__UeT80",
            "xt-h5": "index_xt-h5__RPnup",
            "xt-text": "index_xt-text__nH3Wd",
            "mobileInput-clear": "index_mobileInput-clear__4KyHV",
            button: "index_button__orAgD",
            highlight: "index_highlight__3wirE",
            searchMenu: "index_searchMenu__gc5wO",
            drawer: "index_drawer__GtP51",
            drawerTitle: "index_drawerTitle___n77_",
            item: "index_item__9ZIwC",
            icon: "index_icon__TOFRB"
        }
    }, 9845: function (e) {
        e.exports = {
            root: "index_root__zvGZe",
            label: "index_label__VPgG7 index_root__zvGZe",
            iconClassName: "index_iconClassName__J286u",
            currencyLabel: "index_currencyLabel__j82U1"
        }
    }, 35476: function (e) {
        e.exports = {
            "font-weight-700": "index_font-weight-700__Lr91T",
            "font-weight-500": "index_font-weight-500__XgiYD",
            "font-weight-400": "index_font-weight-400___4He2",
            underline: "index_underline__qXee5",
            "row-padding": "index_row-padding__8pi7a",
            "xt-row-new": "index_xt-row-new__KujYv",
            "hidden-pc": "index_hidden-pc__1cjt6",
            "xt-safe-row": "index_xt-safe-row__8F4s1",
            "xt-new-shadow": "index_xt-new-shadow__JO_cH",
            "hidden-mobile": "index_hidden-mobile__OcZ1e",
            "contact-us-modal-container": "index_contact-us-modal-container__jKpSy",
            "atom-modal-body": "index_atom-modal-body__ylvou",
            "atom-select-item-option": "index_atom-select-item-option__puSGa",
            "font-size-12": "index_font-size-12__3I_cU",
            "font-size-14": "index_font-size-14__7VsaE",
            "font-size-16": "index_font-size-16__OXZSt",
            "font-size-20": "index_font-size-20__zVbeO",
            "font-size-24": "index_font-size-24__Sxzrt",
            "font-size-28": "index_font-size-28__4mnAi",
            "font-size-32": "index_font-size-32__221lQ",
            "font-size-36": "index_font-size-36__nRZ5Z",
            "font-size-40": "index_font-size-40__kTezy",
            "font-size-48": "index_font-size-48__PIG3_",
            "font-size-52": "index_font-size-52__4sl7Z",
            "font-size-56": "index_font-size-56__e9FMF",
            "font-size-64": "index_font-size-64___BIc7",
            "flex-center": "index_flex-center__t_jBQ",
            "flex-between": "index_flex-between__Vok0y",
            ellipsis: "index_ellipsis__6bH1Q",
            "unset-ellipsis": "index_unset-ellipsis__PSQ1f",
            nowrap: "index_nowrap__QNmUm",
            "fixed-absolute-width": "index_fixed-absolute-width__mRHI_",
            "about-us-month": "index_about-us-month__K2xjH",
            "fill-image": "index_fill-image__JeLC8",
            hidden: "index_hidden__D5jcg",
            "safe-bottom": "index_safe-bottom__MZp16",
            "mobile-inner-button": "index_mobile-inner-button__OLttU",
            "mobile-button": "index_mobile-button__WMnxG",
            "max-2-line": "index_max-2-line__YmMwf",
            "xt-image": "index_xt-image__HWkm5",
            "xt-shadow": "index_xt-shadow__Neyf5",
            "xt-row": "index_xt-row__43gjT",
            "xt-h1": "index_xt-h1__b5pQ5",
            "xt-h2": "index_xt-h2__wAIAf",
            "xt-h3": "index_xt-h3__nHmPp",
            "xt-h4": "index_xt-h4__sRWsP",
            "xt-h5": "index_xt-h5__6NBhR",
            "xt-text": "index_xt-text__jmnEq",
            "mobileInput-clear": "index_mobileInput-clear__nXFJ_",
            root: "index_root__DRwaM",
            h2: "index_h2__oiEfD",
            chartContainer: "index_chartContainer__YOIhF",
            buttonGroup: "index_buttonGroup__J8a1R",
            button: "index_button__Bg0Bc",
            active: "index_active__SoRsZ",
            chartYAxis: "index_chartYAxis__exPnq"
        }
    }, 75496: function (e) {
        e.exports = {
            "font-weight-700": "index_font-weight-700__qiTzm",
            "font-weight-500": "index_font-weight-500__XY_Fy",
            "font-weight-400": "index_font-weight-400__T5fGK",
            underline: "index_underline__UyuWX",
            "row-padding": "index_row-padding__0oo78",
            "xt-row-new": "index_xt-row-new__dCbAA",
            "hidden-pc": "index_hidden-pc__2tKPA",
            "xt-safe-row": "index_xt-safe-row__Yc4LL",
            "xt-new-shadow": "index_xt-new-shadow__aZZJ9",
            "hidden-mobile": "index_hidden-mobile__QiF8H",
            "contact-us-modal-container": "index_contact-us-modal-container__Hp_DM",
            "atom-modal-body": "index_atom-modal-body__oLEBr",
            "atom-select-item-option": "index_atom-select-item-option__lJoRI",
            "font-size-12": "index_font-size-12__gFM_i",
            "font-size-14": "index_font-size-14__V4Mql",
            "font-size-16": "index_font-size-16__1jxbk",
            "font-size-20": "index_font-size-20__M9wcY",
            "font-size-24": "index_font-size-24__4_s4y",
            "font-size-28": "index_font-size-28__znuNy",
            "font-size-32": "index_font-size-32__R1EW1",
            "font-size-36": "index_font-size-36__PvtLC",
            "font-size-40": "index_font-size-40__egMK6",
            "font-size-48": "index_font-size-48__cxUo7",
            "font-size-52": "index_font-size-52__OqtrY",
            "font-size-56": "index_font-size-56__tvzr2",
            "font-size-64": "index_font-size-64__7jTuV",
            "flex-center": "index_flex-center__Oz7qO",
            "flex-between": "index_flex-between__H_u2G",
            ellipsis: "index_ellipsis___vQ_y",
            "unset-ellipsis": "index_unset-ellipsis___p3Nn",
            nowrap: "index_nowrap__gMIsB",
            "fixed-absolute-width": "index_fixed-absolute-width__TdWoz",
            "about-us-month": "index_about-us-month__Lrpux",
            "fill-image": "index_fill-image__RQVzQ",
            hidden: "index_hidden__7vy9N",
            "safe-bottom": "index_safe-bottom__wAh_P",
            "mobile-inner-button": "index_mobile-inner-button__rOo52",
            "mobile-button": "index_mobile-button__YzsGQ",
            "max-2-line": "index_max-2-line__IAmg8",
            "xt-image": "index_xt-image__BsWFE",
            "xt-shadow": "index_xt-shadow__wTTsP",
            "xt-row": "index_xt-row__fHABZ",
            "xt-h1": "index_xt-h1__DO1Rc",
            "xt-h2": "index_xt-h2__53JvO",
            "xt-h3": "index_xt-h3__sGGEO",
            "xt-h4": "index_xt-h4__HGMvl",
            "xt-h5": "index_xt-h5__qgVnj",
            "xt-text": "index_xt-text__EDFim",
            "mobileInput-clear": "index_mobileInput-clear__RNKhT",
            "exchange-carousel-root": "index_exchange-carousel-root__By9IK",
            inner: "index_inner__uBZGO",
            carousel: "index_carousel__Gi9C4",
            desc: "index_desc__HUKHW",
            button: "index_button__ceX7X",
            part: "index_part__9HIBV",
            content: "index_content__nj69p",
            left: "index_left__ejWyU",
            value: "index_value__mHD_2",
            input: "index_input__j0rI0",
            icon: "index_icon__UO05o"
        }
    }, 71928: function (e) {
        e.exports = {
            sectionWrapper: "index_sectionWrapper__RE500",
            headBannerWrapper: "index_headBannerWrapper__9__iF",
            left: "index_left__jxl4B",
            conspicuous: "index_conspicuous__2CT65",
            title: "index_title__PogqX",
            smallTitle: "index_smallTitle__lGMeC",
            desc: "index_desc__Yp31p",
            iconWrapper: "index_iconWrapper__ai0X6",
            icon: "index_icon__EVd8U",
            descLarge: "index_descLarge__Yv9tc",
            buttonsWrapper: "index_buttonsWrapper__y9yiK",
            right: "index_right__crzEw",
            rightAsHeader: "index_rightAsHeader__a6VwA",
            expand: "index_expand__IRzDn",
            reverse: "index_reverse__qOBp_",
            button: "index_button__gGtnf"
        }
    }, 35426: function (e) {
        e.exports = {
            sectionWrapper: "index_sectionWrapper__cM_IG",
            slideCardWrapper: "index_slideCardWrapper__8at_N",
            left: "index_left__g8vcV",
            smallTitle: "index_smallTitle__tvoo5",
            desc: "index_desc__p39PR",
            iconWrapper: "index_iconWrapper__4INKs",
            icon: "index_icon__73ApE",
            buttonsWrapper: "index_buttonsWrapper__EzNQB",
            right: "index_right__R0yiu",
            image: "index_image__F8u4Z",
            button: "index_button__HTuIO"
        }
    }, 1194: function (e) {
        e.exports = {
            container: "index_container__YHhS1",
            paginationContainer: "index_paginationContainer__1qUI_",
            left: "index_left__c_mfE",
            right: "index_right___cigo",
            pageNums: "index_pageNums__7pfJR",
            pageItem: "index_pageItem__71SOs",
            pageItemInner: "index_pageItemInner__wQGnm",
            active: "index_active__qSxec",
            slideItemCard: "index_slideItemCard__FqeZ_"
        }
    }, 94065: function (e) {
        e.exports = {
            wrapper: "index_wrapper__nFqdy",
            container: "index_container__erS_7",
            title: "index_title__Z9x_6",
            subTitle: "index_subTitle__IlR_X",
            advantages: "index_advantages__YDuPf",
            advantageWrapper: "index_advantageWrapper___hayo",
            firstLine: "index_firstLine__KQppe",
            secondLine: "index_secondLine__krlY5"
        }
    }, 11761: function (e) {
        e.exports = {
            exchangeTool: "index_exchangeTool__KiwGD",
            left: "index_left__WSrD1",
            title: "index_title__AeIeR",
            desc: "index_desc__XnkKv",
            button: "index_button__5CwfK",
            right: "index_right__k0tu4"
        }
    }, 26607: function (e) {
        e.exports = {
            wrapper: "index_wrapper__B6sHM",
            container: "index_container__WWpAW",
            title: "index_title__KS1A4",
            partners: "index_partners__wLyqQ",
            bankLogoWrapper: "index_bankLogoWrapper__3qC3Y"
        }
    }, 39379: function (e) {
        e.exports = {
            container: "index_container__GpgKs",
            title: "index_title__y__JL",
            services: "index_services__b1GBg",
            firstLine: "index_firstLine__e7L7D",
            serviceItem: "index_serviceItem__Y9wWA",
            secondLine: "index_secondLine__1QKn7"
        }
    // }, 83820: function (e) {
    //     e.exports = {contactBtn: "index_contactBtn__pwO1o"}
    }, 72791: function (e) {
        e.exports = {
            wrapper: "index_wrapper__3DyvU",
            slideItem: "index_slideItem__KCWvs",
            "swiper-slide-shadow": "index_swiper-slide-shadow__s3it6",
            sectionWrapper: "index_sectionWrapper__KMlB3",
            controller: "index_controller__8afSY",
            buttonsWrapper: "index_buttonsWrapper__66F7e",
            toLeft: "index_toLeft__keeYJ",
            toRight: "index_toRight__KzqlC",
            btnDisabled: "index_btnDisabled__rWUvs",
            customers: "index_customers__ZPqkM",
            swiper: "index_swiper___hqnW",
            customer: "index_customer__Yy3H3",
            thinking: "index_thinking__BFx2t",
            name: "index_name__nzUxU",
            position: "index_position__WmjpC"
        }
    }, 7854: function (e) {
        e.exports = {
            serviceCardWrapper: "index_serviceCardWrapper__pAFe2",
            contentWrapper: "index_contentWrapper__luZD1",
            button: "index_button__kqJzM",
            image: "index_image__bj4f6",
            normalPicture: "index_normalPicture__sx43H",
            hoverPicture: "index_hoverPicture__CSb0X",
            cardTitle: "index_cardTitle__Et9DJ",
            content: "index_content__FG_hR"
        }
    }, 34070: function (e) {
        e.exports = {wrapper: "index_wrapper__nWaZA", image: "index_image__ip0xy", video: "index_video__qZHHo"}
    }, 22001: function (e) {
        e.exports = {
            wrapper: "mobile_wrapper__cd1za",
            titleWrapper: "mobile_titleWrapper__pkWx_",
            customCard: "mobile_customCard___f_jm",
            customer: "mobile_customer__YdrSW",
            thinking: "mobile_thinking__zOe4j",
            name: "mobile_name__cRU_T",
            position: "mobile_position__wTfeV"
        }
    }, 58875: function (e) {
        e.exports = {
            wrapper: "web_wrapper__pg_l_",
            controller: "web_controller__LGERY",
            buttonsWrapper: "web_buttonsWrapper__k6kF0",
            toLeft: "web_toLeft__THXG7",
            toRight: "web_toRight__d6q9Z",
            customers: "web_customers__Sw9v0",
            cardWrapper: "web_cardWrapper__Dtk9j",
            customer: "web_customer__IzTuN",
            thinking: "web_thinking__TGOii",
            name: "web_name__2VsIe",
            position: "web_position__UqZq0"
        }
    }, 47243: function (e) {
        e.exports = {
            container: "index_container__V9rna",
            xtCardWrapper: "index_xtCardWrapper__TVHen",
            cardPlaceHolder: "index_cardPlaceHolder__oUKA_",
            cardLogo: "index_cardLogo__C9zqO",
            xtCard: "index_xtCard__t7j5x",
            contentWrapper: "index_contentWrapper__erHiH",
            text: "index_text__FN5pE",
            buttonsWrapper: "index_buttonsWrapper__Yc5uJ",
            contactUs: "index_contactUs__dc3BR",
            signUp: "index_signUp__ycthP",
            coin: "index_coin__maHqs",
            topleft: "index_topleft__mAeFG",
            topright: "index_topright__zsuKN",
            bottomleft: "index_bottomleft__TiRRJ",
            bottomright: "index_bottomright__BZM2g",
            btn: "index_btn__dumgk"
        }
    }
}]);
//# sourceMappingURL=4391-c225a5dbd5a62c72.js.map