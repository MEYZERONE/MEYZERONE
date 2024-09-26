(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[6342], {
    29208: function (t, e, n) {
        var r, o = "__lodash_hash_undefined__", a = 1 / 0, c = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            i = /^\w*$/, s = /^\./,
            u = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            l = /\\(\\)?/g, p = /^\[object .+?Constructor\]$/,
            f = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
            h = "object" == typeof self && self && self.Object === Object && self,
            d = f || h || Function("return this")(), y = Array.prototype, v = Function.prototype, m = Object.prototype,
            g = d["__core-js_shared__"],
            w = (r = /[^.]+$/.exec(g && g.keys && g.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "", _ = v.toString,
            b = m.hasOwnProperty, k = m.toString,
            x = RegExp("^" + _.call(b).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            E = d.Symbol, S = y.splice, C = N(d, "Map"), I = N(Object, "create"), O = E ? E.prototype : void 0,
            j = O ? O.toString : void 0;

        function P(t) {
            var e = -1, n = t ? t.length : 0;
            for (this.clear(); ++e < n;) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }

        function R(t) {
            var e = -1, n = t ? t.length : 0;
            for (this.clear(); ++e < n;) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }

        function A(t) {
            var e = -1, n = t ? t.length : 0;
            for (this.clear(); ++e < n;) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }

        function L(t, e) {
            for (var n, r = t.length; r--;) if ((n = t[r][0]) === e || n != n && e != e) return r;
            return -1
        }

        function T(t, e) {
            var n, r = t.__data__;
            return ("string" == (n = typeof e) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== e : null === e) ? r["string" == typeof e ? "string" : "hash"] : r.map
        }

        function N(t, e) {
            var n, r = null == t ? void 0 : t[e];
            return !(!B(r) || w && w in r) && ("[object Function]" == (n = B(r) ? k.call(r) : "") || "[object GeneratorFunction]" == n || function (t) {
                var e = !1;
                if (null != t && "function" != typeof t.toString) try {
                    e = !!(t + "")
                } catch (t) {
                }
                return e
            }(r) ? x : p).test(function (t) {
                if (null != t) {
                    try {
                        return _.call(t)
                    } catch (t) {
                    }
                    try {
                        return t + ""
                    } catch (t) {
                    }
                }
                return ""
            }(r)) ? r : void 0
        }

        P.prototype.clear = function () {
            this.__data__ = I ? I(null) : {}
        }, P.prototype.delete = function (t) {
            return this.has(t) && delete this.__data__[t]
        }, P.prototype.get = function (t) {
            var e = this.__data__;
            if (I) {
                var n = e[t];
                return n === o ? void 0 : n
            }
            return b.call(e, t) ? e[t] : void 0
        }, P.prototype.has = function (t) {
            var e = this.__data__;
            return I ? void 0 !== e[t] : b.call(e, t)
        }, P.prototype.set = function (t, e) {
            return this.__data__[t] = I && void 0 === e ? o : e, this
        }, R.prototype.clear = function () {
            this.__data__ = []
        }, R.prototype.delete = function (t) {
            var e = this.__data__, n = L(e, t);
            return !(n < 0) && (n == e.length - 1 ? e.pop() : S.call(e, n, 1), !0)
        }, R.prototype.get = function (t) {
            var e = this.__data__, n = L(e, t);
            return n < 0 ? void 0 : e[n][1]
        }, R.prototype.has = function (t) {
            return L(this.__data__, t) > -1
        }, R.prototype.set = function (t, e) {
            var n = this.__data__, r = L(n, t);
            return r < 0 ? n.push([t, e]) : n[r][1] = e, this
        }, A.prototype.clear = function () {
            this.__data__ = {hash: new P, map: new (C || R), string: new P}
        }, A.prototype.delete = function (t) {
            return T(this, t).delete(t)
        }, A.prototype.get = function (t) {
            return T(this, t).get(t)
        }, A.prototype.has = function (t) {
            return T(this, t).has(t)
        }, A.prototype.set = function (t, e) {
            return T(this, t).set(t, e), this
        };
        var U = F(function (t) {
            t = null == (e = t) ? "" : function (t) {
                if ("string" == typeof t) return t;
                if (M(t)) return j ? j.call(t) : "";
                var e = t + "";
                return "0" == e && 1 / t == -a ? "-0" : e
            }(e);
            var e, n = [];
            return s.test(t) && n.push(""), t.replace(u, function (t, e, r, o) {
                n.push(r ? o.replace(l, "$1") : e || t)
            }), n
        });

        function F(t, e) {
            if ("function" != typeof t || e && "function" != typeof e) throw TypeError("Expected a function");
            var n = function () {
                var r = arguments, o = e ? e.apply(this, r) : r[0], a = n.cache;
                if (a.has(o)) return a.get(o);
                var c = t.apply(this, r);
                return n.cache = a.set(o, c), c
            };
            return n.cache = new (F.Cache || A), n
        }

        F.Cache = A;
        var q = Array.isArray;

        function B(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }

        function M(t) {
            return "symbol" == typeof t || !!t && "object" == typeof t && "[object Symbol]" == k.call(t)
        }

        t.exports = function (t, e, n) {
            var r = null == t ? void 0 : function (t, e) {
                var n;
                e = !function (t, e) {
                    if (q(t)) return !1;
                    var n = typeof t;
                    return !!("number" == n || "symbol" == n || "boolean" == n || null == t || M(t)) || i.test(t) || !c.test(t) || null != e && t in Object(e)
                }(e, t) ? q(n = e) ? n : U(n) : [e];
                for (var r = 0, o = e.length; null != t && r < o;) t = t[function (t) {
                    if ("string" == typeof t || M(t)) return t;
                    var e = t + "";
                    return "0" == e && 1 / t == -a ? "-0" : e
                }(e[r++])];
                return r && r == o ? t : void 0
            }(t, e);
            return void 0 === r ? n : r
        }
    }, 57129: function (t, e) {
        "use strict";
        var n, r = Object.prototype.hasOwnProperty;

        function o(t) {
            try {
                return decodeURIComponent(t.replace(/\+/g, " "))
            } catch (t) {
                return null
            }
        }

        function a(t) {
            try {
                return encodeURIComponent(t)
            } catch (t) {
                return null
            }
        }

        e.stringify = function (t, e) {
            var o, c, i = [];
            for (c in "string" != typeof (e = e || "") && (e = "?"), t) if (r.call(t, c)) {
                if (!(o = t[c]) && (null === o || o === n || isNaN(o)) && (o = ""), c = a(c), o = a(o), null === c || null === o) continue;
                i.push(c + "=" + o)
            }
            return i.length ? e + i.join("&") : ""
        }, e.parse = function (t) {
            for (var e, n = /([^=?#&]+)=?([^&]*)/g, r = {}; e = n.exec(t);) {
                var a = o(e[1]), c = o(e[2]);
                null === a || null === c || a in r || (r[a] = c)
            }
            return r
        }
    }, 47418: function (t) {
        "use strict";
        t.exports = function (t, e) {
            if (e = e.split(":")[0], !(t = +t)) return !1;
            switch (e) {
                case"http":
                case"ws":
                    return 80 !== t;
                case"https":
                case"wss":
                    return 443 !== t;
                case"ftp":
                    return 21 !== t;
                case"gopher":
                    return 70 !== t;
                case"file":
                    return !1
            }
            return 0 !== t
        }
    }, 84564: function (t, e, n) {
        "use strict";
        var r = n(47418), o = n(57129),
            a = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/, c = /[\n\r\t]/g,
            i = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, s = /:\d+$/, u = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
            l = /^[a-zA-Z]:/;

        function p(t) {
            return (t || "").toString().replace(a, "")
        }

        var f = [["#", "hash"], ["?", "query"], function (t, e) {
                return y(e.protocol) ? t.replace(/\\/g, "/") : t
            }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d*)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]],
            h = {hash: 1, query: 1};

        function d(t) {
            var e,
                r = ("undefined" != typeof window ? window : void 0 !== n.g ? n.g : "undefined" != typeof self ? self : {}).location || {},
                o = {}, a = typeof (t = t || r);
            if ("blob:" === t.protocol) o = new m(unescape(t.pathname), {}); else if ("string" === a) for (e in o = new m(t, {}), h) delete o[e]; else if ("object" === a) {
                for (e in t) e in h || (o[e] = t[e]);
                void 0 === o.slashes && (o.slashes = i.test(t.href))
            }
            return o
        }

        function y(t) {
            return "file:" === t || "ftp:" === t || "http:" === t || "https:" === t || "ws:" === t || "wss:" === t
        }

        function v(t, e) {
            t = (t = p(t)).replace(c, ""), e = e || {};
            var n, r = u.exec(t), o = r[1] ? r[1].toLowerCase() : "", a = !!r[2], i = !!r[3], s = 0;
            return a ? i ? (n = r[2] + r[3] + r[4], s = r[2].length + r[3].length) : (n = r[2] + r[4], s = r[2].length) : i ? (n = r[3] + r[4], s = r[3].length) : n = r[4], "file:" === o ? s >= 2 && (n = n.slice(2)) : y(o) ? n = r[4] : o ? a && (n = n.slice(2)) : s >= 2 && y(e.protocol) && (n = r[4]), {
                protocol: o,
                slashes: a || y(o),
                slashesCount: s,
                rest: n
            }
        }

        function m(t, e, n) {
            if (t = (t = p(t)).replace(c, ""), !(this instanceof m)) return new m(t, e, n);
            var a, i, s, u, h, g, w = f.slice(), _ = typeof e, b = this, k = 0;
            for ("object" !== _ && "string" !== _ && (n = e, e = null), n && "function" != typeof n && (n = o.parse), e = d(e), a = !(i = v(t || "", e)).protocol && !i.slashes, b.slashes = i.slashes || a && e.slashes, b.protocol = i.protocol || e.protocol || "", t = i.rest, ("file:" === i.protocol && (2 !== i.slashesCount || l.test(t)) || !i.slashes && (i.protocol || i.slashesCount < 2 || !y(b.protocol))) && (w[3] = [/(.*)/, "pathname"]); k < w.length; k++) {
                if ("function" == typeof (u = w[k])) {
                    t = u(t, b);
                    continue
                }
                s = u[0], g = u[1], s != s ? b[g] = t : "string" == typeof s ? ~(h = "@" === s ? t.lastIndexOf(s) : t.indexOf(s)) && ("number" == typeof u[2] ? (b[g] = t.slice(0, h), t = t.slice(h + u[2])) : (b[g] = t.slice(h), t = t.slice(0, h))) : (h = s.exec(t)) && (b[g] = h[1], t = t.slice(0, h.index)), b[g] = b[g] || a && u[3] && e[g] || "", u[4] && (b[g] = b[g].toLowerCase())
            }
            n && (b.query = n(b.query)), a && e.slashes && "/" !== b.pathname.charAt(0) && ("" !== b.pathname || "" !== e.pathname) && (b.pathname = function (t, e) {
                if ("" === t) return e;
                for (var n = (e || "/").split("/").slice(0, -1).concat(t.split("/")), r = n.length, o = n[r - 1], a = !1, c = 0; r--;) "." === n[r] ? n.splice(r, 1) : ".." === n[r] ? (n.splice(r, 1), c++) : c && (0 === r && (a = !0), n.splice(r, 1), c--);
                return a && n.unshift(""), ("." === o || ".." === o) && n.push(""), n.join("/")
            }(b.pathname, e.pathname)), "/" !== b.pathname.charAt(0) && y(b.protocol) && (b.pathname = "/" + b.pathname), r(b.port, b.protocol) || (b.host = b.hostname, b.port = ""), b.username = b.password = "", b.auth && (~(h = b.auth.indexOf(":")) ? (b.username = b.auth.slice(0, h), b.username = encodeURIComponent(decodeURIComponent(b.username)), b.password = b.auth.slice(h + 1), b.password = encodeURIComponent(decodeURIComponent(b.password))) : b.username = encodeURIComponent(decodeURIComponent(b.auth)), b.auth = b.password ? b.username + ":" + b.password : b.username), b.origin = "file:" !== b.protocol && y(b.protocol) && b.host ? b.protocol + "//" + b.host : "null", b.href = b.toString()
        }

        m.prototype = {
            set: function (t, e, n) {
                var a = this;
                switch (t) {
                    case"query":
                        "string" == typeof e && e.length && (e = (n || o.parse)(e)), a[t] = e;
                        break;
                    case"port":
                        a[t] = e, r(e, a.protocol) ? e && (a.host = a.hostname + ":" + e) : (a.host = a.hostname, a[t] = "");
                        break;
                    case"hostname":
                        a[t] = e, a.port && (e += ":" + a.port), a.host = e;
                        break;
                    case"host":
                        a[t] = e, s.test(e) ? (e = e.split(":"), a.port = e.pop(), a.hostname = e.join(":")) : (a.hostname = e, a.port = "");
                        break;
                    case"protocol":
                        a.protocol = e.toLowerCase(), a.slashes = !n;
                        break;
                    case"pathname":
                    case"hash":
                        if (e) {
                            var c = "pathname" === t ? "/" : "#";
                            a[t] = e.charAt(0) !== c ? c + e : e
                        } else a[t] = e;
                        break;
                    case"username":
                    case"password":
                        a[t] = encodeURIComponent(e);
                        break;
                    case"auth":
                        var i = e.indexOf(":");
                        ~i ? (a.username = e.slice(0, i), a.username = encodeURIComponent(decodeURIComponent(a.username)), a.password = e.slice(i + 1), a.password = encodeURIComponent(decodeURIComponent(a.password))) : a.username = encodeURIComponent(decodeURIComponent(e))
                }
                for (var u = 0; u < f.length; u++) {
                    var l = f[u];
                    l[4] && (a[l[1]] = a[l[1]].toLowerCase())
                }
                return a.auth = a.password ? a.username + ":" + a.password : a.username, a.origin = "file:" !== a.protocol && y(a.protocol) && a.host ? a.protocol + "//" + a.host : "null", a.href = a.toString(), a
            }, toString: function (t) {
                t && "function" == typeof t || (t = o.stringify);
                var e, n = this.host, r = this.protocol;
                r && ":" !== r.charAt(r.length - 1) && (r += ":");
                var a = r + (this.protocol && this.slashes || y(this.protocol) ? "//" : "");
                return this.username ? (a += this.username, this.password && (a += ":" + this.password), a += "@") : this.password ? a += ":" + this.password + "@" : "file:" !== this.protocol && y(this.protocol) && !n && "/" !== this.pathname && (a += "@"), (":" === n[n.length - 1] || s.test(this.hostname) && !this.port) && (n += ":"), a += n + this.pathname, (e = "object" == typeof this.query ? t(this.query) : this.query) && (a += "?" !== e.charAt(0) ? "?" + e : e), this.hash && (a += this.hash), a
            }
        }, m.extractProtocol = v, m.location = d, m.trimLeft = p, m.qs = o, t.exports = m
    }, 56342: function (t, e, n) {
        "use strict";
        n.d(e, {
            gT: function () {
                return d
            }, jM: function () {
                return P
            }, eX: function () {
                return E
            }, LR: function () {
                return x
            }, zk: function () {
                return N
            }
        });
        var r, o, a, c, i, s, u, l, p, f, h, d = {};
        n.r(d), n.d(d, {
            A: function () {
                return B
            }
        });
        var y = n(83454), v = "undefined" != typeof window && void 0 !== window.navigator;
        v && /MicroMessenger/i.test(window.navigator.userAgent), v && /miniprogram/i.test(window.navigator.userAgent), void 0 !== y && null != y.versions && y.versions.node;
        var m = v && /iPhone|iPad|iPod/i.test(window.navigator.userAgent),
            g = v && /Android/i.test(window.navigator.userAgent), w = v && /Firefox/i.test(window.navigator.userAgent),
            _ = v && /Chrome/i.test(window.navigator.userAgent), b = v && g && w, k = v && g && _, x = function (t, e) {
                m ? window.location.replace("https://apps.apple.com/cn/app/id".concat(t.ios.appStoreId)) : g && e ? window.location.href = "https://play.google.com/store/apps/details?id=".concat(t.android.googlePlayAppId) : t.android.getDownloadUrl().then(function (t) {
                    var e = t.url, n = t.name, r = document.createElement("a");
                    r.href = e, r.download = n, r.dispatchEvent(new MouseEvent("click"))
                })
            }, E = function (t, e, n) {
                var r = new URL(window.location.href), o = r.searchParams.get("__xt_call_app"),
                    a = r.searchParams.get("__xt_from_fallback");
                if (!n && a) x(t, e); else {
                    var c = o || t.defaultTargetLink;
                    c && j({appInfo: t, targetLink: c, isOversea: e})
                }
            }, S = n(84564), C = function (t, e) {
                var n = t.urlSchemaPrefix,
                    r = S("".concat(n, "/").concat("v1", "/").concat(e.bundleName, "/").concat(e.moduleName, "/").concat(e.pageName));
                return r.query = e.params, r.toString()
            }, I = "__xt_callapp_link", O = function (t) {
                if (m || b || k) {
                    var e = document.getElementById(I);
                    null == e && ((e = document.createElement("a")).id = I, e.style.display = "none", document.body.appendChild(e)), e && (e.setAttribute("href", t), e.click())
                } else {
                    var n = document.getElementById(I);
                    null == n && ((n = document.createElement("iframe")).id = I, n.style.cssText = "display:none;border:0;width:0;height:0;", document.body.append(n)), n.src = t
                }
            }, j = function (t) {
                var e, n, r, o = t.appInfo, a = t.targetLink, c = t.fallbackUrl, i = t.isOversea, s = t.utmSource,
                    u = t.onFailed, l = t.onSuccess;
                O(a), e = function () {
                    ("function" == typeof u && u(), g && i) ? x(o, !0) : c && (window.location.href = "".concat(c).concat(c.includes("?") ? "&" : "?").concat(new URLSearchParams({
                        __xt_call_app: a,
                        __xt_from_fallback: 1,
                        utm_source: s
                    }).toString()))
                }, n = function () {
                    clearTimeout(r), "function" == typeof l && l(), document.removeEventListener("visibilitychange", n)
                }, r = setTimeout(function () {
                    "hidden" !== document.visibilityState && (e(), document.removeEventListener("visibilitychange", n))
                }, 3e3), document.addEventListener("visibilitychange", n)
            }, P = function (t) {
                var e = t.appInfo, n = t.bundleName, r = t.moduleName, o = t.pageName, a = t.params, c = t.isOversea,
                    i = t.fallbackUrl, s = t.utmSource, u = t.onFailed, l = t.onSuccess,
                    p = new URLSearchParams(window.location.search).get("__call_app");
                if (p) try {
                    var f = JSON.parse(p);
                    n = f.bundleName || n, r = f.moduleName || r, o = f.pageName || o, a = Object.assign({}, a, f.params)
                } catch (t) {
                }
                var h = null;
                if (!(h = n && r && o ? C(e, {
                    bundleName: n,
                    moduleName: r,
                    pageName: o,
                    params: a
                }) : e.defaultTargetLink)) throw Error("拉端链接生成失败: bundleName=".concat(n, ", moduleName=").concat(r, ", pageName=").concat(o, ", defaultTargetLink=").concat(e.defaultTargetLink));
                j({appInfo: e, targetLink: h, fallbackUrl: i, isOversea: c, utmSource: s, onFailed: u, onSuccess: l})
            }, R = n(37667);
        (r = f || (f = {}))[r.READY = 0] = "READY", r[r.FAILED = 1] = "FAILED";
        var A = function (t, e) {
            var n, r, o, a, c = {
                label: 0, sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                }, trys: [], ops: []
            };
            return a = {
                next: i(0),
                throw: i(1),
                return: i(2)
            }, "function" == typeof Symbol && (a[Symbol.iterator] = function () {
                return this
            }), a;

            function i(i) {
                return function (s) {
                    return function (i) {
                        if (n) throw TypeError("Generator is already executing.");
                        for (; a && (a = 0, i[0] && (c = 0)), c;) try {
                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return c.label++, {value: i[1], done: !1};
                                case 5:
                                    c.label++, r = i[1], i = [0];
                                    continue;
                                case 7:
                                    i = c.ops.pop(), c.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = c.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        c = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        c.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && c.label < o[1]) {
                                        c.label = o[1], o = i;
                                        break
                                    }
                                    if (o && c.label < o[2]) {
                                        c.label = o[2], c.ops.push(i);
                                        break
                                    }
                                    o[2] && c.ops.pop(), c.trys.pop();
                                    continue
                            }
                            i = e.call(t, c)
                        } catch (t) {
                            i = [6, t], r = 0
                        } finally {
                            n = o = 0
                        }
                        if (5 & i[0]) throw i[1];
                        return {value: i[0] ? i[1] : void 0, done: !0}
                    }([i, s])
                }
            }
        }, L = function () {
        }, T = {info: L, warn: L, error: L}, N = new (function () {
            function t() {
                this.logger = T, v && (this.XTMonitor = window.XTMonitor), this.XTMonitor && this.XTMonitor.logger && (this.logger = this.XTMonitor.logger)
            }

            return t.prototype.callOrByPass = function (t, e) {
                return this.XTMonitor ? this.callFromGlobal(t, e) : (console.warn("未正确引入监控脚本，忽略 ".concat(t, " 方法调用")), e)
            }, t.prototype.callFromGlobal = function (t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                var r = this.XTMonitor;
                if (r && "function" == typeof r[t]) return r[t].apply(r, e);
                console.warn("未正确引入监控脚本，忽略 ".concat(t, " 方法调用"))
            }, t.prototype.init = function (t) {
                this.callFromGlobal("init", t)
            }, t.prototype.initAsync = function (t) {
                var e, n, r, o;
                return e = this, n = void 0, r = void 0, o = function () {
                    return A(this, function (e) {
                        return [2, this.init(t)]
                    })
                }, new (r || (r = Promise))(function (t, a) {
                    function c(t) {
                        try {
                            s(o.next(t))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function i(t) {
                        try {
                            s(o.throw(t))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function s(e) {
                        var n;
                        e.done ? t(e.value) : ((n = e.value) instanceof r ? n : new r(function (t) {
                            t(n)
                        })).then(c, i)
                    }

                    s((o = o.apply(e, n || [])).next())
                })
            }, t.prototype.wrapLifeCycles = function (t) {
                return this.callOrByPass("wrapLifeCycles", t)
            }, t.prototype.setTag = function (t, e) {
                this.callFromGlobal("setTag", t, e)
            }, t.prototype.setTags = function (t) {
                this.callFromGlobal("setTags", t)
            }, t.prototype.captureException = function (t, e) {
                this.callFromGlobal("captureException", t, e)
            }, t.prototype.withScope = function (t) {
                return this.callFromGlobal("withScope", t)
            }, t
        }());
        n(29208), Object.prototype.toString;
        var U = "	\n\f\r ";
        RegExp("[".concat(U, "]+")), RegExp("^[".concat(U, "]+")), RegExp("[".concat(U, "]+$")), n(84564);
        var F = function (t, e) {
            var n, r, o, a, c = {
                label: 0, sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                }, trys: [], ops: []
            };
            return a = {
                next: i(0),
                throw: i(1),
                return: i(2)
            }, "function" == typeof Symbol && (a[Symbol.iterator] = function () {
                return this
            }), a;

            function i(i) {
                return function (s) {
                    return function (i) {
                        if (n) throw TypeError("Generator is already executing.");
                        for (; a && (a = 0, i[0] && (c = 0)), c;) try {
                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return c.label++, {value: i[1], done: !1};
                                case 5:
                                    c.label++, r = i[1], i = [0];
                                    continue;
                                case 7:
                                    i = c.ops.pop(), c.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = c.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        c = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        c.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && c.label < o[1]) {
                                        c.label = o[1], o = i;
                                        break
                                    }
                                    if (o && c.label < o[2]) {
                                        c.label = o[2], c.ops.push(i);
                                        break
                                    }
                                    o[2] && c.ops.pop(), c.trys.pop();
                                    continue
                            }
                            i = e.call(t, c)
                        } catch (t) {
                            i = [6, t], r = 0
                        } finally {
                            n = o = 0
                        }
                        if (5 & i[0]) throw i[1];
                        return {value: i[0] ? i[1] : void 0, done: !0}
                    }([i, s])
                }
            }
        }, q = "3.2.10", B = {
            urlSchemaPrefix: "xtransfer://xtransfer",
            defaultTargetLink: "xtransfer://xtransfer/home",
            ios: {appStoreId: "1463736500", wechatAppId: "wx30036d8bd2684191"},
            android: {
                getDownloadUrl: function () {
                    var t, e, n, r;
                    return t = void 0, e = void 0, n = void 0, r = function () {
                        var t;
                        return F(this, function (e) {
                            return t = "XTransfer_v".concat(q.split(".").join("_"), ".apk"), [2, {
                                url: "//cdn-cn3.xtransfer.cn/apks/".concat(q, "/").concat(t),
                                name: t
                            }]
                        })
                    }, new (n || (n = Promise))(function (o, a) {
                        function c(t) {
                            try {
                                s(r.next(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function i(t) {
                            try {
                                s(r.throw(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function s(t) {
                            var e;
                            t.done ? o(t.value) : ((e = t.value) instanceof n ? e : new n(function (t) {
                                t(e)
                            })).then(c, i)
                        }

                        s((r = r.apply(t, e || [])).next())
                    })
                }, googlePlayAppId: "com.xtapp.xtransfer", wechatAppId: "wx30036d8bd2684191"
            }
        }, M = (o = function (t, e) {
            return (o = Object.setPrototypeOf || ({__proto__: []}) instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            })(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        (a = h || (h = {})).P1 = "P1", a.P2 = "P2", a.P3 = "P3";
        var $ = function (t) {
            function e(e, n) {
                var r = t.call(this, e) || this, o = null == n ? void 0 : n.cause;
                return !o || o instanceof Error || (r.extra = {notStandardError: o}, o = Error("非标准Error，详情见 Additional Data 下的 notStandardError 信息")), r.cause = o, Error.captureStackTrace ? Error.captureStackTrace(r, r.constructor) : r.stack = Error(e).stack, r
            }

            return M(e, t), e
        }(Error);
        M(function (t, e, n, r) {
            var o = this;
            return "object" != typeof e && (e = {
                level: e,
                bizCode: n,
                cause: r
            }), (o = c.call(this, t, e) || this).name = "BizError", o.errorLevel = e.level, o.bizCode = e.bizCode, o
        }, c = $), M(function (t, e) {
            void 0 === e && (e = {});
            var n = i.call(this, t, {cause: e.cause}) || this;
            return n.errorLevel = h.P2, n.name = "NotFoundError", n.errorLevel = e.level || h.P2, n
        }, i = $), M(function (t) {
            var e = s.call(this, t && t.message || "未知错误") || this;
            return e.errorLevel = h.P1, e.name = "UnexpectedError", e.mechanism = {
                type: "manual_unexpected_error",
                handled: !1
            }, t instanceof Error ? e.stack = t.stack : Error.captureStackTrace && Error.captureStackTrace(e, e.constructor), e
        }, s = $), M(function (t, e) {
            void 0 === e && (e = {});
            var n = this, r = e.type, o = e.status, a = e.message, c = e.requestBody, i = e.responseBody, s = e.xhr,
                l = e.fetchRequest, p = e.fetchResponse, f = e.traceId,
                d = ["Request Error: ".concat(t), o ? "status ".concat(o) : "", a ? "message ".concat(a) : ""].filter(Boolean).join(", ");
            return (n = u.call(this, d, {cause: e.cause}) || this).errorLevel = h.P2, n.name = "NetworkError", n.url = null, n.status = null, n.requestBody = null, n.responseBody = null, n.url = t, n.type = null != r ? r : null, n.status = null != o ? o : null, n.requestBody = null != c ? c : null, n.responseBody = null != i ? i : null, n.xhr = null != s ? s : null, n.fetchRequest = null != l ? l : null, n.fetchResponse = null != p ? p : null, n.traceId = null != f ? f : null, n
        }, u = $), M(function (t, e) {
            var n = l.call(this, "Resource load error, type: ".concat(e, " url: ").concat(t)) || this;
            return n.errorLevel = h.P3, n.name = "ResourceLoadingError", n.type = null, n.url = null, n.url = t, n.type = e, n
        }, l = $);
        var z = function (t) {
            function e(e, n) {
                var r = t.call(this, "render error: ".concat(e), {cause: null == n ? void 0 : n.cause}) || this;
                return r.errorLevel = h.P1, r.name = "RenderError", r
            }

            return M(e, t), e
        }($);
        n(8679);
        var G = function () {
            return (G = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }).apply(this, arguments)
        }, D = (p = function (t, e) {
            return (p = Object.setPrototypeOf || ({__proto__: []}) instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            })(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            p(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }), X = {componentStack: null, error: null, eventId: null};
        !function (t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.resetErrorBoundary = function () {
                    var t = n.props.onReset, e = n.state, r = e.error, o = e.componentStack, a = e.eventId;
                    t && t(r, o, a), n.setState(X)
                }, n.state = X, n
            }

            D(e, t), e.prototype.componentDidCatch = function (t, e) {
                var n = this, r = e.componentStack, o = null == r ? void 0 : r, a = this.props, c = a.beforeCapture,
                    i = a.onError;
                N.withScope(function (a) {
                    var s, u;
                    c && c(a, t, o), s = e.componentStack, u = new z("React ErrorBoundary ".concat(t.name, ", message: ").concat(t.message), {cause: t}), s && (u.stack = s), N.captureException(u, G(G({}, {
                        mechanism: {
                            handled: !1,
                            type: "error_boundary"
                        }
                    }), {captureContext: {contexts: {react: {componentStack: s}}}})), i && i(t, o), n.setState({
                        error: t,
                        componentStack: r,
                        eventId: null
                    })
                })
            }, e.prototype.componentDidMount = function () {
                var t = this.props.onMount;
                t && t()
            }, e.prototype.componentWillUnmount = function () {
                var t = this.state, e = t.error, n = t.componentStack, r = t.eventId, o = this.props.onUnmount;
                o && o(e, n, r), this._cleanupHook && (this._cleanupHook(), this._cleanupHook = void 0)
            }, e.prototype.render = function () {
                var t = this.props, e = t.fallback, n = t.children, r = this.state;
                if (r.error) {
                    var o = void 0;
                    return (o = "function" == typeof e ? R.createElement(e, {
                        error: r.error,
                        componentStack: r.componentStack,
                        resetError: this.resetErrorBoundary,
                        eventId: r.eventId
                    }) : e, R.isValidElement(o)) ? o : (e && console.warn("fallback did not produce a valid ReactElement"), null)
                }
                return "function" == typeof n ? n() : n
            }
        }(R.Component)
    }
}]);
//# sourceMappingURL=6342-6e645b2f35b14159.js.map