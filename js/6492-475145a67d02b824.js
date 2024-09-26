"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[6492], {
    53250: function (t, e, r) {
        /**
         * @license React
         * use-sync-external-store-shim.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */var s = r(37667), n = "function" == typeof Object.is ? Object.is : function (t, e) {
            return t === e && (0 !== t || 1 / t == 1 / e) || t != t && e != e
        }, i = s.useState, u = s.useEffect, o = s.useLayoutEffect, c = s.useDebugValue;

        function l(t) {
            var e = t.getSnapshot;
            t = t.value;
            try {
                var r = e();
                return !n(t, r)
            } catch (t) {
                return !0
            }
        }

        var a = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function (t, e) {
            return e()
        } : function (t, e) {
            var r = e(), s = i({inst: {value: r, getSnapshot: e}}), n = s[0].inst, a = s[1];
            return o(function () {
                n.value = r, n.getSnapshot = e, l(n) && a({inst: n})
            }, [t, r, e]), u(function () {
                return l(n) && a({inst: n}), t(function () {
                    l(n) && a({inst: n})
                })
            }, [t]), c(r), r
        };
        e.useSyncExternalStore = void 0 !== s.useSyncExternalStore ? s.useSyncExternalStore : a
    }, 61688: function (t, e, r) {
        t.exports = r(53250)
    }, 52924: function (t, e, r) {
        r.d(e, {
            z: function () {
                return c
            }
        });
        var s = r(32161), n = r(30081), i = r(15761), u = r(33989), o = r(72379);

        class c extends u.l {
            constructor(t, e) {
                super(), this.client = t, this.options = e, this.trackedProps = new Set, this.selectError = null, this.bindMethods(), this.setOptions(e)
            }

            bindMethods() {
                this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this)
            }

            onSubscribe() {
                1 === this.listeners.length && (this.currentQuery.addObserver(this), l(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers())
            }

            onUnsubscribe() {
                this.listeners.length || this.destroy()
            }

            shouldFetchOnReconnect() {
                return a(this.currentQuery, this.options, this.options.refetchOnReconnect)
            }

            shouldFetchOnWindowFocus() {
                return a(this.currentQuery, this.options, this.options.refetchOnWindowFocus)
            }

            destroy() {
                this.listeners = [], this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this)
            }

            setOptions(t, e) {
                let r = this.options, n = this.currentQuery;
                if (this.options = this.client.defaultQueryOptions(t), (0, s.VS)(r, this.options) || this.client.getQueryCache().notify({
                    type: "observerOptionsUpdated",
                    query: this.currentQuery,
                    observer: this
                }), void 0 !== this.options.enabled && "boolean" != typeof this.options.enabled) throw Error("Expected enabled to be a boolean");
                this.options.queryKey || (this.options.queryKey = r.queryKey), this.updateQuery();
                let i = this.hasListeners();
                i && h(this.currentQuery, n, this.options, r) && this.executeFetch(), this.updateResult(e), i && (this.currentQuery !== n || this.options.enabled !== r.enabled || this.options.staleTime !== r.staleTime) && this.updateStaleTimeout();
                let u = this.computeRefetchInterval();
                i && (this.currentQuery !== n || this.options.enabled !== r.enabled || u !== this.currentRefetchInterval) && this.updateRefetchInterval(u)
            }

            getOptimisticResult(t) {
                let e = this.client.getQueryCache().build(this.client, t);
                return this.createResult(e, t)
            }

            getCurrentResult() {
                return this.currentResult
            }

            trackResult(t) {
                let e = {};
                return Object.keys(t).forEach(r => {
                    Object.defineProperty(e, r, {
                        configurable: !1,
                        enumerable: !0,
                        get: () => (this.trackedProps.add(r), t[r])
                    })
                }), e
            }

            getCurrentQuery() {
                return this.currentQuery
            }

            remove() {
                this.client.getQueryCache().remove(this.currentQuery)
            }

            refetch({refetchPage: t, ...e} = {}) {
                return this.fetch({...e, meta: {refetchPage: t}})
            }

            fetchOptimistic(t) {
                let e = this.client.defaultQueryOptions(t), r = this.client.getQueryCache().build(this.client, e);
                return r.isFetchingOptimistic = !0, r.fetch().then(() => this.createResult(r, e))
            }

            fetch(t) {
                var e;
                return this.executeFetch({
                    ...t,
                    cancelRefetch: null == (e = t.cancelRefetch) || e
                }).then(() => (this.updateResult(), this.currentResult))
            }

            executeFetch(t) {
                this.updateQuery();
                let e = this.currentQuery.fetch(this.options, t);
                return null != t && t.throwOnError || (e = e.catch(s.ZT)), e
            }

            updateStaleTimeout() {
                if (this.clearStaleTimeout(), s.sk || this.currentResult.isStale || !(0, s.PN)(this.options.staleTime)) return;
                let t = (0, s.Kp)(this.currentResult.dataUpdatedAt, this.options.staleTime);
                this.staleTimeoutId = setTimeout(() => {
                    this.currentResult.isStale || this.updateResult()
                }, t + 1)
            }

            computeRefetchInterval() {
                var t;
                return "function" == typeof this.options.refetchInterval ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : null != (t = this.options.refetchInterval) && t
            }

            updateRefetchInterval(t) {
                this.clearRefetchInterval(), this.currentRefetchInterval = t, !s.sk && !1 !== this.options.enabled && (0, s.PN)(this.currentRefetchInterval) && 0 !== this.currentRefetchInterval && (this.refetchIntervalId = setInterval(() => {
                    (this.options.refetchIntervalInBackground || i.j.isFocused()) && this.executeFetch()
                }, this.currentRefetchInterval))
            }

            updateTimers() {
                this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval())
            }

            clearStaleTimeout() {
                this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0)
            }

            clearRefetchInterval() {
                this.refetchIntervalId && (clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0)
            }

            createResult(t, e) {
                let r;
                let n = this.currentQuery, i = this.options, u = this.currentResult, c = this.currentResultState,
                    a = this.currentResultOptions, f = t !== n, p = f ? t.state : this.currentQueryInitialState,
                    y = f ? this.currentResult : this.previousQueryResult, {state: v} = t, {
                        dataUpdatedAt: R,
                        error: S,
                        errorUpdatedAt: b,
                        fetchStatus: m,
                        status: E
                    } = v, Q = !1, g = !1;
                if (e._optimisticResults) {
                    let r = this.hasListeners(), s = !r && l(t, e), u = r && h(t, n, e, i);
                    (s || u) && (m = (0, o.Kw)(t.options.networkMode) ? "fetching" : "paused", R || (E = "loading")), "isRestoring" === e._optimisticResults && (m = "idle")
                }
                if (e.keepPreviousData && !v.dataUpdatedAt && null != y && y.isSuccess && "error" !== E) r = y.data, R = y.dataUpdatedAt, E = y.status, Q = !0; else if (e.select && void 0 !== v.data) {
                    if (u && v.data === (null == c ? void 0 : c.data) && e.select === this.selectFn) r = this.selectResult; else try {
                        this.selectFn = e.select, r = e.select(v.data), r = (0, s.oE)(null == u ? void 0 : u.data, r, e), this.selectResult = r, this.selectError = null
                    } catch (t) {
                        this.selectError = t
                    }
                } else r = v.data;
                if (void 0 !== e.placeholderData && void 0 === r && "loading" === E) {
                    let t;
                    if (null != u && u.isPlaceholderData && e.placeholderData === (null == a ? void 0 : a.placeholderData)) t = u.data; else if (t = "function" == typeof e.placeholderData ? e.placeholderData() : e.placeholderData, e.select && void 0 !== t) try {
                        t = e.select(t), this.selectError = null
                    } catch (t) {
                        this.selectError = t
                    }
                    void 0 !== t && (E = "success", r = (0, s.oE)(null == u ? void 0 : u.data, t, e), g = !0)
                }
                this.selectError && (S = this.selectError, r = this.selectResult, b = Date.now(), E = "error");
                let I = "fetching" === m, C = "loading" === E, O = "error" === E, T = {
                    status: E,
                    fetchStatus: m,
                    isLoading: C,
                    isSuccess: "success" === E,
                    isError: O,
                    isInitialLoading: C && I,
                    data: r,
                    dataUpdatedAt: R,
                    error: S,
                    errorUpdatedAt: b,
                    failureCount: v.fetchFailureCount,
                    failureReason: v.fetchFailureReason,
                    errorUpdateCount: v.errorUpdateCount,
                    isFetched: v.dataUpdateCount > 0 || v.errorUpdateCount > 0,
                    isFetchedAfterMount: v.dataUpdateCount > p.dataUpdateCount || v.errorUpdateCount > p.errorUpdateCount,
                    isFetching: I,
                    isRefetching: I && !C,
                    isLoadingError: O && 0 === v.dataUpdatedAt,
                    isPaused: "paused" === m,
                    isPlaceholderData: g,
                    isPreviousData: Q,
                    isRefetchError: O && 0 !== v.dataUpdatedAt,
                    isStale: d(t, e),
                    refetch: this.refetch,
                    remove: this.remove
                };
                return T
            }

            updateResult(t) {
                let e = this.currentResult, r = this.createResult(this.currentQuery, this.options);
                if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, (0, s.VS)(r, e)) return;
                this.currentResult = r;
                let n = {cache: !0};
                (null == t ? void 0 : t.listeners) !== !1 && (() => {
                    if (!e) return !0;
                    let {notifyOnChangeProps: t} = this.options;
                    if ("all" === t || !t && !this.trackedProps.size) return !0;
                    let r = new Set(null != t ? t : this.trackedProps);
                    return this.options.useErrorBoundary && r.add("error"), Object.keys(this.currentResult).some(t => {
                        let s = this.currentResult[t] !== e[t];
                        return s && r.has(t)
                    })
                })() && (n.listeners = !0), this.notify({...n, ...t})
            }

            updateQuery() {
                let t = this.client.getQueryCache().build(this.client, this.options);
                if (t === this.currentQuery) return;
                let e = this.currentQuery;
                this.currentQuery = t, this.currentQueryInitialState = t.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (null == e || e.removeObserver(this), t.addObserver(this))
            }

            onQueryUpdate(t) {
                let e = {};
                "success" === t.type ? e.onSuccess = !t.manual : "error" !== t.type || (0, o.DV)(t.error) || (e.onError = !0), this.updateResult(e), this.hasListeners() && this.updateTimers()
            }

            notify(t) {
                n.V.batch(() => {
                    var e, r, s, n, i, u, o, c;
                    t.onSuccess ? (null == (e = (r = this.options).onSuccess) || e.call(r, this.currentResult.data), null == (s = (n = this.options).onSettled) || s.call(n, this.currentResult.data, null)) : t.onError && (null == (i = (u = this.options).onError) || i.call(u, this.currentResult.error), null == (o = (c = this.options).onSettled) || o.call(c, void 0, this.currentResult.error)), t.listeners && this.listeners.forEach(t => {
                        t(this.currentResult)
                    }), t.cache && this.client.getQueryCache().notify({
                        query: this.currentQuery,
                        type: "observerResultsUpdated"
                    })
                })
            }
        }

        function l(t, e) {
            return !1 !== e.enabled && !t.state.dataUpdatedAt && !("error" === t.state.status && !1 === e.retryOnMount) || t.state.dataUpdatedAt > 0 && a(t, e, e.refetchOnMount)
        }

        function a(t, e, r) {
            if (!1 !== e.enabled) {
                let s = "function" == typeof r ? r(t) : r;
                return "always" === s || !1 !== s && d(t, e)
            }
            return !1
        }

        function h(t, e, r, s) {
            return !1 !== r.enabled && (t !== e || !1 === s.enabled) && (!r.suspense || "error" !== t.state.status) && d(t, r)
        }

        function d(t, e) {
            return t.isStaleByTime(e.staleTime)
        }
    }, 91784: function (t, e, r) {
        let s;
        r.d(e, {
            _: function () {
                return u
            }
        });
        var n = r(37667);
        let i = n.createContext((s = !1, {
            clearReset: () => {
                s = !1
            }, reset: () => {
                s = !0
            }, isReset: () => s
        })), u = () => n.useContext(i)
    }, 91670: function (t, e, r) {
        r.d(e, {
            JN: function () {
                return u
            }, KJ: function () {
                return o
            }, pf: function () {
                return i
            }
        });
        var s = r(37667), n = r(24798);
        let i = (t, e) => {
            (t.suspense || t.useErrorBoundary) && !e.isReset() && (t.retryOnMount = !1)
        }, u = t => {
            s.useEffect(() => {
                t.clearReset()
            }, [t])
        }, o = ({
                    result: t,
                    errorResetBoundary: e,
                    useErrorBoundary: r,
                    query: s
                }) => t.isError && !e.isReset() && !t.isFetching && (0, n.L)(r, [t.error, s])
    }, 37122: function (t, e, r) {
        r.d(e, {
            S: function () {
                return i
            }
        });
        var s = r(37667);
        let n = s.createContext(!1), i = () => s.useContext(n);
        n.Provider
    }, 38381: function (t, e, r) {
        r.d(e, {
            Fb: function () {
                return s
            }, SB: function () {
                return i
            }, Z$: function () {
                return n
            }, j8: function () {
                return u
            }
        });
        let s = t => {
                t.suspense && "number" != typeof t.staleTime && (t.staleTime = 1e3)
            }, n = (t, e) => t.isLoading && t.isFetching && !e,
            i = (t, e, r) => (null == t ? void 0 : t.suspense) && n(e, r),
            u = (t, e, r) => e.fetchOptimistic(t).then(({data: e}) => {
                null == t.onSuccess || t.onSuccess(e), null == t.onSettled || t.onSettled(e, null)
            }).catch(e => {
                r.clearReset(), null == t.onError || t.onError(e), null == t.onSettled || t.onSettled(void 0, e)
            })
    }, 7687: function (t, e, r) {
        r.d(e, {
            r: function () {
                return h
            }
        });
        var s = r(37667), n = r(464), i = r(30081), u = r(91784), o = r(85945), c = r(37122), l = r(91670),
            a = r(38381);

        function h(t, e) {
            let r = (0, o.NL)({context: t.context}), h = (0, c.S)(), d = (0, u._)(), f = r.defaultQueryOptions(t);
            f._optimisticResults = h ? "isRestoring" : "optimistic", f.onError && (f.onError = i.V.batchCalls(f.onError)), f.onSuccess && (f.onSuccess = i.V.batchCalls(f.onSuccess)), f.onSettled && (f.onSettled = i.V.batchCalls(f.onSettled)), (0, a.Fb)(f), (0, l.pf)(f, d), (0, l.JN)(d);
            let [p] = s.useState(() => new e(r, f)), y = p.getOptimisticResult(f);
            if ((0, n.$)(s.useCallback(t => h ? () => void 0 : p.subscribe(i.V.batchCalls(t)), [p, h]), () => p.getCurrentResult(), () => p.getCurrentResult()), s.useEffect(() => {
                p.setOptions(f, {listeners: !1})
            }, [f, p]), (0, a.SB)(f, y, h)) throw (0, a.j8)(f, p, d);
            if ((0, l.KJ)({
                result: y,
                errorResetBoundary: d,
                useErrorBoundary: f.useErrorBoundary,
                query: p.getCurrentQuery()
            })) throw y.error;
            return f.notifyOnChangeProps ? y : p.trackResult(y)
        }
    }, 36492: function (t, e, r) {
        r.d(e, {
            a: function () {
                return u
            }
        });
        var s = r(32161), n = r(52924), i = r(7687);

        function u(t, e, r) {
            let u = (0, s._v)(t, e, r);
            return (0, i.r)(u, n.z)
        }
    }, 464: function (t, e, r) {
        r.d(e, {
            $: function () {
                return n
            }
        });
        var s = r(61688);
        let n = s.useSyncExternalStore
    }, 24798: function (t, e, r) {
        r.d(e, {
            L: function () {
                return s
            }
        });

        function s(t, e) {
            return "function" == typeof t ? t(...e) : !!t
        }
    }
}]);
//# sourceMappingURL=6492-475145a67d02b824.js.map