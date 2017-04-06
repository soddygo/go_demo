/**
 * Created by soddygosongguochao on 2017/3/14.
 */
!function (c, m, K) {
    "use strict";
    var q = "ht";
    if (!c[q]) {
        !function () {
            Date.now && Date.prototype.getTime || (Date.now = function () {
                return (new Date).getTime()
            }), c.performance && c.performance.now || function () {
                var M = Date.now();
                c.performance || (c.performance = {}), c.performance.now = function () {
                    return Date.now() - M
                }
            }();
            for (var v = Date.now(), W = 16, h = ["ms", "moz", "webkit", "o"], S = 0; S < h.length && !c.requestAnimationFrame; ++S)c.requestAnimationFrame = c[h[S] + "RequestAnimationFrame"], c.cancelAnimationFrame = c[h[S] + "CancelAnimationFrame"] || c[h[S] + "CancelRequestAnimationFrame"];
            c.requestAnimationFrame || (c.requestAnimationFrame = function (R) {
                var K = Date.now(), J = W + v - K;
                return 0 > J && (J = 0), v = K, c.setTimeout(function () {
                    v = Date.now(), R(performance.now())
                }, J)
            }), c.cancelAnimationFrame || (c.cancelAnimationFrame = function (F) {
                return c.clearTimeout(F)
            })
        }();
        var E, b, T, g, R = c.document, U = null, f = c[q] = {}, S = c[q + "config"], H = f.Default = S && S.Default || {}, u = f.Style = S && S.Style || {}, A = f.Color = S && S.Color || {}, s = f.IsGetter = S && S.IsGetter || {}, Q = Math, I = Q.round, d = Q.floor, z = Q.ceil, y = Q.sqrt, o = Q.max, O = Q.min, e = Q.abs, M = Q.cos, Z = Q.acos, v = Q.sin, B = Q.pow, p = Q.asin, h = Q.PI, $ = 2 * h, a = h / 2, V = Q.tan, w = Q.atan2, t = Q.random, x = true, r = !1, C = c.parseInt || global.parseInt, Y = "2017-06-01", N = function () {
            try {
                return c.navigator.platform.indexOf("Win") > -1
            } catch (s) {
            }
        }(), X = function (F) {
            return F * F
        }, n = c.setTimeout, F = c.clearTimeout, l = c.location, J = c.navigator ? c.navigator.userAgent.toLowerCase() : "", L = function (t) {
            return t.test(J)
        }, j = L(/msie/) || L(/trident/), W = L(/msie 10/), _ = L(/edge/), k = L(/firefox/), D = L(/mac/), P = H.isTouchable === K ? N ? !1 : R ? "ontouchend" in R : !1 : H.isTouchable, i = "default", G = "single", to = "multiple", Ar = "front", op = "back", rk = "left", ks = "right", dh = "top", De = "bottom", xr = "center", tk = "eye", Sf = "middle", ws = "east", Rn = "west", so = "north", Bn = "none", Be = "px", Ec = "absolute", So = "border", yh = "triangle", Xm = "rect", Vn = "circle", sk = "cylinder", Cq = "shape", Yi = "items", we = "normal", Mg = "remove", uc = "clear", qo = "width", Gf = "height", Ip = "ingroup", Vj = "check", on = "uncheck", An = "radio", ho = "radioOn", go = "radioOff", sn = "points", Od = "values", hh = "series", me = "body", rm = "label", dl = "label2", Kn = "note", er = "note2", Gn = "icons", _p = "labelFont", tb = "labelColor", ul = "labelSelectColor", Uh = "note.expanded", ng = "note2.expanded", Lb = "edge.expanded", He = "edge.points", se = "edge.type", gj = "rotation", Dj = "getRotation", Kc = "setRotation", wk = "hidden", In = "visible", Og = "tuv", jr = "no", Nn = "select", Ej = "currentSubGraph", yl = "selectBackground", Tg = "autoMakeVisible", kh = "autoHideScrollBar", Gc = "scrollBarColor", dg = "scrollBarSize", mp = "indent", Yc = "rowHeight", sp = "columnLineColor", $r = "rowLineColor", Zl = "columnLineVisible", _n = "rowLineVisible", qc = "visibleFunc", yc = "expandIcon", ip = "collapseIcon", Ef = "checkMode", Rh = "sortFunc", fj = "editable", gh = "batchEditable", hc = "tristate", mi = "asc", ah = "desc", ec = "position", Jr = "elevation", Kl = "children", Nf = "translateX", Wd = "translateY", pg = "dataModel", Gq = "shape3d", nf = "shape3d.resolution", Fj = "shape3d.visible", Io = "shape3d.from.visible", Eo = "shape3d.to.visible", fe = "shape3d.top.visible", ts = "shape3d.bottom.visible", Df = "repeat.uv.length", Ye = "serializeValue", qh = "deserializeValue", cm = "centerUniform", vp = "rgba(255,255,255,0)", ko = "style", Oi = "attr", vc = "field", Gl = "string", bn = "boolean", Vk = "color", hk = "int", Ao = "number", Kg = "ew-resize", ps = "ns-resize", Go = "pointer", Zm = "auto", rl = "mousedown", jc = "mousemove", Uk = "mouseup", Hf = "mouseout", Ze = "touchstart", ph = "touchmove", ic = "touchend", zg = "keydown", Ro = "keyup", _m = k ? "DOMMouseScroll" : "mousewheel", Fg = P ? [Ze, ph, ic, zg, Ro, "keypress", "input", "contextmenu"] : [zg, Ro, "keypress", "input", rl, jc, Uk, Hf, _m, "contextmenu", "mouseenter", "mouseleave", "mouseout"], $i = U, Fm = U, Ko = U, pq = Uk.length, Wm = function () {
            Ko && (F(Ko.timeout), Ko = U)
        }, Xe = function () {
            Ko && Ym(Ko.e, Ko.info)
        };
        c.addEventListener && (P || (c.addEventListener(Hf, function () {
            Wm()
        }, !1), c.addEventListener(_m, function () {
            as()
        }, !1)), c.addEventListener(Ro, function (n) {
            91 === n.keyCode ? Rp = {} : delete Rp[n.keyCode]
        }, !0), c.addEventListener(zg, function (p) {
            Rp[p.keyCode] = !0
        }, !0));
        var Xk, pk, Er, js = !1, sc = U, rq = U, Wq = {}, rg = {}, md = {}, gd = {}, gi = {}, Rp = {}, Wg = {}, xn = {}, vr = {}, ce = /.json$/, Mc = [], Qk = {}, Vq = U, Ab = U, jh = function () {
        }, wq = function () {
            throw"Oops!"
        }, Np = [0, 0, 0], Rm = [0, 0, 0, 0], yq = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }, hf = U, Um = U, Ld = U, Cc = function (n) {
            Um && !n._72O && (Ld || (Ld = {}), Ld[n._72O = jd()] = n), Xk != U ? rh() < .05 && g && !pk && (Yj = Wm) : Yj = pf
        }, pe = function (C, g, z, y) {
            Um || (Um = {});
            var P = Um[C];
            if (P) {
                if (P.url === g)return;
                P.image ? (P.image.onload = jh, P.image.onerror = jh) : P.request && (P.request.onload = jh, P.request.onerror = jh)
            }
            if (ce.test(g)) {
                var $ = new XMLHttpRequest;
                Um[C] = {
                    request: $,
                    url: g
                }, $.overrideMimeType("text/plain"), $.open("GET", g, !0), $.onload = function (a) {
                    if (200 === this.status || 0 === this.status) {
                        var X = H.parse(a.target.response);
                        zp(C, X), H.handleImageLoaded(C, X)
                    } else zp(C, H.handleUnfoundImage(C, g) || U)
                }, $.onerror = function () {
                    zp(C, H.handleUnfoundImage(C, g) || U)
                }, $.send(null)
            } else {
                var S = new Image;
                Um[C] = {image: S, url: g}, S.onload = function () {
                    z && (S.width = z), y && (S.height = y), H.handleImageLoaded(C, S), zp(C, S)
                }, S.onerror = function () {
                    zp(C, H.handleUnfoundImage(C, g) || U)
                }, /^data:image/.test(g) || (g += g.indexOf("?") >= 0 ? "&__ht__=" + Qi() : "?" + Qi()), S.src = g
            }
        }, zp = function (g, M) {
            if (rg[g] = M, delete Um[g], Nk(Um) && (Um = U, Ld)) {
                for (var z in Ld) {
                    var y = Ld[z];
                    y.invalidateAll && y.invalidateAll(K, "imageLoaded", g), y.redraw && y.redraw(), y.iv(), delete y._72O
                }
                Ld = U
            }
            if (M && Ld)for (var z in Ld) {
                var y = Ld[z];
                y.invalidateAll && y.invalidateAll(K, "imageLoading", g), y.redraw && y.redraw(), y.iv()
            }
        }, Qi = function () {
            return c.performance && c.performance.now ? c.performance.now() : Date.now()
        }, gq = function (w, J) {
            J ? F(w) : c.cancelAnimationFrame(w)
        }, ob = function (q, Z, J) {
            return {width: q, height: Z, comps: $p(J) ? J : [J]}
        }, Mm = function (Q, p) {
            return {
                type: Vn,
                rect: [Q, p, 1.6, 1.6],
                borderWidth: 1,
                borderColor: Ni,
                gradient: Kq,
                gradientColor: uj,
                background: Ni
            }
        }, Zo = function (n, f) {
            return ob(16, 16, {type: yh, rect: [4, 4, 10, 8], background: n, rotation: f ? 1.57 : 3.14})
        }, Zp = function (f, Q) {
            return ob(16, 16, {type: yh, rect: [4, 4, 8, 7], background: f, rotation: Q ? 3.14 : 0})
        }, Ic = function (r) {
            var e = r._orientation;
            return "horizontal" === e || "h" === e
        }, ol = function (s) {
            f.z = b = s
        }, yn = function (b) {
            var W = 2, u = 0;
            for (var K in b)K.length === W && C(K, 32) === zm && (Vq = Ab = b[K]), u++;
            return u
        }, rn = function (Z, R, H, g) {
            return H || (H = P ? 5 : 3, H /= g || 1), {x: Z - H, y: R - H, width: 2 * H, height: 2 * H}
        }, Tf = function (L) {
            return (/ble$/.test(L) || /ed$/.test(L) || s[L] ? "is" : "get") + L.charAt(0).toUpperCase() + L.slice(1)
        }, Om = function (W) {
            return "set" + W.charAt(0).toUpperCase() + W.slice(1)
        }, rd = function (X) {
            return typeof X === Gl || X instanceof String
        }, Bf = function (Q) {
            return typeof Q === Ao
        }, pf = function (s) {
            return typeof s === bn
        }, bk = function (M) {
            return M && "object" == typeof M
        }, $c = function (E) {
            return "function" == typeof E
        }, $p = function (M) {
            return M instanceof Array
        }, tq = function (E) {
            return E instanceof gr
        }, oo = function (N) {
            return $p(N) ? new gr(N) : N
        }, xj = function (f) {
            return f instanceof uk
        }, Ln = function (p) {
            return p instanceof Ad
        }, de = function (B) {
            return B instanceof hb
        }, cj = function (_) {
            return _ && "IFRAME" === _.tagName
        }, Dq = function (L) {
            return L == U ? L : parseFloat(L.toFixed(2))
        }, lc = function (i, J, T) {
            var E, B = J.length;
            if (T)for (var U = 0; T > U; U++)if (3 === B) i.push(J[0]), i.push(J[1]), i.push(J[2]); else for (E = 0; B > E; E++)i.push(J[E]); else if (3 === B) i.push(J[0]), i.push(J[1]), i.push(J[2]); else for (E = 0; B > E; E++)i.push(J[E])
        }, Tc = function (w) {
            return w ? bk(w) ? w : {} : !1
        }, Se = function (p, Y, V) {
            var L, R = bk(p) ? p : p.prototype;
            for (L in Y)V && R[L] !== K || (R[L] = Y[L]);
            return p
        }, Xh = function (j) {
            return String.fromCharCode(j)
        }, fk = function (a) {
            for (var I, u = 0, Y = ""; u < a.length; u++)I = a[a.length - 1 - u], "%" === I ? I = "'" : "a" === I ? I = '"' : "]" === I && (I = "\\"), Y += Xh(I.charCodeAt(0) - 1);
            return Y
        }, Eg = function (b, j, p) {
            b.superClass.constructor.apply(j, p)
        }, Nk = function (t) {
            for (var d in t)return !1;
            return !0
        }, To = function (J) {
            return J ? 0 === J.length : !0
        }, sl = function (D, K) {
            return D.x === K.x && D.y === K.y && D.width === K.width && D.height === K.height
        }, Qr = function (V, G, Q) {
            return G > V ? G : V > Q ? Q : V
        }, rh = function () {
            var B = 1e4 * v(pq++);
            return B - d(B)
        }, ud = function (L, S, C) {
            return Xd(L.x, L.y, S.x, S.y, C.x, C.y, C.x + C.width, C.y, !0) || Xd(L.x, L.y, S.x, S.y, C.x + C.width, C.y, C.x + C.width, C.y + C.height, !0) || Xd(L.x, L.y, S.x, S.y, C.x + C.width, C.y + C.height, C.x, C.y + C.height, !0) || Xd(L.x, L.y, S.x, S.y, C.x, C.y + C.height, C.x, C.y, !0)
        }, Xd = function (g, m, R, M, C, I, p, t, s) {
            var z = (p - C) * (m - I) - (t - I) * (g - C), b = (t - I) * (R - g) - (p - C) * (M - m);
            if (0 !== b) {
                var Z = z / b, c = g + Z * (R - g), n = m + Z * (M - m);
                return s && (c + Ub < O(g, R) || c - Ub > o(g, R) || c + Ub < O(C, p) || c - Ub > o(C, p) || n + Ub < O(m, M) || n - Ub > o(m, M) || n + Ub < O(I, t) || n - Ub > o(I, t)) ? U : [c, n]
            }
            return U
        }, al = function (S, D, p) {
            if (S && p)if (D) {
                if (D === ko)return S.getStyle(p);
                if (D === Oi)return S.getAttr(p);
                if (D === vc)return S[p]
            } else if (p = Tf(p), S[p])return S[p]();
            return K
        }, kk = function (z, S, C, M) {
            if (z && C)if (S) {
                if (S === ko) z.s(C, M); else if (S === Oi) z.a(C, M); else if (S === vc) {
                    var V = z[C];
                    z[C] = M, z.fp("f:" + C, V, M)
                }
            } else C = Om(C), z[C] && z[C](M)
        }, gs = function (z, S, m, C, o) {
            S && ns(z, m, C, 1, o, S)
        }, fo = function (g, f, O, Q) {
            var M = 1 - g;
            return M * M * f + 2 * g * M * O + g * g * Q
        }, fs = function (F, W, u, q, x) {
            var O = 1 - F;
            return O * O * O * W + 3 * O * O * F * u + 3 * O * F * F * q + F * F * F * x
        }, nd = function (Z) {
            var H, G, D, U, Q = 0;
            return Z.forEach(function (X) {
                if (H = X.length, H > 0)for (G = X[0], U = 1; H > U; U++)D = X[U], Q += Rk(G, D), G = D
            }), Q
        }, Sb = function (R, k, r) {
            var E = "__" + R, a = function (A) {
                r["handle_" + R](A)
            };
            r[E] || (r[E] = a, k.addEventListener(R, a, !1))
        }, Hj = function (u, W, E) {
            var U = "__" + u, d = E[U];
            d && (W.removeEventListener(u, d, !1), delete E[U])
        }, Ae = function (w, C) {
            var Z = "_" + C;
            w[Tf(C)] = function () {
                return this[Z]
            }, w[Om(C)] = function ($) {
                var c = this[Z];
                this[Z] = $, this.fp(C, c, $)
            }
        }, Ph = function (G) {
            return m.create(G)
        }, mo = function (F) {
            if (!F.element) {
                var _, J;
                (_ = F.textField) ? J = Ng(Fd.TextField, _) : (_ = F.textArea) ? J = Ng(Fd.TextArea, _) : (_ = F.button) ? J = Ng(Fd.Button, _) : (_ = F.comboBox) ? J = Ng(Fd.ComboBox, _) : (_ = F.checkBox) ? J = Ng(Fd.CheckBox, _) : (_ = F.radioButton) ? J = Ng(Fd.RadioButton, _) : (_ = F.slider) ? J = Ng(Fd.Slider, _) : (_ = F.colorPicker) ? J = Ng(Fd.ColorPicker, _) : (_ = F.image) && (J = Ng(Fd.Image, _)), J && (F.element = J)
            }
        }, Uo = function (S, Y) {
            var w = xo(S);
            return w._ht = Y, w
        }, xo = function (i, A) {
            var u = R.createElement("div"), z = u.style;
            return u.tabIndex = -1, u.onkeydown = Fr, z.msTouchAction = Bn, dq(u, U, 0), P && z.setProperty("-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", U), i && (z.overflow = wk), A && Cs(A, u), u
        }, Dm = function (P, l) {
            var q = R.createElement("canvas"), E = q.style;
            return E.msTouchAction = Bn, l || (E.pointerEvents = Bn), dq(q, U, 0), P && Cs(P, q), q
        }, dq = function (y, b, g) {
            var F = y.style;
            F.border = b ? b + " solid 1px" : 0, F.outline = 0, F.padding = g ? "0 " + g + Be : 0, Pj(y)
        }, Pj = function (T) {
            var J = T.style;
            J.position = Ec, J.margin = 0, J.setProperty("box-sizing", "border-box", U), J.setProperty("-moz-box-sizing", "border-box", U)
        }, Xq = function (n, M, k, L) {
            L || (L = Pg), M != U && (n.width = M * L, n.style.width = M + Be), k != U && (n.height = k * L, n.style.height = k + Be)
        }, Cs = function (o, z, J) {
            o.appendChild(z), J && (z.style.position = Ec)
        }, Hn = function (c, N) {
            N.split || (N += "");
            for (var f, C = N.split("\n"), E = 0, y = C.length, l = 0; y > l; l++) {
                var G = Mo(c.font, C[l]);
                G.width > E && (E = G.width), f || (f = G.height)
            }
            return c.ss = C, {width: E, height: f * y}
        }, nh = function (x, P, y, I, V, F) {
            var r = P.length;
            if (1 === r) qp(x, P[0], y, I, V); else for (var U = y.height / r, M = {
                x: y.x,
                y: y.y,
                width: y.width,
                height: U
            }, C = 0; C < P.length; C++)F ? Yr(x, P[C], I, V, M.x, M.y, M.width, M.height, F) : qp(x, P[C], M, I, V), M.y += U
        }, qp = function (O, y, M, L, U) {
            O.font = L ? L : Km, O.fillStyle = U ? U : Co, O.textAlign = xr, O.textBaseline = Sf;
            var b, v;
            M ? M.width === K ? (b = M.x, v = M.y) : (b = M.x + M.width / 2, v = M.y + M.height / 2) : (b = 0, v = 0), O.fillText(y, I(b), I(v))
        }, Yb = function (p) {
            p.getView && (p = p.getView());
            var $ = p.offsetWidth || p.scrollWidth;
            return !$ && p.style.width && ($ = C(p.style.width)), $
        }, Iq = function (E) {
            E.getView && (E = E.getView());
            var R = E.offsetHeight || E.scrollHeight;
            return !R && E.style.height && (R = C(E.style.height)), R
        }, Rf = function () {
            var Z = function (p) {
                Fr(p), p.stopPropagation()
            }, L = P ? [Ze] : [zg, rl, _m];
            return function (S) {
                var d = xo(), E = d.style;
                return E.backgroundColor = H.disabledBackground, S && (E.backgroundImage = "url(" + S + ")", E.backgroundPosition = "50% 50%", E.backgroundRepeat = "no-repeat no-repeat"), L.forEach(function (V) {
                    d.addEventListener(V, Z)
                }), d
            }
        }(), Cl = function (Q) {
            var X = Q.getContext("2d");
            return X.save(), X.lineCap = ai, X.lineJoin = Sg, X
        }, Yj = function (I, H, z, P) {
            es(I, H * Pg, z * Pg), P *= Pg, 1 !== P && I.scale(P, P)
        }, es = function (E, m, W) {
            E.translate(m, W)
        }, $g = function (T, Z) {
            Z && T.rotate(Z)
        }, ag = function (y, I, T) {
            I === K && (I = 1), T === K && (T = 1), (1 !== I || 1 !== T) && y.scale(I, T)
        }, Fl = function (q) {
            if (R.activeElement !== q)if (P) q.focus(); else {
                var X = Ml(), _ = X.target;
                q.focus(), _.scrollLeft = X.left, _.scrollTop = X.top
            }
        }, Un = function (G) {
            return G && G.getView ? G.getView() : G
        }, kg = function (T, v, S, x, l) {
            2 === arguments.length && (S = v.y, x = v.width, l = v.height, v = v.x);
            var p = Un(T), E = p.style;
            (R.fullscreenElement || R.mozFullScreenElement || R.webkitFullscreenElement || R.msFullscreenElement) !== p && (v !== K && (E.left = v + Be), S !== K && (E.top = S + Be), x !== K && (E.width = x + Be), l !== K && (E.height = l + Be)), T.endEditing && !P && T.endEditing(), T.redraw && T.redraw(), T.invalidate && T.invalidate(), T.onLayouted && T.onLayouted(v, S, x, l), T._41O && T._41O("layout")
        }, Bc = function (M) {
            var N = M.touches[0];
            return N ? N : M.changedTouches[0]
        }, mm = function (Z) {
            return P ? Bc(Z).target : Z.target
        }, re = function (Y) {
            H.popup && H.popup.close(), H.popup = Y
        }, fd = U, ll = function (U) {
            fd.handleWindowTouchMove(U)
        }, _e = function (v) {
            fd.handleWindowTouchEnd(v), c.removeEventListener(ph, ll, !1), c.removeEventListener(ic, _e, !1), fd = U
        }, Qf = function (u) {
            fd.handleWindowMouseMove(u)
        }, Ii = function (i) {
            fd.handleWindowMouseUp(i), c.removeEventListener(jc, Qf, !1), c.removeEventListener(Uk, Ii, !1), fd = U
        }, nk = function (n) {
            return 1 === fm(n)
        }, qg = function (I, Y) {
            return Y ? Y.keyCode === I : Rp[I]
        }, ii = function (b) {
            return hn(b) && qg(65, b)
        }, Ji = function (Y) {
            return qg(46, Y) || qg(8, Y)
        }, he = function (k) {
            return function (m) {
                return m ? m.keyCode === k : Rp[k]
            }
        }, zm = 573, dr = [65, 83, 68, 87, 37, 38, 39, 40, 32, 13, 27], Ne = he(dr[0]), Ai = he(dr[1]), Pm = he(dr[2]), te = he(dr[3]), vi = he(dr[4]), Ce = he(dr[5]), Ik = he(dr[6]), Hh = he(dr[7]), Af = he(dr[8]), Ll = he(dr[9]), hl = he(dr[10]), Qb = {
            65: 1,
            83: 1,
            68: 1,
            87: 1,
            37: 1,
            38: 1,
            39: 1,
            40: 1
        }, _q = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 5, 5, 5, 5, 5, 7, 1237], nn = U, ls = U, bg = function (N, k) {
            nn || (nn = Dm()), Xq(nn, N, k, 1);
            var m = Cl(nn);
            return m.clearRect(0, 0, N, k), m
        }, Nq = function () {
            var q, O = {};
            return function (J) {
                var w, U = O[J];
                return U || (q || (q = Dm(), Xq(q, 1, 1, 1)), w = q.getContext("2d"), w.clearRect(0, 0, 1, 1), ns(w, 0, 0, 1, 1, J), U = w.getImageData(0, 0, 1, 1).data, U = O[J] = [U[0], U[1], U[2], U[3]]), U
            }
        }(), Jp = function (j) {
            if (!rd(j))return j;
            var o = Nq(j);
            return o.CA || (o.CA = [o[0] / 255, o[1] / 255, o[2] / 255, o[3] / 255]), o.CA
        }, Rl = function (R, r, l, t) {
            var K = Dm();
            K.width = l, K.height = t;
            var g = K.getContext("2d");
            g.drawImage(R, 0, 0, l, t);
            try {
                for (var M = g.getImageData(0, 0, l, t), y = M.data, B = 0, S = y.length; S > B; B += 4) {
                    var A = y[B + 0], W = y[B + 1], V = y[B + 2];
                    y[B + 0] = r[0] * A, y[B + 1] = r[1] * W, y[B + 2] = r[2] * V
                }
                g.putImageData(M, 0, 0)
            } catch (o) {
                return R
            }
            return K
        }, Pr = function (B, g, s) {
            return g && (g = "miter" === s ? 8 * g + 20 : g + 1, B && df(B, g)), g
        }, kp = function (S, O) {
            if (O) {
                var Z = new Ok(O), t = S.width / 2, A = S.height / 2, k = Pb([Z.tf(-t, -A), Z.tf(t, -A), Z.tf(t, A), Z.tf(-t, A)]);
                return k.x += S.x + t, k.y += S.y + A, k
            }
            return S
        }, le = function (U, M, P, L, A, T, G, V) {
            L *= Math.PI / 180;
            var B = {
                x: Math.cos(L) * (U.x - G.x) / 2 + Math.sin(L) * (U.y - G.y) / 2,
                y: -Math.sin(L) * (U.x - G.x) / 2 + Math.cos(L) * (U.y - G.y) / 2
            }, Y = Math.pow(B.x, 2) / Math.pow(M, 2) + Math.pow(B.y, 2) / Math.pow(P, 2);
            Y > 1 && (M *= Math.sqrt(Y), P *= Math.sqrt(Y));
            var c = (A == T ? -1 : 1) * Math.sqrt((Math.pow(M, 2) * Math.pow(P, 2) - Math.pow(M, 2) * Math.pow(B.y, 2) - Math.pow(P, 2) * Math.pow(B.x, 2)) / (Math.pow(M, 2) * Math.pow(B.y, 2) + Math.pow(P, 2) * Math.pow(B.x, 2)));
            isNaN(c) && (c = 0);
            var N = {
                x: c * M * B.y / P,
                y: c * -P * B.x / M
            }, Z = {
                x: (U.x + G.x) / 2 + Math.cos(L) * N.x - Math.sin(L) * N.y,
                y: (U.y + G.y) / 2 + Math.sin(L) * N.x + Math.cos(L) * N.y
            }, b = function (H) {
                return Math.sqrt(Math.pow(H[0], 2) + Math.pow(H[1], 2))
            }, y = function (o, W) {
                return (o[0] * W[0] + o[1] * W[1]) / (b(o) * b(W))
            }, E = function (I, g) {
                return (I[0] * g[1] < I[1] * g[0] ? -1 : 1) * Math.acos(y(I, g))
            }, C = E([1, 0], [(B.x - N.x) / M, (B.y - N.y) / P]), u = [(B.x - N.x) / M, (B.y - N.y) / P], O = [(-B.x - N.x) / M, (-B.y - N.y) / P], q = E(u, O);
            y(u, O) <= -1 && (q = Math.PI), y(u, O) >= 1 && (q = 0);
            var y = M > P ? M : P, o = M > P ? 1 : M / P, h = M > P ? P / M : 1;
            if (null == V) {
                var $ = {x: 0, y: 0, width: 0, height: 0};
                df($, y), $.x *= o, $.width *= o, $.y *= h, $.height *= h;
                var z = new Ok(L);
                return $ = Pb([z.tf($.x, $.y), z.tf($.x + $.width, $.y), z.tf($.x + $.width, $.y + $.height), z.tf($.x, $.y + $.height)]), $.x += Z.x, $.y += Z.y, [{
                    x: $.x,
                    y: $.y
                }, {x: $.x + $.width, y: $.y}, {x: $.x + $.width, y: $.y + $.height}, {x: $.x, y: $.y + $.height}]
            }
            V.translate(Z.x, Z.y), V.rotate(L), V.scale(o, h), V.arc(0, 0, y, C, C + q, 1 - T), V.scale(1 / o, 1 / h), V.rotate(-L), V.translate(-Z.x, -Z.y)
        }, mg = function (R, J) {
            R && R.beginPath();
            for (var U, i, s, t = [], g = function (q) {
                for (var O, X = /(\-{0,1}[\d\.]+)/gi, d = []; O = X.exec(q);)d.push(parseFloat(O[0]));
                return d
            }, k = /([MmLlHhVvCcSsQqTtAa]{1}[\d\.,\s\-Zz]*)/gi, S = {x: 0, y: 0}; U = k.exec(J);) {
                var f = U[0], Q = f.substr(0, 1);
                if ("M" === Q || "m" === Q) {
                    for (var G = g(f), Z = 0; Z < G.length; Z += 2) {
                        var h = G[Z], H = G[Z + 1];
                        "m" === Q && (h += S.x, H += S.y), R && R.moveTo(h, H), t.push({x: h, y: H}), S.x = h, S.y = H
                    }
                    i = s = null
                } else if ("H" === Q || "h" === Q) {
                    for (var G = g(f), Z = 0; Z < G.length; Z += 1) {
                        var h = G[Z];
                        "h" === Q && (h += S.x), R && R.lineTo(h, S.y), t.push({x: h, y: S.y}), S.x = h
                    }
                    i = s = null
                } else if ("C" === Q || "c" === Q) {
                    for (var G = g(f), Z = 0; Z < G.length; Z += 6) {
                        var u = G[Z], D = G[Z + 1], n = G[Z + 2], y = G[Z + 3], h = G[Z + 4], H = G[Z + 5];
                        "c" === Q && (u += S.x, D += S.y, n += S.x, y += S.y, h += S.x, H += S.y), R && R.bezierCurveTo(u, D, n, y, h, H), t.push({
                            x: u,
                            y: D
                        }), t.push({x: n, y: y}), t.push({x: h, y: H}), S.x = h, S.y = H
                    }
                    i = [u, D, n, y, h, H], s = null
                } else if ("S" === Q || "s" === Q) {
                    for (var G = g(f), Z = 0; Z < G.length; Z += 4) {
                        var u, D;
                        i ? (u = 2 * i[4] - i[2], D = 2 * i[5] - i[3]) : (u = S.x, D = S.y);
                        var n = G[Z], y = G[Z + 1], h = G[Z + 2], H = G[Z + 3];
                        "s" === Q && (n += S.x, y += S.y, h += S.x, H += S.y), R && R.bezierCurveTo(u, D, n, y, h, H), t.push({
                            x: u,
                            y: D
                        }), t.push({x: n, y: y}), t.push({x: h, y: H}), S.x = h, S.y = H
                    }
                    i = [u, D, n, y, h, H], s = null
                } else if ("Q" === Q || "q" === Q) {
                    for (var G = g(f), Z = 0; Z < G.length; Z += 4) {
                        var u = G[Z], D = G[Z + 1], h = G[Z + 2], H = G[Z + 3];
                        "q" === Q && (u += S.x, D += S.y, h += S.x, H += S.y), R && R.quadraticCurveTo(u, D, h, H), t.push({
                            x: u,
                            y: D
                        }), t.push({x: h, y: H}), S.x = h, S.y = H
                    }
                    i = null, s = [u, D, h, H]
                } else if ("T" === Q || "t" === Q) {
                    for (var G = g(f), Z = 0; Z < G.length; Z += 2) {
                        var u, D;
                        s ? (u = 2 * s[2] - s[0], D = 2 * s[3] - s[1]) : (u = S.x, D = S.y);
                        var h = G[Z], H = G[Z + 1];
                        "t" === Q && (h += S.x, H += S.y), R && R.quadraticCurveTo(u, D, h, H), t.push({
                            x: u,
                            y: D
                        }), t.push({x: h, y: H}), S.x = h, S.y = H
                    }
                    i = null, s = [u, D, h, H]
                } else if ("V" === Q || "v" === Q) {
                    for (var G = g(f), Z = 0; Z < G.length; Z += 1) {
                        var H = G[Z];
                        "v" === Q && (H += S.y), R && R.lineTo(S.x, H), t.push({x: S.x, y: H}), S.y = H
                    }
                    i = s = null
                } else if ("L" === Q || "l" === Q) {
                    for (var G = g(f), Z = 0; Z < G.length; Z += 2) {
                        var h = G[Z], H = G[Z + 1];
                        "l" === Q && (h += S.x, H += S.y), R && R.lineTo(h, H), t.push({x: h, y: H}), S.x = h, S.y = H
                    }
                    i = s = null
                } else if ("A" === Q || "a" === Q) {
                    for (var G = g(f), Z = 0; Z < G.length; Z += 7) {
                        var l = G[Z], B = G[Z + 1], d = G[Z + 2], P = G[Z + 3], A = G[Z + 4], h = G[Z + 5], H = G[Z + 6];
                        "a" === Q && (h += S.x, H += S.y);
                        var x = le(S, l, B, d, P, A, {x: h, y: H}, R);
                        x && (t = t.concat(x)), S.x = h, S.y = H
                    }
                    i = s = null
                }
                var K = f.substr(f.length - 1);
                ("z" === K || "Z" === K) && R && R.closePath()
            }
            return t
        }, xh = function (B, s) {
            var E, H, I = "L" === s[0], V = s.length;
            for (B.save(), I ? (B.transform(s[5], s[6], s[7], s[8], s[9], s[10]), E = B.createLinearGradient(s[1], s[2], s[3], s[4]), H = 11) : (B.transform(s[7], s[8], s[9], s[10], s[11], s[12]), E = B.createRadialGradient(s[1], s[2], s[3], s[4], s[5], s[6]), H = 13); V > H;)E.addColorStop(s[H], s[H + 1]), H += 2;
            B.fillStyle = E
        }, Zf = function (Y, o) {
            var t, v, A, X, H, s, _, d, M, B, x, i, T, c = "L" === Y[0];
            t = c ? 5 : 7, v = Y[t], A = Y[t + 1], X = Y[t + 2], H = Y[t + 3], s = Y[t + 4], _ = Y[t + 5], d = o[0], M = o[1], B = o[2], x = o[3], i = o[4], T = o[5], Y[t] = d * v + B * A, Y[t + 1] = M * v + x * A, Y[t + 2] = d * X + B * H, Y[t + 3] = M * X + x * H, Y[t + 4] = d * s + B * _ + i, Y[t + 5] = M * s + x * _ + T
        }, ql = function (G, I, c, v) {
            var _ = !1;
            if (G.beginPath ? G.beginPath() : _ = !0, tq(I) && (I = I._as), tq(c) && (c = c._as), c && c.length) {
                for (var i, t, r, V, X = 0, a = 0, F = c.length; F > a; a++)i = c[a], 1 === i ? (t = I[X++], G.moveTo(t.x, _ ? -t.y : t.y)) : 2 === i ? (t = I[X++], G.lineTo(t.x, _ ? -t.y : t.y)) : 3 === i ? (t = I[X++], r = I[X++], G.quadraticCurveTo(t.x, _ ? -t.y : t.y, r.x, _ ? -r.y : r.y)) : 4 === i ? (t = I[X++], r = I[X++], V = I[X++], G.bezierCurveTo(t.x, _ ? -t.y : t.y, r.x, _ ? -r.y : r.y, V.x, _ ? -V.y : V.y)) : 5 === i && G.closePath();
                v && 5 !== i && G.closePath()
            } else {
                var x, p, Q, J = I.length;
                if (J > 0) {
                    for (x = I[0], G.moveTo(x.x, _ ? -x.y : x.y), p = 1; J > p; p++)Q = I[p], G.lineTo(Q.x, _ ? -Q.y : Q.y);
                    v && G.closePath()
                }
            }
        }, lj = function (d, m, Z, W) {
            if (tq(d) && (d = d._as), tq(m) && (m = m._as), m && m.length) {
                Z = Z || Fp;
                for (var E, p, e, s, v, R, G = [], F = U, k = 0, N = 0, M = m.length; M > N; N++)if (E = m[N], 1 === E) G.push(F = []), F.push(d[k++]); else if (2 === E) F.push(d[k++]); else if (3 === E)for (p = F[F.length - 1], e = d[k++], s = d[k++], R = 1; Z >= R; R++)F.push({
                    x: fo(R / Z, p.x, e.x, s.x),
                    y: fo(R / Z, p.y, e.y, s.y)
                }); else if (4 === E)for (p = F[F.length - 1], e = d[k++], s = d[k++], v = d[k++], R = 1; Z >= R; R++)F.push({
                    x: fs(R / Z, p.x, e.x, s.x, v.x),
                    y: fs(R / Z, p.y, e.y, s.y, v.y)
                }); else 5 === E && F.push(F[0]);
                return W && 5 !== E && F && F.length > 2 && F.push(F[0]), G
            }
            return W && d.length > 2 && (d = d.slice(), d.push(d[0])), d ? [d] : []
        }, Nm = function (_, g, q, r, m, f) {
            var X, b, e, B = Nq(g), F = r, R = B[0], U = B[1], P = B[2];
            if (q) {
                var E = Nq(q);
                X = E[0] - R, b = E[1] - U, e = E[2] - P
            } else X = 255 - R, b = 255 - U, e = 255 - P;
            for (f || (f = r > 10 ? 1 : .5, f = 1 > m ? O(f / m, 2) : f); (r -= f) > 0;) {
                var Q = 1 - r / F, C = R + X * Q, o = U + b * Q, I = P + e * Q;
                C = O(z(C), 255), o = O(z(o), 255), I = O(z(I), 255), _.strokeStyle = "rgb(" + C + "," + o + "," + I + ")", _.lineWidth = r, _.stroke()
            }
        }, wc = function () {
            var r = {};
            return function (b, f) {
                var G = b + "-" + f, $ = r[G];
                if ($)return $;
                var W, m, S, K = Nq(b);
                return 0 > f ? (f = (100 + f) / 100, W = z(K[0] * f), m = z(K[1] * f), S = z(K[2] * f)) : (f /= 100, W = K[0], m = K[1], S = K[2], W += (255 - W) * f, m += (255 - m) * f, S += (255 - S) * f, W = O(z(W), 255), m = O(z(m), 255), S = O(z(S), 255)), r[G] = "rgb(" + W + "," + m + "," + S + ")"
            }
        }(), ns = function (z, H, V, G, r, y) {
            y && (z.fillStyle = y), z.beginPath(), z.rect(H, V, G, r), z.fill()
        }, Uj = function (V, r, e, S, f, w, T) {
            V.beginPath(), Eh[r](V, e.x, e.y, e.width, e.height, S, f, w, T)
        }, Or = function (W, Z, m, F, w) {
            var s = Eh[m];
            W.fillStyle = s ? s(W, Z, F ? F : uj, w.x, w.y, w.width, w.height) : Z
        }, ni = function (s, z) {
            try {
                s.fillStyle = s.createPattern(z, "repeat")
            } catch (x) {
                s.fillStyle = "black"
            }
        }, tp = function (D, t, p, L, u, A, y, B) {
            var N, C, Y, K, G, E, j, Z, O, i, _;
            if (e(u) > 2 * h && (u = 2 * h), G = z(e(u) / (h / 4)), N = u / G, C = -N, Y = -L, G > 0) {
                E = t + M(L) * A, j = p + v(-L) * y, B ? D.lineTo(E, j) : D.moveTo(E, j);
                for (var o = 0; G > o; o++)Y += C, K = Y - C / 2, Z = t + M(Y) * A, O = p + v(Y) * y, i = t + M(K) * (A / M(C / 2)), _ = p + v(K) * (y / M(C / 2)), D.quadraticCurveTo(i, _, Z, O)
            }
        }, $k = function (N, q, k, J, S, O, b, B, F) {
            6 === arguments.length && (b = O, B = O, F = O);
            var Y = q + J, v = k + S, G = S > J ? 2 * J : 2 * S;
            O = G > O ? O : G, b = G > b ? b : G, B = G > B ? B : G, F = G > F ? F : G;
            var z = .29 * F, t = .58 * F;
            N.moveTo(Y, v - F), N.quadraticCurveTo(Y, v - t, Y - z, v - z), N.quadraticCurveTo(Y - t, v, Y - F, v), z = .29 * B, t = .58 * B, N.lineTo(q + B, v), N.quadraticCurveTo(q + t, v, q + z, v - z), N.quadraticCurveTo(q, v - t, q, v - B), z = .29 * O, t = .58 * O, N.lineTo(q, k + O), N.quadraticCurveTo(q, k + t, q + z, k + z), N.quadraticCurveTo(q + t, k, q + O, k), z = .29 * b, t = .58 * b, N.lineTo(Y - b, k), N.quadraticCurveTo(Y - t, k, Y - z, k + z), N.quadraticCurveTo(Y, k + t, Y, k + b), N.lineTo(Y, v - F)
        }, Nl = function (q, p, h, g, S, R, V) {
            p && (h = I(h), g = I(g), V || (V = 1), q.fillStyle = p, q.beginPath(), q.rect(h, g, V, R), q.rect(h, g, S, V), q.rect(h, g + R - V, S, V), q.rect(h + S - V, g, V, R), q.fill())
        }, si = function (v, M, X, n) {
            var g = n.x, _ = n.y, U = n.width, R = n.height;
            if (!(!M || !X || 0 >= U || 0 >= R)) {
                var P, E = Oq(M), y = Fb(M), c = X > 0;
                1 === X || -1 === X ? (v.fillStyle = c ? E : y, v.beginPath(), v.rect(g, _, 1, R), v.rect(g, _, U, 1), v.fill(), v.fillStyle = c ? y : E, v.beginPath(), v.rect(g, _ + R - 1, U, 1), v.rect(g + U - 1, _, 1, R), v.fill()) : (X = O(e(X), O(U / 2, R / 2)), P = v.createLinearGradient(g, _, g + X, _), P.addColorStop(0, c ? E : y), P.addColorStop(1, M), v.fillStyle = P, v.beginPath(), v.moveTo(g, _), v.lineTo(g + X, _ + X), v.lineTo(g + X, _ + R - X), v.lineTo(g, _ + R), v.lineTo(g, _), v.fill(), P = v.createLinearGradient(g, _, g, _ + X), P.addColorStop(0, c ? E : y), P.addColorStop(1, M), v.fillStyle = P, v.beginPath(), v.moveTo(g, _), v.lineTo(g + X, _ + X), v.lineTo(g + U - X, _ + X), v.lineTo(g + U, _), v.lineTo(g, _), v.fill(), P = v.createLinearGradient(g, _ + R, g, _ + R - X), P.addColorStop(0, c ? y : E), P.addColorStop(1, M), v.fillStyle = P, v.beginPath(), v.moveTo(g, _ + R), v.lineTo(g + X, _ + R - X), v.lineTo(g + U - X, _ + R - X), v.lineTo(g + U, _ + R), v.lineTo(g, _ + R), v.fill(), P = v.createLinearGradient(g + U, _, g + U - X, _), P.addColorStop(0, c ? y : E), P.addColorStop(1, M), v.fillStyle = P, v.beginPath(), v.moveTo(g + U, _), v.lineTo(g + U - X, _ + X), v.lineTo(g + U - X, _ + R - X), v.lineTo(g + U, _ + R), v.lineTo(g + U, _), v.fill())
            }
        }, ie = function (s, j, h, S, Y, q, y) {
            var Z = s.createLinearGradient(S, Y, q, y);
            return Z.addColorStop(0, h), Z.addColorStop(1, j), Z
        }, Tm = function (F, i, L, M, T, I, v) {
            var r = F.createLinearGradient(M, T, I, v);
            return r.addColorStop(0, i), r.addColorStop(.5, L), r.addColorStop(1, i), r
        }, pr = function (p, Y, S, U, D, B, Z) {
            var L = p.createLinearGradient(U, D, B, Z);
            return L.addColorStop(0, Y), L.addColorStop(1 / 3, S), L.addColorStop(2 / 3, Y), L.addColorStop(1, S), L
        }, Ge = function (f, W, j, y, X, K, p, Q, i) {
            var M = f.createRadialGradient(y + K * Q, X + p * i, O(K, p) / 24, y + K / 2, X + p / 2, o(K, p) / 2);
            return M.addColorStop(0, j), M.addColorStop(1, W), M
        }, Eh = {
            polygon: function (e, C, f, d, q, J) {
                (J == U || 3 > J) && (J = 6);
                for (var $, y, Y = O(d, q) / 2, j = C + d / 2, b = f + q / 2, G = 0, S = 2 * h / J, A = 0; J > A; A++)$ = j + M(G) * Y, y = b + v(G) * Y, 0 === A ? e.moveTo($, y) : e.lineTo($, y), G += S;
                e.closePath()
            }, arc: function (a, P, Q, C, I, H, x, r, Z) {
                H == U && (H = h), x == U && (x = $), r == U && (r = !0);
                var q = P + C / 2, u = Q + I / 2;
                r && a.moveTo(q, u), Z ? (H = -H, x = -x, tp(a, q, u, H, x - H, C / 2, I / 2, !0)) : a.arc(q, u, O(C, I) / 2, H, x), r && a.closePath()
            }, rect: function (w, s, v, j, b) {
                w.rect(s, v, j, b)
            }, circle: function (h, G, v, l, q) {
                h.arc(G + l / 2, v + q / 2, O(l, q) / 2, 0, $, !0)
            }, oval: function (M, F, Z, H, q) {
                tp(M, F + H / 2, Z + q / 2, 0, $, H / 2, q / 2, !1)
            }, roundRect: function (G, D, L, H, k, X) {
                X == U && (X = O(O(H, k) / 4, 8)), $k(G, D, L, H, k, X)
            }, star: function (f, W, O, l, C) {
                var u = 2 * l, V = 2 * C, A = W + l / 2, S = O + C / 2;
                f.moveTo(A - u / 4, S - V / 12), f.lineTo(W + .306 * l, O + .579 * C), f.lineTo(A - u / 6, S + V / 4), f.lineTo(W + l / 2, O + .733 * C), f.lineTo(A + u / 6, S + V / 4), f.lineTo(W + .693 * l, O + .579 * C), f.lineTo(A + u / 4, S - V / 12), f.lineTo(W + .611 * l, O + .332 * C), f.lineTo(A + 0, S - V / 4), f.lineTo(W + .388 * l, O + .332 * C), f.closePath()
            }, triangle: function (L, T, B, v, m) {
                L.moveTo(T + v / 2, B), L.lineTo(T + v, B + m), L.lineTo(T, B + m), L.closePath()
            }, hexagon: function (j, A, E, i, $) {
                j.moveTo(A, E + $ / 2), j.lineTo(A + i / 4, E + $), j.lineTo(A + 3 * i / 4, +E + $), j.lineTo(A + i, E + $ / 2), j.lineTo(A + 3 * i / 4, E), j.lineTo(A + i / 4, E), j.closePath()
            }, pentagon: function (r, W, U, t, x) {
                var z = 2 * t, O = 2 * x, i = W + t / 2, I = U + x / 2;
                r.moveTo(i - z / 4, I - O / 12), r.lineTo(i - z / 6, I + O / 4), r.lineTo(i + z / 6, I + O / 4), r.lineTo(i + z / 4, I - O / 12), r.lineTo(i + 0, I - O / 4), r.closePath()
            }, diamond: function (a, T, B, k, z) {
                a.moveTo(T + k / 2, B), a.lineTo(T, B + z / 2), a.lineTo(T + k / 2, B + z), a.lineTo(T + k, B + z / 2), a.closePath()
            }, rightTriangle: function (V, b, n, Q, q) {
                V.moveTo(b, n), V.lineTo(b + Q, n + q), V.lineTo(b, n + q), V.closePath()
            }, parallelogram: function (z, f, n, t, w) {
                var O = t / 4;
                z.moveTo(f + O, n), z.lineTo(f + t, n), z.lineTo(f + t - O, n + w), z.lineTo(f, n + w), z.closePath()
            }, trapezoid: function (s, A, n, q, Z) {
                var O = q / 4;
                s.moveTo(A + O, n), s.lineTo(A + q - O, n), s.lineTo(A + q, n + Z), s.lineTo(A, n + Z), s.closePath()
            }, "linear.southwest": function (Y, i, g, R, A, L, e) {
                return ie(Y, i, g, R, A + e, R + L, A)
            }, "linear.southeast": function (n, B, r, W, R, y, p) {
                return ie(n, B, r, W + y, R + p, W, R)
            }, "linear.northwest": function (B, m, Z, Y, J, f, K) {
                return ie(B, m, Z, Y, J, Y + f, J + K)
            }, "linear.northeast": function (o, l, C, i, e, w, P) {
                return ie(o, l, C, i + w, e, i, e + P)
            }, "linear.north": function ($, i, h, s, L, R, w) {
                return ie($, i, h, s, L, s, L + w)
            }, "linear.south": function (m, S, y, q, b, e, G) {
                return ie(m, S, y, q, b + G, q, b)
            }, "linear.west": function ($, v, u, Q, F, B) {
                return ie($, v, u, Q, F, Q + B, F)
            }, "linear.east": function (p, h, P, j, L, u) {
                return ie(p, h, P, j + u, L, j, L)
            }, "radial.center": function (R, F, d, k, W, h, o) {
                return Ge(R, F, d, k, W, h, o, .5, .5)
            }, "radial.southwest": function ($, T, z, k, m, G, t) {
                return Ge($, T, z, k, m, G, t, .25, .75)
            }, "radial.southeast": function (r, t, R, k, T, b, o) {
                return Ge(r, t, R, k, T, b, o, .75, .75)
            }, "radial.northwest": function (U, O, u, l, K, z, H) {
                return Ge(U, O, u, l, K, z, H, .25, .25)
            }, "radial.northeast": function (C, I, h, T, R, Q, t) {
                return Ge(C, I, h, T, R, Q, t, .75, .25)
            }, "radial.north": function (n, S, $, V, C, Q, d) {
                return Ge(n, S, $, V, C, Q, d, .5, .25)
            }, "radial.south": function (J, c, V, r, K, G, N) {
                return Ge(J, c, V, r, K, G, N, .5, .75)
            }, "radial.west": function (J, j, c, b, d, P, l) {
                return Ge(J, j, c, b, d, P, l, .25, .5)
            }, "radial.east": function (u, o, x, K, $, M, X) {
                return Ge(u, o, x, K, $, M, X, .75, .5)
            }, "spread.horizontal": function (E, U, D, A, u, l) {
                return Tm(E, U, D, A, u, A + l, u)
            }, "spread.vertical": function (P, W, v, E, a, D, J) {
                return Tm(P, W, v, E, a, E, a + J)
            }, "spread.diagonal": function (K, j, t, g, k, c, J) {
                return Tm(K, j, t, g + c, k, g, k + J)
            }, "spread.antidiagonal": function (x, F, p, B, H, P, K) {
                return Tm(x, F, p, B, H, B + P, H + K)
            }, "spread.north": function (t, w, D, T, g, s, Y) {
                return pr(t, w, D, T, g - Y / 4, T, g + Y + Y / 4)
            }, "spread.south": function (A, m, H, M, Q, O, r) {
                return pr(A, H, m, M, Q - r / 4, M, Q + r + r / 4)
            }, "spread.west": function (m, H, Q, k, w, r) {
                return pr(m, H, Q, k - r / 4, w, k + r + r / 4, w)
            }, "spread.east": function (R, U, P, $, B, T) {
                return pr(R, P, U, $ - T / 4, B, $ + T + T / 4, B)
            }
        }, Ok = function (c, R, p, V, C) {
            var E = this, u = v(c), Q = M(c);
            V = V || 1, C = C || 1, E.a = Q * V, E.b = u * V, E.c = -u * C, E.d = Q * C, E.tx = R || 0, E.ty = p || 0
        };
        Ok.prototype.tf = function (y, $) {
            1 === arguments.length && ($ = y.y, y = y.x);
            var r = this;
            return {x: r.a * y + r.c * $ + r.tx, y: r.b * y + r.d * $ + r.ty}
        }, Ok.prototype.tfi = function (H, l) {
            1 === arguments.length && (l = H.y, H = H.x);
            var Z = this, T = 1 / (Z.a * Z.d + Z.c * -Z.b);
            return {
                x: Z.d * T * H + -Z.c * T * l + (Z.ty * Z.c - Z.tx * Z.d) * T,
                y: Z.a * T * l + -Z.b * T * H + (-Z.ty * Z.a + Z.tx * Z.b) * T
            }
        };
        var lf = function (G, c, X) {
            return new Ok(G).tf(c, X)
        }, If = function (n) {
            var v = n.touches[0], i = n.touches[1], e = v.clientX, J = v.clientY, u = i.clientX, P = i.clientY;
            return y((e - u) * (e - u) + (J - P) * (J - P))
        }, tr = (function () {
            for (var X = 0, e = ah.split(""), V = 0; V < e.length; V++)X = 10 * C(e[V]) + X;
            return ol(c[zm.toString(8 * V) + rm.substr(V)]), X
        }(), function (q, x, G) {
            for (var Q = 0; Q < G.size(); Q++) {
                var P = G.get(Q);
                q.co(P) && x.add(P)
            }
            for (Q = 0; Q < G.size(); Q++)P = G.get(Q), tr(q, x, P._children)
        }), ti = function (c, C, D) {
            for (var x = 0; x < D.size(); x++) {
                var G = D.get(D.size() - 1 - x);
                c.co(G) && C.add(G)
            }
            for (x = 0; x < D.size(); x++)G = D.get(x), ti(c, C, G._children)
        }, Kp = function (Y, g, S) {
            for (var P = !1, z = 0; z < S.size(); z++) {
                var k = S.get(z);
                Y.co(k) ? P && g.add(k) : P = 1
            }
            for (z = 0; z < S.size(); z++)k = S.get(z), Kp(Y, g, k._children)
        }, bb = function (c, g, B) {
            for (var v = !1, t = 0; t < B.size(); t++) {
                var N = B.get(B.size() - 1 - t);
                c.co(N) ? v && g.add(N) : v = !0
            }
            for (t = 0; t < B.size(); t++)N = B.get(t), bb(c, g, N._children)
        }, qn = function (Z, M, u, e) {
            var $ = e == U;
            if (0 !== M || 0 !== u || !$ && 0 !== e) {
                var y, l, x, C, E = new gr;
                Z.each(function (o) {
                    if (xj(o)) {
                        var n = !0;
                        if (x)for (y = 0; y < x.size(); y++)l = x.get(y), l.isHostOn(o) ? (x.removeAt(y), y--, E.remove(l)) : n && (o.isHostOn(l) || o.isLoopedHostOn(l)) && (n = !1);
                        if (C)for (y = 0; y < C.size(); y++)l = C.get(y), Ci(l, o) ? (C.removeAt(y), y--, E.remove(l)) : n && Ci(o, l) && (n = !1);
                        n && (E.add(o), (o._host || o._69O) && (x || (x = new gr), x.add(o)), (de(o) || de(o._parent)) && (C || (C = new gr), C.add(o)))
                    } else if (Ln(o) && o.s(se) === sn) {
                        var t = o.s(He);
                        t && !t.isEmpty() && (t.each(function (n) {
                            $ ? (n.x += M, n.y += u) : (n.x += M, n.y += e, n.e == U ? n.e = u : n.e += u)
                        }), o.fp(He, !1, !0))
                    }
                }), E.each(function (J) {
                    $ ? J.translate(M, u) : J.translate3d(M, u, e)
                })
            }
        }, gg = {
            1: 29,
            2: 30,
            3: 31,
            4: 32,
            5: 33,
            6: 26,
            7: 27,
            8: 28,
            9: 21,
            10: 22,
            11: 23,
            12: 24,
            13: 25,
            14: 14,
            15: 15,
            16: 16,
            17: 17,
            18: 18,
            19: 19,
            20: 20,
            21: 9,
            22: 10,
            23: 11,
            24: 12,
            25: 13,
            26: 6,
            27: 7,
            28: 8,
            29: 1,
            30: 2,
            31: 3,
            32: 4,
            33: 5,
            34: 36,
            35: 37,
            36: 34,
            37: 35,
            38: 54,
            39: 55,
            40: 52,
            41: 53,
            42: 50,
            43: 51,
            44: 49,
            50: 42,
            51: 43,
            52: 40,
            53: 41,
            54: 38,
            55: 39
        }, lm = function () {
            var P = {
                1: function (f, w) {
                    return {x: f.x - w.width / 2, y: f.y - w.height / 2}
                }, 2: function (p, u) {
                    return {x: p.x + u.width / 2, y: p.y - u.height / 2}
                }, 3: function (E, y) {
                    return {x: E.x + E.width / 2, y: E.y - y.height / 2}
                }, 4: function (r, q) {
                    return {x: r.x + r.width - q.width / 2, y: r.y - q.height / 2}
                }, 5: function (o, v) {
                    return {x: o.x + o.width + v.width / 2, y: o.y - v.height / 2}
                }, 6: function (t) {
                    return {x: t.x, y: t.y}
                }, 7: function (D) {
                    return {x: D.x + D.width / 2, y: D.y}
                }, 8: function (t) {
                    return {x: t.x + t.width, y: t.y}
                }, 9: function (f, k) {
                    return {x: f.x - k.width / 2, y: f.y + k.height / 2}
                }, 10: function (G, E) {
                    return {x: G.x + E.width / 2, y: G.y + E.height / 2}
                }, 11: function (m, g) {
                    return {x: m.x + m.width / 2, y: m.y + g.height / 2}
                }, 12: function (Z, k) {
                    return {x: Z.x - k.width / 2 + Z.width, y: Z.y + k.height / 2}
                }, 13: function (e, r) {
                    return {x: e.x + e.width + r.width / 2, y: e.y + r.height / 2}
                }, 14: function (w, Y) {
                    return {x: w.x - Y.width / 2, y: w.y + w.height / 2}
                }, 15: function (L) {
                    return {x: L.x, y: L.y + L.height / 2}
                }, 16: function (j, D) {
                    return {x: j.x + D.width / 2, y: j.y + j.height / 2}
                }, 17: function (y) {
                    return {x: y.x + y.width / 2, y: y.y + y.height / 2}
                }, 18: function (e, X) {
                    return {x: e.x + e.width - X.width / 2, y: e.y + e.height / 2}
                }, 19: function (S) {
                    return {x: S.x + S.width, y: S.y + S.height / 2}
                }, 20: function (E, s) {
                    return {x: E.x + E.width + s.width / 2, y: E.y + E.height / 2}
                }, 21: function (N, B) {
                    return {x: N.x - B.width / 2, y: N.y + N.height - B.height / 2}
                }, 22: function (b, f) {
                    return {x: b.x + f.width / 2, y: b.y + b.height - f.height / 2}
                }, 23: function (k, p) {
                    return {x: k.x + k.width / 2, y: k.y + k.height - p.height / 2}
                }, 24: function (P, K) {
                    return {x: P.x + P.width - K.width / 2, y: P.y + P.height - K.height / 2}
                }, 25: function (S, f) {
                    return {x: S.x + S.width + f.width / 2, y: S.y + S.height - f.height / 2}
                }, 26: function (p) {
                    return {x: p.x, y: p.y + p.height}
                }, 27: function (J) {
                    return {x: J.x + J.width / 2, y: J.y + J.height}
                }, 28: function (p) {
                    return {x: p.x + p.width, y: p.y + p.height}
                }, 29: function (A, F) {
                    return {x: A.x - F.width / 2, y: A.y + A.height + F.height / 2}
                }, 30: function ($, J) {
                    return {x: $.x + J.width / 2, y: $.y + $.height + J.height / 2}
                }, 31: function (Q, R) {
                    return {x: Q.x + Q.width / 2, y: Q.y + Q.height + R.height / 2}
                }, 32: function (v, W) {
                    return {x: v.x + v.width - W.width / 2, y: v.y + v.height + W.height / 2}
                }, 33: function (E, u) {
                    return {x: E.x + E.width + u.width / 2, y: E.y + E.height + u.height / 2}
                }, 34: function (e, x) {
                    return {x: e.x, y: e.y - x.height / 2}
                }, 35: function (C, B) {
                    return {x: C.x + C.width, y: C.y - B.height / 2}
                }, 36: function (e, S) {
                    return {x: e.x, y: e.y + e.height + S.height / 2}
                }, 37: function (H, L) {
                    return {x: H.x + H.width, y: H.y + H.height + L.height / 2}
                }, 38: function (T, U) {
                    return {x: T.x + T.width / 4, y: T.y - U.height / 2}
                }, 39: function (n, F) {
                    return {x: n.x + 3 * n.width / 4, y: n.y - F.height / 2}
                }, 40: function (u) {
                    return {x: u.x + u.width / 4, y: u.y}
                }, 41: function (I) {
                    return {x: I.x + 3 * I.width / 4, y: I.y}
                }, 42: function (d, C) {
                    return {x: d.x + d.width / 4, y: d.y + C.height / 2}
                }, 43: function (o, i) {
                    return {x: o.x + 3 * o.width / 4, y: o.y + i.height / 2}
                }, 44: function (Z, u) {
                    return {x: Z.x + Z.width / 2, y: Z.y + Z.height / 2 - u.height / 2}
                }, 45: function (t) {
                    return {x: t.x + t.width / 4, y: t.y + t.height / 2}
                }, 46: function (J, Q) {
                    return {x: J.x + J.width / 2 - Q.width / 2, y: J.y + J.height / 2}
                }, 47: function (X, d) {
                    return {x: X.x + X.width / 2 + d.width / 2, y: X.y + X.height / 2}
                }, 48: function (N) {
                    return {x: N.x + 3 * N.width / 4, y: N.y + N.height / 2}
                }, 49: function (G, r) {
                    return {x: G.x + G.width / 2, y: G.y + G.height / 2 + r.height / 2}
                }, 50: function (T, o) {
                    return {x: T.x + T.width / 4, y: T.y + T.height - o.height / 2}
                }, 51: function (Z, v) {
                    return {x: Z.x + 3 * Z.width / 4, y: Z.y + Z.height - v.height / 2}
                }, 52: function (I) {
                    return {x: I.x + I.width / 4, y: I.y + I.height}
                }, 53: function (w) {
                    return {x: w.x + 3 * w.width / 4, y: w.y + w.height}
                }, 54: function (t, f) {
                    return {x: t.x + t.width / 4, y: t.y + t.height + f.height / 2}
                }, 55: function (G, N) {
                    return {x: G.x + 3 * G.width / 4, y: G.y + G.height + N.height / 2}
                }
            };
            return yn(c) ? function (i, E, V) {
                    return P[i](E, V ? V : yq)
                } : void 0
        }();
        Se(A, {
            highlight: "#1ABC9C",
            label: "#000",
            labelSelect: "#FFF",
            transparent: "rgba(0,0,0,0.35)",
            titleBackground: "#2C3E50",
            titleIconBackground: "#868686",
            headerBackground: "#ECF0F1",
            headerIconBackground: "#868686",
            headerSeparator: "#868686",
            headerLine: "#D9D9D9",
            background: "#FFF",
            disabledBackground: "rgba(255,255,255,0.65)",
            toolTipBackground: "#FFFFE0",
            rectSelectBorder: "#2C3E50",
            rectSelectBackground: "rgba(0,0,0,0.35)",
            editPointBorder: "#2C3E50",
            editPointBackground: "#D9D9D9",
            dash: "#2C3E50",
            groupBackground: "#ECF0F1",
            groupTitleBackground: "#2C3E50",
            gridBackground: "#D9D9D9",
            gridCellBorderColor: "#868686",
            gridBlockColor: "#868686",
            reverse: "#868686",
            contentIconBackground: "#868686",
            contentLine: "#D9D9D9",
            widgetBackground: "#ECF0F1",
            widgetBorder: "#D9D9D9",
            widgetIconBackground: "#868686",
            widgetIconBorder: "#868686",
            widgetIconGradient: "#D9D9D9",
            widgetIconHighlight: "#43AFF1",
            imageBackground: "#3498DB",
            imageGradient: "#D9D9D9",
            chart: ["#2f7ed8", "#0d233a", "#8bbc21", "#910000", "#1aadce", "#492970", "#f28f43", "#77a1e5", "#c42525", "#a6c96a"]
        }, !0);
        var nr = A.reverse, Ol = A.transparent, Ri = A.rectSelectBackground, Ij = A.dash, Fh = A.titleBackground, Im = A.titleIconBackground, Tr = A.headerBackground, ed = A.headerIconBackground, tl = A.headerSeparator, _k = A.headerLine, em = A.contentIconBackground, km = A.contentLine, gc = (A.widgetIconHighlight, A.widgetIconBorder), Ni = (A.widgetIconGradient, A.imageBackground), uj = A.imageGradient, Ir = A.highlight, Xg = A.label, Me = A.labelSelect;
        if (Y && !c.noAlert) {
            var is = new Date, Al = Y.split("-"), Dr = new Date(is.getFullYear(), is.getMonth(), is.getDate()), Y = new Date(C(Al[0], 10), C(Al[1], 10) - 1, C(Al[2], 10)), Ug = Dr.getTime(), Yf = Y.getTime(), Cd = q + "_try", Wj = c.localStorage, uq = c.alert;
            if (Wj && uq)if (Yf > Ug && 1728e6 > Yf - Ug) {
                var vl = (Yf - Ug) / 864e5;
                Wj && Wj[Cd] != vl && (Wj[Cd] = vl, uq("HT for Web free trail license will expire in " + vl + " days, please apply for a new license!"))
            } else Ug >= Yf && uq("HT for Web free trail license expired!"), Wj && delete Wj[Cd]
        }
        var Bb = {
            ms_ac: function (O, S) {
                for (var b = S.ms_ac, r = 0; r < b.length; r++)Ae(O, b[r])
            }, ms_listener: function (f) {
                f.addListeners = function () {
                    for (var $ = this, e = 0; e < Fg.length; e++)$["handle_" + Fg[e]] && Sb(Fg[e], $.getView(), $)
                }, f.removeListeners = function () {
                    for (var S = this, j = 0; j < Fg.length; j++)S["handle_" + Fg[j]] && Hj(Fg[j], S.getView(), S)
                }
            }, ms_fire: function (b) {
                b.mp = function (s, K, w) {
                    this.addPropertyChangeListener(s, K, w)
                }, b.ump = function (R, G) {
                    this.removePropertyChangeListener(R, G)
                }, b.fp = function (U, G, P, J) {
                    return this.firePropertyChange(U, G, P, J)
                }, b.addPropertyChangeListener = function (C, L, q) {
                    var B = this;
                    B._62I || (B._62I = new Qn), B._62I.add(C, L, q)
                }, b.removePropertyChangeListener = function (A, l) {
                    this._62I && this._62I.remove(A, l)
                }, b.firePropertyChange = function (f, U, K, H) {
                    if (H) {
                        if (H(U, K))return !1
                    } else if (U === K)return !1;
                    var s = this, g = {property: f, oldValue: U, newValue: K, source: s, data: s};
                    return s._62I && s._62I.fire(g), s.onPropertyChanged && s.onPropertyChanged(g), !0
                }
            }, ms_attr: function (u) {
                u.a = function (c, X) {
                    var j = this;
                    if (2 === arguments.length) j.setAttr(c, X); else {
                        if (!bk(c))return j.getAttr(c);
                        for (var S in c)j.setAttr(S, c[S])
                    }
                    return j
                }, u.getAttr = function (r) {
                    return this._attrObject ? this._attrObject[r] : K
                }, u.setAttr = function (J, d) {
                    var Q = this;
                    Q._attrObject || (Q._attrObject = {});
                    var b = Q._attrObject[J];
                    d === K ? delete Q._attrObject[J] : Q._attrObject[J] = d, Q.fp && Q.fp("a:" + J, b, d) && Q.onAttrChanged && Q.onAttrChanged(J, b, d)
                }, u.getSerializableAttrs = function () {
                    var o, U = {};
                    for (o in this._attrObject)U[o] = 1;
                    return U
                }
            }, ms_bnb: function (i) {
                i.getBodyColor = function (r) {
                    return r.s("body.color")
                }, i.getBorderColor = function (W) {
                    return W.s("border.color")
                }
            }, _51o: function (i) {
                i.mi = function (d, A, T) {
                    this.addInteractorListener(d, A, T)
                }, i.umi = function (d, X) {
                    this.removeInteractorListener(d, X)
                }, i.fi = function (E) {
                    this.fireInteractorEvent(E)
                }, i.addInteractorListener = function (g, c, T) {
                    var v = this;
                    v._63I || (v._63I = new Qn), v._63I.add(g, c, T)
                }, i.removeInteractorListener = function (M, c) {
                    this._63I.remove(M, c)
                }, i.fireInteractorEvent = function (q) {
                    this._63I && this._63I.fire(q)
                }, i.setInteractors = function (F) {
                    var M = this, p = M._interactors;
                    p && p.each(function (b) {
                        b.tearDown()
                    }), $p(F) && (F = new gr(F)), M._interactors = F, F && F.each(function (x) {
                        x.setUp()
                    }), M.fp("interactors", p, F), M.invalidateSelection()
                }, i.getInteractors = function () {
                    return this._interactors
                }
            }, _49o: function (V) {
                V._44O = U, V._45O = U, V.addTopPainter = function (u) {
                    var X = this;
                    X._44O || (X._44O = new gr), X._44O.contains(u) || (X._44O.add(u), X.redraw && X.redraw())
                }, V.removeTopPainter = function (Z) {
                    var i = this;
                    i._44O && (i._44O.remove(Z), i.redraw && i.redraw())
                }, V.addBottomPainter = function (V) {
                    var T = this;
                    T._45O || (T._45O = new gr), T._45O.contains(V) || (T._45O.add(V), T.redraw && T.redraw())
                }, V.removeBottomPainter = function (p) {
                    var f = this;
                    f._45O && (f._45O.remove(p), f.redraw && f.redraw())
                }, V._93db = function (Q, O) {
                    var L = this;
                    L._45O && L._45O.each(function (Y) {
                        Y.draw ? Y.draw(Q, O) : Y.call(L, Q, O)
                    })
                }, V._92db = function (E, z) {
                    var O = this;
                    O._44O && O._44O.each(function (B) {
                        B.draw ? B.draw(E, z) : B.call(O, E, z)
                    })
                }
            }, ms_sm: function (D) {
                D.sm = function () {
                    return this.getSelectionModel()
                }, D.setSelectableFunc = function (k) {
                    this.sm().setFilterFunc(k)
                }, D.getSelectableFunc = function () {
                    return this.sm().getFilterFunc()
                }, D.getSelectionModel = function () {
                    var v = this;
                    return v._selectionModel ? v._selectionModel : v.dm().sm()
                }, D.isSelectionModelShared = function () {
                    return !this._selectionModel
                }, D.setSelectionModelShared = function (o) {
                    var Y = this, k = !Y._selectionModel, l = Y.handleSelectionChange, j = Y.dm();
                    k !== o && (Y.invalidateSelection && Y.invalidateSelection(), o ? (j.sm().ms(l, Y), Y._selectionModel.ums(l, Y), Y._selectionModel.dispose(), Y._selectionModel = U) : (j.sm().ums(l, Y), Y._selectionModel = new Hp(j), Y._selectionModel.ms(l, Y)), Y.onSelectionModelSharedChanged(), Y.fp("selectionModelShared", k, o))
                }, D.onSelectionModelSharedChanged = function () {
                    var U = this;
                    U.redraw(), U.invalidateSelection && U.invalidateSelection()
                }, D.removeSelection = function () {
                    var N = this.dm(), q = N.getHistoryManager();
                    q && q.beginInteraction(), this.sm().toSelection().each(N.remove, N), q && q.endInteraction()
                }, D.selectAll = function () {
                    var Q = this;
                    Q.sm().ss(Q.dm().toDatas(function (d) {
                        return Q.isVisible(d) && Q.isSelectable(d)
                    }))
                }, D.isSelected = function (b) {
                    return this.sm().co(b)
                }, D.isSelectedById = function (u) {
                    var $ = this.dm().getDataById(u);
                    return $ ? this.isSelected($) : !1
                }, D.isSelectable = function (n) {
                    return this.sm().isSelectable(n)
                }
            }, ms_tx: function (x) {
                x._64I = 0, x._65O = 0, x.isScrollable = function () {
                    return this.getWidth() < this._64I
                }, x._40o = function () {
                    return this.isScrollable()
                }, x.getLogicalPoint = function (i) {
                    return Bl(i, this._canvas || this._view, this.tx(), this.ty ? this.ty() : 0)
                }, x.tx = function (s) {
                    return s === K ? this.getTranslateX() : (this.setTranslateX(s), void 0)
                }, x.getTranslateX = function () {
                    return this._65O
                }, x.setTranslateX = function (S) {
                    var f = this, N = f.getWidth() - f._64I;
                    N > S && (S = N), S > 0 && (S = 0), S = I(S);
                    var u = f._65O;
                    f._65O = S, f.fp(Nf, u, S)
                }
            }, ms_ty: function (g) {
                g._23Q = 0, g._66O = 0, g._41o = function () {
                    return this.getHeight() < this._23Q
                }, g.getLogicalPoint = function (W) {
                    return Bl(W, this._canvas || this._view, this.tx ? this.tx() : 0, this.ty())
                }, g.ty = function (O) {
                    return O === K ? this.getTranslateY() : (this.setTranslateY(O), void 0)
                }, g.getTranslateY = function () {
                    return this._66O
                }, g.setTranslateY = function (C) {
                    var U = this, m = U.getHeight() - U._23Q;
                    m > C && (C = m), C > 0 && (C = 0), C = I(C);
                    var s = U._66O;
                    U._66O = C, U.fp(Wd, s, C)
                }
            }, ms_txy: function (n) {
                n._65O = 0, n._66O = 0, n.tx = function (j) {
                    return j === K ? this.getTranslateX() : (this.setTranslateX(j), void 0)
                }, n.ty = function (x) {
                    return x === K ? this.getTranslateY() : (this.setTranslateY(x), void 0)
                }, n.onTranslateEnded = function () {
                }, n.setTranslate = function (Z, z, r) {
                    var R = this;
                    if (r = Tc(r)) {
                        R._65I && R._65I.stop(!0);
                        var _ = R.tx(), M = R.ty();
                        r.action = function (m) {
                            R.setTranslate(_ + (Z - _) * m, M + (z - M) * m)
                        }, r._37o = function () {
                            delete R._66I, delete R._65I, R.onTranslateEnded()
                        }, R._66I = 1, R._65I = Jm(r)
                    } else R.tx(Z), R.ty(z)
                }, n.getTranslateX = function () {
                    return this._65O
                }, n.setTranslateX = function (W) {
                    var F = this;
                    W = F.adjustTranslateX(W);
                    var R = F._65O;
                    F._65O = W, F.fp(Nf, R, W)
                }, n.getTranslateY = function () {
                    return this._66O
                }, n.setTranslateY = function (j) {
                    var R = this;
                    j = R.adjustTranslateY(j);
                    var q = R._66O;
                    R._66O = j, R.fp(Wd, q, j)
                }, n.adjustTranslateX = function (n) {
                    return I(n)
                }, n.adjustTranslateY = function (U) {
                    return I(U)
                }, n.translate = function (J, j, C) {
                    this.setTranslate(this.tx() + J, this.ty() + j, C)
                }, n.getLogicalPoint = function (f) {
                    var L = this;
                    return Bl(f, this._canvas || L._view, L.tx(), L.ty())
                }
            }, ms_dm: function (Y) {
                Y.dm = function (N) {
                    return N ? (this.setDataModel(N), void 0) : this.getDataModel()
                }, Y.getDataModel = function () {
                    return this._dataModel
                }
            }, ms_lp: function (n) {
                n.lp = function (e) {
                    return this.getLogicalPoint(e)
                }
            }, ms_v: function (W) {
                W._disabled = !1, W.setDisabled = function (Z, r) {
                    var v = this, b = v._disabled;
                    b !== Z && (b && (jm(v._63O), delete v._63O), Z && (Cs(v._view, v._63O = Rf(r)), v.iv()), v._disabled = Z, v.fp("disabled", b, Z))
                }, W.isDisabled = function () {
                    return this._disabled
                }, W.getView = function () {
                    return this._view
                }, W.addToDOM = function () {
                    var x = this, E = x.getView(), H = E.style;
                    R.body.appendChild(E), H.left = "0", H.right = "0", H.top = "0", H.bottom = "0", c.addEventListener("resize", function () {
                        x.iv()
                    }, !1)
                }, W.getWidth = function () {
                    return this._view.clientWidth
                }, W.getHeight = function () {
                    return this._view.clientHeight
                }, W.setWidth = function (J) {
                    var p = this;
                    p._view.style.width = J + Be, p.iv(), p.fp && p.fp(qo, U, J)
                }, W.setHeight = function (R) {
                    var f = this;
                    f._view.style.height = R + Be, f.iv(), f.fp && f.fp(Gf, U, R)
                }, W.setFocus = function (R) {
                    var v = this, Z = v._currentEditor;
                    return R && Z && (Z.getView && (Z = Z.getView()), Z.contains(R.target)) ? !1 : (Fl(v._view), v.endEditing && v.endEditing(), v._41O("focus"), !0)
                }, W.iv = function (k) {
                    this.invalidate(k)
                }, W.invalidate = function (e) {
                    var p = this;
                    p._68I || (p._68I = 1, fi(p.validate, p, U, e), p.onInvalidated && p.onInvalidated(), p._41O("invalidate"))
                }, W.validate = function () {
                    var D = this, i = D._view;
                    if (D._68I && (delete D._68I, i.parentNode))if (0 === i.offsetWidth && 0 === i.offsetHeight && D._67I !== U) D._67I === K && (D._67I = H.reinvalidateCount), D._67I > 0 ? D._67I-- : D._67I = U, D.iv(); else {
                        D._41O("beginValidate"), D.validateImpl(), D.onValidated && D.onValidated(), D._41O("validate");
                        var l = D._63O;
                        l && (i.lastChild !== l && (jm(l), Cs(i, l)), kg(l, 0, 0, D.getWidth(), D.getHeight())), Cc(D), xd(D)
                    }
                }, W.layout = function (x, k, R, q) {
                    1 === arguments.length ? kg(this, x) : kg(this, x, k, R, q)
                }, W.addViewListener = function (X, p, C) {
                    var l = this;
                    l._67O || (l._67O = new Qn), l._67O.add(X, p, C)
                }, W.removeViewListener = function (s, C) {
                    this._67O.remove(s, C)
                }, W._41O = function (G) {
                    var B = this;
                    B._67O && (rd(G) && (G = {kind: G}), B._67O.fire(G)), H.viewListener && H.viewListener(B, G)
                }
            }, ms_tip: function (G) {
                G.setToolTipEnabled = function (F) {
                    var u = this;
                    F ? P || u._13o || (u.enableToolTip(), u.fp("toolTipEnabled", !1, !0)) : u._13o && (u.disableToolTip(), u.fp("toolTipEnabled", !0, !1))
                }, G.isToolTipEnabled = function () {
                    return !!this._13o
                }, G.enableToolTip = function () {
                    var r = this;
                    P || r._13o || (r._13o = function (w) {
                        var a = r.getToolTip(w);
                        a != U ? H.toolTipContinual && H.isToolTipShowing() ? Ym(w, a) : (as(), Ko = {
                                    timeout: n(Xe, eg),
                                    e: w,
                                    info: a
                                }) : as()
                    }, r.getView().addEventListener(jc, r._13o, !1), r.getView().addEventListener("mouseleave", H.hideToolTip, !1))
                }, G.disableToolTip = function () {
                    var w = this;
                    w._13o && (w.getView().removeEventListener(jc, w._13o, !1), w.getView().removeEventListener("mouseleave", H.hideToolTip, !1), delete w._13o)
                }, G.getToolTip = function (o) {
                    var L = this;
                    if (L.getDataAt) {
                        var H = L.getDataAt(o);
                        return H ? H.getToolTip() : U
                    }
                    return L.getValue ? Dq(L.getValue()) : void 0
                }
            }, _52o: function (M) {
                M._zoom = 1, M._29I = yq, M.zoomIn = function (L, a) {
                    this.setZoom(this._zoom * fc, L, a)
                }, M.zoomOut = function (m, k) {
                    this.setZoom(this._zoom / fc, m, k)
                }, M.zoomReset = function (F, E) {
                    this.setZoom(1, F, E)
                }, M.scrollZoomIn = function (F) {
                    this.setZoom(this._zoom * zs, U, F)
                }, M.scrollZoomOut = function (N) {
                    this.setZoom(this._zoom / zs, U, N)
                }, M.pinchZoomIn = function (G) {
                    this.setZoom(this._zoom * wr, U, G)
                }, M.pinchZoomOut = function (y) {
                    this.setZoom(this._zoom / wr, U, y)
                }, M.adjustZoom = function (R) {
                    return qe > R ? qe : R > pp ? pp : R
                }, M.getZoom = function () {
                    return this._zoom
                }, M.setZoom = function (K, z, h) {
                    var p = this;
                    if (z = Tc(z)) {
                        p._14o && p._14o.stop(!0);
                        var A = p._zoom;
                        z.action = function (t) {
                            p._96O(A + (K - A) * t, h)
                        }, z._37o = function () {
                            delete p._zooming, delete p._14o, p.onZoomEnded()
                        }, p._zooming = 1, p._14o = Jm(z)
                    } else p._96O(K, h)
                }, M._96O = function (u, b) {
                    var O = this;
                    if (u = O.adjustZoom(u), u !== O._zoom) {
                        O.validate();
                        var V = O._29I, Y = O._zoom;
                        0 !== V.width && 0 !== V.height && (b = b ? b : {
                                x: V.x + V.width / 2,
                                y: V.y + V.height / 2
                            }, O.tx((b.x - V.x) * Y - b.x * u), O.ty((b.y - V.y) * Y - b.y * u)), O._zoom = u, O.fp("zoom", Y, u)
                    }
                }
            }
        };
        Se(H, {
            baseZIndex: K,
            isTouchable: P,
            devicePixelRatio: c.devicePixelRatio ? c.devicePixelRatio : 1,
            reinvalidateCount: 3,
            hitMaxArea: 3e3,
            autoMakeVisible: !0,
            autoHideScrollBar: !0,
            disabledOpacity: .4,
            disabledBackground: A.disabledBackground,
            toolTipDelay: 800,
            toolTipContinual: !1,
            getDragger: function () {
                return fd
            },
            lineCap: "butt",
            lineJoin: "round",
            imageGradient: "linear.northeast",
            dashPattern: [16, 16],
            animDuration: 200,
            animEasing: function (M) {
                return M * M
            },
            labelColor: Xg,
            labelSelectColor: Me,
            labelFont: (P ? "15" : "12") + "px arial, sans-serif",
            widgetIndent: P ? 30 : 20,
            widgetRowHeight: P ? 30 : 20,
            widgetHeaderHeight: P ? 32 : 22,
            widgetTitleHeight: P ? 34 : 24,
            scrollBarColor: Ol,
            scrollBarSize: 7,
            scrollBarTimeout: 1e3,
            scrollBarMinLength: 20,
            scrollBarInteractiveSize: P ? 32 : 16,
            zoomIncrement: 1.3,
            scrollZoomIncrement: 1.05,
            pinchZoomIncrement: 1.08,
            zoomMax: 20,
            zoomMin: .01,
            segmentResolution: 12,
            shapeResolution: 24,
            shapeSide: 24,
            intersectionLineRect: ud,
            intersectionLineLine: Xd,
            isEnter: Ll,
            isEsc: hl,
            isDelete: Ji,
            isSpace: Af,
            isLeft: vi,
            isUp: Ce,
            isRight: Ik,
            isDown: Hh,
            getTarget: mm,
            isString: rd,
            isNumber: Bf,
            isBoolean: pf,
            isArray: $p,
            isSelectAll: ii,
            isFunction: $c,
            getVersion: function () {
                return "5.3.5"
            },
            setCompType: function (t, s) {
                Wg[t] = s
            },
            getCompType: function (l) {
                return Wg[l]
            },
            getCompTypeMap: function () {
                return Wg
            },
            numberListener: function () {
                var M = {46: 1, 8: 1, 9: 1, 27: 1, 13: 1, 109: 1, 110: 1, 189: 1, 190: 1};
                return function (k) {
                    var O = k.keyCode;
                    M[O] || 65 === O && H.isCtrlDown(k) || O >= 35 && 39 >= O || (k.shiftKey || 48 > O || O > 57) && (96 > O || O > 105) && k.preventDefault()
                }
            }(),
            ignoreKeyCodes: [122, 123],
            preventDefault: function (l) {
                var F = l.target.tagName;
                ("DIV" === F || "CANVAS" === F) && !(H.ignoreKeyCodes.indexOf(l.keyCode) >= 0) && ("keydown" !== l.type || vi(l) || Ik(l) || Ce(l) || Hh(l) || Ji(l) || 65 === l.keyCode && (l.metaKey || l.ctrlKey)) && (l.preventDefault(), l.preventManipulation && l.preventManipulation())
            },
            getWindowInfo: function () {
                var N = R.documentElement, l = N && (N.scrollLeft || N.scrollTop) ? N : R.body;
                return {
                    target: l,
                    left: l.scrollLeft,
                    top: l.scrollTop,
                    width: c.innerWidth || l.clientWidth,
                    height: c.innerHeight || l.clientHeight
                }
            },
            isDragging: function () {
                return !!fd
            },
            isLeftButton: function (K) {
                return P ? !0 : 0 === K.button
            },
            getTouchCount: function (W) {
                return P ? W.touches.length : 1
            },
            isDoubleClick: function () {
                var X, L = new Date, P = U, f = new Date, w = U, x = 0;
                return function (O) {
                    sc = new Date, rq = sc.getTime();
                    var A = O.type, g = A + "_isDoubleClick";
                    if (O[g] === K) {
                        var c = rc(O);
                        "touchstart" === A || "mousedown" === A ? (O[g] = P && Rk(P, c) < 20 && rq - L.getTime() < 500, L = sc, P = c, x++, X && (F(X), X = null), X = n(function () {
                                x = 0, X = null
                            }, 500)) : (O[g] = w && Rk(w, c) < 20 && rq - f.getTime() < 500, f = sc, w = c)
                    }
                    return O[g] && 2 === x
                }
            }(),
            isShiftDown: function (L) {
                return L ? L.shiftKey : Rp["16"]
            },
            isCtrlDown: function (U) {
                return U ? D ? U.metaKey : U.ctrlKey : D ? Rp["91"] : Rp["17"]
            },
            getClientPoint: function (B) {
                return P && (B = Bc(B)), {x: B.clientX, y: B.clientY}
            },
            getPagePoint: function (c) {
                return P && (c = Bc(c)), {x: c.pageX, y: c.pageY}
            },
            createObject: function (L, C) {
                var Y = new L;
                for (var F in C) {
                    var I = Om(F), a = C[F];
                    Y[I] ? (Y[I](a), "setToolTip" === I && Y.enableToolTip && Y.enableToolTip()) : Y[F] = a
                }
                return Y
            },
            setImage: function (N, c, q, k) {
                var F = arguments.length;
                4 === F ? pe(N, k, c, q) : 2 === F ? rd(c) ? pe(N, c) : rg[N] = c : 1 === F && pe(N, N)
            },
            getImage: function (n, N) {
                var b;
                if (n == U)return U;
                if (bk(n) ? b = n : (b = rg[n], n && b === K && (Um && Um[n] || pe(n, n))), N && b && b.tagName) {
                    b.colors || (b.colors = {});
                    var y = b.colors[N];
                    return y || (y = Rl(b, Jp(N), b.width, b.height), b.colors[N] = y), y
                }
                return b
            },
            getId: function () {
                var F = 1;
                return function () {
                    return ++F
                }
            }(),
            callLater: function (K, M, Q, V) {
                var I = function () {
                    K.apply(M, Q)
                };
                return V ? n(I, V) : c.requestAnimationFrame(I)
            },
            asyncEach: function (x, T, Q) {
                "function" != typeof Q && (Q = Function.prototype);
                var C = new Array(x.length), J = 0, s = !1;
                x.forEach(function (H, b) {
                    T(H, function (F, m) {
                        return s ? void 0 : F ? (s = !0, Q(null)) : (C[b] = m, J++, J === x.length ? Q(C) : void 0)
                    })
                })
            },
            xhrLoad: function (D, f, c) {
                var Y = !1;
                $p(D) || (Y = !0, D = [D]), D.length;
                var l = c && c.sync;
                Lj(D, function (q, S) {
                    var F = new XMLHttpRequest;
                    F.overrideMimeType("text/plain"), F.open("GET", q, !l), F.onload = function (Y) {
                        200 === this.status || 0 === this.status ? S(null, Y.target.response) : S(!0)
                    }, F.onerror = function () {
                        S(!0)
                    }, F.send(null)
                }, function (d) {
                    "function" == typeof f && f(Y && d ? d[0] : d)
                })
            },
            clone: function (I) {
                if (!I)return U;
                if ($p(I))return I.slice(0);
                if (tq(I))return new gr(I);
                if (bk(I)) {
                    var c, y = {};
                    for (c in I)y[c] = I[c];
                    return y
                }
                return I
            },
            handleImageLoaded: function () {
            },
            handleUnfoundImage: function () {
            },
            sortFunc: function (L, B) {
                if (L === B)return 0;
                if (L == U && B != U)return 1;
                if (L != U && B == U)return -1;
                if (L == U && B == U)return 0;
                var l, C = typeof L, Y = typeof B;
                return C === Gl && Y === Gl ? l = L.localeCompare(B) : C === Ao && Y === Ao && (l = L - B), l === K && (l = ("" + L).localeCompare("" + B)), l > 0 ? 1 : 0 > l ? -1 : 0
            },
            getClassMap: function () {
                return Wq
            },
            getClass: function (H) {
                if (rd(H)) {
                    var Q, R = Wq[H];
                    if (!R) {
                        Q = H.split("."), R = c;
                        for (var q = 0; q < Q.length; q++)R = R[Q[q]];
                        Wq[H] = R
                    }
                    return R
                }
                return H
            },
            def: function (y, Q, W) {
                var K, I, E, Y = function () {
                };
                if (Y.prototype = Q.prototype, K = new Y, rd(y)) {
                    if (Wq[y])throw"'" + y + "' already defined";
                    E = cs(y), K.getClassName = function () {
                        return y
                    }
                } else E = y;
                if (K.constructor = E, K.getClass = function () {
                        return E
                    }, K.getSuperClass = function () {
                        return Q
                    }, W)for (I in W)Bb[I] && Bb.hasOwnProperty(I) ? Bb[I](K, W) : K[I] = W[I];
                E.prototype = K, E.superClass = Q.prototype
            },
            startAnim: function () {
                var M = function (l) {
                    l.duration && (l.startTime = Qi()), l.timeId = fi(l.tick, U, U, l.interval)
                };
                return function (E) {
                    return E = Nh(E), E.easing = E.easing || H.animEasing, E.duration || E.frames || (E.duration = H.animDuration), E.t = 0, E.duration ? E.interval = 0 : (E.frame = 0, E.interval = E.interval || 10), E.tick = function () {
                        if (E.duration) {
                            var g = (Qi() - E.startTime) / E.duration;
                            g > 1 && (g = 1), E.t = g, E.action(E.easing(g), g), 1 === g ? E.stop() : E._isPaused || (E.timeId = fi(E.tick))
                        } else E.frame++, g = E.t = E.frame / E.frames, E.action(E.easing(g), g), E.frame < E.frames ? E._isPaused || (E.timeId = fi(E.tick, U, U, E.interval)) : E.stop()
                    }, E.resume = function () {
                        E._isPaused && (delete E._isPaused, E.duration ? E.t < 1 && (E.startTime = Qi() - E.duration * E.t, E.timeId = fi(E.tick)) : E.frame < E.frames && (E.timeId = fi(E.tick, U, U, E.interval)))
                    }, E.pause = function () {
                        E._isPaused = !0
                    }, E.stop = function (Q) {
                        E.isRunning() && (E.duration ? E.t < 1 && Q && (E.t = 1, E.action(E.easing(1))) : E.frame < E.frames && Q && (E.frame = E.frames, E.action(E.easing(1))), E._37o && E._37o(), E.finishFunc && E.finishFunc(), gq(E.timeId, !E.duration), delete E.timeId)
                    }, E.isRunning = function () {
                        return E.timeId != U
                    }, E.delay ? fi(M, U, [E], E.delay) : M(E), E
                }
            }(),
            getTextSize: function () {
                var m = {}, $ = R ? Dm().getContext("2d") : U;
                return function (N, z) {
                    $.font = N ? N : Km;
                    var d = m[$.font];
                    return d || (d = 2 * $.measureText("e").width + 4, m[$.font] = d), {
                        width: $.measureText(z).width + 4,
                        height: d
                    }
                }
            }(),
            drawText: function (u, m, z, n, f, $, y, x, P, Z) {
                if (m != U) {
                    var F = Mo(z, m), s = {};
                    s.y = Z && Z !== Sf ? Z === dh ? $ + F.height / 2 : $ + x - F.height / 2 : $ + x / 2, s.x = P && P !== rk ? P === ks ? f + y - F.width / 2 : f + y / 2 : f + F.width / 2, qp(u, m, s, z, n)
                }
            },
            getDistance: function (l, V) {
                var U = l.length;
                return V ? 3 === U ? y(X(l[0] - V[0]) + X(l[1] - V[1]) + X(l[2] - V[2])) : 2 === U ? y(X(l[0] - V[0]) + X(l[1] - V[1])) : l.z === K ? y(X(V.x - l.x) + X(V.y - l.y)) : y(X(V.x - l.x) + X(V.y - l.y) + X(V.z - l.z)) : 3 === U ? y(X(l[0]) + X(l[1]) + X(l[2])) : 2 === U ? y(X(l[0]) + X(l[1])) : void 0
            },
            brighter: function (b, R) {
                return 0 > R && (R = -R), wc(b, R ? R : 40)
            },
            darker: function (D, X) {
                return X > 0 && (X = -X), wc(D, X ? X : -40)
            },
            unionPoint: function (J, v) {
                if (!J)return U;
                if (2 === arguments.length)return J && v ? {
                        x: O(J.x, v.x),
                        y: O(J.y, v.y),
                        width: e(J.x - v.x),
                        height: e(J.y - v.y)
                    } : U;
                var M = J;
                if (M._as && (M = M._as), M.length === K)return U;
                var _ = M.length;
                if (0 >= _)return U;
                for (var A = 1, t = M[0], I = {x: t.x, y: t.y, width: 0, height: 0}; _ > A; A++) {
                    t = M[A];
                    var B = O(I.x, t.x), T = o(I.x + I.width, t.x), D = O(I.y, t.y), h = o(I.y + I.height, t.y);
                    I.x = B, I.y = D, I.width = T - B, I.height = h - D
                }
                return I
            },
            unionRect: function (G, I) {
                if (G && !I)return Nh(G);
                if (!G && I)return Nh(I);
                if (G && I) {
                    var x = {x: O(G.x, I.x), y: O(G.y, I.y)};
                    return x.width = o(G.x + G.width, I.x + I.width) - x.x, x.height = o(G.y + G.height, I.y + I.height) - x.y, x
                }
                return U
            },
            containsPoint: function (I, u) {
                return !(!I || u.x < I.x || u.y < I.y || u.x > I.x + I.width || u.y > I.y + I.height)
            },
            containsRect: function (o, v) {
                if (!o || !v)return !1;
                var p = v.x, N = v.y, M = v.width, W = v.height, Q = o.width, j = o.height;
                if (0 > (Q | j | M | W))return !1;
                var O = o.x, A = o.y;
                if (O > p || A > N)return !1;
                if (Q += O, M += p, p >= M) {
                    if (Q >= O || M > Q)return !1
                } else if (Q >= O && M > Q)return !1;
                if (j += A, W += N, N >= W) {
                    if (j >= A || W > j)return !1
                } else if (j >= A && W > j)return !1;
                return !0
            },
            intersectsRect: function (G, H) {
                if (!G || !H)return !1;
                var B = H.width, K = H.height, r = G.width, h = G.height;
                if (0 >= r || 0 >= h || 0 >= B || 0 >= K)return !1;
                var $ = H.x, p = H.y, v = G.x, t = G.y;
                return r += v, h += t, B += $, K += p, r > $ && h > p && B > v && K > t
            },
            intersection: function (H, b) {
                if (!H || !b)return U;
                var J = b.x, s = b.y, d = H.x, R = H.y, S = J, D = s, E = d, O = R;
                return S += b.width, D += b.height, E += H.width, O += H.height, d > J && (J = d), R > s && (s = R), S > E && (S = E), D > O && (D = O), S -= J, D -= s, 0 >= S || 0 >= D ? U : {
                        x: J,
                        y: s,
                        width: S,
                        height: D
                    }
            },
            grow: function (z, d) {
                z.x -= d, z.y -= d, z.width = z.width + 2 * d, z.height = z.height + 2 * d
            },
            getLogicalPoint: function (z, t, x, L, E, e) {
                var l = t.getBoundingClientRect();
                return z = P ? Bc(z) : z, {
                    x: (z.clientX - l.left + t.scrollLeft - (x || 0)) / (E || 1),
                    y: (z.clientY - l.top + t.scrollTop - (L || 0)) / (e || 1)
                }
            },
            removeHTML: function () {
                var $;
                return function (s) {
                    return s && s.parentNode ? $ === s ? !0 : ($ = s, s.parentNode.removeChild(s), $ = U, !0) : !1
                }
            }(),
            getToolTipDiv: function () {
                if (!$i) {
                    $i = xo(), Fm = xo();
                    var _ = $i.style;
                    H.baseZIndex != U && (_.zIndex = C(H.baseZIndex) + 3 + ""), _.whiteSpace = "nowrap", _.color = H.toolTipLabelColor, _.background = H.toolTipBackground, _.font = H.toolTipLabelFont, _.padding = "5px", _.boxShadow = "0px 0px 3px " + H.toolTipShadowColor
                }
                return $i
            },
            isToolTipShowing: function () {
                return $i && $i.parentNode ? !0 : Fm && Fm.parentNode ? !0 : !1
            },
            hideToolTip: function () {
                jm($i), jm(Fm), Wm()
            },
            showToolTip: function (r, L) {
                if (!r || L == U)return as(), void 0;
                H.getToolTipDiv();
                var y, E;
                if (L.html ? (L = L.html, y = Fm, jm($i)) : (y = $i, jm(Fm)), E = y.style, y.innerHTML = L, y.parentNode || Cs(R.body, y), r.target) {
                    r = ge(r);
                    var Z = Ml(), d = r.x, b = r.y, v = P ? 60 : 12;
                    if (P) {
                        var z = y.getBoundingClientRect();
                        E.left = d - z.width / 2 + Be, E.top = b - z.height - v < Z.top ? b + v + Be : b - z.height - v + Be
                    } else {
                        E.left = d + v + Be, E.top = b + v + Be;
                        var z = y.getBoundingClientRect();
                        z.left + z.width > Z.width && (E.left = d - v - z.width + Be), z.top + z.height > Z.height && (E.top = b - v - z.height + Be), z.left < 0 && (E.left = d + v + Be), z.top < 0 && (E.top = b + v + Be)
                    }
                } else E.left = r.x + Be, E.top = r.y + Be;
                Wm()
            },
            startDragging: function (z, I) {
                z !== fd && (fd ? P ? fd.handleWindowTouchEnd(I) : fd.handleWindowMouseUp(I) : P ? (c.addEventListener(ph, ll, !1), c.addEventListener(ic, _e, !1)) : (c.addEventListener(jc, Qf, !1), c.addEventListener(Uk, Ii, !1)), fd = z)
            },
            getImageMap: function () {
                return rg
            },
            toBoundaries: function (t, j, G, D) {
                var X = [];
                return lj(t, j, G, D).forEach(function (B) {
                    var J = [];
                    B.forEach(function (j) {
                        J.push(j.x, j.y)
                    }), X.push(J)
                }), X
            },
            getCurrentKeyCodeMap: function () {
                return Rp
            },
            drawCenterImage: function (e, z, L, k, W, g, Y) {
                var T = ef(z, W, g), F = Xp(z, W, g);
                Kj(e, z, I(L - T / 2), I(k - F / 2), T, F, W, g, Y)
            },
            drawStretchImage: function (r, Y, X, K, j, B, H, a, m, Q, g) {
                var W, _ = ef(Y, a, m), L = Xp(Y, a, m);
                if ("uniform" === X ? (W = O(B / _, H / L), _ *= W, L *= W, K += I((B - _) / 2), j += I((H - L) / 2), B = _, H = L) : ("centerUniform" === X || X == U) && ((_ > B || L > H) && (W = O(B / _, H / L), _ *= W, L *= W), K += I((B - _) / 2), j += I((H - L) / 2), B = _, H = L), "center" === X) {
                    var h = g !== !1 && (_ > B || L > H);
                    h && (r.save(), r.beginPath(), r.rect(K, j, B, H), r.clip()), Kj(r, Y, K + B / 2 - _ / 2, j + H / 2 - L / 2, _, L, a, m, Q), h && r.restore()
                } else Kj(r, Y, K, j, B, H, a, m, Q)
            },
            toCanvas: function (K, D, l, i, m, q, U) {
                K = gk(K, U), D = D || ef(K, m), l = l || Xp(K, m);
                var E = Dm();
                Xq(E, D, l, 1);
                var A = Cl(E);
                return Zq(A, K, i, 0, 0, D, l, m, q, U), A.restore(), E
            },
            createElement: function (S, $, k, Q) {
                var j = R.createElement(S);
                return dq(j, $ || A.widgetBorder, 2), j.style.font = k ? k : Km, Q != U && (j.value = Q), H.onElementCreated && H.onElementCreated(j), j
            },
            containedInView: function (s, V) {
                var _ = Un(V).getBoundingClientRect();
                return ug({x: _.left, y: _.top, width: _.width, height: _.height}, rc(s))
            },
            isIsolating: function () {
                return js
            },
            setIsolating: function (G) {
                js = G
            },
            getMSMap: function () {
                return Bb
            },
            stringify: function (l, D) {
                var q = Date.prototype.toJSON;
                Date.prototype.toJSON = function () {
                    return "__ht__date" + this.getTime()
                };
                var E = JSON.stringify(l, function (H, c) {
                    return "function" == typeof c ? "__ht__" + (c.__ht__ || c.toString()) : c
                }, D == U ? 2 : D);
                return Date.prototype.toJSON = q, E
            },
            parse: function (W) {
                return JSON.parse(W, function (z, I) {
                    if (rd(I)) {
                        if ("__ht__function" == I.substr(0, 14)) {
                            var i = I.indexOf("{") + 1, L = I.lastIndexOf("}"), N = I.indexOf("(") + 1, $ = I.indexOf(")");
                            if (i && L && N && $) {
                                var Q = new Function(I.substring(N, $), I.substring(i, L));
                                return Q.__ht__ = I.substr(6), Q
                            }
                        }
                        if ("__ht__date" == I.substr(0, 10))return new Date(C(I.substr(10)))
                    }
                    return I
                })
            },
            toColorData: Nq,
            setCanvas: Xq,
            createDiv: xo,
            createDisabledDiv: Rf,
            createView: Uo,
            createCanvas: Dm,
            appendChild: Cs,
            initContext: Cl,
            checkLoadingImage: Cc,
            translateAndScale: Yj,
            layout: kg,
            getPosition: lm,
            drawPoints: ql,
            drawRoundRect: $k
        }, !0), Se(s, {
            autoAdjustIndex: 1,
            adjustChildrenToTop: 1,
            autoHideScrollBar: 1,
            autoUpdate: 1,
            firstPersonMode: 1,
            ortho: 1,
            strict: 1,
            stickToRight: 1,
            instant: 1,
            closePath: 1,
            hierarchical: 1,
            doubleClickToToggle: 1,
            continuousLayout: !0
        }, !0);
        var Mp = H.disabledOpacity, eg = H.toolTipDelay, Pg = H.devicePixelRatio, hq = H.autoMakeVisible, Gi = H.autoHideScrollBar, Kq = H.imageGradient, Ym = H.showToolTip, as = H.hideToolTip, _f = H.dashPattern, ai = H.lineCap, Sg = H.lineJoin, Co = H.labelColor, el = H.labelSelectColor, Km = H.labelFont, Jj = H.widgetIndent, ae = H.widgetRowHeight, Ep = H.widgetHeaderHeight, Gb = H.widgetTitleHeight, lo = H.scrollBarColor, Fn = H.scrollBarSize, Fc = H.scrollBarTimeout, Zk = H.scrollBarMinLength, $h = H.scrollBarInteractiveSize, fc = H.zoomIncrement, zs = H.scrollZoomIncrement, wr = H.pinchZoomIncrement, pp = H.zoomMax, qe = H.zoomMin, Ng = H.createObject, Fr = H.preventDefault, Hm = H.setImage, gk = H.getImage, ym = H.drawCenterImage, Zq = H.drawStretchImage, jd = H.getId, fi = H.callLater, Lj = H.asyncEach, yf = (H.xhrLoad, H.sortFunc), Nh = H.clone, cs = H.getClass, Jm = H.startAnim, Oq = H.brighter, Fb = H.darker, Yr = H.drawText, Mo = H.getTextSize, kf = H.isLeftButton, fm = H.getTouchCount, _g = H.isDoubleClick, cc = H.isShiftDown, hn = H.isCtrlDown, rc = H.getClientPoint, ge = H.getPagePoint, Rk = H.getDistance, Pb = H.unionPoint, of = H.unionRect, ug = H.containsPoint, Zc = H.containsRect, _j = H.intersectsRect, wg = H.intersection, Ml = H.getWindowInfo, df = H.grow, Bl = H.getLogicalPoint, gl = H.startDragging, jm = H.removeHTML, Xb = H.createElement, Fp = H.segmentResolution, Hl = H.shapeResolution, Pd = H.shapeSide, Oh = H.def, zd = function (m, g, W) {
            Oh(q + "." + m, g, W)
        }, Wl = function (Q, I) {
            Q.childNodes.forEach(function (E) {
                I(E), Wl(E, I)
            })
        };
        Se(H, {
            toolTipLabelColor: Co,
            toolTipLabelFont: Km,
            toolTipBackground: A.toolTipBackground,
            toolTipShadowColor: Ol,
            setDevicePixelRatio: function (y) {
                Pg = H.devicePixelRatio = "number" == typeof y ? y : c.devicePixelRatio, Wl(R.body, function (w) {
                    var D = w._ht;
                    D && D._canvas && (Xq(D._canvas, D.getWidth(), D.getHeight()), D.redraw ? D.redraw() : D.iv())
                })
            }
        }, !0);
        var Ub = 1e-6, lb = "undefined" != typeof Uint16Array ? Uint16Array : Array, Hb = "undefined" != typeof Float32Array ? Float32Array : Array, pj = function (o, u, d) {
            var C = [o[0] - u[0], o[1] - u[1], o[2] - u[2]];
            if (d) {
                var B = Rk(C);
                B > 0 && (C[0] /= B, C[1] /= B, C[2] /= B)
            }
            return C
        }, Ho = function (O) {
            return [-O[0], -O[1], -O[2]]
        }, Dn = function (Q, I) {
            return 3 === Q.length ? Q[0] * I[0] + Q[1] * I[1] + Q[2] * I[2] : Q[0] * I[0] + Q[1] * I[1]
        }, os = function () {
            var M = new Hb(16);
            return M[0] = 1, M[1] = 0, M[2] = 0, M[3] = 0, M[4] = 0, M[5] = 1, M[6] = 0, M[7] = 0, M[8] = 0, M[9] = 0, M[10] = 1, M[11] = 0, M[12] = 0, M[13] = 0, M[14] = 0, M[15] = 1, M
        }, Vp = os(), mn = function (v) {
            var U = new Hb(16);
            return U[0] = v[0], U[1] = v[1], U[2] = v[2], U[3] = v[3], U[4] = v[4], U[5] = v[5], U[6] = v[6], U[7] = v[7], U[8] = v[8], U[9] = v[9], U[10] = v[10], U[11] = v[11], U[12] = v[12], U[13] = v[13], U[14] = v[14], U[15] = v[15], U
        }, wm = function (v, S) {
            return v[0] = S[0], v[1] = S[1], v[2] = S[2], v[3] = S[3], v[4] = S[4], v[5] = S[5], v[6] = S[6], v[7] = S[7], v[8] = S[8], v[9] = S[9], v[10] = S[10], v[11] = S[11], v[12] = S[12], v[13] = S[13], v[14] = S[14], v[15] = S[15], v
        }, Vh = function (w) {
            return w[0] = 1, w[1] = 0, w[2] = 0, w[3] = 0, w[4] = 0, w[5] = 1, w[6] = 0, w[7] = 0, w[8] = 0, w[9] = 0, w[10] = 1, w[11] = 0, w[12] = 0, w[13] = 0, w[14] = 0, w[15] = 1, w
        }, oc = function (j, $) {
            var K = j[0], f = j[1], B = j[2];
            return j[0] = $[0] * K + $[4] * f + $[8] * B + $[12], j[1] = $[1] * K + $[5] * f + $[9] * B + $[13], j[2] = $[2] * K + $[6] * f + $[10] * B + $[14], j
        }, Ek = function (v, N) {
            var h = v[0], M = v[1], P = v[2], $ = v[3];
            return v[0] = N[0] * h + N[4] * M + N[8] * P + N[12] * $, v[1] = N[1] * h + N[5] * M + N[9] * P + N[13] * $, v[2] = N[2] * h + N[6] * M + N[10] * P + N[14] * $, v[3] = N[3] * h + N[7] * M + N[11] * P + N[15] * $, v
        }, Pl = function () {
            var E, O, F, l, V = Xh(dr[1] + dr[7]), h = Xh(dr[0] + dr[3] - dr[10]), q = Xh(dr[8] + 2), M = function () {
                return O = F.charAt(E), E += 1, O
            }, B = function () {
                var c = "";
                if (O === q)for (; M();) {
                    if (O === q)return M(), c;
                    c += O
                } else M()
            }, m = function () {
                for (; O && " " >= O;)M()
            }, o = function () {
                var e, i = {};
                if (O === V) {
                    if (M(), m(), O === h)return M(), i;
                    for (; O;) {
                        if (e = B(), m(), M(), i[e] = l(), m(), O === h)return M(), i;
                        M(), m()
                    }
                }
            };
            return l = function () {
                switch (m(), O) {
                    case V:
                        return o();
                    default:
                        return B()
                }
            }, function (P) {
                if (g = {}, P) {
                    var i;
                    if (F = P, E = 0, O = " ", i = l(), m(), !O)return i
                }
            }
        }(), qd = function (T, Z) {
            if (Z) {
                var q = v(Z), k = M(Z), i = T[4], b = T[5], u = T[6], y = T[7], I = T[8], o = T[9], n = T[10], s = T[11];
                T[4] = i * k + I * q, T[5] = b * k + o * q, T[6] = u * k + n * q, T[7] = y * k + s * q, T[8] = I * k - i * q, T[9] = o * k - b * q, T[10] = n * k - u * q, T[11] = s * k - y * q
            }
        }, lr = function (O, C) {
            if (C) {
                var w = v(C), z = M(C), d = O[0], p = O[1], Z = O[2], N = O[3], s = O[8], t = O[9], Y = O[10], y = O[11];
                O[0] = d * z - s * w, O[1] = p * z - t * w, O[2] = Z * z - Y * w, O[3] = N * z - y * w, O[8] = d * w + s * z, O[9] = p * w + t * z, O[10] = Z * w + Y * z, O[11] = N * w + y * z
            }
        }, Lq = function (x, w) {
            if (w) {
                var L = v(w), p = M(w), j = x[0], m = x[1], C = x[2], b = x[3], F = x[4], d = x[5], l = x[6], r = x[7];
                x[0] = j * p + F * L, x[1] = m * p + d * L, x[2] = C * p + l * L, x[3] = b * p + r * L, x[4] = F * p - j * L, x[5] = d * p - m * L, x[6] = l * p - C * L, x[7] = r * p - b * L
            }
        }, uh = function (B, Z, N) {
            return wn(U, N === !1 ? U : B.s3(), B.r3(), B.getRotationMode(), B.p3(), U, Z)
        }, wn = function (o, I, E, q, V, w, t) {
            return w || (w = os()), V && vb(w, V), Gp(w, E, q), t && wd(w, w, t), I && eq(w, I), o && wd(w, w, o), w
        }, Uc = function (A, p, N) {
            p = C(p), N = C(N);
            var x = this;
            x.g = A, x._84O = p, x._85O = N, x._70I = !0, x.F = 0, x._83O = p + N, x.pen = {x: 0, y: 0}
        }, bp = "lineDashOffset", rb = "setLineDash", Li = function (Z) {
            for (var h in Z)1 === h.length && (bp = Z[h]);
            return h ? 1 : 0
        }, th = function (v, I, y) {
            return To(I) ? v : v[rb] ? (v[rb](I), y && (v.lineDashOffset = y), v) : new Uc(v, I[0], I.length > 1 ? I[1] : I[0])
        }, zj = function (A, i) {
            !To(i) && A[rb] && (A[rb](Mc), A.lineDashOffset = 0)
        };
        if (Oh(Uc, m, {
                _69I: 6, moveTo: function (D, g) {
                    var v = this, m = v.pen;
                    m.x = D, m.y = g, v.g.moveTo(D, g), v.start || (v.start = {x: D, y: g})
                }, lineTo: function (f, $) {
                    var b = this, L = b.pen, I = f - L.x, k = $ - L.y, x = w(k, I), j = M(x), Y = v(x), i = b._23O(L.x, L.y, f, $), m = b._85O, S = b._84O, X = b._83O;
                    if (b.F) {
                        if (b.F > i)return b._70I ? b._72I(f, $) : b.moveTo(f, $), b.F -= i, void 0;
                        if (b._70I ? b._72I(L.x + j * b.F, L.y + Y * b.F) : b.moveTo(L.x + j * b.F, L.y + Y * b.F), i -= b.F, b.F = 0, b._70I = !b._70I, !i)return
                    }
                    var O = d(i / X);
                    if (O) {
                        for (var e = j * S, s = Y * S, G = j * m, P = Y * m, q = 0; O > q; q++)b._70I ? (b._72I(L.x + e, L.y + s), b.moveTo(L.x + G, L.y + P)) : (b.moveTo(L.x + G, L.y + P), b._72I(L.x + e, L.y + s));
                        i -= X * O
                    }
                    b._70I ? i > S ? (b._72I(L.x + j * S, L.y + Y * S), b.moveTo(f, $), b.F = m - (i - S), b._70I = !1) : (b._72I(f, $), i === S ? (b.F = 0, b._70I = !b._70I) : (b.F = S - i, b.moveTo(f, $))) : i > m ? (b.moveTo(L.x + j * m, L.y + Y * m), b._72I(f, $), b.F = S - (i - m), b._70I = !0) : (b.moveTo(f, $), i === m ? (b.F = 0, b._70I = !b._70I) : b.F = m - i)
                }, quadraticCurveTo: function (B, S, V, y) {
                    var K, Y = this, k = Y.pen, D = k.x, U = k.y, L = Y._22O(D, U, B, S, V, y), T = 0, $ = 0, C = Y._85O, _ = Y._84O;
                    if (Y.F) {
                        if (Y.F > L)return Y._70I ? Y._71I(B, S, V, y) : Y.moveTo(V, y), Y.F -= L, void 0;
                        if (T = Y.F / L, K = Y._20O(D, U, B, S, V, y, T), Y._70I ? Y._71I(K[2], K[3], K[4], K[5]) : Y.moveTo(K[4], K[5]), Y.F = 0, Y._70I = !Y._70I, !L)return
                    }
                    var f = L - L * T, s = d(f / Y._83O), H = _ / L, O = C / L;
                    if (s)for (var m = 0; s > m; m++)Y._70I ? ($ = T + H, K = Y._21O(D, U, B, S, V, y, T, $), Y._71I(K[2], K[3], K[4], K[5]), T = $, $ = T + O, K = Y._21O(D, U, B, S, V, y, T, $), Y.moveTo(K[4], K[5])) : ($ = T + O, K = Y._21O(D, U, B, S, V, y, T, $), Y.moveTo(K[4], K[5]), T = $, $ = T + H, K = Y._21O(D, U, B, S, V, y, T, $), Y._71I(K[2], K[3], K[4], K[5])), T = $;
                    f = L - L * T, Y._70I ? f > _ ? ($ = T + H, K = Y._21O(D, U, B, S, V, y, T, $), Y._71I(K[2], K[3], K[4], K[5]), Y.moveTo(V, y), Y.F = C - (f - _), Y._70I = !1) : (K = Y._19O(D, U, B, S, V, y, T), Y._71I(K[2], K[3], K[4], K[5]), L === _ ? (Y.F = 0, Y._70I = !Y._70I) : (Y.F = _ - f, Y.moveTo(V, y))) : f > C ? ($ = T + O, K = Y._21O(D, U, B, S, V, y, T, $), Y.moveTo(K[4], K[5]), K = Y._19O(D, U, B, S, V, y, $), Y._71I(K[2], K[3], K[4], K[5]), Y.F = _ - (f - C), Y._70I = !0) : (Y.moveTo(V, y), f === C ? (Y.F = 0, Y._70I = !Y._70I) : Y.F = C - f)
                }, bezierCurveTo: function () {
                    var c = arguments;
                    this.pen = {x: c[4], y: c[5]}, this.g.bezierCurveTo(c[0], c[1], c[2], c[3], c[4], c[5])
                }, arc: function (W, u, i, s, Z, g) {
                    g || (s = -s, Z = -Z), tp(this, W, u, s, Z - s, i, i, !1)
                }, rect: function (C, $, i, r) {
                    var w = this;
                    w.pen = {
                        x: C,
                        y: $
                    }, w.moveTo(C, $), w.lineTo(C, $ + r), w.lineTo(C + i, $ + r), w.lineTo(C + i, $), w.lineTo(C, $)
                }, beginPath: function () {
                    this.g.beginPath()
                }, closePath: function () {
                    this.lineTo(this.start.x, this.start.y)
                }, _23O: function ($, S, n, r) {
                    var w = n - $, V = r - S;
                    return y(w * w + V * V)
                }, _22O: function (b, O, z, H, t, T, F) {
                    for (var V, p, X, Z, l, E, N, k = 0, f = b, g = O, s = F > 0 ? F : this._69I, e = 1; s >= e; e++)X = e / s, Z = 1 - X, l = Z * Z, E = 2 * X * Z, N = X * X, V = l * b + E * z + N * t, p = l * O + E * H + N * T, k += this._23O(f, g, V, p), f = V, g = p;
                    return k
                }, _21O: function (C, _, t, J, A, h, Z, x) {
                    var V = this;
                    if (0 === Z)return V._20O(C, _, t, J, A, h, x);
                    if (1 === x)return V._19O(C, _, t, J, A, h, Z);
                    var I = V._20O(C, _, t, J, A, h, x);
                    return I.push(Z / x), V._19O.apply(V, I)
                }, _20O: function (b, G, e, z, k, Z, M) {
                    if (1 !== M) {
                        var l = e + (k - e) * M, n = z + (Z - z) * M;
                        e = b + (e - b) * M, z = G + (z - G) * M, k = e + (l - e) * M, Z = z + (n - z) * M
                    }
                    return [b, G, e, z, k, Z]
                }, _19O: function (w, s, v, N, W, M, P) {
                    if (1 !== P) {
                        var Q = w + (v - w) * P, G = s + (N - s) * P;
                        v += (W - v) * P, N += (M - N) * P, w = Q + (v - Q) * P, s = G + (N - G) * P
                    }
                    return [w, s, v, N, W, M]
                }, _72I: function (P, C) {
                    var b = this.pen;
                    (P !== b.x || C !== b.y) && (b.x = P, b.y = C, this.g.lineTo(P, C))
                }, _71I: function (b, f, Q, e) {
                    var w = this.pen;
                    (b !== Q || f !== e || Q !== w.x || e !== w.y) && (w.x = Q, w.y = e, this.g.quadraticCurveTo(b, f, Q, e))
                }
            }), x && l) {
            var Yq = l.toString();
            r = Yq.indexOf(wk.substr(0, 2)) > 0 && Yq.indexOf(dh + dh.substr(1, 1)) > 1 ? !0 : !1
        }
        var wb = U, Eb = U, xd = function (g) {
            wb && !g._72O && (Eb || (Eb = {}), Eb[g._72O = jd()] = g)
        }, bc = function (s) {
            if (wb || (wb = {}), !wb[s]) {
                var t = new XMLHttpRequest;
                wb[s] = {
                    request: t,
                    url: s
                }, t.overrideMimeType("text/plain"), t.open("GET", s, !0), t.onload = function (b) {
                    if (200 === this.status || 0 === this.status) {
                        var E = H.parse(b.target.response);
                        Oc(s, E)
                    } else Oc(s, U)
                }, t.onerror = function () {
                    Oc(s, U)
                }, t.send(null)
            }
        }, Oc = function (x, H) {
            if (Wg[x] = H, delete wb[x], Nk(wb) && (wb = U, Eb)) {
                for (var D in Eb) {
                    var P = Eb[D];
                    P.invalidateAll && P.invalidateAll(K, "compTypeLoaded", x), P.redraw && P.redraw(), P.iv(), delete P._72O
                }
                Eb = U
            }
            if (H && Eb)for (var D in Eb) {
                var P = Eb[D];
                P.invalidateAll && P.invalidateAll(K, "compTypeLoading", x), P.redraw && P.redraw(), P.iv()
            }
        }, $e = A.chart, Kr = H.compStack = [], Xr = /^style@/, Gh = /^attr@/, Yh = /^field@/, Jn = {
            x: .5,
            y: .5
        }, ef = function (s, A, V) {
            return s ? ln(s.width, A, V) : 0
        }, Xp = function (P, x, o) {
            return P ? ln(P.height, x, o) : 0
        }, ln = function (v, C, p) {
            if (!v || !v.func)return v;
            var m, w = v.func, M = v.value;
            return m = $c(w) ? p && p.vectorDataBindingDisabled && !v.isSafeFunc ? M : w(C, p) : C ? Gh.test(w) ? C.a(w.slice(5)) : Xr.test(w) ? C.s(w.slice(6)) : Yh.test(w) ? C[w.slice(6)] : C[w] ? C[w](p) : M : M, M !== K && m == U ? M : m
        }, Kj = H.drawImage = function () {
            var x, Y, Q, N, L, i = function (x, K, k) {
                var q = x[K];
                return q && q.func ? (q = ln(q, Y, Q), k && (q = k(q))) : k && (q = x[K] = k(q)), q
            }, s = function (n, c) {
                var g = i(n, c);
                if (L && g) {
                    var W = Jp(L);
                    return g = Nq(g), "rgba(" + d(g[0] * W[0]) + "," + d(g[1] * W[1]) + "," + d(g[2] * W[2]) + "," + g[3] + ")"
                }
                return g
            }, J = function (e) {
                if ($p(e)) {
                    for (var l = new gr, o = e.length, E = 0; o > E; E += 2)l.add({x: e[E], y: e[E + 1]});
                    e = l
                }
                return e
            }, B = function (n) {
                if (n.anchorX !== K || n.anchorY !== K)return {
                    x: n.anchorX === K ? Jn.x : n.anchorX,
                    y: n.anchorY === K ? Jn.y : n.anchorY
                };
                if (!n.name)return Jn;
                var J = gk(n.name);
                return J && J.anchorX && J.anchorY ? {x: J.anchorX, y: J.anchorY} : Jn
            }, n = function (D, t) {
                var F = i(D, Xm), V = B(D);
                if ($p(F)) {
                    var g = F.length, k = i(D, "relative"), Z = t.width, H = t.height;
                    if (4 === g) F = {
                        x: F[0],
                        y: F[1],
                        width: F[2],
                        height: F[3]
                    }, k && (F.x *= Z, F.y *= H, F.width *= Z, F.height *= H); else if (3 === g) {
                        var y = F[0];
                        F = {
                            width: F[1],
                            height: F[2]
                        }, k && (F.width *= Z, F.height *= H), "object" == typeof y ? y.length && (y = {
                                x: y[0],
                                y: y[1]
                            }) : y = lm(y, t, F), F.x = y.x - F.width * V.x, F.y = y.y - F.height * V.y
                    }
                    var r = i(D, "offsetX");
                    r && (F.x += r), r = i(D, "offsetY"), r && (F.y += r)
                }
                return F
            }, Z = function (i) {
                return $p(i) ? new gr(i) : i
            }, e = function (n, Q, r, g, J, R) {
                g === K && (g = 1), J === K && (J = 1);
                var m = sl(Q, n);
                if (m && !r && 1 === g && 1 === J)return !1;
                R = R || Jn;
                var H = n.x + n.width * R.x, A = n.y + n.height * R.y, w = Q.x + Q.width * R.x, e = Q.y + Q.height * R.y;
                return x.save(), es(x, H, A), $g(x, r), ag(x, g * (n.width / Q.width), J * (n.height / Q.height)), es(x, -w, -e), !0
            }, l = function () {
                x.restore()
            }, y = function (S, a, K) {
                var L = i(S, "path"), J = i(S, gj), A = i(S, "scaleX"), D = i(S, "scaleY"), m = B(S), z = U, p = mg(null, L);
                if (K || (K = S.unionRect, K || (K = Pb(p), S.path.func || (S.unionRect = K)), z = K), K) {
                    z || (z = S.unionRect, z || (z = Pb(p), S.path.func || (S.unionRect = z)));
                    var o = e(K, z, J, A, D, m), d = i(S, "borderPattern"), Z = th(x, d), r = s(S, "background"), V = s(S, "borderColor"), Q = i(S, "borderWidth"), P = i(S, "gradient"), t = s(S, "gradientColor"), n = i(S, "border3d"), u = i(S, "border3dColor"), c = i(S, "border3dAccuracy"), C = x.lineJoin, G = x.lineCap;
                    if (x.lineJoin = i(S, "borderJoin") || Sg, x.lineCap = i(S, "borderCap") || ai, r ? (Or(x, r, P, t, z), mg(x, L), x.fill(), Z !== x && mg(x, L)) : mg(x, L), Q && V) {
                        var k = i(S, "borderWidthAbsolute");
                        k && (x.save(), x.setTransform(1, 0, 0, 1, 0, 0)), x.lineWidth = Q, x.strokeStyle = V, x.stroke(), k && x.restore(), n && Nm(x, V, u, Q, N, c)
                    }
                    if (zj(x, d), i(S, "dash")) {
                        var M = i(S, "dashWidth") || Q;
                        if (M > 0) {
                            d = i(S, "dashPattern") || _f;
                            var Z = th(x, d, i(S, "dashOffset")), $ = i(S, "dashColor") || Ij;
                            Z !== x && mg(x, L), x.strokeStyle = $, x.lineWidth = M, x.stroke(), i(S, "dash3d") && Nm(x, $, i(S, "dash3dColor"), M, N, i(S, "dash3dAccuracy")), zj(x, d)
                        }
                    }
                    a === Xm && si(x, r, i(S, "depth"), z), x.lineJoin = C, x.lineCap = G, o && l()
                }
            }, F = function (X, F, a) {
                var G = i(X, sn, J), m = i(X, gj), u = i(X, "scaleX"), g = i(X, "scaleY"), p = B(X), R = F === Cq, K = U;
                if (!a && R && (a = X.unionRect, a || (a = Pb(G), X.points.func || (X.unionRect = a)), K = a), a) {
                    R ? K || (K = X.unionRect, K || (K = Pb(G), X.points.func || (X.unionRect = K))) : K = a;
                    var h, Q, b, E, T = e(a, K, m, u, g, p), A = i(X, "borderPattern"), S = th(x, A), O = s(X, "background"), Y = gk(i(X, "repeatImage"), L), f = i(X, "gradientPack"), v = s(X, "borderColor"), H = i(X, "borderWidth"), $ = i(X, "segments", Z), n = i(X, "gradient"), V = s(X, "gradientColor"), o = i(X, "border3d"), w = i(X, "border3dColor"), j = i(X, "border3dAccuracy"), q = i(X, "closePath"), r = i(X, "fillRule") || "nonzero", d = x.lineJoin, W = x.lineCap;
                    if (x.lineJoin = i(X, "borderJoin") || Sg, x.lineCap = i(X, "borderCap") || ai, R ? O || Y || f ? (ql(x, G, $, q), f ? xh(x, f) : Y ? ni(x, Y) : Or(x, O, n, V, K), x.fill(r), f && x.restore(), S !== x && ql(S, G, $, q)) : ql(S, G, $, q) : ("roundRect" === F ? h = i(X, "cornerRadius") : "polygon" === F ? h = i(X, "polygonSide") : "arc" === F && (h = i(X, "arcFrom"), Q = i(X, "arcTo"), b = i(X, "arcClose"), E = i(X, "arcOval")), O || Y || f ? (Uj(x, F, K, h, Q, b, E), f ? xh(x, f) : Y ? ni(x, Y) : Or(x, O, n, V, K), x.fill(r), f && x.restore(), x !== S && Uj(S, F, K, h, Q, b, E)) : Uj(S, F, K, h, Q, b, E)), H && v) {
                        var c = i(X, "borderWidthAbsolute");
                        c && (x.save(), x.setTransform(1, 0, 0, 1, 0, 0)), x.lineWidth = H, x.strokeStyle = v, x.stroke(), c && x.restore(), o && Nm(x, v, w, H, N, j)
                    }
                    if (zj(x, A), i(X, "dash")) {
                        var D = i(X, "dashWidth") || H;
                        if (D > 0) {
                            A = i(X, "dashPattern") || _f;
                            var S = th(x, A, i(X, "dashOffset")), C = i(X, "dashColor") || Ij;
                            S !== x && (R ? ql(S, G, $, q) : Uj(S, F, K, h, Q, b, E)), x.strokeStyle = C, x.lineWidth = D, x.stroke(), i(X, "dash3d") && Nm(x, C, i(X, "dash3dColor"), D, N, i(X, "dash3dAccuracy")), zj(x, A)
                        }
                    }
                    F === Xm && si(x, O, i(X, "depth"), K), x.lineJoin = d, x.lineCap = W, T && l()
                }
            }, P = function (N, X) {
                var z = L, T = L || i(N, Vk), v = gk(i(N, "name"), T);
                v && (Zq(x, v, i(N, "stretch"), X.x, X.y, X.width, X.height, Y, Q, T), L = z)
            }, z = function (Z, O) {
                var R = i(Z, "text");
                R != U && Yr(x, R, i(Z, "font"), s(Z, Vk), O.x, O.y, O.width, O.height, i(Z, "align"), i(Z, "vAlign"))
            }, A = function (D, d) {
                Nl(x, s(D, Vk), d.x, d.y, d.width, d.height, i(D, "width"))
            }, X = function (T, L) {
                var V = i(T, Od), g = 0;
                if (V && (V.forEach(function (E) {
                        g += E
                    }), g > 0)) {
                    for (var l = i(T, "colors") || $e, K = i(T, "startAngle") || 0, N = i(T, "hollow"), X = i(T, rm), z = i(T, _p), h = i(T, tb), w = X ? new gr : U, G = L.x, J = L.y, D = L.width, C = L.height, R = G + D / 2, s = J + C / 2, d = O(D, C) / 2, F = 0, I = 0; I < V.length; I++) {
                        var f = V[I], B = $ * f / g, c = K + B;
                        if (x.fillStyle = l[F++], F === l.length && (F = 0), x.beginPath(), N) {
                            var Z = R + M(K) * d / 2, P = s + v(K) * d / 2, p = R + M(c) * d, A = s + v(c) * d;
                            x.moveTo(Z, P), x.arc(R, s, d / 2, K, c, !1), x.lineTo(p, A), x.arc(R, s, d, c, K, !0)
                        } else x.moveTo(R, s), x.arc(R, s, d, c, K, !0);
                        w && (B = (K + c) / 2, w.add({
                            text: $c(X) ? X(f, I, g, Y) : f,
                            x: R + .75 * M(B) * d,
                            y: s + .75 * v(B) * d
                        })), x.closePath(), x.fill(), K = c
                    }
                    w && w.each(function (U) {
                        Yr(x, U.text, z, h, U.x, U.y, 0, 0, xr)
                    })
                }
            }, S = function (q, a) {
                var f = i(q, hh);
                if (f && f.length > 0) {
                    var d = f.length, H = i(q, rm), s = i(q, _p), R = i(q, tb), P = H ? new gr : U, Z = i(q, "minValue") || 0, v = i(q, "maxValue");
                    if (v == U && (v = 0, f.forEach(function (B) {
                            B.values.forEach(function (l) {
                                v = o(v, l)
                            })
                        })), Z === v)return;
                    for (var I = a.height / (v - Z), l = a.y + v * I, Q = i(f[0], Od).length, g = a.width / (3 * Q + 1), K = 2 * g / d, C = 0, W = 0; d > W; W++)for (var h = f[W], r = i(h, Vk), N = i(h, "colors"), p = i(h, Od), A = 0; Q > A; A++) {
                        N ? x.fillStyle = N[A] : r ? x.fillStyle = r : (x.fillStyle = $e[C++], C === $e.length && (C = 0));
                        var G = p[A], u = G * I, D = a.x + (1 + 3 * A) * g + W * K;
                        if (ns(x, D, l - u, K, u), P) {
                            var L = $c(H) ? H(G, A, h, Y) : G, b = Mo(s, L).height;
                            P.add({x: D, y: l - u - b, width: K, height: b, text: L})
                        }
                    }
                    P && P.each(function (P) {
                        Yr(x, P.text, s, R, P.x, P.y, P.width, P.height, xr)
                    })
                }
            }, j = function (q, C) {
                var g = i(q, hh);
                if (g && g.length > 0) {
                    var w = g.length, l = i(g[0], Od).length, N = C.width / (3 * l + 1), t = 0, z = i(q, "maxValue"), M = i(q, rm), k = i(q, _p), p = i(q, tb), y = M ? new gr : U;
                    if (z == U) {
                        z = 0;
                        for (var H = 0; l > H; H++) {
                            for (var c = 0, R = 0; w > R; R++)c += i(g[R], Od)[H];
                            z = o(z, c)
                        }
                    }
                    if (z > 0) {
                        for (var H = 0; l > H; H++)for (var V = C.y + C.height, R = 0; w > R; R++) {
                            var n = g[R], u = i(n, Vk), e = i(n, Od)[H], v = e / z * C.height;
                            u ? x.fillStyle = u : (x.fillStyle = $e[t++], t === $e.length && (t = 0)), V -= v;
                            var A = {x: C.x + (1 + 3 * H) * N, y: V, width: 2 * N, height: v};
                            ns(x, A.x, A.y, A.width, A.height), y && (A.text = $c(M) ? M(e, H, n, Y) : e, y.add(A))
                        }
                        y && y.each(function (C) {
                            Yr(x, C.text, k, p, C.x, C.y, C.width, C.height, xr)
                        })
                    }
                }
            }, p = function (u, o) {
                var k = i(u, hh);
                if (k && k.length > 0) {
                    for (var z = k.length, S = i(k[0], Od).length, F = o.width / (3 * S + 1), A = 0, D = i(u, rm), E = i(u, _p), H = i(u, tb), p = D ? new gr : U, O = 0; S > O; O++) {
                        for (var c = 0, _ = 0; z > _; _++)c += i(k[_], Od)[O];
                        if (c > 0) {
                            var N = o.y + o.height;
                            for (_ = 0; z > _; _++) {
                                var Q = k[_], r = i(Q, Vk), I = i(Q, Od)[O], e = I / c * o.height;
                                r ? x.fillStyle = r : (x.fillStyle = $e[A++], A === $e.length && (A = 0)), N -= e;
                                var h = {x: o.x + (1 + 3 * O) * F, y: N, width: 2 * F, height: e};
                                ns(x, h.x, h.y, h.width, h.height), p && (h.text = $c(D) ? D(I, O, Q, Y) : I, p.add(h))
                            }
                        }
                    }
                    p && p.each(function (K) {
                        Yr(x, K.text, E, H, K.x, K.y, K.width, K.height, xr)
                    })
                }
            }, D = function (u, K) {
                var s = i(u, hh);
                if (s && s.length > 0) {
                    var c = s.length, T = i(u, "minValue") || 0, D = i(u, "maxValue");
                    if (D == U && (D = 0, s.forEach(function (h) {
                            h.values.forEach(function (S) {
                                D = o(D, S)
                            })
                        })), T === D)return;
                    for (var h = K.height / (D - T), l = K.y + D * h, q = i(s[0], Od).length, E = K.width / (3 * q + 1), Q = 0, X = i(u, "lineWidth") || 2, r = i(u, "line3d"), O = i(u, "linePoint"), A = i(u, rm), f = i(u, _p), p = i(u, tb), z = 0; c > z; z++) {
                        var M = s[z], j = i(M, Vk), v = i(M, Od);
                        j ? x.strokeStyle = j : (j = x.strokeStyle = $e[Q++], Q === $e.length && (Q = 0)), x.beginPath();
                        for (var L = 0; q > L; L++) {
                            var B = K.x + (2 + 3 * L) * E, m = l - v[L] * h;
                            0 === L ? x.moveTo(B, m) : x.lineTo(B, m)
                        }
                        if (x.lineWidth = X, x.stroke(), r && Nm(x, j, U, X, N), O || A) {
                            var y, I = X / 2 + 2;
                            for (L = 0; q > L; L++) {
                                var d = v[L];
                                if (B = K.x + (2 + 3 * L) * E, m = l - d * h, $c(O) ? O(x, B, m, j, L, M, Y) : O && (x.fillStyle = j, x.beginPath(), x.arc(B, m, I, 0, $, !0), x.fill()), $c(A) ? y = A(d, L, M, Y) : A && (y = d), y) {
                                    var G = Mo(f, y).height, Z = x.shadowBlur;
                                    if (Z) {
                                        var F = x.shadowOffsetX, _ = x.shadowOffsetY, V = x.shadowColor;
                                        x.shadowOffsetX = 0, x.shadowOffsetY = 0, x.shadowBlur = 0, x.shadowColor = U
                                    }
                                    Yr(x, y, f, p, B, m - G - I + 2, 0, G, xr), Z && (x.shadowOffsetX = F, x.shadowOffsetY = _, x.shadowColor = V, x.shadowBlur = Z)
                                }
                            }
                        }
                    }
                }
            }, T = {
                border: A,
                image: P,
                text: z,
                pieChart: X,
                columnChart: S,
                stackedColumnChart: j,
                percentageColumnChart: p,
                lineChart: D
            };
            return function (j, w, b, M, o, C, P, t, v) {
                if (w && o && C) {
                    if (x = j, Y = P, Q = t, N = Q ? Q._zoom ? Q._zoom : 1 : 1, L = v, w.tagName)return x.drawImage(w, b, M, o, C), void 0;
                    if (i(w, "visible") !== !1) {
                        L || (L = ln(w.color, Y, Q));
                        var s = ef(w, Y, Q), R = Xp(w, Y, Q), m = {
                            x: 0,
                            y: 0,
                            width: s,
                            height: R
                        }, d = i(w, "clip"), D = i(w, "opacity");
                        x.save(), es(x, b, M), (s !== o || R !== C) && x.scale(o / s, C / R), d && ($c(d) ? d(x, s, R, Y, Q, w) : (x.beginPath(), x.rect(0, 0, s, R), x.clip())), D != U && (x.globalAlpha *= D), i(w, "comps").forEach(function (C) {
                            if (i(C, In) !== !1) {
                                Kr.splice(0, 0, C);
                                var S = i(C, "opacity"), j = i(C, "shadow"), k = i(C, "type"), w = n(C, m);
                                if (S != U) {
                                    var R = x.globalAlpha;
                                    x.globalAlpha *= S
                                }
                                if (j) {
                                    var u = x.shadowOffsetX, I = x.shadowOffsetY, q = x.shadowBlur, O = x.shadowColor, r = i(C, "shadowOffsetX"), P = i(C, "shadowOffsetY"), z = i(C, "shadowBlur"), W = i(C, "shadowColor");
                                    x.shadowOffsetX = r == U ? 3 : r, x.shadowOffsetY = P == U ? 3 : P, x.shadowBlur = z == U ? 6 : z, x.shadowColor = W || Ol
                                }
                                if ("restore" === k) x.restore(); else if ("clip" === k) x.save(), ql(x, i(C, "points", J), i(C, "segments", Z), !0), x.clip(); else if (Eh[k] || k === Cq) F(C, k, w); else if ("SVGPath" === k) y(C, k, w); else {
                                    var o = !1;
                                    if (w) {
                                        var V = i(C, gj), v = i(C, "scaleX"), f = i(C, "scaleY"), c = B(C);
                                        o = e(w, w, V, v, f, c)
                                    }
                                    if ($c(k)) C.getValue || (C.getValue = function (t) {
                                        return i(this, t)
                                    }), k(x, w, C, Y, Q); else if (H.getCompType(k)) {
                                        var E = H.getCompType(k), N = E.func || E;
                                        C.getValue || (C.getValue = function (o) {
                                            return i(this, o)
                                        }), N(x, w, C, Y, Q)
                                    } else T[k] ? w && T[k](C, w) : H.getCompType(k) === K && ce.test(k) && bc(k);
                                    o && l()
                                }
                                j && (x.shadowOffsetX = u, x.shadowOffsetY = I, x.shadowBlur = q, x.shadowColor = O), S != U && (x.globalAlpha = R), Kr.splice(0, 1)
                            }
                        }), x.restore()
                    }
                }
            }
        }();
        H.getCurrentComp = function () {
            return Kr[0]
        }, H.getParentComp = function () {
            return Kr[1]
        }, H.getInternal = function () {
            return {
                isEnter: Ll,
                isEsc: hl,
                isSpace: Af,
                isLeft: vi,
                isUp: Ce,
                isRight: Ik,
                isDown: Hh,
                addMethod: Se,
                superCall: Eg,
                toPointsArray: lj,
                translateAndScale: Yj,
                appendArray: lc,
                createWorldMatrix: wn,
                vec3TransformMat4: oc,
                setCanvas: Xq,
                createDiv: xo,
                createView: Uo,
                createCanvas: Dm,
                createImage: ob,
                initContext: Cl,
                layout: kg,
                fillRect: ns,
                Mat: Ok,
                drawBorder: Nl,
                isString: rd,
                setBorder: dq,
                getPropertyValue: al,
                setPropertyValue: kk,
                drawVerticalLine: gs,
                draw3DRect: si,
                getPinchDist: If,
                isSameRect: sl,
                getPosition: lm,
                intersectionLineRect: ud,
                getNodeRect: kn,
                getEdgeAgentPosition: sf,
                getImageWidth: ef,
                getImageHeight: Xp,
                formatNumber: Dq,
                initItemElement: mo,
                drawPoints: ql,
                createG2: th,
                closePopup: re,
                isH: Ic,
                createAnim: Tc,
                createNormalMatrix: xc,
                createNormals: xq,
                toFloatArray: gn,
                glMV: vq,
                batchShape: Ob,
                createNodeMatrix: uh,
                getFaceInfo: tg,
                transformAppend: tc,
                drawFaceInfo: ld,
                to3dPointsArray: dd,
                setGLDebugMode: function (D) {
                    Vm = D
                },
                cube: function () {
                    return {vs: tm, is: Ei, uv: jl}
                },
                ui: function () {
                    return {
                        DataUI: bh,
                        NodeUI: cb,
                        EdgeUI: cl,
                        GroupUI: vs,
                        ShapeUI: Gr,
                        GridUI: Gd,
                        Data3dUI: xp,
                        Node3dUI: il,
                        Shape3dUI: ij
                    }
                },
                getInternalVersion: function () {
                    return "versionHash"
                },
                getDragger: function () {
                    return fd
                },
                addMSMap: function (P) {
                    Se(Bb, P)
                },
                k: E
            }
        }, function (c) {
            function S(n, o) {
                n != U && (o == U && Gl != typeof n ? this._54O(n, 256) : this._54O(n, o))
            }

            function J() {
                return new S(U)
            }

            function s(k, C, A, s, t, x) {
                for (; --x >= 0;) {
                    var E = C * this[k++] + A[s] + t;
                    t = d(E / 67108864), A[s++] = 67108863 & E
                }
                return t
            }

            function i(d, s, R, n, z, Z) {
                for (var G = 32767 & s, X = s >> 15; --Z >= 0;) {
                    var Q = 32767 & this[d], T = this[d++] >> 15, y = X * Q + T * G;
                    Q = G * Q + ((32767 & y) << 15) + R[n] + (1073741823 & z), z = (Q >>> 30) + (y >>> 15) + X * T + (z >>> 30), R[n++] = 1073741823 & Q
                }
                return z
            }

            function N(V, w, K, L, T, Q) {
                for (var U = 16383 & w, n = w >> 14; --Q >= 0;) {
                    var D = 16383 & this[V], J = this[V++] >> 14, z = n * D + J * U;
                    D = U * D + ((16383 & z) << 14) + K[L] + T, T = (D >> 28) + (z >> 14) + n * J, K[L++] = 268435455 & D
                }
                return T
            }

            function g(K) {
                return Nf.charAt(K)
            }

            function F(O, a) {
                var I = Ro[O.charCodeAt(a)];
                return I == U ? -1 : I
            }

            function G($) {
                for (var X = this.t - 1; X >= 0; --X)$[X] = this[X];
                $.t = this.t, $.s = this.s
            }

            function I(I) {
                this.t = 1, this.s = 0 > I ? -1 : 0, I > 0 ? this[0] = I : -1 > I ? this[0] = I + this.DV : this.t = 0
            }

            function l(b) {
                var U = J();
                return U._58O(b), U
            }

            function m(w, d) {
                var E, B = this;
                if (16 == d) E = 4; else if (8 == d) E = 3; else if (256 == d) E = 8; else if (2 == d) E = 1; else if (32 == d) E = 5; else {
                    if (4 != d)return B.fromRadix(w, d), void 0;
                    E = 2
                }
                B.t = 0, B.s = 0;
                for (var K = w.length, R = !1, x = 0; --K >= 0;) {
                    var c = 8 == E ? 255 & w[K] : F(w, K);
                    0 > c ? "-" == w.charAt(K) && (R = !0) : (R = !1, 0 == x ? B[B.t++] = c : x + E > B.DB ? (B[B.t - 1] |= (c & (1 << B.DB - x) - 1) << x, B[B.t++] = c >> B.DB - x) : B[B.t - 1] |= c << x, x += E, x >= B.DB && (x -= B.DB))
                }
                8 == E && 0 != (128 & w[0]) && (B.s = -1, x > 0 && (B[B.t - 1] |= (1 << B.DB - x) - 1 << x)), B._57O(), R && S.ZERO._78O(B, B)
            }

            function W() {
                for (var z = this, p = z.s & z.DM; z.t > 0 && z[z.t - 1] == p;)--z.t
            }

            function Z(I) {
                var r = this;
                if (r.s < 0)return "-" + r._85O()[Ll](I);
                var S;
                if (16 == I) S = 4; else if (8 == I) S = 3; else if (2 == I) S = 1; else if (32 == I) S = 5; else {
                    if (4 != I)return r.toRadix(I);
                    S = 2
                }
                var i, H = (1 << S) - 1, v = !1, f = "", T = r.t, w = r.DB - T * r.DB % S;
                if (T-- > 0)for (w < r.DB && (i = r[T] >> w) > 0 && (v = !0, f = g(i)); T >= 0;)S > w ? (i = (r[T] & (1 << w) - 1) << S - w, i |= r[--T] >> (w += r.DB - S)) : (i = r[T] >> (w -= S) & H, 0 >= w && (w += r.DB, --T)), i > 0 && (v = !0), v && (f += g(i));
                return v ? f : "0"
            }

            function f() {
                var x = J();
                return S.ZERO._78O(this, x), x
            }

            function R() {
                return this.s < 0 ? this._85O() : this
            }

            function L(S) {
                var z = this, m = z.s - S.s;
                if (0 != m)return m;
                var T = z.t;
                if (m = T - S.t, 0 != m)return z.s < 0 ? -m : m;
                for (; --T >= 0;)if (0 != (m = z[T] - S[T]))return m;
                return 0
            }

            function e(g) {
                var U, R = 1;
                return 0 != (U = g >>> 16) && (g = U, R += 16), 0 != (U = g >> 8) && (g = U, R += 8), 0 != (U = g >> 4) && (g = U, R += 4), 0 != (U = g >> 2) && (g = U, R += 2), 0 != (U = g >> 1) && (g = U, R += 1), R
            }

            function X() {
                var X = this;
                return X.t <= 0 ? 0 : X.DB * (X.t - 1) + e(X[X.t - 1] ^ X.s & X.DM)
            }

            function j(L, y) {
                var o;
                for (o = this.t - 1; o >= 0; --o)y[o + L] = this[o];
                for (o = L - 1; o >= 0; --o)y[o] = 0;
                y.t = this.t + L, y.s = this.s
            }

            function x(v, f) {
                for (var w = v; w < this.t; ++w)f[w - v] = this[w];
                f.t = o(this.t - v, 0), f.s = this.s
            }

            function K(V, a) {
                var o, s = this, z = V % s.DB, T = s.DB - z, Q = (1 << T) - 1, C = d(V / s.DB), u = s.s << z & s.DM;
                for (o = s.t - 1; o >= 0; --o)a[o + C + 1] = s[o] >> T | u, u = (s[o] & Q) << z;
                for (o = C - 1; o >= 0; --o)a[o] = 0;
                a[C] = u, a.t = s.t + C + 1, a.s = s.s, a._57O()
            }

            function r(O, $) {
                var k = this;
                $.s = k.s;
                var F = d(O / k.DB);
                if (F >= k.t)return $.t = 0, void 0;
                var u = O % k.DB, r = k.DB - u, p = (1 << u) - 1;
                $[0] = k[F] >> u;
                for (var D = F + 1; D < k.t; ++D)$[D - F - 1] |= (k[D] & p) << r, $[D - F] = k[D] >> u;
                u > 0 && ($[k.t - F - 1] |= (k.s & p) << r), $.t = k.t - F, $._57O()
            }

            function P(i, E) {
                for (var n = this, A = 0, $ = 0, J = O(i.t, n.t); J > A;)$ += n[A] - i[A], E[A++] = $ & n.DM, $ >>= n.DB;
                if (i.t < n.t) {
                    for ($ -= i.s; A < n.t;)$ += n[A], E[A++] = $ & n.DM, $ >>= n.DB;
                    $ += n.s
                } else {
                    for ($ += n.s; A < i.t;)$ -= i[A], E[A++] = $ & n.DM, $ >>= n.DB;
                    $ -= i.s
                }
                E.s = 0 > $ ? -1 : 0, -1 > $ ? E[A++] = n.DV + $ : $ > 0 && (E[A++] = $), E.t = A, E._57O()
            }

            function H(W, T) {
                var f = this.abs(), p = W.abs(), k = f.t;
                for (T.t = k + p.t; --k >= 0;)T[k] = 0;
                for (k = 0; k < p.t; ++k)T[k + f.t] = f.am(0, p[k], T, k, 0, f.t);
                T.s = 0, T._57O(), this.s != W.s && S.ZERO._78O(T, T)
            }

            function Y(n) {
                for (var u = this.abs(), j = n.t = 2 * u.t; --j >= 0;)n[j] = 0;
                for (j = 0; j < u.t - 1; ++j) {
                    var r = u.am(j, u[j], n, 2 * j, 0, 1);
                    (n[j + u.t] += u.am(j + 1, 2 * u[j], n, 2 * j + 1, r, u.t - j - 1)) >= u.DV && (n[j + u.t] -= u.DV, n[j + u.t + 1] = 1)
                }
                n.t > 0 && (n[n.t - 1] += u.am(j, u[j], n, 2 * j, 0, 1)), n.s = 0, n._57O()
            }

            function D(_, f, Q) {
                var y = _.abs(), W = this;
                if (!(y.t <= 0)) {
                    var p = W.abs();
                    if (p.t < y.t)return f != U && f._58O(0), Q != U && W._77O(Q), void 0;
                    Q == U && (Q = J());
                    var V = J(), P = W.s, o = _.s, t = W.DB - e(y[y.t - 1]);
                    t > 0 ? (y._44O(t, V), p._44O(t, Q)) : (y._77O(V), p._77O(Q));
                    var N = V.t, A = V[N - 1];
                    if (0 != A) {
                        var H = A * (1 << W.F1) + (N > 1 ? V[N - 2] >> W.F2 : 0), E = W.FV / H, n = (1 << W.F1) / H, h = 1 << W.F2, L = Q.t, c = L - N, u = f == U ? J() : f;
                        for (V._59O(c, u), Q._52O(u) >= 0 && (Q[Q.t++] = 1, Q._78O(u, Q)), S.ONE._59O(N, u), u._78O(V, V); V.t < N;)V[V.t++] = 0;
                        for (; --c >= 0;) {
                            var m = Q[--L] == A ? W.DM : d(Q[L] * E + (Q[L - 1] + h) * n);
                            if ((Q[L] += V.am(0, m, Q, c, 0, N)) < m)for (V._59O(c, u), Q._78O(u, Q); Q[L] < --m;)Q._78O(u, Q)
                        }
                        f != U && (Q._45O(N, f), P != o && S.ZERO._78O(f, f)), Q.t = N, Q._57O(), t > 0 && Q._46O(t, Q), 0 > P && S.ZERO._78O(Q, Q)
                    }
                }
            }

            function p(n) {
                var z = J();
                return this.abs()._49O(n, U, z), this.s < 0 && z._52O(S.ZERO) > 0 && n._78O(z, z), z
            }

            function b(Z) {
                this.m = Z
            }

            function A(G) {
                return G.s < 0 || G._52O(this.m) >= 0 ? G.mod(this.m) : G
            }

            function h(l) {
                return l
            }

            function _(l) {
                l._49O(this.m, U, l)
            }

            function k(O, F, _) {
                O._47O(F, _), this._74O(_)
            }

            function V(y, J) {
                y._48O(J), this._74O(J)
            }

            function Q() {
                if (this.t < 1)return 0;
                var w = this[0];
                if (0 == (1 & w))return 0;
                var F = 3 & w;
                return F = 15 & F * (2 - (15 & w) * F), F = 255 & F * (2 - (255 & w) * F), F = 65535 & F * (2 - (65535 & (65535 & w) * F)), F = F * (2 - w * F % this.DV) % this.DV, F > 0 ? this.DV - F : -F
            }

            function n(X) {
                var d = this;
                d.m = X, d.mp = X._50O(), d.mpl = 32767 & d.mp, d.mph = d.mp >> 15, d.um = (1 << X.DB - 15) - 1, d.mt2 = 2 * X.t
            }

            function w(Z) {
                var v = J();
                return Z.abs()._59O(this.m.t, v), v._49O(this.m, U, v), Z.s < 0 && v._52O(S.ZERO) > 0 && this.m._78O(v, v), v
            }

            function a(F) {
                var _ = J();
                return F._77O(_), this._74O(_), _
            }

            function u(A) {
                for (var R = this; A.t <= R.mt2;)A[A.t++] = 0;
                for (var x = 0; x < R.m.t; ++x) {
                    var B = 32767 & A[x], Z = B * R.mpl + ((B * R.mph + (A[x] >> 15) * R.mpl & R.um) << 15) & A.DM;
                    for (B = x + R.m.t, A[B] += R.m.am(0, Z, A, x, 0, R.m.t); A[B] >= A.DV;)A[B] -= A.DV, A[++B]++
                }
                A._57O(), A._45O(R.m.t, A), A._52O(R.m) >= 0 && A._78O(R.m, A)
            }

            function Bj(Q, u) {
                Q._48O(u), this._74O(u)
            }

            function Wm(K, m, h) {
                K._47O(m, h), this._74O(h)
            }

            function Nh() {
                return 0 == (this.t > 0 ? 1 & this[0] : this.s)
            }

            function Rg(w, I) {
                if (w > 4294967295 || 1 > w)return S.ONE;
                var G = J(), O = J(), p = I._73O(this), B = e(w) - 1;
                for (p._77O(G); --B >= 0;)if (I._76O(G, O), (w & 1 << B) > 0) I._75O(O, p, G); else {
                    var _ = G;
                    G = O, O = _
                }
                return I.revert(G)
            }

            function Rh(B, l) {
                var d;
                return d = 256 > B || l._51O() ? new b(l) : new n(l), this.exp(B, d)
            }

            function Vn() {
                var Y = this;
                if (Y.s < 0) {
                    if (1 == Y.t)return Y[0] - Y.DV;
                    if (0 == Y.t)return -1
                } else {
                    if (1 == Y.t)return Y[0];
                    if (0 == Y.t)return 0
                }
                return (Y[1] & (1 << 32 - Y.DB) - 1) << Y.DB | Y[0]
            }

            function hl(R, W) {
                return new S(R, W)
            }

            function Mh() {
                var a = this;
                a.n = U, a.e = 0, a.d = U, a.p = U, a.q = U, a.dmp1 = U, a.dmq1 = U, a._10A = U
            }

            function Nc(s) {
                return s._53O(this.e, this.n)
            }

            function yr(N) {
                var O, r, V, R = "", w = 0;
                for (O = 0; O < N.length && N.charAt(O) != Yi; ++O)V = uj.indexOf(N.charAt(O)), 0 > V || (0 == w ? (R += g(V >> 2), r = 3 & V, w = 1) : 1 == w ? (R += g(r << 2 | V >> 4), r = 15 & V, w = 2) : 2 == w ? (R += g(r), R += g(V >> 2), r = 3 & V, w = 3) : (R += g(r << 2 | V >> 4), R += g(15 & V), w = 0));
                return 1 == w && (R += g(r << 2)), R
            }

            function mj(M) {
                var Y = M.split(""), y = yr(M);
                return Y.forEach(function (W) {
                    var A = W.length;
                    A > 0 && y && (Xk += C(W))
                }), y
            }

            function bk(c, L) {
                var G = js._4O.Util._56O(c, "ss"), m = {}, h = 0;
                return m.v = G == L, m.t = 1, m.s = 0 > h ? -1 : 0, pk = m.v, h > 0 ? m[0] = h : -1 > h ? m[0] = h + m.DV : m.t = 0, [G, m]
            }

            function ah(c) {
                var q = 38, T = c.substring(0, q);
                if (T && 30 == T.indexOf("05000420")) {
                    var x = ["ss", c.substring(q)];
                    return x
                }
                return []
            }

            function ap(x, z) {
                z = z.replace(bs, ""), z = z.replace(/[ \n]+/g, "");
                var D = hl(z, 16);
                if (D._55O() > this.n._55O())return 0;
                var r = this._37O(D), f = r[Ll](16).replace(/^1f+00/, ""), G = ah(f);
                if (0 == G.length)return !1;
                for (var e, o, b, i = .5, V = Pd, N = [0, .5, .75, .875, .9375], n = [], K = [], w = [], k = $ / V, R = G[1], W = bk(x, R)[0], d = 0, l = 0; d < N.length; d++) {
                    var u = 0 === d % 2 ? 0 : .5;
                    for (e = 0; V >= e; e++)o = (e + u) * k, b = 1 - N[d], n.push(M(o) * i * b, -i + 2 * N[d] * i, -v(o) * i * b), K.push((e + u) / V, b)
                }
                for (d = 0; d < N.length - 1; d++) {
                    var g = d * (V + 1), J = (d + 1) * (V + 1);
                    for (e = 0; V > e; e++)w.push(g + e, J + e + 1, J + e, g + e, g + e + 1, J + e + 1)
                }
                return w.forEach(function (U) {
                    l += U
                }), R == W && l > 10
            }

            var ln, Uk = 0xdeadbeefcafe, dh = 15715070 == (16777215 & Uk), Ll = "toString", Vf = "", qp = "nat", nb = function () {
            };
            T = c["D" + 11182[Ll](B(2, 5))];
            var Nb = S.prototype;
            jr += Rn.substr(0, 1);
            var jo = c.navigator ? c.navigator.appName : "";
            dh && "Microsoft Internet Explorer" == jo ? (Nb.am = i, ln = 30) : dh && "Netscape" != jo ? (Nb.am = s, ln = 26) : (Nb.am = N, ln = 28), Nb.DB = ln, Nb.DM = (1 << ln) - 1, Nb.DV = 1 << ln;
            var Cf = 52;
            Nb.FV = B(2, Cf), Nb.F1 = Cf - ln, Nb.F2 = 2 * ln - Cf;
            var Gd, Qn, Nf = "0123456789abcdefghijklmnopqrstuvwxyz", Ro = [], $h = function ($) {
                return String.fromCharCode($)
            };
            for (Gd = "0".charCodeAt(0), Qn = 0; 9 >= Qn; ++Qn)Ro[Gd++] = Qn;
            for (Gd = "a".charCodeAt(0), Qn = 10; 36 > Qn; ++Qn)Ro[Gd++] = Qn;
            for (Gd = "A".charCodeAt(0), Qn = 10; 36 > Qn; ++Qn)Ro[Gd++] = Qn;
            var fm = b.prototype;
            fm._73O = A, fm.revert = h, fm._74O = _, fm._75O = k, fm._76O = V;
            var Ah = n.prototype;
            Ah._73O = w, Ah.revert = a, Ah._74O = u, Ah._75O = Wm, Ah._76O = Bj, Nb._77O = G, Nb._58O = I, Nb._54O = m, Nb._57O = W, Nb._59O = j, Nb._45O = x, Nb._44O = K, Nb._46O = r, Nb._78O = P, Nb._47O = H, Nb._48O = Y, Nb._49O = D, Nb._50O = Q, Nb._51O = Nh, Nb.exp = Rg, Nb.toString = Z, Nb._85O = f, Nb.abs = R, Nb._52O = L, Nb._55O = X, Nb.mod = p, Nb._53O = Rh, S.ZERO = l(0), S.ONE = l(1), Nb._86O = Vn;
            var jq = function (A, r) {
                var o = this;
                o.isPublic = !0, typeof A !== Gl ? (o.n = A, o.e = r) : A != U && r != U && A.length > 0 && r.length > 0 && (o.n = hl(A, 16), o.e = C(r, 16))
            };
            ls = function () {
                var B, h, J = mj(Kp), V = J.substr(0, 4), W = J.substr(4, 2), A = J.substr(6, 2), w = 1, d = !w, i = E, c = [], q = ps.charAt(7);
                if (T && (T[Ll]().indexOf(qp) < 0 || T[jr][Ll]().indexOf(qp) < 0 || !J ? B = Pl(Vq[q]) : (J = new T(V - 0, W - w, A - 0), h = J.setHours(9), T[jr]() > h ? B = Pl(Vq[q]) : d = !0)), J && B && i) {
                    for (var H in B)c.push(H);
                    var y, Y = B[c[0]], m = B[c[1]], a = B[c[2]], Q = B[c[4]], G = B[c[5]], s = B[c[6]], U = Qb._27O(i);
                    U && s && (y = Y + m + a + Q + "" + G, y && U._31O(y, s) && (d = !0))
                }
                return d || (Uj = To), q
            };
            var gn = Mh.prototype;
            gn._37O = Nc, gn._38O = jq;
            var uj = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Yi = "=", rl = 25, Qh = 10, Kp = "IBcGAQ==", $e = $e || function (i, X) {
                    var B = {}, r = B._7A = {}, x = r._6A = function () {
                        function r() {
                        }

                        return {
                            _80O: function (V) {
                                r.prototype = this;
                                var e = new r;
                                return V && e._5A(V), e.hasOwnProperty("_82O") || (e._82O = function () {
                                    e.$super._82O.apply(this, arguments)
                                }), e._82O.prototype = e, e.$super = this, e
                            }, _3A: function () {
                                var M = this._80O();
                                return M._82O.apply(M, arguments), M
                            }, _82O: function () {
                            }, _5A: function (H) {
                                for (var i in H)H.hasOwnProperty(i) && (this[i] = H[i]);
                                H.hasOwnProperty(Ll) && (this.toString = H.toString)
                            }, _88O: function () {
                                return this._82O.prototype._80O(this)
                            }
                        }
                    }(), h = r._39O = x._80O({
                        _82O: function (O, Z) {
                            O = this._84O = O || [], this._65O = Z != X ? Z : 4 * O.length
                        }, toString: function (Z) {
                            return (Z || T).stringify(this)
                        }, _89O: function (u) {
                            var b = this._84O, E = u._84O, K = this._65O, _ = u._65O;
                            if (this._57O(), K % 4)for (var y = 0; _ > y; y++) {
                                var g = 255 & E[y >>> 2] >>> 24 - 8 * (y % 4);
                                b[K + y >>> 2] |= g << 24 - 8 * ((K + y) % 4)
                            } else if (E.length > 65535)for (var y = 0; _ > y; y += 4)b[K + y >>> 2] = E[y >>> 2]; else b.push.apply(b, E);
                            return this._65O += _, this
                        }, _57O: function () {
                            var b = this._84O, D = this._65O;
                            b[D >>> 2] &= 4294967295 << 32 - 8 * (D % 4), b.length = z(D / 4)
                        }, _88O: function () {
                            var y = x._88O.call(this);
                            return y._84O = this._84O.slice(0), y
                        }, _87O: function (o) {
                            for (var N = [], d = 0; o > d; d += 4)N.push(0 | 4294967296 * t);
                            return new h._82O(N, o)
                        }
                    }), c = B._2A = {}, T = c._69O = {
                        stringify: function (X) {
                            var v, t = X._84O, F = X._65O, x = [];
                            for (v = 0; F > v; v++) {
                                var w = 255 & t[v >>> 2] >>> 24 - 8 * (v % 4);
                                x.push((w >>> 4).toString(16)), x.push((15 & w).toString(16))
                            }
                            return x.join("")
                        }, _68O: function (K) {
                            for (var o = K.length, z = [], x = 0; o > x; x += 2)z[x >>> 3] |= C(K.substr(x, 2), 16) << 24 - 4 * (x % 8);
                            return new h._82O(z, o / 2)
                        }
                    }, l = c._8A = {
                        stringify: function (B) {
                            var d, H = B._84O, S = B._65O, U = [];
                            for (d = 0; S > d; d++) {
                                var m = 255 & H[d >>> 2] >>> 24 - 8 * (d % 4);
                                U.push($h(m))
                            }
                            return U.join("")
                        }, _68O: function (R) {
                            var T, $ = R.length, P = [];
                            for (T = 0; $ > T; T++)P[T >>> 2] |= (255 & R.charCodeAt(T)) << 24 - 8 * (T % 4);
                            return new h._82O(P, $)
                        }
                    }, g = c._9A = {
                        stringify: function (G) {
                            try {
                                return decodeURIComponent(escape(l.stringify(G)))
                            } catch (J) {
                                throw new Error("")
                            }
                        }, _68O: function (r) {
                            return l._68O(unescape(encodeURIComponent(r)))
                        }
                    }, N = r._32O = x._80O({
                        _1A: function () {
                            this._83O = new h._82O, this._23O = 0
                        }, _33O: function (r) {
                            typeof r == Gl && (r = g._68O(r)), this._83O._89O(r), this._23O += r._65O
                        }, _25O: function (d) {
                            var k = this._83O, G = k._84O, i = k._65O, e = this._79O, I = 4 * e, J = i / I;
                            J = d ? z(J) : o((0 | J) - this._22O, 0);
                            var V = J * e, f = O(4 * V, i);
                            if (V) {
                                for (var D = 0; V > D; D += e)this._20O(G, D);
                                var s = G.splice(0, V);
                                k._65O -= f
                            }
                            return new h._82O(s, f)
                        }, _88O: function () {
                            var f = x._88O.call(this);
                            return f._83O = this._83O._88O(), f
                        }, _22O: 0
                    });
                    r._66O = N._80O({
                        cfg: x._80O(), _82O: function (D) {
                            this.cfg = this.cfg._80O(D), this._1A()
                        }, _1A: function () {
                            N._1A.call(this), this._34O()
                        }, _81O: function (e) {
                            return this._33O(e), this._25O(), this
                        }, _72O: function (w) {
                            w && this._33O(w);
                            var l = this._21O();
                            return l
                        }, _79O: 16, _26O: function (z) {
                            return function (N, T) {
                                return new z._82O(T)._72O(N)
                            }
                        }, _19O: function (E) {
                            return function (S, P) {
                                return new U._71O._82O(E, P)._72O(S)
                            }
                        }
                    });
                    var U = B._67O = {};
                    return B
                }();
            !function () {
                var U = $e, J = U._7A, r = J._39O, u = J._66O, C = U._67O, S = [], P = [];
                !function () {
                    function x(T) {
                        for (var s = y(T), e = 2; s >= e; e++)if (!(T % e))return !1;
                        return !0
                    }

                    function N($) {
                        return 0 | 4294967296 * ($ - (0 | $))
                    }

                    for (var T = 2, A = 0; 64 > A;)x(T) && (8 > A && (S[A] = N(B(T, .5))), P[A] = N(B(T, 1 / 3)), A++), T++
                }();
                var E = [], G = C._41O = u._80O({
                    _34O: function () {
                        this._64O = new r._82O(S.slice(0))
                    }, _20O: function (z, I) {
                        for (var V = this._64O._84O, m = V[0], o = V[1], f = V[2], Q = V[3], b = V[4], K = V[5], S = V[6], r = V[7], Z = 0; 64 > Z; Z++) {
                            if (16 > Z) E[Z] = 0 | z[I + Z]; else {
                                var L = E[Z - 15], v = (L << 25 | L >>> 7) ^ (L << 14 | L >>> 18) ^ L >>> 3, X = E[Z - 2], R = (X << 15 | X >>> 17) ^ (X << 13 | X >>> 19) ^ X >>> 10;
                                E[Z] = v + E[Z - 7] + R + E[Z - 16]
                            }
                            var T = b & K ^ ~b & S, j = m & o ^ m & f ^ o & f, y = (m << 30 | m >>> 2) ^ (m << 19 | m >>> 13) ^ (m << 10 | m >>> 22), N = (b << 26 | b >>> 6) ^ (b << 21 | b >>> 11) ^ (b << 7 | b >>> 25), u = r + N + T + P[Z] + E[Z], A = y + j;
                            r = S, S = K, K = b, b = 0 | Q + u, Q = f, f = o, o = m, m = 0 | u + A
                        }
                        V[0] = 0 | V[0] + m, V[1] = 0 | V[1] + o, V[2] = 0 | V[2] + f, V[3] = 0 | V[3] + Q, V[4] = 0 | V[4] + b, V[5] = 0 | V[5] + K, V[6] = 0 | V[6] + S, V[7] = 0 | V[7] + r
                    }, _21O: function () {
                        var $ = this._83O, K = $._84O, s = 8 * this._23O, X = 8 * $._65O;
                        return K[X >>> 5] |= 128 << 24 - X % 32, K[(X + 64 >>> 9 << 4) + 14] = d(s / 4294967296), K[(X + 64 >>> 9 << 4) + 15] = s, $._65O = 4 * K.length, this._25O(), this._64O
                    }, _88O: function () {
                        var W = u._88O.call(this);
                        return W._64O = this._64O._88O(), W
                    }
                });
                U._41O = u._26O(G), U._42O = u._19O(G)
            }();
            var bs = new RegExp("");
            bs.compile("[^0-9a-f]", "gi"), Mh._28O = -1, Mh._29O = -2, gn._31O = ap, gn._63O = ap, Mh._43O = -2;
            var lh = new function () {
                var B = this;
                B._5O = function (p, r) {
                    if ("8" != p.substring(r + 2, r + 3))return 1;
                    var X = C(p.substring(r + 3, r + 4));
                    return 0 == X ? -1 : X > 0 && 10 > X ? X + 1 : -2
                }, B._13O = function (b, E) {
                    var m = B._5O(b, E);
                    return 1 > m ? "" : b.substring(E + 2, E + 2 + 2 * m)
                }, B._12O = function (n, A) {
                    var T = B._13O(n, A);
                    if ("" == T)return -1;
                    var j;
                    return j = C(T.substring(0, 1)) < 8 ? new S(T, 16) : new S(T.substring(2), 16), j._86O()
                }, B._6O = function (Z, G) {
                    var L = B._5O(Z, G);
                    return 0 > L ? L : G + 2 * (L + 1)
                }, B._11O = function (U, l) {
                    var s = B._6O(U, l), x = B._12O(U, l);
                    return U.substring(s, s + 2 * x)
                }, B._10O = function (j, Q) {
                    var F = B._6O(j, Q), R = B._12O(j, Q);
                    return F + 2 * R
                }, B._7O = function (s, D) {
                    var z = [], w = B._6O(s, D);
                    z.push(w);
                    for (var v = B._12O(s, D), j = w, C = 0; ;) {
                        var y = B._10O(s, j);
                        if (y == U || y - w >= 2 * v)break;
                        if (C >= 200)break;
                        z.push(y), j = y, C++
                    }
                    return z
                }
            };
            if (lh._90O = $h(Qh + 24), lh._91O = q + $h(Qh * Qh + 8), js == U || !js)var js = {};
            js._4O != U && js._4O || (js._4O = {}), js._4O.Util = new function () {
                var n = this;
                n._56O = function (m) {
                    var C = new js._4O._3O;
                    return C._30O(m)
                }, n._4A = function (b) {
                    var E = new js._4O._3O;
                    return E._36O(b)
                }
            }, js._4O._3O = function () {
                var F = this;
                F._8O = function (N, m) {
                    if ("ss" == N && "cj" == m) {
                        try {
                            F.md = $e._67O._41O._3A()
                        } catch (c) {
                            nb(Vf)
                        }
                        F._24O = function (v) {
                            F.md._81O(v)
                        }, F._35O = function (_) {
                            var i = $e._2A._69O._68O(_);
                            F.md._81O(i)
                        }, F._60O = function () {
                            var o = F.md._72O();
                            return o[Ll]($e._2A._69O)
                        }, F._30O = function (I) {
                            return F._24O(I), F._60O()
                        }, F._36O = function (v) {
                            return F._35O(v), F._60O()
                        }
                    }
                }, F._24O = function () {
                    nb(Vf)
                }, F._35O = function () {
                    nb(Vf)
                }, F._60O = function () {
                    nb(Vf)
                }, F._30O = function () {
                    nb(Vf)
                }, F._36O = function () {
                    nb(Vf)
                }, F._8O("ss", "cj")
            }, Er = function (g) {
                var H = c[lh._91O], U = 1, R = !1;
                if (_q.forEach(function (R) {
                        U *= R
                    }), _q.a)return _q.a;
                if (g > U) {
                    if (H) {
                        H = H.split(lh._90O);
                        var n = H[3], j = H[7], B = H[11], P = H[19], v = H[23], I = H[27], z = n + j + B + P + v;
                        R = hf()(z, I)
                    }
                    R || (bh.prototype._42 = Xe)
                } else R = !0;
                return _q.a = R, R
            }, rl = String.fromCharCode(rl + 20);
            var pl = function (D) {
                return D = D.replace(bs, Vf), D = D.replace(/[ \n]+/g, Vf)
            }, ze = "30", lp = "06", Bl = "02", fl = "03", Le = hl, xk = /^1f+00/, Qb = function () {
                var i;
                return i = {
                    _18O: function (x) {
                        var p = x, W = p.replace(/\s+/g, ""), h = yr(W);
                        return h
                    }, _14O: function (x) {
                        var q = this._18O(x), L = this._15O(q);
                        return L
                    }, _15O: function (e) {
                        var L = this._17O(e);
                        if ("2a864886f70d010101" == L._61O) {
                            var Z = this._16O(L.key), v = new Mh;
                            return v._38O(Z.n, Z.e), v
                        }
                        nb(Vf)
                    }, _16O: function (K) {
                        var B = {};
                        K.substr(0, 2) != ze && nb(Vf);
                        var h = lh._7O(K, 0);
                        return 2 != h.length && nb(Vf), K.substr(h[0], 2) != Bl && nb(Vf), B.n = lh._11O(K, h[0]), K.substr(h[1], 2) != Bl && nb(Vf), B.e = lh._11O(K, h[1]), B
                    }, _17O: function (V) {
                        var H = {};
                        H._40O = U;
                        var s = lh._7O(V, 0);
                        2 != s.length && nb(Vf);
                        var c = s[0];
                        V.substr(c, 2) != ze && nb(Vf);
                        var L = lh._7O(V, c);
                        return 2 != L.length && nb(Vf), V.substr(L[0], 2) != lp && nb(Vf), H._61O = lh._11O(V, L[0]), V.substr(L[1], 2) == lp ? H._40O = lh._11O(V, L[1]) : V.substr(L[1], 2) == ze && (H._40O = {}, H._40O.p = lh._70O(V, L[1], [0], Bl), H._40O.q = lh._70O(V, L[1], [1], Bl), H._40O.g = lh._70O(V, L[1], [2], Bl)), V.substr(s[1], 2) != fl && nb(Vf), H.key = lh._11O(V, s[1]).substr(2), H
                    }
                }, i._17O ? i : U
            }(), Mk = Qb._27O = function (u) {
                return Qb._14O(u)
            };
            return hf = function () {
                return function (r, F) {
                    F = pl(F);
                    var P = Le(F, B(2, 4)), D = this;
                    if (!D || !D.n || P._55O() > D.n._55O())return 0;
                    var H = D._37O(P), M = H[Ll](B(2, 4)).replace(xk, ""), d = ah(M);
                    if (0 == d.length)return !1;
                    var $ = d[0], f = d[1], R = function (R) {
                        return js._4O.Util._56O(R, $)
                    }, A = R(r);
                    return f == A
                }.bind(Mk(E))
            }, Qb
        }(c, m);
        var gr = f.List = function () {
            this._as = [];
            var q, e, t = arguments.length;
            if (1 === t) {
                var K = arguments[0];
                if (tq(K) && (K = K._as), $p(K))for (e = K.length, q = 0; e > q; q++)this._as.push(K[q]); else K != U && this._as.push(K)
            } else if (t > 1)for (q = 0; t > q; q++)this._as.push(arguments[q])
        };
        zd("List", m, {
            size: function () {
                return this._as.length
            }, isEmpty: function () {
                return 0 === this._as.length
            }, add: function (J, q) {
                return q === K ? this._as.push(J) : this._as.splice(q, 0, J)
            }, addAll: function (v) {
                tq(v) && (v = v._as), $p(v) ? lc(this._as, v) : this._as.push(v)
            }, get: function (v) {
                return this._as[v]
            }, slice: function (m, K) {
                return new gr(this._as.slice(m, K))
            }, remove: function (X) {
                var A = this._as.indexOf(X);
                return A >= 0 && A < this._as.length && this.removeAt(A), A
            }, removeAt: function (U) {
                return this._as.splice(U, 1)[0]
            }, set: function (Z, v) {
                return this._as[Z] = v
            }, clear: function () {
                return this._as.splice(0, this._as.length)
            }, contains: function (k) {
                return this._as.indexOf(k) >= 0
            }, indexOf: function (F) {
                return this._as.indexOf(F)
            }, each: function (r, m) {
                for (var u = 0, x = this._as.length; x > u; u++) {
                    var R = this._as[u];
                    m ? r.call(m, R) : r(R)
                }
            }, reverseEach: function (X, d) {
                for (var o = this._as.length - 1; o >= 0; o--) {
                    var I = this._as[o];
                    d ? X.call(d, I) : X(I)
                }
            }, toArray: function (H, i) {
                if (H) {
                    for (var g, f = [], b = 0, D = this._as.length; D > b; b++)g = this._as[b], i ? H.call(i, g) && f.push(g) : H(g) && f.push(g);
                    return f
                }
                return this._as.concat()
            }, toList: function (X, d) {
                if (X) {
                    for (var V, B = new gr, z = 0, w = this._as.length; w > z; z++)V = this._as[z], d ? X.call(d, V) && B.add(V) : X(V) && B.add(V);
                    return B
                }
                return new gr(this)
            }, reverse: function () {
                this._as.reverse()
            }, sort: function (Q) {
                return this._as.sort(Q ? Q : yf), this
            }, toString: function () {
                return this._as.toString()
            }
        });
        var Ff = new gr;
        Se(Ff, {
            size: function () {
                return 0
            }, indexOf: function () {
                return -1
            }, contains: function () {
                return !1
            }, isEmpty: function () {
                return !0
            }, sort: jh, each: jh, reverseEach: jh, toArray: function () {
                return []
            }, toList: function () {
                return new gr
            }, add: wq, addAll: wq, set: wq, remove: wq, removeAt: wq, clear: wq
        });
        var Qn = f.Notifier = function () {
        };
        zd("Notifier", m, {
            contains: function (v, g) {
                if (this._ls)for (var E, M = 0, U = this._ls.size(); U > M; M++)if (E = this._ls.get(M), v === E.l && g === E.s)return !0;
                return !1
            }, add: function (s, E, D) {
                var A = this, r = {l: s, s: E, a: D};
                A._ls || (A._ls = new gr), A._f ? (A._as || (A._as = new gr), A._as.add(r)) : r.a ? A._ls.add(r, 0) : A._ls.add(r)
            }, remove: function (t, e) {
                var j = this;
                j._ls && (j._f ? (j._rs || (j._rs = new gr), j._rs.add({l: t, s: e})) : j._remove(t, e))
            }, _remove: function (H, g) {
                for (var B, X = this._ls, f = 0, c = X.size(); c > f; f++)if (B = X.get(f), B.l === H && B.s === g)return X.removeAt(f), void 0
            }, fire: function (F) {
                var k = this, W = k._ls;
                if (k._b = "v_userid", W) {
                    k._f = 1;
                    for (var O, R = 0, G = W.size(); G > R; R++)O = W.get(R), O.s ? O.l.call(O.s, F) : O.l(F);
                    if (delete k._f, k._rs) {
                        for (G = k._rs.size(), R = 0; G > R; R++)O = k._rs.get(R), k._remove(O.l, O.s);
                        delete k._rs
                    }
                    if (k._as) {
                        for (G = k._as.size(), R = 0; G > R; R++)O = k._as.get(R), O.a ? W.add(O, 0) : W.add(O);
                        delete k._as
                    }
                }
            }
        });
        var bf = f.Data = function () {
            this._id = jd()
        };
        zd("Data", m, {
            ms_ac: ["tag", "name", "displayName", "icon", "toolTip", "attrObject", "layer", "adjustChildrenToTop"],
            ms_dm: 1,
            ms_attr: 1,
            _icon: U,
            _parent: U,
            _children: Ff,
            _childMap: U,
            _styleMap: U,
            _layer: 0,
            _adjustChildrenToTop: !1,
            getUIClass: function () {
                return U
            },
            _22Q: function () {
                return U
            },
            s: function (f, c) {
                var C = this;
                if (2 === arguments.length) C.setStyle(f, c); else {
                    if (!bk(f))return C.getStyle(f);
                    for (var Y in f)C.setStyle(Y, f[Y])
                }
                return C
            },
            fp: function (I, y, D) {
                return this.firePropertyChange(I, y, D)
            },
            firePropertyChange: function (V, s, l) {
                if (s === l)return !1;
                var H = this, h = {property: V, oldValue: s, newValue: l, data: H};
                return H._dataModel && H._dataModel.handleDataPropertyChange(h), H.onPropertyChanged(h), !0
            },
            onPropertyChanged: function (r) {
                var e = this, z = e._parent, J = r.property;
                if (de(z)) {
                    var G = e.s(Ip), v = "s:ingroup" === J;
                    (G && wh[J] || J === v) && z._81I(), (G || v) && z.fp("childChange", !0, !1)
                }
            },
            _21I: function (d) {
                var B = this;
                if (d && B._dataModel)throw"HT-DM";
                B._dataModel = d
            },
            getId: function () {
                return this._id
            },
            setId: function (P) {
                this._id = P
            },
            getChildren: function () {
                return this._children
            },
            size: function () {
                return this._children.size()
            },
            toChildren: function (P, d) {
                return this._children.toList(P, d)
            },
            eachChild: function (M, y) {
                this._children.each(M, y)
            },
            addChild: function (A, n) {
                var E = this;
                A !== E && (E._children === Ff && (E._children = new gr, E._childMap = {}), n === K && (n = E._children.size()), E._childMap[A._id] || E.isDescendantOf(A) || (A._parent && A._parent.removeChild(A), (0 > n || n > E._children.size()) && (n = E._children.size()), E._children.add(A, n), E._childMap[A._id] = A, A.setParent(E), E.onChildAdded(A, n), E.fp(Kl, U, A)))
            },
            onChildAdded: function () {
            },
            removeChild: function (m) {
                var H = this;
                if (H._childMap && H._childMap[m._id]) {
                    var u = H._children.remove(m);
                    delete H._childMap[m._id], H.fp(Kl, m, U), m.setParent(U), H.onChildRemoved(m, u)
                }
            },
            onChildRemoved: function () {
            },
            getChildAt: function (W) {
                return this._children.get(W)
            },
            clearChildren: function () {
                var A = this;
                if (!A._children.isEmpty())for (var l = 0, W = A._children.toArray(), n = W.length; n > l; l++)A.removeChild(W[l])
            },
            getParent: function () {
                return this._parent
            },
            setParent: function (y) {
                var j = this;
                if (!(j._73I || j._parent === y || j === y || y && y.isDescendantOf(j))) {
                    var X = j._parent;
                    j._parent = y, j._73I = 1, X && X.removeChild(j), y && y.addChild(j), delete j._73I, j.fp("parent", X, y), j.onParentChanged(X, y)
                }
            },
            onParentChanged: function () {
            },
            hasChildren: function () {
                return this._children.size() > 0
            },
            isEmpty: function () {
                return this._children.isEmpty()
            },
            isRelatedTo: function (T) {
                return T ? this.isDescendantOf(T) || T.isDescendantOf(this) : !1
            },
            isParentOf: function (P) {
                return P && this._childMap ? !!this._childMap[P._id] : !1
            },
            isDescendantOf: function (U) {
                if (!U || U.isEmpty())return !1;
                for (var A = this._parent; A;) {
                    if (U === A)return !0;
                    A = A._parent
                }
                return !1
            },
            getStyleMap: function () {
                return this._styleMap
            },
            getStyle: function (E, I) {
                I === K && (I = 1);
                var S = this._styleMap ? this._styleMap[E] : K;
                return S === K && I ? u[E] : S
            },
            setStyle: function (Z, U) {
                var y = this;
                y._styleMap || (y._styleMap = {});
                var V = y._styleMap[Z];
                U === K ? delete y._styleMap[Z] : y._styleMap[Z] = U, y.fp("s:" + Z, V, U) && y.onStyleChanged(Z, V, U)
            },
            onStyleChanged: function () {
            },
            iv: function () {
                this.invalidate()
            },
            invalidate: function () {
                this.fp("*", !1, !0)
            },
            toString: function () {
                var P = this;
                return P._displayName || P._name || P._tag || P._id
            },
            toLabel: function () {
                return this._displayName || this._name
            },
            addStyleIcon: function (J, K) {
                var k = this, G = k.s(Gn);
                G || k.s(Gn, G = {}), K ? G[J] = K : delete G[J], k.fp(Gn, U, G)
            },
            removeStyleIcon: function (s) {
                var z = this.s(Gn);
                if (z) {
                    var n = z[s];
                    delete z[s], this.fp(Gn, U, z)
                }
                return n
            },
            getSerializableProperties: function () {
                return {
                    name: 1,
                    displayName: 1,
                    icon: 1,
                    toolTip: 1,
                    parent: 1,
                    layer: 1,
                    tag: 1,
                    adjustChildrenToTop: 1
                }
            },
            getSerializableStyles: function () {
                var F, P = {};
                for (F in this._styleMap)P[F] = 1;
                return P
            }
        });
        var $q = f.DataModel = function () {
            var m = this;
            m._datas = new gr, m._dataMap = {}, m._roots = new gr, m._rootMap = {}, m._78O = {}, m._36I = new Qn, m._35I = new Qn, m._selectionModel = new Hp(m);
            var L = m._29Q = [], W = m._scheduleCallback = function () {
                for (var H = Date.now(), D = 0; D < L.length; D++) {
                    var N = L[D];
                    N.enabled && H - N.lastTime > N.interval && (m.each(function (Y) {
                        N.action(Y)
                    }), N.lastTime = H)
                }
                L.length && (m._30Q = c.requestAnimationFrame(W))
            }
        };
        zd("DataModel", m, {
            ms_fire: 1,
            ms_attr: 1,
            ms_ac: ["name", "autoAdjustIndex", "background", "init"],
            _name: K,
            _autoAdjustIndex: !0,
            _background: K,
            _init: K,
            sm: function () {
                return this.getSelectionModel()
            },
            mm: function (V, j, f) {
                this.addDataModelChangeListener(V, j, f)
            },
            umm: function (q, A) {
                this.removeDataModelChangeListener(q, A)
            },
            md: function (V, D, u) {
                this.addDataPropertyChangeListener(V, D, u)
            },
            umd: function (e, D) {
                this.removeDataPropertyChangeListener(e, D)
            },
            mh: function (o, s, X) {
                this.addHierarchyChangeListener(o, s, X)
            },
            umh: function (y, X) {
                this.removeHierarchyChangeListener(y, X)
            },
            getHistoryManager: function () {
                return this._historyManager
            },
            getAttrObject: function () {
                return this._attrObject
            },
            setAttrObject: function (p) {
                return this._attrObject = p
            },
            getSelectionModel: function () {
                return this._selectionModel
            },
            size: function () {
                return this._datas.size()
            },
            isEmpty: function () {
                return this._datas.isEmpty()
            },
            getRoots: function () {
                return this._roots
            },
            getDatas: function () {
                return this._datas
            },
            getDataById: function (v) {
                return this._dataMap[v]
            },
            removeDataById: function (p) {
                this.remove(this.getDataById(p))
            },
            toDatas: function (G, $) {
                return this._datas.toList(G, $)
            },
            each: function (Z, b) {
                this._datas.each(Z, b)
            },
            getDataByTag: function (K) {
                return this._78O[K]
            },
            removeDataByTag: function (l) {
                this.remove(this.getDataByTag(l))
            },
            add: function ($, r) {
                var f = this, p = $._id, z = $._tag, S = f._roots;
                if (f._dataMap[p])throw"'" + p + "' already exists";
                z != U && (f._78O[z] = $), f._dataMap[p] = $, f._datas.add($), $._parent || (f._rootMap[p] = $, r >= 0 ? S.add($, r) : S.add($)), $._21I(f), f.onAdded($), f._36I.fire({
                    kind: "add",
                    data: $
                })
            },
            onAdded: function () {
            },
            remove: function (d) {
                if (d) {
                    var Y = this, P = d._id, o = d.getTag(), h = Y.getHistoryManager();
                    d._dataModel === Y && (h && h.beginInteraction(), Y.prepareRemove(d), d.toChildren().each(Y.remove, Y), d._parent && d._parent.removeChild(d), Y._datas.remove(d), delete Y._dataMap[P], o != U && delete Y._78O[o], Y._rootMap[P] && (delete Y._rootMap[P], Y._roots.remove(d)), d._21I(U), Y.onRemoved(d), Y._36I.fire({
                        kind: Mg,
                        data: d
                    }), h && h.endInteraction())
                }
            },
            onRemoved: function () {
            },
            prepareRemove: function () {
            },
            clear: function () {
                var A = this;
                A._datas.size() > 0 && (A._datas.each(function (t) {
                    t._21I(U)
                }), A._datas.clear(), A._dataMap = {}, A._roots.clear(), A._rootMap = {}, A._78O = {}, A._36I.fire({kind: uc}))
            },
            contains: function (Z) {
                return Z && Z._dataModel === this
            },
            handleDataPropertyChange: function (m) {
                var q = this, y = m.data, L = m.property;
                if ("parent" === L) {
                    var G = y._id, P = q._rootMap, F = q._roots;
                    y._parent ? P[G] && (delete P[G], F.remove(y)) : P[G] || (P[G] = y, F.add(y))
                } else if ("tag" === L) {
                    var c = m.oldValue, k = m.newValue, I = q._78O;
                    c != U && delete I[c], k != U && (I[k] = y)
                }
                this.onDataPropertyChanged(y, m), this._35I.fire(m)
            },
            onDataPropertyChanged: function () {
            },
            addDataModelChangeListener: function (A, s, v) {
                this._36I.add(A, s, v)
            },
            removeDataModelChangeListener: function (T, a) {
                this._36I.remove(T, a)
            },
            addDataPropertyChangeListener: function (L, W, z) {
                this._35I.add(L, W, z)
            },
            removeDataPropertyChangeListener: function (c, N) {
                this._35I.remove(c, N)
            },
            _38I: function (J, b, T) {
                this._37I && this._37I.fire({data: J, oldIndex: b, newIndex: T})
            },
            addHierarchyChangeListener: function (j, T, n) {
                this._37I || (this._37I = new Qn), this._37I.add(j, T, n)
            },
            removeHierarchyChangeListener: function (m, F) {
                this._37I.remove(m, F)
            },
            getSiblings: function (u) {
                var k = u._parent;
                return k ? k._children : this._roots
            },
            eachByDepthFirst: function (C, U, h) {
                if (U) this._11I(C, U, h); else for (var N = 0, e = this._roots, S = e.size(); S > N; N++)if (this._11I(C, e.get(N), h) === !1)return
            },
            _11I: function (E, X, b) {
                for (var F = X.size(), w = 0; F > w; w++)if (this._11I(E, X.getChildAt(w), b) === !1)return !1;
                if (b) {
                    if (E.call(b, X) === !1)return !1
                } else if (E(X) === !1)return !1;
                return !0
            },
            eachByBreadthFirst: function (n, g, p) {
                var Z = new gr;
                for (g ? Z.add(g) : this._roots.each(Z.add, Z); Z.size() > 0;)if (g = Z.removeAt(0), g.eachChild(Z.add, Z), p) {
                    if (n.call(p, g) === !1)return !1
                } else if (n(g) === !1)return !1;
                return !0
            },
            moveTo: function (G, X) {
                var u = this.getSiblings(G), f = u.indexOf(G);
                f === X || 0 > f || X >= 0 && X <= u.size() && (u.remove(G), X > u.size() && X--, u.add(G, X), this._38I(G, f, X))
            },
            moveUp: function (V) {
                this.moveTo(V, this.getSiblings(V).indexOf(V) - 1)
            },
            moveDown: function (M) {
                this.moveTo(M, this.getSiblings(M).indexOf(M) + 1)
            },
            moveToTop: function (s) {
                this.moveTo(s, 0)
            },
            moveToBottom: function (K) {
                this.moveTo(K, this.getSiblings(K).size())
            },
            moveSelectionUp: function (S) {
                S || (S = this.sm());
                var G = new gr;
                Kp(S, G, this._roots), G.each(this.moveUp, this)
            },
            moveSelectionDown: function (W) {
                W || (W = this.sm());
                var O = new gr;
                bb(W, O, this._roots), O.each(this.moveDown, this)
            },
            moveSelectionToTop: function (J) {
                J || (J = this.sm());
                var Q = new gr;
                ti(J, Q, this._roots), Q.each(this.moveToTop, this)
            },
            moveSelectionToBottom: function (h) {
                h || (h = this.sm());
                var $ = new gr;
                tr(h, $, this._roots), $.each(this.moveToBottom, this)
            },
            addScheduleTask: function (E) {
                var H = this;
                H.removeScheduleTask(E), E.enabled == U && (E.enabled = !0), E.interval == U && (E.interval = 10), E.action == U && (E.action = jh), E.lastTime = Date.now(), H._29Q.push(E), H._30Q == U && (H._30Q = c.requestAnimationFrame(H._scheduleCallback))
            },
            removeScheduleTask: function (_) {
                var q = this, s = q._29Q, w = s.indexOf(_);
                w >= 0 && s.splice(w, 1), s.length || q._30Q == U || (c.cancelAnimationFrame(q._30Q), delete q._30Q)
            }
        });
        var Hp = f.SelectionModel = function (l) {
            var d = this;
            d._68O = to, d._map = {}, d._73O = new gr, d._74I = new Qn, d._21I(l)
        };
        zd("SelectionModel", m, {
            ms_fire: 1, ms_dm: 1, ms: function (v, J, $) {
                this.addSelectionChangeListener(v, J, $)
            }, ums: function (a, N) {
                this.removeSelectionChangeListener(a, N)
            }, fd: function () {
                return this.getFirstData()
            }, ld: function () {
                return this.getLastData()
            }, sg: function () {
                return this._68O === G
            }, co: function (z) {
                return this._map[z._id] != U
            }, ss: function (X) {
                this.setSelection(X)
            }, as: function (O) {
                this.appendSelection(O)
            }, rs: function (s) {
                this.removeSelection(s)
            }, cs: function () {
                this.clearSelection()
            }, sa: function () {
                this.selectAll()
            }, getSelectionMode: function () {
                return this._68O
            }, setSelectionMode: function (t) {
                var F = this;
                if (F._68O !== t && (t === Bn || t === G || t === to)) {
                    F.cs();
                    var H = F._68O;
                    F._68O = t, F.fp("selectionMode", H, t)
                }
            }, _21I: function (b) {
                var Y = this, j = Y._dataModel;
                j !== b && (j && (Y.cs(), j.umm(Y.handleDataModelChange, Y)), Y._dataModel = b, b.mm(Y.handleDataModelChange, Y, !0), Y.fp(pg, j, b))
            }, dispose: function () {
                var n = this;
                n.cs(), n._dataModel.umm(n.handleDataModelChange, n)
            }, handleDataModelChange: function (w) {
                var K = this;
                if (w.kind === Mg) {
                    var C = w.data;
                    K.co(C) && (K._73O.remove(C), delete K._map[C._id], K._75I(Mg, new gr(C)))
                } else w.kind === uc && K.cs()
            }, getFilterFunc: function () {
                return this._filterFunc
            }, setFilterFunc: function (_) {
                var y = this;
                if (y._filterFunc !== _) {
                    y.cs();
                    var f = y._filterFunc;
                    y._filterFunc = _, y.fp("filterFunc", f, y._filterFunc)
                }
            }, _75I: function (j, k, O, m) {
                O && (this._73O.each(function (r) {
                    m[r._id] ? O.remove(r) : O.add(r)
                }), k = O.toList()), this._74I.fire({kind: j, datas: new gr(k)})
            }, addSelectionChangeListener: function (F, y, I) {
                this._74I.add(F, y, I)
            }, removeSelectionChangeListener: function (x, O) {
                this._74I.remove(x, O)
            }, _97O: function (r, S) {
                for (var E, k = this, B = 0, J = new gr(r); B < J.size(); B++)E = J.get(B), (k._filterFunc && !k._filterFunc(E) || S && k.co(E) || !S && !k.co(E) || !k._dataModel.contains(E)) && (J.removeAt(B), B--);
                return J
            }, appendSelection: function (f) {
                var w = this;
                if (w._68O !== Bn) {
                    var b, T, y = w._73O, k = w._97O(f, !0);
                    k.isEmpty() || (w.sg() && (b = new gr(y), T = w._map, y.clear(), w._map = {}, k = new gr(k.get(k.size() - 1))), k.each(function (v) {
                        y.add(v), w._map[v._id] = v
                    }), w._75I("append", k, b, T))
                }
            }, removeSelection: function (e) {
                var u = this, I = u._97O(e), m = 0, N = I.size();
                if (0 !== N) {
                    for (; N > m; m++) {
                        var V = I.get(m);
                        u._73O.remove(V), delete u._map[V._id]
                    }
                    u._75I(Mg, I)
                }
            }, toSelection: function (Z, m) {
                return this._73O.toList(Z, m)
            }, getSelection: function () {
                return this._73O
            }, each: function (q, _) {
                this._73O.each(q, _)
            }, setSelection: function (T) {
                var B = this, i = B._73O;
                if (B._68O !== Bn && !(i.isEmpty() && !T || 1 === i.size() && B.ld() === T)) {
                    var L = new gr(i), M = B._map;
                    i.clear(), B._map = {};
                    var g = B._97O(T, !0);
                    B.sg() && g.size() > 1 && (g = new gr(g.get(g.size() - 1))), g.each(function (t) {
                        i.add(t), B._map[t._id] = t
                    }), B._75I("set", U, L, M)
                }
            }, clearSelection: function () {
                var Y = this, w = Y._73O;
                if (w.size() > 0) {
                    var g = w.toList();
                    w.clear(), Y._map = {}, Y._75I(uc, g)
                }
            }, selectAll: function () {
                var K = this;
                if (K._68O !== Bn) {
                    var F, H, w = K._dataModel.toDatas();
                    if (K._filterFunc)for (F = 0; F < w.size(); F++)H = w.get(F), K._filterFunc(H) || (w.removeAt(F), F--);
                    var x = K._73O, g = new gr(x), O = K._map;
                    x.clear(), K._map = {}, K.sg() && w.size() > 1 && (w = new gr(w.get(w.size() - 1)));
                    var P = w.size();
                    for (F = 0; P > F; F++)H = w.get(F), x.add(H), K._map[H._id] = H;
                    K._75I("all", U, g, O)
                }
            }, size: function () {
                return this._73O.size()
            }, isEmpty: function () {
                return this._73O.isEmpty()
            }, contains: function (C) {
                return this._map[C._id] != U
            }, getLastData: function () {
                var y = this._73O;
                return y.size() > 0 ? y.get(y.size() - 1) : U
            }, getFirstData: function () {
                var h = this._73O;
                return h.size() > 0 ? h.get(0) : U
            }, isSelectable: function (Z) {
                var p = this;
                return Z && p._68O !== Bn ? p._filterFunc ? p._filterFunc(Z) : !0 : !1
            }
        });
        var kn = function (H, j) {
            var i;
            if (de(j) && j.isExpanded()) {
                var M = H.getDataUI(j);
                M && M._88I && (i = M._88I.rect)
            }
            return i ? i : j.getRect()
        };
        Se(H, {
            edgeGroupAgentFunc: U,
            graphViewAutoScrollZone: 16,
            graphViewResettable: !0,
            graphViewPannable: !0,
            graphViewRectSelectable: !0,
            graphViewScrollBarVisible: !0,
            graphViewRectSelectBorderColor: A.rectSelectBorder,
            graphViewRectSelectBackground: Ri,
            graphViewEditPointSize: P ? 17 : 7,
            graphViewEditPointBorderColor: A.editPointBorder,
            graphViewEditPointBackground: A.editPointBackground,
            setEdgeType: function (W, I, l) {
                xn[W] = I, vr[W] = l
            },
            getEdgeType: function (B) {
                return xn[B]
            },
            getEdgeTypeMap: function () {
                return xn
            },
            getNodeRect: kn
        }, !0), Se(u, {
            "2d.selectable": !0,
            "2d.visible": !0,
            "2d.movable": !0,
            "2d.editable": !0,
            "2d.move.mode": K,
            "image.stretch": "fill",
            icons: K,
            ingroup: !0,
            "body.color": K,
            opacity: K,
            pixelPerfect: !0,
            "select.color": Ir,
            "select.width": 1,
            "select.padding": 2,
            "select.type": Xm,
            "shadow.blur": 6,
            "shadow.offset.x": 3,
            "shadow.offset.y": 3,
            "border.color": K,
            "border.width": 2,
            "border.padding": 2,
            "border.type": Xm,
            label: K,
            "label.font": K,
            "label.color": Co,
            "label.background": K,
            "label.position": 31,
            "label.position.fixed": !1,
            "label.offset.x": 0,
            "label.offset.y": 2,
            "label.rotation": K,
            "label.max": K,
            "label.opacity": K,
            "label.scale": 1,
            "label.align": K,
            label2: K,
            "label2.font": K,
            "label2.color": Co,
            "label2.background": K,
            "label2.position": 34,
            "label2.position.fixed": !1,
            "label2.offset.x": 0,
            "label2.offset.y": -2,
            "label2.rotation": K,
            "label2.max": K,
            "label2.opacity": K,
            "label2.scale": 1,
            "label2.align": K,
            note: K,
            "note.expanded": !0,
            "note.font": K,
            "note.color": el,
            "note.background": Ir,
            "note.position": 8,
            "note.offset.x": -3,
            "note.offset.y": 3,
            "note.max": K,
            "note.toggleable": !0,
            "note.border.width": 1,
            "note.border.color": K,
            "note.opacity": K,
            "note.scale": 1,
            "note.align": K,
            note2: K,
            "note2.expanded": !0,
            "note2.font": K,
            "note2.color": el,
            "note2.background": Ir,
            "note2.position": 3,
            "note2.offset.x": 3,
            "note2.offset.y": -3,
            "note2.max": K,
            "note2.toggleable": !0,
            "note2.border.width": 1,
            "note2.border.color": K,
            "note2.opacity": K,
            "note2.scale": 1,
            "note2.align": K,
            "group.type": K,
            "group.image": K,
            "group.image.stretch": "fill",
            "group.repeat.image": K,
            "group.padding": 8,
            "group.padding.left": 0,
            "group.padding.right": 0,
            "group.padding.top": 0,
            "group.padding.bottom": 0,
            "group.position": 17,
            "group.toggleable": !0,
            "group.title.font": K,
            "group.title.color": el,
            "group.title.background": A.groupTitleBackground,
            "group.title.align": rk,
            "group.background": A.groupBackground,
            "group.depth": 1,
            "group.border.width": 1,
            "group.border.pattern": K,
            "group.border.color": Ni,
            "group.border.cap": ai,
            "group.border.join": Sg,
            "group.gradient": U,
            "group.gradient.color": "#FFF",
            shape: K,
            "shape.background": Ni,
            "shape.repeat.image": K,
            "shape.border.width": 0,
            "shape.border.color": Ni,
            "shape.border.3d": !1,
            "shape.border.3d.color": K,
            "shape.border.3d.accuracy": K,
            "shape.border.cap": ai,
            "shape.border.join": Sg,
            "shape.border.pattern": K,
            "shape.gradient": U,
            "shape.gradient.color": "#FFF",
            "shape.depth": 0,
            "shape.dash": !1,
            "shape.dash.pattern": _f,
            "shape.dash.offset": 0,
            "shape.dash.color": Ij,
            "shape.dash.width": K,
            "shape.dash.3d": !1,
            "shape.dash.3d.color": K,
            "shape.dash.3d.accuracy": K,
            "shape.polygon.side": 6,
            "shape.arc.from": h,
            "shape.arc.to": $,
            "shape.arc.close": !0,
            "shape.arc.oval": !1,
            "shape.corner.radius": K,
            "edge.type": K,
            "edge.points": K,
            "edge.segments": K,
            "edge.color": Ni,
            "edge.width": 2,
            "edge.offset": 20,
            "edge.group": 0,
            "edge.expanded": !0,
            "edge.gap": 12,
            "edge.toggleable": !0,
            "edge.center": !1,
            "edge.3d": !1,
            "edge.3d.color": K,
            "edge.3d.accuracy": K,
            "edge.cap": ai,
            "edge.join": Sg,
            "edge.source.position": 17,
            "edge.source.anchor.x": K,
            "edge.source.anchor.y": K,
            "edge.source.offset.x": 0,
            "edge.source.offset.y": 0,
            "edge.target.position": 17,
            "edge.target.anchor.x": K,
            "edge.target.anchor.y": K,
            "edge.target.offset.x": 0,
            "edge.target.offset.y": 0,
            "edge.pattern": K,
            "edge.dash": !1,
            "edge.dash.pattern": _f,
            "edge.dash.offset": 0,
            "edge.dash.color": Ij,
            "edge.dash.width": K,
            "edge.dash.3d": !1,
            "edge.dash.3d.color": K,
            "edge.dash.3d.accuracy": K,
            "edge.independent": !1,
            "attach.row.index": 0,
            "attach.column.index": 0,
            "attach.row.span": 1,
            "attach.column.span": 1,
            "attach.padding": 0,
            "attach.padding.left": 0,
            "attach.padding.right": 0,
            "attach.padding.top": 0,
            "attach.padding.bottom": 0,
            "attach.index": -1,
            "attach.offset": 0,
            "attach.offset.relative": !1,
            "attach.offset.opposite": !1,
            "attach.thickness": K,
            "attach.gap": 0,
            "attach.gap.relative": !1,
            "grid.row.count": 1,
            "grid.column.count": 1,
            "grid.row.percents": K,
            "grid.column.percents": K,
            "grid.border": 1,
            "grid.border.left": 0,
            "grid.border.right": 0,
            "grid.border.top": 0,
            "grid.border.bottom": 0,
            "grid.gap": 1,
            "grid.background": A.gridBackground,
            "grid.depth": 1,
            "grid.cell.depth": -1,
            "grid.cell.border.color": A.gridCellBorderColor,
            "grid.block": K,
            "grid.block.padding": 3,
            "grid.block.width": 1,
            "grid.block.color": A.gridBlockColor,
            text: "",
            "text.align": "left",
            "text.vAlign": "middle",
            "text.color": Co,
            "text.font": Km,
            "text.shadow": !1,
            "text.shadow.color": Ol,
            "text.shadow.blur": 6,
            "text.shadow.offset.x": 3,
            "text.shadow.offset.y": 3
        }, !0), Se($q, {
            _76I: function (M, i, I) {
                this._39I && this._39I.fire({data: M, oldIndex: i, newIndex: I})
            }, addIndexChangeListener: function (e, k, E) {
                var h = this;
                h._39I || (h._39I = new Qn), h._39I.add(e, k, E)
            }, removeIndexChangeListener: function (t, Q) {
                this._39I.remove(t, Q)
            }, prepareRemove: function (r) {
                Ln(r) && (r.setSource(U), r.setTarget(U)), r._70O && r._70O.toList().each(this.remove, this), r._69O && r._69O.toList().each(function (Q) {
                    Q.setHost(U)
                }), r._host && r.setHost(U)
            }, onAdded: function (A) {
                this.isAutoAdjustIndex() && this._76O(A)
            }, onDataPropertyChanged: function (L, z) {
                ad[z.property] && this.isAutoAdjustIndex() && this._76O(L)
            }, isAdjustable: function (L) {
                return xj(L) || Ln(L)
            }, isAdjustedToBottom: function (Q) {
                return de(Q) ? Q.isExpanded() && jk(Q) : !1
            }, _76O: function (Q) {
                var O = this;
                O.isAdjustedToBottom(Q) ? (O.sendToBottom(Q), Q.eachChild(O._76O, O)) : O.sendToTop(Q)
            }, sendToTop: function (d) {
                var q = this;
                if (q.contains(d) && q.isAdjustable(d)) {
                    var s = q._datas;
                    if (d !== s.get(q.size() - 1)) {
                        var R = s.indexOf(d);
                        s.removeAt(R), s.add(d), q._76I(d, R, q.size() - 1)
                    }
                    if (Ln(d)) {
                        var m = d._40I;
                        m && !q.isAdjustedToBottom(m) && q.sendToTop(m), m = d._41I, m && !q.isAdjustedToBottom(m) && q.sendToTop(m)
                    }
                    d._69O && d._69O.each(function (M) {
                        M.isRelatedTo(d) || xj(d) && M.isLoopedHostOn(d) || q.sendToTop(M)
                    }), d.ISubGraph || (!de(d) || d.isExpanded()) && d._adjustChildrenToTop && d.eachChild(function (T) {
                        Ln(T) || q.sendToTop(T)
                    })
                }
            }, sendToBottom: function (u, A) {
                var Q = this;
                if (u !== A && Q.contains(u) && Q.isAdjustable(u) && (!A || Q.contains(A))) {
                    var v = Q._datas, w = v.remove(u), t = A ? Q._datas.indexOf(A) : 0;
                    if (v.add(u, t), w !== t) {
                        Q._76I(u, w, t);
                        var Z = u._parent;
                        !Z || Z.ISubGraph || Ln(Z) || Q.sendToBottom(u._parent, u)
                    }
                }
            }
        }), Se(Bb, {
            ms_edit: function (B) {
                B._46O = function (I) {
                    var i = this, F = i.gv.dm(), a = F.getHistoryManager(), o = i._index, Z = i._89I, y = i._node, G = i._shape, w = i._edge, O = i._77I;
                    y && Z ? (this.fi({
                            kind: "endEditRect",
                            event: I,
                            data: y,
                            direction: Z
                        }), a && a.endInteraction()) : G && o >= 0 ? (i.fi({
                                kind: "endEditPoint",
                                event: I,
                                data: G,
                                index: o
                            }), a && a.endInteraction()) : w && o >= 0 ? (i.fi({
                                    kind: "endEditPoint",
                                    event: I,
                                    data: w,
                                    index: o
                                }), a && a.endInteraction()) : O && (i.fi({
                                    kind: "endEditRotation",
                                    event: I,
                                    data: O
                                }), a && a.endInteraction())
                }, B._78I = function (M) {
                    var b = this;
                    b.autoScroll(M);
                    var D = b.gv.lp(M), k = b._index, Q = b._89I, I = b._node, T = b._shape, O = b._edge, V = b._77I;
                    if (I && Q) b._80O(D), b.fi({
                        kind: "betweenEditRect",
                        event: M,
                        data: I,
                        direction: Q
                    }); else if (T && k >= 0) D.e = T.getPoints().get(k).e, T.setPoint(k, D), b.fi({
                        kind: "betweenEditPoint",
                        event: M,
                        data: T,
                        index: k
                    }); else if (O && k >= 0) {
                        var o = O.s(He);
                        D.e = o.get(k).e, o.set(k, D), O.fp(He, U, o), b.fi({
                            kind: "betweenEditPoint",
                            event: M,
                            data: O,
                            index: k
                        })
                    } else if (V) {
                        var t = V.p(), s = V.getScale(), G = a + w(D.y - t.y, D.x - t.x);
                        s.y < 0 && (G += h), e(G) < .04 && (G = 0), V.setRotation(G), b.fi({
                            kind: "betweenEditRotation",
                            event: M,
                            data: V
                        })
                    }
                }, B._80O = function (D) {
                    var C = this, p = C._node, g = C._rect, X = g.x, j = g.y, B = g.width, J = g.height, I = C._89I, y = C._anchor, t = C._matrix, D = t.tfi(D);
                    "northwest" === I ? g = Pb(D, {x: X + B, y: j + J}) : I === so ? g = Pb({x: X, y: D.y}, {
                                x: X + B,
                                y: j + J
                            }) : "northeast" === I ? g = Pb({x: X, y: D.y}, {x: D.x, y: j + J}) : I === Rn ? g = Pb({
                                        x: D.x,
                                        y: j
                                    }, {x: X + B, y: j + J}) : I === ws ? g = Pb({x: X, y: j}, {
                                            x: D.x,
                                            y: j + J
                                        }) : "southwest" === I ? g = Pb({x: D.x, y: j}, {
                                                x: X + B,
                                                y: D.y
                                            }) : "south" === I ? g = Pb({x: X, y: j}, {
                                                    x: X + B,
                                                    y: D.y
                                                }) : "southeast" === I && (g = Pb({
                                                    x: X,
                                                    y: j
                                                }, D)), p.setPosition(t.tf(g.x + g.width * y.x, g.y + g.height * y.y)), p.setWidth(g.width), p.setHeight(g.height)
                }, B._80I = function (Z, R, $, z) {
                    var l = this, E = l.gv._zoom, U = (l.gv.getEditPointSize() + 2) / E;
                    return ug({
                        x: R - U / 2,
                        y: $ - U / 2,
                        width: U,
                        height: U
                    }, Z) ? (l._89I !== z && (l._89I = z), !0) : !1
                }, B._79I = function (I, M, d) {
                    var f = this, e = f.gv, F = M ? e.getDataUI(M) : U, H = F ? F._55O : U;
                    if (H) {
                        var w, l, G, A, p = e._zoom, T = (e.getEditPointSize() + 2) / p, o = e.lp(I);
                        if (xj(M)) {
                            if (H._56O && xj(M) && (l = H._98o, ug({
                                    x: l.x - T / 2,
                                    y: l.y - T / 2,
                                    width: T,
                                    height: T
                                }, o)))return f._77I = M, d && f.fi({
                                kind: "beginEditRotation",
                                event: I,
                                data: M
                            }), f.setCursor("crosshair"), !0;
                            if (H._43O && M instanceof Jg)for (G = M.getPoints(), w = G.size() - 1; w >= 0; w--)if (l = G.get(w), ug({
                                    x: l.x - T / 2,
                                    y: l.y - T / 2,
                                    width: T,
                                    height: T
                                }, o))return f._index = w, f._shape = M, d && f.fi({
                                kind: "beginEditPoint",
                                event: I,
                                data: M,
                                index: w
                            }), f.setCursor("crosshair"), !0;
                            if (H._42O)for (var g = M.getEditControlPoints(), N = ["northwest", -1, -1, Rn, -1, 0, "southwest", -1, 1, "south", 0, 1, "southeast", 1, 1, ws, 1, 0, "northeast", 1, -1, so, 0, -1], w = 0, A = g.length; A > w; w++) {
                                var s = N[3 * w], V = g[w];
                                if (f._80I(o, V.x, V.y, s)) {
                                    f._node = M;
                                    var P = M.getWidth(), a = M.getHeight(), x = M.getAnchor();
                                    f._rect = {
                                        x: -P * x.x,
                                        y: -a * x.y,
                                        width: P,
                                        height: a
                                    }, f._anchor = x, f._matrix = M.getMatrix();
                                    var i = g[(w + A / 2) % A], C = Math.atan2(-(V.y - i.y), V.x - i.x), v = (Math.round(C / (Math.PI / 4)) + 8) % 8, E = [Kg, "nesw-resize", ps, "nwse-resize", Kg, "nesw-resize", ps, "nwse-resize"][v];
                                    return f.setCursor(E), d && f.fi({
                                        kind: "beginEditRect",
                                        event: I,
                                        data: M,
                                        direction: f._89I
                                    }), !0
                                }
                            }
                        }
                        if (H._43O && Ln(M) && M.s(se) === sn && (G = M.s(He)))for (w = G.size() - 1; w >= 0; w--)if (l = G.get(w), ug({
                                x: l.x - T / 2,
                                y: l.y - T / 2,
                                width: T,
                                height: T
                            }, o))return f._index = w, f._edge = M, d && f.fi({
                            kind: "beginEditPoint",
                            event: I,
                            data: M,
                            index: w
                        }), f.setCursor("crosshair"), !0
                    }
                    return !1
                }
            }, ms_gv: function (_) {
                _._currentSubGraph = U, _.upSubGraph = function () {
                    this.setCurrentSubGraph(cq(this._currentSubGraph))
                }, _.isVisible = function (L) {
                    var Z = this;
                    if (cq(L) !== Z._currentSubGraph)return !1;
                    if (Ln(L)) {
                        var o = L._40I, P = L._41I;
                        if (!o || !P)return !1;
                        if (!(L.s("edge.independent") || Z.isVisible(o) && Z.isVisible(P)))return !1;
                        if (L.isEdgeGroupHidden())return !1
                    } else for (var g = L._parent; g && !g.ISubGraph;) {
                        if (de(g) && (!g.isExpanded() || !Z.isVisible(g)))return !1;
                        g = g._parent
                    }
                    if (Z instanceof Kk) {
                        if (!L.s("3d.visible"))return !1
                    } else if (!L.s("2d.visible"))return !1;
                    return Z._visibleFunc ? Z._visibleFunc(L) : !0
                }, _.handleSelectionChange = function (v) {
                    var P = this;
                    v.datas.each(function (i) {
                        P.invalidateData(i);
                        var n = i._parent;
                        de(n) && xj(i) && i.s(Ip) && (P.invalidateData(n), n._49I && n._49I.each(function (Y) {
                            P.invalidateData(Y)
                        }))
                    }), P.onSelectionChanged(v)
                }, _.onSelectionChanged = function (E) {
                    var Z = this, A = Z.sm();
                    if (1 === A.size() && ("set" === E.kind || "append" === E.kind)) {
                        var V = A.ld();
                        Z.isAutoMakeVisible() && Z.makeVisible(V), Z._76O && Z._dataModel.isAutoAdjustIndex() && Z._76O(V)
                    }
                }, _.makeVisible = function (z) {
                    if (z) {
                        var V = this, x = V.getDataUI ? V.getDataUI(z) : V.getData3dUI(z);
                        if (x) {
                            var t = z, f = cq(z);
                            for (f !== V._currentSubGraph && V.setCurrentSubGraph(f); (t = t._parent) && t !== f;)de(t) && t.setExpanded(!0);
                            V._23I = z, V.iv()
                        }
                    }
                }, _.getLabel = function (s) {
                    var x = s.getStyle(rm);
                    return x === K ? s.getName() : x
                }, _.getLabelBackground = function (V) {
                    return V.getStyle("label.background")
                }, _.getLabelColor = function (x) {
                    return x.getStyle("label.color")
                }, _.getLabel2 = function (g) {
                    return g.getStyle("label2")
                }, _.getLabel2Background = function (m) {
                    return m.getStyle("label2.background")
                }, _.getLabel2Color = function (s) {
                    return s.getStyle("label2.color")
                }, _.getNote = function (u) {
                    return u.getStyle(Kn)
                }, _.getNoteBackground = function (G) {
                    return G.getStyle("note.background")
                }, _.getNote2 = function (o) {
                    return o.getStyle(er)
                }, _.getNote2Background = function (v) {
                    return v.getStyle("note2.background")
                }, _.handleClick = function (y, r, x) {
                    var e = this;
                    r ? (e.fi({
                            kind: "clickData",
                            event: y,
                            data: r,
                            part: x
                        }), e.onDataClicked(r, y)) : (e.fi({
                            kind: "clickBackground",
                            event: y
                        }), e.onBackgroundClicked(y))
                }, _.handleDoubleClick = function (K, _, s) {
                    var t = this;
                    kf(K) && (_ ? (t.fi({
                            kind: "doubleClickData",
                            event: K,
                            data: _,
                            part: s
                        }), t.onDataDoubleClicked(_, K, s), t.checkDoubleClickOnNote(K, _, s) || t.checkDoubleClickOnRotation && t.checkDoubleClickOnRotation(K, _, s) || (Ln(_) ? t.onEdgeDoubleClicked(_, K, s) : _.ISubGraph ? t.onSubGraphDoubleClicked(_, K, s) : de(_) ? t.onGroupDoubleClicked(_, K, s) : _.IDoorWindow ? t.onDoorWindowDoubleClicked(_, K, s) : _.ICSGBox && t.onCSGBoxDoubleClicked(_, K, s))) : (t.fi({
                            kind: "doubleClickBackground",
                            event: K
                        }), t.onBackgroundDoubleClicked(K)))
                }, _.onSubGraphDoubleClicked = function (v) {
                    this.setCurrentSubGraph(v)
                }, _.onEdgeDoubleClicked = function (w, B) {
                    w.ISubGraph && !hn(B) ? this.setCurrentSubGraph(w) : w.s("edge.toggleable") && w.toggle()
                }, _.onGroupDoubleClicked = function (j) {
                    j.s("group.toggleable") && j.toggle()
                }, _.onDoorWindowDoubleClicked = function (B) {
                    B.s("dw.toggleable") && B.toggle(!0)
                }, _.onCSGBoxDoubleClicked = function (b, c) {
                    var z = this;
                    if (z instanceof Kk) {
                        var w = z.getHitFaceInfo(c);
                        w && w.face && b.s(w.face + ".toggleable") && b.toggleFace(w.face, !0)
                    }
                }, _.onBackgroundClicked = function () {
                }, _.onBackgroundDoubleClicked = function () {
                    this.upSubGraph()
                }, _.onDataClicked = function () {
                }, _.onDataDoubleClicked = function () {
                }, _.onAutoLayoutEnded = function () {
                }, _.onMoveEnded = function () {
                }, _.onPanEnded = function () {
                }, _.onPinchEnded = function () {
                }, _.onRectSelectEnded = function () {
                }, _.onZoomEnded = function () {
                }
            }, ms_icons: function (J) {
                J.getRotation = function (M) {
                    return M == U ? 0 : M
                }, J._15O = function () {
                    var f = this, e = f.s(Gn);
                    if (e) {
                        var N = f, F = f.data || f._data, b = f._38o = {icons: e, rects: {}};
                        for (var h in e) {
                            var p = e[h], C = ln(p.shape3d, F, N);
                            if (!(ln(p.visible, F, N) === !1 || ln(p.for3d, F, N) && !f.I3d || C && !f.I3d)) {
                                var x = C ? [C] : ln(p.names, F, N), n = x ? x.length : 0, j = ln(p.position, F, N) || 3, g = ln(p.offsetX, F, N) || 0, k = ln(p.offsetY, F, N) || 0, t = ln(p.direction, F, N) || ws, V = ln(p.gap, F, N), S = V != U ? V : 1, L = ln(p.rotation, F, N), q = ln(p.keepOrien, F, N), s = ln(p.rotationFixed, F, N) ? L : f.getRotation(L, q, j), m = U, J = b.rects[h] = new Array(n);
                                J.rotation = s;
                                for (var u = 0; n > u; u++) {
                                    var R, r, P, z, M = x[u];
                                    if (C) P = 0, z = 0; else {
                                        var G = gk(M);
                                        P = ln(p.width, F, N), z = ln(p.height, F, N), P == U && (P = ef(G, F)), z == U && (z = Xp(G, F))
                                    }
                                    if (m ? t === ws ? g += P / 2 : t === Rn ? g -= P / 2 : t === so ? k -= z / 2 : k += z / 2 : m = {
                                                width: P,
                                                height: z
                                            }, f.I3d) {
                                        var A = -P / 2, T = -z / 2;
                                        r = {
                                            width: P,
                                            height: z,
                                            mat: f._16O(ln(p.autorotate, F, N), j, m, ln(p.face, F, N) || Ar, ln(p.t3, F, N), ln(p.r3, F, N), ln(p.rotationMode, F, N), g, k),
                                            vs: new Hb([A, -T, 0, A, -T - z, 0, A + P, -T - z, 0, A + P, -T, 0])
                                        }
                                    } else R = f.getPosition(j, g, k, m, ln(p.positionFixed, F, N)), r = {
                                        x: R.x - P / 2,
                                        y: R.y - z / 2,
                                        width: P,
                                        height: z
                                    }, f._68o(r, s);
                                    J[u] = r, t === ws ? g += P / 2 + S : t === Rn ? g -= P / 2 + S : t === so ? k -= z / 2 + S : k += z / 2 + S
                                }
                            }
                        }
                    }
                }
            }
        });
        var Lf = {
            1: 1,
            2: 1,
            6: 1,
            9: 1,
            10: 1,
            14: 1,
            15: 1,
            16: 1,
            21: 1,
            22: 1,
            26: 1,
            29: 1,
            30: 1,
            34: 1,
            36: 1,
            38: 1,
            40: 1,
            42: 1,
            45: 1,
            50: 1,
            52: 1,
            54: 1
        }, Bg = {3: 1, 7: 1, 11: 1, 17: 1, 23: 1, 27: 1, 31: 1, 44: 1, 46: 1, 47: 1, 49: 1}, Jo = {
            translateX: 1,
            translateY: 1,
            zoom: 1,
            scrollBarVisible: 1
        }, ad = {sourceAgent: 1, targetAgent: 1, expanded: 1, parent: 1, host: 1}, wh = {
            position: 1,
            width: 1,
            height: 1,
            expanded: 1,
            rotation: 1,
            "s:edge.points": 1
        }, Do = {"edge.type": 1, "edge.group": 1}, nl = {rotation: 1, rotationX: 1, rotationZ: 1}, Vo = {
            position: 1,
            width: 1,
            height: 1,
            "s:grid.row.count": 1,
            "s:grid.column.count": 1,
            "s:grid.row.percents": 1,
            "s:grid.column.percents": 1,
            "s:grid.border": 1,
            "s:grid.border.left": 1,
            "s:grid.border.right": 1,
            "s:grid.border.top": 1,
            "s:grid.border.bottom": 1,
            "s:grid.gap": 1
        }, Qe = {
            "attach.row.index": 1,
            "attach.column.index": 1,
            "attach.row.span": 1,
            "attach.column.span": 1,
            "attach.padding": 1,
            "attach.padding.left": 1,
            "attach.padding.right": 1,
            "attach.padding.top": 1,
            "attach.padding.bottom": 1,
            "attach.index": 1,
            "attach.offset": 1,
            "attach.offset.relative": 1,
            "attach.offset.opposite": 1,
            "attach.gap": 1,
            "attach.gap.relative": 1,
            "attach.thickness": 1
        }, Zn = {shape: 1, thickness: 1, position: 1}, Ci = function (I, A) {
            if (!I || !de(A) || A.isEmpty())return !1;
            for (I = I._parent; de(I);) {
                if (I === A)return !0;
                I = I._parent
            }
            return !1
        }, cq = function (L) {
            if (!L)return U;
            if (Ln(L)) {
                var k = L._40I, F = L._41I;
                if (!k || !F)return U;
                var f = cq(k), q = cq(F);
                return f === q ? f : U
            }
            for (var I = L._parent; Ln(I) && !I.ISubGraph;)I = I._parent;
            return I ? I.ISubGraph ? I : cq(I) : U
        }, ys = function (Y, U, t, b) {
            var c = U.getStyle(t) * b;
            c && df(Y, c), c = U.getStyle(t + ".left") * b, c && (Y.x -= c, Y.width += c), c = U.getStyle(t + ".right") * b, c && (Y.width += c), c = U.getStyle(t + ".top") * b, c && (Y.y -= c, Y.height += c), c = U.getStyle(t + ".bottom") * b, c && (Y.height += c), Y.width < 0 && (Y.width = -Y.width, Y.x -= Y.width), Y.height < 0 && (Y.height = -Y.height, Y.y -= Y.height)
        }, jk = function (o) {
            for (var C, d = 0, x = o.size(); x > d; d++)if (C = o.getChildAt(d), xj(C) && jk(C))return !0;
            return o.hasAgentEdges()
        }, _b = function (Q) {
            if (!Q)return U;
            for (var J = Q._parent; de(J);) {
                if (!de(J._parent))return J.isExpanded() ? Q : J;
                J.isExpanded() || (Q = J), J = J._parent
            }
            return Q
        }, td = function (o, Q) {
            if (!o || !Q)return U;
            var q, G, Y, D = cq(o), g = cq(Q);
            if (D !== g) {
                for (; g && D !== g;)g = cq(g);
                if (D === g)return o;
                q = new gr, q.add(o, 0);
                for (var z = o._parent; xj(z) && !Q.isDescendantOf(z);)q.add(z, 0), z = z._parent;
                for (Y = q.size(), G = 0; Y > G; G++) {
                    var J = q.get(G);
                    if (de(J) && !J.isExpanded())return J;
                    if (J.ISubGraph)return J
                }
                return o
            }
            return o
        }, Rd = function (j) {
            if (j.isLooped())return j._source;
            var H = _b(j._source), Z = _b(j._target);
            return H === Z ? j._source : td(H, Z)
        }, Qd = function (u) {
            if (u.isLooped())return u._target;
            var M = _b(u._source), K = _b(u._target);
            return M === K ? u._target : td(K, M)
        }, sf = function (y, f, C, h, I, a, H) {
            if (!f)return U;
            var i;
            if (a !== K || H !== K) {
                a = a === K ? .5 : a, H = H === K ? .5 : H;
                var T = f.getRotation() || 0;
                if (T) {
                    var G = f.getPosition(), r = f.getWidth(), l = f.getHeight(), M = f.getAnchor(), L = f.getScale(), d = new Ok(T, G.x, G.y, L.x, L.y);
                    C = d.tf((a - M.x) * r, (H - M.y) * l)
                } else i = kn(y, f), C = {x: i.x + a * i.width, y: i.y + H * i.height}
            } else C = lm(C, kn(y, f));
            return C.x += h, C.y += I, C
        }, Nj = function (u, D) {
            if (!u || !D)return U;
            var J, o, $, W, O, B;
            if (u === D) {
                if (W = u.getLoopedEdges(), !W)return U;
                W = new gr(W)
            } else {
                if (O = u.getAgentEdges(), B = D.getAgentEdges(), !O || !B)return U;
                for (o = O.size(), J = 0; o > J; J++)$ = O.get(J), B.contains($) && (W || (W = new gr), W.add($))
            }
            if (W)for (J = 0; J < W.size(); J++)$ = W.get(J), $.getStyle(se) === sn && ($._22I(U), W.removeAt(J), J--);
            return W
        }, Sh = function (s, r) {
            var l = Nj(s, r);
            if (l && !l.isEmpty()) {
                if (1 === l.size())return l.get(0)._22I(U), void 0;
                var T = new gr, x = new gr;
                l.each(function (w) {
                    var m = w.s("edge.group");
                    T.contains(m) || T.add(m)
                }), T.sort(), T.each(function (K) {
                    x.add(new f.EdgeGroup(l.toList(function (p) {
                        return K === p.s("edge.group")
                    }), x))
                }), x.each(function (H) {
                    H.each(function (h) {
                        h._22I(H)
                    })
                })
            }
        }, jg = function (I, Q) {
            if (Q) {
                var D = Q.rect, Y = Q.color, M = Q.rotation, q = Q.labelWidth, w = Q.background, C = Q.opacity, m = Q.scale, o = m != U && 1 !== m;
                if (C != U) {
                    var T = I.globalAlpha;
                    I.globalAlpha *= C
                }
                if (M || o) {
                    I.save();
                    var g = D.x + D.width / 2, t = D.y + D.height / 2;
                    es(I, g, t), M && $g(I, M), o && I.scale(m, m), es(I, -g, -t)
                }
                if (w && ns(I, D.x, D.y, D.width, D.height, w), q) {
                    var B = D.width, s = I.createLinearGradient(D.x, D.y, D.x + B, D.y);
                    s.addColorStop(0, Y), s.addColorStop(.9, Y), s.addColorStop(1, vp), Y = s, D.width = q
                }
                nh(I, Q.ss, D, Q.font, Y, Q.align), q && (D.width = B), (M || o) && I.restore(), C != U && (I.globalAlpha = T)
            }
        }, pl = function (d, Q) {
            if (Q) {
                var v = Q.rect, _ = v.x, W = v.y, c = v.width, i = v.height, P = Q.background, k = Q.backgroundImage, x = Q.borderWidth, J = Q.borderColor, f = Q.labelWidth, C = Q.opacity, z = Q.scale, Z = z != U && 1 !== z;
                if (C != U) {
                    var n = d.globalAlpha;
                    d.globalAlpha *= C
                }
                if (Z) {
                    d.save();
                    var e = v.x + v.width / 2, o = v.y + v.height / 2;
                    es(d, e, o), d.scale(z, z), es(d, -e, -o)
                }
                if (Q.expanded) {
                    var t = O(8, c / 4), r = W + i - 8;
                    if (d.fillStyle = P, d.beginPath(), d.moveTo(_, W), d.lineTo(_, r), d.lineTo(_ + c / 2, r), d.lineTo(_ + c / 2, W + i), d.lineTo(_ + c / 2 + t, r), d.lineTo(_ + c, r), d.lineTo(_ + c, W), d.closePath(), d.fill(), x && (d.lineWidth = x, d.lineJoin = "round", d.lineCap = "round", J ? (d.strokeStyle = J, d.stroke()) : (d.strokeStyle = Fb(P), d.beginPath(), d.moveTo(_ + c, W), d.lineTo(_ + c, r), d.lineTo(_ + c / 2 + t, r), d.lineTo(_ + c / 2, W + i), d.stroke(), d.strokeStyle = Oq(P), d.beginPath(), d.moveTo(_ + c, W), d.lineTo(_, W), d.lineTo(_, r), d.lineTo(_ + c / 2, r), d.lineTo(_ + c / 2, W + i), d.stroke())), k) Zq(d, gk(k), cm, v.x, v.y, v.width, v.height - 8, Q.data, Q.view); else {
                        if (v.height -= 8, P = Q.color, f) {
                            var u = c, B = d.createLinearGradient(_, W, _ + u, W);
                            B.addColorStop(0, P), B.addColorStop(.9, P), B.addColorStop(1, vp), P = B, v.width = f
                        }
                        nh(d, Q.ss, v, Q.font, P, Q.align), f && (v.width = u), v.height += 8
                    }
                } else if (Q.icon) Kj(d, gk(Q.icon), _, W, c, i, Q.data, Q.view); else {
                    var F = c / 2;
                    x && (d.lineWidth = x, d.lineJoin = "round", d.lineCap = "round", d.strokeStyle = J ? J : Fb(P), d.beginPath(), d.arc(_ + F, W + F, F, a, 1.6 * h, !0), d.moveTo(_ + F, W + i), d.lineTo(_ + c - F / 5, W + F), d.stroke(), d.strokeStyle = J ? J : Oq(P), d.beginPath(), d.arc(_ + F, W + F, F, 1.6 * h, a, !0), d.moveTo(_ + F, W + i), d.lineTo(_ + F / 5, W + F), d.stroke()), d.fillStyle = P, d.beginPath(), d.arc(_ + F, W + F, F, 0, $, !0), d.moveTo(_ + F, W + i), d.lineTo(_ + c - F / 5, W + F), d.lineTo(_ + F / 5, W + F), d.closePath(), d.fill(), d.fillStyle = Q.color, d.beginPath(), d.arc(_ + F, W + F, F / 3, 0, $, !0), d.fill()
                }
                Z && d.restore(), C != U && (d.globalAlpha = n)
            }
        }, an = function (X, F) {
            return F > 2 * X ? X : F / 2
        }, wj = function (H, m, K, v) {
            if (!H || !m)return 0;
            var e = w(m.y - H.y, m.x - H.x);
            return K || (e = m.x < H.x ? e + h : e), e + v
        }, Sk = function (M, p, H, P, F, v, N) {
            N && (M.x > p.x || M.x === p.x && M.y > p.y) && (H = gg[H], F = -F);
            var C = lm(H, {x: 0, y: 0, width: Rk(M, p), height: 0}, v);
            return C.x += P, C.y += F, C = new Ok(w(p.y - M.y, p.x - M.x)).tf(C), C.x += M.x, C.y += M.y, C
        }, Rb = function (u, L, H, F, Y) {
            if (u._19Q = !0, !H.getEdgeGroup())return F ? H.s("edge.gap") : 0;
            var C, I = 0, x = 0, g = 0;
            if (H.getEdgeGroup().getSiblings().each(function (W) {
                    W.each(function (m) {
                        if (L.isVisible(m) && m.s(se) == Y) {
                            var B = m.s("edge.gap");
                            C ? (x += g / 2 + B / 2, g = B) : (C = m, g = B), m === H && (I = x)
                        }
                    })
                }), F)return x - I + g;
            var y = I - x / 2;
            return C && H._40I !== C._40I && (u._19Q = !1), y
        }, Tj = function () {
            var s = function (P) {
                var b = [];
                return P.forEach(function (i) {
                    b.push({x: i.x, y: i.y}), b.push({x: i.x + i.width, y: i.y + i.height}), b.push({
                        x: i.x + i.width,
                        y: i.y
                    }), b.push({x: i.x, y: i.y + i.height})
                }), b
            };
            return function (_, S, V) {
                if ("oval" === _) {
                    var K = 0, D = V.height / V.width, Q = D * D, I = V.x + V.width / 2, Y = V.y + V.height / 2, X = s(S);
                    X.forEach(function (q) {
                        var H = q.x - I, r = q.y - Y, L = H * H + r * r / Q;
                        L > K && (K = L)
                    }), K = y(K);
                    var f = D * K;
                    return {x: I - K, y: Y - f, width: 2 * K, height: 2 * f}
                }
                if ("circle" === _) {
                    var h = 0, I = V.x + V.width / 2, Y = V.y + V.height / 2, X = s(S);
                    return X.forEach(function (m) {
                        var p = m.x - I, W = m.y - Y, r = p * p + W * W;
                        r > h && (h = r)
                    }), h = y(h), {x: I - h, y: Y - h, width: 2 * h, height: 2 * h}
                }
                return "roundRect" === _ ? (df(V, O(V.width, V.height) / 16), V) : V
            }
        }(), $m = f.graph = {}, _d = function (y, P, O) {
            Oh(q + ".graph." + y, P, O)
        };
        f.layout = {};
        var xf = {comps: [{type: Cq, points: [0, 0, 1, 1, 2, 2, 3, 3], borderWidth: 1, borderColor: U}]};
        xf[qo] = xf[Gf] = 160, Hm("node_image", ob(30, 30, [{
            type: Xm,
            rect: [4, 5, 22, 16],
            gradient: Kq,
            gradientColor: uj,
            background: Ni
        }, {type: Xm, rect: [2, 3, 26, 20], borderWidth: 1, borderColor: Ni}, {
            type: Xm,
            rect: [11, 23, 8, 4],
            background: Ni
        }, {type: Xm, rect: [6, 27, 18, 2], background: Ni}])), Hm("node_icon", ob(16, 16, [{
            type: Xm,
            rect: [2, 2, 12, 10],
            gradient: Kq,
            gradientColor: uj,
            background: Ni
        }, {type: So, rect: [2, 2, 12, 10], width: 1, color: Ni}, {
            type: Xm,
            rect: [6, 12, 4, 2],
            background: Ni
        }, {type: Xm, rect: [4, 14, 8, 1], background: Ni}])), Hm("group_image", ob(66, 39, [{
            type: Xm,
            rect: [44.3, 18, 18.1, 12.8],
            gradient: Kq,
            gradientColor: uj,
            background: Ni
        }, {type: Xm, rect: [3.3, 17.8, 18.1, 12.8], gradient: Kq, gradientColor: uj, background: Ni}, {
            type: Xm,
            rect: [15.8, 3.2, 33.5, 26.4],
            borderWidth: 1,
            borderColor: Ni,
            gradient: Kq,
            gradientColor: uj,
            background: Ni
        }, {type: Xm, rect: [26.2, 29.4, 12.8, 4.2], background: Ni}, {
            type: Xm,
            rect: [21.3, 33.5, 22.5, 2.3],
            background: Ni
        }, {type: Xm, rect: [5.3, 32.7, 14.1, 2.1], background: Ni}, {
            type: Xm,
            rect: [9, 30.4, 6.7, 2.4],
            background: Ni
        }, {type: Xm, rect: [50, 30.7, 6.7, 2.4], background: Ni}, {
            type: Xm,
            rect: [46.3, 33, 14.1, 2.1],
            background: Ni
        }])), Hm("group_icon", ob(16, 16, [{type: Xm, rect: [4, 12, 4, 2], background: Ni}, {
            type: Xm,
            rect: [2, 13, 8, 1],
            background: Ni
        }, {type: Xm, rect: [12, 12, 2, 1], background: Ni}, {
            type: Xm,
            rect: [11, 13, 4, 1],
            background: Ni
        }, {type: Xm, rect: [10, 7, 6, 5], gradient: Kq, gradientColor: uj, background: Ni}, {
            type: Xm,
            rect: [1, 2, 10, 10],
            gradient: Kq,
            gradientColor: uj,
            background: Ni
        }, {type: So, rect: [1, 2, 10, 10], width: 1, color: Ni}])), Hm("edge_icon", ob(16, 16, [{
            type: Xm,
            rect: [2.1, 6.9, 11.5, 2.6],
            rotation: -.79,
            gradient: Kq,
            gradientColor: uj,
            background: Ni
        }, {type: Xm, rect: [10.8, 1, 4, 4], background: Ni}, {
            type: Xm,
            rect: [1, 11, 4, 4],
            background: Ni
        }])), Hm("subGraph_image", ob(72, 45, [{
            type: Cq,
            points: [9, 42, .3, 38.4, 2.4, 28.8, 5.7, 21.6, 11.7, 22.5, 11.7, 15.9, 16.8, 13.8, 21.6, 12, 24.3, 15.9, 27.9, 3, 42.3, 2.1, 59.4, 4.5, 57.3, 18.3, 67.5, 18.9, 69.6, 27.3, 69.9, 38.4, 64.2, 41.4],
            segments: [1, 3, 3, 3, 3, 3, 3, 3, 3],
            gradient: Kq,
            gradientColor: uj,
            background: Ni
        }, {type: Xm, rect: [29.6, 30.7, 3.6, 1.8], background: Ni}, {
            type: Xm,
            rect: [28.4, 32.3, 6, 1.2],
            background: Ni
        }, {type: Xm, rect: [37.3, 32, 10.8, 1.8], background: Ni}, {
            type: Xm,
            rect: [39.1, 29.9, 7.2, 2.3],
            background: Ni
        }, {type: Xm, rect: [26.6, 23.7, 9.6, 7.2], gradient: Kq, gradientColor: uj, background: Ni}, {
            type: Xm,
            rect: [34.3, 16.8, 16.8, 13.2],
            borderWidth: 1,
            borderColor: Ni,
            gradient: Kq,
            gradientColor: uj,
            background: Ni
        }])), Hm("subGraph_icon", ob(17, 17, [{
            type: Cq,
            points: [2.2, 14.6, .2, 11.9, .8, 8.8, 1.8, 5.9, 5.6, 7.4, 3.8, 1.6, 10.3, 3, 14.5, 4.2, 12.2, 7.5, 18.9, 7.2, 14.5, 14.5],
            segments: [1, 3, 3, 3, 3, 3],
            gradient: Kq,
            gradientColor: uj,
            background: Ni
        }])), Hm("shape_icon", ob(16, 16, [{
            type: Cq,
            points: [1.5, 1, 8.4, 1, 8.4, 7.2, 14.6, 7.1, 14.6, 14.9, 1.5, 14.9, 1.5, 1],
            background: Ni
        }])), Hm("polyline_icon", ob(16, 16, [{
            type: Cq,
            points: [1.5, 1, 8.4, 1, 8.4, 7.2, 14.6, 7.1, 14.6, 14.9, 1.5, 14.9, 1.5, 1],
            borderWidth: 1,
            borderColor: Ni
        }, Mm(7.5, .4), Mm(7.5, 6.3), Mm(13.6, 6.3), Mm(13.6, 14), Mm(.7, 13.9), Mm(.7, .3)])), Hm("grid_icon", ob(16, 16, [{
            type: Xm,
            rect: [1, 1, 4, 4],
            background: Ni,
            gradient: Kq,
            gradientColor: uj
        }, {type: Xm, rect: [6, 1, 4, 4], background: Ni, gradient: Kq, gradientColor: uj}, {
            type: Xm,
            rect: [11, 1, 4, 4],
            background: Ni,
            gradient: Kq,
            gradientColor: uj
        }, {type: Xm, rect: [11, 6, 4, 4], background: Ni, gradient: Kq, gradientColor: uj}, {
            type: Xm,
            rect: [6, 6, 4, 4],
            background: Ni,
            gradient: Kq,
            gradientColor: uj
        }, {type: Xm, rect: [1, 6, 4, 4], background: Ni, gradient: Kq, gradientColor: uj}, {
            type: Xm,
            rect: [11, 11, 4, 4],
            background: Ni,
            gradient: Kq,
            gradientColor: uj
        }, {type: Xm, rect: [6, 11, 4, 4], background: Ni, gradient: Kq, gradientColor: uj}, {
            type: Xm,
            rect: [1, 11, 4, 4],
            background: Ni,
            gradient: Kq,
            gradientColor: uj
        }])), Hm("light_icon", ob(16, 16, [{
            type: "rect",
            rect: [6, 9, 5, 5],
            borderWidth: 1,
            borderColor: Ni
        }, {
            type: "circle",
            rect: [1, 1, 15, 10],
            borderWidth: 1,
            borderColor: Ni,
            gradient: Kq,
            gradientColor: uj,
            background: {
                func: function (w) {
                    var t = w ? w.s(Je) : U;
                    return $p(t) ? "rgb(" + C(255 * t[0]) + "," + C(255 * t[1]) + "," + C(255 * t[2]) + ")" : t || Ni
                }
            }
        }])), Hm("text_icon", ob(16, 16, [{
            type: "shape",
            points: [3, 3, 13, 3, 8, 3, 8, 14],
            segments: [1, 2, 1, 2],
            borderWidth: 1,
            borderColor: Ni
        }]));
        var $f = function (N, Z) {
            for (var o = N.vertices, L = 0; L < o.length; L++) {
                var z = o[L], u = z.y;
                z.y = z.z, z.z = -u, Z && (z.y += Z)
            }
        }, Th = function (o) {
            for (var N, f, r, q, E, v, i = [], J = [], O = [], G = o.faces, u = 0, m = 0, g = 0, L = G.length; L > u; u++, m += 6, g += 9) {
                var l = G[u];
                1 === l.i ? (N || (N = [], f = [], r = []), nb(l, u, m, g, o, N, r, f)) : 2 === l.i ? (q || (q = [], E = [], v = []), nb(l, u, m, g, o, q, v, E)) : nb(l, u, m, g, o, i, O, J)
            }
            return {vs: i, uv: J, ns: O, top_vs: N, top_uv: f, top_ns: r, bottom_vs: q, bottom_uv: E, bottom_ns: v}
        }, nb = function (I, s, t, W, m, k, h, G) {
            var c = m.vertices, H = m.faceVertexUvs, y = c[I.a], O = c[I.b], e = c[I.c];
            k[W] = y.x, k[W + 1] = y.y, k[W + 2] = y.z, k[W + 3] = O.x, k[W + 4] = O.y, k[W + 5] = O.z, k[W + 6] = e.x, k[W + 7] = e.y, k[W + 8] = e.z;
            var E = I.vertexNormals;
            if (3 === E.length) {
                var F = E[0], T = E[1], U = E[2];
                h[W] = F.x, h[W + 1] = F.y, h[W + 2] = F.z, h[W + 3] = T.x, h[W + 4] = T.y, h[W + 5] = T.z, h[W + 6] = U.x, h[W + 7] = U.y, h[W + 8] = U.z
            } else {
                var S = I.normal;
                h[W] = S.x, h[W + 1] = S.y, h[W + 2] = S.z, h[W + 3] = S.x, h[W + 4] = S.y, h[W + 5] = S.z, h[W + 6] = S.x, h[W + 7] = S.y, h[W + 8] = S.z
            }
            var w = H[0][s][0], Y = H[0][s][1], r = H[0][s][2];
            G[t] = w.x, G[t + 1] = w.y, G[t + 2] = Y.x, G[t + 3] = Y.y, G[t + 4] = r.x, G[t + 5] = r.y
        }, fp = function (O, E, r, c, I, K, Y, F, J) {
            r == U && (r = !0), c == U && (c = !0), Y == U && (Y = 1), F == U && (F = 0);
            var Z = new Qh;
            return ql(Z, O, E, J), Z = Z.toShapes(), Th(new Cn(Z, {
                top: r,
                bottom: c,
                curveSegments: I,
                amount: Y,
                repeatUVLength: K
            }, -Y / 2 + F))
        }, qf = function (T, t) {
            this.x = T || 0, this.y = t || 0
        };
        qf.prototype = {
            constructor: qf, add: function (A) {
                return this.x += A.x, this.y += A.y, this
            }, sub: function (I) {
                return this.x -= I.x, this.y -= I.y, this
            }, equals: function (M) {
                return M.x === this.x && M.y === this.y
            }, multiplyScalar: function (q) {
                return this.x *= q, this.y *= q, this
            }, distanceTo: function (S) {
                return y(this.distanceToSquared(S))
            }, distanceToSquared: function (t) {
                var K = this.x - t.x, c = this.y - t.y;
                return K * K + c * c
            }, clone: function () {
                return new qf(this.x, this.y)
            }
        };
        var Am = function (m, w, h) {
            this.x = m || 0, this.y = w || 0, this.z = h || 0
        };
        Am.prototype = {
            constructor: Am, set: function (m, u, $) {
                return this.x = m, this.y = u, this.z = $, this
            }, setY: function (U) {
                return this.y = U, this
            }, copy: function (k) {
                return this.x = k.x, this.y = k.y, this.z = k.z, this
            }, add: function (Y) {
                return this.x += Y.x, this.y += Y.y, this.z += Y.z, this
            }, addVectors: function (V, s) {
                return this.x = V.x + s.x, this.y = V.y + s.y, this.z = V.z + s.z, this
            }, sub: function (T) {
                return this.x -= T.x, this.y -= T.y, this.z -= T.z, this
            }, subVectors: function (p, I) {
                return this.x = p.x - I.x, this.y = p.y - I.y, this.z = p.z - I.z, this
            }, multiplyScalar: function (r) {
                return this.x *= r, this.y *= r, this.z *= r, this
            }, applyMatrix4: function (_) {
                var u = this.x, a = this.y, k = this.z, X = _.elements;
                return this.x = X[0] * u + X[4] * a + X[8] * k + X[12], this.y = X[1] * u + X[5] * a + X[9] * k + X[13], this.z = X[2] * u + X[6] * a + X[10] * k + X[14], this
            }, divideScalar: function (M) {
                if (0 !== M) {
                    var i = 1 / M;
                    this.x *= i, this.y *= i, this.z *= i
                } else this.x = 0, this.y = 0, this.z = 0;
                return this
            }, dot: function (j) {
                return this.x * j.x + this.y * j.y + this.z * j.z
            }, length: function () {
                return y(this.x * this.x + this.y * this.y + this.z * this.z)
            }, normalize: function () {
                return this.divideScalar(this.length())
            }, cross: function (A) {
                var V = this.x, n = this.y, x = this.z;
                return this.x = n * A.z - x * A.y, this.y = x * A.x - V * A.z, this.z = V * A.y - n * A.x, this
            }, crossVectors: function (d, $) {
                var T = d.x, u = d.y, U = d.z, D = $.x, l = $.y, s = $.z;
                return this.x = u * s - U * l, this.y = U * D - T * s, this.z = T * l - u * D, this
            }, distanceTo: function (l) {
                return y(this.distanceToSquared(l))
            }, distanceToSquared: function (m) {
                var V = this.x - m.x, M = this.y - m.y, T = this.z - m.z;
                return V * V + M * M + T * T
            }, clone: function () {
                return new Am(this.x, this.y, this.z)
            }
        };
        var Sj = function () {
            this.elements = new Float32Array(16)
        };
        Sj.prototype = {
            constructor: Sj, set: function (n, l, O, V, k, y, m, r, g, f, i, M, H, C, B, E) {
                var j = this.elements;
                return j[0] = n, j[4] = l, j[8] = O, j[12] = V, j[1] = k, j[5] = y, j[9] = m, j[13] = r, j[2] = g, j[6] = f, j[10] = i, j[14] = M, j[3] = H, j[7] = C, j[11] = B, j[15] = E, this
            }, makeRotationAxis: function (m, t) {
                var b = M(t), l = v(t), R = 1 - b, Q = m.x, D = m.y, H = m.z, J = R * Q, B = R * D;
                return this.set(J * Q + b, J * D - l * H, J * H + l * D, 0, J * D + l * H, B * D + b, B * H - l * Q, 0, J * H - l * D, B * H + l * Q, R * H * H + b, 0, 0, 0, 0, 1), this
            }
        };
        var vn = function (l) {
            this.repeatUVLength = l
        };
        vn.prototype = {
            generateTopUV: function (W, J, e, X, w, t, a) {
                var H, Z, L, o, v = W.vertices, K = v[X].x, D = v[X].y, g = v[w].x, Y = v[w].y, j = v[t].x, C = v[t].y, s = this.repeatUVLength;
                if (s) H = 0, Z = 0, L = s, o = s; else {
                    this._bb || (this._bb = J.getBoundingBox());
                    var m = this._bb;
                    H = m.minX, Z = m.minY, L = m.maxX - H, o = m.maxY - Z
                }
                return a ? [new qf((K - H) / L, (D - Z) / o), new qf((g - H) / L, (Y - Z) / o), new qf((j - H) / L, (C - Z) / o)] : [new qf((K - H) / L, 1 - (D - Z) / o), new qf((g - H) / L, 1 - (Y - Z) / o), new qf((j - H) / L, 1 - (C - Z) / o)]
            }, generateBottomUV: function (q, H, g, x, c, R) {
                return this.generateTopUV(q, H, g, x, c, R, !0)
            }, generateSideWallUV: function (x, t, V, W, G, L, h, B, l, O, D, d) {
                if (!this._cl) {
                    for (var i, R, g = [], n = 0, c = V.length, A = 0; c > A; A++) {
                        i = V[A], R = V[(A + 1) % c];
                        var v = i.x - R.x, Q = i.y - R.y, r = y(v * v + Q * Q);
                        g.push(n), n += r
                    }
                    for (var A = 0; c > A; A++)g[A] /= n;
                    this._cl = g
                }
                var g = this._cl, w = 1 - l / O, b = 1 - (l + 1) / O, C = g[D], u = g[d];
                return u > C && (C += 1), [new qf(C, w), new qf(u, w), new qf(u, b), new qf(C, b)]
            }
        };
        var dp = function (o, b, z, M, J, x) {
            this.a = o, this.b = b, this.c = z, this.i = x, this.normal = M instanceof Am ? M : new Am, this.vertexNormals = M instanceof Array ? M : []
        };
        dp.prototype = {constructor: dp};
        var qm = function () {
        }, zc = qm.prototype;
        zc.getPointAt = function (p) {
            var m = this.getUtoTmapping(p);
            return this.getPoint(m)
        }, zc.getPoints = function (i) {
            i || (i = 5);
            var w, J = [];
            for (w = 0; i >= w; w++)J.push(this.getPoint(w / i));
            return J
        }, zc.getSpacedPoints = function (N) {
            N || (N = 5);
            var i, e = [];
            for (i = 0; N >= i; i++)e.push(this.getPointAt(i / N));
            return e
        }, zc.getLength = function () {
            var R = this.getLengths();
            return R[R.length - 1]
        }, zc.getLengths = function (W) {
            if (W || (W = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200), this.cacheArcLengths && this.cacheArcLengths.length == W + 1 && !this.needsUpdate)return this.cacheArcLengths;
            this.needsUpdate = !1;
            var Q, w, I = [], n = this.getPoint(0), p = 0;
            for (I.push(0), w = 1; W >= w; w++)Q = this.getPoint(w / W), p += Q.distanceTo(n), I.push(p), n = Q;
            return this.cacheArcLengths = I, I
        }, zc.getUtoTmapping = function (x, M) {
            var X, U = this.getLengths(), C = 0, z = U.length;
            X = M ? M : x * U[z - 1];
            for (var Q, r = 0, c = z - 1; c >= r;)if (C = d(r + (c - r) / 2), Q = U[C] - X, 0 > Q) r = C + 1; else {
                if (!(Q > 0)) {
                    c = C;
                    break
                }
                c = C - 1
            }
            if (C = c, U[C] == X) {
                var _ = C / (z - 1);
                return _
            }
            var y = U[C], Y = U[C + 1], v = Y - y, b = (X - y) / v, _ = (C + b) / (z - 1);
            return _
        }, zc.getTangent = function (L) {
            var k = 1e-4, s = L - k, C = L + k;
            0 > s && (s = 0), C > 1 && (C = 1);
            var m = this.getPoint(s), q = this.getPoint(C), f = q.clone().sub(m);
            return f.normalize()
        }, zc.getTangentAt = function (H) {
            var f = this.getUtoTmapping(H);
            return this.getTangent(f)
        }, qm.create = function (y, N) {
            return y.prototype = Ph(qm.prototype), y.prototype.getPoint = N, y
        };
        var Tp = function () {
            this.curves = [], this.autoClose = !1
        }, oq = Tp.prototype = Ph(zc);
        oq.add = function (t) {
            this.curves.push(t)
        }, oq.closePath = function () {
            var $ = this.curves[0].getPoint(0), S = this.curves[this.curves.length - 1].getPoint(1);
            $.equals(S) || this.curves.push(new Rr(S, $))
        }, oq.getPoint = function (F) {
            for (var f, d, S = F * this.getLength(), z = this.getCurveLengths(), B = 0; B < z.length;) {
                if (z[B] >= S) {
                    f = z[B] - S, d = this.curves[B];
                    var r = 1 - f / d.getLength();
                    return d.getPointAt(r)
                }
                B++
            }
            return null
        }, oq.getLength = function () {
            var U = this.getCurveLengths();
            return U[U.length - 1]
        }, oq.getCurveLengths = function () {
            if (this.cacheLengths && this.cacheLengths.length == this.curves.length)return this.cacheLengths;
            var h, D = [], g = 0, e = this.curves.length;
            for (h = 0; e > h; h++)g += this.curves[h].getLength(), D.push(g);
            return this.cacheLengths = D, D
        }, oq.getTransformedPoints = function (C) {
            return this.getPoints(C)
        }, oq.getBoundingBox = function () {
            var f, o, S, J, B, T, y = this.getPoints();
            f = o = Number.NEGATIVE_INFINITY, J = B = Number.POSITIVE_INFINITY;
            var U, W, N, M, I = y[0] instanceof Am;
            for (M = I ? new Am : new qf, W = 0, N = y.length; N > W; W++)U = y[W], U.x > f && (f = U.x), U.x < J && (J = U.x), U.y > o && (o = U.y), U.y < B && (B = U.y), I && (U.z > S && (S = U.z), U.z < T && (T = U.z)), M.add(U);
            var j = {minX: J, minY: B, maxX: f, maxY: o};
            return I && (j.maxZ = S, j.minZ = T), j
        };
        var cd = function (M) {
            Tp.call(this), this.actions = [], M && this.fromPoints(M)
        }, po = cd.prototype = Ph(Tp.prototype), Ac = "moveTo", dk = "lineTo", Hd = "quadraticCurveTo", zn = "bezierCurveTo", Rq = "arc", vo = "ellipse";
        po.fromPoints = function (n) {
            this.moveTo(n[0].x, n[0].y);
            for (var F = 1, L = n.length; L > F; F++)this.lineTo(n[F].x, n[F].y)
        }, po.moveTo = function () {
            var $ = Array.prototype.slice.call(arguments);
            this.actions.push({action: Ac, args: $})
        }, po.lineTo = function (e, G) {
            var n = Array.prototype.slice.call(arguments), Z = this.actions[this.actions.length - 1].args, B = Z[Z.length - 2], L = Z[Z.length - 1], j = new Rr(new qf(B, L), new qf(e, G));
            this.curves.push(j), this.actions.push({action: dk, args: n})
        }, po.quadraticCurveTo = function (F, m, M, W) {
            var b = Array.prototype.slice.call(arguments), e = this.actions[this.actions.length - 1].args, C = e[e.length - 2], N = e[e.length - 1], U = new wo(new qf(C, N), new qf(F, m), new qf(M, W));
            this.curves.push(U), this.actions.push({action: Hd, args: b})
        }, po.bezierCurveTo = function (z, U, j, P, Q, G) {
            var i = Array.prototype.slice.call(arguments), p = this.actions[this.actions.length - 1].args, c = p[p.length - 2], e = p[p.length - 1], x = new Aj(new qf(c, e), new qf(z, U), new qf(j, P), new qf(Q, G));
            this.curves.push(x), this.actions.push({action: zn, args: i})
        }, po.arc = function (r, F, K, Z, R, T) {
            var x = this.actions[this.actions.length - 1].args, w = x[x.length - 2], E = x[x.length - 1];
            this.absarc(r + w, F + E, K, Z, R, T)
        }, po.absarc = function (L, O, N, f, E, V) {
            this.absellipse(L, O, N, N, f, E, V)
        }, po.ellipse = function (z, l, e, r, G, Z, B) {
            var c = this.actions[this.actions.length - 1].args, v = c[c.length - 2], W = c[c.length - 1];
            this.absellipse(z + v, l + W, e, r, G, Z, B)
        }, po.absellipse = function (R, s, k, E, Y, w, _) {
            var x = Array.prototype.slice.call(arguments), a = new bq(R, s, k, E, Y, w, _);
            this.curves.push(a);
            var e = a.getPoint(1);
            x.push(e.x), x.push(e.y), this.actions.push({action: vo, args: x})
        }, po.getSpacedPoints = function (T) {
            T || (T = 40);
            for (var m = [], v = 0; T > v; v++)m.push(this.getPoint(v / T));
            return m
        }, po.getPoints = function (R, I) {
            R = R || 12;
            var h, U, X, y, P, k, E, C, z, o, K, B, x, c, g, Y, D, b, m = [];
            for (h = 0, U = this.actions.length; U > h; h++)switch (X = this.actions[h], y = X.action, P = X.args, y) {
                case Ac:
                    m.push(new qf(P[0], P[1]));
                    break;
                case dk:
                    m.push(new qf(P[0], P[1]));
                    break;
                case Hd:
                    for (k = P[2], E = P[3], o = P[0], K = P[1], m.length > 0 ? (c = m[m.length - 1], B = c.x, x = c.y) : (c = this.actions[h - 1].args, B = c[c.length - 2], x = c[c.length - 1]), g = 1; R >= g; g++)Y = g / R, D = Kh.b2(Y, B, o, k), b = Kh.b2(Y, x, K, E), m.push(new qf(D, b));
                    break;
                case zn:
                    for (k = P[4], E = P[5], o = P[0], K = P[1], C = P[2], z = P[3], m.length > 0 ? (c = m[m.length - 1], B = c.x, x = c.y) : (c = this.actions[h - 1].args, B = c[c.length - 2], x = c[c.length - 1]), g = 1; R >= g; g++)Y = g / R, D = Kh.b3(Y, B, o, C, k), b = Kh.b3(Y, x, K, z, E), m.push(new qf(D, b));
                    break;
                case Rq:
                    var i, f = P[0], T = P[1], O = P[2], G = P[3], j = P[4], H = !!P[5], q = j - G, s = 2 * R;
                    for (g = 1; s >= g; g++)Y = g / s, H || (Y = 1 - Y), i = G + Y * q, D = f + O * M(i), b = T + O * v(i), m.push(new qf(D, b));
                    break;
                case vo:
                    var i, f = P[0], T = P[1], l = P[2], F = P[3], G = P[4], j = P[5], H = !!P[6], q = j - G, s = 2 * R;
                    for (g = 1; s >= g; g++)Y = g / s, H || (Y = 1 - Y), i = G + Y * q, D = f + l * M(i), b = T + F * v(i), m.push(new qf(D, b))
            }
            var L = m[m.length - 1], n = 1e-10;
            return e(L.x - m[0].x) < n && e(L.y - m[0].y) < n && m.splice(m.length - 1, 1), I && m.push(m[0]), m
        }, po.toShapes = function (J, i) {
            function A(H) {
                var p, _, L, Q, n, W = [], d = new cd;
                for (p = 0, _ = H.length; _ > p; p++)L = H[p], n = L.args, Q = L.action, Q == Ac && 0 != d.actions.length && (W.push(d), d = new cd), d[Q].apply(d, n);
                return 0 != d.actions.length && W.push(d), W
            }

            function r(c) {
                for (var n = [], f = 0, y = c.length; y > f; f++) {
                    var E = c[f], K = new Qh;
                    K.actions = E.actions, K.curves = E.curves, n.push(K)
                }
                return n
            }

            function B(X, z) {
                for (var $ = 1e-10, j = z.length, m = !1, S = j - 1, h = 0; j > h; S = h++) {
                    var Y = z[S], l = z[h], t = l.x - Y.x, _ = l.y - Y.y;
                    if (e(_) > $) {
                        if (0 > _ && (Y = z[h], t = -t, l = z[S], _ = -_), X.y < Y.y || X.y > l.y)continue;
                        if (X.y == Y.y) {
                            if (X.x == Y.x)return !0
                        } else {
                            var V = _ * (X.x - Y.x) - t * (X.y - Y.y);
                            if (0 == V)return !0;
                            if (0 > V)continue;
                            m = !m
                        }
                    } else {
                        if (X.y != Y.y)continue;
                        if (l.x <= X.x && X.x <= Y.x || Y.x <= X.x && X.x <= l.x)return !0
                    }
                }
                return m
            }

            var a = A(this.actions);
            if (0 == a.length)return [];
            if (i === !0)return r(a);
            var P, V, g, s = [];
            if (1 == a.length)return V = a[0], g = new Qh, g.actions = V.actions, g.curves = V.curves, s.push(g), s;
            var l = !Kh.isClockWise(a[0].getPoints());
            l = J ? !l : l;
            var c, f = [], Q = [], w = [], n = 0;
            Q[n] = K, w[n] = [];
            var m, T;
            for (m = 0, T = a.length; T > m; m++)V = a[m], c = V.getPoints(), P = Kh.isClockWise(c), P = J ? !P : P, P ? (!l && Q[n] && n++, Q[n] = {
                    s: new Qh,
                    p: c
                }, Q[n].s.actions = V.actions, Q[n].s.curves = V.curves, l && n++, w[n] = []) : w[n].push({
                    h: V,
                    p: c[0]
                });
            if (!Q[0])return r(a);
            if (Q.length > 1) {
                for (var U = !1, H = [], o = 0, L = Q.length; L > o; o++)f[o] = [];
                for (var o = 0, L = Q.length; L > o; o++) {
                    Q[o];
                    for (var C = w[o], d = 0; d < C.length; d++) {
                        for (var x = C[d], z = !0, I = 0; I < Q.length; I++)B(x.p, Q[I].p) && (o != I && H.push({
                            froms: o,
                            tos: I,
                            hole: d
                        }), z ? (z = !1, f[I].push(x)) : U = !0);
                        z && f[o].push(x)
                    }
                }
                H.length > 0 && (U || (w = f))
            }
            var t, O, M;
            for (m = 0, T = Q.length; T > m; m++)for (g = Q[m].s, s.push(g), t = w[m], O = 0, M = t.length; M > O; O++)g.holes.push(t[O].h);
            return s
        };
        var Qh = function () {
            cd.apply(this, arguments), this.holes = []
        }, jq = Qh.prototype = Ph(po);
        jq.getPointsHoles = function (r) {
            var _, E = this.holes.length, g = [];
            for (_ = 0; E > _; _++)g[_] = this.holes[_].getTransformedPoints(r);
            return g
        }, jq.extractAllPoints = function (F) {
            return {shape: this.getTransformedPoints(F), holes: this.getPointsHoles(F)}
        }, jq.extractPoints = function (t) {
            return this.extractAllPoints(t)
        };
        var Kh = {
            triangulateShape: function (N, r) {
                function y(I, Q, O) {
                    return I.x != Q.x ? I.x < Q.x ? I.x <= O.x && O.x <= Q.x : Q.x <= O.x && O.x <= I.x : I.y < Q.y ? I.y <= O.y && O.y <= Q.y : Q.y <= O.y && O.y <= I.y
                }

                function I(L, i, T, d, w) {
                    var l = 1e-10, v = i.x - L.x, X = i.y - L.y, t = d.x - T.x, U = d.y - T.y, P = L.x - T.x, r = L.y - T.y, A = X * t - v * U, q = X * P - v * r;
                    if (e(A) > l) {
                        var W;
                        if (A > 0) {
                            if (0 > q || q > A)return [];
                            if (W = U * P - t * r, 0 > W || W > A)return []
                        } else {
                            if (q > 0 || A > q)return [];
                            if (W = U * P - t * r, W > 0 || A > W)return []
                        }
                        if (0 == W)return !w || 0 != q && q != A ? [L] : [];
                        if (W == A)return !w || 0 != q && q != A ? [i] : [];
                        if (0 == q)return [T];
                        if (q == A)return [d];
                        var D = W / A;
                        return [{x: L.x + D * v, y: L.y + D * X}]
                    }
                    if (0 != q || U * P != t * r)return [];
                    var m = 0 == v && 0 == X, B = 0 == t && 0 == U;
                    if (m && B)return L.x != T.x || L.y != T.y ? [] : [L];
                    if (m)return y(T, d, L) ? [L] : [];
                    if (B)return y(L, i, T) ? [T] : [];
                    var g, s, b, N, h, S, E, p;
                    return 0 != v ? (L.x < i.x ? (g = L, b = L.x, s = i, N = i.x) : (g = i, b = i.x, s = L, N = L.x), T.x < d.x ? (h = T, E = T.x, S = d, p = d.x) : (h = d, E = d.x, S = T, p = T.x)) : (L.y < i.y ? (g = L, b = L.y, s = i, N = i.y) : (g = i, b = i.y, s = L, N = L.y), T.y < d.y ? (h = T, E = T.y, S = d, p = d.y) : (h = d, E = d.y, S = T, p = T.y)), E >= b ? E > N ? [] : N == E ? w ? [] : [h] : p >= N ? [h, s] : [h, S] : b > p ? [] : b == p ? w ? [] : [g] : p >= N ? [g, s] : [g, S]
                }

                function F(Y, P, y, r) {
                    var w = 1e-10, p = P.x - Y.x, i = P.y - Y.y, $ = y.x - Y.x, q = y.y - Y.y, a = r.x - Y.x, E = r.y - Y.y, B = p * q - i * $, k = p * E - i * a;
                    if (e(B) > w) {
                        var C = a * q - E * $;
                        return B > 0 ? k >= 0 && C >= 0 : k >= 0 || C >= 0
                    }
                    return k > 0
                }

                function O(f, L) {
                    function l(x, L) {
                        var R = X.length - 1, N = x - 1;
                        0 > N && (N = R);
                        var p = x + 1;
                        p > R && (p = 0);
                        var M = F(X[x], X[N], X[p], O[L]);
                        if (!M)return !1;
                        var q = O.length - 1, H = L - 1;
                        0 > H && (H = q);
                        var f = L + 1;
                        return f > q && (f = 0), M = F(O[L], O[H], O[f], X[x]), M ? !0 : !1
                    }

                    function N(l, s) {
                        var v, q, g;
                        for (v = 0; v < X.length; v++)if (q = v + 1, q %= X.length, g = I(l, s, X[v], X[q], !0), g.length > 0)return !0;
                        return !1
                    }

                    function z(F, t) {
                        var s, E, k, m, Y;
                        for (s = 0; s < V.length; s++)for (E = L[V[s]], k = 0; k < E.length; k++)if (m = k + 1, m %= E.length, Y = I(F, t, E[k], E[m], !0), Y.length > 0)return !0;
                        return !1
                    }

                    for (var O, p, w, T, j, a, G, e, i, t, r, X = f.concat(), V = [], S = [], B = 0, Y = L.length; Y > B; B++)V.push(B);
                    for (var h = 0, $ = 2 * V.length; V.length > 0 && ($--, !(0 > $));)for (w = h; w < X.length; w++) {
                        T = X[w], p = -1;
                        for (var B = 0; B < V.length; B++)if (a = V[B], G = T.x + ":" + T.y + ":" + a, S[G] === K) {
                            O = L[a];
                            for (var o = 0; o < O.length; o++)if (j = O[o], l(w, o) && !N(T, j) && !z(T, j)) {
                                p = o, V.splice(B, 1), e = X.slice(0, w + 1), i = X.slice(w), t = O.slice(p), r = O.slice(0, p + 1), X = e.concat(t).concat(r).concat(i), h = w;
                                break
                            }
                            if (p >= 0)break;
                            S[G] = !0
                        }
                        if (p >= 0)break
                    }
                    return X
                }

                for (var W, c, f, V, u, L, q = {}, E = N.concat(), _ = 0, J = r.length; J > _; _++)Array.prototype.push.apply(E, r[_]);
                for (W = 0, c = E.length; c > W; W++)u = E[W].x + ":" + E[W].y, q[u] !== K, q[u] = W;
                var Z = O(N, r), j = Sn.Triangulate(Z, !1);
                for (W = 0, c = j.length; c > W; W++)for (V = j[W], f = 0; 3 > f; f++)u = V[f].x + ":" + V[f].y, L = q[u], L !== K && (V[f] = L);
                return j.concat()
            }, isClockWise: function (C) {
                return Sn.Triangulate.area(C) < 0
            }, b2p0: function (X, C) {
                var d = 1 - X;
                return d * d * C
            }, b2p1: function (a, g) {
                return 2 * (1 - a) * a * g
            }, b2p2: function (u, w) {
                return u * u * w
            }, b2: function (N, r, a, q) {
                return this.b2p0(N, r) + this.b2p1(N, a) + this.b2p2(N, q)
            }, b3p0: function (i, T) {
                var Y = 1 - i;
                return Y * Y * Y * T
            }, b3p1: function (H, d) {
                var L = 1 - H;
                return 3 * L * L * H * d
            }, b3p2: function (M, B) {
                var y = 1 - M;
                return 3 * y * M * M * B
            }, b3p3: function (G, z) {
                return G * G * G * z
            }, b3: function (C, g, s, l, T) {
                return this.b3p0(C, g) + this.b3p1(C, s) + this.b3p2(C, l) + this.b3p3(C, T)
            }
        }, Sn = {
            faces: {},
            face: "",
            weight: "normal",
            style: "normal",
            size: 150,
            divisions: 10,
            getDefaultFont: function () {
                var v = m.keys(this.faces);
                return v.length ? v[0] : null
            },
            getFace: function () {
                try {
                    return this.faces[this.face][this.weight][this.style]
                } catch (p) {
                    throw"The font " + this.face + " with " + this.weight + " weight and " + this.style + " style is missing."
                }
            },
            loadFace: function (y) {
                var H = y.familyName.toLowerCase(), E = this;
                return E.faces[H] = E.faces[H] || {}, E.faces[H][y.cssFontWeight] = E.faces[H][y.cssFontWeight] || {}, E.faces[H][y.cssFontWeight][y.cssFontStyle] = y, y
            },
            drawText: function (G) {
                var c, H = this.getFace(), D = this.size / H.resolution, $ = 0, g = String(G).split(""), A = g.length, o = [];
                for (c = 0; A > c; c++) {
                    var K = new cd, B = this.extractGlyphPoints(g[c], H, D, $, K);
                    B && ($ += B.offset * this.spacing, o.push(B.path))
                }
                var l = $ / 2;
                return {paths: o, offset: l}
            },
            extractGlyphPoints: function (u, _, W, D, Q) {
                var G, d, R, h, x, q, I, L, c, j, $, B, f, w, C, X, g, v, o, J = [], n = _.glyphs[u] || _.glyphs["?"];
                if (n) {
                    if (n.o)for (h = n._cachedOutline || (n._cachedOutline = n.o.split(" ")), q = h.length, I = W, L = W, G = 0; q > G;)switch (x = h[G++]) {
                        case"m":
                            c = h[G++] * I + D, j = h[G++] * L, Q.moveTo(c, j);
                            break;
                        case"l":
                            c = h[G++] * I + D, j = h[G++] * L, Q.lineTo(c, j);
                            break;
                        case"q":
                            if ($ = h[G++] * I + D, B = h[G++] * L, C = h[G++] * I + D, X = h[G++] * L, Q.quadraticCurveTo(C, X, $, B), o = J[J.length - 1])for (f = o.x, w = o.y, d = 1, R = this.divisions; R >= d; d++) {
                                var p = d / R;
                                Kh.b2(p, f, C, $), Kh.b2(p, w, X, B)
                            }
                            break;
                        case"b":
                            if ($ = h[G++] * I + D, B = h[G++] * L, C = h[G++] * I + D, X = h[G++] * L, g = h[G++] * I + D, v = h[G++] * L, Q.bezierCurveTo(C, X, g, v, $, B), o = J[J.length - 1])for (f = o.x, w = o.y, d = 1, R = this.divisions; R >= d; d++) {
                                var p = d / R;
                                Kh.b3(p, f, C, g, $), Kh.b3(p, w, X, v, B)
                            }
                    }
                    return {offset: n.ha * W, path: Q}
                }
            }
        };
        Sn.generateShapes = function (e, o) {
            o = o || {};
            var l = o.font;
            if (l === K && (l = Sn.getDefaultFont(), !l))return console.log("There's no valid font face, use ht.Default.loadFontFace to load font first."), [];
            var A = o.size !== K ? o.size : 1, u = o.curveSegments !== K ? o.curveSegments : 4, n = o.spacing !== K ? o.spacing : 1, y = o.weight !== K ? o.weight : "normal", j = o.style !== K ? o.style : "normal";
            Sn.size = A, Sn.divisions = u, Sn.face = l, Sn.weight = y, Sn.style = j, Sn.spacing = n;
            for (var $ = Sn.drawText(e), Q = $.paths, t = [], X = 0, V = Q.length; V > X; X++)Array.prototype.push.apply(t, Q[X].toShapes());
            return t
        }, function ($) {
            var o = 1e-10, W = function (Z, h) {
                var P = Z.length;
                if (3 > P)return null;
                var Y, C, Q, j = [], A = [], X = [];
                if (n(Z) > 0)for (C = 0; P > C; C++)A[C] = C; else for (C = 0; P > C; C++)A[C] = P - 1 - C;
                var p = P, B = 2 * p;
                for (C = p - 1; p > 2;) {
                    if (B-- <= 0)return h ? X : j;
                    if (Y = C, Y >= p && (Y = 0), C = Y + 1, C >= p && (C = 0), Q = C + 1, Q >= p && (Q = 0), F(Z, Y, C, Q, p, A)) {
                        var J, H, D, t, i;
                        for (J = A[Y], H = A[C], D = A[Q], j.push([Z[J], Z[H], Z[D]]), X.push([A[Y], A[C], A[Q]]), t = C, i = C + 1; p > i; t++, i++)A[t] = A[i];
                        p--, B = 2 * p
                    }
                }
                return h ? X : j
            }, n = function (m) {
                for (var x = m.length, O = 0, P = x - 1, k = 0; x > k; P = k++)O += m[P].x * m[k].y - m[k].x * m[P].y;
                return .5 * O
            }, F = function (Q, i, c, w, V, M) {
                var n, U, y, Z, S, g, J, T, m;
                if (U = Q[M[i]].x, y = Q[M[i]].y, Z = Q[M[c]].x, S = Q[M[c]].y, g = Q[M[w]].x, J = Q[M[w]].y, o > (Z - U) * (J - y) - (S - y) * (g - U))return !1;
                var H, Y, _, r, q, b, E, X, v, N, P, W, j, e, A;
                for (H = g - Z, Y = J - S, _ = U - g, r = y - J, q = Z - U, b = S - y, n = 0; V > n; n++)if (T = Q[M[n]].x, m = Q[M[n]].y, !(T === U && m === y || T === Z && m === S || T === g && m === J) && (E = T - U, X = m - y, v = T - Z, N = m - S, P = T - g, W = m - J, A = H * N - Y * v, j = q * X - b * E, e = _ * W - r * P, A >= -o && e >= -o && j >= -o))return !1;
                return !0
            };
            return $.Triangulate = W, $.Triangulate.area = n, $
        }(Sn), c._typeface_js = {faces: Sn.faces, loadFace: Sn.loadFace};
        var Kb = function () {
            this.vertices = [], this.faces = [], this.faceVertexUvs = [[]]
        }, Wr = Kb.prototype = {
            constructor: Kb, computeFaceNormals: function () {
                for (var F = new Am, p = new Am, g = 0, $ = this.faces.length; $ > g; g++) {
                    var c = this.faces[g], J = this.vertices[c.a], U = this.vertices[c.b], l = this.vertices[c.c];
                    F.subVectors(l, U), p.subVectors(J, U), F.cross(p), F.normalize(), c.normal.copy(F)
                }
            }, computeVertexNormals: function (u) {
                var R, i, B, A, X, P;
                for (P = new Array(this.vertices.length), R = 0, i = this.vertices.length; i > R; R++)P[R] = new Am;
                if (u) {
                    var r, J, S, N = new Am, x = new Am;
                    for (B = 0, A = this.faces.length; A > B; B++)X = this.faces[B], r = this.vertices[X.a], J = this.vertices[X.b], S = this.vertices[X.c], N.subVectors(S, J), x.subVectors(r, J), N.cross(x), P[X.a].add(N), P[X.b].add(N), P[X.c].add(N)
                } else for (B = 0, A = this.faces.length; A > B; B++)X = this.faces[B], P[X.a].add(X.normal), P[X.b].add(X.normal), P[X.c].add(X.normal);
                for (R = 0, i = this.vertices.length; i > R; R++)P[R].normalize();
                for (B = 0, A = this.faces.length; A > B; B++)X = this.faces[B], X.vertexNormals[0] = P[X.a].clone(), X.vertexNormals[1] = P[X.b].clone(), X.vertexNormals[2] = P[X.c].clone()
            }, mergeVertices: function () {
                var i, t, R, v, A, z, c, Q, l = {}, G = [], r = [], n = 4, X = B(10, n);
                for (R = 0, v = this.vertices.length; v > R; R++)i = this.vertices[R], t = I(i.x * X) + "_" + I(i.y * X) + "_" + I(i.z * X), l[t] === K ? (l[t] = R, G.push(this.vertices[R]), r[R] = G.length - 1) : r[R] = r[l[t]];
                var u = [];
                for (R = 0, v = this.faces.length; v > R; R++) {
                    A = this.faces[R], A.a = r[A.a], A.b = r[A.b], A.c = r[A.c], z = [A.a, A.b, A.c];
                    for (var M = 0; 3 > M; M++)if (z[M] == z[(M + 1) % 3]) {
                        u.push(R);
                        break
                    }
                }
                for (R = u.length - 1; R >= 0; R--) {
                    var Z = u[R];
                    for (this.faces.splice(Z, 1), c = 0, Q = this.faceVertexUvs.length; Q > c; c++)this.faceVertexUvs[c].splice(Z, 1)
                }
                var f = this.vertices.length - G.length;
                return this.vertices = G, f
            }
        }, bq = function (A, i, C, z, l, F, r) {
            this.aX = A, this.aY = i, this.xRadius = C, this.yRadius = z, this.aStartAngle = l, this.aEndAngle = F, this.aClockwise = r
        };
        bq.prototype = Ph(zc), bq.prototype.getPoint = function (Q) {
            var m, f = this.aEndAngle - this.aStartAngle;
            0 > f && (f += $), f > $ && (f -= $), m = this.aClockwise === !0 ? this.aEndAngle + (1 - Q) * ($ - f) : this.aStartAngle + Q * f;
            var w = this.aX + this.xRadius * M(m), B = this.aY + this.yRadius * v(m);
            return new qf(w, B)
        };
        var Rr = function (Q, x) {
            this.v1 = Q, this.v2 = x
        }, Dc = Rr.prototype = Ph(zc);
        Dc.getPoint = function (g) {
            var C = this.v2.clone().sub(this.v1);
            return C.multiplyScalar(g).add(this.v1), C
        }, Dc.getPointAt = function (a) {
            return this.getPoint(a)
        }, Dc.getTangent = function () {
            var N = this.v2.clone().sub(this.v1);
            return N.normalize()
        };
        var wo = function (L, n, T) {
            this.v0 = L, this.v1 = n, this.v2 = T
        };
        wo.prototype = Ph(zc), wo.prototype.getPoint = function (E) {
            var J, M;
            return J = Kh.b2(E, this.v0.x, this.v1.x, this.v2.x), M = Kh.b2(E, this.v0.y, this.v1.y, this.v2.y), new qf(J, M)
        };
        var Aj = function (E, c, O, f) {
            this.v0 = E, this.v1 = c, this.v2 = O, this.v3 = f
        };
        Aj.prototype = Ph(zc), Aj.prototype.getPoint = function (O) {
            var V, M;
            return V = Kh.b3(O, this.v0.x, this.v1.x, this.v2.x, this.v3.x), M = Kh.b3(O, this.v0.y, this.v1.y, this.v2.y, this.v3.y), new qf(V, M)
        }, qm.create(function (x, A) {
            this.v1 = x, this.v2 = A
        }, function (x) {
            var T = new Am;
            return T.subVectors(this.v2, this.v1), T.multiplyScalar(x), T.add(this.v1), T
        });
        var lh = qm.create(function (X, R, g) {
            this.v0 = X, this.v1 = R, this.v2 = g
        }, function (o) {
            var i, A, I;
            return i = Kh.b2(o, this.v0.x, this.v1.x, this.v2.x), A = Kh.b2(o, this.v0.y, this.v1.y, this.v2.y), I = Kh.b2(o, this.v0.z, this.v1.z, this.v2.z), new Am(i, A, I)
        }), Jf = qm.create(function (j, b, l, x) {
            this.v0 = j, this.v1 = b, this.v2 = l, this.v3 = x
        }, function (g) {
            var u, l, Z;
            return u = Kh.b3(g, this.v0.x, this.v1.x, this.v2.x, this.v3.x), l = Kh.b3(g, this.v0.y, this.v1.y, this.v2.y, this.v3.y), Z = Kh.b3(g, this.v0.z, this.v1.z, this.v2.z, this.v3.z), new Am(u, l, Z)
        }), Vr = function (E, d, u, R, W, A, n, S) {
            Kb.call(this), R = R !== K ? R : .5, W = W !== K ? W : .5, S = S !== K ? S : 1, E = E || 8, A = A || 0, n = n || $;
            var j, r, z = 1, g = S / 2, T = [], N = [], w = this.vertices, k = this.faces, J = this.faceVertexUvs;
            for (r = 0; z >= r; r++) {
                var G = [], X = [], Q = r / z, O = Q * (W - R) + R;
                for (j = 0; E >= j; j++) {
                    var o = j / E, i = new Am, B = -(o * n + A);
                    i.z = O * v(B), i.y = -Q * S + g, i.x = O * M(B), w.push(i), G.push(w.length - 1), X.push(new qf(o, Q))
                }
                T.push(G), N.push(X)
            }
            var V, c, H = (W - R) / S;
            for (j = 0; E > j; j++)for (0 !== R ? (V = w[T[0][j]].clone(), c = w[T[0][j + 1]].clone()) : (V = w[T[1][j]].clone(), c = w[T[1][j + 1]].clone()), V.setY(y(V.x * V.x + V.z * V.z) * H).normalize(), c.setY(y(c.x * c.x + c.z * c.z) * H).normalize(), r = 0; z > r; r++) {
                var l = T[r][j], q = T[r + 1][j], t = T[r + 1][j + 1], F = T[r][j + 1], _ = V.clone(), L = V.clone(), m = c.clone(), s = c.clone(), U = N[r][j].clone(), x = N[r + 1][j].clone(), b = N[r + 1][j + 1].clone(), e = N[r][j + 1].clone();
                k.push(new dp(l, q, F, [_, L, s])), J[0].push([U, x, e]), k.push(new dp(q, t, F, [L.clone(), m, s.clone()])), J[0].push([x.clone(), b, e.clone()])
            }
            if (d && R > 0)for (this.vertices.push(new Am(0, g, 0)), j = 0; E > j; j++) {
                var l = T[0][j], q = T[0][j + 1], t = this.vertices.length - 1, _ = new Am(0, 1, 0), L = new Am(0, 1, 0), m = new Am(0, 1, 0), U = N[0][j].clone(), x = N[0][j + 1].clone(), b = new qf(x.x, 0);
                k.push(new dp(l, q, t, [_, L, m], null, 1));
                var P = j / E * $, Y = M(P), f = v(P), a = (j + 1) / E * $, I = M(a), h = v(a);
                J[0].push([new qf(.5 + .5 * Y, .5 + .5 * f), new qf(.5 + .5 * I, .5 + .5 * h), new qf(.5, .5)])
            }
            if (u && W > 0)for (this.vertices.push(new Am(0, -g, 0)), j = 0; E > j; j++) {
                var l = T[r][j + 1], q = T[r][j], t = w.length - 1, _ = new Am(0, -1, 0), L = new Am(0, -1, 0), m = new Am(0, -1, 0), U = N[r][j + 1].clone(), x = N[r][j].clone();
                k.push(new dp(l, q, t, [_, L, m], null, 2));
                var P = j / E * $, Y = M(P), f = v(P), a = (j + 1) / E * $, I = M(a), h = v(a);
                J[0].push([new qf(.5 + .5 * I, .5 - .5 * h), new qf(.5 + .5 * Y, .5 - .5 * f), new qf(.5, .5)])
            }
        };
        Vr.prototype = Ph(Wr);
        var ub = function (p, n, B, J, T, F, a) {
            Kb.call(this), a = a || .5, p = p || 16, n = n || 16, B = (B !== K ? B : 0) - h, J = J !== K ? J : $, T = T !== K ? T : 0, F = F !== K ? F : h;
            var I, o, i = [], u = [], R = this.vertices, y = this.faces, d = this.faceVertexUvs;
            for (o = 0; n >= o; o++) {
                var D = [], m = [];
                for (I = 0; p >= I; I++) {
                    var j = I / p, X = o / n, L = new Am;
                    L.x = -a * M(B + j * J) * v(T + X * F), L.y = a * M(T + X * F), L.z = a * v(B + j * J) * v(T + X * F), R.push(L), D.push(R.length - 1), m.push(new qf(j, X))
                }
                i.push(D), u.push(m)
            }
            for (o = 0; n > o; o++)for (I = 0; p > I; I++) {
                var O = i[o][I + 1], U = i[o][I], q = i[o + 1][I], z = i[o + 1][I + 1], N = R[O].clone().normalize(), c = R[U].clone().normalize(), V = R[q].clone().normalize(), E = R[z].clone().normalize(), P = u[o][I + 1].clone(), Z = u[o][I].clone(), _ = u[o + 1][I].clone(), G = u[o + 1][I + 1].clone();
                e(R[O].y) === a ? (P.x = (P.x + Z.x) / 2, y.push(new dp(O, q, z, [N, V, E])), d[0].push([P, _, G])) : e(R[q].y) === a ? (_.x = (_.x + G.x) / 2, y.push(new dp(O, U, q, [N, c, V])), d[0].push([P, Z, _])) : (y.push(new dp(O, U, z, [N, c, E])), d[0].push([P, Z, G]), y.push(new dp(U, q, z, [c.clone(), V, E.clone()])), d[0].push([Z.clone(), _, G.clone()]))
            }
        };
        ub.prototype = Ph(Wr);
        var ch = function (I, Q, Y, T, S, t) {
            Kb.call(this), I = I || .33, Q = Q || .17, T = T || 8, Y = Y || 6, S = S || 0, t = t || $;
            for (var R = new Am, q = [], p = [], u = 0; T >= u; u++)for (var x = u / T * $ + h, B = 0; Y >= B; B++) {
                var V = B / Y * t + S;
                R.x = I * M(V), R.z = -I * v(V);
                var A = new Am, O = I + Q * M(x);
                A.x = O * M(V), A.z = -O * v(V), A.y = Q * v(x), this.vertices.push(A), q.push(new qf(B / Y, 1 - u / T)), p.push(A.clone().sub(R).normalize())
            }
            for (var u = 1; T >= u; u++)for (var B = 1; Y >= B; B++) {
                var i = (Y + 1) * u + B - 1, W = (Y + 1) * (u - 1) + B - 1, y = (Y + 1) * (u - 1) + B, r = (Y + 1) * u + B, w = new dp(i, W, r, [p[i].clone(), p[W].clone(), p[r].clone()]);
                this.faces.push(w), this.faceVertexUvs[0].push([q[i].clone(), q[W].clone(), q[r].clone()]), w = new dp(W, y, r, [p[W].clone(), p[y].clone(), p[r].clone()]), this.faces.push(w), this.faceVertexUvs[0].push([q[W].clone(), q[y].clone(), q[r].clone()])
            }
            this.computeFaceNormals()
        };
        ch.prototype = Ph(Wr);
        var Cn = function (H, $, Q) {
            return H ? (Kb.call(this), H = H instanceof Array ? H : [H], this.addShapeList(H, $), $.convertYZ !== !1 && $f(this, Q), this.computeFaceNormals(), void 0) : (H = [], void 0)
        }, zr = Cn.prototype = Ph(Kb.prototype);
        zr.addShapeList = function (u, p) {
            for (var t = u.length, h = 0; t > h; h++) {
                var V = u[h];
                this.addShape(V, p)
            }
        }, zr.addShape = function (g, l) {
            function x() {
                if (l.bottom)for (var j = 0; L > j; j++)u = R[j], Z(u[2], u[1], u[0], !0);
                if (l.top)for (j = 0; L > j; j++)u = R[j], Z(u[0] + N * d, u[1] + N * d, u[2] + N * d, !1)
            }

            function Y() {
                var h = 0;
                for (X(H, h), h += H.length, r = 0, k = f.length; k > r; r++)Q = f[r], X(Q, h), h += Q.length
            }

            function X(F, C) {
                for (var b, P, r = F.length; --r >= 0;) {
                    b = r, P = r - 1, 0 > P && (P = F.length - 1);
                    var R = 0, J = d;
                    for (R = 0; J > R; R++) {
                        var z = N * R, H = N * (R + 1), _ = C + b + z, u = C + P + z, T = C + P + H, V = C + b + H;
                        y(_, u, T, V, F, R, J, b, P)
                    }
                }
            }

            function z(E, O, G) {
                F.vertices.push(new Am(E, O, G))
            }

            function Z(p, H, D, Z) {
                p += A, H += A, D += A, F.faces.push(new dp(p, H, D, null, null, Z ? 2 : 1));
                var t = Z ? J.generateBottomUV(F, g, l, p, H, D) : J.generateTopUV(F, g, l, p, H, D);
                F.faceVertexUvs[0].push(t)
            }

            function y(X, L, G, B, O, n, q, H, h) {
                X += A, L += A, G += A, B += A, F.faces.push(new dp(X, L, B)), F.faces.push(new dp(L, G, B));
                var $ = J.generateSideWallUV(F, g, O, l, X, L, G, B, n, q, H, h);
                F.faceVertexUvs[0].push([$[0], $[1], $[3]]), F.faceVertexUvs[0].push([$[1], $[2], $[3]])
            }

            var v, O, q, C, h, P = l.amount, p = l.curveSegments || Hl, d = l.steps || 1, b = l.extrudePath, _ = !1, J = new vn(l.repeatUVLength);
            b && (v = b.getSpacedPoints(d), _ = !0, O = l.frames !== K ? l.frames : new Fk.FrenetFrames(b, d, !1), q = new Am, C = new Am, h = new Am);
            var Q, r, k, F = this, A = this.vertices.length, w = g.extractPoints(p), $ = w.shape, f = w.holes, S = !Kh.isClockWise($);
            if (S) {
                for ($ = $.reverse(), r = 0, k = f.length; k > r; r++)Q = f[r], Kh.isClockWise(Q) && (f[r] = Q.reverse());
                S = !1
            }
            var R = Kh.triangulateShape($, f), H = $;
            for (r = 0, k = f.length; k > r; r++)Q = f[r], $ = $.concat(Q);
            for (var a, u, N = $.length, L = R.length, B = 0; N > B; B++)a = $[B], _ ? (C.copy(O.normals[0]).multiplyScalar(a.x), q.copy(O.binormals[0]).multiplyScalar(a.y), h.copy(v[0]).add(C).add(q), z(h.x, h.y, h.z)) : z(a.x, a.y, 0);
            var e;
            for (e = 1; d >= e; e++)for (B = 0; N > B; B++)a = $[B], _ ? (C.copy(O.normals[e]).multiplyScalar(a.x), q.copy(O.binormals[e]).multiplyScalar(a.y), h.copy(v[e]).add(C).add(q), z(h.x, h.y, h.z)) : z(a.x, a.y, P / d * e);
            x(), Y()
        };
        var Fk = function (O, H, h, I, l) {
            function F(I, G, S) {
                return Q.vertices.push(new Am(I, G, S)) - 1
            }

            Kb.call(this), H = H || 64, h = h || 1, I = I || 8, l = l || !1;
            var N, B, j, k, i, K, G, n, J, e, g, m, c, o, r, V, d, w, U, S, D = [], Q = this, R = H + 1, t = new Am, P = new Fk.FrenetFrames(O, H, l), C = P.tangents, Z = P.normals, u = P.binormals;
            for (this.tangents = C, this.normals = Z, this.binormals = u, J = 0; R > J; J++)for (D[J] = [], k = J / (R - 1), n = O.getPointAt(k), N = C[J], B = Z[J], j = u[J], e = 0; I > e; e++)i = e / I * $, K = -h * M(i), G = h * v(i), t.copy(n), t.x += K * B.x + G * j.x, t.y += K * B.y + G * j.y, t.z += K * B.z + G * j.z, D[J][e] = F(t.x, t.y, t.z);
            for (J = 0; H > J; J++)for (e = 0; I > e; e++)g = l ? (J + 1) % H : J + 1, m = (e + 1) % I, c = D[J][e], o = D[g][e], r = D[g][m], V = D[J][m], d = new qf(J / H, e / I), w = new qf((J + 1) / H, e / I), U = new qf((J + 1) / H, (e + 1) / I), S = new qf(J / H, (e + 1) / I), this.faces.push(new dp(c, o, V)), this.faceVertexUvs[0].push([d, w, S]), this.faces.push(new dp(o, r, V)), this.faceVertexUvs[0].push([w.clone(), U, S.clone()]);
            this.computeFaceNormals(), this.computeVertexNormals()
        };
        Fk.prototype = Ph(Wr), Fk.FrenetFrames = function ($, g, q) {
            function u() {
                Y[0] = new Am, L[0] = new Am, h = Number.MAX_VALUE, H = e(t[0].x), X = e(t[0].y), l = e(t[0].z), h >= H && (h = H, c.set(1, 0, 0)), h >= X && (h = X, c.set(0, 1, 0)), h >= l && c.set(0, 0, 1), E.crossVectors(t[0], c).normalize(), Y[0].crossVectors(t[0], E), L[0].crossVectors(t[0], Y[0])
            }

            var R, h, H, X, l, A, B, c = new Am, t = [], Y = [], L = [], E = new Am, b = new Sj, V = g + 1, m = 1e-4;
            for (this.tangents = t, this.normals = Y, this.binormals = L, A = 0; V > A; A++)B = A / (V - 1), t[A] = $.getTangentAt(B), t[A].normalize();
            for (u(), A = 1; V > A; A++)Y[A] = Y[A - 1].clone(), L[A] = L[A - 1].clone(), E.crossVectors(t[A - 1], t[A]), E.length() > m && (E.normalize(), R = Z(Qr(t[A - 1].dot(t[A]), -1, 1)), Y[A].applyMatrix4(b.makeRotationAxis(E, R))), L[A].crossVectors(t[A], Y[A]);
            if (q)for (R = Z(Qr(Y[0].dot(Y[V - 1]), -1, 1)), R /= V - 1, t[0].dot(E.crossVectors(Y[0], Y[V - 1])) > 0 && (R = -R), A = 1; V > A; A++)Y[A].applyMatrix4(b.makeRotationAxis(t[A], R * A)), L[A].crossVectors(t[A], Y[A])
        };
        var xs = function (k, I, l, Y) {
            Kb.call(this), I = I || 18, l = l || 0, Y = Y == U ? $ : Y;
            for (var z = 1 / (k.length - 1), V = 1 / I, B = 0, r = I; r >= B; B++)for (var u = l + B * V * Y, g = M(u), D = v(u), d = 0, A = k.length; A > d; d++) {
                var C = k[d], n = new Am;
                n.x = g * C.x - D * C.y, n.y = D * C.x + g * C.y, n.z = C.z, this.vertices.push(n)
            }
            for (var x = k.length, B = 0, r = I; r > B; B++)for (var d = 0, A = k.length - 1; A > d; d++) {
                var L = d + x * B, S = L, G = L + x, g = L + 1 + x, t = L + 1, J = B * V, P = d * z, c = J + V, f = P + z;
                this.faces.push(new dp(S, t, G)), this.faceVertexUvs[0].push([new qf(J, P), new qf(J, f), new qf(c, P)]), this.faces.push(new dp(G, t, g)), this.faceVertexUvs[0].push([new qf(c, P), new qf(J, f), new qf(c, f)])
            }
            this.mergeVertices(), $f(this), this.computeFaceNormals(), this.computeVertexNormals()
        };
        xs.prototype = Ph(Wr);
        var Zh = function (B, X) {
            X = X || {};
            var w = Sn.generateShapes(B, X);
            X.amount = X.amount !== K ? X.amount : .5, X.convertYZ = !1, X.fill !== !1 && (X.bottom = !0, X.top = !0), Cn.call(this, w, X)
        };
        Zh.prototype = Ph(zr);
        var uk = f.Node = function () {
            Eg(uk, this)
        }, ze = {X: qd, Y: lr, Z: Lq}, Tk = {
            xyz: "XYZ",
            xzy: "XZY",
            yxz: "YXZ",
            yzx: "YZX",
            zxy: "ZXY",
            zyx: "ZYX"
        }, Fq = "xzy", Gp = function (r, L, S) {
            if (L) {
                var P = L[0], t = L[1], f = L[2];
                "xzy" === S ? (lr(r, t), Lq(r, f), qd(r, P)) : "xyz" === S ? (Lq(r, f), lr(r, t), qd(r, P)) : "yxz" === S ? (Lq(r, f), qd(r, P), lr(r, t)) : "yzx" === S ? (qd(r, P), Lq(r, f), lr(r, t)) : "zxy" === S ? (lr(r, t), qd(r, P), Lq(r, f)) : "zyx" === S ? (qd(r, P), lr(r, t), Lq(r, f)) : (lr(r, t), Lq(r, f), qd(r, P))
            }
        };
        zd("Node", bf, {
            ms_ac: ["rotationMode", "tall"],
            _adjustChildrenToTop: !0,
            _icon: "node_icon",
            _image: "node_image",
            _rotationMode: Fq,
            _64O: 0,
            _rotationX: 0,
            _53O: 0,
            _host: U,
            _position: {x: 0, y: 0},
            _anchor: {x: .5, y: .5},
            _scale: {x: 1, y: 1},
            _tall: 20,
            _54O: 0,
            getUIClass: function () {
                return cb
            },
            _22Q: function () {
                return il
            },
            p: function () {
                return 0 === arguments.length ? this.getPosition() : (this.setPosition.apply(this, arguments), this)
            },
            p3: function () {
                return 0 === arguments.length ? this.getPosition3d() : (this.setPosition3d.apply(this, arguments), this)
            },
            s3: function () {
                return 0 === arguments.length ? this.getSize3d() : (this.setSize3d.apply(this, arguments), this)
            },
            r3: function () {
                return 0 === arguments.length ? this.getRotation3d() : (this.setRotation3d.apply(this, arguments), this)
            },
            t3: function () {
                return this.translate3d.apply(this, arguments), this
            },
            translate3dBy: function (d, G) {
                oc(d, wn(U, U, this.r3(), this.getRotationMode())), this.translate3d(d[0] * G, d[1] * G, d[2] * G)
            },
            translateFront: function (w) {
                this.translate3dBy([0, 0, 1], w)
            },
            translateBack: function (o) {
                this.translate3dBy([0, 0, -1], o)
            },
            translateLeft: function (F) {
                this.translate3dBy([-1, 0, 0], F)
            },
            translateRight: function (a) {
                this.translate3dBy([1, 0, 0], a)
            },
            translateTop: function (p) {
                this.translate3dBy([0, 1, 0], p)
            },
            translateBottom: function (N) {
                this.translate3dBy([0, -1, 0], N)
            },
            getPosition3d: function () {
                return [this._position.x, this._54O, this._position.y]
            },
            setPosition3d: function (A, M, z) {
                1 === arguments.length && (M = A[1], z = A[2], A = A[0]), this.p(A, z), this.setElevation(M)
            },
            translate3d: function (D, M, l) {
                1 === arguments.length && (M = D[1], l = D[2], D = D[0]), this.translate(D, l), this.setElevation(this._54O + M)
            },
            getSize3d: function () {
                return [this.getWidth(), this.getTall(), this.getHeight()]
            },
            setSize3d: function (V, Z, T) {
                1 === arguments.length && (Z = V[1], T = V[2], V = V[0]), this.setSize(V, T), this.setTall(Z)
            },
            getRotation3d: function () {
                return [this._rotationX, -this._64O, this._53O]
            },
            setRotation3d: function (Y, w, m) {
                1 === arguments.length && (w = Y[1], m = Y[2], Y = Y[0]), this.setRotationX(Y), this.setRotation(-w), this.setRotationZ(m)
            },
            setRotationY: function (H) {
                this.setRotation(-H)
            },
            getRotationY: function () {
                return -this._64O
            },
            lookAt: function (t, R) {
                R = R || Ar;
                var G = this, d = pj(t, G.p3()), C = Rk(d);
                R === Ar ? (G.r3([-p(d[1] / C), -w(d[2], d[0]) + a, 0]), G.setRotationMode("xzy")) : R === ks ? (G.r3(0, -w(d[2], d[0]), p(d[1] / C)), G.setRotationMode("zyx")) : R === rk ? (G.r3(0, -w(d[2], d[0]) + h, -p(d[1] / C)), G.setRotationMode("zyx")) : R === dh ? (G.r3([-p(d[1] / C) + a, -w(d[2], d[0]) + a, 0]), G.setRotationMode("xzy")) : R === De && (G.r3([-p(d[1] / C) - a, -w(d[2], d[0]) + a, 0]), G.setRotationMode("xzy")), R === op && (G.r3([-p(d[1] / C) + h, -w(d[2], d[0]) + a, h]), G.setRotationMode("zxy"))
            },
            getLoopedEdges: function () {
                return this._45I
            },
            getEdges: function () {
                return this._70O
            },
            getAgentEdges: function () {
                return this._49I
            },
            getHost: function () {
                return this._host
            },
            setHost: function (G) {
                var F = this;
                if (F !== G && F._host !== G) {
                    var E = F._host;
                    E && E._removeAttach(F), F._host = G, F._host && F._host._addAttach(F), F.fp("host", E, G), F.onHostChanged(E, G)
                }
            },
            getAttaches: function () {
                return this._69O
            },
            _addAttach: function (r) {
                var i = this;
                i._69O || (i._69O = new gr), i._69O.add(r), i.fp("attaches", U, r)
            },
            _removeAttach: function (A) {
                var p = this;
                p._69O.remove(A), p._69O.isEmpty() && delete p._69O, p.fp("attaches", A, U)
            },
            getSourceEdges: function () {
                return this._42I
            },
            getTargetEdges: function () {
                return this._43I
            },
            _2I: function ($) {
                var i = this;
                i._44I || (i._44I = new gr), i._42I || (i._42I = new gr), i._44I.add($), i._42I.add($), i._20I()
            },
            _4I: function (h) {
                var J = this;
                J._44I || (J._44I = new gr), J._43I || (J._43I = new gr), J._44I.add(h), J._43I.add(h), J._20I()
            },
            _16I: function (t) {
                var j = this;
                j._44I.remove(t), j._42I.remove(t), j._44I.isEmpty() && delete j._44I, j._42I.isEmpty() && delete j._42I, j._20I()
            },
            _18I: function (C) {
                var L = this;
                L._44I.remove(C), L._43I.remove(C), L._44I.isEmpty() && delete L._44I, L._43I.isEmpty() && delete L._43I, L._20I()
            },
            _20I: function () {
                var u = this;
                if (delete u._45I, !u._44I || u._44I.isEmpty())return delete u._70O, void 0;
                var I;
                u._44I.each(function (K) {
                    K.isLooped() && (I || (I = {}), I[K._id] || (u._45I || (u._45I = new gr), u._45I.add(K), I[K._id] = K))
                }), I ? (u._70O = new gr, u._44I.each(function (B) {
                        I[B._id] ? "A" === I[B._id] || (I[B._id] = "A", u._70O.add(B)) : u._70O.add(B)
                    })) : u._70O = u._44I
            },
            hasAgentEdges: function () {
                return !!this._49I && !this._49I.isEmpty()
            },
            getSourceAgentEdges: function () {
                return this._46I
            },
            getTargetAgentEdges: function () {
                return this._47I
            },
            _1I: function (B) {
                var j = this;
                j._46I || (j._46I = new gr), j._48I || (j._48I = new gr), j._46I.add(B), j._48I.add(B), j._19I()
            },
            _3I: function (v) {
                var o = this;
                o._47I || (o._47I = new gr), o._48I || (o._48I = new gr), o._47I.add(v), o._48I.add(v), o._19I()
            },
            _15I: function (I) {
                var v = this;
                v._46I.remove(I), v._48I.remove(I), v._46I.isEmpty() && delete v._46I, v._48I.isEmpty() && delete v._48I, v._19I()
            },
            _17I: function (U) {
                var y = this;
                y._47I.remove(U), y._48I.remove(U), y._47I.isEmpty() && delete y._47I, y._48I.isEmpty() && delete y._48I, y._19I()
            },
            _19I: function () {
                var G = this;
                delete G._49I;
                var y = G._48I;
                if (y && !y.isEmpty()) {
                    var g = {};
                    y.each(function (n) {
                        g[n._id] ? G._49I || (G._49I = new gr) : g[n._id] = n
                    }), G._49I ? y.each(function (j) {
                            g[j._id] && (G._49I.add(j), delete g[j._id])
                        }) : G._49I = y
                }
            },
            getImage: function () {
                return this._image
            },
            setImage: function (g) {
                var Y = this, b = Y._image, T = Y.getWidth(), D = Y.getHeight();
                Y._image = g, Y.fp("image", b, g), Y.fp(qo, T, Y.getWidth()), Y.fp(Gf, D, Y.getHeight())
            },
            getElevation: function () {
                return this._54O
            },
            setElevation: function (e) {
                var w = this;
                if (!w._50O) {
                    w._50O = 1;
                    var X = w._54O;
                    w._54O = e, w.fp(Jr, X, e), delete this._50O
                }
            },
            getRotation: function () {
                return this._64O
            },
            setRotation: function (R) {
                var M = this;
                if (!M._49O) {
                    M._49O = 1;
                    var e = M._64O;
                    M._64O = R, M.fp(gj, e, R), delete M._49O
                }
            },
            getRotationX: function () {
                return this._rotationX
            },
            setRotationX: function (f) {
                var g = this;
                if (!g._51O) {
                    g._51O = 1;
                    var E = g._rotationX;
                    g._rotationX = f, g.fp("rotationX", E, f), delete g._51O
                }
            },
            getRotationZ: function () {
                return this._53O
            },
            setRotationZ: function (A) {
                var Q = this;
                if (!Q._52O) {
                    Q._52O = 1;
                    var m = Q._53O;
                    Q._53O = A, Q.fp("rotationZ", m, A), delete Q._52O
                }
            },
            getPosition: function () {
                return this._position
            },
            setPosition: function (h, b) {
                var w = this;
                if (!w._50I) {
                    w._50I = 1;
                    var a;
                    if (a = 2 === arguments.length ? {x: h, y: b} : h, a.x !== w._position.x || a.y !== w._position.y) {
                        var Y = w._position;
                        w._position = a, w.fp(ec, Y, a)
                    }
                    delete w._50I
                }
            },
            translate: function ($, w) {
                var Q = this._position;
                this.p(Q.x + $, Q.y + w)
            },
            getWidth: function () {
                var c = this;
                if (c._width >= 0)return c._width;
                var C = gk(c._image);
                return C ? ef(C, c) : 20
            },
            setWidth: function (M) {
                var U = this, v = U._width;
                U._width = M, U.fp(qo, v, M)
            },
            getHeight: function () {
                var I = this;
                if (I._height >= 0)return I._height;
                var C = gk(I._image);
                return C ? Xp(C, I) : 20
            },
            setHeight: function (e) {
                var W = this, k = W._height;
                W._height = e, W.fp(Gf, k, e)
            },
            setSize: function (i, G) {
                var x = this;
                2 === arguments.length ? (x.setWidth(i), x.setHeight(G)) : (x.setWidth(i.width), x.setHeight(i.height))
            },
            getSize: function () {
                return {width: this.getWidth(), height: this.getHeight()}
            },
            setRect: function (X, L, E, Z, e) {
                var R = this, u = R.getAnchor(), b = R.getScale();
                arguments.length <= 2 && (e = L, L = X.y, E = X.width, Z = X.height, X = X.x);
                var h = b.x < 0 ? 1 - u.x : u.x, W = b.y < 0 ? 1 - u.y : u.y;
                R.p(X + E * h, L + Z * W), e && (E /= Math.abs(b.x), Z /= Math.abs(b.y)), R.setWidth(E), R.setHeight(Z)
            },
            getMatrix: function () {
                var L = this, X = L._64O, J = L._position, N = L.getScale();
                return new Ok(X, J.x, J.y, N.x, N.y)
            },
            getRect: function () {
                var D = this, Q = D.getWidth(), C = D.getHeight(), h = D.getAnchor(), t = {
                    x: -Q * h.x,
                    y: -C * h.y,
                    width: Q,
                    height: C
                }, s = D.getMatrix();
                return t = Pb([s.tf(t.x, t.y), s.tf(t.x + t.width, t.y), s.tf(t.x + t.width, t.y + t.height), s.tf(t.x, t.y + t.height)])
            },
            getAnchor: function () {
                var J = this;
                if (J.hasOwnProperty("_anchor"))return J._anchor;
                var x = gk(J._image);
                return x && x.anchorX !== K ? {x: x.anchorX, y: x.anchorY} : J._anchor
            },
            setAnchor: function (L, E, B) {
                var m, O = this;
                "number" == typeof L ? m = {x: L, y: E} : (m = L.length ? {x: L[0], y: L[1]} : L, B = E);
                var U = O.getAnchor();
                if (U.x !== m.x || U.y !== m.y) {
                    if (O._anchor = m, B) {
                        var v = O.getPosition(), r = O.getSize();
                        O.setPosition(v.x - r.width * (U.x - m.x), v.y - r.height * (U.y - m.y))
                    }
                    O.fp("anchor", U, m)
                }
            },
            getScale: function () {
                return this._scale
            },
            setScale: function (o, U) {
                var t, R = this;
                t = 2 === arguments.length ? {x: o, y: U} : "number" == typeof o ? {x: o, y: o} : o;
                var N = R.getScale();
                (N.x !== t.x || N.y !== t.y) && (R._scale = t, R.fp("scale", N, t))
            },
            getCorners: function (r, Q) {
                r == U && (r = 0), Q == U && (Q = r);
                var q = this, u = q.getAnchor(), o = q.getWidth(), A = q.getHeight(), f = -o * u.x - r, p = -A * u.y - Q, V = o + 2 * r, D = A + 2 * Q, M = q.getMatrix();
                return [M.tf(f, p), M.tf(f, p + D), M.tf(f + V, p + D), M.tf(f + V, p)]
            },
            getEditControlPoints: function (R, Q, p) {
                Q == U && (Q = 0), p == U && (p = Q);
                var I = this, J = I.getAnchor(), m = I.getWidth(), f = I.getHeight(), W = -m * J.x - Q, z = -f * J.y - p, G = m + 2 * Q, D = f + 2 * p;
                if (R)return [{x: W, y: z}, {x: W, y: 0}, {x: W, y: z + D}, {x: 0, y: z + D}, {
                    x: W + G,
                    y: z + D
                }, {x: W + G, y: 0}, {x: W + G, y: z}, {x: 0, y: z}];
                var B = I.getMatrix();
                return [B.tf(W, z), B.tf(W, 0), B.tf(W, z + D), B.tf(0, z + D), B.tf(W + G, z + D), B.tf(W + G, 0), B.tf(W + G, z), B.tf(0, z)]
            },
            rotateAt: function (D, p, F) {
                var I = this, G = I._position, a = I._64O, Y = new Ok(a, G.x, G.y).tf(D, p), N = y(D * D + p * p), A = w(G.y - Y.y, G.x - Y.x) + F;
                I.setRotation(a + F), I.p(Y.x + N * M(A), Y.y + N * v(A))
            },
            onParentChanged: function () {
                uk.superClass.onParentChanged.apply(this, arguments), this._8I()
            },
            _8I: function () {
                this._70O && this._70O.each(function (h) {
                    h._7I()
                })
            },
            onPropertyChanged: function (V) {
                var Y = this;
                uk.superClass.onPropertyChanged.call(Y, V), Y._69O && Y._69O.each(function (l) {
                    l.handleHostPropertyChange(V)
                }), Y._49I && Y._49I.each(function (c) {
                    c.fp("agentChange", !0, !1)
                })
            },
            onHostChanged: function () {
                this.updateAttach()
            },
            handleHostPropertyChange: function (p) {
                this.updateAttach(p)
            },
            onStyleChanged: function (O) {
                uk.superClass.onStyleChanged.apply(this, arguments), Qe[O] && this.updateAttach()
            },
            updateAttach: function (q) {
                var i = this;
                i._51I || js || (i._51I = 1, i._71O(q), delete i._51I)
            },
            _71O: function (F) {
                var I, c, f, m, K, R, s = this, Y = s._host, E = F ? F.property : U, u = F ? F.oldValue : U, l = F ? F.newValue : U;
                if (Y instanceof db) {
                    if (E === Jr) s.setElevation(s._54O + l - u); else if (!F || Vo[E]) {
                        if (I = s.s("attach.row.index"), c = s.s("attach.column.index"), f = Y.getCellRect(I, c), !f)return;
                        m = s.s("attach.row.span"), K = s.s("attach.column.span"), (1 !== m || 1 !== K) && (f = of(f, Y.getCellRect(I + m - 1, c + K - 1))), ys(f, s, "attach.padding", 1), s.setRect(f)
                    }
                } else if (Y instanceof Jg && (R = s.s("attach.index")) >= 0 && (!F || Zn[E])) {
                    var t = s.s("attach.thickness");
                    t != U && s.setHeight(Y.getThickness() * t);
                    var W = s.s("attach.offset"), h = Y.getPoints(), y = h.size();
                    if (y > R) {
                        var o = h.get(R), G = y === R + 1 ? h.get(0) : h.get(R + 1), n = [G.x - o.x, G.y - o.y], T = Rk(n);
                        if (T) {
                            s.s("attach.offset.relative") && (W *= T), s.s("attach.offset.opposite") && (W = T - W);
                            var H = {x: o.x + n[0] / T * W, y: o.y + n[1] / T * W}, A = s.s("attach.gap");
                            A && (s.s("attach.gap.relative") && (A *= Y.getThickness()), H = Wb(U, H, G, A)), s.p(H), s.setRotation(w(n[1], n[0]))
                        }
                    }
                } else F && (E === ec ? s.translate(l.x - u.x, l.y - u.y) : E === Jr ? s.setElevation(s._54O + l - u) : nl[E] && s._11Q(Y, E, l - u))
            },
            _11Q: function (R, s, X) {
                var V = this, g = R.p3(), t = pj(V.p3(), g), x = os(), f = Tk[V.getRotationMode()], Q = f[0], C = f[1], A = f[2], h = ze[Q], I = ze[C], b = ze[A];
                s === gj && (s = "rotationY", X = -X), s === gj + Q ? (b(x, R[Dj + A]()), I(x, R[Dj + C]()), h(x, X), I(x, -R[Dj + C]()), b(x, -R[Dj + A]()), V[Kc + Q](V[Dj + Q]() + X)) : s === gj + C ? (b(x, R[Dj + A]()), I(x, X), b(x, -R[Dj + A]()), V[Kc + C](V[Dj + C]() + X)) : s === gj + A && (b(x, X), V[Kc + A](V[Dj + A]() + X)), oc(t, x), V.p3(g[0] + t[0], g[1] + t[1], g[2] + t[2])
            },
            isHostOn: function (w) {
                var d = this;
                if (d._host && w && w._69O)for (var A = {}, X = d._host; X && X !== d && !A[X._id];) {
                    if (X === w)return !0;
                    A[X._id] = X, X = X._host
                }
                return !1
            },
            isLoopedHostOn: function (L) {
                return this.isHostOn(L) && L.isHostOn(this)
            },
            getSerializableProperties: function () {
                var A = uk.superClass.getSerializableProperties.call(this);
                return Se(A, {
                    image: 1,
                    host: 1,
                    rotation: 1,
                    rotationX: 1,
                    rotationZ: 1,
                    rotationMode: 1,
                    position: 1,
                    anchor: 1,
                    scale: 1,
                    _width: 1,
                    _height: 1,
                    tall: 1,
                    elevation: 1
                }), A
            }
        });
        var Ad = f.Edge = function (p, t) {
            var B = this;
            Eg(Ad, B), B.setSource(p), B.setTarget(t)
        };
        zd("Edge", bf, {
            _icon: "edge_icon", getUIClass: function () {
                return cl
            }, _22Q: function () {
                return sm
            }, getSource: function () {
                return this._source
            }, getTarget: function () {
                return this._target
            }, getSourceAgent: function () {
                return this._40I
            }, getTargetAgent: function () {
                return this._41I
            }, setSource: function (g) {
                var W = this;
                if (W._source !== g) {
                    var Q = W._source;
                    W._source = g, Q && Q._16I(W), g && g._2I(W), W._7I(), W.fp("source", Q, g)
                }
            }, setTarget: function (F) {
                var v = this;
                if (v._target !== F) {
                    var K = v._target;
                    v._target = F, K && K._18I(v), F && F._4I(v), v._7I(), v.fp("target", K, F)
                }
            }, isLooped: function () {
                var M = this;
                return M._source === M._target && !!M._source && !!M._target
            }, _7I: function () {
                var X, F = this, y = Rd(F);
                F._40I !== y && (X = this._40I, X && X._15I(F), F._40I = y, y && y._1I(F), F.fp("sourceAgent", X, y), Sh(X, F._41I), Sh(y, F._41I));
                var T = Qd(F);
                F._41I !== T && (X = F._41I, X && X._17I(F), F._41I = T, T && T._3I(F), F.fp("targetAgent", X, T), Sh(X, F._40I), Sh(T, F._40I))
            }, _22I: function (q) {
                this._52I = q, this.fp("edgeGroup", !0, !1)
            }, getEdgeGroup: function () {
                return this._52I
            }, isEdgeGroupHidden: function () {
                var K = this;
                return K._52I && K._52I.get(0) !== K && !K.getStyle(Lb)
            }, getEdgeGroupSize: function () {
                return this._52I ? this._52I.size() : 1
            }, getEdgeGroupIndex: function () {
                return this._52I ? this._52I.indexOf(this) : 0
            }, isEdgeGroupAgent: function () {
                var l = this, T = l._52I;
                return T && !l.getStyle(Lb) && T.size() > 1 && l === T.get(0)
            }, toggle: function () {
                var p = this._52I, N = !this.s(Lb);
                p && p.size() > 1 && (p.each(function (e) {
                    e.s(Lb, N)
                }), p.getSiblings().each(function (Z) {
                    Z !== p && Z.each(function (B) {
                        B.fp("edgeGroup", U, Z)
                    })
                }))
            }, setStyle: function (B, k) {
                (B === He || "edge.segments" === B) && (k = oo(k)), Ad.superClass.setStyle.call(this, B, k)
            }, onStyleChanged: function (i) {
                Ad.superClass.onStyleChanged.apply(this, arguments), Do[i] && Sh(this._41I, this._40I)
            }, getSerializableProperties: function () {
                var C = Ad.superClass.getSerializableProperties.call(this);
                return Se(C, {source: 1, target: 1}), C
            }
        });
        var hb = f.Group = function () {
            Eg(hb, this)
        };
        zd("Group", uk, {
            _image: "group_image", _icon: "group_icon", _57O: !1, getUIClass: function () {
                return vs
            }, onChildAdded: function () {
                hb.superClass.onChildAdded.apply(this, arguments), this._81I()
            }, onChildRemoved: function () {
                hb.superClass.onChildRemoved.apply(this, arguments), this._81I()
            }, _81I: function () {
                var N = this;
                if (!N._54I && !js) {
                    var S = N.getChildrenRect();
                    S && (N._53I = 1, N.p(lm(N.s("group.position"), S, N.getSize())), delete N._53I)
                }
            }, getChildrenRect: function () {
                var m, v = this;
                return v.eachChild(function (H) {
                    m = of(m, v.getChildRect(H))
                }), m
            }, getChildRect: function (h) {
                var F;
                return xj(h) && h.s(Ip) && (de(h) && h.isExpanded() && h.eachChild(function ($) {
                    F = of(F, h.getChildRect($))
                }), !F && h.getRect && (F = h.getRect())), F
            }, setPosition: function (L, W) {
                var z = this;
                if (!z._54I) {
                    var Y;
                    Y = 2 === arguments.length ? {
                            x: L,
                            y: W
                        } : L, js || z._53I || (z._54I = 1, qn(z._children, Y.x - z._position.x, Y.y - z._position.y), delete z._54I), hb.superClass.setPosition.call(this, Y)
                }
            }, toggle: function () {
                this.setExpanded(!this.isExpanded())
            }, isExpanded: function () {
                return this._57O
            }, setExpanded: function (F) {
                var s = this;
                if (s._57O !== F) {
                    var q = s._57O;
                    s._57O = F, s.fp("expanded", q, s._57O), s._8I()
                }
            }, _8I: function () {
                hb.superClass._8I.call(this), this.eachChild(function (L) {
                    xj(L) && L._8I()
                })
            }, onStyleChanged: function (i) {
                hb.superClass.onStyleChanged.apply(this, arguments), "group.position" === i && this._81I()
            }, getSerializableProperties: function () {
                var M = hb.superClass.getSerializableProperties.call(this);
                return M.expanded = 1, M
            }
        });
        var db = f.Grid = function () {
            Eg(db, this)
        };
        zd("Grid", uk, {
            IRotatable: !1, _icon: "grid_icon", _image: U, getUIClass: function () {
                return Gd
            }, setRotation: function () {
            }, getCellRect: function (k, $) {
                var m = this, O = m.s("grid.row.count"), o = m.s("grid.column.count");
                if (0 >= O || 0 >= o || 0 > k || k >= O || 0 > $ || $ >= o)return U;
                var x, v, q, G = m.getRect(), r = m.s("grid.row.percents"), Z = m.s("grid.column.percents");
                if (ys(G, m, "grid.border", -1), r && r._as && (r = r._as), Z && Z._as && (Z = Z._as), r && r.length === O) {
                    for (q = 0, x = 0; k > x; x++)q += G.height * r[x];
                    G.y += q, G.height = G.height * r[k]
                } else G.height = G.height / O, G.y += G.height * k;
                if (Z && Z.length === o) {
                    for (v = 0, x = 0; $ > x; x++)v += G.width * Z[x];
                    G.x += v, G.width = G.width * Z[$]
                } else G.width = G.width / o, G.x += G.width * $;
                return df(G, -m.s("grid.gap")), G
            }
        });
        var Fi = f.Text = function () {
            Eg(Fi, this), this.setSize(100, 50), this.s("text", "TEXT")
        };
        zd("Text", uk, {
            _icon: "text_icon", _image: "__text__", getUIClass: function () {
                return eb
            }, setWidth: function (c) {
                c || (c = .001), Fi.superClass.setWidth.call(this, c)
            }, setHeight: function (w) {
                w || (w = .001), Fi.superClass.setHeight.call(this, w)
            }, toLabel: function () {
                return this._displayName || this._name || this.s("text")
            }
        }), Hm("__text__", {
            width: {
                value: 100, isSafeFunc: !0, func: function (c) {
                    return c._width
                }
            },
            height: {
                value: 50, isSafeFunc: !0, func: function (T) {
                    return T._height
                }
            },
            comps: [{
                type: "text",
                relative: !0,
                rect: [0, 0, 1, 1],
                text: {func: "style@text"},
                align: {func: "style@text.align"},
                vAlign: {func: "style@text.vAlign"},
                color: {func: "style@text.color"},
                font: {func: "style@text.font"},
                shadow: {func: "style@text.shadow"},
                shadowColor: {func: "style@text.shadow.color"},
                shadowBlur: {func: "style@text.shadow.blur"},
                shadowOffsetX: {func: "style@text.shadow.offset.x"},
                shadowOffsetY: {func: "style@text.shadow.offset.y"}
            }]
        });
        var Jg = f.Shape = function () {
            Eg(Jg, this), this._59O = new gr
        };
        Jg.__de__ = xf, zd("Shape", uk, {
            ms_ac: ["thickness", "closePath"],
            _icon: "shape_icon",
            _thickness: 10,
            _closePath: !1,
            getUIClass: function () {
                return Gr
            },
            _22Q: function () {
                return ij
            },
            getLength: function (E) {
                return nd(lj(this._59O, this._58O, E, this._closePath))
            },
            getSegments: function () {
                return this._58O
            },
            toSegments: function () {
                var Y = this._58O;
                return Y ? new gr(Y._as.slice(0)) : Y
            },
            setSegments: function (f) {
                var W = this._58O;
                f = f ? $p(f) ? new gr(f.slice(0)) : new gr(f._as.slice(0)) : new gr, (W && f && W._as.join(",") !== f._as.join(",") || W !== f) && (this._58O = f, this.fp("segments", W, f))
            },
            getPoints: function () {
                return this._59O
            },
            toPoints: function () {
                var J = this._59O;
                return new gr(J._as.slice(0))
            },
            setPoints: function (M) {
                var B = this._59O;
                M = M ? $p(M) ? new gr(M.slice(0)) : new gr(M._as.slice(0)) : new gr, (B && M && B._as.join(",") !== M._as.join(",") || B !== M) && (this._59O = M, this.fs(), this.fp("points", B, M))
            },
            addPoint: function (Y, v) {
                var Z = this.toPoints();
                Z.add(Y, v), this.setPoints(Z)
            },
            setPoint: function (v, j) {
                var p = this.toPoints();
                p.set(v, j), this.setPoints(p)
            },
            removePointAt: function (g) {
                var v = this.toPoints();
                v.removeAt(g), this.setPoints(v)
            },
            setWidth: function (s) {
                var p = this;
                if (1 > s && (s = 1), !p._55I && !js && p.getWidth()) {
                    p._55I = 1;
                    var r = p._position.x, U = s / p.getWidth(), G = p.toPoints(), N = new gr;
                    G.each(function (I) {
                        N.add({x: (I.x - r) * U + r, y: I.y, e: I.e})
                    }), p.setPoints(N);
                    var J = p.s("shape.gradient.pack");
                    J && Zf(J, [U, 0, 0, 1, r * (1 - U), 0]), p.fs(), delete p._55I
                }
                Jg.superClass.setWidth.call(p, s)
            },
            setHeight: function (M) {
                var S = this;
                if (1 > M && (M = 1), !S._55I && !js && S.getHeight()) {
                    S._55I = 1;
                    var P = S._position.y, m = M / S.getHeight(), _ = S.toPoints(), F = new gr;
                    _.each(function (I) {
                        F.add({x: I.x, y: (I.y - P) * m + P, e: I.e})
                    }), S.setPoints(F);
                    var T = S.s("shape.gradient.pack");
                    T && Zf(T, [1, 0, 0, m, 0, P * (1 - m)]), S.fs(), delete S._55I
                }
                Jg.superClass.setHeight.call(S, M)
            },
            setAnchor: function (w, z, W) {
                var m = this;
                if (m._55I = !0, !W) {
                    var U, _ = m.getAnchor(), g = m.getSize();
                    U = "number" == typeof w ? {x: w, y: z} : w.length ? {
                                x: w[0],
                                y: w[1]
                            } : w, m.shiftPoints(g.width * (_.x - U.x), g.height * (_.y - U.y))
                }
                Jg.superClass.setAnchor.apply(m, arguments), delete m._55I
            },
            shiftPoints: function (M, V) {
                var G = this, U = G.toPoints(), s = new gr;
                U.each(function (u) {
                    s.add({x: u.x + M, y: u.y + V, e: u.e})
                }), G.setPoints(s), G.fs()
            },
            setPosition: function (i, p) {
                var o, W = this;
                if (!W._28Q) {
                    if (W._28Q = 1, !W._55I && !js) {
                        o = 2 === arguments.length ? {x: i, y: p} : i;
                        var m = o.x - W._position.x, N = o.y - W._position.y;
                        if (0 === m && 0 === N)return delete W._28Q, void 0;
                        W._55I = 1, W.shiftPoints(m, N);
                        var u = W.s("shape.gradient.pack");
                        u && Zf(u, [1, 0, 0, 1, m, N]), delete W._55I
                    }
                    Jg.superClass.setPosition.apply(W, arguments), delete W._28Q
                }
            },
            fs: function () {
                this.fireShapeChange()
            },
            fireShapeChange: function () {
                var S = this;
                if (!S._55I && !js) {
                    var f = Pb(S._59O);
                    f && (S._55I = 1, S.setRect(f), delete S._55I)
                }
                S.fp(Cq, !1, !0)
            },
            getSerializableProperties: function () {
                var F = Jg.superClass.getSerializableProperties.call(this);
                return F.segments = 1, F.points = 1, F.thickness = 1, F.closePath = 1, F
            }
        });
        var oe = f.Polyline = function () {
            Eg(oe, this), this.s({"shape.background": null, "shape.border.width": 2})
        };
        zd("Polyline", Jg, {
            IRotatable: !1, _icon: "polyline_icon", _22Q: function () {
                return pd
            }, getUIClass: function () {
                return pm
            }, setRotationX: function () {
            }, setRotation: function () {
            }, setRotationZ: function () {
            }, setClosePath: function () {
            }, setTall: function (H) {
                var z = this;
                if (!z._24Q && !js && z.getTall()) {
                    z._24Q = 1;
                    var X = z._54O, b = H / z.getTall();
                    z._59O.each(function (d) {
                        d.e = d.e == U ? X : (d.e - X) * b + X
                    }), z.fs(), delete z._24Q
                }
                oe.superClass.setTall.call(z, H)
            }, setElevation: function (h) {
                var z = this;
                if (!z._24Q && !js) {
                    z._24Q = 1;
                    var p = h - z._54O;
                    z._59O.each(function (i) {
                        i.e == U ? i.e = h : i.e += p
                    }), z.fs(), delete z._24Q
                }
                oe.superClass.setElevation.apply(z, arguments)
            }, fireShapeChange: function () {
                var r = this, W = r._59O;
                if (!r._24Q && !js) {
                    var l = W.size();
                    if (l) {
                        var $ = 1, S = W.get(0), n = r._54O;
                        S.e == U && (S.e = n);
                        for (var y = S.e, v = 0; l > $; $++) {
                            S = W.get($), S.e == U && (S.e = n);
                            var w = O(y, S.e), L = o(y + v, S.e);
                            y = w, v = L - w
                        }
                        r._24Q = 1, r.setTall(v), r.setElevation(y + v / 2), delete r._24Q
                    }
                }
                oe.superClass.fireShapeChange.apply(r, arguments)
            }
        });
        var qb = f.SubGraph = function () {
            Eg(qb, this)
        };
        zd("SubGraph", uk, {
            ISubGraph: 1, _image: "subGraph_image", _icon: "subGraph_icon", _8I: function () {
                qb.superClass._8I.call(this), this.eachChild(function (L) {
                    xj(L) && L._8I()
                })
            }
        }), f.EdgeGroup = function (G, T) {
            this._70O = G, this._siblings = T;
            for (var w, Y, c = 0, m = G.size(), R = u[Lb]; m > c; c++)if (w = G.get(c).getStyle(Lb, !1), w != U) {
                R = w;
                break
            }
            R == U && (R = !0);
            var E = H.edgeGroupAgentFunc;
            for (E && (Y = E(G), Y && Y !== G.get(0) && (G.remove(Y), G.add(Y, 0))), c = 0; m > c; c++)G.get(c).s(Lb, R)
        }, zd("EdgeGroup", m, {
            getEdges: function () {
                return this._70O
            }, size: function () {
                return this._70O.size()
            }, get: function (v) {
                return this._70O.get(v)
            }, indexOf: function (m) {
                return this._70O.indexOf(m)
            }, each: function (C, $) {
                this._70O.each(C, $)
            }, getSiblings: function () {
                return this._siblings
            }, eachSiblingEdge: function (a, i) {
                this._siblings.each(function (m) {
                    m._70O.each(a, i)
                })
            }
        });
        var tj = f.JSONSerializer = function (R, F) {
            this.dm = this._dataModel = R, this._hierarchical = !!F
        };
        zd("JSONSerializer", m, {
            ms_ac: ["hierarchical"], serialize: function (L) {
                return H.stringify(this.toJSON(), L)
            }, toJSON: function () {
                var T = this, A = T.dm, c = A.getRoots(), n = T.json = {
                    v: H.getVersion(),
                    p: {},
                    a: {},
                    d: []
                }, q = A.getSerializableAttrs();
                A.getInit() && (n.init = A.getInit()), A.getName() && (n.p.name = A.getName()), A.getBackground() && (n.p.background = A.getBackground()), n.p.autoAdjustIndex = A.isAutoAdjustIndex();
                for (var l in q) {
                    var x = A.a(l);
                    x !== K && T[Ye](l, x, n.a)
                }
                return Nk(n.a) && delete n.a, T._hierarchical ? c.each(T.serializeData, this) : A.each(function (F) {
                        T.serializeData(F)
                    }), n
            }, isSerializable: function () {
                return !0
            }, getProperties: function (e) {
                return e.getSerializableProperties()
            }, getStyles: function (x) {
                return x.getSerializableStyles()
            }, getAttrs: function (G) {
                return G.getSerializableAttrs()
            }, serializeData: function (O) {
                var Y = this;
                if (Y.isSerializable(O)) {
                    var s, Q, m, k, _ = O.getClass(), U = new _, I = {
                        c: O.getClassName(),
                        i: O.getId(),
                        p: {},
                        s: {},
                        a: {}
                    };
                    Y.json.d.push(I), s = Y.getProperties(O);
                    for (Q in s)/^_/.test(Q) ? (m = O[Q], m !== U[Q] && Y[Ye](Q.substr(1), m, I.p)) : (k = Tf(Q), O[k] && (m = O[k](), m !== U[k]() && Y[Ye](Q, m, I.p)));
                    s = Y.getStyles(O);
                    for (Q in s)m = O.s(Q), m !== U.s(Q) && Y[Ye](Q, m, I.s);
                    s = Y.getAttrs(O);
                    for (Q in s)m = O.a(Q), m !== U.a(Q) && Y[Ye](Q, m, I.a);
                    Nk(I.p) && delete I.p, Nk(I.s) && delete I.s, Nk(I.a) && delete I.a
                }
                Y._hierarchical && O.getChildren().each(Y.serializeData, Y)
            }, serializeValue: function (I, e, z) {
                tq(e) ? e = {__a: e._as} : e instanceof bf && (e = {__i: e.getId()}), z[I] = e
            }, deserialize: function (Y, Q, o) {
                js = !0;
                var S = this;
                Y = S.json = rd(Y) ? H.parse(Y) : Y, S._82I = {};
                var b = S.dm, T = new gr, g = new gr, e = 0, v = Y.d.length;
                for ($c(Y.init) && Y.init(b), b.setInit(Y.init); v > e; e++) {
                    var a = Y.d[e], l = cs(a.c), q = new l, A = a.i;
                    o && A != U && (q._id = A), S._82I[A] = q, T.add(q), g.add(a)
                }
                for (e = 0; v > e; e++)S.deserializeData(T.get(e), g.get(e));
                T.each(function ($) {
                    Q && !$.getParent() && $.setParent(Q), b.add($)
                });
                for (var K in Y.a)b.a(K, S[qh](Y.a[K]));
                for (var s in Y.p)b[Om(s)](Y.p[s]);
                return js = !1, T
            }, deserializeData: function (e, L) {
                for (var g in L.p)e[Om(g)](this[qh](L.p[g]));
                for (g in L.s)e.s(g, this[qh](L.s[g]));
                for (g in L.a)e.a(g, this[qh](L.a[g]))
            }, deserializeValue: function (Y) {
                if (bk(Y)) {
                    var C = Y.__i;
                    if (C != U)return this._82I[C];
                    if (C = Y.__a, $p(C))return new gr(C)
                }
                return Y
            }
        }), Se($q, {
            serialize: function (L, r) {
                return new tj(this, r).serialize(L)
            }, toJSON: function (q) {
                return new tj(this, q).toJSON()
            }, deserialize: function (t, u, E) {
                return new tj(this).deserialize(t, u, E)
            }
        }), $m.GraphView = function (F) {
            var s = this;
            s._24I = {}, s._34I = new gr, s._25I = {}, s._56I = {}, s._view = Uo(1, s), s._canvas = Dm(s._view), s.dm(F ? F : new $q), s.setEditable(!1), s.setScrollBarVisible(H.graphViewScrollBarVisible)
        }, _d("GraphView", m, {
            ms_v: 1,
            ms_gv: 1,
            ms_bnb: 1,
            ms_tip: 1,
            ms_dm: 1,
            ms_lp: 1,
            ms_fire: 1,
            ms_sm: 1,
            _49o: 1,
            ms_txy: 1,
            _52o: 1,
            _51o: 1,
            ms_ac: ["layers", Gc, dg, Tg, kh, "resettable", "editInteractor", Ej, "pannable", "rectSelectable", "autoScrollZone", qc, "movableFunc", "editableFunc", "pointEditableFunc", "rectEditableFunc", "rotationEditableFunc", "rectSelectBackground", "rectSelectBorderColor", "editPointSize", "editPointBorderColor", "editPointBackground", "hoverDelay"],
            _resettable: H.graphViewResettable,
            _pannable: H.graphViewPannable,
            _rectSelectable: H.graphViewRectSelectable,
            _autoScrollZone: H.graphViewAutoScrollZone,
            _rectSelectBackground: H.graphViewRectSelectBackground,
            _rectSelectBorderColor: H.graphViewRectSelectBorderColor,
            _editPointSize: H.graphViewEditPointSize,
            _editPointBorderColor: H.graphViewEditPointBorderColor,
            _editPointBackground: H.graphViewEditPointBackground,
            _scrollBarColor: lo,
            _scrollBarSize: Fn,
            _autoHideScrollBar: Gi,
            _autoMakeVisible: hq,
            setEditable: function (P) {
                var K = this, O = $m.XEditInteractor;
                P ? K.setInteractors([new zh(K), new Vf(K), O ? new O(K) : new ff(K), new Bk(K), new Kf(K), new ms(K, {editable: !O})]) : K.setInteractors([new zh(K), new Vf(K), new Bk(K), new Kf(K), new ms(K, {editable: !1})])
            },
            getCanvas: function () {
                return this._canvas
            },
            _33I: function (T) {
                var x = T.getUIClass();
                return x ? new x(this, T) : U
            },
            getDataUI: function (H) {
                var c = this, R = c._25I[H._id];
                return R === K && (R = c._33I(H), c._25I[H._id] = R), R
            },
            getEdgeInfo: function (Z) {
                var R = this.getDataUI(Z);
                return R ? (R._79o(), R._78o) : null
            },
            invalidateAll: function (S) {
                var Y = this;
                if (S) {
                    for (var U in Y._25I) {
                        var I = Y._25I[U];
                        I && I.dispose()
                    }
                    Y._25I = {}, Y._56I = {}, Y._24I = {}, Y._34I.clear(), Y.redraw()
                } else Y.dm().each(function (B) {
                    Y.invalidateData(B)
                })
            },
            invalidateSelection: function () {
                var $ = this;
                $.sm().each(function (Y) {
                    $.invalidateData(Y)
                })
            },
            invalidateData: function (t) {
                var D = this;
                D._24I[t._id] = t, D._21Q(t), D.iv()
            },
            _21Q: function (F) {
                var r = this, O = r._24I;
                if (Ln(F) && vr[F.s(se)]) {
                    var j = F.getSourceAgent();
                    j && j.getAgentEdges().each(function (t) {
                        O[t._id] = t
                    }), j = F.getTargetAgent(), j && j.getAgentEdges().each(function (C) {
                        O[C._id] = C
                    }), r.iv()
                }
            },
            redraw: function (g) {
                var B = this;
                B._32I || (g ? B._34I.add(g) : (B._32I = 1, B._34I.clear()), B.iv())
            },
            each: function (X, N) {
                var k, l, U, V = 0, I = this._layers, v = this._dataModel._datas._as, d = v.length;
                if (I)for (var Y = I.length; Y > V; V++) {
                    U = I[V];
                    for (var G = 0; d > G; G++)if (k = v[G], k._layer === U && (l = N ? X.call(N, k) : X(k), l === !1))return
                } else for (; d > V; V++)if (k = v[V], l = N ? X.call(N, k) : X(k), l === !1)return
            },
            reverseEach: function (I, n) {
                var O, U, R, G, M = this._layers, a = this._dataModel._datas._as, D = a.length;
                if (M)for (O = M.length - 1; O >= 0; O--) {
                    G = M[O];
                    for (var p = D - 1; p >= 0; p--)if (U = a[p], U._layer === G && (R = n ? I.call(n, U) : I(U), R === !1))return
                } else for (O = D - 1; O >= 0; O--)if (U = a[O], R = n ? I.call(n, U) : I(U), R === !1)return
            },
            getViewRect: function () {
                return this._29I
            },
            getContentRect: function () {
                var $ = this, A = $._84I;
                return A || ($.each(function (t) {
                    $.isVisible(t) && (A = of(A, $.getDataUIBounds(t)))
                }), $._84I = A ? A : yq), $._84I
            },
            getScrollRect: function () {
                return of(this.getContentRect(), this._29I)
            },
            fitData: function (V, p, z, o, B) {
                var i = this;
                if (!i.getWidth() || !i.getHeight())return B || fi(i.fitData, i, [V, p, z, o, !0], 200), void 0;
                i.makeVisible(V), i.validate();
                var v = i.getDataUIBounds(V);
                v && (v = Nh(v), df(v, z == U ? 20 : z), i.fitRect(v, p, o))
            },
            fitContent: function (b, k, f, E) {
                var l = this;
                if (!l.getWidth() || !l.getHeight())return E || fi(l.fitContent, l, [b, k, f, !0], 200), void 0;
                l.validate();
                var F = Nh(l.getContentRect());
                df(F, k == U ? 20 : k), l.fitRect(F, b, f)
            },
            fitRect: function (H, Q, x) {
                var u = this, J = u.getWidth(), W = u.getHeight(), y = H.x + H.width / 2, U = H.y + H.height / 2, l = O(J / H.width, W / H.height), L = u._zoom, t = -y * L + J / 2, Y = -U * L + W / 2;
                0 === l || isNaN(l) || (x && (l = O(1, l)), Q ? u.setTranslate(t, Y, {
                        finishFunc: function () {
                            u.setZoom(l, Q)
                        }
                    }) : (u.setTranslate(t, Y), u.setZoom(l)))
            },
            toCanvas: function (R, B) {
                B = B || this._zoom, this.validateImpl();
                var f = this, v = f.getContentRect();
                v.width || (v.width = 10), v.height || (v.height = 10);
                var t = Dm(), j = v.x * B, x = v.y * B, q = v.width * B, J = v.height * B;
                Xq(t, q, J, 1);
                var W = Cl(t);
                return R = R || this._dataModel.getBackground(), R && ns(W, 0, 0, q, J, R), es(W, -j, -x), W.scale(B, B), f._42(W), W.restore(), t
            },
            toDataURL: function (T, r, W) {
                return this.toCanvas(T, W).toDataURL(r || "image/png", 1)
            },
            getClipBounds: function () {
                return this._74O
            },
            _42: function (s, r) {
                var j, S, q = this;
                q._93db(s, r), q.each(function (F) {
                    q._56I[F._id] && (j = q.getDataUI(F), j && (S = j._79o(), f.HtmlNode && F instanceof f.HtmlNode ? j._42(s) : (!r || _j(r, S)) && j._42(s)))
                }), q._92db(s, r)
            },
            validateImpl: function () {
                var L, V, x, c, b, v = this, D = v.tx(), E = v.ty(), f = v._zoom, l = v._canvas, Y = this.getWidth(), n = this.getHeight(), S = v._29I, e = {
                    x: -D / f,
                    y: -E / f,
                    width: Y / f,
                    height: n / f
                }, h = {}, A = v._34I, k = v._24I, Q = v._32I, g = v._23I;
                (Y !== l.clientWidth || n !== l.clientHeight) && (Xq(l, Y, n), Q = 1), Q || sl(e, S) || (Q = 1), v._29I = e, v.each(function (X) {
                    V = X._id;
                    var S = h[V] = v.isVisible(X);
                    S !== v._56I[V] && (k[V] = X, x = v.getDataUI(k[V]), x && x._84o(S), v._84o(X, S))
                }, v);
                for (V in k)x = v.getDataUI(k[V]), x && (!Q && v._56I[V] && (b = x._79o(), b && A.add(b)), x.invalidate()), v._83I = 1;
                if (v._56I = h, !Q)for (V in k)h[V] && (x = v.getDataUI(k[V]), x && (b = x._79o(), b && A.add(b)));
                if (Q ? c = e : (A.each(function (M) {
                            _j(e, M) && (c = of(c, M))
                        }), c && (df(c, o(1, 1 / f)), c.x = d(c.x * f) / f, c.y = d(c.y * f) / f, c.width = z(c.width * f) / f, c.height = z(c.height * f) / f, c = wg(e, c))), v._74O = c, c && (L = Cl(l), Yj(L, D, E, f), L.beginPath(), L.rect(c.x, c.y, c.width, c.height), L.clip(), L.clearRect(c.x, c.y, c.width, c.height), v._42(L, c), L.restore(), delete v._74O), v._24I = {}, A.clear(), delete v._32I, g && Y > 0 && n > 0) {
                    var x = v.getDataUI(g);
                    if (x) {
                        var b = x._79o(), t = v._29I, y = t.x, j = t.y, U = t.width, _ = t.height, f = v._zoom;
                        b && !_j(b, t) && (b.x + b.width < y && v.tx(-b.x * f), b.x > y + U && v.tx(-(b.x + b.width - U) * f), b.y + b.height < j && v.ty(-b.y * f), b.y > j + _ && v.ty(-(b.y + b.height - _) * f))
                    }
                    delete v._23I
                }
                v._83I && (delete v._83I, delete v._84I), v._98O()
            },
            isScrollBarVisible: function () {
                return !!this._79O
            },
            setScrollBarVisible: function (W) {
                var Y = this;
                W !== Y.isScrollBarVisible() && (W ? (Cs(Y._view, Y._79O = xo()), Cs(Y._79O, Y._27I = xo()), Cs(Y._79O, Y._28I = xo())) : (jm(Y._79O), delete Y._79O, delete Y._27I, delete Y._28I), Y.fp("scrollBarVisible", !W, W))
            },
            showScrollBar: function () {
                var G = this;
                G._79O && (G._85I || (n(function () {
                    G._86I()
                }, Fc), G.iv()), G._85I = new Date)
            },
            _86I: function () {
                var j = this;
                if (j._85I) {
                    var W = new Date, k = W.getTime();
                    k - j._85I.getTime() >= Fc ? (delete j._85I, j.iv()) : n(function () {
                            j._86I()
                        }, Fc)
                }
            },
            _98O: function () {
                var J = this, f = this._27I, q = this._28I;
                if (J._79O) {
                    if (J._autoHideScrollBar && !J._85I)return f.style.visibility = wk, q.style.visibility = wk, void 0;
                    var l = J.getScrollBarColor(), P = J._zoom, W = J.getScrollBarSize(), K = J.getViewRect(), V = J.getScrollRect(), h = K.height * P, s = V.height * P, Q = K.width * P - W - 2, G = h * ((K.y - V.y) * P / s), _ = h * (h / s), H = f.style;
                    s - .5 > h ? (Zk > _ && (G = G + _ / 2 - Zk / 2, 0 > G && (G = 0), G + Zk > h && (G = h - Zk), _ = Zk), kg(f, Q, G, W, _), H.visibility = In, H.background = l, H.borderRadius = W / 2 + Be) : H.visibility = wk;
                    var b = K.width * P, u = V.width * P, G = K.height * P - W - 2, Q = b * ((K.x - V.x) * P / u), I = b * (b / u), H = q.style;
                    u - .5 > b ? (Zk > I && (Q = Q + I / 2 - Zk / 2, 0 > Q && (Q = 0), Q + Zk > b && (Q = b - Zk), I = Zk), kg(q, Q, G, I, W), H.visibility = In, H.background = l, H.borderRadius = W / 2 + Be) : H.visibility = wk
                }
            },
            setDataModel: function (H) {
                var f = this, b = f._dataModel, Q = f._selectionModel;
                b !== H && (b && (b.ump(f.handleDataModelPropertyChange, f), b.umm(f.handleDataModelChange, f), b.umd(f.handleDataPropertyChange, f), b.removeIndexChangeListener(f._75O, f), Q || b.sm().ums(f.handleSelectionChange, f)), f._dataModel = H, H.mp(f.handleDataModelPropertyChange, f), H.mm(f.handleDataModelChange, f), H.md(f.handleDataPropertyChange, f), H.addIndexChangeListener(f._75O, f), Q ? Q._21I(H) : H.sm().ms(f.handleSelectionChange, f), f.invalidateAll(!0), f.fp(pg, b, H), f._canvas.style.background = H.getBackground() || "")
            },
            handleDataModelPropertyChange: function (t) {
                if ("background" === t.property) {
                    var j = this._canvas.style.background, O = t.newValue || "";
                    this._canvas.style.background = O, this.fp("canvasBackground", j, O)
                }
            },
            handleDataPropertyChange: function (Y) {
                this.invalidateData(Y.data)
            },
            onPropertyChanged: function (x) {
                var F = this, V = x.property;
                if (F.redraw(), "zoom" === V) {
                    var P = F.sm().getSelection();
                    P.size() && P.each(function (S) {
                        S.invalidate()
                    })
                }
                Jo[V] ? F.showScrollBar() : V === Ej && F.onCurrentSubGraphChanged(x)
            },
            onCurrentSubGraphChanged: function () {
                this.reset()
            },
            handleDataModelChange: function (G) {
                var p = this, R = G.kind, e = G.data;
                if (p._83I = 1, "add" === R) p.invalidateData(e), Ln(e) && e.getEdgeGroup() && e.getEdgeGroup().eachSiblingEdge(p.invalidateData, p); else if (R === Mg) {
                    p._21Q(e);
                    var J = e._id, q = p._25I[J];
                    if (q) {
                        if (p._56I[J]) {
                            var X = q._79o();
                            X && p.redraw(X)
                        }
                        q.dispose(), delete p._25I[J], delete p._24I[J], delete p._56I[J]
                    }
                    e === p._currentSubGraph && p.setCurrentSubGraph(U)
                } else R === uc && (p.invalidateAll(!0), p.setCurrentSubGraph(U))
            },
            _75O: function (X) {
                this.invalidateData(X.data)
            },
            _76O: function (p) {
                var E = this;
                if (E.isVisible(p)) {
                    for (var Q = p; Q._parent && E.isVisible(Q._parent);)Q = Q._parent;
                    Q && Q !== p && E._dataModel._76O(Q), E._dataModel._76O(p)
                }
            },
            _2o: function (f) {
                return f.s("select.width")
            },
            isSelectable: function (W) {
                return W.s("2d.selectable") && this.sm().isSelectable(W)
            },
            isMovable: function (E) {
                var J = this;
                return Ln(E) && E.getStyle(se) !== sn ? !1 : E.s("2d.movable") ? J._movableFunc ? J._movableFunc(E) : !0 : !1
            },
            isEditable: function (b) {
                var d = this;
                if (!d._editInteractor || !d.isSelected(b))return !1;
                if (de(b)) {
                    var o = d.getDataUI(b);
                    if (!o || o._88I)return !1
                }
                return Ln(b) && b.getStyle(se) !== sn ? !1 : b.s("2d.editable") ? d._editableFunc ? d._editableFunc(b) : !0 : !1
            },
            handleDelete: function () {
                this._editInteractor && this.removeSelection()
            },
            isPointEditable: function (n) {
                return xj(n) && 0 !== n.getRotation() ? !1 : this._pointEditableFunc ? this._pointEditableFunc(n) : !0
            },
            isRectEditable: function (u) {
                return this._rectEditableFunc ? this._rectEditableFunc(u) : !0
            },
            isRotationEditable: function (i) {
                return i.setRotation && i.IRotatable !== !1 ? this._rotationEditableFunc ? this._rotationEditableFunc(i) : !0 : !1
            },
            getRotationPoint: function (l) {
                var e = l.getAnchor(), R = l.getScale(), K = this._zoom, v = lf(l.getRotation(), 0, -l.getHeight() * R.y * e.y - (R.y < 0 ? -1 : 1) * (P ? 32 : 16) / K), Z = l.p();
                return v.x += Z.x, v.y += Z.y, v
            },
            getLogicalPoint: function ($) {
                var r = this;
                return Bl($, r._canvas, r.tx(), r.ty(), r._zoom, r._zoom)
            },
            getSelectedDataAt: function (U) {
                var M = this;
                return this.getDataAt(U, function (E) {
                    return M.isSelected(E)
                })
            },
            getDataAt: function (K, x, V) {
                K.target && (K = this.lp(K));
                var z, v = this._zoom;
                return this.reverseEach(function (O) {
                    if (x ? x(O) : this.isSelectable(O)) {
                        if (this.rectIntersects(O, rn(K.x, K.y, V, v)))return z = O, !1
                    } else;
                }, this), z
            },
            getIconInfoAt: function (H, f) {
                var b = this;
                if (H.target && (H = b.lp(H)), f || (f = b.getDataAt(H)), f) {
                    var $ = b.getDataUI(f);
                    if ($ && $._38o) {
                        var l, L = $._38o, B = new gr;
                        for (l in L.icons)B.add(l);
                        for (var z = B.size() - 1; z >= 0; z--) {
                            l = B.get(z);
                            for (var w = L.rects[l], k = w.rotation, F = w.length - 1; F >= 0; F--) {
                                var G = w[F], i = G.width, C = G.height, m = {
                                    x: H.x - G.x - i / 2,
                                    y: H.y - G.y - C / 2
                                };
                                k != U && (m = lf(-k, m.x, m.y));
                                var G = {x: -i / 2, y: -C / 2, width: i, height: C};
                                if (ug(G, m))return {
                                    key: l,
                                    index: F,
                                    name: L.icons[l].names[F],
                                    rect: w[F],
                                    point: H,
                                    rotation: k,
                                    relativeRect: G,
                                    relativePoint: m,
                                    data: f
                                }
                            }
                        }
                    }
                }
                return U
            },
            getDatasInRect: function (x, L, B) {
                B === K && (B = 1);
                var t = this, M = new gr;
                return t.reverseEach(function (Q) {
                    B && !t.isSelectable(Q) || (L ? t.rectIntersects(Q, x) : t.rectContains(Q, x)) && M.add(Q)
                }), M
            },
            moveSelection: function (p, I) {
                var D, W = this, $ = W.dm();
                $ && (D = $.getHistoryManager()), D && D.beginInteraction(), qn(W.sm().toSelection(W.isMovable, W), p, I), D && D.endInteraction()
            },
            getDataUIBounds: function (B) {
                var Z = this.getDataUI(B);
                return Z ? Z._79o() : U
            },
            drawData: function (r, k) {
                var G = this.getDataUI(k);
                G && G._42(r)
            },
            getBoundsForGroup: function (M) {
                return M.s(Ip) ? this.getDataUIBounds(M) : U
            },
            rectIntersects: function (T, l) {
                this.validate();
                var f = U;
                if (this._56I[T._id]) {
                    var s = this._25I[T._id];
                    if (s) {
                        var R = s._79o();
                        if (Zc(l, R)) f = !0; else if ((l = wg(l, R)) && (s.rectIntersects && (f = s.rectIntersects(l)), f == U)) {
                            if (!T.s("pixelPerfect"))return !0;
                            var E = l.x, I = l.y, _ = l.width, G = l.height, W = this._zoom, y = H.hitMaxArea, g = _ * G * W * W;
                            if (g > y) {
                                var F = Math.sqrt(y / g);
                                W *= F
                            }
                            _ *= W, G *= W, E *= W, I *= W;
                            var L = bg(_, G);
                            es(L, -E, -I), L.scale(W, W), s._42(L);
                            try {
                                for (var o = 0, t = L.getImageData(0, 0, _, G).data; o < t.length; o += 4)if (0 !== t[o + 3]) {
                                    f = !0;
                                    break
                                }
                                L.restore()
                            } catch (O) {
                                nn = U, f = !0
                            }
                        }
                    }
                }
                return f ? !0 : !1
            },
            rectContains: function (o, X) {
                if (this._56I[o._id]) {
                    var H = this._25I[o._id];
                    if (H)return Zc(X, H._79o())
                }
                return !1
            },
            reset: function () {
                this.setZoom(1), this.setTranslate(0, 0)
            },
            handleKeyDown: function (J) {
                var _ = this, U = _._focusData, E = U && _._25I[U._id], h = 0, H = _._dataModel._datas;
                U && U._enabled && U._editable && E && E.onKeyDown && E.onKeyDown(J) === !0 || (9 === J.keyCode && (U && (h = H.indexOf(U), cc(J) ? -1 === --h && (h = 0) : ++h === H.size() && (h = 0)), _._focusData = U = H.get(h), _.sm().setSelection(U)), ii(J) ? _.selectAll() : Af(J) && _.isResettable() && _.reset(), _.sm().isEmpty() || (Ji(J) && _.handleDelete(J), vi(J) && (_.moveSelection(-1, 0), _.fi({kind: "moveLeft"})), Ce(J) && (_.moveSelection(0, -1), _.fi({kind: "moveUp"})), Ik(J) && (_.moveSelection(1, 0), _.fi({kind: "moveRight"})), Hh(J) && (_.moveSelection(0, 1), _.fi({kind: "moveDown"}))))
            },
            handleScroll: function (P, R) {
                if (Fr(P), !this._68I) {
                    var A = this.lp(P);
                    R > 0 ? this.scrollZoomIn(A) : 0 > R && this.scrollZoomOut(A)
                }
            },
            handlePinch: function (H, c, R) {
                this._68I || (c > R ? this.pinchZoomIn(H) : this.pinchZoomOut(H))
            },
            checkDoubleClickOnNote: function (c, v) {
                var f = this, w = f.lp(c), Z = f.getDataUI(v), y = Z.note2Info;
                return y && v.s("note2.toggleable") && ug(y.clickRect, w) ? (v.s(ng, !v.s(ng)), f.fi({
                        kind: "toggleNote2",
                        event: c,
                        data: v
                    }), !0) : (y = Z.noteInfo, y && v.s("note.toggleable") && ug(y.clickRect, w) ? (v.s(Uh, !v.s(Uh)), f.fi({
                            kind: "toggleNote",
                            event: c,
                            data: v
                        }), !0) : !1)
            },
            _84o: function () {
            },
            isNoteVisible: function () {
                return this._zoom > .15
            },
            isLabelVisible: function () {
                return this._zoom > .15
            },
            isSelectVisible: function () {
                return this._zoom > .15
            },
            isEditVisible: function () {
                return this._zoom > .15
            },
            autoScroll: function (X, Y) {
                var O = this, w = O.getAutoScrollZone(), h = w / O.getZoom(), N = w / 4, F = O._29I, D = O.lp(X), Q = {
                    x: O.tx(),
                    y: O.ty()
                };
                return D && w > 0 && F && (D.x - F.x < h ? O.translate(N, 0) : F.x + F.width - D.x < h && O.translate(-N, 0), D.y - F.y < h ? O.translate(0, N) : F.y + F.height - D.y < h && O.translate(0, -N)), Q.x = O.tx() - Q.x, Q.y = O.ty() - Q.y, Y && (Y.x += Q.x, Y.y += Q.y), Q
            },
            getMoveMode: function (S, k) {
                var R = k.s("2d.move.mode");
                return R ? R : Rp["88"] ? "x" : Rp["89"] ? "y" : "xy"
            },
            moveTo: function (s, i, $) {
                var _ = this.dm().getDatas();
                null == $ && ($ = _.indexOf(s)), $ === i || 0 > $ || i >= 0 && i <= _.size() && (_.remove(s), i > _.size() && i--, _.add(s, i), this.dm()._76I(s, $, i))
            },
            bringForward: function (C) {
                this.moveTo(C, this.dm().getDatas().indexOf(C) + 1)
            },
            bringToFront: function (M) {
                this.moveTo(M, this.dm().size())
            },
            sendBackward: function (c) {
                this.moveTo(c, this.dm().getDatas().indexOf(c) - 1)
            },
            sendToBack: function (k) {
                this.moveTo(k, 0)
            },
            bringSelectionForward: function () {
                for (var i = new gr, j = this.dm().getDatas(), e = !1, J = 0; J < j.size(); J++) {
                    var R = j.get(j.size() - 1 - J);
                    this.isSelected(R) ? e && i.add(R) : e = !0
                }
                i.each(this.bringForward, this)
            },
            bringSelectionToFront: function () {
                for (var W = new gr, g = this.dm().getDatas(), a = 0; a < g.size(); a++) {
                    var P = g.get(a);
                    this.isSelected(P) && W.add(P)
                }
                W.each(this.bringToFront, this)
            },
            sendSelectionBackward: function () {
                for (var n = new gr, E = this.dm().getDatas(), Z = !1, c = 0; c < E.size(); c++) {
                    var z = E.get(c);
                    this.isSelected(z) ? Z && n.add(z) : Z = !0
                }
                n.each(this.sendBackward, this)
            },
            sendSelectionToBack: function () {
                for (var Y = new gr, p = this.dm().getDatas(), O = 0; O < p.size(); O++) {
                    var s = p.get(p.size() - 1 - O);
                    this.isSelected(s) && Y.add(s)
                }
                Y.each(this.sendToBack, this)
            }
        });
        var bh = function (A, U) {
            var Z = this;
            Z.gv = A, Z.s = function (u) {
                return U.getStyle(u)
            }, Z._data = U, Z._87I = new gr
        };
        Oh(bh, m, {
            _6I: U, ms_icons: 1, _84o: function () {
            }, dispose: function () {
            }, isShadowed: function () {
                return this.gv.isSelected(this._data) && "shadow" === this.s("select.type")
            }, _2o: function () {
                var W = this, Q = W.gv.isSelected(W._data);
                return !Q || W.isShadowed() ? 0 : W.gv._2o(W._data)
            }, getBodyColor: function (l) {
                var h = this._data, w = this.gv.getBodyColor(h);
                return w ? w : l ? h.getStyle(l) : U
            }, _2Q: function (d) {
                return this.s(d)
            }, _1Q: function (e, a, C, g) {
                var h = this.s, N = h(a + ".dash.color");
                e.strokeStyle = N, e.lineWidth = C, e.stroke(), h(a + ".dash.3d") && Nm(e, N, h(a + ".dash.3d.color"), C, this.gv._zoom, h(a + ".dash.3d.accuracy")), zj(e, g)
            }, invalidate: function () {
                this._6I = U
            }, _79o: function () {
                var E = this;
                if (!E._6I) {
                    E.labelInfo = E.label2Info = E.noteInfo = E.note2Info = E._38o = U, E._87I.clear(), E._3O();
                    var Y = E._data, F = E.gv;
                    E._55O = F.isEditable(Y) ? {
                            _42O: F.isRectEditable(Y),
                            _43O: F.isPointEditable(Y),
                            _56O: F.isRotationEditable(Y)
                        } : U, E._6I = E._81o()
                }
                return E._6I
            }, _3O: function () {
            }, getPosition: function () {
                return yq
            }, _68o: function (K, y) {
                K && this._87I.add(kp(K, y))
            }, _81o: function () {
                var P = this, a = P.s;
                P._24O(rm, "getLabel"), P._24O(dl, "getLabel2"), P._26O(Kn, "getNote"), P._26O(er, "getNote2"), P._15O(), P._55O && P._48O();
                var N;
                if (P._87I.each(function (m) {
                        N = of(N, m)
                    }), N && P.isShadowed()) {
                    var b = Nh(N);
                    b.x += a("shadow.offset.x"), b.y += a("shadow.offset.y"), df(b, a("shadow.blur")), N = of(N, b)
                }
                return P._87I.clear(), N
            }, _42: function (D) {
                var f = this, l = f._data, L = f.gv, y = f.s, Q = y("opacity"), w = this.isShadowed();
                if (w) {
                    var Y = D.shadowOffsetX, r = D.shadowOffsetY, B = D.shadowBlur, o = D.shadowColor;
                    D.shadowOffsetX = y("shadow.offset.x"), D.shadowOffsetY = y("shadow.offset.y"), D.shadowBlur = y("shadow.blur"), D.shadowColor = y("select.color")
                }
                if (Q != U) {
                    var e = D.globalAlpha;
                    D.globalAlpha = Q
                }
                f._80o(D), L.isLabelVisible(l) && (jg(D, f.labelInfo), jg(D, f.label2Info)), L.isNoteVisible(l) && (pl(D, f.noteInfo), pl(D, f.note2Info)), f._99O(D), Q != U && (D.globalAlpha = e), w && (D.shadowOffsetX = Y, D.shadowOffsetY = r, D.shadowBlur = B, D.shadowColor = o), f._55O && L.isEditVisible(l) && f._47O(D)
            }, _80o: function () {
            }, _47O: function () {
            }, _24O: function (Y, L) {
                var p = this, $ = p._data, l = p.gv, X = p.s, t = l[L]($);
                if (t != U) {
                    var n = X(Y + ".scale"), j = X(Y + ".max"), S = X(Y + ".position"), m = p[Y + "Info"] = {
                        label: t,
                        scale: n,
                        color: l[L + "Color"]($),
                        font: X(Y + ".font"),
                        opacity: X(Y + ".opacity"),
                        align: X(Y + ".align"),
                        rotation: p.getRotation(X(Y + ".rotation"), !1, S),
                        background: l[L + "Background"]($)
                    }, E = Hn(m, t);
                    j > 0 && j < E.width && (m.labelWidth = E.width, E.width = j), 1 !== n && (E.width *= n, E.height *= n);
                    var y = p.getPosition(S, X(Y + ".offset.x"), X(Y + ".offset.y"), E, X(Y + ".position.fixed"));
                    if (E.x = y.x - E.width / 2, E.y = y.y - E.height / 2, p._68o(m.rect = E, m.rotation), 1 !== n) {
                        var v = E.width / n, P = E.height / n;
                        m.rect = {x: y.x - v / 2, y: y.y - P / 2, width: v, height: P}
                    }
                }
            }, _26O: function (i, g) {
                var G = this, d = G.gv, D = G._data, E = G.s, r = d[g](D);
                if (r != U) {
                    var f, w, y = E(i + ".scale"), S = G[i + "Info"] = {
                        note: r,
                        scale: y,
                        data: D,
                        view: d,
                        expanded: E(i + ".expanded"),
                        font: E(i + ".font"),
                        color: E(i + ".color"),
                        opacity: E(i + ".opacity"),
                        align: E(i + ".align"),
                        icon: E(i + ".icon"),
                        backgroundImage: E(i + ".backgroundImage"),
                        borderWidth: E(i + ".border.width"),
                        borderColor: E(i + ".border.color"),
                        background: d[g + "Background"](D)
                    }, x = G.getPosition(E(i + ".position"), E(i + ".offset.x"), E(i + ".offset.y")), A = x.x, n = x.y;
                    if (S.expanded) {
                        var s, Y = E(i + ".max"), H = E(i + ".backgroundImage");
                        H ? (H = gk(H), s = {
                                width: ef(H, D),
                                height: Xp(H, D)
                            }) : s = Hn(S, r), s.width += 6, s.height += 2, Y > 0 && Y < s.width && (S.labelWidth = s.width, s.width = Y), f = s.width, w = s.height + 8, S.clickRect = {
                            x: A - f * y / 2,
                            y: n - w * y,
                            width: f * y,
                            height: w * y * s.height / w
                        }
                    } else {
                        var c = E(i + ".icon");
                        c ? (c = gk(c), f = ef(c, D), w = Xp(c, D)) : (f = 12, w = 18), S.clickRect = {
                            x: A - f * y / 2,
                            y: n - w * y,
                            width: f * y,
                            height: w * y
                        }
                    }
                    S.rect = {x: A - f / 2, y: n - w * y / 2 - w / 2, width: f, height: w};
                    var j = z(S.borderWidth / 2) * y;
                    G._68o({x: A - f * y / 2 - j, y: n - w * y - j, width: f * y + 2 * j, height: w * y + 2 * j})
                }
            }, _48O: function () {
            }, _99O: function (o) {
                var Z = this, Y = Z._38o;
                if (Y) {
                    var q = Z.gv, $ = Z._data, c = Y.icons;
                    for (var w in c) {
                        var W = c[w], G = Y.rects[w];
                        if (G) {
                            var e = ln(W.opacity, $, q), k = ln(W.names, $, q), A = k ? k.length : 0, h = G.rotation;
                            if (e != U) {
                                var d = o.globalAlpha;
                                o.globalAlpha *= e
                            }
                            for (var F = 0; A > F; F++) {
                                var N = k[F], f = gk(N), t = G[F];
                                if (h) {
                                    var I = t.x + t.width / 2, b = t.y + t.height / 2;
                                    o.save(), es(o, I, b), $g(o, h), es(o, -I, -b)
                                }
                                Zq(o, f, ln(W.stretch, $, q), t.x, t.y, t.width, t.height, Z._data, Z.gv), h && o.restore()
                            }
                            e != U && (o.globalAlpha = d)
                        }
                    }
                }
            }
        });
        var cb = function (Q, P) {
            Eg(cb, this, [Q, P])
        };
        Oh(cb, bh, {
            _checkEmptyRect: !0, _40O: function (u, t) {
                var B = this, $ = B.s, P = u.rect;
                if ((u.borderColor = B.gv.getBorderColor(B._data)) && (u.borderType = $("border.type"), u.borderWidth = $("border.width"), u.borderPadding = $("border.padding"), t = o(t, u.borderPadding + u.borderWidth / 2)), u.selectWidth = B._2o()) {
                    var F = B.gv._zoom;
                    u.selectType = $("select.type"), u._97o = $("select.color"), u.selectPadding = $("select.padding"), t = o(t, (u.selectPadding + u.selectWidth / 2) / F)
                }
                t > 0 && (P = Nh(P), df(P, t)), B._68o(P)
            }, _39O: function (o, f) {
                var L, k = this, p = f.rect;
                if (f.borderWidth > 0 && (L = f.borderPadding, o.strokeStyle = f.borderColor, o.lineWidth = f.borderWidth, Uj(o, f.borderType, {
                        x: p.x - L,
                        y: p.y - L,
                        width: p.width + 2 * L,
                        height: p.height + 2 * L
                    }), o.stroke()), f.selectWidth > 0) {
                    var h = k.gv._zoom;
                    if (L = f.selectPadding / h, o.strokeStyle = f._97o, o.lineWidth = f.selectWidth / h, f.rotation != U) {
                        o.save(), o.translate(f.position.x, f.position.y), o.rotate(f.rotation);
                        var Y = k._data, c = Y.getWidth(), I = Y.getHeight(), $ = f.scale, A = f.anchor;
                        p = {x: $.x * -c * A.x, y: $.y * -I * A.y, width: $.x * c, height: $.y * I}
                    }
                    Uj(o, f.selectType, {
                        x: p.x - L,
                        y: p.y - L,
                        width: p.width + 2 * L,
                        height: p.height + 2 * L
                    }), f.rotation != U && o.restore(), o.stroke()
                }
            }, _3O: function () {
                var l = this, V = l.s, W = l._data, q = W.getStyle(Cq), G = l.getBodyColor(), g = l._83o = q ? {
                        shape: q,
                        _53o: l.getBodyColor("shape.background"),
                        _27Q: gk(V("shape.repeat.image"), G),
                        shapeGradientPack: V("shape.gradient.pack"),
                        _54o: V("shape.border.width"),
                        _55o: V("shape.border.color"),
                        _56o: V("shape.border.3d"),
                        _57o: V("shape.border.3d.color"),
                        _58o: V("shape.border.3d.accuracy"),
                        shapeGradient: V("shape.gradient"),
                        _59o: V("shape.gradient.color"),
                        _60o: V("shape.border.pattern"),
                        _61o: V("shape.border.cap"),
                        _62o: V("shape.border.join")
                    } : {img: gk(W.getImage(), G), bodyColor: G, stretch: V("image.stretch")};
                if (x && !r); else {
                    g.rect = W.getRect(), g.position = W.p(), g.scale = W.getScale(), g.anchor = W.getAnchor(), g.rotation = W.getRotation(), q === Xm && (g._63o = V("shape.depth"));
                    var Q = 0;
                    q && (Q = Pr(U, g._54o / 2, g._62o), l.s("shape.dash") && (Q = o(Q, (l.s("shape.dash.width") || g._54o) / 2))), l._40O(g, Q)
                }
            }, getPosition: function (P, r, O, z) {
                var H = lm(P, this._83o.rect, z);
                return H.x += r, H.y += O, H
            }, _80o: function (M) {
                var n = this, f = n.s, N = n.gv, j = n._data, b = n._83o, $ = b.rect, K = b.position, u = b.rotation, g = b.anchor, Y = b.scale, O = b.shape;
                if (!n._checkEmptyRect || $.width > 0 && $.height > 0) {
                    var k = j.getSize();
                    if (k.x = -k.width * g.x, k.y = -k.height * g.y, M.save(), es(M, K.x, K.y), $g(M, u), ag(M, Y.x, Y.y), n.freeDraw) n.freeDraw(M, k, b); else if (O) {
                        var S, s, T, q, G = b._60o, R = th(M, G), Z = b._53o, h = b._27Q, V = b._54o, p = b._55o, t = b.shapeGradientPack, l = M.lineJoin, v = M.lineCap;
                        if ("roundRect" === O ? S = f("shape.corner.radius") : "polygon" === O ? S = f("shape.polygon.side") : "arc" === O && (S = f("shape.arc.from"), s = f("shape.arc.to"), T = f("shape.arc.close"), q = f("shape.arc.oval")), M.lineJoin = b._62o, M.lineCap = b._61o, Z || h || t ? (Uj(M, O, k, S, s, T, q), t ? xh(M, t) : h ? ni(M, h) : Or(M, Z, b.shapeGradient, b._59o, k), M.fill(), t && M.restore(), M !== R && Uj(R, O, k, S, s, T, q)) : Uj(R, O, k, S, s, T, q), V > 0) {
                            var d = f("shape.border.width.absolute");
                            d && (M.save(), M.setTransform(1, 0, 0, 1, 0, 0)), M.lineWidth = V, M.strokeStyle = p, M.stroke(), d && M.restore(), b._56o && Nm(M, p, b._57o, V, N._zoom, b._58o)
                        }
                        if (zj(M, G), f("shape.dash")) {
                            var r = f("shape.dash.width") || V;
                            if (r > 0) {
                                G = f("shape.dash.pattern");
                                var R = th(M, G, n._2Q("shape.dash.offset"));
                                R !== M && Uj(R, O, k, S, s, T, q), n._1Q(M, "shape", r, G)
                            }
                        }
                        si(M, Z, b._63o, k), M.lineJoin = l, M.lineCap = v
                    } else Zq(M, b.img, b.stretch, k.x, k.y, k.width, k.height, j, N, b.bodyColor);
                    M.restore()
                }
                n._39O(M, b)
            }, _48O: function () {
                var Q, o = this, Z = o._data, B = o.gv, r = o._55O, G = B._zoom, U = (B.getEditPointSize() / 2 + 2) / G;
                if (r._42O && (Q = Z.getRect(), df(Q, U)), r._56O) {
                    var h = r._98o = B.getRotationPoint(Z);
                    Q = of(Q, {x: h.x - U, y: h.y - U, width: 2 * U, height: 2 * U})
                }
                o._68o(Q)
            }, _47O: function (x) {
                var r = this, e = r.gv, G = r._55O, V = r._data, j = e._zoom, z = e.getEditPointSize() / j, v = G._98o;
                if (G._42O) {
                    x.fillStyle = e.getEditPointBackground(), x.strokeStyle = e.getEditPointBorderColor(), x.lineWidth = 1 / j;
                    var s = V.getEditControlPoints();
                    s.forEach(function (b) {
                        ns(x, b.x - z / 2, b.y - z / 2, z, z), x.stroke()
                    })
                }
                G._56O && (x.fillStyle = e.getEditPointBorderColor(), x.strokeStyle = e.getEditPointBackground(), x.lineWidth = 1 / j, x.beginPath(), x.arc(v.x, v.y, z / 2, 0, $, !0), x.fill(), x.stroke())
            }
        });
        var cl = function (U, w) {
            Eg(cl, this, [U, w])
        }, ok = function (L, A, U, c) {
            var d = Rk(L, A);
            return U = c ? O(U, d) : an(U, d), d ? U /= d : U = 0, {x: L.x + (A.x - L.x) * U, y: L.y + (A.y - L.y) * U}
        };
        Oh(cl, bh, {
            _3O: function () {
                var J, r = this, I = r._data, v = r.gv, b = r.s, B = b(se), K = I.isLooped(), Y = b("edge.width"), $ = b("edge.center"), j = b("edge.offset"), a = v.getBorderColor(I), Q = a ? b("border.width") : 0, x = r._2o(), f = I._40I, L = I._41I, k = r._78o = f && L ? {
                        looped: K,
                        type: B,
                        width: Y,
                        center: $,
                        color: r.getBodyColor("edge.color"),
                        borderColor: a,
                        borderWidth: Q,
                        _97o: x ? b("select.color") : U,
                        selectWidth: x,
                        pattern: b("edge.pattern"),
                        cap: b("edge.cap"),
                        join: b("edge.join"),
                        is3d: b("edge.3d"),
                        _67o: b("edge.3d.color"),
                        _66o: b("edge.3d.accuracy")
                    } : U;
                if (k) {
                    var D = H.getEdgeType(B);
                    if (D) {
                        var N = D(I, Rb(r, v, I, K, B), v, r._19Q);
                        N.points && N.points.size() > 1 && (k._4O = N, J = Pb(k._4O.points))
                    } else {
                        var P = sf(v, f, b("edge.source.position"), b("edge.source.offset.x"), b("edge.source.offset.y"), b("edge.source.anchor.x"), b("edge.source.anchor.y")), E = sf(v, L, b("edge.target.position"), b("edge.target.offset.x"), b("edge.target.offset.y"), b("edge.target.anchor.x"), b("edge.target.anchor.y"));
                        if (B === sn) {
                            var l = k.points = b(He) || Ff, _ = l.size();
                            if (k.segments = b("edge.segments"), !$)if (j) {
                                var m = ok(P, _ ? l.get(0) : E, j, _), s = ok(E, _ ? l.get(_ - 1) : P, j, _);
                                P = m, E = s
                            } else {
                                var t = kn(v, f), F = kn(v, L), p = ud(P, _ ? l.get(0) : E, t);
                                p && (P = {x: p[0], y: p[1]}), p = ud(_ ? l.get(_ - 1) : P, E, F), p && (E = {
                                    x: p[0],
                                    y: p[1]
                                })
                            }
                            J = of(Pb(k.points), Pb(P, E))
                        } else {
                            var X = Rb(r, v, I, K, B);
                            if (r._19Q || (X = -X), K) P = Nh(P), P.x -= f.getWidth() / 2, k.radius = X, J = {
                                x: P.x - X,
                                y: P.y - X,
                                width: 2 * X,
                                height: 2 * X
                            }; else {
                                var y = Rk(P, E), R = an(j, y), m = {x: R, y: X}, s = {
                                    x: y - R,
                                    y: X
                                }, C = w(E.y - P.y, E.x - P.x), g = k.mat = new Ok(C);
                                if (k.orienAngle = C, k.angle = E.x < P.x ? C + h : C, k.rect = {
                                        x: m.x,
                                        y: m.y,
                                        width: s.x - m.x,
                                        height: 0
                                    }, k.origin = P, m = g.tf(m), m.x += P.x, m.y += P.y, s = g.tf(s), s.x += P.x, s.y += P.y, $) {
                                    var u = {x: y, y: 0};
                                    u = g.tf(u), u.x += P.x, u.y += P.y, J = Pb([P, m, s, u]), k.c1 = P, k.c2 = u
                                } else J = Pb(m, s);
                                P = m, E = s
                            }
                        }
                        k.sourcePoint = P, k.targetPoint = E
                    }
                    var i = 0;
                    b("edge.dash") && (i = b("edge.dash.width") || Y);
                    var n = "square" === k.cap ? .71 : .5;
                    Pr(J, o(i * n, Y * n + Q + x), k.join), r._68o(J)
                }
            }, getRotation: function (T, O, L) {
                T = T || 0;
                var N = this._78o;
                if (N) {
                    var o, R = N.angle, Q = N.points, m = N._4O;
                    if (R != U)return O ? N.orienAngle + T : R + T;
                    if (m) {
                        var M = m.points;
                        return o = M.size(), Bg[L] ? o && 0 === o % 2 ? wj(M.get(o / 2 - 1), M.get(o / 2), O, T) : T : Lf[L] ? wj(M.get(0), M.get(1), O, T) : wj(M.get(o - 2), M.get(o - 1), O, T)
                    }
                    if (Q)return o = Q.size(), Bg[L] ? o && 0 === o % 2 ? wj(Q.get(o / 2 - 1), Q.get(o / 2), O, T) : T : Lf[L] ? wj(N.sourcePoint, o ? Q.get(0) : N.targetPoint, O, T) : wj(o ? Q.get(o - 1) : N.sourcePoint, N.targetPoint, O, T)
                }
                return T
            }, getPosition: function (f, v, W, K, m) {
                var Q = this._78o;
                if (Q) {
                    var L, t = Q.type, J = Q.points, A = Q._4O, s = Q.sourcePoint, z = Q.targetPoint;
                    if (!t)return Q.looped ? {
                            x: s.x - Q.radius + v,
                            y: s.y + W
                        } : (m && s && z && (s.x > z.x || s.x === z.x && s.y > z.y) && (f = gg[f], W = -W), L = lm(f, Q.rect, K), L.x += v, L.y += W, L = Q.mat.tf(L), L.x += Q.origin.x, L.y += Q.origin.y, L);
                    if (J) {
                        var L, u = J.size();
                        if (Bg[f]) {
                            if (u) {
                                var l = u % 2;
                                if (0 === l)return Sk(J.get(u / 2 - 1), J.get(u / 2), f, v, W, K, m);
                                L = J.get((u - l) / 2)
                            } else L = {x: (s.x + z.x) / 2, y: (s.y + z.y) / 2};
                            return L = lm(f, {x: L.x, y: L.y, width: 0, height: 0}, K), L.x += v, L.y += W, L
                        }
                        return Lf[f] ? Sk(s, u ? J.get(0) : z, f, v, W, K, m) : Sk(u ? J.get(u - 1) : s, z, f, v, W, K, m)
                    }
                    if (A) {
                        var Z = A.points, u = Z.size();
                        if (Bg[f]) {
                            var l = u % 2;
                            return 0 === l ? Sk(Z.get(u / 2 - 1), Z.get(u / 2), f, v, W, K, m) : (L = Z.get((u - l) / 2), L = lm(f, {
                                    x: L.x,
                                    y: L.y,
                                    width: 0,
                                    height: 0
                                }, K), L.x += v, L.y += W, L)
                        }
                        return Lf[f] ? Sk(Z.get(0), Z.get(1), f, v, W, K, m) : Sk(Z.get(u - 2), Z.get(u - 1), f, v, W, K, m)
                    }
                }
                return yq
            }, _42: function (F) {
                this._78o && cl.superClass._42.call(this, F)
            }, drawPath: function (y, f) {
                y.beginPath();
                var M = f.type, i = f.points, j = f.segments, Q = f._4O;
                if (!M || i) {
                    var s = f.sourcePoint, b = s.x, S = s.y, p = f.targetPoint, m = p.x, Z = p.y;
                    if (M)if (j) {
                        var u = new gr({x: b, y: S});
                        u.addAll(i), u.add({x: m, y: Z}), ql(y, u, j)
                    } else y.moveTo(b, S), i.each(function (t) {
                        y.lineTo(t.x, t.y)
                    }), y.lineTo(m, Z); else f.looped ? y.arc(b, S, f.radius, 0, $, !0) : f.center ? (y.moveTo(f.c1.x, f.c1.y), y.lineTo(b, S), y.lineTo(m, Z), y.lineTo(f.c2.x, f.c2.y)) : (y.moveTo(b, S), y.lineTo(m, Z))
                } else Q && ql(y, Q.points, Q.segments)
            }, _80o: function (i) {
                var s = this, u = s.s, G = s._78o, D = G.width, E = G.selectWidth, X = G.borderWidth, l = G.color, j = i.lineJoin, Y = i.lineCap, B = G.pattern;
                i.lineJoin = G.join, i.lineCap = G.cap, s.drawPath(th(i, B), G);
                var q = u("edge.width.absolute");
                if (q && (i.save(), i.setTransform(1, 0, 0, 1, 0, 0)), E && (i.strokeStyle = G._97o, i.lineWidth = D + 2 * (X + E), i.stroke()), X && (i.strokeStyle = G.borderColor, i.lineWidth = D + 2 * X, i.stroke()), i.strokeStyle = l, i.lineWidth = D, i.stroke(), G.is3d && Nm(i, l, G._67o, D, s.gv._zoom, G._66o), q && i.restore(), zj(i, B), u("edge.dash")) {
                    B = u("edge.dash.pattern");
                    var T = th(i, B, s._2Q("edge.dash.offset"));
                    T !== i && s.drawPath(T, G), s._1Q(i, "edge", u("edge.dash.width") || D, B)
                }
                i.lineJoin = j, i.lineCap = Y
            }, _48O: function () {
                var a = this, A = a._78o;
                if (a._55O._43O && A && A.points) {
                    var R = Pb(A.points);
                    if (R) {
                        var z = a.gv._zoom;
                        df(R, (a.gv.getEditPointSize() / 2 + 2) / z), a._68o(R)
                    }
                }
            }, _47O: function (F) {
                var V = this, e = V.gv, k = V._78o, W = e._zoom;
                if (V._55O._43O && k && k.points) {
                    var t = e.getEditPointSize() / 2 / W;
                    F.fillStyle = e.getEditPointBackground(), F.strokeStyle = e.getEditPointBorderColor(), F.lineWidth = 1 / W, k.points.each(function (N) {
                        F.beginPath(), F.arc(N.x, N.y, t, 0, $, !0), F.fill(), F.stroke()
                    })
                }
            }, _71o: function (t, y) {
                var w = this, j = w._data;
                if (w._19Q = !0, !j.getEdgeGroup())return t ? j.s("edge.gap") : 0;
                var Z, q = 0, E = 0, _ = 0;
                if (j.getEdgeGroup().getSiblings().each(function (s) {
                        s.each(function (t) {
                            if (w.gv.isVisible(t) && t.s(se) == y) {
                                var V = t.s("edge.gap");
                                Z ? (E += _ / 2 + V / 2, _ = V) : (Z = t, _ = V), t === j && (q = E)
                            }
                        })
                    }), t)return E - q + _;
                var u = q - E / 2;
                return Z && j._40I !== Z._40I && (w._19Q = !1), u
            }
        });
        var vs = function (N, X) {
            Eg(vs, this, [N, X])
        };
        Oh(vs, cb, {
            _3O: function () {
                var W, _, I = this, A = I.s, F = I._data, f = I.gv;
                if (I._88I = U, F.isExpanded() && F.eachChild(function (S) {
                        var N = f.getBoundsForGroup(S);
                        N && (_ || (_ = []), _.push(N), W = of(W, N))
                    }), W) {
                    var Q = f.getLabel(F), h = A("group.type");
                    W = Tj(h, _, W), ys(W, F, "group.padding", 1);
                    var v = I._88I = {type: h, rect: W, _64o: W};
                    if (!h && Q != U) {
                        var i, R = I.labelInfo = {
                            label: Q,
                            color: A("group.title.color"),
                            font: A("group.title.font")
                        }, $ = Hn(R, Q), q = $.width, g = $.height, m = A("group.title.align");
                        q > W.width && (W.width = q), R.rect = {
                            y: W.y - g,
                            width: $.width,
                            height: g
                        }, i = m === rk ? W.x : m === ks ? W.x + W.width - q : W.x + W.width / 2 - q / 2, R.rect.x = i, v.titleRect = {
                            x: W.x,
                            y: W.y - g,
                            width: W.width,
                            height: g + 1
                        }, v.rect = {x: W.x, y: W.y - g, width: W.width, height: W.height + g}
                    }
                    I._40O(v, A("group.border.width") / 2)
                } else vs.superClass._3O.call(I)
            }, getPosition: function (C, K, w, G) {
                var M = this._88I;
                if (M) {
                    var h = lm(C, M.rect, G);
                    return h.x += K, h.y += w, h
                }
                return vs.superClass.getPosition.apply(this, arguments)
            }, _24O: function (z, j) {
                var J = this._88I;
                (!J || J.type || "label2" === z) && vs.superClass._24O.call(this, z, j)
            }, _80o: function (H) {
                var N = this, $ = N._88I;
                if ($) {
                    var k = N._data, Z = N.s, e = N.gv, n = $.type, M = $.rect, I = $._64o, B = $.titleRect, F = N.getBodyColor(), R = gk(Z("group.image"), F), o = Z("group.image.stretch"), L = N.getBodyColor("group.background"), t = gk(Z("group.repeat.image"), F), d = Z("group.gradient.pack"), s = Z("group.gradient"), r = Z("group.gradient.color"), Y = Z("group.depth");
                    if (n) {
                        var p = Z("group.border.pattern"), g = Z("group.border.width"), u = H.lineJoin, Q = H.lineCap;
                        if (H.lineJoin = Z("group.border.join"), H.lineCap = Z("group.border.cap"), R) {
                            if (H.save(), Uj(H, n, M), H.clip(), Zq(H, R, o, M.x, M.y, M.width, M.height, k, e, F), H.restore(), g > 0) {
                                var m = th(H, p);
                                Uj(m, n, M), H.lineWidth = g, H.strokeStyle = Z("group.border.color"), H.stroke(), zj(H, p)
                            }
                        } else {
                            var m = th(H, p);
                            L || t || d ? (Uj(H, n, M), d ? xh(H, d) : t ? ni(H, t) : Or(H, L, s, r, M), H.fill(), d && H.restore(), H !== m && Uj(m, n, M)) : Uj(m, n, M), g > 0 && (H.lineWidth = g, H.strokeStyle = Z("group.border.color"), H.stroke()), zj(H, p), n === Xm && si(H, L, Y, M)
                        }
                        H.lineJoin = u, H.lineCap = Q
                    } else if (R ? Zq(H, R, o, I.x, I.y, I.width, I.height, k, e, N.getBodyColor()) : (L || t) && (t ? ni(H, t) : Or(H, L, s, r, I), Uj(H, Xm, I), H.fill(), si(H, L, Y, I)), B) {
                        var D = Z("group.title.background");
                        ns(H, B.x, B.y, B.width, B.height, D), si(H, D, Y, B)
                    }
                    N._39O(H, $)
                } else vs.superClass._80o.call(N, H)
            }
        });
        var Gr = function (b, i) {
            Eg(Gr, this, [b, i])
        };
        Oh(Gr, cb, {
            _3O: function () {
                var V = this, r = V._data, P = V.s, m = V.gv, N = r.getPoints(), f = m.getBorderColor(r), u = f ? P("border.width") : 0, E = V._2o(), D = P("shape.border.width"), H = r.getRect(), R = m.getBodyColor(r), $ = V._99o = N.isEmpty() ? U : {
                        rect: H,
                        rotation: r.getRotation(),
                        fillRule: P("shape.fill.rule") || "nonzero",
                        scale: r.getScale(),
                        position: r.p(),
                        points: N,
                        segments: r.getSegments(),
                        bodyColor: R,
                        borderColor: f,
                        borderWidth: u,
                        _94o: P("shape.border.3d"),
                        _95o: P("shape.border.3d.color"),
                        _96o: P("shape.border.3d.accuracy"),
                        _97o: E ? P("select.color") : U,
                        selectWidth: E,
                        _53o: P("shape.background"),
                        _27Q: gk(P("shape.repeat.image"), R),
                        shapeGradientPack: P("shape.gradient.pack"),
                        _54o: D,
                        _55o: P("shape.border.color"),
                        shapeGradient: P("shape.gradient"),
                        _59o: P("shape.gradient.color"),
                        _60o: P("shape.border.pattern"),
                        _61o: P("shape.border.cap"),
                        _62o: P("shape.border.join")
                    };
                if ($) {
                    var C = D * ("square" === $._61o ? .71 : .5) + u + E;
                    C && (H = Nh(H), Pr(H, C, $._62o)), V._68o(H)
                }
            }, getPosition: function (m, s, J, j) {
                var l = this._99o;
                if (l) {
                    var O = lm(m, l.rect, j);
                    return O.x += s, O.y += J, O
                }
                return yq
            }, _42: function (S) {
                this._99o && Gr.superClass._42.call(this, S)
            }, _80o: function (G) {
                var z, i = this, N = i.s, P = i._99o, b = P.position, j = P.scale, d = P.rotation, O = P.bodyColor, n = P.borderWidth, f = P.selectWidth, p = P._53o, x = P._27Q, B = P.shapeGradientPack, J = P._54o, U = P.points, g = P.segments, V = i._data.isClosePath(), T = P.fillRule;
                G.save(), es(G, b.x, b.y), $g(G, d), ag(G, j.x, j.y), es(G, -b.x, -b.y);
                var h = P._60o, F = th(G, h), M = G.lineJoin, c = G.lineCap;
                G.lineJoin = P._62o, G.lineCap = P._61o, p || x || B ? (ql(G, U, g, V), B ? xh(G, B) : x ? ni(G, x) : (z = O ? O : p, Or(G, z, P.shapeGradient, P._59o, P.rect)), G.fill(T), B && G.restore(), F !== G && ql(F, U, g, V)) : ql(F, U, g, V);
                var R = N("shape.border.width.absolute");
                if (R && (G.save(), G.setTransform(1, 0, 0, 1, 0, 0)), f && (G.strokeStyle = P._97o, G.lineWidth = J + 2 * (n + f), G.stroke()), n && (G.strokeStyle = P.borderColor, G.lineWidth = J + 2 * n, G.stroke()), J && (z = P._55o, !p && O && (z = O), G.strokeStyle = z, G.lineWidth = J, G.stroke(), P._94o && Nm(G, z, P._95o, J, i.gv._zoom, P._96o)), R && G.restore(), zj(G, h), N("shape.dash")) {
                    var $ = N("shape.dash.width") || J;
                    if ($ > 0) {
                        h = N("shape.dash.pattern");
                        var F = th(G, h, i._2Q("shape.dash.offset"));
                        F !== G && ql(F, U, g, V), i._1Q(G, "shape", $, h)
                    }
                }
                G.lineJoin = M, G.lineCap = c, G.restore()
            }, _48O: function () {
                var $ = this;
                if (Gr.superClass._48O.call($), $._55O._43O) {
                    var Y = $._data.getRect(), d = $.gv._zoom;
                    df(Y, ($.gv.getEditPointSize() / 2 + 2) / d), $._68o(Y)
                }
            }, _47O: function (C) {
                var Z = this;
                if (Gr.superClass._47O.call(Z, C), Z._55O._43O) {
                    var t = Z.gv, h = t._zoom, B = t.getEditPointSize() / 2 / h;
                    C.fillStyle = t.getEditPointBackground(), C.strokeStyle = t.getEditPointBorderColor(), C.lineWidth = 1 / h, Z._data.getPoints().each(function (i) {
                        C.beginPath(), C.arc(i.x, i.y, B, 0, $, !0), C.fill(), C.stroke()
                    })
                }
            }
        });
        var pm = function (U, r) {
            Eg(pm, this, [U, r])
        };
        Oh(pm, Gr, {
            getRotation: function (K, s, Y) {
                K = K || 0;
                var L = this._data.getPoints(), l = L.size();
                return l > 1 ? Bg[Y] ? l && 0 === l % 2 ? wj(L.get(l / 2 - 1), L.get(l / 2), s, K) : K : Lf[Y] ? wj(L.get(0), L.get(1), s, K) : wj(L.get(l - 2), L.get(l - 1), s, K) : K
            }, getPosition: function (C, m, O, Z, r) {
                var s = this._data.getPoints(), E = s.size();
                if (E > 1) {
                    if (Bg[C]) {
                        var b = E % 2;
                        if (0 === b)return Sk(s.get(E / 2 - 1), s.get(E / 2), C, m, O, Z, r);
                        var i = s.get((E - b) / 2), Y = {x: i.x, y: i.y, width: 0, height: 0};
                        return i = lm(C, Y, Z), i.x += m, i.y += O, i
                    }
                    return Lf[C] ? Sk(s.get(0), s.get(1), C, m, O, Z, r) : Sk(s.get(E - 2), s.get(E - 1), C, m, O, Z, r)
                }
                return yq
            }
        });
        var Gd = function (O, K) {
            Eg(Gd, this, [O, K])
        };
        Oh(Gd, cb, {
            _3O: function () {
                var i = this;
                Gd.superClass._3O.call(i);
                var K = i.s, T = i._83o;
                i._82o = T.img || T.shape ? U : {
                        background: i.getBodyColor("grid.background"),
                        depth: K("grid.depth"),
                        rect: T.rect,
                        _88o: K("grid.cell.depth"),
                        cellBorderColor: K("grid.cell.border.color"),
                        _89o: K("grid.row.count"),
                        _90o: K("grid.column.count"),
                        block: K("grid.block"),
                        _91o: K("grid.block.color"),
                        _92o: K("grid.block.padding"),
                        _93o: K("grid.block.width")
                    }
            }, _80o: function (a) {
                var Y = this, h = Y._82o;
                if (!h)return Gd.superClass._80o.call(Y, a), void 0;
                var n, k, p = Y._data, _ = h.background, m = h.rect, G = h.block, P = h._91o, z = h._92o, o = h._93o, c = h._88o, B = h.cellBorderColor, Z = h._89o, A = h._90o;
                if (_)if (ns(a, m.x, m.y, m.width, m.height, _), si(a, _, h.depth, m), c)for (n = 0; Z > n; n++)for (k = 0; A > k; k++)m = p.getCellRect(n, k), m && si(a, _, c, m); else if (B) {
                    for (a.beginPath(), n = 0; Z > n; n++)for (k = 0; A > k; k++)m = p.getCellRect(n, k), m && a.rect(m.x, m.y, m.width, m.height);
                    a.strokeStyle = B, a.lineWidth = 1, a.stroke()
                }
                if ("h" === G)for (n = 0; Z > n; n++)m = of(p.getCellRect(n, 0), p.getCellRect(n, A - 1)), df(m, z), Nl(a, P, m.x, m.y, m.width, m.height, o); else if ("v" === G)for (k = 0; A > k; k++)m = of(p.getCellRect(0, k), p.getCellRect(Z - 1, k)), df(m, z), Nl(a, P, m.x, m.y, m.width, m.height, o);
                Y._39O(a, Y._83o)
            }
        });
        var eb = function (B, r) {
            Eg(eb, this, [B, r])
        };
        Oh(eb, cb, {
            _checkEmptyRect: !1, _81o: function () {
                var M = this._data, d = eb.superClass._81o.call(this), X = M.s("text");
                if (X != U) {
                    var K, B, L = M.s("text.font"), p = M.s("text.align"), b = M.s("text.vAlign"), F = M.getRotation(), W = Mo(L, X), j = W.width, o = W.height;
                    "left" === p ? K = -M.getWidth() / 2 : "center" === p ? K = -W.width / 2 : "right" === p && (K = M.getWidth() / 2 - W.width), "top" === b ? B = -M.getHeight() / 2 : "middle" === b ? B = -W.height / 2 : "bottom" === b && (B = M.getHeight() / 2 - W.height);
                    var J;
                    if (F) {
                        var V = new Ok(F);
                        J = Pb([V.tf(K, B), V.tf(K + j, B), V.tf(K + j, B + o), V.tf(K, B + o)])
                    } else J = {x: K, y: B, width: j, height: o};
                    J.x += M.getPosition().x, J.y += M.getPosition().y, d = of(d, J)
                }
                return d
            }
        });
        var vf = $m.Interactor = function (n) {
            this.gv = this._graphView = n
        };
        _d("Interactor", m, {
            ms_listener: 1, getView: function () {
                return this.gv.getView()
            }, setUp: function () {
                this.addListeners()
            }, tearDown: function () {
                this.removeListeners(), this.clear()
            }, clear: function () {
            }, fi: function (m) {
                this.gv.fi(m)
            }, setCursor: function (z) {
                P || (this.getView().style.cursor = z)
            }, startDragging: function (U) {
                var y = this;
                y._lastClientPoint = rc(U), y._lastLogicalPoint = y.gv.lp(U), gl(y, U)
            }, clearDragging: function () {
                var u = this;
                u._lastClientPoint = u._lastLogicalPoint = u._logicalPoint = U
            }, autoScroll: function (b) {
                return this.gv.autoScroll(b, this._lastClientPoint)
            }
        });
        var Kf = $m.DefaultInteractor = function (C) {
            Eg(Kf, this, [C])
        };
        _d("DefaultInteractor", vf, {
            handle_mousedown: function (L) {
                Fr(L);
                var G = this, v = G.gv, o = v.getDataAt(L);
                !v.setFocus(L) || v._editing || v._scrolling || (_g(L) ? v.handleDoubleClick(L, o) : v.handleClick(L, o), v.isPannable() && !o && kf(L) && !hn(L) && (G._tx = v.tx(), G._ty = v.ty(), G.startDragging(L)))
            }, handleWindowMouseUp: function (E) {
                var M = this, t = M.gv;
                t._panning && (delete t._panning, t.onPanEnded(), M.fi({
                    kind: "endPan",
                    event: E
                })), delete M._tx, delete M._ty, M.clearDragging()
            }, handle_mousemove: function (o) {
                var Z = this, w = Z.gv;
                Z._hoverTimer && (F(Z._hoverTimer), delete Z._hoverTimer), Z._hoverTimer = n(function () {
                    Z.fi({kind: "hover", event: o}), F(Z._hoverTimer), delete Z._hoverTimer
                }, w.getHoverDelay() || 800)
            }, handle_touchmove: function (O) {
                this.handle_mousemove(O)
            }, handleWindowMouseMove: function (J) {
                var H = this, p = H.gv, q = H._lastClientPoint;
                H.fi({
                    kind: p._panning ? "betweenPan" : "beginPan",
                    event: J
                }), p._panning = 1, p.setTranslate(H._tx + J.clientX - q.x, H._ty + J.clientY - q.y)
            }, handle_mousewheel: function (O) {
                this.gv.handleScroll(O, O.wheelDelta)
            }, handle_DOMMouseScroll: function (R) {
                2 === R.axis && this.gv.handleScroll(R, -R.detail)
            }, handle_keydown: function (m) {
                this.gv.handleKeyDown(m)
            }
        });
        var Vf = $m.SelectInteractor = function (E) {
            Eg(Vf, this, [E])
        };
        _d("SelectInteractor", vf, {
            _42: function () {
                var R = this, E = R.gv, r = E.getZoom(), t = R.mark, T = R.div;
                T || (T = R.div = xo(), Cs(R.getView(), T));
                var g = {};
                g.x = t.x * r + E.tx(), g.y = t.y * r + E.ty(), g.width = t.width * r, g.height = t.height * r, kg(T, g), this.intersects() ? (T.style.border = "", T.style.background = E.getRectSelectBackground()) : (T.style.background = "", T.style.border = "1px solid " + E.getRectSelectBorderColor())
            }, handle_mousedown: function (L) {
                var G = this, n = G.gv;
                if (G._57I = U, !n._editing && !n._scrolling) {
                    var T = n.getDataAt(L), l = n.sm();
                    T ? hn(L) ? l.co(T) ? l.rs(T) : l.as(T) : l.co(T) || l.ss(T) : hn(L) || !n.isPannable() ? kf(L) && (hn(L) || l.cs(), n.isRectSelectable() && (G.startDragging(L), n._77O = 1)) : G._57I = rc(L)
                }
            }, handle_mouseup: function (k) {
                var C = this, G = C._57I;
                G && (Rk(G, rc(k)) <= 1 && C.gv.sm().cs(), C._57I = U)
            }, handleWindowMouseUp: function (w) {
                this.clear(w)
            }, handleWindowMouseMove: function (e) {
                var O = this, L = O.gv;
                O._logicalPoint = L.lp(e), O.mark ? (O.fi({
                        kind: "betweenRectSelect",
                        event: e
                    }), O.autoScroll(e), O.redraw()) : O.fi({
                        kind: "beginRectSelect",
                        event: e
                    }), O.mark = Pb(O._lastLogicalPoint, O._logicalPoint), O.redraw()
            }, intersects: function () {
                var k = this, j = k._lastLogicalPoint, v = k._logicalPoint;
                return j.x > v.x || j.y > v.y
            }, clear: function (z) {
                var B = this, K = B.gv, k = B.mark;
                if (B._57I = U, B._lastLogicalPoint) {
                    if (k) {
                        if (0 !== k.width && 0 !== k.height) {
                            var u = K.getDatasInRect(k, B.intersects());
                            if (!u.isEmpty()) {
                                var O = K.sm(), v = O.toSelection();
                                u.each(function (J) {
                                    O.co(J) ? v.remove(J) : v.add(J)
                                }), O.ss(v)
                            }
                        }
                        jm(B.div), delete B.div, delete B.mark, B.redraw(), B.fi({
                            kind: "endRectSelect",
                            event: z
                        }), K.onRectSelectEnded()
                    }
                    B.clearDragging(), delete K._77O
                }
            }, redraw: function () {
                var Z = this;
                Z._draw || (Z._draw = 1, n(function () {
                    Z.mark && Z._42(), delete Z._draw
                }, 16))
            }
        });
        var Bk = $m.MoveInteractor = function (P) {
            Eg(Bk, this, [P])
        };
        _d("MoveInteractor", vf, {
            handle_mousedown: function (L) {
                var v = this, Z = v.gv;
                if (kf(L) && !Z._editing && !Z._scrolling) {
                    var i = Z.getSelectedDataAt(L);
                    i ? (v._data = i, Z.handleMouseDown && Z.handleMouseDown(L, i), v.startDragging(L), Z.isMovable(i) && (Z._moving = 1)) : Z._focusData = U
                }
            }, handleWindowMouseUp: function (V) {
                var m = this, P = m.gv;
                P.handleMouseUp && P.handleMouseUp(V, m._data), m.clear(V)
            }, handleWindowMouseMove: function (K) {
                var y = this, t = y.gv, Q = y._data, M = t.getDataModel(), O = M.getHistoryManager();
                if ((!t._93O || !t._93O(K, Q)) && t._moving) {
                    var k = y._logicalPoint ? "betweenMove" : "beginMove", F = {
                        kind: k,
                        event: K
                    }, b = y._logicalPoint = t.lp(K);
                    O && "beginMove" === k && O.beginInteraction();
                    var E = b.x - y._lastLogicalPoint.x, g = b.y - y._lastLogicalPoint.y, f = t.getMoveMode(K, Q);
                    f && ("x" === f ? g = 0 : "y" === f ? E = 0 : "xy" !== f && (E = g = 0)), t.moveSelection(E, g), y._lastLogicalPoint = b, y.autoScroll(K), y.fi(F)
                }
            }, clear: function (M) {
                var d = this, A = d.gv, s = A.getDataModel(), E = s.getHistoryManager();
                d._lastLogicalPoint && (d._lastLogicalPoint = d._data = A._moving = U, d._logicalPoint && (d.fi({
                    kind: "endMove",
                    event: M
                }), A.onMoveEnded(), E && E.endInteraction()), d.clearDragging())
            }
        });
        var ff = $m.EditInteractor = function (P) {
            Eg(ff, this, [P])
        };
        _d("EditInteractor", vf, {
            ms_edit: 1, setUp: function () {
                var W = this;
                ff.superClass.setUp.call(W), P || W.gv.setEditInteractor(W)
            }, tearDown: function () {
                var e = this;
                ff.superClass.tearDown.call(e), P || e.gv.setEditInteractor(U)
            }, clear: function () {
                var V = this, b = V.gv;
                b._editing && (b._editing = V._77I = V._node = V._edge = V._shape = V._rect = V._89I = V._index = U, V.clearDragging(), V.setCursor(i))
            }, handle_mousedown: function (X) {
                var l = this, v = l.gv.dm(), S = v.getHistoryManager(), I = l._index, u = l._node, W = l._shape, E = l._edge, g = l._77I, H = l._89I;
                kf(X) && l.gv._editing && (u && H ? (l.startDragging(X), S && S.beginInteraction(), l.fi({
                        kind: "beginEditRect",
                        event: X,
                        data: u,
                        direction: H
                    })) : W && I >= 0 ? (l.startDragging(X), S && S.beginInteraction(), l.fi({
                            kind: "beginEditPoint",
                            event: X,
                            data: W,
                            index: I
                        })) : E && I >= 0 ? (l.startDragging(X), S && S.beginInteraction(), l.fi({
                                kind: "beginEditPoint",
                                event: X,
                                data: E,
                                index: I
                            })) : g && (l.startDragging(X), S && S.beginInteraction(), l.fi({
                                kind: "beginEditRotation",
                                event: X,
                                data: g
                            })))
            }, handleWindowMouseUp: function (K) {
                this._46O(K), this.clear()
            }, handleWindowMouseMove: function (R) {
                this._78I(R)
            }, handle_mousemove: function (B) {
                if (!fd) {
                    var x = this, S = x.gv;
                    x._79I(B, S.getSelectedDataAt(B)) ? S._editing = 1 : x.clear()
                }
            }
        });
        var zh = $m.ScrollBarInteractor = function (g) {
            Eg(zh, this, [g])
        };
        _d("ScrollBarInteractor", vf, {
            _41o: function () {
                return this.gv.getViewRect().height < this.gv.getScrollRect().height
            }, _40o: function () {
                return this.gv.getViewRect().width < this.gv.getScrollRect().width
            }, isV: function (I) {
                var T = this.gv.getViewRect();
                return this._41o() && (T.x + T.width - this.gv.lp(I).x) * this.gv.getZoom() < $h
            }, isH: function (P) {
                var s = this.gv.getViewRect();
                return this._40o() && (s.y + s.height - this.gv.lp(P).y) * this.gv.getZoom() < $h
            }, handle_mousemove: function (p) {
                this.handle_touchmove(p)
            }, handle_touchmove: function (u) {
                if (!fd && kf(u)) {
                    var t = this, f = t.isV(u), $ = t.isH(u);
                    t._cp ? t._state || (f ? t._state = "vScroll" : $ && (t._state = "hScroll"), t._state && (gl(t, u), t.fi({
                            kind: "beginScroll",
                            event: u
                        }))) : (f || $) && t.gv.showScrollBar(), t.gv._scrolling = f || $
                }
            }, handleWindowMouseUp: function (Z) {
                this.handleWindowTouchEnd(Z)
            }, handleWindowTouchEnd: function ($) {
                this._state = this._cp = this._tx = this._ty = this.gv._scrolling = U, this.fi({
                    kind: "endScroll",
                    event: $
                })
            }, handle_mousedown: function (Z) {
                this.handle_touchstart(Z)
            }, handle_touchstart: function (B) {
                this.gv.setFocus(B), Fr(B), this.handle_touchmove(B), fm(B) > 1 || !this.gv._scrolling || (this._cp = rc(B), this._tx = this.gv.tx(), this._ty = this.gv.ty())
            }, handleWindowMouseMove: function (o) {
                this.handleWindowTouchMove(o)
            }, handleWindowTouchMove: function (m) {
                var N = rc(m), d = this.gv.getViewRect(), o = this.gv.getScrollRect();
                "vScroll" === this._state ? this.gv.ty(this._ty + (this._cp.y - N.y) * o.height / d.height) : "hScroll" === this._state && this.gv.tx(this._tx + (this._cp.x - N.x) * o.width / d.width), this.fi({
                    kind: "betweenScroll",
                    event: m
                })
            }
        });
        var ms = $m.TouchInteractor = function ($, l) {
            l = l || {}, l.selectable === K && (l.selectable = !0), l.movable === K && (l.movable = !0), l.pannable === K && (l.pannable = !0), l.pinchable === K && (l.pinchable = !0), l.editable === K && (l.editable = !0), this.params = l, Eg(ms, this, [$])
        };
        _d("TouchInteractor", vf, {
            ms_edit: 1, setUp: function () {
                var j = this;
                ms.superClass.setUp.call(j), P && j.params.editable && j.gv.setEditInteractor(j)
            }, tearDown: function () {
                var d = this;
                ms.superClass.tearDown.call(d), P && d.params.editable && d.gv.setEditInteractor(U)
            }, clear: function (n) {
                var G = this, z = G.gv, K = z.dm().getHistoryManager();
                z._moving && (G.fi({
                    kind: "endMove",
                    event: n
                }), delete z._moving, z.onMoveEnded(), K && K.endInteraction()), z._panning && (G.fi({
                    kind: "endPan",
                    event: n
                }), delete z._panning, z.onPanEnded()), z._pinching && (G.fi({
                    kind: "endPinch",
                    event: n
                }), delete z._pinching, z.onPinchEnded()), z._editing && (G._46O(n), G._77I = G._node = G._edge = G._shape = G._rect = G._89I = G._index = z._editing = U), G._moving = G._panning = G._pinching = G._editing = G._57I = G._data = G._beginHistory = U, G.clearDragging()
            }, handle_touchstart: function (s) {
                var C = this;
                if (!C.gv._editing) {
                    Fr(s), C._57I = U;
                    var Y = C.params, r = C.gv, F = r.sm(), D = r.getDataAt(s), A = fm(s);
                    if (1 === A) _g(s) ? r.handleDoubleClick(s, D) : (r.handleClick(s, D), D && (r.handleMouseDown && r.handleMouseDown(s, D), C._data = D)), Y.selectable || (D = U), D ? (F.co(D) || F.ss(D), Y.editable && r.isEditable(D) && C._79I(s, D, !0) ? (C._editing = 1, C.startDragging(s)) : Y.movable && r.isMovable(D) && (C._moving = 1, C.startDragging(s))) : (C._57I = rc(s), Y.pannable && r.isPannable() && (C._panning = 1, C.startDragging(s), C._translate = {
                            x: r.tx(),
                            y: r.ty()
                        })); else if (Y.pinchable && 2 === A) {
                        C._pinching = 1, C.startDragging(s);
                        var R = r.getView(), E = r.getZoom(), N = R.getBoundingClientRect(), f = s.touches[0], o = s.touches[1], l = {
                            x: (f.clientX + o.clientX) / 2 - N.left,
                            y: (f.clientY + o.clientY) / 2 - N.top
                        };
                        l.x -= r.tx(), l.y -= r.ty(), l.x /= E, l.y /= E, C._p = l, C._d = If(s)
                    }
                }
            }, handle_touchend: function (S) {
                var w = this, X = w.gv, q = w._57I, v = w._data;
                q && (Rk(q, rc(S)) <= 1 && X.sm().cs(), w._57I = U), v && X.handleMouseUp && X.handleMouseUp(S, v)
            }, handleWindowTouchEnd: function (h) {
                this.clear(h)
            }, handleWindowTouchMove: function (G) {
                var p = this, D = p.gv, u = D.dm().getHistoryManager(), c = fm(G);
                if (1 === c) {
                    if (p._editing && (u && !p._beginHistory && (p._beginHistory = 1, u.beginInteraction()), D._editing = 1, p._78I(G)), p._moving) u && !p._beginHistory && (p._beginHistory = 1, u.beginInteraction()), p.handleMove(G); else if (p._panning) {
                        var g = rc(G);
                        D.setTranslate(p._translate.x + g.x - p._lastClientPoint.x, p._translate.y + g.y - p._lastClientPoint.y), p.fi({
                            kind: D._panning ? "betweenPan" : "beginPan",
                            event: G
                        }), D._panning = 1
                    }
                } else if (2 === c && p._pinching) {
                    var L = If(G);
                    D.handlePinch(p._p, L, p._d), p._d = L, p.fi({
                        kind: D._pinching ? "betweenPinch" : "beginPinch",
                        event: G
                    }), D._pinching = 1
                }
            }, handleMove: function (O) {
                var t = this, R = t.gv, P = R.lp(O);
                R._93O && R._93O(O, t._data) || (R.moveSelection(P.x - t._lastLogicalPoint.x, P.y - t._lastLogicalPoint.y), t._lastLogicalPoint = P, t.autoScroll(O), t.fi({
                    kind: R._moving ? "betweenMove" : "beginMove",
                    event: O
                }), R._moving = 1)
            }
        });
        var Wo = "directional", jj = "point", yk = "spot", Je = "light.color";
        Se(H, {
            graph3dViewAttributes: U,
            graph3dViewFirstPersonMode: !1,
            graph3dViewMouseRoamable: !0,
            graph3dViewMoveStep: 15,
            graph3dViewRotateStep: h / 60,
            graph3dViewPannable: !0,
            graph3dViewRotatable: !0,
            graph3dViewWalkable: !0,
            graph3dViewResettable: !0,
            graph3dViewZoomable: !0,
            graph3dViewRectSelectable: !0,
            graph3dViewRectSelectBackground: Ri,
            graph3dViewGridVisible: !1,
            graph3dViewGridSize: 50,
            graph3dViewGridGap: 50,
            graph3dViewGridColor: [.4, .75, .85, 1],
            graph3dViewOriginAxisVisible: !1,
            graph3dViewCenterAxisVisible: !1,
            graph3dViewAxisXColor: [1, 0, 0, 1],
            graph3dViewAxisYColor: [0, 1, 0, 1],
            graph3dViewAxisZColor: [0, 0, 1, 1],
            graph3dViewEditSizeColor: [1, 1, 0, 1],
            graph3dViewOrtho: !1,
            graph3dViewOrthoWidth: 2e3,
            graph3dViewFovy: h / 4,
            graph3dViewNear: 10,
            graph3dViewFar: 1e4,
            graph3dViewEye: [0, 300, 1e3],
            graph3dViewCenter: [0, 0, 0],
            graph3dViewUp: [0, 1, -1e-7],
            graph3dViewHeadlightRange: 0,
            graph3dViewHeadlightColor: [1, 1, 1, 1],
            graph3dViewHeadlightIntensity: 1,
            graph3dViewHeadlightDisabled: !1,
            graph3dViewFogDisabled: !0,
            graph3dViewFogColor: "white",
            graph3dViewFogNear: 1,
            graph3dViewFogFar: 2e3,
            graph3dViewDashDisabled: !0,
            graph3dViewBatchBlendDisabled: !0,
            graph3dViewBatchBrightnessDisabled: !0,
            graph3dViewBatchColorDisabled: !1,
            setShape3dModel: function (i, P) {
                gd[i] = P
            },
            getShape3dModel: function (C) {
                return gd[C]
            },
            createMatrix: function (g, J) {
                $p(g) || (g = [g]);
                for (var q = g.length - 1; q >= 0; q--) {
                    var B = g[q];
                    J = wn(B.mat, B.s3, B.r3, B.rotationMode, B.t3, J)
                }
                return J
            },
            transformVec: function (d, K) {
                return oc(d, K)
            },
            createBoxModel: function () {
                return {vs: tm, ns: fn, uv: jl, is: Ei}
            },
            createRoundRectModel: function (m, w) {
                return Xl.roundRect(m, w)
            },
            createStarModel: function (M, b) {
                return Xl.star(M, b)
            },
            createRectModel: function (o, l) {
                return Xl.rect(o, l)
            },
            createTriangleModel: function (S, q) {
                return Xl.triangle(S, q)
            },
            createRightTriangleModel: function (K, N) {
                return Xl.rightTriangle(K, N)
            },
            createParallelogramModel: function (m, e) {
                return Xl.parallelogram(m, e)
            },
            createTrapezoidModel: function (E, R) {
                return Xl.trapezoid(E, R)
            },
            createSmoothSphereModel: function (n, G, P, f, z, J, m) {
                return Th(new ub(n, G, P, f, z, J, m))
            },
            createSphereModel: function (t, S, T, a, W, u) {
                return t ? nc(t, S, T, a, W, u) : H.createSmoothSphereModel()
            },
            createSmoothConeModel: function (H, n, v, B, L) {
                return Fe(H, n, v, B, L)
            },
            createConeModel: function (U, m, v, w, F, N) {
                return U ? rj(U, m, v, w, F, N) : Fe(N)
            },
            createSmoothCylinderModel: function (Q, U, b, E, M, X, P, T) {
                return Th(new Vr(Q, U, b, E, M, X, P, T))
            },
            createCylinderModel: function (P, X, b, s, t, E, h) {
                return P ? di(P, X, b, s, t, E, h) : Gg(E, h)
            },
            createSmoothTorusModel: function (H, v, N, L, K, B) {
                return Th(new ch(H, v, N, L, K, B))
            },
            createTorusModel: function (l, L, G, n, D, k, M) {
                return l ? Bp(l, L, G, n, D, k, M) : id(k, M)
            },
            createExtrusionModel: function (t, Q, S, r, u, $, f, M) {
                return yp(t, Q, S, r, u, $, f, M)
            },
            createSmoothRingModel: function (D, U, p, y, d, R) {
                for (var v = [], V = 0; V < D.length - 1; V += 2)v.push({x: D[V], y: D[V + 1]});
                for (D = lj(v, U, p)[0], v = [], V = 0; V < D.length; V++) {
                    var W = D[V];
                    v.push(new Am(W.x, 0, W.y))
                }
                return Th(new xs(v, R, y, d))
            },
            createTextGeometry: function (O, M) {
                return Th(new Zh(O, M))
            },
            loadFontFace: function (D, U) {
                H.xhrLoad(D, function (Q) {
                    if (!Q)return U();
                    var c;
                    try {
                        c = JSON.parse(Q)
                    } catch (g) {
                        c = JSON.parse(Q.substring(65, Q.length - 2))
                    }
                    Sn.loadFace(c), U && U(c.familyName.toLowerCase())
                }, U ? null : {sync: !0})
            },
            createRingModel: function (f, d, N, s, z, $, x, Y, h, r) {
                for (var l = [], L = 0; L < f.length - 1; L += 2)l.push({x: f[L], y: f[L + 1]});
                $ = $ || H.shapeSide, x = x || 0, Y = Y || $;
                var K, E, g, j, B, w, q, A, T, I, L, n, Q, e, F, o, V, t, S = [], Z = [], P = h ? [] : U, R = h ? [] : U, k = r ? [] : U, u = r ? [] : U, G = s ? [] : U, b = s ? [] : U, X = z ? [] : U, O = z ? [] : U, f = lj(l, d, N), J = nd(f), p = 0, W = 2 * Math.PI / $;
                return f.forEach(function (d) {
                    if (g = d.length, g > 1) {
                        if (j = d[0], s)for (w = j.x, A = j.y, L = x; Y > L; L++)n = L + 1, Q = L * W, e = n * W, F = M(Q), o = v(Q), V = M(e), t = v(e), G.push(F * w, A, -o * w, V * w, A, -t * w, 0, A, 0), b.push(.5 - .5 * F, .5 - .5 * o, .5 - .5 * V, .5 - .5 * t, .5, .5);
                        for (I = 0; g > I; I++) {
                            for (B = d[I], w = j.x, q = B.x, A = j.y, T = B.y, K = p / J, p += Rk(j, B), E = p / J, L = x; Y > L; L++)n = L + 1, Q = L * W, e = n * W, F = M(Q), o = v(Q), V = M(e), t = v(e), S.push(F * q, T, -o * q, V * q, T, -t * q, F * w, A, -o * w, V * q, T, -t * q, V * w, A, -t * w, F * w, A, -o * w), Z.push(L / $, E, n / $, E, L / $, K, n / $, E, n / $, K, L / $, K), h && L === x && (P.push(0, A, 0, 0, T, 0, F * q, T, -o * q, F * q, T, -o * q, F * w, A, -o * w, 0, A, 0), R.push(0, .5 - A, 0, .5 - T, 2 * q, .5 - T, 2 * q, .5 - T, 2 * w, .5 - A, 0, .5 - A)), r && n === Y && (k.push(0, A, 0, V * q, T, -t * q, 0, T, 0, V * q, T, -t * q, 0, A, 0, V * w, A, -t * w), u.push(1, .5 - A, 1 - 2 * q, .5 - T, 1, .5 - T, 1 - 2 * q, .5 - T, 1, .5 - A, 1 - 2 * w, .5 - A));
                            j = B
                        }
                        if (z)for (w = j.x, A = j.y, L = x; Y > L; L++)n = L + 1, Q = L * W, e = n * W, F = M(Q), o = v(Q), V = M(e), t = v(e), X.push(V * w, A, -t * w, F * w, A, -o * w, 0, A, 0), O.push(.5 - .5 * V, .5 + .5 * t, .5 - .5 * F, .5 + .5 * o, .5, .5)
                    }
                }), {
                    vs: S,
                    uv: Z,
                    bottom_vs: X,
                    bottom_uv: O,
                    top_vs: G,
                    top_uv: b,
                    from_vs: P,
                    from_uv: R,
                    to_vs: k,
                    to_uv: u
                }
            }
        }, !0), Se(u, {
            "3d.move.mode": K,
            "3d.selectable": !0,
            "3d.visible": !0,
            "3d.movable": !0,
            "3d.editable": !0,
            "shape.border.gradient.color": K,
            "edge.gradient.color": K,
            "edge.source.t3": K,
            "edge.target.t3": K,
            "light.type": jj,
            "light.center": [0, 0, 0],
            "light.color": [1, 1, 1, 1],
            "light.disabled": !1,
            "light.angle": h / 4,
            "light.range": 0,
            "light.exponent": 1,
            "light.intensity": 1,
            "wf.visible": !1,
            "wf.width": 1,
            "wf.color": Ir,
            "wf.short": !1,
            "wf.mat": K,
            batch: K,
            "transparent.mask": !1,
            brightness: K,
            "select.brightness": .7,
            "repeat.uv.length": K,
            "label.face": Ar,
            "label.t3": K,
            "label.r3": K,
            "label.texture.scale": 2,
            "label.rotationMode": Fq,
            "label.light": !1,
            "label.blend": K,
            "label.reverse.flip": !1,
            "label.reverse.color": nr,
            "label.reverse.cull": !1,
            "label.transparent": !1,
            "label.autorotate": !1,
            "label2.face": Ar,
            "label2.t3": K,
            "label2.r3": K,
            "label2.texture.scale": 2,
            "label2.rotationMode": Fq,
            "label2.light": !1,
            "label2.blend": K,
            "label2.reverse.flip": !1,
            "label2.reverse.color": nr,
            "label2.reverse.cull": !1,
            "label2.transparent": !1,
            "label2.autorotate": !1,
            "note.face": Ar,
            "note.t3": K,
            "note.r3": K,
            "note.texture.scale": 2,
            "note.rotationMode": Fq,
            "note.light": !1,
            "note.blend": K,
            "note.reverse.flip": !1,
            "note.reverse.color": nr,
            "note.reverse.cull": !1,
            "note.transparent": !1,
            "note.autorotate": !1,
            "note2.face": Ar,
            "note2.t3": K,
            "note2.r3": K,
            "note2.texture.scale": 2,
            "note2.rotationMode": Fq,
            "note2.light": !1,
            "note2.blend": K,
            "note2.reverse.flip": !1,
            "note2.reverse.color": nr,
            "note2.reverse.cull": !1,
            "note2.transparent": !1,
            "note2.autorotate": !1,
            shape3d: K,
            "shape3d.color": Ni,
            "shape3d.top.color": K,
            "shape3d.bottom.color": K,
            "shape3d.from.color": K,
            "shape3d.to.color": K,
            "shape3d.image": K,
            "shape3d.top.image": K,
            "shape3d.bottom.image": K,
            "shape3d.from.image": K,
            "shape3d.to.image": K,
            "shape3d.light": !0,
            "shape3d.side": 0,
            "shape3d.side.from": K,
            "shape3d.side.to": K,
            "shape3d.visible": !0,
            "shape3d.from.visible": !0,
            "shape3d.to.visible": !0,
            "shape3d.top.visible": !0,
            "shape3d.bottom.visible": !0,
            "shape3d.torus.radius": .17,
            "shape3d.resolution": 0,
            "shape3d.blend": K,
            "shape3d.opacity": K,
            "shape3d.reverse.flip": !1,
            "shape3d.reverse.color": nr,
            "shape3d.reverse.cull": !1,
            "shape3d.transparent": !1,
            "shape3d.uv.offset": K,
            "shape3d.uv.scale": K,
            "shape3d.top.uv.offset": K,
            "shape3d.top.uv.scale": K,
            "shape3d.bottom.uv.offset": K,
            "shape3d.bottom.uv.scale": K,
            "shape3d.from.uv.offset": K,
            "shape3d.from.uv.scale": K,
            "shape3d.to.uv.offset": K,
            "shape3d.to.uv.scale": K,
            "shape3d.top.cap": K,
            "shape3d.bottom.cap": K,
            "shape3d.start.angle": 0,
            "shape3d.discard.selectable": !0,
            "shape3d.top.discard.selectable": !0,
            "shape3d.bottom.discard.selectable": !0,
            "shape3d.from.discard.selectable": !0,
            "shape3d.to.discard.selectable": !0,
            "shape3d.scaleable": !0,
            "all.light": !0,
            "all.visible": !0,
            "all.color": Ni,
            "all.image": K,
            "all.blend": K,
            "all.opacity": K,
            "all.reverse.flip": !1,
            "all.reverse.color": nr,
            "all.reverse.cull": !1,
            "all.transparent": !1,
            "all.uv": K,
            "all.uv.offset": K,
            "all.uv.scale": K,
            "all.discard.selectable": !0,
            mat: K,
            "left.mat": K,
            "right.mat": K,
            "top.mat": K,
            "bottom.mat": K,
            "front.mat": K,
            "back.mat": K
        }, !0);
        var Vm, Bh = !1, je = [0, 0, 0, 1 / 255], Mn = {
            left: [1 / 255, 0, 0, 1],
            right: [2 / 255, 0, 0, 1],
            top: [3 / 255, 0, 0, 1],
            bottom: [4 / 255, 0, 0, 1],
            front: [5 / 255, 0, 0, 1],
            back: [6 / 255, 0, 0, 1],
            m: {1: rk, 2: ks, 3: dh, 4: De, 5: Ar, 6: op}
        }, Cj = function (c, k, q, Q) {
            if (k.getFaceVisible(c, q)) {
                vq(k, uh(c, k.getFaceMat(c, q) || k.getMat(c)));
                var _ = k._26I;
                k.getFaceReverseCull(c, q) ? _.enable(_.CULL_FACE) : _.disable(_.CULL_FACE), zk(_, k._prg.uFixPickReverseColor, Mn[q]), zf(_), vj(_, Q, 6), fg(_), vk(k)
            }
        }, _o = function (p) {
            return p instanceof gp
        }, Ap = function (T) {
            return [T.x, T.e || 0, T.y]
        }, _h = function (r, x, k) {
            for (var x = Jp(x), w = x[0], V = x[1], i = x[2]; k--;)r.push(w, V, i)
        }, ee = function (G, C, r) {
            for (var C = Jp(C), N = C[0], B = C[1], M = C[2], V = C[3]; r--;)G.push(N, B, M, V)
        }, tc = function (s, X, P) {
            if (X)for (var i, q, l, J = X[0], V = X[1], U = X[2], j = X[4], v = X[5], D = X[6], B = X[8], C = X[9], k = X[10], m = X[12], w = X[13], p = X[14], N = P.length, z = 0, z = 0; N > z; z += 3)i = P[z], q = P[z + 1], l = P[z + 2], s.push(J * i + j * q + B * l + m, V * i + v * q + C * l + w, U * i + D * q + k * l + p); else lc(s, P)
        }, Eq = function (I, s) {
            var o = s.s("light.intensity"), A = Jp(s.s(Je)), Q = A[0], g = A[1], u = A[2];
            1 !== o && (Q *= o, g *= o, u *= o), I.push(Q, g, u, s.s("light.disabled") ? 1 : 0)
        }, zl = function (K, O, $) {
            zk(O, $.uHeadlightRange, K._headlightRange);
            var I = K._headlightIntensity, Z = Jp(K._headlightColor);
            1 !== I && (Z = [Z[0] * I, Z[1] * I, Z[2] * I]), zk(O, $.uHeadlightColor, [Z[0], Z[1], Z[2], K._headlightDisabled ? 1 : 0]);
            var j = K._59O, P = K._spots, k = K._dirs;
            if (j.length) {
                var w = [], V = [], U = [];
                j.forEach(function (q) {
                    Eq(w, q), lc(V, q.p3()), U.push(q.s("light.range"))
                }), O.uniform4fv($.uPointColor, w), O.uniform1fv($.uPointRange, U), O.uniform3fv($.uPointPosition, V)
            }
            if (P.length) {
                var s = [], X = [], i = [], d = [], S = [], e = [];
                P.forEach(function (C) {
                    Eq(s, C), lc(X, C.p3()), lc(i, C.s("light.center")), d.push(C.s("light.range")), S.push(M(C.s("light.angle") / 2)), e.push(C.s("light.exponent"))
                }), O.uniform4fv($.uSpotColor, s), O.uniform1fv($.uSpotRange, d), O.uniform1fv($.uSpotAngle, S), O.uniform1fv($.uSpotExponent, e), O.uniform3fv($.uSpotPosition, X), O.uniform3fv($.uSpotCenter, i)
            }
            if (k.length) {
                var L = [], m = [];
                k.forEach(function (C) {
                    Eq(L, C), lc(m, C.p3())
                }), O.uniform4fv($.uDirColor, L), O.uniform3fv($.uDirPosition, m)
            }
        }, Tl = function (q) {
            return q > 0 && 0 === (q - 1 & q)
        }, gb = function (t) {
            return t = o(0, O(h, t)), t = o(Ub, O(h - Ub, t))
        }, io = function () {
            return .05 + t() / 2
        }, Te = function (j, F, T, $) {
            var Z, H = j.getEye();
            return j.isOrtho() ? (Z = pj(j.getCenter(), H), Z[0] += $[0], Z[1] += $[1], Z[2] += $[2]) : Z = H, ml(F, T, $, Z)
        }, ml = function (M, s, W, S) {
            var d = Dn(M, s), C = pj(S, W, !0), q = Dn(C, s);
            if (e(q) < Ub)return U;
            var h = (d - Dn(W, s)) / q;
            return [W[0] + C[0] * h, W[1] + C[1] * h, W[2] + C[2] * h]
        }, cr = function (M, P) {
            return {x: 2 * M.x - P.x, y: 2 * M.y - P.y}
        }, Wb = function (a, I, b, p) {
            var O, N;
            if (!a)return O = w(I.y - b.y, b.x - I.x), {x: I.x + p * v(O), y: I.y + p * M(O)};
            if (!b)return O = w(a.y - I.y, I.x - a.x), {x: I.x + p * v(O), y: I.y + p * M(O)};
            var x = pj([a.x, a.y, 0], [I.x, I.y, 0], !0), J = pj([b.x, b.y, 0], [I.x, I.y, 0], !0), S = -(x[0] + J[0]) / 2, j = -(x[1] + J[1]) / 2, l = y(S * S + j * j);
            if (Ub > l)return O = w(a.y - I.y, I.x - a.x), {x: I.x + p * v(O), y: I.y + p * M(O)};
            var P = a.x - I.x, E = a.y - I.y, Y = b.x - I.x, Q = b.y - I.y, T = y(Math.min(P * P + E * E, Y * Y + Q * Q));
            return O = Z(Dn(x, J)) / 2, N = x[1] * J[0] - x[0] * J[1] > 0 ? -1 : 1, S /= l, j /= l, l = Math.min(p / v(O), T / M(O)), {
                x: I.x + N * l * S,
                y: I.y + N * l * j
            }
        }, ke = function (n) {
            var H = n[1], q = n[2], r = n[3], v = n[6], g = n[7], U = n[11];
            n[1] = n[4], n[2] = n[8], n[3] = n[12], n[4] = H, n[6] = n[9], n[7] = n[13], n[8] = q, n[9] = v, n[11] = n[14], n[12] = r, n[13] = g, n[14] = U
        }, af = function (e) {
            var c = e[0], L = e[1], J = e[2], r = e[3], n = e[4], A = e[5], Z = e[6], Y = e[7], f = e[8], s = e[9], H = e[10], v = e[11], B = e[12], D = e[13], q = e[14], M = e[15], G = c * A - L * n, b = c * Z - J * n, d = c * Y - r * n, T = L * Z - J * A, N = L * Y - r * A, l = J * Y - r * Z, z = f * D - s * B, V = f * q - H * B, O = f * M - v * B, m = s * q - H * D, $ = s * M - v * D, F = H * M - v * q, W = G * F - b * $ + d * m + T * O - N * V + l * z;
            return W ? (W = 1 / W, e[0] = (A * F - Z * $ + Y * m) * W, e[1] = (J * $ - L * F - r * m) * W, e[2] = (D * l - q * N + M * T) * W, e[3] = (H * N - s * l - v * T) * W, e[4] = (Z * O - n * F - Y * V) * W, e[5] = (c * F - J * O + r * V) * W, e[6] = (q * d - B * l - M * b) * W, e[7] = (f * l - H * d + v * b) * W, e[8] = (n * $ - A * O + Y * z) * W, e[9] = (L * O - c * $ - r * z) * W, e[10] = (B * N - D * d + M * G) * W, e[11] = (s * d - f * N - v * G) * W, e[12] = (A * V - n * m - Z * z) * W, e[13] = (c * m - L * V + J * z) * W, e[14] = (D * b - B * T - q * G) * W, e[15] = (f * T - s * b + H * G) * W, void 0) : U
        }, vb = function (B, j) {
            if (j) {
                var P = j[0], i = j[1], k = j[2];
                B[12] = B[0] * P + B[4] * i + B[8] * k + B[12], B[13] = B[1] * P + B[5] * i + B[9] * k + B[13], B[14] = B[2] * P + B[6] * i + B[10] * k + B[14], B[15] = B[3] * P + B[7] * i + B[11] * k + B[15]
            }
        }, eq = function (B, _) {
            if (_) {
                var s = _[0], j = _[1], x = _[2];
                B[0] = B[0] * s, B[1] = B[1] * s, B[2] = B[2] * s, B[3] = B[3] * s, B[4] = B[4] * j, B[5] = B[5] * j, B[6] = B[6] * j, B[7] = B[7] * j, B[8] = B[8] * x, B[9] = B[9] * x, B[10] = B[10] * x, B[11] = B[11] * x
            }
        }, wd = function (B, R, Y) {
            var L = R[0], n = R[1], M = R[2], N = R[3], g = R[4], G = R[5], U = R[6], r = R[7], O = R[8], S = R[9], i = R[10], b = R[11], k = R[12], D = R[13], e = R[14], m = R[15], I = Y[0], h = Y[1], s = Y[2], x = Y[3];
            return B[0] = I * L + h * g + s * O + x * k, B[1] = I * n + h * G + s * S + x * D, B[2] = I * M + h * U + s * i + x * e, B[3] = I * N + h * r + s * b + x * m, I = Y[4], h = Y[5], s = Y[6], x = Y[7], B[4] = I * L + h * g + s * O + x * k, B[5] = I * n + h * G + s * S + x * D, B[6] = I * M + h * U + s * i + x * e, B[7] = I * N + h * r + s * b + x * m, I = Y[8], h = Y[9], s = Y[10], x = Y[11], B[8] = I * L + h * g + s * O + x * k, B[9] = I * n + h * G + s * S + x * D, B[10] = I * M + h * U + s * i + x * e, B[11] = I * N + h * r + s * b + x * m, I = Y[12], h = Y[13], s = Y[14], x = Y[15], B[12] = I * L + h * g + s * O + x * k, B[13] = I * n + h * G + s * S + x * D, B[14] = I * M + h * U + s * i + x * e, B[15] = I * N + h * r + s * b + x * m, B
        }, ik = function (k, j, J, d) {
            var R, Y, H, $, Z, f, t, W, x, D, o = j[0], C = j[1], E = j[2], g = d[0], h = d[1], c = d[2], b = J[0], Q = J[1], r = J[2];
            return e(o - b) < Ub && e(C - Q) < Ub && e(E - r) < Ub ? Vh(k) : (t = o - b, W = C - Q, x = E - r, D = 1 / y(t * t + W * W + x * x), t *= D, W *= D, x *= D, R = h * x - c * W, Y = c * t - g * x, H = g * W - h * t, D = y(R * R + Y * Y + H * H), D ? (D = 1 / D, R *= D, Y *= D, H *= D) : (R = 0, Y = 0, H = 0), $ = W * H - x * Y, Z = x * R - t * H, f = t * Y - W * R, D = y($ * $ + Z * Z + f * f), D ? (D = 1 / D, $ *= D, Z *= D, f *= D) : ($ = 0, Z = 0, f = 0), k[0] = R, k[1] = $, k[2] = t, k[3] = 0, k[4] = Y, k[5] = Z, k[6] = W, k[7] = 0, k[8] = H, k[9] = f, k[10] = x, k[11] = 0, k[12] = -(R * o + Y * C + H * E), k[13] = -($ * o + Z * C + f * E), k[14] = -(t * o + W * C + x * E), k[15] = 1, k)
        }, Lh = function (a, j, S, l, o) {
            var c = 1 / V(j / 2), R = 1 / (l - o);
            return a[0] = c / S, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = c, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = (o + l) * R, a[11] = -1, a[12] = 0, a[13] = 0, a[14] = 2 * o * l * R, a[15] = 0, a
        }, Xn = function (S, G, e, U, g, Y, J) {
            var P = 1 / (G - e), F = 1 / (U - g), t = 1 / (Y - J);
            return S[0] = -2 * P, S[1] = 0, S[2] = 0, S[3] = 0, S[4] = 0, S[5] = -2 * F, S[6] = 0, S[7] = 0, S[8] = 0, S[9] = 0, S[10] = 2 * t, S[11] = 0, S[12] = (G + e) * P, S[13] = (g + U) * F, S[14] = (J + Y) * t, S[15] = 1, S
        }, yi = function (T, q) {
            var K = q[0], r = q[1], p = q[2], D = q[3], k = K * K + r * r + p * p + D * D, u = k ? 1 / k : 0;
            return T[0] = -K * u, T[1] = -r * u, T[2] = -p * u, T[3] = D * u, T
        }, xk = function (l, K) {
            var x = K[0] + K[5] + K[10], y = 0;
            return x > 0 ? (y = 2 * Math.sqrt(x + 1), l[3] = .25 * y, l[0] = (K[6] - K[9]) / y, l[1] = (K[8] - K[2]) / y, l[2] = (K[1] - K[4]) / y) : K[0] > K[5] & K[0] > K[10] ? (y = 2 * Math.sqrt(1 + K[0] - K[5] - K[10]), l[3] = (K[6] - K[9]) / y, l[0] = .25 * y, l[1] = (K[1] + K[4]) / y, l[2] = (K[8] + K[2]) / y) : K[5] > K[10] ? (y = 2 * Math.sqrt(1 + K[5] - K[0] - K[10]), l[3] = (K[8] - K[2]) / y, l[0] = (K[1] + K[4]) / y, l[1] = .25 * y, l[2] = (K[6] + K[9]) / y) : (y = 2 * Math.sqrt(1 + K[10] - K[0] - K[5]), l[3] = (K[1] - K[4]) / y, l[0] = (K[8] + K[2]) / y, l[1] = (K[6] + K[9]) / y, l[2] = .25 * y), l
        }, Po = function (r, S, g) {
            var c = S[0], s = S[1], K = S[2], b = S[3], h = c + c, M = s + s, E = K + K, u = c * h, x = c * M, j = c * E, Z = s * M, t = s * E, U = K * E, P = b * h, y = b * M, z = b * E;
            return r[0] = 1 - (Z + U), r[1] = x + z, r[2] = j - y, r[3] = 0, r[4] = x - z, r[5] = 1 - (u + U), r[6] = t + P, r[7] = 0, r[8] = j + y, r[9] = t - P, r[10] = 1 - (u + Z), r[11] = 0, r[12] = g[0], r[13] = g[1], r[14] = g[2], r[15] = 1, r
        }, hp = function (N, M) {
            return ik(M ? M : os(), N._eye, N._center, N._up)
        }, rf = function (L) {
            var w = L.getAspect(), K = L._near, D = L._far, g = os();
            if (L._ortho) {
                var H = L._orthoWidth / 2, O = H / w;
                Xn(g, -H, H, -O, O, K, D)
            } else Lh(g, L._fovy, w, K, D);
            return g
        }, xq = function (u, I) {
            if (!u)return U;
            var m = 0, E = 1, L = 2, j = [], O = 0, P = u.length, D = P / 3;
            if (I) {
                for (; P > O; O++)j[O] = 0;
                for (O = 0; O < I.length; O += 3) {
                    var s = [], Y = [], o = [];
                    s[m] = u[3 * I[O + 1] + m] - u[3 * I[O] + m], s[E] = u[3 * I[O + 1] + E] - u[3 * I[O] + E], s[L] = u[3 * I[O + 1] + L] - u[3 * I[O] + L], Y[m] = u[3 * I[O + 2] + m] - u[3 * I[O + 1] + m], Y[E] = u[3 * I[O + 2] + E] - u[3 * I[O + 1] + E], Y[L] = u[3 * I[O + 2] + L] - u[3 * I[O + 1] + L], o[m] = s[E] * Y[L] - s[L] * Y[E], o[E] = s[L] * Y[m] - s[m] * Y[L], o[L] = s[m] * Y[E] - s[E] * Y[m];
                    for (var H = 0; 3 > H; H++)j[3 * I[O + H] + m] += o[m], j[3 * I[O + H] + E] += o[E], j[3 * I[O + H] + L] += o[L]
                }
            } else for (O = 0; D > O; O += 3) {
                var s = [], Y = [], o = [];
                s[m] = u[3 * (O + 1) + m] - u[3 * O + m], s[E] = u[3 * (O + 1) + E] - u[3 * O + E], s[L] = u[3 * (O + 1) + L] - u[3 * O + L], Y[m] = u[3 * (O + 2) + m] - u[3 * (O + 1) + m], Y[E] = u[3 * (O + 2) + E] - u[3 * (O + 1) + E], Y[L] = u[3 * (O + 2) + L] - u[3 * (O + 1) + L], o[m] = s[E] * Y[L] - s[L] * Y[E], o[E] = s[L] * Y[m] - s[m] * Y[L], o[L] = s[m] * Y[E] - s[E] * Y[m];
                for (var H = 0; 3 > H; H++)j[3 * (O + H) + m] = o[m], j[3 * (O + H) + E] = o[E], j[3 * (O + H) + L] = o[L]
            }
            for (O = 0; P > O; O += 3) {
                var h = [];
                h[m] = j[O + m], h[E] = j[O + E], h[L] = j[O + L];
                var K = y(h[m] * h[m] + h[E] * h[E] + h[L] * h[L]);
                0 === K && (K = Ub), h[m] = h[m] / K, h[E] = h[E] / K, h[L] = h[L] / K, j[O + m] = h[m], j[O + E] = h[E], j[O + L] = h[L]
            }
            return new Hb(j)
        }, Si = function (R, z, $) {
            if ($ || ($ = R.createTexture()), z) {
                var m = R.TEXTURE_2D, k = R.LINEAR, b = R.REPEAT, K = R.CLAMP_TO_EDGE, e = R.TEXTURE_MIN_FILTER;
                Mj(R, $), R.texImage2D(m, 0, R.RGBA, R.RGBA, R.UNSIGNED_BYTE, z), ye(R, R.TEXTURE_MAG_FILTER, k), Tl(z.width) && Tl(z.height) ? (ye(R, R.TEXTURE_WRAP_S, b), ye(R, R.TEXTURE_WRAP_T, b), ye(R, e, R.LINEAR_MIPMAP_LINEAR), R.generateMipmap(m)) : (ye(R, R.TEXTURE_WRAP_S, K), ye(R, R.TEXTURE_WRAP_T, K), ye(R, e, k)), Mj(R, U)
            }
            return $
        }, Ui = function (c, S) {
            var D = new Uint8Array(3);
            return S = S || c.createTexture(), Mj(c, S), ye(c, c.TEXTURE_MIN_FILTER, c.LINEAR), c.texImage2D(c.TEXTURE_2D, 0, c.RGB, 1, 1, 0, c.RGB, c.UNSIGNED_BYTE, D), S
        }, Rc = function (I) {
            I._26I && I._prg && (I._26I.deleteProgram(I._prg), I._prg = U)
        }, Fo = function (H, q, E, _) {
            var A = H.createShader(E);
            return H.shaderSource(A, _), H.compileShader(A), H.attachShader(q, A), A
        }, wl = function (p) {
            return p.createBuffer()
        }, Mj = function (j, t) {
            j.bindTexture(j.TEXTURE_2D, t)
        }, jo = function (e, j) {
            e.bindFramebuffer(e.FRAMEBUFFER, j)
        }, ye = function (o, Q, H) {
            o.texParameteri(o.TEXTURE_2D, Q, H)
        }, Uf = function (k, m) {
            if (m) {
                var m = Jp(m);
                k.clearColor(m[0], m[1], m[2], m[3])
            }
        }, _c = function (h, G) {
            zk(h, G.uFix, !0), nj(h, G.aNormal)
        }, $o = function (I, A) {
            zk(I, A.uFix, !1), Ib(I, A.aNormal)
        }, mr = function (t, q, G, C, f, F, g, B) {
            t._picking || (G ? (zk(t, q.uBlend, !0), zk(t, q.uBlendColor, G)) : zk(t, q.uBlend, !1), zk(t, q.uLight, C == U ? !0 : C), Bf(f) && 1 !== f && zk(t, q.uPartOpacity, f), zk(t, q.uReverseFlip, F == U ? !1 : F), zk(t, q.uFixPickReverseColor, g || nr)), B ? t.enable(t.CULL_FACE) : t.disable(t.CULL_FACE)
        }, No = function (Q, $) {
            Q._picking || zk(Q, $.uPartOpacity, 1)
        }, zf = function (n, Y, j, L, _, u, i, R) {
            if (!j)return Mj(n, n._emptyTexture), void 0;
            zk(n, Y.uTexture, !0), zk(n, Y.uDiscardSelectable, pf(L) ? L : !0), Ib(n, Y.aUv), vg(n, _, u, Y.aUv, 2), n.activeTexture(n.TEXTURE0), Mj(n, j), n.uniform1i(Y.uSampler, 0);
            var k = [0, 0, 1, 1];
            i && (k[0] = i[0], k[1] = i[1]), R && (k[2] = R[0], k[3] = R[1]), zk(n, Y.uOffsetScale, k)
        }, fg = function (C, J, e) {
            Mj(C, U), e && (nj(C, J.aUv), zk(C, J.uTexture, !1))
        }, hm = function (k, E, d, o, H, F) {
            !d || j || _ || k.lineWidth(d), o && !k._picking && zk(k, E.uFixPickReverseColor, o), H && vg(k, H, F, E.aPosition)
        }, ur = function (v, N, k, p) {
            Vm && (p = v[Vm]), v.drawArrays(p == U ? v.TRIANGLES : p, N, k)
        }, vj = function (P, h, N, X) {
            Vm && (X = P[Vm]), P.drawElements(X == U ? P.TRIANGLES : X, N, P.UNSIGNED_SHORT, h == U ? 0 : 2 * h)
        }, vg = function (W, Z, f, o, g) {
            var J = W.ARRAY_BUFFER;
            W.bindBuffer(J, Z), f && W.bufferData(J, f, W.STATIC_DRAW), o != U && W.vertexAttribPointer(o, g ? g : 3, W.FLOAT, !1, 0, 0)
        }, rp = function (q, X, v) {
            var c = q.ELEMENT_ARRAY_BUFFER;
            q.bindBuffer(c, X), v && q.bufferData(c, v, q.STATIC_DRAW)
        }, zk = function ($, I, P) {
            if (P != U && I != U) {
                P = Jp(P);
                var u = P.length;
                3 === u ? $.uniform3fv(I, P) : 4 === u ? $.uniform4fv(I, P) : 16 === u ? $.uniformMatrix4fv(I, !1, P) : pf(P) ? $.uniform1i(I, P ? 1 : 0) : 2 === u ? $.uniform2fv(I, P) : $.uniform1f(I, P)
            }
        }, Ib = function (P, k) {
            k != U && k >= 0 && P.enableVertexAttribArray(k)
        }, nj = function (d, J) {
            J != U && J >= 0 && d.disableVertexAttribArray(J)
        }, vk = function (W, K) {
            var h = W.getGL(), Q = W._prg;
            W._7O = W._8O.pop(), K && (zk(h, Q.uMVMatrix, W._7O), W._6O = K, zk(h, Q.uNMatrix, K))
        }, xc = function (s, V) {
            return V || (V = os()), wm(V, s), af(V), ke(V), V
        }, vq = function (t, R) {
            var y = t.getGL(), L = t._prg, Z = t._7O;
            R && (t._8O.push(mn(Z)), wd(Z, Z, R)), zk(y, L.uMVMatrix, Z), zk(y, L.uNMatrix, xc(Z, t._6O))
        }, Zd = function ($, L, a, j, S, E) {
            if (a) {
                if (j) {
                    var y = a.value++, n = [(255 & y >> 24) / 255, (255 & y >> 16) / 255, (255 & y >> 8) / 255, (255 & y) / 255];
                    a[y] = {data: S, part: E}
                } else n = je;
                return zk($, L.uFixPickReverseColor, n), n
            }
        }, yg = function () {
            var p = {
                center: function (k, d, m, u, V) {
                    var T = d[1] / 2, q = {x: -d[0] / 2, y: T, width: d[0], height: d[1]}, r = lm(k, q, m);
                    return [r.x + u, 2 * T - r.y - V, io()]
                }, front: function (I, J, T, F, S) {
                    var E = J[1] / 2, r = {x: -J[0] / 2, y: E, width: J[0], height: J[1]}, p = lm(I, r, T);
                    return [p.x + F, 2 * E - p.y - S, J[2] / 2 + io()]
                }, back: function (d, Z, s, $, h) {
                    var w = Z[0] / 2, S = Z[1] / 2, B = {x: w, y: S, width: Z[0], height: Z[1]}, H = lm(d, B, s);
                    return [2 * w - H.x - $, 2 * S - H.y - h, -Z[2] / 2 - io()]
                }, left: function (Z, C, d, S, k) {
                    var n = C[1] / 2, j = {x: -C[2] / 2, y: n, width: C[2], height: C[1]}, T = lm(Z, j, d);
                    return [-C[0] / 2 - io(), 2 * n - T.y - k, T.x + S]
                }, right: function (h, n, R, H, x) {
                    var r = n[2] / 2, K = n[1] / 2, F = {x: r, y: K, width: n[2], height: n[1]}, u = lm(h, F, R);
                    return [n[0] / 2 + io(), 2 * K - u.y - x, 2 * r - u.x - H]
                }, top: function (h, w, s, Z, x) {
                    var A = {x: -w[0] / 2, y: -w[2] / 2, width: w[0], height: w[2]}, F = lm(h, A, s);
                    return [F.x + Z, w[1] / 2 + io(), F.y + x]
                }, bottom: function (Z, a, P, e, l) {
                    var H = a[2] / 2, n = {x: -a[0] / 2, y: H, width: a[0], height: a[2]}, D = lm(Z, n, P);
                    return [D.x + e, -a[1] / 2 - io(), 2 * H - D.y - l]
                }
            };
            return function (U, k, y, J, q, g) {
                return p[J](U, k, y, q || 0, g || 0)
            }
        }(), rr = function (e, S, L, c, U, t, p, g, k, T) {
            if (U && (S[0] += U[0], S[1] += U[1], S[2] += U[2]), vb(e, L), g) {
                var q = os();
                if (Gp(q, k, T), oc(S, q), vb(e, S), e.auto = g, e.pos = oc([0, 0, 0], e), t) {
                    var V = e.mat2 = os();
                    Gp(V, t, p)
                }
            } else Gp(e, k, T), vb(e, S), c === rk ? lr(e, -a) : c === ks ? lr(e, a) : c === dh ? qd(e, -a) : c === De ? qd(e, a) : c === op && lr(e, h), Gp(e, t, p);
            return e
        }, hs = function (l, B) {
            var H = B.auto, o = B.mat2, x = l.gv;
            if (H) {
                var k, z = os(), J = [0, 0, 0, 0];
                k = "string" == typeof H ? [H.indexOf("x") < 0 ? x._eye[0] : x._center[0], H.indexOf("y") < 0 ? x._eye[1] : x._center[1], H.indexOf("z") < 0 ? x._eye[2] : x._center[2]] : x._eye, xk(J, ik(os(), k, x._center, x._up)), Po(z, yi(J, J), B.pos), o && wd(z, z, o), vq(x, z)
            } else vq(x, B)
        }, Yp = function (v, y, r, K, P) {
            var $ = v.s, s = v.gv, a = s.getGL(), z = s._prg, S = s._buffer, i = s._1O;
            Si(a, nn, i), hs(v, r), mr(a, z, $(y + ".blend"), $(y + ".light"), $(y + ".opacity"), $(y + ".reverse.flip"), $(y + ".reverse.color"), $(y + ".reverse.cull")), zf(a, z, i, P, S.uv, Zg), vg(a, S.vs, K, z.aPosition), vg(a, S.ns, Qj, z.aNormal), rp(a, S.is, Jb), vj(a, 0, Jb.length), fg(a, z, i), No(a, z), vk(s)
        }, tg = function (u, j, M) {
            var C = u.gv, g = u.data, w = u[j] = {
                blend: C.getBodyColor(g) || C.getFaceBlend(g, j),
                light: C.getFaceLight(g, j),
                color: C.getFaceColor(g, j),
                opacity: C.getFaceOpacity(g, j),
                transparent: C.getFaceTransparent(g, j),
                reverseFlip: C.getFaceReverseFlip(g, j),
                reverseColor: C.getFaceReverseColor(g, j),
                reverseCull: C.getFaceReverseCull(g, j),
                texture: C.getFaceImage(g, j),
                discardSelectable: C.getFaceDiscardSelectable(g, j)
            };
            if ("csg" !== j) {
                w.uv = C.getFaceUv(g, j) || M && M[j + "Uv"], w.uvScale = C.getFaceUvScale(g, j) || M && M[j + "UvScale"], w.uvOffset = C.getFaceUvOffset(g, j) || M && M[j + "UvOffset"];
                var S = C.getFaceMat(g, j);
                S && (w.mat = uh(g, S))
            }
            return w
        }, ld = function (d, o, m, b, w) {
            if (b) {
                if (!w(b.transparent))return;
                var H = d.data, G = d.gv, u = G._buffer, J = G.getTexture(b.texture, H);
                zf(o, m, J, b.discardSelectable, u.uv, b.tuv, b.uvOffset, b.uvScale), mr(o, m, b.blend, b.light, b.opacity, b.reverseFlip, b.reverseColor, b.reverseCull), zk(o, m.uDiffuse, b.color), vg(o, u.vs, b.vs, m.aPosition), vg(o, u.ns, b.ns, m.aNormal), ur(o, 0, b.vs.length / 3), No(o, m), fg(o, m, J)
            }
        }, mh = function (M, C, f, v, V, d) {
            var J, N, z, u, O, y, D, x, $, c, X, k = [v - C, V - f], r = M ? M.length : 0;
            for (z = 0; r > z; z++) {
                for (u = 2, J = M[z], O = J[0], y = J[1]; u + 1 < J.length;) {
                    if (D = J[u], x = J[u + 1], N = Xd(C, f, v, V, O, y, D, x, !0)) {
                        $ = [D - O, x - y], c = Rk($), $[0] /= c, $[1] /= c, c = Dn(k, $), c = c > 0 ? d : -d, X = [$[0] * c, $[1] * c];
                        break
                    }
                    O = D, y = x, u += 2
                }
                if (X)break
            }
            if (X)for (v = C + X[0], V = f + X[1], z = 0; r > z; z++)for (u = 2, J = M[z], O = J[0], y = J[1]; u + 1 < J.length;) {
                if (D = J[u], x = J[u + 1], N = Xd(C, f, v, V, O, y, D, x, !0))return [0, 0];
                O = D, y = x, u += 2
            }
            return X ? X : [v - C, V - f]
        }, od = f.graph3d = {}, hg = function (k, p, E) {
            Oh(q + ".graph3d." + k, p, E)
        }, Qg = "~<yfusfw!+!yjsubNQv!>!opjujtpQ`mh!gjeof$!~<fdobutjEfojMb!>!fdobutjEfojMw|*itbEv)gj!ITBE!gfegj$!!gjeof$!~<ttfouihjsCidubCb!>!ttfouihjsCidubCw|*ttfouihjsCidubCv)gj!TTFOUIHJSCIDUBC!gfegj$!!gjeof$!~<eofmCidubCb!>!eofmCidubCw|*eofmCidubCv)gj!EOFMCIDUBC!gfegj$!!gjeof$!~<spmpDidubCb!>!spmpDidubCw|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!~<x{/fmbdTuftggPv!+!wVb!,!zy/fmbdTuftggPv!>!wVw|*fsvuyfUv)gj~!gjeof$!~~<*^j]opjujtpQupqTw!.!sfuofd)f{jmbnspo!>!^j]opjudfsjEupqTw<**1/2!-^j]sfuofDupqTv)5dfw!+!yjsubNxfjWv)4dfw!>!sfuofd!4dfw<**1/2!-^j]opjujtpQupqTv)5dfw!+!yjsubNxfjWv)4dfw!>!^j]opjujtpQupqTw|*1/1!>>!x/^j]spmpDupqTv)gj|!*,,j!<UPQT`YBN!=!j!<1>j!uoj)spg!1!?!UPQT`YBN!gj$!!gjeof$!~~<**1/2!-^j]opjujtpQuojpQv)5dfw!+!yjsubNxfjWv)4dfw!>!^j]opjujtpQuojpQw|*1/1!>>!x/^j]spmpDuojpQv)gj|!*,,j!<UOJPQ`YBN!=!j!<1>j!uoj)spg!1!?!UOJPQ`YBN!gj$!!gjeof$!~~<*opjujtpQsje!.!sfuofd)f{jmbnspo!>!^j]opjudfsjEsjEw<**1/2!-1/1!-1/1!-1/1)5dfw!+!yjsubNxfjWv)4dfw!>!sfuofd!4dfw<**1/2!-^j]opjujtpQsjEv)5dfw!+!yjsubNxfjWv)4dfw!>!opjujtpQsje!4dfw|*1/1!>>!x/^j]spmpDsjEv)gj|!*,,j!<SJE`YBN!=!j!<1>j!uoj)spg!1!?!SJE`YBN!gj$!<*yfusfw)4dfw!>!yfusfWw<**1/2!-mbnspOb)5dfw!+!yjsubNOv)4dfw!>!mbnspOw|*ldjQva!%%!yjGva)gj<*1/2!-opjujtpQb)5dfw!+!yjsubNWNv!>!yfusfw!5dfw|!*ejpw)ojbn!ejpw!gjeof$!<fdobutjEfojMw!ubpmg!hojzsbw<fdobutjEfojMb!ubpmg!fuvcjsuub<itbEv!mppc!nspgjov!ITBE!gfegj$!!gjeof$!<^UPQT`YBN]opjudfsjEupqTw!4dfw!hojzsbw<^UPQT`YBN]opjujtpQupqTw!4dfw!hojzsbw<^UPQT`YBN]sfuofDupqTv!4dfw!nspgjov<^UPQT`YBN]opjujtpQupqTv!4dfw!nspgjov<^UPQT`YBN]spmpDupqTv!5dfw!nspgjov!1!?!UPQT`YBN!gj$!!gjeof$!<^UOJPQ`YBN]opjujtpQuojpQw!4dfw!hojzsbw<^UOJPQ`YBN]opjujtpQuojpQv!4dfw!nspgjov<^UOJPQ`YBN]spmpDuojpQv!5dfw!nspgjov!1!?!UOJPQ`YBN!gj$!!gjeof$!<^SJE`YBN]opjudfsjEsjEw!4dfw!hojzsbw<^SJE`YBN]opjujtpQsjEv!4dfw!nspgjov<^SJE`YBN]spmpDsjEv!5dfw!nspgjov!1!?!SJE`YBN!gj$!!gjeof$!<eofmCidubCw!4dfw!hojzsbw<eofmCidubCb!4dfw!fuvcjsuub<eofmCidubCv!mppc!nspgjov!EOFMCIDUBC!gfegj$!!gjeof$!<ttfouihjsCidubCw!ubpmg!hojzsbw<ttfouihjsCidubCb!ubpmg!fuvcjsuub<ttfouihjsCidubCv!mppc!nspgjov!TTFOUIHJSCIDUBC!gfegj$!!gjeof$!<spmpDidubCw!5dfw!hojzsbw<spmpDidubCb!5dfw!fuvcjsuub<spmpDidubCv!mppc!nspgjov!SPMPDIDUBC!gfegj$!<yfusfWw!4dfw!hojzsbw<mbnspOw!4dfw!hojzsbw<yjGv!mppc!nspgjov<ldjQv!mppc!nspgjov<yjsubNxfjWv!5ubn!nspgjov<yjsubNOv!5ubn!nspgjov<yjsubNQv!5ubn!nspgjov<yjsubNWNv!5ubn!nspgjov<opjujtpQb!4dfw!fuvcjsuub<mbnspOb!4dfw!fuvcjsuub<wVw!3dfw!hojzsbw<wVb!3dfw!fuvcjsuub<fmbdTuftggPv!5dfw!nspgjov<fsvuyfUv!mppc!nspgjov!YJGFSQ^#CBRBEJxTT87hJFI,,bX1XrIwcn3UM{ZeZ,M6HEN6nLxe2Z72s2:3johr6foKrpqwxNKYkdbJ2CN[mBbf[wXU,T0oGuSEd190ohLZkEn8IuCe[OHoWeKz:Sf,VS7xdSLw23W1YJLU:jdv2{hiDbhDzNNEh9tp3xsuEp94Sl4c3wRzqwShMDRhCLRjCDEBOH5BBVRBCFRE4cJTHrTDH1BNgHJN", ss = "~~<eJ!>!spmpDhbsG`mh!gjeof$!~<ttfouihjsCidubCw!>+!chs/eJ!!!|*ttfouihjsCidubCv)gj!TTFOUIHJSCIDUBC!gfegj$!~<ttfouihjsCv!>+!chs/eJ!!!|*1/2!>a!ttfouihjsCv)gj~~<zujdbqPusbQv!>+!b/eJ!!!|*1/2!>a!zujdbqPusbQv)gj~!gjeof$!<*spudbGhpg!-*x/eJ!-chs/spmpDhpGv)5dfw!-eJ)yjn!>!eJ<*iuqfe!-sbGhpGv!-sbfOhpGv)qfutiuppnt!>!spudbGhpg!ubpmg<x/esppDhbsG`mh0{/esppDhbsG`mh!>!iuqfe!ubpmg!HPG!gfegj$!!gjeof$!~~~~<chs/^j]spmpDupqTv!+!udfggFupqt!+!fhobSm!+!*1/1!-*mbnspOm.!-O)upe)ybn!>,!chs/eJ<*1/1!-*^j]uofopqyFupqTv!-udfggFupqt)xpq)ybn!>!udfggFupqt|*^j]fmhoBupqTv!?!udfggFupqt)gj<*mbnspOm!-^j]opjudfsjEupqTw)upe!>!udfggFupqt!ubpmg<*spudfWm)f{jmbnspo!>!mbnspOm!4dfw|*1/1!?!fhobSm)!gj~<*1/2!-*^j]fhobSupqTv!0!*spudfWm)iuhofm))ojn!.!1/2!>!fhobSm|*1/1!?!^j]fhobSupqTv)!gj<1/2!>!fhobSm!ubpmg<^j]opjujtpQupqTw!.!yfusfWw!>!spudfWm!4dfw|*1/1!>>!x/^j]spmpDupqTv)gj|!*,,j!<UPQT`YBN!=!j!<1>j!uoj)spg!1!?!UPQT`YBN!gj$!!gjeof$!~~~<chs/^j]spmpDuojpQv!+!fhobSm!+!*1/1!-**spudfWm)f{jmbnspo.!-O)upe)ybn!>,!chs/eJ|*1/1!?!fhobSm)!gj~<*1/2!-*^j]fhobSuojpQv!0!*spudfWm)iuhofm))ojn!.!1/2!>!fhobSm|*1/1!?!^j]fhobSuojpQv)!gj<1/2!>!fhobSm!ubpmg<^j]opjujtpQuojpQw!.!yfusfWw!>!spudfWm!4dfw|*1/1!>>!x/^j]spmpDuojpQv)gj|!*,,j!<UOJPQ`YBN!=!j!<1>j!uoj)spg!1!?!UOJPQ`YBN!gj$!!gjeof$!~~<chs/^j]spmpDsjEv!+!*1/1!-**^j]opjudfsjEsjEw)f{jmbnspo.!-O)upe)ybn!>,!chs/eJ|*1/1!>>!x/^j]spmpDsjEv)gj|!*,,j!<SJE`YBN!=!j!<1>j!uoj)spg!1!?!SJE`YBN!gj$!~<chs/spmpDuihjmebfIv!+!nsfUusfcnbm!>+!chs/eJ~<*1/2!-fhobSuihjmebfIv0*yfusfWw)iuhofm)ojn!.!1/2!!>+!nsfUusfcnbm|*1/1!?!fhobSuihjmebfIv)gj<*1/1!-6/1!,!6/1!+!*M.!-O)upe)ybn!>!nsfUusfcnbm!ubpmg|*1/1!>>!x/spmpDuihjmebfIv)gj|*uihjMv)gj~!gjeof$!~<spmpDeofmCv!>+!eJ|*eofmCv)gj!ftmf$!~<spmpDeofmCv!>+!eJ|*eofmCv)gj!ftmf~<eofmCidubCw!>+!chs/eJ|*eofmCidubCv)gj!EOFMCIDUBC!gfegj$!~<spmpd!>!eJ|ftmf~<spmpDwv!>!eJ|*fsvuyfUv)gj|!ftmf~<spmpDftsfwfSldjQyjGv!>!eJ|*qjmGftsfwfSva!%%!ldbCtj)gj~<fvsu!>!ldbCtj<O.!>!O|*1/1!=!*O!-F)upe)gj<ftmbg!>!ldbCtj!mppc<F.!>!M!4dfw<*yfusfWw.)f{jmbnspo!>!F!4dfw<*mbnspOw)f{jmbnspo!>!O!4dfw!gjeof$!<ftvggjEv!>!spmpd!ftmf$!~<ftvggjEv!>!spmpd|ftmf~<spmpDidubCw!>!spmpd|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!<spmpd!5dfw|!ftmf~!gjeof$!~~<ftvggjEv!>!eJ|ftmf~<esbdtje|*1/1!>>!x/ftvggjEv)gj|!*!fdobutjEitbEv!?!*!fdobutjEqbHitbEv!-fdobutjEfojMw!)epn!%%!itbEv)!gj!ITBE!gfegj$!!gjeof$!<spmpDftsfwfSldjQyjGv!>!eJ!ftmf$!~<spmpDftsfwfSldjQyjGv!>!eJ|ftmf~<spmpDidubCw!>!eJ|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!|*yjGv)gj<eJ!5dfw|ftmf~!gjeof$!<spmpDftsfwfSldjQyjGv!>!spmpDhbsG`mh!ftmf$!~<spmpDftsfwfSldjQyjGv!>!spmpDhbsG`mh|ftmf~<spmpDidubCw!>!spmpDhbsG`mh|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!|*ldjQv)gj~~~<1/2!>!b/spmpDwv|ftmf~<esbdtje|*5/1!=!b/spmpDwv)gj|ftmf~~<esbdtje|*1/1!>>!b/spmpDwv)gj|*uofsbqtobsUv)gj<*wVw!-sfmqnbTv)E3fsvuyfu!>!spmpDwv|**fmcbudfmfTesbdtjEv!%%!ldjQv)a!%%!fsvuyfUv)gj<spmpDwv!5dfw|!*ejpw)ojbn!ejpw!gjeof$!<fdobutjEfojMw!ubpmg!hojzsbw<fdobutjEqbHitbEv!ubpmg!nspgjov<fdobutjEitbEv!ubpmg!nspgjov<itbEv!mppc!nspgjov!ITBE!gfegj$!!gjeof$!<sbGhpGv!ubpmg!nspgjov<sbfOhpGv!ubpmg!nspgjov<spmpDhpGv!5dfw!nspgjov!HPG!gfegj$!!gjeof$!<^UPQT`YBN]opjudfsjEupqTw!4dfw!hojzsbw<^UPQT`YBN]opjujtpQupqTw!4dfw!hojzsbw<^UPQT`YBN]fhobSupqTv!ubpmg!nspgjov<^UPQT`YBN]fmhoBupqTv!ubpmg!nspgjov<^UPQT`YBN]uofopqyFupqTv!ubpmg!nspgjov<^UPQT`YBN]spmpDupqTv!5dfw!nspgjov!1!?!UPQT`YBN!gj$!!gjeof$!<^UOJPQ`YBN]opjujtpQuojpQw!4dfw!hojzsbw<^UOJPQ`YBN]fhobSuojpQv!ubpmg!nspgjov<^UOJPQ`YBN]spmpDuojpQv!5dfw!nspgjov!1!?!UOJPQ`YBN!gj$!!gjeof$!<^SJE`YBN]opjudfsjEsjEw!4dfw!hojzsbw<^SJE`YBN]spmpDsjEv!5dfw!nspgjov!1!?!SJE`YBN!gj$!!gjeof$!<eofmCidubCw!4dfw!hojzsbw<eofmCidubCv!mppc!nspgjov!EOFMCIDUBC!gfegj$!!gjeof$!<ttfouihjsCidubCw!ubpmg!hojzsbw<ttfouihjsCidubCv!mppc!nspgjov!TTFOUIHJSCIDUBC!gfegj$!!gjeof$!<spmpDidubCw!5dfw!hojzsbw<spmpDidubCv!mppc!nspgjov!SPMPDIDUBC!gfegj$!<spmpDuihjmebfIv!5dfw!nspgjov<fhobSuihjmebfIv!ubpmg!nspgjov<yfusfWw!4dfw!hojzsbw<mbnspOw!4dfw!hojzsbw<ftvggjEv!5dfw!nspgjov<zujdbqPusbQv!ubpmg!nspgjov<ttfouihjsCv!ubpmg!nspgjov<uihjMv!mppc!nspgjov<spmpDeofmCv!5dfw!nspgjov<eofmCv!mppc!nspgjov<sfmqnbTv!E3sfmqnbt!nspgjov<wVw!3dfw!hojzsbw<fsvuyfUv!mppc!nspgjov<spmpDftsfwfSldjQyjGv!5dfw!nspgjov<qjmGftsfwfSv!mppc!nspgjov<ldjQv!mppc!nspgjov<yjGv!mppc!nspgjov<fmcbudfmfTesbdtjEv!mppc!nspgjov<uofsbqtobsUv!mppc!nspgjov!YJGFSQ!gjeof$!!gjeof$!!<ubpmg!qnvjefn!opjtjdfsq!!ftmf$!!<ubpmg!qihji!opjtjdfsq!!IHJI`OPJTJDFSQ`UOFNHBSG`MH!gfegj$!!TF`MH!gfegj$!";
        Se(H, {
            setBatchInfo: function (X, s) {
                md[X] = s
            }, getBatchInfo: function (I) {
                return md[I]
            }
        }, !0);
        var Nb = [1, 1, 1], Ah = [1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0], fl = [-.5, .5, .5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, .5, .5], xi = [.5, .5, -.5, .5, .5, .5, .5, -.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5], br = [.5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, .5, .5, -.5], wp = [.5, -.5, .5, -.5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, .5], qs = [.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5], bd = [-.5, .5, -.5, .5, .5, -.5, .5, -.5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5], Qq = function (K, _) {
            ih(K, _), uo(K, _, "_wireframeModelMap", "_wireframeIndexMap"), uo(K, _, "_polylineModelMap", "_polylineIndexMap")
        }, ih = function (v, t) {
            if (t) {
                var C, $, u = t._id, b = v._33O, m = v._34O, T = m[u];
                if (T) {
                    $ = T.batch, C = b[$];
                    var I = T.begin, j = T.size, F = 3 * I, J = 3 * j, c = 4 * I, S = 4 * j, X = C.vs, q = C.uv, r = C.cs, f = C.bs, K = C.rs, Z = C.ds, n = T.index;
                    if (C.invalidate = !0, delete m[u], Z.splice(n, 1), To(Z)) delete b[$]; else {
                        for (; n < Z.length; n++)T = m[Z[n]._id], T.index--, T.begin -= j;
                        X.splice(F, J), C.ns.splice(F, J), C.ps.splice(c, S), q && q.splice(2 * I, 2 * j), r && r.splice(c, S), f && f.splice(F, J), K && K.splice(I, j)
                    }
                }
            } else v._34O = {}, v._33O = {}
        }, uo = function (d, Y, c, h) {
            if (Y) {
                var S, C, m = Y._id, b = d[c], j = d[h], $ = j[m];
                if ($) {
                    C = $.batch, S = b[C];
                    var t = $.begin, n = $.size, L = 3 * t, B = 3 * n, J = 4 * t, k = 4 * n, W = S.ds, A = $.index;
                    if (S.invalidate = !0, delete j[m], W.splice(A, 1), To(W)) delete b[C]; else {
                        for (; A < W.length; A++)$ = j[W[A]._id], $.index--, $.begin -= n;
                        S.vs.splice(L, B), S.cs.splice(J, k), S.ps.splice(J, k), S.ls && S.ls.splice(t, n)
                    }
                }
            } else d[c] = {}, d[h] = {}
        }, kd = function (w, f, z, I) {
            if (!I)return U;
            var k = f[I];
            if (!k) {
                var j = md[I] || Qk, H = j.image ? [] : U;
                k = f[I] = {
                    vs: [],
                    ns: [],
                    uv: H,
                    cs: H ? U : j.color ? U : [],
                    bs: j.blend ? [] : U,
                    ps: [],
                    rs: j.brightness ? [] : U,
                    ds: []
                }
            }
            return k.invalidate = !0, w[z._id] = {index: k.ds.length, begin: k.vs.length / 3, batch: I}, k.ds.push(z), k
        }, Qm = function (t, I) {
            return I != U && 1 !== I ? [t[0] * I, t[1] * I, t[2] * I, t[3]] : t
        }, kc = function (b, E, Y) {
            var B = b.getBrightness(E), l = Jp(Y.color || "white"), C = l[3] < 1, P = Math.ceil(Y.width) || 1, M = (C ? "T" : "O") + P, i = b._wireframeIndexMap, c = b._wireframeModelMap, $ = c[M];
            $ || ($ = c[M] = {vs: [], cs: [], ps: [], ds: [], T: C, W: P}), $.invalidate = !0;
            var a = $.vs, q = $.cs, f = $.ds, H = i[E._id] = {index: f.length, begin: a.length / 3, batch: M};
            f.push(E), tc(a, uh(E, Y.mat), Y.short ? Qc : $d);
            var N = H.size = a.length / 3 - H.begin;
            ee(q, Qm(l, B), N)
        }, pi = function (a, X, N, c, E, i, Y, z, l) {
            var V = a.getBrightness(X);
            V == U && (V = 1);
            var W = Qm(Jp(c), V), P = W[3] < 1;
            i = Math.ceil(i) || 1;
            var S = (P ? "T" : "O") + i;
            if (Y) {
                var v = Y[0], d = (Y[1] || v) + v;
                S += "-" + v + "-" + d, l && (S += "-" + Nq(l) + "-" + V, l = Qm(Jp(l), V))
            }
            var K = a._polylineIndexMap, B = a._polylineModelMap, f = B[S];
            f || (f = B[S] = {
                vs: [],
                cs: [],
                ps: [],
                ds: [],
                ls: Y ? [] : U,
                T: P,
                W: i
            }, Y && (f.D = v, f.G = d, f.A = l)), f.invalidate = !0;
            var D, C = f.vs, e = f.cs, n = f.ds, H = f.ls, o = K[X._id] = {
                index: n.length,
                begin: C.length / 3,
                batch: S
            };
            n.push(X), lc(C, N);
            var j, T = o.size = C.length / 3 - o.begin, G = N.length, R = 0, h = [];
            if (Y || E)for (D = 0; G > D; D += 6)j = Rk([N[D], N[D + 1], N[D + 2]], [N[D + 3], N[D + 4], N[D + 5]]), h.push(j), R += j;
            if (R && E) {
                var O, s = Qm(Jp(E), V), k = [s[0] - W[0], s[1] - W[1], s[2] - W[2], s[3] - W[3]], g = 0;
                for (D = 0; G > D; D += 6)O = g / R, ee(e, [W[0] + k[0] * O, W[1] + k[1] * O, W[2] + k[2] * O, W[3] + k[3] * O], 1), g += h[D / 6], O = g / R, ee(e, [W[0] + k[0] * O, W[1] + k[1] * O, W[2] + k[2] * O, W[3] + k[3] * O], 1)
            } else ee(e, W, T);
            if (Y)for (g = z || 0, D = 0; G > D; D += 6)H.push(g), g += h[D / 6], H.push(g)
        }, Em = function (T, D, n) {
            if (D)for (var $ = 4 * D.begin, z = n[D.batch].ps, U = 0; U < D.size; U++)z[$++] = T[0], z[$++] = T[1], z[$++] = T[2], z[$++] = T[3]
        }, Hc = function (X, A) {
            var C = A + ["32"], z = X[A], x = X[C];
            z ? x && x.length === z.length ? x.set(z) : X[C] = new Hb(z) : delete X[C]
        }, $l = function (C, u, X, R, V, n, F, e, L) {
            if ($p(X)) X.forEach(function (A) {
                $l(C, u, A, R, V, n, F, e, L)
            }); else if (rd(X)) $l(C, u, mf(R, X), R, V, n, F, e, L); else if (bk(X)) {
                var G, w = ln(X.mat, u, C), y = ln(X.s3, u, C), l = ln(X.t3, u, C), W = ln(X.r3, u, C);
                if ((y || W || l || w) && (G = wn(w, y, W, ln(X.rotationMode, u, C), l), n.push(G)), X.shape3d) $l(C, u, X.shape3d, R, V, n, F, e, X); else {
                    var h = R.s;
                    L = L || Qk;
                    var j = n[0], s = n.length, r = h("shape3d.color", X.color, L.color);
                    if (V || (V = h("shape3d.blend", X.blend, L.blend)), s > 1) {
                        j = mn(j);
                        for (var M = 1; s > M; M++)wd(j, j, n[M])
                    }
                    X.vs && h(Fj, X.visible, L.visible) && bo(j, F, e, X.vs, X.uv, X.is, V, r), X.top_vs && h(fe, X.topVisible, L.topVisible) && bo(j, F, e, X.top_vs, X.top_uv, X.top_is, V, h("shape3d.top.color", X.topColor, L.topColor) || r), X.bottom_vs && h(ts, X.bottomVisible, L.bottomVisible) && bo(j, F, e, X.bottom_vs, X.bottom_uv, X.bottom_is, V, h("shape3d.bottom.color", X.bottomColor, L.bottomColor) || r), X.from_vs && h(Io, X.fromVisible, L.fromVisible) && bo(j, F, e, X.from_vs, X.from_uv, X.from_is, V, h("shape3d.from.color", X.fromColor, L.fromColor) || r), X.to_vs && h(Eo, X.toVisible, L.toVisible) && bo(j, F, e, X.to_vs, X.to_uv, X.to_is, V, h("shape3d.to.color", X.toColor, L.toColor) || r)
                }
                G && n.pop()
            }
        }, bo = function (g, y, s, q, w, T, r, W) {
            var _, l = y.cs, Y = y.uv, d = y.bs;
            if (T) {
                _ = T.length;
                for (var R = 0; _ > R; R++) {
                    var Q = T[R];
                    tc(s, g, [q[3 * Q], q[3 * Q + 1], q[3 * Q + 2]]), Y && lc(Y, [w[2 * Q], w[2 * Q + 1]])
                }
            } else _ = q.length / 3, tc(s, g, q), Y && lc(Y, w);
            l && ee(l, W, _), d && (r ? _h(d, r, _) : lc(d, Nb, _))
        }, Ob = function (g, Y, d, M) {
            var s = [];
            M ? $l(g.gv, g.data, M, g, g.getBodyColor(), [Y], d, s) : (Jc(g, rk, Y, d, s), Jc(g, ks, Y, d, s), Jc(g, Ar, Y, d, s), Jc(g, op, Y, d, s), Jc(g, dh, Y, d, s), Jc(g, De, Y, d, s), Jc(g, "csg", Y, d, s)), s.length && (lc(d.vs, s), lc(d.ns, xq(s)))
        }, Jc = function (T, o, y, x, l) {
            var M = T[o];
            if (M) {
                var i = M.tuv;
                if (i) {
                    var f, A, P, a, Y = M.uvScale, p = M.uvOffset;
                    if (Y)for (f = i.length, A = Y[0], P = Y[1], a = 0; f > a; a += 2)i[a] *= A, i[a + 1] *= P;
                    if (p)for (f = i.length, A = p[0], P = p[1], a = 0; f > a; a += 2)i[a] += A, i[a + 1] += P
                }
                bo(y, x, l, M.vs, i, U, M.blend, M.color)
            }
        }, nm = function (J, i, q, h, G, v, z, R) {
            var H, x = q.cs, l = q.uv, W = q.bs;
            if (J.getFaceVisible(i, v)) {
                var K = J.getFaceMat(i, v);
                if (K && (G = uh(i, K)), tc(z, G, R), x && ee(x, J.getFaceColor(i, v), 6), l) {
                    var N = J.getFaceUv(i, v) || h[v + "Uv"], Z = J.getFaceUvScale(i, v) || h[v + "UvScale"], I = J.getFaceUvOffset(i, v) || h[v + "UvOffset"];
                    N = N ? [N[6], N[7], N[0], N[1], N[2], N[3], N[2], N[3], N[4], N[5], N[6], N[7]] : Ah;
                    var V = N[0], F = N[1], $ = N[2], E = N[3], b = N[4], y = N[5], C = N[6], t = N[7], n = N[8], D = N[9], T = N[10], U = N[11];
                    if (Z) {
                        var c = Z[0], A = Z[1];
                        V *= c, F *= A, $ *= c, E *= A, b *= c, y *= A, C *= c, t *= A, n *= c, D *= A, T *= c, U *= A
                    }
                    if (I) {
                        var d = I[0], O = I[1];
                        V += d, F += O, $ += d, E += O, b += d, y += O, C += d, t += O, n += d, D += O, T += d, U += O
                    }
                    l.push(V, F, $, E, b, y, C, t, n, D, T, U)
                }
                W && (H = J.getBodyColor(i) || J.getFaceBlend(i, v), H ? _h(W, H, 6) : lc(W, Nb, 6))
            }
        }, $b = function (X, d, w, H) {
            var s = X.getGL(), k = X._prg, E = X._buffer;
            if (!Nk(d)) {
                vq(X), _c(s, k);
                for (var P in d) {
                    var N = d[P];
                    if (!(H && !N.T || !H && N.T)) {
                        N.invalidate ? (N.invalidate = !1, Hc(N, "vs"), Hc(N, "cs"), Hc(N, "ls"), Hc(N, "ps")) : w && Hc(N, "ps");
                        var O = N.vs32, T = w ? N.ps32 : N.cs32;
                        hm(s, k, N.W, U, E.vs, O);
                        var A = N.D, v = !X._dashDisabled && A;
                        v && (zk(s, k.uDash, !0), zk(s, k.uDashDistance, A), zk(s, k.uDashGapDistance, N.G), Ib(s, k.aLineDistance), vg(s, E.lineDistance, N.ls32, k.aLineDistance, 1), zk(s, k.uDiffuse, N.A || Rm));
                        var y = !X._batchColorDisabled;
                        y && (zk(s, k.uBatchColor, !0), Ib(s, k.aBatchColor), vg(s, E.batchColor, T, k.aBatchColor, 4)), zf(s), ur(s, 0, O.length / 3, s.LINES), fg(s), y && (zk(s, k.uBatchColor, !1), nj(s, k.aBatchColor)), v && (zk(s, k.uDash, !1), nj(s, k.aLineDistance))
                    }
                }
                $o(s, k)
            }
        }, Vl = function (X, W, x) {
            var I, q, l, u, p, r, V, B, C, K, g, s = X.getGL(), f = X._prg, h = X._buffer, E = X._33O;
            if (!Nk(E)) {
                vq(X);
                for (I in E)if (q = md[I] || Qk, !(x && !q.transparent || !x && q.transparent) && (l = E[I], W || !q.transparentMask)) {
                    var O = x && q.autoSort !== !1 && (X._33Q || l.invalidate);
                    if (l.invalidate ? (l.invalidate = !1, Hc(l, "vs"), Hc(l, "ns"), Hc(l, "cs"), Hc(l, "rs"), Hc(l, "ps"), Hc(l, "bs"), Hc(l, "uv")) : W && Hc(l, "ps"), p = l.vs32, r = W ? l.ps32 : l.cs32, C = l.uv32, V = l.bs32, B = l.rs32, g = p.length / 3, O && (l.is = sg(p, X.getEye())), g) {
                        u = q.light, K = X.getTexture(q.image), mr(s, f, U, q.light, q.opacity, q.reverseFlip, q.reverseColor, q.reverseCull), r ? X._batchColorDisabled || (zk(s, f.uBatchColor, !0), Ib(s, f.aBatchColor), vg(s, h.batchColor, r, f.aBatchColor, 4)) : zk(s, f.uDiffuse, q.color);
                        var L = V && !X._batchBlendDisabled;
                        L && (zk(s, f.uBatchBlend, !0), Ib(s, f.aBatchBlend), vg(s, h.batchBlend, V, f.aBatchBlend));
                        var j = B && !X._batchBrightnessDisabled;
                        j && (zk(s, f.uBatchBrightness, !0), Ib(s, f.aBatchBrightness), vg(s, h.batchBrightness, B, f.aBatchBrightness, 1)), C ? zf(s, f, K, q.discardSelectable, h.uv, C, q.uvOffset, q.uvScale) : zf(s), vg(s, h.vs, p, f.aPosition), vg(s, h.ns, l.ns32, f.aNormal), l.is ? (rp(s, h.is, l.is), vj(s, 0, g)) : ur(s, 0, g), C ? fg(s, f, K) : fg(s), r && !X._batchColorDisabled && (zk(s, f.uBatchColor, !1), nj(s, f.aBatchColor)), L && (zk(s, f.uBatchBlend, !1), nj(s, f.aBatchBlend)), j && (zk(s, f.uBatchBrightness, !1), nj(s, f.aBatchBrightness)), No(s, f)
                    }
                }
            }
        }, sg = function (c, t) {
            for (var L = c.length / 3, f = new Array(L), z = L / 3, j = new Array(z), H = 0; z > H; H++)j[H] = H;
            j.sort(function (e, n) {
                var K = 9 * e, O = [(c[K] + c[K + 3] + 2 * c[K + 6]) / 4, (c[K + 1] + c[K + 4] + 2 * c[K + 7]) / 4, (c[K + 2] + c[K + 5] + 2 * c[K + 8]) / 4];
                K = 9 * n;
                var v = [(c[K] + c[K + 3] + 2 * c[K + 6]) / 4, (c[K + 1] + c[K + 4] + 2 * c[K + 7]) / 4, (c[K + 2] + c[K + 5] + 2 * c[K + 8]) / 4], Z = Rk(t, O) - Rk(t, v);
                return Z > 0 ? -1 : 0 > Z ? 1 : 0
            });
            for (var H = 0; z > H; H++) {
                var a = 3 * H, T = 3 * j[H];
                f[a] = T, f[a + 1] = T + 1, f[a + 2] = T + 2
            }
            return new lb(f)
        }, Zg = new Hb([0, 0, 0, 1, 1, 1, 1, 0]), Qj = new Hb([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]), Jb = new lb([0, 1, 2, 2, 3, 0]), tm = new Hb([-.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, .5, .5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5, .5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, .5, .5, .5, .5, .5, -.5, -.5, -.5, .5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, .5]), Ei = new lb([0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23]), jl = new Hb([0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0]), mb = new Hb([0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0]), fn = xq(tm, Ei), $d = (new Hb([-.5, .5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, -.5, -.5, .5, .5, -.5, -.5, -.5, -.5, -.5, .5, -.5]), new lb([0, 1, 2, 3, 0, 7, 5, 4, 6, 7, 5, 3, 2, 4, 6, 1]), [-.5, .5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, .5, .5, -.5, .5, .5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, -.5, .5, .5, .5, .5, .5, -.5, .5, -.5, .5, .5, -.5, -.5, -.5, .5, .5, -.5, .5, -.5, -.5, -.5, .5, -.5, -.5, -.5]), Qc = [-.5, .5, .5, -.4, .5, .5, -.5, .5, .5, -.5, .4, .5, -.5, .5, .5, -.5, .5, .4, .5, .5, .5, .4, .5, .5, .5, .5, .5, .5, .4, .5, .5, .5, .5, .5, .5, .4, -.5, -.5, .5, -.4, -.5, .5, -.5, -.5, .5, -.5, -.4, .5, -.5, -.5, .5, -.5, -.5, .4, .5, -.5, .5, .4, -.5, .5, .5, -.5, .5, .5, -.4, .5, .5, -.5, .5, .5, -.5, .4, -.5, .5, -.5, -.4, .5, -.5, -.5, .5, -.5, -.5, .4, -.5, -.5, .5, -.5, -.5, .5, -.4, .5, .5, -.5, .4, .5, -.5, .5, .5, -.5, .5, .4, -.5, .5, .5, -.5, .5, .5, -.4, -.5, -.5, -.5, -.4, -.5, -.5, -.5, -.5, -.5, -.5, -.4, -.5, -.5, -.5, -.5, -.5, -.5, -.4, .5, -.5, -.5, .4, -.5, -.5, .5, -.5, -.5, .5, -.4, -.5, .5, -.5, -.5, .5, -.5, -.4], nc = function (L, j, F, k, i, o) {
            o = o || 16, L = L || 16, j = j || 0, F = F || L;
            var w, r, f, s, q, Y, D, l, G = .5, g = [], S = [], I = $ / L, U = h / o;
            for (w = 0; o > w; w++)for (q = w + 1, s = w * U, l = q * U, r = j; F > r; r++)Y = r + 1, f = r * I, D = Y * I, g.push(G * v(s) * M(f), G * M(s), -G * v(s) * v(f), G * v(l) * M(D), G * M(l), -G * v(l) * v(D), G * v(s) * M(D), G * M(s), -G * v(s) * v(D), G * v(s) * M(f), G * M(s), -G * v(s) * v(f), G * v(l) * M(f), G * M(l), -G * v(l) * v(f), G * v(l) * M(D), G * M(l), -G * v(l) * v(D)), S.push(r / L, w / o, Y / L, q / o, Y / L, w / o, r / L, w / o, r / L, q / o, Y / L, q / o);
            if (k) {
                var O = [], c = [];
                for (f = j * I, w = 0; o > w; w++)q = w + 1, s = w * U, l = q * U, O.push(0, 0, 0, G * v(l) * M(f), G * M(l), -G * v(l) * v(f), G * v(s) * M(f), G * M(s), -G * v(s) * v(f)), c.push(0, .5, j / L, q / o, j / L, w / o)
            }
            if (i) {
                var d = [], b = [];
                for (f = F * I, w = 0; o > w; w++)q = w + 1, s = w * U, l = q * U, d.push(0, 0, 0, G * v(s) * M(f), G * M(s), -G * v(s) * v(f), G * v(l) * M(f), G * M(l), -G * v(l) * v(f)), b.push(1, .5, F / L, w / o, F / L, q / o)
            }
            return {vs: g, uv: S, from_vs: O, from_uv: c, to_vs: d, to_uv: b}
        }, id = function (E, H, A) {
            E = E || .17, H = H || 12, A = A || 18, 0 > E ? E = 0 : E > .25 && (E = .25);
            var Z, Q, j, t, i, _, w, d = .5, y = [], c = [], q = [], D = $ / A, z = $ / H, k = d - E;
            for (Q = 0; H >= Q; Q++)for (t = -h + Q * z, _ = M(t), i = v(t), Z = 0; A >= Z; Z++)j = Z * D, w = k + E * _, y.push(M(j) * w, i * E, -v(j) * w), c.push(Z / A, 1 - Q / H);
            for (Q = 0; H > Q; Q++) {
                var r = Q * (A + 1), N = (Q + 1) * (A + 1);
                for (Z = 0; A > Z; Z++)q.push(r + Z, N + Z + 1, N + Z, r + Z, r + Z + 1, N + Z + 1)
            }
            return {vs: y, uv: c, is: q}
        }, Bp = function (p, V, C, u, w, d, k) {
            k = k || 12, p = p || 18, V = V || 0, C = C || p, d = d || .17, 0 > d ? d = 0 : d > .25 && (d = .25);
            var A, o, D, i, N, U, Z, J, a, f, B = .5, S = [], Y = [], g = $ / p, r = $ / k, y = B - d;
            for (D = 0; k > D; D++)for (i = D + 1, Z = -h + D * r, J = -h + i * r, A = V; C > A; A++)o = A + 1, N = A * g, U = o * g, a = y + d * M(Z), f = y + d * M(J), S.push(M(N) * a, v(Z) * d, -v(N) * a, M(U) * a, v(Z) * d, -v(U) * a, M(U) * f, v(J) * d, -v(U) * f, M(N) * a, v(Z) * d, -v(N) * a, M(U) * f, v(J) * d, -v(U) * f, M(N) * f, v(J) * d, -v(N) * f), Y.push(A / p, 1 - D / k, o / p, 1 - D / k, o / p, 1 - i / k, A / p, 1 - D / k, o / p, 1 - i / k, A / p, 1 - i / k);
            if (u) {
                var j = [], H = [];
                for (D = 0; k > D; D++)i = D + 1, Z = -h + D * r, J = -h + i * r, N = V * g, a = y + d * M(Z), f = y + d * M(J), j.push(M(N) * a, v(Z) * d, -v(N) * a, M(N) * f, v(J) * d, -v(N) * f, M(N) * y, 0, -v(N) * y), H.push(.5 + .5 * M(Z), .5 - .5 * v(Z), .5 + .5 * M(J), .5 - .5 * v(J), .5, .5)
            }
            if (w) {
                var s = [], X = [];
                for (D = 0; k > D; D++)i = D + 1, Z = -h + D * r, J = -h + i * r, N = C * g, a = y + d * M(Z), f = y + d * M(J), s.push(M(N) * a, v(Z) * d, -v(N) * a, M(N) * y, 0, -v(N) * y, M(N) * f, v(J) * d, -v(N) * f), X.push(.5 - .5 * M(Z), .5 - .5 * v(Z), .5, .5, .5 - .5 * M(J), .5 - .5 * v(J))
            }
            return {vs: S, uv: Y, from_vs: j, from_uv: H, to_vs: s, to_uv: X}
        }, Gg = function (p, r) {
            for (var E, C, W, F = .5, X = 16, O = [], t = [], f = [], A = $ / X, b = 0; X >= b; b++)E = b * A, C = M(E) * F, W = v(E) * F, O.push(C, -F, W, C, F, W), t.push(1 - b / X, 1, 1 - b / X, 0);
            for (b = 0; X > b; b++)f.push(2 * b, 2 * b + 1, 2 * b + 3, 2 * b, 2 * b + 3, 2 * b + 2);
            if (r) {
                var I = [], D = [], u = [];
                for (I.push(0, -F, 0), D.push(.5, .5), b = 0; X >= b; b++)E = b * A, C = M(E), W = v(E), I.push(C * F, -F, -W * F), D.push(.5 + .5 * C, .5 + .5 * W);
                for (b = 0; X > b; b++)u.push(0, b + 2, b + 1)
            }
            if (p) {
                var G = [], c = [], i = [];
                for (G.push(0, F, 0), c.push(.5, .5), b = 0; X >= b; b++)E = b * A, C = M(E), W = v(E), G.push(C * F, F, -W * F), c.push(.5 + .5 * C, .5 - .5 * W);
                for (b = 0; X > b; b++)i.push(0, b + 1, b + 2)
            }
            return {vs: O, uv: t, is: f, bottom_vs: I, bottom_uv: D, bottom_is: u, top_vs: G, top_uv: c, top_is: i}
        }, di = function (C, D, n, s, J, x, U) {
            C = C || 12, D = D || 0, n = n || C;
            for (var Q, q, H, c, e, g, f, z, W = .5, S = [], j = [], d = $ / C, l = D; n > l; l++)Q = l + 1, q = l * d, H = Q * d, c = M(q) * W, e = v(q) * W, g = M(H) * W, f = v(H) * W, S.push(c, -W, -e, g, -W, -f, c, W, -e, g, -W, -f, g, W, -f, c, W, -e), j.push(l / C, 1, Q / C, 1, l / C, 0, Q / C, 1, Q / C, 0, l / C, 0);
            if (U) {
                var I = [], A = [];
                for (l = D; n > l; l++)q = d * l, H = d * (l + 1), c = M(q), e = v(q), g = M(H), f = v(H), I.push(c * W, -W, -e * W, 0, -W, 0, g * W, -W, -f * W), A.push(.5 + .5 * c, .5 + .5 * e, .5, .5, .5 + .5 * g, .5 + .5 * f)
            }
            if (x) {
                var E = [], K = [];
                for (l = D; n > l; l++)q = d * l, H = d * (l + 1), c = M(q), e = v(q), g = M(H), f = v(H), E.push(c * W, W, -e * W, g * W, W, -f * W, 0, W, 0), K.push(.5 + .5 * c, .5 - .5 * e, .5 + .5 * g, .5 - .5 * f, .5, .5)
            }
            if (s) {
                var L = [], w = [];
                q = d * D, c = M(q) * W, e = v(q) * W, z = D / C, L.push(0, W, 0, 0, -W, 0, c, -W, -e, c, -W, -e, c, W, -e, 0, W, 0), w.push(0, 0, 0, 1, z, 1, z, 1, z, 0, 0, 0)
            }
            if (J) {
                var F = [], R = [];
                q = d * n, c = M(q) * W, e = v(q) * W, z = n / C, F.push(0, -W, 0, 0, W, 0, c, W, -e, c, W, -e, c, -W, -e, 0, -W, 0), R.push(1, 1, 1, 0, z, 0, z, 0, z, 1, 1, 1)
            }
            return {
                vs: S,
                uv: j,
                bottom_vs: I,
                bottom_uv: A,
                top_vs: E,
                top_uv: K,
                from_vs: L,
                from_uv: w,
                to_vs: F,
                to_uv: R
            }
        }, Fe = function (B, V, S, T, w) {
            V = V || 18, S = S || 0, T = T == U ? $ : T, w = w == U ? .5 : w;
            for (var r, x, D, W, R, b, o = [0, .5, .75, .875, .9375], F = [], c = [], z = [], H = T / V, Q = 0; Q < o.length; Q++) {
                var p = 0 === Q % 2 ? 0 : .5;
                for (r = 0; V >= r; r++)x = (r + p) * H + S, D = 1 - o[Q], F.push(M(x) * w * D, -w + 2 * o[Q] * w, -v(x) * w * D), c.push((r + p) / V, D)
            }
            for (Q = 0; Q < o.length - 1; Q++) {
                var k = Q * (V + 1), X = (Q + 1) * (V + 1);
                for (r = 0; V > r; r++)z.push(k + r, X + r + 1, X + r, k + r, k + r + 1, X + r + 1)
            }
            for (b = F.length / 3 - (V + 1), r = 0; V > r; r++)F.push(0, w, 0), c.push((r + .5) / V, 0);
            for (r = 0; V > r; r++)z.push(b + r, b + r + 1, b + (V + 1) + r);
            if (B) {
                var L = [], O = [], C = [];
                for (L.push(0, -w, 0), O.push(.5, .5), r = 0; V >= r; r++)x = r * H + S, W = M(x), R = v(x), L.push(W * w, -w, -R * w), O.push(.5 + .5 * W, .5 + .5 * R);
                for (r = 0; V > r; r++)C.push(0, r + 2, r + 1)
            }
            return {vs: F, uv: c, is: z, bottom_vs: L, bottom_uv: O, bottom_is: C}
        }, rj = function (j, y, T, Z, H, A) {
            j = j || 16, y = y || 0, T = T || j;
            for (var G = .5, Q = [], K = [], c = $ / j, U = y; T > U; U++) {
                var O = U + 1, E = c * U, R = c * O;
                Q.push(M(E) * G, -G, -v(E) * G, M(R) * G, -G, -v(R) * G, 0, G, 0), K.push(U / j, 1, O / j, 1, (U + O) / 2 / j, 0)
            }
            if (A) {
                var L = [], i = [];
                for (U = y; T > U; U++) {
                    E = c * U, R = c * (U + 1);
                    var g = M(E), a = v(E), q = M(R), w = v(R);
                    L.push(g * G, -G, -a * G, 0, -G, 0, q * G, -G, -w * G), i.push(.5 + .5 * g, .5 + .5 * a, .5, .5, .5 + .5 * q, .5 + .5 * w)
                }
            }
            if (Z) {
                var u = [], z = [];
                E = c * y, u.push(0, G, 0, 0, -G, 0, M(E) * G, -G, -v(E) * G), z.push(0, 0, 0, 1, y / j, 1)
            }
            if (H) {
                var m = [], I = [];
                E = c * T, m.push(0, -G, 0, 0, G, 0, M(E) * G, -G, -v(E) * G), I.push(1, 1, 1, 0, T / j, 1)
            }
            return {vs: Q, uv: K, bottom_vs: L, bottom_uv: i, from_vs: u, from_uv: z, to_vs: m, to_uv: I}
        }, yp = function (d, N, f, a, H, k, h, P) {
            for (var n = [], q = 0; q < d.length - 1; q += 2)n.push({x: d[q], y: d[q + 1]});
            return fp(n, N, f, a, H, k, h, P, !1)
        }, Xl = {
            roundRect: function (k, e) {
                return yp([.5, .4, .5, .442, .471, .471, .442, .5, .4, .5, -.4, .5, -.442, .5, -.471, .471, -.5, .442, -.5, .4, -.5, -.4, -.5, -.442, -.471, -.471, -.442, -.5, -.4, -.5, .4, -.5, .442, -.5, .471, -.471, .5, -.442, .5, -.4, .5, .4], [1, 3, 3, 2, 3, 3, 2, 3, 3, 2, 3, 3, 2], k, e, 3)
            }, star: function (L, C) {
                return yp([.193, .079, .333, .5, 0, .233, -.333, .5, -.194, .079, -.5, -.167, -.112, -.167, 0, -.5, .111, -.167, .5, -.167], [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5], L, C)
            }, rect: function (W, G) {
                return yp([.5, -.5, .5, .5, -.5, .5, -.5, -.5], [1, 2, 2, 2, 5], W, G)
            }, triangle: function (I, Q) {
                return yp([0, -.5, .5, .5, -.5, .5], [1, 2, 2, 5], I, Q)
            }, rightTriangle: function (B, f) {
                return yp([.5, .5, -.5, .5, -.5, -.5], [1, 2, 2, 5], B, f)
            }, parallelogram: function (b, P) {
                return yp([.5, -.5, .25, .5, -.5, .5, -.25, -.5], [1, 2, 2, 2, 5], b, P)
            }, trapezoid: function (v, o) {
                return yp([.25, -.5, .5, .5, -.5, .5, -.25, -.5], [1, 2, 2, 2, 5], v, o)
            }
        }, ac = {sphere: 1, cylinder: 1, cone: 1, torus: 1}, cn = {
            torus: 1,
            sphere: 1
        }, Mh = Se(Nh(Xl), {cylinder: 1}), Vi = Se(Nh(Xl), {cylinder: 1, cone: 1}), zb = function (r, c, U) {
            var e, t = ln(r.mat, U, c), J = ln(r.s3, U, c), O = ln(r.t3, U, c), P = ln(r.r3, U, c);
            return (J || P || O || t) && (e = mn(c._6O), vq(c, wn(t, J, P, ln(r.rotationMode, U, c), O))), e
        }, Lm = function (t, h, i, P, T, j, $) {
            if ($p(i)) i.forEach(function (I) {
                Lm(t, h, I, P, T, j, $)
            }); else if (rd(i)) Lm(t, h, mf(P, i), P, T, j, $); else if (bk(i))if (i.shape3d) {
                var n = zb(i, t, h);
                Lm(t, h, i.shape3d, P, T, j, i), n && vk(t, n)
            } else Wp(t, h, i, P.s, T, j, $)
        }, Wp = function (u, z, B, y, Q, t, V) {
            if (V = V || Qk, !t || t(y("shape3d.transparent", B.transparent, V.transparent))) {
                var j = zb(B, u, z);
                um(B);
                var T = u._26I, M = u._prg, F = u._buffer, v = y("shape3d.color", B.color, V.color);
                Q || (Q = y("shape3d.blend", B.blend, V.blend)), mr(T, M, Q, y("shape3d.light", B.light, V.light), y("shape3d.opacity", B.opacity, V.opacity), y("shape3d.reverse.flip", B.reverseFlip, V.reverseFlip), y("shape3d.reverse.color", B.reverseColor, V.reverseColor), y("shape3d.reverse.cull", B.reverseCull, V.reverseCull)), B.vs && y(Fj, B.visible, V.visible) && Xf(T, M, F, v, u.getTexture(y("shape3d.image", B.image, V.image), z), y("shape3d.discard.selectable", B.discardSelectable, V.discardSelectable), B.vs, B.uv, B.ns, B.is, y("shape3d.uv.offset", B.uvOffset, V.uvOffset), y("shape3d.uv.scale", B.uvScale, V.uvScale)), B.top_vs && y(fe, B.topVisible, V.topVisible) && Xf(T, M, F, y("shape3d.top.color", B.topColor, V.topColor) || v, u.getTexture(y("shape3d.top.image", B.topImage, V.topImage), z), y("shape3d.top.discard.selectable", B.topDiscardSelectable, V.topDiscardSelectable), B.top_vs, B.top_uv, B.top_ns, B.top_is, y("shape3d.top.uv.offset", B.topUvOffset, V.topUvOffset), y("shape3d.top.uv.scale", B.topUvScale, V.topUvScale)), B.bottom_vs && y(ts, B.bottomVisible, V.bottomVisible) && Xf(T, M, F, y("shape3d.bottom.color", B.bottomColor, V.bottomColor) || v, u.getTexture(y("shape3d.bottom.image", B.bottomImage, V.bottomImage), z), y("shape3d.bottom.discard.selectable", B.bottomDiscardSelectable, V.bottomDiscardSelectable), B.bottom_vs, B.bottom_uv, B.bottom_ns, B.bottom_is, y("shape3d.bottom.uv.offset", B.bottomUvOffset, V.bottomUvOffset), y("shape3d.bottom.uv.scale", B.bottomUvScale, V.bottomUvScale)), B.from_vs && y(Io, B.fromVisible, V.fromVisible) && Xf(T, M, F, y("shape3d.from.color", B.fromColor, V.fromColor) || v, u.getTexture(y("shape3d.from.image", B.fromImage, V.fromImage), z), y("shape3d.from.discard.selectable", B.fromDiscardSelectable, V.fromDiscardSelectable), B.from_vs, B.from_uv, B.from_ns, B.from_is, y("shape3d.from.uv.offset", B.fromUvOffset, V.fromUvOffset), y("shape3d.from.uv.scale", B.fromUvScale, V.fromUvScale)), B.to_vs && y(Eo, B.toVisible, V.toVisible) && Xf(T, M, F, y("shape3d.to.color", B.toColor, V.toColor) || v, u.getTexture(y("shape3d.to.image", B.toImage, V.toImage), z), y("shape3d.to.discard.selectable", B.toDiscardSelectable, V.toDiscardSelectable), B.to_vs, B.to_uv, B.to_ns, B.to_is, y("shape3d.to.uv.offset", B.toUvOffset, V.toUvOffset), y("shape3d.to.uv.scale", B.toUvScale, V.toUvScale)), No(T, M), j && vk(u, j)
            }
        }, Xf = function (P, z, t, y, M, R, X, w, O, K, j, r) {
            X && (zk(P, z.uDiffuse, y), w ? zf(P, z, M, R, t.uv, w, j, r) : zf(P), vg(P, t.vs, X, z.aPosition), vg(P, t.ns, O, z.aNormal), K ? (rp(P, t.is, K), vj(P, 0, K.length)) : ur(P, 0, X.length / 3), w ? fg(P, z, M) : fg(P))
        }, mf = function (Y, l) {
            var s = Y.s;
            if (l || (l = s(Gq)), !l)return U;
            if (bk(l))return l;
            var m = gd[l];
            if (m)return m;
            if ("text" === l) {
                var _ = {
                    amount: s("shape3d.text.amount"),
                    size: s("shape3d.text.size"),
                    font: s("shape3d.text.font"),
                    style: s("shape3d.text.style"),
                    weight: s("shape3d.text.weight"),
                    fill: s("shape3d.text.fill"),
                    curveSegments: s("shape3d.text.curveSegments"),
                    spacing: s("shape3d.text.spacing")
                }, k = Y.gv.getShape3dText(Y.data), A = k;
                for (var w in _)A += "_" + (_[w] === K ? "U" : _[w]);
                return Y._cachedTextKey === A ? Y._cachedTextGeometry : (Y._cachedTextKey = A, Y._cachedTextGeometry = H.createTextGeometry(k, _))
            }
            var w = l;
            if (ac[l]) {
                var T = s("shape3d.side"), e = s("shape3d.side.from"), x = s("shape3d.side.to"), W = s(Io), I = s(Eo);
                3 > T ? (T = 0, e = 0, x = 0, W = !1, I = !1) : ((e == U || 0 > e) && (e = 0), (x == U || x > T) && (x = T), 0 === e && x === T && (W = !1, I = !1)), w += "-" + T + "-" + e + "-" + x + "-" + W + "-" + I
            }
            if (Mh[l]) {
                var o = s(fe);
                w += "-" + o
            }
            if (Vi[l]) {
                var v = s(ts);
                w += "-" + v
            }
            if ("torus" === l) {
                var G = s("shape3d.torus.radius");
                0 > G ? G = 0 : G > .25 && (G = .25), w += "-" + G
            }
            if (cn[l]) {
                var E = s(nf);
                w += "-" + E
            }
            return m = gi[w], m || ("box" === l ? m = H.createBoxModel() : Xl[l] ? m = Xl[l](o, v) : "sphere" === l ? m = H.createSphereModel(T, e, x, W, I, E) : l === sk ? m = H.createCylinderModel(T, e, x, W, I, o, v) : "cone" === l ? m = H.createConeModel(T, e, x, W, I, v) : "torus" === l && (m = H.createTorusModel(T, e, x, W, I, G, E)), gi[w] = m), m
        }, um = function () {
            var P = ["vs", "ns", "uv", "top_vs", "top_ns", "top_uv", "bottom_vs", "bottom_ns", "bottom_uv", "from_vs", "from_ns", "from_uv", "to_vs", "to_ns", "to_uv", "er", "al"], v = ["is", "top_is", "bottom_is", "from_is", "to_is"];
            return E = fk(Qg.substr(Qg.indexOf("^#") + 2)), Li(H[Tf(hk + P[15] + "n" + P[16])]()) && ls() ? function (T) {
                    T && !T._complete_ && (T._complete_ = !0, T.vs && To(T.ns) && (T.ns = xq(T.vs, T.is)), T.top_vs && To(T.top_ns) && (T.top_ns = xq(T.top_vs, T.top_is)), T.bottom_vs && To(T.bottom_ns) && (T.bottom_ns = xq(T.bottom_vs, T.bottom_is)), T.from_vs && To(T.from_ns) && (T.from_ns = xq(T.from_vs, T.from_is)), T.to_vs && To(T.to_ns) && (T.to_ns = xq(T.to_vs, T.to_is)), P.forEach(function (V) {
                        var u = T[V];
                        $p(u) && (T[V] = new Hb(u))
                    }), v.forEach(function (z) {
                        var s = T[z];
                        $p(s) && (T[z] = new lb(s))
                    }))
                } : void 0
        }(), gn = function (I, u) {
            var w = I[u];
            $p(w) && (I[u] = new Hb(w))
        };
        Se(Bb, {
            _25Q: function (R) {
                R._16O = function (e, X, u, U, P, G, d, $, m) {
                    var W = this.info;
                    if (W) {
                        var B, Q, N, i, r, t, H = os();
                        if (Bg[X] ? (B = W.p3, Q = W.c1, N = W.c2) : Lf[X] ? (Q = W.s1 || W.c1, N = W.s2 || W.c2) : (Q = W.t1 || W.c1, N = W.t2 || W.c2), B) t = yg(X, Np, u, U, $, m); else {
                            var K = pj(N, Q), L = Rk(Q, N);
                            i = [0, -w(K[2], K[0]), p(K[1] / L)], r = "zyx", B = [(Q[0] + N[0]) / 2, (Q[1] + N[1]) / 2, (Q[2] + N[2]) / 2], t = yg(X, [L, 0, 0], u, U, $, m)
                        }
                        return rr(H, t, B, U, P, G, d, e, i, r)
                    }
                    return Vp
                }, R._80o = function (t, Y, v) {
                    var i = this, K = i.shapeModel;
                    if (K) {
                        var l = i.gv;
                        vq(l), Lm(l, i.data, K, i, i.getBodyColor(), v)
                    }
                }, R.createLineModel = function (d, $, b, m, X) {
                    for (var S = this, h = S.s, l = dd(d, $, h(nf)), c = [], r = 0; r < l.length; r++) {
                        var N = l[r], L = N.length;
                        if (L > 1) {
                            var n = N[0];
                            c.push(n.x, n.y, n.z);
                            for (var k = 1; L - 1 > k; k++)n = N[k], c.push(n.x, n.y, n.z), c.push(n.x, n.y, n.z);
                            n = N[L - 1], c.push(n.x, n.y, n.z)
                        }
                    }
                    var v, Y, D, G = h(m + ".color"), W = h(X), w = 0;
                    return W && (Y = h(X + ".color"), v = h(X + ".pattern"), w = h(X + ".offset"), D = G), pi(S.gv, S.data, c, Y || G, D ? U : h(m + ".gradient.color"), b, v || h(m + ".pattern"), w, D), l
                }, R.createTubeModel = function (e, $, Q, u) {
                    for (var F = this, D = F.s, N = D("shape3d.side") || Pd, Z = D("shape3d.start.angle"), I = D(fe) ? D("shape3d.top.cap") : U, C = D(ts) ? D("shape3d.bottom.cap") : U, E = "flat" === I, v = "flat" === C, q = E && (u ? u.uv : D("shape3d.top.image")), y = v && (u ? u.uv : D("shape3d.bottom.image")), c = u ? u.uv : D("shape3d.image"), V = {
                        vs: [],
                        uv: c ? [] : U,
                        top_vs: E ? [] : U,
                        top_uv: q ? [] : U,
                        bottom_vs: v ? [] : U,
                        bottom_uv: y ? [] : U
                    }, h = dd(e, $, D(nf), Q), T = 0, w = h.length; w > T; T++)ui(V, h[T], D(Df), Q, N, Z, I, C);
                    if (u) {
                        var b = [];
                        $l(F.gv, F.data, V, F, F.getBodyColor(), [], u, b), b.length && (lc(u.vs, b), lc(u.ns, xq(b)))
                    } else F.shapeModel = V;
                    return h
                }, R.getCache = function () {
                    var z = this.info;
                    if (z) {
                        var G = z.list;
                        if (G) {
                            var T = z.cache;
                            return T || (T = z.cache = Vd(G)), T
                        }
                    }
                    return U
                }
            }
        });
        var Yg = function (Z, b) {
            for (var O, r = 0, s = Z.length, R = 0, h = s - 1; h >= R;)if (r = d(R + (h - R) / 2), O = Z[r].length - b, 0 > O) R = r + 1; else {
                if (!(O > 0)) {
                    h = r;
                    break
                }
                h = r - 1
            }
            r = h;
            var I = Z[r], j = I.point;
            return r === s - 1 || I.length === b || (j = (new Am).subVectors(Z[r + 1].point, j).normalize().multiplyScalar(b - I.length).add(j)), {
                point: j,
                tangent: I.tangent
            }
        }, Vd = function (W) {
            for (var G, d, c = [], o = 0, U = 0; U < W.length; U++) {
                for (var V = W[U], z = 0; z < V.length; z++) {
                    G = V[z], d && (o += d.distanceTo(G));
                    var v = new Am, i = V[z + 1];
                    i ? v.subVectors(i, G) : d ? v.subVectors(G, d) : v.x = 1, v.normalize(), c.push({
                        point: G,
                        length: o,
                        tangent: v
                    }), d = G
                }
                d = null
            }
            return c
        }, dd = function (H, o, q, T) {
            q = q || Fp;
            for (var Z = [], z = 0, u = H.size(); u > z; z++) {
                var V = H.get(z);
                Z.push(new Am(V.x, V.e || 0, V.y))
            }
            tq(o) && (o = o._as);
            for (var r, F, M, e, W, h = [], p = 0, I = 0, y = o ? o.length : u; y > I; I++)if (W = o ? o[I] : 0 === I ? 1 : 2, 1 === W) h.push(M = []), M.push(Z[p++]); else if (2 === W || 5 === W)if (e = 2 === W ? Z[p++] : M[0], T) {
                var j = o ? o[I + 1] : y > I + 1 ? 2 : U;
                if (2 === j || 5 === j) {
                    var m = M[M.length - 1], i = 2 === j ? Z[p] : M[0], Y = (new Am).subVectors(m, e), X = (new Am).subVectors(i, e), g = Y.length(), C = X.length();
                    if (T > g / 2 && T > C / 2) M.push(e); else for (Y.multiplyScalar(O(T, g / 2) / g).add(e), X.multiplyScalar(O(T, C / 2) / C).add(e), r = new lh(Y, e, X).getPoints(q), F = 0; q >= F; F++)M.push(r[F])
                } else M.push(e)
            } else M.push(e); else if (3 === W)for (r = new lh(M[M.length - 1], Z[p++], Z[p++]).getPoints(q), F = 1; q >= F; F++)M.push(r[F]); else if (4 === W)for (r = new Jf(M[M.length - 1], Z[p++], Z[p++], Z[p++]).getPoints(q), F = 1; q >= F; F++)M.push(r[F]);
            return h
        }, Zb = function (q) {
            for (var Y, D, b = new Am, Q = [], m = [], T = [], G = 0, f = q.length; f > G; G++)Y = q[G], D = q[G + 1], D ? b.subVectors(D, Y) : b.subVectors(Y, q[G - 1]), Q.push(b.normalize().clone());
            var x, d, X, h, U = new Am, l = new Am, E = new Sj, j = 1e-4, R = Number.MAX_VALUE, n = Q[0], g = m[0] = new Am, s = T[0] = new Am;
            for (d = e(n.x), X = e(n.y), h = e(n.z), R >= d && (R = d, U.set(1, 0, 0)), R >= X && (R = X, U.set(0, 1, 0)), R >= h && U.set(0, 0, 1), l.crossVectors(n, U).normalize(), g.crossVectors(n, l), s.crossVectors(n, g), G = 1; f > G; G++)m[G] = m[G - 1].clone(), T[G] = T[G - 1].clone(), l.crossVectors(Q[G - 1], Q[G]), l.length() > j && (l.normalize(), x = Z(Qr(Q[G - 1].dot(Q[G]), -1, 1)), m[G].applyMatrix4(E.makeRotationAxis(l, x))), T[G].crossVectors(Q[G], m[G]);
            return {B: T, T: Q, N: m}
        }, ui = function () {
            var o = function (M) {
                for (var Z = 1; Z < arguments.length; Z++) {
                    var Q = arguments[Z];
                    M.push(Q.x, Q.y, Q.z)
                }
            }, I = function (Z) {
                for (var o = 1; o < arguments.length; o++) {
                    var H = arguments[o].uv;
                    Z.push(H[0], H[1])
                }
            }, r = function (q, X, f, Q, x) {
                var i = -Q * M(x), C = Q * v(x);
                return new Am(q.x + i * f.x + C * X.x, q.y + i * f.y + C * X.y, q.z + i * f.z + C * X.z)
            }, J = function (B, X, H, j, v, N, y) {
                for (var p = [], Q = $ / v, e = 0; v >= e; e++) {
                    var Z = r(B, X, H, j, e * Q + N);
                    p.push(Z), y != U && (Z.uv = [y, e / v])
                }
                return p
            }, L = function (y, f, l, C, h, L, n, e) {
                var i = f ? y.top_vs : y.bottom_vs;
                if (i)for (var Q = f ? y.top_uv : y.bottom_uv, m = $ / n, Y = 0; n > Y; Y++) {
                    var s, D;
                    f ? (s = Y * m + e, D = (Y + 1) * m + e) : (D = Y * m + e, s = (Y + 1) * m + e), o(i, r(l, C, h, L, s), r(l, C, h, L, D), l), Q && Q.push(.5 - .5 * M(s), .5 - .5 * v(s), .5 - .5 * M(D), .5 - .5 * v(D), .5, .5)
                }
            };
            return function (j, b, n, N, H, G, a, W) {
                var u = b.length;
                if (u > 1) {
                    var m, l, i, e, P, R, E, f = Zb(b), d = f.T, v = f.N, C = f.B;
                    "flat" === a && L(j, !0, b[0], C[0], v[0], N, H, G), "flat" === W && L(j, !1, b[u - 1], C[u - 1], v[u - 1], N, H, G);
                    var t, s, k = [], h = z(H / 2), r = "round" === a, Y = "round" === W, F = b[0], V = d[0], $ = C[0], X = v[0], B = b[u - 1], g = d[u - 1], p = C[u - 1], w = v[u - 1];
                    if (r) {
                        for (i = 1; h >= i; i++)v.splice(0, 0, X), C.splice(0, 0, $), d.splice(0, 0, V), s = -i / h * N, b.splice(0, 0, V.clone().multiplyScalar(s).add(F)), k[h - i] = y(N * N - s * s);
                        u += h
                    }
                    if (Y) {
                        for (i = 1; h >= i; i++)v.push(w), C.push(p), d.push(g), s = i / h * N, b.push(g.clone().multiplyScalar(s).add(B)), k[b.length - 1] = y(N * N - s * s);
                        u += h
                    }
                    if (j.uv) {
                        var O = 0, M = 0, q = [];
                        for (n && (O = n), P = b[0], q[0] = 0, i = 1; u > i; i++)e = b[i], q[i] = P.distanceTo(e), P = e, n || (O += q[i]);
                        for (t = [], i = 0; u > i; i++)M += q[i], t[i] = O ? M / O : 0
                    }
                    for (i = 0; u > i; i++) {
                        if (e = b[i], R = C[i], E = v[i], m = J(e, R, E, k[i] === K ? N : k[i], H, G, t ? t[i] : U), l)for (var x = 0; H > x; x++) {
                            var Q = l[x], D = l[x + 1] || l[0], Z = m[x], _ = m[x + 1] || m[0];
                            o(j.vs, D, Q, Z, Z, _, D), j.uv && I(j.uv, D, Q, Z, Z, _, D)
                        }
                        l = m
                    }
                }
            }
        }();
        Se(H, {
            getLineLength: function (B) {
                return B[B.length - 1].length
            }, getLineOffset: function (Z, j) {
                return Yg(Z, j)
            }, getLineCacheInfo: function (Q, n, f, L) {
                return Vd(dd(Q, n, f, L))
            }
        });
        var gp = f.Light = function () {
            Eg(gp, this), this.s(Je, u[Je]), this.s(Gq, "sphere"), this.s3(20, 20, 20)
        };
        zd("Light", uk, {
            _image: "light_icon", _icon: "light_icon", onStyleChanged: function (l, S, M) {
                gp.superClass.onStyleChanged.apply(this, arguments), l === Je && this.s("shape3d.color", M)
            }
        });
        var Kk = od.Graph3dView = function (F, p) {
            var Q = this;
            Q._attributes = p || H.graph3dViewAttributes, Q._25I = {}, Q._view = Uo(1, Q);
            var X = Q._canvas = Dm(Q._view);
            X.addEventListener("webglcontextlost", function (i) {
                i.preventDefault(), Rc(Q), Q._26I = U, Q._1o.texture = U, Q._35O = !0
            }, !1), X.addEventListener("webglcontextrestored", function () {
                Q._35O = !1, Q.iv()
            }, !1), Q._34O = {}, Q._33O = {}, Q._wireframeIndexMap = {}, Q._wireframeModelMap = {}, Q._polylineIndexMap = {}, Q._polylineIndexMap = {}, Q._8O = [], Q._7O = os(), Q._6O = os(), Q._1o = new Lo(Q), Q._30O = new fq(Q), Q._31O = new ck(Q), Q._32O = new sb(Q), Q._33Q = !0, Q._eye = Nh(H.graph3dViewEye), Q._center = Nh(H.graph3dViewCenter), Q._up = Nh(H.graph3dViewUp), Q._lightChanged = !1, Q._59O = [], Q._spots = [], Q._dirs = [], Q.dm(F ? F : new $q), Q.setInteractors([new eo(Q)])
        }, jp = {
            fogDisabled: 1,
            dashDisabled: 1,
            batchColorDisabled: 1,
            batchBlendDisabled: 1,
            batchBrightnessDisabled: 1
        };
        hg("Graph3dView", m, {
            ms_v: 1,
            ms_tip: 1,
            ms_gv: 1,
            ms_dm: 1,
            ms_lp: 1,
            ms_fire: 1,
            ms_sm: 1,
            _51o: 1,
            ms_ac: ["devicePixelRatio", "boundaries", "moveStep", "rotateStep", "sizeEditableFunc", "rotationEditableFunc", "editableFunc", "rotatable", "zoomable", "pannable", "walkable", "resettable", "mouseRoamable", Ej, Tg, "firstPersonMode", qc, "movableFunc", "gridVisible", "gridSize", "gridGap", "gridColor", "originAxisVisible", "centerAxisVisible", "axisXColor", "axisYColor", "axisZColor", "editSizeColor", "rectSelectable", "rectSelectBackground", "headlightRange", "headlightColor", "headlightIntensity", "headlightDisabled", "ortho", "orthoWidth", "fovy", "near", "far", tk, xr, "up", "aspect", "fogDisabled", "fogColor", "fogNear", "fogFar", "dashDisabled", "batchColorDisabled", "batchBlendDisabled", "batchBrightnessDisabled"],
            _editable: !1,
            _devicePixelRatio: K,
            _boundaries: K,
            _moveStep: H.graph3dViewMoveStep,
            _rotateStep: H.graph3dViewRotateStep,
            _pannable: H.graph3dViewPannable,
            _rotatable: H.graph3dViewRotatable,
            _walkable: H.graph3dViewWalkable,
            _resettable: H.graph3dViewResettable,
            _zoomable: H.graph3dViewZoomable,
            _firstPersonMode: H.graph3dViewFirstPersonMode,
            _mouseRoamable: H.graph3dViewMouseRoamable,
            _gridVisible: H.graph3dViewGridVisible,
            _gridSize: H.graph3dViewGridSize,
            _gridGap: H.graph3dViewGridGap,
            _gridColor: H.graph3dViewGridColor,
            _originAxisVisible: H.graph3dViewOriginAxisVisible,
            _centerAxisVisible: H.graph3dViewCenterAxisVisible,
            _axisXColor: H.graph3dViewAxisXColor,
            _axisYColor: H.graph3dViewAxisYColor,
            _axisZColor: H.graph3dViewAxisZColor,
            _ortho: H.graph3dViewOrtho,
            _orthoWidth: H.graph3dViewOrthoWidth,
            _fovy: H.graph3dViewFovy,
            _near: H.graph3dViewNear,
            _far: H.graph3dViewFar,
            _headlightColor: H.graph3dViewHeadlightColor,
            _headlightIntensity: H.graph3dViewHeadlightIntensity,
            _headlightRange: H.graph3dViewHeadlightRange,
            _headlightDisabled: H.graph3dViewHeadlightDisabled,
            _rectSelectable: H.graph3dViewRectSelectable,
            _rectSelectBackground: H.graph3dViewRectSelectBackground,
            _editSizeColor: H.graph3dViewEditSizeColor,
            _autoMakeVisible: hq,
            _fogDisabled: H.graph3dViewFogDisabled,
            _fogColor: H.graph3dViewFogColor,
            _fogNear: H.graph3dViewFogNear,
            _fogFar: H.graph3dViewFogFar,
            _dashDisabled: H.graph3dViewDashDisabled,
            _batchColorDisabled: H.graph3dViewBatchColorDisabled,
            _batchBlendDisabled: H.graph3dViewBatchBlendDisabled,
            _batchBrightnessDisabled: H.graph3dViewBatchBrightnessDisabled,
            setEye: function (r, Z, j) {
                1 === arguments.length && (Z = r[1], j = r[2], r = r[0]);
                var I = this._eye;
                I[0] = r, I[1] = Z, I[2] = j, this.fp(tk, U, I)
            },
            setCenter: function (p, q, J) {
                1 === arguments.length && (q = p[1], J = p[2], p = p[0]);
                var O = this._center;
                O[0] = p, O[1] = q, O[2] = J, this.fp(xr, U, O)
            },
            setUp: function (V, M, i) {
                1 === arguments.length && (M = V[1], i = V[2], V = V[0]);
                var W = this._up;
                W[0] = V, W[1] = M, W[2] = i, this.fp("up", U, W)
            },
            isTransparentMask: function (z) {
                return z.s("transparent.mask")
            },
            getAspect: function () {
                var d = this, I = d._aspect;
                return I ? I : d.getWidth() / d.getHeight()
            },
            getCanvas: function () {
                return this._canvas
            },
            setDataModel: function (V) {
                var f = this, w = f._dataModel, Z = f._selectionModel;
                w !== V && (w && (w.umm(f.handleDataModelChange, f), w.umd(f.handleDataPropertyChange, f), Z || w.sm().ums(f.handleSelectionChange, f)), f._dataModel = V, V.mm(f.handleDataModelChange, f), V.md(f.handleDataPropertyChange, f), Z ? Z._21I(V) : V.sm().ms(f.handleSelectionChange, f), f.invalidateAll(!0), f.invalidateLight(), f.fp(pg, w, V))
            },
            handleDataPropertyChange: function (b) {
                var $ = b.data;
                this.invalidateData($), _o($) && "s:light.type" === b.property && this.invalidateLight()
            },
            invalidateLight: function () {
                this._lightChanged || (this._lightChanged = !0, this.iv())
            },
            onPropertyChanged: function (e) {
                var m = this, v = e.property;
                m.iv(), m._18Q = U, "eye" === v ? m._33Q = !0 : "devicePixelRatio" === v ? m._42(U, m._devicePixelRatio || Pg) : jp[v] && Rc(m)
            },
            _5O: function (Z) {
                var z = Z._22Q();
                return z ? new z(this, Z) : U
            },
            getData3dUI: function (h) {
                var Q = this._25I[h._id];
                return Q === K && (Q = this._5O(h), this._25I[h._id] = Q), Q
            },
            invalidateAll: function (c) {
                var W = this;
                if (c) {
                    for (var y in W._25I) {
                        var f = W._25I[y];
                        f && f.dispose()
                    }
                    W._25I = {}, W.iv(), Qq(W)
                } else W.dm().each(function (B) {
                    W.invalidateData(B)
                })
            },
            invalidateSelection: function () {
                var U = this;
                U.sm().each(function (L) {
                    U.invalidateData(L)
                })
            },
            invalidateData: function (T) {
                var B = this, g = B.getData3dUI(T);
                g && (g.iv(), B.iv()), Qq(B, T)
            },
            getShape3dText: function (h) {
                return h.getStyle("shape3d.text") || this.getLabel(h)
            },
            invalidateBatch: function (x) {
                var M = this, q = M._33O, Y = q[x], p = [], r = {};
                if (Y) {
                    Y.ds.forEach(function (H) {
                        var o = M.getData3dUI(H);
                        o && o.iv(), delete M._34O[H._id], p.push(H._id)
                    }), delete q[x];
                    for (var l, D, k, W, H, t, L, u, X, R = 0; 2 > R; R++) {
                        var i = M[["_wireframeModelMap", "_polylineModelMap"][R]], C = M[["_wireframeIndexMap", "_polylineIndexMap"][R]];
                        for (r = {}, u = 0; u < p.length; u++) {
                            var G = C[p[u]];
                            if (G) {
                                delete C[p[u]], X = G.batch, l = i[X];
                                var o = G.begin, U = G.size, e = 3 * o, V = 3 * U, v = 4 * o, s = 4 * U;
                                for (D = l.ds, k = l.vs, W = l.cs, H = l.ps, t = l.ls, L = G.index, l.invalidate = !0, D[L] = K, L = e; e + V > L; L++)k[L] = K;
                                for (L = v; v + s > L; L++)W[L] = K;
                                for (L = v; v + s > L; L++)H[L] = K;
                                if (t)for (L = e; e + V > L; L++)t[L] = K;
                                r[X] = !0
                            }
                        }
                        for (X in r) {
                            l = i[X], D = l.ds, k = l.vs, W = l.cs, H = l.ps, t = l.ls;
                            var Q = [];
                            for (L = 0; L < D.length; L++)D[L] !== K && Q.push(D[L]);
                            if (0 === Q.length) delete i[X]; else {
                                for (l.ds = Q, Q = [], L = 0; L < k.length; L++)k[L] !== K && Q.push(k[L]);
                                for (l.vs = Q, Q = [], L = 0; L < W.length; L++)W[L] !== K && Q.push(W[L]);
                                for (l.cs = Q, Q = [], L = 0; L < H.length; L++)H[L] !== K && Q.push(H[L]);
                                if (l.ps = Q, t) {
                                    for (Q = [], L = 0; L < t.length; L++)t[L] !== K && Q.push(t[L]);
                                    l.ls = Q
                                }
                            }
                        }
                    }
                    M.iv()
                }
            },
            handleDataModelChange: function (j) {
                var M = this, E = j.kind, $ = j.data;
                if ("add" === E) M.invalidateData($), Ln($) && $.getEdgeGroup() && $.getEdgeGroup().eachSiblingEdge(M.invalidateData, M), _o($) && M.invalidateLight(); else if (E === Mg) {
                    var o = $._id, R = M._25I[o];
                    R && (R.dispose(), delete M._25I[o], M.iv()), $ === M._currentSubGraph && M.setCurrentSubGraph(U), Qq(M, $), _o($) && M.invalidateLight()
                } else E === uc && (M.invalidateAll(!0), M.setCurrentSubGraph(U), Qq(M), M.invalidateLight())
            },
            toCanvas: function (I) {
                var Y = this, X = Y.getGL();
                if (Y.validate(), I) {
                    var p = X.getParameter(X.COLOR_CLEAR_VALUE);
                    Uf(X, I)
                }
                Y._42(U, 1);
                var i = Y.getWidth(), T = Y.getHeight(), K = new Uint8Array(4 * i * T), c = Dm(), l = c.getContext("2d");
                X.readPixels(0, 0, i, T, X.RGBA, X.UNSIGNED_BYTE, K), Xq(c, i, T, 1);
                for (var v = l.getImageData(0, 0, i, T), w = v.data, k = 0; k < w.length; k += 4) {
                    var F = k / 4, z = d(F / i), Q = F - z * i;
                    F = 4 * ((T - 1 - z) * i + Q), w[F] = K[k], w[F + 1] = K[k + 1], w[F + 2] = K[k + 2], w[F + 3] = K[k + 3]
                }
                return l.putImageData(v, 0, 0), I && Uf(X, p), Y._42(U, Y._devicePixelRatio || Pg), c
            },
            toDataURL: function (z, a) {
                var W = this, f = W.getGL();
                if (W.validate(), z) {
                    var c = f.getParameter(f.COLOR_CLEAR_VALUE);
                    Uf(f, z)
                }
                W._42(U, 1);
                var p = W._canvas.toDataURL(a || "image/png", 1);
                return z && Uf(f, c), W._42(U, W._devicePixelRatio || Pg), p
            },
            getGL: function () {
                var r = this, a = r._26I, s = r._prg;
                if (!a)try {
                    r._2O = {}, a = r._26I = r._canvas.getContext("webgl", r._attributes) || r._canvas.getContext("experimental-webgl", r._attributes), a._emptyTexture = Ui(a), r._buffer = {
                        vs: wl(a),
                        ns: wl(a),
                        is: wl(a),
                        uv: wl(a),
                        batchColor: wl(a),
                        batchBlend: wl(a),
                        batchBrightness: wl(a),
                        lineDistance: wl(a)
                    }, r._1O = Si(a);
                    var B = r._cube = {vs: wl(a), ns: wl(a), is: wl(a), uv: wl(a)};
                    vg(a, B.vs, tm), vg(a, B.ns, fn), vg(a, B.uv, jl), rp(a, B.is, Ei)
                } catch (Y) {
                }
                if (a && !s) {
                    if (s = r._prg = a.createProgram(), !s)return U;
                    var M = r._dirs.length, H = r._spots.length, p = r._59O.length, R = ["uPMatrix", "uMVMatrix", "uNMatrix", "uViewMatrix", "aNormal", "aUv", "uOffsetScale", "uDiffuse", "uBlend", "uBlendColor", "uBrightness", "uPartOpacity", "uTransparent", "uTexture", "uSampler", "uDiscardSelectable", "uFix", "uPick", "uReverseFlip", "uFixPickReverseColor", "uBatchBrightness", "aBatchBrightness", "uBatchColor", "aBatchColor", "uBatchBlend", "aBatchBlend", "uDash", "aLineDistance", "uDashDistance", "uDashGapDistance", "uLight", "uHeadlightRange", "uHeadlightColor", "uFogColor", "uFogNear", "uFogFar"];
                    M && R.push("uDirColor", "uDirPosition"), H && R.push("uSpotColor", "uSpotRange", "uSpotAngle", "uSpotExponent", "uSpotPosition", "uSpotCenter"), p && R.push("uPointColor", "uPointRange", "uPointPosition"), Uf(a, [0, 0, 0, 0]), a.clearDepth(1), a.enable(a.DEPTH_TEST), a.depthFunc(a.LEQUAL), a.enable(a.BLEND), a.blendFunc(a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA), Bh || (Qg = fk(Qg.substring(0, Qg.indexOf("^#"))), ss = fk(ss), Bh = !0);
                    var u = ["#define MAX_DIR " + M, "#define MAX_SPOT " + H, "#define MAX_POINT " + p, r._fogDisabled ? "" : "#define FOG", r._dashDisabled ? "" : "#define DASH", r._batchColorDisabled ? "" : "#define BATCHCOLOR", r._batchBlendDisabled ? "" : "#define BATCHBLEND", r._batchBrightnessDisabled ? "" : "#define BATCHBRIGHTNESS", ""].join("\n"), l = Fo(a, s, a.VERTEX_SHADER, Qg.replace("PREFIX", u)), P = Fo(a, s, a.FRAGMENT_SHADER, ss.replace("PREFIX", u));
                    j ? R.push("aPosition") : (s.aPosition = 0, a.bindAttribLocation(s, 0, "aPosition")), a.linkProgram(s), R.forEach(function (q) {
                        s[q] = /^u/.test(q) ? a.getUniformLocation(s, q) : a.getAttribLocation(s, q)
                    }), a.useProgram(s), a.deleteShader(l), a.deleteShader(P)
                }
                return a
            },
            getBrightness: function (p) {
                var b = p.s("brightness"), s = this.isSelected(p) ? p.s("select.brightness") : U;
                return b == U ? s : s == U ? b : b * s
            },
            getWireframe: function (y) {
                var x = y.s("wf.visible"), P = y.s("wf.width");
                return x === !0 || P > 0 && "selected" === x && this.isSelected(y) ? {
                        color: y.s("wf.color"),
                        width: P,
                        "short": y.s("wf.short"),
                        mat: y.s("wf.mat")
                    } : void 0
            },
            getBodyColor: function (K) {
                return K.s("body.color")
            },
            getMat: function (o) {
                return o.getMat ? o.getMat() : o.s("mat")
            },
            getFaceMat: function (E, H) {
                return E.getFaceMat ? E.getFaceMat(H) : E.s(H + ".mat")
            },
            getFaceBlend: function (N, u) {
                return N.s(u + ".blend") || N.s("all.blend")
            },
            getFaceColor: function (K, z) {
                return K.s(z + ".color") || K.s("all.color")
            },
            getFaceImage: function (j, Q) {
                return j.s(Q + ".image") || j.s("all.image")
            },
            getFaceDiscardSelectable: function (b, K) {
                var V = b.s(K + ".discard.selectable");
                return V == U ? b.s("all.discard.selectable") : V
            },
            getFaceUv: function (G, D) {
                return G.s(D + ".uv") || G.s("all.uv")
            },
            getFaceUvOffset: function ($, W) {
                return $.s(W + ".uv.offset") || $.s("all.uv.offset")
            },
            getFaceUvScale: function (P, F) {
                return P.s(F + ".uv.scale") || P.s("all.uv.scale")
            },
            getFaceLight: function (z, C) {
                var o = z.s(C + ".light");
                return o == U ? z.s("all.light") : o
            },
            getFaceVisible: function (G, w) {
                var E = G.s(w + ".visible");
                return E == U ? G.s("all.visible") : E
            },
            getFaceOpacity: function (P, w) {
                var m = P.s(w + ".opacity");
                return m == U ? P.s("all.opacity") : m
            },
            getFaceTransparent: function (q, v) {
                var H = q.s(v + ".transparent");
                return H == U ? q.s("all.transparent") : H
            },
            getFaceReverseColor: function (I, c) {
                return I.s(c + ".reverse.color") || I.s("all.reverse.color")
            },
            getFaceReverseFlip: function (p, G) {
                var m = p.s(G + ".reverse.flip");
                return m == U ? p.s("all.reverse.flip") : m
            },
            getFaceReverseCull: function (Z, k) {
                var M = Z.s(k + ".reverse.cull");
                return M == U ? Z.s("all.reverse.cull") : M
            },
            getTextureMap: function () {
                return this._2O
            },
            deleteTexture: function (d) {
                var W = this, h = W._2O[d];
                h && (delete W._2O[d], W.getGL().deleteTexture(h))
            },
            getTexture: function (Y, w) {
                if (!Y)return U;
                var W = this, y = W.getGL(), j = W._2O[Y];
                if (!j) {
                    var H = gk(Y);
                    if (H)if (H.tagName) {
                        if (H.dynamic)return Si(y, H, W._1O);
                        j = W._2O[Y] = Si(y, H)
                    } else {
                        var A = ef(H, w), c = Xp(H, w);
                        if (A >= 1 && c >= 1) {
                            var P = bg(A, c);
                            return Kj(P, H, 0, 0, A, c, w, W), P.restore(), Si(y, nn, W._1O)
                        }
                    }
                }
                return j
            },
            redraw: function () {
                this.iv()
            },
            validateImpl: function () {
                var f = this;
                if (f._lightChanged) {
                    f._lightChanged = !1;
                    var a = [], o = [], A = [];
                    f.dm().each(function (B) {
                        if (_o(B)) {
                            var C = B.s("light.type");
                            C === jj ? a.push(B) : C === yk ? o.push(B) : C === Wo && A.push(B)
                        }
                    }), (a.length !== f._59O.length || o.length !== f._spots.length || A.length !== f._dirs.length) && Rc(f), f._59O = a, f._spots = o, f._dirs = A
                }
                f._42(), f._1o.iv()
            },
            _42: function (Q, t) {
                var M = this;
                if (!M._35O && (!rq || Er(rq))) {
                    var $, w;
                    Q && (Q instanceof uk ? w = Q : $ = Q);
                    var v = M._canvas, F = M.getWidth(), P = M.getHeight(), z = M.getGL(), q = M._prg;
                    if (z) {
                        if (t ? Q || Xq(v, F, P, t) : (t = M._devicePixelRatio || Pg, Q || F === v.clientWidth && P === v.clientHeight || Xq(v, F, P, t)), z.viewport(0, 0, F * t, P * t), M._81O = U, z.clear(z.COLOR_BUFFER_BIT | z.DEPTH_BUFFER_BIT), zk(z, q.uBrightness, 1), zk(z, q.uOpacity, 1), zk(z, q.uPartOpacity, 1), z._picking = !!Q, zk(z, q.uPick, !!Q), zk(z, q.uTexture, !1), zk(z, q.uFix, !1), zk(z, q.uTransparent, !1), zk(z, q.uBatchColor, !1), zk(z, q.uBatchBlend, !1), zk(z, q.uBatchBrightness, !1), Q || (zl(M, z, q), M._fogDisabled || (zk(z, q.uFogColor, M._fogColor), zk(z, q.uFogNear, M._fogNear), zk(z, q.uFogFar, M._fogFar))), Ib(z, q.aPosition), Ib(z, q.aNormal), nj(z, q.aUv), nj(z, q.aBatchColor), nj(z, q.aBatchBlend), nj(z, q.aBatchBrightness), nj(z, q.aLineDistance), zk(z, q.uPMatrix, rf(M)), zk(z, q.uViewMatrix, hp(M, M._7O)), w) {
                            var J = z.getParameter(z.COLOR_CLEAR_VALUE);
                            z.clearColor(0, 0, 0, 0), z.disable(z.BLEND), nj(z, q.aNormal), vg(z, M._cube.vs, U, q.aPosition), rp(z, M._cube.is), Cj(w, M, rk, 0), Cj(w, M, Ar, 6), Cj(w, M, ks, 12), Cj(w, M, op, 18), Cj(w, M, dh, 24), Cj(w, M, De, 30), Ib(z, q.aNormal), Uf(z, J)
                        } else if ($) {
                            $.value = 2;
                            var J = z.getParameter(z.COLOR_CLEAR_VALUE);
                            z.clearColor(0, 0, 0, 0), z.disable(z.BLEND), M._95I(z, q, $), Vl(M, $), $b(M, M._polylineModelMap, $), $b(M, M._wireframeModelMap, $), zk(z, q.uTransparent, !0), M._95I(z, q, $, !0), Vl(M, $, !0), $b(M, M._polylineModelMap, $, !0), $b(M, M._wireframeModelMap, $, !0), zk(z, q.uTransparent, !1), z.disable(z.DEPTH_TEST), M._30O._42(z, q, $), z.enable(z.DEPTH_TEST), Uf(z, J)
                        } else z.disable(z.BLEND), M._31O._42(z, q), M._95I(z, q), Vl(M), $b(M, M._polylineModelMap), $b(M, M._wireframeModelMap), z.enable(z.BLEND), z.depthMask(!1), zk(z, q.uTransparent, !0), M._95I(z, q, U, !0), Vl(M, U, !0), $b(M, M._polylineModelMap, U, !0), $b(M, M._wireframeModelMap, U, !0), zk(z, q.uTransparent, !1), z.depthMask(!0), z.disable(z.BLEND), z.disable(z.DEPTH_TEST), M._32O._42(z, q), M._30O._42(z, q), z.enable(z.DEPTH_TEST);
                        vg(z, U), rp(z, U), M._33Q = !1
                    }
                }
            },
            _95I: function (E, P, Z, C) {
                var u = this, z = function (H) {
                    return C ? H : !H
                };
                u.dm().each(function (b) {
                    if (u.isVisible(b) && (!x || r)) {
                        if (!Z && u.isTransparentMask(b))return;
                        var g = u.getData3dUI(b);
                        g && g._42(E, P, Z, z)
                    }
                })
            },
            getLogicalPoint: function (c) {
                return Bl(c, this._canvas)
            },
            getHitFaceInfo: function (D) {
                D.target && (D = this.lp(D));
                var q = this.getDataInfoAt(D);
                if (q) {
                    var $ = this._1o.face(q.data, rn(D.x, D.y));
                    if ($)return {data: q.data, face: $}
                }
                return U
            },
            getDataAt: function (C) {
                var q = this.getDataInfoAt(C);
                return q ? q.data : U
            },
            getDataInfoAt: function (V, B) {
                return V.target && (V = this.lp(V)), this._1o.get(rn(V.x, V.y, B), !0)
            },
            getDatasInRect: function (_) {
                return this._1o.get(_)
            },
            setEditable: function (o) {
                var d = this, V = d._editable;
                d._editable = o, this.fp(fj, V, o)
            },
            isEditable: function (v) {
                var K = this;
                return K._editable ? xj(v) ? v.s("3d.editable") ? K._editableFunc ? K._editableFunc(v) : !0 : !1 : !1 : !1
            },
            isSelectable: function (J) {
                return J.s("3d.selectable") && this.sm().isSelectable(J)
            },
            isMovable: function (_) {
                var T = this;
                return Ln(_) && _.getStyle(se) !== sn ? !1 : _.s("3d.movable") ? T._movableFunc ? T._movableFunc(_) : !0 : !1
            },
            isSizeEditable: function (n) {
                return xj(n) ? this._sizeEditableFunc ? this._sizeEditableFunc(n) : !0 : !1
            },
            isRotationEditable: function (D) {
                return xj(D) && D.IRotatable !== !1 ? this._rotationEditableFunc ? this._rotationEditableFunc(D) : !0 : !1
            },
            handleDelete: function () {
                this._editable && this.removeSelection()
            },
            zoomIn: function (F) {
                this.setZoom(fc, F)
            },
            zoomOut: function (g) {
                this.setZoom(1 / fc, g)
            },
            setZoom: function (j, H) {
                if (1 !== j) {
                    var h = this;
                    if (h._ortho)return h.setOrthoZoom(j, H), void 0;
                    h._14o && h._14o.stop(!0);
                    var v = 1 / j, q = h._eye, N = h._center, G = N[0] + (q[0] - N[0]) * v - q[0], k = N[1] + (q[1] - N[1]) * v - q[1], K = N[2] + (q[2] - N[2]) * v - q[2];
                    if (!(Rk(q, N) < h._moveStep && 1 > v)) {
                        if (H = Tc(H)) {
                            var i = Nh(q);
                            return H.action = function (V) {
                                h.fi({kind: h._zooming ? "betweenZoom" : "beginZoom"}), h._zooming = 1, q[0] = i[0] + G * V, q[1] = i[1] + k * V, q[2] = i[2] + K * V, h.fp(tk, U, q)
                            }, H._37o = function () {
                                delete h._14o, delete h._zooming, h.fi({kind: "endZoom"}), h.onZoomEnded()
                            }, h._14o = Jm(H)
                        }
                        q[0] += G, q[1] += k, q[2] += K, h.fp(tk, U, q)
                    }
                }
            },
            setOrthoZoom: function (u, I) {
                if (1 !== u) {
                    var R = this;
                    R._14o && R._14o.stop(!0);
                    var B = R._orthoWidth, l = B / u - B;
                    if (!(B < R._moveStep && u > 1))return (I = Tc(I)) ? (I.action = function (o) {
                            R.fi({kind: R._zooming ? "betweenZoom" : "beginZoom"}), R._zooming = 1, R.setOrthoWidth(B + l * o)
                        }, I._37o = function () {
                            delete R._14o, delete R._zooming, R.fi({kind: "endZoom"}), R.onZoomEnded()
                        }, R._14o = Jm(I)) : (R.setOrthoWidth(B / u), void 0)
                }
            },
            getPositionInfo: function (I) {
                var f = this, l = f._eye, d = f._center, T = f.getAspect(), p = I ? Dn(pj(d, l, !0), pj(I, l)) : Rk(l, d);
                if (f._ortho) {
                    var O = f._orthoWidth;
                    return {length: p, height: O / T, width: O}
                }
                var r = 2 * V(f._fovy / 2) * p;
                return {length: p, height: r, width: r * T}
            },
            getCenterInfo: function () {
                var c = this;
                return c._81O || (c._81O = c.getPositionInfo()), Nh(c._81O)
            },
            rotate: function (C, r, f, J) {
                var g = this;
                if (C || r) {
                    J == U && (J = g._firstPersonMode), g._88O && g._88O.stop(!0);
                    var X = g._center, h = g._eye, N = g.getCenterInfo().length, e = J ? X : h, m = J ? h : X, F = pj(e, m), q = w(F[0], F[2]), i = w(y(F[0] * F[0] + F[2] * F[2]), F[1]), l = J ? xr : tk;
                    return J && (r = -r), (f = Tc(f)) ? (f.action = function (Y) {
                            g.fi({kind: g._rotating ? "betweenRotate" : "beginRotate"}), g._rotating = 1;
                            var c = q + C * Y, G = i + r * Y;
                            G = gb(G), F[0] = N * v(G) * v(c), F[1] = N * M(G), F[2] = N * v(G) * M(c), e[0] = m[0] + F[0], e[1] = m[1] + F[1], e[2] = m[2] + F[2], g.fp(l, U, e)
                        }, f._37o = function () {
                            delete g._88O, delete g._rotating, g.fi({kind: "endRotate"}), g.onRotateEnded()
                        }, g._88O = Jm(f)) : (q += C, i += r, i = gb(i), F[0] = N * v(i) * v(q), F[1] = N * M(i), F[2] = N * v(i) * M(q), e[0] = m[0] + F[0], e[1] = m[1] + F[1], e[2] = m[2] + F[2], g.fp(l, U, e), void 0)
                }
            },
            pan: function (c, Y, t, B) {
                if (c || Y) {
                    var Z = this;
                    B == U && (B = Z._firstPersonMode), Z._89O && Z._89O.stop(!0);
                    var H = hp(Z), Q = [H[0] * c, H[4] * c, H[8] * c], W = [H[1] * Y, H[5] * Y, H[9] * Y], u = Q[0] + W[0], l = Q[1] + W[1], r = Q[2] + W[2], K = Z._center, s = Z._eye;
                    if (B) {
                        var O = mh(Z.getBoundaries(), s[0], s[2], s[0] + u, s[2] + r, y(u * u + r * r));
                        u = O[0], r = O[1]
                    }
                    if (t = Tc(t)) {
                        var o = Nh(s), I = Nh(K);
                        return t.action = function (m) {
                            Z.fi({kind: Z._panning ? "betweenPan" : "beginPan"}), Z._panning = 1, K[0] = I[0] + u * m, K[1] = I[1] + l * m, K[2] = I[2] + r * m, s[0] = o[0] + u * m, s[1] = o[1] + l * m, s[2] = o[2] + r * m, Z.fp(tk, U, s), Z.fp(xr, U, K)
                        }, t._37o = function () {
                            delete Z._89O, delete Z._panning, Z.fi({kind: "endPan"}), Z.onPanEnded()
                        }, Z._89O = Jm(t)
                    }
                    K[0] += u, K[1] += l, K[2] += r, s[0] += u, s[1] += l, s[2] += r, Z.fp(tk, U, s), Z.fp(xr, U, K)
                }
            },
            walk: function (p, z, t) {
                if (p) {
                    var J = this;
                    t == U && (t = J._firstPersonMode), J._90O && J._90O.stop(!0);
                    var H = J._center, r = J._eye, f = pj(H, r, !0);
                    if (t) {
                        var s = mh(J.getBoundaries(), r[0], r[2], r[0] + f[0] * p, r[2] + f[2] * p, e(p));
                        if (p = Rk(s), !p)return;
                        f = [s[0] / p, 0, s[1] / p]
                    }
                    if (z = Tc(z)) {
                        var o = Nh(r), W = Nh(H);
                        return z.action = function (K) {
                            J.fi({kind: J._walking ? "betweenWalk" : "beginWalk"}), J._walking = 1;
                            var j = p * K;
                            r[0] = o[0] + f[0] * j, r[1] = o[1] + f[1] * j, r[2] = o[2] + f[2] * j, H[0] = W[0] + f[0] * j, H[1] = W[1] + f[1] * j, H[2] = W[2] + f[2] * j, J.fp(tk, U, r), J.fp(xr, U, H)
                        }, z._37o = function () {
                            delete J._90O, delete J._walking, J.fi({kind: "endWalk"}), J.onWalkEnded()
                        }, J._90O = Jm(z)
                    }
                    r[0] += f[0] * p, r[1] += f[1] * p, r[2] += f[2] * p, H[0] += f[0] * p, H[1] += f[1] * p, H[2] += f[2] * p, J.fp(tk, U, r), J.fp(xr, U, H)
                }
            },
            handleScroll: function (G, D) {
                G.preventDefault();
                var d = this, v = d._moveStep;
                d.isFirstPersonMode() ? d.isPannable() && d.pan(0, D > 0 ? v : -v) : d.isZoomable() && d.setZoom(0 > D ? 1 / zs : zs)
            },
            handlePinch: function (Y, Q) {
                this.isZoomable() && this.setZoom(Q > Y ? 1 / wr : wr)
            },
            reset: function () {
                this.setCenter(H.graph3dViewCenter), this.setEye(H.graph3dViewEye), this.setUp(H.graph3dViewUp)
            },
            moveSelection: function (M, f, w) {
                var R, D = this, L = D.dm();
                L && (R = L.getHistoryManager()), R && R.beginInteraction(), qn(this.sm().toSelection(this.isMovable, this), M, f, w), R && R.endInteraction()
            },
            getMoveMode: function (n, f) {
                var d = f.s("3d.move.mode");
                if (d)return d;
                var v = "88", t = "89", U = "90";
                return cc(n) || Rp[v] && Rp[t] && Rp[U] ? "xyz" : Rp[v] && Rp[t] ? "xy" : Rp[v] && Rp[U] ? "xz" : Rp[t] && Rp[U] ? "yz" : Rp[v] ? "x" : Rp[t] ? "y" : Rp[U] ? "z" : "xz"
            },
            handleTick: function () {
                var Y = this, M = !1, Z = Y._moveStep, n = Z, x = !1, X = !0, U = Y._rotateStep * (X ? -1 : 1);
                if (Y.isWalkable() || (n = 0), Y.isPannable() || (Z = 0), Y.isRotatable() || (U = 0), Y._32Q) {
                    var t = (Qi() - Y._32Q) / 50;
                    n *= t, Z *= t, U *= t
                }
                Y._31Q && (gq(Y._31Q), delete Y._31Q, delete Y._32Q), Ne() && (M = !0, Y.pan(-Z, 0, x, X)), Pm() && (M = !0, Y.pan(Z, 0, x, X)), te() && (M = !0, cc() ? Y.pan(0, Z, x, X) : Y.walk(n, x, X)), Ai() && (M = !0, cc() ? Y.pan(0, -Z, x, X) : Y.walk(-n, x, X)), vi() && (M = !0, Y.rotate(-U, 0, x, X)), Ik() && (M = !0, Y.rotate(U, 0, x, X)), Ce() && (M = !0, Y.rotate(0, -U / 2, x, X)), Hh() && (M = !0, Y.rotate(0, U / 2, x, X)), M && (Y._32Q = Qi(), Y._31Q = fi(Y.handleTick, Y))
            },
            handleKeyDown: function (s) {
                var z = this;
                !hn(s) && Qb[s.keyCode] ? z.handleTick() : ii(s) ? z.selectAll() : Ji(s) ? z.handleDelete(s) : Af(s) && this.isResettable() && z.reset()
            },
            checkDoubleClickOnNote: function (z, $, p) {
                var R = this;
                if (p === Kn) {
                    if ($.s("note.toggleable"))return $.s(Uh, !$.s(Uh)), R.fi({
                        kind: "toggleNote",
                        event: z,
                        data: $,
                        part: p
                    }), !0
                } else if (p === er && $.s("note2.toggleable"))return $.s(ng, !$.s(ng)), R.fi({
                    kind: "toggleNote2",
                    event: z,
                    data: $,
                    part: p
                }), !0;
                return !1
            },
            checkDoubleClickOnRotation: function (w, v, E) {
                return E === Hk ? (v.setRotationX(0), !0) : E === Rg ? (v.setRotationY(0), !0) : E === Ke ? (v.setRotationZ(0), !0) : !1
            },
            onRotateEnded: function () {
            },
            onWalkEnded: function () {
            },
            toViewPosition: function (N) {
                var m = this, a = m.getWidth() / 2, h = m.getHeight() / 2, P = m._18Q;
                return P || (P = rf(m), m._18Q = wd(P, P, hp(m))), N = Ek([N[0], N[1], N[2], 1], P), {
                    x: a + a * N[0] / N[3],
                    y: h - h * N[1] / N[3]
                }
            },
            getHitPosition: function (y, Q, d) {
                var h = this, $ = h.getWidth(), F = h.getHeight(), f = y.target ? h.lp(y) : y, R = f.x - $ / 2, r = f.y - F / 2, N = h.getCenterInfo(), m = hp(h);
                Q = Q ? Q : [0, 0, 0], d = d ? d : [0, 1, 0], R = R / $ * N.width, r = -1 * r / F * N.height;
                var L = [m[0] * R, m[4] * R, m[8] * R], j = [m[1] * r, m[5] * r, m[9] * r], a = [L[0] + j[0], L[1] + j[1], L[2] + j[2]], D = h.getCenter(), i = Te(h, Q, d, [a[0] + D[0], a[1] + D[1], a[2] + D[2]]);
                return i ? i : [0, 0, 0]
            },
            getLineLength: function (Z) {
                this.validate();
                var L = this.getData3dUI(Z);
                if (L && L.getCache) {
                    var K = L.getCache();
                    if (K)return K[K.length - 1].length
                }
                return 0
            },
            getLineOffset: function (z, Y) {
                var c = this.getData3dUI(z);
                if (c && c.getCache) {
                    var u = c.getCache();
                    if (u)return Yg(u, Y)
                }
                return U
            },
            isLabelVisible: function () {
                return !0
            },
            isNoteVisible: function () {
                return !0
            }
        });
        var Ck = od.Interactor = function (p) {
            this.gv = p
        };
        hg("Interactor", m, {
            ms_listener: 1, getView: function () {
                return this.gv.getView()
            }, setUp: function () {
                this.addListeners()
            }, tearDown: function () {
                this.removeListeners()
            }
        });
        var eo = od.DefaultInteractor = function (d) {
            Eg(eo, this, [d])
        };
        hg("DefaultInteractor", Ck, {
            handle_contextmenu: function (r) {
                Fr(r)
            }, handle_mousewheel: function (D) {
                this.gv.handleScroll(D, D.wheelDelta / 40)
            }, handle_DOMMouseScroll: function (o) {
                2 === o.axis && this.gv.handleScroll(o, -o.detail)
            }, handle_keydown: function (I) {
                this.gv.handleKeyDown(I)
            }, handle_mousedown: function (m) {
                this.handle_touchstart(m)
            }, handle_touchstart: function (f) {
                Fr(f);
                var E = this, b = E.gv, Q = kf(f), Y = b.getDataInfoAt(f), k = Y ? Y.data : U, K = Y ? Y.part : U, B = b.sm(), l = nk(f), x = fm(f);
                b.setFocus(f) && (E._62O = U, E._57I = U, k ? hn(f) ? B.co(k) ? B.rs(k) : B.as(k) : B.co(k) || B.ss(k) : Q && (hn(f) ? b.isRectSelectable() && (E._62O = Nn) : E._57I = rc(f)), E._31Q && (gq(E._31Q), delete E._31Q, delete E._32Q), E._62O || (b.isFirstPersonMode() && (cc(f) || x > 2 ? E._62O = "pan" : b.isMouseRoamable() || P ? (E._62O = "roaming", E.foward = l && kf(f), E._32Q = Qi(), E._31Q = fi(E.tick, E)) : Q || (E._62O = "roaming")), E._62O || (Q && l && Mk[K] ? (E._62O = K, E.p3 = k.p3()) : Q && l && xj(k) && b.isSelected(k) && b.isMovable(k) ? (E._62O = "move", E.p3 = k.p3(), E.movedata = k) : P && (x > 2 ? E._62O = "pan" : 2 === x && (E.dist = If(f), E._62O = "pinch")))), E.point = b.lp(f), gl(E, f), _g(f) ? b.handleDoubleClick(f, k, K) : b.handleClick(f, k, K))
            }, tick: function () {
                var k = this, H = k.gv, L = H._moveStep;
                k.point && H.isWalkable() && (k._32Q && (L *= (Qi() - k._32Q) / 50), H.walk(k.foward ? L : -L), k._32Q = Qi(), k._31Q = fi(k.tick, k))
            }, handle_mouseup: function (B) {
                this.handle_touchend(B)
            }, handle_touchend: function ($) {
                var Y = this._57I;
                Y && (Rk(Y, rc($)) <= 1 && this.gv.sm().cs(), this._57I = U)
            }, handleWindowMouseMove: function (N) {
                this.handleWindowTouchMove(N)
            }, handleWindowTouchMove: function (S) {
                var u, w, J = this, h = J.gv, a = J._62O, Z = J.point, C = h.dm(), t = C.getHistoryManager(), U = h.lp(S), r = U.x - Z.x, n = U.y - Z.y, D = -$ * r / h.getWidth(), E = -$ * n / h.getHeight();
                if ("roaming" === a) J.rotate(S, D / 2, E / 2); else if (a === Hk || a === Rg || a === Ke) t && !h._86O && t.beginInteraction(), h.fi({
                    kind: h._86O ? "betweenEditRotation" : "beginEditRotation",
                    event: S
                }), h._86O = 1, h.sm().each(function (y) {
                    if (xj(y) && h.isRotationEditable(y)) {
                        var x = e(D) > e(E) ? D : E;
                        a === Hk ? y.setRotationX(y.getRotationX() + x) : a === Rg ? y.setRotationY(y.getRotationY() + x) : a === Ke && y.setRotationZ(y.getRotationZ() + x)
                    }
                }); else if ("move" === a || Mk[a]) {
                    a === en || a === yr || a === Wf ? (t && !h._87O && t.beginInteraction(), h.fi({
                            kind: h._87O ? "betweenEditSize" : "beginEditSize",
                            event: S
                        }), h._87O = 1) : (t && !h._moving && t.beginInteraction(), h.fi({
                            kind: h._moving ? "betweenMove" : "beginMove",
                            event: S
                        }), h._moving = 1);
                    var A, g = J.p3, m = h.getPositionInfo(g), z = hp(h);
                    A = a === Ud ? "x" : a === Hg ? "y" : a === Ki ? "z" : a === en ? "sx" : a === yr ? "sy" : a === Wf ? "sz" : h.getMoveMode(S, J.movedata), r = r / h.getWidth() * m.width, n = -1 * n / h.getHeight() * m.height;
                    var M, I, p = [z[0] * r, z[4] * r, z[8] * r], G = [z[1] * n, z[5] * n, z[9] * n], x = p[0] + G[0], Q = p[1] + G[1], H = p[2] + G[2], F = [g[0] + x, g[1] + Q, g[2] + H], l = pj(h.getEye(), F, !0);
                    if ("xyz" === A ? (M = F, h.moveSelection(x, Q, H)) : "xz" === A ? (M = Te(h, g, [0, 1, 0], F), M && h.moveSelection(M[0] - g[0], 0, M[2] - g[2])) : "xy" === A ? (M = Te(h, g, [0, 0, 1], F), M && h.moveSelection(M[0] - g[0], M[1] - g[1], 0)) : "yz" === A ? (M = Te(h, g, [1, 0, 0], F), M && h.moveSelection(0, M[1] - g[1], M[2] - g[2])) : "x" === A || "sx" === A ? (l[0] = 0, M = Te(h, g, l, F), M && (I = M[0] - g[0], "x" === A ? h.moveSelection(I, 0, 0) : h.sm().each(function (m) {
                                                    xj(m) && h.isSizeEditable(m) && (u = o(Ub, m.getWidth() + I), w = u / m.getWidth(), m.setWidth(u), cc(S) && (m.setHeight(m.getHeight() * w), m.setTall(m.getTall() * w)))
                                                }))) : "y" === A || "sy" === A ? (l[1] = 0, M = Te(h, g, l, F), M && (I = M[1] - g[1], "y" === A ? h.moveSelection(0, I, 0) : h.sm().each(function (P) {
                                                        xj(P) && h.isSizeEditable(P) && (u = o(Ub, P.getTall() + I), w = u / P.getTall(), P.setTall(u), cc(S) && (P.setHeight(P.getHeight() * w), P.setWidth(P.getWidth() * w)))
                                                    }))) : ("z" === A || "sz" === A) && (l[2] = 0, M = Te(h, g, l, F), M && (I = M[2] - g[2], "z" === A ? h.moveSelection(0, 0, I) : h.sm().each(function (J) {
                                                        xj(J) && h.isSizeEditable(J) && (u = o(Ub, J.getHeight() + I), w = u / J.getHeight(), J.setHeight(u), cc(S) && (J.setTall(J.getTall() * w), J.setWidth(J.getWidth() * w)))
                                                    }))), !M)return;
                    J.p3 = M
                } else if (a === Nn) {
                    var P = J.div;
                    P || (P = J.div = xo(), Cs(J.getView(), P), P.op = Z, P.style.background = h.getRectSelectBackground()), h.fi({
                        kind: h._rectSelecting ? "betweenRectSelect" : "beginRectSelect",
                        event: S
                    }), h._rectSelecting = 1, P.rect = Pb(P.op, U), kg(P, P.rect)
                } else if ("pinch" === a && 2 === fm(S)) {
                    h.fi({kind: h._pinching ? "betweenPinch" : "beginPinch", event: S}), h._pinching = 1;
                    var I = If(S);
                    h.handlePinch(I, J.dist), J.dist = I
                } else"pan" === a || cc(S) ? J.pan(S, r, n) : h.isFirstPersonMode() || (kf(S) ? J.rotate(S, D, E) : (J.pan(S, r, 0), h.isWalkable() && (h.fi({
                            kind: h._walking ? "betweenWalk" : "beginWalk",
                            event: S
                        }), h._walking = 1, h.walk(n / h.getHeight() * h.getCenterInfo().height))));
                J.point = U
            }, pan: function (A, G, o) {
                var V = this.gv;
                if (V.isPannable()) {
                    var J = V.getCenterInfo(), u = G / V.getWidth() * J.width, Z = -1 * o / V.getHeight() * J.height;
                    V.fi({kind: V._panning ? "betweenPan" : "beginPan", event: A}), V._panning = 1, V.pan(-u, -Z)
                }
            }, rotate: function (b, i, y) {
                var R = this.gv;
                R.isRotatable() && (R.fi({
                    kind: R._rotating ? "betweenRotate" : "beginRotate",
                    event: b
                }), R._rotating = 1, R.rotate(i, y))
            }, handleWindowMouseUp: function (c) {
                this.handleWindowTouchEnd(c)
            }, handleWindowTouchEnd: function (S) {
                var t = this, E = t.gv, W = E.dm(), j = W.getHistoryManager(), V = t.div;
                if (V) {
                    var B = E.getDatasInRect(V.rect);
                    if (!B.isEmpty()) {
                        var F = E.sm(), o = F.toSelection();
                        B.each(function (P) {
                            F.co(P) ? o.remove(P) : o.add(P)
                        }), F.ss(o)
                    }
                    jm(V)
                }
                E._moving && (delete E._moving, E.fi({
                    kind: "endMove",
                    event: S
                }), E.onMoveEnded(), j && j.endInteraction()), E._panning && (delete E._panning, E.fi({
                    kind: "endPan",
                    event: S
                }), E.onPanEnded()), E._rotating && (delete E._rotating, E.fi({
                    kind: "endRotate",
                    event: S
                }), E.onRotateEnded()), E._86O && (delete E._86O, E.fi({
                    kind: "endEditRotation",
                    event: S
                }), j && j.endInteraction()), E._87O && (delete E._87O, E.fi({
                    kind: "endEditSize",
                    event: S
                }), j && j.endInteraction()), E._pinching && (delete E._pinching, E.fi({
                    kind: "endPinch",
                    event: S
                }), E.onPinchEnded()), E._rectSelecting && (delete E._rectSelecting, E.fi({
                    kind: "endRectSelect",
                    event: S
                }), E.onRectSelectEnded()), E._walking && (delete E._walking, E.fi({
                    kind: "endWalk",
                    event: S
                }), E.onWalkEnded()), t.dist = t.point = t._62O = t.p3 = t.movedata = t.div = t._57I = t._32Q = t._31Q = t.foward = U
            }
        });
        var Lo = function (V) {
            this.gv = V
        };
        Oh(Lo, m, {
            _iv: !0, iv: function () {
                this._iv = !0
            }, face: function (o, e) {
                var M = this, T = M.gv.getGL();
                if (!T || !xj(o))return U;
                var I = e.x, S = e.width, f = e.height, H = M.height - e.y - f, v = d(S / 2), J = new Uint8Array(4 * S * f), F = 0;
                for (M.iv(), M.validate(o), jo(T, M.frame), T.readPixels(I, H, S, f, T.RGBA, T.UNSIGNED_BYTE, J), jo(T, U), M.iv(); v >= F; F++)for (var P = v - F, D = v + F, a = P; D >= a; a++)for (var p = P; D >= p; p++)if (a === P || a === D || p === P || p === D) {
                    var s = Mn.m[J[4 * (a * S + p)]];
                    if (s)return s
                }
            }, get: function (o, y) {
                this.validate();
                var l = this, W = l.gv.getGL();
                if (!W)return U;
                var h, t, r = o.x, c = o.width, Y = o.height, R = l.height - o.y - Y, s = d(c / 2), Z = new Uint8Array(4 * c * Y), Q = 0, e = Z.length, z = y ? U : new gr, H = y ? U : {};
                if (jo(W, l.frame), W.readPixels(r, R, c, Y, W.RGBA, W.UNSIGNED_BYTE, Z), jo(W, U), y) {
                    for (; s >= Q; Q++)for (var G = s - Q, m = s + Q, V = G; m >= V; V++)for (var O = G; m >= O; O++)if ((V === G || V === m || O === G || O === m) && (h = l.info(Z, 4 * (V * c + O))))return h
                } else for (; e > Q; Q += 4)h = l.info(Z, Q), h && (t = h.data, H[t._id] || (z.add(t), H[t._id] = t));
                return z
            }, info: function (G, p) {
                return this.colorMap[(G[p] << 24) + (G[p + 1] << 16) + (G[p + 2] << 8) + G[p + 3]]
            }, validate: function (o) {
                var p = this, R = p.gv, c = R.getGL();
                if (c) {
                    var J = R.getWidth(), M = R.getHeight(), V = c.RGBA, b = c.TEXTURE_2D, e = c.RENDERBUFFER, $ = c.FRAMEBUFFER;
                    p.texture || (p.texture = Si(c), p.render = c.createRenderbuffer(), p.frame = c.createFramebuffer()), (p.width !== J || p.height !== M) && (Mj(c, p.texture), c.texImage2D(b, 0, V, J, M, 0, V, c.UNSIGNED_BYTE, U), ye(c, c.TEXTURE_MIN_FILTER, c.LINEAR), c.bindRenderbuffer(e, p.render), c.renderbufferStorage(e, c.DEPTH_COMPONENT16, J, M), jo(c, p.frame), c.framebufferTexture2D($, c.COLOR_ATTACHMENT0, b, p.texture, 0), c.framebufferRenderbuffer($, c.DEPTH_ATTACHMENT, e, p.render), Mj(c, U), c.bindRenderbuffer(e, U), jo(c, U), p.width = J, p.height = M), p._iv && (p._iv = !1, jo(c, p.frame), R._42(o || (p.colorMap = {}), 1), jo(c, U))
                }
            }
        });
        var ck = function (K) {
            this.gv = K
        };
        Oh(ck, m, {
            gap: 0, size: 0, _42: function (H, F) {
                var S = this, O = S.gv, R = O._gridGap, W = O._gridSize;
                if (O._gridVisible) {
                    if (S.gap !== R || S.size !== W) {
                        for (var w = [], i = O._gridSize / 2, D = R * i, Z = 0; 2 * i + 1 > Z; Z++) {
                            var u = 6 * Z, $ = 6 * (2 * i + 1) + u;
                            w[u] = -D, w[u + 1] = 0, w[u + 2] = -D + Z * R, w[u + 3] = D, w[u + 4] = 0, w[u + 5] = -D + Z * R, w[$] = -D + Z * R, w[$ + 1] = 0, w[$ + 2] = -D, w[$ + 3] = -D + Z * R, w[$ + 4] = 0, w[$ + 5] = D
                        }
                        S.vs = new Hb(w), S.gap = R, S.size = W
                    }
                    vq(O), _c(H, F), zf(H), hm(H, F, 1, O._gridColor, O._buffer.vs, S.vs), ur(H, 0, S.vs.length / 3, H.LINES), fg(H), $o(H, F)
                } else S.vs = S.gap = S.size = U
            }
        });
        var sb = function (R) {
            this.gv = R
        };
        Oh(sb, m, {
            _42: function (t, T) {
                var H = this.gv, s = H._buffer.vs, q = H._axisXColor, F = H._axisYColor, d = H._axisZColor, N = H._originAxisVisible, z = H._centerAxisVisible;
                if (N || z) {
                    var V = j ? t.TRIANGLES : t.TRIANGLE_FAN, M = t.LINES;
                    if (vq(H), _c(t, T), zf(t), N) {
                        var G = H.getCenterInfo(), W = O(G.width, G.height) / 5, C = .8 * W, Q = .05 * W;
                        hm(t, T, 1.5, q, s, new Hb([0, 0, 0, W, 0, 0, C, Q, 0, C, 0, Q, C, -Q, 0, C, 0, -Q, C, Q, 0, 0, 0, 0, 0, W, 0, Q, C, 0, 0, C, Q, -Q, C, 0, 0, C, -Q, Q, C, 0, 0, 0, 0, 0, 0, W, Q, 0, C, 0, Q, C, -Q, 0, C, 0, -Q, C, Q, 0, C])), ur(t, 0, 2, M), ur(t, 1, 6, V), hm(t, T, U, F), ur(t, 7, 2, M), ur(t, 8, 6, V), hm(t, T, U, d), ur(t, 14, 2, M), ur(t, 15, 6, V)
                    }
                    if (z) {
                        var p = H._center, l = p[0], J = p[1], R = p[2], G = H.getPositionInfo(p);
                        W = O(G.width, G.height) / 20, hm(t, T, 1.5, q, s, new Hb([l, J, R, l + W, J, R, l, J, R, l, J + W, R, l, J, R, l, J, R + W])), ur(t, 0, 2, M), hm(t, T, U, F), ur(t, 2, 2, M), hm(t, T, U, d), ur(t, 4, 2, M)
                    }
                    fg(t), $o(t, T)
                }
            }
        });
        var fq = function (F) {
            this.gv = F
        }, Ud = "edit_tx", Hg = "edit_ty", Ki = "edit_tz", Hk = "edit_rx", Rg = "edit_ry", Ke = "edit_rz", en = "edit_sx", yr = "edit_sy", Wf = "edit_sz", Mk = {};
        Mk[Ud] = 1, Mk[Hg] = 1, Mk[Ki] = 1, Mk[Hk] = 1, Mk[Rg] = 1, Mk[Ke] = 1, Mk[en] = 1, Mk[yr] = 1, Mk[Wf] = 1, Oh(fq, m, {
            _42: function (v, d, t) {
                var i = this, R = i.gv, y = R.sm().ld();
                if (R.isEditable(y) && xj(y) && (!R.isFirstPersonMode() || !R.isMouseRoamable() && !P)) {
                    vq(R);
                    var Q, Y, F = R.isMovable(y), k = R.isRotationEditable(y), q = R.isSizeEditable(y), e = R._axisXColor, U = R._axisYColor, c = R._axisZColor, N = R._editSizeColor, p = R.getCenterInfo(), o = O(p.width, p.height) / 10, T = o / (t ? 5 : 10), D = .7 * o, m = .4 * D, Z = y.p3(), M = Z[0], J = Z[1], a = Z[2];
                    Q = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], F && i._17O(v, d, y, t, Ud, e, Q, [M, J - T, a, M + D, J - T, a, M + D, J, a, M + D, J, a, M, J, a, M, J - T, a, M, J - T, a + T, M + D, J - T, a + T, M + D, J - T, a, M + D, J - T, a, M, J - T, a, M, J - T, a + T]), Y = M + D, q && i._17O(v, d, y, t, en, N, Q, [Y, J - T, a, Y + m, J - T, a, Y + m, J, a, Y + m, J, a, Y, J, a, Y, J - T, a, Y, J - T, a + T, Y + m, J - T, a + T, Y + m, J - T, a, Y + m, J - T, a, Y, J - T, a, Y, J - T, a + T]), Y += m, k && i._17O(v, d, y, t, Hk, e, Q, [Y, J - T, a, Y + m, J - T, a, Y + m, J, a, Y + m, J, a, Y, J, a, Y, J - T, a, Y, J - T, a + T, Y + m, J - T, a + T, Y + m, J - T, a, Y + m, J - T, a, Y, J - T, a, Y, J - T, a + T]), Q = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0], F && i._17O(v, d, y, t, Hg, U, Q, [M, J, a, M, J + D, a, M - T, J + D, a, M - T, J + D, a, M - T, J, a, M, J, a, M, J, a, M, J, a - T, M, J + D, a - T, M, J + D, a - T, M, J + D, a, M, J, a]), Y = J + D, q && i._17O(v, d, y, t, yr, N, Q, [M, Y, a, M, Y + m, a, M - T, Y + m, a, M - T, Y + m, a, M - T, Y, a, M, Y, a, M, Y, a, M, Y, a - T, M, Y + m, a - T, M, Y + m, a - T, M, Y + m, a, M, Y, a]), Y += m, k && i._17O(v, d, y, t, Rg, U, Q, [M, Y, a, M, Y + m, a, M - T, Y + m, a, M - T, Y + m, a, M - T, Y, a, M, Y, a, M, Y, a, M, Y, a - T, M, Y + m, a - T, M, Y + m, a - T, M, Y + m, a, M, Y, a]), Q = [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], F && i._17O(v, d, y, t, Ki, c, Q, [M, J, a, M, J, a + D, M, J - T, a + D, M, J - T, a + D, M, J - T, a, M, J, a, M, J - T, a, M - T, J - T, a, M - T, J - T, a + D, M - T, J - T, a + D, M, J - T, a + D, M, J - T, a]), Y = a + D, q && i._17O(v, d, y, t, Wf, N, Q, [M, J, Y, M, J, Y + m, M, J - T, Y + m, M, J - T, Y + m, M, J - T, Y, M, J, Y, M, J - T, Y, M - T, J - T, Y, M - T, J - T, Y + m, M - T, J - T, Y + m, M, J - T, Y + m, M, J - T, Y]), Y += m, k && i._17O(v, d, y, t, Ke, c, Q, [M, J, Y, M, J, Y + m, M, J - T, Y + m, M, J - T, Y + m, M, J - T, Y, M, J, Y, M, J - T, Y, M - T, J - T, Y, M - T, J - T, Y + m, M - T, J - T, Y + m, M, J - T, Y + m, M, J - T, Y])
                }
            }, _17O: function (z, o, v, H, e, I, q, y) {
                var R = this.gv._buffer;
                Zd(z, o, H, !0, v, e), mr(z, o, U, !0, U, !0, U, !1), zk(z, o.uDiffuse, I), vg(z, R.vs, new Hb(y), o.aPosition), vg(z, R.ns, new Hb(q), o.aNormal), zf(z), ur(z, 0, 12), fg(z), No(z, o)
            }
        });
        var xp = function (F, D) {
            this.gv = F, this.s = function (Q, y, s) {
                return y == U && (y = s), y == U ? D.getStyle(Q) : ln(y, D, F)
            }, this.data = D
        };
        Oh(xp, m, {
            I3d: !0, ms_icons: 1, _iv: !0, iv: function () {
                this._iv = !0
            }, _42: function (f, y, i, m) {
                var c, P, R, t, z, _, p, n = this, B = n.gv, s = n.data, g = s._id, w = n.s("batch"), E = B._34O, Q = B._33O, M = B.isSelectable(s), l = B.getBrightness(s), x = l != U && 1 !== l;
                if (n._iv) {
                    if (R = kd(E, Q, s, w), n.validate(R, w ? md[w] || Qk : U), R && (t = E[g], z = t.size = R.vs.length / 3 - t.begin, p = R.rs))for (l = x ? l : 1, _ = 0; z > _; _++)p.push(l);
                    if (xj(s)) {
                        var h = B.getWireframe(s);
                        h && kc(B, s, h)
                    }
                    n.labelInfo = n.label2Info = n.noteInfo = n.note2Info = n._38o = U, n._24O(rm, "getLabel"), n._24O(dl, "getLabel2"), n._26O(Kn, "getNote"), n._26O(er, "getNote2"), n._15O(), n._iv = !1
                }
                x && zk(f, y.uBrightness, l), P = Zd(f, y, i, M, s, me), P && (Em(P, E[g], Q), Em(P, B._polylineIndexMap[g], B._polylineModelMap), Em(P, B._wireframeIndexMap[g], B._wireframeModelMap)), E[g] || n._80o(f, y, m), B.isLabelVisible(s) && ((c = n.labelInfo) && (Zd(f, y, i, M, s, rm), n._28O(c, rm, m)), (c = n.label2Info) && (Zd(f, y, i, M, s, dl), n._28O(c, dl, m))), B.isNoteVisible(s) && ((c = n.noteInfo) && (Zd(f, y, i, M, s, Kn), n._29O(c, Kn, m)), (c = n.note2Info) && (Zd(f, y, i, M, s, er), n._29O(c, er, m))), (c = n._38o) && n._99O(f, y, c, i, M, m), x && zk(f, y.uBrightness, 1)
            }, validate: function () {
            }, _16O: function () {
                return Vp
            }, _80o: function () {
            }, dispose: function () {
            }, getBodyColor: function (P) {
                var s = this.data, z = this.gv.getBodyColor(s);
                return z ? z : P ? s.getStyle(P) : U
            }, _24O: function (F, d) {
                var r = this, o = r.data, e = r.gv, T = r.s, m = e[d](o);
                if (m != U) {
                    var H = T(F + ".scale"), g = T(F + ".max"), v = r[F + "Info"] = {
                        label: m,
                        textureScale: T(F + ".texture.scale"),
                        color: e[d + "Color"](o),
                        font: T(F + ".font"),
                        align: T(F + ".align"),
                        background: e[d + "Background"](o)
                    }, V = v.rect = Hn(v, m);
                    g > 0 && g < V.width && (v.labelWidth = V.width, V.width = g), V.x = V.y = 0, V.width *= H, V.height *= H, v.mat = r._16O(T(F + ".autorotate"), T(F + ".position"), V, T(F + ".face"), T(F + ".t3"), T(F + ".r3"), T(F + ".rotationMode"));
                    var s = V.width / 2, J = V.height / 2;
                    v.vs = new Hb([-s, J, 0, -s, -J, 0, s, -J, 0, s, J, 0]), V.width /= H, V.height /= H
                }
            }, _26O: function (n, u) {
                var Z = this, X = Z.data, w = Z.gv, f = Z.s, R = w[u](X);
                if (R != U) {
                    var E = f(n + ".scale"), a = this[n + "Info"] = {
                        note: R,
                        textureScale: f(n + ".texture.scale"),
                        expanded: f(n + ".expanded"),
                        font: f(n + ".font"),
                        color: f(n + ".color"),
                        align: f(n + ".align"),
                        borderWidth: f(n + ".border.width"),
                        borderColor: f(n + ".border.color"),
                        background: w[u + "Background"](X)
                    };
                    if (a.expanded) {
                        var $ = f(n + ".max"), y = Hn(a, R);
                        y.width += 6, y.height += 2, $ > 0 && $ < y.width && (a.labelWidth = y.width, y.width = $);
                        var D = {x: -y.width / 2, y: -8 - y.height, width: y.width, height: y.height + 8}
                    } else D = {x: -6, y: -18, width: 12, height: 18};
                    a.mat = Z._16O(f(n + ".autorotate"), f(n + ".position"), U, f(n + ".face"), f(n + ".t3"), f(n + ".r3"), f(n + ".rotationMode")), a.rect = D, 1 !== E && (D = Nh(D), D.x *= E, D.height *= E, D.y = -D.height, D.width *= E);
                    var I = D.x, C = D.y, k = D.width, p = D.height;
                    a.vs = new Hb([I, -C, 0, I, -C - p, 0, I + k, -C - p, 0, I + k, -C, 0])
                }
            }, _28O: function (C, K, d) {
                if (d(this.s(K + ".transparent"))) {
                    var r = C.rect, s = C.textureScale, N = r.width * s, h = r.height * s;
                    if (N >= 1 && h >= 1) {
                        var O = bg(N, h);
                        1 !== s && (O.translate(O, r.x, r.y), O.scale(s, s), O.translate(O, -r.x, -r.y)), jg(O, C), O.restore(), Yp(this, K, C.mat, C.vs, !0)
                    }
                }
            }, _29O: function (C, u, n) {
                if (n(this.s(u + ".transparent"))) {
                    var D = C.rect, Q = C.textureScale, w = D.x, x = D.y, k = D.width * Q, N = D.height * Q;
                    if (k >= 1 && N >= 1) {
                        D.x = D.y = 0;
                        var i = bg(k, N);
                        1 !== Q && i.scale(Q, Q), pl(i, C), i.restore(), D.x = w, D.y = x, Yp(this, u, C.mat, C.vs, !1)
                    }
                }
            }, _99O: function (i, w, g, D, C, G) {
                if (g) {
                    var q = this, j = q.gv, J = q.data, n = j._buffer, c = j._1O, Z = g.icons;
                    for (var X in Z) {
                        var Y = Z[X], b = g.rects[X];
                        if (b && G(ln(Y.transparent, J, j))) {
                            Zd(i, w, D, C, J, X);
                            var l = ln(Y.shape3d, J, j), a = l ? [l] : ln(Y.names, J, j), x = a ? a.length : 0, m = ln(Y.textureScale, J, j) || 1, H = ln(Y.light, J, j);
                            H == U && (H = l ? !0 : !1), mr(i, w, ln(Y.blend, J, j), H, ln(Y.opacity, J, j), ln(Y.reverseFlip, J, j), ln(Y.reverseColor, J, j), ln(Y.reverseCull, J, j));
                            for (var S = 0; x > S; S++) {
                                var v = a[S], f = b[S];
                                if (hs(q, f.mat), l) Lm(j, J, mf(q, l), q); else {
                                    var y = gk(v);
                                    if (y) {
                                        var R = f.width * m, M = f.height * m;
                                        if (R >= 1 && M >= 1) {
                                            var A = bg(R, M);
                                            Zq(A, y, ln(Y.stretch, J, j), 0, 0, R, M, J, j), A.restore(), Si(i, nn, c), zf(i, w, c, ln(Y.discardSelectable, J, j), n.uv, Zg), vg(i, n.vs, f.vs, w.aPosition), vg(i, n.ns, Qj, w.aNormal), rp(i, n.is, Jb), vj(i, 0, Jb.length), fg(i, w, c)
                                        }
                                    }
                                }
                                vk(j)
                            }
                            No(i, w)
                        }
                    }
                }
            }
        });
        var il = function (Q, G) {
            Eg(il, this, [Q, G])
        };
        Oh(il, xp, {
            _16O: function (d, n, U, X, t, V, P, l, m) {
                var i = this.data, z = yg(n, i.s3(), U, X, l, m);
                return rr(os(), z, i.p3(), X, t, V, P, d, i.r3(), i.getRotationMode())
            }, clear: function () {
                var T = this;
                T.faceMat = T.mat = T.shapeModel = T.left = T.right = T.front = T.back = T.top = T.bottom = T.csg = U
            }, validate: function (E, D) {
                var b = this, M = b.gv, Y = b.data, J = mf(b), t = uh(Y, M.getMat(Y), J ? b.s("shape3d.scaleable") : !0);
                if (b.clear(), E) {
                    var x = [];
                    J ? $l(M, Y, J, b, b.getBodyColor(), [t], E, x) : (nm(M, Y, E, D, t, rk, x, fl), nm(M, Y, E, D, t, ks, x, xi), nm(M, Y, E, D, t, dh, x, br), nm(M, Y, E, D, t, De, x, wp), nm(M, Y, E, D, t, Ar, x, qs), nm(M, Y, E, D, t, op, x, bd)), x.length && (lc(E.vs, x), lc(E.ns, xq(x)))
                } else b.mat = t, (b.shapeModel = J) || (b.vf(rk), b.vf(ks), b.vf(Ar), b.vf(op), b.vf(dh), b.vf(De))
            }, vf: function (X) {
                var Y = this;
                if (Y.gv.getFaceVisible(Y.data, X)) {
                    var U = tg(Y, X);
                    return U.mat && (Y.faceMat = !0), U
                }
            }, _80o: function (w, i, F) {
                var j = this, C = j.gv, X = j.data, c = C._cube, k = j.shapeModel;
                vq(C, j.mat), k ? Lm(C, X, k, j, j.getBodyColor(), F) : (vg(w, c.vs, U, i.aPosition), vg(w, c.ns, U, i.aNormal), rp(w, c.is), j._18O(w, i, j.left, 0, F), j._18O(w, i, j.front, 6, F), j._18O(w, i, j.right, 12, F), j._18O(w, i, j.back, 18, F), j._18O(w, i, j.top, 24, F), j._18O(w, i, j.bottom, 30, F)), vk(C), j.faceMat && (j._18O(w, i, j.left, 0, F, !0), j._18O(w, i, j.front, 6, F, !0), j._18O(w, i, j.right, 12, F, !0), j._18O(w, i, j.back, 18, F, !0), j._18O(w, i, j.top, 24, F, !0), j._18O(w, i, j.bottom, 30, F, !0))
            }, _18O: function (B, N, a, S, v, P) {
                if (a) {
                    if (!v(a.transparent))return;
                    if (P && !a.mat || !P && a.mat)return;
                    P && vq(this.gv, a.mat);
                    var E = this, V = E.data, p = E.gv, o = p.getTexture(a.texture, V), L = a.uv, e = a.uvScale, T = a.uvOffset, J = a.discardSelectable;
                    if (o)if (L) {
                        for (var t = 8 * (S / 6), h = 0; 8 > h; h++)mb[t + h] = L[h];
                        zf(B, N, o, J, p._buffer.uv, mb, T, e)
                    } else zf(B, N, o, J, p._cube.uv, U, T, e); else zf(B);
                    mr(B, N, a.blend, a.light, a.opacity, a.reverseFlip, a.reverseColor, a.reverseCull), zk(B, N.uDiffuse, a.color), vj(B, S, 6), No(B, N), fg(B, N, o), P && vk(p)
                }
            }
        });
        var sm = function (F, Y) {
            Eg(sm, this, [F, Y])
        };
        Oh(sm, xp, {
            _25Q: 1, validate: function (h) {
                var Y = this, g = Y.gv, b = Y.data, K = Y.s, X = K("edge.width"), s = b._40I, j = b._41I;
                if (Y.shapeModel = Y.info = U, s && j) {
                    var S, W, n, m, D, Q, x, A, l, V, Z = b.isLooped(), y = K(se), N = H.getEdgeType(y);
                    if (N) {
                        var t = N(b, Rb(Y, g, b, Z, y), g, Y._19Q);
                        if (!t.points || t.points.isEmpty())return;
                        Q = Y.info = {}, x = t.segments, D = t.points, A = D.size();
                        for (var G = s.getElevation(), E = j.getElevation(), _ = 0; A > _; _++) {
                            var J = D.get(_);
                            J.e == U && (J.e = G + (E - G) * _ / (A - 1))
                        }
                        l = Ap(D.get(0)), V = Ap(D.get(A - 1));
                        var e = A % 2;
                        0 === e ? (Q.c1 = Ap(D.get(A / 2 - 1)), Q.c2 = Ap(D.get(A / 2))) : Q.p3 = Ap(D.get((A - e) / 2)), Q.s1 = l, Q.s2 = Ap(D.get(1)), Q.t1 = Ap(D.get(A - 2)), Q.t2 = V
                    } else {
                        D = new gr, Q = Y.info = {};
                        var p = K("edge.offset"), R = K("edge.center"), r = K("edge.source.t3"), I = K("edge.target.t3"), B = s.p3(), M = j.p3();
                        if (r && (B[0] += r[0], B[1] += r[1], B[2] += r[2]), I && (M[0] += I[0], M[1] += I[1], M[2] += I[2]), y === sn) {
                            x = K("edge.segments");
                            var f = Q.points = K(He) || Ff;
                            if (A = f.size()) {
                                l = Ap(f.get(0)), V = Ap(f.get(A - 1)), !R && p && (n = pj(l, B, !0), p = O(p, Rk(B, l)), B = [B[0] + n[0] * p, B[1] + n[1] * p, B[2] + n[2] * p], n = pj(M, V, !0), p = O(p, Rk(V, M)), M = [M[0] - n[0] * p, M[1] - n[1] * p, M[2] - n[2] * p]);
                                var e = A % 2;
                                0 === e ? (S = Ap(f.get(A / 2 - 1)), W = Ap(f.get(A / 2))) : Q.p3 = Ap(f.get((A - e) / 2)), Q.s1 = B, Q.s2 = l, Q.t1 = V, Q.t2 = M
                            } else!R && p && (n = pj(M, B, !0), m = Rk(B, M), p = an(p, m), B = [B[0] + n[0] * p, B[1] + n[1] * p, B[2] + n[2] * p], M = [M[0] - n[0] * p, M[1] - n[1] * p, M[2] - n[2] * p]), S = B, W = M;
                            D.add({x: B[0], y: B[2], e: B[1]}), D.addAll(f), D.add({x: M[0], y: M[2], e: M[1]})
                        } else {
                            var d = Rb(Y, g, b, Z, y);
                            if (Y._19Q || (d = -d), Z) {
                                var w = B[0], L = B[1], z = B[2], q = s.getTall() / 2 + d;
                                S = [w - d, L + q, z], W = [w + d, L + q, z], D.add({
                                    x: w - d,
                                    y: z,
                                    e: L
                                }), D.add({x: w - d, y: z, e: L + q}), D.add({x: w + d, y: z, e: L + q}), D.add({
                                    x: w + d,
                                    y: z,
                                    e: L
                                })
                            } else {
                                n = pj(M, B, !0), m = Rk(B, M);
                                var k = {x: B[0], y: B[2]}, C = {
                                    x: M[0],
                                    y: M[2]
                                }, F = Wb(U, k, C, d), P = F.x - k.x, v = F.y - k.y;
                                p = an(p, m), n[0] *= p, n[1] *= p, n[2] *= p, S = [B[0] + n[0] + P, B[1] + n[1], B[2] + n[2] + v], W = [M[0] - n[0] + P, M[1] - n[1], M[2] - n[2] + v], R ? (D.add({
                                        x: B[0],
                                        y: B[2],
                                        e: B[1]
                                    }), D.add({x: S[0], y: S[2], e: S[1]}), D.add({
                                        x: W[0],
                                        y: W[2],
                                        e: W[1]
                                    }), D.add({x: M[0], y: M[2], e: M[1]})) : (D.add({
                                        x: S[0],
                                        y: S[2],
                                        e: S[1]
                                    }), D.add({x: W[0], y: W[2], e: W[1]}))
                            }
                        }
                        Q.c1 = S, Q.c2 = W
                    }
                    Q.list = K(Gq) === sk ? Y.createTubeModel(D, x, X / 2, h) : Y.createLineModel(D, x, X, "edge", "edge.dash")
                }
            }
        });
        var ij = function (s, V) {
            Eg(ij, this, [s, V])
        };
        Oh(ij, il, {
            _80o: function (E, H, F) {
                var m = this, S = m.gv, X = m.shapeModel;
                vq(S, m.mat), X ? Lm(S, m.data, X, m, m.getBodyColor(), F) : (ld(m, E, H, m.left, F), ld(m, E, H, m.front, F), ld(m, E, H, m.right, F), ld(m, E, H, m.back, F), ld(m, E, H, m.top, F), ld(m, E, H, m.bottom, F)), vk(S)
            }, validate: function (e, W) {
                var B, j, P = this, x = P.s, y = P.data, g = y.p3(), t = y._thickness / 2, w = y.isClosePath(), V = y.getPoints(), r = y.getSegments(), d = x(nf), f = e && e.uv;
                if (P.clear(), 0 > t) j = P.shapeModel = fp(V, r, x(fe), x(ts), d, x(Df), y.getTall(), y.getElevation(), w), x(Fj) ? x("shape3d.image") || delete j.uv : (delete j.vs, delete j.ns, delete j.uv), x("shape3d.top.image") || delete j.top_uv, x("shape3d.bottom.image") || delete j.bottom_uv; else if (x(Gq) === sk) B = lj(V, r, d, w), j = P.shapeModel = {vs: []}, x("shape3d.image") && (j.uv = [], j.sum = x(Df) || nd(B) || 1, j.len = 0), x(fe) && !w && (j.top_vs = [], x("shape3d.top.image") && (j.top_uv = [])), x(ts) && !w && (j.bottom_vs = [], x("shape3d.bottom.image") && (j.bottom_uv = [])), P._12O(B, t); else {
                    var L, h, F, o, X, i, u, K, M, Q;
                    B = lj(V, r, d, w), X = P.vf(Ar, f, !1, W), t && (i = P.vf(op, f, !1, W), u = w ? U : P.vf(rk, f, !1, W), K = w ? U : P.vf(ks, f, !1, W), M = P.vf(dh, f, !1, W), Q = P.vf(De, f, !1, W)), t ? P._12O(B, t) : X && B.forEach(function (B) {
                            if (o = B.length, o > 0)for (L = B[0], F = 1; o > F; F++)h = B[F], P.addV(X.vs, L, h), L = h
                        }), P._20Q(B), e || (X && (X.ns = xq(X.vs), gn(X, "vs"), gn(X, Og)), t && (i && (i.ns = xq(i.vs), gn(i, "vs"), gn(i, Og)), u && (u.ns = xq(u.vs), gn(u, "vs"), gn(u, Og)), K && (K.ns = xq(K.vs), gn(K, "vs"), gn(K, Og)), M && (M.ns = xq(M.vs), gn(M, "vs"), gn(M, Og)), Q && (Q.ns = xq(Q.vs), gn(Q, "vs"), gn(Q, Og))))
                }
                var A = P.mat = os();
                vb(A, g), Gp(A, y.r3(), y.getRotationMode()), vb(A, Ho(g)), e && (Ob(P, A, e, j), P.clear())
            }, _20Q: function (c) {
                var I, e, T, A, s, l, _, H = this, F = H.front, N = H.back, R = H.top, f = H.bottom, C = F ? F.tuv : U, j = N ? N.tuv : U, K = R ? R.tuv : U, E = f ? f.tuv : U, b = 0;
                (C || j || K || E) && (I = H.s(Df) || nd(c) || 1, c.forEach(function (S) {
                    if (e = S.length, e > 0)for (l = S[0], T = 1; e > T; T++)_ = S[T], A = b / I, b += Rk(l, _), s = b / I, H._14O(F, A, s), H._14O(N, 1 - s, 1 - A), H._14O(R, A, s), H._14O(f, A, s), l = _
                }))
            }, _14O: function (t, I, s) {
                if (t) {
                    var x = t.uv, n = t.tuv;
                    if (n) {
                        if (x)var J = x[0] + (x[6] - x[0]) * I, w = x[1] + (x[7] - x[1]) * I, y = x[2] + (x[4] - x[2]) * I, A = x[3] + (x[5] - x[3]) * I, Z = x[2] + (x[4] - x[2]) * s, N = x[3] + (x[5] - x[3]) * s, L = x[0] + (x[6] - x[0]) * s, Q = x[1] + (x[7] - x[1]) * s; else J = I, w = 0, y = I, A = 1, Z = s, N = 1, L = s, Q = 0;
                        n.push(y, A, Z, N, L, Q, L, Q, J, w, y, A)
                    }
                }
            }, _13O: function (B) {
                var v = B.uv, j = B.tuv;
                j && (v ? j.push(v[2], v[3], v[4], v[5], v[6], v[7], v[6], v[7], v[0], v[1], v[2], v[3]) : j.push(0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1))
            }, _12O: function (p, n) {
                var k, c, j, m, r, E = this;
                p.forEach(function (Q) {
                    if (r = Q.length, r > 0)for (k = {
                        p: Q[0],
                        n: !0
                    }, m = 1; r > m; m++)c = Q[m], j = r - 1 > m ? Q[m + 1] : U, E.addPoint(k, c, j, n, Q)
                })
            }, addPoint: function (_, $, Q, p, q) {
                var m, y, l, I, F, n, g, e, P, c = this, d = _.p, f = _.f, R = _.b, S = c.s("shape3d.side") || Pd, w = c.s("shape3d.start.angle"), V = c.shapeModel, k = c.data.isClosePath();
                if (_.n && (_.n = !1, f = k && q.length > 2 ? Wb(q[q.length - 2], d, $, p) : Wb(U, d, $, p), R = cr(d, f), V ? V.top_vs && c._10O(R, f, S, w, V.top_vs, V.top_uv) : (m = c.left) && (c.addV(m.vs, R, f), c._13O(m))), y = Q ? Wb(d, $, Q, p) : k && q.length > 2 ? Wb(d, $, q[1], p) : Wb(d, $, U, p), l = cr($, y), V) {
                    var C, x, M = V.vs, D = V.uv, u = V.sum;
                    for (D && (C = V.len / u, V.len += Rk(d, $), x = V.len / u), n = c._9O(R, f, S, w), g = c._9O(l, y, S, w), e = 0; S > e; e++)P = e + 1, lc(M, n[P]), lc(M, g[e]), lc(M, n[e]), lc(M, g[e]), lc(M, n[P]), lc(M, g[P]), D && (I = e / S, F = P / S, D.push(C, F, x, I, C, I, x, I, C, F, x, F));
                    !Q && V.bottom_vs && c._10O(l, y, S, w, V.bottom_vs, V.bottom_uv, !0)
                } else!Q && (m = c.right) && (c.addV(m.vs, y, l), c._13O(m)), (m = c.front) && c.addV(m.vs, f, y), (m = c.back) && c.addV(m.vs, l, R), (m = c.top) && c.addH(m.vs, f, y, l, R, !0), (m = c.bottom) && c.addH(m.vs, R, l, y, f);
                _.p = $, _.f = y, _.b = l
            }, _10O: function (A, j, m, a, k, S, s) {
                var W, o, O = this, D = O.data, p = O._9O(A, j, m, a), l = (A.x + j.x) / 2, e = (A.y + j.y) / 2, B = D.getElevation(), R = 0;
                for (R = 0; m > R; R++)s ? (lc(k, p[R]), lc(k, p[R + 1])) : (lc(k, p[R + 1]), lc(k, p[R])), lc(k, [l, B, e]), S && (s ? (W = $ * (R + 1) / m + a, o = $ * R / m + a) : (W = $ * R / m + a, o = $ * (R + 1) / m + a), S.push(.5 - .5 * M(o), .5 - .5 * v(o), .5 - .5 * M(W), .5 - .5 * v(W), .5, .5))
            }, _9O: function (R, m, i, Y) {
                for (var Q, L, K = this, g = K.data, P = [], H = (R.x + m.x) / 2, O = (R.y + m.y) / 2, S = g.getTall() / 2, U = g.getElevation(), N = 0; i >= N; N++)Q = $ * N / i + Y, L = M(Q), P.push([H + (R.x - H) * L, U + S * v(Q), O + (R.y - O) * L]);
                return P
            }, addV: function (b, i, o) {
                var V = i.x, H = i.y, j = o.x, d = o.y, F = this.data, J = F.getElevation(), w = F.getTall() / 2;
                b.push(V, J - w, H, j, J - w, d, j, J + w, d, j, J + w, d, V, J + w, H, V, J - w, H)
            }, addH: function (O, k, c, x, X, y) {
                var N = this.data, Q = N.getTall() / 2, W = N.getElevation() + (y ? Q : -Q);
                O.push(k.x, W, k.y, c.x, W, c.y, x.x, W, x.y, x.x, W, x.y, X.x, W, X.y, k.x, W, k.y)
            }, vf: function (j, s, M, X) {
                var $, Y = this, o = Y.gv.getFaceVisible(Y.data, j);
                return (M || o) && ($ = tg(Y, j, X), $.vs = [], $.tuv = o && ($.texture || s) ? [] : U, $.visible = o), $
            }
        });
        var pd = function (M, c) {
            Eg(pd, this, [M, c])
        };
        Oh(pd, xp, {
            _25Q: 1, validate: function (H) {
                var k = this, L = k.data, D = k.s, a = L.getPoints(), e = a.size();
                if (k.shapeModel = k.info = U, e > 1) {
                    var o = k.info = {}, f = L.getSegments(), P = L.getThickness(), j = Ap(a.get(0)), M = Ap(a.get(e - 1)), s = e % 2;
                    0 === s ? (o.c1 = Ap(a.get(e / 2 - 1)), o.c2 = Ap(a.get(e / 2))) : o.p3 = Ap(a.get((e - s) / 2)), o.s1 = j, o.s2 = Ap(a.get(1)), o.t1 = Ap(a.get(e - 2)), o.t2 = M, o.list = D(Gq) === sk ? k.createTubeModel(a, f, P / 2, H) : k.createLineModel(a, f, P, "shape.border", "shape.dash")
                }
            }
        }), Se(H, {
            accordionViewExpandIcon: Zo(Im),
            accordionViewCollapseIcon: Zo(Im, !0),
            accordionViewLabelColor: el,
            accordionViewLabelFont: Km,
            accordionViewTitleBackground: Fh,
            accordionViewSelectBackground: Ir,
            accordionViewSelectWidth: 3,
            accordionViewSeparatorColor: K,
            splitViewDividerSize: 1,
            splitViewDividerBackground: Fh,
            splitViewDragOpacity: .5,
            splitViewToggleIcon: {width: 16, height: 16, comps: [{type: yh, rect: [2, 2, 12, 12], background: Im}]},
            propertyViewLabelColor: Co,
            propertyViewLabelSelectColor: el,
            propertyViewLabelFont: Km,
            propertyViewExpandIcon: Zo(ed),
            propertyViewCollapseIcon: Zo(ed, !0),
            propertyViewBackground: Tr,
            propertyViewRowLineVisible: !0,
            propertyViewColumnLineVisible: !0,
            propertyViewRowLineColor: km,
            propertyViewColumnLineColor: km,
            propertyViewSelectBackground: Ir,
            listViewLabelColor: Co,
            listViewLabelSelectColor: el,
            listViewLabelFont: Km,
            listViewRowLineVisible: !1,
            listViewRowLineColor: km,
            listViewSelectBackground: Ir,
            treeViewLabelColor: Co,
            treeViewLabelSelectColor: el,
            treeViewLabelFont: Km,
            treeViewExpandIcon: Zo(em),
            treeViewCollapseIcon: Zo(em, !0),
            treeViewRowLineVisible: !1,
            treeViewRowLineColor: km,
            treeViewSelectBackground: Ir,
            treeViewDoubleClickToToggle: !0,
            tableViewLabelColor: Co,
            tableViewLabelSelectColor: el,
            tableViewLabelFont: Km,
            tableViewRowLineVisible: !0,
            tableViewColumnLineVisible: !0,
            tableViewRowLineColor: km,
            tableViewColumnLineColor: km,
            tableViewSelectBackground: Ir,
            treeTableViewLabelColor: Co,
            treeTableViewLabelSelectColor: el,
            treeTableViewLabelFont: Km,
            treeTableViewExpandIcon: Zo(em),
            treeTableViewCollapseIcon: Zo(em, !0),
            treeTableViewRowLineVisible: !0,
            treeTableViewColumnLineVisible: !0,
            treeTableViewRowLineColor: km,
            treeTableViewColumnLineColor: km,
            treeTableViewSelectBackground: Ir,
            tableHeaderLabelColor: Co,
            tableHeaderLabelFont: Km,
            tableHeaderColumnLineVisible: !0,
            tableHeaderColumnLineColor: _k,
            tableHeaderBackground: Tr,
            tableHeaderMoveBackground: Ol,
            tableHeaderInsertColor: Ir,
            tableHeaderSortDescIcon: Zp(ed, !0),
            tableHeaderSortAscIcon: Zp(ed),
            tabViewTabGap: 1,
            tabViewLabelColor: el,
            tabViewLabelFont: Km,
            tabViewTabBackground: Fh,
            tabViewSelectWidth: 3,
            tabViewSelectBackground: Ir,
            tabViewMoveBackground: Ol,
            tabViewInsertColor: Ir,
            toolbarLabelColor: Co,
            toolbarLabelSelectColor: el,
            toolbarLabelFont: Km,
            toolbarBackground: Tr,
            toolbarSelectBackground: Ir,
            toolbarItemGap: 8,
            toolbarSeparatorColor: tl
        }, !0);
        var Pq = {translateX: 1, sortColumn: 1}, $n = {
            sortable: 1,
            sortOrder: 1,
            sortFunc: 1
        }, Mq = {focusData: 1}, Zr = {
            dataModel: 1,
            sortColumn: 1,
            sortFunc: 1,
            visibleFunc: 1,
            rootData: 1,
            rootVisible: 1
        }, Vg = {dataModel: 1, sortFunc: 1, visibleFunc: 1, categorizable: 1}, _r = function (v, S) {
            S.add(v), v.hasChildren() && v.eachChild(function (r) {
                _r(r, S)
            })
        }, aq = function (M, r, E, V, s, j, u, y, i, S, X) {
            var O, C = E.getValueType(), g = E.getAlign();
            if (E.getEnumValues()) {
                var c = E.toEnumLabel(r), F = Jj || 0, k = 0, R = j, w = H.getTextSize(V, c).width;
                return O = gk(E.toEnumIcon(r)), O && (k = j + Jj / 2, "center" === g ? k += (y - (F + w)) / 2 : "right" === g && (k = k + y - (F + w)), ym(M, O, k, u + i / 2), R = k + Jj / 2), c != U && (O ? Yr(M, c, V, s, R, u, y - (R - j), i) : Yr(M, c, V, s, j, u, y, i, g)), void 0
            }
            return r = E.formatValue(r), r != U ? C === Vk ? (ns(M, j, u, y, i, r), void 0) : C === bn || !C && pf(r) ? (O = gk(r ? Vj : on), ym(M, O, j + y / 2, u + i / 2, S, X), void 0) : (Yr(M, r, V, s, j, u, y, i, g), void 0) : void 0
        }, Hi = function (H, c) {
            var i = c.view, L = i.getDataModel().getHistoryManager(), d = Un(H), K = c.column || c.property;
            L && L.beginInteraction(), c.editor = H, H.info = c, i.setCurrentEditor(H), i.getView().insertBefore(d, i._79O), kg(H, c.editorRect), H.setFocus ? H.setFocus() : Fl(H), H.commitValue = function () {
                H._17Q && (H = H._17Q), i.setValue(c.data, K, H.getValue ? H.getValue() : H.value), H.close && H.close(), jm(d)
            }, K.onEditorCreated && K.onEditorCreated(c)
        }, Mr = function (B, O, g, r, w) {
            var E = Xb(B, g), K = O.value, S = O.view, n = w.getValueType();
            return E.onblur = E.onchange = function () {
                S.endEditing()
            }, "input" === B ? (K = w.formatValue(K), K != U && (E.value = K), E.onkeydown = function (s) {
                    Ll(s) && S.endEditing()
                }, (n === hk || n === Ao) && E.addEventListener(zg, H.numberListener, !1)) : B === Nn && r.forEach(function (Y) {
                    var $ = R.createElement("option");
                    $.innerHTML = w.toEnumLabel(Y), $.value = Y, w.isEnumEqual(K, Y) && ($.selected = !0), Cs(E, $)
                }), Hi(E, O), E
        }, Fd = f.widget = {}, ao = function (l, K, f) {
            Oh(q + ".widget." + l, K, f)
        };
        Se(Bb, {
            ms_value: function (H) {
                H.getValue = function (X) {
                    var o = this.getItemById(X), h = o.element;
                    return rd(h) ? h : h ? h.getValue ? h.getValue() : h.value : o.selected
                }, H.setValue = function (Y, u) {
                    var F = this.getItemById(Y), f = F.element;
                    f && !rd(f) ? f.setValue ? f.setValue(u) : f.value = u : pf(u) ? (F.selected = u, this.iv()) : (F.element = u, this.iv())
                }, H.v = function (b, V) {
                    var A = this;
                    if (2 === arguments.length) A.setValue(b, V); else {
                        if (!bk(b))return A.getValue(b);
                        for (var s in b)A.setValue(s, b[s])
                    }
                    return A
                }
            }, _46o: function (V) {
                V._icon = U, V._accessType = U, V._valueType = U, V._editable = !1, V._batchEditable = !0, V._align = rk, V._nullable = !0, V._emptiable = !1, V.setParent = wq, V.formatValue = function (Y) {
                    var c = this, Q = c._valueType;
                    if (c.getEnumValues())return c.toEnumLabel(Y);
                    if (Q === bn)return !!Y;
                    if (Y != U) {
                        if (Q === hk)return I(Y);
                        if (Bf(Y))return Dq(Y)
                    }
                    return Y
                }, V.setEnum = function (M, D, e, u, V, t) {
                    var P = this;
                    M && !$p(M) && M.values && (u = M.editable, e = M.icons, D = M.labels, V = M.strict, t = M.maxHeight, M = M.values), tq(M) && (M = M._as), tq(D) && (D = D._as), tq(e) && (e = e._as), P._enumValues = M, P._enumLabels = D, P._enumIcons = e, P._enumEditable = u, P._enumStrict = V == U ? !0 : V, P._enumMaxHeight = t, M && M.length && Bf(M[0]) && (P._valueType = Ao), P.fp("enum", !1, !0)
                }, V.getEnumMaxHeight = function () {
                    return this._enumMaxHeight
                }, V.isEnumEditable = function () {
                    return this._enumEditable
                }, V.getEnumValues = function () {
                    return this._enumValues
                }, V.getEnumLabels = function () {
                    return this._enumLabels
                }, V.getEnumIcons = function () {
                    return this._enumIcons
                }, V.isEnumStrict = function () {
                    return this._enumStrict
                }, V.isEnumEqual = function (d, W) {
                    return this._enumStrict ? d === W : d == W
                }, V.toEnumLabel = function ($) {
                    var g = this, W = g._enumValues, L = g._enumLabels;
                    if (W && L)for (var z = 0; z < W.length; z++)if (g.isEnumEqual($, W[z]))return L[z];
                    return $
                }, V.toEnumIcon = function (X) {
                    var D = this, i = D._enumValues, F = D._enumIcons;
                    if (i && F)for (var A = 0; A < i.length; A++)if (D.isEnumEqual(X, i[A]))return F[A];
                    return K
                }
            }, _45o: function (f) {
                f._87o = function (F, w, K, i, h, s) {
                    if (F) {
                        var k = this, e = k._90I, n = xo(1);
                        k._columnLineVisible && (h -= 1), k._rowLineVisible && (s -= 1), 0 >= h || 0 >= s || (k._90I || (e = k._90I = {}), e[w] || (e[w] = new gr), kg(n, k.tx() + K, k.ty() + i, h, s), Cs(n, F), k._view.insertBefore(n, k._79O), F.onParentAdded && F.onParentAdded(n), e[w].add(n))
                    }
                }, f._76o = function () {
                    var e = this, g = e._90I;
                    if (g) {
                        for (var r in g)g[r].each(function (A) {
                            jm(A)
                        });
                        delete e._90I
                    }
                }, f._77o = function (P) {
                    var L = this;
                    if (L._90I) {
                        var N = L._90I[P];
                        N && (N.each(function (G) {
                            jm(G)
                        }), delete L._90I[P])
                    }
                }
            }, _47o: function (j) {
                j.getValue = function (R, Q) {
                    return Q.getValue ? Q.getValue(R, Q, this) : al(R, Q.getAccessType(), Q.getName())
                }, j.setValue = function (X, b, D) {
                    if (b.isEmptiable() || "" !== D || (D = K), b.isNullable() || D != U) {
                        var p = this, c = b.getName(), R = b.getAccessType(), s = b.getValueType();
                        s === hk && rd(D) ? D = C(D) : s === Ao && rd(D) ? D = parseFloat(D) : s === bn && rd(D) && (D = "true" === D), p._batchEditable && b._batchEditable && p.isSelected(X) ? p.sm().each(function (G) {
                                b.setValue ? b.setValue(G, b, D, p) : kk(G, R, c, D)
                            }) : b.setValue ? b.setValue(X, b, D, p) : kk(X, R, c, D)
                    }
                }, j.setCurrentEditor = function (o) {
                    this.endEditing(), this._currentEditor = o, this.redraw()
                }, j.isEditing = function (n, X) {
                    var b = this, j = b._currentEditor;
                    if (!j)return !1;
                    if (X) {
                        var G = j.info;
                        return G ? (G.column || G.property) === X && G.data === n : !1
                    }
                    return !0
                }, j.endEditing = function () {
                    var T = this, z = T._currentEditor, I = T.getDataModel().getHistoryManager();
                    z && (delete T._currentEditor, z.commitValue && z.commitValue(z.info), T.redraw(), I && I.endInteraction())
                }, j.beginEditing = function (R) {
                    this.endEditing();
                    var X = this, F = R.column || R.property;
                    if (F.beginEditing) F.beginEditing(R); else {
                        var p = R.data, q = R.value, u = X.getSelectBackground(p), Q = F.getEnumValues(), b = F.getSlider(), s = F.getColorPicker();
                        if (b) {
                            var V = Ng(Fd.Slider, b);
                            return V.setValue(q), V.getView().onblur = function () {
                                X.endEditing()
                            }, V.isInstant() && (V.onValueChanged = function () {
                                X.setValue(p, F, V.getValue())
                            }), Hi(V, R), void 0
                        }
                        if (s || F.getValueType() === Vk) {
                            var o = Ng(Fd.ColorPicker, s);
                            return o.setValue(q), o.onClosed = function () {
                                X.endEditing()
                            }, o.isInstant() && (o.onValueChanged = function (G, H) {
                                X.setValue(p, F, H)
                            }), Hi(o, R), o.open(), void 0
                        }
                        if (Q) {
                            if (Fd.ComboBox) {
                                var L = new Fd.ComboBox;
                                L.setValue(q), L.setValues(Q), L.setLabels(F.getEnumLabels()), L.setIcons(F.getEnumIcons()), L.setEditable(F.isEnumEditable()), L.setStrict(F.isEnumStrict()), L.setMaxHeight(F.getEnumMaxHeight()), L.onClosed = function () {
                                    X.endEditing()
                                }, Hi(L, R), L.open()
                            } else Mr(Nn, R, u, Q, F);
                            return
                        }
                        var P = F.getValueType();
                        if (P === bn || pf(q))return X.setValue(p, F, !q), void 0;
                        if (F.getItemEditor()) {
                            var _ = cs(F.getItemEditor()), h = new _(p, F, X, R), J = h.getView();
                            return J._17Q = h, h.setValue(q), Pj(J), Hi(J, R), h.editBeginning && h.editBeginning(), void 0
                        }
                        Mr("input", R, u, U, F)
                    }
                }
            }, _44o: function (K) {
                K.init = function (Q) {
                    var C = this, v = C.th = new ep(Q), m = C._view = Uo(1, C);
                    C.tv = C._tableView = Q, Cs(m, v.getView()), Cs(m, Q.getView()), v.mp(function (x) {
                        x.property === Gf && C.iv()
                    }), C.iv()
                }, K.getTableView = function () {
                    return this.tv
                }, K.getTableHeader = function () {
                    return this.th
                }, K.getDataModel = function () {
                    return this.tv.dm()
                }, K.getColumnModel = function () {
                    return this.tv.getColumnModel()
                }, K.setColumns = function (u) {
                    this.tv.setColumns(u)
                }, K.addColumns = function (e) {
                    this.tv.addColumns(e)
                }, K.endEditing = function () {
                    this.tv.endEditing()
                }, K.validateImpl = function () {
                    var g = this, w = g.th, Y = Iq(w), P = {x: 0, y: 0, width: g.getWidth(), height: Y};
                    kg(w, P), P.y = Y, P.height = o(0, g.getHeight() - Y), kg(g.tv, P)
                }
            }, ms_vs: function (a) {
                a._41o = function () {
                    return this._29I.height < this._59I
                }, a._43o = function () {
                    var k = this;
                    k._41o() && (k._58I || (n(function () {
                        k._94O()
                    }, Fc), k.iv()), k._58I = new Date)
                }, a._94O = function () {
                    var i = this;
                    if (i._58I) {
                        var w = new Date;
                        w.getTime() - i._58I.getTime() >= Fc ? (delete i._58I, i.iv()) : n(function () {
                                i._94O()
                            }, Fc)
                    }
                }, a._93I = function () {
                    var A = this, N = A._27I;
                    if (A._58I || !A._autoHideScrollBar) {
                        N || Cs(A._79O, N = A._27I = xo());
                        var U = A._29I, t = U.height, E = A._59I, h = A.getScrollBarSize(), L = U.width - h - 2, M = t * (-A.ty() / E), e = t * (t / E), R = N.style;
                        E > t ? (Zk > e && (M = M + e / 2 - Zk / 2, 0 > M && (M = 0), M + Zk > t && (M = t - Zk), e = Zk), R.visibility = In, R.background = A.getScrollBarColor(), R.borderRadius = h / 2 + Be, kg(N, L, M, h, e)) : R.visibility = wk
                    } else N && (N.style.visibility = wk)
                }
            }, ms_hs: function (s) {
                s._40o = function () {
                    return this._29I.width < this._91I
                }, s._42o = function () {
                    var u = this;
                    u._40o() && (u._95O || (n(function () {
                        u._94I()
                    }, Fc), u.iv()), u._95O = new Date)
                }, s._94I = function () {
                    var Y = this;
                    if (Y._95O) {
                        var w = new Date;
                        w.getTime() - Y._95O.getTime() >= Fc ? (delete Y._95O, Y.iv()) : n(function () {
                                Y._94I()
                            }, Fc)
                    }
                }, s._92I = function () {
                    var P = this, z = P._28I;
                    if (P._95O || !P._autoHideScrollBar) {
                        z || Cs(P._79O, z = P._28I = xo());
                        var t = P._29I, h = t.width, m = P._91I, b = P.getScrollBarSize(), R = t.height - b - 2, y = h * (-P.tx() / m), V = h * (h / m), r = z.style;
                        m > h ? (Zk > V && (y = y + V / 2 - Zk / 2, 0 > y && (y = 0), y + Zk > h && (y = h - Zk), V = Zk), r.visibility = In, r.background = P.getScrollBarColor(), r.borderRadius = b / 2 + Be, kg(z, y, R, V, b)) : r.visibility = wk
                    } else z && (z.style.visibility = wk)
                }
            }
        }), Hm(Vj, ob(16, 16, [{type: Xm, rect: [1, 1, 14, 14], background: Ir}, {
            type: So,
            rect: [1, 1, 14, 14],
            width: 1,
            color: gc
        }, {
            type: Cq,
            points: [13, 3, 7, 12, 4, 8],
            borderWidth: 2,
            borderColor: "#FFF"
        }])), Hm(on, ob(16, 16, {type: So, rect: [1, 1, 14, 14], width: 1, color: gc})), Hm(ho, ob(16, 16, [{
            type: Vn,
            rect: [2, 2, 12, 12],
            borderWidth: 1,
            borderColor: gc,
            background: "#FFF"
        }, {type: Vn, rect: [4, 4, 8, 8], background: Ir}])), Hm(go, ob(16, 16, {
            type: Vn,
            rect: [2, 2, 12, 12],
            borderWidth: 1,
            borderColor: gc
        })), Bb._15Q = function (H) {
            H._29I = yq, H._59I = 0, H._91I = 0, H._5o = function (z) {
                var A = this;
                A._30I = new gr, A._rows = new gr, A._rowMap = {}, A._31I = 0, A._14I = 0, A._view = Uo(1, A), A._canvas = Dm(A._view), Cs(A._view, A._79O = xo()), A.dm(z ? z : new $q)
            }, H.getCheckIcon = function (M) {
                var h = this.sm(), b = h.co(M);
                return h.sg() ? gk(b ? ho : go) : gk(b ? Vj : on)
            }, H.checkData = function (L) {
                var q = this.sm(), $ = q.co(L);
                q.sg() && $ || (this._32o = 1, $ ? q.rs(L) : q.as(L), delete this._32o)
            }, H.getDataAt = function (G) {
                G.target && (G = this.lp(G));
                var w = d(G.y / this._rowHeight), X = this._rows;
                return 0 > w || w >= X.size() ? U : X.get(w)
            }, H.onDataDoubleClicked = function () {
            }, H.onDataClicked = function () {
            }, H.adjustTranslateX = function () {
                return 0
            }, H.adjustTranslateY = function (R) {
                var u = this.getHeight() - this._59I;
                return u > R && (R = u), R > 0 ? 0 : I(R)
            }, H.onPropertyChanged = function (b) {
                var H = this, T = b.property;
                Zr[T] ? H.ivm() : Mq[T] || H.redraw(), T === Nf ? H._42o() : T === Wd && H._43o()
            }, H.getLabel = function (s) {
                return s.toLabel()
            }, H.getLabelFont = function () {
                return this._labelFont
            }, H.getLabelColor = function (m) {
                var F = this;
                if (F.isCheckMode()) {
                    if (F._focusData === m)return F._labelSelectColor
                } else if (F.isSelected(m))return F._labelSelectColor;
                return F._labelColor
            }, H.getStartRowIndex = function () {
                return this._31I
            }, H.getEndRowIndex = function () {
                return this._14I
            }, H.getRowDatas = function () {
                return this._rows
            }, H.getRowIndex = function (f) {
                return this._rowMap[f._id]
            }, H.getRowSize = function () {
                return this._rows.size()
            }, H.getViewRect = function () {
                return Nh(this._29I)
            }, H.isVisible = function (i) {
                return this._visibleFunc ? this._visibleFunc(i) : !0
            }, H.getCurrentSortFunc = function () {
                return this._sortFunc
            }, H.setDataModel = function (G) {
                var A = this, n = A._dataModel, P = A._selectionModel;
                n !== G && (n && (n.umm(A.handleDataModelChange, A), n.umd(A.handleDataPropertyChange, A), n.umh(A.handleHierarchyChange, A), P || n.sm().ums(A.handleSelectionChange, A)), A._dataModel = G, G.mm(A.handleDataModelChange, A), G.md(A.handleDataPropertyChange, A), G.mh(A.handleHierarchyChange, A), P ? P._21I(G) : G.sm().ms(A.handleSelectionChange, A), A.fp("dataModel", n, G))
            }, H.validateModel = function () {
                var q = this;
                q._rows.clear(), q._rowMap = {}, q.buildChildren(q._dataModel._roots);
                var _ = q._rows = q._rows.toList(q.isVisible, q), C = 0, Z = q.getCurrentSortFunc(), o = _.size();
                for (Z && _.sort(Z); o > C; C++)q._rowMap[_.get(C)._id] = C
            }, H.buildChildren = function (f) {
                var S = this;
                f.each(function (D) {
                    S._rows.add(D), S.buildChildren(D._children)
                })
            }, H.handleDataModelChange = function () {
                this.ivm()
            }, H.handleDataPropertyChange = function (e) {
                "parent" === e.property ? this.ivm() : this.invalidateData(e.data)
            }, H.handleHierarchyChange = function () {
                this.ivm()
            }, H.handleSelectionChange = function (T) {
                T.datas.each(this.invalidateData, this), this.onSelectionChanged(T)
            }, H.onSelectionChanged = function (M) {
                var E = this, o = E.sm();
                !E.isAutoMakeVisible() || 1 !== o.size() || "set" !== M.kind && "append" !== M.kind || E._32o || E.makeVisible(o.ld())
            }, H.handleBackgroundClick = function (m) {
                kf(m) && !this.isCheckMode() && this.sm().cs()
            }, H.makeVisible = function (x) {
                x && (this._23I = x, this.iv())
            }, H.scrollToIndex = function (m) {
                var s = this, q = s._29I, A = q.height, x = s._rowHeight, V = x * m;
                m >= 0 && m < s._rows.size() && A > 0 && (V + x > q.y + A ? s.ty(-V + A - x) : V < q.y && s.ty(-V))
            }, H.ivm = function () {
                this.invalidateModel()
            }, H.invalidateModel = function () {
                var U = this;
                U._96I || (U._96I = 1, U._32I = 1, delete U._24I, U.iv())
            }, H.redraw = function () {
                var n = this;
                n._32I || (n._32I = 1, delete n._24I, n.iv())
            }, H.invalidateData = function (s) {
                var p = this;
                W ? p.redraw() : p._32I || (p._24I || (p._24I = {}), p._24I[s._id] = s, p.iv())
            }, H.getFocusData = function () {
                return this._focusData
            }, H.setFocusDataById = function (K) {
                this.setFocusData(this.dm().getDataById(K))
            }, H.setFocusData = function (f) {
                var a = this, x = a._focusData;
                x !== f && (a._focusData = f, a.fp("focusData", x, f), x && a.invalidateData(x), f && (a.invalidateData(f), a.isAutoMakeVisible() && a.makeVisible(f)))
            }, H.drawRowBackground = function (Y, d, x, E, i, I, H) {
                var u = this, K = u.isCheckMode();
                (d === u._focusData && K || x && !K) && ns(Y, E, i, I, H, u.getSelectBackground(d))
            }, H.drawData = function (h, $, U) {
                var p = this, C = p._rowHeight, y = C * U, i = p._29I, G = i.x, O = i.width;
                h.save(), h.beginPath(), h.rect(G, y, O, C), h.clip(), p._87o(p.drawRow(h, $, p.isSelected($), G, y, O, C), U, G, y, O, C), h.restore(), p._rowLineVisible && ns(h, G, y + C - 1, O, 1, p._rowLineColor)
            }, H._12I = function (P) {
                var B = this, b = B._31I, S = B._29I, m = S.x, s = S.y, T = S.width, R = S.height;
                for (P.beginPath(), P.rect(m, s, T, R), P.clip(), P.clearRect(m, s, T, R), B._76o(), B._93db(P); b < B._14I; b++)B.drawData(P, B._rows.get(b), b);
                B._92db(P)
            }, H._13I = function (Y) {
                for (var t, D = this, s = D._rowHeight, J = D._29I, n = J.x, E = J.width, _ = D._31I, X = D._30I; _ < D._14I; _++)t = D._rows.get(_), D._24I[t._id] && X.add({
                    data: t,
                    index: _
                });
                X.isEmpty() || (Y.beginPath(), X.each(function (H) {
                    Y.rect(n, H.index * s, E, s)
                }), Y.clip(), X.each(function (G) {
                    Y.clearRect(n, G.index * s, E, s)
                }), X.each(function (r) {
                    D._77o(r.index)
                }), D._93db(Y), X.each(function (S) {
                    D.drawData(Y, S.data, S.index)
                }), D._92db(Y), X.clear())
            }, H.validateImpl = function () {
                var q = this, T = q._canvas, C = q.getWidth(), v = q.getHeight(), w = q._rowHeight, o = q._32I;
                (C !== T.clientWidth || v !== T.clientHeight) && (Xq(T, C, v), o = 1);
                var S = x && !r;
                q._96I && !S && q.validateModel();
                var B = q._29I, a = {
                    x: -q.tx(),
                    y: -q.ty(),
                    width: C,
                    height: v
                }, G = q._rows.size(), p = Cl(T), A = q._23I;
                o || sl(a, B) || (o = 1), q._29I = a, q._59I = G * w, q._31I = d(a.y / w), q._14I = z((a.y + a.height) / w), q._31I < 0 && (q._31I = 0), q._14I > G && (q._14I = G), q._99I && o && q._99I(), Yj(p, q.tx(), q.ty(), 1), o ? q._12I(p) : q._24I && q._13I(p), q._93I(), q._92I(), p.restore(), q._32I = q._24I = q._96I = U, A && (q.scrollToIndex(q.getRowIndex(A)), delete q._23I), q.tx(q.tx()), q.ty(q.ty())
            }
        }, Bb._48o = function (H) {
            H._rootVisible = !0, H._rootData = U, H._35o = function () {
                this._expandMap = {}, this._levelMap = {}
            }, H.validateModel = function () {
                var V = this, Y = V._rootData;
                V._rows.clear(), V._levelMap = {}, V._rowMap = {}, V._currentLevel = 0, Y ? V._rootVisible ? V.isVisible(Y) && V.buildData(Y) : V.buildChildren(Y) : V.buildChildren(), delete V._currentLevel
            }, H.buildData = function (i) {
                var N = this, I = i._id, Y = N._rows;
                N._rowMap[I] = Y.size(), Y.add(i), N._levelMap[I] = N._currentLevel, N.isExpanded(i) && (N._currentLevel++, N.buildChildren(i), N._currentLevel--)
            }, H.buildChildren = function (z) {
                var X = this, E = z ? z._children : X._dataModel._roots, U = X.getCurrentSortFunc();
                U && X.isChildrenSortable(z) ? E.toList(X.isVisible, X).sort(U).each(X.buildData, X) : E.each(function (h) {
                        X.isVisible(h) && X.buildData(h)
                    })
            }, H.getLevel = function (w) {
                return this._levelMap[w._id]
            }, H.getToggleIcon = function (d) {
                var g = this, e = g._loader, M = g._collapseIcon;
                return e && !e.isLoaded(d) ? M : d.hasChildren() ? g.isExpanded(d) ? g._expandIcon : M : U
            }, H.isCheckMode = function () {
                return this._checkMode != U
            }, H.isChildrenSortable = function () {
                return !0
            }, H.handleDataModelChange = function (N) {
                var C = this;
                N.kind === Mg ? delete C._expandMap[N.data._id] : N.kind === uc && (C._expandMap = {}), C.ivm()
            }, H.toggle = function (A) {
                var o = this;
                o.isExpanded(A) ? o.collapse(A) : o.expand(A)
            }, H.isExpanded = function (_) {
                return 1 === this._expandMap[_._id]
            }, H.expand = function (q) {
                var B = this, i = B._loader;
                B.isExpanded(q) || (i && !i.isLoaded(q) && i.load(q), B._expandMap[q._id] = 1, B.ivm(), B.onExpanded(q))
            }, H.onExpanded = function () {
            }, H.collapse = function (S) {
                var d = this;
                d.isExpanded(S) && (delete d._expandMap[S._id], d.ivm(), d.onCollapsed(S))
            }, H.onCollapsed = function () {
            }, H.expandAll = function () {
                var f = this;
                f._dataModel.each(function (S) {
                    S.hasChildren() && (f._expandMap[S._id] = 1)
                }), f.ivm()
            }, H.collapseAll = function () {
                this._expandMap = {}, this.ivm()
            }, H.makeVisible = function (K) {
                if (K) {
                    var O = this;
                    if (!O._rootData || K.isDescendantOf(O._rootData)) {
                        for (var l = K._parent; l;)O.expand(l), l = l._parent;
                        O._23I = K, O.iv()
                    }
                }
            }, H.checkData = function (a) {
                var B, Z = this, M = Z._checkMode, _ = Z.sm(), C = _.co(a);
                if (!_.sg() || !C) {
                    if (Z._32o = 1, M === i) C ? _.rs(a) : _.as(a); else if (M === Kl) B = new gr(a), B.addAll(a._children); else if ("descendant" === M) B = new gr, _r(a, B); else if ("all" === M && (B = new gr, _r(a, B), !C))for (var k = a._parent; k;)B.add(k), k = k._parent;
                    B && (C ? _.rs(B) : _.as(B)), delete Z._32o
                }
            }, H._97I = function (c, d, b, t, O, h, z) {
                var R = this, m = R._indent, L = R._levelMap[d._id], Q = R.getIconWidth(d), P = gk(R.getToggleIcon(d));
                P ? (t += m * L, ym(c, P, t + m / 2, O + z / 2, d, R), t += m) : t += m * (L + 1), R._checkMode && (ym(c, R.getCheckIcon(d), t + m / 2, O + z / 2, d, R), t += m), R.drawIcon(c, d, t, O, Q, z), R.drawLabel(c, d, t + Q, O, z)
            }
        }, Bb._14Q = function (n) {
            n.getIcon = function (M) {
                return M.getIcon()
            }, n.getIconWidth = function (Z) {
                return this.getIcon(Z) ? this._indent : 0
            }, n.drawIcon = function (I, v, k, X, q, C) {
                if (q) {
                    var e = this, N = e.getBodyColor(v), n = gk(e.getIcon(v), N);
                    n && (C -= e.isRowLineVisible() ? 1 : 0, Zq(I, n, cm, k, X, q, C, v, e, N), Nl(I, e.getBorderColor(v), k, X, q, C))
                }
            }, n.drawLabel = function (y, W, c, F, k) {
                var w = this;
                Yr(y, w.getLabel(W), w.getLabelFont(W), w.getLabelColor(W), c, F, 0, k)
            }
        }, Bb._50o = function (O) {
            O._98I = function () {
                var x = this, q = x._39o = new $q;
                x._60I = new gr, q.mm(x._17o, x), q.md(x._18o, x), q.mh(x._19o, x)
            }, O.setColumns = function (G) {
                this._39o.clear(), this.addColumns(G)
            }, O.addColumns = function (h) {
                var D = this._39o;
                h.forEach(function (X) {
                    if (!(X instanceof us)) {
                        var P = cs(X.className);
                        X = Ng(P ? P : us, X)
                    }
                    D.add(X)
                })
            }, O.onColumnClicked = function () {
            }, O.onCheckColumnClicked = function () {
            }, O._3Q = function (a) {
                for (var o, k = 0, e = this._60I, s = e.size(); s > k; k++)if (o = e.get(k), o.column === a)return o;
                return U
            }, O.getColumnAt = function (Q) {
                var V = this._4Q(Q);
                return V ? V.column : U
            }, O._4Q = function (W) {
                for (var f = this, c = W.target ? f.lp(W).x : W.x, X = f._60I, v = 0; v < X.size(); v++) {
                    var K = X.get(v), G = K.startX;
                    if (c >= G && c < G + K.column.getWidth())return K
                }
                return U
            }, O.getToolTip = function (H) {
                var $ = this, S = $.getDataAt(H), Y = $.getColumnAt(H);
                return S && Y ? Y.getToolTip(S, $) : U
            }, O.adjustTranslateX = function (q) {
                var e = this.getWidth() - this._91I;
                return e > q && (q = e), q > 0 ? 0 : I(q)
            }, O._99I = function () {
                var K = this, V = K._29I, B = K._60I;
                B.clear(), K._91I = 0, K._39o._roots.each(function (E) {
                    if (E.isVisible()) {
                        var F = K._91I + E.getWidth();
                        K._91I <= V.x + V.width && F >= V.x && B.add({column: E, startX: K._91I}), K._91I = F
                    }
                })
            }, O.drawData = function (b, U, u) {
                var s = this, M = s._rowHeight, a = M * u, f = s.isSelected(U), v = s._29I, i = v.x, x = v.width;
                s.drawRowBackground(b, U, f, i, a, x, M), s._60I.each(function (_) {
                    var B = _.column, T = _.startX, L = B.getWidth();
                    L > 0 && !s.isEditing(U, B) && (b.save(), b.beginPath(), b.rect(T, a, L, M), b.clip(), s._87o(s.drawCell(b, U, f, B, T, a, L, M), u, T, a, L, M), s._columnLineVisible && ns(b, T + L - 1, a, 1, M, s._columnLineColor), b.restore())
                }), s._rowLineVisible && ns(b, i, a + M - 1, x, 1, s._rowLineColor)
            }, O.drawCell = function (B, X, a, E, Y, J, M, _) {
                var K = this;
                if (E.drawCell)return E.drawCell(B, X, a, E, Y, J, M, _, K);
                var i = K.getValue(X, E);
                aq(B, i, E, K.getLabelFont(X, E, i), K.getLabelColor(X, E, i), Y, J, M, _, X, K)
            }, O.getColumnModel = function () {
                return this._39o
            }, O._17o = function () {
                this.redraw()
            }, O._18o = function (a) {
                var X = this;
                a.data === X._sortColumn && $n[a.property] ? X.ivm() : (X._42o(), X.redraw())
            }, O._19o = function () {
                this.redraw()
            }, O.getCurrentSortFunc = function () {
                var F = this, G = F._sortColumn;
                if (G && G.isSortable()) {
                    var z = G.getSortFunc(), b = mi === G.getSortOrder() ? 1 : -1;
                    return z || (z = yf), function (q, Y) {
                        return z.call(F, F.getValue(q, G), F.getValue(Y, G), q, Y) * b
                    }
                }
                return F._sortFunc
            }, O.isCellEditable = function (M, a) {
                return a.isEditable() && this.isEditable()
            }, O._37O = function (s, X) {
                if (kf(X))for (var Z = this, I = Z.lp(X), V = Z._60I, L = Z._rowHeight, m = Z._29I, t = m.x, p = m.y, D = m.width, l = m.height, a = 0; a < V.size(); a++) {
                    var G = V.get(a), v = G.startX, M = G.column, $ = M.getWidth();
                    if (M !== Z._31o && M !== Z._4o && Z.isCellEditable(s, M) && I.x >= v && I.x < v + $) {
                        var J = {x: v, y: Z.getRowIndex(s) * L, width: $, height: L}, e = {
                            x: J.x + Z.tx(),
                            y: J.y + Z.ty(),
                            width: J.width,
                            height: J.height
                        }, K = 0, o = 0;
                        return J.x < t ? K = J.x - t : J.x + J.width > t + D && (K = J.x + J.width - t - D), K && (Z.tx(Z.tx() - K), e.x -= K), J.y < p ? o = J.y - p : J.y + L > p + l && (o = J.y + L - p - l), o && (Z.ty(Z.ty() - o), e.y -= o), Z.beginEditing({
                            data: s,
                            column: M,
                            value: Z.getValue(s, M),
                            event: X,
                            rect: J,
                            editorRect: e,
                            view: Z
                        }), void 0
                    }
                }
            }
        }, Fd.BaseItemEditor = function (y, K, D, W) {
            this._data = y, this._column = K, this._master = D, this._editInfo = W
        }, ao("BaseItemEditor", m, {
            ms_ac: ["data", "column", "master", "editInfo"], editBeginning: function () {
            }, getView: function () {
            }, getValue: function () {
            }, setValue: function () {
            }
        });
        var lk = f.Tab = function () {
            Eg(lk, this)
        };
        zd("Tab", bf, {ms_ac: ["view", "closable", "disabled"], _icon: U, _closable: !1, _disabled: !1, setParent: wq});
        var us = f.Column = function () {
            Eg(us, this)
        };
        zd("Column", bf, {
            _46o: 1,
            ms_ac: ["accessType", "valueType", In, fj, gh, qo, "align", Vk, "sortOrder", Rh, "sortable", "nullable", "emptiable", "slider", "colorPicker", "itemEditor"],
            _visible: !0,
            _width: 80,
            _sortOrder: mi,
            _sortFunc: U,
            _sortable: !0,
            setWidth: function (K) {
                16 > K && (K = 16);
                var F = this._width;
                this._width = K, this.fp(qo, F, K)
            },
            getToolTip: function (E, _) {
                return this.formatValue(_.getValue(E, this))
            }
        });
        var ds = f.Property = function () {
            Eg(ds, this)
        };
        zd("Property", bf, {
            _46o: 1,
            ms_ac: ["accessType", "valueType", fj, gh, "categoryName", Vk, "align", "nullable", "emptiable", "slider", "itemEditor", "colorPicker"],
            _categoryName: U,
            getToolTip: function (m, O, o) {
                var p = this;
                return O ? p.formatValue(o.getValue(m, p)) : o.getPropertyName(p)
            }
        }), Fd.AccordionView = function () {
            var M = this;
            M._20o = {}, M._21o = new gr, M._10o = U, M._9o = U, M._11o = U, M._view = Uo(0, M), M.iv()
        }, ao("AccordionView", m, {
            ms_v: 1,
            ms_fire: 1,
            ms_ac: [yc, ip, "titleHeight", tb, _p, "titleBackground", "selectWidth", yl, "orientation", "separatorColor"],
            _expandIcon: H.accordionViewExpandIcon,
            _collapseIcon: H.accordionViewCollapseIcon,
            _titleHeight: Gb,
            _labelColor: H.accordionViewLabelColor,
            _labelFont: H.accordionViewLabelFont,
            _titleBackground: H.accordionViewTitleBackground,
            _selectBackground: H.accordionViewSelectBackground,
            _selectWidth: H.accordionViewSelectWidth,
            _orientation: "v",
            _separatorColor: H.accordionViewSeparatorColor,
            onPropertyChanged: function () {
                this.iv()
            },
            getView: function () {
                return this._view
            },
            getTitles: function () {
                return this._21o
            },
            getCurrentTitle: function () {
                return this._10o
            },
            add: function (T, l, w, X) {
                var e = this, c = xo();
                if (e._20o[T])throw T + " already exists";
                c.onmousedown = Fr, c.style.cursor = Go, c.addEventListener(P ? Ze : rl, function (m) {
                    Fr(m)
                }, !1), c.addEventListener(P ? ic : Uk, function (p) {
                    Fr(p), kf(p) && (e._10o === T ? e.collapse() : e.expand(T))
                }, !1), Cs(e._view, c), e._20o[T] = {
                    content: l,
                    div: c,
                    canvas: Dm(c),
                    icon: X
                }, e._21o.add(T), w && e.expand(T), e.iv()
            },
            remove: function (p) {
                var J = this, x = J._20o[p];
                x && (jm(x.div), delete J._20o[p], J._21o.remove(p), J.iv())
            },
            clear: function () {
                var V = this;
                V._20o = {}, V._21o.clear(), V.iv()
            },
            isExpanded: function (b) {
                return this._10o === b
            },
            expand: function (z) {
                var x = this;
                x._20o[z] && x._10o !== z && (x._10o = z, x.onExpanded(z), x.iv())
            },
            onExpanded: function () {
            },
            collapse: function () {
                var S = this;
                S._10o && (S.onCollapsed(S._10o), delete S._10o, S.iv())
            },
            onCollapsed: function () {
            },
            initCanvas: function (P, K, z) {
                Xq(P, K, z);
                var Q = Cl(P);
                return Yj(Q, 0, 0, 1), Q.clearRect(0, 0, K, z), Q
            },
            drawTitle: function (m, f, V, n, l) {
                var o = this, k = gk(l.icon), Z = o.isExpanded(f), K = o._titleHeight, D = o._titleBackground, E = o._selectWidth, R = o._separatorColor, Y = gk(Z ? o._expandIcon : o._collapseIcon), i = E + 4;
                ns(m, 0, 0, V, n, D), Z && E && ns(m, 0, 0, E, n, o._selectBackground), (Z || o._21o.get(o._21o.size() - 1) !== f) && ns(m, 0, n - 1, V, 1, R ? R : Oq(D)), k && (ym(m, k, i + ef(k) / 2, K / 2), i += ef(k) + 2), Yr(m, f, o.getLabelFont(f), o.getLabelColor(f), i, 0, 0, K), Y && ym(m, Y, V - ef(Y) / 2 - 4, K / 2)
            },
            validateImpl: function () {
                var H = this, x = H._view, r = 0, W = 0, M = H.getWidth(), q = H.getHeight(), F = H._titleHeight, R = H._21o.size() * F, e = H._11o, f = H._9o;
                delete H._11o, delete H._9o, H._21o.each(function (E) {
                    var P, K, b = H._20o[E], O = b.content, t = H._10o === E;
                    Ic(H) ? (kg(b.div, r, 0, F, q), P = H.initCanvas(b.canvas, F, q), es(P, 0, q), $g(P, -a), H.drawTitle(P, E, q, F, b), P.restore(), t ? (K = o(0, M - R), O && (H._11o = O, H._9o = Un(O), kg(O, r + F, 0, K, q)), r += F + K) : r += F) : (kg(b.div, 0, W, M, F), P = H.initCanvas(b.canvas, M, F), H.drawTitle(P, E, M, F, b), P.restore(), t ? (K = o(0, q - R), O && (H._11o = O, H._9o = Un(O), kg(O, 0, W + F, M, K)), W += F + K) : W += F)
                });
                var u = H._9o;
                e && e !== H._11o && e.endEditing && e.endEditing(), u && u !== f && Cs(x, u), f && f !== u && jm(f)
            }
        }), Fd.SplitView = function (b, j, T, h) {
            var a = this, $ = a._dividerDiv = xo(), K = a._60O = Dm(), s = a._61O = Dm(), N = K.style, i = s.style;
            a._view = Uo(1, a), Cs(a._view, $), N.msTouchAction = Zm, N.pointerEvents = Zm, N.cursor = Go, i.msTouchAction = Zm, i.pointerEvents = Zm, i.cursor = Go, b && a.setLeftView(b), j && a.setRightView(j), T && a.setOrientation(T), h != U && a.setPosition(h), a.setStatus(we), new Ti(a)
        }, ao("SplitView", m, {
            ms_v: 1,
            ms_fire: 1,
            ms_ac: ["continuousLayout", "dividerSize", "dividerBackground", "toggleIcon", "togglable", "dragOpacity", "orientation", "draggable", "status"],
            _continuousLayout: !1,
            _position: .5,
            _togglable: !0,
            _orientation: "h",
            _draggable: !0,
            _dividerSize: H.splitViewDividerSize,
            _dividerBackground: H.splitViewDividerBackground,
            _dragOpacity: H.splitViewDragOpacity,
            _toggleIcon: H.splitViewToggleIcon,
            onPropertyChanged: function () {
                this.iv()
            },
            getDividerDiv: function () {
                return this._dividerDiv
            },
            getPosition: function () {
                return this._position
            },
            setPosition: function (Y, S) {
                var s = this, C = s._position;
                isNaN(Y) || (S || (s._82O = 0 > Y ? -1 : Y > 1 ? 1 : 0), s._position = Y, s.fp(ec, C, Y))
            },
            getLeftView: function () {
                return this._leftView
            },
            setLeftView: function (d) {
                var c = this, _ = c._leftView, u = c._view;
                if (c._leftView !== d) {
                    if (_ && _ !== c._rightView) {
                        var M = Un(_);
                        M.parentNode === u && jm(M)
                    }
                    if (c._leftView = d, d) {
                        var E = Un(d);
                        E.parentNode !== u && u.insertBefore(E, c._dividerDiv)
                    }
                    c.fp("leftView", _, d)
                }
            },
            getRightView: function () {
                return this._rightView
            },
            setRightView: function (o) {
                var E = this, u = E._rightView, l = E._view;
                if (E._rightView !== o) {
                    if (u && u !== E._leftView) {
                        var G = Un(u);
                        G.parentNode === l && jm(G)
                    }
                    if (E._rightView = o, o) {
                        var C = Un(o);
                        C.parentNode !== l && l.insertBefore(C, E._dividerDiv)
                    }
                    E.fp("rightView", u, o)
                }
            },
            validateImpl: function () {
                var F = this, U = F._draggable, r = F._position, d = F.getWidth(), z = F.getHeight(), C = F._dividerSize, x = F._dividerBackground, b = P ? 18 : 8, A = F._dividerDiv, B = F._82O, H = F._60O, E = F._61O, K = F._toggleIcon, e = F._status, q = A.style, k = null, V = P ? 20 : 4, l = K.comps[0];
                C >= b || 0 === C ? F._coverDiv && (jm(F._coverDiv), delete F._coverDiv) : F._coverDiv || (F._coverDiv = xo(), j && (F._coverDiv.style.background = vp), Cs(A, F._coverDiv)), F._togglable ? H.parentNode || (Cs(A, H), Cs(A, E)) : (jm(H), jm(E));
                var y = F._coverDiv, u = F._leftView, G = F._rightView;
                if (Ic(F)) {
                    if (C > d && (C = d), e === we)if (1 === B)var W = O(r, d), m = o(0, d - C - W); else-1 === B ? (m = O(-r, d), W = o(0, d - C - m)) : (W = I((d - C) * r), m = o(0, d - C - W)); else"cl" === e ? (W = 0, m = o(0, d - C)) : "cr" === e && (m = 0, W = o(0, d - C));
                    u && kg(u, 0, 0, W, z), G && kg(G, W + C, 0, m, z), kg(A, W, 0, C, z), F._22o = W, y && (kg(y, C / 2 - b / 2, 0, b, z), y.style.cursor = U ? Kg : ""), A.style.cursor = U ? Kg : "";
                    var _ = A.clientHeight / 2, R = A.clientWidth;
                    Xq(H, R, R), kg(H, 0, _ - R - V, R, R), k = Cl(H), Yj(k, 0, 0, 1), l.rotation = -a, Kj(k, K, 0, 0, R, R), k.restore(), Xq(E, R, R), kg(E, 0, _ + V, R, R), k = Cl(E), Yj(k, 0, 0, 1), l.rotation = a, Kj(k, K, 0, 0, R, R), k.restore()
                } else {
                    if (C > z && (C = z), e === we)if (1 === B)var g = O(r, z), M = o(0, z - C - g); else-1 === B ? (M = O(-r, z), g = o(0, z - C - M)) : (g = I((z - C) * r), M = o(0, z - C - g)); else"cl" === e ? (g = 0, M = o(0, z - C)) : "cr" === e && (M = 0, g = o(0, z - C));
                    u && kg(u, 0, 0, d, g), G && kg(G, 0, g + C, d, M), kg(A, 0, g, d, C), F._22o = g, y && (kg(y, 0, C / 2 - b / 2, d, b), y.style.cursor = U ? ps : ""), q.cursor = U ? ps : "";
                    var w = A.clientWidth / 2, R = A.clientHeight;
                    Xq(H, R, R), kg(H, w - R - V, 0, R, R), k = Cl(H), Yj(k, 0, 0, 1), l.rotation = 0, Kj(k, K, 0, 0, R, R), k.restore(), Xq(E, R, R), kg(E, w + V, 0, R, R), k = Cl(E), Yj(k, 0, 0, 1), l.rotation = h, Kj(k, K, 0, 0, R, R), k.restore()
                }
                q.background = x
            }
        });
        var Ti = function (E) {
            this.sv = E, this.addListeners()
        };
        Oh(Ti, m, {
            ms_listener: 1, getView: function () {
                return this.sv.getView()
            }, handle_touchstart: function (J) {
                var S = this, h = S.sv, i = h._dividerDiv, w = h._60O, B = h._61O, F = h._status, W = J.target;
                if (W === w) F === we ? h.setStatus("cl") : "cr" === F && h.setStatus(we); else if (W === B) F === we ? h.setStatus("cr") : "cl" === F && h.setStatus(we); else if (nk(J) && (W === i || W === h._coverDiv) && (Fr(J), h.isDraggable())) {
                    h.getLeftView(), h.getRightView();
                    var L = S.maskDiv = xo();
                    if (L.style.left = 0, L.style.top = 0, L.style.width = h.getWidth() + "px", L.style.height = h.getHeight() + "px", h.getView().appendChild(L), !h.isContinuousLayout()) {
                        var b = S.resizeDiv = xo();
                        b.style.left = i.style.left, b.style.top = i.style.top, b.style.width = i.style.width, b.style.height = i.style.height, b.style.opacity = h.getDragOpacity(), b.style.background = h.getDividerBackground(), Cs(S.getView(), b)
                    }
                    S._lastAbsPosition = h._22o, S._86o = Ic(h) ? rc(J).x : rc(J).y, gl(S, J)
                }
            }, handleWindowTouchMove: function (h) {
                nk(h) && this.update(h, this.sv.isContinuousLayout())
            }, handleWindowTouchEnd: function (y) {
                var P = this;
                P.update(y, !0), P.sv.setStatus(we), P.maskDiv && jm(P.maskDiv), P.resizeDiv && jm(P.resizeDiv), P.maskDiv = P.resizeDiv = U
            }, handle_mousedown: function (z) {
                kf(z) && this.handle_touchstart(z)
            }, handleWindowMouseMove: function (w) {
                this.handleWindowTouchMove(w)
            }, handleWindowMouseUp: function (K) {
                this.handleWindowTouchEnd(K)
            }, update: function (E, m) {
                var Q = this, X = Q.sv, B = Ic(X) ? X.getWidth() : X.getHeight(), C = X._dividerSize, K = Q._lastAbsPosition - Q._86o;
                Ic(X) ? (K += rc(E).x, K > B - C && (K = B - C), 0 > K && (K = 0), Q.resizeDiv && (Q.resizeDiv.style.left = K + Be)) : (K += rc(E).y, K > B - C && (K = B - C), 0 > K && (K = 0), Q.resizeDiv && (Q.resizeDiv.style.top = K + Be)), m && B !== C && (1 === X._82O ? X.setPosition(K, 1) : -1 === X._82O ? X.setPosition(K - B + C, 1) : X.setPosition(K / (B - C), 1))
            }
        }), Fd.TabView = function () {
            var N = this, O = N._view = Uo(1, N), F = N._91O = xo(1), H = N._tabModel = new $q, E = H.sm(), f = N.invalidate;
            N._7o = new gr, N._canvas = Dm(F), Cs(O, F), Cs(O, N._92O = xo(1)), E.setSelectionMode(G), E.ms(f, N), H.mm(f, N), H.md(f, N), H.mh(f, N), new bi(N), N.iv()
        }, ao("TabView", m, {
            ms_v: 1,
            ms_fire: 1,
            ms_tx: 1,
            ms_ty: 1,
            ms_lp: 1,
            ms_ac: ["movable", "tabGap", "tabHeight", "tabPosition", tb, _p, "tabBackground", "selectWidth", yl, "moveBackground", "insertColor"],
            _tabPosition: dh,
            _tabHeight: Gb,
            _tabGap: H.tabViewTabGap,
            _labelColor: H.tabViewLabelColor,
            _labelFont: H.tabViewLabelFont,
            _tabBackground: H.tabViewTabBackground,
            _selectWidth: H.tabViewSelectWidth,
            _selectBackground: H.tabViewSelectBackground,
            _moveBackground: H.tabViewMoveBackground,
            _insertColor: H.tabViewInsertColor,
            _movable: !0,
            getContentDiv: function () {
                return this._92O
            },
            getTitleDiv: function () {
                return this._91O
            },
            getTabModel: function () {
                return this._tabModel
            },
            add: function (X, g, n) {
                var f = new lk, o = this._tabModel;
                return f.setName(X), f.setView(g), o.add(f), n && o.sm().ss(f), f
            },
            getLabel: function (O) {
                return O.toLabel()
            },
            onPropertyChanged: function () {
                this.iv()
            },
            _7Q: function (J) {
                this._23o = J, this.iv()
            },
            get: function (r) {
                var b = this, $ = b._tabModel;
                if (Bf(r))return $._roots.get(r);
                if (rd(r)) {
                    var I;
                    return $.each(function (g) {
                        r === b.getLabel(g) && (I = g)
                    }), I
                }
                return r instanceof lk ? r : U
            },
            select: function (r) {
                this._tabModel.sm().ss(this.get(r))
            },
            remove: function (w) {
                var Q = this;
                if (w = Q.get(w)) {
                    var z = Q._tabModel, A = z._roots.indexOf(w);
                    Q._tabModel.remove(w), Q._12Q(--A)
                }
            },
            getCurrentTab: function () {
                return this._8o
            },
            hideTabView: function (U, T) {
                T.parentNode === this._92O && (cj(T) ? (T.style.display = Bn, T._tab_ = U) : jm(T), as())
            },
            showTabView: function (i, q) {
                cj(q) && (q.style.display = "block", q._tab_ = i), q.parentNode !== this._92O && (Cs(this._92O, q), as())
            },
            _24o: function () {
                var C, a = this, f = a._8o, u = a._9o, j = a._tabModel.sm().ld();
                j && (C = Un(j.getView())), C !== u && (u && (f.getView() && f.getView().endEditing && f.getView().endEditing(), a.hideTabView(f, u)), C && a.showTabView(j, C)), a._8o = j, a._9o = C, f !== j && a.onTabChanged(f, j)
            },
            onTabClosing: function () {
                return !0
            },
            onTabChanged: function () {
            },
            onTabClosed: function (b, g) {
                this._12Q(--g)
            },
            _12Q: function (H) {
                var e = this, C = e._tabModel, Z = C.size();
                if (Z && !C.sm().ld()) {
                    H == U && (H = 0), H >= Z && (H = Z - 1), 0 > H && (H = 0);
                    for (var $ = H; $ >= 0; $--) {
                        var P = e.get($);
                        if (!P.isDisabled())return e.select(P), P
                    }
                    for ($ = H + 1; Z > $; $++)if (P = e.get($), !P.isDisabled())return e.select(P), P
                }
            },
            _9Q: function (C) {
                var I = 4, s = gk(C.getIcon());
                s && (I += ef(s, C) + 4);
                var p = this.getLabel(C);
                return p && (I += Mo(this.getLabelFont(C), p).width + 4), C.isClosable() && (I += 10), I
            },
            drawTab: function (N, l, z, B, i, P, w) {
                var n, e = this, M = e._tabPosition, H = z + 4, _ = e._selectWidth, d = gk(l.getIcon()), c = l.isDisabled(), g = e.getLabelColor(l), I = e.getLabelFont(l), v = e.getLabel(l), V = e._selectBackground, S = M === rk + "-vertical", b = M === ks + "-vertical";
                (S || b) && (H = B + 4), c && (N.globalAlpha = Mp), ns(N, z, B, i, P, w), l === e._8o && _ && (M === dh ? ns(N, z, B + P - _, i, _, V) : M === rk ? ns(N, z + i - _, B, _, P, V) : M === ks ? ns(N, z, B, _, P, V) : S ? ns(N, z + i - _, B, _, P, V) : b ? ns(N, z, B, _, P, V) : ns(N, z, B, i, _, V));
                var F = i / 2;
                if (S && (es(N, F, B + P / 2), $g(N, h), es(N, -F, -B - P / 2)), d) {
                    var y = Xp(d, l), x = ef(d, l);
                    if (S || b) {
                        var u = z + i / 2, G = H + y / 2;
                        es(N, u, G), $g(N, a), es(N, -u, -G), ym(N, d, z + i / 2, H + y / 2, l, e), es(N, u, G), $g(N, -a), es(N, -u, -G), H += y + 4
                    } else ym(N, d, H + x / 2, B + P / 2, l, e), H += x + 4
                }
                return S || b ? (es(N, i / 2, H + i / 2), $g(N, a), es(N, -i / 2, -H - i / 2), Yr(N, v, I, g, z, H, P, i), es(N, i / 2, H + i / 2), $g(N, -a), es(N, -i / 2, -H - i / 2)) : Yr(N, v, I, g, H, B, i, P), S && (es(N, F, B + P / 2), $g(N, -h), es(N, -F, -B - P / 2)), l.isClosable() && (n = b ? {
                        x: z + i - 12,
                        y: B + P - 12,
                        width: 12,
                        height: 12
                    } : {
                        x: z + i - 12,
                        y: B + 2,
                        width: 12,
                        height: 12
                    }, this.drawCloseIcon(l, N, g, n)), c && (N.globalAlpha = 1), n
            },
            drawCloseIcon: function (W, A, q, m) {
                var x = m.x, P = m.y;
                A.strokeStyle = q, A.lineWidth = 1, A.beginPath(), A.moveTo(x + 2, P + 8), A.lineTo(x + 8, P + 2), A.moveTo(x + 8, P + 8), A.lineTo(x + 2, P + 2), A.stroke()
            },
            validateImpl: function () {
                var J = this;
                J._24o();
                var V, D = J._canvas, e = J._tabPosition, A = J._91O, b = J._92O, k = J._tabModel, z = J.getWidth(), l = J.getHeight(), H = J._tabHeight, E = J._7o, X = J._tabGap, g = e === dh, n = e === rk, F = e === ks, W = e === rk + "-vertical", K = e === ks + "-vertical", v = J._23o, w = 0;
                if ((n || F) && k._roots.each(function (f) {
                        w = o(J._9Q(f), w)
                    }), g ? (kg(A, 0, 0, z, H), V = {
                            x: 0,
                            y: H,
                            width: z,
                            height: o(0, l - H)
                        }) : n ? (kg(A, 0, 0, w, l), V = {
                                x: w,
                                y: 0,
                                width: o(0, z - w),
                                height: l
                            }) : F ? (kg(A, z - w, 0, w, l), V = {
                                    x: 0,
                                    y: 0,
                                    width: o(0, z - w),
                                    height: l
                                }) : W ? (kg(A, 0, 0, H, l), V = {
                                        x: H,
                                        y: 0,
                                        width: o(0, z - H),
                                        height: l
                                    }) : K ? (kg(A, z - H, 0, H, l), V = {
                                            x: 0,
                                            y: 0,
                                            width: o(0, z - H),
                                            height: l
                                        }) : (kg(A, 0, l - H, z, H), V = {
                                            x: 0,
                                            y: 0,
                                            width: z,
                                            height: o(0, l - H)
                                        }), kg(b, V), W || K) {
                    J._9o && (V.x = 0, kg(J._8o.getView(), V)), Xq(D, H, l);
                    var i = Cl(D), $ = 0;
                    if (Yj(i, 0, J.ty(), 1), i.clearRect(0, 0, H, l), E.clear(), k._roots.each(function (w) {
                            var m, L = J._9Q(w);
                            v && v.tab === w || (m = J.drawTab(i, w, 0, $, H, L, J._tabBackground)), E.add({
                                _75o: m,
                                tab: w,
                                startY: $,
                                endY: $ + L,
                                height: L
                            }), $ += L + X
                        }), J._23Q = o(0, $ - X), v) {
                        var q = v.position;
                        J.drawTab(i, v.tab, 0, v.startY, H, v.height, J._moveBackground), ns(i, 0, q, H, 1, J._insertColor)
                    }
                    i.restore(), J.ty(J.ty())
                } else if (n || F) {
                    J._9o && (V.x = 0, kg(J._8o.getView(), V)), Xq(D, w, l);
                    var i = Cl(D), $ = 0;
                    if (Yj(i, 0, J.ty(), 1), i.clearRect(0, 0, w, l), E.clear(), k._roots.each(function (t) {
                            var U;
                            v && v.tab === t || (U = J.drawTab(i, t, 0, $, w, H, J._tabBackground)), E.add({
                                _75o: U,
                                tab: t,
                                startY: $,
                                endY: $ + H,
                                height: H
                            }), $ += H + X
                        }), J._23Q = o(0, $ - X), v) {
                        var q = v.position;
                        J.drawTab(i, v.tab, 0, v.startY, w, v.height, J._moveBackground), ns(i, 0, q, w, 1, J._insertColor)
                    }
                    i.restore(), J.ty(J.ty())
                } else {
                    J._9o && (V.y = 0, kg(J._8o.getView(), V)), Xq(D, z, H);
                    var i = Cl(D), C = 0;
                    if (Yj(i, J.tx(), 0, 1), i.clearRect(0, 0, z, H), E.clear(), k._roots.each(function (D) {
                            var o, B = J._9Q(D);
                            v && v.tab === D || (o = J.drawTab(i, D, C, 0, B, H, J._tabBackground)), E.add({
                                _75o: o,
                                tab: D,
                                startX: C,
                                endX: C + B,
                                width: B
                            }), C += B + X
                        }), J._64I = o(0, C - X), v) {
                        var q = v.position;
                        J.drawTab(i, v.tab, v.startX, 0, v.width, H, J._moveBackground), gs(i, J._insertColor, q, 0, H)
                    }
                    i.restore(), J.tx(J.tx())
                }
                for (var d = [], Y = b.children, I = 0; I < Y.length; I++) {
                    var Z = Y[I], u = Z._tab_;
                    u && !k.contains(u) && d.push(Z)
                }
                d.forEach(function (G) {
                    b.removeChild(G)
                })
            }
        });
        var bi = function (P) {
            this.tv = P, this.addListeners()
        };
        Oh(bi, m, {
            ms_listener: 1, getView: function () {
                return this.tv._91O
            }, handle_mousewheel: function (H) {
                this.handleScroll(H, 10 * (H.wheelDelta / 40))
            }, handle_DOMMouseScroll: function (I) {
                this.handleScroll(I, 10 * -I.detail)
            }, handleScroll: function (s, b) {
                Fr(s);
                var c = this.tv, E = c._tabPosition;
                !c._40o() || E !== dh && E !== De || c.tx(this.tv.tx() + b), !c._41o() || E !== rk && E !== ks && E !== rk + "-vertical" && E !== ks + "-vertical" || c.ty(this.tv.ty() + b)
            }, _8Q: function (L) {
                var C, Y, E = this.tv, g = E._tabPosition, R = E._7o;
                if (g === dh || g === De) {
                    var k = E.lp(L).x;
                    for (C = 0; C < R.size(); C++)if (Y = R.get(C), Y.startX <= k && k <= Y.endX)return Y
                } else if (g === rk || g === ks || g === rk + "-vertical" || g === ks + "-vertical") {
                    var j = E.lp(L).y;
                    for (C = 0; C < R.size(); C++)if (Y = R.get(C), Y.startY <= j && j <= Y.endY)return Y
                }
                return U
            }, isClickable: function (s) {
                var x = this.tv, v = x._tabPosition, k = this._73o = this._8Q(s);
                return !x._40o() || v !== dh && v !== De ? !x._41o() || v !== rk && v !== ks && v !== rk + "-vertical" && v !== ks + "-vertical" ? k && (!k.tab.isDisabled() || x.isMovable()) : !0 : !0
            }, handle_mousemove: function (F) {
                var j = this;
                fd ? j._74o = j._8Q(F) : j.getView().style.cursor = j.isClickable(F) ? Go : ""
            }, handle_mousedown: function (Y) {
                this.handle_mousemove(Y), this.handle_touchstart(Y)
            }, handle_touchstart: function (H) {
                var P = this, F = P.tv, M = F._tabPosition;
                Fr(H), P.isClickable(H) && (M === dh || M === De ? (P.x = rc(H).x, P.lp = F.lp(H), P.tx = F.tx()) : (P.y = rc(H).y, P.lp = F.lp(H), P.ty = F.ty()), gl(P, H))
            }, handleWindowMouseMove: function (K) {
                this.handleWindowTouchMove(K)
            }, handleWindowTouchMove: function (E) {
                var i, F = this, B = F.tv, t = B._tabPosition, T = F._73o;
                if (t === dh || t === De) {
                    if (i = rc(E).x - F.x, !F._25o && !F.moving && e(i) > 2 && (B._40o() && !hn(E) ? F._25o = 1 : T && B.isMovable() && (F.moving = 1)), F._25o) B.tx(F.tx + i); else if (F.moving) {
                        var f = F.lp.x + i, w = B._tabGap / 2;
                        B._7o.each(function (V) {
                            var d = V.endX, E = f - V.startX < d - f;
                            f >= V.startX && d >= f && B._7Q({
                                tab: T.tab,
                                startX: T.startX + i,
                                width: T.width,
                                front: E,
                                insertTab: V.tab,
                                position: E ? o(0, V.startX - w) : O(B._64I, d + w)
                            })
                        })
                    }
                } else if (i = rc(E).y - F.y, !F._25o && !F.moving && e(i) > 2 && (B._41o() && !hn(E) ? F._25o = 1 : T && B.isMovable() && (F.moving = 1)), F._25o) B.ty(F.ty + i); else if (F.moving) {
                    var m = F.lp.y + i, w = B._tabGap / 2;
                    B._7o.each(function (h) {
                        var n = h.endY, V = m - h.startY < n - m;
                        m >= h.startY && n >= m && B._7Q({
                            tab: T.tab,
                            startY: T.startY + i,
                            height: T.height,
                            front: V,
                            insertTab: h.tab,
                            position: V ? o(0, h.startY - w) : O(B._23Q, n + w)
                        })
                    })
                }
            }, handleWindowMouseUp: function (K) {
                this.handleWindowTouchEnd(K)
            }, handleWindowTouchEnd: function () {
                var J = this, T = J.tv, j = T._tabPosition, o = T.getTabModel(), H = o._roots, r = J._73o;
                if (J.moving) {
                    var e = T._23o;
                    if (e && e.insertTab !== e.tab) {
                        var c = e.tab, O = H.remove(c), b = H.indexOf(e.insertTab);
                        b >= 0 && (e.front || b++, b <= H.size() && (H.add(c, b), o._38I(c, O, b)))
                    }
                    T._7Q(U), delete J.moving
                } else if (!J._25o && r) {
                    c = r.tab;
                    var a = J._74o;
                    if (!a || a.tab === c)if (!c.isDisabled() && ug(r._75o, J.lp)) {
                        var K = function () {
                            var k = H.indexOf(c);
                            o.remove(c), T.onTabClosed(c, k)
                        };
                        T.onTabClosing(c, K) && K()
                    } else c.isDisabled() || T._8o === c || o.sm().ss(c)
                }
                J._25o = J._73o = J._74o = j === dh || j === De ? J.x = J.lp = J.tx = U : J.y = J.lp = J.ty = U
            }
        }), Fd.PropertyView = function (s) {
            var l = this;
            l._view = Uo(1, l), l._canvas = Dm(l._view), Cs(l._view, l._79O = xo()), l._rows = new gr, l._28o = new gr, l._26o = {}, l._26Q = {};
            var _ = l._propertyModel = new $q, I = l.ivm;
            _.mm(I, l), _.md(I, l), _.mh(I, l), l.dm(s ? s : new $q), new oi(l)
        }, ao("PropertyView", m, {
            ms_ac: [tb, ul, _p, fj, gh, "categorizable", mp, Rh, qc, yc, ip, Gc, dg, kh, "selectRowIndex", yl, "background", Yc, _n, $r, Zl, sp],
            ms_v: 1,
            ms_dm: 1,
            ms_fire: 1,
            ms_sm: 1,
            _49o: 1,
            ms_txy: 1,
            ms_lp: 1,
            ms_vs: 1,
            _45o: 1,
            _47o: 1,
            ms_tip: 1,
            _29I: yq,
            _59I: 0,
            _9I: 0,
            _selectRowIndex: -1,
            _editable: !0,
            _batchEditable: !0,
            _categorizable: !0,
            _indent: Jj,
            _background: H.propertyViewBackground,
            _expandIcon: H.propertyViewExpandIcon,
            _collapseIcon: H.propertyViewCollapseIcon,
            _scrollBarColor: lo,
            _scrollBarSize: Fn,
            _autoHideScrollBar: Gi,
            _selectBackground: H.propertyViewSelectBackground,
            _rowHeight: ae,
            _rowLineVisible: H.propertyViewRowLineVisible,
            _rowLineColor: H.propertyViewRowLineColor,
            _10I: .5,
            _columnLineVisible: H.propertyViewColumnLineVisible,
            _columnLineColor: H.propertyViewColumnLineColor,
            _labelColor: H.propertyViewLabelColor,
            _labelSelectColor: H.propertyViewLabelSelectColor,
            _labelFont: H.propertyViewLabelFont,
            getRows: function () {
                return this._rows
            },
            getColumnPosition: function () {
                return this._10I
            },
            setColumnPosition: function (i) {
                0 > i && (i = 0), i > 1 && (i = 1);
                var J = this, z = J._10I;
                J._10I = i, J.fp("columnPosition", z, i)
            },
            getPropertyName: function (d) {
                return d.toLabel()
            },
            getLabelFont: function () {
                return this._labelFont
            },
            getLabelColor: function (Y, m, C) {
                return C === this._selectRowIndex ? this._labelSelectColor : this._labelColor
            },
            getPropertyFont: function () {
                return this._labelFont
            },
            getPropertyColor: function (L, Y) {
                return Y === this._selectRowIndex ? this._labelSelectColor : L.getColor() || this._labelColor
            },
            getCategoryFont: function () {
                return this._labelFont
            },
            getCategoryColor: function () {
                return this._labelColor
            },
            adjustTranslateX: function () {
                return 0
            },
            adjustTranslateY: function (e) {
                var k = this.getHeight() - this._59I;
                return k > e && (e = k), e > 0 ? 0 : I(e)
            },
            isExpanded: function (b) {
                if (!b)return !0;
                var g = this._26o[b];
                return g ? g.isExpanded : !(this._26Q[b] === !1)
            },
            toggle: function (X) {
                var B = this;
                B.isExpanded(X) ? B.collapse(X) : B.expand(X)
            },
            expandAll: function () {
                this.validate();
                for (var U in this._26o)this.expand(U)
            },
            expand: function (t) {
                if (t && t !== Bn) {
                    var N = this, D = N._26o[t];
                    D && !D.isExpanded && (D.isExpanded = !0, N.onExpanded(t), N.ivm())
                }
            },
            onExpanded: function () {
            },
            collapseAll: function () {
                this.validate();
                for (var T in this._26o)this.collapse(T)
            },
            collapse: function (E) {
                if (E && E !== Bn) {
                    var b = this, U = b._26o[E];
                    U && U.isExpanded && (U.isExpanded = !1, b.onCollapsed(E), b.ivm())
                }
            },
            onCollapsed: function () {
            },
            getCategoryName: function (t) {
                if (!this.isCategorizable())return Bn;
                var b = t.getCategoryName();
                return b ? b : Bn
            },
            getPropertyModel: function () {
                return this._propertyModel
            },
            setDataModel: function (E) {
                var b = this, A = b._dataModel;
                A !== E && (A && (A.umd(b.handlePropertyChange, b), b._selectionModel || A.sm().ums(b.ivm, b)), b._dataModel = E, E.md(b.handlePropertyChange, b), b._selectionModel ? b._selectionModel._21I(E) : E.sm().ms(b.ivm, b), b.fp(pg, A, E))
            },
            isVisible: function (j) {
                return this._visibleFunc ? this._visibleFunc(j) : !0
            },
            onPropertyChanged: function (Q) {
                var n = this, k = Q.property;
                Vg[k] ? n.ivm() : n.iv(), k === Wd && n._43o()
            },
            getCurrentData: function () {
                return this._27o
            },
            updateCurrentData: function () {
                this._27o = this.sm().ld()
            },
            getRawProperties: function () {
                return this._27o ? this._propertyModel._roots : Ff
            },
            handlePropertyChange: function (f) {
                this._27o === f.data && this.iv()
            },
            ivm: function () {
                this.invalidateModel()
            },
            invalidateModel: function () {
                var r = this;
                r._96I || (r.setSelectRowIndex(-1), r._96I = 1, r.iv())
            },
            redraw: function () {
                this.iv()
            },
            validateModel: function () {
                var L = this, u = L._rows, v = L._28o, s = {}, F = new gr, r = L._27o;
                L.updateCurrentData(), r !== L._27o && L.endEditing(), u.clear(), v.clear(), L.getRawProperties().each(function (H) {
                    if (L.isVisible(H)) {
                        F.add(H);
                        var k = L.getCategoryName(H);
                        s[k] || (v.add(k, k === Bn ? 0 : K), s[k] = {isExpanded: L.isExpanded(k), properties: new gr})
                    }
                }), L._sortFunc && F.sort(L._sortFunc);
                for (var p in L._26o)L._26Q[p] = L.isExpanded(p);
                L._26o = s, v.each(function (w) {
                    w !== Bn && u.add(w);
                    var p = s[w];
                    p.isExpanded && F.each(function (K) {
                        L.getCategoryName(K) === w && (p.properties.add(K), u.add({property: K, data: L._27o}))
                    }, L)
                })
            },
            validateImpl: function () {
                var v = this;
                v._76o(), v._96I && (v.validateModel(), delete v._96I);
                var p = v._canvas, Y = v.getWidth(), x = v.getHeight(), B = -v.ty(), _ = v._rowHeight, K = v._indent, M = Y - K, X = v._rows, V = X.size(), J = v._9I = K + M * v._10I, g = v._59I = V * _;
                Xq(p, Y, x), v._29I = {
                    x: 0,
                    y: B,
                    width: Y,
                    height: x
                }, v._31I = d(B / _), v._14I = z((B + x) / _), v._31I < 0 && (v._31I = 0), v._14I > V && (v._14I = V);
                var n, b = Cl(p), F = v._background;
                Yj(b, 0, -B, 1), b.beginPath(), b.rect(0, B, Y, x), b.clip(), b.clearRect(0, B, Y, x), v._93db(b), F && ns(b, 0, 0, K, g, F);
                for (var w = v._31I; w < v._14I; w++) {
                    var C = X.get(w), B = _ * w;
                    if (rd(C)) F && ns(b, K, B, M, _, F), n = gk(v.isExpanded(C) ? v._expandIcon : v._collapseIcon), n && Zq(b, n, cm, 0, B, K, _), b.save(), b.beginPath(), b.rect(K, B, M, _), b.clip(), v.drawCategoryName(b, C, w, K, B, M, _), b.restore(); else {
                        var q = C.property, t = C.data, n = gk(q.getIcon()), E = v._selectRowIndex === w ? v.getSelectBackground() : U;
                        if (n && Zq(b, n, cm, 0, B, K, _), E && ns(b, K, B, M, _, E), b.save(), b.beginPath(), b.rect(K, B, J - K, _), b.clip(), v.drawPropertyName(b, q, w, K, B, J - K, _), b.restore(), !v.isEditing(t, q)) {
                            var A = J + 1, s = Y - J - 1;
                            b.save(), b.beginPath(), b.rect(A, B, s, _), b.clip(), v._87o(v.drawPropertyValue(b, q, v.getValue(t, q), w, A, B, s, _, t), w, A, B, s, _), b.restore()
                        }
                    }
                    v._rowLineVisible && ns(b, K, B + _ - 1, M, 1, v._rowLineColor)
                }
                v._columnLineVisible && (ns(b, J, 0, 1, g, v._columnLineColor), ns(b, Y - 1, 0, 1, g)), v._92db(b), v._93I(), b.restore(), v.ty(v.ty())
            },
            drawCategoryName: function (Z, h, t, T, f, v, q) {
                Yr(Z, h, this.getCategoryFont(h), this.getCategoryColor(h), T, f, v, q)
            },
            drawPropertyName: function (s, E, q, n, X, C, l) {
                return E.drawPropertyName ? (E.drawPropertyName(s, E, q, n, X, C, l, this), void 0) : (Yr(s, this.getPropertyName(E), this.getPropertyFont(E, q), this.getPropertyColor(E, q), n, X, C, l), void 0)
            },
            drawPropertyValue: function (f, Z, g, K, d, I, b, A, J) {
                return Z.drawPropertyValue ? Z.drawPropertyValue(f, Z, g, K, d, I, b, A, J, this) : (aq(f, g, Z, this.getLabelFont(Z, g, K), this.getLabelColor(Z, g, K), d, I, b, A, J, this), void 0)
            },
            isPropertyEditable: function (V) {
                return V.isEditable() && this.isEditable()
            },
            setProperties: function (u) {
                this._propertyModel.clear(), this.addProperties(u)
            },
            addProperties: function (A) {
                if (A) {
                    var V = this._propertyModel;
                    A.forEach(function (s) {
                        if (!(s instanceof ds)) {
                            var e = cs(s.className);
                            s = Ng(e ? e : ds, s)
                        }
                        V.add(s)
                    })
                }
            },
            getRowIndexAt: function (J) {
                var o = this, c = d(o.lp(J).y / o._rowHeight);
                return c >= 0 && c < o._rows.size() ? c : -1
            },
            getPropertyAt: function (X) {
                var m = this, T = m.getRowIndexAt(X);
                return T >= 0 ? m._rows.get(T).property : U
            },
            getToolTip: function (H) {
                var e = this, z = e.getPropertyAt(H), L = e._27o;
                return z && L ? z.getToolTip(L, e._9I < e.lp(H).x, e) : U
            }
        });
        var oi = function (G) {
            this.pv = G, this.addListeners()
        };
        Oh(oi, m, {
            ms_listener: 1, getView: function () {
                return this.pv._view
            }, setCursor: function (H) {
                this.getView().style.cursor = H
            }, clear: function () {
                var h = this;
                h._62O = h.cp = h.ty = h.p = U, h.setCursor(i)
            }, handle_mousedown: function (K) {
                this.handle_touchstart(K)
            }, handle_touchstart: function (Q) {
                var c = this, R = c.pv;
                Fr(Q), R.setFocus(Q) && (kf(Q) ? (c.cp = rc(Q), c.ty = R.ty(), c.p = R.getColumnPosition(), c.handle_touchmove(Q)) : R.setSelectRowIndex(R.getRowIndexAt(Q)))
            }, handleWindowMouseUp: function () {
                this.clear()
            }, handleWindowTouchEnd: function () {
                this.clear()
            }, handle_mouseup: function (w) {
                this.handle_touchend(w)
            }, handle_touchend: function (P) {
                var r = this;
                if (r.cp && !r._62O) {
                    var t = r.pv, Y = t.lp(P), v = Y.x, Z = Y.y, p = t._indent, A = t.getRowIndexAt(P), i = t._9I;
                    if (A >= 0) {
                        var m = t._rowHeight, w = m * A, k = t._rows.get(A), u = k.property;
                        if (rd(k)) gk(t.isExpanded(k) ? t._expandIcon : t._collapseIcon) && v >= 0 && p >= v && Z >= w && w + m >= Z ? t.toggle(k) : _g(P) && t.toggle(k); else if (v > i && t.isPropertyEditable(u)) {
                            var V = {x: i + 1, y: w, width: t.getWidth() - i - 1, height: m}, T = {
                                x: V.x + t.tx(),
                                y: V.y + t.ty(),
                                width: V.width,
                                height: V.height
                            }, a = 0, z = t._29I;
                            V.y < z.y ? a = V.y - z.y : V.y + m > z.y + z.height && (a = V.y + m - z.y - z.height), a && (t.ty(t.ty() - a), T.y -= a), t.beginEditing({
                                data: k.data,
                                property: u,
                                value: t.getValue(k.data, u),
                                event: P,
                                rect: V,
                                editorRect: T,
                                view: t
                            })
                        }
                    }
                    t.setSelectRowIndex(A)
                }
                r.clear()
            }, handleWindowMouseMove: function (v) {
                this.handleWindowTouchMove(v)
            }, handleWindowTouchMove: function (O) {
                var Y = this, S = Y.pv, M = Y.ty, n = Y.cp, o = rc(O), c = Y._62O;
                if ("p" === c) S.setTranslateY(M + o.y - n.y); else if ("c" === c) {
                    var V = S.getWidth() - S._indent;
                    if (V > 16) {
                        var H = Y.p - (n.x - o.x) / V, Z = 16 / V;
                        Z > H && (H = Z), H > 1 - Z && (H = 1 - Z), S.setColumnPosition(H)
                    }
                } else"s" === c && S.setTranslateY(M + (n.y - o.y) * S._59I / S._29I.height)
            }, handle_mousemove: function (t) {
                this.handle_touchmove(t)
            }, handle_touchmove: function (f) {
                if (!fd && kf(f)) {
                    var J = this, E = J.pv, t = e(E.lp(f).x - E._9I) <= (P ? 8 : 3);
                    J.cp ? J._62O || (t ? (J._62O = "c", gl(J)) : e(rc(f).y - J.cp.y) >= 2 && (J._62O = J.isV(f) ? "s" : "p", gl(J))) : (t ? J.setCursor(Kg) : J.setCursor(i), J.isV(f) && E._43o())
                }
            }, isV: function (k) {
                var O = this.pv, R = O._29I;
                return O._41o() && R.x + R.width - O.lp(k).x < $h
            }, handle_mousewheel: function (K) {
                this.handleScroll(K, K.wheelDelta / 40)
            }, handle_DOMMouseScroll: function (v) {
                2 === v.axis && this.handleScroll(v, -v.detail)
            }, handleScroll: function (j, d) {
                var u = this.pv;
                Fr(j), u.endEditing(), u.translate(0, d * u.getRowHeight())
            }, handle_keydown: function (q) {
                var H = this.pv, N = H._rows.size(), F = H._selectRowIndex + (Ce(q) ? -1 : 1);
                (Ce(q) || Hh(q)) && (0 > F && (F = 0), F >= N && (F = N - 1), H.setSelectRowIndex(F))
            }
        }), Fd.ListView = function (D) {
            this._5o(D), new kl(this)
        }, ao("ListView", m, {
            ms_ac: [tb, ul, _p, Yc, mp, _n, $r, Rh, qc, Gc, dg, kh, Tg, yl],
            ms_v: 1,
            ms_bnb: 1,
            ms_tip: 1,
            ms_fire: 1,
            ms_sm: 1,
            _49o: 1,
            ms_txy: 1,
            ms_lp: 1,
            ms_vs: 1,
            ms_hs: 1,
            _15Q: 1,
            _14Q: 1,
            ms_dm: 1,
            _45o: 1,
            _checkMode: !1,
            _indent: Jj,
            _rowHeight: ae,
            _rowLineVisible: H.listViewRowLineVisible,
            _rowLineColor: H.listViewRowLineColor,
            _scrollBarColor: lo,
            _scrollBarSize: Fn,
            _autoMakeVisible: hq,
            _autoHideScrollBar: Gi,
            _selectBackground: H.listViewSelectBackground,
            _labelColor: H.listViewLabelColor,
            _labelSelectColor: H.listViewLabelSelectColor,
            _labelFont: H.listViewLabelFont,
            isCheckMode: function () {
                return this._checkMode
            },
            setCheckMode: function (Y) {
                var D = this, j = D._checkMode;
                D._checkMode = Y, D.fp(Ef, j, Y)
            },
            drawRow: function (h, S, T, x, g, V, C) {
                var s = this, b = 0, _ = s._indent, M = s.getIconWidth(S);
                s.drawRowBackground(h, S, T, x, g, V, C), s._checkMode && (ym(h, s.getCheckIcon(S), b + _ / 2, g + C / 2, S, s), b += _), s.drawIcon(h, S, b, g, M, C), s.drawLabel(h, S, b + M, g, C)
            }
        });
        var kl = function (P) {
            this.list = P, this.addListeners()
        };
        Oh(kl, m, {
            ms_listener: 1, getView: function () {
                return this.list._view
            }, clear: function (u) {
                var y = this;
                u && "d" === y._62O && y.list.handleDragAndDrop(u, "end"), y._62O = y.cp = y.tx = y.ty = U
            }, handle_mousedown: function (O) {
                this.handle_touchstart(O)
            }, handle_touchstart: function (O) {
                var E = this, Y = E.list;
                if (Fr(O), Y.setFocus(O))if (E.cp = rc(O), E.tx = Y.tx(), E.ty = Y.ty(), kf(O)) E.isV(O) || E.isH(O) || !Y.handleDragAndDrop || Y.handleDragAndDrop(O, "prepare"); else {
                    var n = Y.getDataAt(O);
                    n && E._33o(O, n), E.clear(O)
                }
            }, handleWindowMouseUp: function (O) {
                this.clear(O)
            }, handleWindowTouchEnd: function (R) {
                this.clear(R)
            }, handle_mouseup: function (e) {
                this.handle_touchend(e)
            }, handle_touchend: function (z) {
                var a = this, w = a.list;
                if (a.cp && !a._62O) {
                    var $ = w.getDataAt(z);
                    $ ? (w.isCheckMode() ? a._34o(z, $) : a._33o(z, $), _g(z) ? w.onDataDoubleClicked($, z) : w.onDataClicked($, z)) : w.handleBackgroundClick(z)
                }
                a.clear(z)
            }, handleWindowMouseMove: function (P) {
                this.handleWindowTouchMove(P)
            }, handleWindowTouchMove: function (h) {
                var Z = this, Q = Z.list, A = Z._62O, Y = Z.tx, B = Z.ty, D = Z.cp, v = rc(h), s = Q._29I;
                "p" === A ? Q.setTranslate(Y + v.x - D.x, B + v.y - D.y) : "v" === A ? Q.ty(B + (D.y - v.y) * Q._59I / s.height) : "h" === A ? Q.tx(Y + (D.x - v.x) * Q._91I / s.width) : "d" === A && Q.handleDragAndDrop(h, "between")
            }, handle_mousemove: function (q) {
                this.handle_touchmove(q)
            }, handle_touchmove: function (_) {
                if (!fd && kf(_)) {
                    var W = this, i = W.list, I = W.isV(_), m = W.isH(_);
                    if (W.cp) {
                        if (!W._62O) {
                            if (Rk(rc(_), W.cp) < 2)return;
                            I ? W._62O = "v" : m ? W._62O = "h" : i.handleDragAndDrop ? (W._62O = "d", i.handleDragAndDrop(_, "begin")) : W._62O = "p", gl(W)
                        }
                    } else I && i._43o(), m && i._42o()
                }
            }, isV: function (M) {
                var v = this.list, m = v._29I;
                return v._41o() && m.x + m.width - v.lp(M).x < $h
            }, isH: function (s) {
                var e = this.list, M = e._29I;
                return e._40o() && M.y + M.height - e.lp(s).y < $h
            }, handle_mousewheel: function (j) {
                this.handleScroll(j, j.wheelDelta / 40, j.wheelDelta !== j.wheelDeltaX)
            }, handle_DOMMouseScroll: function (d) {
                this.handleScroll(d, -d.detail, 1)
            }, handleScroll: function (f, Y, l) {
                var D = this.list;
                Fr(f), D.endEditing && D.endEditing(), l && D._41o() ? D.translate(0, Y * D.getRowHeight()) : D._40o() && D.translate(10 * Y, 0)
            }, handle_keydown: function (K) {
                var u, V = this.list, G = V.sm(), $ = V._rows, w = $.size();
                if (ii(K)) V.selectAll(); else if (Ji(K)) V.handleDelete && V.handleDelete(K); else if (Af(K)) V.isCheckMode() && (u = V.getFocusData(), u && V.checkData(u)); else if (Ce(K) || Hh(K)) {
                    var X = V.isCheckMode();
                    if (u = X ? V.getFocusData() : G.ld()) {
                        var g = V.getRowIndex(u);
                        g >= 0 && (Ce(K) ? 0 !== g && (u = $.get(g - 1), X ? V.setFocusData(u) : G.ss(u)) : g !== w - 1 && (u = $.get(g + 1), X ? V.setFocusData(u) : G.ss(u)))
                    } else w > 0 && (u = $.get(0), X ? V.setFocusData(u) : G.ss(u))
                }
            }, _34o: function (e, R) {
                var y = this.list, H = y.lp(e).x;
                return H >= 0 && H <= y._indent ? (y.checkData(R), void 0) : (y.setFocusData(R), void 0)
            }, _33o: function (o, n) {
                var z = this.list, L = z.sm(), h = L.ld();
                if (hn(o)) z.isSelected(n) ? L.rs(n) : L.as(n); else if (cc(o))if (h)for (var v = z.getRowIndex(h), m = z.getRowIndex(n); v !== m;)v += m > v ? 1 : -1, L.as(z._rows.get(v)); else L.ss(n); else(kf(o) || !L.contains(n)) && L.ss(n)
            }
        }), Fd.TreeView = function (g) {
            var n = this;
            n._35o(), n._5o(g), new Cb(n)
        }, ao("TreeView", m, {
            ms_ac: [tb, ul, _p, "rootVisible", Ef, "rootData", Rh, qc, Gc, dg, kh, mp, Yc, _n, $r, yc, ip, Tg, yl, "loader", "doubleClickToToggle"],
            ms_v: 1,
            ms_bnb: 1,
            ms_tip: 1,
            ms_fire: 1,
            ms_sm: 1,
            _49o: 1,
            ms_txy: 1,
            ms_lp: 1,
            ms_vs: 1,
            ms_hs: 1,
            _15Q: 1,
            ms_dm: 1,
            _48o: 1,
            _14Q: 1,
            _45o: 1,
            _checkMode: U,
            _indent: Jj,
            _rowHeight: ae,
            _rowLineVisible: H.treeViewRowLineVisible,
            _rowLineColor: H.treeViewRowLineColor,
            _scrollBarColor: lo,
            _scrollBarSize: Fn,
            _autoHideScrollBar: Gi,
            _expandIcon: H.treeViewExpandIcon,
            _collapseIcon: H.treeViewCollapseIcon,
            _autoMakeVisible: hq,
            _selectBackground: H.treeViewSelectBackground,
            _labelColor: H.treeViewLabelColor,
            _labelSelectColor: H.treeViewLabelSelectColor,
            _labelFont: H.treeViewLabelFont,
            _doubleClickToToggle: H.treeViewDoubleClickToToggle,
            drawRow: function (n, o, L, N, I, Y, C) {
                var B = this;
                B.drawRowBackground(n, o, L, N, I, Y, C), B._97I(n, o, L, 0, I, Y, C)
            },
            isOnToggleIcon: function (l) {
                var H = this.getDataAt(l);
                if (H) {
                    var L = this.getIndent(), o = this.lp(l).x;
                    if (gk(this.getToggleIcon(H))) {
                        var F = L * this.getLevel(H);
                        if (o >= F && F + L >= o)return !0
                    }
                }
                return !1
            }
        });
        var Cb = function (J) {
            Eg(Cb, this, [J])
        };
        Oh(Cb, kl, {
            toggle: function (B, K, j, Y) {
                var d = this.list, o = d.lp(B).x;
                if (gk(d.getToggleIcon(K))) {
                    var Z = j * Y;
                    if (o >= Z && Z + j >= o)return d.toggle(K), !0
                }
                return d.isDoubleClickToToggle() && _g(B) ? (d.toggle(K), !0) : !1
            }, _34o: function (A, H) {
                var K = this.list, G = K.lp(A).x, f = K._levelMap[H._id], L = K._indent, Y = L * (f + 1);
                return G >= Y && Y + L >= G ? (K.checkData(H), void 0) : (this.toggle(A, H, L, f) || K.setFocusData(H), void 0)
            }, _33o: function (A, K) {
                var M = this, G = M.list;
                M.toggle(A, K, G._indent, G.getLevel(K)) || Cb.superClass._33o.call(M, A, K)
            }, handle_keydown: function (Q) {
                if (vi(Q) || Ik(Q)) {
                    var V = this.list, o = V._rows, h = V.isCheckMode(), i = V.sm(), C = h ? V.getFocusData() : i.ld();
                    C ? C.hasChildren() && (vi(Q) ? V.collapse(C) : V.expand(C)) : o.size() > 0 && (C = o.get(0), h ? V.setFocusData(C) : i.ss(C))
                } else Cb.superClass.handle_keydown.call(this, Q)
            }
        });
        var mk = Fd.TableView = function (X) {
            this._98I(), this._5o(X), new ig(this)
        };
        ao("TableView", m, {
            ms_ac: [tb, ul, _p, "sortMode", fj, gh, Yc, _n, $r, Zl, sp, "sortColumn", Rh, qc, Gc, dg, kh, Tg, yl],
            ms_v: 1,
            ms_fire: 1,
            ms_sm: 1,
            _49o: 1,
            ms_txy: 1,
            ms_lp: 1,
            ms_vs: 1,
            ms_hs: 1,
            _15Q: 1,
            ms_dm: 1,
            ms_tip: 1,
            _50o: 1,
            _45o: 1,
            _47o: 1,
            _sortMode: hc,
            _editable: !0,
            _batchEditable: !1,
            _rowHeight: ae,
            _rowLineVisible: H.tableViewRowLineVisible,
            _rowLineColor: H.tableViewRowLineColor,
            _columnLineVisible: H.tableViewColumnLineVisible,
            _columnLineColor: H.tableViewColumnLineColor,
            _scrollBarColor: lo,
            _scrollBarSize: Fn,
            _autoHideScrollBar: Gi,
            _autoMakeVisible: hq,
            _selectBackground: H.tableViewSelectBackground,
            _labelColor: H.tableViewLabelColor,
            _labelSelectColor: H.tableViewLabelSelectColor,
            _labelFont: H.tableViewLabelFont,
            getCheckColumn: function () {
                var F = this;
                if (!F._31o) {
                    var M = F._31o = new us;
                    M.setEditable(!0), M.setWidth(40), M.getValue = F.getCheckColumValue, M.drawCell = F.drawCheckColumnCell
                }
                return F._31o
            },
            isCheckMode: function () {
                return this._39o.contains(this._31o)
            },
            setCheckMode: function (E) {
                var n = this, p = n._39o, f = n.getCheckColumn();
                E !== n.isCheckMode() && (E ? p.add(f, 0) : p.remove(f), n.fp(Ef, !E, E))
            },
            getCheckColumValue: function (F, X, z) {
                return z.isSelected(F)
            },
            drawCheckColumnCell: function (M, G, V, K, k, I, R, L, b) {
                ym(M, b.getCheckIcon(G), k + R / 2, I + L / 2, G, b)
            }
        });
        var ig = function (I) {
            Eg(ig, this, [I])
        };
        Oh(ig, kl, {
            _34o: function (h, c) {
                var O = this.list, l = O._31o;
                if (O.isCellEditable(c, l)) {
                    var e = O._3Q(l), b = O.lp(h).x;
                    if (e && b >= e.startX && b < e.startX + l.getWidth())return O.checkData(c), void 0
                }
                O.setFocusData(c), O._37O(c, h)
            }, _33o: function (C, F) {
                ig.superClass._33o.apply(this, arguments), this.list._37O(F, C)
            }
        });
        var pc = Fd.TreeTableView = function (P) {
            var s = this, f = s._4o = new us;
            s._35o(), s._98I(), s._5o(P), f.setDisplayName("Name"), f.setEditable(!0), f.setWidth(180), f.drawCell = Id, f.getValue = ar, s._39o.add(f), new Yo(s)
        }, Id = function (i, u, R, l, o, A, V, z, F) {
            F._97I(i, u, R, o, A, V, z)
        }, ar = function (D, g, q) {
            return q.getLabel(D)
        };
        ao("TreeTableView", m, {
            ms_ac: [tb, ul, _p, "sortMode", fj, gh, mp, Ef, "rootData", "rootVisible", Rh, qc, "sortColumn", yc, ip, Gc, dg, kh, Tg, $r, Yc, _n, Zl, sp, yl, "loader"],
            ms_v: 1,
            ms_bnb: 1,
            ms_fire: 1,
            ms_sm: 1,
            _49o: 1,
            ms_txy: 1,
            ms_lp: 1,
            ms_vs: 1,
            ms_hs: 1,
            _15Q: 1,
            ms_dm: 1,
            ms_tip: 1,
            _50o: 1,
            _48o: 1,
            _14Q: 1,
            _45o: 1,
            _47o: 1,
            _sortMode: hc,
            _checkMode: U,
            _editable: !0,
            _batchEditable: !1,
            _indent: Jj,
            _rowHeight: ae,
            _rowLineVisible: H.treeTableViewRowLineVisible,
            _rowLineColor: H.treeTableViewRowLineColor,
            _columnLineVisible: H.treeTableViewColumnLineVisible,
            _columnLineColor: H.treeTableViewColumnLineColor,
            _expandIcon: H.treeTableViewExpandIcon,
            _collapseIcon: H.treeTableViewCollapseIcon,
            _scrollBarColor: lo,
            _scrollBarSize: Fn,
            _autoHideScrollBar: Gi,
            _autoMakeVisible: hq,
            _selectBackground: H.treeTableViewSelectBackground,
            _labelColor: H.treeTableViewLabelColor,
            _labelSelectColor: H.treeTableViewLabelSelectColor,
            _labelFont: H.treeTableViewLabelFont,
            getTreeColumn: function () {
                return this._4o
            }
        });
        var Yo = function (y) {
            Eg(Yo, this, [y])
        };
        Oh(Yo, kl, {
            _34o: function (A, S) {
                var f = this.list, t = f._4o, d = f._3Q(t), r = f.lp(A).x;
                if (d) {
                    var L = f._indent, y = d.startX + L * f.getLevel(S);
                    if (gk(f.getToggleIcon(S)) && r >= y && y + L >= r)return f.toggle(S), void 0;
                    if (f.isCellEditable(S, t) && (y += L, r >= y && y + L >= r))return f.checkData(S), void 0
                }
                f.setFocusData(S), f._37O(S, A)
            }, _33o: function (p, h) {
                var X = this.list, G = X.lp(p).x;
                if (gk(X.getToggleIcon(h))) {
                    var L = X._3Q(X._4o);
                    if (L) {
                        var Q = X._indent, j = L.startX + Q * X.getLevel(h);
                        if (G >= j && j + Q >= G)return X.toggle(h), void 0
                    }
                }
                Yo.superClass._33o.apply(this, arguments), X._37O(h, p)
            }
        });
        var ep = Fd.TableHeader = function (T) {
            var N = this, z = N._view = Uo(1, N), g = N._39o = T.getColumnModel(), E = N.iv;
            N.tv = N._tableView = T, N._60I = new gr, N._canvas = Dm(z), z.style.background = H.tableHeaderBackground || "", z.style.height = Ep + Be, g.mm(E, N), g.md(E, N), g.mh(E, N), T.mp(function (E) {
                Pq[E.property] && N.iv()
            }, N), new Op(N), N.iv()
        };
        ao("TableHeader", m, {
            ms_v: 1,
            ms_lp: 1,
            ms_fire: 1,
            ms_ac: ["checkIcon", "sortDescIcon", "sortAscIcon", tb, _p, mp, "moveBackground", "insertColor", Zl, sp, "resizable", "movable"],
            _checkIcon: on,
            _movable: !0,
            _resizable: !0,
            _labelColor: H.tableHeaderLabelColor,
            _labelFont: H.tableHeaderLabelFont,
            _columnLineColor: H.tableHeaderColumnLineColor,
            _columnLineVisible: H.tableHeaderColumnLineVisible,
            _sortDescIcon: H.tableHeaderSortDescIcon,
            _sortAscIcon: H.tableHeaderSortAscIcon,
            _moveBackground: H.tableHeaderMoveBackground,
            _insertColor: H.tableHeaderInsertColor,
            _indent: Jj,
            getCheckIcon: function () {
                return this._checkIcon
            },
            getTableView: function () {
                return this.tv
            },
            getLabel: function (A) {
                return A.toLabel()
            },
            getLabelFont: function () {
                return this._labelFont
            },
            getLabelColor: function (B) {
                return B.getColor() || this._labelColor
            },
            getLabelAlign: function (r) {
                return r._align
            },
            onPropertyChanged: function () {
                this.iv()
            },
            _5Q: function (S) {
                this._61I = S, this.iv()
            },
            getLogicalPoint: function (M) {
                return Bl(M, this._canvas, this.tv.tx())
            },
            validateImpl: function () {
                var k = this, x = k._canvas, B = k.getWidth(), n = k.getHeight(), R = k.tv, W = k._60I, P = k._61I, X = -R.tx(), A = 0;
                (B !== x.clientWidth || n !== x.clientHeight) && Xq(x, B, n), W.clear(), k._39o._roots.each(function (s) {
                    if (s.isVisible()) {
                        var d = A + s.getWidth();
                        X + B >= A && d >= X && W.add({column: s, startX: A}), A = d
                    }
                });
                var N = Cl(x);
                if (Yj(N, -X, 0, 1), N.beginPath(), N.rect(X, 0, B, n), N.clip(), N.clearRect(X, 0, B, n), W.each(function (e) {
                        var s = e.column, u = e.startX, O = s.getWidth();
                        O > 0 && (N.save(), N.beginPath(), N.rect(u, 0, O, n), N.clip(), P && P.column === s || k.drawColumn(N, s, u, 0, O, n), k._columnLineVisible && ns(N, u + O - 1, 0, 1, n, k._columnLineColor), N.restore())
                    }), P) {
                    var w = P.column, A = P.startX, p = P.position, Y = w.getWidth();
                    N.save(), N.beginPath(), N.rect(A, 0, Y, n), N.clip(), N.fillStyle = k._moveBackground, N.fill(), k.drawColumn(N, w, A, 0, Y, n), N.restore(), gs(N, k._insertColor, p, 0, n)
                }
                N.restore()
            },
            _6Q: function (b) {
                var A = this.tv;
                return A._31o === b && A.sm().getSelectionMode() === to
            },
            drawColumn: function (t, P, N, D, m, $) {
                var T = this, U = T.tv, I = gk(P.getIcon()), z = T.getLabelAlign(P);
                if (T._6Q(P)) {
                    var f = gk(T._checkIcon);
                    ym(t, f, N + m / 2, D + $ / 2, P, T)
                } else {
                    var G = T.getLabel(P), X = T.getLabelFont(P), d = T.getLabelColor(P), v = Mo(X, G).width, g = I ? T._indent : 0;
                    z === rk ? (I && Zq(t, I, cm, N, D, g, $), Yr(t, G, X, d, N + g, D, m, $, rk)) : z === ks ? (I && Zq(t, I, cm, N + m - v - g, D, g, $), Yr(t, G, X, d, N, D, m, $, ks)) : (I && Zq(t, I, cm, N + (m - v - g) / 2, D, g, $), Yr(t, G, X, d, N + (m - v + g) / 2, D, 0, $, rk))
                }
                if (P.isSortable() && U.getSortColumn() === P && (I = gk(P.getSortOrder() === mi ? T._sortAscIcon : T._sortDescIcon))) {
                    var q = ef(I, P) / 2 + 2;
                    ym(t, I, z === ks ? N + q : N + m - q, D + $ / 2, P, U)
                }
            }
        });
        var Op = function (F) {
            var W = this;
            W.th = F, W.tv = F._tableView, W.addListeners()
        };
        Oh(Op, m, {
            ms_listener: 1, getView: function () {
                return this.th.getView()
            }, setCursor: function (F) {
                this.getView().style.cursor = F
            }, handle_mousemove: function (l) {
                if (!fd) {
                    var x = this;
                    delete x._29o, x.setCursor(i);
                    for (var I = x.th, H = I._60I, N = I.lp(l).x, D = H.size() - 1; D >= 0; D--) {
                        var G = H.get(D), s = G.column, L = G.startX + s.getWidth();
                        if (I.isResizable() && e(L - N) <= (P ? 10 : 3))return x._29o = G, x.setCursor(Kg), void 0;
                        (s.isSortable() || I.isMovable() || s === x.tv.getCheckColumn()) && N >= G.startX && L >= N && s.getWidth() > 0 && (x._29o = G, x.setCursor(Go))
                    }
                }
            }, handle_mousedown: function (Z) {
                this.handle_touchstart(Z)
            }, handle_touchstart: function (I) {
                var T = this;
                Fr(I), T.tv.endEditing(), T.handle_mousemove(I), T._29o && (T.x = rc(I).x, T.lx = T.th.lp(I).x, T.w = T._29o.column.getWidth(), gl(T, I))
            }, handleWindowMouseMove: function (b) {
                this.handleWindowTouchMove(b)
            }, handleWindowTouchMove: function (J) {
                var z = this, V = z.th, $ = z.getView().style.cursor, d = z._29o, S = rc(J).x - z.x;
                if (z.resizing || z.moving || ($ === Kg ? z.resizing = 1 : V.isMovable() && $ === Go && e(S) > 2 && (z.moving = 1)), z.resizing) d.column.setWidth(z.w + S); else if (z.moving) {
                    var Z = z.lx + S;
                    V._60I.each(function (z) {
                        var N = z.startX, H = N + z.column.getWidth();
                        if (Z >= N && H >= Z) {
                            var T = {
                                column: d.column,
                                startX: d.startX + S,
                                front: H - Z > Z - N,
                                insertColumn: z.column
                            };
                            T.position = T.front ? N : H, V._5Q(T)
                        }
                    })
                }
            }, _16Q: function (p, t) {
                var k = this, I = k.tv, a = k.th, s = a._checkIcon;
                if (a._6Q(p)) {
                    var L = gk(s), c = k.lx, B = p.getWidth(), M = ef(L, p);
                    if (c >= t + B / 2 - M && t + B / 2 + M >= c) {
                        a.setCheckIcon(s === Vj ? on : Vj);
                        var R = I.sm(), X = I._rows;
                        return s === Vj ? R.rs(X) : R.ss(X), I.onCheckColumnClicked(p), !0
                    }
                }
                return !1
            }, handleWindowMouseUp: function (I) {
                this.handleWindowTouchEnd(I)
            }, handleWindowTouchEnd: function (X) {
                var D = this, w = D.tv, G = D.th, Q = D._29o;
                if (D.moving) {
                    var i = G._61I;
                    if (i && i.insertColumn !== i.column) {
                        var s = i.column, M = w.getColumnModel()._roots, b = M.remove(s), W = M.indexOf(i.insertColumn);
                        W >= 0 && (i.front || W++, W <= M.size() && (M.add(s, W), w.getColumnModel()._38I(s, b, W)))
                    }
                    G._5Q(U), delete D.moving
                } else if (!D.resizing && Q) {
                    s = Q.column;
                    var j = G.lp(X).x, E = Q.startX, r = !0;
                    if (G.onColumnClicked) {
                        var F = G.onColumnClicked(s, X);
                        F === !1 && (r = !1)
                    }
                    if (r && j >= E && j <= E + s.getWidth() && !D._16Q(s, E)) {
                        if (s.isSortable()) {
                            var C = w.getSortMode(), P = s.getSortOrder();
                            C === hc ? w.getSortColumn() === s ? (P === ah && w.setSortColumn(U), s.setSortOrder(P === mi ? ah : mi)) : w.setSortColumn(s) : "bistate" === C && (w.getSortColumn() === s ? s.setSortOrder(P === mi ? ah : mi) : w.setSortColumn(s))
                        }
                        w.onColumnClicked(s, X)
                    }
                }
                D._29o = D.resizing = D.x = D.lx = D.w = U
            }
        }), Fd.TablePane = function (G) {
            this.init(new mk(G))
        }, ao("TablePane", m, {ms_v: 1, _44o: 1}), Fd.TreeTablePane = function (u) {
            this.init(new pc(u))
        }, ao("TreeTablePane", m, {ms_v: 1, _44o: 1}), Fd.Toolbar = function (E) {
            var Z = this, I = Z._view = Uo(1, Z), _ = I.style;
            _.background = H.toolbarBackground || "", _.height = Gb + Be, Z._canvas = Dm(I), Z._30o = new gr, Z._90I = new gr, Z.setItems(E || []), I.handleGroupSelectedChanged = function (X) {
                if (X.isSelected()) {
                    var s = X.getGroupId();
                    null != s && Z._items.forEach(function (z) {
                        var b = z.element;
                        b && b !== X && b.setSelected && b.getGroupId && b.getGroupId() === s && b.setSelected(!1)
                    })
                }
            }, new El(Z)
        }, ao("Toolbar", m, {
            ms_v: 1,
            ms_fire: 1,
            ms_tx: 1,
            ms_lp: 1,
            ms_tip: 1,
            ms_value: 1,
            ms_ac: [Yi, tb, _p, ul, yl, "itemGap", "separatorColor", "currentItem", "stickToRight"],
            _labelColor: H.toolbarLabelColor,
            _labelSelectColor: H.toolbarLabelSelectColor,
            _labelFont: H.toolbarLabelFont,
            _selectBackground: H.toolbarSelectBackground,
            _itemGap: H.toolbarItemGap,
            _separatorColor: H.toolbarSeparatorColor,
            _stickToRight: !1,
            getSumWidth: function () {
                return this._64I
            },
            getToolTip: function (C) {
                var H = this.getItemInfoAt(C);
                return H ? H.item.toolTip : U
            },
            getLabelColor: function (S) {
                return S && S.selected && S.type !== Vj && S.type !== An ? this._labelSelectColor : this._labelColor
            },
            onPropertyChanged: function (s) {
                this.iv(), s.property === Yi && this._items.forEach(function (Y) {
                    mo(Y)
                })
            },
            redraw: function () {
                this.iv()
            },
            addItem: function (T, B) {
                var F = this._items;
                B == U ? F.push(T) : F.splice(B, 0, T), this.fp(Yi, U, F)
            },
            removeItem: function (s) {
                if (s)for (var v = this._items, g = 0; g < v.length; g++)s === v[g] && (v.splice(g, 1), this.fp(Yi, U, v))
            },
            removeItemById: function ($) {
                if ($ != U)for (var Z = this._items, Q = 0; Q < Z.length; Q++)$ === Z[Q].id && (Z.splice(Q, 1), this.fp(Yi, U, Z))
            },
            getItemById: function (V) {
                if (V != U)for (var S = this._items, t = 0; t < S.length; t++) {
                    var L = S[t];
                    if (V === L.id)return L
                }
            },
            getItemInfos: function () {
                return this._30o
            },
            getItemInfoAt: function (c) {
                var A = this, e = 0, O = A._30o, m = A.lp(c), x = m.x, k = m.y;
                if (k >= 0 && k <= A.getHeight())for (; e < O.size(); e++) {
                    var S = O.get(e);
                    if (S.startX <= x && x <= S.endX)return S
                }
                return U
            },
            drawItem: function (G, e, o, $, u) {
                if (e.visible === !1)return 0;
                if ($c(e.visible) && e.visible() === !1)return 0;
                var f = this, h = e.disabled;
                h && (G.globalAlpha = Mp);
                var Y = f.drawItemImpl(G, e, o, $, u), W = f._itemGap;
                return h && (G.globalAlpha = 1), this._currentItem !== e || "separator" === e || e.unfocusable || Nl(G, f._separatorColor, o - W / 2, 0, Y + W, $), Y
            },
            drawItemImpl: function (Q, s, l, O, v) {
                var G = this, S = G._view, L = G._itemGap, r = O / 2, X = s.type, m = s.element, n = s.label;
                rd(m) && (n = m, m = U);
                var Y, T = G.getLabelFont(s), w = G.getLabelColor(s), P = s.selected, h = gk(s.icon), e = ef(h, s), A = 0, I = e + (n ? Mo(T, n).width : 0);
                if ("separator" === s)return gs(Q, G._separatorColor, l, O / 4, r), 1;
                if (m) {
                    h && ym(Q, h, l + e / 2, r), Yr(Q, n, T, w, l + e, 0, 0, O);
                    var N = Un(m);
                    v || G._90I.add(N), N.parentNode !== S && Cs(S, N), m.iv && m.iv(), m.validate && m.validate();
                    var W = N.getBoundingClientRect(), t = W.width, z = N.style;
                    return Pj(N), z.left = G.tx() + l + I + Be, z.top = (O - W.height) / 2 + Be, I + t
                }
                return X === An ? Y = gk(P ? ho : go) : X === Vj && (Y = gk(P ? Vj : on)), Y ? (A = ef(Y, s), ym(Q, Y, l + A / 2, r), l += A, I += A) : P && ns(Q, l - L / 2, 0, I + L, O, G.getSelectBackground(s)), h && ym(Q, h, l + e / 2, r), Yr(Q, n, T, w, l + e, 0, 0, O), I
            },
            validateImpl: function () {
                var h = this, t = h._canvas, a = h.getWidth(), e = h.getHeight(), c = h._30o, X = h._items;
                Xq(t, a, e);
                var r = Cl(t), p = h._itemGap, O = p / 2;
                Yj(r, h.tx(), 0, 1), r.clearRect(0, 0, a, e);
                var S = h._90I;
                h._90I = new gr, c.clear(), X.forEach(function (i) {
                    var W = h.drawItem(r, i, O, e);
                    c.add({item: i, startX: O, endX: O + W, width: W}), W && (O += W + p)
                }), S.each(function (s) {
                    h._90I.contains(s) || jm(s)
                }), h._64I = o(0, O), r.restore(), h._stickToRight ? (h._65O = 0, r = Cl(t), O = a - h._64I + p, Yj(r, 0, 0, 1), r.clearRect(0, 0, a, e), c.clear(), X.forEach(function (Z) {
                        var B = h.drawItem(r, Z, O, e, !0);
                        c.add({item: Z, startX: O, endX: O + B, width: B}), B && (O += B + p)
                    }), r.restore()) : h.tx(h.tx())
            },
            handleClick: function (W) {
                var a = this, p = W.type, g = W.action, L = W.groupId, j = W.selected;
                W.disabled || (L != U ? j || (W.selected = !0, this._items.forEach(function (_) {
                        _.groupId === L && W !== _ && (_.selected = !1)
                    }), g && W.action(W, a)) : p === Vj || "toggle" === p ? (W.selected = !j, g && W.action(W, a)) : g && W.action(W, a)), as(), a.iv()
            }
        });
        var El = function (d) {
            this.tb = d, this.addListeners()
        };
        Oh(El, m, {
            ms_listener: 1, getView: function () {
                return this.tb._view
            }, handle_mousewheel: function (G) {
                this.handleScroll(G, 10 * (G.wheelDelta / 40))
            }, handle_DOMMouseScroll: function (C) {
                this.handleScroll(C, 10 * -C.detail)
            }, handleScroll: function (s, R) {
                Fr(s);
                var J = this.tb;
                J.isScrollable() && !J._stickToRight && (J.tx(J.tx() + R), re())
            }, handle_mousemove: function (z) {
                var e = this;
                fd ? e.info2 = e.tb.getItemInfoAt(z) : e.setItem(z)
            }, handle_mouseout: function (i) {
                var u = this;
                i.target === u.getView() ? u.tb.setCurrentItem(U) : u.handle_mousemove(i)
            }, handle_mousedown: function (g) {
                this.handle_mousemove(g), this.handle_touchstart(g)
            }, handle_touchstart: function (f) {
                var x = this, R = x.tb, F = f.target;
                kf(f) && (F === x.getView() || F === R._canvas) && (Fr(f), R.setFocus(f) && (this.setItem(f, !0), (R.isScrollable() || x.info && !x.info.item.disabled) && (x.x = rc(f).x, x.tx = R.tx(), gl(x, f))))
            }, handleWindowMouseMove: function (a) {
                this.handleWindowTouchMove(a)
            }, handleWindowTouchMove: function (j) {
                var i = this, x = i.tb;
                if (!x._stickToRight) {
                    var o = rc(j).x - i.x;
                    !i._25o && e(o) > 2 && x.isScrollable() && (i._25o = 1), i._25o && x.tx(i.tx + o)
                }
            }, handleWindowMouseUp: function (R) {
                this.handleWindowTouchEnd(R)
            }, handleWindowTouchEnd: function () {
                var w = this, X = w.tb, u = w.info, b = w.info2;
                if (!w._25o && u) {
                    var Z = u.item;
                    b && b.item !== Z || X.handleClick(Z)
                }
                w._25o = w.x = w.tx = w.info2 = U, w.setItem()
            }, setItem: function (G, c) {
                var v = this, b = v.tb, n = v.info = G ? b.getItemInfoAt(G) : U, k = n ? n.item : U;
                b.setCurrentItem(k), c && k && $c(k.onDown) && k.onDown(G)
            }
        }), Fd.BorderPane = function () {
            this._view = Uo(1, this), this.iv()
        }, ao("BorderPane", m, {
            ms_v: 1,
            ms_ac: ["topHeight", "bottomHeight", "leftWidth", "rightWidth"],
            ms_fire: 1,
            getLeftView: function () {
                return this._leftView
            },
            setLeftView: function (p, r) {
                this._12o("leftView", p), r != U && this.setLeftWidth(r)
            },
            getRightView: function () {
                return this._rightView
            },
            setRightView: function (N, F) {
                this._12o("rightView", N), F != U && this.setRightWidth(F)
            },
            getTopView: function () {
                return this._topView
            },
            setTopView: function (H, o) {
                this._12o("topView", H), o != U && this.setTopHeight(o)
            },
            getBottomView: function () {
                return this._bottomView
            },
            setBottomView: function (Z, G) {
                this._12o("bottomView", Z), G != U && this.setBottomHeight(G)
            },
            getCenterView: function () {
                return this._centerView
            },
            setCenterView: function (P) {
                this._12o("centerView", P)
            },
            _12o: function (m, y) {
                var X = this, l = "_" + m, b = X._view, N = X[l];
                N !== y && (N && (N.getView ? jm(N.getView()) : jm(N)), X[l] = y, y && (y.getView ? Cs(b, y.getView(), 1) : Cs(b, y, 1)), X.fp(m, N, y))
            },
            onPropertyChanged: function () {
                this.iv()
            },
            validateImpl: function () {
                var v = this, q = v._topView, O = v._bottomView, C = v._leftView, Y = v._rightView, V = v._centerView, h = v.getWidth(), P = v.getHeight(), u = 0, d = 0, x = h, r = P, w = 0, M = 0, y = 0, i = 0;
                q && (w = v._topHeight == U ? Iq(q) : v._topHeight, d = w), O && (M = v._bottomHeight == U ? Iq(O) : v._bottomHeight, r = P - M), C && (y = v._leftWidth == U ? Yb(C) : v._leftWidth, u = y), Y && (i = v._rightWidth == U ? Yb(Y) : v._rightWidth, x = h - i);
                var J = o(0, x - u), T = o(0, r - d);
                q && kg(q, 0, 0, h, w), O && kg(O, 0, r, h, M), C && kg(C, 0, d, y, T), Y && kg(Y, x, d, i, T), V && kg(V, u, d, J, T)
            }
        })
    }
}("undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : this, Object);