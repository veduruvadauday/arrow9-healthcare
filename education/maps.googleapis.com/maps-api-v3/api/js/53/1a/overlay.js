google.maps.__gjsload__('overlay', function(_) {
    var ny = function(a) {
            this.g = a
        },
        Ioa = function() {},
        oy = function(a) {
            a.Kq = a.Kq || new Ioa;
            return a.Kq
        },
        Joa = function(a) {
            this.Ca = new _.Pi(function() {
                var b = a.Kq;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.gp && a.onAdd) a.onAdd();
                        b.gp = !0;
                        a.draw()
                    }
                } else {
                    if (b.gp)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.gp = !1
                }
            }, 0)
        },
        Koa = function(a, b) {
            function c() {
                return _.Qi(e.Ca)
            }
            var d = oy(a),
                e = d.Qn;
            e || (e = d.Qn = new Joa(a));
            _.kb(d.Oa || [], _.gf);
            var f = d.Ya = d.Ya || new _.$v,
                g = b.__gm;
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("center",
                g, "projectionCenterQ");
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            f = d.Tv = d.Tv || new ny(f);
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            a.bindTo("projection", f, "outProjection");
            a.bindTo("panes", g);
            d.Oa = [_.M(a, "panes_changed", c), _.M(g, "zoom_changed", c), _.M(g, "offset_changed", c), _.M(b, "projection_changed", c), _.M(g, "projectioncenterq_changed", c)];
            c();
            b instanceof _.Bf && (_.Q(b, "Ox"), _.P(b, 148440))
        },
        Ooa = function(a) {
            if (a) {
                var b = a.getMap();
                if (Loa(a) !== b && b && b instanceof _.Bf) {
                    var c = b.__gm;
                    c.overlayLayer ? a.__gmop = new Moa(b, a, c.overlayLayer) : c.h.then(function(d) {
                        d = d.ia;
                        var e = new py(b, d);
                        d.ub(e);
                        c.overlayLayer = e;
                        Noa(a);
                        Ooa(a)
                    })
                }
            }
        },
        Noa = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.g.unbindAll(), b.g.set("panes", null), b.g.set("projection", null), b.j.Kd(b), b.h && (b.h = !1, b.g.onRemove ? b.g.onRemove() : b.g.remove()))
            }
        },
        Loa = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        Moa = function(a, b, c) {
            this.map = a;
            this.g = b;
            this.j = c;
            this.h = !1;
            _.Q(this.map, "Ox");
            _.P(this.map, 148440);
            c.wd(this)
        },
        Poa = function(a, b) {
            a.g.get("projection") != b && (a.g.bindTo("panes", a.map.__gm), a.g.set("projection", b))
        },
        py = function(a, b) {
            this.o = a;
            this.j = b;
            this.g = null;
            this.h = []
        };
    _.Sa(ny, _.O);
    ny.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.Zd(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.g : null))
    };
    var qy = {};
    _.Sa(Joa, _.O);
    qy.wd = function(a) {
        if (a) {
            var b = a.getMap();
            (oy(a).Av || null) !== b && (b && Koa(a, b), oy(a).Av = b)
        }
    };
    qy.Kd = function(a) {
        var b = oy(a),
            c = b.Ya;
        c && c.unbindAll();
        (c = b.Tv) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Oa && _.kb(b.Oa, _.gf);
        b.Oa = null;
        b.Qn && (b.Qn.Ca.zc(), b.Qn = null);
        delete oy(a).Av
    };
    var ry = {};
    Moa.prototype.draw = function() {
        this.h || (this.h = !0, this.g.onAdd && this.g.onAdd());
        this.g.draw && this.g.draw()
    };
    py.prototype.dispose = function() {};
    py.prototype.Nb = function(a, b, c, d, e, f, g, h) {
        var k = this.g = this.g || new _.hr(this.o, this.j, function() {});
        k.Nb(a, b, c, d, e, f, g, h);
        a = _.A(this.h);
        for (b = a.next(); !b.done; b = a.next()) b = b.value, Poa(b, k), b.draw()
    };
    py.prototype.wd = function(a) {
        this.h.push(a);
        this.g && Poa(a, this.g);
        this.j.refresh()
    };
    py.prototype.Kd = function(a) {
        _.pb(this.h, a)
    };
    ry.wd = Ooa;
    ry.Kd = Noa;
    _.Ze("overlay", {
        Gs: function(a) {
            if (a) {
                (0, qy.Kd)(a);
                (0, ry.Kd)(a);
                var b = a.getMap();
                b && (b instanceof _.Bf ? (0, ry.wd)(a) : (0, qy.wd)(a))
            }
        },
        preventMapHitsFrom: function(a) {
            _.Jr(a, {
                ee: function(b) {
                    _.vn(b.event.Ha)
                },
                Bc: function(b) {
                    return _.or(b)
                },
                Sh: function(b) {
                    return _.pr(b)
                },
                md: function(b) {
                    return _.pr(b)
                },
                Gc: function(b) {
                    return _.qr(b)
                }
            }).gj(!0)
        },
        preventMapHitsAndGesturesFrom: function(a) {
            a.addEventListener("click", _.cf);
            a.addEventListener("contextmenu", _.cf);
            a.addEventListener("dblclick", _.cf);
            a.addEventListener("mousedown",
                _.cf);
            a.addEventListener("mousemove", _.cf);
            a.addEventListener("MSPointerDown", _.cf);
            a.addEventListener("pointerdown", _.cf);
            a.addEventListener("touchstart", _.cf);
            a.addEventListener("wheel", _.cf)
        }
    });
});