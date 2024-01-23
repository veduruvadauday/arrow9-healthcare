google.maps.__gjsload__('search_impl', function(_) {
    var bjb = function(a) {
            _.F.call(this, a)
        },
        djb = function(a) {
            var b = _.Dj.Ka;
            a = a.toArray();
            cjb || (cjb = {
                K: "sssM",
                N: ["ss"]
            });
            return b.call(_.Dj, a, cjb)
        },
        ejb = function(a, b) {
            _.D(a.m, 3, b)
        },
        fjb = function(a) {
            _.F.call(this, a)
        },
        gjb = function() {
            var a = _.Rk,
                b = _.bk;
            this.h = _.Ad;
            this.g = _.Ol(_.tv, a, _.hw + "/maps/api/js/LayersService.GetFeature", b)
        },
        jjb = function(a, b, c) {
            var d = _.kG(new gjb);
            c.Ji = (0, _.Pa)(d.load, d);
            c.clickable = 0 != a.get("clickable");
            _.oHa(c, _.UN(b));
            var e = [];
            e.push(_.M(c, "click", (0, _.Pa)(hjb, null, a)));
            _.kb(["mouseover",
                "mouseout", "mousemove"
            ], function(f) {
                e.push(_.M(c, f, (0, _.Pa)(ijb, null, a, f)))
            });
            e.push(_.M(a, "clickable_changed", function() {
                a.g.clickable = 0 != a.get("clickable")
            }));
            a.h = e
        },
        hjb = function(a, b, c, d, e) {
            var f = null;
            if (e && (f = {
                    status: e.getStatus()
                }, 0 == e.getStatus())) {
                f.location = _.S(e.m, 2) ? new _.Be(_.Im(_.I(e.m, 2, _.Ym).m, 1), _.Im(_.I(e.m, 2, _.Ym).m, 2)) : null;
                f.fields = {};
                for (var g = _.E(e.m, 3), h = 0; h < g; ++h) {
                    var k = _.im(e.m, 3, _.$N, h);
                    f.fields[k.getKey()] = k.Ea()
                }
            }
            _.N(a, "click", b, c, d, f)
        },
        ijb = function(a, b, c, d, e, f, g) {
            var h =
                null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.N(a, b, c, d, e, h, g)
        },
        kjb = function() {};
    _.B(bjb, _.F);
    bjb.prototype.Ob = function() {
        return _.L(this.m, 2)
    };
    var cjb;
    _.B(fjb, _.F);
    fjb.prototype.getStatus = function() {
        return _.H(this.m, 1, -1)
    };
    gjb.prototype.load = function(a, b) {
        function c(g) {
            g = new fjb(g);
            b(g)
        }
        var d = new bjb;
        _.D(d.m, 1, a.layerId.split("|")[0]);
        _.D(d.m, 2, a.featureId);
        ejb(d, _.sd(_.zd(this.h)));
        for (var e in a.parameters) {
            var f = _.pd(d.m, 4, _.$N);
            _.D(f.m, 1, e);
            _.D(f.m, 2, a.parameters[e])
        }
        a = djb(d);
        this.g(a, c, c);
        return a
    };
    gjb.prototype.cancel = function() {
        throw Error("Not implemented");
    };
    kjb.prototype.zy = function(a) {
        if (_.gj[15]) {
            var b = a.o,
                c = a.o = a.getMap();
            b && a.g && (a.j ? (b = b.__gm.j, b.set(b.get().Lf(a.g))) : a.g && _.KHa(a.g, b) && (_.kb(a.h || [], _.gf), a.h = null));
            if (c) {
                var d = a.get("layerId"),
                    e = a.get("spotlightDescription"),
                    f = a.get("paintExperimentIds"),
                    g = a.get("styler"),
                    h = a.get("mapsApiLayer"),
                    k = a.get("darkLaunch"),
                    l = a.get("mapFeatures"),
                    m = a.get("travelMapRequest"),
                    p = a.get("searchPipeMetadata"),
                    q = a.get("overlayLayer"),
                    r = a.get("caseExperimentIds"),
                    t = a.get("airQualityPipeMetadata");
                b = new _.Dn;
                d = d.split("|");
                b.layerId = d[0];
                for (var u = 1; u < d.length; ++u) {
                    var x = _.A(d[u].split(":")),
                        y = x.next().value;
                    x = _.na(x);
                    b.parameters[y] = x.join(":")
                }
                e && (b.spotlightDescription = new _.Ft(e));
                f && (b.paintExperimentIds = f.slice(0));
                g && (b.styler = new _.Hn(g));
                m && (b.travelMapRequest = new _.Yu(m));
                h && (b.mapsApiLayer = new _.hm(h));
                l && (b.mapFeatures = l);
                p && (b.searchPipeMetadata = new _.Mp(p));
                q && (b.overlayLayer = new _.ns(q));
                r && (b.caseExperimentIds = r.slice(0));
                t && (b.airQualityPipeMetadata = new _.cu(t));
                b.darkLaunch = !!k;
                a.g =
                    b;
                a.j = a.get("renderOnBaseMap");
                a.j ? (a = c.__gm.j, a.set(a.get().Sd(b))) : jjb(a, c, b);
                _.Q(c, "Lg");
                _.P(c, 148282)
            }
        }
    };
    _.Ze("search_impl", new kjb);
});