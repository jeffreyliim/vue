webpackJsonp([5], {
    "+5CF": function (t, a, e) {
        "use strict";
        function s(t) {
            e("AhHH")
        }

        var i = e("6AZ4"), n = e("V0EP"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, "+BTi": function (t, a) {
    }, "+KYZ": function (t, a, e) {
        "use strict";
        var s = e("WEHx"), i = (e.n(s), e("VN6J")), n = {
            install: function (t) {
                t.directive("click-outside", s.directive), t.use(i.a)
            }
        };
        a.a = n
    }, "+M3v": function (t, a) {
    }, "+p4O": function (t, a, e) {
        "use strict";
        a.a = {
            props: {
                task: {
                    type: Object, default: function () {
                        return {title: ""}
                    }
                }, index: Number
            }, methods: {
                handleEditClick: function () {
                    this.$emit("on-edit", this.index)
                }, handleDeleteClick: function () {
                    this.$emit("on-delete", this.index)
                }
            }
        }
    }, "/4dZ": function (t, a) {
    }, "/7E0": function (t, a, e) {
        "use strict";
        function s(t) {
            e("ZFGe")
        }

        var i = e("9plE"), n = e("MWye"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, "/HWS": function (t, a, e) {
        "use strict";
        var s = e("TW0o"), i = e("voKW"), n = e("ZBOI"), l = e("hIn4");
        a.a = {
            components: {TimeLine: s.a, TimeLineItem: i.a, ChartCard: l.a, TaskList: n.a}, data: function () {
                return {
                    salesChart: {
                        data: {
                            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                            series: [[542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895], [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]]
                        }, options: {seriesBarDistance: 10, axisX: {showGrid: !1}, height: "245px"}
                    },
                    usersChart: {
                        data: {
                            labels: ["9AM", "12AM", "3PM", "6PM", "9PM", "12PM", "3AM", "6AM"],
                            series: [[287, 385, 490, 562, 594, 626, 698, 895, 952], [67, 152, 193, 240, 387, 435, 535, 642, 744], [23, 113, 67, 108, 190, 239, 307, 410, 410]]
                        },
                        options: {
                            low: 0,
                            high: 1e3,
                            showArea: !0,
                            height: "245px",
                            axisX: {showGrid: !1},
                            showLine: !0,
                            showPoint: !1
                        }
                    },
                    subscriptionsChart: {
                        data: {
                            labels: ["M", "T", "W", "T", "F", "S", "S"],
                            series: [[60, 50, 30, 50, 70, 60, 90, 100]]
                        },
                        options: {
                            showPoint: !1,
                            lineSmooth: !0,
                            height: "210px",
                            axisX: {showGrid: !1, showLabel: !0},
                            axisY: {offset: 40, showGrid: !1},
                            low: 0,
                            high: "auto",
                            classNames: {line: "ct-line ct-red"}
                        }
                    },
                    downloadsChart: {
                        data: {
                            labels: ["2009", "2010", "2011", "2012", "2013", "2014"],
                            series: [[1200, 1e3, 3490, 8345, 3256, 2566]]
                        },
                        options: {
                            showPoint: !1,
                            lineSmooth: !0,
                            height: "210px",
                            axisX: {showGrid: !1, showLabel: !0},
                            axisY: {offset: 40, showGrid: !1},
                            low: 0,
                            high: "auto",
                            classNames: {line: "ct-line ct-orange"}
                        }
                    }
                }
            }
        }
    }, "/YsT": function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", [e("div", {staticClass: "row"}, [e("div", {staticClass: "col-xl-3 col-md-6"}, [e("stats-card", {
                attrs: {
                    title: "150GB",
                    subTitle: "Numbers"
                }
            }, [e("div", {
                staticClass: "icon-warning",
                attrs: {slot: "header"},
                slot: "header"
            }, [e("i", {staticClass: "nc-icon nc-chart text-warning"})]), t._v(" "), e("template", {slot: "footer"}, [e("i", {staticClass: "fa fa-refresh"}), t._v("Updated now\n          ")])], 2)], 1), t._v(" "), e("div", {staticClass: "col-xl-3 col-md-6"}, [e("stats-card", {
                attrs: {
                    title: "$ 1,345",
                    subTitle: "Revenue"
                }
            }, [e("div", {
                staticClass: "icon-success",
                attrs: {slot: "header"},
                slot: "header"
            }, [e("i", {staticClass: "nc-icon nc-light-3 text-success"})]), t._v(" "), e("template", {slot: "footer"}, [e("i", {staticClass: "fa fa-calendar-o"}), t._v("Last day\n          ")])], 2)], 1), t._v(" "), e("div", {staticClass: "col-xl-3 col-md-6"}, [e("stats-card", {
                attrs: {
                    title: "23",
                    subTitle: "Errors"
                }
            }, [e("div", {
                staticClass: "icon-danger",
                attrs: {slot: "header"},
                slot: "header"
            }, [e("i", {staticClass: "nc-icon nc-vector text-danger"})]), t._v(" "), e("template", {slot: "footer"}, [e("i", {staticClass: "fa fa-clock-o"}), t._v("Last day\n          ")])], 2)], 1), t._v(" "), e("div", {staticClass: "col-xl-3 col-md-6"}, [e("stats-card", {
                attrs: {
                    title: "+45K",
                    subTitle: "Followers"
                }
            }, [e("div", {
                staticClass: "icon-info",
                attrs: {slot: "header"},
                slot: "header"
            }, [e("i", {staticClass: "nc-icon nc-favourite-28 text-primary"})]), t._v(" "), e("template", {slot: "footer"}, [e("i", {staticClass: "fa fa-refresh"}), t._v("Updated now\n          ")])], 2)], 1)]), t._v(" "), e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-4"}, [e("chart-card", {
                attrs: {
                    "chart-data": t.pieChart.data,
                    "chart-type": "Pie"
                }
            }, [e("template", {slot: "header"}, [e("h4", {staticClass: "card-title"}, [t._v("Email Statistics")]), t._v(" "), e("p", {staticClass: "card-category"}, [t._v("Last Campaign Performance")])]), t._v(" "), e("template", {slot: "footer"}, [e("div", {staticClass: "legend"}, [e("i", {staticClass: "fa fa-circle text-info"}), t._v(" Open\n              "), e("i", {staticClass: "fa fa-circle text-danger"}), t._v(" Bounce\n              "), e("i", {staticClass: "fa fa-circle text-warning"}), t._v(" Unsubscribe\n            ")]), t._v(" "), e("hr"), t._v(" "), e("div", {staticClass: "stats"}, [e("i", {staticClass: "fa fa-clock-o"}), t._v(" Campaign sent 2 days ago\n            ")])])], 2)], 1), t._v(" "), e("div", {staticClass: "col-md-8"}, [e("chart-card", {
                attrs: {
                    "chart-data": t.lineChart.data,
                    "chart-options": t.lineChart.options,
                    "responsive-options": t.lineChart.responsiveOptions
                }
            }, [e("template", {slot: "header"}, [e("h4", {staticClass: "card-title"}, [t._v("Users Behavior")]), t._v(" "), e("p", {staticClass: "card-category"}, [t._v("24 Hours performance")])]), t._v(" "), e("template", {slot: "footer"}, [e("div", {staticClass: "legend"}, [e("i", {staticClass: "fa fa-circle text-info"}), t._v(" Open\n              "), e("i", {staticClass: "fa fa-circle text-danger"}), t._v(" Click\n              "), e("i", {staticClass: "fa fa-circle text-warning"}), t._v(" Click Second Time\n            ")]), t._v(" "), e("hr"), t._v(" "), e("div", {staticClass: "stats"}, [e("i", {staticClass: "fa fa-history"}), t._v(" Updated 3 minutes ago\n            ")])])], 2)], 1)]), t._v(" "), e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-6"}, [e("chart-card", {
                attrs: {
                    "chart-data": t.barChart.data,
                    "chart-options": t.barChart.options,
                    "chart-responsive-options": t.barChart.responsiveOptions,
                    "chart-type": "Bar"
                }
            }, [e("template", {slot: "header"}, [e("h4", {staticClass: "card-title"}, [t._v("2014 Sales")]), t._v(" "), e("p", {staticClass: "card-category"}, [t._v("All products including Taxes")])]), t._v(" "), e("template", {slot: "footer"}, [e("div", {staticClass: "legend"}, [e("i", {staticClass: "fa fa-circle text-info"}), t._v(" Tesla Model S\n              "), e("i", {staticClass: "fa fa-circle text-danger"}), t._v(" BMW 5 Series\n            ")]), t._v(" "), e("hr"), t._v(" "), e("div", {staticClass: "stats"}, [e("i", {staticClass: "fa fa-check"}), t._v(" Data information certified\n            ")])])], 2)], 1), t._v(" "), e("div", {staticClass: "col-md-6"}, [e("card", {
                staticClass: "card-tasks",
                attrs: {title: "Tasks", subTitle: "Backend development"}
            }, [e("l-table", {
                attrs: {data: t.tableData.data}, scopedSlots: t._u([{
                    key: "default", fn: function (a) {
                        var s = a.row;
                        return [e("td", [e("Checkbox", {
                            model: {
                                value: s.checked, callback: function (a) {
                                    t.$set(s, "checked", a)
                                }, expression: "row.checked"
                            }
                        })], 1), t._v(" "), e("td", [t._v(t._s(s.title))]), t._v(" "), e("td", {staticClass: "td-actions text-right"}, [e("div", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip.top-center",
                                value: t.editTooltip,
                                expression: "editTooltip",
                                modifiers: {"top-center": !0}
                            }], staticClass: "btn btn-info btn-simple btn-link"
                        }, [e("i", {staticClass: "fa fa-edit"})]), t._v(" "), e("div", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip.top-center",
                                value: t.deleteTooltip,
                                expression: "deleteTooltip",
                                modifiers: {"top-center": !0}
                            }], staticClass: "btn btn-danger btn-simple btn-link"
                        }, [e("i", {staticClass: "fa fa-times"})])])]
                    }
                }])
            }), t._v(" "), e("div", {
                staticClass: "stats",
                attrs: {slot: "footer"},
                slot: "footer"
            }, [e("i", {staticClass: "fa fa-history"}), t._v(" Updated 3 minutes ago\n          ")])], 1)], 1)])])
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, "/eqb": function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e(t.baseComponent, {
                tag: "component",
                staticClass: "nav-item",
                class: {active: t.isActive},
                attrs: {to: t.link.path ? t.link.path : "/", tag: "li"}
            }, [t.isMenu ? e("a", {
                staticClass: "nav-link sidebar-menu-item",
                attrs: {"aria-expanded": !t.collapsed, "data-toggle": "collapse"},
                on: {click: t.collapseMenu}
            }, [e("i", {class: t.link.icon}), t._v(" "), e("p", [t._v("\n      " + t._s(t.link.name) + "\n      "), e("b", {staticClass: "caret"})])]) : t._e(), t._v(" "), t.$slots.default || this.isMenu ? e("div", [e("el-collapse-transition", [e("ul", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.collapsed,
                    expression: "!collapsed"
                }], staticClass: "nav"
            }, [t._t("default")], 2)])], 1) : t._e(), t._v(" "), 0 === t.children.length && !t.$slots.default && t.link.path ? t._t("title", [e(t.elementType(t.link, !1), {
                tag: "component",
                staticClass: "nav-link",
                class: {active: t.link.active},
                attrs: {to: t.link.path, target: t.link.target, href: t.link.path},
                nativeOn: {
                    click: function (a) {
                        t.linkClick(a)
                    }
                }
            }, [t.addLink ? [e("span", {staticClass: "sidebar-mini"}, [t._v(t._s(t.link.name.substring(0, 1)))]), t._v(" "), e("span", {staticClass: "sidebar-normal"}, [t._v(t._s(t.link.name))])] : [e("i", {class: t.link.icon}), t._v(" "), e("p", [t._v(t._s(t.link.name))])]], 2)]) : t._e()], 2)
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, "/hVr": function (t, a, e) {
        "use strict";
        var s = e("bGai");
        a.a = {
            components: {Checkbox: s.a, Card: s.b, LTable: s.c, ChartCard: s.d, StatsCard: s.e}, data: function () {
                return {
                    editTooltip: "Edit Task",
                    deleteTooltip: "Remove",
                    pieChart: {data: {labels: ["40%", "20%", "40%"], series: [40, 20, 40]}},
                    lineChart: {
                        data: {
                            labels: ["9:00AM", "12:00AM", "3:00PM", "6:00PM", "9:00PM", "12:00PM", "3:00AM", "6:00AM"],
                            series: [[287, 385, 490, 492, 554, 586, 698, 695], [67, 152, 143, 240, 287, 335, 435, 437], [23, 113, 67, 108, 190, 239, 307, 308]]
                        },
                        options: {
                            low: 0,
                            high: 800,
                            showArea: !1,
                            height: "245px",
                            axisX: {showGrid: !1},
                            lineSmooth: !0,
                            showLine: !0,
                            showPoint: !0,
                            fullWidth: !0,
                            chartPadding: {right: 50}
                        },
                        responsiveOptions: [["screen and (max-width: 640px)", {
                            axisX: {
                                labelInterpolationFnc: function (t) {
                                    return t[0]
                                }
                            }
                        }]]
                    },
                    barChart: {
                        data: {
                            labels: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                            series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895], [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]]
                        },
                        options: {seriesBarDistance: 10, axisX: {showGrid: !1}, height: "245px"},
                        responsiveOptions: [["screen and (max-width: 640px)", {
                            seriesBarDistance: 5,
                            axisX: {
                                labelInterpolationFnc: function (t) {
                                    return t[0]
                                }
                            }
                        }]]
                    },
                    tableData: {
                        data: [{
                            title: 'Sign contract for "What are conference organizers afraid of?"',
                            checked: !1
                        }, {
                            title: "Lines From Great Russian Literature? Or E-mails From My Boss?",
                            checked: !0
                        }, {
                            title: "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
                            checked: !0
                        }, {
                            title: "Create 4 Invisible User Experiences you Never Knew About",
                            checked: !1
                        }, {
                            title: 'Read "Following makes Medium better"',
                            checked: !1
                        }, {title: "Unfollow 5 enemies from twitter", checked: !1}]
                    }
                }
            }
        }
    }, "/lDg": function (t, a, e) {
        "use strict";
        var s = e("UeWq"), i = e("w3r2"), n = e("FxcR");
        a.a = {
            components: {RegisterForm: s.a, LoginForm: i.a, TypeValidationForm: n.a}, data: function () {
                return {registerModel: {}, loginModel: {}, typeValidationModel: {}}
            }, methods: {
                onRegisterSubmit: function (t, a) {
                    this.registerModel = t
                }, onLoginSubmit: function (t, a) {
                    this.loginModel = t
                }, onTypeValidationSubmit: function (t, a) {
                    this.typeValidationModel = t
                }
            }
        }
    }, 0: function (t, a) {
    }, "03Jj": function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {
                staticClass: "form-check form-check-radio",
                class: t.inlineClass
            }, [e("label", {
                staticClass: "form-check-label",
                attrs: {for: t.cbId}
            }, [e("input", {
                directives: [{name: "model", rawName: "v-model", value: t.model, expression: "model"}],
                staticClass: "form-check-input",
                attrs: {id: t.cbId, type: "radio", disabled: t.disabled},
                domProps: {value: t.label, checked: t._q(t.model, t.label)},
                on: {
                    change: function (a) {
                        t.model = t.label
                    }
                }
            }), t._v(" "), e("span", {staticClass: "form-check-sign"}), t._v(" "), t._t("default")], 2)])
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, "04l3": function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("li", [t._t("badge", [e("div", {
                staticClass: "timeline-badge",
                class: t.badgeType
            }, [e("i", {class: t.badgeIcon})])]), t._v(" "), e("div", {staticClass: "timeline-panel"}, [e("div", {staticClass: "timeline-heading"}, [t._t("header")], 2), t._v(" "), e("div", {staticClass: "timeline-body"}, [t._t("body")], 2), t._v(" "), e("h6", [t._t("footer")], 2)])], 2)
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, "0cEq": function (t, a, e) {
        "use strict";
        a.a = [{
            id: 1,
            name: "Noelia O'Kon",
            nickname: "asperiores",
            email: "otho.smitham@example.com",
            salary: "13098.00",
            age: 39
        }, {
            id: 2,
            name: "Mr. Enid Von PhD",
            nickname: "alias",
            email: "pollich.cecilia@example.com",
            salary: "35978.00",
            age: 26
        }, {
            id: 3,
            name: "Colton Koch",
            nickname: "id",
            email: "little.myrna@example.net",
            salary: "26278.00",
            age: 48
        }, {
            id: 4,
            name: "Gregory Vandervort",
            nickname: "vel",
            email: "dock47@example.org",
            salary: "25537.00",
            age: 27
        }, {
            id: 5,
            name: "Miss Rahsaan Heaney IV",
            nickname: "qui",
            email: "ugrady@example.org",
            salary: "49003.00",
            age: 21
        }, {
            id: 6,
            name: "Ms. Crystel Zemlak IV",
            nickname: "reiciendis",
            email: "amari.rau@example.com",
            salary: "12383.00",
            age: 48
        }, {
            id: 7,
            name: "Nona McDermott",
            nickname: "quaerat",
            email: "adrien.baumbach@example.org",
            salary: "18512.00",
            age: 31
        }, {
            id: 8,
            name: "Miss Genoveva Murazik V",
            nickname: "rerum",
            email: "ohettinger@example.net",
            salary: "31209.00",
            age: 28
        }, {
            id: 9,
            name: "Beulah Huels",
            nickname: "non",
            email: "stefan99@example.com",
            salary: "36920.00",
            age: 53
        }, {
            id: 10,
            name: "Zoe Klein",
            nickname: "ex",
            email: "ejacobson@example.org",
            salary: "35616.00",
            age: 27
        }, {
            id: 11,
            name: "Vickie Kiehn",
            nickname: "assumenda",
            email: "ayost@example.com",
            salary: "30790.00",
            age: 29
        }, {
            id: 12,
            name: "Elwyn Herzog",
            nickname: "praesentium",
            email: "ckassulke@example.net",
            salary: "35785.00",
            age: 27
        }, {
            id: 13,
            name: "Selena Hettinger",
            nickname: "et",
            email: "bashirian.hyman@example.net",
            salary: "31836.00",
            age: 35
        }, {
            id: 14,
            name: "Edwin Beier",
            nickname: "eos",
            email: "janis71@example.org",
            salary: "11902.00",
            age: 38
        }, {
            id: 15,
            name: "Lexi Braun MD",
            nickname: "autem",
            email: "dusty74@example.net",
            salary: "11927.00",
            age: 45
        }, {
            id: 16,
            name: "Jovany Spencer",
            nickname: "fugit",
            email: "gbogisich@example.org",
            salary: "44686.00",
            age: 43
        }, {
            id: 17,
            name: "Prof. Maci Anderson DVM",
            nickname: "dolorem",
            email: "btorp@example.com",
            salary: "25055.00",
            age: 29
        }, {
            id: 18,
            name: "Joel Kulas MD",
            nickname: "sed",
            email: "phoebe.sauer@example.org",
            salary: "11650.00",
            age: 24
        }, {
            id: 19,
            name: "Mr. Dawson Greenholt",
            nickname: "nostrum",
            email: "asawayn@example.org",
            salary: "46962.00",
            age: 53
        }, {
            id: 20,
            name: "Prof. Lloyd Green",
            nickname: "velit",
            email: "laila.hintz@example.org",
            salary: "12928.00",
            age: 46
        }, {
            id: 21,
            name: "Shayna Morar",
            nickname: "rerum",
            email: "wfay@example.org",
            salary: "22638.00",
            age: 26
        }, {
            id: 22,
            name: "Krista Schulist",
            nickname: "qui",
            email: "gregoria.jakubowski@example.com",
            salary: "49345.00",
            age: 42
        }, {
            id: 23,
            name: "Leone Lemke",
            nickname: "repellat",
            email: "ltorphy@example.com",
            salary: "17560.00",
            age: 42
        }, {
            id: 24,
            name: "Dr. Willie Kemmer II",
            nickname: "quasi",
            email: "ivy51@example.net",
            salary: "35370.00",
            age: 30
        }, {
            id: 25,
            name: "Deonte Lebsack",
            nickname: "nesciunt",
            email: "alisa83@example.net",
            salary: "32725.00",
            age: 24
        }, {
            id: 26,
            name: "Prof. Shayne Nader",
            nickname: "voluptas",
            email: "bosco.shaina@example.net",
            salary: "9844.00",
            age: 23
        }, {
            id: 27,
            name: "Prof. Kennith Kertzmann",
            nickname: "alias",
            email: "satterfield.jonathan@example.com",
            salary: "41950.00",
            age: 25
        }, {
            id: 28,
            name: "Miss Meagan O'Keefe",
            nickname: "corporis",
            email: "tracy.barrows@example.com",
            salary: "41803.00",
            age: 50
        }, {
            id: 29,
            name: "Prof. Edward Pagac MD",
            nickname: "quia",
            email: "gerhard65@example.org",
            salary: "22896.00",
            age: 43
        }, {
            id: 30,
            name: "Samantha Weissnat",
            nickname: "est",
            email: "crystel66@example.net",
            salary: "18805.00",
            age: 43
        }, {
            id: 31,
            name: "Dr. Gilbert Ward",
            nickname: "dolorum",
            email: "sandrine06@example.net",
            salary: "16644.00",
            age: 32
        }, {
            id: 32,
            name: "Mike West",
            nickname: "laudantium",
            email: "jborer@example.net",
            salary: "35728.00",
            age: 42
        }, {
            id: 33,
            name: "Prof. Isabell Cruickshank I",
            nickname: "recusandae",
            email: "ondricka.lurline@example.org",
            salary: "44574.00",
            age: 35
        }, {
            id: 34,
            name: "Prof. Lonny Rath",
            nickname: "nihil",
            email: "rfeest@example.net",
            salary: "19949.00",
            age: 48
        }, {
            id: 35,
            name: "Santina Medhurst MD",
            nickname: "suscipit",
            email: "ila24@example.net",
            salary: "36323.00",
            age: 51
        }, {
            id: 36,
            name: "Jeff Lehner",
            nickname: "quo",
            email: "jarred77@example.com",
            salary: "48462.00",
            age: 42
        }, {
            id: 37,
            name: "Samanta Pfeffer",
            nickname: "officia",
            email: "fgoyette@example.net",
            salary: "19601.00",
            age: 42
        }, {
            id: 38,
            name: "Ofelia Torp",
            nickname: "a",
            email: "ericka44@example.net",
            salary: "33149.00",
            age: 35
        }, {
            id: 39,
            name: "Mrs. Margarete Raynor",
            nickname: "quia",
            email: "jlegros@example.net",
            salary: "21951.00",
            age: 40
        }, {
            id: 40,
            name: "Mr. Brant Howell V",
            nickname: "perspiciatis",
            email: "franecki.gerald@example.org",
            salary: "41552.00",
            age: 53
        }, {
            id: 41,
            name: "Reilly Ruecker DVM",
            nickname: "ad",
            email: "ldeckow@example.net",
            salary: "22709.00",
            age: 42
        }, {
            id: 42,
            name: "Zachery McDermott",
            nickname: "molestiae",
            email: "gladyce84@example.com",
            salary: "32354.00",
            age: 25
        }, {
            id: 43,
            name: "Heloise Kulas",
            nickname: "aut",
            email: "kessler.helen@example.net",
            salary: "45086.00",
            age: 54
        }, {
            id: 44,
            name: "Norma Dibbert",
            nickname: "amet",
            email: "eudora36@example.net",
            salary: "15661.00",
            age: 46
        }, {
            id: 45,
            name: "Immanuel Auer",
            nickname: "quia",
            email: "halvorson.theodora@example.org",
            salary: "15862.00",
            age: 39
        }, {
            id: 46,
            name: "Lamont Borer",
            nickname: "expedita",
            email: "trantow.neoma@example.com",
            salary: "12544.00",
            age: 25
        }, {
            id: 47,
            name: "Brooke Purdy",
            nickname: "cupiditate",
            email: "bhermiston@example.net",
            salary: "14457.00",
            age: 50
        }, {
            id: 48,
            name: "Dr. Leo Dach",
            nickname: "et",
            email: "camila.ward@example.com",
            salary: "40278.00",
            age: 49
        }, {
            id: 49,
            name: "Krystal Langosh",
            nickname: "voluptatum",
            email: "pacocha.yesenia@example.org",
            salary: "9305.00",
            age: 34
        }, {
            id: 50,
            name: "Florence Greenfelder",
            nickname: "odit",
            email: "kenyatta.oconnell@example.com",
            salary: "36980.00",
            age: 38
        }]
    }, "1DVk": function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("form", [e("card", [e("div", {
                attrs: {slot: "header"},
                slot: "header"
            }, [e("h4", {staticClass: "card-title"}, [t._v("\n        Register Form\n      ")])]), t._v(" "), e("div", [e("fg-input", {
                directives: [{
                    name: "validate",
                    rawName: "v-validate",
                    value: t.modelValidations.email,
                    expression: "modelValidations.email"
                }],
                attrs: {type: "email", name: "email", label: "Email address", error: t.getError("email")},
                model: {
                    value: t.model.email, callback: function (a) {
                        t.$set(t.model, "email", a)
                    }, expression: "model.email"
                }
            }), t._v(" "), e("fg-input", {
                directives: [{
                    name: "validate",
                    rawName: "v-validate",
                    value: t.modelValidations.password,
                    expression: "modelValidations.password"
                }],
                attrs: {label: "Password", type: "password", name: "password", error: t.getError("password")},
                model: {
                    value: t.model.password, callback: function (a) {
                        t.$set(t.model, "password", a)
                    }, expression: "model.password"
                }
            }), t._v(" "), e("fg-input", {
                directives: [{
                    name: "validate",
                    rawName: "v-validate",
                    value: t.modelValidations.confirmPassword,
                    expression: "modelValidations.confirmPassword"
                }],
                attrs: {label: "Confirm Password", type: "password", name: "confirm", error: t.getError("confirm")},
                model: {
                    value: t.model.confirmPassword, callback: function (a) {
                        t.$set(t.model, "confirmPassword", a)
                    }, expression: "model.confirmPassword"
                }
            }), t._v(" "), e("fg-input", [e("checkbox", {
                attrs: {name: "subscribe"},
                model: {
                    value: t.model.subscribe, callback: function (a) {
                        t.$set(t.model, "subscribe", a)
                    }, expression: "model.subscribe"
                }
            }, [t._v("Subscribe to newsletter\n        ")])], 1)], 1), t._v(" "), e("div", {staticClass: "card-footer text-right"}, [e("button", {
                staticClass: "btn btn-fill btn-info btn-wd",
                attrs: {type: "submit"},
                on: {
                    click: function (a) {
                        a.preventDefault(), t.validate(a)
                    }
                }
            }, [t._v("Register")])])])], 1)
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, "1GYD": function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {
                staticClass: "progress",
                style: "height: " + t.height + "px"
            }, [0 === t.values.length ? e("div", {
                staticClass: "progress-bar",
                class: t.computedClasses,
                style: "width: " + t.value + "%;",
                attrs: {role: "progressbar", "aria-valuenow": t.value, "aria-valuemin": "0", "aria-valuemax": "100"}
            }, [t._t("default", [t.showText ? e("span", [t._v("\n           " + t._s(t.value) + "%\n        ")]) : t._e()])], 2) : t._l(t.values, function (a) {
                return e("div", {
                    staticClass: "progress-bar",
                    class: t.progressClasses(a),
                    style: "width: " + a.value + "%;"
                }, [a.text ? e("span", [t._v("\n         " + t._s(a.text) + "\n      ")]) : t._e()])
            })], 2)
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, "1KJ8": function (t, a) {
    }, "1XJu": function (t, a, e) {
        "use strict";
        function s(t) {
            e("SsEg")
        }

        var i = e("5/W+"), n = e("75eU"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, "1lSy": function (t, a, e) {
        "use strict";
        var s = e("Zki6"), i = (e.n(s), e("0kY3")), n = e.n(i), l = e("X+ky"), o = (e.n(l), e("+BTi")),
            c = (e.n(o), e("HJMx")), r = e.n(c), d = e("Hp7B"), u = e("I4Nt"), v = e("znQV"), m = {
                install: function (t) {
                    t.component("fg-input", d.a), t.component("drop-down", u.a), t.component("card", v.a), t.component(r.a.name, r.a), t.component(n.a.name, n.a)
                }
            };
        a.a = m
    }, "2+hT": function (t, a) {
    }, "22yQ": function (t, a, e) {
        "use strict";
        function s(t) {
            e("8EMU")
        }

        var i = e("e1nf"), n = e("Mawy"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, "28ys": function (t, a, e) {
        "use strict";
        var s = e("Xxa5"), i = e.n(s), n = e("exGp"), l = e.n(n), o = e("1SRG"), c = e.n(o), r = e("sUu7"),
            d = e("1lSy"), u = e("+KYZ"), v = e("DTLV"), m = e("lEct"), f = e.n(m), p = e("wUZ8"), b = e.n(p),
            h = e("urW8"), _ = e.n(h), g = e("Jmt5"), C = (e.n(g), e("GFcP")), y = (e.n(C), e("Sczw")),
            w = (e.n(y), e("/4dZ")), k = (e.n(w), e("947H")), x = (e.n(k), e("MU8w"));
        e.n(x);
        _.a.use(b.a), a.a = {
            install: function (t) {
                var a = this;
                return l()(i.a.mark(function e() {
                    return i.a.wrap(function (a) {
                        for (; ;)switch (a.prev = a.next) {
                            case 0:
                                t.use(d.a), t.use(u.a), t.use(v.a), t.use(c.a), t.use(f.a), t.use(r.b);
                            case 6:
                            case"end":
                                return a.stop()
                        }
                    }, e, a)
                }))()
            }
        }
    }, "2BWB": function (t, a) {
    }, "2m4a": function (t, a, e) {
        "use strict";
        var s = e("bOdI"), i = e.n(s), n = e("Zcwg"), l = e.n(n);
        a.a = {
            name: "sidebar-item",
            components: i()({}, l.a.name, l.a),
            props: {
                menu: {type: Boolean, default: !1}, link: {
                    type: Object, default: function () {
                        return {name: "", path: "", children: []}
                    }
                }
            },
            provide: function () {
                return {addLink: this.addChild, removeLink: this.removeChild}
            },
            inject: {addLink: {default: null}, removeLink: {default: null}, autoClose: {default: !0}},
            data: function () {
                return {children: [], collapsed: !0}
            },
            computed: {
                baseComponent: function () {
                    return this.isMenu || this.link.isRoute ? "li" : "router-link"
                }, isMenu: function () {
                    return this.children.length > 0 || !0 === this.menu
                }, isActive: function () {
                    var t = this;
                    if (this.$route && this.$route.path) {
                        if (void 0 !== this.children.find(function (a) {
                                return t.$route.path.startsWith(a.link.path)
                            }))return !0
                    }
                    return !1
                }
            },
            methods: {
                addChild: function (t) {
                    var a = this.$slots.default.indexOf(t.$vnode);
                    this.children.splice(a, 0, t)
                }, removeChild: function (t) {
                    var a = this.children, e = a.indexOf(t);
                    a.splice(e, 1)
                }, elementType: function (t) {
                    var a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return !1 === t.isRoute ? a ? "li" : "a" : "router-link"
                }, linkAbbreviation: function (t) {
                    return t.match(/\b(\w)/g).join("")
                }, linkClick: function () {
                    this.autoClose && this.$sidebar && !0 === this.$sidebar.showSidebar && this.$sidebar.displaySidebar(!1)
                }, collapseMenu: function () {
                    this.collapsed = !this.collapsed
                }, collapseSubMenu: function (t) {
                    t.collapsed = !t.collapsed
                }
            },
            mounted: function () {
                this.addLink && this.addLink(this), void 0 !== this.link.collapsed && (this.collapsed = this.link.collapsed), this.isActive && this.isMenu && (this.collapsed = !1)
            },
            destroyed: function () {
                this.$el && this.$el.parentNode && this.$el.parentNode.removeChild(this.$el), this.removeLink && this.removeLink(this)
            }
        }
    }, "2rGO": function (t, a) {
    }, "3H7w": function (t, a, e) {
        "use strict";
        function s(t) {
            e("nZgL")
        }

        var i = e("n+Zn"), n = e("Tgvs"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, "3S1b": function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", [t._m(0), t._v(" "), e("div", {staticClass: "row"}, [e("div", {staticClass: "col-4"}, [e("card", [e("div", {staticClass: "text-center"}, [e("code", [t._v("col-4")])])])], 1), t._v(" "), e("div", {staticClass: "col-4"}, [e("card", [e("div", {staticClass: "text-center"}, [e("code", [t._v("col-4")])])])], 1), t._v(" "), e("div", {staticClass: "col-4"}, [e("card", [e("div", {staticClass: "text-center"}, [e("code", [t._v("col-4")])])])], 1)]), t._v(" "), t._m(1), t._v(" "), e("div", {staticClass: "row"}, [e("div", {staticClass: "col-sm-4"}, [e("card", [e("div", {staticClass: "text-center"}, [e("code", [t._v("col-sm-4")])])])], 1), t._v(" "), e("div", {staticClass: "col-sm-4"}, [e("card", [e("div", {staticClass: "text-center"}, [e("code", [t._v("col-sm-4")])])])], 1), t._v(" "), e("div", {staticClass: "col-sm-4"}, [e("card", [e("div", {staticClass: "text-center"}, [e("code", [t._v("col-sm-4")])])])], 1)]), t._v(" "), t._m(2), t._v(" "), e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-4"}, [e("card", [e("div", {staticClass: "text-center"}, [e("code", [t._v("col-md-4")])])])], 1), t._v(" "), e("div", {staticClass: "col-md-4"}, [e("card", [e("div", {staticClass: "text-center"}, [e("code", [t._v("col-md-4")])])])], 1), t._v(" "), e("div", {staticClass: "col-md-4"}, [e("card", [e("div", {staticClass: "text-center"}, [e("code", [t._v("col-md-4")])])])], 1)]), t._v(" "), t._m(3), t._v(" "), e("div", {staticClass: "row"}, [e("div", {staticClass: "col-lg-4"}, [e("card", [e("div", {staticClass: "text-center"}, [e("code", [t._v("col-lg-4")])])])], 1), t._v(" "), e("div", {staticClass: "col-lg-4"}, [e("card", [e("div", {staticClass: "text-center"}, [e("code", [t._v("col-lg-4")])])])], 1), t._v(" "), e("div", {staticClass: "col-lg-4"}, [e("card", [e("div", {staticClass: "text-center"}, [e("code", [t._v("col-lg-4")])])])], 1)]), t._v(" "), t._m(4), t._v(" "), e("div", {staticClass: "row"}, [e("div", {staticClass: "col-sm-6 col-lg-3"}, [e("card", [e("div", {staticClass: "text-center"}, [e("code", [t._v("col-sm-6 col-lg-3")])])])], 1), t._v(" "), e("div", {staticClass: "col-sm-6 col-lg-3"}, [e("card", [e("div", {staticClass: "text-center"}, [e("code", [t._v("col-sm-6 col-lg-3")])])])], 1), t._v(" "), e("div", {staticClass: "col-sm-6 col-lg-3"}, [e("card", [e("div", {staticClass: "text-center"}, [e("code", [t._v("col-sm-6 col-lg-3")])])])], 1), t._v(" "), e("div", {staticClass: "col-sm-6 col-lg-3"}, [e("card", [e("div", {staticClass: "text-center"}, [e("code", [t._v("col-sm-6 col-lg-3")])])])], 1)]), t._v(" "), t._m(5), t._v(" "), e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-3"}, [e("card", [e("div", {staticClass: "text-center"}, [e("code", [t._v("col-md-3")])])])], 1), t._v(" "), e("div", {staticClass: "col-md-3 offset-md-6"}, [e("card", [e("div", {staticClass: "text-center"}, [e("code", [t._v("col-md-3 offset-md-6")])])])], 1), t._v(" "), e("div", {staticClass: "col-md-4 offset-md-1"}, [e("card", [e("div", {staticClass: "text-center"}, [e("code", [t._v("col-md-4 offset-md-1")])])])], 1), t._v(" "), e("div", {staticClass: "col-md-4 offset-md-2"}, [e("card", [e("div", {staticClass: "text-center"}, [e("code", [t._v("col-md-4 offset-md-2")])])])], 1), t._v(" "), e("div", {staticClass: "col-md-6 offset-md-3"}, [e("card", [e("div", {staticClass: "text-center"}, [e("code", [t._v("col-md-6 offset-md-3")])])])], 1)]), t._v(" "), e("h4", {staticClass: "card-title"}, [t._v("Paragraphs")]), t._v(" "), e("card", [e("div", [e("div", {staticClass: "row"}, [e("div", {staticClass: "col-sm-6"}, [e("h3", [t._v("Some card-title Here")]), t._v(" "), e("p", [t._v('One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What\'s happened to me?" he thought.')])]), t._v(" "), e("div", {staticClass: "col-sm-6"}, [e("h3", [t._v("Another card-title Here")]), t._v(" "), e("p", [t._v('One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What\'s happened to me?" he thought.')])])]), t._v(" "), e("br"), t._v(" "), e("div", {staticClass: "row"}, [e("div", {staticClass: "col-sm-4"}, [e("h3", [t._v("Some card-title Here")]), t._v(" "), e("p", [t._v("One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.")])]), t._v(" "), e("div", {staticClass: "col-sm-4"}, [e("h3", [t._v("Another card-title Here")]), t._v(" "), e("p", [t._v("One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.")])]), t._v(" "), e("div", {staticClass: "col-sm-4"}, [e("h3", [t._v("Another card-title Here")]), t._v(" "), e("p", [t._v("One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.")])])]), t._v(" "), e("br"), t._v(" "), e("div", {staticClass: "row"}, [e("div", {staticClass: "col-sm-4"}, [e("h3", [t._v("Some card-title Here")]), t._v(" "), e("p", [t._v("One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.")])]), t._v(" "), e("div", {staticClass: "col-sm-8"}, [e("h3", [t._v("Another card-title Here")]), t._v(" "), e("p", [t._v("One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.")])])])])])], 1)
        }, i = [function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("h4", {staticClass: "card-card-title"}, [t._v("XS Grid "), e("small", [t._v("Always Horizontal")])])
        }, function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("h4", {staticClass: "card-title"}, [t._v("SM Grid "), e("small", [t._v("Collapsed at 768px")])])
        }, function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("h4", {staticClass: "card-title"}, [t._v("MD Grid "), e("small", [t._v("Collapsed at 992px")])])
        }, function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("h4", {staticClass: "card-title"}, [t._v("LG Grid "), e("small", [t._v("Collapsed at 1200px")])])
        }, function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("h4", {staticClass: "card-title"}, [t._v("Mixed Grid "), e("small", [t._v("Showing different sizes on different screens")])])
        }, function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("h4", {staticClass: "card-title"}, [t._v("Offset Grid "), e("small", [t._v("Adding some space when needed")])])
        }], n = {render: s, staticRenderFns: i};
        a.a = n
    }, "3SVV": function (t, a, e) {
        "use strict";
        a.a = {
            name: "l-progress",
            props: {
                striped: Boolean,
                showText: Boolean,
                animated: Boolean,
                height: {type: Number, default: 4},
                type: {type: String, default: "default"},
                value: {
                    type: Number, default: 0, validator: function (t) {
                        return t >= 0 && t <= 100
                    }
                },
                values: {
                    type: Array, default: function () {
                        return []
                    }
                }
            },
            computed: {
                computedClasses: function () {
                    return ["bg-" + this.type, {"progress-bar-striped": this.striped}, {"progress-bar-animated": this.animated}]
                }
            },
            methods: {
                progressClasses: function (t) {
                    return ["bg-" + t.type, {"progress-bar-striped": t.striped}, {"progress-bar-animated": t.animated}]
                }
            }
        }
    }, "3bPY": function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("card", [e("div", {
                attrs: {slot: "header"},
                slot: "header"
            }, [e("h4", {staticClass: "title"}, [t._v("Edit Profile")])]), t._v(" "), e("div", [e("form", [e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-5"}, [e("fg-input", {
                attrs: {
                    type: "text",
                    label: "Company",
                    disabled: !0,
                    placeholder: "Paper dashboard"
                }, model: {
                    value: t.user.company, callback: function (a) {
                        t.$set(t.user, "company", a)
                    }, expression: "user.company"
                }
            })], 1), t._v(" "), e("div", {staticClass: "col-md-3"}, [e("fg-input", {
                attrs: {
                    type: "text",
                    label: "Username",
                    placeholder: "Username"
                }, model: {
                    value: t.user.username, callback: function (a) {
                        t.$set(t.user, "username", a)
                    }, expression: "user.username"
                }
            })], 1), t._v(" "), e("div", {staticClass: "col-md-4"}, [e("fg-input", {
                attrs: {
                    type: "email",
                    label: "Username",
                    placeholder: "Email"
                }, model: {
                    value: t.user.email, callback: function (a) {
                        t.$set(t.user, "email", a)
                    }, expression: "user.email"
                }
            })], 1)]), t._v(" "), e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-6"}, [e("fg-input", {
                attrs: {
                    type: "text",
                    label: "First Name",
                    placeholder: "First Name"
                }, model: {
                    value: t.user.firstName, callback: function (a) {
                        t.$set(t.user, "firstName", a)
                    }, expression: "user.firstName"
                }
            })], 1), t._v(" "), e("div", {staticClass: "col-md-6"}, [e("fg-input", {
                attrs: {
                    type: "text",
                    label: "Last Name",
                    placeholder: "Last Name"
                }, model: {
                    value: t.user.lastName, callback: function (a) {
                        t.$set(t.user, "lastName", a)
                    }, expression: "user.lastName"
                }
            })], 1)]), t._v(" "), e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-12"}, [e("fg-input", {
                attrs: {
                    type: "text",
                    label: "Address",
                    placeholder: "Home Address"
                }, model: {
                    value: t.user.address, callback: function (a) {
                        t.$set(t.user, "address", a)
                    }, expression: "user.address"
                }
            })], 1)]), t._v(" "), e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-4"}, [e("fg-input", {
                attrs: {
                    type: "text",
                    label: "City",
                    placeholder: "City"
                }, model: {
                    value: t.user.city, callback: function (a) {
                        t.$set(t.user, "city", a)
                    }, expression: "user.city"
                }
            })], 1), t._v(" "), e("div", {staticClass: "col-md-4"}, [e("fg-input", {
                attrs: {
                    type: "text",
                    label: "Country",
                    placeholder: "Country"
                }, model: {
                    value: t.user.country, callback: function (a) {
                        t.$set(t.user, "country", a)
                    }, expression: "user.country"
                }
            })], 1), t._v(" "), e("div", {staticClass: "col-md-4"}, [e("fg-input", {
                attrs: {
                    label: "Postal Code",
                    placeholder: "ZIP Code"
                }, model: {
                    value: t.user.postalCode, callback: function (a) {
                        t.$set(t.user, "postalCode", a)
                    }, expression: "user.postalCode"
                }
            })], 1)]), t._v(" "), e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-12"}, [e("fg-input", {attrs: {label: "About Me"}}, [e("el-input", {
                attrs: {
                    type: "textarea",
                    autosize: "",
                    placeholder: "ZIP Code"
                }, model: {
                    value: t.user.aboutMe, callback: function (a) {
                        t.$set(t.user, "aboutMe", a)
                    }, expression: "user.aboutMe"
                }
            })], 1)], 1)]), t._v(" "), e("div", {staticClass: "text-center"}, [e("button", {
                staticClass: "btn btn-info btn-fill btn-wd",
                attrs: {type: "submit"},
                on: {
                    click: function (a) {
                        a.preventDefault(), t.updateProfile(a)
                    }
                }
            }, [t._v("\n          Update Profile\n        ")])]), t._v(" "), e("div", {staticClass: "clearfix"})])])])
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, "3dcv": function (t, a) {
    }, "41we": function (t, a, e) {
        "use strict";
        var s = e("FW62"), i = e("03Jj"), n = e("VU/8"), l = n(s.a, i.a, null, null, null);
        a.a = l.exports
    }, "4TyY": function (t, a, e) {
        "use strict";
        var s = e("rrf0");
        a.a = {components: {AuthLayout: s.a}}
    }, "5/W+": function (t, a, e) {
        "use strict";
        var s = e("Xv3t"), i = function () {
            return {component: e.e(1).then(e.bind(null, "zcGL")), loading: s.a, delay: 100}
        };
        a.a = {components: {Calendar: i}}
    }, "54K4": function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-6"}, [e("card", {
                staticClass: "stacked-form",
                attrs: {title: "Stacked Form"}
            }, [e("form", {
                attrs: {method: "#", action: "#"}, on: {
                    submit: function (t) {
                        t.preventDefault()
                    }
                }
            }, [e("template", {slot: "header"}, [e("h4", {staticClass: "card-title"}, [t._v("\n            Stacked Form\n          ")])]), t._v(" "), e("div", [e("fg-input", {
                attrs: {
                    label: "Email address",
                    type: "email",
                    placeholder: "Enter email"
                }
            }), t._v(" "), e("fg-input", {
                attrs: {
                    label: "Password",
                    type: "password",
                    placeholder: "Password"
                }
            }), t._v(" "), e("div", {staticClass: "form-group"}, [e("checkbox", [t._v("Subscribe to newsletter")])], 1), t._v(" "), e("button", {
                staticClass: "btn btn-fill btn-info",
                attrs: {type: "submit"}
            }, [t._v("Submit")])], 1)], 2)])], 1), t._v(" "), e("div", {staticClass: "col-md-6"}, [e("card", {
                staticClass: "horizontal-form",
                attrs: {title: "Horizontal Form"}
            }, [e("template", {slot: "header"}, [e("h4", {staticClass: "card-title"}, [t._v("\n            Horizontal Form\n          ")])]), t._v(" "), e("form", {
                attrs: {
                    action: "#",
                    method: "#"
                }, on: {
                    submit: function (t) {
                        t.preventDefault()
                    }
                }
            }, [e("div", {staticClass: "col-12"}, [e("fg-input", {
                staticClass: "row",
                attrs: {
                    label: "email",
                    type: "email",
                    labelClasses: "col-md-3 col-12",
                    inputClasses: "col-md-9 col-12",
                    placeholder: "Email"
                }
            }), t._v(" "), e("fg-input", {
                staticClass: "row",
                attrs: {
                    label: "password",
                    type: "password",
                    labelClasses: "col-md-3 col-12",
                    inputClasses: "col-md-9 col-12",
                    placeholder: "Password"
                }
            }), t._v(" "), e("fg-input", {
                staticClass: "row",
                attrs: {label: " ", labelClasses: "col-md-3 col-12", inputClasses: "col-md-9 col-12"}
            }, [e("checkbox", [t._v("Remember me")])], 1)], 1)]), t._v(" "), e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-9 offset-md-3 col-12"}, [e("button", {
                staticClass: "btn btn-fill btn-info",
                attrs: {type: "submit"}
            }, [t._v("\n              Sign in\n            ")])])])], 2)], 1), t._v(" "), e("div", {staticClass: "col-md-12"}, [e("card", [e("template", {slot: "header"}, [e("h4", {staticClass: "card-title"}, [t._v("Form Elements")])]), t._v(" "), e("div", [e("form", {
                staticClass: "form-horizontal",
                attrs: {method: "get", action: "/"}
            }, [e("fg-input", {
                attrs: {
                    label: "With help",
                    type: "text",
                    placeholder: "Enter email"
                }
            }, [e("small", {
                staticClass: "form-text text-muted",
                attrs: {slot: "helpBlock"},
                slot: "helpBlock"
            }, [t._v("A block of help text that breaks onto a new line.")])]), t._v(" "), e("fg-input", {
                attrs: {
                    label: "Password",
                    type: "password"
                }
            }), t._v(" "), e("fg-input", {
                attrs: {
                    label: "Placeholder",
                    placeholder: "Placeholder",
                    type: "text"
                }
            }), t._v(" "), e("fg-input", {
                attrs: {
                    label: "Disabled",
                    placeholder: "Disabled input here",
                    disabled: "",
                    type: "text"
                }
            }), t._v(" "), e("fg-input", {attrs: {label: "Static control"}}, [e("p", {staticClass: "form-control-static"}, [t._v("hello@creative-tim.com")])]), t._v(" "), e("fg-input", {attrs: {label: "Checkboxes and radios"}}, [e("checkbox", {
                model: {
                    value: t.checkboxes.first,
                    callback: function (a) {
                        t.$set(t.checkboxes, "first", a)
                    },
                    expression: "checkboxes.first"
                }
            }, [t._v("First checkbox")]), t._v(" "), e("checkbox", {
                model: {
                    value: t.checkboxes.second,
                    callback: function (a) {
                        t.$set(t.checkboxes, "second", a)
                    },
                    expression: "checkboxes.second"
                }
            }, [t._v("Second checkbox")]), t._v(" "), e("radio", {
                attrs: {label: "1"},
                model: {
                    value: t.radios.radio1, callback: function (a) {
                        t.$set(t.radios, "radio1", a)
                    }, expression: "radios.radio1"
                }
            }, [t._v("First Radio")]), t._v(" "), e("radio", {
                attrs: {label: "2"},
                model: {
                    value: t.radios.radio1, callback: function (a) {
                        t.$set(t.radios, "radio1", a)
                    }, expression: "radios.radio1"
                }
            }, [t._v("Second Radio")])], 1), t._v(" "), e("fg-input", {attrs: {label: "Inline checkboxes"}}, [e("div", [e("checkbox", {
                attrs: {inline: !0},
                model: {
                    value: t.checkboxes.a, callback: function (a) {
                        t.$set(t.checkboxes, "a", a)
                    }, expression: "checkboxes.a"
                }
            }, [t._v("a")]), t._v(" "), e("checkbox", {
                attrs: {inline: !0},
                model: {
                    value: t.checkboxes.b, callback: function (a) {
                        t.$set(t.checkboxes, "b", a)
                    }, expression: "checkboxes.b"
                }
            }, [t._v("b")]), t._v(" "), e("checkbox", {
                attrs: {inline: !0},
                model: {
                    value: t.checkboxes.c, callback: function (a) {
                        t.$set(t.checkboxes, "c", a)
                    }, expression: "checkboxes.c"
                }
            }, [t._v("c")])], 1)]), t._v(" "), e("fg-input", {
                staticClass: "has-success",
                attrs: {label: "Input with success", type: "text", value: "Success"}
            }), t._v(" "), e("fg-input", {
                staticClass: "has-error",
                attrs: {label: "Input with error", type: "text", value: "Error"}
            }), t._v(" "), e("fg-input", {
                staticClass: "column-sizing",
                attrs: {label: "Column sizing"}
            }, [e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-3"}, [e("fg-input", {attrs: {placeholder: ".col-md-3"}})], 1), t._v(" "), e("div", {staticClass: "col-md-4"}, [e("fg-input", {attrs: {placeholder: ".col-md-4"}})], 1), t._v(" "), e("div", {staticClass: "col-md-5"}, [e("fg-input", {attrs: {placeholder: ".col-md-5"}})], 1)])]), t._v(" "), e("fg-input", {attrs: {label: "Input groups"}}, [e("div", {staticClass: "row"}, [e("fg-input", {
                staticClass: "col-sm-3",
                attrs: {placeholder: "Username", type: "text"}
            }, [e("span", {
                staticClass: "input-group-addon",
                attrs: {slot: "addonLeft"},
                slot: "addonLeft"
            }, [t._v("@")])]), t._v(" "), e("fg-input", {
                staticClass: "col-sm-3",
                attrs: {type: "text"}
            }, [e("span", {
                staticClass: "input-group-addon",
                attrs: {slot: "addonLeft"},
                slot: "addonLeft"
            }, [t._v(".00")])]), t._v(" "), e("fg-input", {
                staticClass: "col-sm-6",
                attrs: {type: "text"}
            }, [e("span", {
                staticClass: "input-group-addon",
                attrs: {slot: "addonLeft"},
                slot: "addonLeft"
            }, [t._v("$")]), t._v(" "), e("span", {
                staticClass: "input-group-addon",
                attrs: {slot: "addonRight"},
                slot: "addonRight"
            }, [t._v(".00")])])], 1)]), t._v(" "), e("fg-input", {attrs: {label: "Textarea"}}, [e("textarea", {
                staticClass: "form-control",
                attrs: {placeholder: "Here can be your nice text", rows: "3"}
            })])], 1)])], 2)], 1)])
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, "5d1i": function (t, a) {
    }, "6AZ4": function (t, a, e) {
        "use strict";
        a.a = {name: "breadcrumb"}
    }, "6Fhh": function (t, a, e) {
        "use strict";
        function s(t) {
            e("VpyM")
        }

        var i = e("bk3S"), n = e("AP/k"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, "6SJl": function (t, a, e) {
        "use strict";
        a.a = {
            name: "drop-down",
            props: {
                title: String,
                icon: String,
                position: String,
                hideArrow: Boolean,
                tag: {type: String, default: "li"}
            },
            data: function () {
                return {isOpen: !1}
            },
            methods: {
                toggleDropDown: function () {
                    this.isOpen = !this.isOpen, this.$emit("change", this.isOpen)
                }, closeDropDown: function () {
                    this.isOpen = !1, this.$emit("change", this.isOpen)
                }
            }
        }
    }, "6fNw": function (t, a) {
    }, "75eU": function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement;
            return (t._self._c || a)("calendar")
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, "7hl0": function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "card"}, [t.$slots.image ? e("div", {staticClass: "card-image"}, [t._t("image")], 2) : t._e(), t._v(" "), t.$slots.header || t.title ? e("div", {staticClass: "card-header"}, [t._t("header", [e("h4", {staticClass: "card-title"}, [t._v(t._s(t.title))]), t._v(" "), e("p", {staticClass: "card-category"}, [t._v(t._s(t.subTitle))])])], 2) : t._e(), t._v(" "), e("div", {staticClass: "card-body"}, [t._t("default")], 2), t._v(" "), t.$slots.footer ? e("div", {staticClass: "card-footer"}, [e("hr"), t._v(" "), t._t("footer")], 2) : t._e()])
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, "8/qu": function (t, a, e) {
        "use strict";
        function s(t) {
            e("iJ2i")
        }

        var i = e("BHwz"), n = e("S1E0"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, "876/": function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {
                staticClass: "bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate",
                class: t.switchClass
            }, [e("div", {
                staticClass: "bootstrap-switch-container", on: {
                    click: function (a) {
                        t.triggerToggle()
                    }
                }
            }, [e("span", {
                staticClass: "bootstrap-switch-handle-on ",
                class: "bootstrap-switch-" + t.color
            }, [t._t("on", [t._v("\n          " + t._s(t.onText) + "\n      ")])], 2), t._v(" "), e("span", {staticClass: "bootstrap-switch-label"}), t._v(" "), e("span", {staticClass: "bootstrap-switch-handle-off bootstrap-switch-default"}, [t._t("off", [t._v("\n          " + t._s(t.offText) + "\n      ")])], 2)])])
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, "8EMU": function (t, a) {
    }, "8FdJ": function (t, a) {
    }, "8OF3": function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("auth-layout", {attrs: {pageClass: "login-page"}}, [e("div", {staticClass: "row d-flex justify-content-center align-items-center"}, [e("div", {staticClass: "col-lg-4 col-md-6 col-sm-8"}, [e("form", {
                attrs: {
                    method: "#",
                    action: "#"
                }
            }, [e("fade-render-transition", [e("card", [e("div", {
                attrs: {slot: "header"},
                slot: "header"
            }, [e("h3", {staticClass: "card-title text-center"}, [t._v("Login")])]), t._v(" "), e("div", [e("fg-input", {
                attrs: {
                    label: "Email address",
                    placeholder: "Enter email",
                    type: "email"
                }, model: {
                    value: t.model.email, callback: function (a) {
                        t.$set(t.model, "email", a)
                    }, expression: "model.email"
                }
            }), t._v(" "), e("fg-input", {
                attrs: {label: "passsword", type: "password", placeholder: "Password"},
                model: {
                    value: t.model.password, callback: function (a) {
                        t.$set(t.model, "password", a)
                    }, expression: "model.password"
                }
            }), t._v(" "), e("fg-input", [e("l-checkbox", {
                model: {
                    value: t.model.subscribe, callback: function (a) {
                        t.$set(t.model, "subscribe", a)
                    }, expression: "model.subscribe"
                }
            }, [t._v("\n                  Subscribe to newsletter\n                ")])], 1)], 1), t._v(" "), e("div", {staticClass: "text-center"}, [e("button", {
                staticClass: "btn btn-fill btn-info btn-round btn-wd ",
                attrs: {type: "submit"}
            }, [t._v("Login")]), t._v(" "), e("br"), t._v(" "), e("div", {staticClass: "forgot"}, [e("router-link", {
                staticClass: "card-category",
                attrs: {to: "/register"}
            }, [t._v("\n                  Forgot your password?\n                ")])], 1)])])], 1)], 1)])])])
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, "8SPL": function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("ul", {
                staticClass: "pagination",
                class: t.paginationClass
            }, [e("li", {
                staticClass: "page-item prev-page",
                class: {disabled: 1 === t.value}
            }, [e("a", {
                staticClass: "page-link",
                attrs: {"aria-label": "Previous"},
                on: {click: t.prevPage}
            }, [t._v("\n      «\n    ")])]), t._v(" "), t._l(t.range(t.minPage, t.maxPage), function (a) {
                return e("li", {
                    staticClass: "page-item",
                    class: {active: t.value === a}
                }, [e("a", {
                    staticClass: "page-link", on: {
                        click: function (e) {
                            t.changePage(a)
                        }
                    }
                }, [t._v(t._s(a))])])
            }), t._v(" "), e("li", {
                staticClass: "page-item page-pre next-page",
                class: {disabled: t.value === t.totalPages}
            }, [e("a", {
                staticClass: "page-link",
                attrs: {"aria-label": "Next"},
                on: {click: t.nextPage}
            }, [t._v("\n      »\n    ")])])], 2)
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, "8YN3": function (t, a, e) {
        "use strict";
        function s(t) {
            e("zsQU")
        }

        var i = e("zwn/"), n = e("qsbZ"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, "8mNY": function (t, a) {
    }, "947H": function (t, a) {
    }, "9plE": function (t, a, e) {
        "use strict";
        a.a = {}
    }, "A+X0": function (t, a, e) {
        "use strict";
        var s = e("bGai");
        a.a = {
            components: {Checkbox: s.a}, data: function () {
                return {
                    model: {email: "", password: "", confirmPassword: "", subscribe: !1},
                    modelValidations: {
                        email: {required: !0, email: !0},
                        password: {required: !0, min: 5},
                        confirmPassword: {required: !0, confirmed: "password"}
                    }
                }
            }, methods: {
                getError: function (t) {
                    return this.errors.first(t)
                }, validate: function () {
                    var t = this;
                    this.$validator.validateAll().then(function (a) {
                        t.$emit("on-submit", t.registerForm, a)
                    })
                }
            }
        }
    }, A3QO: function (t, a, e) {
        "use strict";
        function s(t) {
            e("k4QP")
        }

        var i = e("csrr"), n = e("cFkL"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, A4gK: function (t, a) {
    }, ABj6: function (t, a, e) {
        "use strict";
        function s(t) {
            e("z1KV")
        }

        var i = e("sYoA"), n = e("kBu5"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, "AP/k": function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", [e("h5", {staticClass: "text-center"}, [t._v("Please give us more details about your platform.")]), t._v(" "), e("div", {staticClass: "row"}, [e("div", {staticClass: "col-12"}, [e("fg-input", {
                directives: [{
                    name: "validate",
                    rawName: "v-validate",
                    value: t.modelValidations.website,
                    expression: "modelValidations.website"
                }],
                attrs: {
                    label: "Your website",
                    type: "url",
                    name: "website",
                    error: t.getError("website"),
                    placeholder: "ex: http://www.creative-tim.com"
                },
                model: {
                    value: t.model.website, callback: function (a) {
                        t.$set(t.model, "website", a)
                    }, expression: "model.website"
                }
            })], 1)]), t._v(" "), e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-6"}, [e("fg-input", {
                attrs: {
                    label: "Framework Type",
                    name: "framework",
                    placeholder: "ex: Vue.js"
                }, model: {
                    value: t.model.framework, callback: function (a) {
                        t.$set(t.model, "framework", a)
                    }, expression: "model.framework"
                }
            })], 1), t._v(" "), e("div", {staticClass: "col-md-6"}, [e("fg-input", {
                attrs: {
                    label: "Language",
                    error: t.getError("language")
                }
            }, [e("el-select", {
                directives: [{
                    name: "validate",
                    rawName: "v-validate",
                    value: t.modelValidations.language,
                    expression: "modelValidations.language"
                }],
                staticClass: "select-default",
                attrs: {name: "language"},
                model: {
                    value: t.model.language, callback: function (a) {
                        t.$set(t.model, "language", a)
                    }, expression: "model.language"
                }
            }, t._l(t.languageOptions, function (t) {
                return e("el-option", {
                    key: t.value,
                    staticClass: "select-default",
                    attrs: {label: t.label, value: t.value}
                })
            }))], 1)], 1)]), t._v(" "), e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-6"}, [e("fg-input", {
                directives: [{
                    name: "validate",
                    rawName: "v-validate",
                    value: t.modelValidations.bootstrapVersion,
                    expression: "modelValidations.bootstrapVersion"
                }],
                attrs: {name: "bootstrap version", error: t.getError("bootstrap version"), label: "Bootstrap version"},
                model: {
                    value: t.model.bootstrapVersion, callback: function (a) {
                        t.$set(t.model, "bootstrapVersion", a)
                    }, expression: "model.bootstrapVersion"
                }
            }, [e("el-select", {
                staticClass: "select-default",
                model: {
                    value: t.model.bootstrapVersion, callback: function (a) {
                        t.$set(t.model, "bootstrapVersion", a)
                    }, expression: "model.bootstrapVersion"
                }
            }, [e("el-option", {
                staticClass: "select-default",
                attrs: {value: "1.1"}
            }, [t._v("Bootstrap 1.1")]), t._v(" "), e("el-option", {
                staticClass: "select-default",
                attrs: {value: "2.0"}
            }, [t._v("Bootstrap 2.0")]), t._v(" "), e("el-option", {
                staticClass: "select-default",
                attrs: {value: "3.0"}
            }, [t._v("Bootstrap 3.0")]), t._v(" "), e("el-option", {
                staticClass: "select-default",
                attrs: {value: "4.0"}
            }, [t._v("Bootstrap 4.0(alpha)")])], 1)], 1)], 1), t._v(" "), e("div", {staticClass: "col-md-6"}, [e("fg-input", {attrs: {label: "Price"}}, [e("el-input-number", {
                attrs: {
                    placeholder: "ex: 19.00",
                    name: "price"
                }, model: {
                    value: t.model.price, callback: function (a) {
                        t.$set(t.model, "price", a)
                    }, expression: "model.price"
                }
            })], 1)], 1)])])
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, ASg2: function (t, a, e) {
        "use strict";
        function s(t) {
            e("5d1i")
        }

        var i = e("Oj8R"), n = e("OnT6"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, AhHH: function (t, a) {
    }, BAmE: function (t, a, e) {
        "use strict";
        function s(t) {
            e("BE7i")
        }

        var i = e("hlOX"), n = e("raCH"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, BE7i: function (t, a) {
    }, BHwz: function (t, a, e) {
        "use strict";
        a.a = {
            name: "fade-render-transition",
            props: {duration: {type: Number, default: 300}, delay: {type: Number, default: 0}},
            methods: {
                beforeAppear: function (t) {
                    t.style.opacity = 0
                }, onAppear: function (t) {
                    t.style.transform = "translate3d(0, -60px, 0)", t.style.transition = "all " + this.duration / 1e3 + "s ease-in", this.delay > 0 && (t.style.transition = t.style.transition + " " + this.delay / 1e3 + "s")
                }, afterAppear: function (t) {
                    t.style.opacity = 1, t.style.transform = "translate3d(0, 0, 0)"
                }
            }
        }
    }, BhPa: function (t, a) {
    }, Bu56: function (t, a, e) {
        "use strict";
        var s = e("plhd"), i = e("RI/Z");
        a.a = {components: {EditProfileForm: s.a, UserCard: i.a}}
    }, BxWU: function (t, a) {
    }, Cmwc: function (t, a) {
    }, "D/H3": function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement;
            return (t._self._c || a)("router-view")
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, DAYY: function (t, a, e) {
        "use strict";
        function s(t) {
            e("lHyV")
        }

        var i = e("s64l"), n = e("Rc61"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, DNih: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "card"}, [t._m(0), t._v(" "), e("div", {staticClass: "card-content"}, [e("div", {staticClass: "table-full-width table-tasks"}, [e("table", {staticClass: "table"}, [e("tbody", t._l(t.tasks, function (a, s) {
                return e("task", {
                    key: a.title,
                    attrs: {task: a, index: s},
                    on: {"on-edit": t.handleTaskEdit, "on-delete": t.handleTaskDelete}
                })
            }))])])]), t._v(" "), t._m(1)])
        }, i = [function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "card-header"}, [e("h4", {staticClass: "card-title"}, [t._v("Tasks")]), t._v(" "), e("p", {staticClass: "category"}, [t._v("Backend development")])])
        }, function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "card-footer"}, [e("hr"), t._v(" "), e("div", {staticClass: "stats"}, [e("i", {staticClass: "fa fa-history"}), t._v(" Updated 3 minutes ago\n    ")])])
        }], n = {render: s, staticRenderFns: i};
        a.a = n
    }, DTLV: function (t, a, e) {
        "use strict";
        var s = e("ygyo"), i = e("M/DR"), n = {
            showSidebar: !1, sidebarLinks: [], isMinimized: !1, displaySidebar: function (t) {
                this.showSidebar = t
            }, toggleMinimize: function () {
                document.body.classList.toggle("sidebar-mini");
                var t = setInterval(function () {
                    window.dispatchEvent(new Event("resize"))
                }, 180);
                setTimeout(function () {
                    clearInterval(t)
                }, 1e3), this.isMinimized = !this.isMinimized
            }
        }, l = {
            install: function (t, a) {
                a && a.sidebarLinks && (n.sidebarLinks = a.sidebarLinks), t.mixin({
                    data: function () {
                        return {sidebarStore: n}
                    }
                }), Object.defineProperty(t.prototype, "$sidebar", {
                    get: function () {
                        return this.$root.sidebarStore
                    }
                }), t.component("side-bar", s.a), t.component("sidebar-item", i.a)
            }
        };
        a.a = l
    }, Dte2: function (t, a) {
    }, ELss: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement;
            t._self._c;
            return t._m(0)
        }, i = [function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-12"}, [e("div", {staticClass: "card"}, [e("div", {staticClass: "card-header"}, [e("h4", {staticClass: "card-title"}, [t._v("100 Awesome Nucleo Icons")]), t._v(" "), e("p", {staticClass: "card-category"}, [t._v("Handcrafted by our friends from "), e("a", {attrs: {href: "https://nucleoapp.com/?ref=1712"}}, [t._v("NucleoApp")])])]), t._v(" "), e("div", {staticClass: "card-body all-icons"}, [e("div", {staticClass: "row"}, [e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-air-baloon"}), t._v(" "), e("p", [t._v("nc-air-baloon")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-album-2"}), t._v(" "), e("p", [t._v("nc-album-2")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-alien-33"}), t._v(" "), e("p", [t._v("nc-alien-33")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-align-center"}), t._v(" "), e("p", [t._v("nc-align-center")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-align-left-2"}), t._v(" "), e("p", [t._v("nc-align-left-2")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-ambulance"}), t._v(" "), e("p", [t._v("nc-ambulance")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-android"}), t._v(" "), e("p", [t._v("nc-android")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-app"}), t._v(" "), e("p", [t._v("nc-app")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-apple"}), t._v(" "), e("p", [t._v("nc-apple")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-atom"}), t._v(" "), e("p", [t._v("nc-atom")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-attach-87"}), t._v(" "), e("p", [t._v("nc-attach-87")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-audio-92"}), t._v(" "), e("p", [t._v("nc-audio-92")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-backpack"}), t._v(" "), e("p", [t._v("nc-backpack")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-badge"}), t._v(" "), e("p", [t._v("nc-badge")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-bag"}), t._v(" "), e("p", [t._v("nc-bag")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-bank"}), t._v(" "), e("p", [t._v("nc-bank")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-battery-81"}), t._v(" "), e("p", [t._v("nc-battery-81")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-bell-55"}), t._v(" "), e("p", [t._v("nc-bell-55")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-bold"}), t._v(" "), e("p", [t._v("nc-bold")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-bulb-63"}), t._v(" "), e("p", [t._v("nc-bulb-63")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-bullet-list-67"}), t._v(" "), e("p", [t._v("nc-bullet-list-67")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-bus-front-12"}), t._v(" "), e("p", [t._v("nc-bus-front-12")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-button-pause"}), t._v(" "), e("p", [t._v("nc-button-pause")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-button-play"}), t._v(" "), e("p", [t._v("nc-button-play")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-button-power"}), t._v(" "), e("p", [t._v("nc-button-power")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-camera-20"}), t._v(" "), e("p", [t._v("nc-camera-20")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-caps-small"}), t._v(" "), e("p", [t._v("nc-caps-small")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-cart-simple"}), t._v(" "), e("p", [t._v("nc-cart-simple")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-cctv"}), t._v(" "), e("p", [t._v("nc-cctv")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-chart-bar-32"}), t._v(" "), e("p", [t._v("nc-chart-bar-32")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-chart-pie-35"}), t._v(" "), e("p", [t._v("nc-chart-pie-35")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-chart-pie-36"}), t._v(" "), e("p", [t._v("nc-chart-pie-36")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-chart"}), t._v(" "), e("p", [t._v("nc-chart")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-chat-round"}), t._v(" "), e("p", [t._v("nc-chat-round")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-check-2"}), t._v(" "), e("p", [t._v("nc-check-2")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-circle-09"}), t._v(" "), e("p", [t._v("nc-circle-09")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-circle"}), t._v(" "), e("p", [t._v("nc-circle")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-cloud-download-93"}), t._v(" "), e("p", [t._v("nc-cloud-download-93")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-cloud-upload-94"}), t._v(" "), e("p", [t._v("nc-cloud-upload-94")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-compass-05"}), t._v(" "), e("p", [t._v("nc-compass-05")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-controller-modern"}), t._v(" "), e("p", [t._v("nc-controller-modern")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-credit-card"}), t._v(" "), e("p", [t._v("nc-credit-card")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-delivery-fast"}), t._v(" "), e("p", [t._v("nc-delivery-fast")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-email-83"}), t._v(" "), e("p", [t._v("nc-email-83")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-email-85"}), t._v(" "), e("p", [t._v("nc-email-85")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-explore-2"}), t._v(" "), e("p", [t._v("nc-explore-2")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-fav-remove"}), t._v(" "), e("p", [t._v("nc-fav-remove")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-favourite-28"}), t._v(" "), e("p", [t._v("nc-favourite-28")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-globe-2"}), t._v(" "), e("p", [t._v("nc-globe-2")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-grid-45"}), t._v(" "), e("p", [t._v("nc-grid-45")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-headphones-2"}), t._v(" "), e("p", [t._v("nc-headphones-2")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-html5"}), t._v(" "), e("p", [t._v("nc-html5")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-istanbul"}), t._v(" "), e("p", [t._v("nc-istanbul")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-key-25"}), t._v(" "), e("p", [t._v("nc-key-25")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-layers-3"}), t._v(" "), e("p", [t._v("nc-layers-3")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-light-3"}), t._v(" "), e("p", [t._v("nc-light-3")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-lock-circle-open"}), t._v(" "), e("p", [t._v("nc-lock-circle-open")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-map-big"}), t._v(" "), e("p", [t._v("nc-map-big")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-mobile"}), t._v(" "), e("p", [t._v("nc-mobile")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-money-coins"}), t._v(" "), e("p", [t._v("nc-money-coins")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-note-03"}), t._v(" "), e("p", [t._v("nc-note-03")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-notes"}), t._v(" "), e("p", [t._v("nc-notes")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-notification-70"}), t._v(" "), e("p", [t._v("nc-notification-70")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-palette"}), t._v(" "), e("p", [t._v("nc-palette")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-paper-2"}), t._v(" "), e("p", [t._v("nc-paper-2")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-pin-3"}), t._v(" "), e("p", [t._v("nc-pin-3")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-planet"}), t._v(" "), e("p", [t._v("nc-planet")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-preferences-circle-rotate"}), t._v(" "), e("p", [t._v("nc-preferences-circle-rotate")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-puzzle-10"}), t._v(" "), e("p", [t._v("nc-puzzle-10")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-quote"}), t._v(" "), e("p", [t._v("nc-quote")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-refresh-02"}), t._v(" "), e("p", [t._v("nc-refresh-02")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-ruler-pencil"}), t._v(" "), e("p", [t._v("nc-ruler-pencil")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-satisfied"}), t._v(" "), e("p", [t._v("nc-satisfied")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-scissors"}), t._v(" "), e("p", [t._v("nc-scissors")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-send"}), t._v(" "), e("p", [t._v("nc-send")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-settings-90"}), t._v(" "), e("p", [t._v("nc-settings-90")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-settings-gear-64"}), t._v(" "), e("p", [t._v("nc-settings-gear-64")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-settings-tool-66"}), t._v(" "), e("p", [t._v("nc-settings-tool-66")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-simple-add"}), t._v(" "), e("p", [t._v("nc-simple-add")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-simple-delete"}), t._v(" "), e("p", [t._v("nc-simple-delete")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-simple-remove"}), t._v(" "), e("p", [t._v("nc-simple-remove")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-single-02"}), t._v(" "), e("p", [t._v("nc-single-02")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-single-copy-04"}), t._v(" "), e("p", [t._v("nc-single-copy-04")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-spaceship"}), t._v(" "), e("p", [t._v("nc-spaceship")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-square-pin"}), t._v(" "), e("p", [t._v("nc-square-pin")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-stre-down"}), t._v(" "), e("p", [t._v("nc-stre-down")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-stre-left"}), t._v(" "), e("p", [t._v("nc-stre-left")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-stre-right"}), t._v(" "), e("p", [t._v("nc-stre-right")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-stre-up"}), t._v(" "), e("p", [t._v("nc-stre-up")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-sun-fog-29"}), t._v(" "), e("p", [t._v("nc-sun-fog-29")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-support-17"}), t._v(" "), e("p", [t._v("nc-support-17")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-tablet-2"}), t._v(" "), e("p", [t._v("nc-tablet-2")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-tag-content"}), t._v(" "), e("p", [t._v("nc-tag-content")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-tap-01"}), t._v(" "), e("p", [t._v("nc-tap-01")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-time-alarm"}), t._v(" "), e("p", [t._v("nc-time-alarm")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-tv-2"}), t._v(" "), e("p", [t._v("nc-tv-2")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-umbrella-13"}), t._v(" "), e("p", [t._v("nc-umbrella-13")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-vector"}), t._v(" "), e("p", [t._v("nc-vector")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-watch-time"}), t._v(" "), e("p", [t._v("nc-watch-time")])])]), t._v(" "), e("div", {staticClass: "font-icon-list col-lg-2 col-md-3 col-sm-4 col-6"}, [e("div", {staticClass: "font-icon-detail"}, [e("i", {staticClass: "nc-icon nc-zoom-split"}), t._v(" "), e("p", [t._v("nc-zoom-split")])])])])])])])])
        }], n = {render: s, staticRenderFns: i};
        a.a = n
    }, EQDZ: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("form", [e("card", [e("div", {
                attrs: {slot: "header"},
                slot: "header"
            }, [e("h4", {staticClass: "card-title"}, [t._v("\n        Register Form\n      ")])]), t._v(" "), e("div", [e("fg-input", {
                directives: [{
                    name: "validate",
                    rawName: "v-validate",
                    value: t.modelValidations.email,
                    expression: "modelValidations.email"
                }],
                attrs: {label: "Email address", error: t.getError("email"), name: "email", type: "email"},
                model: {
                    value: t.model.email, callback: function (a) {
                        t.$set(t.model, "email", a)
                    }, expression: "model.email"
                }
            }), t._v(" "), e("fg-input", {
                directives: [{
                    name: "validate",
                    rawName: "v-validate",
                    value: t.modelValidations.password,
                    expression: "modelValidations.password"
                }],
                attrs: {label: "Passowrd", name: "password", error: t.getError("password"), type: "password"},
                model: {
                    value: t.model.password, callback: function (a) {
                        t.$set(t.model, "password", a)
                    }, expression: "model.password"
                }
            })], 1), t._v(" "), e("div", {staticClass: "d-flex justify-content-center"}, [e("button", {
                staticClass: "btn btn-fill btn-info btn-wd",
                attrs: {type: "submit"},
                on: {
                    click: function (a) {
                        a.preventDefault(), t.validate(a)
                    }
                }
            }, [t._v("Login")])])])], 1)
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, ET8q: function (t, a, e) {
        "use strict";
        var s = e("Xxa5"), i = e.n(s), n = e("exGp"), l = e.n(n);
        a.a = {
            data: function () {
                return {$Chartist: null}
            }, methods: {
                initPerformanceChart: function () {
                    var t = {
                        labels: ["6pm", "9pm", "11pm", "2am", "4am", "8am", "2pm", "5pm", "8pm", "11pm", "4am"],
                        series: [[1, 6, 8, 7, 4, 7, 8, 12, 16, 17, 14, 13]]
                    }, a = {
                        showPoint: !1,
                        lineSmooth: !0,
                        axisX: {showGrid: !1, showLabel: !0},
                        axisY: {offset: 40},
                        low: 0,
                        high: 16,
                        height: "250px"
                    };
                    this.$Chartist.Line("#chartPerformance", t, a)
                }, initActivityChart: function () {
                    var t = {
                            labels: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                            series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895], [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]]
                        }, a = {seriesBarDistance: 10, axisX: {showGrid: !1}, height: "250px"},
                        e = [["screen and (max-width: 640px)", {
                            seriesBarDistance: 5, axisX: {
                                labelInterpolationFnc: function (t) {
                                    return t[0]
                                }
                            }
                        }]];
                    this.$Chartist.Bar("#chartActivity", t, a, e)
                }, initStockChart: function () {
                    var t = {
                        labels: ["'07", "'08", "'09", "'10", "'11", "'12", "'13", "'14", "'15"],
                        series: [[22.2, 34.9, 42.28, 51.93, 62.21, 80.23, 62.21, 82.12, 102.5, 107.23]]
                    }, a = {
                        lineSmooth: !1,
                        axisY: {
                            offset: 40, labelInterpolationFnc: function (t) {
                                return "$" + t
                            }
                        },
                        low: 10,
                        height: "250px",
                        high: 110,
                        classNames: {point: "ct-point ct-green", line: "ct-line ct-green"}
                    };
                    this.$Chartist.Line("#chartStock", t, a)
                }, initViewsChart: function () {
                    var t = {
                            labels: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                            series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
                        }, a = {seriesBarDistance: 10, classNames: {bar: "ct-bar"}, axisX: {showGrid: !1}, height: "250px"},
                        e = [["screen and (max-width: 640px)", {
                            seriesBarDistance: 5, axisX: {
                                labelInterpolationFnc: function (t) {
                                    return t[0]
                                }
                            }
                        }]];
                    this.$Chartist.Bar("#chartViews", t, a, e)
                }, initCharts: function () {
                    this.initPerformanceChart(), this.initStockChart(), this.initViewsChart(), this.initActivityChart()
                }
            }, mounted: function () {
                var t = this;
                return l()(i.a.mark(function a() {
                    return i.a.wrap(function (a) {
                        for (; ;)switch (a.prev = a.next) {
                            case 0:
                                return a.next = 2, e.e(0).then(e.bind(null, "715g"));
                            case 2:
                                t.$Chartist = a.sent, t.initCharts();
                            case 4:
                            case"end":
                                return a.stop()
                        }
                    }, a, t)
                }))()
            }
        }
    }, EtDv: function (t, a, e) {
        "use strict";
        function s(t) {
            e("jyj7")
        }

        var i = e("Kdrw"), n = e("XQFB"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, "F+qK": function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "card card-timeline card-plain"}, [e("div", {staticClass: "card-content"}, [e("ul", {
                staticClass: "timeline",
                class: {"timeline-simple": "simple" === t.type}
            }, [t._t("default")], 2)])])
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, FW62: function (t, a, e) {
        "use strict";
        a.a = {
            name: "l-radio",
            props: {label: [String, Number], disabled: [Boolean, String], value: [String, Boolean], inline: Boolean},
            data: function () {
                return {cbId: ""}
            },
            computed: {
                model: {
                    get: function () {
                        return this.value
                    }, set: function (t) {
                        this.$emit("input", t)
                    }
                }, inlineClass: function () {
                    return this.inline ? "radio-inline" : ""
                }
            },
            created: function () {
                this.cbId = Math.random().toString(16).slice(2)
            }
        }
    }, FxcR: function (t, a, e) {
        "use strict";
        function s(t) {
            e("sqW6")
        }

        var i = e("kf04"), n = e("RZL0"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, FyWQ: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("auth-layout", {attrs: {pageClass: "register-page"}}, [e("div", {staticClass: "row d-flex justify-content-center"}, [e("div", {staticClass: "col-md-8"}, [e("div", {staticClass: "header-text"}, [e("h2", [t._v("Vue Light Bootstrap Dashboard PRO")]), t._v(" "), e("h4", [t._v("Register for free and experience the dashboard today")]), t._v(" "), e("hr")])]), t._v(" "), e("div", {staticClass: "col-md-5 ml-auto"}, [e("fade-render-transition", {attrs: {duration: 200}}, [e("div", {staticClass: "media"}, [e("div", {staticClass: "media-left"}, [e("div", {staticClass: "icon"}, [e("i", {staticClass: "nc-icon nc-circle-09"})])]), t._v(" "), e("div", {staticClass: "media-body"}, [e("h4", [t._v("Free Account")]), t._v(" "), e("p", [t._v("Here you can write a feature description for your dashboard, let the users know what is the value that you give them.")])])])]), t._v(" "), e("fade-render-transition", {
                attrs: {
                    delay: 200,
                    duration: 200
                }
            }, [e("div", {staticClass: "media"}, [e("div", {staticClass: "media-left"}, [e("div", {staticClass: "icon"}, [e("i", {staticClass: "nc-icon nc-preferences-circle-rotate"})])]), t._v(" "), e("div", {staticClass: "media-body"}, [e("h4", [t._v("Awesome Performances")]), t._v(" "), e("p", [t._v("Here you can write a feature description for your dashboard, let the users know what is the value that you give them.")])])])]), t._v(" "), e("fade-render-transition", {
                attrs: {
                    delay: 400,
                    duration: 200
                }
            }, [e("div", {staticClass: "media"}, [e("div", {staticClass: "media-left"}, [e("div", {staticClass: "icon"}, [e("i", {staticClass: "nc-icon nc-planet"})])]), t._v(" "), e("div", {staticClass: "media-body"}, [e("h4", [t._v("Global Support")]), t._v(" "), e("p", [t._v("Here you can write a feature description for your dashboard, let the users know what is the value that you give them.")])])])])], 1), t._v(" "), e("div", {staticClass: "col-md-4 mr-auto"}, [e("form", {
                attrs: {
                    method: "#",
                    action: "#"
                }
            }, [e("card", {staticClass: "card-plain"}, [e("div", [e("fg-input", {attrs: {placeholder: "Your First Name"}}), t._v(" "), e("fg-input", {attrs: {placeholder: "Your Last Name"}}), t._v(" "), e("fg-input", {attrs: {placeholder: "Company"}}), t._v(" "), e("fg-input", {
                attrs: {
                    placeholder: "Email",
                    type: "email"
                }
            }), t._v(" "), e("fg-input", {
                attrs: {
                    placeholder: "Password",
                    type: "password"
                }
            }), t._v(" "), e("fg-input", {
                attrs: {
                    placeholder: "Password confirmation",
                    type: "password"
                }
            })], 1), t._v(" "), e("div", {staticClass: "text-center"}, [e("button", {
                staticClass: "btn btn-fill btn-default btn-neutral btn-wd",
                attrs: {type: "button"}
            }, [t._v("Create Free Account")])])])], 1)])])])
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, GFcP: function (t, a) {
    }, GJUC: function (t, a, e) {
        "use strict";
        a.a = {props: {badgeType: {type: String, default: "success"}, badgeIcon: {type: String, default: ""}}}
    }, GTnb: function (t, a) {
    }, GXEp: function (t, a) {
    }, Gn77: function (t, a) {
    }, HVao: function (t, a, e) {
        "use strict";
        var s = e("QtY2"), i = e("avmG"), n = e("VU/8"), l = n(s.a, i.a, null, null, null);
        a.a = l.exports
    }, Hp7B: function (t, a, e) {
        "use strict";
        function s(t) {
            e("hGza")
        }

        var i = e("MU8E"), n = e("sveg"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, I2Jn: function (t, a, e) {
        "use strict";
        function s(t) {
            e("QbIq")
        }

        var i = e("Bu56"), n = e("NLb5"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, I4Nt: function (t, a, e) {
        "use strict";
        function s(t) {
            e("hRsq")
        }

        var i = e("6SJl"), n = e("Q9KK"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, I4nB: function (t, a) {
    }, I66h: function (t, a, e) {
        "use strict";
        function s(t) {
            e("6fNw")
        }

        var i = e("Xrer"), n = e("W2k2"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, I6ea: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement;
            return (t._self._c || a)("div", {
                directives: [{
                    name: "loading",
                    rawName: "v-loading",
                    value: !0,
                    expression: "true"
                }], staticClass: "row", attrs: {id: "loading"}
            })
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, ITEK: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("tr", [t._m(0), t._v(" "), e("td", [t._v(t._s(t.task.title))]), t._v(" "), e("td", {staticClass: "td-actions text-right"}, [e("div", {staticClass: "table-icons"}, [e("button", {
                staticClass: "btn btn-info btn-simple btn-xs",
                attrs: {type: "button", rel: "tooltip", title: "Edit Task"},
                on: {click: t.handleEditClick}
            }, [e("i", {staticClass: "ti-pencil-alt"})]), t._v(" "), e("button", {
                staticClass: "btn btn-danger btn-simple btn-xs",
                attrs: {type: "button", rel: "tooltip", title: "Remove"},
                on: {click: t.handleDeleteClick}
            }, [e("i", {staticClass: "ti-close"})])])])])
        }, i = [function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("td", [e("label", {staticClass: "checkbox"}, [e("input", {
                attrs: {
                    type: "checkbox",
                    value: "",
                    "data-toggle": "checkbox"
                }
            })])])
        }], n = {render: s, staticRenderFns: i};
        a.a = n
    }, IUnw: function (t, a, e) {
        "use strict";
        var s, i = e("bOdI"), n = e.n(i), l = e("XPMo"), o = (e.n(l), e("uEG6")), c = e.n(o), r = e("8mNY"),
            d = (e.n(r), e("+BTi")), u = (e.n(d), e("YnkO")), v = e.n(u), m = e("I3G/"), f = e.n(m), p = e("lEct"),
            b = e.n(p);
        f.a.use(b.a), a.a = {
            components: (s = {}, n()(s, v.a.name, v.a), n()(s, c.a.name, c.a), s), data: function () {
                return {activeName: "first"}
            }
        }
    }, Ibwv: function (t, a, e) {
        "use strict";
        var s = e("Xxa5"), i = e.n(s), n = e("exGp"), l = e.n(n), o = e("znQV");
        a.a = {
            name: "chart-card",
            components: {Card: o.a},
            props: {
                chartType: {type: String, default: "Line"}, chartOptions: {
                    type: Object, default: function () {
                        return {}
                    }
                }, chartData: {
                    type: Object, default: function () {
                        return {labels: [], series: []}
                    }
                }, responsiveOptions: [Object, Array]
            },
            data: function () {
                return {chartId: "no-id", $Chartist: null, chart: null}
            },
            methods: {
                initChart: function () {
                    var t = "#" + this.chartId;
                    this.chart = this.$Chartist[this.chartType](t, this.chartData, this.chartOptions, this.responsiveOptions), this.$emit("initialized", this.chart), "Line" === this.chartType && this.animateLineChart(), "Bar" === this.chartType && this.animateBarChart()
                }, updateChartId: function () {
                    var t = (new Date).getTime().toString(), a = this.getRandomInt(0, t);
                    this.chartId = "div_" + a
                }, getRandomInt: function (t, a) {
                    return Math.floor(Math.random() * (a - t + 1)) + t
                }, animateLineChart: function () {
                    var t = this, a = 0;
                    this.chart.on("draw", function (e) {
                        "line" === e.type || "area" === e.type ? e.element.animate({
                            d: {
                                begin: 600,
                                dur: 700,
                                from: e.path.clone().scale(1, 0).translate(0, e.chartRect.height()).stringify(),
                                to: e.path.clone().stringify(),
                                easing: t.$Chartist.Svg.Easing.easeOutQuint
                            }
                        }) : "point" === e.type && (a++, e.element.animate({
                                opacity: {
                                    begin: 80 * a,
                                    dur: 500,
                                    from: 0,
                                    to: 1,
                                    easing: "ease"
                                }
                            }))
                    }), a = 0
                }, animateBarChart: function () {
                    var t = 0;
                    this.chart.on("draw", function (a) {
                        "bar" === a.type && (t++, a.element.animate({
                            opacity: {
                                begin: 80 * t,
                                dur: 500,
                                from: 0,
                                to: 1,
                                easing: "ease"
                            }
                        }))
                    })
                }
            },
            mounted: function () {
                var t = this;
                return l()(i.a.mark(function a() {
                    var s;
                    return i.a.wrap(function (a) {
                        for (; ;)switch (a.prev = a.next) {
                            case 0:
                                return t.updateChartId(), a.next = 3, e.e(0).then(e.bind(null, "715g"));
                            case 3:
                                s = a.sent, t.$Chartist = s, t.initChart();
                            case 6:
                            case"end":
                                return a.stop()
                        }
                    }, a, t)
                }))()
            }
        }
    }, IfGH: function (t, a, e) {
        "use strict";
        function s(t) {
            e("1KJ8")
        }

        var i = e("yWRo"), n = e("usxd"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, Jmt5: function (t, a) {
    }, KFeR: function (t, a, e) {
        "use strict";
        var s = e("bOdI"), i = e.n(s), n = e("Zcwg"), l = e.n(n);
        a.a = {
            components: i()({}, l.a.name, l.a),
            props: {
                pageClass: {type: String, default: "login-page"},
                backgroundColor: {type: String, default: "black"}
            },
            data: function () {
                return {showMenu: !1}
            },
            methods: {
                toggleNavbar: function () {
                    document.body.classList.toggle("nav-open")
                }, closeMenu: function () {
                    document.body.classList.remove("nav-open"), document.body.classList.remove("off-canvas-sidebar")
                }
            },
            beforeDestroy: function () {
                this.closeMenu()
            }
        }
    }, Kdrw: function (t, a, e) {
        "use strict";
        var s = e("lMsw"), i = e.n(s), n = e("ok9g");
        i.a.KEY = n.a, a.a = {
            methods: {
                initMap: function (t) {
                    var a = new window.google.maps.LatLng(40.748817, -73.985428),
                        e = {zoom: 8, center: a, scrollwheel: !1},
                        s = new window.google.maps.Map(document.getElementById("map"), e);
                    new window.google.maps.Marker({position: a, title: "Regular Map!"}).setMap(s)
                }
            }, mounted: function () {
                var t = this;
                i.a.load(function (a) {
                    t.initMap(a)
                })
            }
        }
    }, KxUp: function (t, a) {
    }, KxZU: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-12"}, [e("div", {staticClass: "card"}, [t._m(0), t._v(" "), t._m(1), t._v(" "), e("div", {staticClass: "row"}, [t._m(2), t._v(" "), e("div", {staticClass: "col-md-6"}, [t._m(3), t._v(" "), e("div", {staticClass: "card-body"}, [e("l-pagination", {
                attrs: {"page-count": 10},
                model: {
                    value: t.defaultPagination, callback: function (a) {
                        t.defaultPagination = a
                    }, expression: "defaultPagination"
                }
            }), t._v(" "), e("l-pagination", {
                staticClass: "pagination-no-border",
                attrs: {"page-count": 10},
                model: {
                    value: t.infoPagination, callback: function (a) {
                        t.infoPagination = a
                    }, expression: "infoPagination"
                }
            })], 1)])]), t._v(" "), t._m(4), t._v(" "), t._m(5)])])])
        }, i = [function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-6"}, [e("div", {staticClass: "card-header"}, [e("h4", {staticClass: "card-title"}, [t._v("Colors")])]), t._v(" "), e("div", {staticClass: "card-body"}, [e("button", {staticClass: "btn btn-default btn-wd"}, [t._v("Default")]), t._v(" "), e("button", {staticClass: "btn btn-primary btn-wd"}, [t._v("Primary")]), t._v(" "), e("button", {staticClass: "btn btn-info btn-wd"}, [t._v("Info")]), t._v(" "), e("button", {staticClass: "btn btn-success btn-wd"}, [t._v("Success")]), t._v(" "), e("button", {staticClass: "btn btn-warning btn-wd"}, [t._v("Warning")]), t._v(" "), e("button", {staticClass: "btn btn-danger btn-wd"}, [t._v("Danger")])])]), t._v(" "), e("div", {staticClass: "col-md-6"}, [e("div", {staticClass: "card-header"}, [e("h4", {staticClass: "card-title"}, [t._v("Styles")])]), t._v(" "), e("div", {staticClass: "card-body"}, [e("button", {staticClass: "btn btn-wd"}, [t._v("Default")]), t._v(" "), e("button", {staticClass: "btn btn-outline btn-wd"}, [t._v("Outline")]), t._v(" "), e("button", {staticClass: "btn btn-round btn-wd"}, [t._v("Fill + Round")]), t._v(" "), e("button", {staticClass: "btn btn-outline btn-round btn-wd"}, [t._v("Outline + Round")]), t._v(" "), e("button", {staticClass: "btn btn-simple btn-link btn-wd"}, [t._v("Simple")])])])])
        }, function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-6"}, [e("div", {staticClass: "card-header"}, [e("h4", {staticClass: "card-title"}, [t._v("Buttons with Label")])]), t._v(" "), e("div", {staticClass: "card-body"}, [e("button", {
                staticClass: "btn btn-wd btn-success btn-outline",
                attrs: {type: "button"}
            }, [e("span", {staticClass: "btn-label"}, [e("i", {staticClass: "fa fa-check"})]), t._v("\n              Success\n            ")]), t._v(" "), e("button", {
                staticClass: "btn btn-wd btn-danger btn-outline",
                attrs: {type: "button"}
            }, [e("span", {staticClass: "btn-label"}, [e("i", {staticClass: "fa fa-times"})]), t._v("\n              Danger\n            ")]), t._v(" "), e("button", {
                staticClass: "btn btn-wd btn-info btn-outline",
                attrs: {type: "button"}
            }, [e("span", {staticClass: "btn-label"}, [e("i", {staticClass: "fa fa-exclamation"})]), t._v("\n              Info\n            ")]), t._v(" "), e("button", {
                staticClass: "btn btn-wd btn-warning btn-outline",
                attrs: {type: "button"}
            }, [e("span", {staticClass: "btn-label"}, [e("i", {staticClass: "fa fa-warning"})]), t._v("\n              Warning\n            ")]), t._v(" "), e("button", {
                staticClass: "btn btn-wd btn-default btn-outline",
                attrs: {type: "button"}
            }, [e("span", {staticClass: "btn-label"}, [e("i", {staticClass: "fa fa-arrow-left"})]), t._v("\n              Left\n            ")]), t._v(" "), e("button", {
                staticClass: "btn btn-wd btn-default btn-outline",
                attrs: {type: "button"}
            }, [t._v("\n              Right\n              "), e("span", {staticClass: "btn-label btn-label-right"}, [e("i", {staticClass: "fa fa-arrow-right"})])])])]), t._v(" "), e("div", {staticClass: "col-md-6"}, [e("div", {staticClass: "card-header"}, [e("h4", {staticClass: "card-title"}, [t._v("Sizes")])]), t._v(" "), e("div", {staticClass: "card-body"}, [e("button", {staticClass: "btn btn-lg"}, [t._v("Large")]), t._v(" "), e("button", {staticClass: "btn"}, [t._v("Default")]), t._v(" "), e("button", {staticClass: "btn btn-sm"}, [t._v("Small")]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-round btn-lg"}, [t._v("Large")]), t._v(" "), e("button", {staticClass: "btn btn-round"}, [t._v("Default")]), t._v(" "), e("button", {staticClass: "btn btn-round btn-sm"}, [t._v("Small")])])])])
        }, function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "col-md-6"}, [e("div", {staticClass: "card-header"}, [e("h4", {staticClass: "card-title"}, [t._v("Button Group")])]), t._v(" "), e("div", {staticClass: "card-body"}, [e("div", {staticClass: "btn-group"}, [e("button", {
                staticClass: "btn btn-default btn-outline",
                attrs: {type: "button"}
            }, [t._v("Left")]), t._v(" "), e("button", {
                staticClass: "btn btn-default btn-outline",
                attrs: {type: "button"}
            }, [t._v("Middle")]), t._v(" "), e("button", {
                staticClass: "btn btn-default btn-outline",
                attrs: {type: "button"}
            }, [t._v("Right")])]), t._v(" "), e("br"), e("br"), t._v(" "), e("div", {staticClass: "btn-group"}, [e("button", {
                staticClass: "btn btn-default btn-outline",
                attrs: {type: "button"}
            }, [t._v("1")]), t._v(" "), e("button", {
                staticClass: "btn btn-default btn-outline",
                attrs: {type: "button"}
            }, [t._v("2")]), t._v(" "), e("button", {
                staticClass: "btn btn-default btn-outline",
                attrs: {type: "button"}
            }, [t._v("3")]), t._v(" "), e("button", {
                staticClass: "btn btn-default btn-outline",
                attrs: {type: "button"}
            }, [t._v("4")])]), t._v(" "), e("div", {staticClass: "btn-group"}, [e("button", {
                staticClass: "btn btn-default btn-outline",
                attrs: {type: "button"}
            }, [t._v("5")]), t._v(" "), e("button", {
                staticClass: "btn btn-default btn-outline",
                attrs: {type: "button"}
            }, [t._v("6")]), t._v(" "), e("button", {
                staticClass: "btn btn-default btn-outline",
                attrs: {type: "button"}
            }, [t._v("7")])]), t._v(" "), e("div", {staticClass: "btn-group"}, [e("button", {
                staticClass: "btn btn-default btn-outline",
                attrs: {type: "button"}
            }, [t._v("8")])])])])
        }, function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "card-header"}, [e("h4", {staticClass: "card-title"}, [t._v("Pagination")])])
        }, function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "card-header"}, [e("h4", {staticClass: "card-title"}, [t._v("Social buttons")])])
        }, function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "card-body"}, [e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-4 social-buttons-demo"}, [e("h4", {staticClass: "title"}, [e("small", [t._v(" Filled ")])]), t._v(" "), e("button", {staticClass: "btn btn-social  btn-twitter"}, [e("i", {staticClass: "fa fa-twitter"}), t._v(" Connect with Twitter\n            ")]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social  btn-facebook"}, [e("i", {staticClass: "fa fa-facebook-square"}), t._v(" Share · 2.2k\n            ")]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social  btn-google"}, [e("i", {staticClass: "fa fa-google-plus-square"}), t._v(" Share on Google+\n            ")]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social  btn-linkedin"}, [e("i", {staticClass: "fa fa-linkedin-square"}), t._v(" Connect with Linkedin\n            ")]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social  btn-pinterest"}, [e("i", {staticClass: "fa fa-pinterest"}), t._v(" Pint it · 212\n            ")]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social  btn-youtube"}, [e("i", {staticClass: "fa fa-youtube-play"}), t._v(" View on Youtube\n            ")]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social  btn-tumblr"}, [e("i", {staticClass: "fa fa-tumblr-square"}), t._v(" Repost\n            ")]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social  btn-github"}, [e("i", {staticClass: "fa fa-github"}), t._v(" Connect with Github\n            ")]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social  btn-behance"}, [e("i", {staticClass: "fa fa-behance-square"}), t._v(" Follow us\n            ")]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social  btn-dribbble"}, [e("i", {staticClass: "fa fa-dribbble"}), t._v(" Find us on Dribbble\n            ")]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social  btn-reddit"}, [e("i", {staticClass: "fa fa-reddit"}), t._v(" Repost · 232\n            ")]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social  btn-stumbleupon"}, [e("i", {staticClass: "fa fa-stumbleupon"}), t._v(" View on StumbleUpon\n            ")]), t._v(" "), e("br")]), t._v(" "), e("div", {staticClass: "col-md-2 social-buttons-demo"}, [e("h4", {staticClass: "title"}, [e("small", [t._v("Light")])]), t._v(" "), e("button", {staticClass: "btn btn-social btn-round btn-twitter btn-outline"}, [e("i", {staticClass: "fa fa-twitter"})]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social btn-round btn-facebook btn-outline"}, [e("i", {staticClass: "fa fa-facebook"})]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social btn-round btn-google btn-outline"}, [e("i", {staticClass: "fa fa-google-plus"})]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social btn-round btn-linkedin btn-outline"}, [e("i", {staticClass: "fa fa-linkedin"})]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social btn-round btn-pinterest btn-outline"}, [e("i", {staticClass: "fa fa-pinterest"})]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social btn-round btn-youtube btn-outline"}, [e("i", {staticClass: "fa fa-youtube"})]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social btn-round btn-tumblr btn-outline"}, [e("i", {staticClass: "fa fa-tumblr"})]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social btn-round btn-github btn-outline"}, [e("i", {staticClass: "fa fa-github"})]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social btn-round btn-behance btn-outline"}, [e("i", {staticClass: "fa fa-behance"})]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social btn-round btn-dribbble btn-outline"}, [e("i", {staticClass: "fa fa-dribbble"})]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social btn-round btn-reddit btn-outline"}, [e("i", {staticClass: "fa fa-reddit"})]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social btn-round btn-stumbleupon btn-outline"}, [e("i", {staticClass: "fa fa-stumbleupon"})]), t._v(" "), e("br")]), t._v(" "), e("div", {staticClass: "col-md-2 social-buttons-demo"}, [e("h4", {staticClass: "title"}, [e("small", [t._v("Simple")])]), t._v(" "), e("button", {staticClass: "btn btn-social btn-link btn-twitter"}, [e("i", {staticClass: "fa fa-twitter"})]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social btn-link btn-facebook"}, [e("i", {staticClass: "fa fa-facebook-square"})]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social btn-link btn-google"}, [e("i", {staticClass: "fa fa-google-plus-square"})]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social btn-link btn-linkedin"}, [e("i", {staticClass: "fa fa-linkedin-square"})]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social btn-link btn-pinterest"}, [e("i", {staticClass: "fa fa-pinterest"})]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social btn-link btn-youtube"}, [e("i", {staticClass: "fa fa-youtube"})]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social btn-link btn-tumblr"}, [e("i", {staticClass: "fa fa-tumblr-square"})]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social btn-link btn-github"}, [e("i", {staticClass: "fa fa-github"})]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social btn-link btn-behance"}, [e("i", {staticClass: "fa fa-behance"})]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social btn-link btn-dribbble"}, [e("i", {staticClass: "fa fa-dribbble"})]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social btn-link btn-reddit"}, [e("i", {staticClass: "fa fa-reddit"})]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social btn-link btn-stumbleupon"}, [e("i", {staticClass: "fa fa-stumbleupon"})]), t._v(" "), e("br")]), t._v(" "), e("div", {staticClass: "col-md-4 social-buttons-demo"}, [e("h4", {staticClass: "title"}, [e("small", [t._v("With Text")])]), t._v(" "), e("button", {staticClass: "btn btn-social btn-link btn-twitter"}, [e("i", {staticClass: "fa fa-twitter"}), t._v(" Connect with Twitter\n            ")]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social btn-link btn-facebook"}, [e("i", {staticClass: "fa fa-facebook-square"}), t._v(" Share · 2.2k\n            ")]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social btn-link btn-google"}, [e("i", {staticClass: "fa fa-google-plus-square"}), t._v(" Share on Google+\n            ")]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social btn-link btn-linkedin"}, [e("i", {staticClass: "fa fa-linkedin-square"}), t._v(" Connect with Linkedin\n            ")]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social btn-link btn-pinterest"}, [e("i", {staticClass: "fa fa-pinterest"}), t._v(" Pint it · 212\n            ")]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social btn-link btn-youtube"}, [e("i", {staticClass: "fa fa-youtube-play"}), t._v(" View on Youtube\n            ")]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social btn-link btn-tumblr"}, [e("i", {staticClass: "fa fa-tumblr-square"}), t._v(" Repost\n            ")]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social btn-link btn-github"}, [e("i", {staticClass: "fa fa-github"}), t._v(" Connect with Github\n            ")]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social btn-link btn-behance"}, [e("i", {staticClass: "fa fa-behance-square"}), t._v(" Follow us\n            ")]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social btn-link btn-dribbble"}, [e("i", {staticClass: "fa fa-dribbble"}), t._v(" Find us on Dribbble\n            ")]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social btn-link btn-reddit"}, [e("i", {staticClass: "fa fa-reddit"}), t._v(" Repost · 232\n            ")]), t._v(" "), e("br"), t._v(" "), e("button", {staticClass: "btn btn-social btn-link btn-stumbleupon"}, [e("i", {staticClass: "fa fa-stumbleupon"}), t._v(" View on StumbleUpon\n            ")]), t._v(" "), e("br")])])])
        }], n = {render: s, staticRenderFns: i};
        a.a = n
    }, "L1E+": function (t, a, e) {
        "use strict";
        var s = e("bOdI"), i = e.n(s), n = e("Zcwg"), l = e.n(n);
        a.a = {
            components: i()({}, l.a.name, l.a),
            props: {title: {type: String, default: "Tania Andrew"}},
            data: function () {
                return {isClosed: !0}
            },
            methods: {
                toggleMenu: function () {
                    this.isClosed = !this.isClosed
                }
            }
        }
    }, LQcq: function (t, a, e) {
        "use strict";
        function s(t) {
            e("yXlY")
        }

        var i = e("xNhz"), n = e("3S1b"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, "M/DR": function (t, a, e) {
        "use strict";
        function s(t) {
            e("tkw7")
        }

        var i = e("2m4a"), n = e("/eqb"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, M8qM: function (t, a, e) {
        "use strict";
        var s = e("I4Nt");
        a.a = {components: {DropDown: s.a}}
    }, M93x: function (t, a, e) {
        "use strict";
        var s = e("xJD8"), i = e("D/H3"), n = e("VU/8"), l = n(s.a, i.a, null, null, null);
        a.a = l.exports
    }, MTzt: function (t, a) {
    }, MU8E: function (t, a, e) {
        "use strict";
        a.a = {
            inheritAttrs: !1,
            name: "fg-input",
            props: {
                label: String,
                error: String,
                labelClasses: String,
                inputClasses: String,
                value: [String, Number],
                addonRightIcon: String,
                addonLeftIcon: String
            },
            computed: {
                hasIcon: function () {
                    var t = this.$slots, a = t.addonRight, e = t.addonLeft;
                    return void 0 !== a || void 0 !== e || void 0 !== this.addonRightIcon || void 0 !== this.addonLeftIcon
                }
            }
        }
    }, MWye: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "content"}, [e("div", {staticClass: "container-fluid"}, [e("transition", {
                attrs: {
                    name: "fade",
                    mode: "out-in"
                }
            }, [e("router-view")], 1)], 1)])
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, MaUU: function (t, a) {
    }, Mawy: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {
                staticClass: "wrapper",
                class: {"nav-open": t.$sidebar.showSidebar}
            }, [e("notifications"), t._v(" "), e("side-bar", {
                attrs: {
                    "background-color": t.sidebarBackground,
                    "background-image": t.sidebarBackgroundImage
                }, scopedSlots: t._u([{
                    key: "links", fn: function (a) {
                        return [e("sidebar-item", {
                            attrs: {
                                link: {
                                    name: "Dashboard",
                                    icon: "nc-icon nc-chart-pie-35",
                                    path: "/admin/overview"
                                }
                            }
                        }), t._v(" "), e("sidebar-item", {
                            attrs: {
                                link: {
                                    name: "Components",
                                    icon: "nc-icon nc-app"
                                }
                            }
                        }, [e("sidebar-item", {
                            attrs: {
                                link: {
                                    name: "Buttons",
                                    path: "/components/buttons"
                                }
                            }
                        }), t._v(" "), e("sidebar-item", {
                            attrs: {
                                link: {
                                    name: "Grid System",
                                    path: "/components/grid-system"
                                }
                            }
                        }), t._v(" "), e("sidebar-item", {
                            attrs: {
                                link: {
                                    name: "Panels",
                                    path: "/components/panels"
                                }
                            }
                        }), t._v(" "), e("sidebar-item", {
                            attrs: {
                                link: {
                                    name: "Sweet Alert",
                                    path: "/components/sweet-alert"
                                }
                            }
                        }), t._v(" "), e("sidebar-item", {
                            attrs: {
                                link: {
                                    name: "Notifications",
                                    path: "/components/notifications"
                                }
                            }
                        }), t._v(" "), e("sidebar-item", {
                            attrs: {
                                link: {
                                    name: "Icons",
                                    path: "/components/icons"
                                }
                            }
                        }), t._v(" "), e("sidebar-item", {
                            attrs: {
                                link: {
                                    name: "Typography",
                                    path: "/components/typography"
                                }
                            }
                        })], 1), t._v(" "), e("sidebar-item", {
                            attrs: {
                                link: {
                                    name: "Forms",
                                    icon: "nc-icon nc-notes"
                                }
                            }
                        }, [e("sidebar-item", {
                            attrs: {
                                link: {
                                    name: "Regular Forms",
                                    path: "/forms/regular"
                                }
                            }
                        }), t._v(" "), e("sidebar-item", {
                            attrs: {
                                link: {
                                    name: "Extended Forms",
                                    path: "/forms/extended"
                                }
                            }
                        }), t._v(" "), e("sidebar-item", {
                            attrs: {
                                link: {
                                    name: "Validation Forms",
                                    path: "/forms/validation"
                                }
                            }
                        }), t._v(" "), e("sidebar-item", {
                            attrs: {
                                link: {
                                    name: "Wizard",
                                    path: "/forms/wizard"
                                }
                            }
                        })], 1), t._v(" "), e("sidebar-item", {
                            attrs: {
                                link: {
                                    name: "Tables",
                                    icon: "nc-icon nc-paper-2"
                                }
                            }
                        }, [e("sidebar-item", {
                            attrs: {
                                link: {
                                    name: "Regular Tables",
                                    path: "/table-list/regular"
                                }
                            }
                        }), t._v(" "), e("sidebar-item", {
                            attrs: {
                                link: {
                                    name: "Extended Tables",
                                    path: "/table-list/extended"
                                }
                            }
                        }), t._v(" "), e("sidebar-item", {
                            attrs: {
                                link: {
                                    name: "Paginated Tables",
                                    path: "/table-list/paginated"
                                }
                            }
                        })], 1), t._v(" "), e("sidebar-item", {
                            attrs: {
                                link: {
                                    name: "Maps",
                                    icon: "nc-icon nc-pin-3"
                                }
                            }
                        }, [e("sidebar-item", {
                            attrs: {
                                link: {
                                    name: "Google Maps",
                                    path: "/maps/google"
                                }
                            }
                        }), t._v(" "), e("sidebar-item", {
                            attrs: {
                                link: {
                                    name: "Full Screen Maps",
                                    path: "/maps/full-screen"
                                }
                            }
                        }), t._v(" "), e("sidebar-item", {
                            attrs: {
                                link: {
                                    name: "Vector Maps",
                                    path: "/maps/vector-map"
                                }
                            }
                        })], 1), t._v(" "), e("sidebar-item", {
                            attrs: {
                                link: {
                                    name: "Charts",
                                    icon: "nc-icon nc-chart-bar-32",
                                    path: "/admin/charts"
                                }
                            }
                        }), t._v(" "), e("sidebar-item", {
                            attrs: {
                                link: {
                                    name: "Calendar",
                                    icon: "nc-icon nc-single-copy-04",
                                    path: "/admin/calendar"
                                }
                            }
                        }), t._v(" "), e("sidebar-item", {
                            attrs: {
                                link: {
                                    name: "Pages",
                                    icon: "nc-icon nc-puzzle-10"
                                }
                            }
                        }, [e("sidebar-item", {
                            attrs: {
                                link: {
                                    name: "User Page",
                                    path: "/pages/user"
                                }
                            }
                        }), t._v(" "), e("sidebar-item", {
                            attrs: {
                                link: {
                                    name: "Register Page",
                                    path: "/login"
                                }
                            }
                        }), t._v(" "), e("sidebar-item", {
                            attrs: {
                                link: {
                                    name: "Register",
                                    path: "/register"
                                }
                            }
                        }), t._v(" "), e("sidebar-item", {
                            attrs: {
                                link: {
                                    name: "Lock Screen Page",
                                    path: "/lock"
                                }
                            }
                        })], 1)]
                    }
                }])
            }, [e("user-menu"), t._v(" "), e("mobile-menu")], 1), t._v(" "), e("div", {staticClass: "main-panel"}, [e("top-navbar", {class: {"navbar-fixed": t.fixedNavbar}}), t._v(" "), e("sidebar-share", {
                attrs: {
                    color: t.sidebarBackground,
                    backgroundImageEnabled: t.sidebarBackgroundImageEnabled,
                    "fixed-navbar": t.fixedNavbar,
                    sidebarMini: t.sidebarMini,
                    image: t.sidebarBackgroundImage
                }, on: {
                    "update:color": function (a) {
                        t.sidebarBackground = a
                    }, "update:backgroundImageEnabled": function (a) {
                        t.sidebarBackgroundImageEnabled = a
                    }, "update:fixedNavbar": function (a) {
                        t.fixedNavbar = a
                    }, "update:sidebarMini": function (a) {
                        t.sidebarMini = a
                    }, "update:image": function (a) {
                        t.sidebarBackgroundImage = a
                    }
                }
            }), t._v(" "), e("dashboard-content", {
                nativeOn: {
                    click: function (a) {
                        t.toggleSidebar(a)
                    }
                }
            }), t._v(" "), e("content-footer")], 1)], 1)
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, NHnr: function (t, a, e) {
        "use strict";
        Object.defineProperty(a, "__esModule", {value: !0});
        var s = e("I3G/"), i = e.n(s), n = e("/ocq"), l = e("28ys"), o = e("M93x"), c = e("T1vP"), r = e("yv97");
        e.n(r);
        i.a.use(n.a), i.a.use(l.a);
        var d = new n.a({routes: c.a, linkActiveClass: "active"});
        new i.a({
            el: "#app", render: function (t) {
                return t(o.a)
            }, router: d
        })
    }, NLb5: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "row"}, [e("div", {staticClass: "col-lg-8 col-md-7"}, [e("edit-profile-form")], 1), t._v(" "), e("div", {staticClass: "col-lg-4 col-md-5"}, [e("user-card")], 1)])
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, NaN1: function (t, a) {
    }, Nood: function (t, a, e) {
        "use strict";
        function s(t) {
            e("wwrw")
        }

        var i = e("M8qM"), n = e("r0Vj"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, OKre: function (t, a, e) {
        "use strict";
        function s(t) {
            e("qWtj")
        }

        var i = e("+p4O"), n = e("ITEK"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, Oj8R: function (t, a, e) {
        "use strict";
        a.a = {
            data: function () {
                return {type: ["", "info", "success", "warning", "danger"], notifications: {topCenter: !1}}
            }, methods: {
                notifyVue: function (t, a) {
                    var e = Math.floor(4 * Math.random() + 1);
                    this.$notify({
                        component: {template: "<span>Welcome to <b>Paper Dashboard</b> - a beautiful freebie for every web developer.</span>"},
                        icon: "nc-icon nc-app",
                        horizontalAlign: a,
                        verticalAlign: t,
                        type: this.type[e]
                    })
                }
            }
        }
    }, OnT6: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", [t._m(0), t._v(" "), e("card", [e("template", {slot: "header"}, [e("h4", {staticClass: "card-title"}, [t._v("Notifications")]), t._v(" "), e("p", {staticClass: "card-category"}, [t._v("Vue NotifyJs")])]), t._v(" "), e("div", [e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-6"}, [e("h5", [t._v("Notifications Style")]), t._v(" "), e("div", {staticClass: "alert alert-info"}, [e("span", [t._v("This is a plain notification")])]), t._v(" "), e("div", {staticClass: "alert alert-info"}, [e("button", {
                staticClass: "close",
                attrs: {type: "button"}
            }, [t._v("×")]), t._v(" "), e("span", [t._v("This is a notification with close button.")])]), t._v(" "), e("div", {staticClass: "alert alert-info alert-with-icon"}, [e("button", {
                staticClass: "close",
                attrs: {type: "button"}
            }, [t._v("×")]), t._v(" "), e("span", {
                staticClass: "nc-icon nc-bell-55",
                attrs: {"data-notify": "icon"}
            }), t._v(" "), e("span", {attrs: {"data-notify": "message"}}, [t._v("This is a notification with close button and icon.")])]), t._v(" "), e("div", {staticClass: "alert alert-info alert-with-icon"}, [e("button", {
                staticClass: "close",
                attrs: {type: "button"}
            }, [t._v("×")]), t._v(" "), e("span", {
                staticClass: "nc-icon nc-bell-55",
                attrs: {"data-notify": "icon"}
            }), t._v(" "), e("span", {attrs: {"data-notify": "message"}}, [t._v("This is a notification with close button and icon and have many lines.\n              You can see that the icon and the close button are always vertically aligned.\n              This is a beautiful notification. So you don't have to worry about the style.")])])]), t._v(" "), e("div", {staticClass: "col-md-6"}, [e("h5", [t._v("Notification states")]), t._v(" "), e("div", {staticClass: "alert alert-info"}, [e("button", {
                staticClass: "close",
                attrs: {type: "button"}
            }, [t._v("×")]), t._v(" "), e("span", [e("b", [t._v(" Info - ")]), t._v(' This is a regular notification made with ".alert-info"')])]), t._v(" "), e("div", {staticClass: "alert alert-success"}, [e("button", {
                staticClass: "close",
                attrs: {type: "button"}
            }, [t._v("×")]), t._v(" "), e("span", [e("b", [t._v(" Success - ")]), t._v(' This is a regular notification made with ".alert-success"')])]), t._v(" "), e("div", {staticClass: "alert alert-warning"}, [e("button", {
                staticClass: "close",
                attrs: {type: "button"}
            }, [t._v("×")]), t._v(" "), e("span", [e("b", [t._v(" Warning - ")]), t._v(' This is a regular notification made with ".alert-warning"')])]), t._v(" "), e("div", {staticClass: "alert alert-danger"}, [e("button", {
                staticClass: "close",
                attrs: {type: "button"}
            }, [t._v("×")]), t._v(" "), e("span", [e("b", [t._v(" Danger - ")]), t._v(' This is a regular notification made with ".alert-danger"')])])])]), t._v(" "), e("br"), t._v(" "), e("br"), t._v(" "), e("div", {staticClass: "places-buttons"}, [e("div", {staticClass: "row justify-content-center"}, [e("div", {staticClass: "col-6 text-center"}, [e("h5", [t._v("Notifications Places\n              "), e("p", {staticClass: "category"}, [t._v("Click to view notifications")])])])]), t._v(" "), e("div", {staticClass: "row justify-content-center"}, [e("div", {staticClass: "col-md-3"}, [e("button", {
                staticClass: "btn btn-default btn-block",
                on: {
                    click: function (a) {
                        t.notifyVue("top", "left")
                    }
                }
            }, [t._v("Top Left")])]), t._v(" "), e("div", {staticClass: "col-md-3"}, [e("button", {
                staticClass: "btn btn-default btn-block",
                on: {
                    click: function (a) {
                        t.notifyVue("top", "center")
                    }
                }
            }, [t._v("Top Center")])]), t._v(" "), e("div", {staticClass: "col-md-3"}, [e("button", {
                staticClass: "btn btn-default btn-block",
                on: {
                    click: function (a) {
                        t.notifyVue("top", "right")
                    }
                }
            }, [t._v("Top Right")])])]), t._v(" "), e("div", {staticClass: "row justify-content-center"}, [e("div", {staticClass: "col-md-3"}, [e("button", {
                staticClass: "btn btn-default btn-block",
                on: {
                    click: function (a) {
                        t.notifyVue("bottom", "left")
                    }
                }
            }, [t._v("Bottom Left")])]), t._v(" "), e("div", {staticClass: "col-md-3"}, [e("button", {
                staticClass: "btn btn-default btn-block",
                on: {
                    click: function (a) {
                        t.notifyVue("bottom", "center")
                    }
                }
            }, [t._v("Bottom Center")])]), t._v(" "), e("div", {staticClass: "col-md-3"}, [e("button", {
                staticClass: "btn btn-default btn-block",
                on: {
                    click: function (a) {
                        t.notifyVue("bottom", "right")
                    }
                }
            }, [t._v("Bottom Right")])])])])])], 2)], 1)
        }, i = [function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("p", {staticClass: "category"}, [t._v("Easy and accessible notifications everywhere in your app. Handcrafted by\n    "), e("a", {
                attrs: {
                    target: "_blank",
                    rel: "noopener",
                    href: "https://github.com/cristijora"
                }
            }, [t._v("Cristi Jora")]), t._v(".\n    Please check out the "), e("a", {
                attrs: {
                    href: "https://github.com/cristijora/vue-notifyjs",
                    target: "_blank",
                    rel: "noopener"
                }
            }, [t._v("github repository")])])
        }], n = {render: s, staticRenderFns: i};
        a.a = n
    }, "P+FU": function (t, a) {
    }, Q9KK: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e(t.tag, {
                directives: [{
                    name: "click-outside",
                    rawName: "v-click-outside",
                    value: t.closeDropDown,
                    expression: "closeDropDown"
                }],
                tag: "component",
                staticClass: "dropdown nav-item",
                class: [{show: t.isOpen}],
                attrs: {"aria-haspopup": "true", "aria-expanded": t.isOpen},
                on: {click: t.toggleDropDown}
            }, [e("a", {
                staticClass: "dropdown-toggle nav-link",
                class: {"hide-arrow": t.hideArrow},
                attrs: {"data-toggle": "dropdown"}
            }, [t._t("title", [e("i", {class: t.icon}), t._v(" "), e("span", {staticClass: "no-icon"}, [t._v(t._s(t.title))]), t._v(" "), e("b", {staticClass: "caret"})])], 2), t._v(" "), e("ul", {
                staticClass: "dropdown-menu",
                class: [{"dropdown-menu-right": "right" === t.position}, {show: t.isOpen}]
            }, [t._t("default")], 2)])
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, QbIq: function (t, a) {
    }, QtY2: function (t, a, e) {
        "use strict";
        a.a = {
            name: "l-checkbox",
            model: {prop: "checked"},
            props: {checked: [Array, Boolean], disabled: [Boolean, String], inline: Boolean},
            data: function () {
                return {cbId: ""}
            },
            computed: {
                model: {
                    get: function () {
                        return this.checked
                    }, set: function (t) {
                        this.$emit("input", t)
                    }
                }, inlineClass: function () {
                    if (this.inline)return "checkbox-inline"
                }
            },
            created: function () {
                this.cbId = Math.random().toString(16).slice(2)
            }
        }
    }, "R/k4": function (t, a, e) {
        "use strict";
        a.a = {}
    }, "RI/Z": function (t, a, e) {
        "use strict";
        function s(t) {
            e("Wrj4")
        }

        var i = e("R/k4"), n = e("cZr/"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, ROLa: function (t, a, e) {
        "use strict";
        function s(t) {
            e("m4U0")
        }

        var i = e("IUnw"), n = e("dGjt"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, RZL0: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("form", {staticClass: "form-horizontal"}, [e("card", [e("div", {
                attrs: {slot: "header"},
                slot: "header"
            }, [e("h4", {staticClass: "card-title"}, [t._v("\n        Register Form\n      ")])]), t._v(" "), e("div", [e("fg-input", {
                directives: [{
                    name: "validate",
                    rawName: "v-validate",
                    value: t.modelValidations.requiredText,
                    expression: "modelValidations.requiredText"
                }],
                attrs: {name: "requiredText", label: "Required Text", error: t.getError("requiredText")},
                model: {
                    value: t.model.requiredText, callback: function (a) {
                        t.$set(t.model, "requiredText", a)
                    }, expression: "model.requiredText"
                }
            }, [e("div", {
                attrs: {slot: "infoBlock"},
                slot: "infoBlock"
            }, [e("code", [t._v("required:true")])])]), t._v(" "), e("fg-input", {
                directives: [{
                    name: "validate",
                    rawName: "v-validate",
                    value: t.modelValidations.email,
                    expression: "modelValidations.email"
                }],
                attrs: {name: "email", label: "Email", error: t.getError("email")},
                model: {
                    value: t.model.email, callback: function (a) {
                        t.$set(t.model, "email", a)
                    }, expression: "model.email"
                }
            }, [e("div", {
                attrs: {slot: "infoBlock"},
                slot: "infoBlock"
            }, [e("code", [t._v("email:true")])])]), t._v(" "), e("fg-input", {
                directives: [{
                    name: "validate",
                    rawName: "v-validate",
                    value: t.modelValidations.number,
                    expression: "modelValidations.number"
                }],
                attrs: {name: "number", type: "number", label: "Number", error: t.getError("number")},
                model: {
                    value: t.model.number, callback: function (a) {
                        t.$set(t.model, "number", a)
                    }, expression: "model.number"
                }
            }, [e("div", {
                attrs: {slot: "infoBlock"},
                slot: "infoBlock"
            }, [e("code", [t._v("number:true")])])]), t._v(" "), e("fg-input", {
                directives: [{
                    name: "validate",
                    rawName: "v-validate",
                    value: t.modelValidations.url,
                    expression: "modelValidations.url"
                }],
                attrs: {name: "url", label: "Url", error: t.getError("url")},
                model: {
                    value: t.model.url, callback: function (a) {
                        t.$set(t.model, "url", a)
                    }, expression: "model.url"
                }
            }, [e("div", {
                attrs: {slot: "infoBlock"},
                slot: "infoBlock"
            }, [e("code", [t._v("url:true")])])]), t._v(" "), e("fg-input", {
                directives: [{
                    name: "validate",
                    rawName: "v-validate",
                    value: t.modelValidations.idSource,
                    expression: "modelValidations.idSource"
                }],
                attrs: {name: "idSource", label: "Equal To", placeholder: "idSource", error: t.getError("idSource")},
                model: {
                    value: t.model.idSource, callback: function (a) {
                        t.$set(t.model, "idSource", a)
                    }, expression: "model.idSource"
                }
            }), t._v(" "), e("fg-input", {
                directives: [{
                    name: "validate",
                    rawName: "v-validate",
                    value: t.modelValidations.idDestination,
                    expression: "modelValidations.idDestination"
                }],
                attrs: {
                    name: "idDestination",
                    label: "Equal To",
                    placeholder: "#idDestination",
                    error: t.getError("idDestination")
                },
                model: {
                    value: t.model.idDestination, callback: function (a) {
                        t.$set(t.model, "idDestination", a)
                    }, expression: "model.idDestination"
                }
            }, [e("div", {
                attrs: {slot: "infoBlock"},
                slot: "infoBlock"
            }, [e("code", [t._v("confirmed: 'idSource'")])])])], 1), t._v(" "), e("div", {staticClass: "text-center"}, [e("button", {
                staticClass: "btn btn-fill btn-info btn-wd",
                attrs: {type: "submit"},
                on: {
                    click: function (a) {
                        a.preventDefault(), t.validate(a)
                    }
                }
            }, [t._v("Validate inputs")])])])], 1)
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, Rc61: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "row"}, [t._m(0), t._v(" "), e("div", {staticClass: "col-12"}, [e("card", {attrs: {title: "Paginated tables"}}, [e("div", [e("div", {staticClass: "col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"}, [e("el-select", {
                staticClass: "select-default mb-3",
                staticStyle: {width: "200px"},
                attrs: {placeholder: "Per page"},
                model: {
                    value: t.pagination.perPage, callback: function (a) {
                        t.$set(t.pagination, "perPage", a)
                    }, expression: "pagination.perPage"
                }
            }, t._l(t.pagination.perPageOptions, function (t) {
                return e("el-option", {key: t, staticClass: "select-default", attrs: {label: t, value: t}})
            })), t._v(" "), e("el-input", {
                staticClass: "mb-3",
                staticStyle: {width: "200px"},
                attrs: {type: "search", placeholder: "Search records", "aria-controls": "datatables"},
                model: {
                    value: t.searchQuery, callback: function (a) {
                        t.searchQuery = a
                    }, expression: "searchQuery"
                }
            })], 1), t._v(" "), e("div", {staticClass: "col-sm-12"}, [e("el-table", {
                staticStyle: {width: "100%"},
                attrs: {stripe: "", data: t.queriedData, border: ""}
            }, [t._l(t.tableColumns, function (t) {
                return e("el-table-column", {
                    key: t.label,
                    attrs: {"min-width": t.minWidth, prop: t.prop, label: t.label}
                })
            }), t._v(" "), e("el-table-column", {
                attrs: {"min-width": 120, fixed: "right", label: "Actions"},
                scopedSlots: t._u([{
                    key: "default", fn: function (a) {
                        return [e("a", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip.top-center",
                                value: "Like",
                                expression: "'Like'",
                                modifiers: {"top-center": !0}
                            }], staticClass: "btn-info btn-simple btn-link", on: {
                                click: function (e) {
                                    t.handleLike(a.$index, a.row)
                                }
                            }
                        }, [e("i", {staticClass: "fa fa-heart"})]), t._v(" "), e("a", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip.top-center",
                                value: "Edit",
                                expression: "'Edit'",
                                modifiers: {"top-center": !0}
                            }], staticClass: "btn-warning btn-simple btn-link", on: {
                                click: function (e) {
                                    t.handleEdit(a.$index, a.row)
                                }
                            }
                        }, [e("i", {staticClass: "fa fa-edit"})]), t._v(" "), e("a", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip.top-center",
                                value: "Delete",
                                expression: "'Delete'",
                                modifiers: {"top-center": !0}
                            }], staticClass: "btn-danger btn-simple btn-link", on: {
                                click: function (e) {
                                    t.handleDelete(a.$index, a.row)
                                }
                            }
                        }, [e("i", {staticClass: "fa fa-times"})])]
                    }
                }])
            })], 2)], 1)]), t._v(" "), e("div", {
                staticClass: "col-12 d-flex justify-content-center justify-content-sm-between flex-wrap",
                attrs: {slot: "footer"},
                slot: "footer"
            }, [e("div", {}, [e("p", {staticClass: "card-category"}, [t._v("Showing " + t._s(t.from + 1) + " to " + t._s(t.to) + " of " + t._s(t.total) + " entries")])]), t._v(" "), e("l-pagination", {
                staticClass: "pagination-no-border",
                attrs: {"per-page": t.pagination.perPage, total: t.pagination.total},
                model: {
                    value: t.pagination.currentPage, callback: function (a) {
                        t.$set(t.pagination, "currentPage", a)
                    }, expression: "pagination.currentPage"
                }
            })], 1)])], 1)])
        }, i = [function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "col-md-12"}, [e("h4", {staticClass: "title"}, [t._v("Custom table with pagination")]), t._v(" "), e("p", {staticClass: "category"}, [t._v("\n      We combine "), e("a", {
                attrs: {
                    href: "http://element.eleme.io/#/en-US/component/quickstart",
                    target: "_blank",
                    rel: "noopener"
                }
            }, [t._v("Element-UI")]), t._v("\n      table functionalities together with a custom pagination component\n      which should provide a very good starting point to integrate tables in your application.\n      Check out more functionalities at "), e("a", {
                attrs: {
                    href: "http://element.eleme.io/#/en-US/component/table",
                    target: "_blank"
                }
            }, [t._v("Element-UI table documentation")]), t._v(".\n    ")])])
        }], n = {render: s, staticRenderFns: i};
        a.a = n
    }, RxU9: function (t, a, e) {
        "use strict";
        var s = e("bGai"), i = e("rrf0");
        a.a = {
            components: {FadeRenderTransition: s.f, AuthLayout: i.a}, methods: {
                toggleNavbar: function () {
                    document.body.classList.toggle("nav-open")
                }, closeMenu: function () {
                    document.body.classList.remove("nav-open"), document.body.classList.remove("off-canvas-sidebar")
                }
            }, beforeDestroy: function () {
                this.closeMenu()
            }
        }
    }, S1E0: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement;
            return (t._self._c || a)("transition", {
                attrs: {name: "fade", appear: ""},
                on: {"before-appear": t.beforeAppear, appear: t.onAppear, "after-appear": t.afterAppear}
            }, [t._t("default")], 2)
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, SJjg: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "card chart-card"}, [t.$slots.header ? e("div", {staticClass: "card-header"}, [t._t("header")], 2) : t._e(), t._v(" "), e("div", {staticClass: "card-body"}, [e("div", {
                staticClass: "ct-chart",
                attrs: {id: t.chartId}
            })]), t._v(" "), t.$slots.footer ? e("div", {staticClass: "card-footer"}, [t._t("footer")], 2) : t._e()])
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, Sczw: function (t, a) {
    }, SsEg: function (t, a) {
    }, T1vP: function (t, a, e) {
        "use strict";
        var s = e("22yQ"), i = e("tnjr"), n = e("zmgK"), l = e("xMts"), o = e("I2Jn"), c = e("8YN3"), r = e("jqiq"),
            d = e("sJNR"), u = e("p25l"), v = e("UyMj"), m = e("LQcq"), f = e("ROLa"), p = e("A3QO"), b = e("ASg2"),
            h = e("wKHZ"), _ = e("I66h"), g = e("w1A5"), C = e("uBlW"), y = e("t/P/"), w = e("nWyo"), k = e("TMAg"),
            x = e("kvNc"), S = e("DAYY"), T = e("T3Xv"), E = e("EtDv"), $ = e("b5tY"), L = e("1XJu"), M = e("dLNi"),
            I = {
                path: "/components",
                component: s.a,
                redirect: "/components/buttons",
                children: [{path: "buttons", name: "Buttons", component: v.a}, {
                    path: "grid-system",
                    name: "Grid System",
                    component: m.a
                }, {path: "panels", name: "Panels", component: f.a}, {
                    path: "sweet-alert",
                    name: "Sweet Alert",
                    component: p.a
                }, {path: "notifications", name: "Notifications", component: b.a}, {
                    path: "icons",
                    name: "Icons",
                    component: h.a
                }, {path: "typography", name: "Typography", component: _.a}]
            }, V = {
                path: "/forms",
                component: s.a,
                redirect: "/forms/regular",
                children: [{path: "regular", name: "Regular Forms", component: g.a}, {
                    path: "extended",
                    name: "Extended Forms",
                    component: C.a
                }, {path: "validation", name: "Validation Forms", component: y.a}, {
                    path: "wizard",
                    name: "Wizard",
                    component: w.a
                }]
            }, D = {
                path: "/table-list",
                component: s.a,
                redirect: "/table-list/regular",
                children: [{path: "regular", name: "Regular Tables", component: k.a}, {
                    path: "extended",
                    name: "Extended Tables",
                    component: x.a
                }, {path: "paginated", name: "Paginated Tables", component: S.a}]
            }, P = {
                path: "/maps",
                component: s.a,
                redirect: "/maps/google",
                children: [{path: "google", name: "Google Maps", component: T.a}, {
                    path: "full-screen",
                    name: "Full Screen Map",
                    component: E.a
                }, {path: "vector-map", name: "Vector Map", component: $.a}]
            }, B = {
                path: "/pages",
                component: s.a,
                redirect: "/pages/user",
                children: [{path: "user", name: "User Page", component: o.a}, {
                    path: "timeline",
                    name: "Timeline Page",
                    component: c.a
                }]
            }, F = {path: "/login", name: "Login", component: r.a},
            N = {path: "/register", name: "Register", component: d.a},
            A = {path: "/lock", name: "Lock", component: u.a},
            R = [{path: "/", redirect: "/admin/overview"}, I, V, D, P, B, F, N, A, {
                path: "/admin",
                component: s.a,
                redirect: "/admin/overview",
                children: [{path: "overview", name: "Overview", component: n.a}, {
                    path: "stats",
                    name: "Stats",
                    component: l.a
                }, {path: "calendar", name: "Calendar", component: L.a}, {
                    path: "charts",
                    name: "Charts",
                    component: M.a
                }]
            }, {path: "*", component: i.a}];
        a.a = R
    }, T3Xv: function (t, a, e) {
        "use strict";
        function s(t) {
            e("ncZB")
        }

        var i = e("YHgN"), n = e("xEwP"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, TMAg: function (t, a, e) {
        "use strict";
        function s(t) {
            e("+M3v")
        }

        var i = e("qO4o"), n = e("b+bS"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, TW0o: function (t, a, e) {
        "use strict";
        function s(t) {
            e("3dcv")
        }

        var i = e("h+xf"), n = e("F+qK"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, Tgvs: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", [e("h5", {staticClass: "text-center"}, [t._v("Please tell us more about yourself.")]), t._v(" "), e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-6"}, [e("fg-input", {
                directives: [{
                    name: "validate",
                    rawName: "v-validate",
                    value: t.modelValidations.firstName,
                    expression: "modelValidations.firstName"
                }],
                attrs: {
                    label: "First Name",
                    name: "first name",
                    error: t.getError("first name"),
                    placeholder: "ex: Mike"
                },
                model: {
                    value: t.model.firstName, callback: function (a) {
                        t.$set(t.model, "firstName", a)
                    }, expression: "model.firstName"
                }
            })], 1), t._v(" "), e("div", {staticClass: "col-md-6"}, [e("fg-input", {
                directives: [{
                    name: "validate",
                    rawName: "v-validate",
                    value: t.modelValidations.lastName,
                    expression: "modelValidations.lastName"
                }],
                attrs: {
                    label: "Last Nmae",
                    name: "last name",
                    error: t.getError("last name"),
                    placeholder: "ex: Andrew"
                },
                model: {
                    value: t.model.lastName, callback: function (a) {
                        t.$set(t.model, "lastName", a)
                    }, expression: "model.lastName"
                }
            })], 1)]), t._v(" "), e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-12"}, [e("fg-input", {
                directives: [{
                    name: "validate",
                    rawName: "v-validate",
                    value: t.modelValidations.email,
                    expression: "modelValidations.email"
                }],
                attrs: {label: "Email", placeholder: "Email", type: "email", name: "email", error: t.getError("email")},
                model: {
                    value: t.model.email, callback: function (a) {
                        t.$set(t.model, "email", a)
                    }, expression: "model.email"
                }
            })], 1)])])
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, UeWq: function (t, a, e) {
        "use strict";
        function s(t) {
            e("lp9q")
        }

        var i = e("A+X0"), n = e("1DVk"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, UhAS: function (t, a) {
    }, UyMj: function (t, a, e) {
        "use strict";
        function s(t) {
            e("UhAS")
        }

        var i = e("oxVq"), n = e("KxZU"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, "V/dr": function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-6"}, [e("register-form", {on: {"on-submit": t.onRegisterSubmit}})], 1), t._v(" "), e("div", {staticClass: "col-md-6"}, [e("login-form", {on: {"on-submit": t.onLoginSubmit}})], 1), t._v(" "), e("div", {staticClass: "col-md-12"}, [e("type-validation-form", {on: {"on-submit": t.onTypeValidationSubmit}})], 1)])
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, V0EP: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("nav", {
                attrs: {
                    "aria-label": "breadcrumb",
                    role: "navigation"
                }
            }, [e("ol", {staticClass: "breadcrumb"}, [t._t("default")], 2)])
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, V4gk: function (t, a, e) {
        "use strict";
        a.a = {
            data: function () {
                return {
                    model: {email: "", password: ""},
                    modelValidations: {email: {required: !0, email: !0}, password: {required: !0, min: 5}}
                }
            }, methods: {
                getError: function (t) {
                    return this.errors.first(t)
                }, validate: function () {
                    var t = this;
                    this.$validator.validateAll().then(function (a) {
                        t.$emit("on-submit", t.registerForm, a)
                    })
                }
            }
        }
    }, VpyM: function (t, a) {
    }, W2k2: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "container-fluid"}, [e("breadcrumb", [e("breadcrumb-item", [e("router-link", {attrs: {to: "/"}}, [t._v("Breadcrumb 1")])], 1), t._v(" "), e("breadcrumb-item", [e("router-link", {attrs: {to: "/"}}, [t._v("Breadcrumb 2")])], 1), t._v(" "), e("breadcrumb-item", {attrs: {active: ""}}, [t._v("\n        Current page\n      ")])], 1), t._v(" "), t._m(0)], 1)
        }, i = [function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-12"}, [e("div", {staticClass: "card"}, [e("div", {staticClass: "card-header"}, [e("h4", {staticClass: "card-title"}, [t._v("Light Bootstrap Table Heading")]), t._v(" "), e("p", {staticClass: "card-category"}, [t._v("Created using Roboto Font Family")])]), t._v(" "), e("div", {staticClass: "card-body"}, [e("div", {staticClass: "typo-line"}, [e("h1", [e("p", {staticClass: "category"}, [t._v("Header 1")]), t._v("Light Bootstrap Table Heading ")])]), t._v(" "), e("div", {staticClass: "typo-line"}, [e("h2", [e("p", {staticClass: "category"}, [t._v("Header 2")]), t._v("Light Bootstrap Table Heading")])]), t._v(" "), e("div", {staticClass: "typo-line"}, [e("h3", [e("p", {staticClass: "category"}, [t._v("Header 3")]), t._v("Light Bootstrap Table Heading")])]), t._v(" "), e("div", {staticClass: "typo-line"}, [e("h4", [e("p", {staticClass: "category"}, [t._v("Header 4")]), t._v("Light Bootstrap Table Heading")])]), t._v(" "), e("div", {staticClass: "typo-line"}, [e("h5", [e("p", {staticClass: "category"}, [t._v("Header 5")]), t._v("Light Bootstrap Table Heading")])]), t._v(" "), e("div", {staticClass: "typo-line"}, [e("h6", [e("p", {staticClass: "category"}, [t._v("Header 6")]), t._v("Light Bootstrap Table Heading")])]), t._v(" "), e("div", {staticClass: "typo-line"}, [e("p", [e("span", {staticClass: "category"}, [t._v("Paragraph")]), t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.")])]), t._v(" "), e("div", {staticClass: "typo-line"}, [e("p", {staticClass: "category"}, [t._v("Quote")]), t._v(" "), e("blockquote", [e("p", [t._v("\n                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.\n                ")]), t._v(" "), e("small", [t._v("\n                  Steve Jobs, CEO Apple\n                ")])])]), t._v(" "), e("div", {staticClass: "typo-line"}, [e("p", {staticClass: "category"}, [t._v("Muted Text")]), t._v(" "), e("p", {staticClass: "text-muted"}, [t._v("\n                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.\n              ")])]), t._v(" "), e("div", {staticClass: "typo-line"}, [e("p", {staticClass: "category"}, [t._v("Coloured Text")]), t._v(" "), e("p", {staticClass: "text-primary"}, [t._v("\n                Text Primary - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n              ")]), t._v(" "), e("p", {staticClass: "text-info"}, [t._v("\n                Text Info - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n              ")]), t._v(" "), e("p", {staticClass: "text-success"}, [t._v("\n                Text Success - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n              ")]), t._v(" "), e("p", {staticClass: "text-warning"}, [t._v("\n                Text Warning - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n              ")]), t._v(" "), e("p", {staticClass: "text-danger"}, [t._v("\n                Text Danger - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n              ")])]), t._v(" "), e("div", {staticClass: "typo-line"}, [e("h2", [e("p", {staticClass: "category"}, [t._v("Small Tag")]), t._v("header with small subcard-title "), e("br"), e("small", [t._v('".small" is a tag for the headers')])])]), t._v(" "), e("div", {staticClass: "typo-line"}, [e("p", {staticClass: "category"}, [t._v("Lists")]), t._v(" "), e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-3"}, [e("h5", [t._v("Unordered List")]), t._v(" "), e("ul", [e("li", [t._v("List Item")]), t._v(" "), e("li", [t._v("List Item")]), t._v(" "), e("li", {staticClass: "list-unstyled"}, [e("ul", [e("li", [t._v("List Item")]), t._v(" "), e("li", [t._v("List Item")]), t._v(" "), e("li", [t._v("List Item")])])]), t._v(" "), e("li", [t._v("List Item")])])]), t._v(" "), e("div", {staticClass: "col-md-3"}, [e("h5", [t._v("Ordered List")]), t._v(" "), e("ol", [e("li", [t._v("List Item")]), t._v(" "), e("li", [t._v("List Item")]), t._v(" "), e("li", [t._v("List Item")])])]), t._v(" "), e("div", {staticClass: "col-md-3"}, [e("h5", [t._v("Unstyled List")]), t._v(" "), e("ul", {staticClass: "list-unstyled"}, [e("li", [t._v("List Item")]), t._v(" "), e("li", [t._v("List Item")]), t._v(" "), e("li", [t._v("List Item")])])]), t._v(" "), e("div", {staticClass: "col-md-3"}, [e("h5", [t._v("Inline List")]), t._v(" "), e("ul", {staticClass: "list-inline"}, [e("li", [t._v("List Item")]), t._v(" "), e("li", [t._v("List Item")]), t._v(" "), e("li", [t._v("List Item")])])])])]), t._v(" "), e("div", {staticClass: "typo-line"}, [e("p", {staticClass: "category"}, [t._v("Blockquotes")]), t._v(" "), e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-6"}, [e("h5", [t._v("Default Blockquote")]), t._v(" "), e("blockquote", [e("p", [t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.")])])]), t._v(" "), e("div", {staticClass: "col-md-6"}, [e("h5", [t._v("Blockquote with Citation")]), t._v(" "), e("blockquote", [e("p", [t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.")]), t._v(" "), e("small", [t._v("Someone famous in\n                      "), e("cite", {attrs: {"card-title": "Source card-title"}}, [t._v("Source card-title")])])])])])]), t._v(" "), e("div", {staticClass: "typo-line"}, [e("p", {staticClass: "category"}, [t._v("Code")]), t._v(" "), e("p", [t._v("This is "), e("code", [t._v(".css-class-as-code")]), t._v(", an example of an inline code element. Wrap inline code within a "), e("code", [t._v(" <code>...</code>")]), t._v("tag.")]), t._v(" "), e("pre", [t._v("1. #This is an example of preformatted text.\n\t\t\t\t\t\t\t\t 2. #Here is another line of code")])])])])])])
        }], n = {render: s, staticRenderFns: i};
        a.a = n
    }, W4TI: function (t, a, e) {
        "use strict";
        var s = e("bGai"), i = e("rrf0");
        a.a = {
            components: {LCheckbox: s.a, FadeRenderTransition: s.f, AuthLayout: i.a}, data: function () {
                return {model: {email: "", password: "", subscribe: !0}}
            }, methods: {
                toggleNavbar: function () {
                    document.body.classList.toggle("nav-open")
                }, closeMenu: function () {
                    document.body.classList.remove("nav-open"), document.body.classList.remove("off-canvas-sidebar")
                }
            }, beforeDestroy: function () {
                this.closeMenu()
            }
        }
    }, WA4b: function (t, a, e) {
        "use strict";
        a.a = {name: "card", props: {title: String, subTitle: String}}
    }, WFc1: function (t, a, e) {
        "use strict";
        var s = e("bGai");
        a.a = {
            components: {Checkbox: s.a, Radio: s.k}, data: function () {
                return {
                    radios: {radio1: "1", radio2: "2", radio3: "2"},
                    checkboxes: {
                        first: !1,
                        second: !1,
                        a: !1,
                        b: !1,
                        c: !1,
                        unchecked: !1,
                        checked: !0,
                        disabledUnchecked: !1,
                        disabledChecked: !0
                    }
                }
            }
        }
    }, WPIJ: function (t, a) {
    }, Wc2y: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("card", {staticClass: "card-stats"}, [e("div", {staticClass: "row"}, [t.$slots.header ? e("div", {staticClass: "col-5"}, [e("div", {staticClass: "icon-big text-center"}, [t._t("header")], 2)]) : t._e(), t._v(" "), t.$slots.content || t.title ? e("div", {staticClass: "col-7"}, [e("div", {staticClass: "numbers"}, [t._t("content", [t.subTitle ? e("p", {staticClass: "card-category"}, [t._v(t._s(t.subTitle))]) : t._e(), t._v(" "), t.title ? e("h4", {staticClass: "card-title"}, [t._v(t._s(t.title))]) : t._e()])], 2)]) : t._e()]), t._v(" "), t.$slots.footer ? e("div", {
                staticClass: "stats",
                attrs: {slot: "footer"},
                slot: "footer"
            }, [t._t("footer")], 2) : t._e()])
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, Wrj4: function (t, a) {
    }, WsIF: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", [e("div", {staticClass: "row d-flex justify-content-center"}, [e("div", {staticClass: "col-sm-8"}, [e("div", {
                staticClass: "card card-wizard",
                attrs: {id: "wizardCard"}
            }, [e("form-wizard", {
                attrs: {shape: "tab", "error-color": "#FB404B", color: "#35495E"},
                on: {"on-complete": t.wizardComplete}
            }, [e("tab-content", {
                staticClass: "col-12", attrs: {
                    title: "Personal details", "before-change": function () {
                        return t.validateStep("firstStep")
                    }, icon: "nc-icon nc-badge"
                }
            }, [e("first-step", {
                ref: "firstStep",
                on: {"on-validated": t.onStepValidated}
            })], 1), t._v(" "), e("tab-content", {
                staticClass: "col-12",
                attrs: {
                    title: "Additional Info", "before-change": function () {
                        return t.validateStep("secondStep")
                    }, icon: "nc-icon nc-notes"
                }
            }, [e("second-step", {
                ref: "secondStep",
                on: {"on-validated": t.onStepValidated}
            })], 1), t._v(" "), e("tab-content", {
                staticClass: "col-12",
                attrs: {title: "Last step", icon: "nc-icon nc-check-2"}
            }, [e("div", [e("h2", {staticClass: "text-center text-space"}, [t._v("Yuhuuu!\n                "), e("br"), t._v(" "), e("small", [t._v('Click on "'), e("b", [t._v("Finish")]), t._v('" to join our community')])])])]), t._v(" "), e("button", {
                staticClass: "btn btn-default btn-fill btn-wd btn-back",
                attrs: {slot: "prev"},
                slot: "prev"
            }, [t._v("Back")]), t._v(" "), e("button", {
                staticClass: "btn btn-default btn-fill btn-wd btn-next",
                attrs: {slot: "next"},
                slot: "next"
            }, [t._v("Next")]), t._v(" "), e("button", {
                staticClass: "btn btn-success btn-fill btn-wd",
                attrs: {slot: "finish"},
                slot: "finish"
            }, [t._v("Finish")])], 1)], 1)])])])
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, "X+ky": function (t, a) {
    }, X10j: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "row"}, [e("div", {staticClass: "col-lg-6"}, [e("card", {
                attrs: {
                    title: "24 Hours Performance",
                    subTitle: "Line Chart"
                }
            }, [e("div", {
                staticClass: "ct-chart",
                attrs: {id: "chartPerformance"}
            })])], 1), t._v(" "), e("div", {staticClass: "col-lg-6"}, [e("card", {
                attrs: {
                    title: "NASDAQ: AAPL",
                    subTitle: "Line Chart with Points"
                }
            }, [e("div", {
                staticClass: "ct-chart",
                attrs: {id: "chartStock"}
            })])], 1), t._v(" "), e("div", {staticClass: "col-lg-6"}, [e("card", {
                attrs: {
                    title: "Views",
                    subTitle: "Bar Chart"
                }
            }, [e("div", {
                staticClass: "ct-chart",
                attrs: {id: "chartViews"}
            })])], 1), t._v(" "), e("div", {staticClass: "col-lg-6"}, [e("card", {
                attrs: {
                    title: "Activity",
                    subTitle: "Multiple Bars Chart"
                }
            }, [e("div", {staticClass: "ct-chart", attrs: {id: "chartActivity"}})])], 1)])
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, XPMo: function (t, a) {
    }, XQFB: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement;
            return (t._self._c || a)("div", {staticClass: "full-screen-map", attrs: {id: "map"}})
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, XbVV: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("footer", {staticClass: "footer"}, [e("div", {staticClass: "container-fluid d-flex flex-wrap justify-content-between"}, [e("nav", [e("ul", {staticClass: "footer-menu"}, [e("li", [e("router-link", {attrs: {to: {path: "/admin"}}}, [t._v("Dashboard")])], 1)])]), t._v(" "), t._m(0)])])
        }, i = [function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "copyright"}, [t._v("\n      © Coded with\n      "), e("i", {staticClass: "fa fa-heart heart"}), t._v(" by\n      "), e("a", {
                attrs: {
                    href: "https://github.com/cristijora",
                    target: "_blank"
                }
            }, [t._v("Cristi Jora")]), t._v(".\n      Designed by "), e("a", {
                attrs: {
                    href: "https://www.creative-tim.com/?ref=pdf-vuejs",
                    target: "_blank",
                    rel: "noopener"
                }
            }, [t._v("Creative Tim")]), t._v(".\n    ")])
        }], n = {render: s, staticRenderFns: i};
        a.a = n
    }, Xi3F: function (t, a, e) {
        "use strict";
        function s(t) {
            e("BhPa")
        }

        var i = e("e4sW"), n = e("rAs3"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, Xrer: function (t, a, e) {
        "use strict";
        var s = e("bGai");
        a.a = {components: {Breadcrumb: s.l, BreadcrumbItem: s.m}}
    }, Xuls: function (t, a, e) {
        "use strict";
        function s(t) {
            e("f4S3")
        }

        var i = e("L1E+"), n = e("c/YG"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, Xv3t: function (t, a, e) {
        "use strict";
        function s(t) {
            e("h8e/")
        }

        var i = e("wfiG"), n = e("I6ea"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, YHgN: function (t, a, e) {
        "use strict";
        var s = e("ok9g"), i = e("lMsw"), n = e.n(i);
        n.a.KEY = s.a, a.a = {
            methods: {
                initSattelliteMap: function (t) {
                    var a = new window.google.maps.LatLng(40.748817, -73.985428),
                        e = {zoom: 3, scrollwheel: !1, center: a, mapTypeId: window.google.maps.MapTypeId.SATELLITE},
                        s = new window.google.maps.Map(document.getElementById("satelliteMap"), e);
                    new window.google.maps.Marker({position: a, title: "Satellite Map!"}).setMap(s)
                }, initRegularMap: function (t) {
                    var a = new window.google.maps.LatLng(40.748817, -73.985428),
                        e = {zoom: 8, center: a, scrollwheel: !1},
                        s = new window.google.maps.Map(document.getElementById("regularMap"), e);
                    new window.google.maps.Marker({position: a, title: "Regular Map!"}).setMap(s)
                }, initCustomSkinMap: function (t) {
                    var a = new t.maps.LatLng(40.748817, -73.985428), e = {
                        zoom: 13,
                        center: a,
                        scrollwheel: !1,
                        disableDefaultUI: !0,
                        zoomControl: !0,
                        styles: [{
                            featureType: "water",
                            stylers: [{saturation: 43}, {lightness: -11}, {hue: "#0088ff"}]
                        }, {
                            featureType: "road",
                            elementType: "geometry.fill",
                            stylers: [{hue: "#ff0000"}, {saturation: -100}, {lightness: 99}]
                        }, {
                            featureType: "road",
                            elementType: "geometry.stroke",
                            stylers: [{color: "#808080"}, {lightness: 54}]
                        }, {
                            featureType: "landscape.man_made",
                            elementType: "geometry.fill",
                            stylers: [{color: "#ece2d9"}]
                        }, {
                            featureType: "poi.park",
                            elementType: "geometry.fill",
                            stylers: [{color: "#ccdca1"}]
                        }, {
                            featureType: "road",
                            elementType: "labels.text.fill",
                            stylers: [{color: "#767676"}]
                        }, {
                            featureType: "road",
                            elementType: "labels.text.stroke",
                            stylers: [{color: "#ffffff"}]
                        }, {featureType: "poi", stylers: [{visibility: "off"}]}, {
                            featureType: "landscape.natural",
                            elementType: "geometry.fill",
                            stylers: [{visibility: "on"}, {color: "#b8cb93"}]
                        }, {featureType: "poi.park", stylers: [{visibility: "on"}]}, {
                            featureType: "poi.sports_complex",
                            stylers: [{visibility: "on"}]
                        }, {featureType: "poi.medical", stylers: [{visibility: "on"}]}, {
                            featureType: "poi.business",
                            stylers: [{visibility: "simplified"}]
                        }]
                    }, s = new t.maps.Map(document.getElementById("customSkinMap"), e);
                    new t.maps.Marker({position: a, title: "Custom Skin & Settings Map!"}).setMap(s)
                }
            }, mounted: function () {
                var t = this;
                n.a.load(function (a) {
                    t.initSattelliteMap(a), t.initRegularMap(a), t.initCustomSkinMap(a)
                })
            }
        }
    }, "Z40+": function (t, a, e) {
        "use strict";
        var s = e("Xv3t"), i = function () {
            return {component: e.e(3).then(e.bind(null, "LVgM")), loading: s.a, delay: 200}
        };
        a.a = {components: {VectorMap: i}}
    }, ZBOI: function (t, a, e) {
        "use strict";
        function s(t) {
            e("ctrC")
        }

        var i = e("rcpx"), n = e("DNih"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, ZEDZ: function (t, a) {
    }, ZFGe: function (t, a) {
    }, Zki6: function (t, a) {
    }, ZpwA: function (t, a, e) {
        "use strict";
        a.a = {}
    }, aCJe: function (t, a) {
    }, avmG: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {
                staticClass: "form-check",
                class: [t.inlineClass, {disabled: t.disabled}]
            }, [e("label", {
                staticClass: "form-check-label",
                attrs: {for: t.cbId}
            }, [e("input", {
                directives: [{name: "model", rawName: "v-model", value: t.model, expression: "model"}],
                staticClass: "form-check-input",
                attrs: {id: t.cbId, type: "checkbox", disabled: t.disabled},
                domProps: {checked: Array.isArray(t.model) ? t._i(t.model, null) > -1 : t.model},
                on: {
                    change: function (a) {
                        var e = t.model, s = a.target, i = !!s.checked;
                        if (Array.isArray(e)) {
                            var n = t._i(e, null);
                            s.checked ? n < 0 && (t.model = e.concat([null])) : n > -1 && (t.model = e.slice(0, n).concat(e.slice(n + 1)))
                        } else t.model = i
                    }
                }
            }), t._v(" "), e("span", {staticClass: "form-check-sign"}), t._v(" "), t._t("default")], 2)])
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, "b+bS": function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-12"}, [e("card", [e("div", {
                attrs: {slot: "header"},
                slot: "header"
            }, [e("h4", {staticClass: "card-title"}, [t._v("Striped table")]), t._v(" "), e("p", {staticClass: "card-category"}, [t._v("Here is a subtitle for this table")])]), t._v(" "), e("div", {staticClass: "table-responsive table-full-width"}, [e("el-table", {
                staticClass: "table-striped",
                attrs: {data: t.tableData}
            }, [e("el-table-column", {
                attrs: {
                    label: "Id",
                    property: "id"
                }
            }), t._v(" "), e("el-table-column", {
                attrs: {
                    label: "Name",
                    property: "name"
                }
            }), t._v(" "), e("el-table-column", {
                attrs: {
                    label: "Country",
                    property: "country"
                }
            }), t._v(" "), e("el-table-column", {
                attrs: {
                    label: "City",
                    property: "city"
                }
            }), t._v(" "), e("el-table-column", {
                attrs: {
                    label: "Salary",
                    property: "salary"
                }
            })], 1)], 1)])], 1), t._v(" "), e("div", {staticClass: "col-md-12"}, [e("card", {staticClass: "card-plain"}, [e("div", {
                attrs: {slot: "header"},
                slot: "header"
            }, [e("h4", {staticClass: "card-title"}, [t._v("Table on Plain Background")]), t._v(" "), e("p", {staticClass: "card-category"}, [t._v("Here is a subtitle for this table")])]), t._v(" "), e("div", {staticClass: "table-responsive table-full-width"}, [e("el-table", {attrs: {data: t.tableData}}, [e("el-table-column", {
                attrs: {
                    label: "Id",
                    property: "id"
                }
            }), t._v(" "), e("el-table-column", {
                attrs: {
                    label: "Name",
                    property: "name"
                }
            }), t._v(" "), e("el-table-column", {
                attrs: {
                    label: "Salary",
                    property: "salary"
                }
            }), t._v(" "), e("el-table-column", {
                attrs: {
                    label: "Country",
                    property: "country"
                }
            }), t._v(" "), e("el-table-column", {
                attrs: {
                    label: "City",
                    property: "city"
                }
            })], 1)], 1)])], 1), t._v(" "), e("div", {staticClass: "col-md-12"}, [e("card", [e("div", {
                attrs: {slot: "header"},
                slot: "header"
            }, [e("h4", {staticClass: "card-title"}, [t._v("Regular Table with Colors")]), t._v(" "), e("p", {staticClass: "card-category"}, [t._v("Here is a subtitle for this table")])]), t._v(" "), e("div", {staticClass: "table-responsive table-full-width"}, [e("el-table", {
                attrs: {
                    "row-class-name": t.tableRowClassName,
                    data: t.tableData
                }
            }, [e("el-table-column", {
                staticClass: "success",
                attrs: {label: "Id", property: "id"}
            }), t._v(" "), e("el-table-column", {
                attrs: {
                    label: "Name",
                    property: "name"
                }
            }), t._v(" "), e("el-table-column", {
                staticClass: "danger",
                attrs: {label: "Salary", property: "salary"}
            }), t._v(" "), e("el-table-column", {
                staticClass: "info",
                attrs: {label: "Country", property: "country"}
            }), t._v(" "), e("el-table-column", {attrs: {label: "City", property: "city"}})], 1)], 1)])], 1)])
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, "b+h4": function (t, a) {
    }, b5tY: function (t, a, e) {
        "use strict";
        function s(t) {
            e("NaN1")
        }

        var i = e("Z40+"), n = e("nCE/"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, bGai: function (t, a, e) {
        "use strict";
        var s = e("HVao"), i = e("41we"), n = e("Hp7B"), l = e("bhVK"), o = e("wd1N"), c = e("I4Nt"), r = e("ABj6"),
            d = e("8/qu"), u = e("znQV"), v = e("hIn4"), m = e("sOrg"), f = e("+5CF"), p = e("IfGH"), b = e("cMGX"),
            h = e("DTLV");
        e.d(a, "a", function () {
            return s.a
        }), e.d(a, "i", function () {
            return l.a
        }), e.d(a, "j", function () {
            return o.a
        }), e.d(a, "g", function () {
            return b.a
        }), e.d(a, "k", function () {
            return i.a
        }), e.d(a, "h", function () {
            return n.a
        }), e.d(a, "b", function () {
            return u.a
        }), e.d(a, "d", function () {
            return v.a
        }), e.d(a, "e", function () {
            return m.a
        }), e.d(a, "c", function () {
            return r.a
        }), e.d(a, "f", function () {
            return d.a
        }), e.d(a, "l", function () {
            return f.a
        }), e.d(a, "m", function () {
            return p.a
        });
        s.a, l.a, o.a, b.a, i.a, n.a, u.a, v.a, m.a, r.a, c.a, h.a, d.a, f.a, p.a
    }, bhVK: function (t, a, e) {
        "use strict";
        function s(t) {
            e("txZW")
        }

        var i = e("x7X6"), n = e("876/"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, bk3S: function (t, a, e) {
        "use strict";
        var s, i = e("Dd8w"), n = e.n(i), l = e("bOdI"), o = e.n(l), c = e("I4nB"), r = (e.n(c), e("STLj")), d = e.n(r),
            u = e("cDSy"), v = (e.n(u), e("+BTi")), m = (e.n(v), e("e0Bm")), f = e.n(m), p = e("sUu7");
        a.a = {
            components: (s = {}, o()(s, f.a.name, f.a), o()(s, d.a.name, d.a), s),
            computed: n()({}, e.i(p.a)(["website", "language", "bootstrapVersion"])),
            data: function () {
                return {
                    languageOptions: [{value: "", label: "- language -"}, {
                        value: "ms",
                        label: "Bahasa Melayu"
                    }, {value: "ca", label: "Català"}, {value: "da", label: "Dansk"}, {
                        value: "de",
                        label: "Deutsch"
                    }, {value: "en", label: "English"}, {value: "es", label: "Español"}, {
                        value: "el",
                        label: "Eλληνικά"
                    }, {value: "fr", label: "Français"}, {value: "it", label: "Italiano"}, {
                        value: "hu",
                        label: "Magyar"
                    }, {value: "nl", label: "Nederlands"}, {value: "no", label: "Norsk"}, {
                        value: "pl",
                        label: "Polski"
                    }, {value: "pt", label: "Português"}, {value: "fi", label: "Suomi"}, {
                        value: "sv",
                        label: "Svenska"
                    }, {value: "tr", label: "Türkçe"}, {value: "is", label: "Íslenska"}, {
                        value: "cs",
                        label: "Čeština"
                    }, {value: "ru", label: "Русский"}, {value: "th", label: "ภาษาไทย"}, {
                        value: "zh",
                        label: "中文 (简体)"
                    }, {value: "zh-TW", label: "中文 (繁體)"}, {value: "ja", label: "日本語"}, {value: "ko", label: "한국어"}],
                    model: {website: "", frameworkType: "", language: "", bootstrapVersion: "", price: ""},
                    modelValidations: {
                        website: {url: !0, required: !0},
                        language: {required: !0},
                        bootstrapVersion: {required: !0}
                    }
                }
            },
            methods: {
                getError: function (t) {
                    return this.errors.first(t)
                }, validate: function () {
                    var t = this;
                    return this.$validator.validateAll().then(function (a) {
                        return t.$emit("on-validated", a, t.model), a
                    })
                }
            }
        }
    }, "c/YG": function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "user"}, [t._m(0), t._v(" "), e("div", {staticClass: "info"}, [e("a", {
                attrs: {
                    "data-toggle": "collapse",
                    "aria-expanded": !t.isClosed,
                    href: "#"
                }, on: {
                    click: function (a) {
                        a.stopPropagation(), t.toggleMenu(a)
                    }
                }
            }, [e("span", [t._v("\n           " + t._s(t.title) + "\n           "), e("b", {staticClass: "caret"})])]), t._v(" "), e("div", {staticClass: "clearfix"}), t._v(" "), e("div", [e("el-collapse-transition", [e("ul", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.isClosed,
                    expression: "!isClosed"
                }], staticClass: "nav"
            }, [t._t("default", [e("li", [e("a", {
                staticClass: "profile-dropdown",
                attrs: {href: "#pablo"}
            }, [e("span", {staticClass: "sidebar-mini"}, [t._v("MP")]), t._v(" "), e("span", {staticClass: "sidebar-normal"}, [t._v("My Profile")])])]), t._v(" "), e("li", [e("a", {
                staticClass: "profile-dropdown",
                attrs: {href: "#pablo"}
            }, [e("span", {staticClass: "sidebar-mini"}, [t._v("EP")]), t._v(" "), e("span", {staticClass: "sidebar-normal"}, [t._v("Edit Profile")])])]), t._v(" "), e("li", [e("a", {
                staticClass: "profile-dropdown",
                attrs: {href: "#pablo"}
            }, [e("span", {staticClass: "sidebar-mini"}, [t._v("S")]), t._v(" "), e("span", {staticClass: "sidebar-normal"}, [t._v("Settings")])])])])], 2)])], 1)])])
        }, i = [function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "photo"}, [e("img", {
                attrs: {
                    src: "static/img/default-avatar.png",
                    alt: "avatar"
                }
            })])
        }], n = {render: s, staticRenderFns: i};
        a.a = n
    }, c0cX: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("auth-layout", {attrs: {pageClass: "lock-page"}}, [e("div", {staticClass: "content"}, [e("form", {
                attrs: {
                    method: "#",
                    action: "#"
                }
            }, [e("div", {staticClass: "user-profile"}, [e("div", {staticClass: "author"}, [e("img", {
                staticClass: "avatar",
                attrs: {src: "static/img/default-avatar.png", alt: "..."}
            })]), t._v(" "), e("h4", [t._v("Tania Andrew")]), t._v(" "), e("fg-input", {
                attrs: {
                    type: "password",
                    placeholder: "Enter Password"
                }
            }), t._v(" "), e("button", {
                staticClass: "btn btn-round btn-info btn-wd",
                attrs: {type: "button"}
            }, [t._v("Unlock")])], 1)])])])
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, cDSy: function (t, a) {
    }, cFkL: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "container-fluid"}, [e("h4", {staticClass: "card-title"}, [t._v("Sweet Alert 2")]), t._v(" "), t._m(0), t._v(" "), e("br"), e("br"), t._v(" "), e("div", {staticClass: "places-sweet-alerts"}, [e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-3"}, [e("card", [e("div", {staticClass: "card-content text-center"}, [e("h5", [t._v("Basic example")]), t._v(" "), e("button", {
                staticClass: "btn btn-default btn-fill",
                on: {
                    click: function (a) {
                        t.showSwal("basic")
                    }
                }
            }, [t._v("Try me!")])])])], 1), t._v(" "), e("div", {staticClass: "col-md-3"}, [e("card", [e("div", {staticClass: "card-content text-center"}, [e("h5", [t._v("A title with a text under")]), t._v(" "), e("button", {
                staticClass: "btn btn-default btn-fill",
                on: {
                    click: function (a) {
                        t.showSwal("title-and-text")
                    }
                }
            }, [t._v("Try me!")])])])], 1), t._v(" "), e("div", {staticClass: "col-md-3"}, [e("card", [e("div", {staticClass: "card-content text-center"}, [e("h5", [t._v("A success message")]), t._v(" "), e("button", {
                staticClass: "btn btn-default btn-fill",
                on: {
                    click: function (a) {
                        t.showSwal("success-message")
                    }
                }
            }, [t._v("Try me!")])])])], 1), t._v(" "), e("div", {staticClass: "col-md-3"}, [e("card", [e("div", {staticClass: "card-content text-center"}, [e("h5", [t._v("Custom HTML description")]), t._v(" "), e("button", {
                staticClass: "btn btn-default btn-fill",
                on: {
                    click: function (a) {
                        t.showSwal("custom-html")
                    }
                }
            }, [t._v("Try me!")])])])], 1), t._v(" "), e("div", {staticClass: "col-md-3"}, [e("card", [e("div", {staticClass: "card-content text-center"}, [e("h5", [t._v('A warning message, with a function attached to the "Confirm" Button...')]), t._v(" "), e("button", {
                staticClass: "btn btn-default btn-fill",
                on: {
                    click: function (a) {
                        t.showSwal("warning-message-and-confirmation")
                    }
                }
            }, [t._v("\n              Try me!\n            ")])])])], 1), t._v(" "), e("div", {staticClass: "col-md-3"}, [e("card", [e("div", {staticClass: "card-content text-center"}, [e("h5", [t._v('...and by passing a parameter, you can execute something else for "Cancel"')]), t._v(" "), e("button", {
                staticClass: "btn btn-default btn-fill",
                on: {
                    click: function (a) {
                        t.showSwal("warning-message-and-cancel")
                    }
                }
            }, [t._v("Try me!\n            ")])])])], 1), t._v(" "), e("div", {staticClass: "col-md-3"}, [e("card", [e("div", {staticClass: "card-content text-center"}, [e("h5", [t._v("A message with auto close timer set to 2 seconds")]), t._v(" "), e("button", {
                staticClass: "btn btn-default btn-fill",
                on: {
                    click: function (a) {
                        t.showSwal("auto-close")
                    }
                }
            }, [t._v("Try me!")])])])], 1), t._v(" "), e("div", {staticClass: "col-md-3"}, [e("card", [e("div", {staticClass: "card-content text-center"}, [e("h5", [t._v("Modal window with input field")]), t._v(" "), e("button", {
                staticClass: "btn btn-default btn-fill",
                on: {
                    click: function (a) {
                        t.showSwal("input-field")
                    }
                }
            }, [t._v("Try me!")])])])], 1)])])])
        }, i = [function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("p", {staticClass: "category"}, [t._v("A beautiful plugin, that replace the classic alert, Handcrafted by our friend\n    "), e("a", {
                attrs: {
                    target: "_blank",
                    rel: "noopener",
                    href: "https://twitter.com/t4t5"
                }
            }, [t._v("Tristan Edwards")]), t._v(". Please check out the "), e("a", {
                attrs: {
                    href: "http://limonte.github.io/sweetalert2/",
                    target: "_blank",
                    rel: "noopener"
                }
            }, [t._v("full documentation.")])])
        }], n = {render: s, staticRenderFns: i};
        a.a = n
    }, cMGX: function (t, a, e) {
        "use strict";
        var s = e("xJvq"), i = e("8SPL"), n = e("VU/8"), l = n(s.a, i.a, null, null, null);
        a.a = l.exports
    }, "cZr/": function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("card", {staticClass: "card-user"}, [e("div", {
                attrs: {slot: "image"},
                slot: "image"
            }, [e("img", {
                attrs: {
                    src: "https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400",
                    alt: "..."
                }
            })]), t._v(" "), e("div", [e("div", {staticClass: "author"}, [e("img", {
                staticClass: "avatar border-gray",
                attrs: {src: "static/img/default-avatar.png", alt: "..."}
            }), t._v(" "), e("h4", {staticClass: "title"}, [t._v("Tania Keatley\n        "), e("br"), t._v(" "), e("a", {attrs: {href: "#"}}, [e("small", [t._v("tania123")])])])]), t._v(" "), e("p", {staticClass: "description text-center"}, [e("span", [t._v('\n        "Lamborghini Mercy\n        '), e("br"), t._v("Your chick she so thirsty\n        "), e("br"), t._v("I'm in that two seat Lambo\"\n      ")])])]), t._v(" "), e("hr"), t._v(" "), e("div", {staticClass: "text-center"}, [e("div", [e("button", {
                staticClass: "btn btn-simple btn-link btn-icon",
                attrs: {type: "button"}
            }, [e("i", {staticClass: "fa fa-facebook-square"})]), t._v(" "), e("button", {
                staticClass: "btn btn-simple btn-link btn-icon",
                attrs: {type: "button"}
            }, [e("i", {staticClass: "fa fa-twitter"})]), t._v(" "), e("button", {
                staticClass: "btn btn-simple btn-link btn-icon",
                attrs: {type: "button"}
            }, [e("i", {staticClass: "fa fa-google-plus-square"})])])])])
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, csrr: function (t, a, e) {
        "use strict";
        var s = e("e7x4"), i = e.n(s);
        a.a = {
            methods: {
                showSwal: function (t) {
                    "basic" === t ? i()({
                        title: "Here's a message!",
                        buttonsStyling: !1,
                        confirmButtonClass: "btn btn-success btn-fill"
                    }) : "title-and-text" === t ? i()({
                        title: "Here's a message!",
                        text: "It's pretty, isn't it?",
                        buttonsStyling: !1,
                        confirmButtonClass: "btn btn-info btn-fill"
                    }) : "success-message" === t ? i()({
                        title: "Good job!",
                        text: "You clicked the button!",
                        buttonsStyling: !1,
                        confirmButtonClass: "btn btn-success btn-fill",
                        type: "success"
                    }) : "warning-message-and-confirmation" === t ? i()({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        type: "warning",
                        showCancelButton: !0,
                        confirmButtonClass: "btn btn-success btn-fill",
                        cancelButtonClass: "btn btn-danger btn-fill",
                        confirmButtonText: "Yes, delete it!",
                        buttonsStyling: !1
                    }).then(function () {
                        i()({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            type: "success",
                            confirmButtonClass: "btn btn-success btn-fill",
                            buttonsStyling: !1
                        })
                    }) : "warning-message-and-cancel" === t ? i()({
                        title: "Are you sure?",
                        text: "You will not be able to recover this imaginary file!",
                        type: "warning",
                        showCancelButton: !0,
                        confirmButtonText: "Yes, delete it!",
                        cancelButtonText: "No, keep it",
                        confirmButtonClass: "btn btn-success btn-fill",
                        cancelButtonClass: "btn btn-danger btn-fill",
                        buttonsStyling: !1
                    }).then(function () {
                        i()({
                            title: "Deleted!",
                            text: "Your imaginary file has been deleted.",
                            type: "success",
                            confirmButtonClass: "btn btn-success btn-fill",
                            buttonsStyling: !1
                        })
                    }, function (t) {
                        "cancel" === t && i()({
                            title: "Cancelled",
                            text: "Your imaginary file is safe :)",
                            type: "error",
                            confirmButtonClass: "btn btn-info btn-fill",
                            buttonsStyling: !1
                        })
                    }) : "custom-html" === t ? i()({
                        title: "HTML example",
                        buttonsStyling: !1,
                        confirmButtonClass: "btn btn-success btn-fill",
                        html: 'You can use <b>bold text</b>, <a href="http://github.com">links</a> and other HTML tags'
                    }) : "auto-close" === t ? i()({
                        title: "Auto close alert!",
                        text: "I will close in 2 seconds.",
                        timer: 2e3,
                        showConfirmButton: !1
                    }) : "input-field" === t && i()({
                            title: "Input something",
                            html: '<div class="form-group"><input id="input-field" type="text" class="form-control" /></div>',
                            showCancelButton: !0,
                            confirmButtonClass: "btn btn-success btn-fill",
                            cancelButtonClass: "btn btn-danger btn-fill",
                            buttonsStyling: !1
                        }).then(function (t) {
                            i()({
                                type: "success",
                                html: "You entered",
                                confirmButtonClass: "btn btn-success btn-fill",
                                buttonsStyling: !1
                            })
                        }).catch(i.a.noop)
                }
            }
        }
    }, ctrC: function (t, a) {
    }, d40L: function (t, a) {
    }, dGjt: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", [e("div", {staticClass: "row"}, [e("div", {staticClass: "col-xl-6 col-lg-12"}, [e("card", [e("template", {slot: "header"}, [e("h4", {staticClass: "card-title"}, [t._v("Collapsible Accordion")]), t._v(" "), e("p", {staticClass: "card-category"}, [t._v("On white card")])]), t._v(" "), e("el-collapse", [e("el-collapse-item", {
                attrs: {
                    title: "Default Collapsible Item 1",
                    name: "1"
                }
            }, [e("div", [t._v("\n              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n            ")])]), t._v(" "), e("el-collapse-item", {
                attrs: {
                    title: "Default Collapsible Item 1",
                    name: "2"
                }
            }, [e("div", [t._v("\n              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n            ")])]), t._v(" "), e("el-collapse-item", {
                attrs: {
                    title: "Default Collapsible Item 1",
                    name: "3"
                }
            }, [e("div", [t._v("\n              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n            ")])])], 1)], 2)], 1), t._v(" "), e("div", {staticClass: "col-xl-6 col-lg-12"}, [e("card", {staticClass: "card-plain"}, [e("template", {slot: "header"}, [e("h4", {staticClass: "card-title"}, [t._v("Collapsible Accordion")]), t._v(" "), e("p", {staticClass: "card-category"}, [t._v("On plain card")])]), t._v(" "), e("el-collapse", [e("el-collapse-item", {
                attrs: {
                    title: "Default Collapsible Item 1",
                    name: "1"
                }
            }, [e("div", [t._v("\n              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n            ")])]), t._v(" "), e("el-collapse-item", {
                attrs: {
                    title: "Default Collapsible Item 1",
                    name: "2"
                }
            }, [e("div", [t._v("\n              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n            ")])]), t._v(" "), e("el-collapse-item", {
                attrs: {
                    title: "Default Collapsible Item 1",
                    name: "3"
                }
            }, [e("div", [t._v("\n              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n            ")])])], 1)], 2)], 1)]), t._v(" "), e("div", {staticClass: "row"}, [e("div", {staticClass: "col-xl-6 col-lg-12"}, [e("card", {
                attrs: {
                    title: "Tabs",
                    subTitle: "Plain text tabs"
                }
            }, [e("vue-tabs", {attrs: {value: "Description"}}, [e("v-tab", {attrs: {title: "Info"}}, [e("p", [t._v("Agency is a group of professional individuals looking to create amazing pieces of clothing. We have studied at the best schools of design, we have tailored the suits for the most stylish men in the industry, we are what you need!")])]), t._v(" "), e("v-tab", {attrs: {title: "Account"}}, [e("p", [t._v("We are Houses Inc., a group of architects and interior designers based in Chicago and operating for clients worldwide. We’ve been designing stunningly beautiful houses and making clients happy for years.")])]), t._v(" "), e("v-tab", {attrs: {title: "Style"}}, [e("p", [t._v("Explore a wide variety of styles, personalise your finishes, and let us design the perfect home for you. It's what we do best and you can see proof in the products and reviews below.")])]), t._v(" "), e("v-tab", {attrs: {title: "Settings"}}, [t._v("\n            Explore a wide Houses Inc., a group of architects and interior designers based in Chicago and operating for clients worldwide. We’ve been designing stunningly beautiful houses and making clients happy for years.\n          ")])], 1)], 1)], 1), t._v(" "), e("div", {staticClass: "col-xl-6 col-lg-12"}, [e("card", {
                attrs: {
                    title: "Tabs & Icons",
                    subTitle: "Tabs with icons"
                }
            }, [e("vue-tabs", [e("v-tab", {
                attrs: {
                    title: "Info",
                    icon: "nc-icon nc-single-copy-04"
                }
            }, [e("p", [t._v("Agency is a group of professional individuals looking to create amazing pieces of clothing. We have studied at the best schools of design, we have tailored the suits for the most stylish men in the industry, we are what you need!")])]), t._v(" "), e("v-tab", {
                attrs: {
                    title: "Account",
                    icon: "nc-icon nc-circle-09"
                }
            }, [e("p", [t._v("We are Houses Inc., a group of architects and interior designers based in Chicago and operating for clients worldwide. We’ve been designing stunningly beautiful houses and making clients happy for years.")])]), t._v(" "), e("v-tab", {
                attrs: {
                    title: "Style",
                    icon: "nc-icon nc-ruler-pencil"
                }
            }, [e("p", [t._v("Explore a wide variety of styles, personalise your finishes, and let us design the perfect home for you. It's what we do best and you can see proof in the products and reviews below.")])]), t._v(" "), e("v-tab", {
                attrs: {
                    title: "Settings",
                    icon: "nc-icon nc-settings-90"
                }
            }, [t._v("\n            Explore a wide Houses Inc., a group of architects and interior designers based in Chicago and operating for clients worldwide. We’ve been designing stunningly beautiful houses and making clients happy for years.\n          ")])], 1)], 1)], 1)])])
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, dLNi: function (t, a, e) {
        "use strict";
        function s(t) {
            e("8FdJ")
        }

        var i = e("ET8q"), n = e("X10j"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, e1nf: function (t, a, e) {
        "use strict";
        var s = e("BAmE"), i = e("y7c3"), n = e("/7E0"), l = e("Nood"), o = e("Xuls"), c = e("Xi3F");
        a.a = {
            components: {
                TopNavbar: s.a,
                ContentFooter: i.a,
                DashboardContent: n.a,
                MobileMenu: l.a,
                UserMenu: o.a,
                SidebarShare: c.a
            }, data: function () {
                return {
                    sidebarBackground: "black",
                    sidebarBackgroundImage: "static/img/sidebar-5.jpg",
                    sidebarBackgroundImageEnabled: !0,
                    fixedNavbar: !1,
                    sidebarMini: !1
                }
            }, methods: {
                toggleSidebar: function () {
                    this.$sidebar.showSidebar && this.$sidebar.displaySidebar(!1)
                }, minimizeSidebar: function () {
                    this.$sidebar.toggleMinimize()
                }
            }, watch: {
                sidebarMini: function (t) {
                    this.minimizeSidebar()
                }, sidebarBackgroundImageEnabled: function (t) {
                    this.sidebarBackgroundImage = t ? "static/img/sidebar-5.jpg" : ""
                }
            }
        }
    }, e4sW: function (t, a, e) {
        "use strict";
        var s = e("I3G/"), i = e.n(s), n = e("VK1f"), l = e.n(n), o = e("2NXs"), c = e.n(o), r = e("A4gK"),
            d = (e.n(r), e("bGai"));
        i.a.use(l.a), i.a.use(c.a, {useCache: !0}), a.a = {
            components: {LSwitch: d.i},
            props: {
                color: {type: String, default: "black"},
                image: {type: String, default: ""},
                backgroundImageEnabled: Boolean,
                sidebarMini: Boolean,
                fixedNavbar: Boolean
            },
            data: function () {
                return {
                    documentationLink: "http://vuejs.creative-tim.com/vue-light-bootstrap-dashboard-pro/documentation/#/getting-started",
                    shareUrl: "https://www.creative-tim.com/product/vue-light-bootstrap-dashboard-pro",
                    buyUrl: "https://www.creative-tim.com/product/vue-light-bootstrap-dashboard-pro",
                    freeUrl: "https://www.creative-tim.com/product/vue-light-bootstrap-dashboard",
                    isOpen: !1,
                    sidebarColors: [{color: "black", active: !0}, {color: "azure", active: !1}, {
                        color: "green",
                        active: !1
                    }, {color: "blue", active: !1}, {color: "orange", active: !1}, {
                        color: "red",
                        active: !1
                    }, {color: "purple", active: !1}],
                    images: [{src: "static/img/sidebar-1.jpg", active: !1}, {
                        src: "static/img/sidebar-3.jpg",
                        active: !1
                    }, {src: "static/img/sidebar-4.jpg", active: !1}, {src: "static/img/sidebar-5.jpg", active: !0}]
                }
            },
            methods: {
                toggleDropDown: function () {
                    this.isOpen = !this.isOpen
                }, closeDropDown: function () {
                    this.isOpen = !1
                }, toggleList: function (t, a) {
                    t.forEach(function (t) {
                        t.active = !1
                    }), a.active = !0
                }, updateValue: function (t, a) {
                    this.$emit("update:" + t, a)
                }, changeSidebarBackground: function (t) {
                    this.$emit("update:color", t.color), this.toggleList(this.sidebarColors, t)
                }, changeSidebarImage: function (t) {
                    this.$emit("update:image", t.src), this.$emit("update:backgroundImageEnabled", !0), this.toggleList(this.images, t)
                }
            },
            watch: {
                image: function (t) {
                    var a = this.images.find(function (a) {
                        return t === a.src
                    });
                    a && !a.active && this.changeSidebarImage(a)
                }
            }
        }
    }, "f+UQ": function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "extended-forms"}, [e("card", [e("div", {staticClass: "col-12"}, [e("div", {staticClass: "row"}, [e("div", {staticClass: "col-lg-4"}, [e("h4", {staticClass: "title"}, [t._v("Datetime Picker")]), t._v(" "), e("fg-input", [e("el-date-picker", {
                attrs: {
                    type: "datetime",
                    placeholder: "Datetime picker here",
                    "picker-options": t.pickerOptions1
                }, model: {
                    value: t.dateTimePicker, callback: function (a) {
                        t.dateTimePicker = a
                    }, expression: "dateTimePicker"
                }
            })], 1)], 1), t._v(" "), e("div", {staticClass: "col-lg-4"}, [e("h4", {staticClass: "title"}, [t._v("Date Picker")]), t._v(" "), e("fg-input", [e("el-date-picker", {
                attrs: {
                    type: "date",
                    placeholder: "Date picker here",
                    "picker-options": t.pickerOptions1
                }, model: {
                    value: t.datePicker, callback: function (a) {
                        t.datePicker = a
                    }, expression: "datePicker"
                }
            })], 1)], 1), t._v(" "), e("div", {staticClass: "col-lg-4"}, [e("h4", {staticClass: "title"}, [t._v("Time Picker")]), t._v(" "), e("fg-input", [e("el-time-select", {
                attrs: {
                    "picker-options": {
                        start: "00:00",
                        step: "00:15",
                        end: "23:59"
                    }, placeholder: "Time picker here"
                }, model: {
                    value: t.timePicker, callback: function (a) {
                        t.timePicker = a
                    }, expression: "timePicker"
                }
            })], 1)], 1)]), t._v(" "), e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-6"}, [e("h4", {staticClass: "title"}, [t._v("Switches")]), t._v(" "), e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-4"}, [e("p", {staticClass: "category"}, [t._v("Default")]), t._v(" "), e("l-switch", {
                attrs: {
                    type: "primary",
                    "on-text": "ON",
                    "off-text": "OFF"
                }, model: {
                    value: t.switches.defaultOn, callback: function (a) {
                        t.$set(t.switches, "defaultOn", a)
                    }, expression: "switches.defaultOn"
                }
            }), t._v(" "), e("l-switch", {
                attrs: {type: "primary", "on-text": "ON", "off-text": "OFF"},
                model: {
                    value: t.switches.defaultOff, callback: function (a) {
                        t.$set(t.switches, "defaultOff", a)
                    }, expression: "switches.defaultOff"
                }
            })], 1), t._v(" "), e("div", {staticClass: "col-md-4"}, [e("p", {staticClass: "category"}, [t._v("Plain")]), t._v(" "), e("l-switch", {
                model: {
                    value: t.switches.plainOn,
                    callback: function (a) {
                        t.$set(t.switches, "plainOn", a)
                    },
                    expression: "switches.plainOn"
                }
            }), t._v(" "), e("l-switch", {
                model: {
                    value: t.switches.plainOff, callback: function (a) {
                        t.$set(t.switches, "plainOff", a)
                    }, expression: "switches.plainOff"
                }
            })], 1), t._v(" "), e("div", {staticClass: "col-md-4"}, [e("p", {staticClass: "category"}, [t._v("With Icons")]), t._v(" "), e("l-switch", {
                model: {
                    value: t.switches.withIconsOn,
                    callback: function (a) {
                        t.$set(t.switches, "withIconsOn", a)
                    },
                    expression: "switches.withIconsOn"
                }
            }, [e("i", {
                staticClass: "fa fa-check",
                attrs: {slot: "on"},
                slot: "on"
            }), t._v(" "), e("i", {
                staticClass: "fa fa-times",
                attrs: {slot: "off"},
                slot: "off"
            })]), t._v(" "), e("l-switch", {
                model: {
                    value: t.switches.withIconsOff, callback: function (a) {
                        t.$set(t.switches, "withIconsOff", a)
                    }, expression: "switches.withIconsOff"
                }
            }, [e("i", {
                staticClass: "fa fa-check",
                attrs: {slot: "on"},
                slot: "on"
            }), t._v(" "), e("i", {
                staticClass: "fa fa-times",
                attrs: {slot: "off"},
                slot: "off"
            })])], 1)])])]), t._v(" "), e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-6"}, [e("h4", {staticClass: "title"}, [t._v("Tags")]), t._v(" "), t._l(t.tags.dynamicTags, function (a) {
                return e("el-tag", {
                    key: a,
                    attrs: {size: "small", type: "warning", closable: !0, "close-transition": !1},
                    on: {
                        close: function (e) {
                            t.handleClose(a)
                        }
                    }
                }, [t._v("\n            " + t._s(a) + "\n          ")])
            }), t._v(" "), e("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.tags.inputValue,
                    expression: "tags.inputValue"
                }],
                ref: "saveTagInput",
                staticClass: "form-control input-new-tag",
                attrs: {type: "text", placeholder: "New Tag", size: "mini"},
                domProps: {value: t.tags.inputValue},
                on: {
                    keyup: function (a) {
                        if (!("button" in a) && t._k(a.keyCode, "enter", 13, a.key))return null;
                        t.handleInputConfirm(a)
                    }, blur: t.handleInputConfirm, input: function (a) {
                        a.target.composing || t.$set(t.tags, "inputValue", a.target.value)
                    }
                }
            })], 2), t._v(" "), e("div", {staticClass: "col-md-6"}, [e("h4", {staticClass: "title"}, [t._v("Customisable Select")]), t._v(" "), e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-6"}, [e("el-select", {
                staticClass: "select-danger",
                attrs: {size: "large", placeholder: "Single Select"},
                model: {
                    value: t.selects.simple, callback: function (a) {
                        t.$set(t.selects, "simple", a)
                    }, expression: "selects.simple"
                }
            }, t._l(t.selects.countries, function (t) {
                return e("el-option", {
                    key: t.label,
                    staticClass: "select-danger",
                    attrs: {value: t.value, label: t.label}
                })
            }))], 1), t._v(" "), e("div", {staticClass: "col-md-6"}, [e("el-select", {
                staticClass: "select-primary",
                attrs: {multiple: "", size: "large", placeholder: "Multiple Select"},
                model: {
                    value: t.selects.multiple, callback: function (a) {
                        t.$set(t.selects, "multiple", a)
                    }, expression: "selects.multiple"
                }
            }, t._l(t.selects.countries, function (t) {
                return e("el-option", {
                    key: t.label,
                    staticClass: "select-primary",
                    attrs: {value: t.value, label: t.label}
                })
            }))], 1)])])]), t._v(" "), e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-6"}, [e("h4", {staticClass: "title"}, [t._v("Progress Bars")]), t._v(" "), e("l-progress", {attrs: {value: 30}}), t._v(" "), e("l-progress", {
                attrs: {
                    value: 60,
                    type: "info"
                }
            }), t._v(" "), e("l-progress", {
                attrs: {
                    values: [{type: "success", value: 35}, {
                        type: "warning",
                        value: 20
                    }, {type: "danger", value: 10}]
                }
            })], 1), t._v(" "), e("div", {staticClass: "col-md-6"}, [e("h4", {staticClass: "title"}, [t._v("Sliders")]), t._v(" "), e("el-slider", {
                staticClass: "slider-success",
                model: {
                    value: t.sliders.simple, callback: function (a) {
                        t.$set(t.sliders, "simple", a)
                    }, expression: "sliders.simple"
                }
            }), t._v(" "), e("br"), t._v(" "), e("el-slider", {
                staticClass: "slider-info",
                attrs: {max: 100, range: ""},
                model: {
                    value: t.sliders.rangeSlider, callback: function (a) {
                        t.$set(t.sliders, "rangeSlider", a)
                    }, expression: "sliders.rangeSlider"
                }
            })], 1)])])])], 1)
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, f3m2: function (t, a, e) {
        "use strict";
        var s = e("Dd8w"), i = e.n(s), n = e("3kHb"), l = (e.n(n), e("2+hT")), o = (e.n(l), e("3H7w")), c = e("6Fhh"),
            r = e("e7x4"), d = e.n(r);
        a.a = {
            data: function () {
                return {wizardModel: {}}
            },
            components: {FormWizard: n.FormWizard, TabContent: n.TabContent, FirstStep: o.a, SecondStep: c.a},
            methods: {
                validateStep: function (t) {
                    return this.$refs[t].validate()
                }, onStepValidated: function (t, a) {
                    this.wizardModel = i()({}, this.wizardModel, a)
                }, wizardComplete: function () {
                    d()("Good job!", "You clicked the finish button!", "success")
                }
            }
        }
    }, f4S3: function (t, a) {
    }, gJ0j: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-6"}, [e("chart-card", {
                attrs: {
                    "chart-data": t.salesChart.data,
                    "chart-options": t.salesChart.options
                }
            }, [e("div", {
                attrs: {slot: "header"},
                slot: "header"
            }, [e("h4", {staticClass: "card-title"}, [t._v("2015 Sales")]), t._v(" "), e("p", {staticClass: "category"}, [t._v("All products including Taxes")])]), t._v(" "), e("div", {
                staticClass: "stats",
                attrs: {slot: "footer-title"},
                slot: "footer-title"
            }, [e("i", {staticClass: "ti-check"}), t._v(" Data information certified\n      ")]), t._v(" "), e("div", {
                attrs: {slot: "footer"},
                slot: "footer"
            }, [e("div", {staticClass: "chart-legend"}, [e("i", {staticClass: "fa fa-circle text-info"}), t._v(" Tesla Model S\n          "), e("i", {staticClass: "fa fa-circle text-warning"}), t._v(" BMW 5 Series\n        ")]), t._v(" "), e("hr"), t._v(" "), e("div", {staticClass: "stats"}, [e("i", {staticClass: "ti-check"}), t._v(" Data information certified\n        ")])])])], 1), t._v(" "), e("div", {staticClass: "col-md-6"}, [e("chart-card", {
                attrs: {
                    "chart-data": t.usersChart.data,
                    "chart-options": t.usersChart.options
                }
            }, [e("div", {
                attrs: {slot: "header"},
                slot: "header"
            }, [e("h4", {staticClass: "card-title"}, [t._v("Users Behavior")]), t._v(" "), e("p", {staticClass: "category"}, [t._v("24 hours performance")])]), t._v(" "), e("div", {
                staticClass: "stats",
                attrs: {slot: "footer-title"},
                slot: "footer-title"
            }, [e("i", {staticClass: "ti-reload"}), t._v(" Updated 3 minutes ago\n      ")]), t._v(" "), e("div", {
                attrs: {slot: "footer"},
                slot: "footer"
            }, [e("div", {staticClass: "chart-legend"}, [e("i", {staticClass: "fa fa-circle text-info"}), t._v(" Open\n          "), e("i", {staticClass: "fa fa-circle text-danger"}), t._v(" Click\n          "), e("i", {staticClass: "fa fa-circle text-warning"}), t._v(" Click Second Time\n        ")]), t._v(" "), e("hr"), t._v(" "), e("div", {staticClass: "stats"}, [e("i", {staticClass: "ti-reload"}), t._v(" Updated 3 minutes ago\n        ")])])])], 1), t._v(" "), e("div", {staticClass: "col-lg-6 col-sm-6"}, [e("chart-card", {
                attrs: {
                    "chart-data": t.subscriptionsChart.data,
                    "chart-options": t.subscriptionsChart.options
                }
            }, [e("span", {
                attrs: {slot: "title"},
                slot: "title"
            }, [t._v("169")]), t._v(" "), e("span", {
                staticClass: "label label-danger",
                attrs: {slot: "title-label"},
                slot: "title-label"
            }, [t._v("\n        -14%\n      ")]), t._v(" "), e("h6", {
                attrs: {slot: "subtitle"},
                slot: "subtitle"
            }, [t._v("\n        total subscriptions "), e("span", {staticClass: "text-muted"}, [t._v("in last")]), t._v(" 7 days\n      ")]), t._v(" "), e("div", {
                attrs: {slot: "footer-title"},
                slot: "footer-title"
            }, [t._v("\n        View all members\n      ")]), t._v(" "), e("button", {
                staticClass: "btn btn-default btn-fill btn-icon btn-sm",
                attrs: {slot: "footer-right"},
                slot: "footer-right"
            }, [e("i", {staticClass: "ti-angle-right"})])])], 1), t._v(" "), e("div", {staticClass: "col-lg-6 col-sm-6"}, [e("chart-card", {
                attrs: {
                    "chart-data": t.downloadsChart.data,
                    "chart-options": t.downloadsChart.options
                }
            }, [e("span", {
                attrs: {slot: "title"},
                slot: "title"
            }, [t._v("8,960")]), t._v(" "), e("span", {
                staticClass: "label label-warning",
                attrs: {slot: "title-label"},
                slot: "title-label"
            }, [t._v("\n        ~51%\n      ")]), t._v(" "), e("h6", {
                attrs: {slot: "subtitle"},
                slot: "subtitle"
            }, [t._v("\n        total downloads "), e("span", {staticClass: "text-muted"}, [t._v("in last")]), t._v(" 6 years\n      ")]), t._v(" "), e("div", {
                attrs: {slot: "footer-title"},
                slot: "footer-title"
            }, [t._v("\n        View more details\n      ")]), t._v(" "), e("button", {
                staticClass: "btn btn-success btn-fill btn-icon btn-sm",
                attrs: {slot: "footer-right"},
                slot: "footer-right"
            }, [e("i", {staticClass: "ti-info"})])])], 1), t._v(" "), e("div", {staticClass: "col-md-6"}, [e("task-list"), t._v(" "), t._m(0)], 1), t._v(" "), e("div", {staticClass: "col-md-6"}, [e("time-line", {attrs: {type: "simple"}}, [e("time-line-item", {
                staticClass: "timeline-inverted",
                attrs: {"badge-type": "danger", badgeIcon: "ti-gallery"}
            }, [e("span", {
                staticClass: "label label-danger",
                attrs: {slot: "header"},
                slot: "header"
            }, [t._v("Some title")]), t._v(" "), e("p", {
                attrs: {slot: "body"},
                slot: "body"
            }, [t._v("\n          Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my family We just had fun with the “future” theme !!!   It was a fun night all together ... The always rude Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.")]), t._v(" "), e("h6", {
                attrs: {slot: "footer"},
                slot: "footer"
            }, [e("i", {staticClass: "ti-time"}), t._v("\n          11 hours ago via Twitter\n        ")])]), t._v(" "), e("time-line-item", {
                staticClass: "timeline-inverted",
                attrs: {"badge-type": "success", badgeIcon: "ti-credit-card"}
            }, [e("span", {
                staticClass: "label label-info",
                attrs: {slot: "header"},
                slot: "header"
            }, [t._v("Another Title")]), t._v(" "), e("p", {
                attrs: {slot: "body"},
                slot: "body"
            }, [t._v("\n          Thank God for the support of my wife and real friends. I also wanted to point out that it’s the first album to go number 1 off of streaming!!! I love you Ellen and also my number one design rule of anything I do from shoes to music to homes is that Kim has to like it....")])]), t._v(" "), e("time-line-item", {
                staticClass: "timeline-inverted",
                attrs: {"badge-type": "info", badgeIcon: "ti-check-box"}
            }, [e("span", {
                staticClass: "label label-success",
                attrs: {slot: "header"},
                slot: "header"
            }, [t._v("Another Title")]), t._v(" "), e("div", {
                attrs: {slot: "body"},
                slot: "body"
            }, [e("p", [t._v("\n            Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown LA 11:10PM")]), t._v(" "), e("p", [t._v("\n            What if Kanye made a song about Kanye Royère doesn't make a Polar bear bed but the Polar bear couch is my favorite piece of furniture we own It wasn’t any Kanyes Set on his goals Kanye")]), t._v(" "), e("hr"), t._v(" "), e("drop-down", [e("button", {
                staticClass: "btn btn-info dropdown-toggle",
                attrs: {slot: "title", type: "button", "data-toggle": "dropdown"},
                slot: "title"
            }, [e("i", {staticClass: "ti-settings"}), t._v(" "), e("span", {staticClass: "caret"})]), t._v(" "), e("li", [e("a", {attrs: {href: "#action"}}, [t._v("Action")])]), t._v(" "), e("li", [e("a", {attrs: {href: "#action"}}, [t._v("Another action")])]), t._v(" "), e("li", [e("a", {attrs: {href: "#here"}}, [t._v("Something else here")])]), t._v(" "), e("li", {staticClass: "divider"}), t._v(" "), e("li", [e("a", {attrs: {href: "#link"}}, [t._v("Separated link")])])])], 1)])], 1)], 1)])
        }, i = [function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "card card-chat"}, [e("div", {staticClass: "card-header"}, [e("h4", {staticClass: "card-title"}, [t._v("Chat")]), t._v(" "), e("p", {staticClass: "category"}, [t._v("With Tania Andrew")])]), t._v(" "), e("div", {staticClass: "card-content"}, [e("ol", {staticClass: "chat"}, [e("li", {staticClass: "other"}, [e("div", {staticClass: "avatar"}, [e("img", {
                attrs: {
                    src: "static/img/faces/face-2.jpg",
                    alt: "crash"
                }
            })]), t._v(" "), e("div", {staticClass: "msg"}, [e("p", [t._v("\n                Hola!\n                How are you?\n              ")]), t._v(" "), e("div", {staticClass: "card-footer"}, [e("i", {staticClass: "ti-check"}), t._v(" "), e("h6", [t._v("11:20")])])])]), t._v(" "), e("li", {staticClass: "self"}, [e("div", {staticClass: "msg"}, [e("p", [t._v("\n                Puff...\n                I'm alright. How are you?\n              ")]), t._v(" "), e("div", {staticClass: "card-footer"}, [e("i", {staticClass: "ti-check"}), t._v(" "), e("h6", [t._v("11:22")])])]), t._v(" "), e("div", {staticClass: "avatar"}, [e("img", {
                attrs: {
                    src: "static/img/default-avatar.png",
                    alt: "crash"
                }
            })])]), t._v(" "), e("li", {staticClass: "other"}, [e("div", {staticClass: "avatar"}, [e("img", {
                attrs: {
                    src: "static/img/faces/face-2.jpg",
                    alt: "crash"
                }
            })]), t._v(" "), e("div", {staticClass: "msg"}, [e("p", [t._v("\n                I'm ok too!\n              ")]), t._v(" "), e("div", {staticClass: "card-footer"}, [e("i", {staticClass: "ti-check"}), t._v(" "), e("h6", [t._v("11:24")])])])]), t._v(" "), e("li", {staticClass: "self"}, [e("div", {staticClass: "msg"}, [e("p", [t._v("\n                Well, it was nice hearing from you.\n              ")]), t._v(" "), e("div", {staticClass: "card-footer"}, [e("i", {staticClass: "ti-check"}), t._v(" "), e("h6", [t._v("11:25")])])]), t._v(" "), e("div", {staticClass: "no-avatar"})]), t._v(" "), e("li", {staticClass: "self"}, [e("div", {staticClass: "msg"}, [e("p", [t._v("\n                OK, bye-bye\n                See you!\n              ")]), t._v(" "), e("div", {staticClass: "card-footer"}, [e("i", {staticClass: "ti-check"}), t._v(" "), e("h6", [t._v("11:25")])])]), t._v(" "), e("div", {staticClass: "avatar"}, [e("img", {
                attrs: {
                    src: "static/img/default-avatar.png",
                    alt: "crash"
                }
            })])])]), t._v(" "), e("hr"), t._v(" "), e("div", {staticClass: "send-message"}, [e("div", {staticClass: "avatar"}, [e("img", {
                attrs: {
                    src: "static/img/default-avatar.png",
                    alt: "crash"
                }
            })]), t._v(" "), e("input", {
                staticClass: "form-control textarea",
                attrs: {type: "text", placeholder: "Type here!"}
            }), t._v(" "), e("div", {staticClass: "send-button"}, [e("button", {staticClass: "btn btn-primary btn-fill"}, [t._v("Send")])])])])])
        }], n = {render: s, staticRenderFns: i};
        a.a = n
    }, "h+xf": function (t, a, e) {
        "use strict";
        a.a = {props: {type: {type: String, default: ""}}}
    }, h6ab: function (t, a) {
    }, "h8e/": function (t, a) {
    }, hAlw: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", [e("card", [e("div", {
                attrs: {slot: "header"},
                slot: "header"
            }, [e("h4", {staticClass: "card-title"}, [t._v("Table with Links")]), t._v(" "), e("p", {staticClass: "category"}, [t._v("Here is a subtitle for this table")])]), t._v(" "), e("div", {staticClass: "row"}, [e("div", {staticClass: "col-sm-12"}, [e("el-table", {attrs: {data: t.tableData}}, [e("el-table-column", {attrs: {type: "index"}}), t._v(" "), e("el-table-column", {
                attrs: {
                    prop: "name",
                    label: "Name"
                }
            }), t._v(" "), e("el-table-column", {
                attrs: {
                    prop: "job",
                    label: "Job Position"
                }
            }), t._v(" "), e("el-table-column", {
                attrs: {
                    prop: "salary",
                    label: "Salary"
                }
            }), t._v(" "), e("el-table-column", {
                attrs: {label: "Actions"},
                scopedSlots: t._u([{
                    key: "default", fn: function (a) {
                        return e("div", {staticClass: "td-actions"}, [e("a", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip.top-center",
                                value: "View Profile",
                                expression: "'View Profile'",
                                modifiers: {"top-center": !0}
                            }], staticClass: "btn btn-info btn-link btn-xs", attrs: {href: "#"}, on: {
                                click: function (e) {
                                    t.handleLike(a.$index, a.row)
                                }
                            }
                        }, [e("i", {staticClass: "fa fa-user"})]), t._v(" "), e("a", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip.top-center",
                                value: "Edit Profile",
                                expression: "'Edit Profile'",
                                modifiers: {"top-center": !0}
                            }], staticClass: "btn btn-warning btn-link btn-xs", on: {
                                click: function (e) {
                                    t.handleEdit(a.$index, a.row)
                                }
                            }
                        }, [e("i", {staticClass: "fa fa-edit"})]), t._v(" "), e("a", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip.top-center",
                                value: "Delete",
                                expression: "'Delete'",
                                modifiers: {"top-center": !0}
                            }], staticClass: "btn btn-danger btn-link btn-xs", on: {
                                click: function (e) {
                                    t.handleDelete(a.$index, a.row)
                                }
                            }
                        }, [e("i", {staticClass: "fa fa-close"})])])
                    }
                }])
            })], 1)], 1)])]), t._v(" "), e("card", [e("div", {
                attrs: {slot: "header"},
                slot: "header"
            }, [e("h4", {staticClass: "card-title"}, [t._v("Table with Switches")]), t._v(" "), e("p", {staticClass: "category"}, [t._v("With some subtitle")])]), t._v(" "), e("div", {staticClass: "row table-full-width"}, [e("div", {staticClass: "col-sm-12"}, [e("el-table", {
                staticClass: "table-striped",
                attrs: {data: t.tableData}
            }, [e("el-table-column", {attrs: {type: "index"}}), t._v(" "), e("el-table-column", {
                attrs: {
                    prop: "name",
                    label: "Name"
                }
            }), t._v(" "), e("el-table-column", {
                attrs: {
                    prop: "job",
                    label: "Job Position"
                }
            }), t._v(" "), e("el-table-column", {
                attrs: {
                    prop: "salary",
                    label: "Salary"
                }
            }), t._v(" "), e("el-table-column", {
                attrs: {label: "Active"},
                scopedSlots: t._u([{
                    key: "default", fn: function (a) {
                        return [e("l-switch", {
                            model: {
                                value: a.row.active, callback: function (e) {
                                    t.$set(a.row, "active", e)
                                }, expression: "props.row.active"
                            }
                        })]
                    }
                }])
            })], 1)], 1)])]), t._v(" "), e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-12"}, [e("card", [e("div", {
                attrs: {slot: "header"},
                slot: "header"
            }, [e("h4", {staticClass: "card-title"}, [t._v("Table Big Boy")]), t._v(" "), e("p", {staticClass: "category"}, [t._v("A table for content management")]), t._v(" "), e("br")]), t._v(" "), e("div", {staticClass: "table-responsive"}, [e("el-table", {
                staticClass: "table-bigboy",
                staticStyle: {width: "100%"},
                attrs: {data: t.productsTable}
            }, [e("el-table-column", {
                attrs: {"min-width": "220", label: "THUMB"},
                scopedSlots: t._u([{
                    key: "default", fn: function (t) {
                        var a = t.row;
                        return [e("div", {staticClass: "img-container"}, [e("img", {
                            attrs: {
                                src: a.image,
                                alt: "Agenda"
                            }
                        })])]
                    }
                }])
            }), t._v(" "), e("el-table-column", {
                attrs: {"min-width": "220", label: "BLOG TITLE"},
                scopedSlots: t._u([{
                    key: "default", fn: function (a) {
                        var s = a.row;
                        return [e("p", [t._v(t._s(s.title))])]
                    }
                }])
            }), t._v(" "), e("el-table-column", {
                attrs: {
                    "min-width": "180",
                    label: "DESCRIPTION",
                    prop: "description"
                }
            }), t._v(" "), e("el-table-column", {
                attrs: {
                    "min-width": "100",
                    label: "DATE",
                    prop: "date"
                }
            }), t._v(" "), e("el-table-column", {
                attrs: {"min-width": "120"},
                scopedSlots: t._u([{
                    key: "default", fn: function (a) {
                        a.row;
                        return [e("a", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip.top-center",
                                value: "View Post",
                                expression: "'View Post'",
                                modifiers: {"top-center": !0}
                            }], staticClass: "btn-success btn-simple btn-link"
                        }, [e("i", {staticClass: "fa fa-image"})]), t._v(" "), e("a", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip.top-center",
                                value: "Edit",
                                expression: "'Edit'",
                                modifiers: {"top-center": !0}
                            }], staticClass: "btn-info btn-simple btn-link"
                        }, [e("i", {staticClass: "fa fa-edit"})]), t._v(" "), e("a", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip.top-center",
                                value: "Delete",
                                expression: "'Delete'",
                                modifiers: {"top-center": !0}
                            }], staticClass: "btn-danger btn-simple btn-link"
                        }, [e("i", {staticClass: "fa fa-times"})])]
                    }
                }])
            })], 1)], 1)])], 1)])], 1)
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, hGza: function (t, a) {
    }, hIn4: function (t, a, e) {
        "use strict";
        function s(t) {
            e("d40L")
        }

        var i = e("Ibwv"), n = e("SJjg"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, hRsq: function (t, a) {
    }, hlOX: function (t, a, e) {
        "use strict";
        a.a = {
            computed: {
                routeName: function () {
                    var t = this.$route.name;
                    return this.capitalizeFirstLetter(t)
                }
            }, data: function () {
                return {activeNotifications: !1}
            }, methods: {
                capitalizeFirstLetter: function (t) {
                    return t.charAt(0).toUpperCase() + t.slice(1)
                }, toggleNotificationDropDown: function () {
                    this.activeNotifications = !this.activeNotifications
                }, closeDropDown: function () {
                    this.activeNotifications = !1
                }, toggleSidebar: function () {
                    this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
                }, hideSidebar: function () {
                    this.$sidebar.displaySidebar(!1)
                }, minimizeSidebar: function () {
                    this.$sidebar.toggleMinimize()
                }
            }
        }
    }, i1OL: function (t, a, e) {
        "use strict";
        var s, i = e("bOdI"), n = e.n(i), l = e("cDSy"), o = (e.n(l), e("e0Bm")), c = e.n(o), r = e("I4nB"),
            d = (e.n(r), e("STLj")), u = e.n(d), v = e("GXEp"), m = (e.n(v), e("mtrD")), f = e.n(m), p = e("X+ky"),
            b = (e.n(p), e("HJMx")), h = e.n(b), _ = e("wJKS"), g = (e.n(_), e("orbS")), C = e.n(g), y = e("BxWU"),
            w = (e.n(y), e("g2bL")), k = e.n(w), x = e("2BWB"), S = (e.n(x), e("bFD8")), T = e.n(S), E = e("isgN"),
            $ = (e.n(E), e("+BTi")), L = (e.n($), e("tLa+")), M = e.n(L), I = e("bGai");
        a.a = {
            components: (s = {FgInput: I.h}, n()(s, M.a.name, M.a), n()(s, T.a.name, T.a), n()(s, k.a.name, k.a), n()(s, C.a.name, C.a), n()(s, h.a.name, h.a), n()(s, f.a.name, f.a), n()(s, u.a.name, u.a), n()(s, c.a.name, c.a), n()(s, "LSwitch", I.i), n()(s, "LProgress", I.j), n()(s, "LRadio", I.k), n()(s, "LCheckbox", I.a), s),
            data: function () {
                return {
                    enabledRadio: "2",
                    disabledRadio: "2",
                    switches: {
                        defaultOn: !0,
                        defaultOff: !1,
                        plainOn: !0,
                        plainOff: !1,
                        withIconsOn: !0,
                        withIconsOff: !1
                    },
                    sliders: {simple: 30, rangeSlider: [20, 50]},
                    selects: {
                        simple: "",
                        countries: [{value: "Bahasa Indonesia", label: "Bahasa Indonesia"}, {
                            value: "Bahasa Melayu",
                            label: "Bahasa Melayu"
                        }, {value: "Català", label: "Català"}, {value: "Dansk", label: "Dansk"}, {
                            value: "Deutsch",
                            label: "Deutsch"
                        }, {value: "English", label: "English"}, {value: "Español", label: "Español"}, {
                            value: "Eλληνικά",
                            label: "Eλληνικά"
                        }, {value: "Français", label: "Français"}, {value: "Italiano", label: "Italiano"}, {
                            value: "Magyar",
                            label: "Magyar"
                        }, {value: "Nederlands", label: "Nederlands"}, {value: "Norsk", label: "Norsk"}, {
                            value: "Polski",
                            label: "Polski"
                        }, {value: "Português", label: "Português"}, {value: "Suomi", label: "Suomi"}, {
                            value: "Svenska",
                            label: "Svenska"
                        }, {value: "Türkçe", label: "Türkçe"}, {value: "Íslenska", label: "Íslenska"}, {
                            value: "Čeština",
                            label: "Čeština"
                        }, {value: "Русский", label: "Русский"}, {value: "ภาษาไทย", label: "ภาษาไทย"}, {
                            value: "中文 (简体)",
                            label: "中文 (简体)"
                        }, {value: 'W">中文 (繁體)', label: 'W">中文 (繁體)'}, {value: "日本語", label: "日本語"}, {
                            value: "한국어",
                            label: "한국어"
                        }],
                        multiple: "ARS"
                    },
                    tags: {dynamicTags: ["Tag 1", "Tag 2", "Tag 3"], inputVisible: !1, inputValue: ""},
                    pickerOptions1: {
                        shortcuts: [{
                            text: "Today", onClick: function (t) {
                                t.$emit("pick", new Date)
                            }
                        }, {
                            text: "Yesterday", onClick: function (t) {
                                var a = new Date;
                                a.setTime(a.getTime() - 864e5), t.$emit("pick", a)
                            }
                        }, {
                            text: "A week ago", onClick: function (t) {
                                var a = new Date;
                                a.setTime(a.getTime() - 6048e5), t.$emit("pick", a)
                            }
                        }]
                    },
                    datePicker: "",
                    dateTimePicker: "",
                    timePicker: ""
                }
            },
            methods: {
                handleClose: function (t) {
                    this.tags.dynamicTags.splice(this.tags.dynamicTags.indexOf(t), 1)
                }, showInput: function () {
                    var t = this;
                    this.tags.inputVisible = !0, this.$nextTick(function () {
                        t.$refs.saveTagInput.$refs.input.focus()
                    })
                }, handleInputConfirm: function () {
                    var t = this.tags.inputValue;
                    t && this.tags.dynamicTags.push(t), this.tags.inputVisible = !1, this.tags.inputValue = ""
                }
            }
        }
    }, iJ2i: function (t, a) {
    }, isE6: function (t, a) {
    }, isgN: function (t, a) {
    }, jF1F: function (t, a, e) {
        "use strict";
        var s = e("znQV");
        a.a = {name: "stats-card", components: {Card: s.a}, props: {title: String, subTitle: String}}
    }, jqiq: function (t, a, e) {
        "use strict";
        function s(t) {
            e("xoph")
        }

        var i = e("W4TI"), n = e("8OF3"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, jyj7: function (t, a) {
    }, k4Hu: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {
                staticClass: "sidebar",
                style: t.sidebarStyle,
                attrs: {
                    "data-color": t.backgroundColor,
                    "data-image": t.backgroundImage,
                    "data-active-color": t.activeColor
                }
            }, [e("div", {
                ref: "sidebarScrollArea",
                staticClass: "sidebar-wrapper"
            }, [e("div", {staticClass: "logo"}, [e("a", {
                staticClass: "logo-mini",
                attrs: {href: "https://www.creative-tim.com/product/vue-light-bootstrap-dashboard-pro"}
            }, [e("div", {staticClass: "logo-img"}, [e("img", {
                attrs: {
                    src: t.logo,
                    alt: "logo"
                }
            })])]), t._v(" "), e("a", {
                staticClass: "simple-text logo-normal",
                attrs: {href: ""}
            }, [t._v("\n        " + t._s(t.title) + "\n      ")])]), t._v(" "), t._t("default"), t._v(" "), e("ul", {staticClass: "nav"}, [t._t("links", t._l(t.sidebarLinks, function (a, s) {
                return e("sidebar-item", {key: a.name + s, attrs: {link: a}}, t._l(a.children, function (t, a) {
                    return e("sidebar-item", {key: t.name + a, attrs: {link: t}})
                }))
            }))], 2)], 2)])
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, k4QP: function (t, a) {
    }, kBu5: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("table", {staticClass: "table"}, [e("thead", [t._t("columns", t._l(t.columns, function (a) {
                return e("th", [t._v(t._s(a))])
            }))], 2), t._v(" "), e("tbody", t._l(t.data, function (a) {
                return e("tr", [t._t("default", t._l(t.columns, function (s) {
                    return t.hasValue(a, s) ? e("td", [t._v(t._s(t.itemValue(a, s)))]) : t._e()
                }), {row: a})], 2)
            }))])
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, "kKo+": function (t, a, e) {
        "use strict";
        a.a = {}
    }, kf04: function (t, a, e) {
        "use strict";
        a.a = {
            data: function () {
                return {
                    model: {requiredText: "", email: "", number: "", url: "", idSource: "", idDestination: ""},
                    modelValidations: {
                        requiredText: {required: !0},
                        email: {required: !0, email: !0},
                        number: {required: !0, decimal: !0},
                        url: {required: !0, url: !0},
                        idSource: {required: !0},
                        idDestination: {required: !0, confirmed: "idSource"}
                    }
                }
            }, methods: {
                getError: function (t) {
                    return this.errors.first(t)
                }, validate: function () {
                    var t = this;
                    this.$validator.validateAll().then(function (a) {
                        t.$emit("on-submit", t.registerForm, a)
                    })
                }
            }
        }
    }, kvNc: function (t, a, e) {
        "use strict";
        function s(t) {
            e("lCen")
        }

        var i = e("pnxw"), n = e("hAlw"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, lCen: function (t, a) {
    }, lHyV: function (t, a) {
    }, lp9q: function (t, a) {
    }, m4U0: function (t, a) {
    }, mHi7: function (t, a) {
    }, "mk+A": function (t, a, e) {
        "use strict";
        var s = e("mvHQ"), i = e.n(s);
        a.a = {
            data: function () {
                return {
                    user: {
                        company: "Paper Dashboard",
                        username: "michael23",
                        email: "",
                        lastName: "Faker",
                        address: "Melbourne, Australia",
                        city: "melbourne",
                        postalCode: "",
                        aboutMe: "Oh so, your weak rhyme. You doubt I'll bother, reading into it.I'll probably won't, left to my own devicesBut that's the difference in our opinions."
                    }
                }
            }, methods: {
                updateProfile: function () {
                    alert("Your data: " + i()(this.user))
                }
            }
        }
    }, "mq/s": function (t, a) {
    }, "n+Zn": function (t, a, e) {
        "use strict";
        a.a = {
            data: function () {
                return {
                    model: {firstName: "", lastName: "", email: ""},
                    modelValidations: {firstName: {min: 5}, lastName: {min: 5}, email: {required: !0, email: !0}}
                }
            }, methods: {
                getError: function (t) {
                    return this.errors.first(t)
                }, validate: function () {
                    var t = this;
                    return this.$validator.validateAll().then(function (a) {
                        return t.$emit("on-validated", a, t.model), a
                    })
                }
            }
        }
    }, "nCE/": function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement;
            return (t._self._c || a)("vector-map")
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, nWyo: function (t, a, e) {
        "use strict";
        function s(t) {
            e("b+h4")
        }

        var i = e("f3m2"), n = e("WsIF"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, nZgL: function (t, a) {
    }, ncZB: function (t, a) {
    }, ndzL: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("auth-layout", {staticClass: "not-found-page"}, [e("div", {staticClass: "centered"}, [e("h1", [e("i", {staticClass: "not-found-icon nc-icon nc-puzzle-10"}), t._v("404")]), t._v(" "), e("p", [t._v("The page you requested could not be found.")])])])
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, ngp6: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", [e("div", {staticClass: "wrapper wrapper-full-page"}, [e("nav", {staticClass: "navbar navbar-expand-lg navbar-transparent navbar-absolute"}, [e("div", {staticClass: "container"}, [e("div", {staticClass: "navbar-wrapper"}, [e("a", {
                staticClass: "navbar-brand",
                attrs: {href: "#pablo"}
            }, [t._v("Vue LBD Pro")]), t._v(" "), e("button", {
                staticClass: "navbar-toggler",
                attrs: {
                    type: "button",
                    "data-toggle": "collapse",
                    "aria-controls": "navigation-index",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation"
                },
                on: {
                    click: function (a) {
                        t.showMenu = !t.showMenu
                    }
                }
            }, [e("span", {staticClass: "navbar-toggler-bar burger-lines"}), t._v(" "), e("span", {staticClass: "navbar-toggler-bar burger-lines"}), t._v(" "), e("span", {staticClass: "navbar-toggler-bar burger-lines"})])]), t._v(" "), e("el-collapse-transition", [e("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showMenu,
                    expression: "showMenu"
                }], staticClass: "navbar-collapse justify-content-end", attrs: {id: "navbar"}
            }, [e("ul", {staticClass: "navbar-nav"}, [e("router-link", {
                staticClass: "nav-item",
                attrs: {to: "/admin", tag: "li"}
            }, [e("a", {staticClass: "nav-link"}, [e("i", {staticClass: "nc-icon nc-chart-pie-35"}), t._v(" Dashboard\n                ")])]), t._v(" "), e("router-link", {
                staticClass: "nav-item",
                attrs: {to: "/register", tag: "li"}
            }, [e("a", {staticClass: "nav-link"}, [e("i", {staticClass: "nc-icon nc-badge"}), t._v(" Register\n                ")])]), t._v(" "), e("router-link", {
                staticClass: "nav-item",
                attrs: {to: "/login", tag: "li"}
            }, [e("a", {staticClass: "nav-link"}, [e("i", {staticClass: "nc-icon nc-mobile"}), t._v(" Register\n                ")])]), t._v(" "), e("router-link", {
                staticClass: "nav-item",
                attrs: {to: "/lock", tag: "li"}
            }, [e("a", {staticClass: "nav-link"}, [e("i", {staticClass: "nc-icon nc-key-25"}), t._v(" Lock\n                ")])])], 1)])])], 1)]), t._v(" "), e("div", {
                staticClass: "full-page",
                class: t.pageClass,
                attrs: {"data-color": t.backgroundColor}
            }, [e("div", {staticClass: "content"}, [e("div", {staticClass: "container"}, [t._t("default")], 2)]), t._v(" "), e("footer", {staticClass: "footer footer-transparent"}, [e("div", {staticClass: "container d-flex flex-lg-row flex-column justify-content-lg-between justify-content-center align-items-center"}, [e("nav", [e("ul", [e("li", [e("router-link", {attrs: {to: "/"}}, [t._v("Home")])], 1), t._v(" "), e("li", [e("router-link", {attrs: {to: "/"}}, [t._v("Company")])], 1), t._v(" "), e("li", [e("router-link", {attrs: {to: "/"}}, [t._v("Portfolio")])], 1), t._v(" "), e("li", [e("router-link", {attrs: {to: "/"}}, [t._v("Blog")])], 1)])]), t._v(" "), t._m(0)])]), t._v(" "), e("div", {
                staticClass: "full-page-background",
                staticStyle: {"background-image": "url(static/img/full-screen-image-1.jpg)"}
            })])]), t._v(" "), e("div", {staticClass: "collapse navbar-collapse off-canvas-sidebar"}, [e("ul", {staticClass: "nav nav-mobile-menu"}, [e("router-link", {
                attrs: {
                    to: "/register",
                    tag: "li"
                }
            }, [e("a", [t._v("Register")])]), t._v(" "), e("router-link", {
                attrs: {
                    to: "/admin/overview",
                    tag: "li"
                }
            }, [e("a", [t._v("Dashboard")])])], 1)])])
        }, i = [function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "copyright"}, [t._v("\n            © Coded with\n            "), e("i", {staticClass: "fa fa-heart heart"}), t._v(" by\n            "), e("a", {
                attrs: {
                    href: "https://github.com/cristijora",
                    target: "_blank"
                }
            }, [t._v("Cristi Jora")]), t._v(".\n            Designed by "), e("a", {
                attrs: {
                    href: "https://www.creative-tim.com/?ref=pdf-vuejs",
                    target: "_blank",
                    rel: "noopener"
                }
            }, [t._v("Creative Tim")]), t._v(".\n          ")])
        }], n = {render: s, staticRenderFns: i};
        a.a = n
    }, ok9g: function (t, a, e) {
        "use strict";
        e.d(a, "a", function () {
            return s
        });
        var s = "AIzaSyAamVCoyQ4AuvBpxVRMs9P-HFkfPVQj0Kw"
    }, oxVq: function (t, a, e) {
        "use strict";
        var s = e("cMGX");
        a.a = {
            components: {LPagination: s.a}, data: function () {
                return {defaultPagination: 3, infoPagination: 5}
            }
        }
    }, p25l: function (t, a, e) {
        "use strict";
        function s(t) {
            e("yeEk")
        }

        var i = e("tp1z"), n = e("c0cX"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, plhd: function (t, a, e) {
        "use strict";
        function s(t) {
            e("uX3D")
        }

        var i = e("mk+A"), n = e("3bPY"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, pnxw: function (t, a, e) {
        "use strict";
        var s, i = e("bOdI"), n = e.n(i), l = e("Dte2"), o = (e.n(l), e("q4le")), c = e.n(o), r = e("isE6"),
            d = (e.n(r), e("+BTi")), u = (e.n(d), e("LR6y")), v = e.n(u), m = e("bhVK");
        a.a = {
            components: (s = {LSwitch: m.a}, n()(s, v.a.name, v.a), n()(s, c.a.name, c.a), s), data: function () {
                return {
                    tableData: [{name: "Andrew Mike", job: "Develop", salary: "€ 99,225", active: !1}, {
                        name: "John Doe",
                        job: "Design",
                        salary: "€ 89,241",
                        active: !1
                    }, {name: "Alex Mike", job: "Design", salary: "€ 92,144", active: !1}, {
                        name: "Mike Monday",
                        job: "Marketing",
                        salary: "€ 49,990",
                        active: !0
                    }, {name: "Paul dickens", job: "Communication", salary: "€ 69,201", active: !0}],
                    productsTable: [{
                        image: "static/img/blog-1.jpg",
                        title: "10 Things that all designers do",
                        description: "Most beautiful agenda for the office, really nice paper and black cover. Most beautiful agenda for the office.",
                        date: "30/08/2016",
                        views: "1,225"
                    }, {
                        image: "static/img/blog-2.jpg",
                        title: "Back to School Offer",
                        description: "Design is not just what it looks like and feels like. Design is how it works.",
                        date: "17/07/2016",
                        views: "49,302"
                    }, {
                        image: "static/img/blog-3.jpg",
                        title: "First Dribbble Meetup in Romania",
                        description: "A groundbreaking Retina display. All-flash architecture. Fourth-generation Intel processors.",
                        date: "23/06/2016",
                        views: "1,799"
                    }, {
                        image: "static/img/blog-4.jpg",
                        title: "How we created our startup with 0$",
                        description: "A desk is a generally wooded piece of furniture and a type of useful table often used in a school or office setting for various academic or professional activities ...",
                        date: "30/08/2016",
                        views: "23,030"
                    }, {
                        image: "static/img/blog-5.jpg",
                        title: "To use or not to use Bootstrap",
                        description: "The Office Chair adapts naturally to virtually every body and is a permanent fixture.",
                        date: "10/05/2016",
                        views: "13,763"
                    }]
                }
            }, methods: {
                handleLike: function (t, a) {
                    alert("Your clicked on Like button")
                }, handleEdit: function (t, a) {
                    alert("Your want to edit " + a.name)
                }, handleDelete: function (t, a) {
                    alert("Your want to delete " + a.name)
                }, getSummaries: function (t) {
                    var a = this, e = t.columns, s = [];
                    return e.forEach(function (t, i) {
                        if (0 === i) s[i] = "Total"; else if (i < e.length - 1) s[i] = ""; else {
                            var n = 0;
                            a.productsTable.forEach(function (t) {
                                n += t.quantity * t.price
                            }), s[i] = "€ " + n
                        }
                    }), s
                }
            }
        }
    }, qE6V: function (t, a) {
    }, qJii: function (t, a) {
    }, qO4o: function (t, a, e) {
        "use strict";
        var s, i = e("bOdI"), n = e.n(i), l = e("Dte2"), o = (e.n(l), e("q4le")), c = e.n(o), r = e("isE6"),
            d = (e.n(r), e("+BTi")), u = (e.n(d), e("LR6y")), v = e.n(u);
        a.a = {
            components: (s = {}, n()(s, v.a.name, v.a), n()(s, c.a.name, c.a), s), data: function () {
                return {
                    tableData: [{
                        id: 1,
                        name: "Dakota Rice",
                        salary: "$36.738",
                        country: "Niger",
                        city: "Oud-Turnhout"
                    }, {id: 2, name: "Minerva Hooper", salary: "$23,789", country: "Curaçao", city: "Sinaai-Waas"}, {
                        id: 3,
                        name: "Sage Rodriguez",
                        salary: "$56,142",
                        country: "Netherlands",
                        city: "Baileux"
                    }, {
                        id: 4,
                        name: "Philip Chaney",
                        salary: "$38,735",
                        country: "Korea, South",
                        city: "Overland Park"
                    }, {
                        id: 5,
                        name: "Doris Greene",
                        salary: "$63,542",
                        country: "Malawi",
                        city: "Feldkirchen in Kärnten"
                    }]
                }
            }, methods: {
                tableRowClassName: function (t, a) {
                    return 0 === a ? "success" : 2 === a ? "info" : 4 === a ? "danger" : 6 === a ? "warning" : ""
                }
            }
        }
    }, qWtj: function (t, a) {
    }, qsbZ: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "col-md-12"}, [e("time-line", [e("time-line-item", {
                staticClass: "timeline-inverted",
                attrs: {badgeType: "danger", badgeIcon: "ti-gallery"}
            }, [e("span", {
                staticClass: "label label-danger",
                attrs: {slot: "header"},
                slot: "header"
            }, [t._v("Some title")]), t._v(" "), e("p", {
                attrs: {slot: "body"},
                slot: "body"
            }, [t._v("\n        Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my family We just had fun with the “future” theme !!!   It was a fun night all together ... The always rude Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.")]), t._v(" "), e("h6", {
                attrs: {slot: "footer"},
                slot: "footer"
            }, [e("i", {staticClass: "ti-time"}), t._v("\n        11 hours ago via Twitter\n      ")])]), t._v(" "), e("time-line-item", {
                attrs: {
                    badgeType: "success",
                    badgeIcon: "ti-check-box"
                }
            }, [e("span", {
                staticClass: "label label-success",
                attrs: {slot: "header"},
                slot: "header"
            }, [t._v("Another Title")]), t._v(" "), e("p", {
                attrs: {slot: "body"},
                slot: "body"
            }, [t._v("\n        Thank God for the support of my wife and real friends. I also wanted to point out that it’s the first album to go number 1 off of streaming!!! I love you Ellen and also my number one design rule of anything I do from shoes to music to homes is that Kim has to like it....")])]), t._v(" "), e("time-line-item", {
                staticClass: "timeline-inverted",
                attrs: {badgeType: "info", badgeIcon: "ti-credit-card"}
            }, [e("span", {
                staticClass: "label label-success",
                attrs: {slot: "header"},
                slot: "header"
            }, [t._v("Another Title")]), t._v(" "), e("div", {
                attrs: {slot: "body"},
                slot: "body"
            }, [e("p", [t._v("\n          Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown LA 11:10PM")]), t._v(" "), e("p", [t._v("\n          What if Kanye made a song about Kanye Royère doesn't make a Polar bear bed but the Polar bear couch is my favorite piece of furniture we own It wasn’t any Kanyes Set on his goals Kanye")]), t._v(" "), e("hr"), t._v(" "), e("drop-down", {staticClass: "btn-group"}, [e("button", {
                staticClass: "btn btn-info dropdown-toggle",
                attrs: {slot: "title", href: "#", type: "button", "data-toggle": "dropdown"},
                slot: "title"
            }, [e("i", {staticClass: "ti-settings"}), t._v(" "), e("span", {staticClass: "caret"})]), t._v(" "), e("li", [e("a", {attrs: {href: "#action"}}, [t._v("Action")])]), t._v(" "), e("li", [e("a", {attrs: {href: "#action"}}, [t._v("Another action")])]), t._v(" "), e("li", [e("a", {attrs: {href: "#here"}}, [t._v("Something else here")])]), t._v(" "), e("li", {staticClass: "divider"}), t._v(" "), e("li", [e("a", {attrs: {href: "#link"}}, [t._v("Separated link")])])])], 1)]), t._v(" "), e("time-line-item", {
                attrs: {
                    badgeType: "warning",
                    badgeIcon: "ti-gallery"
                }
            }, [e("span", {
                staticClass: "label label-warning",
                attrs: {slot: "header"},
                slot: "header"
            }, [t._v("Another Title")]), t._v(" "), e("p", {
                attrs: {slot: "body"},
                slot: "body"
            }, [t._v("\n        Tune into Big Boy's 92.3 I'm about to play the first single from Cruel Winter Tune into Big Boy's 92.3 I'm about to play the first single from Cruel Winter also to Kim’s hair and makeup Lorraine jewelry and the whole style squad at Balmain and the Yeezy team. Thank you Anna for the invite thank you to the whole Vogue team")])])], 1)], 1)
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, r0Vj: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("ul", {staticClass: "nav nav-mobile-menu"}, [t._m(0), t._v(" "), e("drop-down", [e("template", {slot: "title"}, [e("i", {staticClass: "nc-icon nc-planet"})]), t._v(" "), e("a", {
                staticClass: "dropdown-item",
                attrs: {href: "#"}
            }, [t._v("Create New Post")]), t._v(" "), e("a", {
                staticClass: "dropdown-item",
                attrs: {href: "#"}
            }, [t._v("Manage Something")]), t._v(" "), e("a", {
                staticClass: "dropdown-item",
                attrs: {href: "#"}
            }, [t._v("Do Nothing")]), t._v(" "), e("a", {
                staticClass: "dropdown-item",
                attrs: {href: "#"}
            }, [t._v("Submit to Live")]), t._v(" "), e("a", {
                staticClass: "dropdown-item",
                attrs: {href: "#"}
            }, [t._v("Another action")])], 2), t._v(" "), e("drop-down", [e("template", {slot: "title"}, [e("i", {staticClass: "nc-icon nc-bell-55"}), t._v(" "), e("span", {staticClass: "notification"}, [t._v("5")]), t._v(" "), e("span", {staticClass: "d-lg-none"}, [t._v("Notification")])]), t._v(" "), e("a", {
                staticClass: "dropdown-item",
                attrs: {href: "#"}
            }, [t._v("Notification 1")]), t._v(" "), e("a", {
                staticClass: "dropdown-item",
                attrs: {href: "#"}
            }, [t._v("Notification 2")]), t._v(" "), e("a", {
                staticClass: "dropdown-item",
                attrs: {href: "#"}
            }, [t._v("Notification 3")]), t._v(" "), e("a", {
                staticClass: "dropdown-item",
                attrs: {href: "#"}
            }, [t._v("Notification 4")]), t._v(" "), e("a", {
                staticClass: "dropdown-item",
                attrs: {href: "#"}
            }, [t._v("Another notification")])], 2), t._v(" "), e("drop-down", [e("template", {slot: "title"}, [e("i", {staticClass: "nc-icon nc-bullet-list-67"})]), t._v(" "), e("a", {
                staticClass: "dropdown-item",
                attrs: {href: "#"}
            }, [e("i", {staticClass: "nc-icon nc-umbrella-13"}), t._v(" Help Center\n    ")]), t._v(" "), e("a", {
                staticClass: "dropdown-item",
                attrs: {href: "#"}
            }, [e("i", {staticClass: "nc-icon nc-email-85"}), t._v(" Messages\n    ")]), e("a", {
                staticClass: "dropdown-item",
                attrs: {href: "#"}
            }, [e("i", {staticClass: "nc-icon nc-settings-90"}), t._v(" Settings\n  ")]), t._v(" "), e("div", {staticClass: "divider"}), t._v(" "), e("a", {
                staticClass: "dropdown-item",
                attrs: {href: "#"}
            }, [e("i", {staticClass: "nc-icon nc-lock-circle-open"}), t._v(" Lock Screen\n    ")]), t._v(" "), e("a", {
                staticClass: "dropdown-item text-danger",
                attrs: {href: "#"}
            }, [e("i", {staticClass: "nc-icon nc-button-power"}), t._v(" Log out\n    ")])], 2)], 1)
        }, i = [function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("form", {
                staticClass: "navbar-form navbar-left navbar-search-form",
                attrs: {role: "search"}
            }, [e("div", {staticClass: "input-group"}, [e("i", {staticClass: "nc-icon nc-zoom-split"}), t._v(" "), e("input", {
                staticClass: "form-control",
                attrs: {type: "text", value: "", placeholder: "Search..."}
            })])])
        }], n = {render: s, staticRenderFns: i};
        a.a = n
    }, rAs3: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {
                directives: [{
                    name: "click-outside",
                    rawName: "v-click-outside",
                    value: t.closeDropDown,
                    expression: "closeDropDown"
                }], staticClass: "fixed-plugin"
            }, [e("div", {
                staticClass: "dropdown show-dropdown",
                class: {show: t.isOpen}
            }, [e("a", {attrs: {"data-toggle": "dropdown"}}, [e("i", {
                staticClass: "fa fa-cog fa-2x",
                on: {click: t.toggleDropDown}
            })]), t._v(" "), e("ul", {
                staticClass: "dropdown-menu",
                class: {show: t.isOpen}
            }, [e("li", {staticClass: "adjustments-line"}, [e("a", {
                staticClass: "switch-trigger centered-row",
                attrs: {href: "#"}
            }, [e("p", [t._v("Background Image")]), t._v(" "), e("l-switch", {
                attrs: {
                    "on-text": "ON",
                    "off-text": "OFF",
                    value: t.backgroundImageEnabled
                }, on: {
                    input: function (a) {
                        return t.updateValue("backgroundImageEnabled", a)
                    }
                }
            })], 1)]), t._v(" "), e("li", {staticClass: "adjustments-line"}, [e("a", {
                staticClass: "switch-trigger centered-row",
                attrs: {href: "#"}
            }, [e("p", [t._v("Sidebar Mini")]), t._v(" "), e("l-switch", {
                attrs: {
                    "on-text": "ON",
                    "off-text": "OFF",
                    value: t.sidebarMini
                }, on: {
                    input: function (a) {
                        return t.updateValue("sidebarMini", a)
                    }
                }
            })], 1)]), t._v(" "), e("li", {staticClass: "adjustments-line text-center"}, [e("a", {staticClass: "switch-trigger background-color"}, [e("p", [t._v("Filters")]), t._v(" "), e("div", {staticClass: "pull-right centered-row"}, t._l(t.sidebarColors, function (a) {
                return e("span", {
                    staticClass: "badge filter",
                    class: ["badge-" + a.color, {active: a.active}],
                    attrs: {"data-color": a.color},
                    on: {
                        click: function (e) {
                            t.changeSidebarBackground(a)
                        }
                    }
                })
            })), t._v(" "), e("div", {staticClass: "clearfix"})])]), t._v(" "), e("li", {staticClass: "header-title"}, [t._v("Sidebar Images")]), t._v(" "), t._l(t.images, function (a) {
                return e("li", {
                    key: a.src,
                    class: {active: a.active}
                }, [e("a", {staticClass: "img-holder switch-trigger dropdown-item"}, [e("img", {
                    attrs: {
                        src: a.src,
                        alt: "..."
                    }, on: {
                        click: function (e) {
                            t.changeSidebarImage(a)
                        }
                    }
                })])])
            }), t._v(" "), e("li", {staticClass: "button-container"}, [e("div", {}, [e("a", {
                staticClass: "btn btn-info btn-block btn-fill",
                attrs: {href: t.freeUrl, target: "_blank"}
            }, [t._v("Get Free Demo")])])]), t._v(" "), e("li", {staticClass: "button-container"}, [e("div", {}, [e("a", {
                staticClass: "btn btn-danger btn-block btn-fill",
                attrs: {href: t.buyUrl, target: "_blank"}
            }, [t._v("Buy for $49")])])]), t._v(" "), e("li", {staticClass: "button-container"}, [e("div", {}, [e("a", {
                staticClass: "btn btn-default btn-block",
                attrs: {href: t.documentationLink, target: "_blank"}
            }, [t._v("Documentation")])])]), t._v(" "), e("li", {staticClass: "header-title d-flex justify-content-center"}, [t._v("Thank you for sharing!")]), t._v(" "), e("li", {staticClass: "button-container"}, [e("social-sharing", {
                attrs: {
                    url: t.shareUrl,
                    title: "Vue Light Bootstrap Dashboard PRO - Premium Bootstrap Admin Template for Vue.js",
                    hashtags: "vuejs, dashboard, bootstrap",
                    "twitter-user": "creativetim"
                }, inlineTemplate: {
                    render: function () {
                        var t = this, a = t.$createElement, e = t._self._c || a;
                        return e("div", {staticClass: "centered-buttons"}, [e("network", {
                            staticClass: "btn btn-facebook btn-icon",
                            attrs: {network: "facebook"}
                        }, [e("i", {staticClass: "fa fa-fw fa-facebook"})]), t._v(" "), e("network", {
                            staticClass: "btn btn-pinterest btn-icon",
                            attrs: {network: "pinterest"}
                        }, [e("i", {staticClass: "fa fa-fw fa-pinterest"})]), t._v(" "), e("network", {
                            staticClass: "btn btn-twitter btn-icon",
                            attrs: {network: "twitter"}
                        }, [e("i", {staticClass: "fa fa-fw fa-twitter"})])], 1)
                    }, staticRenderFns: []
                }
            })], 1)], 2)])])
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, raCH: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("nav", {staticClass: "navbar navbar-expand-lg "}, [e("div", {staticClass: "container-fluid"}, [e("div", {staticClass: "navbar-minimize"}, [e("button", {
                staticClass: "btn btn-outline btn-fill btn-round btn-icon d-none d-lg-block",
                on: {click: t.minimizeSidebar}
            }, [e("i", {class: t.$sidebar.isMinimized ? "fa fa-ellipsis-v" : "fa fa-navicon"})])]), t._v(" "), e("a", {staticClass: "navbar-brand"}, [t._v(t._s(this.$route.name))]), t._v(" "), e("button", {
                staticClass: "navbar-toggler navbar-toggler-right",
                class: {toggled: t.$sidebar.showSidebar},
                attrs: {type: "button", "aria-expanded": "false"},
                on: {click: t.toggleSidebar}
            }, [e("span", {staticClass: "navbar-toggler-bar burger-lines"}), t._v(" "), e("span", {staticClass: "navbar-toggler-bar burger-lines"}), t._v(" "), e("span", {staticClass: "navbar-toggler-bar burger-lines"})]), t._v(" "), e("div", {staticClass: "collapse navbar-collapse justify-content-end"}, [t._m(0), t._v(" "), e("ul", {staticClass: "navbar-nav"}, [e("drop-down", [e("i", {
                staticClass: "nc-icon nc-planet",
                attrs: {slot: "title"},
                slot: "title"
            }), t._v(" "), e("a", {
                staticClass: "dropdown-item",
                attrs: {href: "#"}
            }, [t._v("Create New Post")]), t._v(" "), e("a", {
                staticClass: "dropdown-item",
                attrs: {href: "#"}
            }, [t._v("Manage Something")]), t._v(" "), e("a", {
                staticClass: "dropdown-item",
                attrs: {href: "#"}
            }, [t._v("Do Nothing")]), t._v(" "), e("a", {
                staticClass: "dropdown-item",
                attrs: {href: "#"}
            }, [t._v("Submit to live")]), t._v(" "), e("li", {staticClass: "divider"}), t._v(" "), e("a", {
                staticClass: "dropdown-item",
                attrs: {href: "#"}
            }, [t._v("Another action")])]), t._v(" "), e("drop-down", [e("template", {slot: "title"}, [e("i", {staticClass: "nc-icon nc-bell-55"}), t._v(" "), e("span", {staticClass: "notification"}, [t._v("5")]), t._v(" "), e("span", {staticClass: "d-lg-none"}, [t._v("Notification")])]), t._v(" "), e("a", {
                staticClass: "dropdown-item",
                attrs: {href: "#"}
            }, [t._v("Notification 1")]), t._v(" "), e("a", {
                staticClass: "dropdown-item",
                attrs: {href: "#"}
            }, [t._v("Notification 2")]), t._v(" "), e("a", {
                staticClass: "dropdown-item",
                attrs: {href: "#"}
            }, [t._v("Notification 3")]), t._v(" "), e("a", {
                staticClass: "dropdown-item",
                attrs: {href: "#"}
            }, [t._v("Notification 4")]), t._v(" "), e("a", {
                staticClass: "dropdown-item",
                attrs: {href: "#"}
            }, [t._v("Another notification")])], 2), t._v(" "), e("drop-down", {attrs: {position: "right"}}, [e("i", {
                staticClass: "nc-icon nc-bullet-list-67",
                attrs: {slot: "title"},
                slot: "title"
            }), t._v(" "), e("a", {
                staticClass: "dropdown-item",
                attrs: {href: "#"}
            }, [e("i", {staticClass: "nc-icon nc-email-85"}), t._v(" Messages\n          ")]), t._v(" "), e("a", {
                staticClass: "dropdown-item",
                attrs: {href: "#"}
            }, [e("i", {staticClass: "nc-icon nc-umbrella-13"}), t._v(" Help Center\n          ")]), t._v(" "), e("a", {
                staticClass: "dropdown-item",
                attrs: {href: "#"}
            }, [e("i", {staticClass: "nc-icon nc-settings-90"}), t._v(" Settings\n          ")]), t._v(" "), e("div", {staticClass: "divider"}), t._v(" "), e("a", {
                staticClass: "dropdown-item",
                attrs: {href: "#"}
            }, [e("i", {staticClass: "nc-icon nc-lock-circle-open"}), t._v(" Lock Screen\n          ")]), t._v(" "), e("a", {
                staticClass: "dropdown-item text-danger",
                attrs: {href: "#"}
            }, [e("i", {staticClass: "nc-icon nc-button-power"}), t._v(" Log out\n          ")])])], 1)])])])
        }, i = [function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("ul", {staticClass: "nav navbar-nav mr-auto"}, [e("form", {
                staticClass: "navbar-form navbar-left navbar-search-form",
                attrs: {role: "search"}
            }, [e("div", {staticClass: "input-group"}, [e("label", {attrs: {for: "searchInput"}}), t._v(" "), e("i", {staticClass: "nc-icon nc-zoom-split"}), t._v(" "), e("input", {
                staticClass: "form-control",
                attrs: {id: "searchInput", type: "text", value: "", placeholder: "Search..."}
            })])])])
        }], n = {render: s, staticRenderFns: i};
        a.a = n
    }, rcpx: function (t, a, e) {
        "use strict";
        var s = e("mvHQ"), i = e.n(s), n = e("OKre");
        a.a = {
            components: {Task: n.a}, data: function () {
                return {tasks: [{title: 'Sign contract for "What are conference organizers afraid of?"'}, {title: "Lines From Great Russian Literature? Or E-mails From My Boss?"}, {title: "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit"}, {title: "Create 4 Invisible User Experiences you Never Knew About"}, {title: 'Read "Following makes Medium better"'}, {title: "Unfollow 5 enemies from twitter"}]}
            }, methods: {
                handleTaskEdit: function (t) {
                    alert("You want to edit task: " + i()(this.tasks[t]))
                }, handleTaskDelete: function (t) {
                    alert("You want to delete task: " + i()(this.tasks[t]))
                }
            }
        }
    }, rrf0: function (t, a, e) {
        "use strict";
        function s(t) {
            e("WPIJ")
        }

        var i = e("KFeR"), n = e("ngp6"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, s64l: function (t, a, e) {
        "use strict";
        var s, i = e("bOdI"), n = e.n(i), l = e("Dte2"), o = (e.n(l), e("q4le")), c = e.n(o), r = e("isE6"),
            d = (e.n(r), e("LR6y")), u = e.n(d), v = e("I4nB"), m = (e.n(v), e("STLj")), f = e.n(m), p = e("cDSy"),
            b = (e.n(p), e("+BTi")), h = (e.n(b), e("e0Bm")), _ = e.n(h), g = e("bGai"), C = e("0cEq"), y = e("BDm9"),
            w = e.n(y);
        a.a = {
            components: (s = {LPagination: g.g}, n()(s, _.a.name, _.a), n()(s, f.a.name, f.a), n()(s, u.a.name, u.a), n()(s, c.a.name, c.a), s),
            computed: {
                pagedData: function () {
                    return this.tableData.slice(this.from, this.to)
                }, queriedData: function () {
                    var t = this.tableData;
                    return "" !== this.searchQuery && (t = this.fuseSearch.search(this.searchQuery), this.pagination.total = t.length), t.slice(this.from, this.to)
                }, to: function () {
                    var t = this.from + this.pagination.perPage;
                    return this.total < t && (t = this.total), t
                }, from: function () {
                    return this.pagination.perPage * (this.pagination.currentPage - 1)
                }, total: function () {
                    return this.pagination.total = this.tableData.length, this.tableData.length
                }
            },
            data: function () {
                return {
                    pagination: {perPage: 5, currentPage: 1, perPageOptions: [5, 10, 25, 50], total: 0},
                    searchQuery: "",
                    propsToSearch: ["name", "email", "age"],
                    tableColumns: [{prop: "name", label: "Name", minWidth: 200}, {
                        prop: "email",
                        label: "Email",
                        minWidth: 250
                    }, {prop: "age", label: "Age", minWidth: 100}, {prop: "salary", label: "Salary", minWidth: 120}],
                    tableData: C.a,
                    fuseSearch: null
                }
            },
            methods: {
                handleLike: function (t, a) {
                    alert("Your want to like " + a.name)
                }, handleEdit: function (t, a) {
                    alert("Your want to edit " + a.name)
                }, handleDelete: function (t, a) {
                    var e = this.tableData.findIndex(function (t) {
                        return t.id === a.id
                    });
                    e >= 0 && this.tableData.splice(e, 1)
                }
            },
            mounted: function () {
                this.fuseSearch = new w.a(this.tableData, {keys: ["name", "email"]})
            }
        }
    }, sJNR: function (t, a, e) {
        "use strict";
        function s(t) {
            e("Gn77")
        }

        var i = e("RxU9"), n = e("FyWQ"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, sOrg: function (t, a, e) {
        "use strict";
        function s(t) {
            e("h6ab")
        }

        var i = e("jF1F"), n = e("Wc2y"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, sYoA: function (t, a, e) {
        "use strict";
        a.a = {
            name: "l-table", props: {columns: Array, data: Array}, methods: {
                hasValue: function (t, a) {
                    return "undefined" !== t[a.toLowerCase()]
                }, itemValue: function (t, a) {
                    return t[a.toLowerCase()]
                }
            }
        }
    }, sqW6: function (t, a) {
    }, sveg: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {
                staticClass: "form-group",
                class: [{"input-group": t.hasIcon}, {"has-error": t.error}, {"is-error el-form-item": t.error}]
            }, [t._t("label", [t.label ? e("label", {
                staticClass: "control-label",
                class: t.labelClasses
            }, [t._v("\n      " + t._s(t.label) + "\n    ")]) : t._e()]), t._v(" "), t._t("addonLeft", [t.addonLeftIcon ? e("span", {staticClass: "input-group-addon"}, [e("i", {class: t.addonLeftIcon})]) : t._e()]), t._v(" "), t._t("default", [e("input", t._b({
                staticClass: "form-control",
                class: t.inputClasses,
                attrs: {"aria-describedby": "addon-right addon-left"},
                domProps: {value: t.value},
                on: {
                    input: function (a) {
                        t.$emit("input", a.target.value)
                    }
                }
            }, "input", t.$attrs, !1))]), t._v(" "), t._t("helpBlock", [t.error ? e("small", {staticClass: "text-danger"}, [t._v("\n      " + t._s(t.error) + "\n    ")]) : t._e()]), t._v(" "), t._t("infoBlock"), t._v(" "), t._t("addonRight", [t.addonRightIcon ? e("span", {staticClass: "input-group-addon"}, [e("i", {class: t.addonRightIcon})]) : t._e()])], 2)
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, "t/P/": function (t, a, e) {
        "use strict";
        function s(t) {
            e("MTzt")
        }

        var i = e("/lDg"), n = e("V/dr"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, tkw7: function (t, a) {
    }, tnjr: function (t, a, e) {
        "use strict";
        function s(t) {
            e("Cmwc")
        }

        var i = e("4TyY"), n = e("ndzL"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, tp1z: function (t, a, e) {
        "use strict";
        var s = e("rrf0");
        a.a = {
            components: {AuthLayout: s.a}, methods: {
                toggleNavbar: function () {
                    document.body.classList.toggle("nav-open")
                }, closeMenu: function () {
                    document.body.classList.remove("nav-open"), document.body.classList.remove("off-canvas-sidebar")
                }
            }, beforeDestroy: function () {
                this.closeMenu()
            }
        }
    }, txZW: function (t, a) {
    }, uBlW: function (t, a, e) {
        "use strict";
        function s(t) {
            e("MaUU")
        }

        var i = e("i1OL"), n = e("f+UQ"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, uX3D: function (t, a) {
    }, usxd: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement;
            return (t._self._c || a)("li", {
                staticClass: "breadcrumb-item",
                class: {active: t.active}
            }, [t._t("default")], 2)
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, voKW: function (t, a, e) {
        "use strict";
        function s(t) {
            e("qJii")
        }

        var i = e("GJUC"), n = e("04l3"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, w1A5: function (t, a, e) {
        "use strict";
        function s(t) {
            e("qE6V")
        }

        var i = e("WFc1"), n = e("54K4"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, w3r2: function (t, a, e) {
        "use strict";
        function s(t) {
            e("wBUi")
        }

        var i = e("V4gk"), n = e("EQDZ"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, w6g4: function (t, a, e) {
        "use strict";
        var s = e("Xxa5"), i = e.n(s), n = e("exGp"), l = e.n(n);
        a.a = {
            name: "sidebar",
            props: {
                title: {type: String, default: "Vue LBD PRO"},
                backgroundColor: {
                    type: String, default: "black", validator: function (t) {
                        return -1 !== ["", "blue", "azure", "green", "orange", "red", "purple", "black"].indexOf(t)
                    }
                },
                backgroundImage: {type: String, default: "static/img/sidebar-5.jpg"},
                activeColor: {
                    type: String, default: "success", validator: function (t) {
                        return -1 !== ["primary", "info", "success", "warning", "danger"].indexOf(t)
                    }
                },
                logo: {type: String, default: "static/img/vue-logo.png"},
                sidebarLinks: {
                    type: Array, default: function () {
                        return []
                    }
                },
                autoClose: {type: Boolean, default: !0}
            },
            provide: function () {
                return {autoClose: this.autoClose}
            },
            computed: {
                sidebarStyle: function () {
                    return {backgroundImage: "url(" + this.backgroundImage + ")"}
                }
            },
            methods: {
                initScrollBarAsync: function () {
                    var t = this;
                    return l()(i.a.mark(function a() {
                        var s;
                        return i.a.wrap(function (a) {
                            for (; ;)switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2, e.e(4).then(e.bind(null, "ieps"));
                                case 2:
                                    return a.next = 4, e.e(2).then(e.bind(null, "Fiov"));
                                case 4:
                                    s = a.sent, s.initialize(t.$refs.sidebarScrollArea);
                                case 6:
                                case"end":
                                    return a.stop()
                            }
                        }, a, t)
                    }))()
                }
            },
            mounted: function () {
                this.initScrollBarAsync()
            },
            beforeDestroy: function () {
                this.$sidebar.showSidebar && (this.$sidebar.showSidebar = !1)
            }
        }
    }, wBUi: function (t, a) {
    }, wJKS: function (t, a) {
    }, wKHZ: function (t, a, e) {
        "use strict";
        function s(t) {
            e("aCJe")
        }

        var i = e("ZpwA"), n = e("ELss"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, wd1N: function (t, a, e) {
        "use strict";
        function s(t) {
            e("P+FU")
        }

        var i = e("3SVV"), n = e("1GYD"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, wfiG: function (t, a, e) {
        "use strict";
        var s = e("2rGO"), i = (e.n(s), e("+BTi")), n = (e.n(i), e("nu7/")), l = e.n(n), o = e("I3G/");
        e.n(o).a.use(l.a.directive), a.a = {}
    }, wwrw: function (t, a) {
    }, x7X6: function (t, a, e) {
        "use strict";
        a.a = {
            name: "l-switch",
            props: {
                value: [Array, Boolean],
                onText: String,
                offText: String,
                color: {
                    type: String, default: "", validator: function (t) {
                        return ["", "blue", "azure", "green", "orange", "red", "purple", "black"].includes(t)
                    }
                }
            },
            computed: {
                switchClass: function () {
                    var t = "bootstrap-switch-", a = this.model ? "on" : "off", e = t + a;
                    return this.color && (e = e + " " + t + this.color), e
                }, model: {
                    get: function () {
                        return this.value
                    }, set: function (t) {
                        this.$emit("input", t)
                    }
                }
            },
            methods: {
                triggerToggle: function () {
                    this.model = !this.model
                }
            }
        }
    }, xEwP: function (t, a, e) {
        "use strict";
        var s = function () {
            var t = this, a = t.$createElement, e = t._self._c || a;
            return e("div", {staticClass: "row"}, [e("div", {staticClass: "col-md-12"}, [e("card", {staticClass: "card-map"}, [e("div", {
                attrs: {slot: "header"},
                slot: "header"
            }, [e("h4", {staticClass: "card-title"}, [t._v("Satellite Map")])]), t._v(" "), e("div", {
                staticClass: "map map-big",
                attrs: {id: "satelliteMap"}
            })])], 1), t._v(" "), e("div", {staticClass: "col-md-6"}, [e("card", {staticClass: "card-map"}, [e("div", {
                attrs: {slot: "header"},
                slot: "header"
            }, [e("h4", {staticClass: "card-title"}, [t._v("Regular Map")])]), t._v(" "), e("div", {
                staticClass: "map",
                attrs: {id: "regularMap"}
            })])], 1), t._v(" "), e("div", {staticClass: "col-md-6"}, [e("card", {staticClass: "card-map"}, [e("div", {
                attrs: {slot: "header"},
                slot: "header"
            }, [e("h4", {staticClass: "card-title"}, [t._v("Custom Skin & Settings Map")])]), t._v(" "), e("div", {
                staticClass: "map",
                attrs: {id: "customSkinMap"}
            })])], 1)])
        }, i = [], n = {render: s, staticRenderFns: i};
        a.a = n
    }, xJD8: function (t, a, e) {
        "use strict";
        a.a = {
            mounted: function () {
                this.$notify({
                    component: {template: "<span>Welcome to <b>Vue Light Bootstrap Dashboard PRO</b> - a beautiful bootstrap 4 dashboard for every web developer.</span>"},
                    icon: "nc-icon nc-app"
                })
            }
        }
    }, xJvq: function (t, a, e) {
        "use strict";
        a.a = {
            name: "l-pagination", props: {
                color: {
                    type: String, default: "", validator: function (t) {
                        return ["", "blue", "azure", "green", "orange", "red", "purple"].includes(t)
                    }
                },
                pageCount: {type: Number, default: 0},
                perPage: {type: Number, default: 10},
                total: {type: Number, default: 0},
                value: {type: Number, default: 1}
            }, computed: {
                paginationClass: function () {
                    return "pagination-" + this.color
                }, totalPages: function () {
                    return this.pageCount > 0 ? this.pageCount : this.total > 0 ? Math.ceil(this.total / this.perPage) : 1
                }, pagesToDisplay: function () {
                    return this.totalPages > 0 && this.totalPages < this.defaultPagesToDisplay ? this.totalPages : this.defaultPagesToDisplay
                }, minPage: function () {
                    if (this.value >= this.pagesToDisplay) {
                        var t = Math.floor(this.pagesToDisplay / 2);
                        return t + this.value > this.totalPages ? this.totalPages - this.pagesToDisplay + 1 : this.value - t
                    }
                    return 1
                }, maxPage: function () {
                    if (this.value >= this.pagesToDisplay) {
                        var t = Math.floor(this.pagesToDisplay / 2), a = t + this.value;
                        return a < this.totalPages ? a : this.totalPages
                    }
                    return this.pagesToDisplay
                }
            }, data: function () {
                return {defaultPagesToDisplay: 5}
            }, methods: {
                range: function (t, a) {
                    for (var e = [], s = t; s <= a; s++)e.push(s);
                    return e
                }, changePage: function (t) {
                    this.$emit("input", t)
                }, nextPage: function () {
                    this.value < this.totalPages && this.$emit("input", this.value + 1)
                }, prevPage: function () {
                    this.value > 1 && this.$emit("input", this.value - 1)
                }
            }, watch: {
                perPage: function (t) {
                    this.$emit("input", 1)
                }, total: function (t) {
                    this.$emit("input", 1)
                }
            }
        }
    }, xMts: function (t, a, e) {
        "use strict";
        function s(t) {
            e("KxUp")
        }

        var i = e("/HWS"), n = e("gJ0j"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, xNhz: function (t, a, e) {
        "use strict";
        a.a = {}
    }, xoph: function (t, a) {
    }, y7c3: function (t, a, e) {
        "use strict";
        function s(t) {
            e("mHi7")
        }

        var i = e("kKo+"), n = e("XbVV"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, yWRo: function (t, a, e) {
        "use strict";
        a.a = {name: "breadcrumb-item", props: {active: {type: Boolean, default: !1}}}
    }, yXlY: function (t, a) {
    }, yeEk: function (t, a) {
    }, ygyo: function (t, a, e) {
        "use strict";
        function s(t) {
            e("mq/s")
        }

        var i = e("w6g4"), n = e("k4Hu"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, yv97: function (t, a) {
    }, z1KV: function (t, a) {
    }, zmgK: function (t, a, e) {
        "use strict";
        function s(t) {
            e("ZEDZ")
        }

        var i = e("/hVr"), n = e("/YsT"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, znQV: function (t, a, e) {
        "use strict";
        function s(t) {
            e("GTnb")
        }

        var i = e("WA4b"), n = e("7hl0"), l = e("VU/8"), o = s, c = l(i.a, n.a, o, null, null);
        a.a = c.exports
    }, zsQU: function (t, a) {
    }, "zwn/": function (t, a, e) {
        "use strict";
        var s = e("TW0o"), i = e("voKW");
        a.a = {components: {TimeLine: s.a, TimeLineItem: i.a}}
    }
}, ["NHnr"]);
