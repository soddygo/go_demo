/**
 * Created by soddygosongguochao on 2017/3/14.
 */
!function (O, Q, s) {
    "use strict";
    var h = "ht", I = h + ".widget.", f = O[h], r = f.Color, m = f.widget, S = r.widgetBorder, X = r.widgetBackground, p = r.widgetIconBorder, T = r.transparent, Y = r.background, U = r.highlight, x = f.Default, c = x.def, $ = x.widgetRowHeight, i = x.removeHTML, M = x.drawText, G = x.getTextSize, j = x.isLeftButton, o = x.getWindowInfo, H = x.getImage, v = x.drawCenterImage, b = x.preventDefault, P = x.getLogicalPoint, J = x.labelFont, _ = x.labelColor, n = x.labelSelectColor, y = x.widgetIndent, l = x.startDragging, g = x.createElement, N = x.getClientPoint, u = x.scrollBarInteractiveSize, K = x.getInternal(), F = (K.createView, K.createDiv), W = K.createCanvas, d = K.createImage, B = K.setCanvas, R = K.initContext, a = K.translateAndScale, w = K.isString, Z = K.drawBorder, t = K.getImageWidth, e = K.getImageHeight, L = K.fillRect, z = K.layout, V = K.formatNumber, C = K.addMethod, A = K.isH, D = x.isTouchable, q = Math.round, E = "readonly", k = D ? "touchstart" : "mousedown", Gf = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }, Sq = function (Y) {
        var z = Y.touches[0];
        return z ? z : Y.changedTouches[0]
    }, Ur = function (A, H) {
        return A.querySelector(H)
    }, Np = function (J, B) {
        var m = x.getLogicalPoint(B, J._canvas || J._view);
        return m.x >= 0 && m.y >= 0 && m.x <= J.getWidth() && m.y <= J.getHeight()
    };
    C(x, {
        textFieldFont: J,
        textFieldColor: _,
        textFieldBorderColor: S,
        textAreaFont: J,
        textAreaColor: _,
        textAreaBorderColor: S,
        radioButtonLabelFont: J,
        radioButtonLabelColor: _,
        radioButtonPressBackground: S,
        checkBoxLabelFont: J,
        checkBoxLabelColor: _,
        checkBoxPressBackground: S,
        buttonLabelFont: J,
        buttonLabelColor: _,
        buttonLabelSelectColor: n,
        buttonBackground: X,
        buttonBorderColor: S,
        buttonSelectBackground: U,
        sliderBackground: r.widgetIconBackground,
        sliderLeftBackground: r.widgetIconHighlight,
        sliderThickness: 3,
        sliderPadding: 4,
        sliderButton: d(14, 14, {
            type: "circle",
            rect: [0, 0, 14, 14],
            borderWidth: 1,
            borderColor: p,
            gradient: "linear.northeast",
            gradientColor: r.widgetIconGradient,
            background: X
        }),
        comboBoxMaxHeight: -1,
        comboBoxLabelFont: J,
        comboBoxLabelColor: _,
        comboBoxLabelSelectColor: n,
        comboBoxShadowColor: T,
        comboBoxBorderColor: S,
        comboBoxBackground: Y,
        comboBoxSelectBackground: U,
        comboBoxDropDownIcon: d(12, 16, {type: "shape", points: [1, 5, 6, 11, 11, 5], borderWidth: 2, borderColor: p}),
        imageBorderColor: s,
        imageBackground: s,
        formPaneLabelColor: _,
        formPaneLabelFont: J,
        formPaneLabelAlign: "left",
        formPaneLabelVAlign: "middle",
        formPaneHPadding: 8,
        formPaneVPadding: 8,
        formPaneLabelHPadding: 2,
        formPaneLabelVPadding: 0,
        formPaneHGap: 6,
        formPaneVGap: 6
    }, !0);
    var yr = function (v, F) {
        var T = this;
        (T._view = K.createView(null, T)).appendChild(T._element = g(v, F)), T.setHeight($), T.setWidth(80), T.iv()
    };
    c(yr, Q, {
        ms_v: 1, ms_fire: 1, ms_tip: 1, ms_ac: ["toolTip"], onPropertyChanged: function () {
            this.iv()
        }, getToolTip: function () {
            return this._toolTip || this.getText()
        }, getElement: function () {
            return this._element
        }, getText: function () {
            return this._element.value
        }, setText: function (x) {
            this._element.value = x
        }, getValue: function () {
            return this.getText()
        }, setValue: function (P) {
            this.setText(P)
        }, getColor: function () {
            return this._element.style.color
        }, setColor: function (a) {
            this._element.style.color = a
        }, getBackground: function () {
            return this._element.style.background
        }, setBackground: function (i) {
            this._element.style.background = i
        }, getBorder: function () {
            return this._element.style.border
        }, setBorder: function (C) {
            this._element.style.border = C
        }, getFont: function () {
            return this._element.style.font
        }, setFont: function (j) {
            this._element.style.font = j
        }, isEditable: function () {
            return this._element.hasAttribute(E)
        }, setEditable: function (B) {
            var M = this._element;
            B ? M.removeAttribute(E) : M.setAttribute(E, !0)
        }, validateImpl: function () {
            var A = this;
            z(A._element, 0, 0, A.getWidth(), A.getHeight())
        }
    }), m.TextField = function () {
        m.TextField.superClass.constructor.call(this, "input", x.textFieldBorderColor), this.setColor(x.textFieldLabelColor), this.setFont(x.textFieldLabelFont)
    }, c(I + "TextField", yr, {
        getType: function () {
            return this._element.getAttribute("type")
        }, setType: function (t) {
            var L = this._element, h = x.numberListener;
            L.setAttribute("type", t), L.removeEventListener("keydown", h, !1), "number" === t && L.addEventListener("keydown", h, !1)
        }
    }), m.TextArea = function () {
        m.TextArea.superClass.constructor.call(this, "textarea", x.textAreaBorderColor), this.setColor(x.textAreaLabelColor), this.setFont(x.textAreaLabelFont)
    }, c(I + "TextArea", yr, {}), m.Button = function () {
        var S = this, a = S._view = K.createView(null, S);
        S.setHeight($), S.setWidth(80), S._canvas = W(a), new xc(S), S.iv()
    }, c(I + "Button", Q, {
        ms_v: 1,
        ms_fire: 1,
        ms_tip: 1,
        ms_ac: ["groupId", "label", "icon", "iconColor", "orientation", "toolTip", "labelFont", "labelColor", "labelSelectColor", "borderColor", "background", "selectBackground", "togglable", "selected", "pressed", "clickable"],
        _clickable: !0,
        _togglable: !1,
        _selected: !1,
        _pressed: !1,
        _orientation: "h",
        _labelFont: x.buttonLabelFont,
        _labelColor: x.buttonLabelColor,
        _labelSelectColor: x.buttonLabelSelectColor,
        _borderColor: x.buttonBorderColor,
        _background: x.buttonBackground,
        _selectBackground: x.buttonSelectBackground,
        onClicked: function () {
        },
        onSelectedChanged: function () {
        },
        onValueChanged: function () {
        },
        onPropertyChanged: function (i) {
            var b = this, E = b._view.parentNode;
            b.iv(), "selected" === i.property && (null != b.getGroupId() && E && E.handleGroupSelectedChanged && E.handleGroupSelectedChanged(b), b.onSelectedChanged(), b.onValueChanged(i.oldValue, i.newValue))
        },
        getToolTip: function () {
            return this._toolTip || this._label
        },
        validateImpl: function () {
            var T = this, V = T._canvas, o = T.getWidth(), b = T.getHeight(), p = T._pressed || T._selected, J = p ? T._selectBackground : T._background;
            B(V, o, b);
            var X = R(V);
            a(X, 0, 0, 1), X.clearRect(0, 0, o, b), J && L(X, 0, 0, o, b, J), Z(X, T._borderColor, 0, 0, o, b);
            var n = T._iconColor, x = H(T._icon, n), w = t(x), h = e(x), P = T._label, C = T.getLabelFont(), E = p ? T._labelSelectColor : T._labelColor, F = null == P ? Gf : G(C, P), z = F.width, l = F.height;
            A(T) ? (w && v(X, x, o / 2 - (w + z) / 2 + w / 2, b / 2, T, T, n), z && M(X, P, C, E, o / 2 - (w + z) / 2 + w, 0, z, b, "center")) : (w && v(X, x, o / 2, b / 2 - (h + l) / 2 + h / 2, T, T, n), z && M(X, P, C, E, o / 2 - z / 2, b / 2 - (h + l) / 2 + h, z, l, "center")), X.restore()
        }
    });
    var xc = function (G) {
        this.button = G, this.addListeners()
    };
    c(xc, Q, {
        ms_listener: 1, getView: function () {
            return this.button._view
        }, handle_mousedown: function (S) {
            j(S) && this.handle_touchstart(S)
        }, handleWindowMouseMove: function (N) {
            this.handleWindowTouchMove(N)
        }, handleWindowMouseUp: function (Z) {
            this.handleWindowTouchEnd(Z)
        }, handle_touchstart: function (L) {
            b(L), this.button.isClickable() && (l(this, L), this.button.setPressed(!0))
        }, handleWindowTouchMove: function () {
        }, handleWindowTouchEnd: function (G) {
            var B = this, l = B.button;
            l.setPressed(!1), Np(l, G) && (l.isTogglable() && (null != l.getGroupId() ? l.setSelected(!0) : l.setSelected(!l.isSelected())), l.onClicked(G))
        }
    });
    var ud = function () {
        var u = this, X = u._view = K.createView(null, u);
        u.setHeight($), u.setWidth(80), u._canvas = W(X), new Zm(u), u.iv()
    };
    c(ud, Q, {
        ms_v: 1,
        ms_fire: 1,
        ms_tip: 1,
        ms_ac: ["label", "labelFont", "labelColor", "toolTip", "icon", "iconColor", "selected", "pressed", "pressBackground", "padding"],
        _padding: 0,
        _selected: !1,
        _pressed: !1,
        onClicked: function () {
        },
        onSelectedChanged: function () {
        },
        onValueChanged: function () {
        },
        getValue: function () {
            return this.isSelected()
        },
        setValue: function (q) {
            this.setSelected(q)
        },
        onPropertyChanged: function (o) {
            var Q = this;
            Q.iv(), "selected" === o.property && (Q.onSelectedChanged(), Q.onValueChanged(o.oldvalue, o.newValue))
        },
        getToolTip: function () {
            return this._toolTip || this._label
        },
        validateImpl: function () {
            var w = this, C = w._canvas, N = w.getWidth(), y = w.getHeight(), U = w.getCheckIcon;
            B(C, N, y);
            var Z = R(C);
            a(Z, 0, 0, 1), Z.clearRect(0, 0, N, y);
            var c = w._padding, W = w._iconColor, u = H(U ? w.getCheckIcon() : w.getRadioIcon()), i = t(u), A = e(u);
            w._pressed && (Z.fillStyle = w._pressBackground, Z.beginPath(), U ? Z.rect(c, y / 2 - A / 2, i, A) : Z.arc(c + i / 2, y / 2, Math.min(i, A) / 2, 0, 2 * Math.PI, !0), Z.fill()), v(Z, u, c + i / 2, y / 2, w, w), c += i + 1, u = H(w.getIcon(), W), i = t(u), v(Z, u, c + i / 2, y / 2, w, w, W), c += i, M(Z, w._label, w._labelFont, w._labelColor, c, 0, 0, y), Z.restore()
        }
    });
    var Zm = function (N) {
        this.c = N, this.addListeners()
    };
    c(Zm, Q, {
        ms_listener: 1, getView: function () {
            return this.c._view
        }, handle_mousedown: function (o) {
            j(o) && this.handle_touchstart(o)
        }, handleWindowMouseMove: function (n) {
            this.handleWindowTouchMove(n)
        }, handleWindowMouseUp: function (N) {
            this.handleWindowTouchEnd(N)
        }, handle_touchstart: function (g) {
            b(g), l(this, g), this.c.setPressed(!0)
        }, handleWindowTouchMove: function () {
        }, handleWindowTouchEnd: function (G) {
            var I = this, v = I.c;
            v.setPressed(!1), Np(v, G) && (v.handleClick(G), v.onClicked(G))
        }
    }), m.CheckBox = function () {
        m.CheckBox.superClass.constructor.call(this)
    }, c(I + "CheckBox", ud, {
        _labelFont: x.checkBoxLabelFont,
        _labelColor: x.checkBoxLabelColor,
        _pressBackground: x.checkBoxPressBackground,
        getCheckIcon: function () {
            return this._selected ? "check" : "uncheck"
        },
        handleClick: function () {
            this.setSelected(!this.isSelected())
        }
    }), m.RadioButton = function () {
        m.RadioButton.superClass.constructor.call(this)
    }, c(I + "RadioButton", ud, {
        ms_ac: ["groupId"],
        _pressBackground: x.radioButtonPressBackground,
        _labelFont: x.radioButtonLabelFont,
        _labelColor: x.radioButtonLabelColor,
        getRadioIcon: function () {
            return this._selected ? "radioOn" : "radioOff"
        },
        onPropertyChanged: function (L) {
            var f = this, z = f._view.parentNode;
            f.iv(), null != f.getGroupId() && "selected" === L.property && (z && z.handleGroupSelectedChanged && z.handleGroupSelectedChanged(f), f.onSelectedChanged(), f.onValueChanged(L.oldValue, L.newValue))
        },
        handleClick: function () {
            this.setSelected(!0)
        }
    }), m.Slider = function () {
        var D = this, x = D._view = K.createView(null, D);
        D.setHeight($), D.setWidth(80), D._canvas = W(x), new Dn(D), D.iv(), D.enableToolTip()
    }, c(I + "Slider", Q, {
        ms_v: 1,
        ms_fire: 1,
        ms_tip: 1,
        ms_ac: ["value", "min", "max", "step", "button", "toolTip", "instant", "thickness", "padding", "background", "leftBackground"],
        _min: 0,
        _max: 100,
        _value: 50,
        _step: s,
        _instant: !0,
        _button: x.sliderButton,
        _thickness: x.sliderThickness,
        _padding: x.sliderPadding,
        _background: x.sliderBackground,
        _leftBackground: x.sliderLeftBackground,
        onPropertyChanged: function (S) {
            var U = this, T = S.property;
            ("min" === T || "max" === T || "step" === T) && U.setValue(U._value), U.iv()
        },
        adjustValue: function (G) {
            null == G && (G = 0);
            var v = this, W = v._min, I = v._max, F = v._step;
            return W > G && (G = W), G > I && (G = I), F > 0 && (G = Math.floor((G - W) / F) * F + W), G
        },
        getToolTip: function () {
            return this._toolTip || V(this._value)
        },
        getValue: function () {
            return this._value
        },
        setValue: function (Y) {
            var Q = this, z = Q._value;
            Y = Q.adjustValue(Y), z !== Y && (Q._value = Y, Q.fp("value", z, Y), Q.onValueChanged(z, Y))
        },
        onValueChanged: function () {
        },
        onEndValueChanged: function () {
        },
        drawBackground: function (o, N, e, n, f) {
            L(o, N, e, n, f, this.getBackground())
        },
        drawLeftBackground: function (g, M, x, V, W) {
            var I = this.getLeftBackground();
            I && L(g, M, x, V, W, I)
        },
        drawButton: function (T, q, M, o, A) {
            v(T, H(this._button), q + o / 2, M + A / 2, this, this)
        },
        getButtonWidth: function () {
            var a = H(this._button);
            return a ? a.width : 0
        },
        validateImpl: function () {
            var r = this, k = r._canvas, p = r._min, F = r._max, f = r._value, X = r._padding, t = r._thickness, v = r.getWidth(), o = r.getHeight(), Q = r.getButtonWidth(), O = (o - t) / 2, w = Q / 2 + (f - p) / (F - p) * (v - 2 * X - Q);
            B(k, v, o);
            var Y = R(k);
            a(Y, 0, 0, 1), Y.clearRect(0, 0, v, o), r.drawBackground(Y, X, O, v - 2 * X, t), r.drawLeftBackground(Y, X, O, w, t), r.drawButton(Y, X + w - Q / 2, 0, Q, o), Y.restore()
        }
    });
    var Dn = function (n) {
        this.slider = n, this.addListeners()
    };
    c(Dn, Q, {
        ms_listener: 1, getView: function () {
            return this.slider._view
        }, handle_mousedown: function (P) {
            j(P) && this.handle_touchstart(P)
        }, handleWindowMouseMove: function (i) {
            this.handleWindowTouchMove(i)
        }, handleWindowMouseUp: function (E) {
            this.handleWindowTouchEnd(E)
        }, setValue: function (F) {
            var c = this.slider, L = c.getPadding() + c.getButtonWidth() / 2, g = c.getMin();
            c.setValue(g + (P(F, c._canvas).x - L) / (c.getWidth() - 2 * L) * (c.getMax() - g))
        }, handle_touchstart: function (G) {
            var c = this;
            b(G), c.setValue(G), l(c, G), x.showToolTip(G, c.slider.getToolTip(G))
        }, handleWindowTouchMove: function (p) {
            this.setValue(p), x.showToolTip(p, this.slider.getToolTip(p))
        }, handleWindowTouchEnd: function (E) {
            this.setValue(E), this.slider.onEndValueChanged(), x.hideToolTip()
        }
    }), m.ComboBox = function () {
        var i = this, N = i._view = K.createView(null, i), t = i._listView = new m.ListView, L = i._canvas = W(N), Y = t._view, d = t.sm();
        i.setHeight($), i.setWidth(80), d.setSelectionMode("single"), t.drawRow = function (k, N, b, V, F, Y, X) {
            i.drawRow(k, N, b, V, F, Y, X)
        }, N.style.display = "inline-block", K.setBorder(N, x.comboBoxBorderColor), Y.style.boxShadow = "0px 0px 10px " + x.comboBoxShadowColor, null != x.baseZIndex && (Y.style.zIndex = parseInt(x.baseZIndex) + 1 + ""), Y.addEventListener("mousemove", function (h) {
            d.ss(t.getDataAt(h))
        }, !1), Y.addEventListener("keydown", function (D) {
            if (K.isEnter(D)) {
                var S = d.ld();
                S && (i.setValue(S.value), i.close())
            }
            K.isEsc(D) && i.close()
        }, !1), N.addEventListener("keydown", function (z) {
            (K.isDown(z) || K.isUp(z)) && i.open()
        }, !1), t.onDataClicked = function (t) {
            i.setValue(t.value), i.close()
        }, N.addEventListener(k, function (J) {
            if (j(J)) {
                var q = J.target;
                (q === L || q === N) && (b(J), i.toggle())
            }
        }, !1), i._handleWindowClick = function (m) {
            if (j(m)) {
                var l = m.target;
                l === i._input || Y.contains(l) || l === N || i.close()
            }
        }, i.iv()
    }, x.def(I + "ComboBox", Q, {
        ms_v: 1,
        ms_fire: 1,
        ms_tip: 1,
        ms_ac: ["dropDownIcon", "dropDownWidth", "toolTip", "strict", "indent", "background", "labelFont", "labelColor", "labelSelectColor", "maxHeight", "selectBackground", "value", "values", "labels", "icons", "editable"],
        _strict: !0,
        _editable: !1,
        _maxHeight: x.comboBoxMaxHeight,
        _labelFont: x.comboBoxLabelFont,
        _labelColor: x.comboBoxLabelColor,
        _labelSelectColor: x.comboBoxLabelSelectColor,
        _background: x.comboBoxBackground,
        _dropDownWidth: s,
        _dropDownIcon: x.comboBoxDropDownIcon,
        _selectBackground: x.comboBoxSelectBackground,
        _indent: y,
        getListView: function () {
            return this._listView
        },
        onPropertyChanged: function (W) {
            this.iv(), "value" === W.property && this.onValueChanged(W.oldValue, W.newValue)
        },
        onValueChanged: function () {
        },
        getToolTip: function () {
            return this._toolTip || this.toLabel(this._value)
        },
        getLabelColor: function (A, B) {
            return B ? this._labelSelectColor : this._labelColor
        },
        isEqual: function (m, J) {
            return this._strict ? m === J : m == J
        },
        toLabel: function (n) {
            var h = this, a = h._values, k = h._labels;
            if (k && a && k.length === a.length)for (var w = 0; w < a.length; w++)if (h.isEqual(a[w], n))return k[w];
            return null == n ? "" : n + ""
        },
        toIcon: function (v) {
            var g = this, a = g._values, l = g._icons;
            if (l && a && l.length === a.length)for (var h = 0; h < a.length; h++)if (g.isEqual(a[h], v))return l[h];
            return null
        },
        drawValue: function (V, A, Z, h, n, O, J) {
            var Q = this, T = Q._indent, R = Q.toLabel(A), d = H(Q.toIcon(A));
            d && (v(V, d, h + T / 2, n + J / 2), h += T), R && M(V, R, Q.getLabelFont(A, Z), Q.getLabelColor(A, Z), h, n, 0, J)
        },
        drawRow: function (D, X, e, y, z, f, v) {
            var g = this, m = X.value, E = g._indent;
            e && L(D, y, z, f, v, g._selectBackground), g.drawValue(D, m, e, y, z, f - E, v)
        },
        validateImpl: function () {
            var E = this, U = E._canvas, z = E._indent, h = E.getWidth(), n = E.getHeight(), $ = h - z, x = E._background || "";
            E._view.style.background = x, E._listView._view.style.background = x, B(U, h, n);
            var I = R(U);
            a(I, 0, 0, 1), I.clearRect(0, 0, h, n), v(I, H(E._dropDownIcon), $ + z / 2, n / 2, E, E), I.beginPath(), I.rect(0, 0, $, n), I.clip(), E.drawValue(I, E._value, !1, 0, 0, $, n), I.restore()
        },
        isOpened: function () {
            return !!this._listView._view.parentNode
        },
        open: function () {
            var a = this, G = a._listView, R = G.dm(), X = a._values || [], H = X.length;
            if (!a.isOpened()) {
                R.clear();
                for (var I = 0; H > I; I++) {
                    var P = new f.Data, $ = X[I];
                    P.setName(a.toLabel($)), P.value = $, R.add(P), a.isEqual($, a._value) && R.sm().ss(P)
                }
                var g = o(), Y = g.left, v = g.top, n = g.height, Z = a._view.getBoundingClientRect(), y = Z.left + Y, b = Z.top + v, u = Z.height, T = a.getIndent(), t = a.getWidth(), w = a.getHeight(), L = y + 1, c = b + u, _ = a.getDropDownWidth() || t, i = H * w;
                if (a._maxHeight > 0 && (i = Math.min(i, a._maxHeight)), G.setRowHeight(w), c + i > v + n && (b - v > v + n - b - u ? (i = Math.min(i, b - v), c = b - i) : i = v + n - c), a._editable) {
                    var B = a._input = x.createElement("input", a.getSelectBackground(), a.getLabelFont(), a.toLabel(a._value));
                    document.body.appendChild(B), z(B, y, b + 1, t - T, w), B.addEventListener("keydown", function (O) {
                        K.isEnter(O) ? a.setInputValue(B) : K.isEsc(O) && a.close()
                    }, !1), a.onInputCreated(B)
                }
                document.body.appendChild(G.getView()), z(G, L, c, _, i), G.setFocus(), f.Default.callLater(function () {
                    O.addEventListener(k, a._handleWindowClick, !1)
                }), a.onOpened && a.onOpened(), K.closePopup(a)
            }
        },
        onInputCreated: function () {
        },
        setInputValue: function (x) {
            var D = this, k = D._labels, S = D._values, W = x.value;
            if (k)for (var b = 0; b < k.length; b++)W === k[b] && (W = S[b]);
            "string" == typeof W && S && S.length && "number" == typeof S[0] && (W = parseFloat(W)), D.setValue(W), D.close()
        },
        close: function () {
            var H = this;
            H.isOpened() && (i(H._listView._view), H._input && (i(H._input), delete H._input), O.removeEventListener(k, H._handleWindowClick, !1), H.onClosed && H.onClosed(), x.popup === H && delete x.popup), H.setFocus()
        },
        toggle: function () {
            var $ = this;
            $.isOpened() ? $.close() : $.open()
        }
    }), m.BaseDropDownTemplate = function (T) {
        this._master = T
    }, x.def(I + "BaseDropDownTemplate", Q, {
        ms_ac: ["master"], getView: function () {
        }, onOpened: function () {
        }, onClosed: function () {
        }, getValue: function () {
        }, getWidth: function () {
        }, getHeight: function () {
        }
    }), m.MultiComboBox = function () {
        var Q = this, I = Q._view = K.createView(null, Q), D = Q._canvas = W(I);
        Q.setHeight($), Q.setWidth(80), I.style.display = "inline-block", K.setBorder(I, x.comboBoxBorderColor), I.addEventListener("keydown", function (s) {
            (K.isDown(s) || K.isUp(s)) && Q.open()
        }, !1), I.addEventListener(k, function (v) {
            if (j(v)) {
                var R = v.target;
                (R === D || R === I) && (b(v), Q.toggle())
            }
        }, !1), Q._handleWindowClick = function (v) {
            if (j(v)) {
                var r = v.target, o = Q._dropDownComponentInstanceView;
                r === Q._input || r === I || o && o.contains(r) || Q.close()
            }
        }, Q.iv()
    }, x.def(I + "MultiComboBox", Q, {
        ms_v: 1,
        ms_fire: 1,
        ms_tip: 1,
        ms_ac: ["dropDownIcon", "toolTip", "background", "labelFont", "labelColor", "value", "editable", "indent", "dropDownComponent"],
        _editable: !1,
        _background: x.comboBoxBackground,
        _dropDownIcon: x.comboBoxDropDownIcon,
        _indent: y,
        _labelFont: x.comboBoxLabelFont,
        _labelColor: x.comboBoxLabelColor,
        onPropertyChanged: function (z) {
            var F = this;
            F.iv(), "value" === z.property && F.onValueChanged(z.oldValue, z.newValue)
        },
        onValueChanged: function () {
        },
        getDropDownComponentInstance: function () {
            return this._dropDownComponentInstance
        },
        getToolTip: function () {
            return this._toolTip
        },
        validateImpl: function () {
            var g = this, $ = g._canvas, j = g._indent, h = g.getWidth(), i = g.getHeight(), W = h - j, s = g._background || "";
            g._view.style.background = s, B($, h, i);
            var _ = R($);
            a(_, 0, 0, 1), _.clearRect(0, 0, h, i), v(_, H(g._dropDownIcon), W + j / 2, i / 2, g, g), _.beginPath(), _.rect(0, 0, W, i), _.clip(), this.drawValue(_, 0, 0, W, i), g._input && g._input.value !== g._value && (g._input.value = null == g._value ? "" : g._value), _.restore()
        },
        drawValue: function (g, e, b, a, h) {
            M(g, this._value, this.getLabelFont(), this.getLabelColor(), e + 1, b, 0, h)
        },
        isOpened: function () {
            var k = this, G = k._dropDownComponentInstanceView;
            return !!G
        },
        open: function () {
            var h = this;
            if (!h.isOpened()) {
                var e = x.getClass(h._dropDownComponent), u = h._dropDownComponentInstance = new e(h), N = h._dropDownComponentInstanceView = u.getView(), R = o(), P = R.left, g = R.top, G = R.width, r = R.height, m = h._view.getBoundingClientRect(), C = m.left + P, c = m.top + g, D = (m.width, m.height), a = h.getIndent(), J = h.getWidth(), p = h.getHeight(), q = C, _ = c + D, s = u.getWidth() || J, $ = u.getHeight();
                if (_ + $ > g + r && c - g > g + r - c - D && (_ = c - $), q + s > P + G && (q -= q + s - P - G), h._editable) {
                    var E = h._input = x.createElement("input", x.comboBoxSelectBackground, h.getLabelFont(), h._value);
                    document.body.appendChild(E), z(E, C, c + 1, J - a, p), E.addEventListener("keydown", function (u) {
                        K.isEnter(u) ? (h.setValue(E.value), h.close(!0)) : K.isEsc(u) && h.close(!0)
                    }, !1), h.onInputCreated(E)
                }
                N.style.boxShadow = "0px 0px 10px " + x.toolTipShadowColor, N.style.position = "absolute", null != x.baseZIndex && (N.style.zIndex = parseInt(x.baseZIndex) + 1 + ""), document.body.appendChild(N), N.focus(), z(u, q, _, s, $), u.onOpened && u.onOpened(h._value), O.addEventListener(k, h._handleWindowClick, !1), h.onOpened && h.onOpened(), K.closePopup(h)
            }
        },
        onInputCreated: function () {
        },
        close: function (B) {
            var t = this;
            if (t.isOpened()) {
                B || t.setValue(t._dropDownComponentInstance.getValue());
                var U = t._dropDownComponentInstance, W = t._dropDownComponentInstanceView;
                U.onClosed && U.onClosed(), i(W), delete t._dropDownComponentInstanceView, delete t._dropDownComponentInstance, t._input && (i(t._input), delete t._input), O.removeEventListener(k, t._handleWindowClick, !1), t.onClosed && t.onClosed(), x.popup === t && delete x.popup
            }
            t.setFocus()
        },
        toggle: function () {
            var _ = this;
            _.isOpened() ? _.close() : _.open()
        }
    }), m.Image = function () {
        var H = this, V = H._view = K.createView(null, H);
        V.onmousedown = b, H.setHeight($), H.setWidth(80), H._canvas = W(V), new _i(H), H.iv()
    }, c(I + "Image", Q, {
        ms_v: 1,
        ms_fire: 1,
        ms_tip: 1,
        ms_ac: ["icon", "iconColor", "stretch", "toolTip", "borderColor", "background"],
        _borderColor: x.imageBorderColor,
        _background: x.imageBackground,
        _stretch: "centerUniform",
        onClicked: function () {
        },
        onPropertyChanged: function () {
            this.iv()
        },
        validateImpl: function () {
            var G = this, e = G._canvas, C = G.getWidth(), W = G.getHeight(), j = G._iconColor, Q = H(G._icon, j), I = G._background;
            B(e, C, W);
            var r = R(e);
            a(r, 0, 0, 1), r.clearRect(0, 0, C, W), I && L(r, 0, 0, C, W, I), this.drawImage(r, Q, 0, 0, C, W, j), Z(r, G._borderColor, 0, 0, C, W), r.restore()
        },
        drawImage: function (u, R, W, V, i, p, N) {
            R && x.drawStretchImage(u, R, this._stretch, W, V, i, p, null, this, N)
        }
    });
    var _i = function (j) {
        this.image = j, this.addListeners()
    };
    c(_i, Q, {
        ms_listener: 1, getView: function () {
            return this.image._view
        }, handle_mousedown: function (M) {
            j(M) && this.handle_touchstart(M)
        }, handleWindowMouseMove: function (d) {
            this.handleWindowTouchMove(d)
        }, handleWindowMouseUp: function (b) {
            this.handleWindowTouchEnd(b)
        }, handle_touchstart: function (K) {
            b(K), l(this, K)
        }, handleWindowTouchMove: function () {
        }, handleWindowTouchEnd: function (D) {
            var Q = this, w = Q.image;
            Np(w, D) && w.onClicked(D)
        }
    });
    var Ed = "data:image/png;base64,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", Ih = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAEACAIAAABdw+MhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALBJREFUeNrs2sEJgDAQRNGJBPuvV5R4FAuYnF4aeGRv+9mx0n0zOQEAAAAAAAAAAAAAAABsAsbK0/3Bk6MLXO1WAQAAAAAAAAAAAAAAAOBLCUn3bGCWWwgAAAAAAAAAAAAAAACA36Z/rzKw7vKIcgEAAAAAAAAAAAAAAADYBIzyzUBmuYUAAAAAAAAAAAAAAAAA2AmM8s1AZrmFAAAAAAAAAAAAAAAAAPht+uWU8AowAGyEi9doBGciAAAAAElFTkSuQmCC", Ci = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAMCAYAAAAd3Y8KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAMpJREFUeNrU1bGJAkEUBuDP4dbt4sKrYDGyBKPrwMxIEK6MA8FIIzswsgQjSzC8Cgzd3eSStyCD5rMvm/e/4GOYx0yapnngC3/GUZ+4JdS4YTYC9CysdYpGjQsWBaMXYawhPQUVTlgWiF6GrRoaKRuosMemIPQmTNVzM70YnOIXuwLQu7BM8yAZab2Cd/jBugDfOixdHnxk5x4rHAu63C3uOLxbzh7fhaGHOoatz+Et5jgX/KzPYWwHeBtf/nUEO3kNa/sPAAD//wMAcAgh6ci5pdMAAAAASUVORK5CYII=", Vb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA6SURBVChTY/iPCk6DwRkYoKv0sWPHjiIBBohyCADKQVXBAIr0kSNHoMIwwAC1BAyApkGFYYAS6f//AVzgDAPz1XkAAAAAAElFTkSuQmCC", un = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAANUlEQVR42myNsQ0AMAzC8P9Hu0sjpU3YkLFADWBmIInqQsgDAar8kCY6zDtYzfUzte5ROQMAeFAiAMRBE+oAAAAASUVORK5CYII=";
    m.ColorPicker = function () {
        var K = this;
        m.ColorPicker.superClass.constructor.call(K), K.setEditable(!0), K.setDropDownComponent(m.ColorPickerTemp)
    }, c(I + "ColorPicker", m.MultiComboBox, {
        ms_ac: ["instant", "clearButtonVisible"],
        _clearButtonVisible: !0,
        setValue: function (Z) {
            var e = this;
            if (Z !== s) {
                var h = e._value;
                e._value = Z, e.fp("value", h, Z)
            }
        },
        drawValue: function (R, V, U, v, C) {
            this._value && (R.beginPath(), R.rect(V + 2, U + 2, 20, C - 4), R.fillStyle = this._value, R.fill()), M(R, this._value, this.getLabelFont(), this.getLabelColor(), V + 23, U, 0, C)
        }
    }), m.ColorPickerTemp = function (r) {
        var E = this, H = "px", n = E._view = K.createView(null, E), P = E.$10o = document.createElement("div"), U = E.$11o = F(), v = E.$12o = F(), Q = P.style;
        E._h = 360, E._s = 100, E._v = 100, n.className = "colorPickerPopup", n.style.position = "absolute", n.style.background = "white", m.ColorPickerTemp.superClass.constructor.call(E, r);
        var h = '<div style="border: 1px solid rgba(0, 0, 0, 0); position: absolute; width: 40px; height: 20px; top: 5px; left: 5px; bottom: 5px; background: url(' + Vb + ') repeat;"></div>                      <div class= "preview" style="border: 1px solid black; position: absolute; width: 40px; height: 20px; top: 5px; left: 5px; bottom: 5px;"></div>                      <div style="margin-left: 50px; font: ' + x.labelFont + '; line-height: 30px;" >                             R:<input class="color_R" style="width: 28px;" type="' + (D ? "number" : "text") + '">                             G:<input class="color_G" style="width: 28px" type="' + (D ? "number" : "text") + '">                             B:<input class="color_B" style="width: 28px" type="' + (D ? "number" : "text") + '">                             A:<input class="color_A" style="width: 28px" value="1" type="' + (D ? "number" : "text") + '">                      </div>', d = '<div>        <div class="satval" style="position: absolute;cursor:crosshair;margin-left:5px;top: 6px;border:1px solid black;width:128px;height:128px;background-image: url(' + Ed + ');background-color: red;background-size:contain;">            <div class="satval_pointer" style="position:absolute;left: 124px; top: -3px;width: 7px; height: 7px;background-image: url(' + un + ')"></div>        </div>        <div class="hue_picker" style="position:absolute;width: 46px; height: 140px;left: 152px;top:0;">            <div class="hue_image" style="border: 1px solid black;position:absolute;left:7px;top:6px;width:30px; height:128px; background: url(' + Ih + ');background-size:contain;"></div>            <div class="hue_pointer" style="position:absolute;top:1px;left:0;width:46px; height:12px; background: url(' + Ci + ')"></div>        </div>        <div style="position: absolute; left: 210px;top:6px;">        <input type="button" value="&#10003" class="color_ok"><br><br>        <input type="button" value="&#10005" class="color_clear">        </div>        </div>';
        Q.font = x.labelFont, Q.height = 30 + H, Q.lineHeight = 30 + H, Q.position = "relative", Q.whiteSpace = "nowrap", P.innerHTML = h, v.innerHTML = d, n.appendChild(P), n.appendChild(v), n.addEventListener("click", function (b) {
            var N = b.target, q = N.className;
            "color_ok" === q ? (E.$13o = E.$9o(), r.close()) : "color_clear" === q ? (E.$13o = null, r.close()) : ["color_R", "color_G", "color_B", "color_A"].indexOf(q) >= 0 && N.select()
        });
        var M = function (a) {
            var Y, s = a.target, z = s.className, h = !1;
            ["color_R", "color_G", "color_B"].indexOf(z) >= 0 ? (Y = parseInt(s.value), s.value = Y >= 0 && 255 >= Y ? parseInt(s.value) : 0, h = !0) : "color_A" === z && (Y = parseFloat(s.value), s.value = Y >= 0 && 1 >= Y ? parseFloat(s.value) : 0, h = !0), h && (U.style.backgroundColor = E.$9o())
        };
        n.addEventListener("keydown", function (S) {
            var R = S.target, D = R.className;
            ["color_R", "color_G", "color_B", "color_A", "color_ok", "color_clear"].indexOf(D) >= 0 && 13 == S.keyCode && (M(S), E.$13o = E.$9o(), r.close())
        }), new Nb(E), n.addEventListener("change", M);
        var N = Ur(n, ".color_clear");
        r._clearButtonVisible || (N.style.display = "none"), f.Default.onElementCreated && (f.Default.onElementCreated(n.querySelector("input.color_R")), f.Default.onElementCreated(n.querySelector("input.color_G")), f.Default.onElementCreated(n.querySelector("input.color_B")), f.Default.onElementCreated(n.querySelector("input.color_A")), f.Default.onElementCreated(n.querySelector(".color_ok")), f.Default.onElementCreated(n.querySelector(".color_clear")))
    }, c(m.ColorPickerTemp, m.BaseDropDownTemplate, {
        $6o: function () {
            var d = this, B = d._view, Y = d._master, G = d._h, k = d._s, C = d._v, D = d.$2o(G / 360, k / 100, C / 100), w = D.r, b = D.g, V = D.b;
            B.querySelector("input.color_R").value = q(255 * w), B.querySelector("input.color_G").value = q(255 * b), B.querySelector("input.color_B").value = q(255 * V);
            var p = d.$9o();
            B.querySelector(".preview").style.backgroundColor = p;
            var $ = d.$2o(G / 360, 1, 1);
            B.querySelector(".satval").style.backgroundColor = d.$4o($.r, $.g, $.b, !0), Y._instant && Y.setValue(p)
        }, $5o: function (o, _, G) {
            var T, Q, Z = Math.max(Math.max(o, _), G), e = Math.min(Math.min(o, _), G), O = Z;
            if (e == Z) T = 0, Q = 0; else {
                var S = Z - e;
                Q = S / Z, T = o == Z ? (_ - G) / S : _ == Z ? 2 + (G - o) / S : 4 + (o - _) / S, T /= 6, 0 > T && (T += 1), T > 1 && (T -= 1)
            }
            return {h: T, s: Q, v: O}
        }, $4o: function (H, z, U, c) {
            return H = q(255 * H), z = q(255 * z), U = q(255 * U), c == s && (c = !0), H = H.toString(16), 1 == H.length && (H = "0" + H), z = z.toString(16), 1 == z.length && (z = "0" + z), U = U.toString(16), 1 == U.length && (U = "0" + U), ((c ? "#" : "") + H + z + U).toUpperCase()
        }, $3o: function (v, C, G) {
            G == s && (G = null), "#" == v.substr(0, 1) && (v = v.substr(1));
            var M, j, L;
            if (3 == v.length) M = v.substr(0, 1), M += M, j = v.substr(1, 1), j += j, L = v.substr(2, 1), L += L; else {
                if (6 != v.length)return G;
                M = v.substr(0, 2), j = v.substr(2, 2), L = v.substr(4, 2)
            }
            return M = parseInt(M, 16), j = parseInt(j, 16), L = parseInt(L, 16), isNaN(M) || isNaN(j) || isNaN(L) ? G : C ? {
                        r: M,
                        g: j,
                        b: L
                    } : {r: M / 255, g: j / 255, b: L / 255}
        }, $2o: function (l, L, $) {
            var H, R, U;
            if (0 == $) H = 0, R = 0, U = 0; else {
                var Y = Math.floor(6 * l), G = 6 * l - Y, q = $ * (1 - L), j = $ * (1 - L * G), N = $ * (1 - L * (1 - G));
                switch (Y) {
                    case 1:
                        H = j, R = $, U = q;
                        break;
                    case 2:
                        H = q, R = $, U = N;
                        break;
                    case 3:
                        H = q, R = j, U = $;
                        break;
                    case 4:
                        H = N, R = q, U = $;
                        break;
                    case 5:
                        H = $, R = q, U = j;
                        break;
                    case 6:
                    case 0:
                        H = $, R = N, U = q
                }
            }
            return {r: H, g: R, b: U}
        }, $9o: function () {
            var n = this._view, z = Ur(n, "input.color_R").value, T = Ur(n, "input.color_G").value, N = Ur(n, "input.color_B").value, r = Ur(n, "input.color_A").value || 1;
            return "" === z || "" === T || "" === N || "" === r ? s : 1 == r ? "rgb(" + z + "," + T + "," + N + ")" : "rgba(" + z + "," + T + "," + N + "," + r + ")"
        }, getView: function () {
            return this._view
        }, onOpened: function (Y) {
            if (Y) {
                var c, j = this, i = j._view;
                if (j.$11o.style.backgroundColor = Y, 0 === Y.indexOf("#") ? (Y = Y.substr(1, 6), c = j.$3o(Y, !0), c = [c.r, c.g, c.b]) : 0 === Y.indexOf("rgb") && (Y = Y.substring(Y.indexOf("(") + 1, Y.indexOf(")")), c = Y.split(",")), c) {
                    var r = 4 === c.length ? c[3] : 1, M = j.$5o(c[0] / 255, c[1] / 255, c[2] / 255), a = Ur(i, ".satval_pointer");
                    Ur(i, "input.color_R").value = c[0], Ur(i, "input.color_G").value = c[1], Ur(i, "input.color_B").value = c[2], Ur(i, "input.color_A").value = r, j._h = q(360 * M.h), j._s = q(100 * M.s), j._v = q(100 * M.v), a.style.left = 127 * M.s - 3 + "px", a.style.top = 127 - 127 * M.v - 3 + "px", Ur(i, ".hue_pointer").style.top = 128 - 127 * M.h + "px", j.$6o()
                }
            }
        }, onClosed: function () {
        }, getValue: function () {
            return this.$13o
        }, getHeight: function () {
            return 170
        }, getWidth: function () {
            return 252
        }
    });
    var Nb = function (Z) {
        this.$8o = Z, this.setUp()
    };
    c(Nb, Q, {
        ms_listener: 1, getView: function () {
            return this.$8o._view
        }, setUp: function () {
            this.addListeners()
        }, tearDown: function () {
            this.removeListeners(), this.clear()
        }, clear: function () {
            delete this.$7o
        }, handle_touchstart: function (Z) {
            var k = this, J = Z.target, z = k.$8o, y = k.getView(), V = Ur(y, ".hue_picker"), P = Ur(y, ".satval");
            V.contains(J) ? (k.$7o = 1, k.$1o(Z, 1)) : P.contains(J) && (k.$7o = 2, k.$1o(Z, 2)), k.$7o && x.isDoubleClick(Z) && (z.$13o = z.$9o(), z._master.close())
        }, $1o: function (Z, L) {
            x.preventDefault(Z);
            var F, B, z, l = this, e = l.$8o, P = l.getView(), v = Ur(P, ".hue_picker"), w = Ur(P, ".satval");
            if (Z = D ? Sq(Z) : Z, 1 === L) {
                F = v.getBoundingClientRect(), z = Z.clientY - F.top, z -= 7, 0 > z && (z = 0), z > 127 && (z = 127), Ur(P, ".hue_pointer").style.top = z + 1 + "px";
                var G = z;
                G = q(360 - G * (360 / 127)), e._h = G, e.$6o()
            } else if (2 === L) {
                F = w.getBoundingClientRect(), B = Z.clientX - F.left - 1, z = Z.clientY - F.top - 1, 0 > B && (B = 0), B > 127 && (B = 127), 0 > z && (z = 0), z > 127 && (z = 127), e._s = q(100 * B / 127), e._v = q(100 - 100 * z / 127);
                var _ = Ur(P, ".satval_pointer");
                _.style.left = B - 3 + "px", _.style.top = z - 3 + "px", e.$6o()
            }
        }, handle_mousedown: function (d) {
            this.handle_touchstart(d)
        }, handle_mouseup: function (c) {
            this.handle_touchend(c)
        }, handle_touchend: function (w) {
            var b = this;
            b.clear(w)
        }, handle_mousemove: function (F) {
            this.handle_touchmove(F)
        }, handle_touchmove: function () {
            var I = this;
            I.$7o && x.startDragging(I)
        }, handleWindowMouseUp: function (A) {
            this.handleWindowTouchEnd(A)
        }, handleWindowTouchEnd: function (Y) {
            var j = this;
            j.clear(Y)
        }, handleWindowMouseMove: function (N) {
            this.handleWindowTouchMove(N)
        }, handleWindowTouchMove: function (W) {
            var g = this, u = g.$7o;
            u && g.$1o(W, u)
        }
    }), m.FormPane = function (r) {
        var t = this, R = t._view = K.createView(1, t);
        r || (t._canvas = W(R)), R.appendChild(t._79O = F()), t._rows = [], t._itemMap = {}, t.iv(), R.handleGroupSelectedChanged = function (j) {
            if (j.isSelected()) {
                var h = j.getGroupId();
                null != h && t._rows.forEach(function (v) {
                    var Y = v.items;
                    Y && Y.forEach(function (C) {
                        if (C) {
                            var f = C.element;
                            f && f !== j && f.setSelected && f.getGroupId && f.getGroupId() === h && f.setSelected(!1)
                        }
                    })
                })
            }
        }, new uk(t)
    }, c(I + "FormPane", Q, {
        ms_v: 1,
        ms_fire: 1,
        ms_txy: 1,
        ms_lp: 1,
        ms_vs: 1,
        ms_hs: 1,
        ms_value: 1,
        ms_ac: ["labelColor", "labelFont", "labelAlign", "labelVAlign", "vPadding", "hPadding", "labelHPadding", "labelVPadding", "hGap", "vGap", "rows", "rowHeight", "scrollBarColor", "scrollBarSize", "autoHideScrollBar"],
        _29I: Gf,
        _91I: 0,
        _59I: 0,
        _labelColor: x.formPaneLabelColor,
        _labelFont: x.formPaneLabelFont,
        _labelAlign: x.formPaneLabelAlign,
        _labelVAlign: x.formPaneLabelVAlign,
        _hPadding: x.formPaneHPadding,
        _vPadding: x.formPaneVPadding,
        _labelHPadding: x.formPaneLabelHPadding,
        _labelVPadding: x.formPaneLabelVPadding,
        _hGap: x.formPaneHGap,
        _vGap: x.formPaneVGap,
        _rowHeight: x.widgetRowHeight,
        _scrollBarColor: x.scrollBarColor,
        _scrollBarSize: x.scrollBarSize,
        _autoHideScrollBar: x.autoHideScrollBar,
        onPropertyChanged: function (a) {
            var A = this, f = a.property;
            A.iv(), "translateX" === f ? A._42o() : "translateY" === f && A._43o()
        },
        adjustTranslateX: function (C) {
            var Y = this.getWidth() - this._91I;
            return Y > C && (C = Y), C > 0 ? 0 : Math.round(C)
        },
        adjustTranslateY: function (u) {
            var B = this.getHeight() - this._59I;
            return B > u && (u = B), u > 0 ? 0 : Math.round(u)
        },
        setPadding: function (W) {
            this.setVPadding(W), this.setHPadding(W)
        },
        getLabelFont: function (C) {
            return C && C.font ? C.font : this._labelFont
        },
        getLabelColor: function (Y) {
            return Y && Y.color ? Y.color : this._labelColor
        },
        getLabelAlign: function (i) {
            return i && i.align ? i.align : this._labelAlign
        },
        getLabelVAlign: function (w) {
            return w && w.vAlign ? w.vAlign : this._labelVAlign
        },
        getRowBorderColor: function (J) {
            return J ? J.borderColor : null
        },
        getRowBackground: function (n) {
            return n ? n.background : null
        },
        getItemBorderColor: function (T) {
            return T ? T.borderColor : null
        },
        getItemBackground: function (O) {
            return O ? O.background : null
        },
        getItemById: function (b) {
            return this._itemMap[b]
        },
        getViewById: function (K) {
            var l = this.getItemById(K);
            return l ? l.element : null
        },
        getItemView: function (e) {
            if (e) {
                var w = e.element;
                if (w) {
                    if (w.tagName)return w;
                    if (w.getView)return w.getView()
                }
            }
            return null
        },
        updateItemElement: function (M, b) {
            var O = this, q = O.getItemById(M);
            if (q) {
                var S = O.getItemView(q);
                S && O._view.removeChild(S), q.element = b, S = O.getItemView(q), S && (S.style.position = "absolute", O._view.insertBefore(S, O._79O)), O.iv()
            }
        },
        addRow: function (L, O, m, Z) {
            var g = this, J = g._view;
            if (L) {
                for (var i = 0; i < L.length; i++) {
                    var A = L[i];
                    A && ((A.tagName || A.getView) && (L[i] = {element: A}), K.initItemElement(A), null != A.id && (g._itemMap[A.id] = A))
                }
                L.forEach(function (I) {
                    var S = g.getItemView(I);
                    S && (S.style.position = "absolute", J.insertBefore(S, g._79O))
                })
            }
            var V = Z || {};
            return V.items = L, V.widths = O, V.height = m, null == V.index ? g._rows.push(V) : g._rows.splice(V.index, 0, V), g.iv(), V
        },
        removeRows: function (C) {
            if (C) {
                var L = this, f = [];
                C.forEach(function (r) {
                    r.items && r.items.forEach(function (y) {
                        var e = L.getItemView(y);
                        e && L._view.removeChild(e), y && null != y.id && delete L._itemMap[y.id]
                    })
                }), L._rows.forEach(function (D) {
                    C.indexOf(D) < 0 && f.push(D)
                }), L._rows = f, L.iv()
            }
        },
        removeRow: function (Y) {
            var E = this, p = E._rows.splice(Y, 1)[0].items;
            p && p.forEach(function (i) {
                var W = E.getItemView(i);
                W && E._view.removeChild(W), i && null != i.id && delete E._itemMap[i.id]
            }), E.iv()
        },
        clear: function () {
            for (var Q = this, p = Q._view; p.firstChild;)p.removeChild(p.firstChild);
            Q._canvas && p.appendChild(Q._canvas), p.appendChild(Q._79O), Q._rows = [], Q._itemMap = {}, Q.iv()
        },
        validateImpl: function () {
            var I, S, T, r, y, c, V = this, O = V._canvas, A = V._rowHeight, J = V.getWidth(), F = V.getHeight(), H = V._hPadding, h = V._vPadding, i = V._vGap, j = V.ty(), u = V.tx(), $ = J - 2 * H, f = F - 2 * h, K = V._rows, k = K.length, C = 0, x = f - (k - 1) * i;
            for (V._29I = {
                x: -u,
                y: -j,
                width: J,
                height: F
            }, O && (B(O, J, F), c = R(O), a(c, 0, 0, 1), c.clearRect(0, 0, J, F)), T = 0; k > T; T++)r = K[T], y = r.height, null == y ? x -= A : w(y) ? (I = y.split("+"), S = parseFloat(I[0]), S > 1 ? x -= S : C += S, S = parseFloat(I[1]), S > 1 ? x -= S : C += S) : y > 1 ? x -= y : C += y;
            0 > x ? (V._59I = F - x, x = 0) : V._59I = F;
            var o = h + j, p = J;
            for (T = 0; k > T; T++) {
                r = K[T], y = r.height, null == y ? y = A : w(y) ? (I = y.split("+"), S = parseFloat(I[0]), y = S > 1 ? S : S / C * x, S = parseFloat(I[1]), y += S > 1 ? S : S / C * x) : 1 >= y && (y = y / C * x);
                var d = H + u;
                if (c) {
                    var q = V.getRowBorderColor(r), e = V.getRowBackground(r);
                    e && L(c, d, o, $, y, e), q && Z(c, q, d, o, $, y)
                }
                var E = V.validateRow(c, J, r.items, r.widths, d, o, $, y);
                E > p && (p = E), o += y + i
            }
            c && c.restore(), V._91I = p, V._92I(), V._93I(), V.tx(V.tx()), V.ty(V.ty())
        },
        validateRow: function (_, p, F, r, q, h, e, X) {
            if (!F)return 0;
            var m, k, s, Y, $, f = this, B = p, v = f._hGap, W = F.length, G = 0, D = e - (W - 1) * v;
            for (s = 0; W > s; s++)Y = r[s], w(Y) ? (m = Y.split("+"), k = parseFloat(m[0]), k > 1 ? D -= k : G += k, k = parseFloat(m[1]), k > 1 ? D -= k : G += k) : Y > 1 ? D -= Y : G += Y;
            for (0 > D && (B -= D, D = 0), s = 0; W > s; s++) {
                if ($ = F[s], Y = r[s], w(Y) ? (m = Y.split("+"), k = parseFloat(m[0]), Y = k > 1 ? k : k / G * D, k = parseFloat(m[1]), Y += k > 1 ? k : k / G * D) : 1 >= Y && (Y = Y / G * D), $) {
                    if (_) {
                        var c = f.getItemBorderColor($), M = f.getItemBackground($);
                        M && L(_, q, h, Y, X, M), c && Z(_, c, q, h, Y, X)
                    }
                    f.validateItem(_, $, q, h, Y, X)
                }
                q += Y + v
            }
            return B
        },
        validateItem: function (S, C, f, U, R, Z) {
            var l, T = this, m = C.element;
            m && !w(m) ? z(m, f, U, R, Z) : S && (w(C) ? l = C : w(C.element) && (l = C.element), l && (S.save(), S.beginPath(), S.rect(f, U, R, Z), S.clip(), M(S, l, T.getLabelFont(C), T.getLabelColor(C), f + T._labelHPadding, U - T._labelVPadding, R - 2 * T._labelHPadding, Z - 2 * T._labelVPadding, T.getLabelAlign(C), T.getLabelVAlign(C)), S.restore()))
        }
    });
    var uk = function (_) {
        this.f = _, this.addListeners()
    };
    c(uk, Q, {
        ms_listener: 1, getView: function () {
            return this.f._view
        }, handle_mousedown: function (u) {
            j(u) && this.handle_touchstart(u)
        }, handleWindowMouseMove: function (B) {
            this.handleWindowTouchMove(B)
        }, handleWindowMouseUp: function (X) {
            this.handleWindowTouchEnd(X)
        }, handle_touchstart: function (q) {
            var g, i = this, f = i.f, R = q.target;
            i.isV(q) ? g = "v" : i.isH(q) ? g = "h" : (R === i.getView() || f._79O.contains(R)) && (g = "p"), (i.s = g) && (i.cp = N(q), i.tx = f.tx(), i.ty = f.ty(), b(q), l(i, q))
        }, handle_mousemove: function (z) {
            var h = this, T = h.f;
            h.isV(z) && T._43o(), h.isH(z) && T._42o()
        }, handleWindowTouchMove: function (I) {
            var P = this, X = P.f, p = P.s, h = P.tx, Z = P.ty, A = P.cp, z = N(I), G = X._29I;
            "p" === p ? X.setTranslate(h + z.x - A.x, Z + z.y - A.y) : "v" === p ? X.ty(Z + (A.y - z.y) * X._59I / G.height) : "h" === p && X.tx(h + (A.x - z.x) * X._91I / G.width)
        }, handleWindowTouchEnd: function () {
        }, handle_mousewheel: function (Q) {
            this.h(Q, Q.wheelDelta / 40, Q.wheelDelta !== Q.wheelDeltaX)
        }, handle_DOMMouseScroll: function (G) {
            this.h(G, -G.detail, 1)
        }, h: function (c, C, H) {
            var v = this.f;
            b(c), K.closePopup(), H && v._41o() ? v.translate(0, 10 * C) : v._40o() && v.translate(10 * C, 0)
        }, isV: function (S) {
            var Z = this.f, r = Z._29I;
            return Z._41o() && r.x + r.width - Z.lp(S).x < u
        }, isH: function (N) {
            var I = this.f, s = I._29I;
            return I._40o() && s.y + s.height - I.lp(N).y < u
        }
    })
}("undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : this, Object);