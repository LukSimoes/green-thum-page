!(function(e) {
    function t(t) {
        for (
            var a, r, s = t[0], c = t[1], l = t[2], u = 0, f = []; u < s.length; u++
        )
            (r = s[u]),
            Object.prototype.hasOwnProperty.call(o, r) && o[r] && f.push(o[r][0]),
            (o[r] = 0);
        for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (e[a] = c[a]);
        for (d && d(t); f.length;) f.shift()();
        return i.push.apply(i, l || []), n();
    }

    function n() {
        for (var e, t = 0; t < i.length; t++) {
            for (var n = i[t], a = !0, s = 1; s < n.length; s++) {
                var c = n[s];
                0 !== o[c] && (a = !1);
            }
            a && (i.splice(t--, 1), (e = r((r.s = n[0]))));
        }
        return e;
    }
    var a = {},
        o = { 0: 0 },
        i = [];

    function r(t) {
        if (a[t]) return a[t].exports;
        var n = (a[t] = { i: t, l: !1, exports: {} });
        return e[t].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
    }
    (r.m = e),
    (r.c = a),
    (r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function(e) {
        "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function(e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
            (r.r(n),
                Object.defineProperty(n, "default", { enumerable: !0, value: e }),
                2 & t && "string" != typeof e)
        )
            for (var a in e)
                r.d(
                    n,
                    a,
                    function(t) {
                        return e[t];
                    }.bind(null, a)
                );
        return n;
    }),
    (r.n = function(e) {
        var t =
            e && e.__esModule ?

            function() {
                return e.default;
            } :
            function() {
                return e;
            };
        return r.d(t, "a", t), t;
    }),
    (r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = "");
    var s = (window.webpackJsonp = window.webpackJsonp || []),
        c = s.push.bind(s);
    (s.push = t), (s = s.slice());
    for (var l = 0; l < s.length; l++) t(s[l]);
    var d = c;
    i.push([58, 1]), n();
})({
    110: function(e, t, n) {},
    111: function(e, t) {
        new(function() {
            var e = this,
                t =
                arguments.length > 0 && void 0 !== arguments[0] ?
                arguments[0] :
                { offset: 10 },
                n = t.offset,
                a = (n * window.innerHeight) / 100,
                o = window.innerHeight - a,
                i = 0,
                r = window.innerWidth;
            (this.start = function(e) {
                window.requestAnimationFrame(function() {
                    (e.style.animationDelay = e.dataset.animationDelay),
                    (e.style.animationDuration = e.dataset.animationDuration),
                    e.classList.add(e.dataset.animation),
                        (e.dataset.animated = "true");
                });
            }),
            (this.inViewport = function(e) {
                var t = e.getBoundingClientRect(),
                    n = t.top + parseInt(e.dataset.animationOffset) || t.top,
                    s = t.bottom - parseInt(e.dataset.animationOffset) || t.bottom,
                    c = t.left,
                    l = t.right;
                return n <= o && s >= a && c <= r && l >= i;
            }),
            (this.verifyElementsInViewport = function() {
                for (
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0] ?
                        arguments[0] :
                        elements,
                        n = 0,
                        a = t.length; n < a; n++
                )
                    t[n].dataset.animated || (e.inViewport(t[n]) && e.start(t[n]));
            }),
            (this.getElements = function() {
                return document.querySelectorAll(
                    "[data-animation]:not([data-animated])"
                );
            }),
            (this.update = function() {
                (elements = e.getElements()),
                elements && e.verifyElementsInViewport(elements);
            }),
            window.addEventListener("load", this.update, !1),
                window.addEventListener(
                    "scroll",
                    function() {
                        return e.verifyElementsInViewport(elements);
                    }, { passive: !0 }
                ),
                window.addEventListener(
                    "resize",
                    function() {
                        return e.verifyElementsInViewport(elements);
                    }, { passive: !0 }
                );
        })({ offset: 15 });
    },
    58: function(e, t, n) {
        "use strict";
        n.r(t);
        n(59),
            n(72),
            n(74),
            n(79),
            n(80),
            n(81),
            n(83),
            n(56),
            n(100),
            n(103),
            n(108),
            n(110),
            n(111);
        var a = document.getElementById("pet"),
            o = document.getElementById("sunlight"),
            i = document.getElementById("sprinkle"),
            r = document.getElementById("container-no-result"),
            s = document.getElementById("container-itens"),
            c = document.getElementById("button-close"),
            l = document.getElementById("go-top"),
            d = (function() {
                var e;
                return {
                    open: t,
                    close: function(t, n) {
                        if (
                            t &&
                            (t.preventDefault(),
                                t.stopPropagation(), !t.target.dataset.hasOwnProperty("modalClose"))
                        )
                            return !1;
                        document.documentElement.classList.remove("is-scroll-disabled"),
                            (e.dataset.opened = "false"),
                            e.dataset.iframe && (e.querySelector("iframe").src = "");
                        e.dataset.video &&
                            (e.dataset.video.includes("youtube") ?
                                (e.querySelector("iframe").src = "") :
                                e.querySelector("video").pause());
                        n && n(e);
                    },
                    change: function(t, n) {
                        n && (n.preventDefault(), n.stopPropagation()),
                            (e.dataset.opened = "false"),
                            ((e = document.querySelector(t)).dataset.opened = "true");
                    },
                    alert: function(e, n) {
                        t(e, function(e) {
                            n && (e.querySelector(".modal--content").innerHTML = n);
                        });
                    },
                };

                function t(t, n) {
                    if (
                        (document.documentElement.classList.add("is-scroll-disabled"),
                            ((e = document.querySelector(t)).dataset.opened = "true"),
                            n && n(e),
                            e.dataset.video)
                    )
                        if (e.dataset.video.includes("youtube")) {
                            var a = e.dataset.video.split("v="),
                                o =
                                "https://www.youtube.com/embed/" +
                                (a[1].includes("&") ?
                                    a[1].substr(0, a[1].indexOf("&")) :
                                    a[1]) +
                                "?rel=0&amp;controls=1&amp;showinfo=0&amp;autoplay=1";
                            e.querySelector("iframe").src = o;
                        } else e.querySelector("video").src = e.dataset.video;
                    e.dataset.iframe &&
                        (e.querySelector("iframe").src = e.dataset.iframe);
                }
            })(),
            u = function() {
                "" != a.value &&
                    "" != o.value &&
                    "" != i.value &&
                    fetch(
                        ""
                        .concat(
                            "https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service?",
                            "sun="
                        )
                        .concat(o.value, "&water=")
                        .concat(i.value, "&pets=")
                        .concat(a.value)
                    )
                    .then(function(e) {
                        return e.json();
                    })
                    .then(function(e) {
                        var t, n, a;
                        (t = e),
                        (n = ""),
                        (a = document.getElementById("itens")),
                        r.classList.add("no-show"),
                            s.classList.remove("no-show"),
                            (a.innerHTML = ""),
                            t.forEach(function(e) {
                                var t,
                                    o,
                                    i = e.toxicity ? "Toxic.svg" : "Pet.svg";
                                switch (e.sun) {
                                    case "high":
                                        t = "HighSun.svg";
                                        break;
                                    case "low":
                                        t = "LowSun.svg";
                                        break;
                                    case "no":
                                        t = "NoSun.svg";
                                }
                                switch (e.water) {
                                    case "daily":
                                        o = "fill3.svg";
                                        break;
                                    case "regularly":
                                        o = "fill2.svg";
                                        break;
                                    case "rarely":
                                        o = "fill1.svg";
                                }
                                (n += '<div class="cell slideInLeft" data-animation data-cell-md="3" >\n                    <div class="card">\n                        <div class="photo">\n                            <img class="img" src="'
                                    .concat(
                                        e.url,
                                        '" alt="">\n                        </div>\n                        <div class="title">'
                                    )
                                    .concat(
                                        e.name,
                                        '</div>\n                        <div class="footer">\n                            <div class="value">\n                                $'
                                    )
                                    .concat(
                                        e.price,
                                        '\n                            </div>\n                            <div class="icons">\n                                <img src="public/images/'
                                    )
                                    .concat(t, '" alt="')
                                    .concat(
                                        t,
                                        '">                               \n                                <img src="public/images/'
                                    )
                                    .concat(o, '" alt="')
                                    .concat(
                                        o,
                                        '">\n                                <img src="public/images/'
                                    )
                                    .concat(i, '" alt="')
                                    .concat(
                                        i,
                                        '">\n                                \n                               \n                            </div>\n                        </div>\n\n                    </div>\n                </div>'
                                    )),
                                (a.innerHTML = n);
                            });
                    })
                    .catch(function(e) {
                        d.alert("#alert", "No plants found, please choose again.");
                    });
            };
        o.addEventListener("change", u),
            i.addEventListener("change", u),
            a.addEventListener("change", u),
            c.addEventListener("click", d.close),
            l.addEventListener("click", function() {
                window.scrollTo(0, 0);
            });
    },
});
//# sourceMappingURL=app.284b8c68.js.map