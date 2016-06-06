requirejs.config({
    baseUrl: "/assets/js"
}),
requirejs(["conf/global", "common/router", "core/chaos/jquery"], function(a, b) {
    b.register("conf/routes/bloglist", /^(\/page\/[\d]+\/|\/tag\/.*|($)|\/)(\?.*|\#.*|$)/),
    b.register("conf/routes/blog", /^(\/\d{4}\/\d{2}\/\d{2}\/[^\/]+\/|($)|\/)(\?.*|\#.*|$)/),
    b.register("conf/routes/staticpage", /^(\/(about|projects|links)\/|($)|\/)(\?.*|\#.*|$)/),
    b.init({
        pageletM: {
            log: !0
        }
    })
}),
define("core/chaos/jquery", function(require, a, b) {
    var c = require("core/jquery/jquery");
    require("core/extra/jquery"),
    b.exports = c
}),
define("core/jquery/jquery", function(require, a, b) {
    !function(a, c) {
        "object" == typeof b && "object" == typeof b.exports ? b.exports = a.document ? c(a, !0) : function(a) {
            if (!a.document)
                throw new Error("jQuery requires a window with a document");
            return c(a)
        }
         : c(a)
    }("undefined" != typeof window ? window : this, function(a, b) {
        function c(a) {
            var b = a.length
              , c = fb.type(a);
            return "function" === c || fb.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
        }
        function d(a, b, c) {
            if (fb.isFunction(b))
                return fb.grep(a, function(a, d) {
                    return !!b.call(a, d, a) !== c
                });
            if (b.nodeType)
                return fb.grep(a, function(a) {
                    return a === b !== c
                });
            if ("string" == typeof b) {
                if (nb.test(b))
                    return fb.filter(b, a, c);
                b = fb.filter(b, a)
            }
            return fb.grep(a, function(a) {
                return fb.inArray(a, b) >= 0 !== c
            })
        }
        function e(a, b) {
            do
                a = a[b];
            while (a && 1 !== a.nodeType);return a
        }
        function f(a) {
            var b = vb[a] = {};
            return fb.each(a.match(ub) || [], function(a, c) {
                b[c] = !0
            }),
            b
        }
        function g() {
            pb.addEventListener ? (pb.removeEventListener("DOMContentLoaded", h, !1),
            a.removeEventListener("load", h, !1)) : (pb.detachEvent("onreadystatechange", h),
            a.detachEvent("onload", h))
        }
        function h() {
            (pb.addEventListener || "load" === event.type || "complete" === pb.readyState) && (g(),
            fb.ready())
        }
        function i(a, b, c) {
            if (void 0 === c && 1 === a.nodeType) {
                var d = "data-" + b.replace(Ab, "-$1").toLowerCase();
                if (c = a.getAttribute(d),
                "string" == typeof c) {
                    try {
                        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null  : +c + "" === c ? +c : zb.test(c) ? fb.parseJSON(c) : c
                    } catch (e) {}
                    fb.data(a, b, c)
                } else
                    c = void 0
            }
            return c
        }
        function j(a) {
            var b;
            for (b in a)
                if (("data" !== b || !fb.isEmptyObject(a[b])) && "toJSON" !== b)
                    return !1;
            return !0
        }
        function k(a, b, c, d) {
            if (fb.acceptData(a)) {
                var e, f, g = fb.expando, h = a.nodeType, i = h ? fb.cache : a, j = h ? a[g] : a[g] && g;
                if (j && i[j] && (d || i[j].data) || void 0 !== c || "string" != typeof b)
                    return j || (j = h ? a[g] = W.pop() || fb.guid++ : g),
                    i[j] || (i[j] = h ? {} : {
                        toJSON: fb.noop
                    }),
                    ("object" == typeof b || "function" == typeof b) && (d ? i[j] = fb.extend(i[j], b) : i[j].data = fb.extend(i[j].data, b)),
                    f = i[j],
                    d || (f.data || (f.data = {}),
                    f = f.data),
                    void 0 !== c && (f[fb.camelCase(b)] = c),
                    "string" == typeof b ? (e = f[b],
                    null  == e && (e = f[fb.camelCase(b)])) : e = f,
                    e
            }
        }
        function l(a, b, c) {
            if (fb.acceptData(a)) {
                var d, e, f = a.nodeType, g = f ? fb.cache : a, h = f ? a[fb.expando] : fb.expando;
                if (g[h]) {
                    if (b && (d = c ? g[h] : g[h].data)) {
                        fb.isArray(b) ? b = b.concat(fb.map(b, fb.camelCase)) : b in d ? b = [b] : (b = fb.camelCase(b),
                        b = b in d ? [b] : b.split(" ")),
                        e = b.length;
                        for (; e--; )
                            delete d[b[e]];
                        if (c ? !j(d) : !fb.isEmptyObject(d))
                            return
                    }
                    (c || (delete g[h].data,
                    j(g[h]))) && (f ? fb.cleanData([a], !0) : db.deleteExpando || g != g.window ? delete g[h] : g[h] = null )
                }
            }
        }
        function m() {
            return !0
        }
        function n() {
            return !1
        }
        function o() {
            try {
                return pb.activeElement
            } catch (a) {}
        }
        function p(a) {
            var b = Lb.split("|")
              , c = a.createDocumentFragment();
            if (c.createElement)
                for (; b.length; )
                    c.createElement(b.pop());
            return c
        }
        function q(a, b) {
            var c, d, e = 0, f = typeof a.getElementsByTagName !== yb ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== yb ? a.querySelectorAll(b || "*") : void 0;
            if (!f)
                for (f = [],
                c = a.childNodes || a; null  != (d = c[e]); e++)
                    !b || fb.nodeName(d, b) ? f.push(d) : fb.merge(f, q(d, b));
            return void 0 === b || b && fb.nodeName(a, b) ? fb.merge([a], f) : f
        }
        function r(a) {
            Fb.test(a.type) && (a.defaultChecked = a.checked)
        }
        function s(a, b) {
            return fb.nodeName(a, "table") && fb.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
        }
        function t(a) {
            return a.type = (null  !== fb.find.attr(a, "type")) + "/" + a.type,
            a
        }
        function u(a) {
            var b = Wb.exec(a.type);
            return b ? a.type = b[1] : a.removeAttribute("type"),
            a
        }
        function v(a, b) {
            for (var c, d = 0; null  != (c = a[d]); d++)
                fb._data(c, "globalEval", !b || fb._data(b[d], "globalEval"))
        }
        function w(a, b) {
            if (1 === b.nodeType && fb.hasData(a)) {
                var c, d, e, f = fb._data(a), g = fb._data(b, f), h = f.events;
                if (h) {
                    delete g.handle,
                    g.events = {};
                    for (c in h)
                        for (d = 0,
                        e = h[c].length; e > d; d++)
                            fb.event.add(b, c, h[c][d])
                }
                g.data && (g.data = fb.extend({}, g.data))
            }
        }
        function x(a, b) {
            var c, d, e;
            if (1 === b.nodeType) {
                if (c = b.nodeName.toLowerCase(),
                !db.noCloneEvent && b[fb.expando]) {
                    e = fb._data(b);
                    for (d in e.events)
                        fb.removeEvent(b, d, e.handle);
                    b.removeAttribute(fb.expando)
                }
                "script" === c && b.text !== a.text ? (t(b).text = a.text,
                u(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML),
                db.html5Clone && a.innerHTML && !fb.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Fb.test(a.type) ? (b.defaultChecked = b.checked = a.checked,
                b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
            }
        }
        function y(b, c) {
            var d = fb(c.createElement(b)).appendTo(c.body)
              , e = a.getDefaultComputedStyle ? a.getDefaultComputedStyle(d[0]).display : fb.css(d[0], "display");
            return d.detach(),
            e
        }
        function z(a) {
            var b = pb
              , c = ac[a];
            return c || (c = y(a, b),
            "none" !== c && c || (_b = (_b || fb("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
            b = (_b[0].contentWindow || _b[0].contentDocument).document,
            b.write(),
            b.close(),
            c = y(a, b),
            _b.detach()),
            ac[a] = c),
            c
        }
        function A(a, b) {
            return {
                get: function() {
                    var c = a();
                    if (null  != c)
                        return c ? void delete this.get : (this.get = b).apply(this, arguments)
                }
            }
        }
        function B(a, b) {
            if (b in a)
                return b;
            for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = nc.length; e--; )
                if (b = nc[e] + c,
                b in a)
                    return b;
            return d
        }
        function C(a, b) {
            for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
                d = a[g],
                d.style && (f[g] = fb._data(d, "olddisplay"),
                c = d.style.display,
                b ? (f[g] || "none" !== c || (d.style.display = ""),
                "" === d.style.display && Db(d) && (f[g] = fb._data(d, "olddisplay", z(d.nodeName)))) : f[g] || (e = Db(d),
                (c && "none" !== c || !e) && fb._data(d, "olddisplay", e ? c : fb.css(d, "display"))));
            for (g = 0; h > g; g++)
                d = a[g],
                d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
            return a
        }
        function D(a, b, c) {
            var d = jc.exec(b);
            return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
        }
        function E(a, b, c, d, e) {
            for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
                "margin" === c && (g += fb.css(a, c + Cb[f], !0, e)),
                d ? ("content" === c && (g -= fb.css(a, "padding" + Cb[f], !0, e)),
                "margin" !== c && (g -= fb.css(a, "border" + Cb[f] + "Width", !0, e))) : (g += fb.css(a, "padding" + Cb[f], !0, e),
                "padding" !== c && (g += fb.css(a, "border" + Cb[f] + "Width", !0, e)));
            return g
        }
        function F(a, b, c) {
            var d = !0
              , e = "width" === b ? a.offsetWidth : a.offsetHeight
              , f = bc(a)
              , g = db.boxSizing() && "border-box" === fb.css(a, "boxSizing", !1, f);
            if (0 >= e || null  == e) {
                if (e = cc(a, b, f),
                (0 > e || null  == e) && (e = a.style[b]),
                ec.test(e))
                    return e;
                d = g && (db.boxSizingReliable() || e === a.style[b]),
                e = parseFloat(e) || 0
            }
            return e + E(a, b, c || (g ? "border" : "content"), d, f) + "px"
        }
        function G(a, b, c, d, e) {
            return new G.prototype.init(a,b,c,d,e)
        }
        function H() {
            return setTimeout(function() {
                oc = void 0
            }),
            oc = fb.now()
        }
        function I(a, b) {
            var c, d = {
                height: a
            }, e = 0;
            for (b = b ? 1 : 0; 4 > e; e += 2 - b)
                c = Cb[e],
                d["margin" + c] = d["padding" + c] = a;
            return b && (d.opacity = d.width = a),
            d
        }
        function J(a, b, c) {
            for (var d, e = (uc[b] || []).concat(uc["*"]), f = 0, g = e.length; g > f; f++)
                if (d = e[f].call(c, b, a))
                    return d
        }
        function K(a, b, c) {
            var d, e, f, g, h, i, j, k, l = this, m = {}, n = a.style, o = a.nodeType && Db(a), p = fb._data(a, "fxshow");
            c.queue || (h = fb._queueHooks(a, "fx"),
            null  == h.unqueued && (h.unqueued = 0,
            i = h.empty.fire,
            h.empty.fire = function() {
                h.unqueued || i()
            }
            ),
            h.unqueued++,
            l.always(function() {
                l.always(function() {
                    h.unqueued--,
                    fb.queue(a, "fx").length || h.empty.fire()
                })
            })),
            1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY],
            j = fb.css(a, "display"),
            k = z(a.nodeName),
            "none" === j && (j = k),
            "inline" === j && "none" === fb.css(a, "float") && (db.inlineBlockNeedsLayout && "inline" !== k ? n.zoom = 1 : n.display = "inline-block")),
            c.overflow && (n.overflow = "hidden",
            db.shrinkWrapBlocks() || l.always(function() {
                n.overflow = c.overflow[0],
                n.overflowX = c.overflow[1],
                n.overflowY = c.overflow[2]
            }));
            for (d in b)
                if (e = b[d],
                qc.exec(e)) {
                    if (delete b[d],
                    f = f || "toggle" === e,
                    e === (o ? "hide" : "show")) {
                        if ("show" !== e || !p || void 0 === p[d])
                            continue;o = !0
                    }
                    m[d] = p && p[d] || fb.style(a, d)
                }
            if (!fb.isEmptyObject(m)) {
                p ? "hidden" in p && (o = p.hidden) : p = fb._data(a, "fxshow", {}),
                f && (p.hidden = !o),
                o ? fb(a).show() : l.done(function() {
                    fb(a).hide()
                }),
                l.done(function() {
                    var b;
                    fb._removeData(a, "fxshow");
                    for (b in m)
                        fb.style(a, b, m[b])
                });
                for (d in m)
                    g = J(o ? p[d] : 0, d, l),
                    d in p || (p[d] = g.start,
                    o && (g.end = g.start,
                    g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }
        function L(a, b) {
            var c, d, e, f, g;
            for (c in a)
                if (d = fb.camelCase(c),
                e = b[d],
                f = a[c],
                fb.isArray(f) && (e = f[1],
                f = a[c] = f[0]),
                c !== d && (a[d] = f,
                delete a[c]),
                g = fb.cssHooks[d],
                g && "expand" in g) {
                    f = g.expand(f),
                    delete a[d];
                    for (c in f)
                        c in a || (a[c] = f[c],
                        b[c] = e)
                } else
                    b[d] = e
        }
        function M(a, b, c) {
            var d, e, f = 0, g = tc.length, h = fb.Deferred().always(function() {
                delete i.elem
            }), i = function() {
                if (e)
                    return !1;
                for (var b = oc || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                    j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]),
                1 > f && i ? c : (h.resolveWith(a, [j]),
                !1)
            }
            , j = h.promise({
                elem: a,
                props: fb.extend({}, b),
                opts: fb.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: oc || H(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = fb.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d),
                    d
                },
                stop: function(b) {
                    var c = 0
                      , d = b ? j.tweens.length : 0;
                    if (e)
                        return this;
                    for (e = !0; d > c; c++)
                        j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]),
                    this
                }
            }), k = j.props;
            for (L(k, j.opts.specialEasing); g > f; f++)
                if (d = tc[f].call(j, a, k, j.opts))
                    return d;
            return fb.map(k, J, j),
            fb.isFunction(j.opts.start) && j.opts.start.call(a, j),
            fb.fx.timer(fb.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })),
            j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        }
        function N(a) {
            return function(b, c) {
                "string" != typeof b && (c = b,
                b = "*");
                var d, e = 0, f = b.toLowerCase().match(ub) || [];
                if (fb.isFunction(c))
                    for (; d = f[e++]; )
                        "+" === d.charAt(0) ? (d = d.slice(1) || "*",
                        (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
            }
        }
        function O(a, b, c, d) {
            function e(h) {
                var i;
                return f[h] = !0,
                fb.each(a[h] || [], function(a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                    e(j),
                    !1)
                }),
                i
            }
            var f = {}
              , g = a === Sc;
            return e(b.dataTypes[0]) || !f["*"] && e("*")
        }
        function P(a, b) {
            var c, d, e = fb.ajaxSettings.flatOptions || {};
            for (d in b)
                void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
            return c && fb.extend(!0, a, c),
            a
        }
        function Q(a, b, c) {
            for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; )
                i.shift(),
                void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
            if (e)
                for (g in h)
                    if (h[g] && h[g].test(e)) {
                        i.unshift(g);
                        break
                    }
            if (i[0] in c)
                f = i[0];
            else {
                for (g in c) {
                    if (!i[0] || a.converters[g + " " + i[0]]) {
                        f = g;
                        break
                    }
                    d || (d = g)
                }
                f = f || d
            }
            return f ? (f !== i[0] && i.unshift(f),
            c[f]) : void 0
        }
        function R(a, b, c, d) {
            var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
            if (k[1])
                for (g in a.converters)
                    j[g.toLowerCase()] = a.converters[g];
            for (f = k.shift(); f; )
                if (a.responseFields[f] && (c[a.responseFields[f]] = b),
                !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
                i = f,
                f = k.shift())
                    if ("*" === f)
                        f = i;
                    else if ("*" !== i && i !== f) {
                        if (g = j[i + " " + f] || j["* " + f],
                        !g)
                            for (e in j)
                                if (h = e.split(" "),
                                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                    g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
                                    k.unshift(h[1]));
                                    break
                                }
                        if (g !== !0)
                            if (g && a["throws"])
                                b = g(b);
                            else
                                try {
                                    b = g(b)
                                } catch (l) {
                                    return {
                                        state: "parsererror",
                                        error: g ? l : "No conversion from " + i + " to " + f
                                    }
                                }
                    }
            return {
                state: "success",
                data: b
            }
        }
        function S(a, b, c, d) {
            var e;
            if (fb.isArray(b))
                fb.each(b, function(b, e) {
                    c || Wc.test(a) ? d(a, e) : S(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
                });
            else if (c || "object" !== fb.type(b))
                d(a, b);
            else
                for (e in b)
                    S(a + "[" + e + "]", b[e], c, d)
        }
        function T() {
            try {
                return new a.XMLHttpRequest
            } catch (b) {}
        }
        function U() {
            try {
                return new a.ActiveXObject("Microsoft.XMLHTTP")
            } catch (b) {}
        }
        function V(a) {
            return fb.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
        }
        var W = []
          , X = W.slice
          , Y = W.concat
          , Z = W.push
          , $ = W.indexOf
          , _ = {}
          , ab = _.toString
          , bb = _.hasOwnProperty
          , cb = "".trim
          , db = {}
          , eb = "1.11.0"
          , fb = function(a, b) {
            return new fb.fn.init(a,b)
        }
          , gb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
          , hb = /^-ms-/
          , ib = /-([\da-z])/gi
          , jb = function(a, b) {
            return b.toUpperCase()
        }
        ;
        fb.fn = fb.prototype = {
            jquery: eb,
            constructor: fb,
            selector: "",
            length: 0,
            toArray: function() {
                return X.call(this)
            },
            get: function(a) {
                return null  != a ? 0 > a ? this[a + this.length] : this[a] : X.call(this)
            },
            pushStack: function(a) {
                var b = fb.merge(this.constructor(), a);
                return b.prevObject = this,
                b.context = this.context,
                b
            },
            each: function(a, b) {
                return fb.each(this, a, b)
            },
            map: function(a) {
                return this.pushStack(fb.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            slice: function() {
                return this.pushStack(X.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(a) {
                var b = this.length
                  , c = +a + (0 > a ? b : 0);
                return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null )
            },
            push: Z,
            sort: W.sort,
            splice: W.splice
        },
        fb.extend = fb.fn.extend = function() {
            var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
            for ("boolean" == typeof g && (j = g,
            g = arguments[h] || {},
            h++),
            "object" == typeof g || fb.isFunction(g) || (g = {}),
            h === i && (g = this,
            h--); i > h; h++)
                if (null  != (e = arguments[h]))
                    for (d in e)
                        a = g[d],
                        c = e[d],
                        g !== c && (j && c && (fb.isPlainObject(c) || (b = fb.isArray(c))) ? (b ? (b = !1,
                        f = a && fb.isArray(a) ? a : []) : f = a && fb.isPlainObject(a) ? a : {},
                        g[d] = fb.extend(j, f, c)) : void 0 !== c && (g[d] = c));
            return g
        }
        ,
        fb.extend({
            expando: "jQuery" + (eb + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(a) {
                throw new Error(a)
            },
            noop: function() {},
            isFunction: function(a) {
                return "function" === fb.type(a)
            },
            isArray: Array.isArray || function(a) {
                return "array" === fb.type(a)
            }
            ,
            isWindow: function(a) {
                return null  != a && a == a.window
            },
            isNumeric: function(a) {
                return a - parseFloat(a) >= 0
            },
            isEmptyObject: function(a) {
                var b;
                for (b in a)
                    return !1;
                return !0
            },
            isPlainObject: function(a) {
                var b;
                if (!a || "object" !== fb.type(a) || a.nodeType || fb.isWindow(a))
                    return !1;
                try {
                    if (a.constructor && !bb.call(a, "constructor") && !bb.call(a.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (c) {
                    return !1
                }
                if (db.ownLast)
                    for (b in a)
                        return bb.call(a, b);
                for (b in a)
                    ;
                return void 0 === b || bb.call(a, b)
            },
            type: function(a) {
                return null  == a ? a + "" : "object" == typeof a || "function" == typeof a ? _[ab.call(a)] || "object" : typeof a
            },
            globalEval: function(b) {
                b && fb.trim(b) && (a.execScript || function(b) {
                    a.eval.call(a, b)
                }
                )(b)
            },
            camelCase: function(a) {
                return a.replace(hb, "ms-").replace(ib, jb)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            },
            each: function(a, b, d) {
                var e, f = 0, g = a.length, h = c(a);
                if (d) {
                    if (h)
                        for (; g > f && (e = b.apply(a[f], d),
                        e !== !1); f++)
                            ;
                    else
                        for (f in a)
                            if (e = b.apply(a[f], d),
                            e === !1)
                                break
                } else if (h)
                    for (; g > f && (e = b.call(a[f], f, a[f]),
                    e !== !1); f++)
                        ;
                else
                    for (f in a)
                        if (e = b.call(a[f], f, a[f]),
                        e === !1)
                            break;
                return a
            },
            trim: cb && !cb.call("﻿ ") ? function(a) {
                return null  == a ? "" : cb.call(a)
            }
             : function(a) {
                return null  == a ? "" : (a + "").replace(gb, "")
            }
            ,
            makeArray: function(a, b) {
                var d = b || [];
                return null  != a && (c(Object(a)) ? fb.merge(d, "string" == typeof a ? [a] : a) : Z.call(d, a)),
                d
            },
            inArray: function(a, b, c) {
                var d;
                if (b) {
                    if ($)
                        return $.call(b, a, c);
                    for (d = b.length,
                    c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                        if (c in b && b[c] === a)
                            return c
                }
                return -1
            },
            merge: function(a, b) {
                for (var c = +b.length, d = 0, e = a.length; c > d; )
                    a[e++] = b[d++];
                if (c !== c)
                    for (; void 0 !== b[d]; )
                        a[e++] = b[d++];
                return a.length = e,
                a
            },
            grep: function(a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                    d = !b(a[f], f),
                    d !== h && e.push(a[f]);
                return e
            },
            map: function(a, b, d) {
                var e, f = 0, g = a.length, h = c(a), i = [];
                if (h)
                    for (; g > f; f++)
                        e = b(a[f], f, d),
                        null  != e && i.push(e);
                else
                    for (f in a)
                        e = b(a[f], f, d),
                        null  != e && i.push(e);
                return Y.apply([], i)
            },
            guid: 1,
            proxy: function(a, b) {
                var c, d, e;
                return "string" == typeof b && (e = a[b],
                b = a,
                a = e),
                fb.isFunction(a) ? (c = X.call(arguments, 2),
                d = function() {
                    return a.apply(b || this, c.concat(X.call(arguments)))
                }
                ,
                d.guid = a.guid = a.guid || fb.guid++,
                d) : void 0
            },
            now: function() {
                return +new Date
            },
            support: db
        }),
        fb.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
            _["[object " + b + "]"] = b.toLowerCase()
        });
        var kb = function(a) {
            function b(a, b, c, d) {
                var e, f, g, h, i, j, l, o, p, q;
                if ((b ? b.ownerDocument || b : O) !== G && F(b),
                b = b || G,
                c = c || [],
                !a || "string" != typeof a)
                    return c;
                if (1 !== (h = b.nodeType) && 9 !== h)
                    return [];
                if (I && !d) {
                    if (e = sb.exec(a))
                        if (g = e[1]) {
                            if (9 === h) {
                                if (f = b.getElementById(g),
                                !f || !f.parentNode)
                                    return c;
                                if (f.id === g)
                                    return c.push(f),
                                    c
                            } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g)
                                return c.push(f),
                                c
                        } else {
                            if (e[2])
                                return _.apply(c, b.getElementsByTagName(a)),
                                c;
                            if ((g = e[3]) && x.getElementsByClassName && b.getElementsByClassName)
                                return _.apply(c, b.getElementsByClassName(g)),
                                c
                        }
                    if (x.qsa && (!J || !J.test(a))) {
                        if (o = l = N,
                        p = b,
                        q = 9 === h && a,
                        1 === h && "object" !== b.nodeName.toLowerCase()) {
                            for (j = m(a),
                            (l = b.getAttribute("id")) ? o = l.replace(ub, "\\$&") : b.setAttribute("id", o),
                            o = "[id='" + o + "'] ",
                            i = j.length; i--; )
                                j[i] = o + n(j[i]);
                            p = tb.test(a) && k(b.parentNode) || b,
                            q = j.join(",")
                        }
                        if (q)
                            try {
                                return _.apply(c, p.querySelectorAll(q)),
                                c
                            } catch (r) {} finally {
                                l || b.removeAttribute("id")
                            }
                    }
                }
                return v(a.replace(ib, "$1"), b, c, d)
            }
            function c() {
                function a(c, d) {
                    return b.push(c + " ") > y.cacheLength && delete a[b.shift()],
                    a[c + " "] = d
                }
                var b = [];
                return a
            }
            function d(a) {
                return a[N] = !0,
                a
            }
            function e(a) {
                var b = G.createElement("div");
                try {
                    return !!a(b)
                } catch (c) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b),
                    b = null 
                }
            }
            function f(a, b) {
                for (var c = a.split("|"), d = a.length; d--; )
                    y.attrHandle[c[d]] = b
            }
            function g(a, b) {
                var c = b && a
                  , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || W) - (~a.sourceIndex || W);
                if (d)
                    return d;
                if (c)
                    for (; c = c.nextSibling; )
                        if (c === b)
                            return -1;
                return a ? 1 : -1
            }
            function h(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a
                }
            }
            function i(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }
            function j(a) {
                return d(function(b) {
                    return b = +b,
                    d(function(c, d) {
                        for (var e, f = a([], c.length, b), g = f.length; g--; )
                            c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }
            function k(a) {
                return a && typeof a.getElementsByTagName !== V && a
            }
            function l() {}
            function m(a, c) {
                var d, e, f, g, h, i, j, k = S[a + " "];
                if (k)
                    return c ? 0 : k.slice(0);
                for (h = a,
                i = [],
                j = y.preFilter; h; ) {
                    (!d || (e = jb.exec(h))) && (e && (h = h.slice(e[0].length) || h),
                    i.push(f = [])),
                    d = !1,
                    (e = kb.exec(h)) && (d = e.shift(),
                    f.push({
                        value: d,
                        type: e[0].replace(ib, " ")
                    }),
                    h = h.slice(d.length));
                    for (g in y.filter)
                        !(e = ob[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(),
                        f.push({
                            value: d,
                            type: g,
                            matches: e
                        }),
                        h = h.slice(d.length));
                    if (!d)
                        break
                }
                return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
            }
            function n(a) {
                for (var b = 0, c = a.length, d = ""; c > b; b++)
                    d += a[b].value;
                return d
            }
            function o(a, b, c) {
                var d = b.dir
                  , e = c && "parentNode" === d
                  , f = Q++;
                return b.first ? function(b, c, f) {
                    for (; b = b[d]; )
                        if (1 === b.nodeType || e)
                            return a(b, c, f)
                }
                 : function(b, c, g) {
                    var h, i, j = [P, f];
                    if (g) {
                        for (; b = b[d]; )
                            if ((1 === b.nodeType || e) && a(b, c, g))
                                return !0
                    } else
                        for (; b = b[d]; )
                            if (1 === b.nodeType || e) {
                                if (i = b[N] || (b[N] = {}),
                                (h = i[d]) && h[0] === P && h[1] === f)
                                    return j[2] = h[2];
                                if (i[d] = j,
                                j[2] = a(b, c, g))
                                    return !0
                            }
                }
            }
            function p(a) {
                return a.length > 1 ? function(b, c, d) {
                    for (var e = a.length; e--; )
                        if (!a[e](b, c, d))
                            return !1;
                    return !0
                }
                 : a[0]
            }
            function q(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null  != b; i > h; h++)
                    (f = a[h]) && (!c || c(f, d, e)) && (g.push(f),
                    j && b.push(h));
                return g
            }
            function r(a, b, c, e, f, g) {
                return e && !e[N] && (e = r(e)),
                f && !f[N] && (f = r(f, g)),
                d(function(d, g, h, i) {
                    var j, k, l, m = [], n = [], o = g.length, p = d || u(b || "*", h.nodeType ? [h] : h, []), r = !a || !d && b ? p : q(p, m, a, h, i), s = c ? f || (d ? a : o || e) ? [] : g : r;
                    if (c && c(r, s, h, i),
                    e)
                        for (j = q(s, n),
                        e(j, [], h, i),
                        k = j.length; k--; )
                            (l = j[k]) && (s[n[k]] = !(r[n[k]] = l));
                    if (d) {
                        if (f || a) {
                            if (f) {
                                for (j = [],
                                k = s.length; k--; )
                                    (l = s[k]) && j.push(r[k] = l);
                                f(null , s = [], j, i)
                            }
                            for (k = s.length; k--; )
                                (l = s[k]) && (j = f ? bb.call(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                        }
                    } else
                        s = q(s === g ? s.splice(o, s.length) : s),
                        f ? f(null , g, s, i) : _.apply(g, s)
                })
            }
            function s(a) {
                for (var b, c, d, e = a.length, f = y.relative[a[0].type], g = f || y.relative[" "], h = f ? 1 : 0, i = o(function(a) {
                    return a === b
                }, g, !0), j = o(function(a) {
                    return bb.call(b, a) > -1
                }, g, !0), k = [function(a, c, d) {
                    return !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
                }
                ]; e > h; h++)
                    if (c = y.relative[a[h].type])
                        k = [o(p(k), c)];
                    else {
                        if (c = y.filter[a[h].type].apply(null , a[h].matches),
                        c[N]) {
                            for (d = ++h; e > d && !y.relative[a[d].type]; d++)
                                ;
                            return r(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({
                                value: " " === a[h - 2].type ? "*" : ""
                            })).replace(ib, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && n(a))
                        }
                        k.push(c)
                    }
                return p(k)
            }
            function t(a, c) {
                var e = c.length > 0
                  , f = a.length > 0
                  , g = function(d, g, h, i, j) {
                    var k, l, m, n = 0, o = "0", p = d && [], r = [], s = C, t = d || f && y.find.TAG("*", j), u = P += null  == s ? 1 : Math.random() || .1, v = t.length;
                    for (j && (C = g !== G && g); o !== v && null  != (k = t[o]); o++) {
                        if (f && k) {
                            for (l = 0; m = a[l++]; )
                                if (m(k, g, h)) {
                                    i.push(k);
                                    break
                                }
                            j && (P = u)
                        }
                        e && ((k = !m && k) && n--,
                        d && p.push(k))
                    }
                    if (n += o,
                    e && o !== n) {
                        for (l = 0; m = c[l++]; )
                            m(p, r, g, h);
                        if (d) {
                            if (n > 0)
                                for (; o--; )
                                    p[o] || r[o] || (r[o] = Z.call(i));
                            r = q(r)
                        }
                        _.apply(i, r),
                        j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                    }
                    return j && (P = u,
                    C = s),
                    p
                }
                ;
                return e ? d(g) : g
            }
            function u(a, c, d) {
                for (var e = 0, f = c.length; f > e; e++)
                    b(a, c[e], d);
                return d
            }
            function v(a, b, c, d) {
                var e, f, g, h, i, j = m(a);
                if (!d && 1 === j.length) {
                    if (f = j[0] = j[0].slice(0),
                    f.length > 2 && "ID" === (g = f[0]).type && x.getById && 9 === b.nodeType && I && y.relative[f[1].type]) {
                        if (b = (y.find.ID(g.matches[0].replace(vb, wb), b) || [])[0],
                        !b)
                            return c;
                        a = a.slice(f.shift().value.length)
                    }
                    for (e = ob.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e],
                    !y.relative[h = g.type]); )
                        if ((i = y.find[h]) && (d = i(g.matches[0].replace(vb, wb), tb.test(f[0].type) && k(b.parentNode) || b))) {
                            if (f.splice(e, 1),
                            a = d.length && n(f),
                            !a)
                                return _.apply(c, d),
                                c;
                            break
                        }
                }
                return B(a, j)(d, b, !I, c, tb.test(a) && k(b.parentNode) || b),
                c
            }
            var w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date, O = a.document, P = 0, Q = 0, R = c(), S = c(), T = c(), U = function(a, b) {
                return a === b && (E = !0),
                0
            }
            , V = "undefined", W = 1 << 31, X = {}.hasOwnProperty, Y = [], Z = Y.pop, $ = Y.push, _ = Y.push, ab = Y.slice, bb = Y.indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (this[b] === a)
                        return b;
                return -1
            }
            , cb = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", db = "[\\x20\\t\\r\\n\\f]", eb = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", fb = eb.replace("w", "w#"), gb = "\\[" + db + "*(" + eb + ")" + db + "*(?:([*^$|!~]?=)" + db + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + fb + ")|)|)" + db + "*\\]", hb = ":(" + eb + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + gb.replace(3, 8) + ")*)|.*)\\)|)", ib = new RegExp("^" + db + "+|((?:^|[^\\\\])(?:\\\\.)*)" + db + "+$","g"), jb = new RegExp("^" + db + "*," + db + "*"), kb = new RegExp("^" + db + "*([>+~]|" + db + ")" + db + "*"), lb = new RegExp("=" + db + "*([^\\]'\"]*?)" + db + "*\\]","g"), mb = new RegExp(hb), nb = new RegExp("^" + fb + "$"), ob = {
                ID: new RegExp("^#(" + eb + ")"),
                CLASS: new RegExp("^\\.(" + eb + ")"),
                TAG: new RegExp("^(" + eb.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + gb),
                PSEUDO: new RegExp("^" + hb),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + db + "*(even|odd|(([+-]|)(\\d*)n|)" + db + "*(?:([+-]|)" + db + "*(\\d+)|))" + db + "*\\)|)","i"),
                bool: new RegExp("^(?:" + cb + ")$","i"),
                needsContext: new RegExp("^" + db + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + db + "*((?:-\\d)?\\d*)" + db + "*\\)|)(?=[^-]|$)","i")
            }, pb = /^(?:input|select|textarea|button)$/i, qb = /^h\d$/i, rb = /^[^{]+\{\s*\[native \w/, sb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, tb = /[+~]/, ub = /'|\\/g, vb = new RegExp("\\\\([\\da-f]{1,6}" + db + "?|(" + db + ")|.)","ig"), wb = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            }
            ;
            try {
                _.apply(Y = ab.call(O.childNodes), O.childNodes),
                Y[O.childNodes.length].nodeType
            } catch (xb) {
                _ = {
                    apply: Y.length ? function(a, b) {
                        $.apply(a, ab.call(b))
                    }
                     : function(a, b) {
                        for (var c = a.length, d = 0; a[c++] = b[d++]; )
                            ;
                        a.length = c - 1
                    }
                }
            }
            x = b.support = {},
            A = b.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? "HTML" !== b.nodeName : !1
            }
            ,
            F = b.setDocument = function(a) {
                var b, c = a ? a.ownerDocument || a : O, d = c.defaultView;
                return c !== G && 9 === c.nodeType && c.documentElement ? (G = c,
                H = c.documentElement,
                I = !A(c),
                d && d !== d.top && (d.addEventListener ? d.addEventListener("unload", function() {
                    F()
                }, !1) : d.attachEvent && d.attachEvent("onunload", function() {
                    F()
                })),
                x.attributes = e(function(a) {
                    return a.className = "i",
                    !a.getAttribute("className")
                }),
                x.getElementsByTagName = e(function(a) {
                    return a.appendChild(c.createComment("")),
                    !a.getElementsByTagName("*").length
                }),
                x.getElementsByClassName = rb.test(c.getElementsByClassName) && e(function(a) {
                    return a.innerHTML = "<div class='a'></div><div class='a i'></div>",
                    a.firstChild.className = "i",
                    2 === a.getElementsByClassName("i").length
                }),
                x.getById = e(function(a) {
                    return H.appendChild(a).id = N,
                    !c.getElementsByName || !c.getElementsByName(N).length
                }),
                x.getById ? (y.find.ID = function(a, b) {
                    if (typeof b.getElementById !== V && I) {
                        var c = b.getElementById(a);
                        return c && c.parentNode ? [c] : []
                    }
                }
                ,
                y.filter.ID = function(a) {
                    var b = a.replace(vb, wb);
                    return function(a) {
                        return a.getAttribute("id") === b
                    }
                }
                ) : (delete y.find.ID,
                y.filter.ID = function(a) {
                    var b = a.replace(vb, wb);
                    return function(a) {
                        var c = typeof a.getAttributeNode !== V && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }
                ),
                y.find.TAG = x.getElementsByTagName ? function(a, b) {
                    return typeof b.getElementsByTagName !== V ? b.getElementsByTagName(a) : void 0
                }
                 : function(a, b) {
                    var c, d = [], e = 0, f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (; c = f[e++]; )
                            1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                }
                ,
                y.find.CLASS = x.getElementsByClassName && function(a, b) {
                    return typeof b.getElementsByClassName !== V && I ? b.getElementsByClassName(a) : void 0
                }
                ,
                K = [],
                J = [],
                (x.qsa = rb.test(c.querySelectorAll)) && (e(function(a) {
                    a.innerHTML = "<select t=''><option selected=''></option></select>",
                    a.querySelectorAll("[t^='']").length && J.push("[*^$]=" + db + "*(?:''|\"\")"),
                    a.querySelectorAll("[selected]").length || J.push("\\[" + db + "*(?:value|" + cb + ")"),
                    a.querySelectorAll(":checked").length || J.push(":checked")
                }),
                e(function(a) {
                    var b = c.createElement("input");
                    b.setAttribute("type", "hidden"),
                    a.appendChild(b).setAttribute("name", "D"),
                    a.querySelectorAll("[name=d]").length && J.push("name" + db + "*[*^$|!~]?="),
                    a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"),
                    a.querySelectorAll("*,:x"),
                    J.push(",.*:")
                })),
                (x.matchesSelector = rb.test(L = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                    x.disconnectedMatch = L.call(a, "div"),
                    L.call(a, "[s!='']:x"),
                    K.push("!=", hb)
                }),
                J = J.length && new RegExp(J.join("|")),
                K = K.length && new RegExp(K.join("|")),
                b = rb.test(H.compareDocumentPosition),
                M = b || rb.test(H.contains) ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a
                      , d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                }
                 : function(a, b) {
                    if (b)
                        for (; b = b.parentNode; )
                            if (b === a)
                                return !0;
                    return !1
                }
                ,
                U = b ? function(a, b) {
                    if (a === b)
                        return E = !0,
                        0;
                    var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                    1 & d || !x.sortDetached && b.compareDocumentPosition(a) === d ? a === c || a.ownerDocument === O && M(O, a) ? -1 : b === c || b.ownerDocument === O && M(O, b) ? 1 : D ? bb.call(D, a) - bb.call(D, b) : 0 : 4 & d ? -1 : 1)
                }
                 : function(a, b) {
                    if (a === b)
                        return E = !0,
                        0;
                    var d, e = 0, f = a.parentNode, h = b.parentNode, i = [a], j = [b];
                    if (!f || !h)
                        return a === c ? -1 : b === c ? 1 : f ? -1 : h ? 1 : D ? bb.call(D, a) - bb.call(D, b) : 0;
                    if (f === h)
                        return g(a, b);
                    for (d = a; d = d.parentNode; )
                        i.unshift(d);
                    for (d = b; d = d.parentNode; )
                        j.unshift(d);
                    for (; i[e] === j[e]; )
                        e++;
                    return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
                }
                ,
                c) : G
            }
            ,
            b.matches = function(a, c) {
                return b(a, null , null , c)
            }
            ,
            b.matchesSelector = function(a, c) {
                if ((a.ownerDocument || a) !== G && F(a),
                c = c.replace(lb, "='$1']"),
                !(!x.matchesSelector || !I || K && K.test(c) || J && J.test(c)))
                    try {
                        var d = L.call(a, c);
                        if (d || x.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                            return d
                    } catch (e) {}
                return b(c, G, null , [a]).length > 0
            }
            ,
            b.contains = function(a, b) {
                return (a.ownerDocument || a) !== G && F(a),
                M(a, b)
            }
            ,
            b.attr = function(a, b) {
                (a.ownerDocument || a) !== G && F(a);
                var c = y.attrHandle[b.toLowerCase()]
                  , d = c && X.call(y.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
                return void 0 !== d ? d : x.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null 
            }
            ,
            b.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }
            ,
            b.uniqueSort = function(a) {
                var b, c = [], d = 0, e = 0;
                if (E = !x.detectDuplicates,
                D = !x.sortStable && a.slice(0),
                a.sort(U),
                E) {
                    for (; b = a[e++]; )
                        b === a[e] && (d = c.push(e));
                    for (; d--; )
                        a.splice(c[d], 1)
                }
                return D = null ,
                a
            }
            ,
            z = b.getText = function(a) {
                var b, c = "", d = 0, e = a.nodeType;
                if (e) {
                    if (1 === e || 9 === e || 11 === e) {
                        if ("string" == typeof a.textContent)
                            return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling)
                            c += z(a)
                    } else if (3 === e || 4 === e)
                        return a.nodeValue
                } else
                    for (; b = a[d++]; )
                        c += z(b);
                return c
            }
            ,
            y = b.selectors = {
                cacheLength: 50,
                createPseudo: d,
                match: ob,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(a) {
                        return a[1] = a[1].replace(vb, wb),
                        a[3] = (a[4] || a[5] || "").replace(vb, wb),
                        "~=" === a[2] && (a[3] = " " + a[3] + " "),
                        a.slice(0, 4)
                    },
                    CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(),
                        "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]),
                        a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                        a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]),
                        a
                    },
                    PSEUDO: function(a) {
                        var b, c = !a[5] && a[2];
                        return ob.CHILD.test(a[0]) ? null  : (a[3] && void 0 !== a[4] ? a[2] = a[4] : c && mb.test(c) && (b = m(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                        a[2] = c.slice(0, b)),
                        a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(a) {
                        var b = a.replace(vb, wb).toLowerCase();
                        return "*" === a ? function() {
                            return !0
                        }
                         : function(a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                    },
                    CLASS: function(a) {
                        var b = R[a + " "];
                        return b || (b = new RegExp("(^|" + db + ")" + a + "(" + db + "|$)")) && R(a, function(a) {
                            return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== V && a.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(a, c, d) {
                        return function(e) {
                            var f = b.attr(e, a);
                            return null  == f ? "!=" === c : c ? (f += "",
                            "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                        }
                    },
                    CHILD: function(a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3)
                          , g = "last" !== a.slice(-4)
                          , h = "of-type" === b;
                        return 1 === d && 0 === e ? function(a) {
                            return !!a.parentNode
                        }
                         : function(b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                            if (q) {
                                if (f) {
                                    for (; p; ) {
                                        for (l = b; l = l[p]; )
                                            if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                                return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild],
                                g && s) {
                                    for (k = q[N] || (q[N] = {}),
                                    j = k[a] || [],
                                    n = j[0] === P && j[1],
                                    m = j[0] === P && j[2],
                                    l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); )
                                        if (1 === l.nodeType && ++m && l === b) {
                                            k[a] = [P, n, m];
                                            break
                                        }
                                } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P)
                                    m = j[1];
                                else
                                    for (; (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]),
                                    l !== b)); )
                                        ;
                                return m -= e,
                                m === d || m % d === 0 && m / d >= 0
                            }
                        }
                    },
                    PSEUDO: function(a, c) {
                        var e, f = y.pseudos[a] || y.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                        return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c],
                        y.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                            for (var d, e = f(a, c), g = e.length; g--; )
                                d = bb.call(a, e[g]),
                                a[d] = !(b[d] = e[g])
                        }) : function(a) {
                            return f(a, 0, e)
                        }
                        ) : f
                    }
                },
                pseudos: {
                    not: d(function(a) {
                        var b = []
                          , c = []
                          , e = B(a.replace(ib, "$1"));
                        return e[N] ? d(function(a, b, c, d) {
                            for (var f, g = e(a, null , d, []), h = a.length; h--; )
                                (f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function(a, d, f) {
                            return b[0] = a,
                            e(b, null , f, c),
                            !c.pop()
                        }
                    }),
                    has: d(function(a) {
                        return function(c) {
                            return b(a, c).length > 0
                        }
                    }),
                    contains: d(function(a) {
                        return function(b) {
                            return (b.textContent || b.innerText || z(b)).indexOf(a) > -1
                        }
                    }),
                    lang: d(function(a) {
                        return nb.test(a || "") || b.error("unsupported lang: " + a),
                        a = a.replace(vb, wb).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                    return c = c.toLowerCase(),
                                    c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);return !1
                        }
                    }),
                    target: function(b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    },
                    root: function(a) {
                        return a === H
                    },
                    focus: function(a) {
                        return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: function(a) {
                        return a.disabled === !1
                    },
                    disabled: function(a) {
                        return a.disabled === !0
                    },
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex,
                        a.selected === !0
                    },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(a) {
                        return !y.pseudos.empty(a)
                    },
                    header: function(a) {
                        return qb.test(a.nodeName)
                    },
                    input: function(a) {
                        return pb.test(a.nodeName)
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function(a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null  == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    },
                    first: j(function() {
                        return [0]
                    }),
                    last: j(function(a, b) {
                        return [b - 1]
                    }),
                    eq: j(function(a, b, c) {
                        return [0 > c ? c + b : c]
                    }),
                    even: j(function(a, b) {
                        for (var c = 0; b > c; c += 2)
                            a.push(c);
                        return a
                    }),
                    odd: j(function(a, b) {
                        for (var c = 1; b > c; c += 2)
                            a.push(c);
                        return a
                    }),
                    lt: j(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0; )
                            a.push(d);
                        return a
                    }),
                    gt: j(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; ++d < b; )
                            a.push(d);
                        return a
                    })
                }
            },
            y.pseudos.nth = y.pseudos.eq;
            for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                y.pseudos[w] = h(w);
            for (w in {
                submit: !0,
                reset: !0
            })
                y.pseudos[w] = i(w);
            return l.prototype = y.filters = y.pseudos,
            y.setFilters = new l,
            B = b.compile = function(a, b) {
                var c, d = [], e = [], f = T[a + " "];
                if (!f) {
                    for (b || (b = m(a)),
                    c = b.length; c--; )
                        f = s(b[c]),
                        f[N] ? d.push(f) : e.push(f);
                    f = T(a, t(e, d))
                }
                return f
            }
            ,
            x.sortStable = N.split("").sort(U).join("") === N,
            x.detectDuplicates = !!E,
            F(),
            x.sortDetached = e(function(a) {
                return 1 & a.compareDocumentPosition(G.createElement("div"))
            }),
            e(function(a) {
                return a.innerHTML = "<a href='#'></a>",
                "#" === a.firstChild.getAttribute("href")
            }) || f("type|href|height|width", function(a, b, c) {
                return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }),
            x.attributes && e(function(a) {
                return a.innerHTML = "<input/>",
                a.firstChild.setAttribute("value", ""),
                "" === a.firstChild.getAttribute("value")
            }) || f("value", function(a, b, c) {
                return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
            }),
            e(function(a) {
                return null  == a.getAttribute("disabled")
            }) || f(cb, function(a, b, c) {
                var d;
                return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null 
            }),
            b
        }(a);
        fb.find = kb,
        fb.expr = kb.selectors,
        fb.expr[":"] = fb.expr.pseudos,
        fb.unique = kb.uniqueSort,
        fb.text = kb.getText,
        fb.isXMLDoc = kb.isXML,
        fb.contains = kb.contains;
        var lb = fb.expr.match.needsContext
          , mb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
          , nb = /^.[^:#\[\.,]*$/;
        fb.filter = function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"),
            1 === b.length && 1 === d.nodeType ? fb.find.matchesSelector(d, a) ? [d] : [] : fb.find.matches(a, fb.grep(b, function(a) {
                return 1 === a.nodeType
            }))
        }
        ,
        fb.fn.extend({
            find: function(a) {
                var b, c = [], d = this, e = d.length;
                if ("string" != typeof a)
                    return this.pushStack(fb(a).filter(function() {
                        for (b = 0; e > b; b++)
                            if (fb.contains(d[b], this))
                                return !0
                    }));
                for (b = 0; e > b; b++)
                    fb.find(a, d[b], c);
                return c = this.pushStack(e > 1 ? fb.unique(c) : c),
                c.selector = this.selector ? this.selector + " " + a : a,
                c
            },
            filter: function(a) {
                return this.pushStack(d(this, a || [], !1))
            },
            not: function(a) {
                return this.pushStack(d(this, a || [], !0))
            },
            is: function(a) {
                return !!d(this, "string" == typeof a && lb.test(a) ? fb(a) : a || [], !1).length
            }
        });
        var ob, pb = a.document, qb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, rb = fb.fn.init = function(a, b) {
            var c, d;
            if (!a)
                return this;
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null , a, null ] : qb.exec(a),
                !c || !c[1] && b)
                    return !b || b.jquery ? (b || ob).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof fb ? b[0] : b,
                    fb.merge(this, fb.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : pb, !0)),
                    mb.test(c[1]) && fb.isPlainObject(b))
                        for (c in b)
                            fb.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                if (d = pb.getElementById(c[2]),
                d && d.parentNode) {
                    if (d.id !== c[2])
                        return ob.find(a);
                    this.length = 1,
                    this[0] = d
                }
                return this.context = pb,
                this.selector = a,
                this
            }
            return a.nodeType ? (this.context = this[0] = a,
            this.length = 1,
            this) : fb.isFunction(a) ? "undefined" != typeof ob.ready ? ob.ready(a) : a(fb) : (void 0 !== a.selector && (this.selector = a.selector,
            this.context = a.context),
            fb.makeArray(a, this))
        }
        ;
        rb.prototype = fb.fn,
        ob = fb(pb);
        var sb = /^(?:parents|prev(?:Until|All))/
          , tb = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        fb.extend({
            dir: function(a, b, c) {
                for (var d = [], e = a[b]; e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !fb(e).is(c)); )
                    1 === e.nodeType && d.push(e),
                    e = e[b];
                return d
            },
            sibling: function(a, b) {
                for (var c = []; a; a = a.nextSibling)
                    1 === a.nodeType && a !== b && c.push(a);
                return c
            }
        }),
        fb.fn.extend({
            has: function(a) {
                var b, c = fb(a, this), d = c.length;
                return this.filter(function() {
                    for (b = 0; d > b; b++)
                        if (fb.contains(this, c[b]))
                            return !0
                })
            },
            closest: function(a, b) {
                for (var c, d = 0, e = this.length, f = [], g = lb.test(a) || "string" != typeof a ? fb(a, b || this.context) : 0; e > d; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && fb.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        }
                return this.pushStack(f.length > 1 ? fb.unique(f) : f)
            },
            index: function(a) {
                return a ? "string" == typeof a ? fb.inArray(this[0], fb(a)) : fb.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(a, b) {
                return this.pushStack(fb.unique(fb.merge(this.get(), fb(a, b))))
            },
            addBack: function(a) {
                return this.add(null  == a ? this.prevObject : this.prevObject.filter(a))
            }
        }),
        fb.each({
            parent: function(a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null 
            },
            parents: function(a) {
                return fb.dir(a, "parentNode")
            },
            parentsUntil: function(a, b, c) {
                return fb.dir(a, "parentNode", c)
            },
            next: function(a) {
                return e(a, "nextSibling")
            },
            prev: function(a) {
                return e(a, "previousSibling")
            },
            nextAll: function(a) {
                return fb.dir(a, "nextSibling")
            },
            prevAll: function(a) {
                return fb.dir(a, "previousSibling")
            },
            nextUntil: function(a, b, c) {
                return fb.dir(a, "nextSibling", c)
            },
            prevUntil: function(a, b, c) {
                return fb.dir(a, "previousSibling", c)
            },
            siblings: function(a) {
                return fb.sibling((a.parentNode || {}).firstChild, a)
            },
            children: function(a) {
                return fb.sibling(a.firstChild)
            },
            contents: function(a) {
                return fb.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : fb.merge([], a.childNodes)
            }
        }, function(a, b) {
            fb.fn[a] = function(c, d) {
                var e = fb.map(this, b, c);
                return "Until" !== a.slice(-5) && (d = c),
                d && "string" == typeof d && (e = fb.filter(d, e)),
                this.length > 1 && (tb[a] || (e = fb.unique(e)),
                sb.test(a) && (e = e.reverse())),
                this.pushStack(e)
            }
        });
        var ub = /\S+/g
          , vb = {};
        fb.Callbacks = function(a) {
            a = "string" == typeof a ? vb[a] || f(a) : fb.extend({}, a);
            var b, c, d, e, g, h, i = [], j = !a.once && [], k = function(f) {
                for (c = a.memory && f,
                d = !0,
                g = h || 0,
                h = 0,
                e = i.length,
                b = !0; i && e > g; g++)
                    if (i[g].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break
                    }
                b = !1,
                i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable())
            }
            , l = {
                add: function() {
                    if (i) {
                        var d = i.length;
                        !function f(b) {
                            fb.each(b, function(b, c) {
                                var d = fb.type(c);
                                "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments),
                        b ? e = i.length : c && (h = d,
                        k(c))
                    }
                    return this
                },
                remove: function() {
                    return i && fb.each(arguments, function(a, c) {
                        for (var d; (d = fb.inArray(c, i, d)) > -1; )
                            i.splice(d, 1),
                            b && (e >= d && e--,
                            g >= d && g--)
                    }),
                    this
                },
                has: function(a) {
                    return a ? fb.inArray(a, i) > -1 : !(!i || !i.length)
                },
                empty: function() {
                    return i = [],
                    e = 0,
                    this
                },
                disable: function() {
                    return i = j = c = void 0,
                    this
                },
                disabled: function() {
                    return !i
                },
                lock: function() {
                    return j = void 0,
                    c || l.disable(),
                    this
                },
                locked: function() {
                    return !j
                },
                fireWith: function(a, c) {
                    return !i || d && !j || (c = c || [],
                    c = [a, c.slice ? c.slice() : c],
                    b ? j.push(c) : k(c)),
                    this
                },
                fire: function() {
                    return l.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !!d
                }
            };
            return l
        }
        ,
        fb.extend({
            Deferred: function(a) {
                var b = [["resolve", "done", fb.Callbacks("once memory"), "resolved"], ["reject", "fail", fb.Callbacks("once memory"), "rejected"], ["notify", "progress", fb.Callbacks("memory")]]
                  , c = "pending"
                  , d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments),
                        this
                    },
                    then: function() {
                        var a = arguments;
                        return fb.Deferred(function(c) {
                            fb.each(b, function(b, f) {
                                var g = fb.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && fb.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }),
                            a = null 
                        }).promise()
                    },
                    promise: function(a) {
                        return null  != a ? fb.extend(a, d) : d
                    }
                }
                  , e = {};
                return d.pipe = d.then,
                fb.each(b, function(a, f) {
                    var g = f[2]
                      , h = f[3];
                    d[f[1]] = g.add,
                    h && g.add(function() {
                        c = h
                    }, b[1 ^ a][2].disable, b[2][2].lock),
                    e[f[0]] = function() {
                        return e[f[0] + "With"](this === e ? d : this, arguments),
                        this
                    }
                    ,
                    e[f[0] + "With"] = g.fireWith
                }),
                d.promise(e),
                a && a.call(e, e),
                e
            },
            when: function(a) {
                var b, c, d, e = 0, f = X.call(arguments), g = f.length, h = 1 !== g || a && fb.isFunction(a.promise) ? g : 0, i = 1 === h ? a : fb.Deferred(), j = function(a, c, d) {
                    return function(e) {
                        c[a] = this,
                        d[a] = arguments.length > 1 ? X.call(arguments) : e,
                        d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                }
                ;
                if (g > 1)
                    for (b = new Array(g),
                    c = new Array(g),
                    d = new Array(g); g > e; e++)
                        f[e] && fb.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
                return h || i.resolveWith(d, f),
                i.promise()
            }
        });
        var wb;
        fb.fn.ready = function(a) {
            return fb.ready.promise().done(a),
            this
        }
        ,
        fb.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? fb.readyWait++ : fb.ready(!0)
            },
            ready: function(a) {
                if (a === !0 ? !--fb.readyWait : !fb.isReady) {
                    if (!pb.body)
                        return setTimeout(fb.ready);
                    fb.isReady = !0,
                    a !== !0 && --fb.readyWait > 0 || (wb.resolveWith(pb, [fb]),
                    fb.fn.trigger && fb(pb).trigger("ready").off("ready"))
                }
            }
        }),
        fb.ready.promise = function(b) {
            if (!wb)
                if (wb = fb.Deferred(),
                "complete" === pb.readyState)
                    setTimeout(fb.ready);
                else if (pb.addEventListener)
                    pb.addEventListener("DOMContentLoaded", h, !1),
                    a.addEventListener("load", h, !1);
                else {
                    pb.attachEvent("onreadystatechange", h),
                    a.attachEvent("onload", h);
                    var c = !1;
                    try {
                        c = null  == a.frameElement && pb.documentElement
                    } catch (d) {}
                    c && c.doScroll && !function e() {
                        if (!fb.isReady) {
                            try {
                                c.doScroll("left")
                            } catch (a) {
                                return setTimeout(e, 50)
                            }
                            g(),
                            fb.ready()
                        }
                    }()
                }
            return wb.promise(b)
        }
        ;
        var xb, yb = "undefined";
        for (xb in fb(db))
            break;
        db.ownLast = "0" !== xb,
        db.inlineBlockNeedsLayout = !1,
        fb(function() {
            var a, b, c = pb.getElementsByTagName("body")[0];
            c && (a = pb.createElement("div"),
            a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
            b = pb.createElement("div"),
            c.appendChild(a).appendChild(b),
            typeof b.style.zoom !== yb && (b.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",
            (db.inlineBlockNeedsLayout = 3 === b.offsetWidth) && (c.style.zoom = 1)),
            c.removeChild(a),
            a = b = null )
        }),
        function() {
            var a = pb.createElement("div");
            if (null  == db.deleteExpando) {
                db.deleteExpando = !0;
                try {
                    delete a.test
                } catch (b) {
                    db.deleteExpando = !1
                }
            }
            a = null 
        }(),
        fb.acceptData = function(a) {
            var b = fb.noData[(a.nodeName + " ").toLowerCase()]
              , c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        }
        ;
        var zb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
          , Ab = /([A-Z])/g;
        fb.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(a) {
                return a = a.nodeType ? fb.cache[a[fb.expando]] : a[fb.expando],
                !!a && !j(a)
            },
            data: function(a, b, c) {
                return k(a, b, c)
            },
            removeData: function(a, b) {
                return l(a, b)
            },
            _data: function(a, b, c) {
                return k(a, b, c, !0)
            },
            _removeData: function(a, b) {
                return l(a, b, !0)
            }
        }),
        fb.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0], g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = fb.data(f),
                    1 === f.nodeType && !fb._data(f, "parsedAttrs"))) {
                        for (c = g.length; c--; )
                            d = g[c].name,
                            0 === d.indexOf("data-") && (d = fb.camelCase(d.slice(5)),
                            i(f, d, e[d]));
                        fb._data(f, "parsedAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() {
                    fb.data(this, a)
                }) : arguments.length > 1 ? this.each(function() {
                    fb.data(this, a, b)
                }) : f ? i(f, a, fb.data(f, a)) : void 0
            },
            removeData: function(a) {
                return this.each(function() {
                    fb.removeData(this, a)
                })
            }
        }),
        fb.extend({
            queue: function(a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue",
                d = fb._data(a, b),
                c && (!d || fb.isArray(c) ? d = fb._data(a, b, fb.makeArray(c)) : d.push(c)),
                d || []) : void 0
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = fb.queue(a, b)
                  , d = c.length
                  , e = c.shift()
                  , f = fb._queueHooks(a, b)
                  , g = function() {
                    fb.dequeue(a, b)
                }
                ;
                "inprogress" === e && (e = c.shift(),
                d--),
                e && ("fx" === b && c.unshift("inprogress"),
                delete f.stop,
                e.call(a, g, f)),
                !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return fb._data(a, c) || fb._data(a, c, {
                    empty: fb.Callbacks("once memory").add(function() {
                        fb._removeData(a, b + "queue"),
                        fb._removeData(a, c)
                    })
                })
            }
        }),
        fb.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a,
                a = "fx",
                c--),
                arguments.length < c ? fb.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = fb.queue(this, a, b);
                    fb._queueHooks(this, a),
                    "fx" === a && "inprogress" !== c[0] && fb.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    fb.dequeue(this, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                var c, d = 1, e = fb.Deferred(), f = this, g = this.length, h = function() {
                    --d || e.resolveWith(f, [f])
                }
                ;
                for ("string" != typeof a && (b = a,
                a = void 0),
                a = a || "fx"; g--; )
                    c = fb._data(f[g], a + "queueHooks"),
                    c && c.empty && (d++,
                    c.empty.add(h));
                return h(),
                e.promise(b)
            }
        });
        var Bb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
          , Cb = ["Top", "Right", "Bottom", "Left"]
          , Db = function(a, b) {
            return a = b || a,
            "none" === fb.css(a, "display") || !fb.contains(a.ownerDocument, a)
        }
          , Eb = fb.access = function(a, b, c, d, e, f, g) {
            var h = 0
              , i = a.length
              , j = null  == c;
            if ("object" === fb.type(c)) {
                e = !0;
                for (h in c)
                    fb.access(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0,
            fb.isFunction(d) || (g = !0),
            j && (g ? (b.call(a, d),
            b = null ) : (j = b,
            b = function(a, b, c) {
                return j.call(fb(a), c)
            }
            )),
            b))
                for (; i > h; h++)
                    b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        }
          , Fb = /^(?:checkbox|radio)$/i;
        !function() {
            var a = pb.createDocumentFragment()
              , b = pb.createElement("div")
              , c = pb.createElement("input");
            if (b.setAttribute("className", "t"),
            b.innerHTML = "  <link/><table></table><a href='/a'>a</a>",
            db.leadingWhitespace = 3 === b.firstChild.nodeType,
            db.tbody = !b.getElementsByTagName("tbody").length,
            db.htmlSerialize = !!b.getElementsByTagName("link").length,
            db.html5Clone = "<:nav></:nav>" !== pb.createElement("nav").cloneNode(!0).outerHTML,
            c.type = "checkbox",
            c.checked = !0,
            a.appendChild(c),
            db.appendChecked = c.checked,
            b.innerHTML = "<textarea>x</textarea>",
            db.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue,
            a.appendChild(b),
            b.innerHTML = "<input type='radio' checked='checked' name='t'/>",
            db.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
            db.noCloneEvent = !0,
            b.attachEvent && (b.attachEvent("onclick", function() {
                db.noCloneEvent = !1
            }),
            b.cloneNode(!0).click()),
            null  == db.deleteExpando) {
                db.deleteExpando = !0;
                try {
                    delete b.test
                } catch (d) {
                    db.deleteExpando = !1
                }
            }
            a = b = c = null 
        }(),
        function() {
            var b, c, d = pb.createElement("div");
            for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            })
                c = "on" + b,
                (db[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"),
                db[b + "Bubbles"] = d.attributes[c].expando === !1);
            d = null 
        }();
        var Gb = /^(?:input|select|textarea)$/i
          , Hb = /^key/
          , Ib = /^(?:mouse|contextmenu)|click/
          , Jb = /^(?:focusinfocus|focusoutblur)$/
          , Kb = /^([^.]*)(?:\.(.+)|)$/;
        fb.event = {
            global: {},
            add: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = fb._data(a);
                if (q) {
                    for (c.handler && (i = c,
                    c = i.handler,
                    e = i.selector),
                    c.guid || (c.guid = fb.guid++),
                    (g = q.events) || (g = q.events = {}),
                    (k = q.handle) || (k = q.handle = function(a) {
                        return typeof fb === yb || a && fb.event.triggered === a.type ? void 0 : fb.event.dispatch.apply(k.elem, arguments)
                    }
                    ,
                    k.elem = a),
                    b = (b || "").match(ub) || [""],
                    h = b.length; h--; )
                        f = Kb.exec(b[h]) || [],
                        n = p = f[1],
                        o = (f[2] || "").split(".").sort(),
                        n && (j = fb.event.special[n] || {},
                        n = (e ? j.delegateType : j.bindType) || n,
                        j = fb.event.special[n] || {},
                        l = fb.extend({
                            type: n,
                            origType: p,
                            data: d,
                            handler: c,
                            guid: c.guid,
                            selector: e,
                            needsContext: e && fb.expr.match.needsContext.test(e),
                            namespace: o.join(".")
                        }, i),
                        (m = g[n]) || (m = g[n] = [],
                        m.delegateCount = 0,
                        j.setup && j.setup.call(a, d, o, k) !== !1 || (a.addEventListener ? a.addEventListener(n, k, !1) : a.attachEvent && a.attachEvent("on" + n, k))),
                        j.add && (j.add.call(a, l),
                        l.handler.guid || (l.handler.guid = c.guid)),
                        e ? m.splice(m.delegateCount++, 0, l) : m.push(l),
                        fb.event.global[n] = !0);
                    a = null 
                }
            },
            remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = fb.hasData(a) && fb._data(a);
                if (q && (k = q.events)) {
                    for (b = (b || "").match(ub) || [""],
                    j = b.length; j--; )
                        if (h = Kb.exec(b[j]) || [],
                        n = p = h[1],
                        o = (h[2] || "").split(".").sort(),
                        n) {
                            for (l = fb.event.special[n] || {},
                            n = (d ? l.delegateType : l.bindType) || n,
                            m = k[n] || [],
                            h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            i = f = m.length; f--; )
                                g = m[f],
                                !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1),
                                g.selector && m.delegateCount--,
                                l.remove && l.remove.call(a, g));
                            i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || fb.removeEvent(a, n, q.handle),
                            delete k[n])
                        } else
                            for (n in k)
                                fb.event.remove(a, n + b[j], c, d, !0);
                    fb.isEmptyObject(k) && (delete q.handle,
                    fb._removeData(a, "events"))
                }
            },
            trigger: function(b, c, d, e) {
                var f, g, h, i, j, k, l, m = [d || pb], n = bb.call(b, "type") ? b.type : b, o = bb.call(b, "namespace") ? b.namespace.split(".") : [];
                if (h = k = d = d || pb,
                3 !== d.nodeType && 8 !== d.nodeType && !Jb.test(n + fb.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."),
                n = o.shift(),
                o.sort()),
                g = n.indexOf(":") < 0 && "on" + n,
                b = b[fb.expando] ? b : new fb.Event(n,"object" == typeof b && b),
                b.isTrigger = e ? 2 : 3,
                b.namespace = o.join("."),
                b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null ,
                b.result = void 0,
                b.target || (b.target = d),
                c = null  == c ? [b] : fb.makeArray(c, [b]),
                j = fb.event.special[n] || {},
                e || !j.trigger || j.trigger.apply(d, c) !== !1)) {
                    if (!e && !j.noBubble && !fb.isWindow(d)) {
                        for (i = j.delegateType || n,
                        Jb.test(i + n) || (h = h.parentNode); h; h = h.parentNode)
                            m.push(h),
                            k = h;
                        k === (d.ownerDocument || pb) && m.push(k.defaultView || k.parentWindow || a)
                    }
                    for (l = 0; (h = m[l++]) && !b.isPropagationStopped(); )
                        b.type = l > 1 ? i : j.bindType || n,
                        f = (fb._data(h, "events") || {})[b.type] && fb._data(h, "handle"),
                        f && f.apply(h, c),
                        f = g && h[g],
                        f && f.apply && fb.acceptData(h) && (b.result = f.apply(h, c),
                        b.result === !1 && b.preventDefault());
                    if (b.type = n,
                    !e && !b.isDefaultPrevented() && (!j._default || j._default.apply(m.pop(), c) === !1) && fb.acceptData(d) && g && d[n] && !fb.isWindow(d)) {
                        k = d[g],
                        k && (d[g] = null ),
                        fb.event.triggered = n;
                        try {
                            d[n]()
                        } catch (p) {}
                        fb.event.triggered = void 0,
                        k && (d[g] = k)
                    }
                    return b.result
                }
            },
            dispatch: function(a) {
                a = fb.event.fix(a);
                var b, c, d, e, f, g = [], h = X.call(arguments), i = (fb._data(this, "events") || {})[a.type] || [], j = fb.event.special[a.type] || {};
                if (h[0] = a,
                a.delegateTarget = this,
                !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                    for (g = fb.event.handlers.call(this, a, i),
                    b = 0; (e = g[b++]) && !a.isPropagationStopped(); )
                        for (a.currentTarget = e.elem,
                        f = 0; (d = e.handlers[f++]) && !a.isImmediatePropagationStopped(); )
                            (!a.namespace_re || a.namespace_re.test(d.namespace)) && (a.handleObj = d,
                            a.data = d.data,
                            c = ((fb.event.special[d.origType] || {}).handle || d.handler).apply(e.elem, h),
                            void 0 !== c && (a.result = c) === !1 && (a.preventDefault(),
                            a.stopPropagation()));
                    return j.postDispatch && j.postDispatch.call(this, a),
                    a.result
                }
            },
            handlers: function(a, b) {
                var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
                if (h && i.nodeType && (!a.button || "click" !== a.type))
                    for (; i != this; i = i.parentNode || this)
                        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                            for (e = [],
                            f = 0; h > f; f++)
                                d = b[f],
                                c = d.selector + " ",
                                void 0 === e[c] && (e[c] = d.needsContext ? fb(c, this).index(i) >= 0 : fb.find(c, this, null , [i]).length),
                                e[c] && e.push(d);
                            e.length && g.push({
                                elem: i,
                                handlers: e
                            })
                        }
                return h < b.length && g.push({
                    elem: this,
                    handlers: b.slice(h)
                }),
                g
            },
            fix: function(a) {
                if (a[fb.expando])
                    return a;
                var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
                for (g || (this.fixHooks[e] = g = Ib.test(e) ? this.mouseHooks : Hb.test(e) ? this.keyHooks : {}),
                d = g.props ? this.props.concat(g.props) : this.props,
                a = new fb.Event(f),
                b = d.length; b--; )
                    c = d[b],
                    a[c] = f[c];
                return a.target || (a.target = f.srcElement || pb),
                3 === a.target.nodeType && (a.target = a.target.parentNode),
                a.metaKey = !!a.metaKey,
                g.filter ? g.filter(a, f) : a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    return null  == a.which && (a.which = null  != b.charCode ? b.charCode : b.keyCode),
                    a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, b) {
                    var c, d, e, f = b.button, g = b.fromElement;
                    return null  == a.pageX && null  != b.clientX && (d = a.target.ownerDocument || pb,
                    e = d.documentElement,
                    c = d.body,
                    a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0),
                    a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)),
                    !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g),
                    a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                    a
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== o() && this.focus)
                            try {
                                return this.focus(),
                                !1
                            } catch (a) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === o() && this.blur ? (this.blur(),
                        !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return fb.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                        !1) : void 0
                    },
                    _default: function(a) {
                        return fb.nodeName(a.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(a) {
                        void 0 !== a.result && (a.originalEvent.returnValue = a.result)
                    }
                }
            },
            simulate: function(a, b, c, d) {
                var e = fb.extend(new fb.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? fb.event.trigger(e, null , b) : fb.event.dispatch.call(b, e),
                e.isDefaultPrevented() && c.preventDefault()
            }
        },
        fb.removeEvent = pb.removeEventListener ? function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        }
         : function(a, b, c) {
            var d = "on" + b;
            a.detachEvent && (typeof a[d] === yb && (a[d] = null ),
            a.detachEvent(d, c))
        }
        ,
        fb.Event = function(a, b) {
            return this instanceof fb.Event ? (a && a.type ? (this.originalEvent = a,
            this.type = a.type,
            this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && (a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault()) ? m : n) : this.type = a,
            b && fb.extend(this, b),
            this.timeStamp = a && a.timeStamp || fb.now(),
            void (this[fb.expando] = !0)) : new fb.Event(a,b)
        }
        ,
        fb.Event.prototype = {
            isDefaultPrevented: n,
            isPropagationStopped: n,
            isImmediatePropagationStopped: n,
            preventDefault: function() {
                var a = this.originalEvent;
                this.isDefaultPrevented = m,
                a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function() {
                var a = this.originalEvent;
                this.isPropagationStopped = m,
                a && (a.stopPropagation && a.stopPropagation(),
                a.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = m,
                this.stopPropagation()
            }
        },
        fb.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(a, b) {
            fb.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c, d = this, e = a.relatedTarget, f = a.handleObj;
                    return (!e || e !== d && !fb.contains(d, e)) && (a.type = f.origType,
                    c = f.handler.apply(this, arguments),
                    a.type = b),
                    c
                }
            }
        }),
        db.submitBubbles || (fb.event.special.submit = {
            setup: function() {
                return fb.nodeName(this, "form") ? !1 : void fb.event.add(this, "click._submit keypress._submit", function(a) {
                    var b = a.target
                      , c = fb.nodeName(b, "input") || fb.nodeName(b, "button") ? b.form : void 0;
                    c && !fb._data(c, "submitBubbles") && (fb.event.add(c, "submit._submit", function(a) {
                        a._submit_bubble = !0
                    }),
                    fb._data(c, "submitBubbles", !0))
                })
            },
            postDispatch: function(a) {
                a._submit_bubble && (delete a._submit_bubble,
                this.parentNode && !a.isTrigger && fb.event.simulate("submit", this.parentNode, a, !0))
            },
            teardown: function() {
                return fb.nodeName(this, "form") ? !1 : void fb.event.remove(this, "._submit")
            }
        }),
        db.changeBubbles || (fb.event.special.change = {
            setup: function() {
                return Gb.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (fb.event.add(this, "propertychange._change", function(a) {
                    "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
                }),
                fb.event.add(this, "click._change", function(a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1),
                    fb.event.simulate("change", this, a, !0)
                })),
                !1) : void fb.event.add(this, "beforeactivate._change", function(a) {
                    var b = a.target;
                    Gb.test(b.nodeName) && !fb._data(b, "changeBubbles") && (fb.event.add(b, "change._change", function(a) {
                        !this.parentNode || a.isSimulated || a.isTrigger || fb.event.simulate("change", this.parentNode, a, !0)
                    }),
                    fb._data(b, "changeBubbles", !0))
                })
            },
            handle: function(a) {
                var b = a.target;
                return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return fb.event.remove(this, "._change"),
                !Gb.test(this.nodeName)
            }
        }),
        db.focusinBubbles || fb.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var c = function(a) {
                fb.event.simulate(b, a.target, fb.event.fix(a), !0)
            }
            ;
            fb.event.special[b] = {
                setup: function() {
                    var d = this.ownerDocument || this
                      , e = fb._data(d, b);
                    e || d.addEventListener(a, c, !0),
                    fb._data(d, b, (e || 0) + 1)
                },
                teardown: function() {
                    var d = this.ownerDocument || this
                      , e = fb._data(d, b) - 1;
                    e ? fb._data(d, b, e) : (d.removeEventListener(a, c, !0),
                    fb._removeData(d, b))
                }
            }
        }),
        fb.fn.extend({
            on: function(a, b, c, d, e) {
                var f, g;
                if ("object" == typeof a) {
                    "string" != typeof b && (c = c || b,
                    b = void 0);
                    for (f in a)
                        this.on(f, b, c, a[f], e);
                    return this
                }
                if (null  == c && null  == d ? (d = b,
                c = b = void 0) : null  == d && ("string" == typeof b ? (d = c,
                c = void 0) : (d = c,
                c = b,
                b = void 0)),
                d === !1)
                    d = n;
                else if (!d)
                    return this;
                return 1 === e && (g = d,
                d = function(a) {
                    return fb().off(a),
                    g.apply(this, arguments)
                }
                ,
                d.guid = g.guid || (g.guid = fb.guid++)),
                this.each(function() {
                    fb.event.add(this, a, d, c, b)
                })
            },
            one: function(a, b, c, d) {
                return this.on(a, b, c, d, 1)
            },
            off: function(a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj)
                    return d = a.handleObj,
                    fb(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                    this;
                if ("object" == typeof a) {
                    for (e in a)
                        this.off(e, b, a[e]);
                    return this
                }
                return (b === !1 || "function" == typeof b) && (c = b,
                b = void 0),
                c === !1 && (c = n),
                this.each(function() {
                    fb.event.remove(this, a, c, b)
                })
            },
            trigger: function(a, b) {
                return this.each(function() {
                    fb.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                var c = this[0];
                return c ? fb.event.trigger(a, b, c, !0) : void 0
            }
        });
        var Lb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
          , Mb = / jQuery\d+="(?:null|\d+)"/g
          , Nb = new RegExp("<(?:" + Lb + ")[\\s/>]","i")
          , Ob = /^\s+/
          , Pb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
          , Qb = /<([\w:]+)/
          , Rb = /<tbody/i
          , Sb = /<|&#?\w+;/
          , Tb = /<(?:script|style|link)/i
          , Ub = /checked\s*(?:[^=]|=\s*.checked.)/i
          , Vb = /^$|\/(?:java|ecma)script/i
          , Wb = /^true\/(.*)/
          , Xb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
          , Yb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: db.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }
          , Zb = p(pb)
          , $b = Zb.appendChild(pb.createElement("div"));
        Yb.optgroup = Yb.option,
        Yb.tbody = Yb.tfoot = Yb.colgroup = Yb.caption = Yb.thead,
        Yb.th = Yb.td,
        fb.extend({
            clone: function(a, b, c) {
                var d, e, f, g, h, i = fb.contains(a.ownerDocument, a);
                if (db.html5Clone || fb.isXMLDoc(a) || !Nb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : ($b.innerHTML = a.outerHTML,
                $b.removeChild(f = $b.firstChild)),
                !(db.noCloneEvent && db.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || fb.isXMLDoc(a)))
                    for (d = q(f),
                    h = q(a),
                    g = 0; null  != (e = h[g]); ++g)
                        d[g] && x(e, d[g]);
                if (b)
                    if (c)
                        for (h = h || q(a),
                        d = d || q(f),
                        g = 0; null  != (e = h[g]); g++)
                            w(e, d[g]);
                    else
                        w(a, f);
                return d = q(f, "script"),
                d.length > 0 && v(d, !i && q(a, "script")),
                d = h = e = null ,
                f
            },
            buildFragment: function(a, b, c, d) {
                for (var e, f, g, h, i, j, k, l = a.length, m = p(b), n = [], o = 0; l > o; o++)
                    if (f = a[o],
                    f || 0 === f)
                        if ("object" === fb.type(f))
                            fb.merge(n, f.nodeType ? [f] : f);
                        else if (Sb.test(f)) {
                            for (h = h || m.appendChild(b.createElement("div")),
                            i = (Qb.exec(f) || ["", ""])[1].toLowerCase(),
                            k = Yb[i] || Yb._default,
                            h.innerHTML = k[1] + f.replace(Pb, "<$1></$2>") + k[2],
                            e = k[0]; e--; )
                                h = h.lastChild;
                            if (!db.leadingWhitespace && Ob.test(f) && n.push(b.createTextNode(Ob.exec(f)[0])),
                            !db.tbody)
                                for (f = "table" !== i || Rb.test(f) ? "<table>" !== k[1] || Rb.test(f) ? 0 : h : h.firstChild,
                                e = f && f.childNodes.length; e--; )
                                    fb.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                            for (fb.merge(n, h.childNodes),
                            h.textContent = ""; h.firstChild; )
                                h.removeChild(h.firstChild);
                            h = m.lastChild
                        } else
                            n.push(b.createTextNode(f));
                for (h && m.removeChild(h),
                db.appendChecked || fb.grep(q(n, "input"), r),
                o = 0; f = n[o++]; )
                    if ((!d || -1 === fb.inArray(f, d)) && (g = fb.contains(f.ownerDocument, f),
                    h = q(m.appendChild(f), "script"),
                    g && v(h),
                    c))
                        for (e = 0; f = h[e++]; )
                            Vb.test(f.type || "") && c.push(f);
                return h = null ,
                m
            },
            cleanData: function(a, b) {
                for (var c, d, e, f, g = 0, h = fb.expando, i = fb.cache, j = db.deleteExpando, k = fb.event.special; null  != (c = a[g]); g++)
                    if ((b || fb.acceptData(c)) && (e = c[h],
                    f = e && i[e])) {
                        if (f.events)
                            for (d in f.events)
                                k[d] ? fb.event.remove(c, d) : fb.removeEvent(c, d, f.handle);
                        i[e] && (delete i[e],
                        j ? delete c[h] : typeof c.removeAttribute !== yb ? c.removeAttribute(h) : c[h] = null ,
                        W.push(e))
                    }
            }
        }),
        fb.fn.extend({
            text: function(a) {
                return Eb(this, function(a) {
                    return void 0 === a ? fb.text(this) : this.empty().append((this[0] && this[0].ownerDocument || pb).createTextNode(a))
                }, null , a, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = s(this, a);
                        b.appendChild(a)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = s(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            },
            remove: function(a, b) {
                for (var c, d = a ? fb.filter(a, this) : this, e = 0; null  != (c = d[e]); e++)
                    b || 1 !== c.nodeType || fb.cleanData(q(c)),
                    c.parentNode && (b && fb.contains(c.ownerDocument, c) && v(q(c, "script")),
                    c.parentNode.removeChild(c));
                return this
            },
            empty: function() {
                for (var a, b = 0; null  != (a = this[b]); b++) {
                    for (1 === a.nodeType && fb.cleanData(q(a, !1)); a.firstChild; )
                        a.removeChild(a.firstChild);
                    a.options && fb.nodeName(a, "select") && (a.options.length = 0)
                }
                return this
            },
            clone: function(a, b) {
                return a = null  == a ? !1 : a,
                b = null  == b ? a : b,
                this.map(function() {
                    return fb.clone(this, a, b)
                })
            },
            html: function(a) {
                return Eb(this, function(a) {
                    var b = this[0] || {}
                      , c = 0
                      , d = this.length;
                    if (void 0 === a)
                        return 1 === b.nodeType ? b.innerHTML.replace(Mb, "") : void 0;
                    if (!("string" != typeof a || Tb.test(a) || !db.htmlSerialize && Nb.test(a) || !db.leadingWhitespace && Ob.test(a) || Yb[(Qb.exec(a) || ["", ""])[1].toLowerCase()])) {
                        a = a.replace(Pb, "<$1></$2>");
                        try {
                            for (; d > c; c++)
                                b = this[c] || {},
                                1 === b.nodeType && (fb.cleanData(q(b, !1)),
                                b.innerHTML = a);
                            b = 0
                        } catch (e) {}
                    }
                    b && this.empty().append(a)
                }, null , a, arguments.length)
            },
            replaceWith: function() {
                var a = arguments[0];
                return this.domManip(arguments, function(b) {
                    a = this.parentNode,
                    fb.cleanData(q(this)),
                    a && a.replaceChild(b, this)
                }),
                a && (a.length || a.nodeType) ? this : this.remove()
            },
            detach: function(a) {
                return this.remove(a, !0)
            },
            domManip: function(a, b) {
                a = Y.apply([], a);
                var c, d, e, f, g, h, i = 0, j = this.length, k = this, l = j - 1, m = a[0], n = fb.isFunction(m);
                if (n || j > 1 && "string" == typeof m && !db.checkClone && Ub.test(m))
                    return this.each(function(c) {
                        var d = k.eq(c);
                        n && (a[0] = m.call(this, c, d.html())),
                        d.domManip(a, b)
                    });
                if (j && (h = fb.buildFragment(a, this[0].ownerDocument, !1, this),
                c = h.firstChild,
                1 === h.childNodes.length && (h = c),
                c)) {
                    for (f = fb.map(q(h, "script"), t),
                    e = f.length; j > i; i++)
                        d = h,
                        i !== l && (d = fb.clone(d, !0, !0),
                        e && fb.merge(f, q(d, "script"))),
                        b.call(this[i], d, i);
                    if (e)
                        for (g = f[f.length - 1].ownerDocument,
                        fb.map(f, u),
                        i = 0; e > i; i++)
                            d = f[i],
                            Vb.test(d.type || "") && !fb._data(d, "globalEval") && fb.contains(g, d) && (d.src ? fb._evalUrl && fb._evalUrl(d.src) : fb.globalEval((d.text || d.textContent || d.innerHTML || "").replace(Xb, "")));
                    h = c = null 
                }
                return this
            }
        }),
        fb.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            fb.fn[a] = function(a) {
                for (var c, d = 0, e = [], f = fb(a), g = f.length - 1; g >= d; d++)
                    c = d === g ? this : this.clone(!0),
                    fb(f[d])[b](c),
                    Z.apply(e, c.get());
                return this.pushStack(e)
            }
        });
        var _b, ac = {};
        !function() {
            var a, b, c = pb.createElement("div"), d = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
            c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
            a = c.getElementsByTagName("a")[0],
            a.style.cssText = "float:left;opacity:.5",
            db.opacity = /^0.5/.test(a.style.opacity),
            db.cssFloat = !!a.style.cssFloat,
            c.style.backgroundClip = "content-box",
            c.cloneNode(!0).style.backgroundClip = "",
            db.clearCloneStyle = "content-box" === c.style.backgroundClip,
            a = c = null ,
            db.shrinkWrapBlocks = function() {
                var a, c, e, f;
                if (null  == b) {
                    if (a = pb.getElementsByTagName("body")[0],
                    !a)
                        return;
                    f = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
                    c = pb.createElement("div"),
                    e = pb.createElement("div"),
                    a.appendChild(c).appendChild(e),
                    b = !1,
                    typeof e.style.zoom !== yb && (e.style.cssText = d + ";width:1px;padding:1px;zoom:1",
                    e.innerHTML = "<div></div>",
                    e.firstChild.style.width = "5px",
                    b = 3 !== e.offsetWidth),
                    a.removeChild(c),
                    a = c = e = null 
                }
                return b
            }
        }();
        var bc, cc, dc = /^margin/, ec = new RegExp("^(" + Bb + ")(?!px)[a-z%]+$","i"), fc = /^(top|right|bottom|left)$/;
        a.getComputedStyle ? (bc = function(a) {
            return a.ownerDocument.defaultView.getComputedStyle(a, null )
        }
        ,
        cc = function(a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || bc(a),
            g = c ? c.getPropertyValue(b) || c[b] : void 0,
            c && ("" !== g || fb.contains(a.ownerDocument, a) || (g = fb.style(a, b)),
            ec.test(g) && dc.test(b) && (d = h.width,
            e = h.minWidth,
            f = h.maxWidth,
            h.minWidth = h.maxWidth = h.width = g,
            g = c.width,
            h.width = d,
            h.minWidth = e,
            h.maxWidth = f)),
            void 0 === g ? g : g + ""
        }
        ) : pb.documentElement.currentStyle && (bc = function(a) {
            return a.currentStyle
        }
        ,
        cc = function(a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || bc(a),
            g = c ? c[b] : void 0,
            null  == g && h && h[b] && (g = h[b]),
            ec.test(g) && !fc.test(b) && (d = h.left,
            e = a.runtimeStyle,
            f = e && e.left,
            f && (e.left = a.currentStyle.left),
            h.left = "fontSize" === b ? "1em" : g,
            g = h.pixelLeft + "px",
            h.left = d,
            f && (e.left = f)),
            void 0 === g ? g : g + "" || "auto"
        }
        ),
        function() {
            function b() {
                var b, c, d = pb.getElementsByTagName("body")[0];
                d && (b = pb.createElement("div"),
                c = pb.createElement("div"),
                b.style.cssText = j,
                d.appendChild(b).appendChild(c),
                c.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",
                fb.swap(d, null  != d.style.zoom ? {
                    zoom: 1
                } : {}, function() {
                    e = 4 === c.offsetWidth
                }),
                f = !0,
                g = !1,
                h = !0,
                a.getComputedStyle && (g = "1%" !== (a.getComputedStyle(c, null ) || {}).top,
                f = "4px" === (a.getComputedStyle(c, null ) || {
                    width: "4px"
                }).width),
                d.removeChild(b),
                c = d = null )
            }
            var c, d, e, f, g, h, i = pb.createElement("div"), j = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", k = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
            i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
            c = i.getElementsByTagName("a")[0],
            c.style.cssText = "float:left;opacity:.5",
            db.opacity = /^0.5/.test(c.style.opacity),
            db.cssFloat = !!c.style.cssFloat,
            i.style.backgroundClip = "content-box",
            i.cloneNode(!0).style.backgroundClip = "",
            db.clearCloneStyle = "content-box" === i.style.backgroundClip,
            c = i = null ,
            fb.extend(db, {
                reliableHiddenOffsets: function() {
                    if (null  != d)
                        return d;
                    var a, b, c, e = pb.createElement("div"), f = pb.getElementsByTagName("body")[0];
                    if (f)
                        return e.setAttribute("className", "t"),
                        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                        a = pb.createElement("div"),
                        a.style.cssText = j,
                        f.appendChild(a).appendChild(e),
                        e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                        b = e.getElementsByTagName("td"),
                        b[0].style.cssText = "padding:0;margin:0;border:0;display:none",
                        c = 0 === b[0].offsetHeight,
                        b[0].style.display = "",
                        b[1].style.display = "none",
                        d = c && 0 === b[0].offsetHeight,
                        f.removeChild(a),
                        e = f = null ,
                        d
                },
                boxSizing: function() {
                    return null  == e && b(),
                    e
                },
                boxSizingReliable: function() {
                    return null  == f && b(),
                    f
                },
                pixelPosition: function() {
                    return null  == g && b(),
                    g
                },
                reliableMarginRight: function() {
                    var b, c, d, e;
                    if (null  == h && a.getComputedStyle) {
                        if (b = pb.getElementsByTagName("body")[0],
                        !b)
                            return;
                        c = pb.createElement("div"),
                        d = pb.createElement("div"),
                        c.style.cssText = j,
                        b.appendChild(c).appendChild(d),
                        e = d.appendChild(pb.createElement("div")),
                        e.style.cssText = d.style.cssText = k,
                        e.style.marginRight = e.style.width = "0",
                        d.style.width = "1px",
                        h = !parseFloat((a.getComputedStyle(e, null ) || {}).marginRight),
                        b.removeChild(c)
                    }
                    return h
                }
            })
        }(),
        fb.swap = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b)
                g[f] = a.style[f],
                a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b)
                a.style[f] = g[f];
            return e
        }
        ;
        var gc = /alpha\([^)]*\)/i
          , hc = /opacity\s*=\s*([^)]*)/
          , ic = /^(none|table(?!-c[ea]).+)/
          , jc = new RegExp("^(" + Bb + ")(.*)$","i")
          , kc = new RegExp("^([+-])=(" + Bb + ")","i")
          , lc = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
          , mc = {
            letterSpacing: 0,
            fontWeight: 400
        }
          , nc = ["Webkit", "O", "Moz", "ms"];
        fb.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = cc(a, "opacity");
                            return "" === c ? "1" : c
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": db.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(a, b, c, d) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var e, f, g, h = fb.camelCase(b), i = a.style;
                    if (b = fb.cssProps[h] || (fb.cssProps[h] = B(i, h)),
                    g = fb.cssHooks[b] || fb.cssHooks[h],
                    void 0 === c)
                        return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                    if (f = typeof c,
                    "string" === f && (e = kc.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(fb.css(a, b)),
                    f = "number"),
                    null  != c && c === c && ("number" !== f || fb.cssNumber[h] || (c += "px"),
                    db.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                    !(g && "set" in g && void 0 === (c = g.set(a, c, d)))))
                        try {
                            i[b] = "",
                            i[b] = c
                        } catch (j) {}
                }
            },
            css: function(a, b, c, d) {
                var e, f, g, h = fb.camelCase(b);
                return b = fb.cssProps[h] || (fb.cssProps[h] = B(a.style, h)),
                g = fb.cssHooks[b] || fb.cssHooks[h],
                g && "get" in g && (f = g.get(a, !0, c)),
                void 0 === f && (f = cc(a, b, d)),
                "normal" === f && b in mc && (f = mc[b]),
                "" === c || c ? (e = parseFloat(f),
                c === !0 || fb.isNumeric(e) ? e || 0 : f) : f
            }
        }),
        fb.each(["height", "width"], function(a, b) {
            fb.cssHooks[b] = {
                get: function(a, c, d) {
                    return c ? 0 === a.offsetWidth && ic.test(fb.css(a, "display")) ? fb.swap(a, lc, function() {
                        return F(a, b, d)
                    }) : F(a, b, d) : void 0
                },
                set: function(a, c, d) {
                    var e = d && bc(a);
                    return D(a, c, d ? E(a, b, d, db.boxSizing() && "border-box" === fb.css(a, "boxSizing", !1, e), e) : 0)
                }
            }
        }),
        db.opacity || (fb.cssHooks.opacity = {
            get: function(a, b) {
                return hc.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
            },
            set: function(a, b) {
                var c = a.style
                  , d = a.currentStyle
                  , e = fb.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : ""
                  , f = d && d.filter || c.filter || "";
                c.zoom = 1,
                (b >= 1 || "" === b) && "" === fb.trim(f.replace(gc, "")) && c.removeAttribute && (c.removeAttribute("filter"),
                "" === b || d && !d.filter) || (c.filter = gc.test(f) ? f.replace(gc, e) : f + " " + e)
            }
        }),
        fb.cssHooks.marginRight = A(db.reliableMarginRight, function(a, b) {
            return b ? fb.swap(a, {
                display: "inline-block"
            }, cc, [a, "marginRight"]) : void 0
        }),
        fb.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(a, b) {
            fb.cssHooks[a + b] = {
                expand: function(c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                        e[a + Cb[d] + b] = f[d] || f[d - 2] || f[0];
                    return e
                }
            },
            dc.test(a) || (fb.cssHooks[a + b].set = D)
        }),
        fb.fn.extend({
            css: function(a, b) {
                return Eb(this, function(a, b, c) {
                    var d, e, f = {}, g = 0;
                    if (fb.isArray(b)) {
                        for (d = bc(a),
                        e = b.length; e > g; g++)
                            f[b[g]] = fb.css(a, b[g], !1, d);
                        return f
                    }
                    return void 0 !== c ? fb.style(a, b, c) : fb.css(a, b)
                }, a, b, arguments.length > 1)
            },
            show: function() {
                return C(this, !0)
            },
            hide: function() {
                return C(this)
            },
            toggle: function(a) {
                return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                    Db(this) ? fb(this).show() : fb(this).hide()
                })
            }
        }),
        fb.Tween = G,
        G.prototype = {
            constructor: G,
            init: function(a, b, c, d, e, f) {
                this.elem = a,
                this.prop = c,
                this.easing = e || "swing",
                this.options = b,
                this.start = this.now = this.cur(),
                this.end = d,
                this.unit = f || (fb.cssNumber[c] ? "" : "px")
            },
            cur: function() {
                var a = G.propHooks[this.prop];
                return a && a.get ? a.get(this) : G.propHooks._default.get(this)
            },
            run: function(a) {
                var b, c = G.propHooks[this.prop];
                return this.pos = b = this.options.duration ? fb.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a,
                this.now = (this.end - this.start) * b + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                c && c.set ? c.set(this) : G.propHooks._default.set(this),
                this
            }
        },
        G.prototype.init.prototype = G.prototype,
        G.propHooks = {
            _default: {
                get: function(a) {
                    var b;
                    return null  == a.elem[a.prop] || a.elem.style && null  != a.elem.style[a.prop] ? (b = fb.css(a.elem, a.prop, ""),
                    b && "auto" !== b ? b : 0) : a.elem[a.prop]
                },
                set: function(a) {
                    fb.fx.step[a.prop] ? fb.fx.step[a.prop](a) : a.elem.style && (null  != a.elem.style[fb.cssProps[a.prop]] || fb.cssHooks[a.prop]) ? fb.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                }
            }
        },
        G.propHooks.scrollTop = G.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        },
        fb.easing = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return .5 - Math.cos(a * Math.PI) / 2
            }
        },
        fb.fx = G.prototype.init,
        fb.fx.step = {};
        var oc, pc, qc = /^(?:toggle|show|hide)$/, rc = new RegExp("^(?:([+-])=|)(" + Bb + ")([a-z%]*)$","i"), sc = /queueHooks$/, tc = [K], uc = {
            "*": [function(a, b) {
                var c = this.createTween(a, b)
                  , d = c.cur()
                  , e = rc.exec(b)
                  , f = e && e[3] || (fb.cssNumber[a] ? "" : "px")
                  , g = (fb.cssNumber[a] || "px" !== f && +d) && rc.exec(fb.css(c.elem, a))
                  , h = 1
                  , i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3],
                    e = e || [],
                    g = +d || 1;
                    do
                        h = h || ".5",
                        g /= h,
                        fb.style(c.elem, a, g + f);
                    while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0,
                c.unit = f,
                c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]),
                c
            }
            ]
        };
        fb.Animation = fb.extend(M, {
            tweener: function(a, b) {
                fb.isFunction(a) ? (b = a,
                a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++)
                    c = a[d],
                    uc[c] = uc[c] || [],
                    uc[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? tc.unshift(a) : tc.push(a)
            }
        }),
        fb.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? fb.extend({}, a) : {
                complete: c || !c && b || fb.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !fb.isFunction(b) && b
            };
            return d.duration = fb.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in fb.fx.speeds ? fb.fx.speeds[d.duration] : fb.fx.speeds._default,
            (null  == d.queue || d.queue === !0) && (d.queue = "fx"),
            d.old = d.complete,
            d.complete = function() {
                fb.isFunction(d.old) && d.old.call(this),
                d.queue && fb.dequeue(this, d.queue)
            }
            ,
            d
        }
        ,
        fb.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(Db).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = fb.isEmptyObject(a)
                  , f = fb.speed(b, c, d)
                  , g = function() {
                    var b = M(this, fb.extend({}, a), f);
                    (e || fb._data(this, "finish")) && b.stop(!0)
                }
                ;
                return g.finish = g,
                e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop,
                    b(c)
                }
                ;
                return "string" != typeof a && (c = b,
                b = a,
                a = void 0),
                b && a !== !1 && this.queue(a || "fx", []),
                this.each(function() {
                    var b = !0
                      , e = null  != a && a + "queueHooks"
                      , f = fb.timers
                      , g = fb._data(this);
                    if (e)
                        g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g)
                            g[e] && g[e].stop && sc.test(e) && d(g[e]);
                    for (e = f.length; e--; )
                        f[e].elem !== this || null  != a && f[e].queue !== a || (f[e].anim.stop(c),
                        b = !1,
                        f.splice(e, 1));
                    (b || !c) && fb.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"),
                this.each(function() {
                    var b, c = fb._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = fb.timers, g = d ? d.length : 0;
                    for (c.finish = !0,
                    fb.queue(this, a, []),
                    e && e.stop && e.stop.call(this, !0),
                    b = f.length; b--; )
                        f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                        f.splice(b, 1));
                    for (b = 0; g > b; b++)
                        d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }),
        fb.each(["toggle", "show", "hide"], function(a, b) {
            var c = fb.fn[b];
            fb.fn[b] = function(a, d, e) {
                return null  == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(I(b, !0), a, d, e)
            }
        }),
        fb.each({
            slideDown: I("show"),
            slideUp: I("hide"),
            slideToggle: I("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            fb.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }),
        fb.timers = [],
        fb.fx.tick = function() {
            var a, b = fb.timers, c = 0;
            for (oc = fb.now(); c < b.length; c++)
                a = b[c],
                a() || b[c] !== a || b.splice(c--, 1);
            b.length || fb.fx.stop(),
            oc = void 0
        }
        ,
        fb.fx.timer = function(a) {
            fb.timers.push(a),
            a() ? fb.fx.start() : fb.timers.pop()
        }
        ,
        fb.fx.interval = 13,
        fb.fx.start = function() {
            pc || (pc = setInterval(fb.fx.tick, fb.fx.interval))
        }
        ,
        fb.fx.stop = function() {
            clearInterval(pc),
            pc = null 
        }
        ,
        fb.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        fb.fn.delay = function(a, b) {
            return a = fb.fx ? fb.fx.speeds[a] || a : a,
            b = b || "fx",
            this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        }
        ,
        function() {
            var a, b, c, d, e = pb.createElement("div");
            e.setAttribute("className", "t"),
            e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
            a = e.getElementsByTagName("a")[0],
            c = pb.createElement("select"),
            d = c.appendChild(pb.createElement("option")),
            b = e.getElementsByTagName("input")[0],
            a.style.cssText = "top:1px",
            db.getSetAttribute = "t" !== e.className,
            db.style = /top/.test(a.getAttribute("style")),
            db.hrefNormalized = "/a" === a.getAttribute("href"),
            db.checkOn = !!b.value,
            db.optSelected = d.selected,
            db.enctype = !!pb.createElement("form").enctype,
            c.disabled = !0,
            db.optDisabled = !d.disabled,
            b = pb.createElement("input"),
            b.setAttribute("value", ""),
            db.input = "" === b.getAttribute("value"),
            b.value = "t",
            b.setAttribute("type", "radio"),
            db.radioValue = "t" === b.value,
            a = b = c = d = e = null 
        }();
        var vc = /\r/g;
        fb.fn.extend({
            val: function(a) {
                var b, c, d, e = this[0];
                {
                    if (arguments.length)
                        return d = fb.isFunction(a),
                        this.each(function(c) {
                            var e;
                            1 === this.nodeType && (e = d ? a.call(this, c, fb(this).val()) : a,
                            null  == e ? e = "" : "number" == typeof e ? e += "" : fb.isArray(e) && (e = fb.map(e, function(a) {
                                return null  == a ? "" : a + ""
                            })),
                            b = fb.valHooks[this.type] || fb.valHooks[this.nodeName.toLowerCase()],
                            b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                        });
                    if (e)
                        return b = fb.valHooks[e.type] || fb.valHooks[e.nodeName.toLowerCase()],
                        b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
                        "string" == typeof c ? c.replace(vc, "") : null  == c ? "" : c)
                }
            }
        }),
        fb.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = fb.find.attr(a, "value");
                        return null  != b ? b : fb.text(a)
                    }
                },
                select: {
                    get: function(a) {
                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null  : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                            if (c = d[i],
                            !(!c.selected && i !== e || (db.optDisabled ? c.disabled : null  !== c.getAttribute("disabled")) || c.parentNode.disabled && fb.nodeName(c.parentNode, "optgroup"))) {
                                if (b = fb(c).val(),
                                f)
                                    return b;
                                g.push(b)
                            }
                        return g
                    },
                    set: function(a, b) {
                        for (var c, d, e = a.options, f = fb.makeArray(b), g = e.length; g--; )
                            if (d = e[g],
                            fb.inArray(fb.valHooks.option.get(d), f) >= 0)
                                try {
                                    d.selected = c = !0
                                } catch (h) {
                                    d.scrollHeight
                                }
                            else
                                d.selected = !1;
                        return c || (a.selectedIndex = -1),
                        e
                    }
                }
            }
        }),
        fb.each(["radio", "checkbox"], function() {
            fb.valHooks[this] = {
                set: function(a, b) {
                    return fb.isArray(b) ? a.checked = fb.inArray(fb(a).val(), b) >= 0 : void 0
                }
            },
            db.checkOn || (fb.valHooks[this].get = function(a) {
                return null  === a.getAttribute("value") ? "on" : a.value
            }
            )
        });
        var wc, xc, yc = fb.expr.attrHandle, zc = /^(?:checked|selected)$/i, Ac = db.getSetAttribute, Bc = db.input;
        fb.fn.extend({
            attr: function(a, b) {
                return Eb(this, fb.attr, a, b, arguments.length > 1)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    fb.removeAttr(this, a)
                })
            }
        }),
        fb.extend({
            attr: function(a, b, c) {
                var d, e, f = a.nodeType;
                if (a && 3 !== f && 8 !== f && 2 !== f)
                    return typeof a.getAttribute === yb ? fb.prop(a, b, c) : (1 === f && fb.isXMLDoc(a) || (b = b.toLowerCase(),
                    d = fb.attrHooks[b] || (fb.expr.match.bool.test(b) ? xc : wc)),
                    void 0 === c ? d && "get" in d && null  !== (e = d.get(a, b)) ? e : (e = fb.find.attr(a, b),
                    null  == e ? void 0 : e) : null  !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""),
                    c) : void fb.removeAttr(a, b))
            },
            removeAttr: function(a, b) {
                var c, d, e = 0, f = b && b.match(ub);
                if (f && 1 === a.nodeType)
                    for (; c = f[e++]; )
                        d = fb.propFix[c] || c,
                        fb.expr.match.bool.test(c) ? Bc && Ac || !zc.test(c) ? a[d] = !1 : a[fb.camelCase("default-" + c)] = a[d] = !1 : fb.attr(a, c, ""),
                        a.removeAttribute(Ac ? c : d)
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (!db.radioValue && "radio" === b && fb.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b),
                            c && (a.value = c),
                            b
                        }
                    }
                }
            }
        }),
        xc = {
            set: function(a, b, c) {
                return b === !1 ? fb.removeAttr(a, c) : Bc && Ac || !zc.test(c) ? a.setAttribute(!Ac && fb.propFix[c] || c, c) : a[fb.camelCase("default-" + c)] = a[c] = !0,
                c
            }
        },
        fb.each(fb.expr.match.bool.source.match(/\w+/g), function(a, b) {
            var c = yc[b] || fb.find.attr;
            yc[b] = Bc && Ac || !zc.test(b) ? function(a, b, d) {
                var e, f;
                return d || (f = yc[b],
                yc[b] = e,
                e = null  != c(a, b, d) ? b.toLowerCase() : null ,
                yc[b] = f),
                e
            }
             : function(a, b, c) {
                return c ? void 0 : a[fb.camelCase("default-" + b)] ? b.toLowerCase() : null 
            }
        }),
        Bc && Ac || (fb.attrHooks.value = {
            set: function(a, b, c) {
                return fb.nodeName(a, "input") ? void (a.defaultValue = b) : wc && wc.set(a, b, c)
            }
        }),
        Ac || (wc = {
            set: function(a, b, c) {
                var d = a.getAttributeNode(c);
                return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)),
                d.value = b += "",
                "value" === c || b === a.getAttribute(c) ? b : void 0
            }
        },
        yc.id = yc.name = yc.coords = function(a, b, c) {
            var d;
            return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null 
        }
        ,
        fb.valHooks.button = {
            get: function(a, b) {
                var c = a.getAttributeNode(b);
                return c && c.specified ? c.value : void 0
            },
            set: wc.set
        },
        fb.attrHooks.contenteditable = {
            set: function(a, b, c) {
                wc.set(a, "" === b ? !1 : b, c)
            }
        },
        fb.each(["width", "height"], function(a, b) {
            fb.attrHooks[b] = {
                set: function(a, c) {
                    return "" === c ? (a.setAttribute(b, "auto"),
                    c) : void 0
                }
            }
        })),
        db.style || (fb.attrHooks.style = {
            get: function(a) {
                return a.style.cssText || void 0
            },
            set: function(a, b) {
                return a.style.cssText = b + ""
            }
        });
        var Cc = /^(?:input|select|textarea|button|object)$/i
          , Dc = /^(?:a|area)$/i;
        fb.fn.extend({
            prop: function(a, b) {
                return Eb(this, fb.prop, a, b, arguments.length > 1)
            },
            removeProp: function(a) {
                return a = fb.propFix[a] || a,
                this.each(function() {
                    try {
                        this[a] = void 0,
                        delete this[a]
                    } catch (b) {}
                })
            }
        }),
        fb.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(a, b, c) {
                var d, e, f, g = a.nodeType;
                if (a && 3 !== g && 8 !== g && 2 !== g)
                    return f = 1 !== g || !fb.isXMLDoc(a),
                    f && (b = fb.propFix[b] || b,
                    e = fb.propHooks[b]),
                    void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null  !== (d = e.get(a, b)) ? d : a[b]
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        var b = fb.find.attr(a, "tabindex");
                        return b ? parseInt(b, 10) : Cc.test(a.nodeName) || Dc.test(a.nodeName) && a.href ? 0 : -1
                    }
                }
            }
        }),
        db.hrefNormalized || fb.each(["href", "src"], function(a, b) {
            fb.propHooks[b] = {
                get: function(a) {
                    return a.getAttribute(b, 4)
                }
            }
        }),
        db.optSelected || (fb.propHooks.selected = {
            get: function(a) {
                var b = a.parentNode;
                return b && (b.selectedIndex,
                b.parentNode && b.parentNode.selectedIndex),
                null 
            }
        }),
        fb.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            fb.propFix[this.toLowerCase()] = this
        }),
        db.enctype || (fb.propFix.enctype = "encoding");
        var Ec = /[\t\r\n\f]/g;
        fb.fn.extend({
            addClass: function(a) {
                var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a;
                if (fb.isFunction(a))
                    return this.each(function(b) {
                        fb(this).addClass(a.call(this, b, this.className))
                    });
                if (j)
                    for (b = (a || "").match(ub) || []; i > h; h++)
                        if (c = this[h],
                        d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Ec, " ") : " ")) {
                            for (f = 0; e = b[f++]; )
                                d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                            g = fb.trim(d),
                            c.className !== g && (c.className = g)
                        }
                return this
            },
            removeClass: function(a) {
                var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a;
                if (fb.isFunction(a))
                    return this.each(function(b) {
                        fb(this).removeClass(a.call(this, b, this.className))
                    });
                if (j)
                    for (b = (a || "").match(ub) || []; i > h; h++)
                        if (c = this[h],
                        d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Ec, " ") : "")) {
                            for (f = 0; e = b[f++]; )
                                for (; d.indexOf(" " + e + " ") >= 0; )
                                    d = d.replace(" " + e + " ", " ");
                            g = a ? fb.trim(d) : "",
                            c.className !== g && (c.className = g)
                        }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(fb.isFunction(a) ? function(c) {
                    fb(this).toggleClass(a.call(this, c, this.className, b), b)
                }
                 : function() {
                    if ("string" === c)
                        for (var b, d = 0, e = fb(this), f = a.match(ub) || []; b = f[d++]; )
                            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                    else
                        (c === yb || "boolean" === c) && (this.className && fb._data(this, "__className__", this.className),
                        this.className = this.className || a === !1 ? "" : fb._data(this, "__className__") || "")
                }
                )
            },
            hasClass: function(a) {
                for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                    if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Ec, " ").indexOf(b) >= 0)
                        return !0;
                return !1
            }
        }),
        fb.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            fb.fn[b] = function(a, c) {
                return arguments.length > 0 ? this.on(b, null , a, c) : this.trigger(b)
            }
        }),
        fb.fn.extend({
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            },
            bind: function(a, b, c) {
                return this.on(a, null , b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null , b)
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            }
        });
        var Fc = fb.now()
          , Gc = /\?/
          , Hc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        fb.parseJSON = function(b) {
            if (a.JSON && a.JSON.parse)
                return a.JSON.parse(b + "");
            var c, d = null , e = fb.trim(b + "");
            return e && !fb.trim(e.replace(Hc, function(a, b, e, f) {
                return c && b && (d = 0),
                0 === d ? a : (c = e || b,
                d += !f - !e,
                "")
            })) ? Function("return " + e)() : fb.error("Invalid JSON: " + b)
        }
        ,
        fb.parseXML = function(b) {
            var c, d;
            if (!b || "string" != typeof b)
                return null ;
            try {
                a.DOMParser ? (d = new DOMParser,
                c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"),
                c.async = "false",
                c.loadXML(b))
            } catch (e) {
                c = void 0
            }
            return c && c.documentElement && !c.getElementsByTagName("parsererror").length || fb.error("Invalid XML: " + b),
            c
        }
        ;
        var Ic, Jc, Kc = /#.*$/, Lc = /([?&])_=[^&]*/, Mc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Nc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Oc = /^(?:GET|HEAD)$/, Pc = /^\/\//, Qc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Rc = {}, Sc = {}, Tc = "*/".concat("*");
        try {
            Jc = location.href
        } catch (Uc) {
            Jc = pb.createElement("a"),
            Jc.href = "",
            Jc = Jc.href
        }
        Ic = Qc.exec(Jc.toLowerCase()) || [],
        fb.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Jc,
                type: "GET",
                isLocal: Nc.test(Ic[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Tc,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": fb.parseJSON,
                    "text xml": fb.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(a, b) {
                return b ? P(P(a, fb.ajaxSettings), b) : P(fb.ajaxSettings, a)
            },
            ajaxPrefilter: N(Rc),
            ajaxTransport: N(Sc),
            ajax: function(a, b) {
                function c(a, b, c, d) {
                    var e, k, r, s, u, w = b;
                    2 !== t && (t = 2,
                    h && clearTimeout(h),
                    j = void 0,
                    g = d || "",
                    v.readyState = a > 0 ? 4 : 0,
                    e = a >= 200 && 300 > a || 304 === a,
                    c && (s = Q(l, v, c)),
                    s = R(l, s, v, e),
                    e ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"),
                    u && (fb.lastModified[f] = u),
                    u = v.getResponseHeader("etag"),
                    u && (fb.etag[f] = u)),
                    204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state,
                    k = s.data,
                    r = s.error,
                    e = !r)) : (r = w,
                    (a || !w) && (w = "error",
                    0 > a && (a = 0))),
                    v.status = a,
                    v.statusText = (b || w) + "",
                    e ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]),
                    v.statusCode(q),
                    q = void 0,
                    i && n.trigger(e ? "ajaxSuccess" : "ajaxError", [v, l, e ? k : r]),
                    p.fireWith(m, [v, w]),
                    i && (n.trigger("ajaxComplete", [v, l]),
                    --fb.active || fb.event.trigger("ajaxStop")))
                }
                "object" == typeof a && (b = a,
                a = void 0),
                b = b || {};
                var d, e, f, g, h, i, j, k, l = fb.ajaxSetup({}, b), m = l.context || l, n = l.context && (m.nodeType || m.jquery) ? fb(m) : fb.event, o = fb.Deferred(), p = fb.Callbacks("once memory"), q = l.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!k)
                                for (k = {}; b = Mc.exec(g); )
                                    k[b[1].toLowerCase()] = b[2];
                            b = k[a.toLowerCase()]
                        }
                        return null  == b ? null  : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? g : null 
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a,
                        r[a] = b),
                        this
                    },
                    overrideMimeType: function(a) {
                        return t || (l.mimeType = a),
                        this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a)
                                    q[b] = [q[b], a[b]];
                            else
                                v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return j && j.abort(b),
                        c(0, b),
                        this
                    }
                };
                if (o.promise(v).complete = p.add,
                v.success = v.done,
                v.error = v.fail,
                l.url = ((a || l.url || Jc) + "").replace(Kc, "").replace(Pc, Ic[1] + "//"),
                l.type = b.method || b.type || l.method || l.type,
                l.dataTypes = fb.trim(l.dataType || "*").toLowerCase().match(ub) || [""],
                null  == l.crossDomain && (d = Qc.exec(l.url.toLowerCase()),
                l.crossDomain = !(!d || d[1] === Ic[1] && d[2] === Ic[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Ic[3] || ("http:" === Ic[1] ? "80" : "443")))),
                l.data && l.processData && "string" != typeof l.data && (l.data = fb.param(l.data, l.traditional)),
                O(Rc, l, b, v),
                2 === t)
                    return v;
                i = l.global,
                i && 0 === fb.active++ && fb.event.trigger("ajaxStart"),
                l.type = l.type.toUpperCase(),
                l.hasContent = !Oc.test(l.type),
                f = l.url,
                l.hasContent || (l.data && (f = l.url += (Gc.test(f) ? "&" : "?") + l.data,
                delete l.data),
                l.cache === !1 && (l.url = Lc.test(f) ? f.replace(Lc, "$1_=" + Fc++) : f + (Gc.test(f) ? "&" : "?") + "_=" + Fc++)),
                l.ifModified && (fb.lastModified[f] && v.setRequestHeader("If-Modified-Since", fb.lastModified[f]),
                fb.etag[f] && v.setRequestHeader("If-None-Match", fb.etag[f])),
                (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType),
                v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Tc + "; q=0.01" : "") : l.accepts["*"]);
                for (e in l.headers)
                    v.setRequestHeader(e, l.headers[e]);
                if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t))
                    return v.abort();
                u = "abort";
                for (e in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    v[e](l[e]);
                if (j = O(Sc, l, b, v)) {
                    v.readyState = 1,
                    i && n.trigger("ajaxSend", [v, l]),
                    l.async && l.timeout > 0 && (h = setTimeout(function() {
                        v.abort("timeout")
                    }, l.timeout));
                    try {
                        t = 1,
                        j.send(r, c)
                    } catch (w) {
                        if (!(2 > t))
                            throw w;
                        c(-1, w)
                    }
                } else
                    c(-1, "No Transport");
                return v
            },
            getJSON: function(a, b, c) {
                return fb.get(a, b, c, "json")
            },
            getScript: function(a, b) {
                return fb.get(a, void 0, b, "script")
            }
        }),
        fb.each(["get", "post"], function(a, b) {
            fb[b] = function(a, c, d, e) {
                return fb.isFunction(c) && (e = e || d,
                d = c,
                c = void 0),
                fb.ajax({
                    url: a,
                    type: b,
                    dataType: e,
                    data: c,
                    success: d
                })
            }
        }),
        fb.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
            fb.fn[b] = function(a) {
                return this.on(b, a)
            }
        }),
        fb._evalUrl = function(a) {
            return fb.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
        ,
        fb.fn.extend({
            wrapAll: function(a) {
                if (fb.isFunction(a))
                    return this.each(function(b) {
                        fb(this).wrapAll(a.call(this, b))
                    });
                if (this[0]) {
                    var b = fb(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]),
                    b.map(function() {
                        for (var a = this; a.firstChild && 1 === a.firstChild.nodeType; )
                            a = a.firstChild;
                        return a
                    }).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                return this.each(fb.isFunction(a) ? function(b) {
                    fb(this).wrapInner(a.call(this, b))
                }
                 : function() {
                    var b = fb(this)
                      , c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                }
                )
            },
            wrap: function(a) {
                var b = fb.isFunction(a);
                return this.each(function(c) {
                    fb(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    fb.nodeName(this, "body") || fb(this).replaceWith(this.childNodes)
                }).end()
            }
        }),
        fb.expr.filters.hidden = function(a) {
            return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !db.reliableHiddenOffsets() && "none" === (a.style && a.style.display || fb.css(a, "display"))
        }
        ,
        fb.expr.filters.visible = function(a) {
            return !fb.expr.filters.hidden(a)
        }
        ;
        var Vc = /%20/g
          , Wc = /\[\]$/
          , Xc = /\r?\n/g
          , Yc = /^(?:submit|button|image|reset|file)$/i
          , Zc = /^(?:input|select|textarea|keygen)/i;
        fb.param = function(a, b) {
            var c, d = [], e = function(a, b) {
                b = fb.isFunction(b) ? b() : null  == b ? "" : b,
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            }
            ;
            if (void 0 === b && (b = fb.ajaxSettings && fb.ajaxSettings.traditional),
            fb.isArray(a) || a.jquery && !fb.isPlainObject(a))
                fb.each(a, function() {
                    e(this.name, this.value)
                });
            else
                for (c in a)
                    S(c, a[c], b, e);
            return d.join("&").replace(Vc, "+")
        }
        ,
        fb.fn.extend({
            serialize: function() {
                return fb.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var a = fb.prop(this, "elements");
                    return a ? fb.makeArray(a) : this
                }).filter(function() {
                    var a = this.type;
                    return this.name && !fb(this).is(":disabled") && Zc.test(this.nodeName) && !Yc.test(a) && (this.checked || !Fb.test(a))
                }).map(function(a, b) {
                    var c = fb(this).val();
                    return null  == c ? null  : fb.isArray(c) ? fb.map(c, function(a) {
                        return {
                            name: b.name,
                            value: a.replace(Xc, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(Xc, "\r\n")
                    }
                }).get()
            }
        }),
        fb.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && T() || U()
        }
         : T;
        var $c = 0
          , _c = {}
          , ad = fb.ajaxSettings.xhr();
        a.ActiveXObject && fb(a).on("unload", function() {
            for (var a in _c)
                _c[a](void 0, !0)
        }),
        db.cors = !!ad && "withCredentials" in ad,
        ad = db.ajax = !!ad,
        ad && fb.ajaxTransport(function(a) {
            if (!a.crossDomain || db.cors) {
                var b;
                return {
                    send: function(c, d) {
                        var e, f = a.xhr(), g = ++$c;
                        if (f.open(a.type, a.url, a.async, a.username, a.password),
                        a.xhrFields)
                            for (e in a.xhrFields)
                                f[e] = a.xhrFields[e];
                        a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType),
                        a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                        for (e in c)
                            void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                        f.send(a.hasContent && a.data || null ),
                        b = function(c, e) {
                            var h, i, j;
                            if (b && (e || 4 === f.readyState))
                                if (delete _c[g],
                                b = void 0,
                                f.onreadystatechange = fb.noop,
                                e)
                                    4 !== f.readyState && f.abort();
                                else {
                                    j = {},
                                    h = f.status,
                                    "string" == typeof f.responseText && (j.text = f.responseText);
                                    try {
                                        i = f.statusText
                                    } catch (k) {
                                        i = ""
                                    }
                                    h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                                }
                            j && d(h, i, j, f.getAllResponseHeaders())
                        }
                        ,
                        a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = _c[g] = b : b()
                    },
                    abort: function() {
                        b && b(void 0, !0)
                    }
                }
            }
        }),
        fb.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(a) {
                    return fb.globalEval(a),
                    a
                }
            }
        }),
        fb.ajaxPrefilter("script", function(a) {
            void 0 === a.cache && (a.cache = !1),
            a.crossDomain && (a.type = "GET",
            a.global = !1)
        }),
        fb.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var b, c = pb.head || fb("head")[0] || pb.documentElement;
                return {
                    send: function(d, e) {
                        b = pb.createElement("script"),
                        b.async = !0,
                        a.scriptCharset && (b.charset = a.scriptCharset),
                        b.src = a.url,
                        b.onload = b.onreadystatechange = function(a, c) {
                            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null ,
                            b.parentNode && b.parentNode.removeChild(b),
                            b = null ,
                            c || e(200, "success"))
                        }
                        ,
                        c.insertBefore(b, c.firstChild)
                    },
                    abort: function() {
                        b && b.onload(void 0, !0)
                    }
                }
            }
        });
        var bd = []
          , cd = /(=)\?(?=&|$)|\?\?/;
        fb.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var a = bd.pop() || fb.expando + "_" + Fc++;
                return this[a] = !0,
                a
            }
        }),
        fb.ajaxPrefilter("json jsonp", function(b, c, d) {
            var e, f, g, h = b.jsonp !== !1 && (cd.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && cd.test(b.data) && "data");
            return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = fb.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
            h ? b[h] = b[h].replace(cd, "$1" + e) : b.jsonp !== !1 && (b.url += (Gc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
            b.converters["script json"] = function() {
                return g || fb.error(e + " was not called"),
                g[0]
            }
            ,
            b.dataTypes[0] = "json",
            f = a[e],
            a[e] = function() {
                g = arguments
            }
            ,
            d.always(function() {
                a[e] = f,
                b[e] && (b.jsonpCallback = c.jsonpCallback,
                bd.push(e)),
                g && fb.isFunction(f) && f(g[0]),
                g = f = void 0
            }),
            "script") : void 0
        }),
        fb.parseHTML = function(a, b, c) {
            if (!a || "string" != typeof a)
                return null ;
            "boolean" == typeof b && (c = b,
            b = !1),
            b = b || pb;
            var d = mb.exec(a)
              , e = !c && [];
            return d ? [b.createElement(d[1])] : (d = fb.buildFragment([a], b, e),
            e && e.length && fb(e).remove(),
            fb.merge([], d.childNodes))
        }
        ;
        var dd = fb.fn.load;
        fb.fn.load = function(a, b, c) {
            if ("string" != typeof a && dd)
                return dd.apply(this, arguments);
            var d, e, f, g = this, h = a.indexOf(" ");
            return h >= 0 && (d = a.slice(h, a.length),
            a = a.slice(0, h)),
            fb.isFunction(b) ? (c = b,
            b = void 0) : b && "object" == typeof b && (f = "POST"),
            g.length > 0 && fb.ajax({
                url: a,
                type: f,
                dataType: "html",
                data: b
            }).done(function(a) {
                e = arguments,
                g.html(d ? fb("<div>").append(fb.parseHTML(a)).find(d) : a)
            }).complete(c && function(a, b) {
                g.each(c, e || [a.responseText, b, a])
            }
            ),
            this
        }
        ,
        fb.expr.filters.animated = function(a) {
            return fb.grep(fb.timers, function(b) {
                return a === b.elem
            }).length
        }
        ;
        var ed = a.document.documentElement;
        fb.offset = {
            setOffset: function(a, b, c) {
                var d, e, f, g, h, i, j, k = fb.css(a, "position"), l = fb(a), m = {};
                "static" === k && (a.style.position = "relative"),
                h = l.offset(),
                f = fb.css(a, "top"),
                i = fb.css(a, "left"),
                j = ("absolute" === k || "fixed" === k) && fb.inArray("auto", [f, i]) > -1,
                j ? (d = l.position(),
                g = d.top,
                e = d.left) : (g = parseFloat(f) || 0,
                e = parseFloat(i) || 0),
                fb.isFunction(b) && (b = b.call(a, c, h)),
                null  != b.top && (m.top = b.top - h.top + g),
                null  != b.left && (m.left = b.left - h.left + e),
                "using" in b ? b.using.call(a, m) : l.css(m)
            }
        },
        fb.fn.extend({
            offset: function(a) {
                if (arguments.length)
                    return void 0 === a ? this : this.each(function(b) {
                        fb.offset.setOffset(this, a, b)
                    });
                var b, c, d = {
                    top: 0,
                    left: 0
                }, e = this[0], f = e && e.ownerDocument;
                if (f)
                    return b = f.documentElement,
                    fb.contains(b, e) ? (typeof e.getBoundingClientRect !== yb && (d = e.getBoundingClientRect()),
                    c = V(f),
                    {
                        top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                        left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                    }) : d
            },
            position: function() {
                if (this[0]) {
                    var a, b, c = {
                        top: 0,
                        left: 0
                    }, d = this[0];
                    return "fixed" === fb.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(),
                    b = this.offset(),
                    fb.nodeName(a[0], "html") || (c = a.offset()),
                    c.top += fb.css(a[0], "borderTopWidth", !0),
                    c.left += fb.css(a[0], "borderLeftWidth", !0)),
                    {
                        top: b.top - c.top - fb.css(d, "marginTop", !0),
                        left: b.left - c.left - fb.css(d, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var a = this.offsetParent || ed; a && !fb.nodeName(a, "html") && "static" === fb.css(a, "position"); )
                        a = a.offsetParent;
                    return a || ed
                })
            }
        }),
        fb.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(a, b) {
            var c = /Y/.test(b);
            fb.fn[a] = function(d) {
                return Eb(this, function(a, d, e) {
                    var f = V(a);
                    return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? fb(f).scrollLeft() : e, c ? e : fb(f).scrollTop()) : a[d] = e)
                }, a, d, arguments.length, null )
            }
        }),
        fb.each(["top", "left"], function(a, b) {
            fb.cssHooks[b] = A(db.pixelPosition, function(a, c) {
                return c ? (c = cc(a, b),
                ec.test(c) ? fb(a).position()[b] + "px" : c) : void 0
            })
        }),
        fb.each({
            Height: "height",
            Width: "width"
        }, function(a, b) {
            fb.each({
                padding: "inner" + a,
                content: b,
                "": "outer" + a
            }, function(c, d) {
                fb.fn[d] = function(d, e) {
                    var f = arguments.length && (c || "boolean" != typeof d)
                      , g = c || (d === !0 || e === !0 ? "margin" : "border");
                    return Eb(this, function(b, c, d) {
                        var e;
                        return fb.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                        Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? fb.css(b, c, g) : fb.style(b, c, d, g)
                    }, b, f ? d : void 0, f, null )
                }
            })
        }),
        fb.fn.size = function() {
            return this.length
        }
        ,
        fb.fn.andSelf = fb.fn.addBack,
        "function" == typeof define && define.amd && define("jquery", [], function() {
            return fb
        });
        var fd = a.jQuery
          , gd = a.$;
        return fb.noConflict = function(b) {
            return a.$ === fb && (a.$ = gd),
            b && a.jQuery === fb && (a.jQuery = fd),
            fb
        }
        ,
        typeof b === yb && (a.jQuery = a.$ = fb),
        fb
    })
}),
define("core/extra/jquery", function(require) {
    var a = require("core/jquery/jquery")
      , b = window.console
      , c = b && "function" == typeof b.log;
    a.log = function() {
        c && b.log.apply(b, arguments)
    }
}),
define("kit/dom/parseDom", function(require, a, b) {
    var c = require("core/chaos/jquery")
      , d = function(a, b) {
        var d = c.extend({
            camelCase: !0,
            merge: !0,
            log: !0,
            prop: "data-role",
            roles: []
        }, b)
          , e = {}
          , f = ""
          , g = c.log
          , h = d.prop.toString()
          , i = Array.isArray(d.roles) ? d.roles : [];
        return a = c(a),
        f = a.selector,
        i.length > 0 && i.forEach(function(a) {
            var b = d.camelCase ? c.camelCase(a) : a;
            e[b] = null 
        }),
        (i.length <= 0 || d.merge) && a.find("[" + h + "]").each(function() {
            var a = c(this).attr(h)
              , b = d.camelCase ? c.camelCase(a) : a;
            e[b] || null  === e[b] || (e[b] = null ,
            i.push(a))
        }),
        c.each(i, function(b, i) {
            var j = "[" + h + '="' + i + '"]'
              , k = d.camelCase ? c.camelCase(i) : i;
            e[k] = a.find(j),
            e[k].length <= 0 && d.log && g("Node: " + j + " not exists in " + f)
        }),
        e.root = a,
        e
    }
    ;
    b.exports = d
}),
define("conf/global", function(require) {
    require("core/chaos/jquery"),
    require("kit/dom/parseDom"),
    require("more/es5-safe"),
    require("more/class"),
    require("more/events"),
    require("more/base"),
    require("more/querystring"),
    require("more/mustache"),
    require("common/historyM"),
    require("common/listener"),
    require("common/transmission"),
    require("common/transport")
}),
define("more/es5-safe", function() {
    function a(a) {
        function b() {}
        var c;
        return Object.create ? c = Object.create(a) : (b.prototype = a,
        c = new b),
        c
    }
    var b = Object.prototype
      , c = Array.prototype
      , d = Function.prototype
      , e = String.prototype
      , f = b.hasOwnProperty
      , g = c.slice;
    d.bind || (d.bind = function(b) {
        function c() {
            if (this instanceof c) {
                var f = a(d.prototype)
                  , h = d.apply(f, e.concat(g.call(arguments)));
                return Object(h) === h ? h : f
            }
            return d.apply(b, e.concat(g.call(arguments)))
        }
        var d = this;
        if ("function" != typeof d)
            throw new TypeError("Bind must be called on a function");
        var e = g.call(arguments, 1);
        return c
    }
    ),
    Object.keys || (Object.keys = function() {
        var a = !{
            toString: ""
        }.propertyIsEnumerable("toString")
          , b = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]
          , c = b.length;
        return function(d) {
            if (d !== Object(d))
                throw new TypeError(d + " is not an object");
            var e = [];
            for (var g in d)
                f.call(d, g) && e.push(g);
            if (a)
                for (var h = 0; c > h; h++)
                    f.call(d, b[h]) && e.push(b[h]);
            return e
        }
    }()),
    Array.isArray || (Array.isArray = function(a) {
        return "[object Array]" === b.toString.call(a)
    }
    ),
    c.forEach || (c.forEach = function(a, b) {
        for (var c = 0, d = this.length >>> 0; d > c; c++)
            c in this && a.call(b, this[c], c, this)
    }
    ),
    c.map || (c.map = function(a, b) {
        for (var c = this.length >>> 0, d = new Array(c), e = 0; c > e; e++)
            e in this && (d[e] = a.call(b, this[e], e, this));
        return d
    }
    ),
    c.filter || (c.filter = function(a, b) {
        for (var c, d = [], e = 0, f = this.length >>> 0; f > e; e++)
            e in this && (c = this[e],
            a.call(b, c, e, this) && d.push(c));
        return d
    }
    ),
    c.every || (c.every = function(a, b) {
        for (var c = 0, d = this.length >>> 0; d > c; c++)
            if (c in this && !a.call(b, this[c], c, this))
                return !1;
        return !0
    }
    ),
    c.some || (c.some = function(a, b) {
        for (var c = 0, d = this.length >>> 0; d > c; c++)
            if (c in this && a.call(b, this[c], c, this))
                return !0;
        return !1
    }
    ),
    c.reduce || (c.reduce = function(a) {
        if ("function" != typeof a)
            throw new TypeError(a + " is not an function");
        var b, c = this.length >>> 0, d = 0;
        if (arguments.length > 1)
            b = arguments[1];
        else
            for (; ; ) {
                if (d in this) {
                    b = this[d++];
                    break
                }
                if (++d >= c)
                    throw new TypeError("reduce of empty array with on initial value")
            }
        for (; c > d; d++)
            d in this && (b = a.call(null , b, this[d], d, this));
        return b
    }
    ),
    c.reduceRight || (c.reduceRight = function(a) {
        if ("function" != typeof a)
            throw new TypeError(a + " is not an function");
        var b, c = this.length >>> 0, d = c - 1;
        if (arguments.length > 1)
            b = arguments[1];
        else
            for (; ; ) {
                if (d in this) {
                    b = this[d--];
                    break
                }
                if (--d < 0)
                    throw new TypeError("reduce of empty array with on initial value")
            }
        for (; d >= 0; d--)
            d in this && (b = a.call(null , b, this[d], d, this));
        return b
    }
    ),
    c.indexOf || (c.indexOf = function(a, b) {
        var c = this.length >>> 0;
        for (b = Number(b) || 0,
        b = Math[0 > b ? "ceil" : "floor"](b),
        0 > b && (b = Math.max(b + c, 0)); c > b; b++)
            if (b in this && this[b] === a)
                return b;
        return -1
    }
    ),
    c.lastIndexOf || (c.lastIndexOf = function(a, b) {
        var c = this.length >>> 0;
        for (b = Number(b) || c - 1,
        b = Math[0 > b ? "ceil" : "floor"](b),
        0 > b && (b += c),
        b = Math.min(b, c - 1); b >= 0; b--)
            if (b in this && this[b] === a)
                return b;
        return -1
    }
    ),
    e.trim || (e.trim = function() {
        var a = ["\\s", "00A0", "1680", "180E", "2000-\\u200A", "200B", "2028", "2029", "202F", "205F", "3000"].join("\\u")
          , b = new RegExp("^[" + a + "]+")
          , c = new RegExp("[" + a + "]+$");
        return function() {
            return String(this).replace(b, "").replace(c, "")
        }
    }()),
    Date.now || (Date.now = function() {
        return +new Date
    }
    )
}),
define("more/class", function(require, a, b) {
    function c(a) {
        return this instanceof c || !l(a) ? void 0 : e(a)
    }
    function d(a) {
        var b, d;
        for (b in a)
            d = a[b],
            c.Mutators.hasOwnProperty(b) ? c.Mutators[b].call(this, d) : this.prototype[b] = d
    }
    function e(a) {
        return a.extend = c.extend,
        a.implement = d,
        a
    }
    function f() {}
    function g(a, b, c) {
        for (var d in b)
            if (b.hasOwnProperty(d)) {
                if (c && -1 === m(c, d))
                    continue;"prototype" !== d && (a[d] = b[d])
            }
    }
    function h(a) {
        if (n) {
            var b = n();
            if (b) {
                var c = b.uri.split(/[\/\\]/).pop();
                Object.defineProperties ? Object.defineProperties(a, {
                    __module: {
                        value: b
                    },
                    __filename: {
                        value: c
                    }
                }) : (a.__module = b,
                a.__filename = c)
            }
        }
    }
    b.exports = c,
    c.create = function(a, b) {
        function f() {
            a.apply(this, arguments),
            this.constructor === f && this.initialize && this.initialize.apply(this, arguments)
        }
        return l(a) || (b = a,
        a = null ),
        b || (b = {}),
        a || (a = b.Extends || c),
        b.Extends = a,
        a !== c && g(f, a, a.StaticsWhiteList),
        d.call(f, b),
        e(f)
    }
    ,
    c.extend = function(a) {
        return a || (a = {}),
        a.Extends = this,
        c.create(a)
    }
    ,
    c.Mutators = {
        Extends: function(a) {
            var b = this.prototype
              , c = i(a.prototype);
            g(c, b),
            c.constructor = this,
            this.prototype = c,
            this.superclass = a.prototype,
            h(c)
        },
        Implements: function(a) {
            k(a) || (a = [a]);
            for (var b, c = this.prototype; b = a.shift(); )
                g(c, b.prototype || b)
        },
        Statics: function(a) {
            g(this, a)
        }
    };
    var i = Object.__proto__ ? function(a) {
        return {
            __proto__: a
        }
    }
     : function(a) {
        return f.prototype = a,
        new f
    }
      , j = Object.prototype.toString
      , k = Array.isArray;
    k || (k = function(a) {
        return "[object Array]" === j.call(a)
    }
    );
    var l = function(a) {
        return "[object Function]" === j.call(a)
    }
      , m = Array.prototype.indexOf ? function(a, b) {
        return a.indexOf(b)
    }
     : function(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            if (a[c] === b)
                return c;
        return -1
    }
      , n = b.constructor._getCompilingModule
}),
define("more/events", function() {
    function a() {}
    var b = /\s+/;
    a.prototype.on = function(a, c, d) {
        var e, f, g;
        if (!c)
            return this;
        for (e = this.__events || (this.__events = {}),
        a = a.split(b); f = a.shift(); )
            g = e[f] || (e[f] = []),
            g.push(c, d);
        return this
    }
    ,
    a.prototype.off = function(a, d, e) {
        var f, g, h, i;
        if (!(f = this.__events))
            return this;
        if (!(a || d || e))
            return delete this.__events,
            this;
        for (a = a ? a.split(b) : c(f); g = a.shift(); )
            if (h = f[g])
                if (d || e)
                    for (i = h.length - 2; i >= 0; i -= 2)
                        d && h[i] !== d || e && h[i + 1] !== e || h.splice(i, 2);
                else
                    delete f[g];
        return this
    }
    ,
    a.prototype.trigger = function(a) {
        var c, d, e, f, g, h, i, j = [];
        if (!(c = this.__events))
            return this;
        for (a = a.split(b),
        g = 1,
        h = arguments.length; h > g; g++)
            j[g - 1] = arguments[g];
        for (; d = a.shift(); ) {
            if ((e = c.all) && (e = e.slice()),
            (f = c[d]) && (f = f.slice()),
            f)
                for (g = 0,
                h = f.length; h > g; g += 2)
                    f[g].apply(f[g + 1] || this, j);
            if (e)
                for (i = [d].concat(j),
                g = 0,
                h = e.length; h > g; g += 2)
                    e[g].apply(e[g + 1] || this, i)
        }
        return this
    }
    ,
    a.mixTo = function(b) {
        b = b.prototype || b;
        var c = a.prototype;
        for (var d in c)
            c.hasOwnProperty(d) && (b[d] = c[d])
    }
    ;
    var c = Object.keys;
    return c || (c = function(a) {
        var b = [];
        for (var c in a)
            a.hasOwnProperty(c) && b.push(c);
        return b
    }
    ),
    a
}),
define("more/base", function(require, a, b) {
    var c = require("core/chaos/jquery")
      , d = require("more/class")
      , e = require("more/events")
      , f = function(a) {
        this.objs && c.each(this.objs, function(b, d) {
            d && c.isFunction(d[a]) && d[a]()
        })
    }
      , g = d.create({
        Implements: [e],
        conf: {},
        initialize: function(a) {
            this.objs = {},
            this.nodes = {},
            this.data = {},
            this.bound = {},
            this.setOptions(a),
            this.prepare(),
            this.parseDom(),
            this.build(),
            this.setBound(),
            this.attach()
        },
        setOptions: function(a) {
            this.conf = c.extend(!0, {}, this.conf, a)
        },
        prepare: c.noop,
        parseDom: c.noop,
        build: c.noop,
        setBound: function() {
            this.bound = {}
        },
        setDomEvents: c.noop,
        setCustEvents: c.noop,
        setListener: c.noop,
        set: function(a, b) {
            this.data && (this.data[a] = b,
            this.trigger("change"))
        },
        get: function(a) {
            return this.data ? this.data[a] : void 0
        },
        attach: function() {
            this.get("attached") || (this.set("attached", !0),
            this.setDomEvents("add"),
            this.setCustEvents("add"),
            this.setListener("add"),
            f.call(this, "attach"),
            this.trigger("attach"))
        },
        detach: function() {
            this.get("attached") && (this.set("attached", !1),
            this.trigger("detach"),
            f.call(this, "detach"),
            this.setListener("remove"),
            this.setCustEvents("remove"),
            this.setDomEvents("remove"))
        },
        destroy: function() {
            this.detach(),
            c.each(this.nodes, function(a, b) {
                c(b).remove()
            }),
            f.call(this, "destroy"),
            this.conf = null ,
            this.objs = null ,
            this.nodes = null ,
            this.data = null ,
            this.bound = null ,
            this.trigger("destroy")
        }
    });
    b.exports = g
}),
define("more/querystring", function(require, a, b) {
    function c(a) {
        return a && "[object Object]" === f.call(a) && "isPrototypeOf" in a
    }
    function d(a) {
        return a !== Object(a)
    }
    var e = {};
    e.escape = encodeURIComponent,
    e.unescape = function(a) {
        return decodeURIComponent(a.replace(/\+/g, " "))
    }
    ,
    e.stringify = function(a, b, f, i) {
        if (!c(a))
            return "";
        b = b || "&",
        f = f || "=",
        i = i || !1;
        var j, k, l = [], m = e.escape;
        for (j in a)
            if (g.call(a, j))
                if (k = a[j],
                j = e.escape(j),
                d(k))
                    l.push(j, f, m(k + ""), b);
                else if (h(k) && k.length)
                    for (var n = 0; n < k.length; n++)
                        d(k[n]) && l.push(j, (i ? m("[]") : "") + f, m(k[n] + ""), b);
                else
                    l.push(j, f, b);
        return l.pop(),
        l.join("")
    }
    ,
    e.parse = function(a, b, c) {
        var d = {};
        if ("string" != typeof a || 0 === i(a).length)
            return d;
        var f = a.split(b || "&");
        c = c || "=";
        for (var j = e.unescape, k = 0; k < f.length; k++) {
            var l = f[k].split(c)
              , m = j(i(l[0]))
              , n = j(i(l.slice(1).join(c)))
              , o = m.match(/^(\w+)\[\]$/);
            o && o[1] && (m = o[1]),
            g.call(d, m) ? (h(d[m]) || (d[m] = [d[m]]),
            d[m].push(n)) : d[m] = o ? [n] : n
        }
        return d
    }
    ;
    var f = Object.prototype.toString
      , g = Object.prototype.hasOwnProperty
      , h = Array.isArray || function(a) {
        return "[object Array]" === f.call(a)
    }
      , i = String.prototype.trim ? function(a) {
        return null  == a ? "" : String.prototype.trim.call(a)
    }
     : function(a) {
        return null  == a ? "" : a.toString().replace(/^\s+/, "").replace(/\s+$/, "")
    }
    ;
    b.exports = e
}),
define("more/mustache", function(require, a) {
    function b(a, b) {
        return RegExp.prototype.test.call(a, b)
    }
    function c(a) {
        return !b(o, a)
    }
    function d(a) {
        return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    }
    function e(a) {
        return String(a).replace(/[&<>"'\/]/g, function(a) {
            return t[a]
        })
    }
    function f(a) {
        this.string = a,
        this.tail = a,
        this.pos = 0
    }
    function g(a, b) {
        this.view = a,
        this.parent = b,
        this._cache = {}
    }
    function h() {
        this.clearCache()
    }
    function i(b, c, d, e) {
        for (var f, g, h, j = "", k = 0, l = b.length; l > k; ++k)
            switch (f = b[k],
            g = f[1],
            f[0]) {
            case "#":
                if (h = d.lookup(g),
                "object" == typeof h)
                    if (s(h))
                        for (var m = 0, n = h.length; n > m; ++m)
                            j += i(f[4], c, d.push(h[m]), e);
                    else
                        h && (j += i(f[4], c, d.push(h), e));
                else if ("function" == typeof h) {
                    var o = null  == e ? null  : e.slice(f[3], f[5]);
                    h = h.call(d.view, o, function(a) {
                        return c.render(a, d)
                    }),
                    null  != h && (j += h)
                } else
                    h && (j += i(f[4], c, d, e));
                break;
            case "^":
                h = d.lookup(g),
                (!h || s(h) && 0 === h.length) && (j += i(f[4], c, d, e));
                break;
            case ">":
                h = c.getPartial(g),
                "function" == typeof h && (j += h(d));
                break;
            case "&":
                h = d.lookup(g),
                null  != h && (j += h);
                break;
            case "name":
                h = d.lookup(g),
                null  != h && (j += a.escape(h));
                break;
            case "text":
                j += g
            }
        return j
    }
    function j(a) {
        for (var b, c = [], d = c, e = [], f = 0, g = a.length; g > f; ++f)
            switch (b = a[f],
            b[0]) {
            case "#":
            case "^":
                e.push(b),
                d.push(b),
                d = b[4] = [];
                break;
            case "/":
                var h = e.pop();
                h[5] = b[2],
                d = e.length > 0 ? e[e.length - 1][4] : c;
                break;
            default:
                d.push(b)
            }
        return c
    }
    function k(a) {
        for (var b, c, d = [], e = 0, f = a.length; f > e; ++e)
            b = a[e],
            b && ("text" === b[0] && c && "text" === c[0] ? (c[1] += b[1],
            c[3] = b[3]) : (c = b,
            d.push(b)));
        return d
    }
    function l(a) {
        return [new RegExp(d(a[0]) + "\\s*"), new RegExp("\\s*" + d(a[1]))]
    }
    var a = {};
    a.name = "mustache.js",
    a.version = "0.7.2",
    a.tags = ["{{", "}}"],
    a.Scanner = f,
    a.Context = g,
    a.Writer = h;
    var m = /\s*/
      , n = /\s+/
      , o = /\S/
      , p = /\s*=/
      , q = /\s*\}/
      , r = /#|\^|\/|>|\{|&|=|!/
      , s = Array.isArray || function(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }
      , t = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;"
    };
    a.escape = e,
    f.prototype.eos = function() {
        return "" === this.tail
    }
    ,
    f.prototype.scan = function(a) {
        var b = this.tail.match(a);
        return b && 0 === b.index ? (this.tail = this.tail.substring(b[0].length),
        this.pos += b[0].length,
        b[0]) : ""
    }
    ,
    f.prototype.scanUntil = function(a) {
        var b, c = this.tail.search(a);
        switch (c) {
        case -1:
            b = this.tail,
            this.pos += this.tail.length,
            this.tail = "";
            break;
        case 0:
            b = "";
            break;
        default:
            b = this.tail.substring(0, c),
            this.tail = this.tail.substring(c),
            this.pos += c
        }
        return b
    }
    ,
    g.make = function(a) {
        return a instanceof g ? a : new g(a)
    }
    ,
    g.prototype.push = function(a) {
        return new g(a,this)
    }
    ,
    g.prototype.lookup = function(a) {
        var b = this._cache[a];
        if (!b) {
            if ("." == a)
                b = this.view;
            else
                for (var c = this; c; ) {
                    if (a.indexOf(".") > 0) {
                        b = c.view;
                        for (var d = a.split("."), e = 0; b && e < d.length; )
                            b = b[d[e++]]
                    } else
                        b = c.view[a];
                    if (null  != b)
                        break;
                    c = c.parent
                }
            this._cache[a] = b
        }
        return "function" == typeof b && (b = b.call(this.view)),
        b
    }
    ,
    h.prototype.clearCache = function() {
        this._cache = {},
        this._partialCache = {}
    }
    ,
    h.prototype.compile = function(b, c) {
        var d = this._cache[b];
        if (!d) {
            var e = a.parse(b, c);
            d = this._cache[b] = this.compileTokens(e, b)
        }
        return d
    }
    ,
    h.prototype.compilePartial = function(a, b, c) {
        var d = this.compile(b, c);
        return this._partialCache[a] = d,
        d
    }
    ,
    h.prototype.getPartial = function(a) {
        return a in this._partialCache || !this._loadPartial || this.compilePartial(a, this._loadPartial(a)),
        this._partialCache[a]
    }
    ,
    h.prototype.compileTokens = function(a, b) {
        var c = this;
        return function(d, e) {
            if (e)
                if ("function" == typeof e)
                    c._loadPartial = e;
                else
                    for (var f in e)
                        c.compilePartial(f, e[f]);
            return i(a, c, g.make(d), b)
        }
    }
    ,
    h.prototype.render = function(a, b, c) {
        return this.compile(a)(b, c)
    }
    ,
    a.parse = function(b, e) {
        function g() {
            if (z && !A)
                for (; y.length; )
                    delete x[y.pop()];
            else
                y = [];
            z = !1,
            A = !1
        }
        if (b = b || "",
        e = e || a.tags,
        "string" == typeof e && (e = e.split(n)),
        2 !== e.length)
            throw new Error("Invalid tags: " + e.join(", "));
        for (var h, i, o, s, t, u = l(e), v = new f(b), w = [], x = [], y = [], z = !1, A = !1; !v.eos(); ) {
            if (h = v.pos,
            o = v.scanUntil(u[0]))
                for (var B = 0, C = o.length; C > B; ++B)
                    s = o.charAt(B),
                    c(s) ? y.push(x.length) : A = !0,
                    x.push(["text", s, h, h + 1]),
                    h += 1,
                    "\n" == s && g();
            if (!v.scan(u[0]))
                break;
            if (z = !0,
            i = v.scan(r) || "name",
            v.scan(m),
            "=" === i ? (o = v.scanUntil(p),
            v.scan(p),
            v.scanUntil(u[1])) : "{" === i ? (o = v.scanUntil(new RegExp("\\s*" + d("}" + e[1]))),
            v.scan(q),
            v.scanUntil(u[1]),
            i = "&") : o = v.scanUntil(u[1]),
            !v.scan(u[1]))
                throw new Error("Unclosed tag at " + v.pos);
            if (t = [i, o, h, v.pos],
            x.push(t),
            "#" === i || "^" === i)
                w.push(t);
            else if ("/" === i) {
                if (0 === w.length)
                    throw new Error('Unopened section "' + o + '" at ' + h);
                var D = w.pop();
                if (D[1] !== o)
                    throw new Error('Unclosed section "' + D[1] + '" at ' + h)
            } else if ("name" === i || "{" === i || "&" === i)
                A = !0;
            else if ("=" === i) {
                if (e = o.split(n),
                2 !== e.length)
                    throw new Error("Invalid tags at " + h + ": " + e.join(", "));
                u = l(e)
            }
        }
        var D = w.pop();
        if (D)
            throw new Error('Unclosed section "' + D[1] + '" at ' + v.pos);
        return x = k(x),
        j(x)
    }
    ;
    var u = new h;
    a.clearCache = function() {
        return u.clearCache()
    }
    ,
    a.compile = function(a, b) {
        return u.compile(a, b)
    }
    ,
    a.compilePartial = function(a, b, c) {
        return u.compilePartial(a, b, c)
    }
    ,
    a.compileTokens = function(a, b) {
        return u.compileTokens(a, b)
    }
    ,
    a.render = function(a, b, c) {
        return u.render(a, b, c)
    }
    ,
    a.to_html = function(b, c, d, e) {
        var f = a.render(b, c, d);
        return "function" != typeof e ? f : void e(f)
    }
}),
define("common/historyM", function(require, a, b) {
    var c, d, e, f, g, h = require("core/chaos/jquery"), i = require("more/events"), j = require("kit/env/browser"), k = require("more/querystring"), l = require("kit/str/parseURL"), m = require("kit/dom/hiddenContainer"), n = new i, o = [], p = !0, q = !!history.pushState, r = "onhashchange" in window && ("undefined" == typeof document.documentMode || 8 == document.documentMode);
    r || !j.IE6 && !j.IE7 || (g = function() {
        d || (d = h("<iframe></iframe>").css("display", "none"),
        m.append(d),
        d = d[0].contentWindow)
    }
    ,
    e = function(a) {
        g(),
        a = encodeURIComponent(a),
        d.document.open("text/html"),
        d.document.write("<html><head></head><body onload=\"parent.historyM&&parent.historyM.hashFrameChangeHash&&parent.historyM.hashFrameChangeHash('" + a + "');\"></body></html>"),
        d.document.close()
    }
    ,
    f = function(a) {
        return a = decodeURIComponent(a),
        f.first ? (window.location.hash = a,
        void (a != "#!" + c && s(c = a.substr(2), !0))) : void (f.first = 1)
    }
    );
    var s = function(a, b) {
        e && !b && e("#!" + a),
        n.trigger("popstate", a, p),
        p = !0
    }
      , t = function() {
        return decodeURIComponent(window.location.toString())
    }
      , u = function(a) {
        var b = l(a || t());
        return {
            host: b.host,
            path: "/" + b.path,
            query: b.query && "?" + b.query,
            hash: b.hash && "#" + b.hash
        }
    }
      , v = function() {
        var a = l(t());
        return /^!/.test(a.hash) ? l("http://" + a.host + a.hash.substr(1)) : a
    }
      , w = function(a, b) {
        if (!/^\//.test(a))
            return void h.log("地址:(" + a + ") 不为正确的路径,请使用绝对路径; 例：/directory/page.php?params#hash");
        if (b = h.extend({
            callChange: !0,
            callChangeOnSame: !0
        }, b),
        p = b.callChange,
        q) {
            if (a = a.replace(/#.*$/, ""),
            c == a) {
                if (!b.callChangeOnSame)
                    return
            } else
                history.pushState(null , null , c = a);
            return void s(a)
        }
        var d = "#!" + a;
        a = a.replace(/#.*$/, ""),
        c == a ? b.callChangeOnSame && s(a) : window.location.hash = d
    }
      , x = function(a, b) {
        if (a) {
            b = b || !1;
            var c = v()
              , d = k.parse(c.query);
            for (var e in a)
                null  === a[e] ? delete d[e] : d[e] = a[e];
            c.query = k.stringify(d);
            var f = ["/", c.path, "" === c.query ? "" : "?", c.query, "" === c.hash ? "" : "#", c.hash].join("");
            w(f, {
                callChange: b
            })
        }
    }
      , y = function(a, b) {
        if ("string" == typeof a && !/^!/.test(a)) {
            var c, d = l(window.location.toString()).hash, e = window.location.toString().replace(/#.*$/, "");
            /^!/.test(d) ? (d = d.replace(/#.*$/, ""),
            c = "#" + d + "#" + a) : c = "#" + a,
            b ? window.location.hash = c : window.location.replace(e + c)
        }
        return B
    }
      , z = function(a) {
        return a && o.push(a),
        B
    }
    ;
    if (c = t().replace(/^http:\/\/.*?\//, "/").replace(/#.*$/, ""),
    q)
        h(window).bind("popstate", function() {
            setTimeout(function() {
                var a = u()
                  , b = a.path + a.query;
                c != b && s(c = b)
            })
        });
    else {
        var A = function() {
            var a, b = u();
            a = /^#!/.test(b.hash) ? b.hash.substr(2).replace(/#.*$/, "") : b.path + b.query,
            c != a && s(c = a)
        }
        ;
        r ? h(window).bind("hashchange", A) : setInterval(A, 200)
    }
    e && e("#!" + c),
    n.on("popstate", function(a, b) {
        o.forEach(function(c) {
            try {
                c(a, b)
            } catch (d) {
                h.log("popstate error: ", d, c)
            }
        })
    });
    var B = {
        parseURL: v,
        getURL: u,
        pushState: w,
        setQuery: x,
        setPlainHash: y,
        onPopstate: z,
        offPopstate: function(a) {
            var b = o.indexOf(a);
            b > -1 && o.splice(b, 1)
        },
        hashFrameChangeHash: f
    };
    window.historyM = B,
    b.exports = B
}),
define("common/listener", function(require, a, b) {
    var c = (require("core/chaos/jquery"),
    require("more/events"))
      , d = function(a) {
        this._whiteList = {},
        this._receiver = new c,
        Array.isArray(a) && a.forEach(this.define.bind(this))
    }
    ;
    d.prototype = {
        constructor: d,
        define: function(a) {
            this._whiteList[a] = !0
        },
        undefine: function(a) {
            delete this._whiteList[a]
        },
        add: function() {
            this._receiver.on.apply(this._receiver, arguments)
        },
        fire: function(a) {
            var b, c, d = [];
            for (b = 1,
            c = arguments.length; c > b; b++)
                d[b - 1] = arguments[b];
            a = a.split(/\s+/),
            a.forEach(function(a) {
                this._whiteList[a] && this._receiver.trigger.apply(this._receiver, [a].concat(d))
            }
            .bind(this))
        },
        remove: function() {
            this._receiver.off.apply(this._receiver, arguments)
        }
    },
    b.exports = d
}),
define("common/transmission", function(require, a, b) {
    var c = require("core/chaos/jquery")
      , d = require("common/transport")
      , e = function(a) {
        this._transports = {},
        this.conf = c.extend({}, a)
    }
    ;
    e.prototype = {
        constructor: e,
        register: function(a, b) {
            this._transports[a] || (b = c.extend({
                name: a
            }, this.conf, b),
            this._transports[a] = new d(b))
        },
        remove: function() {
            this._transports[name] && (this._transports[name].destroy(),
            delete this._transports[name])
        },
        request: function(a, b) {
            var c = this._transports[a];
            return c ? c.request(b) : void 0
        },
        cancel: function(a) {
            var b = this._transports[a];
            b && b.cancel()
        },
        destroy: function() {
            c.each(this._transports, function(a, b) {
                b.destroy()
            })
        }
    },
    b.exports = e
}),
define("common/transport", function(require, a, b) {
    var c = require("core/chaos/jquery")
      , d = JSON
      , e = require("common/layer")
      , f = require("common/channel")
      , g = require("kit/util/attempt")
      , h = {
        url: "",
        async: !0,
        type: "POST",
        cache: !1,
        data: {},
        dataType: "json",
        jsonp: "callback",
        scriptCharset: "utf-8"
    }
      , i = {
        name: "",
        statusSuccess: "A00006",
        timeout: 0,
        autoExecuteError: !1,
        autoExecuteFailure: !1,
        onComplete: c.noop,
        onSuccess: c.noop,
        onFailure: c.noop
    }
      , j = [];
    c.each(i, function(a, b) {
        j.push(a),
        h[a] = b
    });
    var k = {
        CACHE: {},
        set: function(a, b) {
            this.CACHE[a] = b
        },
        get: function(a) {
            return this.CACHE[a]
        }
    }
      , l = function(a) {
        this.conf = c.extend({}, a),
        this.request()
    }
    ;
    c.extend(l.prototype, {
        constructor: l,
        request: function() {
            var a, b, e = this.conf;
            a = c.extend({}, e);
            var f = [e.name, e.url, d.stringify(e.data)].join();
            if (!this.requesting) {
                this.xhr = null ,
                this.requesting = !0,
                j.forEach(function(b) {
                    delete a[b]
                });
                var g = function(a, b, c) {
                    a && a.code && (a.code = a.code.toString()),
                    "json" === e.dataType || "jsonp" === e.dataType ? a.code === e.statusSuccess ? this.success(a, {
                        status: b,
                        xhr: c
                    }) : this.failure(a, {
                        status: "wrongcode",
                        xhr: c
                    }) : this.success(a, {
                        status: b,
                        xhr: c
                    })
                }
                .bind(this);
                if (b = k.get(f),
                e.cache && b)
                    return void g(b, "cache");
                a.success = function(a, b, c) {
                    e.cache && a && k.set(f, a),
                    g(a, b, c)
                }
                .bind(this),
                a.error = function(a, b, c) {
                    this.failure({}, {
                        error: c,
                        status: b,
                        xhr: a
                    })
                }
                .bind(this),
                e.timeout && (this.timer = setTimeout(function() {
                    this.timer = null ,
                    this.requesting && (this.failure({}, {
                        status: "timeout",
                        xhr: this.xhr
                    }),
                    this.abort())
                }
                .bind(this), e.timeout)),
                this.xhr = c.ajax(a)
            }
        },
        complete: function(a, b) {
            var c = this.conf;
            g(function() {
                this.requesting && c.onComplete(a, b)
            }, {
                name: c.name + " ajax complete",
                bind: this
            })
        },
        success: function(a, b) {
            var c = this.conf;
            this.complete(a, b),
            g(function() {
                this.requesting && c.onSuccess(a, b)
            }, {
                name: c.name + " ajax success",
                bind: this
            }),
            this.detach()
        },
        failure: function(a, b) {
            var c = this.conf;
            this.complete(a, b),
            g(function() {
                this.requesting && (c.onFailure(a, b),
                c.autoExecuteError && this.autoExecuteError(a, b),
                c.autoExecuteFailure && this.autoExecuteFailure(a, b))
            }, {
                name: c.name + " ajax failure",
                bind: this
            }),
            this.detach()
        },
        autoExecuteError: function(a) {
            var b = "string" === c.type(a.msg) ? a.msg : "";
            a && a.code && ("A00004" === a.code ? f.fire("needLogin") : "100002" === a.code ? f.fire("changeLocation", a.data) : b && e.alert(b))
        },
        autoExecuteFailure: function(a, b) {
            a && a.code || !b || e.alert("timeout" === b.status ? "请求超时，请检查网络连接！" : "abort" === b.status ? "请求失败，请检查网络连接！" : "业务繁忙，请稍后再试！")
        },
        cancel: function() {
            this.conf;
            this.requesting && (this.failure({}, {
                status: "cancel",
                xhr: this.xhr
            }),
            this.abort())
        },
        abort: function() {
            var a = this.conf;
            this.timer && (clearTimeout(this.timer),
            this.timer = null ),
            this.xhr && "jsonp" !== a.dataType && "script" !== a.dataType && this.xhr.abort()
        },
        detach: function() {
            var a = this.conf;
            this.requesting = !1,
            a.onComplete = c.noop,
            a.onSuccess = c.noop,
            a.onFailure = c.noop
        }
    });
    var m = function(a) {
        this.conf = c.extend({}, h, a),
        this.cache = {}
    }
    ;
    c.extend(m.prototype, {
        constructor: m,
        request: function(a) {
            var b = c.extend({}, this.conf, a);
            return this.ajax = new l(b),
            this.ajax
        },
        cancel: function() {
            this.ajax && this.ajax.cancel()
        },
        destroy: function() {
            this.ajax && (this.ajax.cancel(),
            delete this.ajax)
        }
    }),
    b.exports = m
}),
define("kit/util/attempt", function(require, a, b) {
    var c = require("core/chaos/jquery");
    b.exports = function(a, b) {
        var d, e, f = !1, g = c.log;
        b = c.extend({
            name: "",
            time: !1,
            success: c.noop,
            error: c.noop,
            next: c.noop
        }, b);
        try {
            d = Date.now(),
            "undefined" == typeof b.bind ? a() : a.call(b.bind),
            e = Date.now()
        } catch (h) {
            f = !0,
            g("[" + b.name + "]:", h),
            b.error(h)
        } finally {
            b.time && g("[" + b.name + "]:", e - d + "ms"),
            f || b.success(),
            b.next()
        }
    }
}),
define("kit/dom/hiddenContainer", function(require, a, b) {
    var c, d = require("core/chaos/jquery"), e = function() {
        return c || (c = d("<div></div>").css({
            position: "absolute",
            top: "-9999px",
            left: "-9999px"
        }).appendTo(d("head"))),
        c
    }
    ;
    b.exports = {
        append: function(a) {
            e().append(d(a))
        },
        clear: function() {
            e().html("")
        },
        get: function() {
            return e()
        }
    }
}),
define("kit/env/browser", function(require, a, b) {
    var c, d, e, f, g, h = navigator.userAgent.toLowerCase(), i = window.external || "", j = function(a) {
        var b = 0;
        return parseFloat(a.replace(/\./g, function() {
            return 1 == b++ ? "" : "."
        }))
    }
    ;
    try {
        /windows|win32/i.test(h) ? g = "windows" : /macintosh/i.test(h) ? g = "macintosh" : /rhino/i.test(h) && (g = "rhino"),
        (d = h.match(/applewebkit\/([^\s]*)/)) && d[1] ? (c = "webkit",
        f = j(d[1])) : (d = h.match(/presto\/([\d.]*)/)) && d[1] ? (c = "presto",
        f = j(d[1])) : (d = h.match(/msie\s([^;]*)/)) ? (c = "trident",
        f = 1,
        (d = h.match(/trident\/([\d.]*)/)) && d[1] && (f = j(d[1]))) : /gecko/.test(h) && (c = "gecko",
        f = 1,
        (d = h.match(/rv:([\d.]*)/)) && d[1] && (f = j(d[1]))),
        /world/.test(h) ? e = "world" : /360se/.test(h) ? e = "360" : /maxthon/.test(h) || "number" == typeof i.max_version ? e = "maxthon" : /tencenttraveler\s([\d.]*)/.test(h) ? e = "tt" : /se\s([\d.]*)/.test(h) && (e = "sogou")
    } catch (k) {}
    b.exports = {
        OS: g,
        CORE: c,
        Version: f,
        EXTRA: e ? e : !1,
        IE: /msie/.test(h),
        OPERA: /opera/.test(h),
        MOZ: /gecko/.test(h) && !/(compatible|webkit)/.test(h),
        IE5: /msie 5 /.test(h),
        IE55: /msie 5.5/.test(h),
        IE6: /msie 6/.test(h),
        IE7: /msie 7/.test(h),
        IE8: /msie 8/.test(h),
        IE9: /msie 9/.test(h),
        IE10: /msie 10/.test(h),
        SAFARI: !/chrome\/([\d.]*)/.test(h) && /\/([\da-f.]*) safari/.test(h),
        CHROME: /chrome\/([\d.]*)/.test(h),
        IPAD: /\(ipad/i.test(h),
        IPHONE: /\(iphone/i.test(h),
        ITOUCH: /\(itouch/i.test(h),
        MOBILE: /mobile/i.test(h)
    }
}),
define("kit/str/parseURL", function(require, a, b) {
    b.exports = function(a) {
        for (var b = /^(?:([A-Za-z]+):(\/{0,3}))?([0-9.\-A-Za-z]+\.[0-9A-Za-z]+)?(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/, c = ["url", "scheme", "slash", "host", "port", "path", "query", "hash"], d = b.exec(a), e = {}, f = 0, g = c.length; g > f; f += 1)
            e[c[f]] = d[f] || "";
        return e
    }
}),
define("common/router", function(require, a, b) {
    var c = require("core/chaos/jquery")
      , d = require("kit/str/parseURL")
      , e = require("common/historyM")
      , f = require("common/pageletM")
      , g = require("common/channel")
      , h = {
        conf: {},
        routeList: {},
        matchList: {},
        init: function(a) {
            var b = this;
            this.setOptions(a),
            this.build(),
            this.setBound(),
            c(function() {
                b.setDomEvents("add")
            }),
            this.setCustEvents("add")
        },
        setOptions: function(a) {
            this.conf = c.extend(!0, {
                pushState: !0,
                pageletM: {
                    log: !1
                }
            }, a)
        },
        build: function() {
            var a = this.conf;
            f.init(a.pageletM),
            this.updateRoute()
        },
        setBound: function() {
            var a = this;
            this.bound = {
                checkLink: function(b) {
                    a.checkLink(c(this), b)
                },
                updateRoute: function() {
                    a.updateRoute()
                }
            }
        },
        setDomEvents: function(a) {
            var b = this.bound
              , d = c(document);
            a = "add" === a ? "delegate" : "undelegate",
            d[a]("a", "touchend", b.checkLink),
            d[a]("a", "click", b.checkLink)
        },
        setCustEvents: function(a) {
            var b = this.bound;
            a = "add" === a ? "on" : "off",
            e[a + "Popstate"](b.updateRoute)
        },
        checkLink: function(a, b) {
            var c = this.conf
              , d = a.attr("href")
              , e = a.attr("target");
            c.pushState && !e && this.setLocation(d, b)
        },
        getFormatedUrl: function(a) {
            var b = "";
            try {
                var c = a ? d(a) : e.parseURL()
                  , f = c.port && "80" !== c.port ? ":" + c.port : "";
                b = c.url.replace(c.scheme + "://" + c.host + f, ""),
                0 !== b.indexOf("/") && (b = "/" + b)
            } catch (g) {
                b = "/"
            }
            return b
        },
        setLocation: function(a, b) {
            var c = this.getrouteName(a);
            a = this.getFormatedUrl(a),
            c && (b && b.preventDefault(),
            e.pushState(a))
        },
        register: function(a, b) {
            var d;
            if (a && "string" === c.type(a)) {
                if ("function" === c.type(b))
                    d = b;
                else if ("string" === c.type(b))
                    d = function(a) {
                        return a === b
                    }
                    ;
                else {
                    if ("regexp" !== c.type(b))
                        return;
                    d = function(a) {
                        return b.test(a)
                    }
                }
                this.matchList[a] || (this.matchList[a] = d)
            }
        },
        updateRoute: function() {
            var a = this.getFormatedUrl()
              , b = this.getrouteName(a);
            b && this.loadRoute(b),
            g.fire("locationChange")
        },
        getrouteName: function(a) {
            a = this.getFormatedUrl(a);
            var b = "";
            return a && c.each(this.matchList, function(c, d) {
                return d(a) ? (b = c,
                !1) : void 0
            }),
            b
        },
        loadRoute: function(a) {
            if (a) {
                var b = this
                  , c = this.routeList[a];
                c ? f.updatePagelets(c) : require([a], function(d) {
                    c = d,
                    b.routeList[a] = c,
                    f.updatePagelets(c)
                })
            }
        },
        destroy: function() {
            this.setDomEvents("remove"),
            this.setCustEvents("remove"),
            f.destroy()
        }
    };
    b.exports = h
}),
define("common/pageletM", function(require, a, b) {
    var c = require("core/chaos/jquery")
      , d = function(a) {
        this.objs && c.each(this.objs, function(b, d) {
            d && c.isFunction(d[a]) && d[a]()
        })
    }
      , e = {
        init: function(a) {
            this.conf = {},
            this.pagelets = {},
            this.setOptions(a)
        },
        setOptions: function(a) {
            this.conf = c.extend({
                log: !1
            }, a)
        },
        log: function() {
            this.conf.log && c.log.apply(c, arguments)
        },
        create: function(a, b) {
            var e = this;
            b = b || "",
            a || (e.log("Pagelet [" + b + "] is null ."),
            a = {}),
            ["init", "attach", "detach", "destroy"].forEach(function(d) {
                c.isFunction(a[d]) || (e.log("Pagelet [" + b + "] need method : " + d + " ."),
                a[d] = c.noop)
            });
            var f = !1
              , g = !1
              , h = c.extend({}, a, {
                init: function() {
                    f || (a.init.apply(h, arguments),
                    e.log("[" + b + "]:", "init"),
                    f = !0)
                },
                attach: function() {
                    f || this.init(),
                    g || (d.call(this, "attach"),
                    a.attach.apply(h, arguments),
                    e.log("[" + b + "]:", "attach"),
                    g = !0)
                },
                detach: function() {
                    f && g && (d.call(this, "detach"),
                    a.detach.apply(h, arguments),
                    e.log("[" + b + "]:", "detach"),
                    g = !1)
                },
                destroy: function() {
                    f && (this.detach(),
                    d.call(this, "destroy"),
                    a.destroy.apply(h, arguments),
                    e.log("[" + b + "]:", "destroy"),
                    f = !1)
                }
            });
            return h
        },
        updatePagelets: function(a) {
            if (Array.isArray(a)) {
                var b = this.currentPagelets || {}
                  , c = a.reduce(function(a, b) {
                    return a[b] = !0,
                    a
                }, {})
                  , d = a.filter(function(a) {
                    return !b[a]
                })
                  , e = Object.keys(b).filter(function(a) {
                    return !c[a]
                });
                this.currentPagelets = c,
                e.forEach(this.detachPagelet, this),
                d.forEach(this.attachPagelet, this)
            }
        },
        loadPagelet: function(a) {
            var b = this
              , c = this.pagelets[a];
            require([a], function(d) {
                c.pagelet = b.create(d, a),
                c.attached ? b.callAttach(c) : b.callDetach(c)
            })
        },
        getPagelet: function(a) {
            var b = this.pagelets[a];
            return b || (b = this.pagelets[a] = {
                attached: !1,
                pagelet: null 
            },
            this.loadPagelet(a)),
            b
        },
        callAttach: function(a) {
            a && a.pagelet && c.isFunction(a.pagelet.attach) && a.pagelet.attach()
        },
        callDetach: function(a) {
            a && a.pagelet && c.isFunction(a.pagelet.detach) && a.pagelet.detach()
        },
        attachPagelet: function(a) {
            var b = this.getPagelet(a);
            this.callAttach(b),
            b.attached = !0
        },
        detachPagelet: function(a) {
            var b = this.getPagelet(a);
            this.callDetach(b),
            b.attached = !1
        },
        destroy: function() {
            var a = this;
            c.each(this.pagelets, function(b, d) {
                d && d.pagelet && (a.callDetach(d),
                d.attached = !1,
                c.isFunction(d.pagelet.destroy) && d.pagelet.destroy())
            })
        }
    };
    b.exports = e
}),
define("common/channel", function(require, a, b) {
    var c = require("common/listener");
    b.exports = new c(["needLogin", "needRegister", "locationChange", "changeLocation"])
}),
define("common/layer", function(require, a) {
    a.alert = function(a, b) {
        b = b || {},
        b.message = a,
        $.log(a, b)
    }
    ,
    a.confirm = function(a, b) {
        b = b || {},
        b.message = a,
        $.log(a, b)
    }
}),
define("common/location", function(require, a, b) {
    var c = (require("core/chaos/jquery"),
    require("common/historyM"))
      , d = require("common/router")
      , e = require("common/channel")
      , f = {
        set: function(a) {
            d.setLocation(a)
        },
        get: function() {
            return c.parseURL()
        }
    };
    e.add("changeLocation", f.set),
    b.exports = f
}),
define("mods/util/getFormatedUrl", function(require, a, b) {
    var c = require("kit/str/parseURL");
    b.exports = function(a) {
        var b = c(a)
          , d = b.port && "80" !== b.port ? ":" + b.port : "";
        return b.url.replace(b.scheme + "://" + b.host + d, "")
    }
}),
define("vendor/highlight.pack", function(require, a, b) {
    var c = new function() {
        function a(a) {
            return a.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;")
        }
        function b(a) {
            return a.nodeName.toLowerCase()
        }
        function c(a, b) {
            var c = a && a.exec(b);
            return c && 0 == c.index
        }
        function d(a) {
            return Array.prototype.map.call(a.childNodes, function(a) {
                return 3 == a.nodeType ? s.useBR ? a.nodeValue.replace(/\n/g, "") : a.nodeValue : "br" == b(a) ? "\n" : d(a)
            }).join("")
        }
        function e(a) {
            var b = (a.className + " " + (a.parentNode ? a.parentNode.className : "")).split(/\s+/);
            return b = b.map(function(a) {
                return a.replace(/^language-/, "")
            }),
            b.filter(function(a) {
                return r(a) || "no-highlight" == a
            })[0]
        }
        function f(a, b) {
            var c = {};
            for (var d in a)
                c[d] = a[d];
            if (b)
                for (var d in b)
                    c[d] = b[d];
            return c
        }
        function g(a) {
            var c = [];
            return function d(a, e) {
                for (var f = a.firstChild; f; f = f.nextSibling)
                    3 == f.nodeType ? e += f.nodeValue.length : "br" == b(f) ? e += 1 : 1 == f.nodeType && (c.push({
                        event: "start",
                        offset: e,
                        node: f
                    }),
                    e = d(f, e),
                    c.push({
                        event: "stop",
                        offset: e,
                        node: f
                    }));
                return e
            }(a, 0),
            c
        }
        function h(c, d, e) {
            function f() {
                return c.length && d.length ? c[0].offset != d[0].offset ? c[0].offset < d[0].offset ? c : d : "start" == d[0].event ? c : d : c.length ? c : d
            }
            function g(c) {
                function d(b) {
                    return " " + b.nodeName + '="' + a(b.value) + '"'
                }
                k += "<" + b(c) + Array.prototype.map.call(c.attributes, d).join("") + ">"
            }
            function h(a) {
                k += "</" + b(a) + ">"
            }
            function i(a) {
                ("start" == a.event ? g : h)(a.node)
            }
            for (var j = 0, k = "", l = []; c.length || d.length; ) {
                var m = f();
                if (k += a(e.substr(j, m[0].offset - j)),
                j = m[0].offset,
                m == c) {
                    l.reverse().forEach(h);
                    do
                        i(m.splice(0, 1)[0]),
                        m = f();
                    while (m == c && m.length && m[0].offset == j);l.reverse().forEach(g)
                } else
                    "start" == m[0].event ? l.push(m[0].node) : l.pop(),
                    i(m.splice(0, 1)[0])
            }
            return k + a(e.substr(j))
        }
        function i(a) {
            function b(a) {
                return a && a.source || a
            }
            function c(c, d) {
                return RegExp(b(c), "m" + (a.cI ? "i" : "") + (d ? "g" : ""))
            }
            function d(e, g) {
                function h(b, c) {
                    a.cI && (c = c.toLowerCase()),
                    c.split(" ").forEach(function(a) {
                        var c = a.split("|");
                        i[c[0]] = [b, c[1] ? Number(c[1]) : 1]
                    })
                }
                if (!e.compiled) {
                    if (e.compiled = !0,
                    e.k = e.k || e.bK,
                    e.k) {
                        var i = {};
                        "string" == typeof e.k ? h("keyword", e.k) : Object.keys(e.k).forEach(function(a) {
                            h(a, e.k[a])
                        }),
                        e.k = i
                    }
                    e.lR = c(e.l || /\b[A-Za-z0-9_]+\b/, !0),
                    g && (e.bK && (e.b = e.bK.split(" ").join("|")),
                    e.b || (e.b = /\B|\b/),
                    e.bR = c(e.b),
                    e.e || e.eW || (e.e = /\B|\b/),
                    e.e && (e.eR = c(e.e)),
                    e.tE = b(e.e) || "",
                    e.eW && g.tE && (e.tE += (e.e ? "|" : "") + g.tE)),
                    e.i && (e.iR = c(e.i)),
                    void 0 === e.r && (e.r = 1),
                    e.c || (e.c = []);
                    var j = [];
                    e.c.forEach(function(a) {
                        a.v ? a.v.forEach(function(b) {
                            j.push(f(a, b))
                        }) : j.push("self" == a ? e : a)
                    }),
                    e.c = j,
                    e.c.forEach(function(a) {
                        d(a, e)
                    }),
                    e.starts && d(e.starts, g);
                    var k = e.c.map(function(a) {
                        return a.bK ? "\\.?\\b(" + a.b + ")\\b\\.?" : a.b
                    }).concat([e.tE]).concat([e.i]).map(b).filter(Boolean);
                    e.t = k.length ? c(k.join("|"), !0) : {
                        exec: function() {
                            return null 
                        }
                    },
                    e.continuation = {}
                }
            }
            d(a)
        }
        function j(b, d, e, f) {
            function g(a, b) {
                for (var d = 0; d < b.c.length; d++)
                    if (c(b.c[d].bR, a))
                        return b.c[d]
            }
            function h(a, b) {
                return c(a.eR, b) ? a : a.eW ? h(a.parent, b) : void 0
            }
            function l(a, b) {
                return !e && c(b.iR, a)
            }
            function m(a, b) {
                var c = w.cI ? b[0].toLowerCase() : b[0];
                return a.k.hasOwnProperty(c) && a.k[c]
            }
            function n(a, b, c, d) {
                var e = d ? "" : s.classPrefix
                  , f = '<span class="' + e
                  , g = c ? "" : "</span>";
                return f += a + '">',
                f + b + g
            }
            function o() {
                var b = a(A);
                if (!x.k)
                    return b;
                var c = ""
                  , d = 0;
                x.lR.lastIndex = 0;
                for (var e = x.lR.exec(b); e; ) {
                    c += b.substr(d, e.index - d);
                    var f = m(x, e);
                    f ? (B += f[1],
                    c += n(f[0], e[0])) : c += e[0],
                    d = x.lR.lastIndex,
                    e = x.lR.exec(b)
                }
                return c + b.substr(d)
            }
            function p() {
                if (x.sL && !t[x.sL])
                    return a(A);
                var b = x.sL ? j(x.sL, A, !0, x.continuation.top) : k(A);
                return x.r > 0 && (B += b.r),
                "continuous" == x.subLanguageMode && (x.continuation.top = b.top),
                n(b.language, b.value, !1, !0)
            }
            function q() {
                return void 0 !== x.sL ? p() : o()
            }
            function u(b, c) {
                var d = b.cN ? n(b.cN, "", !0) : "";
                b.rB ? (y += d,
                A = "") : b.eB ? (y += a(c) + d,
                A = "") : (y += d,
                A = c),
                x = Object.create(b, {
                    parent: {
                        value: x
                    }
                })
            }
            function v(b, c) {
                if (A += b,
                void 0 === c)
                    return y += q(),
                    0;
                var d = g(c, x);
                if (d)
                    return y += q(),
                    u(d, c),
                    d.rB ? 0 : c.length;
                var e = h(x, c);
                if (e) {
                    var f = x;
                    f.rE || f.eE || (A += c),
                    y += q();
                    do
                        x.cN && (y += "</span>"),
                        B += x.r,
                        x = x.parent;
                    while (x != e.parent);return f.eE && (y += a(c)),
                    A = "",
                    e.starts && u(e.starts, ""),
                    f.rE ? 0 : c.length
                }
                if (l(c, x))
                    throw new Error('Illegal lexeme "' + c + '" for mode "' + (x.cN || "<unnamed>") + '"');
                return A += c,
                c.length || 1
            }
            var w = r(b);
            if (!w)
                throw new Error('Unknown language: "' + b + '"');
            i(w);
            for (var x = f || w, y = "", z = x; z != w; z = z.parent)
                z.cN && (y = n(z.cN, y, !0));
            var A = ""
              , B = 0;
            try {
                for (var C, D, E = 0; ; ) {
                    if (x.t.lastIndex = E,
                    C = x.t.exec(d),
                    !C)
                        break;
                    D = v(d.substr(E, C.index - E), C[0]),
                    E = C.index + D
                }
                v(d.substr(E));
                for (var z = x; z.parent; z = z.parent)
                    z.cN && (y += "</span>");
                return {
                    r: B,
                    value: y,
                    language: b,
                    top: x
                }
            } catch (F) {
                if (-1 != F.message.indexOf("Illegal"))
                    return {
                        r: 0,
                        value: a(d)
                    };
                throw F
            }
        }
        function k(b, c) {
            c = c || s.languages || Object.keys(t);
            var d = {
                r: 0,
                value: a(b)
            }
              , e = d;
            return c.forEach(function(a) {
                if (r(a)) {
                    var c = j(a, b, !1);
                    c.language = a,
                    c.r > e.r && (e = c),
                    c.r > d.r && (e = d,
                    d = c)
                }
            }),
            e.language && (d.second_best = e),
            d
        }
        function l(a) {
            return s.tabReplace && (a = a.replace(/^((<[^>]+>|\t)+)/gm, function(a, b) {
                return b.replace(/\t/g, s.tabReplace)
            })),
            s.useBR && (a = a.replace(/\n/g, "<br>")),
            a
        }
        function m(a) {
            var b = d(a)
              , c = e(a);
            if ("no-highlight" != c) {
                var f = c ? j(c, b, !0) : k(b)
                  , i = g(a);
                if (i.length) {
                    var m = document.createElementNS("http://www.w3.org/1999/xhtml", "pre");
                    m.innerHTML = f.value,
                    f.value = h(i, g(m), b)
                }
                f.value = l(f.value),
                a.innerHTML = f.value,
                a.className += " hljs " + (!c && f.language || ""),
                a.result = {
                    language: f.language,
                    re: f.r
                },
                f.second_best && (a.second_best = {
                    language: f.second_best.language,
                    re: f.second_best.r
                })
            }
        }
        function n(a) {
            s = f(s, a)
        }
        function o() {
            if (!o.called) {
                o.called = !0;
                var a = document.querySelectorAll("pre code");
                Array.prototype.forEach.call(a, m)
            }
        }
        function p() {
            addEventListener("DOMContentLoaded", o, !1),
            addEventListener("load", o, !1)
        }
        function q(a, b) {
            var c = t[a] = b(this);
            c.aliases && c.aliases.forEach(function(b) {
                u[b] = a
            })
        }
        function r(a) {
            return t[a] || t[u[a]]
        }
        var s = {
            classPrefix: "hljs-",
            tabReplace: null ,
            useBR: !1,
            languages: void 0
        }
          , t = {}
          , u = {};
        this.highlight = j,
        this.highlightAuto = k,
        this.fixMarkup = l,
        this.highlightBlock = m,
        this.configure = n,
        this.initHighlighting = o,
        this.initHighlightingOnLoad = p,
        this.registerLanguage = q,
        this.getLanguage = r,
        this.inherit = f,
        this.IR = "[a-zA-Z][a-zA-Z0-9_]*",
        this.UIR = "[a-zA-Z_][a-zA-Z0-9_]*",
        this.NR = "\\b\\d+(\\.\\d+)?",
        this.CNR = "(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
        this.BNR = "\\b(0b[01]+)",
        this.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
        this.BE = {
            b: "\\\\[\\s\\S]",
            r: 0
        },
        this.ASM = {
            cN: "string",
            b: "'",
            e: "'",
            i: "\\n",
            c: [this.BE]
        },
        this.QSM = {
            cN: "string",
            b: '"',
            e: '"',
            i: "\\n",
            c: [this.BE]
        },
        this.CLCM = {
            cN: "comment",
            b: "//",
            e: "$"
        },
        this.CBLCLM = {
            cN: "comment",
            b: "/\\*",
            e: "\\*/"
        },
        this.HCM = {
            cN: "comment",
            b: "#",
            e: "$"
        },
        this.NM = {
            cN: "number",
            b: this.NR,
            r: 0
        },
        this.CNM = {
            cN: "number",
            b: this.CNR,
            r: 0
        },
        this.BNM = {
            cN: "number",
            b: this.BNR,
            r: 0
        },
        this.REGEXP_MODE = {
            cN: "regexp",
            b: /\//,
            e: /\/[gim]*/,
            i: /\n/,
            c: [this.BE, {
                b: /\[/,
                e: /\]/,
                r: 0,
                c: [this.BE]
            }]
        },
        this.TM = {
            cN: "title",
            b: this.IR,
            r: 0
        },
        this.UTM = {
            cN: "title",
            b: this.UIR,
            r: 0
        }
    }
    ;
    c.registerLanguage("bash", function(a) {
        var b = {
            cN: "variable",
            v: [{
                b: /\$[\w\d#@][\w\d_]*/
            }, {
                b: /\$\{(.*?)\}/
            }]
        }
          , c = {
            cN: "string",
            b: /"/,
            e: /"/,
            c: [a.BE, b, {
                cN: "variable",
                b: /\$\(/,
                e: /\)/,
                c: [a.BE]
            }]
        }
          , d = {
            cN: "string",
            b: /'/,
            e: /'/
        };
        return {
            l: /-?[a-z\.]+/,
            k: {
                keyword: "if then else elif fi for break continue while in do done exit return set declare case esac export exec",
                literal: "true false",
                built_in: "printf echo read cd pwd pushd popd dirs let eval unset typeset readonly getopts source shopt caller type hash bind help sudo",
                operator: "-ne -eq -lt -gt -f -d -e -s -l -a"
            },
            c: [{
                cN: "shebang",
                b: /^#![^\n]+sh\s*$/,
                r: 10
            }, {
                cN: "function",
                b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
                rB: !0,
                c: [a.inherit(a.TM, {
                    b: /\w[\w\d_]*/
                })],
                r: 0
            }, a.HCM, a.NM, c, d, b]
        }
    }),
    c.registerLanguage("fix", function() {
        return {
            c: [{
                b: /[^\u2401\u0001]+/,
                e: /[\u2401\u0001]/,
                eE: !0,
                rB: !0,
                rE: !1,
                c: [{
                    b: /([^\u2401\u0001=]+)/,
                    e: /=([^\u2401\u0001=]+)/,
                    rE: !0,
                    rB: !1,
                    cN: "attribute"
                }, {
                    b: /=/,
                    e: /([\u2401\u0001])/,
                    eE: !0,
                    eB: !0,
                    cN: "string"
                }]
            }],
            cI: !0
        }
    }),
    c.registerLanguage("erlang", function(a) {
        var b = "[a-z'][a-zA-Z0-9_']*"
          , c = "(" + b + ":" + b + "|" + b + ")"
          , d = {
            keyword: "after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun let not of orelse|10 query receive rem try when xor",
            literal: "false true"
        }
          , e = {
            cN: "comment",
            b: "%",
            e: "$",
            r: 0
        }
          , f = {
            cN: "number",
            b: "\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)",
            r: 0
        }
          , g = {
            b: "fun\\s+" + b + "/\\d+"
        }
          , h = {
            b: c + "\\(",
            e: "\\)",
            rB: !0,
            r: 0,
            c: [{
                cN: "function_name",
                b: c,
                r: 0
            }, {
                b: "\\(",
                e: "\\)",
                eW: !0,
                rE: !0,
                r: 0
            }]
        }
          , i = {
            cN: "tuple",
            b: "{",
            e: "}",
            r: 0
        }
          , j = {
            cN: "variable",
            b: "\\b_([A-Z][A-Za-z0-9_]*)?",
            r: 0
        }
          , k = {
            cN: "variable",
            b: "[A-Z][a-zA-Z0-9_]*",
            r: 0
        }
          , l = {
            b: "#" + a.UIR,
            r: 0,
            rB: !0,
            c: [{
                cN: "record_name",
                b: "#" + a.UIR,
                r: 0
            }, {
                b: "{",
                e: "}",
                r: 0
            }]
        }
          , m = {
            bK: "fun receive if try case",
            e: "end",
            k: d
        };
        m.c = [e, g, a.inherit(a.ASM, {
            cN: ""
        }), m, h, a.QSM, f, i, j, k, l];
        var n = [e, g, m, h, a.QSM, f, i, j, k, l];
        h.c[1].c = n,
        i.c = n,
        l.c[1].c = n;
        var o = {
            cN: "params",
            b: "\\(",
            e: "\\)",
            c: n
        };
        return {
            k: d,
            i: "(</|\\*=|\\+=|-=|/=|/\\*|\\*/|\\(\\*|\\*\\))",
            c: [{
                cN: "function",
                b: "^" + b + "\\s*\\(",
                e: "->",
                rB: !0,
                i: "\\(|#|//|/\\*|\\\\|:|;",
                c: [o, a.inherit(a.TM, {
                    b: b
                })],
                starts: {
                    e: ";|\\.",
                    k: d,
                    c: n
                }
            }, e, {
                cN: "pp",
                b: "^-",
                e: "\\.",
                r: 0,
                eE: !0,
                rB: !0,
                l: "-" + a.IR,
                k: "-module -record -undef -export -ifdef -ifndef -author -copyright -doc -vsn -import -include -include_lib -compile -define -else -endif -file -behaviour -behavior",
                c: [o]
            }, f, a.QSM, l, j, k, i]
        }
    }),
    c.registerLanguage("cs", function(a) {
        var b = "abstract as base bool break byte case catch char checked const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long new null object operator out override params private protected public readonly ref return sbyte sealed short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async await ascending descending from get group into join let orderby partial select set value var where yield";
        return {
            k: b,
            c: [{
                cN: "comment",
                b: "///",
                e: "$",
                rB: !0,
                c: [{
                    cN: "xmlDocTag",
                    b: "///|<!--|-->"
                }, {
                    cN: "xmlDocTag",
                    b: "</?",
                    e: ">"
                }]
            }, a.CLCM, a.CBLCLM, {
                cN: "preprocessor",
                b: "#",
                e: "$",
                k: "if else elif endif define undef warning error line region endregion pragma checksum"
            }, {
                cN: "string",
                b: '@"',
                e: '"',
                c: [{
                    b: '""'
                }]
            }, a.ASM, a.QSM, a.CNM, {
                bK: "protected public private internal",
                e: /[{;=]/,
                k: b,
                c: [{
                    bK: "class namespace interface",
                    starts: {
                        c: [a.TM]
                    }
                }, {
                    b: a.IR + "\\s*\\(",
                    rB: !0,
                    c: [a.TM]
                }]
            }]
        }
    }),
    c.registerLanguage("brainfuck", function() {
        var a = {
            cN: "literal",
            b: "[\\+\\-]",
            r: 0
        };
        return {
            c: [{
                cN: "comment",
                b: "[^\\[\\]\\.,\\+\\-<> \r\n]",
                rE: !0,
                e: "[\\[\\]\\.,\\+\\-<> \r\n]",
                r: 0
            }, {
                cN: "title",
                b: "[\\[\\]]",
                r: 0
            }, {
                cN: "string",
                b: "[\\.,]",
                r: 0
            }, {
                b: /\+\+|\-\-/,
                rB: !0,
                c: [a]
            }, a]
        }
    }),
    c.registerLanguage("ruby", function(a) {
        var b = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?"
          , c = "and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor"
          , d = {
            cN: "yardoctag",
            b: "@[A-Za-z]+"
        }
          , e = {
            cN: "comment",
            v: [{
                b: "#",
                e: "$",
                c: [d]
            }, {
                b: "^\\=begin",
                e: "^\\=end",
                c: [d],
                r: 10
            }, {
                b: "^__END__",
                e: "\\n$"
            }]
        }
          , f = {
            cN: "subst",
            b: "#\\{",
            e: "}",
            k: c
        }
          , g = {
            cN: "string",
            c: [a.BE, f],
            v: [{
                b: /'/,
                e: /'/
            }, {
                b: /"/,
                e: /"/
            }, {
                b: "%[qw]?\\(",
                e: "\\)"
            }, {
                b: "%[qw]?\\[",
                e: "\\]"
            }, {
                b: "%[qw]?{",
                e: "}"
            }, {
                b: "%[qw]?<",
                e: ">",
                r: 10
            }, {
                b: "%[qw]?/",
                e: "/",
                r: 10
            }, {
                b: "%[qw]?%",
                e: "%",
                r: 10
            }, {
                b: "%[qw]?-",
                e: "-",
                r: 10
            }, {
                b: "%[qw]?\\|",
                e: "\\|",
                r: 10
            }, {
                b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
            }]
        }
          , h = {
            cN: "params",
            b: "\\(",
            e: "\\)",
            k: c
        }
          , i = [g, e, {
            cN: "class",
            bK: "class module",
            e: "$|;",
            i: /=/,
            c: [a.inherit(a.TM, {
                b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
            }), {
                cN: "inheritance",
                b: "<\\s*",
                c: [{
                    cN: "parent",
                    b: "(" + a.IR + "::)?" + a.IR
                }]
            }, e]
        }, {
            cN: "function",
            bK: "def",
            e: " |$|;",
            r: 0,
            c: [a.inherit(a.TM, {
                b: b
            }), h, e]
        }, {
            cN: "constant",
            b: "(::)?(\\b[A-Z]\\w*(::)?)+",
            r: 0
        }, {
            cN: "symbol",
            b: ":",
            c: [g, {
                b: b
            }],
            r: 0
        }, {
            cN: "symbol",
            b: a.UIR + "(\\!|\\?)?:",
            r: 0
        }, {
            cN: "number",
            b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
            r: 0
        }, {
            cN: "variable",
            b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
        }, {
            b: "(" + a.RSR + ")\\s*",
            c: [e, {
                cN: "regexp",
                c: [a.BE, f],
                i: /\n/,
                v: [{
                    b: "/",
                    e: "/[a-z]*"
                }, {
                    b: "%r{",
                    e: "}[a-z]*"
                }, {
                    b: "%r\\(",
                    e: "\\)[a-z]*"
                }, {
                    b: "%r!",
                    e: "![a-z]*"
                }, {
                    b: "%r\\[",
                    e: "\\][a-z]*"
                }]
            }],
            r: 0
        }];
        return f.c = i,
        h.c = i,
        {
            k: c,
            c: i
        }
    }),
    c.registerLanguage("rust", function(a) {
        var b = {
            cN: "number",
            b: "\\b(0[xb][A-Za-z0-9_]+|[0-9_]+(\\.[0-9_]+)?([uif](8|16|32|64)?)?)",
            r: 0
        }
          , c = "assert bool break char check claim comm const cont copy dir do drop else enum extern export f32 f64 fail false float fn for i16 i32 i64 i8 if impl int let log loop match mod move mut priv pub pure ref return self static str struct task true trait type u16 u32 u64 u8 uint unsafe use vec while";
        return {
            k: c,
            i: "</",
            c: [a.CLCM, a.CBLCLM, a.inherit(a.QSM, {
                i: null 
            }), a.ASM, b, {
                cN: "function",
                bK: "fn",
                e: "(\\(|<)",
                c: [a.UTM]
            }, {
                cN: "preprocessor",
                b: "#\\[",
                e: "\\]"
            }, {
                bK: "type",
                e: "(=|<)",
                c: [a.UTM],
                i: "\\S"
            }, {
                bK: "trait enum",
                e: "({|<)",
                c: [a.UTM],
                i: "\\S"
            }]
        }
    }),
    c.registerLanguage("ruleslanguage", function(a) {
        return {
            k: {
                keyword: "BILL_PERIOD BILL_START BILL_STOP RS_EFFECTIVE_START RS_EFFECTIVE_STOP RS_JURIS_CODE RS_OPCO_CODE INTDADDATTRIBUTE|5 INTDADDVMSG|5 INTDBLOCKOP|5 INTDBLOCKOPNA|5 INTDCLOSE|5 INTDCOUNT|5 INTDCOUNTSTATUSCODE|5 INTDCREATEMASK|5 INTDCREATEDAYMASK|5 INTDCREATEFACTORMASK|5 INTDCREATEHANDLE|5 INTDCREATEOVERRIDEDAYMASK|5 INTDCREATEOVERRIDEMASK|5 INTDCREATESTATUSCODEMASK|5 INTDCREATETOUPERIOD|5 INTDDELETE|5 INTDDIPTEST|5 INTDEXPORT|5 INTDGETERRORCODE|5 INTDGETERRORMESSAGE|5 INTDISEQUAL|5 INTDJOIN|5 INTDLOAD|5 INTDLOADACTUALCUT|5 INTDLOADDATES|5 INTDLOADHIST|5 INTDLOADLIST|5 INTDLOADLISTDATES|5 INTDLOADLISTENERGY|5 INTDLOADLISTHIST|5 INTDLOADRELATEDCHANNEL|5 INTDLOADSP|5 INTDLOADSTAGING|5 INTDLOADUOM|5 INTDLOADUOMDATES|5 INTDLOADUOMHIST|5 INTDLOADVERSION|5 INTDOPEN|5 INTDREADFIRST|5 INTDREADNEXT|5 INTDRECCOUNT|5 INTDRELEASE|5 INTDREPLACE|5 INTDROLLAVG|5 INTDROLLPEAK|5 INTDSCALAROP|5 INTDSCALE|5 INTDSETATTRIBUTE|5 INTDSETDSTPARTICIPANT|5 INTDSETSTRING|5 INTDSETVALUE|5 INTDSETVALUESTATUS|5 INTDSHIFTSTARTTIME|5 INTDSMOOTH|5 INTDSORT|5 INTDSPIKETEST|5 INTDSUBSET|5 INTDTOU|5 INTDTOURELEASE|5 INTDTOUVALUE|5 INTDUPDATESTATS|5 INTDVALUE|5 STDEV INTDDELETEEX|5 INTDLOADEXACTUAL|5 INTDLOADEXCUT|5 INTDLOADEXDATES|5 INTDLOADEX|5 INTDLOADEXRELATEDCHANNEL|5 INTDSAVEEX|5 MVLOAD|5 MVLOADACCT|5 MVLOADACCTDATES|5 MVLOADACCTHIST|5 MVLOADDATES|5 MVLOADHIST|5 MVLOADLIST|5 MVLOADLISTDATES|5 MVLOADLISTHIST|5 IF FOR NEXT DONE SELECT END CALL ABORT CLEAR CHANNEL FACTOR LIST NUMBER OVERRIDE SET WEEK DISTRIBUTIONNODE ELSE WHEN THEN OTHERWISE IENUM CSV INCLUDE LEAVE RIDER SAVE DELETE NOVALUE SECTION WARN SAVE_UPDATE DETERMINANT LABEL REPORT REVENUE EACH IN FROM TOTAL CHARGE BLOCK AND OR CSV_FILE RATE_CODE AUXILIARY_DEMAND UIDACCOUNT RS BILL_PERIOD_SELECT HOURS_PER_MONTH INTD_ERROR_STOP SEASON_SCHEDULE_NAME ACCOUNTFACTOR ARRAYUPPERBOUND CALLSTOREDPROC GETADOCONNECTION GETCONNECT GETDATASOURCE GETQUALIFIER GETUSERID HASVALUE LISTCOUNT LISTOP LISTUPDATE LISTVALUE PRORATEFACTOR RSPRORATE SETBINPATH SETDBMONITOR WQ_OPEN BILLINGHOURS DATE DATEFROMFLOAT DATETIMEFROMSTRING DATETIMETOSTRING DATETOFLOAT DAY DAYDIFF DAYNAME DBDATETIME HOUR MINUTE MONTH MONTHDIFF MONTHHOURS MONTHNAME ROUNDDATE SAMEWEEKDAYLASTYEAR SECOND WEEKDAY WEEKDIFF YEAR YEARDAY YEARSTR COMPSUM HISTCOUNT HISTMAX HISTMIN HISTMINNZ HISTVALUE MAXNRANGE MAXRANGE MINRANGE COMPIKVA COMPKVA COMPKVARFROMKQKW COMPLF IDATTR FLAG LF2KW LF2KWH MAXKW POWERFACTOR READING2USAGE AVGSEASON MAXSEASON MONTHLYMERGE SEASONVALUE SUMSEASON ACCTREADDATES ACCTTABLELOAD CONFIGADD CONFIGGET CREATEOBJECT CREATEREPORT EMAILCLIENT EXPBLKMDMUSAGE EXPMDMUSAGE EXPORT_USAGE FACTORINEFFECT GETUSERSPECIFIEDSTOP INEFFECT ISHOLIDAY RUNRATE SAVE_PROFILE SETREPORTTITLE USEREXIT WATFORRUNRATE TO TABLE ACOS ASIN ATAN ATAN2 BITAND CEIL COS COSECANT COSH COTANGENT DIVQUOT DIVREM EXP FABS FLOOR FMOD FREPM FREXPN LOG LOG10 MAX MAXN MIN MINNZ MODF POW ROUND ROUND2VALUE ROUNDINT SECANT SIN SINH SQROOT TAN TANH FLOAT2STRING FLOAT2STRINGNC INSTR LEFT LEN LTRIM MID RIGHT RTRIM STRING STRINGNC TOLOWER TOUPPER TRIM NUMDAYS READ_DATE STAGING",
                built_in: "IDENTIFIER OPTIONS XML_ELEMENT XML_OP XML_ELEMENT_OF DOMDOCCREATE DOMDOCLOADFILE DOMDOCLOADXML DOMDOCSAVEFILE DOMDOCGETROOT DOMDOCADDPI DOMNODEGETNAME DOMNODEGETTYPE DOMNODEGETVALUE DOMNODEGETCHILDCT DOMNODEGETFIRSTCHILD DOMNODEGETSIBLING DOMNODECREATECHILDELEMENT DOMNODESETATTRIBUTE DOMNODEGETCHILDELEMENTCT DOMNODEGETFIRSTCHILDELEMENT DOMNODEGETSIBLINGELEMENT DOMNODEGETATTRIBUTECT DOMNODEGETATTRIBUTEI DOMNODEGETATTRIBUTEBYNAME DOMNODEGETBYNAME"
            },
            c: [a.CLCM, a.CBLCLM, a.ASM, a.QSM, a.CNM, {
                cN: "array",
                b: "#[a-zA-Z .]+"
            }]
        }
    }),
    c.registerLanguage("rib", function(a) {
        return {
            k: "ArchiveRecord AreaLightSource Atmosphere Attribute AttributeBegin AttributeEnd Basis Begin Blobby Bound Clipping ClippingPlane Color ColorSamples ConcatTransform Cone CoordinateSystem CoordSysTransform CropWindow Curves Cylinder DepthOfField Detail DetailRange Disk Displacement Display End ErrorHandler Exposure Exterior Format FrameAspectRatio FrameBegin FrameEnd GeneralPolygon GeometricApproximation Geometry Hider Hyperboloid Identity Illuminate Imager Interior LightSource MakeCubeFaceEnvironment MakeLatLongEnvironment MakeShadow MakeTexture Matte MotionBegin MotionEnd NuPatch ObjectBegin ObjectEnd ObjectInstance Opacity Option Orientation Paraboloid Patch PatchMesh Perspective PixelFilter PixelSamples PixelVariance Points PointsGeneralPolygons PointsPolygons Polygon Procedural Projection Quantize ReadArchive RelativeDetail ReverseOrientation Rotate Scale ScreenWindow ShadingInterpolation ShadingRate Shutter Sides Skew SolidBegin SolidEnd Sphere SubdivisionMesh Surface TextureCoordinates Torus Transform TransformBegin TransformEnd TransformPoints Translate TrimCurve WorldBegin WorldEnd",
            i: "</",
            c: [a.HCM, a.CNM, a.ASM, a.QSM]
        }
    }),
    c.registerLanguage("diff", function() {
        return {
            c: [{
                cN: "chunk",
                r: 10,
                v: [{
                    b: /^\@\@ +\-\d+,\d+ +\+\d+,\d+ +\@\@$/
                }, {
                    b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/
                }, {
                    b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/
                }]
            }, {
                cN: "header",
                v: [{
                    b: /Index: /,
                    e: /$/
                }, {
                    b: /=====/,
                    e: /=====$/
                }, {
                    b: /^\-\-\-/,
                    e: /$/
                }, {
                    b: /^\*{3} /,
                    e: /$/
                }, {
                    b: /^\+\+\+/,
                    e: /$/
                }, {
                    b: /\*{5}/,
                    e: /\*{5}$/
                }]
            }, {
                cN: "addition",
                b: "^\\+",
                e: "$"
            }, {
                cN: "deletion",
                b: "^\\-",
                e: "$"
            }, {
                cN: "change",
                b: "^\\!",
                e: "$"
            }]
        }
    }),
    c.registerLanguage("haml", function() {
        return {
            cI: !0,
            c: [{
                cN: "doctype",
                b: "^!!!( (5|1\\.1|Strict|Frameset|Basic|Mobile|RDFa|XML\\b.*))?$",
                r: 10
            }, {
                cN: "comment",
                b: "^\\s*(!=#|=#|-#|/).*$",
                r: 0
            }, {
                b: "^\\s*(-|=|!=)(?!#)",
                starts: {
                    e: "\\n",
                    sL: "ruby"
                }
            }, {
                cN: "tag",
                b: "^\\s*%",
                c: [{
                    cN: "title",
                    b: "\\w+"
                }, {
                    cN: "value",
                    b: "[#\\.]\\w+"
                }, {
                    b: "{\\s*",
                    e: "\\s*}",
                    eE: !0,
                    c: [{
                        b: ":\\w+\\s*=>",
                        e: ",\\s+",
                        rB: !0,
                        eW: !0,
                        c: [{
                            cN: "symbol",
                            b: ":\\w+"
                        }, {
                            cN: "string",
                            b: '"',
                            e: '"'
                        }, {
                            cN: "string",
                            b: "'",
                            e: "'"
                        }, {
                            b: "\\w+",
                            r: 0
                        }]
                    }]
                }, {
                    b: "\\(\\s*",
                    e: "\\s*\\)",
                    eE: !0,
                    c: [{
                        b: "\\w+\\s*=",
                        e: "\\s+",
                        rB: !0,
                        eW: !0,
                        c: [{
                            cN: "attribute",
                            b: "\\w+",
                            r: 0
                        }, {
                            cN: "string",
                            b: '"',
                            e: '"'
                        }, {
                            cN: "string",
                            b: "'",
                            e: "'"
                        }, {
                            b: "\\w+",
                            r: 0
                        }]
                    }]
                }]
            }, {
                cN: "bullet",
                b: "^\\s*[=~]\\s*",
                r: 0
            }, {
                b: "#{",
                starts: {
                    e: "}",
                    sL: "ruby"
                }
            }]
        }
    }),
    c.registerLanguage("javascript", function(a) {
        return {
            aliases: ["js"],
            k: {
                keyword: "in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class",
                literal: "true false null undefined NaN Infinity",
                built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require"
            },
            c: [{
                cN: "pi",
                b: /^\s*('|")use strict('|")/,
                r: 10
            }, a.ASM, a.QSM, a.CLCM, a.CBLCLM, a.CNM, {
                b: "(" + a.RSR + "|\\b(case|return|throw)\\b)\\s*",
                k: "return throw case",
                c: [a.CLCM, a.CBLCLM, a.REGEXP_MODE, {
                    b: /</,
                    e: />;/,
                    r: 0,
                    sL: "xml"
                }],
                r: 0
            }, {
                cN: "function",
                bK: "function",
                e: /\{/,
                c: [a.inherit(a.TM, {
                    b: /[A-Za-z$_][0-9A-Za-z$_]*/
                }), {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    c: [a.CLCM, a.CBLCLM],
                    i: /["'\(]/
                }],
                i: /\[|%/
            }, {
                b: /\$[(.]/
            }, {
                b: "\\." + a.IR,
                r: 0
            }]
        }
    }),
    c.registerLanguage("glsl", function(a) {
        return {
            k: {
                keyword: "atomic_uint attribute bool break bvec2 bvec3 bvec4 case centroid coherent const continue default discard dmat2 dmat2x2 dmat2x3 dmat2x4 dmat3 dmat3x2 dmat3x3 dmat3x4 dmat4 dmat4x2 dmat4x3 dmat4x4 do double dvec2 dvec3 dvec4 else flat float for highp if iimage1D iimage1DArray iimage2D iimage2DArray iimage2DMS iimage2DMSArray iimage2DRect iimage3D iimageBuffer iimageCube iimageCubeArray image1D image1DArray image2D image2DArray image2DMS image2DMSArray image2DRect image3D imageBuffer imageCube imageCubeArray in inout int invariant isampler1D isampler1DArray isampler2D isampler2DArray isampler2DMS isampler2DMSArray isampler2DRect isampler3D isamplerBuffer isamplerCube isamplerCubeArray ivec2 ivec3 ivec4 layout lowp mat2 mat2x2 mat2x3 mat2x4 mat3 mat3x2 mat3x3 mat3x4 mat4 mat4x2 mat4x3 mat4x4 mediump noperspective out patch precision readonly restrict return sample sampler1D sampler1DArray sampler1DArrayShadow sampler1DShadow sampler2D sampler2DArray sampler2DArrayShadow sampler2DMS sampler2DMSArray sampler2DRect sampler2DRectShadow sampler2DShadow sampler3D samplerBuffer samplerCube samplerCubeArray samplerCubeArrayShadow samplerCubeShadow smooth struct subroutine switch uimage1D uimage1DArray uimage2D uimage2DArray uimage2DMS uimage2DMSArray uimage2DRect uimage3D uimageBuffer uimageCube uimageCubeArray uint uniform usampler1D usampler1DArray usampler2D usampler2DArray usampler2DMS usampler2DMSArray usampler2DRect usampler3D usamplerBuffer usamplerCube usamplerCubeArray uvec2 uvec3 uvec4 varying vec2 vec3 vec4 void volatile while writeonly",
                built_in: "gl_BackColor gl_BackLightModelProduct gl_BackLightProduct gl_BackMaterial gl_BackSecondaryColor gl_ClipDistance gl_ClipPlane gl_ClipVertex gl_Color gl_DepthRange gl_EyePlaneQ gl_EyePlaneR gl_EyePlaneS gl_EyePlaneT gl_Fog gl_FogCoord gl_FogFragCoord gl_FragColor gl_FragCoord gl_FragData gl_FragDepth gl_FrontColor gl_FrontFacing gl_FrontLightModelProduct gl_FrontLightProduct gl_FrontMaterial gl_FrontSecondaryColor gl_InstanceID gl_InvocationID gl_Layer gl_LightModel gl_LightSource gl_MaxAtomicCounterBindings gl_MaxAtomicCounterBufferSize gl_MaxClipDistances gl_MaxClipPlanes gl_MaxCombinedAtomicCounterBuffers gl_MaxCombinedAtomicCounters gl_MaxCombinedImageUniforms gl_MaxCombinedImageUnitsAndFragmentOutputs gl_MaxCombinedTextureImageUnits gl_MaxDrawBuffers gl_MaxFragmentAtomicCounterBuffers gl_MaxFragmentAtomicCounters gl_MaxFragmentImageUniforms gl_MaxFragmentInputComponents gl_MaxFragmentUniformComponents gl_MaxFragmentUniformVectors gl_MaxGeometryAtomicCounterBuffers gl_MaxGeometryAtomicCounters gl_MaxGeometryImageUniforms gl_MaxGeometryInputComponents gl_MaxGeometryOutputComponents gl_MaxGeometryOutputVertices gl_MaxGeometryTextureImageUnits gl_MaxGeometryTotalOutputComponents gl_MaxGeometryUniformComponents gl_MaxGeometryVaryingComponents gl_MaxImageSamples gl_MaxImageUnits gl_MaxLights gl_MaxPatchVertices gl_MaxProgramTexelOffset gl_MaxTessControlAtomicCounterBuffers gl_MaxTessControlAtomicCounters gl_MaxTessControlImageUniforms gl_MaxTessControlInputComponents gl_MaxTessControlOutputComponents gl_MaxTessControlTextureImageUnits gl_MaxTessControlTotalOutputComponents gl_MaxTessControlUniformComponents gl_MaxTessEvaluationAtomicCounterBuffers gl_MaxTessEvaluationAtomicCounters gl_MaxTessEvaluationImageUniforms gl_MaxTessEvaluationInputComponents gl_MaxTessEvaluationOutputComponents gl_MaxTessEvaluationTextureImageUnits gl_MaxTessEvaluationUniformComponents gl_MaxTessGenLevel gl_MaxTessPatchComponents gl_MaxTextureCoords gl_MaxTextureImageUnits gl_MaxTextureUnits gl_MaxVaryingComponents gl_MaxVaryingFloats gl_MaxVaryingVectors gl_MaxVertexAtomicCounterBuffers gl_MaxVertexAtomicCounters gl_MaxVertexAttribs gl_MaxVertexImageUniforms gl_MaxVertexOutputComponents gl_MaxVertexTextureImageUnits gl_MaxVertexUniformComponents gl_MaxVertexUniformVectors gl_MaxViewports gl_MinProgramTexelOffsetgl_ModelViewMatrix gl_ModelViewMatrixInverse gl_ModelViewMatrixInverseTranspose gl_ModelViewMatrixTranspose gl_ModelViewProjectionMatrix gl_ModelViewProjectionMatrixInverse gl_ModelViewProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixTranspose gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_Normal gl_NormalMatrix gl_NormalScale gl_ObjectPlaneQ gl_ObjectPlaneR gl_ObjectPlaneS gl_ObjectPlaneT gl_PatchVerticesIn gl_PerVertex gl_Point gl_PointCoord gl_PointSize gl_Position gl_PrimitiveID gl_PrimitiveIDIn gl_ProjectionMatrix gl_ProjectionMatrixInverse gl_ProjectionMatrixInverseTranspose gl_ProjectionMatrixTranspose gl_SampleID gl_SampleMask gl_SampleMaskIn gl_SamplePosition gl_SecondaryColor gl_TessCoord gl_TessLevelInner gl_TessLevelOuter gl_TexCoord gl_TextureEnvColor gl_TextureMatrixInverseTranspose gl_TextureMatrixTranspose gl_Vertex gl_VertexID gl_ViewportIndex gl_in gl_out EmitStreamVertex EmitVertex EndPrimitive EndStreamPrimitive abs acos acosh all any asin asinh atan atanh atomicCounter atomicCounterDecrement atomicCounterIncrement barrier bitCount bitfieldExtract bitfieldInsert bitfieldReverse ceil clamp cos cosh cross dFdx dFdy degrees determinant distance dot equal exp exp2 faceforward findLSB findMSB floatBitsToInt floatBitsToUint floor fma fract frexp ftransform fwidth greaterThan greaterThanEqual imageAtomicAdd imageAtomicAnd imageAtomicCompSwap imageAtomicExchange imageAtomicMax imageAtomicMin imageAtomicOr imageAtomicXor imageLoad imageStore imulExtended intBitsToFloat interpolateAtCentroid interpolateAtOffset interpolateAtSample inverse inversesqrt isinf isnan ldexp length lessThan lessThanEqual log log2 matrixCompMult max memoryBarrier min mix mod modf noise1 noise2 noise3 noise4 normalize not notEqual outerProduct packDouble2x32 packHalf2x16 packSnorm2x16 packSnorm4x8 packUnorm2x16 packUnorm4x8 pow radians reflect refract round roundEven shadow1D shadow1DLod shadow1DProj shadow1DProjLod shadow2D shadow2DLod shadow2DProj shadow2DProjLod sign sin sinh smoothstep sqrt step tan tanh texelFetch texelFetchOffset texture texture1D texture1DLod texture1DProj texture1DProjLod texture2D texture2DLod texture2DProj texture2DProjLod texture3D texture3DLod texture3DProj texture3DProjLod textureCube textureCubeLod textureGather textureGatherOffset textureGatherOffsets textureGrad textureGradOffset textureLod textureLodOffset textureOffset textureProj textureProjGrad textureProjGradOffset textureProjLod textureProjLodOffset textureProjOffset textureQueryLod textureSize transpose trunc uaddCarry uintBitsToFloat umulExtended unpackDouble2x32 unpackHalf2x16 unpackSnorm2x16 unpackSnorm4x8 unpackUnorm2x16 unpackUnorm4x8 usubBorrow gl_TextureMatrix gl_TextureMatrixInverse",
                literal: "true false"
            },
            i: '"',
            c: [a.CLCM, a.CBLCLM, a.CNM, {
                cN: "preprocessor",
                b: "#",
                e: "$"
            }]
        }
    }),
    c.registerLanguage("rsl", function(a) {
        return {
            k: {
                keyword: "float color point normal vector matrix while for if do return else break extern continue",
                built_in: "abs acos ambient area asin atan atmosphere attribute calculatenormal ceil cellnoise clamp comp concat cos degrees depth Deriv diffuse distance Du Dv environment exp faceforward filterstep floor format fresnel incident length lightsource log match max min mod noise normalize ntransform opposite option phong pnoise pow printf ptlined radians random reflect refract renderinfo round setcomp setxcomp setycomp setzcomp shadow sign sin smoothstep specular specularbrdf spline sqrt step tan texture textureinfo trace transform vtransform xcomp ycomp zcomp"
            },
            i: "</",
            c: [a.CLCM, a.CBLCLM, a.QSM, a.ASM, a.CNM, {
                cN: "preprocessor",
                b: "#",
                e: "$"
            }, {
                cN: "shader",
                bK: "surface displacement light volume imager",
                e: "\\("
            }, {
                cN: "shading",
                bK: "illuminate illuminance gather",
                e: "\\("
            }]
        }
    }),
    c.registerLanguage("lua", function(a) {
        var b = "\\[=*\\["
          , c = "\\]=*\\]"
          , d = {
            b: b,
            e: c,
            c: ["self"]
        }
          , e = [{
            cN: "comment",
            b: "--(?!" + b + ")",
            e: "$"
        }, {
            cN: "comment",
            b: "--" + b,
            e: c,
            c: [d],
            r: 10
        }];
        return {
            l: a.UIR,
            k: {
                keyword: "and break do else elseif end false for if in local nil not or repeat return then true until while",
                built_in: "_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table"
            },
            c: e.concat([{
                cN: "function",
                bK: "function",
                e: "\\)",
                c: [a.inherit(a.TM, {
                    b: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"
                }), {
                    cN: "params",
                    b: "\\(",
                    eW: !0,
                    c: e
                }].concat(e)
            }, a.CNM, a.ASM, a.QSM, {
                cN: "string",
                b: b,
                e: c,
                c: [d],
                r: 10
            }])
        }
    }),
    c.registerLanguage("xml", function() {
        var a = "[A-Za-z0-9\\._:-]+"
          , b = {
            b: /<\?(php)?(?!\w)/,
            e: /\?>/,
            sL: "php",
            subLanguageMode: "continuous"
        }
          , c = {
            eW: !0,
            i: /</,
            r: 0,
            c: [b, {
                cN: "attribute",
                b: a,
                r: 0
            }, {
                b: "=",
                r: 0,
                c: [{
                    cN: "value",
                    v: [{
                        b: /"/,
                        e: /"/
                    }, {
                        b: /'/,
                        e: /'/
                    }, {
                        b: /[^\s\/>]+/
                    }]
                }]
            }]
        };
        return {
            aliases: ["html"],
            cI: !0,
            c: [{
                cN: "doctype",
                b: "<!DOCTYPE",
                e: ">",
                r: 10,
                c: [{
                    b: "\\[",
                    e: "\\]"
                }]
            }, {
                cN: "comment",
                b: "<!--",
                e: "-->",
                r: 10
            }, {
                cN: "cdata",
                b: "<\\!\\[CDATA\\[",
                e: "\\]\\]>",
                r: 10
            }, {
                cN: "tag",
                b: "<style(?=\\s|>|$)",
                e: ">",
                k: {
                    title: "style"
                },
                c: [c],
                starts: {
                    e: "</style>",
                    rE: !0,
                    sL: "css"
                }
            }, {
                cN: "tag",
                b: "<script(?=\\s|>|$)",
                e: ">",
                k: {
                    title: "script"
                },
                c: [c],
                starts: {
                    e: "</script>",
                    rE: !0,
                    sL: "javascript"
                }
            }, {
                b: "<%",
                e: "%>",
                sL: "vbscript"
            }, b, {
                cN: "pi",
                b: /<\?\w+/,
                e: /\?>/,
                r: 10
            }, {
                cN: "tag",
                b: "</?",
                e: "/?>",
                c: [{
                    cN: "title",
                    b: "[^ /><]+",
                    r: 0
                }, c]
            }]
        }
    }),
    c.registerLanguage("markdown", function() {
        return {
            c: [{
                cN: "header",
                v: [{
                    b: "^#{1,6}",
                    e: "$"
                }, {
                    b: "^.+?\\n[=-]{2,}$"
                }]
            }, {
                b: "<",
                e: ">",
                sL: "xml",
                r: 0
            }, {
                cN: "bullet",
                b: "^([*+-]|(\\d+\\.))\\s+"
            }, {
                cN: "strong",
                b: "[*_]{2}.+?[*_]{2}"
            }, {
                cN: "emphasis",
                v: [{
                    b: "\\*.+?\\*"
                }, {
                    b: "_.+?_",
                    r: 0
                }]
            }, {
                cN: "blockquote",
                b: "^>\\s+",
                e: "$"
            }, {
                cN: "code",
                v: [{
                    b: "`.+?`"
                }, {
                    b: "^( {4}| )",
                    e: "$",
                    r: 0
                }]
            }, {
                cN: "horizontal_rule",
                b: "^[-\\*]{3,}",
                e: "$"
            }, {
                b: "\\[.+?\\][\\(\\[].+?[\\)\\]]",
                rB: !0,
                c: [{
                    cN: "link_label",
                    b: "\\[",
                    e: "\\]",
                    eB: !0,
                    rE: !0,
                    r: 0
                }, {
                    cN: "link_url",
                    b: "\\]\\(",
                    e: "\\)",
                    eB: !0,
                    eE: !0
                }, {
                    cN: "link_reference",
                    b: "\\]\\[",
                    e: "\\]",
                    eB: !0,
                    eE: !0
                }],
                r: 10
            }, {
                b: "^\\[.+\\]:",
                e: "$",
                rB: !0,
                c: [{
                    cN: "link_reference",
                    b: "\\[",
                    e: "\\]",
                    eB: !0,
                    eE: !0
                }, {
                    cN: "link_url",
                    b: "\\s",
                    e: "$"
                }]
            }]
        }
    }),
    c.registerLanguage("css", function(a) {
        var b = "[a-zA-Z-][a-zA-Z0-9_-]*"
          , c = {
            cN: "function",
            b: b + "\\(",
            e: "\\)",
            c: ["self", a.NM, a.ASM, a.QSM]
        };
        return {
            cI: !0,
            i: "[=/|']",
            c: [a.CBLCLM, {
                cN: "id",
                b: "\\#[A-Za-z0-9_-]+"
            }, {
                cN: "class",
                b: "\\.[A-Za-z0-9_-]+",
                r: 0
            }, {
                cN: "attr_selector",
                b: "\\[",
                e: "\\]",
                i: "$"
            }, {
                cN: "pseudo",
                b: ":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"
            }, {
                cN: "at_rule",
                b: "@(font-face|page)",
                l: "[a-z-]+",
                k: "font-face page"
            }, {
                cN: "at_rule",
                b: "@",
                e: "[{;]",
                c: [{
                    cN: "keyword",
                    b: /\S+/
                }, {
                    b: /\s/,
                    eW: !0,
                    eE: !0,
                    r: 0,
                    c: [c, a.ASM, a.QSM, a.NM]
                }]
            }, {
                cN: "tag",
                b: b,
                r: 0
            }, {
                cN: "rules",
                b: "{",
                e: "}",
                i: "[^\\s]",
                r: 0,
                c: [a.CBLCLM, {
                    cN: "rule",
                    b: "[^\\s]",
                    rB: !0,
                    e: ";",
                    eW: !0,
                    c: [{
                        cN: "attribute",
                        b: "[A-Z\\_\\.\\-]+",
                        e: ":",
                        eE: !0,
                        i: "[^\\s]",
                        starts: {
                            cN: "value",
                            eW: !0,
                            eE: !0,
                            c: [c, a.NM, a.QSM, a.ASM, a.CBLCLM, {
                                cN: "hexcolor",
                                b: "#[0-9A-Fa-f]+"
                            }, {
                                cN: "important",
                                b: "!important"
                            }]
                        }
                    }]
                }]
            }]
        }
    }),
    c.registerLanguage("lisp", function(a) {
        var b = "[a-zA-Z_\\-\\+\\*\\/\\<\\=\\>\\&\\#][a-zA-Z0-9_\\-\\+\\*\\/\\<\\=\\>\\&\\#!]*"
          , c = "(\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s)(\\+|\\-)?\\d+)?"
          , d = {
            cN: "shebang",
            b: "^#!",
            e: "$"
        }
          , e = {
            cN: "literal",
            b: "\\b(t{1}|nil)\\b"
        }
          , f = {
            cN: "number",
            v: [{
                b: c,
                r: 0
            }, {
                b: "#b[0-1]+(/[0-1]+)?"
            }, {
                b: "#o[0-7]+(/[0-7]+)?"
            }, {
                b: "#x[0-9a-f]+(/[0-9a-f]+)?"
            }, {
                b: "#c\\(" + c + " +" + c,
                e: "\\)"
            }]
        }
          , g = a.inherit(a.QSM, {
            i: null 
        })
          , h = {
            cN: "comment",
            b: ";",
            e: "$"
        }
          , i = {
            cN: "variable",
            b: "\\*",
            e: "\\*"
        }
          , j = {
            cN: "keyword",
            b: "[:&]" + b
        }
          , k = {
            b: "\\(",
            e: "\\)",
            c: ["self", e, g, f]
        }
          , l = {
            cN: "quoted",
            c: [f, g, i, j, k],
            v: [{
                b: "['`]\\(",
                e: "\\)"
            }, {
                b: "\\(quote ",
                e: "\\)",
                k: {
                    title: "quote"
                }
            }]
        }
          , m = {
            cN: "list",
            b: "\\(",
            e: "\\)"
        }
          , n = {
            eW: !0,
            r: 0
        };
        return m.c = [{
            cN: "title",
            b: b
        }, n],
        n.c = [l, m, e, f, g, h, i, j],
        {
            i: /\S/,
            c: [f, d, e, g, h, l, m]
        }
    }),
    c.registerLanguage("profile", function(a) {
        return {
            c: [a.CNM, {
                cN: "built_in",
                b: "{",
                e: "}$",
                eB: !0,
                eE: !0,
                c: [a.ASM, a.QSM],
                r: 0
            }, {
                cN: "filename",
                b: "[a-zA-Z_][\\da-zA-Z_]+\\.[\\da-zA-Z_]{1,3}",
                e: ":",
                eE: !0
            }, {
                cN: "header",
                b: "(ncalls|tottime|cumtime)",
                e: "$",
                k: "ncalls tottime|10 cumtime|10 filename",
                r: 10
            }, {
                cN: "summary",
                b: "function calls",
                e: "$",
                c: [a.CNM],
                r: 10
            }, a.ASM, a.QSM, {
                cN: "function",
                b: "\\(",
                e: "\\)$",
                c: [a.UTM],
                r: 0
            }]
        }
    }),
    c.registerLanguage("http", function() {
        return {
            i: "\\S",
            c: [{
                cN: "status",
                b: "^HTTP/[0-9\\.]+",
                e: "$",
                c: [{
                    cN: "number",
                    b: "\\b\\d{3}\\b"
                }]
            }, {
                cN: "request",
                b: "^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",
                rB: !0,
                e: "$",
                c: [{
                    cN: "string",
                    b: " ",
                    e: " ",
                    eB: !0,
                    eE: !0
                }]
            }, {
                cN: "attribute",
                b: "^\\w",
                e: ": ",
                eE: !0,
                i: "\\n|\\s|=",
                starts: {
                    cN: "string",
                    e: "$"
                }
            }, {
                b: "\\n\\n",
                starts: {
                    sL: "",
                    eW: !0
                }
            }]
        }
    }),
    c.registerLanguage("java", function(a) {
        var b = "false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws";
        return {
            k: b,
            i: /<\//,
            c: [{
                cN: "javadoc",
                b: "/\\*\\*",
                e: "\\*/",
                c: [{
                    cN: "javadoctag",
                    b: "(^|\\s)@[A-Za-z]+"
                }],
                r: 10
            }, a.CLCM, a.CBLCLM, a.ASM, a.QSM, {
                bK: "protected public private",
                e: /[{;=]/,
                k: b,
                c: [{
                    cN: "class",
                    bK: "class interface",
                    eW: !0,
                    i: /[:"<>]/,
                    c: [{
                        bK: "extends implements",
                        r: 10
                    }, a.UTM]
                }, {
                    b: a.UIR + "\\s*\\(",
                    rB: !0,
                    c: [a.UTM]
                }]
            }, a.CNM, {
                cN: "annotation",
                b: "@[A-Za-z]+"
            }]
        }
    }),
    c.registerLanguage("fsharp", function(a) {
        return {
            k: "abstract and as assert base begin class default delegate do done downcast downto elif else end exception extern false finally for fun function global if in inherit inline interface internal lazy let match member module mutable namespace new null of open or override private public rec return sig static struct then to true try type upcast use val void when while with yield",
            c: [{
                cN: "string",
                b: '@"',
                e: '"',
                c: [{
                    b: '""'
                }]
            }, {
                cN: "string",
                b: '"""',
                e: '"""'
            }, {
                cN: "comment",
                b: "\\(\\*",
                e: "\\*\\)"
            }, {
                cN: "class",
                bK: "type",
                e: "\\(|=|$",
                c: [a.UTM]
            }, {
                cN: "annotation",
                b: "\\[<",
                e: ">\\]"
            }, {
                cN: "attribute",
                b: "\\B('[A-Za-z])\\b",
                c: [a.BE]
            }, a.CLCM, a.inherit(a.QSM, {
                i: null 
            }), a.CNM]
        }
    }),
    c.registerLanguage("mathematica", function(a) {
        return {
            aliases: ["mma"],
            l: "(\\$|\\b)" + a.IR + "\\b",
            k: "AbelianGroup Abort AbortKernels AbortProtect Above Abs Absolute AbsoluteCorrelation AbsoluteCorrelationFunction AbsoluteCurrentValue AbsoluteDashing AbsoluteFileName AbsoluteOptions AbsolutePointSize AbsoluteThickness AbsoluteTime AbsoluteTiming AccountingForm Accumulate Accuracy AccuracyGoal ActionDelay ActionMenu ActionMenuBox ActionMenuBoxOptions Active ActiveItem ActiveStyle AcyclicGraphQ AddOnHelpPath AddTo AdjacencyGraph AdjacencyList AdjacencyMatrix AdjustmentBox AdjustmentBoxOptions AdjustTimeSeriesForecast AffineTransform After AiryAi AiryAiPrime AiryAiZero AiryBi AiryBiPrime AiryBiZero AlgebraicIntegerQ AlgebraicNumber AlgebraicNumberDenominator AlgebraicNumberNorm AlgebraicNumberPolynomial AlgebraicNumberTrace AlgebraicRules AlgebraicRulesData Algebraics AlgebraicUnitQ Alignment AlignmentMarker AlignmentPoint All AllowedDimensions AllowGroupClose AllowInlineCells AllowKernelInitialization AllowReverseGroupClose AllowScriptLevelChange AlphaChannel AlternatingGroup AlternativeHypothesis Alternatives AmbientLight Analytic AnchoredSearch And AndersonDarlingTest AngerJ AngleBracket AngularGauge Animate AnimationCycleOffset AnimationCycleRepetitions AnimationDirection AnimationDisplayTime AnimationRate AnimationRepetitions AnimationRunning Animator AnimatorBox AnimatorBoxOptions AnimatorElements Annotation Annuity AnnuityDue Antialiasing Antisymmetric Apart ApartSquareFree Appearance AppearanceElements AppellF1 Append AppendTo Apply ArcCos ArcCosh ArcCot ArcCoth ArcCsc ArcCsch ArcSec ArcSech ArcSin ArcSinDistribution ArcSinh ArcTan ArcTanh Arg ArgMax ArgMin ArgumentCountQ ARIMAProcess ArithmeticGeometricMean ARMAProcess ARProcess Array ArrayComponents ArrayDepth ArrayFlatten ArrayPad ArrayPlot ArrayQ ArrayReshape ArrayRules Arrays Arrow Arrow3DBox ArrowBox Arrowheads AspectRatio AspectRatioFixed Assert Assuming Assumptions AstronomicalData Asynchronous AsynchronousTaskObject AsynchronousTasks AtomQ Attributes AugmentedSymmetricPolynomial AutoAction AutoDelete AutoEvaluateEvents AutoGeneratedPackage AutoIndent AutoIndentSpacings AutoItalicWords AutoloadPath AutoMatch Automatic AutomaticImageSize AutoMultiplicationSymbol AutoNumberFormatting AutoOpenNotebooks AutoOpenPalettes AutorunSequencing AutoScaling AutoScroll AutoSpacing AutoStyleOptions AutoStyleWords Axes AxesEdge AxesLabel AxesOrigin AxesStyle Axis BabyMonsterGroupB Back Background BackgroundTasksSettings Backslash Backsubstitution Backward Band BandpassFilter BandstopFilter BarabasiAlbertGraphDistribution BarChart BarChart3D BarLegend BarlowProschanImportance BarnesG BarOrigin BarSpacing BartlettHannWindow BartlettWindow BaseForm Baseline BaselinePosition BaseStyle BatesDistribution BattleLemarieWavelet Because BeckmannDistribution Beep Before Begin BeginDialogPacket BeginFrontEndInteractionPacket BeginPackage BellB BellY Below BenfordDistribution BeniniDistribution BenktanderGibratDistribution BenktanderWeibullDistribution BernoulliB BernoulliDistribution BernoulliGraphDistribution BernoulliProcess BernsteinBasis BesselFilterModel BesselI BesselJ BesselJZero BesselK BesselY BesselYZero Beta BetaBinomialDistribution BetaDistribution BetaNegativeBinomialDistribution BetaPrimeDistribution BetaRegularized BetweennessCentrality BezierCurve BezierCurve3DBox BezierCurve3DBoxOptions BezierCurveBox BezierCurveBoxOptions BezierFunction BilateralFilter Binarize BinaryFormat BinaryImageQ BinaryRead BinaryReadList BinaryWrite BinCounts BinLists Binomial BinomialDistribution BinomialProcess BinormalDistribution BiorthogonalSplineWavelet BipartiteGraphQ BirnbaumImportance BirnbaumSaundersDistribution BitAnd BitClear BitGet BitLength BitNot BitOr BitSet BitShiftLeft BitShiftRight BitXor Black BlackmanHarrisWindow BlackmanNuttallWindow BlackmanWindow Blank BlankForm BlankNullSequence BlankSequence Blend Block BlockRandom BlomqvistBeta BlomqvistBetaTest Blue Blur BodePlot BohmanWindow Bold Bookmarks Boole BooleanConsecutiveFunction BooleanConvert BooleanCountingFunction BooleanFunction BooleanGraph BooleanMaxterms BooleanMinimize BooleanMinterms Booleans BooleanTable BooleanVariables BorderDimensions BorelTannerDistribution Bottom BottomHatTransform BoundaryStyle Bounds Box BoxBaselineShift BoxData BoxDimensions Boxed Boxes BoxForm BoxFormFormatTypes BoxFrame BoxID BoxMargins BoxMatrix BoxRatios BoxRotation BoxRotationPoint BoxStyle BoxWhiskerChart Bra BracketingBar BraKet BrayCurtisDistance BreadthFirstScan Break Brown BrownForsytheTest BrownianBridgeProcess BrowserCategory BSplineBasis BSplineCurve BSplineCurve3DBox BSplineCurveBox BSplineCurveBoxOptions BSplineFunction BSplineSurface BSplineSurface3DBox BubbleChart BubbleChart3D BubbleScale BubbleSizes BulletGauge BusinessDayQ ButterflyGraph ButterworthFilterModel Button ButtonBar ButtonBox ButtonBoxOptions ButtonCell ButtonContents ButtonData ButtonEvaluator ButtonExpandable ButtonFrame ButtonFunction ButtonMargins ButtonMinHeight ButtonNote ButtonNotebook ButtonSource ButtonStyle ButtonStyleMenuListing Byte ByteCount ByteOrdering C CachedValue CacheGraphics CalendarData CalendarType CallPacket CanberraDistance Cancel CancelButton CandlestickChart Cap CapForm CapitalDifferentialD CardinalBSplineBasis CarmichaelLambda Cases Cashflow Casoratian Catalan CatalanNumber Catch CauchyDistribution CauchyWindow CayleyGraph CDF CDFDeploy CDFInformation CDFWavelet Ceiling Cell CellAutoOverwrite CellBaseline CellBoundingBox CellBracketOptions CellChangeTimes CellContents CellContext CellDingbat CellDynamicExpression CellEditDuplicate CellElementsBoundingBox CellElementSpacings CellEpilog CellEvaluationDuplicate CellEvaluationFunction CellEventActions CellFrame CellFrameColor CellFrameLabelMargins CellFrameLabels CellFrameMargins CellGroup CellGroupData CellGrouping CellGroupingRules CellHorizontalScrolling CellID CellLabel CellLabelAutoDelete CellLabelMargins CellLabelPositioning CellMargins CellObject CellOpen CellPrint CellProlog Cells CellSize CellStyle CellTags CellularAutomaton CensoredDistribution Censoring Center CenterDot CentralMoment CentralMomentGeneratingFunction CForm ChampernowneNumber ChanVeseBinarize Character CharacterEncoding CharacterEncodingsPath CharacteristicFunction CharacteristicPolynomial CharacterRange Characters ChartBaseStyle ChartElementData ChartElementDataFunction ChartElementFunction ChartElements ChartLabels ChartLayout ChartLegends ChartStyle Chebyshev1FilterModel Chebyshev2FilterModel ChebyshevDistance ChebyshevT ChebyshevU Check CheckAbort CheckAll Checkbox CheckboxBar CheckboxBox CheckboxBoxOptions ChemicalData ChessboardDistance ChiDistribution ChineseRemainder ChiSquareDistribution ChoiceButtons ChoiceDialog CholeskyDecomposition Chop Circle CircleBox CircleDot CircleMinus CirclePlus CircleTimes CirculantGraph CityData Clear ClearAll ClearAttributes ClearSystemCache ClebschGordan ClickPane Clip ClipboardNotebook ClipFill ClippingStyle ClipPlanes ClipRange Clock ClockGauge ClockwiseContourIntegral Close Closed CloseKernels ClosenessCentrality Closing ClosingAutoSave ClosingEvent ClusteringComponents CMYKColor Coarse Coefficient CoefficientArrays CoefficientDomain CoefficientList CoefficientRules CoifletWavelet Collect Colon ColonForm ColorCombine ColorConvert ColorData ColorDataFunction ColorFunction ColorFunctionScaling Colorize ColorNegate ColorOutput ColorProfileData ColorQuantize ColorReplace ColorRules ColorSelectorSettings ColorSeparate ColorSetter ColorSetterBox ColorSetterBoxOptions ColorSlider ColorSpace Column ColumnAlignments ColumnBackgrounds ColumnForm ColumnLines ColumnsEqual ColumnSpacings ColumnWidths CommonDefaultFormatTypes Commonest CommonestFilter CommonUnits CommunityBoundaryStyle CommunityGraphPlot CommunityLabels CommunityRegionStyle CompatibleUnitQ CompilationOptions CompilationTarget Compile Compiled CompiledFunction Complement CompleteGraph CompleteGraphQ CompleteKaryTree CompletionsListPacket Complex Complexes ComplexExpand ComplexInfinity ComplexityFunction ComponentMeasurements ComponentwiseContextMenu Compose ComposeList ComposeSeries Composition CompoundExpression CompoundPoissonDistribution CompoundPoissonProcess CompoundRenewalProcess Compress CompressedData Condition ConditionalExpression Conditioned Cone ConeBox ConfidenceLevel ConfidenceRange ConfidenceTransform ConfigurationPath Congruent Conjugate ConjugateTranspose Conjunction Connect ConnectedComponents ConnectedGraphQ ConnesWindow ConoverTest ConsoleMessage ConsoleMessagePacket ConsolePrint Constant ConstantArray Constants ConstrainedMax ConstrainedMin ContentPadding ContentsBoundingBox ContentSelectable ContentSize Context ContextMenu Contexts ContextToFilename ContextToFileName Continuation Continue ContinuedFraction ContinuedFractionK ContinuousAction ContinuousMarkovProcess ContinuousTimeModelQ ContinuousWaveletData ContinuousWaveletTransform ContourDetect ContourGraphics ContourIntegral ContourLabels ContourLines ContourPlot ContourPlot3D Contours ContourShading ContourSmoothing ContourStyle ContraharmonicMean Control ControlActive ControlAlignment ControllabilityGramian ControllabilityMatrix ControllableDecomposition ControllableModelQ ControllerDuration ControllerInformation ControllerInformationData ControllerLinking ControllerManipulate ControllerMethod ControllerPath ControllerState ControlPlacement ControlsRendering ControlType Convergents ConversionOptions ConversionRules ConvertToBitmapPacket ConvertToPostScript ConvertToPostScriptPacket Convolve ConwayGroupCo1 ConwayGroupCo2 ConwayGroupCo3 CoordinateChartData CoordinatesToolOptions CoordinateTransform CoordinateTransformData CoprimeQ Coproduct CopulaDistribution Copyable CopyDirectory CopyFile CopyTag CopyToClipboard CornerFilter CornerNeighbors Correlation CorrelationDistance CorrelationFunction CorrelationTest Cos Cosh CoshIntegral CosineDistance CosineWindow CosIntegral Cot Coth Count CounterAssignments CounterBox CounterBoxOptions CounterClockwiseContourIntegral CounterEvaluator CounterFunction CounterIncrements CounterStyle CounterStyleMenuListing CountRoots CountryData Covariance CovarianceEstimatorFunction CovarianceFunction CoxianDistribution CoxIngersollRossProcess CoxModel CoxModelFit CramerVonMisesTest CreateArchive CreateDialog CreateDirectory CreateDocument CreateIntermediateDirectories CreatePalette CreatePalettePacket CreateScheduledTask CreateTemporary CreateWindow CriticalityFailureImportance CriticalitySuccessImportance CriticalSection Cross CrossingDetect CrossMatrix Csc Csch CubeRoot Cubics Cuboid CuboidBox Cumulant CumulantGeneratingFunction Cup CupCap Curl CurlyDoubleQuote CurlyQuote CurrentImage CurrentlySpeakingPacket CurrentValue CurvatureFlowFilter CurveClosed Cyan CycleGraph CycleIndexPolynomial Cycles CyclicGroup Cyclotomic Cylinder CylinderBox CylindricalDecomposition D DagumDistribution DamerauLevenshteinDistance DampingFactor Darker Dashed Dashing DataCompression DataDistribution DataRange DataReversed Date DateDelimiters DateDifference DateFunction DateList DateListLogPlot DateListPlot DatePattern DatePlus DateRange DateString DateTicksFormat DaubechiesWavelet DavisDistribution DawsonF DayCount DayCountConvention DayMatchQ DayName DayPlus DayRange DayRound DeBruijnGraph Debug DebugTag Decimal DeclareKnownSymbols DeclarePackage Decompose Decrement DedekindEta Default DefaultAxesStyle DefaultBaseStyle DefaultBoxStyle DefaultButton DefaultColor DefaultControlPlacement DefaultDuplicateCellStyle DefaultDuration DefaultElement DefaultFaceGridsStyle DefaultFieldHintStyle DefaultFont DefaultFontProperties DefaultFormatType DefaultFormatTypeForStyle DefaultFrameStyle DefaultFrameTicksStyle DefaultGridLinesStyle DefaultInlineFormatType DefaultInputFormatType DefaultLabelStyle DefaultMenuStyle DefaultNaturalLanguage DefaultNewCellStyle DefaultNewInlineCellStyle DefaultNotebook DefaultOptions DefaultOutputFormatType DefaultStyle DefaultStyleDefinitions DefaultTextFormatType DefaultTextInlineFormatType DefaultTicksStyle DefaultTooltipStyle DefaultValues Defer DefineExternal DefineInputStreamMethod DefineOutputStreamMethod Definition Degree DegreeCentrality DegreeGraphDistribution DegreeLexicographic DegreeReverseLexicographic Deinitialization Del Deletable Delete DeleteBorderComponents DeleteCases DeleteContents DeleteDirectory DeleteDuplicates DeleteFile DeleteSmallComponents DeleteWithContents DeletionWarning Delimiter DelimiterFlashTime DelimiterMatching Delimiters Denominator DensityGraphics DensityHistogram DensityPlot DependentVariables Deploy Deployed Depth DepthFirstScan Derivative DerivativeFilter DescriptorStateSpace DesignMatrix Det DGaussianWavelet DiacriticalPositioning Diagonal DiagonalMatrix Dialog DialogIndent DialogInput DialogLevel DialogNotebook DialogProlog DialogReturn DialogSymbols Diamond DiamondMatrix DiceDissimilarity DictionaryLookup DifferenceDelta DifferenceOrder DifferenceRoot DifferenceRootReduce Differences DifferentialD DifferentialRoot DifferentialRootReduce DifferentiatorFilter DigitBlock DigitBlockMinimum DigitCharacter DigitCount DigitQ DihedralGroup Dilation Dimensions DiracComb DiracDelta DirectedEdge DirectedEdges DirectedGraph DirectedGraphQ DirectedInfinity Direction Directive Directory DirectoryName DirectoryQ DirectoryStack DirichletCharacter DirichletConvolve DirichletDistribution DirichletL DirichletTransform DirichletWindow DisableConsolePrintPacket DiscreteChirpZTransform DiscreteConvolve DiscreteDelta DiscreteHadamardTransform DiscreteIndicator DiscreteLQEstimatorGains DiscreteLQRegulatorGains DiscreteLyapunovSolve DiscreteMarkovProcess DiscretePlot DiscretePlot3D DiscreteRatio DiscreteRiccatiSolve DiscreteShift DiscreteTimeModelQ DiscreteUniformDistribution DiscreteVariables DiscreteWaveletData DiscreteWaveletPacketTransform DiscreteWaveletTransform Discriminant Disjunction Disk DiskBox DiskMatrix Dispatch DispersionEstimatorFunction Display DisplayAllSteps DisplayEndPacket DisplayFlushImagePacket DisplayForm DisplayFunction DisplayPacket DisplayRules DisplaySetSizePacket DisplayString DisplayTemporary DisplayWith DisplayWithRef DisplayWithVariable DistanceFunction DistanceTransform Distribute Distributed DistributedContexts DistributeDefinitions DistributionChart DistributionDomain DistributionFitTest DistributionParameterAssumptions DistributionParameterQ Dithering Div Divergence Divide DivideBy Dividers Divisible Divisors DivisorSigma DivisorSum DMSList DMSString Do DockedCells DocumentNotebook DominantColors DOSTextFormat Dot DotDashed DotEqual Dotted DoubleBracketingBar DoubleContourIntegral DoubleDownArrow DoubleLeftArrow DoubleLeftRightArrow DoubleLeftTee DoubleLongLeftArrow DoubleLongLeftRightArrow DoubleLongRightArrow DoubleRightArrow DoubleRightTee DoubleUpArrow DoubleUpDownArrow DoubleVerticalBar DoublyInfinite Down DownArrow DownArrowBar DownArrowUpArrow DownLeftRightVector DownLeftTeeVector DownLeftVector DownLeftVectorBar DownRightTeeVector DownRightVector DownRightVectorBar Downsample DownTee DownTeeArrow DownValues DragAndDrop DrawEdges DrawFrontFaces DrawHighlighted Drop DSolve Dt DualLinearProgramming DualSystemsModel DumpGet DumpSave DuplicateFreeQ Dynamic DynamicBox DynamicBoxOptions DynamicEvaluationTimeout DynamicLocation DynamicModule DynamicModuleBox DynamicModuleBoxOptions DynamicModuleParent DynamicModuleValues DynamicName DynamicNamespace DynamicReference DynamicSetting DynamicUpdating DynamicWrapper DynamicWrapperBox DynamicWrapperBoxOptions E EccentricityCentrality EdgeAdd EdgeBetweennessCentrality EdgeCapacity EdgeCapForm EdgeColor EdgeConnectivity EdgeCost EdgeCount EdgeCoverQ EdgeDashing EdgeDelete EdgeDetect EdgeForm EdgeIndex EdgeJoinForm EdgeLabeling EdgeLabels EdgeLabelStyle EdgeList EdgeOpacity EdgeQ EdgeRenderingFunction EdgeRules EdgeShapeFunction EdgeStyle EdgeThickness EdgeWeight Editable EditButtonSettings EditCellTagsSettings EditDistance EffectiveInterest Eigensystem Eigenvalues EigenvectorCentrality Eigenvectors Element ElementData Eliminate EliminationOrder EllipticE EllipticExp EllipticExpPrime EllipticF EllipticFilterModel EllipticK EllipticLog EllipticNomeQ EllipticPi EllipticReducedHalfPeriods EllipticTheta EllipticThetaPrime EmitSound EmphasizeSyntaxErrors EmpiricalDistribution Empty EmptyGraphQ EnableConsolePrintPacket Enabled Encode End EndAdd EndDialogPacket EndFrontEndInteractionPacket EndOfFile EndOfLine EndOfString EndPackage EngineeringForm Enter EnterExpressionPacket EnterTextPacket Entropy EntropyFilter Environment Epilog Equal EqualColumns EqualRows EqualTilde EquatedTo Equilibrium EquirippleFilterKernel Equivalent Erf Erfc Erfi ErlangB ErlangC ErlangDistribution Erosion ErrorBox ErrorBoxOptions ErrorNorm ErrorPacket ErrorsDialogSettings EstimatedDistribution EstimatedProcess EstimatorGains EstimatorRegulator EuclideanDistance EulerE EulerGamma EulerianGraphQ EulerPhi Evaluatable Evaluate Evaluated EvaluatePacket EvaluationCell EvaluationCompletionAction EvaluationElements EvaluationMode EvaluationMonitor EvaluationNotebook EvaluationObject EvaluationOrder Evaluator EvaluatorNames EvenQ EventData EventEvaluator EventHandler EventHandlerTag EventLabels ExactBlackmanWindow ExactNumberQ ExactRootIsolation ExampleData Except ExcludedForms ExcludePods Exclusions ExclusionsStyle Exists Exit ExitDialog Exp Expand ExpandAll ExpandDenominator ExpandFileName ExpandNumerator Expectation ExpectationE ExpectedValue ExpGammaDistribution ExpIntegralE ExpIntegralEi Exponent ExponentFunction ExponentialDistribution ExponentialFamily ExponentialGeneratingFunction ExponentialMovingAverage ExponentialPowerDistribution ExponentPosition ExponentStep Export ExportAutoReplacements ExportPacket ExportString Expression ExpressionCell ExpressionPacket ExpToTrig ExtendedGCD Extension ExtentElementFunction ExtentMarkers ExtentSize ExternalCall ExternalDataCharacterEncoding Extract ExtractArchive ExtremeValueDistribution FaceForm FaceGrids FaceGridsStyle Factor FactorComplete Factorial Factorial2 FactorialMoment FactorialMomentGeneratingFunction FactorialPower FactorInteger FactorList FactorSquareFree FactorSquareFreeList FactorTerms FactorTermsList Fail FailureDistribution False FARIMAProcess FEDisableConsolePrintPacket FeedbackSector FeedbackSectorStyle FeedbackType FEEnableConsolePrintPacket Fibonacci FieldHint FieldHintStyle FieldMasked FieldSize File FileBaseName FileByteCount FileDate FileExistsQ FileExtension FileFormat FileHash FileInformation FileName FileNameDepth FileNameDialogSettings FileNameDrop FileNameJoin FileNames FileNameSetter FileNameSplit FileNameTake FilePrint FileType FilledCurve FilledCurveBox Filling FillingStyle FillingTransform FilterRules FinancialBond FinancialData FinancialDerivative FinancialIndicator Find FindArgMax FindArgMin FindClique FindClusters FindCurvePath FindDistributionParameters FindDivisions FindEdgeCover FindEdgeCut FindEulerianCycle FindFaces FindFile FindFit FindGeneratingFunction FindGeoLocation FindGeometricTransform FindGraphCommunities FindGraphIsomorphism FindGraphPartition FindHamiltonianCycle FindIndependentEdgeSet FindIndependentVertexSet FindInstance FindIntegerNullVector FindKClan FindKClique FindKClub FindKPlex FindLibrary FindLinearRecurrence FindList FindMaximum FindMaximumFlow FindMaxValue FindMinimum FindMinimumCostFlow FindMinimumCut FindMinValue FindPermutation FindPostmanTour FindProcessParameters FindRoot FindSequenceFunction FindSettings FindShortestPath FindShortestTour FindThreshold FindVertexCover FindVertexCut Fine FinishDynamic FiniteAbelianGroupCount FiniteGroupCount FiniteGroupData First FirstPassageTimeDistribution FischerGroupFi22 FischerGroupFi23 FischerGroupFi24Prime FisherHypergeometricDistribution FisherRatioTest FisherZDistribution Fit FitAll FittedModel FixedPoint FixedPointList FlashSelection Flat Flatten FlattenAt FlatTopWindow FlipView Floor FlushPrintOutputPacket Fold FoldList Font FontColor FontFamily FontForm FontName FontOpacity FontPostScriptName FontProperties FontReencoding FontSize FontSlant FontSubstitutions FontTracking FontVariations FontWeight For ForAll Format FormatRules FormatType FormatTypeAutoConvert FormatValues FormBox FormBoxOptions FortranForm Forward ForwardBackward Fourier FourierCoefficient FourierCosCoefficient FourierCosSeries FourierCosTransform FourierDCT FourierDCTFilter FourierDCTMatrix FourierDST FourierDSTMatrix FourierMatrix FourierParameters FourierSequenceTransform FourierSeries FourierSinCoefficient FourierSinSeries FourierSinTransform FourierTransform FourierTrigSeries FractionalBrownianMotionProcess FractionalPart FractionBox FractionBoxOptions FractionLine Frame FrameBox FrameBoxOptions Framed FrameInset FrameLabel Frameless FrameMargins FrameStyle FrameTicks FrameTicksStyle FRatioDistribution FrechetDistribution FreeQ FrequencySamplingFilterKernel FresnelC FresnelS Friday FrobeniusNumber FrobeniusSolve FromCharacterCode FromCoefficientRules FromContinuedFraction FromDate FromDigits FromDMS Front FrontEndDynamicExpression FrontEndEventActions FrontEndExecute FrontEndObject FrontEndResource FrontEndResourceString FrontEndStackSize FrontEndToken FrontEndTokenExecute FrontEndValueCache FrontEndVersion FrontFaceColor FrontFaceOpacity Full FullAxes FullDefinition FullForm FullGraphics FullOptions FullSimplify Function FunctionExpand FunctionInterpolation FunctionSpace FussellVeselyImportance GaborFilter GaborMatrix GaborWavelet GainMargins GainPhaseMargins Gamma GammaDistribution GammaRegularized GapPenalty Gather GatherBy GaugeFaceElementFunction GaugeFaceStyle GaugeFrameElementFunction GaugeFrameSize GaugeFrameStyle GaugeLabels GaugeMarkers GaugeStyle GaussianFilter GaussianIntegers GaussianMatrix GaussianWindow GCD GegenbauerC General GeneralizedLinearModelFit GenerateConditions GeneratedCell GeneratedParameters GeneratingFunction Generic GenericCylindricalDecomposition GenomeData GenomeLookup GeodesicClosing GeodesicDilation GeodesicErosion GeodesicOpening GeoDestination GeodesyData GeoDirection GeoDistance GeoGridPosition GeometricBrownianMotionProcess GeometricDistribution GeometricMean GeometricMeanFilter GeometricTransformation GeometricTransformation3DBox GeometricTransformation3DBoxOptions GeometricTransformationBox GeometricTransformationBoxOptions GeoPosition GeoPositionENU GeoPositionXYZ GeoProjectionData GestureHandler GestureHandlerTag Get GetBoundingBoxSizePacket GetContext GetEnvironment GetFileName GetFrontEndOptionsDataPacket GetLinebreakInformationPacket GetMenusPacket GetPageBreakInformationPacket Glaisher GlobalClusteringCoefficient GlobalPreferences GlobalSession Glow GoldenRatio GompertzMakehamDistribution GoodmanKruskalGamma GoodmanKruskalGammaTest Goto Grad Gradient GradientFilter GradientOrientationFilter Graph GraphAssortativity GraphCenter GraphComplement GraphData GraphDensity GraphDiameter GraphDifference GraphDisjointUnion GraphDistance GraphDistanceMatrix GraphElementData GraphEmbedding GraphHighlight GraphHighlightStyle GraphHub Graphics Graphics3D Graphics3DBox Graphics3DBoxOptions GraphicsArray GraphicsBaseline GraphicsBox GraphicsBoxOptions GraphicsColor GraphicsColumn GraphicsComplex GraphicsComplex3DBox GraphicsComplex3DBoxOptions GraphicsComplexBox GraphicsComplexBoxOptions GraphicsContents GraphicsData GraphicsGrid GraphicsGridBox GraphicsGroup GraphicsGroup3DBox GraphicsGroup3DBoxOptions GraphicsGroupBox GraphicsGroupBoxOptions GraphicsGrouping GraphicsHighlightColor GraphicsRow GraphicsSpacing GraphicsStyle GraphIntersection GraphLayout GraphLinkEfficiency GraphPeriphery GraphPlot GraphPlot3D GraphPower GraphPropertyDistribution GraphQ GraphRadius GraphReciprocity GraphRoot GraphStyle GraphUnion Gray GrayLevel GreatCircleDistance Greater GreaterEqual GreaterEqualLess GreaterFullEqual GreaterGreater GreaterLess GreaterSlantEqual GreaterTilde Green Grid GridBaseline GridBox GridBoxAlignment GridBoxBackground GridBoxDividers GridBoxFrame GridBoxItemSize GridBoxItemStyle GridBoxOptions GridBoxSpacings GridCreationSettings GridDefaultElement GridElementStyleOptions GridFrame GridFrameMargins GridGraph GridLines GridLinesStyle GroebnerBasis GroupActionBase GroupCentralizer GroupElementFromWord GroupElementPosition GroupElementQ GroupElements GroupElementToWord GroupGenerators GroupMultiplicationTable GroupOrbits GroupOrder GroupPageBreakWithin GroupSetwiseStabilizer GroupStabilizer GroupStabilizerChain Gudermannian GumbelDistribution HaarWavelet HadamardMatrix HalfNormalDistribution HamiltonianGraphQ HammingDistance HammingWindow HankelH1 HankelH2 HankelMatrix HannPoissonWindow HannWindow HaradaNortonGroupHN HararyGraph HarmonicMean HarmonicMeanFilter HarmonicNumber Hash HashTable Haversine HazardFunction Head HeadCompose Heads HeavisideLambda HeavisidePi HeavisideTheta HeldGroupHe HeldPart HelpBrowserLookup HelpBrowserNotebook HelpBrowserSettings HermiteDecomposition HermiteH HermitianMatrixQ HessenbergDecomposition Hessian HexadecimalCharacter Hexahedron HexahedronBox HexahedronBoxOptions HiddenSurface HighlightGraph HighlightImage HighpassFilter HigmanSimsGroupHS HilbertFilter HilbertMatrix Histogram Histogram3D HistogramDistribution HistogramList HistogramTransform HistogramTransformInterpolation HitMissTransform HITSCentrality HodgeDual HoeffdingD HoeffdingDTest Hold HoldAll HoldAllComplete HoldComplete HoldFirst HoldForm HoldPattern HoldRest HolidayCalendar HomeDirectory HomePage Horizontal HorizontalForm HorizontalGauge HorizontalScrollPosition HornerForm HotellingTSquareDistribution HoytDistribution HTMLSave Hue HumpDownHump HumpEqual HurwitzLerchPhi HurwitzZeta HyperbolicDistribution HypercubeGraph HyperexponentialDistribution Hyperfactorial Hypergeometric0F1 Hypergeometric0F1Regularized Hypergeometric1F1 Hypergeometric1F1Regularized Hypergeometric2F1 Hypergeometric2F1Regularized HypergeometricDistribution HypergeometricPFQ HypergeometricPFQRegularized HypergeometricU Hyperlink HyperlinkCreationSettings Hyphenation HyphenationOptions HypoexponentialDistribution HypothesisTestData I Identity IdentityMatrix If IgnoreCase Im Image Image3D Image3DSlices ImageAccumulate ImageAdd ImageAdjust ImageAlign ImageApply ImageAspectRatio ImageAssemble ImageCache ImageCacheValid ImageCapture ImageChannels ImageClip ImageColorSpace ImageCompose ImageConvolve ImageCooccurrence ImageCorners ImageCorrelate ImageCorrespondingPoints ImageCrop ImageData ImageDataPacket ImageDeconvolve ImageDemosaic ImageDifference ImageDimensions ImageDistance ImageEffect ImageFeatureTrack ImageFileApply ImageFileFilter ImageFileScan ImageFilter ImageForestingComponents ImageForwardTransformation ImageHistogram ImageKeypoints ImageLevels ImageLines ImageMargins ImageMarkers ImageMeasurements ImageMultiply ImageOffset ImagePad ImagePadding ImagePartition ImagePeriodogram ImagePerspectiveTransformation ImageQ ImageRangeCache ImageReflect ImageRegion ImageResize ImageResolution ImageRotate ImageRotated ImageScaled ImageScan ImageSize ImageSizeAction ImageSizeCache ImageSizeMultipliers ImageSizeRaw ImageSubtract ImageTake ImageTransformation ImageTrim ImageType ImageValue ImageValuePositions Implies Import ImportAutoReplacements ImportString ImprovementImportance In IncidenceGraph IncidenceList IncidenceMatrix IncludeConstantBasis IncludeFileExtension IncludePods IncludeSingularTerm Increment Indent IndentingNewlineSpacings IndentMaxFraction IndependenceTest IndependentEdgeSetQ IndependentUnit IndependentVertexSetQ Indeterminate IndexCreationOptions Indexed IndexGraph IndexTag Inequality InexactNumberQ InexactNumbers Infinity Infix Information Inherited InheritScope Initialization InitializationCell InitializationCellEvaluation InitializationCellWarning InlineCounterAssignments InlineCounterIncrements InlineRules Inner Inpaint Input InputAliases InputAssumptions InputAutoReplacements InputField InputFieldBox InputFieldBoxOptions InputForm InputGrouping InputNamePacket InputNotebook InputPacket InputSettings InputStream InputString InputStringPacket InputToBoxFormPacket Insert InsertionPointObject InsertResults Inset Inset3DBox Inset3DBoxOptions InsetBox InsetBoxOptions Install InstallService InString Integer IntegerDigits IntegerExponent IntegerLength IntegerPart IntegerPartitions IntegerQ Integers IntegerString Integral Integrate Interactive InteractiveTradingChart Interlaced Interleaving InternallyBalancedDecomposition InterpolatingFunction InterpolatingPolynomial Interpolation InterpolationOrder InterpolationPoints InterpolationPrecision Interpretation InterpretationBox InterpretationBoxOptions InterpretationFunction InterpretTemplate InterquartileRange Interrupt InterruptSettings Intersection Interval IntervalIntersection IntervalMemberQ IntervalUnion Inverse InverseBetaRegularized InverseCDF InverseChiSquareDistribution InverseContinuousWaveletTransform InverseDistanceTransform InverseEllipticNomeQ InverseErf InverseErfc InverseFourier InverseFourierCosTransform InverseFourierSequenceTransform InverseFourierSinTransform InverseFourierTransform InverseFunction InverseFunctions InverseGammaDistribution InverseGammaRegularized InverseGaussianDistribution InverseGudermannian InverseHaversine InverseJacobiCD InverseJacobiCN InverseJacobiCS InverseJacobiDC InverseJacobiDN InverseJacobiDS InverseJacobiNC InverseJacobiND InverseJacobiNS InverseJacobiSC InverseJacobiSD InverseJacobiSN InverseLaplaceTransform InversePermutation InverseRadon InverseSeries InverseSurvivalFunction InverseWaveletTransform InverseWeierstrassP InverseZTransform Invisible InvisibleApplication InvisibleTimes IrreduciblePolynomialQ IsolatingInterval IsomorphicGraphQ IsotopeData Italic Item ItemBox ItemBoxOptions ItemSize ItemStyle ItoProcess JaccardDissimilarity JacobiAmplitude Jacobian JacobiCD JacobiCN JacobiCS JacobiDC JacobiDN JacobiDS JacobiNC JacobiND JacobiNS JacobiP JacobiSC JacobiSD JacobiSN JacobiSymbol JacobiZeta JankoGroupJ1 JankoGroupJ2 JankoGroupJ3 JankoGroupJ4 JarqueBeraALMTest JohnsonDistribution Join Joined JoinedCurve JoinedCurveBox JoinForm JordanDecomposition JordanModelDecomposition K KagiChart KaiserBesselWindow KaiserWindow KalmanEstimator KalmanFilter KarhunenLoeveDecomposition KaryTree KatzCentrality KCoreComponents KDistribution KelvinBei KelvinBer KelvinKei KelvinKer KendallTau KendallTauTest KernelExecute KernelMixtureDistribution KernelObject Kernels Ket Khinchin KirchhoffGraph KirchhoffMatrix KleinInvariantJ KnightTourGraph KnotData KnownUnitQ KolmogorovSmirnovTest KroneckerDelta KroneckerModelDecomposition KroneckerProduct KroneckerSymbol KuiperTest KumaraswamyDistribution Kurtosis KuwaharaFilter Label Labeled LabeledSlider LabelingFunction LabelStyle LaguerreL LambdaComponents LambertW LanczosWindow LandauDistribution Language LanguageCategory LaplaceDistribution LaplaceTransform Laplacian LaplacianFilter LaplacianGaussianFilter Large Larger Last Latitude LatitudeLongitude LatticeData LatticeReduce Launch LaunchKernels LayeredGraphPlot LayerSizeFunction LayoutInformation LCM LeafCount LeapYearQ LeastSquares LeastSquaresFilterKernel Left LeftArrow LeftArrowBar LeftArrowRightArrow LeftDownTeeVector LeftDownVector LeftDownVectorBar LeftRightArrow LeftRightVector LeftTee LeftTeeArrow LeftTeeVector LeftTriangle LeftTriangleBar LeftTriangleEqual LeftUpDownVector LeftUpTeeVector LeftUpVector LeftUpVectorBar LeftVector LeftVectorBar LegendAppearance Legended LegendFunction LegendLabel LegendLayout LegendMargins LegendMarkers LegendMarkerSize LegendreP LegendreQ LegendreType Length LengthWhile LerchPhi Less LessEqual LessEqualGreater LessFullEqual LessGreater LessLess LessSlantEqual LessTilde LetterCharacter LetterQ Level LeveneTest LeviCivitaTensor LevyDistribution Lexicographic LibraryFunction LibraryFunctionError LibraryFunctionInformation LibraryFunctionLoad LibraryFunctionUnload LibraryLoad LibraryUnload LicenseID LiftingFilterData LiftingWaveletTransform LightBlue LightBrown LightCyan Lighter LightGray LightGreen Lighting LightingAngle LightMagenta LightOrange LightPink LightPurple LightRed LightSources LightYellow Likelihood Limit LimitsPositioning LimitsPositioningTokens LindleyDistribution Line Line3DBox LinearFilter LinearFractionalTransform LinearModelFit LinearOffsetFunction LinearProgramming LinearRecurrence LinearSolve LinearSolveFunction LineBox LineBreak LinebreakAdjustments LineBreakChart LineBreakWithin LineColor LineForm LineGraph LineIndent LineIndentMaxFraction LineIntegralConvolutionPlot LineIntegralConvolutionScale LineLegend LineOpacity LineSpacing LineWrapParts LinkActivate LinkClose LinkConnect LinkConnectedQ LinkCreate LinkError LinkFlush LinkFunction LinkHost LinkInterrupt LinkLaunch LinkMode LinkObject LinkOpen LinkOptions LinkPatterns LinkProtocol LinkRead LinkReadHeld LinkReadyQ Links LinkWrite LinkWriteHeld LiouvilleLambda List Listable ListAnimate ListContourPlot ListContourPlot3D ListConvolve ListCorrelate ListCurvePathPlot ListDeconvolve ListDensityPlot Listen ListFourierSequenceTransform ListInterpolation ListLineIntegralConvolutionPlot ListLinePlot ListLogLinearPlot ListLogLogPlot ListLogPlot ListPicker ListPickerBox ListPickerBoxBackground ListPickerBoxOptions ListPlay ListPlot ListPlot3D ListPointPlot3D ListPolarPlot ListQ ListStreamDensityPlot ListStreamPlot ListSurfacePlot3D ListVectorDensityPlot ListVectorPlot ListVectorPlot3D ListZTransform Literal LiteralSearch LocalClusteringCoefficient LocalizeVariables LocationEquivalenceTest LocationTest Locator LocatorAutoCreate LocatorBox LocatorBoxOptions LocatorCentering LocatorPane LocatorPaneBox LocatorPaneBoxOptions LocatorRegion Locked Log Log10 Log2 LogBarnesG LogGamma LogGammaDistribution LogicalExpand LogIntegral LogisticDistribution LogitModelFit LogLikelihood LogLinearPlot LogLogisticDistribution LogLogPlot LogMultinormalDistribution LogNormalDistribution LogPlot LogRankTest LogSeriesDistribution LongEqual Longest LongestAscendingSequence LongestCommonSequence LongestCommonSequencePositions LongestCommonSubsequence LongestCommonSubsequencePositions LongestMatch LongForm Longitude LongLeftArrow LongLeftRightArrow LongRightArrow Loopback LoopFreeGraphQ LowerCaseQ LowerLeftArrow LowerRightArrow LowerTriangularize LowpassFilter LQEstimatorGains LQGRegulator LQOutputRegulatorGains LQRegulatorGains LUBackSubstitution LucasL LuccioSamiComponents LUDecomposition LyapunovSolve LyonsGroupLy MachineID MachineName MachineNumberQ MachinePrecision MacintoshSystemPageSetup Magenta Magnification Magnify MainSolve MaintainDynamicCaches Majority MakeBoxes MakeExpression MakeRules MangoldtLambda ManhattanDistance Manipulate Manipulator MannWhitneyTest MantissaExponent Manual Map MapAll MapAt MapIndexed MAProcess MapThread MarcumQ MardiaCombinedTest MardiaKurtosisTest MardiaSkewnessTest MarginalDistribution MarkovProcessProperties Masking MatchingDissimilarity MatchLocalNameQ MatchLocalNames MatchQ Material MathematicaNotation MathieuC MathieuCharacteristicA MathieuCharacteristicB MathieuCharacteristicExponent MathieuCPrime MathieuGroupM11 MathieuGroupM12 MathieuGroupM22 MathieuGroupM23 MathieuGroupM24 MathieuS MathieuSPrime MathMLForm MathMLText Matrices MatrixExp MatrixForm MatrixFunction MatrixLog MatrixPlot MatrixPower MatrixQ MatrixRank Max MaxBend MaxDetect MaxExtraBandwidths MaxExtraConditions MaxFeatures MaxFilter Maximize MaxIterations MaxMemoryUsed MaxMixtureKernels MaxPlotPoints MaxPoints MaxRecursion MaxStableDistribution MaxStepFraction MaxSteps MaxStepSize MaxValue MaxwellDistribution McLaughlinGroupMcL Mean MeanClusteringCoefficient MeanDegreeConnectivity MeanDeviation MeanFilter MeanGraphDistance MeanNeighborDegree MeanShift MeanShiftFilter Median MedianDeviation MedianFilter Medium MeijerG MeixnerDistribution MemberQ MemoryConstrained MemoryInUse Menu MenuAppearance MenuCommandKey MenuEvaluator MenuItem MenuPacket MenuSortingValue MenuStyle MenuView MergeDifferences Mesh MeshFunctions MeshRange MeshShading MeshStyle Message MessageDialog MessageList MessageName MessageOptions MessagePacket Messages MessagesNotebook MetaCharacters MetaInformation Method MethodOptions MexicanHatWavelet MeyerWavelet Min MinDetect MinFilter MinimalPolynomial MinimalStateSpaceModel Minimize Minors MinRecursion MinSize MinStableDistribution Minus MinusPlus MinValue Missing MissingDataMethod MittagLefflerE MixedRadix MixedRadixQuantity MixtureDistribution Mod Modal Mode Modular ModularLambda Module Modulus MoebiusMu Moment Momentary MomentConvert MomentEvaluate MomentGeneratingFunction Monday Monitor MonomialList MonomialOrder MonsterGroupM MorletWavelet MorphologicalBinarize MorphologicalBranchPoints MorphologicalComponents MorphologicalEulerNumber MorphologicalGraph MorphologicalPerimeter MorphologicalTransform Most MouseAnnotation MouseAppearance MouseAppearanceTag MouseButtons Mouseover MousePointerNote MousePosition MovingAverage MovingMedian MoyalDistribution MultiedgeStyle MultilaunchWarning MultiLetterItalics MultiLetterStyle MultilineFunction Multinomial MultinomialDistribution MultinormalDistribution MultiplicativeOrder Multiplicity Multiselection MultivariateHypergeometricDistribution MultivariatePoissonDistribution MultivariateTDistribution N NakagamiDistribution NameQ Names NamespaceBox Nand NArgMax NArgMin NBernoulliB NCache NDSolve NDSolveValue Nearest NearestFunction NeedCurrentFrontEndPackagePacket NeedCurrentFrontEndSymbolsPacket NeedlemanWunschSimilarity Needs Negative NegativeBinomialDistribution NegativeMultinomialDistribution NeighborhoodGraph Nest NestedGreaterGreater NestedLessLess NestedScriptRules NestList NestWhile NestWhileList NevilleThetaC NevilleThetaD NevilleThetaN NevilleThetaS NewPrimitiveStyle NExpectation Next NextPrime NHoldAll NHoldFirst NHoldRest NicholsGridLines NicholsPlot NIntegrate NMaximize NMaxValue NMinimize NMinValue NominalVariables NonAssociative NoncentralBetaDistribution NoncentralChiSquareDistribution NoncentralFRatioDistribution NoncentralStudentTDistribution NonCommutativeMultiply NonConstants None NonlinearModelFit NonlocalMeansFilter NonNegative NonPositive Nor NorlundB Norm Normal NormalDistribution NormalGrouping Normalize NormalizedSquaredEuclideanDistance NormalsFunction NormFunction Not NotCongruent NotCupCap NotDoubleVerticalBar Notebook NotebookApply NotebookAutoSave NotebookClose NotebookConvertSettings NotebookCreate NotebookCreateReturnObject NotebookDefault NotebookDelete NotebookDirectory NotebookDynamicExpression NotebookEvaluate NotebookEventActions NotebookFileName NotebookFind NotebookFindReturnObject NotebookGet NotebookGetLayoutInformationPacket NotebookGetMisspellingsPacket NotebookInformation NotebookInterfaceObject NotebookLocate NotebookObject NotebookOpen NotebookOpenReturnObject NotebookPath NotebookPrint NotebookPut NotebookPutReturnObject NotebookRead NotebookResetGeneratedCells Notebooks NotebookSave NotebookSaveAs NotebookSelection NotebookSetupLayoutInformationPacket NotebooksMenu NotebookWrite NotElement NotEqualTilde NotExists NotGreater NotGreaterEqual NotGreaterFullEqual NotGreaterGreater NotGreaterLess NotGreaterSlantEqual NotGreaterTilde NotHumpDownHump NotHumpEqual NotLeftTriangle NotLeftTriangleBar NotLeftTriangleEqual NotLess NotLessEqual NotLessFullEqual NotLessGreater NotLessLess NotLessSlantEqual NotLessTilde NotNestedGreaterGreater NotNestedLessLess NotPrecedes NotPrecedesEqual NotPrecedesSlantEqual NotPrecedesTilde NotReverseElement NotRightTriangle NotRightTriangleBar NotRightTriangleEqual NotSquareSubset NotSquareSubsetEqual NotSquareSuperset NotSquareSupersetEqual NotSubset NotSubsetEqual NotSucceeds NotSucceedsEqual NotSucceedsSlantEqual NotSucceedsTilde NotSuperset NotSupersetEqual NotTilde NotTildeEqual NotTildeFullEqual NotTildeTilde NotVerticalBar NProbability NProduct NProductFactors NRoots NSolve NSum NSumTerms Null NullRecords NullSpace NullWords Number NumberFieldClassNumber NumberFieldDiscriminant NumberFieldFundamentalUnits NumberFieldIntegralBasis NumberFieldNormRepresentatives NumberFieldRegulator NumberFieldRootsOfUnity NumberFieldSignature NumberForm NumberFormat NumberMarks NumberMultiplier NumberPadding NumberPoint NumberQ NumberSeparator NumberSigns NumberString Numerator NumericFunction NumericQ NuttallWindow NValues NyquistGridLines NyquistPlot O ObservabilityGramian ObservabilityMatrix ObservableDecomposition ObservableModelQ OddQ Off Offset OLEData On ONanGroupON OneIdentity Opacity Open OpenAppend Opener OpenerBox OpenerBoxOptions OpenerView OpenFunctionInspectorPacket Opening OpenRead OpenSpecialOptions OpenTemporary OpenWrite Operate OperatingSystem OptimumFlowData Optional OptionInspectorSettings OptionQ Options OptionsPacket OptionsPattern OptionValue OptionValueBox OptionValueBoxOptions Or Orange Order OrderDistribution OrderedQ Ordering Orderless OrnsteinUhlenbeckProcess Orthogonalize Out Outer OutputAutoOverwrite OutputControllabilityMatrix OutputControllableModelQ OutputForm OutputFormData OutputGrouping OutputMathEditExpression OutputNamePacket OutputResponse OutputSizeLimit OutputStream Over OverBar OverDot Overflow OverHat Overlaps Overlay OverlayBox OverlayBoxOptions Overscript OverscriptBox OverscriptBoxOptions OverTilde OverVector OwenT OwnValues PackingMethod PaddedForm Padding PadeApproximant PadLeft PadRight PageBreakAbove PageBreakBelow PageBreakWithin PageFooterLines PageFooters PageHeaderLines PageHeaders PageHeight PageRankCentrality PageWidth PairedBarChart PairedHistogram PairedSmoothHistogram PairedTTest PairedZTest PaletteNotebook PalettePath Pane PaneBox PaneBoxOptions Panel PanelBox PanelBoxOptions Paneled PaneSelector PaneSelectorBox PaneSelectorBoxOptions PaperWidth ParabolicCylinderD ParagraphIndent ParagraphSpacing ParallelArray ParallelCombine ParallelDo ParallelEvaluate Parallelization Parallelize ParallelMap ParallelNeeds ParallelProduct ParallelSubmit ParallelSum ParallelTable ParallelTry Parameter ParameterEstimator ParameterMixtureDistribution ParameterVariables ParametricFunction ParametricNDSolve ParametricNDSolveValue ParametricPlot ParametricPlot3D ParentConnect ParentDirectory ParentForm Parenthesize ParentList ParetoDistribution Part PartialCorrelationFunction PartialD ParticleData Partition PartitionsP PartitionsQ ParzenWindow PascalDistribution PassEventsDown PassEventsUp Paste PasteBoxFormInlineCells PasteButton Path PathGraph PathGraphQ Pattern PatternSequence PatternTest PauliMatrix PaulWavelet Pause PausedTime PDF PearsonChiSquareTest PearsonCorrelationTest PearsonDistribution PerformanceGoal PeriodicInterpolation Periodogram PeriodogramArray PermutationCycles PermutationCyclesQ PermutationGroup PermutationLength PermutationList PermutationListQ PermutationMax PermutationMin PermutationOrder PermutationPower PermutationProduct PermutationReplace Permutations PermutationSupport Permute PeronaMalikFilter Perpendicular PERTDistribution PetersenGraph PhaseMargins Pi Pick PIDData PIDDerivativeFilter PIDFeedforward PIDTune Piecewise PiecewiseExpand PieChart PieChart3D PillaiTrace PillaiTraceTest Pink Pivoting PixelConstrained PixelValue PixelValuePositions Placed Placeholder PlaceholderReplace Plain PlanarGraphQ Play PlayRange Plot Plot3D Plot3Matrix PlotDivision PlotJoined PlotLabel PlotLayout PlotLegends PlotMarkers PlotPoints PlotRange PlotRangeClipping PlotRangePadding PlotRegion PlotStyle Plus PlusMinus Pochhammer PodStates PodWidth Point Point3DBox PointBox PointFigureChart PointForm PointLegend PointSize PoissonConsulDistribution PoissonDistribution PoissonProcess PoissonWindow PolarAxes PolarAxesOrigin PolarGridLines PolarPlot PolarTicks PoleZeroMarkers PolyaAeppliDistribution PolyGamma Polygon Polygon3DBox Polygon3DBoxOptions PolygonBox PolygonBoxOptions PolygonHoleScale PolygonIntersections PolygonScale PolyhedronData PolyLog PolynomialExtendedGCD PolynomialForm PolynomialGCD PolynomialLCM PolynomialMod PolynomialQ PolynomialQuotient PolynomialQuotientRemainder PolynomialReduce PolynomialRemainder Polynomials PopupMenu PopupMenuBox PopupMenuBoxOptions PopupView PopupWindow Position Positive PositiveDefiniteMatrixQ PossibleZeroQ Postfix PostScript Power PowerDistribution PowerExpand PowerMod PowerModList PowerSpectralDensity PowersRepresentations PowerSymmetricPolynomial Precedence PrecedenceForm Precedes PrecedesEqual PrecedesSlantEqual PrecedesTilde Precision PrecisionGoal PreDecrement PredictionRoot PreemptProtect PreferencesPath Prefix PreIncrement Prepend PrependTo PreserveImageOptions Previous PriceGraphDistribution PrimaryPlaceholder Prime PrimeNu PrimeOmega PrimePi PrimePowerQ PrimeQ Primes PrimeZetaP PrimitiveRoot PrincipalComponents PrincipalValue Print PrintAction PrintForm PrintingCopies PrintingOptions PrintingPageRange PrintingStartingPageNumber PrintingStyleEnvironment PrintPrecision PrintTemporary Prism PrismBox PrismBoxOptions PrivateCellOptions PrivateEvaluationOptions PrivateFontOptions PrivateFrontEndOptions PrivateNotebookOptions PrivatePaths Probability ProbabilityDistribution ProbabilityPlot ProbabilityPr ProbabilityScalePlot ProbitModelFit ProcessEstimator ProcessParameterAssumptions ProcessParameterQ ProcessStateDomain ProcessTimeDomain Product ProductDistribution ProductLog ProgressIndicator ProgressIndicatorBox ProgressIndicatorBoxOptions Projection Prolog PromptForm Properties Property PropertyList PropertyValue Proportion Proportional Protect Protected ProteinData Pruning PseudoInverse Purple Put PutAppend Pyramid PyramidBox PyramidBoxOptions QBinomial QFactorial QGamma QHypergeometricPFQ QPochhammer QPolyGamma QRDecomposition QuadraticIrrationalQ Quantile QuantilePlot Quantity QuantityForm QuantityMagnitude QuantityQ QuantityUnit Quartics QuartileDeviation Quartiles QuartileSkewness QueueingNetworkProcess QueueingProcess QueueProperties Quiet Quit Quotient QuotientRemainder RadialityCentrality RadicalBox RadicalBoxOptions RadioButton RadioButtonBar RadioButtonBox RadioButtonBoxOptions Radon RamanujanTau RamanujanTauL RamanujanTauTheta RamanujanTauZ Random RandomChoice RandomComplex RandomFunction RandomGraph RandomImage RandomInteger RandomPermutation RandomPrime RandomReal RandomSample RandomSeed RandomVariate RandomWalkProcess Range RangeFilter RangeSpecification RankedMax RankedMin Raster Raster3D Raster3DBox Raster3DBoxOptions RasterArray RasterBox RasterBoxOptions Rasterize RasterSize Rational RationalFunctions Rationalize Rationals Ratios Raw RawArray RawBoxes RawData RawMedium RayleighDistribution Re Read ReadList ReadProtected Real RealBlockDiagonalForm RealDigits RealExponent Reals Reap Record RecordLists RecordSeparators Rectangle RectangleBox RectangleBoxOptions RectangleChart RectangleChart3D RecurrenceFilter RecurrenceTable RecurringDigitsForm Red Reduce RefBox ReferenceLineStyle ReferenceMarkers ReferenceMarkerStyle Refine ReflectionMatrix ReflectionTransform Refresh RefreshRate RegionBinarize RegionFunction RegionPlot RegionPlot3D RegularExpression Regularization Reinstall Release ReleaseHold ReliabilityDistribution ReliefImage ReliefPlot Remove RemoveAlphaChannel RemoveAsynchronousTask Removed RemoveInputStreamMethod RemoveOutputStreamMethod RemoveProperty RemoveScheduledTask RenameDirectory RenameFile RenderAll RenderingOptions RenewalProcess RenkoChart Repeated RepeatedNull RepeatedString Replace ReplaceAll ReplaceHeldPart ReplaceImageValue ReplaceList ReplacePart ReplacePixelValue ReplaceRepeated Resampling Rescale RescalingTransform ResetDirectory ResetMenusPacket ResetScheduledTask Residue Resolve Rest Resultant ResumePacket Return ReturnExpressionPacket ReturnInputFormPacket ReturnPacket ReturnTextPacket Reverse ReverseBiorthogonalSplineWavelet ReverseElement ReverseEquilibrium ReverseGraph ReverseUpEquilibrium RevolutionAxis RevolutionPlot3D RGBColor RiccatiSolve RiceDistribution RidgeFilter RiemannR RiemannSiegelTheta RiemannSiegelZ Riffle Right RightArrow RightArrowBar RightArrowLeftArrow RightCosetRepresentative RightDownTeeVector RightDownVector RightDownVectorBar RightTee RightTeeArrow RightTeeVector RightTriangle RightTriangleBar RightTriangleEqual RightUpDownVector RightUpTeeVector RightUpVector RightUpVectorBar RightVector RightVectorBar RiskAchievementImportance RiskReductionImportance RogersTanimotoDissimilarity Root RootApproximant RootIntervals RootLocusPlot RootMeanSquare RootOfUnityQ RootReduce Roots RootSum Rotate RotateLabel RotateLeft RotateRight RotationAction RotationBox RotationBoxOptions RotationMatrix RotationTransform Round RoundImplies RoundingRadius Row RowAlignments RowBackgrounds RowBox RowHeights RowLines RowMinHeight RowReduce RowsEqual RowSpacings RSolve RudvalisGroupRu Rule RuleCondition RuleDelayed RuleForm RulerUnits Run RunScheduledTask RunThrough RuntimeAttributes RuntimeOptions RussellRaoDissimilarity SameQ SameTest SampleDepth SampledSoundFunction SampledSoundList SampleRate SamplingPeriod SARIMAProcess SARMAProcess SatisfiabilityCount SatisfiabilityInstances SatisfiableQ Saturday Save Saveable SaveAutoDelete SaveDefinitions SawtoothWave Scale Scaled ScaleDivisions ScaledMousePosition ScaleOrigin ScalePadding ScaleRanges ScaleRangeStyle ScalingFunctions ScalingMatrix ScalingTransform Scan ScheduledTaskActiveQ ScheduledTaskData ScheduledTaskObject ScheduledTasks SchurDecomposition ScientificForm ScreenRectangle ScreenStyleEnvironment ScriptBaselineShifts ScriptLevel ScriptMinSize ScriptRules ScriptSizeMultipliers Scrollbars ScrollingOptions ScrollPosition Sec Sech SechDistribution SectionGrouping SectorChart SectorChart3D SectorOrigin SectorSpacing SeedRandom Select Selectable SelectComponents SelectedCells SelectedNotebook Selection SelectionAnimate SelectionCell SelectionCellCreateCell SelectionCellDefaultStyle SelectionCellParentStyle SelectionCreateCell SelectionDebuggerTag SelectionDuplicateCell SelectionEvaluate SelectionEvaluateCreateCell SelectionMove SelectionPlaceholder SelectionSetStyle SelectWithContents SelfLoops SelfLoopStyle SemialgebraicComponentInstances SendMail Sequence SequenceAlignment SequenceForm SequenceHold SequenceLimit Series SeriesCoefficient SeriesData SessionTime Set SetAccuracy SetAlphaChannel SetAttributes Setbacks SetBoxFormNamesPacket SetDelayed SetDirectory SetEnvironment SetEvaluationNotebook SetFileDate SetFileLoadingContext SetNotebookStatusLine SetOptions SetOptionsPacket SetPrecision SetProperty SetSelectedNotebook SetSharedFunction SetSharedVariable SetSpeechParametersPacket SetStreamPosition SetSystemOptions Setter SetterBar SetterBox SetterBoxOptions Setting SetValue Shading Shallow ShannonWavelet ShapiroWilkTest Share Sharpen ShearingMatrix ShearingTransform ShenCastanMatrix Short ShortDownArrow Shortest ShortestMatch ShortestPathFunction ShortLeftArrow ShortRightArrow ShortUpArrow Show ShowAutoStyles ShowCellBracket ShowCellLabel ShowCellTags ShowClosedCellArea ShowContents ShowControls ShowCursorTracker ShowGroupOpenCloseIcon ShowGroupOpener ShowInvisibleCharacters ShowPageBreaks ShowPredictiveInterface ShowSelection ShowShortBoxForm ShowSpecialCharacters ShowStringCharacters ShowSyntaxStyles ShrinkingDelay ShrinkWrapBoundingBox SiegelTheta SiegelTukeyTest Sign Signature SignedRankTest SignificanceLevel SignPadding SignTest SimilarityRules SimpleGraph SimpleGraphQ Simplify Sin Sinc SinghMaddalaDistribution SingleEvaluation SingleLetterItalics SingleLetterStyle SingularValueDecomposition SingularValueList SingularValuePlot SingularValues Sinh SinhIntegral SinIntegral SixJSymbol Skeleton SkeletonTransform SkellamDistribution Skewness SkewNormalDistribution Skip SliceDistribution Slider Slider2D Slider2DBox Slider2DBoxOptions SliderBox SliderBoxOptions SlideView Slot SlotSequence Small SmallCircle Smaller SmithDelayCompensator SmithWatermanSimilarity SmoothDensityHistogram SmoothHistogram SmoothHistogram3D SmoothKernelDistribution SocialMediaData Socket SokalSneathDissimilarity Solve SolveAlways SolveDelayed Sort SortBy Sound SoundAndGraphics SoundNote SoundVolume Sow Space SpaceForm Spacer Spacings Span SpanAdjustments SpanCharacterRounding SpanFromAbove SpanFromBoth SpanFromLeft SpanLineThickness SpanMaxSize SpanMinSize SpanningCharacters SpanSymmetric SparseArray SpatialGraphDistribution Speak SpeakTextPacket SpearmanRankTest SpearmanRho Spectrogram SpectrogramArray Specularity SpellingCorrection SpellingDictionaries SpellingDictionariesPath SpellingOptions SpellingSuggestionsPacket Sphere SphereBox SphericalBesselJ SphericalBesselY SphericalHankelH1 SphericalHankelH2 SphericalHarmonicY SphericalPlot3D SphericalRegion SpheroidalEigenvalue SpheroidalJoiningFactor SpheroidalPS SpheroidalPSPrime SpheroidalQS SpheroidalQSPrime SpheroidalRadialFactor SpheroidalS1 SpheroidalS1Prime SpheroidalS2 SpheroidalS2Prime Splice SplicedDistribution SplineClosed SplineDegree SplineKnots SplineWeights Split SplitBy SpokenString Sqrt SqrtBox SqrtBoxOptions Square SquaredEuclideanDistance SquareFreeQ SquareIntersection SquaresR SquareSubset SquareSubsetEqual SquareSuperset SquareSupersetEqual SquareUnion SquareWave StabilityMargins StabilityMarginsStyle StableDistribution Stack StackBegin StackComplete StackInhibit StandardDeviation StandardDeviationFilter StandardForm Standardize StandbyDistribution Star StarGraph StartAsynchronousTask StartingStepSize StartOfLine StartOfString StartScheduledTask StartupSound StateDimensions StateFeedbackGains StateOutputEstimator StateResponse StateSpaceModel StateSpaceRealization StateSpaceTransform StationaryDistribution StationaryWaveletPacketTransform StationaryWaveletTransform StatusArea StatusCentrality StepMonitor StieltjesGamma StirlingS1 StirlingS2 StopAsynchronousTask StopScheduledTask StrataVariables StratonovichProcess StreamColorFunction StreamColorFunctionScaling StreamDensityPlot StreamPlot StreamPoints StreamPosition Streams StreamScale StreamStyle String StringBreak StringByteCount StringCases StringCount StringDrop StringExpression StringForm StringFormat StringFreeQ StringInsert StringJoin StringLength StringMatchQ StringPosition StringQ StringReplace StringReplaceList StringReplacePart StringReverse StringRotateLeft StringRotateRight StringSkeleton StringSplit StringTake StringToStream StringTrim StripBoxes StripOnInput StripWrapperBoxes StrokeForm StructuralImportance StructuredArray StructuredSelection StruveH StruveL Stub StudentTDistribution Style StyleBox StyleBoxAutoDelete StyleBoxOptions StyleData StyleDefinitions StyleForm StyleKeyMapping StyleMenuListing StyleNameDialogSettings StyleNames StylePrint StyleSheetPath Subfactorial Subgraph SubMinus SubPlus SubresultantPolynomialRemainders SubresultantPolynomials Subresultants Subscript SubscriptBox SubscriptBoxOptions Subscripted Subset SubsetEqual Subsets SubStar Subsuperscript SubsuperscriptBox SubsuperscriptBoxOptions Subtract SubtractFrom SubValues Succeeds SucceedsEqual SucceedsSlantEqual SucceedsTilde SuchThat Sum SumConvergence Sunday SuperDagger SuperMinus SuperPlus Superscript SuperscriptBox SuperscriptBoxOptions Superset SupersetEqual SuperStar Surd SurdForm SurfaceColor SurfaceGraphics SurvivalDistribution SurvivalFunction SurvivalModel SurvivalModelFit SuspendPacket SuzukiDistribution SuzukiGroupSuz SwatchLegend Switch Symbol SymbolName SymletWavelet Symmetric SymmetricGroup SymmetricMatrixQ SymmetricPolynomial SymmetricReduction Symmetrize SymmetrizedArray SymmetrizedArrayRules SymmetrizedDependentComponents SymmetrizedIndependentComponents SymmetrizedReplacePart SynchronousInitialization SynchronousUpdating Syntax SyntaxForm SyntaxInformation SyntaxLength SyntaxPacket SyntaxQ SystemDialogInput SystemException SystemHelpPath SystemInformation SystemInformationData SystemOpen SystemOptions SystemsModelDelay SystemsModelDelayApproximate SystemsModelDelete SystemsModelDimensions SystemsModelExtract SystemsModelFeedbackConnect SystemsModelLabels SystemsModelOrder SystemsModelParallelConnect SystemsModelSeriesConnect SystemsModelStateFeedbackConnect SystemStub Tab TabFilling Table TableAlignments TableDepth TableDirections TableForm TableHeadings TableSpacing TableView TableViewBox TabSpacings TabView TabViewBox TabViewBoxOptions TagBox TagBoxNote TagBoxOptions TaggingRules TagSet TagSetDelayed TagStyle TagUnset Take TakeWhile Tally Tan Tanh TargetFunctions TargetUnits TautologyQ TelegraphProcess TemplateBox TemplateBoxOptions TemplateSlotSequence TemporalData Temporary TemporaryVariable TensorContract TensorDimensions TensorExpand TensorProduct TensorQ TensorRank TensorReduce TensorSymmetry TensorTranspose TensorWedge Tetrahedron TetrahedronBox TetrahedronBoxOptions TeXForm TeXSave Text Text3DBox Text3DBoxOptions TextAlignment TextBand TextBoundingBox TextBox TextCell TextClipboardType TextData TextForm TextJustification TextLine TextPacket TextParagraph TextRecognize TextRendering TextStyle Texture TextureCoordinateFunction TextureCoordinateScaling Therefore ThermometerGauge Thick Thickness Thin Thinning ThisLink ThompsonGroupTh Thread ThreeJSymbol Threshold Through Throw Thumbnail Thursday Ticks TicksStyle Tilde TildeEqual TildeFullEqual TildeTilde TimeConstrained TimeConstraint Times TimesBy TimeSeriesForecast TimeSeriesInvertibility TimeUsed TimeValue TimeZone Timing Tiny TitleGrouping TitsGroupT ToBoxes ToCharacterCode ToColor ToContinuousTimeModel ToDate ToDiscreteTimeModel ToeplitzMatrix ToExpression ToFileName Together Toggle ToggleFalse Toggler TogglerBar TogglerBox TogglerBoxOptions ToHeldExpression ToInvertibleTimeSeries TokenWords Tolerance ToLowerCase ToNumberField TooBig Tooltip TooltipBox TooltipBoxOptions TooltipDelay TooltipStyle Top TopHatTransform TopologicalSort ToRadicals ToRules ToString Total TotalHeight TotalVariationFilter TotalWidth TouchscreenAutoZoom TouchscreenControlPlacement ToUpperCase Tr Trace TraceAbove TraceAction TraceBackward TraceDepth TraceDialog TraceForward TraceInternal TraceLevel TraceOff TraceOn TraceOriginal TracePrint TraceScan TrackedSymbols TradingChart TraditionalForm TraditionalFunctionNotation TraditionalNotation TraditionalOrder TransferFunctionCancel TransferFunctionExpand TransferFunctionFactor TransferFunctionModel TransferFunctionPoles TransferFunctionTransform TransferFunctionZeros TransformationFunction TransformationFunctions TransformationMatrix TransformedDistribution TransformedField Translate TranslationTransform TransparentColor Transpose TreeForm TreeGraph TreeGraphQ TreePlot TrendStyle TriangleWave TriangularDistribution Trig TrigExpand TrigFactor TrigFactorList Trigger TrigReduce TrigToExp TrimmedMean True TrueQ TruncatedDistribution TsallisQExponentialDistribution TsallisQGaussianDistribution TTest Tube TubeBezierCurveBox TubeBezierCurveBoxOptions TubeBox TubeBSplineCurveBox TubeBSplineCurveBoxOptions Tuesday TukeyLambdaDistribution TukeyWindow Tuples TuranGraph TuringMachine Transparent UnateQ Uncompress Undefined UnderBar Underflow Underlined Underoverscript UnderoverscriptBox UnderoverscriptBoxOptions Underscript UnderscriptBox UnderscriptBoxOptions UndirectedEdge UndirectedGraph UndirectedGraphQ UndocumentedTestFEParserPacket UndocumentedTestGetSelectionPacket Unequal Unevaluated UniformDistribution UniformGraphDistribution UniformSumDistribution Uninstall Union UnionPlus Unique UnitBox UnitConvert UnitDimensions Unitize UnitRootTest UnitSimplify UnitStep UnitTriangle UnitVector Unprotect UnsameQ UnsavedVariables Unset UnsetShared UntrackedVariables Up UpArrow UpArrowBar UpArrowDownArrow Update UpdateDynamicObjects UpdateDynamicObjectsSynchronous UpdateInterval UpDownArrow UpEquilibrium UpperCaseQ UpperLeftArrow UpperRightArrow UpperTriangularize Upsample UpSet UpSetDelayed UpTee UpTeeArrow UpValues URL URLFetch URLFetchAsynchronous URLSave URLSaveAsynchronous UseGraphicsRange Using UsingFrontEnd V2Get ValidationLength Value ValueBox ValueBoxOptions ValueForm ValueQ ValuesData Variables Variance VarianceEquivalenceTest VarianceEstimatorFunction VarianceGammaDistribution VarianceTest VectorAngle VectorColorFunction VectorColorFunctionScaling VectorDensityPlot VectorGlyphData VectorPlot VectorPlot3D VectorPoints VectorQ Vectors VectorScale VectorStyle Vee Verbatim Verbose VerboseConvertToPostScriptPacket VerifyConvergence VerifySolutions VerifyTestAssumptions Version VersionNumber VertexAdd VertexCapacity VertexColors VertexComponent VertexConnectivity VertexCoordinateRules VertexCoordinates VertexCorrelationSimilarity VertexCosineSimilarity VertexCount VertexCoverQ VertexDataCoordinates VertexDegree VertexDelete VertexDiceSimilarity VertexEccentricity VertexInComponent VertexInDegree VertexIndex VertexJaccardSimilarity VertexLabeling VertexLabels VertexLabelStyle VertexList VertexNormals VertexOutComponent VertexOutDegree VertexQ VertexRenderingFunction VertexReplace VertexShape VertexShapeFunction VertexSize VertexStyle VertexTextureCoordinates VertexWeight Vertical VerticalBar VerticalForm VerticalGauge VerticalSeparator VerticalSlider VerticalTilde ViewAngle ViewCenter ViewMatrix ViewPoint ViewPointSelectorSettings ViewPort ViewRange ViewVector ViewVertical VirtualGroupData Visible VisibleCell VoigtDistribution VonMisesDistribution WaitAll WaitAsynchronousTask WaitNext WaitUntil WakebyDistribution WalleniusHypergeometricDistribution WaringYuleDistribution WatershedComponents WatsonUSquareTest WattsStrogatzGraphDistribution WaveletBestBasis WaveletFilterCoefficients WaveletImagePlot WaveletListPlot WaveletMapIndexed WaveletMatrixPlot WaveletPhi WaveletPsi WaveletScale WaveletScalogram WaveletThreshold WeaklyConnectedComponents WeaklyConnectedGraphQ WeakStationarity WeatherData WeberE Wedge Wednesday WeibullDistribution WeierstrassHalfPeriods WeierstrassInvariants WeierstrassP WeierstrassPPrime WeierstrassSigma WeierstrassZeta WeightedAdjacencyGraph WeightedAdjacencyMatrix WeightedData WeightedGraphQ Weights WelchWindow WheelGraph WhenEvent Which While White Whitespace WhitespaceCharacter WhittakerM WhittakerW WienerFilter WienerProcess WignerD WignerSemicircleDistribution WilksW WilksWTest WindowClickSelect WindowElements WindowFloating WindowFrame WindowFrameElements WindowMargins WindowMovable WindowOpacity WindowSelected WindowSize WindowStatusArea WindowTitle WindowToolbars WindowWidth With WolframAlpha WolframAlphaDate WolframAlphaQuantity WolframAlphaResult Word WordBoundary WordCharacter WordData WordSearch WordSeparators WorkingPrecision Write WriteString Wronskian XMLElement XMLObject Xnor Xor Yellow YuleDissimilarity ZernikeR ZeroSymmetric ZeroTest ZeroWidthTimes Zeta ZetaZero ZipfDistribution ZTest ZTransform $Aborted $ActivationGroupID $ActivationKey $ActivationUserRegistered $AddOnsDirectory $AssertFunction $Assumptions $AsynchronousTask $BaseDirectory $BatchInput $BatchOutput $BoxForms $ByteOrdering $Canceled $CharacterEncoding $CharacterEncodings $CommandLine $CompilationTarget $ConditionHold $ConfiguredKernels $Context $ContextPath $ControlActiveSetting $CreationDate $CurrentLink $DateStringFormat $DefaultFont $DefaultFrontEnd $DefaultImagingDevice $DefaultPath $Display $DisplayFunction $DistributedContexts $DynamicEvaluation $Echo $Epilog $ExportFormats $Failed $FinancialDataSource $FormatType $FrontEnd $FrontEndSession $GeoLocation $HistoryLength $HomeDirectory $HTTPCookies $IgnoreEOF $ImagingDevices $ImportFormats $InitialDirectory $Input $InputFileName $InputStreamMethods $Inspector $InstallationDate $InstallationDirectory $InterfaceEnvironment $IterationLimit $KernelCount $KernelID $Language $LaunchDirectory $LibraryPath $LicenseExpirationDate $LicenseID $LicenseProcesses $LicenseServer $LicenseSubprocesses $LicenseType $Line $Linked $LinkSupported $LoadedFiles $MachineAddresses $MachineDomain $MachineDomains $MachineEpsilon $MachineID $MachineName $MachinePrecision $MachineType $MaxExtraPrecision $MaxLicenseProcesses $MaxLicenseSubprocesses $MaxMachineNumber $MaxNumber $MaxPiecewiseCases $MaxPrecision $MaxRootDegree $MessageGroups $MessageList $MessagePrePrint $Messages $MinMachineNumber $MinNumber $MinorReleaseNumber $MinPrecision $ModuleNumber $NetworkLicense $NewMessage $NewSymbol $Notebooks $NumberMarks $Off $OperatingSystem $Output $OutputForms $OutputSizeLimit $OutputStreamMethods $Packages $ParentLink $ParentProcessID $PasswordFile $PatchLevelID $Path $PathnameSeparator $PerformanceGoal $PipeSupported $Post $Pre $PreferencesDirectory $PrePrint $PreRead $PrintForms $PrintLiteral $ProcessID $ProcessorCount $ProcessorType $ProductInformation $ProgramName $RandomState $RecursionLimit $ReleaseNumber $RootDirectory $ScheduledTask $ScriptCommandLine $SessionID $SetParentLink $SharedFunctions $SharedVariables $SoundDisplay $SoundDisplayFunction $SuppressInputFormHeads $SynchronousEvaluation $SyntaxHandler $System $SystemCharacterEncoding $SystemID $SystemWordLength $TemporaryDirectory $TemporaryPrefix $TextStyle $TimedOut $TimeUnit $TimeZone $TopDirectory $TraceOff $TraceOn $TracePattern $TracePostAction $TracePreAction $Urgent $UserAddOnsDirectory $UserBaseDirectory $UserDocumentsDirectory $UserName $Version $VersionNumber",
            c: [{
                cN: "comment",
                b: /\(\*/,
                e: /\*\)/
            }, a.ASM, a.QSM, a.CNM, {
                cN: "list",
                b: /\{/,
                e: /\}/,
                i: /:/
            }]
        }
    }),
    c.registerLanguage("php", function(a) {
        var b = {
            cN: "variable",
            b: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"
        }
          , c = {
            cN: "preprocessor",
            b: /<\?(php)?|\?>/
        }
          , d = {
            cN: "string",
            c: [a.BE, c],
            v: [{
                b: 'b"',
                e: '"'
            }, {
                b: "b'",
                e: "'"
            }, a.inherit(a.ASM, {
                i: null 
            }), a.inherit(a.QSM, {
                i: null 
            })]
        }
          , e = {
            v: [a.BNM, a.CNM]
        };
        return {
            cI: !0,
            k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
            c: [a.CLCM, a.HCM, {
                cN: "comment",
                b: "/\\*",
                e: "\\*/",
                c: [{
                    cN: "phpdoc",
                    b: "\\s@[A-Za-z]+"
                }, c]
            }, {
                cN: "comment",
                b: "__halt_compiler.+?;",
                eW: !0,
                k: "__halt_compiler",
                l: a.UIR
            }, {
                cN: "string",
                b: "<<<['\"]?\\w+['\"]?$",
                e: "^\\w+;",
                c: [a.BE]
            }, c, b, {
                cN: "function",
                bK: "function",
                e: /[;{]/,
                i: "\\$|\\[|%",
                c: [a.UTM, {
                    cN: "params",
                    b: "\\(",
                    e: "\\)",
                    c: ["self", b, a.CBLCLM, d, e]
                }]
            }, {
                cN: "class",
                bK: "class interface",
                e: "{",
                i: /[:\(\$"]/,
                c: [{
                    bK: "extends implements",
                    r: 10
                }, a.UTM]
            }, {
                bK: "namespace",
                e: ";",
                i: /[\.']/,
                c: [a.UTM]
            }, {
                bK: "use",
                e: ";",
                c: [a.UTM]
            }, {
                b: "=>"
            }, d, e]
        }
    }),
    c.registerLanguage("haskell", function(a) {
        var b = {
            cN: "comment",
            v: [{
                b: "--",
                e: "$"
            }, {
                b: "{-",
                e: "-}",
                c: ["self"]
            }]
        }
          , c = {
            cN: "pragma",
            b: "{-#",
            e: "#-}"
        }
          , d = {
            cN: "preprocessor",
            b: "^#",
            e: "$"
        }
          , e = {
            cN: "type",
            b: "\\b[A-Z][\\w']*",
            r: 0
        }
          , f = {
            cN: "container",
            b: "\\(",
            e: "\\)",
            i: '"',
            c: [c, b, d, {
                cN: "type",
                b: "\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"
            }, a.inherit(a.TM, {
                b: "[_a-z][\\w']*"
            })]
        }
          , g = {
            cN: "container",
            b: "{",
            e: "}",
            c: f.c
        };
        return {
            k: "let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec",
            c: [{
                cN: "module",
                b: "\\bmodule\\b",
                e: "where",
                k: "module where",
                c: [f, b],
                i: "\\W\\.|;"
            }, {
                cN: "import",
                b: "\\bimport\\b",
                e: "$",
                k: "import|0 qualified as hiding",
                c: [f, b],
                i: "\\W\\.|;"
            }, {
                cN: "class",
                b: "^(\\s*)?(class|instance)\\b",
                e: "where",
                k: "class family instance where",
                c: [e, f, b]
            }, {
                cN: "typedef",
                b: "\\b(data|(new)?type)\\b",
                e: "$",
                k: "data family type newtype deriving",
                c: [c, b, e, f, g]
            }, {
                cN: "default",
                bK: "default",
                e: "$",
                c: [e, f, b]
            }, {
                cN: "infix",
                bK: "infix infixl infixr",
                e: "$",
                c: [a.CNM, b]
            }, {
                cN: "foreign",
                b: "\\bforeign\\b",
                e: "$",
                k: "foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe",
                c: [e, a.QSM, b]
            }, {
                cN: "shebang",
                b: "#!\\/usr\\/bin\\/env runhaskell",
                e: "$"
            }, c, b, d, a.QSM, a.CNM, e, a.inherit(a.TM, {
                b: "^[_a-z][\\w']*"
            }), {
                b: "->|<-"
            }]
        }
    }),
    c.registerLanguage("1c", function(a) {
        var b = "[a-zA-Zа-яА-Я][a-zA-Z0-9_а-яА-Я]*"
          , c = "возврат дата для если и или иначе иначеесли исключение конецесли конецпопытки конецпроцедуры конецфункции конеццикла константа не перейти перем перечисление по пока попытка прервать продолжить процедура строка тогда фс функция цикл число экспорт"
          , d = "ansitooem oemtoansi ввестивидсубконто ввестидату ввестизначение ввестиперечисление ввестипериод ввестиплансчетов ввестистроку ввестичисло вопрос восстановитьзначение врег выбранныйплансчетов вызватьисключение датагод датамесяц датачисло добавитьмесяц завершитьработусистемы заголовоксистемы записьжурналарегистрации запуститьприложение зафиксироватьтранзакцию значениевстроку значениевстрокувнутр значениевфайл значениеизстроки значениеизстрокивнутр значениеизфайла имякомпьютера имяпользователя каталогвременныхфайлов каталогиб каталогпользователя каталогпрограммы кодсимв командасистемы конгода конецпериодаби конецрассчитанногопериодаби конецстандартногоинтервала конквартала конмесяца коннедели лев лог лог10 макс максимальноеколичествосубконто мин монопольныйрежим названиеинтерфейса названиенабораправ назначитьвид назначитьсчет найти найтипомеченныенаудаление найтиссылки началопериодаби началостандартногоинтервала начатьтранзакцию начгода начквартала начмесяца начнедели номерднягода номерднянедели номернеделигода нрег обработкаожидания окр описаниеошибки основнойжурналрасчетов основнойплансчетов основнойязык открытьформу открытьформумодально отменитьтранзакцию очиститьокносообщений периодстр полноеимяпользователя получитьвремята получитьдатута получитьдокументта получитьзначенияотбора получитьпозициюта получитьпустоезначение получитьта прав праводоступа предупреждение префиксавтонумерации пустаястрока пустоезначение рабочаядаттьпустоезначение рабочаядата разделительстраниц разделительстрок разм разобратьпозициюдокумента рассчитатьрегистрына рассчитатьрегистрыпо сигнал симв символтабуляции создатьобъект сокрл сокрлп сокрп сообщить состояние сохранитьзначение сред статусвозврата стрдлина стрзаменить стрколичествострок стрполучитьстроку  стрчисловхождений сформироватьпозициюдокумента счетпокоду текущаядата текущеевремя типзначения типзначениястр удалитьобъекты установитьтана установитьтапо фиксшаблон формат цел шаблон"
          , e = {
            cN: "dquote",
            b: '""'
        }
          , f = {
            cN: "string",
            b: '"',
            e: '"|$',
            c: [e]
        }
          , g = {
            cN: "string",
            b: "\\|",
            e: '"|$',
            c: [e]
        };
        return {
            cI: !0,
            l: b,
            k: {
                keyword: c,
                built_in: d
            },
            c: [a.CLCM, a.NM, f, g, {
                cN: "function",
                b: "(процедура|функция)",
                e: "$",
                l: b,
                k: "процедура функция",
                c: [a.inherit(a.TM, {
                    b: b
                }), {
                    cN: "tail",
                    eW: !0,
                    c: [{
                        cN: "params",
                        b: "\\(",
                        e: "\\)",
                        l: b,
                        k: "знач",
                        c: [f, g]
                    }, {
                        cN: "export",
                        b: "экспорт",
                        eW: !0,
                        l: b,
                        k: "экспорт",
                        c: [a.CLCM]
                    }]
                }, a.CLCM]
            }, {
                cN: "preprocessor",
                b: "#",
                e: "$"
            }, {
                cN: "date",
                b: "'\\d{2}\\.\\d{2}\\.(\\d{2}|\\d{4})'"
            }]
        }
    }),
    c.registerLanguage("python", function(a) {
        var b = {
            cN: "prompt",
            b: /^(>>>|\.\.\.) /
        }
          , c = {
            cN: "string",
            c: [a.BE],
            v: [{
                b: /(u|b)?r?'''/,
                e: /'''/,
                c: [b],
                r: 10
            }, {
                b: /(u|b)?r?"""/,
                e: /"""/,
                c: [b],
                r: 10
            }, {
                b: /(u|r|ur)'/,
                e: /'/,
                r: 10
            }, {
                b: /(u|r|ur)"/,
                e: /"/,
                r: 10
            }, {
                b: /(b|br)'/,
                e: /'/
            }, {
                b: /(b|br)"/,
                e: /"/
            }, a.ASM, a.QSM]
        }
          , d = {
            cN: "number",
            r: 0,
            v: [{
                b: a.BNR + "[lLjJ]?"
            }, {
                b: "\\b(0o[0-7]+)[lLjJ]?"
            }, {
                b: a.CNR + "[lLjJ]?"
            }]
        }
          , e = {
            cN: "params",
            b: /\(/,
            e: /\)/,
            c: ["self", b, d, c]
        }
          , f = {
            e: /:/,
            i: /[${=;\n]/,
            c: [a.UTM, e]
        };
        return {
            k: {
                keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False",
                built_in: "Ellipsis NotImplemented"
            },
            i: /(<\/|->|\?)/,
            c: [b, d, c, a.HCM, a.inherit(f, {
                cN: "function",
                bK: "def",
                r: 10
            }), a.inherit(f, {
                cN: "class",
                bK: "class"
            }), {
                cN: "decorator",
                b: /@/,
                e: /$/
            }, {
                b: /\b(print|exec)\(/
            }]
        }
    }),
    c.registerLanguage("smalltalk", function(a) {
        var b = "[a-z][a-zA-Z0-9_]*"
          , c = {
            cN: "char",
            b: "\\$.{1}"
        }
          , d = {
            cN: "symbol",
            b: "#" + a.UIR
        };
        return {
            k: "self super nil true false thisContext",
            c: [{
                cN: "comment",
                b: '"',
                e: '"'
            }, a.ASM, {
                cN: "class",
                b: "\\b[A-Z][A-Za-z0-9_]*",
                r: 0
            }, {
                cN: "method",
                b: b + ":",
                r: 0
            }, a.CNM, d, c, {
                cN: "localvars",
                b: "\\|[ ]*" + b + "([ ]+" + b + ")*[ ]*\\|",
                rB: !0,
                e: /\|/,
                i: /\S/,
                c: [{
                    b: "(\\|[ ]*)?" + b
                }]
            }, {
                cN: "array",
                b: "\\#\\(",
                e: "\\)",
                c: [a.ASM, c, a.CNM, d]
            }]
        }
    }),
    c.registerLanguage("tex", function() {
        var a = {
            cN: "command",
            b: "\\\\[a-zA-Zа-яА-я]+[\\*]?"
        }
          , b = {
            cN: "command",
            b: "\\\\[^a-zA-Zа-яА-я0-9]"
        }
          , c = {
            cN: "special",
            b: "[{}\\[\\]\\&#~]",
            r: 0
        };
        return {
            c: [{
                b: "\\\\[a-zA-Zа-яА-я]+[\\*]? *= *-?\\d*\\.?\\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?",
                rB: !0,
                c: [a, b, {
                    cN: "number",
                    b: " *=",
                    e: "-?\\d*\\.?\\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?",
                    eB: !0
                }],
                r: 10
            }, a, b, c, {
                cN: "formula",
                b: "\\$\\$",
                e: "\\$\\$",
                c: [a, b, c],
                r: 0
            }, {
                cN: "formula",
                b: "\\$",
                e: "\\$",
                c: [a, b, c],
                r: 0
            }, {
                cN: "comment",
                b: "%",
                e: "$",
                r: 0
            }]
        }
    }),
    c.registerLanguage("actionscript", function(a) {
        var b = "[a-zA-Z_$][a-zA-Z0-9_$]*"
          , c = "([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)"
          , d = {
            cN: "rest_arg",
            b: "[.]{3}",
            e: b,
            r: 10
        };
        return {
            k: {
                keyword: "as break case catch class const continue default delete do dynamic each else extends final finally for function get if implements import in include instanceof interface internal is namespace native new override package private protected public return set static super switch this throw try typeof use var void while with",
                literal: "true false null undefined"
            },
            c: [a.ASM, a.QSM, a.CLCM, a.CBLCLM, a.CNM, {
                cN: "package",
                bK: "package",
                e: "{",
                c: [a.TM]
            }, {
                cN: "class",
                bK: "class interface",
                e: "{",
                c: [{
                    bK: "extends implements"
                }, a.TM]
            }, {
                cN: "preprocessor",
                bK: "import include",
                e: ";"
            }, {
                cN: "function",
                bK: "function",
                e: "[{;]",
                i: "\\S",
                c: [a.TM, {
                    cN: "params",
                    b: "\\(",
                    e: "\\)",
                    c: [a.ASM, a.QSM, a.CLCM, a.CBLCLM, d]
                }, {
                    cN: "type",
                    b: ":",
                    e: c,
                    r: 10
                }]
            }]
        }
    }),
    c.registerLanguage("sql", function(a) {
        return {
            cI: !0,
            i: /[<>]/,
            c: [{
                cN: "operator",
                b: "\\b(begin|end|start|commit|rollback|savepoint|lock|alter|create|drop|rename|call|delete|do|handler|insert|load|replace|select|truncate|update|set|show|pragma|grant|merge)\\b(?!:)",
                e: ";",
                eW: !0,
                k: {
                    keyword: "all partial global month current_timestamp using go revoke smallint indicator end-exec disconnect zone with character assertion to add current_user usage input local alter match collate real then rollback get read timestamp session_user not integer bit unique day minute desc insert execute like ilike|2 level decimal drop continue isolation found where constraints domain right national some module transaction relative second connect escape close system_user for deferred section cast current sqlstate allocate intersect deallocate numeric public preserve full goto initially asc no key output collation group by union session both last language constraint column of space foreign deferrable prior connection unknown action commit view or first into float year primary cascaded except restrict set references names table outer open select size are rows from prepare distinct leading create only next inner authorization schema corresponding option declare precision immediate else timezone_minute external varying translation true case exception join hour default double scroll value cursor descriptor values dec fetch procedure delete and false int is describe char as at in varchar null trailing any absolute current_time end grant privileges when cross check write current_date pad begin temporary exec time update catalog user sql date on identity timezone_hour natural whenever interval work order cascade diagnostics nchar having left call do handler load replace truncate start lock show pragma exists number trigger if before after each row merge matched database",
                    aggregate: "count sum min max avg"
                },
                c: [{
                    cN: "string",
                    b: "'",
                    e: "'",
                    c: [a.BE, {
                        b: "''"
                    }]
                }, {
                    cN: "string",
                    b: '"',
                    e: '"',
                    c: [a.BE, {
                        b: '""'
                    }]
                }, {
                    cN: "string",
                    b: "`",
                    e: "`",
                    c: [a.BE]
                }, a.CNM]
            }, a.CBLCLM, {
                cN: "comment",
                b: "--",
                e: "$"
            }]
        }
    }),
    c.registerLanguage("handlebars", function() {
        var a = "each in with if else unless bindattr action collection debugger log outlet template unbound view yield";
        return {
            cI: !0,
            sL: "xml",
            subLanguageMode: "continuous",
            c: [{
                cN: "expression",
                b: "{{",
                e: "}}",
                c: [{
                    cN: "begin-block",
                    b: "#[a-zA-Z- .]+",
                    k: a
                }, {
                    cN: "string",
                    b: '"',
                    e: '"'
                }, {
                    cN: "end-block",
                    b: "\\/[a-zA-Z- .]+",
                    k: a
                }, {
                    cN: "variable",
                    b: "[a-zA-Z-.]+",
                    k: a
                }]
            }]
        }
    }),
    c.registerLanguage("vala", function(a) {
        return {
            k: {
                keyword: "char uchar unichar int uint long ulong short ushort int8 int16 int32 int64 uint8 uint16 uint32 uint64 float double bool struct enum string void weak unowned owned async signal static abstract interface override while do for foreach else switch case break default return try catch public private protected internal using new this get set const stdout stdin stderr var",
                built_in: "DBus GLib CCode Gee Object",
                literal: "false true null"
            },
            c: [{
                cN: "class",
                bK: "class interface delegate namespace",
                e: "{",
                i: "[^,:\\n\\s\\.]",
                c: [a.UTM]
            }, a.CLCM, a.CBLCLM, {
                cN: "string",
                b: '"""',
                e: '"""',
                r: 5
            }, a.ASM, a.QSM, a.CNM, {
                cN: "preprocessor",
                b: "^#",
                e: "$",
                r: 2
            }, {
                cN: "constant",
                b: " [A-Z_]+ ",
                r: 0
            }]
        }
    }),
    c.registerLanguage("ini", function(a) {
        return {
            cI: !0,
            i: /\S/,
            c: [{
                cN: "comment",
                b: ";",
                e: "$"
            }, {
                cN: "title",
                b: "^\\[",
                e: "\\]"
            }, {
                cN: "setting",
                b: "^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",
                e: "$",
                c: [{
                    cN: "value",
                    eW: !0,
                    k: "on off true false yes no",
                    c: [a.QSM, a.NM],
                    r: 0
                }]
            }]
        }
    }),
    c.registerLanguage("livecodeserver", function(a) {
        var b = {
            cN: "variable",
            b: "\\b[gtps][A-Z]+[A-Za-z0-9_\\-]*\\b|\\$_[A-Z]+",
            r: 0
        }
          , c = {
            cN: "comment",
            e: "$",
            v: [a.CBLCLM, a.HCM, {
                b: "--"
            }, {
                b: "[^:]//"
            }]
        }
          , d = a.inherit(a.TM, {
            v: [{
                b: "\\b_*rig[A-Z]+[A-Za-z0-9_\\-]*"
            }, {
                b: "\\b_[a-z0-9\\-]+"
            }]
        })
          , e = a.inherit(a.TM, {
            b: "\\b([A-Za-z0-9_\\-]+)\\b"
        });
        return {
            cI: !1,
            k: {
                keyword: "after byte bytes english the until http forever descending using line real8 with seventh for stdout finally element word fourth before black ninth sixth characters chars stderr uInt1 uInt1s uInt2 uInt2s stdin string lines relative rel any fifth items from middle mid at else of catch then third it file milliseconds seconds second secs sec int1 int1s int4 int4s internet int2 int2s normal text item last long detailed effective uInt4 uInt4s repeat end repeat URL in try into switch to words https token binfile each tenth as ticks tick system real4 by dateItems without char character ascending eighth whole dateTime numeric short first ftp integer abbreviated abbr abbrev private case while if",
                constant: "SIX TEN FORMFEED NINE ZERO NONE SPACE FOUR FALSE COLON CRLF PI COMMA ENDOFFILE EOF EIGHT FIVE QUOTE EMPTY ONE TRUE RETURN CR LINEFEED RIGHT BACKSLASH NULL SEVEN TAB THREE TWO six ten formfeed nine zero none space four false colon crlf pi comma endoffile eof eight five quote empty one true return cr linefeed right backslash null seven tab three two RIVERSION RISTATE FILE_READ_MODE FILE_WRITE_MODE FILE_WRITE_MODE DIR_WRITE_MODE FILE_READ_UMASK FILE_WRITE_UMASK DIR_READ_UMASK DIR_WRITE_UMASK",
                operator: "div mod wrap and or bitAnd bitNot bitOr bitXor among not in a an within contains ends with begins the keys of keys",
                built_in: "put abs acos aliasReference annuity arrayDecode arrayEncode asin atan atan2 average avg base64Decode base64Encode baseConvert binaryDecode binaryEncode byteToNum cachedURL cachedURLs charToNum cipherNames commandNames compound compress constantNames cos date dateFormat decompress directories diskSpace DNSServers exp exp1 exp2 exp10 extents files flushEvents folders format functionNames global globals hasMemory hostAddress hostAddressToName hostName hostNameToAddress isNumber ISOToMac itemOffset keys len length libURLErrorData libUrlFormData libURLftpCommand libURLLastHTTPHeaders libURLLastRHHeaders libUrlMultipartFormAddPart libUrlMultipartFormData libURLVersion lineOffset ln ln1 localNames log log2 log10 longFilePath lower macToISO matchChunk matchText matrixMultiply max md5Digest median merge millisec millisecs millisecond milliseconds min monthNames num number numToByte numToChar offset open openfiles openProcesses openProcessIDs openSockets paramCount param params peerAddress pendingMessages platform processID random randomBytes replaceText result revCreateXMLTree revCreateXMLTreeFromFile revCurrentRecord revCurrentRecordIsFirst revCurrentRecordIsLast revDatabaseColumnCount revDatabaseColumnIsNull revDatabaseColumnLengths revDatabaseColumnNames revDatabaseColumnNamed revDatabaseColumnNumbered revDatabaseColumnTypes revDatabaseConnectResult revDatabaseCursors revDatabaseID revDatabaseTableNames revDatabaseType revDataFromQuery revdb_closeCursor revdb_columnbynumber revdb_columncount revdb_columnisnull revdb_columnlengths revdb_columnnames revdb_columntypes revdb_commit revdb_connect revdb_connections revdb_connectionerr revdb_currentrecord revdb_cursorconnection revdb_cursorerr revdb_cursors revdb_dbtype revdb_disconnect revdb_execute revdb_iseof revdb_isbof revdb_movefirst revdb_movelast revdb_movenext revdb_moveprev revdb_query revdb_querylist revdb_recordcount revdb_rollback revdb_tablenames revGetDatabaseDriverPath revNumberOfRecords revOpenDatabase revOpenDatabases revQueryDatabase revQueryDatabaseBlob revQueryResult revQueryIsAtStart revQueryIsAtEnd revUnixFromMacPath revXMLAttribute revXMLAttributes revXMLAttributeValues revXMLChildContents revXMLChildNames revXMLFirstChild revXMLMatchingNode revXMLNextSibling revXMLNodeContents revXMLNumberOfChildren revXMLParent revXMLPreviousSibling revXMLRootNode revXMLRPC_CreateRequest revXMLRPC_Documents revXMLRPC_Error revXMLRPC_Execute revXMLRPC_GetHost revXMLRPC_GetMethod revXMLRPC_GetParam revXMLText revXMLRPC_GetParamCount revXMLRPC_GetParamNode revXMLRPC_GetParamType revXMLRPC_GetPath revXMLRPC_GetPort revXMLRPC_GetProtocol revXMLRPC_GetRequest revXMLRPC_GetResponse revXMLRPC_GetSocket revXMLTree revXMLTrees revXMLValidateDTD revZipDescribeItem revZipEnumerateItems revZipOpenArchives round sec secs seconds sha1Digest shell shortFilePath sin specialFolderPath sqrt standardDeviation statRound stdDev sum sysError systemVersion tan tempName tick ticks time to toLower toUpper transpose trunc uniDecode uniEncode upper URLDecode URLEncode URLStatus value variableNames version waitDepth weekdayNames wordOffset add breakpoint cancel clear local variable file word line folder directory URL close socket process combine constant convert create new alias folder directory decrypt delete variable word line folder directory URL dispatch divide do encrypt filter get include intersect kill libURLDownloadToFile libURLFollowHttpRedirects libURLftpUpload libURLftpUploadFile libURLresetAll libUrlSetAuthCallback libURLSetCustomHTTPHeaders libUrlSetExpect100 libURLSetFTPListCommand libURLSetFTPMode libURLSetFTPStopTime libURLSetStatusCallback load multiply socket process post seek rel relative read from process rename replace require resetAll revAddXMLNode revAppendXML revCloseCursor revCloseDatabase revCommitDatabase revCopyFile revCopyFolder revCopyXMLNode revDeleteFolder revDeleteXMLNode revDeleteAllXMLTrees revDeleteXMLTree revExecuteSQL revGoURL revInsertXMLNode revMoveFolder revMoveToFirstRecord revMoveToLastRecord revMoveToNextRecord revMoveToPreviousRecord revMoveToRecord revMoveXMLNode revPutIntoXMLNode revRollBackDatabase revSetDatabaseDriverPath revSetXMLAttribute revXMLRPC_AddParam revXMLRPC_DeleteAllDocuments revXMLAddDTD revXMLRPC_Free revXMLRPC_FreeAll revXMLRPC_DeleteDocument revXMLRPC_DeleteParam revXMLRPC_SetHost revXMLRPC_SetMethod revXMLRPC_SetPort revXMLRPC_SetProtocol revXMLRPC_SetSocket revZipAddItemWithData revZipAddItemWithFile revZipAddUncompressedItemWithData revZipAddUncompressedItemWithFile revZipCancel revZipCloseArchive revZipDeleteItem revZipExtractItemToFile revZipExtractItemToVariable revZipSetProgressCallback revZipRenameItem revZipReplaceItemWithData revZipReplaceItemWithFile revZipOpenArchive send set sort split subtract union unload wait write"
            },
            c: [b, {
                cN: "keyword",
                b: "\\bend\\sif\\b"
            }, {
                cN: "function",
                bK: "function",
                e: "$",
                c: [b, e, a.ASM, a.QSM, a.BNM, a.CNM, d]
            }, {
                cN: "function",
                bK: "end",
                e: "$",
                c: [e, d]
            }, {
                cN: "command",
                bK: "command on",
                e: "$",
                c: [b, e, a.ASM, a.QSM, a.BNM, a.CNM, d]
            }, {
                cN: "command",
                bK: "end",
                e: "$",
                c: [e, d]
            }, {
                cN: "preprocessor",
                b: "<\\?rev|<\\?lc|<\\?livecode",
                r: 10
            }, {
                cN: "preprocessor",
                b: "<\\?"
            }, {
                cN: "preprocessor",
                b: "\\?>"
            }, c, a.ASM, a.QSM, a.BNM, a.CNM, d],
            i: ";$|^\\[|^="
        }
    }),
    c.registerLanguage("d", function(a) {
        var b = {
            keyword: "abstract alias align asm assert auto body break byte case cast catch class const continue debug default delete deprecated do else enum export extern final finally for foreach foreach_reverse|10 goto if immutable import in inout int interface invariant is lazy macro mixin module new nothrow out override package pragma private protected public pure ref return scope shared static struct super switch synchronized template this throw try typedef typeid typeof union unittest version void volatile while with __FILE__ __LINE__ __gshared|10 __thread __traits __DATE__ __EOF__ __TIME__ __TIMESTAMP__ __VENDOR__ __VERSION__",
            built_in: "bool cdouble cent cfloat char creal dchar delegate double dstring float function idouble ifloat ireal long real short string ubyte ucent uint ulong ushort wchar wstring",
            literal: "false null true"
        }
          , c = "(0|[1-9][\\d_]*)"
          , d = "(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)"
          , e = "0[bB][01_]+"
          , f = "([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)"
          , g = "0[xX]" + f
          , h = "([eE][+-]?" + d + ")"
          , i = "(" + d + "(\\.\\d*|" + h + ")|\\d+\\." + d + d + "|\\." + c + h + "?)"
          , j = "(0[xX](" + f + "\\." + f + "|\\.?" + f + ")[pP][+-]?" + d + ")"
          , k = "(" + c + "|" + e + "|" + g + ")"
          , l = "(" + j + "|" + i + ")"
          , m = "\\\\(['\"\\?\\\\abfnrtv]|u[\\dA-Fa-f]{4}|[0-7]{1,3}|x[\\dA-Fa-f]{2}|U[\\dA-Fa-f]{8})|&[a-zA-Z\\d]{2,};"
          , n = {
            cN: "number",
            b: "\\b" + k + "(L|u|U|Lu|LU|uL|UL)?",
            r: 0
        }
          , o = {
            cN: "number",
            b: "\\b(" + l + "([fF]|L|i|[fF]i|Li)?|" + k + "(i|[fF]i|Li))",
            r: 0
        }
          , p = {
            cN: "string",
            b: "'(" + m + "|.)",
            e: "'",
            i: "."
        }
          , q = {
            b: m,
            r: 0
        }
          , r = {
            cN: "string",
            b: '"',
            c: [q],
            e: '"[cwd]?'
        }
          , s = {
            cN: "string",
            b: '[rq]"',
            e: '"[cwd]?',
            r: 5
        }
          , t = {
            cN: "string",
            b: "`",
            e: "`[cwd]?"
        }
          , u = {
            cN: "string",
            b: 'x"[\\da-fA-F\\s\\n\\r]*"[cwd]?',
            r: 10
        }
          , v = {
            cN: "string",
            b: 'q"\\{',
            e: '\\}"'
        }
          , w = {
            cN: "shebang",
            b: "^#!",
            e: "$",
            r: 5
        }
          , x = {
            cN: "preprocessor",
            b: "#(line)",
            e: "$",
            r: 5
        }
          , y = {
            cN: "keyword",
            b: "@[a-zA-Z_][a-zA-Z_\\d]*"
        }
          , z = {
            cN: "comment",
            b: "\\/\\+",
            c: ["self"],
            e: "\\+\\/",
            r: 10
        };
        return {
            l: a.UIR,
            k: b,
            c: [a.CLCM, a.CBLCLM, z, u, r, s, t, v, o, n, p, w, x, y]
        }
    }),
    c.registerLanguage("vbnet", function(a) {
        return {
            cI: !0,
            k: {
                keyword: "addhandler addressof alias and andalso aggregate ansi as assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into is isfalse isnot istrue join key let lib like loop me mid mod module mustinherit mustoverride mybase myclass namespace narrowing new next not notinheritable notoverridable of off on operator option optional or order orelse overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim rem removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly xor",
                built_in: "boolean byte cbool cbyte cchar cdate cdec cdbl char cint clng cobj csbyte cshort csng cstr ctype date decimal directcast double gettype getxmlnamespace iif integer long object sbyte short single string trycast typeof uinteger ulong ushort",
                literal: "true false nothing"
            },
            i: "//|{|}|endif|gosub|variant|wend",
            c: [a.inherit(a.QSM, {
                c: [{
                    b: '""'
                }]
            }), {
                cN: "comment",
                b: "'",
                e: "$",
                rB: !0,
                c: [{
                    cN: "xmlDocTag",
                    b: "'''|<!--|-->"
                }, {
                    cN: "xmlDocTag",
                    b: "</?",
                    e: ">"
                }]
            }, a.CNM, {
                cN: "preprocessor",
                b: "#",
                e: "$",
                k: "if else elseif end region externalsource"
            }]
        }
    }),
    c.registerLanguage("axapta", function(a) {
        return {
            k: "false int abstract private char boolean static null if for true while long throw finally protected final return void enum else break new catch byte super case short default double public try this switch continue reverse firstfast firstonly forupdate nofetch sum avg minof maxof count order group by asc desc index hint like dispaly edit client server ttsbegin ttscommit str real date container anytype common div mod",
            c: [a.CLCM, a.CBLCLM, a.ASM, a.QSM, a.CNM, {
                cN: "preprocessor",
                b: "#",
                e: "$"
            }, {
                cN: "class",
                bK: "class interface",
                e: "{",
                i: ":",
                c: [{
                    cN: "inheritance",
                    bK: "extends implements",
                    r: 10
                }, a.UTM]
            }]
        }
    }),
    c.registerLanguage("perl", function(a) {
        var b = "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when"
          , c = {
            cN: "subst",
            b: "[$@]\\{",
            e: "\\}",
            k: b
        }
          , d = {
            b: "->{",
            e: "}"
        }
          , e = {
            cN: "variable",
            v: [{
                b: /\$\d/
            }, {
                b: /[\$\%\@\*](\^\w\b|#\w+(\:\:\w+)*|{\w+}|\w+(\:\:\w*)*)/
            }, {
                b: /[\$\%\@\*][^\s\w{]/,
                r: 0
            }]
        }
          , f = {
            cN: "comment",
            b: "^(__END__|__DATA__)",
            e: "\\n$",
            r: 5
        }
          , g = [a.BE, c, e]
          , h = [e, a.HCM, f, {
            cN: "comment",
            b: "^\\=\\w",
            e: "\\=cut",
            eW: !0
        }, d, {
            cN: "string",
            c: g,
            v: [{
                b: "q[qwxr]?\\s*\\(",
                e: "\\)",
                r: 5
            }, {
                b: "q[qwxr]?\\s*\\[",
                e: "\\]",
                r: 5
            }, {
                b: "q[qwxr]?\\s*\\{",
                e: "\\}",
                r: 5
            }, {
                b: "q[qwxr]?\\s*\\|",
                e: "\\|",
                r: 5
            }, {
                b: "q[qwxr]?\\s*\\<",
                e: "\\>",
                r: 5
            }, {
                b: "qw\\s+q",
                e: "q",
                r: 5
            }, {
                b: "'",
                e: "'",
                c: [a.BE]
            }, {
                b: '"',
                e: '"'
            }, {
                b: "`",
                e: "`",
                c: [a.BE]
            }, {
                b: "{\\w+}",
                c: [],
                r: 0
            }, {
                b: "-?\\w+\\s*\\=\\>",
                c: [],
                r: 0
            }]
        }, {
            cN: "number",
            b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
            r: 0
        }, {
            b: "(\\/\\/|" + a.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
            k: "split return print reverse grep",
            r: 0,
            c: [a.HCM, f, {
                cN: "regexp",
                b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",
                r: 10
            }, {
                cN: "regexp",
                b: "(m|qr)?/",
                e: "/[a-z]*",
                c: [a.BE],
                r: 0
            }]
        }, {
            cN: "sub",
            bK: "sub",
            e: "(\\s*\\(.*?\\))?[;{]",
            r: 5
        }, {
            cN: "operator",
            b: "-\\w\\b",
            r: 0
        }];
        return c.c = h,
        d.c = h,
        {
            k: b,
            c: h
        }
    }),
    c.registerLanguage("scala", function(a) {
        var b = {
            cN: "annotation",
            b: "@[A-Za-z]+"
        }
          , c = {
            cN: "string",
            b: 'u?r?"""',
            e: '"""',
            r: 10
        };
        return {
            k: "type yield lazy override def with val var false true sealed abstract private trait object null if for while throw finally protected extends import final return else break new catch super class case package default try this match continue throws",
            c: [{
                cN: "javadoc",
                b: "/\\*\\*",
                e: "\\*/",
                c: [{
                    cN: "javadoctag",
                    b: "@[A-Za-z]+"
                }],
                r: 10
            }, a.CLCM, a.CBLCLM, c, a.ASM, a.QSM, {
                cN: "class",
                b: "((case )?class |object |trait )",
                e: "({|$)",
                i: ":",
                k: "case class trait object",
                c: [{
                    bK: "extends with",
                    r: 10
                }, a.UTM, {
                    cN: "params",
                    b: "\\(",
                    e: "\\)",
                    c: [a.ASM, a.QSM, c, b]
                }]
            }, a.CNM, b]
        }
    }),
    c.registerLanguage("cmake", function(a) {
        return {
            cI: !0,
            k: {
                keyword: "add_custom_command add_custom_target add_definitions add_dependencies add_executable add_library add_subdirectory add_test aux_source_directory break build_command cmake_minimum_required cmake_policy configure_file create_test_sourcelist define_property else elseif enable_language enable_testing endforeach endfunction endif endmacro endwhile execute_process export find_file find_library find_package find_path find_program fltk_wrap_ui foreach function get_cmake_property get_directory_property get_filename_component get_property get_source_file_property get_target_property get_test_property if include include_directories include_external_msproject include_regular_expression install link_directories load_cache load_command macro mark_as_advanced message option output_required_files project qt_wrap_cpp qt_wrap_ui remove_definitions return separate_arguments set set_directory_properties set_property set_source_files_properties set_target_properties set_tests_properties site_name source_group string target_link_libraries try_compile try_run unset variable_watch while build_name exec_program export_library_dependencies install_files install_programs install_targets link_libraries make_directory remove subdir_depends subdirs use_mangled_mesa utility_source variable_requires write_file qt5_use_modules qt5_use_package qt5_wrap_cpp on off true false and or",
                operator: "equal less greater strless strgreater strequal matches"
            },
            c: [{
                cN: "envvar",
                b: "\\${",
                e: "}"
            }, a.HCM, a.QSM, a.NM]
        }
    }),
    c.registerLanguage("ocaml", function(a) {
        return {
            k: {
                keyword: "and as assert asr begin class constraint do done downto else end exception external false for fun function functor if in include inherit initializer land lazy let lor lsl lsr lxor match method mod module mutable new object of open or private rec ref sig struct then to true try type val virtual when while with parser value",
                built_in: "bool char float int list unit array exn option int32 int64 nativeint format4 format6 lazy_t in_channel out_channel string"
            },
            i: /\/\//,
            c: [{
                cN: "string",
                b: '"""',
                e: '"""'
            }, {
                cN: "comment",
                b: "\\(\\*",
                e: "\\*\\)",
                c: ["self"]
            }, {
                cN: "class",
                bK: "type",
                e: "\\(|=|$",
                c: [a.UTM]
            }, {
                cN: "annotation",
                b: "\\[<",
                e: ">\\]"
            }, a.CBLCLM, a.inherit(a.ASM, {
                i: null 
            }), a.inherit(a.QSM, {
                i: null 
            }), a.CNM]
        }
    }),
    c.registerLanguage("autohotkey", function(a) {
        var b = {
            cN: "escape",
            b: "`[\\s\\S]"
        }
          , c = {
            cN: "comment",
            b: ";",
            e: "$",
            r: 0
        }
          , d = [{
            cN: "built_in",
            b: "A_[a-zA-Z0-9]+"
        }, {
            cN: "built_in",
            bK: "ComSpec Clipboard ClipboardAll ErrorLevel"
        }];
        return {
            cI: !0,
            k: {
                keyword: "Break Continue Else Gosub If Loop Return While",
                literal: "A true false NOT AND OR"
            },
            c: d.concat([b, a.inherit(a.QSM, {
                c: [b]
            }), c, {
                cN: "number",
                b: a.NR,
                r: 0
            }, {
                cN: "var_expand",
                b: "%",
                e: "%",
                i: "\\n",
                c: [b]
            }, {
                cN: "label",
                c: [b],
                v: [{
                    b: '^[^\\n";]+::(?!=)'
                }, {
                    b: '^[^\\n";]+:(?!=)',
                    r: 0
                }]
            }, {
                b: ",\\s*,",
                r: 10
            }])
        }
    }),
    c.registerLanguage("objectivec", function(a) {
        var b = {
            keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign self synchronized id nonatomic super unichar IBOutlet IBAction strong weak @private @protected @public @try @property @end @throw @catch @finally @synthesize @dynamic @selector @optional @required",
            literal: "false true FALSE TRUE nil YES NO NULL",
            built_in: "NSString NSDictionary CGRect CGPoint UIButton UILabel UITextView UIWebView MKMapView UISegmentedControl NSObject UITableViewDelegate UITableViewDataSource NSThread UIActivityIndicator UITabbar UIToolBar UIBarButtonItem UIImageView NSAutoreleasePool UITableView BOOL NSInteger CGFloat NSException NSLog NSMutableString NSMutableArray NSMutableDictionary NSURL NSIndexPath CGSize UITableViewCell UIView UIViewController UINavigationBar UINavigationController UITabBarController UIPopoverController UIPopoverControllerDelegate UIImage NSNumber UISearchBar NSFetchedResultsController NSFetchedResultsChangeType UIScrollView UIScrollViewDelegate UIEdgeInsets UIColor UIFont UIApplication NSNotFound NSNotificationCenter NSNotification UILocalNotification NSBundle NSFileManager NSTimeInterval NSDate NSCalendar NSUserDefaults UIWindow NSRange NSArray NSError NSURLRequest NSURLConnection UIInterfaceOrientation MPMoviePlayerController dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
        }
          , c = /[a-zA-Z@][a-zA-Z0-9_]*/
          , d = "@interface @class @protocol @implementation";
        return {
            k: b,
            l: c,
            i: "</",
            c: [a.CLCM, a.CBLCLM, a.CNM, a.QSM, {
                cN: "string",
                b: "'",
                e: "[^\\\\]'",
                i: "[^\\\\][^']"
            }, {
                cN: "preprocessor",
                b: "#import",
                e: "$",
                c: [{
                    cN: "title",
                    b: '"',
                    e: '"'
                }, {
                    cN: "title",
                    b: "<",
                    e: ">"
                }]
            }, {
                cN: "preprocessor",
                b: "#",
                e: "$"
            }, {
                cN: "class",
                b: "(" + d.split(" ").join("|") + ")\\b",
                e: "({|$)",
                k: d,
                l: c,
                c: [a.UTM]
            }, {
                cN: "variable",
                b: "\\." + a.UIR,
                r: 0
            }]
        }
    }),
    c.registerLanguage("avrasm", function(a) {
        return {
            cI: !0,
            k: {
                keyword: "adc add adiw and andi asr bclr bld brbc brbs brcc brcs break breq brge brhc brhs brid brie brlo brlt brmi brne brpl brsh brtc brts brvc brvs bset bst call cbi cbr clc clh cli cln clr cls clt clv clz com cp cpc cpi cpse dec eicall eijmp elpm eor fmul fmuls fmulsu icall ijmp in inc jmp ld ldd ldi lds lpm lsl lsr mov movw mul muls mulsu neg nop or ori out pop push rcall ret reti rjmp rol ror sbc sbr sbrc sbrs sec seh sbi sbci sbic sbis sbiw sei sen ser ses set sev sez sleep spm st std sts sub subi swap tst wdr",
                built_in: "r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 r16 r17 r18 r19 r20 r21 r22 r23 r24 r25 r26 r27 r28 r29 r30 r31 x|0 xh xl y|0 yh yl z|0 zh zl ucsr1c udr1 ucsr1a ucsr1b ubrr1l ubrr1h ucsr0c ubrr0h tccr3c tccr3a tccr3b tcnt3h tcnt3l ocr3ah ocr3al ocr3bh ocr3bl ocr3ch ocr3cl icr3h icr3l etimsk etifr tccr1c ocr1ch ocr1cl twcr twdr twar twsr twbr osccal xmcra xmcrb eicra spmcsr spmcr portg ddrg ping portf ddrf sreg sph spl xdiv rampz eicrb eimsk gimsk gicr eifr gifr timsk tifr mcucr mcucsr tccr0 tcnt0 ocr0 assr tccr1a tccr1b tcnt1h tcnt1l ocr1ah ocr1al ocr1bh ocr1bl icr1h icr1l tccr2 tcnt2 ocr2 ocdr wdtcr sfior eearh eearl eedr eecr porta ddra pina portb ddrb pinb portc ddrc pinc portd ddrd pind spdr spsr spcr udr0 ucsr0a ucsr0b ubrr0l acsr admux adcsr adch adcl porte ddre pine pinf"
            },
            c: [a.CBLCLM, {
                cN: "comment",
                b: ";",
                e: "$",
                r: 0
            }, a.CNM, a.BNM, {
                cN: "number",
                b: "\\b(\\$[a-zA-Z0-9]+|0o[0-7]+)"
            }, a.QSM, {
                cN: "string",
                b: "'",
                e: "[^\\\\]'",
                i: "[^\\\\][^']"
            }, {
                cN: "label",
                b: "^[A-Za-z0-9_.$]+:"
            }, {
                cN: "preprocessor",
                b: "#",
                e: "$"
            }, {
                cN: "preprocessor",
                b: "\\.[a-zA-Z]+"
            }, {
                cN: "localvars",
                b: "@[0-9]+"
            }]
        }
    }),
    c.registerLanguage("vhdl", function(a) {
        return {
            cI: !0,
            k: {
                keyword: "abs access after alias all and architecture array assert attribute begin block body buffer bus case component configuration constant context cover disconnect downto default else elsif end entity exit fairness file for force function generate generic group guarded if impure in inertial inout is label library linkage literal loop map mod nand new next nor not null of on open or others out package port postponed procedure process property protected pure range record register reject release rem report restrict restrict_guarantee return rol ror select sequence severity shared signal sla sll sra srl strong subtype then to transport type unaffected units until use variable vmode vprop vunit wait when while with xnor xor",
                typename: "boolean bit character severity_level integer time delay_length natural positive string bit_vector file_open_kind file_open_status std_ulogic std_ulogic_vector std_logic std_logic_vector unsigned signed boolean_vector integer_vector real_vector time_vector"
            },
            i: "{",
            c: [a.CBLCLM, {
                cN: "comment",
                b: "--",
                e: "$"
            }, a.QSM, a.CNM, {
                cN: "literal",
                b: "'(U|X|0|1|Z|W|L|H|-)'",
                c: [a.BE]
            }, {
                cN: "attribute",
                b: "'[A-Za-z](_?[A-Za-z0-9])*",
                c: [a.BE]
            }]
        }
    }),
    c.registerLanguage("coffeescript", function(a) {
        var b = {
            keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",
            literal: "true false null undefined yes no on off",
            reserved: "case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf",
            built_in: "npm require console print module exports global window document"
        }
          , c = "[A-Za-z$_][0-9A-Za-z$_]*"
          , d = a.inherit(a.TM, {
            b: c
        })
          , e = {
            cN: "subst",
            b: /#\{/,
            e: /}/,
            k: b
        }
          , f = [a.BNM, a.inherit(a.CNM, {
            starts: {
                e: "(\\s*/)?",
                r: 0
            }
        }), {
            cN: "string",
            v: [{
                b: /'''/,
                e: /'''/,
                c: [a.BE]
            }, {
                b: /'/,
                e: /'/,
                c: [a.BE]
            }, {
                b: /"""/,
                e: /"""/,
                c: [a.BE, e]
            }, {
                b: /"/,
                e: /"/,
                c: [a.BE, e]
            }]
        }, {
            cN: "regexp",
            v: [{
                b: "///",
                e: "///",
                c: [e, a.HCM]
            }, {
                b: "//[gim]*",
                r: 0
            }, {
                b: "/\\S(\\\\.|[^\\n])*?/[gim]*(?=\\s|\\W|$)"
            }]
        }, {
            cN: "property",
            b: "@" + c
        }, {
            b: "`",
            e: "`",
            eB: !0,
            eE: !0,
            sL: "javascript"
        }];
        return e.c = f,
        {
            k: b,
            c: f.concat([{
                cN: "comment",
                b: "###",
                e: "###"
            }, a.HCM, {
                cN: "function",
                b: "(" + c + "\\s*=\\s*)?(\\(.*\\))?\\s*\\B[-=]>",
                e: "[-=]>",
                rB: !0,
                c: [d, {
                    cN: "params",
                    b: "\\(",
                    rB: !0,
                    c: [{
                        b: /\(/,
                        e: /\)/,
                        k: b,
                        c: ["self"].concat(f)
                    }]
                }]
            }, {
                cN: "class",
                bK: "class",
                e: "$",
                i: /[:="\[\]]/,
                c: [{
                    bK: "extends",
                    eW: !0,
                    i: /[:="\[\]]/,
                    c: [d]
                }, d]
            }, {
                cN: "attribute",
                b: c + ":",
                e: ":",
                rB: !0,
                eE: !0,
                r: 0
            }])
        }
    }),
    c.registerLanguage("mizar", function() {
        return {
            k: ["environ vocabularies notations constructors definitions registrations theorems schemes requirements", "begin end definition registration cluster existence pred func defpred deffunc theorem proof", "let take assume then thus hence ex for st holds consider reconsider such that and in provided of as from", "be being by means equals implies iff redefine define now not or attr is mode suppose per cases set", "thesis contradiction scheme reserve struct", "correctness compatibility coherence symmetry assymetry reflexivity irreflexivity", "connectedness uniqueness commutativity idempotence involutiveness projectivity"].join(" "),
            c: [{
                cN: "comment",
                b: "::",
                e: "$"
            }]
        }
    }),
    c.registerLanguage("nginx", function(a) {
        var b = {
            cN: "variable",
            v: [{
                b: /\$\d+/
            }, {
                b: /\$\{/,
                e: /}/
            }, {
                b: "[\\$\\@]" + a.UIR
            }]
        }
          , c = {
            eW: !0,
            l: "[a-z/_]+",
            k: {
                built_in: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
            },
            r: 0,
            i: "=>",
            c: [a.HCM, {
                cN: "string",
                c: [a.BE, b],
                v: [{
                    b: /"/,
                    e: /"/
                }, {
                    b: /'/,
                    e: /'/
                }]
            }, {
                cN: "url",
                b: "([a-z]+):/",
                e: "\\s",
                eW: !0,
                eE: !0
            }, {
                cN: "regexp",
                c: [a.BE, b],
                v: [{
                    b: "\\s\\^",
                    e: "\\s|{|;",
                    rE: !0
                }, {
                    b: "~\\*?\\s+",
                    e: "\\s|{|;",
                    rE: !0
                }, {
                    b: "\\*(\\.[a-z\\-]+)+"
                }, {
                    b: "([a-z\\-]+\\.)+\\*"
                }]
            }, {
                cN: "number",
                b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
            }, {
                cN: "number",
                b: "\\b\\d+[kKmMgGdshdwy]*\\b",
                r: 0
            }, b]
        };
        return {
            c: [a.HCM, {
                b: a.UIR + "\\s",
                e: ";|{",
                rB: !0,
                c: [a.inherit(a.UTM, {
                    starts: c
                })],
                r: 0
            }],
            i: "[^\\s\\}]"
        }
    }),
    c.registerLanguage("erlang-repl", function(a) {
        return {
            k: {
                special_functions: "spawn spawn_link self",
                reserved: "after and andalso|10 band begin bnot bor bsl bsr bxor case catch cond div end fun if let not of or orelse|10 query receive rem try when xor"
            },
            c: [{
                cN: "prompt",
                b: "^[0-9]+> ",
                r: 10
            }, {
                cN: "comment",
                b: "%",
                e: "$"
            }, {
                cN: "number",
                b: "\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)",
                r: 0
            }, a.ASM, a.QSM, {
                cN: "constant",
                b: "\\?(::)?([A-Z]\\w*(::)?)+"
            }, {
                cN: "arrow",
                b: "->"
            }, {
                cN: "ok",
                b: "ok"
            }, {
                cN: "exclamation_mark",
                b: "!"
            }, {
                cN: "function_or_atom",
                b: "(\\b[a-z'][a-zA-Z0-9_']*:[a-z'][a-zA-Z0-9_']*)|(\\b[a-z'][a-zA-Z0-9_']*)",
                r: 0
            }, {
                cN: "variable",
                b: "[A-Z][a-zA-Z0-9_']*",
                r: 0
            }]
        }
    }),
    c.registerLanguage("r", function(a) {
        var b = "([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*";
        return {
            c: [a.HCM, {
                b: b,
                l: b,
                k: {
                    keyword: "function if in break next repeat else for return switch while try tryCatch|10 stop warning require library attach detach source setMethod setGeneric setGroupGeneric setClass ...|10",
                    literal: "NULL NA TRUE FALSE T F Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10"
                },
                r: 0
            }, {
                cN: "number",
                b: "0[xX][0-9a-fA-F]+[Li]?\\b",
                r: 0
            }, {
                cN: "number",
                b: "\\d+(?:[eE][+\\-]?\\d*)?L\\b",
                r: 0
            }, {
                cN: "number",
                b: "\\d+\\.(?!\\d)(?:i\\b)?",
                r: 0
            }, {
                cN: "number",
                b: "\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",
                r: 0
            }, {
                cN: "number",
                b: "\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",
                r: 0
            }, {
                b: "`",
                e: "`",
                r: 0
            }, {
                cN: "string",
                c: [a.BE],
                v: [{
                    b: '"',
                    e: '"'
                }, {
                    b: "'",
                    e: "'"
                }]
            }]
        }
    }),
    c.registerLanguage("json", function(a) {
        var b = {
            literal: "true false null"
        }
          , c = [a.QSM, a.CNM]
          , d = {
            cN: "value",
            e: ",",
            eW: !0,
            eE: !0,
            c: c,
            k: b
        }
          , e = {
            b: "{",
            e: "}",
            c: [{
                cN: "attribute",
                b: '\\s*"',
                e: '"\\s*:\\s*',
                eB: !0,
                eE: !0,
                c: [a.BE],
                i: "\\n",
                starts: d
            }],
            i: "\\S"
        }
          , f = {
            b: "\\[",
            e: "\\]",
            c: [a.inherit(d, {
                cN: null 
            })],
            i: "\\S"
        };
        return c.splice(c.length, 0, e, f),
        {
            c: c,
            k: b,
            i: "\\S"
        }
    }),
    c.registerLanguage("django", function() {
        var a = {
            cN: "filter",
            b: /\|[A-Za-z]+\:?/,
            k: "truncatewords removetags linebreaksbr yesno get_digit timesince random striptags filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort dictsortreversed default_if_none pluralize lower join center default truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize localtime utc timezone",
            c: [{
                cN: "argument",
                b: /"/,
                e: /"/
            }, {
                cN: "argument",
                b: /'/,
                e: /'/
            }]
        };
        return {
            cI: !0,
            sL: "xml",
            subLanguageMode: "continuous",
            c: [{
                cN: "template_comment",
                b: /\{%\s*comment\s*%}/,
                e: /\{%\s*endcomment\s*%}/
            }, {
                cN: "template_comment",
                b: /\{#/,
                e: /#}/
            }, {
                cN: "template_tag",
                b: /\{%/,
                e: /%}/,
                k: "comment endcomment load templatetag ifchanged endifchanged if endif firstof for endfor in ifnotequal endifnotequal widthratio extends include spaceless endspaceless regroup by as ifequal endifequal ssi now with cycle url filter endfilter debug block endblock else autoescape endautoescape csrf_token empty elif endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix plural get_current_language language get_available_languages get_current_language_bidi get_language_info get_language_info_list localize endlocalize localtime endlocaltime timezone endtimezone get_current_timezone verbatim",
                c: [a]
            }, {
                cN: "variable",
                b: /\{\{/,
                e: /}}/,
                c: [a]
            }]
        }
    }),
    c.registerLanguage("delphi", function(a) {
        var b = "exports register file shl array record property for mod while set ally label uses raise not stored class safecall var interface or private static exit index inherited to else stdcall override shr asm far resourcestring finalization packed virtual out and protected library do xorwrite goto near function end div overload object unit begin string on inline repeat until destructor write message program with read initialization except default nil if case cdecl in downto threadvar of try pascal const external constructor type public then implementation finally published procedure"
          , c = {
            cN: "comment",
            v: [{
                b: /\{/,
                e: /\}/,
                r: 0
            }, {
                b: /\(\*/,
                e: /\*\)/,
                r: 10
            }]
        }
          , d = {
            cN: "string",
            b: /'/,
            e: /'/,
            c: [{
                b: /''/
            }]
        }
          , e = {
            cN: "string",
            b: /(#\d+)+/
        }
          , f = {
            b: a.IR + "\\s*=\\s*class\\s*\\(",
            rB: !0,
            c: [a.TM]
        }
          , g = {
            cN: "function",
            bK: "function constructor destructor procedure",
            e: /[:;]/,
            k: "function constructor|10 destructor|10 procedure|10",
            c: [a.TM, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                k: b,
                c: [d, e]
            }, c]
        };
        return {
            cI: !0,
            k: b,
            i: /("|\$[G-Zg-z]|\/\*|<\/)/,
            c: [c, a.CLCM, d, e, a.NM, f, g]
        }
    }),
    c.registerLanguage("vbscript", function(a) {
        return {
            cI: !0,
            k: {
                keyword: "call class const dim do loop erase execute executeglobal exit for each next function if then else on error option explicit new private property let get public randomize redim rem select case set stop sub while wend with end to elseif is or xor and not class_initialize class_terminate default preserve in me byval byref step resume goto",
                built_in: "lcase month vartype instrrev ubound setlocale getobject rgb getref string weekdayname rnd dateadd monthname now day minute isarray cbool round formatcurrency conversions csng timevalue second year space abs clng timeserial fixs len asc isempty maths dateserial atn timer isobject filter weekday datevalue ccur isdate instr datediff formatdatetime replace isnull right sgn array snumeric log cdbl hex chr lbound msgbox ucase getlocale cos cdate cbyte rtrim join hour oct typename trim strcomp int createobject loadpicture tan formatnumber mid scriptenginebuildversion scriptengine split scriptengineminorversion cint sin datepart ltrim sqr scriptenginemajorversion time derived eval date formatpercent exp inputbox left ascw chrw regexp server response request cstr err",
                literal: "true false null nothing empty"
            },
            i: "//",
            c: [a.inherit(a.QSM, {
                c: [{
                    b: '""'
                }]
            }), {
                cN: "comment",
                b: /'/,
                e: /$/,
                r: 0
            }, a.CNM]
        }
    }),
    c.registerLanguage("oxygene", function(a) {
        var b = "abstract add and array as asc aspect assembly async begin break block by case class concat const copy constructor continue create default delegate desc distinct div do downto dynamic each else empty end ensure enum equals event except exit extension external false final finalize finalizer finally flags for forward from function future global group has if implementation implements implies in index inherited inline interface into invariants is iterator join locked locking loop matching method mod module namespace nested new nil not notify nullable of old on operator or order out override parallel params partial pinned private procedure property protected public queryable raise read readonly record reintroduce remove repeat require result reverse sealed select self sequence set shl shr skip static step soft take then to true try tuple type union unit unsafe until uses using var virtual raises volatile where while with write xor yield await mapped deprecated stdcall cdecl pascal register safecall overload library platform reference packed strict published autoreleasepool selector strong weak unretained"
          , c = {
            cN: "comment",
            b: "{",
            e: "}",
            r: 0
        }
          , d = {
            cN: "comment",
            b: "\\(\\*",
            e: "\\*\\)",
            r: 10
        }
          , e = {
            cN: "string",
            b: "'",
            e: "'",
            c: [{
                b: "''"
            }]
        }
          , f = {
            cN: "string",
            b: "(#\\d+)+"
        }
          , g = {
            cN: "function",
            bK: "function constructor destructor procedure method",
            e: "[:;]",
            k: "function constructor|10 destructor|10 procedure|10 method|10",
            c: [a.TM, {
                cN: "params",
                b: "\\(",
                e: "\\)",
                k: b,
                c: [e, f]
            }, c, d]
        };
        return {
            cI: !0,
            k: b,
            i: '("|\\$[G-Zg-z]|\\/\\*|</)',
            c: [c, d, a.CLCM, e, f, a.NM, g, {
                cN: "class",
                b: "=\\bclass\\b",
                e: "end;",
                k: b,
                c: [e, f, c, d, a.CLCM, g]
            }]
        }
    }),
    c.registerLanguage("mel", function(a) {
        return {
            k: "int float string vector matrix if else switch case default while do for in break continue global proc return about abs addAttr addAttributeEditorNodeHelp addDynamic addNewShelfTab addPP addPanelCategory addPrefixToName advanceToNextDrivenKey affectedNet affects aimConstraint air alias aliasAttr align alignCtx alignCurve alignSurface allViewFit ambientLight angle angleBetween animCone animCurveEditor animDisplay animView annotate appendStringArray applicationName applyAttrPreset applyTake arcLenDimContext arcLengthDimension arclen arrayMapper art3dPaintCtx artAttrCtx artAttrPaintVertexCtx artAttrSkinPaintCtx artAttrTool artBuildPaintMenu artFluidAttrCtx artPuttyCtx artSelectCtx artSetPaintCtx artUserPaintCtx assignCommand assignInputDevice assignViewportFactories attachCurve attachDeviceAttr attachSurface attrColorSliderGrp attrCompatibility attrControlGrp attrEnumOptionMenu attrEnumOptionMenuGrp attrFieldGrp attrFieldSliderGrp attrNavigationControlGrp attrPresetEditWin attributeExists attributeInfo attributeMenu attributeQuery autoKeyframe autoPlace bakeClip bakeFluidShading bakePartialHistory bakeResults bakeSimulation basename basenameEx batchRender bessel bevel bevelPlus binMembership bindSkin blend2 blendShape blendShapeEditor blendShapePanel blendTwoAttr blindDataType boneLattice boundary boxDollyCtx boxZoomCtx bufferCurve buildBookmarkMenu buildKeyframeMenu button buttonManip CBG cacheFile cacheFileCombine cacheFileMerge cacheFileTrack camera cameraView canCreateManip canvas capitalizeString catch catchQuiet ceil changeSubdivComponentDisplayLevel changeSubdivRegion channelBox character characterMap characterOutlineEditor characterize chdir checkBox checkBoxGrp checkDefaultRenderGlobals choice circle circularFillet clamp clear clearCache clip clipEditor clipEditorCurrentTimeCtx clipSchedule clipSchedulerOutliner clipTrimBefore closeCurve closeSurface cluster cmdFileOutput cmdScrollFieldExecuter cmdScrollFieldReporter cmdShell coarsenSubdivSelectionList collision color colorAtPoint colorEditor colorIndex colorIndexSliderGrp colorSliderButtonGrp colorSliderGrp columnLayout commandEcho commandLine commandPort compactHairSystem componentEditor compositingInterop computePolysetVolume condition cone confirmDialog connectAttr connectControl connectDynamic connectJoint connectionInfo constrain constrainValue constructionHistory container containsMultibyte contextInfo control convertFromOldLayers convertIffToPsd convertLightmap convertSolidTx convertTessellation convertUnit copyArray copyFlexor copyKey copySkinWeights cos cpButton cpCache cpClothSet cpCollision cpConstraint cpConvClothToMesh cpForces cpGetSolverAttr cpPanel cpProperty cpRigidCollisionFilter cpSeam cpSetEdit cpSetSolverAttr cpSolver cpSolverTypes cpTool cpUpdateClothUVs createDisplayLayer createDrawCtx createEditor createLayeredPsdFile createMotionField createNewShelf createNode createRenderLayer createSubdivRegion cross crossProduct ctxAbort ctxCompletion ctxEditMode ctxTraverse currentCtx currentTime currentTimeCtx currentUnit curve curveAddPtCtx curveCVCtx curveEPCtx curveEditorCtx curveIntersect curveMoveEPCtx curveOnSurface curveSketchCtx cutKey cycleCheck cylinder dagPose date defaultLightListCheckBox defaultNavigation defineDataServer defineVirtualDevice deformer deg_to_rad delete deleteAttr deleteShadingGroupsAndMaterials deleteShelfTab deleteUI deleteUnusedBrushes delrandstr detachCurve detachDeviceAttr detachSurface deviceEditor devicePanel dgInfo dgdirty dgeval dgtimer dimWhen directKeyCtx directionalLight dirmap dirname disable disconnectAttr disconnectJoint diskCache displacementToPoly displayAffected displayColor displayCull displayLevelOfDetail displayPref displayRGBColor displaySmoothness displayStats displayString displaySurface distanceDimContext distanceDimension doBlur dolly dollyCtx dopeSheetEditor dot dotProduct doubleProfileBirailSurface drag dragAttrContext draggerContext dropoffLocator duplicate duplicateCurve duplicateSurface dynCache dynControl dynExport dynExpression dynGlobals dynPaintEditor dynParticleCtx dynPref dynRelEdPanel dynRelEditor dynamicLoad editAttrLimits editDisplayLayerGlobals editDisplayLayerMembers editRenderLayerAdjustment editRenderLayerGlobals editRenderLayerMembers editor editorTemplate effector emit emitter enableDevice encodeString endString endsWith env equivalent equivalentTol erf error eval evalDeferred evalEcho event exactWorldBoundingBox exclusiveLightCheckBox exec executeForEachObject exists exp expression expressionEditorListen extendCurve extendSurface extrude fcheck fclose feof fflush fgetline fgetword file fileBrowserDialog fileDialog fileExtension fileInfo filetest filletCurve filter filterCurve filterExpand filterStudioImport findAllIntersections findAnimCurves findKeyframe findMenuItem findRelatedSkinCluster finder firstParentOf fitBspline flexor floatEq floatField floatFieldGrp floatScrollBar floatSlider floatSlider2 floatSliderButtonGrp floatSliderGrp floor flow fluidCacheInfo fluidEmitter fluidVoxelInfo flushUndo fmod fontDialog fopen formLayout format fprint frameLayout fread freeFormFillet frewind fromNativePath fwrite gamma gauss geometryConstraint getApplicationVersionAsFloat getAttr getClassification getDefaultBrush getFileList getFluidAttr getInputDeviceRange getMayaPanelTypes getModifiers getPanel getParticleAttr getPluginResource getenv getpid glRender glRenderEditor globalStitch gmatch goal gotoBindPose grabColor gradientControl gradientControlNoAttr graphDollyCtx graphSelectContext graphTrackCtx gravity grid gridLayout group groupObjectsByName HfAddAttractorToAS HfAssignAS HfBuildEqualMap HfBuildFurFiles HfBuildFurImages HfCancelAFR HfConnectASToHF HfCreateAttractor HfDeleteAS HfEditAS HfPerformCreateAS HfRemoveAttractorFromAS HfSelectAttached HfSelectAttractors HfUnAssignAS hardenPointCurve hardware hardwareRenderPanel headsUpDisplay headsUpMessage help helpLine hermite hide hilite hitTest hotBox hotkey hotkeyCheck hsv_to_rgb hudButton hudSlider hudSliderButton hwReflectionMap hwRender hwRenderLoad hyperGraph hyperPanel hyperShade hypot iconTextButton iconTextCheckBox iconTextRadioButton iconTextRadioCollection iconTextScrollList iconTextStaticLabel ikHandle ikHandleCtx ikHandleDisplayScale ikSolver ikSplineHandleCtx ikSystem ikSystemInfo ikfkDisplayMethod illustratorCurves image imfPlugins inheritTransform insertJoint insertJointCtx insertKeyCtx insertKnotCurve insertKnotSurface instance instanceable instancer intField intFieldGrp intScrollBar intSlider intSliderGrp interToUI internalVar intersect iprEngine isAnimCurve isConnected isDirty isParentOf isSameObject isTrue isValidObjectName isValidString isValidUiName isolateSelect itemFilter itemFilterAttr itemFilterRender itemFilterType joint jointCluster jointCtx jointDisplayScale jointLattice keyTangent keyframe keyframeOutliner keyframeRegionCurrentTimeCtx keyframeRegionDirectKeyCtx keyframeRegionDollyCtx keyframeRegionInsertKeyCtx keyframeRegionMoveKeyCtx keyframeRegionScaleKeyCtx keyframeRegionSelectKeyCtx keyframeRegionSetKeyCtx keyframeRegionTrackCtx keyframeStats lassoContext lattice latticeDeformKeyCtx launch launchImageEditor layerButton layeredShaderPort layeredTexturePort layout layoutDialog lightList lightListEditor lightListPanel lightlink lineIntersection linearPrecision linstep listAnimatable listAttr listCameras listConnections listDeviceAttachments listHistory listInputDeviceAxes listInputDeviceButtons listInputDevices listMenuAnnotation listNodeTypes listPanelCategories listRelatives listSets listTransforms listUnselected listerEditor loadFluid loadNewShelf loadPlugin loadPluginLanguageResources loadPrefObjects localizedPanelLabel lockNode loft log longNameOf lookThru ls lsThroughFilter lsType lsUI Mayatomr mag makeIdentity makeLive makePaintable makeRoll makeSingleSurface makeTubeOn makebot manipMoveContext manipMoveLimitsCtx manipOptions manipRotateContext manipRotateLimitsCtx manipScaleContext manipScaleLimitsCtx marker match max memory menu menuBarLayout menuEditor menuItem menuItemToShelf menuSet menuSetPref messageLine min minimizeApp mirrorJoint modelCurrentTimeCtx modelEditor modelPanel mouse movIn movOut move moveIKtoFK moveKeyCtx moveVertexAlongDirection multiProfileBirailSurface mute nParticle nameCommand nameField namespace namespaceInfo newPanelItems newton nodeCast nodeIconButton nodeOutliner nodePreset nodeType noise nonLinear normalConstraint normalize nurbsBoolean nurbsCopyUVSet nurbsCube nurbsEditUV nurbsPlane nurbsSelect nurbsSquare nurbsToPoly nurbsToPolygonsPref nurbsToSubdiv nurbsToSubdivPref nurbsUVSet nurbsViewDirectionVector objExists objectCenter objectLayer objectType objectTypeUI obsoleteProc oceanNurbsPreviewPlane offsetCurve offsetCurveOnSurface offsetSurface openGLExtension openMayaPref optionMenu optionMenuGrp optionVar orbit orbitCtx orientConstraint outlinerEditor outlinerPanel overrideModifier paintEffectsDisplay pairBlend palettePort paneLayout panel panelConfiguration panelHistory paramDimContext paramDimension paramLocator parent parentConstraint particle particleExists particleInstancer particleRenderInfo partition pasteKey pathAnimation pause pclose percent performanceOptions pfxstrokes pickWalk picture pixelMove planarSrf plane play playbackOptions playblast plugAttr plugNode pluginInfo pluginResourceUtil pointConstraint pointCurveConstraint pointLight pointMatrixMult pointOnCurve pointOnSurface pointPosition poleVectorConstraint polyAppend polyAppendFacetCtx polyAppendVertex polyAutoProjection polyAverageNormal polyAverageVertex polyBevel polyBlendColor polyBlindData polyBoolOp polyBridgeEdge polyCacheMonitor polyCheck polyChipOff polyClipboard polyCloseBorder polyCollapseEdge polyCollapseFacet polyColorBlindData polyColorDel polyColorPerVertex polyColorSet polyCompare polyCone polyCopyUV polyCrease polyCreaseCtx polyCreateFacet polyCreateFacetCtx polyCube polyCut polyCutCtx polyCylinder polyCylindricalProjection polyDelEdge polyDelFacet polyDelVertex polyDuplicateAndConnect polyDuplicateEdge polyEditUV polyEditUVShell polyEvaluate polyExtrudeEdge polyExtrudeFacet polyExtrudeVertex polyFlipEdge polyFlipUV polyForceUV polyGeoSampler polyHelix polyInfo polyInstallAction polyLayoutUV polyListComponentConversion polyMapCut polyMapDel polyMapSew polyMapSewMove polyMergeEdge polyMergeEdgeCtx polyMergeFacet polyMergeFacetCtx polyMergeUV polyMergeVertex polyMirrorFace polyMoveEdge polyMoveFacet polyMoveFacetUV polyMoveUV polyMoveVertex polyNormal polyNormalPerVertex polyNormalizeUV polyOptUvs polyOptions polyOutput polyPipe polyPlanarProjection polyPlane polyPlatonicSolid polyPoke polyPrimitive polyPrism polyProjection polyPyramid polyQuad polyQueryBlindData polyReduce polySelect polySelectConstraint polySelectConstraintMonitor polySelectCtx polySelectEditCtx polySeparate polySetToFaceNormal polySewEdge polyShortestPathCtx polySmooth polySoftEdge polySphere polySphericalProjection polySplit polySplitCtx polySplitEdge polySplitRing polySplitVertex polyStraightenUVBorder polySubdivideEdge polySubdivideFacet polyToSubdiv polyTorus polyTransfer polyTriangulate polyUVSet polyUnite polyWedgeFace popen popupMenu pose pow preloadRefEd print progressBar progressWindow projFileViewer projectCurve projectTangent projectionContext projectionManip promptDialog propModCtx propMove psdChannelOutliner psdEditTextureFile psdExport psdTextureFile putenv pwd python querySubdiv quit rad_to_deg radial radioButton radioButtonGrp radioCollection radioMenuItemCollection rampColorPort rand randomizeFollicles randstate rangeControl readTake rebuildCurve rebuildSurface recordAttr recordDevice redo reference referenceEdit referenceQuery refineSubdivSelectionList refresh refreshAE registerPluginResource rehash reloadImage removeJoint removeMultiInstance removePanelCategory rename renameAttr renameSelectionList renameUI render renderGlobalsNode renderInfo renderLayerButton renderLayerParent renderLayerPostProcess renderLayerUnparent renderManip renderPartition renderQualityNode renderSettings renderThumbnailUpdate renderWindowEditor renderWindowSelectContext renderer reorder reorderDeformers requires reroot resampleFluid resetAE resetPfxToPolyCamera resetTool resolutionNode retarget reverseCurve reverseSurface revolve rgb_to_hsv rigidBody rigidSolver roll rollCtx rootOf rot rotate rotationInterpolation roundConstantRadius rowColumnLayout rowLayout runTimeCommand runup sampleImage saveAllShelves saveAttrPreset saveFluid saveImage saveInitialState saveMenu savePrefObjects savePrefs saveShelf saveToolSettings scale scaleBrushBrightness scaleComponents scaleConstraint scaleKey scaleKeyCtx sceneEditor sceneUIReplacement scmh scriptCtx scriptEditorInfo scriptJob scriptNode scriptTable scriptToShelf scriptedPanel scriptedPanelType scrollField scrollLayout sculpt searchPathArray seed selLoadSettings select selectContext selectCurveCV selectKey selectKeyCtx selectKeyframeRegionCtx selectMode selectPref selectPriority selectType selectedNodes selectionConnection separator setAttr setAttrEnumResource setAttrMapping setAttrNiceNameResource setConstraintRestPosition setDefaultShadingGroup setDrivenKeyframe setDynamic setEditCtx setEditor setFluidAttr setFocus setInfinity setInputDeviceMapping setKeyCtx setKeyPath setKeyframe setKeyframeBlendshapeTargetWts setMenuMode setNodeNiceNameResource setNodeTypeFlag setParent setParticleAttr setPfxToPolyCamera setPluginResource setProject setStampDensity setStartupMessage setState setToolTo setUITemplate setXformManip sets shadingConnection shadingGeometryRelCtx shadingLightRelCtx shadingNetworkCompare shadingNode shapeCompare shelfButton shelfLayout shelfTabLayout shellField shortNameOf showHelp showHidden showManipCtx showSelectionInTitle showShadingGroupAttrEditor showWindow sign simplify sin singleProfileBirailSurface size sizeBytes skinCluster skinPercent smoothCurve smoothTangentSurface smoothstep snap2to2 snapKey snapMode snapTogetherCtx snapshot soft softMod softModCtx sort sound soundControl source spaceLocator sphere sphrand spotLight spotLightPreviewPort spreadSheetEditor spring sqrt squareSurface srtContext stackTrace startString startsWith stitchAndExplodeShell stitchSurface stitchSurfacePoints strcmp stringArrayCatenate stringArrayContains stringArrayCount stringArrayInsertAtIndex stringArrayIntersector stringArrayRemove stringArrayRemoveAtIndex stringArrayRemoveDuplicates stringArrayRemoveExact stringArrayToString stringToStringArray strip stripPrefixFromName stroke subdAutoProjection subdCleanTopology subdCollapse subdDuplicateAndConnect subdEditUV subdListComponentConversion subdMapCut subdMapSewMove subdMatchTopology subdMirror subdToBlind subdToPoly subdTransferUVsToCache subdiv subdivCrease subdivDisplaySmoothness substitute substituteAllString substituteGeometry substring surface surfaceSampler surfaceShaderList swatchDisplayPort switchTable symbolButton symbolCheckBox sysFile system tabLayout tan tangentConstraint texLatticeDeformContext texManipContext texMoveContext texMoveUVShellContext texRotateContext texScaleContext texSelectContext texSelectShortestPathCtx texSmudgeUVContext texWinToolCtx text textCurves textField textFieldButtonGrp textFieldGrp textManip textScrollList textToShelf textureDisplacePlane textureHairColor texturePlacementContext textureWindow threadCount threePointArcCtx timeControl timePort timerX toNativePath toggle toggleAxis toggleWindowVisibility tokenize tokenizeList tolerance tolower toolButton toolCollection toolDropped toolHasOptions toolPropertyWindow torus toupper trace track trackCtx transferAttributes transformCompare transformLimits translator trim trunc truncateFluidCache truncateHairCache tumble tumbleCtx turbulence twoPointArcCtx uiRes uiTemplate unassignInputDevice undo undoInfo ungroup uniform unit unloadPlugin untangleUV untitledFileName untrim upAxis updateAE userCtx uvLink uvSnapshot validateShelfName vectorize view2dToolCtx viewCamera viewClipPlane viewFit viewHeadOn viewLookAt viewManip viewPlace viewSet visor volumeAxis vortex waitCursor warning webBrowser webBrowserPrefs whatIs window windowPref wire wireContext workspace wrinkle wrinkleContext writeTake xbmLangPathList xform",
            i: "</",
            c: [a.CNM, a.ASM, a.QSM, {
                cN: "string",
                b: "`",
                e: "`",
                c: [a.BE]
            }, {
                cN: "variable",
                v: [{
                    b: "\\$\\d"
                }, {
                    b: "[\\$\\%\\@](\\^\\w\\b|#\\w+|[^\\s\\w{]|{\\w+}|\\w+)"
                }, {
                    b: "\\*(\\^\\w\\b|#\\w+|[^\\s\\w{]|{\\w+}|\\w+)",
                    r: 0
                }]
            }, a.CLCM, a.CBLCLM]
        }
    }),
    c.registerLanguage("dos", function() {
        return {
            cI: !0,
            k: {
                flow: "if else goto for in do call exit not exist errorlevel defined equ neq lss leq gtr geq",
                keyword: "shift cd dir echo setlocal endlocal set pause copy",
                stream: "prn nul lpt3 lpt2 lpt1 con com4 com3 com2 com1 aux",
                winutils: "ping net ipconfig taskkill xcopy ren del"
            },
            c: [{
                cN: "envvar",
                b: "%%[^ ]"
            }, {
                cN: "envvar",
                b: "%[^ ]+?%"
            }, {
                cN: "envvar",
                b: "![^ ]+?!"
            }, {
                cN: "number",
                b: "\\b\\d+",
                r: 0
            }, {
                cN: "comment",
                b: "@?rem",
                e: "$"
            }]
        }
    }),
    c.registerLanguage("apache", function(a) {
        var b = {
            cN: "number",
            b: "[\\$%]\\d+"
        };
        return {
            cI: !0,
            c: [a.HCM, {
                cN: "tag",
                b: "</?",
                e: ">"
            }, {
                cN: "keyword",
                b: /\w+/,
                r: 0,
                k: {
                    common: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
                },
                starts: {
                    e: /$/,
                    r: 0,
                    k: {
                        literal: "on off all"
                    },
                    c: [{
                        cN: "sqbracket",
                        b: "\\s\\[",
                        e: "\\]$"
                    }, {
                        cN: "cbracket",
                        b: "[\\$%]\\{",
                        e: "\\}",
                        c: ["self", b]
                    }, b, a.QSM]
                }
            }],
            i: /\S/
        }
    }),
    c.registerLanguage("scss", function(a) {
        {
            var b = "[a-zA-Z-][a-zA-Z0-9_-]*"
              , c = {
                cN: "function",
                b: b + "\\(",
                e: "\\)",
                c: ["self", a.NM, a.ASM, a.QSM]
            }
              , d = {
                cN: "hexcolor",
                b: "#[0-9A-Fa-f]+"
            };
            ({
                cN: "attribute",
                b: "[A-Z\\_\\.\\-]+",
                e: ":",
                eE: !0,
                i: "[^\\s]",
                starts: {
                    cN: "value",
                    eW: !0,
                    eE: !0,
                    c: [c, d, a.NM, a.QSM, a.ASM, a.CBLCLM, {
                        cN: "important",
                        b: "!important"
                    }]
                }
            })
        }
        return {
            cI: !0,
            i: "[=/|']",
            c: [a.CLCM, a.CBLCLM, {
                cN: "function",
                b: b + "\\(",
                e: "\\)",
                c: ["self", a.NM, a.ASM, a.QSM]
            }, {
                cN: "id",
                b: "\\#[A-Za-z0-9_-]+",
                r: 0
            }, {
                cN: "class",
                b: "\\.[A-Za-z0-9_-]+",
                r: 0
            }, {
                cN: "attr_selector",
                b: "\\[",
                e: "\\]",
                i: "$"
            }, {
                cN: "tag",
                b: "\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",
                r: 0
            }, {
                cN: "pseudo",
                b: ":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"
            }, {
                cN: "pseudo",
                b: "::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"
            }, {
                cN: "attribute",
                b: "\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",
                i: "[^\\s]"
            }, {
                cN: "value",
                b: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"
            }, {
                cN: "value",
                b: ":",
                e: ";",
                c: [d, a.NM, a.QSM, a.ASM, {
                    cN: "important",
                    b: "!important"
                }]
            }, {
                cN: "at_rule",
                b: "@",
                e: "[{;]",
                k: "mixin include extend for if else each while charset import debug media page content font-face namespace warn",
                c: [c, a.QSM, a.ASM, d, a.NM, {
                    cN: "preprocessor",
                    b: "\\s[A-Za-z0-9_.-]+",
                    r: 0
                }]
            }]
        }
    }),
    c.registerLanguage("applescript", function(a) {
        var b = a.inherit(a.QSM, {
            i: ""
        })
          , c = {
            cN: "params",
            b: "\\(",
            e: "\\)",
            c: ["self", a.CNM, b]
        }
          , d = [{
            cN: "comment",
            b: "--",
            e: "$"
        }, {
            cN: "comment",
            b: "\\(\\*",
            e: "\\*\\)",
            c: ["self", {
                b: "--",
                e: "$"
            }]
        }, a.HCM];
        return {
            k: {
                keyword: "about above after against and around as at back before beginning behind below beneath beside between but by considering contain contains continue copy div does eighth else end equal equals error every exit fifth first for fourth from front get given global if ignoring in into is it its last local me middle mod my ninth not of on onto or over prop property put ref reference repeat returning script second set seventh since sixth some tell tenth that the then third through thru timeout times to transaction try until where while whose with without",
                constant: "AppleScript false linefeed return pi quote result space tab true",
                type: "alias application boolean class constant date file integer list number real record string text",
                command: "activate beep count delay launch log offset read round run say summarize write",
                property: "character characters contents day frontmost id item length month name paragraph paragraphs rest reverse running time version weekday word words year"
            },
            c: [b, a.CNM, {
                cN: "type",
                b: "\\bPOSIX file\\b"
            }, {
                cN: "command",
                b: "\\b(clipboard info|the clipboard|info for|list (disks|folder)|mount volume|path to|(close|open for) access|(get|set) eof|current date|do shell script|get volume settings|random number|set volume|system attribute|system info|time to GMT|(load|run|store) script|scripting components|ASCII (character|number)|localized string|choose (application|color|file|file name|folder|from list|remote application|URL)|display (alert|dialog))\\b|^\\s*return\\b"
            }, {
                cN: "constant",
                b: "\\b(text item delimiters|current application|missing value)\\b"
            }, {
                cN: "keyword",
                b: "\\b(apart from|aside from|instead of|out of|greater than|isn't|(doesn't|does not) (equal|come before|come after|contain)|(greater|less) than( or equal)?|(starts?|ends|begins?) with|contained by|comes (before|after)|a (ref|reference))\\b"
            }, {
                cN: "property",
                b: "\\b(POSIX path|(date|time) string|quoted form)\\b"
            }, {
                cN: "function_start",
                bK: "on",
                i: "[${=;\\n]",
                c: [a.UTM, c]
            }].concat(d),
            i: "//"
        }
    }),
    c.registerLanguage("lasso", function(a) {
        var b = "[a-zA-Z_][a-zA-Z0-9_.]*"
          , c = "<\\?(lasso(script)?|=)"
          , d = "\\]|\\?>"
          , e = {
            literal: "true false none minimal full all void and or not bw nbw ew new cn ncn lt lte gt gte eq neq rx nrx ft",
            built_in: "array date decimal duration integer map pair string tag xml null bytes list queue set stack staticarray tie local var variable global data self inherited",
            keyword: "error_code error_msg error_pop error_push error_reset cache database_names database_schemanames database_tablenames define_tag define_type email_batch encode_set html_comment handle handle_error header if inline iterate ljax_target link link_currentaction link_currentgroup link_currentrecord link_detail link_firstgroup link_firstrecord link_lastgroup link_lastrecord link_nextgroup link_nextrecord link_prevgroup link_prevrecord log loop namespace_using output_none portal private protect records referer referrer repeating resultset rows search_args search_arguments select sort_args sort_arguments thread_atomic value_list while abort case else if_empty if_false if_null if_true loop_abort loop_continue loop_count params params_up return return_value run_children soap_definetag soap_lastrequest soap_lastresponse tag_name ascending average by define descending do equals frozen group handle_failure import in into join let match max min on order parent protected provide public require returnhome skip split_thread sum take thread to trait type where with yield yieldhome"
        }
          , f = {
            cN: "comment",
            b: "<!--",
            e: "-->",
            r: 0
        }
          , g = {
            cN: "preprocessor",
            b: "\\[noprocess\\]",
            starts: {
                cN: "markup",
                e: "\\[/noprocess\\]",
                rE: !0,
                c: [f]
            }
        }
          , h = {
            cN: "preprocessor",
            b: "\\[/noprocess|" + c
        }
          , i = {
            cN: "variable",
            b: "'" + b + "'"
        }
          , j = [a.CLCM, {
            cN: "javadoc",
            b: "/\\*\\*!",
            e: "\\*/"
        }, a.CBLCLM, a.inherit(a.CNM, {
            b: a.CNR + "|-?(infinity|nan)\\b"
        }), a.inherit(a.ASM, {
            i: null 
        }), a.inherit(a.QSM, {
            i: null 
        }), {
            cN: "string",
            b: "`",
            e: "`"
        }, {
            cN: "variable",
            v: [{
                b: "[#$]" + b
            }, {
                b: "#",
                e: "\\d+",
                i: "\\W"
            }]
        }, {
            cN: "tag",
            b: "::\\s*",
            e: b,
            i: "\\W"
        }, {
            cN: "attribute",
            b: "\\.\\.\\.|-" + a.UIR
        }, {
            cN: "subst",
            v: [{
                b: "->\\s*",
                c: [i]
            }, {
                b: ":=|/(?!\\w)=?|[-+*%=<>&|!?\\\\]+",
                r: 0
            }]
        }, {
            cN: "built_in",
            b: "\\.\\.?",
            r: 0,
            c: [i]
        }, {
            cN: "class",
            bK: "define",
            rE: !0,
            e: "\\(|=>",
            c: [a.inherit(a.TM, {
                b: a.UIR + "(=(?!>))?"
            })]
        }];
        return {
            aliases: ["ls", "lassoscript"],
            cI: !0,
            l: b + "|&[lg]t;",
            k: e,
            c: [{
                cN: "preprocessor",
                b: d,
                r: 0,
                starts: {
                    cN: "markup",
                    e: "\\[|" + c,
                    rE: !0,
                    r: 0,
                    c: [f]
                }
            }, g, h, {
                cN: "preprocessor",
                b: "\\[no_square_brackets",
                starts: {
                    e: "\\[/no_square_brackets\\]",
                    l: b + "|&[lg]t;",
                    k: e,
                    c: [{
                        cN: "preprocessor",
                        b: d,
                        r: 0,
                        starts: {
                            cN: "markup",
                            e: c,
                            rE: !0,
                            c: [f]
                        }
                    }, g, h].concat(j)
                }
            }, {
                cN: "preprocessor",
                b: "\\[",
                r: 0
            }, {
                cN: "shebang",
                b: "^#!.+lasso9\\b",
                r: 10
            }].concat(j)
        }
    }),
    c.registerLanguage("cpp", function(a) {
        var b = {
            keyword: "false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long throw volatile static protected bool template mutable if public friend do return goto auto void enum else break new extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex _Complex _Imaginary",
            built_in: "std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf"
        };
        return {
            aliases: ["c"],
            k: b,
            i: "</",
            c: [a.CLCM, a.CBLCLM, a.QSM, {
                cN: "string",
                b: "'\\\\?.",
                e: "'",
                i: "."
            }, {
                cN: "number",
                b: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"
            }, a.CNM, {
                cN: "preprocessor",
                b: "#",
                e: "$",
                c: [{
                    b: "include\\s*<",
                    e: ">",
                    i: "\\n"
                }, a.CLCM]
            }, {
                cN: "stl_container",
                b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
                e: ">",
                k: b,
                r: 10,
                c: ["self"]
            }]
        }
    }),
    c.registerLanguage("matlab", function(a) {
        var b = [a.CNM, {
            cN: "string",
            b: "'",
            e: "'",
            c: [a.BE, {
                b: "''"
            }]
        }];
        return {
            k: {
                keyword: "break case catch classdef continue else elseif end enumerated events for function global if methods otherwise parfor persistent properties return spmd switch try while",
                built_in: "sin sind sinh asin asind asinh cos cosd cosh acos acosd acosh tan tand tanh atan atand atan2 atanh sec secd sech asec asecd asech csc cscd csch acsc acscd acsch cot cotd coth acot acotd acoth hypot exp expm1 log log1p log10 log2 pow2 realpow reallog realsqrt sqrt nthroot nextpow2 abs angle complex conj imag real unwrap isreal cplxpair fix floor ceil round mod rem sign airy besselj bessely besselh besseli besselk beta betainc betaln ellipj ellipke erf erfc erfcx erfinv expint gamma gammainc gammaln psi legendre cross dot factor isprime primes gcd lcm rat rats perms nchoosek factorial cart2sph cart2pol pol2cart sph2cart hsv2rgb rgb2hsv zeros ones eye repmat rand randn linspace logspace freqspace meshgrid accumarray size length ndims numel disp isempty isequal isequalwithequalnans cat reshape diag blkdiag tril triu fliplr flipud flipdim rot90 find sub2ind ind2sub bsxfun ndgrid permute ipermute shiftdim circshift squeeze isscalar isvector ans eps realmax realmin pi i inf nan isnan isinf isfinite j why compan gallery hadamard hankel hilb invhilb magic pascal rosser toeplitz vander wilkinson"
            },
            i: '(//|"|#|/\\*|\\s+/\\w+)',
            c: [{
                cN: "function",
                bK: "function",
                e: "$",
                c: [a.UTM, {
                    cN: "params",
                    b: "\\(",
                    e: "\\)"
                }, {
                    cN: "params",
                    b: "\\[",
                    e: "\\]"
                }]
            }, {
                cN: "transposed_variable",
                b: "[a-zA-Z_][a-zA-Z_0-9]*('+[\\.']*|[\\.']+)",
                e: "",
                r: 0
            }, {
                cN: "matrix",
                b: "\\[",
                e: "\\]'*[\\.']*",
                c: b,
                r: 0
            }, {
                cN: "cell",
                b: "\\{",
                e: "\\}'*[\\.']*",
                c: b,
                i: /:/
            }, {
                cN: "comment",
                b: "\\%",
                e: "$"
            }].concat(b)
        }
    }),
    c.registerLanguage("scilab", function(a) {
        var b = [a.CNM, {
            cN: "string",
            b: "'|\"",
            e: "'|\"",
            c: [a.BE, {
                b: "''"
            }]
        }];
        return {
            k: {
                keyword: "abort break case clear catch continue do elseif else endfunction end for functionglobal if pause return resume select try then while%f %F %t %T %pi %eps %inf %nan %e %i %z %s",
                built_in: "abs and acos asin atan ceil cd chdir clearglobal cosh cos cumprod deff disp errorexec execstr exists exp eye gettext floor fprintf fread fsolve imag isdef isemptyisinfisnan isvector lasterror length load linspace list listfiles log10 log2 logmax min msprintf mclose mopen ones or pathconvert poly printf prod pwd rand realround sinh sin size gsort sprintf sqrt strcat strcmps tring sum system tanh tantype typename warning zeros matrix"
            },
            i: '("|#|/\\*|\\s+/\\w+)',
            c: [{
                cN: "function",
                bK: "function endfunction",
                e: "$",
                k: "function endfunction|10",
                c: [a.UTM, {
                    cN: "params",
                    b: "\\(",
                    e: "\\)"
                }]
            }, {
                cN: "transposed_variable",
                b: "[a-zA-Z_][a-zA-Z_0-9]*('+[\\.']*|[\\.']+)",
                e: "",
                r: 0
            }, {
                cN: "matrix",
                b: "\\[",
                e: "\\]'*[\\.']*",
                r: 0,
                c: b
            }, {
                cN: "comment",
                b: "//",
                e: "$"
            }].concat(b)
        }
    }),
    c.registerLanguage("makefile", function(a) {
        var b = {
            cN: "variable",
            b: /\$\(/,
            e: /\)/,
            c: [a.BE]
        };
        return {
            c: [a.HCM, {
                b: /^\w+\s*\W*=/,
                rB: !0,
                r: 0,
                starts: {
                    cN: "constant",
                    e: /\s*\W*=/,
                    eE: !0,
                    starts: {
                        e: /$/,
                        r: 0,
                        c: [b]
                    }
                }
            }, {
                cN: "title",
                b: /^[\w]+:\s*$/
            }, {
                cN: "phony",
                b: /^\.PHONY:/,
                e: /$/,
                k: ".PHONY",
                l: /[\.\w]+/
            }, {
                b: /^\t+/,
                e: /$/,
                c: [a.QSM, b]
            }]
        }
    }),
    c.registerLanguage("asciidoc", function() {
        return {
            c: [{
                cN: "comment",
                b: "^/{4,}\\n",
                e: "\\n/{4,}$",
                r: 10
            }, {
                cN: "comment",
                b: "^//",
                e: "$",
                r: 0
            }, {
                cN: "title",
                b: "^\\.\\w.*$"
            }, {
                b: "^[=\\*]{4,}\\n",
                e: "\\n^[=\\*]{4,}$",
                r: 10
            }, {
                cN: "header",
                b: "^(={1,5}) .+?( \\1)?$",
                r: 10
            }, {
                cN: "header",
                b: "^[^\\[\\]\\n]+?\\n[=\\-~\\^\\+]{2,}$",
                r: 10
            }, {
                cN: "attribute",
                b: "^:.+?:",
                e: "\\s",
                eE: !0,
                r: 10
            }, {
                cN: "attribute",
                b: "^\\[.+?\\]$",
                r: 0
            }, {
                cN: "blockquote",
                b: "^_{4,}\\n",
                e: "\\n_{4,}$",
                r: 10
            }, {
                cN: "code",
                b: "^[\\-\\.]{4,}\\n",
                e: "\\n[\\-\\.]{4,}$",
                r: 10
            }, {
                b: "^\\+{4,}\\n",
                e: "\\n\\+{4,}$",
                c: [{
                    b: "<",
                    e: ">",
                    sL: "xml",
                    r: 0
                }],
                r: 10
            }, {
                cN: "bullet",
                b: "^(\\*+|\\-+|\\.+|[^\\n]+?::)\\s+"
            }, {
                cN: "label",
                b: "^(NOTE|TIP|IMPORTANT|WARNING|CAUTION):\\s+",
                r: 10
            }, {
                cN: "strong",
                b: "\\B\\*(?![\\*\\s])",
                e: "(\\n{2}|\\*)",
                c: [{
                    b: "\\\\*\\w",
                    r: 0
                }]
            }, {
                cN: "emphasis",
                b: "\\B'(?!['\\s])",
                e: "(\\n{2}|')",
                c: [{
                    b: "\\\\'\\w",
                    r: 0
                }],
                r: 0
            }, {
                cN: "emphasis",
                b: "_(?![_\\s])",
                e: "(\\n{2}|_)",
                r: 0
            }, {
                cN: "smartquote",
                b: "``.+?''",
                r: 10
            }, {
                cN: "smartquote",
                b: "`.+?'",
                r: 10
            }, {
                cN: "code",
                b: "(`.+?`|\\+.+?\\+)",
                r: 0
            }, {
                cN: "code",
                b: "^[ \\t]",
                e: "$",
                r: 0
            }, {
                cN: "horizontal_rule",
                b: "^'{3,}[ \\t]*$",
                r: 10
            }, {
                b: "(link:)?(http|https|ftp|file|irc|image:?):\\S+\\[.*?\\]",
                rB: !0,
                c: [{
                    b: "(link|image:?):",
                    r: 0
                }, {
                    cN: "link_url",
                    b: "\\w",
                    e: "[^\\[]+",
                    r: 0
                }, {
                    cN: "link_label",
                    b: "\\[",
                    e: "\\]",
                    eB: !0,
                    eE: !0,
                    r: 0
                }],
                r: 10
            }]
        }
    }),
    c.registerLanguage("parser3", function(a) {
        return {
            sL: "xml",
            r: 0,
            c: [{
                cN: "comment",
                b: "^#",
                e: "$"
            }, {
                cN: "comment",
                b: "\\^rem{",
                e: "}",
                r: 10,
                c: [{
                    b: "{",
                    e: "}",
                    c: ["self"]
                }]
            }, {
                cN: "preprocessor",
                b: "^@(?:BASE|USE|CLASS|OPTIONS)$",
                r: 10
            }, {
                cN: "title",
                b: "@[\\w\\-]+\\[[\\w^;\\-]*\\](?:\\[[\\w^;\\-]*\\])?(?:.*)$"
            }, {
                cN: "variable",
                b: "\\$\\{?[\\w\\-\\.\\:]+\\}?"
            }, {
                cN: "keyword",
                b: "\\^[\\w\\-\\.\\:]+"
            }, {
                cN: "number",
                b: "\\^#[0-9a-fA-F]+"
            }, a.CNM]
        }
    }),
    c.registerLanguage("clojure", function(a) {
        var b = {
            built_in: "def cond apply if-not if-let if not not= = &lt; < > &lt;= <= >= == + / * - rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit defmacro defn defn- macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy defstruct first rest cons defprotocol cast coll deftype defrecord last butlast sigs reify second ffirst fnext nfirst nnext defmulti defmethod meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize"
        }
          , c = "[a-zA-Z_0-9\\!\\.\\?\\-\\+\\*\\/\\<\\=\\>\\&\\#\\$';]+"
          , d = "[\\s:\\(\\{]+\\d+(\\.\\d+)?"
          , e = {
            cN: "number",
            b: d,
            r: 0
        }
          , f = a.inherit(a.QSM, {
            i: null 
        })
          , g = {
            cN: "comment",
            b: ";",
            e: "$",
            r: 0
        }
          , h = {
            cN: "collection",
            b: "[\\[\\{]",
            e: "[\\]\\}]"
        }
          , i = {
            cN: "comment",
            b: "\\^" + c
        }
          , j = {
            cN: "comment",
            b: "\\^\\{",
            e: "\\}"
        }
          , k = {
            cN: "attribute",
            b: "[:]" + c
        }
          , l = {
            cN: "list",
            b: "\\(",
            e: "\\)"
        }
          , m = {
            eW: !0,
            k: {
                literal: "true false nil"
            },
            r: 0
        }
          , n = {
            k: b,
            l: c,
            cN: "title",
            b: c,
            starts: m
        };
        return l.c = [{
            cN: "comment",
            b: "comment"
        }, n, m],
        m.c = [l, f, i, j, g, k, h, e],
        h.c = [l, f, i, g, k, h, e],
        {
            i: /\S/,
            c: [g, l, {
                cN: "prompt",
                b: /^=> /,
                starts: {
                    e: /\n\n|\Z/
                }
            }]
        }
    }),
    c.registerLanguage("go", function(a) {
        var b = {
            keyword: "break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer",
            constant: "true false iota nil",
            typename: "bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",
            built_in: "append cap close complex copy imag len make new panic print println real recover delete"
        };
        return {
            aliases: ["golang"],
            k: b,
            i: "</",
            c: [a.CLCM, a.CBLCLM, a.QSM, {
                cN: "string",
                b: "'",
                e: "[^\\\\]'"
            }, {
                cN: "string",
                b: "`",
                e: "`"
            }, {
                cN: "number",
                b: "[^a-zA-Z_0-9](\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s)(\\+|\\-)?\\d+)?",
                r: 0
            }, a.CNM]
        }
    }),
    window.hljs = window.hljs || c,
    b.exports = c
}),
define("conf/routes/blog", function(require, a, b) {
    b.exports = ["conf/pl/nav", "conf/pl/blog"]
}),
define("conf/routes/bloglist", function(require, a, b) {
    b.exports = ["conf/pl/nav", "conf/pl/bloglist"]
}),
define("conf/routes/staticpage", function(require, a, b) {
    b.exports = ["conf/pl/nav", "conf/pl/staticpage"]
});
