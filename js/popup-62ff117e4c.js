! function(e) {
	function t(n) {
		if (i[n]) return i[n].exports;
		var a = i[n] = {
			exports: {},
			id: n,
			loaded: !1
		};
		return e[n].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports
	}
	var i = {};
	t.m = e, t.c = i, t.p = "", t(0)
}([function(e, t, i) {
	var n = i(2),
		a = i(12),
		s = i(14),
		r = i(15),
		o = i(16);
	i(35);
	i(36),
		function(e) {
			try {
				window.console = i(37)
			} catch (t) {}
			try {
				e.sohu_mp = {
					popup: function() {
						new n({
							el: ".wrapper-box"
						}), new a({
							el: ".wrapper-box"
						}), new s({
							el: ".wrapper-box"
						}), new r({
							auto: "#auto-list",
							focus: "#frame-house",
							autoUrl: "http://auto.sohu.com/s2017/2017weiqyhuizong/index.shtml",
							focusUrl: "http://t1.focus-res.cn/adv-sv-show/sohu-wei-house/wei-house.html"
						}), o.newsBlkRectAd()
					}
				}
			} catch (t) {
				throw console.log("初始化代码错误"), t
			}
		}(window)
}, , function(e, t, i) {
	var n = i(3),
		a = i(7);
	e.exports = Backbone.View.extend({
		data: {
			firstFrame: !0,
			lastTime: (new Date).getTime(),
			isInput: !1,
			NAV_SWITCH_INTER: 200,
			ANIMATE_FAST_TIME: 100,
			MOUSE_INTER: 500,
			IMG_ENLARGE_VALUE: 112,
			IMG_TITLE_HEIGHT: 22
		},
		render: {},
		events: {
			"mouseenter .wei-nav .wei-menu li": "navHoverEnter",
			"mouseleave .wei-nav .wei-menu li": "navHoverLeave",
			"mouseenter .wei-nav .wei-nav-do": "navNext",
			"click .wei-nav .wei-nav-do": "navNext",
			"mouseenter .img-warp": "imgEnlarge",
			"mouseleave .img-warp": "imgRestore",
			"focus .wei-search .search-input": "searchBoxFcous",
			"blur .wei-search .search-input": "searchBoxBlur",
			"mouseenter .wei-head .search-btn": "searchBtnHover",
			"mouseleave .wei-head .search-btn": "searchBtnLoseHover"
		},
		initialize: function() {
			this.holdCtrl(), this.data.firstFrame = !0, this.nowTab = "news", this.timeout = null,
				this.trigger("news"), new n({
					el: "#search",
					channel_id: 8
				}), $("#search").append("<div class='search-hidex'></div>")
		},
		navHoverEnter: function(e) {
			var t = $(e.currentTarget).attr("name");
			if (t != this.nowTab) {
				var i = $(e.currentTarget).attr("is_request"),
					n = $(e.currentTarget).attr("chanelId"),
					s = this,
					r = $(".wei-nav .wei-menu li").index(e.currentTarget);
				this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(function() {
					s.$el.find(".wei-nav .wei-menu li").removeClass("cur").eq(r).addClass(
							"cur"), s.$el.find(".wei-main .wei-cont").removeClass("show"),
						i && "true" == i && (new a({
							el: "#frame-" + t,
							channel_id: n
						}), $(e.currentTarget).attr("is_request", "")), s.$el.find(
							".wei-main #frame-" + t).addClass("show"), "game" === t &&
						"http://wan.sogou.com/html/special/wmh_v2/wangyou.html" !== s.$el
						.find(".wei-main #frame-" + t + " iframe")[0].src && (s.$el.find(
								".wei-main #frame-" + t + " iframe")[0].src =
							"http://wan.sogou.com/html/special/wmh_v2/wangyou.html"), s
						.nowTab = t, s.trigger(t)
				}, 300)
			}
		},
		navHoverLeave: function(e) {
			this.timeout && clearTimeout(this.timeout)
		},
		navNext: function() {
			var e = (new Date).getTime();
			return !(e - this.data.lastTime < this.data.MOUSE_INTER) && (this.data.lastTime = e,
				this.data.firstFrame ? (this.$el.find(".wei-navbox .wei-menu-first").stop(!1, !
					1).animate({
					"margin-top": "-39px"
				}, this.data.NAV_SWITCH_INTER), this.$el.find(".wei-nav-do a").removeClass(
					"show").eq(1).addClass("show"), this.data.firstFrame = !1) : (this.$el.find(
					".wei-navbox .wei-menu-first").stop(!1, !1).animate({
					"margin-top": "0"
				}, this.data.NAV_SWITCH_INTER), this.$el.find(".wei-nav-do a").removeClass(
					"show").eq(0).addClass("show"), this.data.firstFrame = !0), !1)
		},
		imgEnlarge: function(e) {
			$(e.currentTarget).find("img").stop(!1, !1).animate({
				width: this.data.IMG_ENLARGE_VALUE + "%",
				height: this.data.IMG_ENLARGE_VALUE + "%",
				top: "-" + (this.data.IMG_ENLARGE_VALUE - 100) / 2 + "%",
				left: "-" + (this.data.IMG_ENLARGE_VALUE - 100) / 2 + "%"
			}, this.data.NAV_SWITCH_INTER);
			var t = $(e.currentTarget).find(".desc");
			t.find(".txt").height() > this.data.IMG_TITLE_HEIGHT && t.stop(!1, !1).animate({
				height: "32px",
				"line-height": "16px"
			}, this.data.ANIMATE_FAST_TIME)
		},
		imgRestore: function(e) {
			$(e.currentTarget).find("img").stop(!1, !1).animate({
					width: "100%",
					height: "100%",
					top: 0,
					left: 0
				}, this.data.NAV_SWITCH_INTER), $(e.currentTarget).find(".desc").stop(!1, !1)
				.animate({
					height: "22px",
					"line-height": "22px"
				}, this.data.ANIMATE_FAST_TIME)
		},
		searchBoxFcous: function(e) {
			this.data.isInput = !0, $(e.target).next().addClass("focus")
		},
		searchBoxBlur: function(e) {
			this.data.isInput = !1, $(e.target).next().removeClass("focus")
		},
		searchBtnHover: function(e) {
			$(e.target).addClass("focus")
		},
		searchBtnLoseHover: function(e) {
			this.data.isInput || $(e.target).removeClass("focus")
		},
		trigger: function(e) {
			var t = document.getElementsByTagName("head")[0],
				i = document.body,
				n = t || i,
				a = ($("[data-name='" + e + "']"), $("[data-strategy]").attr("data-strategy"),
					"http://pv.sohu.com/tc_ev.gif?tc_tab=s_" + e + "&SUV=" + function() {
						var e = new RegExp("(^| )SUV=([^;]*)(;|$)");
						return unescape(document.cookie.match(e) && document.cookie.match(e)[2])
					}());
			if (n) {
				var s = document.createElement("script");
				s.src = a, n.appendChild(s)
			} else document.write("<script type='text/javascript' src='" + a + "'><\/script>")
		},
		holdCtrl: function() {
			$(document).keydown(function(e) {
				if (e = e || window.event, e.wheelDelta && (1 == e.ctrlKey || 1 == e
						.metaKey)) return !1
			}), document.body.onmousewheel = function(e) {
				if (e = e || window.event, e.wheelDelta && (1 == e.ctrlKey || e.metaKey))
				return !1
			}
		}
	})
}, function(e, t, i) {
	var n = i(4);
	e.exports = Backbone.View.extend({
		template: _.template(i(6)),
		events: {
			"click .search-btn": "onSearch",
			"keydown [data-val='key']": "keydown",
			"focus [data-val='key']": "focus",
			"blur [data-val='key']": "blur"
		},
		data: {
			d_val: ""
		},
		p_id_map: {
			HOMEPAGE: "0001",
			CHANNEL: "0002",
			TAG: "0003",
			ARTICLE: "0004"
		},
		search_host: "https://www.sogou.com/",
		render: function() {
			this.$el.html(this.template(this.data))
		},
		initialize: function(e) {
			var t = this;
			if (e.scene && (this.p_id = this.p_id_map[e.scene]), this.data.d_val = e && e.d_val,
				this.data.d_val && (this.data.d_val = "ئىزدەش:" + this.data.d_val), "TAG" == e.scene)
				this.render();
			else {
				var i = e.channel_id || 0,
					a = new n,
					s = [];
				this.render(), a.on("sync", function(e) {
					e.forEach(function(e) {
							e.channel_id == i && s.push(e.word)
						}), t.randomWord = s[Math.floor(Math.random() * s.length)], t
						.randomWord && (t.data.d_val = "ئىزدەش:" + t.randomWord), t.$el.find(
							".search-input").attr("value", t.data.d_val)
				}), a.on("error", function() {
					t.render()
				}), a.fetch()
			}
		},
		onSearch: function(e) {
			var t, i = $(this.$el).find('[data-val="key"]').val();
			i == this.data.d_val && (i = i.replace("ئىزدەش:", "")), "" == i ? t = this.search_host :
				(this.randomWord && i == this.randomWord && (this.p_id = "0005"), t = [this
					.search_host, "sogou?query=", window.encodeURIComponent(i), "&pid=",
					"sogou-wsse-f880d0d6a01ba52f-", this.p_id, "&ie=utf8"
				].join("")), window.open(t)
		},
		keydown: function(e) {
			var t = window.encodeURIComponent($(this.$el).find('[data-val="key"]').val()),
				i = navigator.userAgent,
				n = "" == t ? this.search_host : this.search_host + "web?query=" + t +
				" site:sohu.com";
			if (13 == e.keyCode)
				if (/MSIE ([^;]+)/.test(i)) {
					var a = $("<form/>", {
						target: "_blank",
						action: n,
						style: "display:none;width:0;height:0",
						method: "post"
					}).appendTo(document.body);
					a.submit().remove()
				} else this.onSearch()
		},
		focus: function(e) {
			$(e.currentTarget).val() == this.data.d_val && (e.currentTarget.value = "")
		},
		blur: function() {
			var e = this;
			setTimeout(function() {
				e.$el.find('[data-val="key"]').val(e.data.d_val)
			}, 200)
		}
	})
}, function(e, t, i) {
	var n = i(5);
	e.exports = n.extend({
		init: function(e) {
			this.url = "http://hotword.sogoucdn.com/hot_word.json"
		},
		fetch: function() {
			var e = this;
			$.ajax({
				url: this.url,
				type: "GET",
				dataType: "jsonp",
				jsonpCallback: "_getjson",
				success: function(t) {
					e.trigger("sync", t)
				},
				error: function(t) {
					e.trigger("error", t)
				},
				timeout: 3e3
			})
		}
	})
}, function(e, t) {
	var i = function() {
		this.url = "", this._ev_callback = {}, this.init.apply(this, arguments)
	};
	i.prototype = {
		init: function() {},
		fetch: function(e) {
			var t = e && e.data,
				i = e && e.success || function(e) {
					this.attrs = e, a.trigger("sync", this.attrs)
				},
				n = /\/\//g.test(this.url) ? this.url : "http://v2.sohu.com/public-api/" + this.url,
				a = this;
			$.ajax({
				url: n,
				data: t,
				method: e.method || "GET",
				dataType: e.dataType || "jsonp",
				success: i,
				error: function() {
					a.trigger("error", arguments)
				}
			})
		},
		on: function(e, t) {
			this._ev_callback[e] = this._ev_callback[e] || [], this._ev_callback[e].push({
				fn: t
			})
		},
		one: function(e, t) {
			this._ev_callback[e] = this._ev_callback[e] || [], this._ev_callback[e].push({
				fn: t,
				one: !0
			})
		},
		trigger: function(e, t) {
			var i = this,
				n = [];
			this._ev_callback[e] && this._ev_callback[e].forEach(function(e) {
				e.one && n.push(e.fn), e.fn && e.fn.call(i, t)
			}), n && n.forEach(function(t) {
				i.off(e, t)
			})
		},
		off: function(e, t) {
			this._ev_callback[e] = this._ev_callback[e] || [];
			var i = -1;
			this._ev_callback[e].forEach(function(e, n) {
				e.fn === t && (i = n)
			}), i >= 0 && this._ev_callback[e].splice(i, 1)
		}
	}, i.extend = function(e) {
		var t = this,
			i = function() {
				return t.apply(this, arguments)
			};
		return $.extend(i, t), i.prototype = new t, $.extend(i.prototype, e), i.__super__ = t.prototype, i
	}, e.exports = i
}, function(e, t) {
	e.exports =
		'<input type="text" class="search-input left" value="<%=d_val%>"  data-val="key" data-spm-acode="8066">\n<span class="search-btn" data-spm-acode="8067"><i class="search-icon icon"></i></span>\n<form target=""  style="display:none;width:0;height:0"></form>\n\n\n'
}, function(e, t, i) {
	var n = i(8);
	e.exports = Backbone.View.extend({
		template: _.template(i(10)),
		statetemplate: _.template(i(11)),
		data: {
			newsList: [],
			focusList: [],
			state: "",
			channelId: "",
			channelNameForSpmB: ""
		},
		model: null,
		initialize: function(e) {
			var t = this;
			this.data.state = "loading", this.renderState();
			var i = new n({
				channel_id: e.channel_id
			});
			i.on("sync", function(e) {
				for (var i = "smpu.popup.focus-" + e.channelNameForSpmB + "-left", n =
						"smpu.popup.fd-" + e.channelNameForSpmB, a = 0; a < e.length; a++)
					Object.keys(e[a]) == i && (t.data.focusList = e[a][i]), Object.keys(e[
						a]) == n && (t.data.newsList = e[a][n]);
				t.data.channelId = e.channelId, t.data.channelNameForSpmB = e
					.channelNameForSpmB, t.render(), window.sohuSpm && "function" ==
					typeof window.sohuSpm.domDidChange && window.sohuSpm.domDidChange()
			}), i.on("error", function() {
				t.data.state = "error", t.renderState()
			}), i.fetch()
		},
		render: function() {
			this.$el.html(this.template(this.data))
		},
		renderState: function() {
			this.$el.html(this.statetemplate(this.data))
		}
	})
}, function(e, t, i) {
	var n = i(5),
		a = i(9);
	e.exports = n.extend({
		init: function(e) {
			this.channel_id = e.channel_id, this.channel_template_dict = {
				30: "it",
				23: "fashion",
				15: "business",
				43: "society",
				18: "auto",
				17: "sports",
				10: "mil",
				25: "learning",
				12: "cul",
				41: "acg",
				29: "travel"
			}, this.url = "https://cis.sohu.com/cis/feeds"
		},
		fetch: function(e) {
			var t = this,
				i = a.get("SUV") || "";
			this.spmFocus = "smpu.popup.focus-" + this.channel_template_dict[this.channel_id] +
				"-left", this.spmNews = "smpu.popup.fd-" + this.channel_template_dict[this
					.channel_id];
			var n = {
				clientType: 3,
				pvId: i,
				requestId: this.genRequestId(),
				refererSpm: this.spmNews,
				refererPath: window.location.pathname,
				referSpm: this.getQueryString("spm") || "",
				referPath: window.document.referrer ? "/" + window.document.referrer.replace(
					/\?+[^?]*$/, "").split("/").slice(3).join("/") : "",
				sceneParam: [{
					page: 1,
					size: 6,
					spm: this.spmFocus
				}, {
					page: 1,
					size: 13,
					spm: this.spmNews
				}]
			};
			$.ajax({
				url: t.url,
				type: "POST",
				dataType: "json",
				data: JSON.stringify(n),
				contentType: "application/json;charset=UTF-8",
				success: function(e) {
					t.trigger("sync", t.handleFeed(e))
				},
				error: function(e) {
					t.trigger("error", e)
				},
				timeout: 3e3
			})
		},
		handleFeed: function(e) {
			for (var t = [], i = 0; i < Object.keys(e).length; i++) {
				for (var n = {}, a = e[Object.keys(e)[i]].data, s = 0; s < a.length; s++) a[s]
					.resourceData && a[s].resourceData.contentData && (a[s] = Object.assign(a[s]
						.resourceData.contentData, a[s].resourceType)), a[s].resourceData && a[s]
					.resourceData.outlinkData && (a[s] = Object.assign(a[s].resourceData
						.outlinkData, a[s].resourceType));
				n[Object.keys(e)[i]] = a, t.push(n)
			}
			for (var s = 0; s < t.length; s++) {
				var r = t[s][Object.keys(t[s])];
				if (!t[s] || !r.length) return [];
				for (var i = 0; i < r.length; i++) r[i].imgUrl = r[i].cover || r[i].imageUrl || r[i]
					.images && r[i].images[0] || r[i].authorPic || ""
			}
			return t.channelId = this.channel_id, t.channelNameForSpmB = this.channel_template_dict[
				this.channel_id], t
		},
		getQueryString: function(e) {
			var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
				i = window.location.search.substr(1).match(t);
			return null != i ? unescape(i[2]) : ""
		},
		genRequestId: function() {
			for (var e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", t =
					new Array(7), i = 0; i < t.length; i++) t[i] = e[parseInt(Math.random() * e
				.length)];
			return Date.now() + "_" + t.join("")
		}
	})
}, function(e, t) {
	try {
		e.exports = function() {
			var e = {},
				t = function(t, i, n) {
					var a;
					if ("undefined" != typeof document) {
						if (arguments.length > 1) {
							if (n = $.extend({
									path: "/"
								}, e, n), "number" == typeof n.expires) {
								var s = new Date;
								s.setMilliseconds(s.getMilliseconds() + 864e5 * n.expires), n.expires = s
							}
							try {
								a = JSON.stringify(i), /^[\{\[]/.test(a) && (i = a)
							} catch (h) {}
							return i = encodeURIComponent(String(i)).replace(
								/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
								decodeURIComponent), t = encodeURIComponent(String(t)), t = t.replace(
								/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), t = t.replace(
								/[\(\)]/g, escape), document.cookie = [t, "=", i, n.expires ?
								"; expires=" + n.expires.toUTCString() : "", n.path ? "; path=" + n
								.path : "", n.domain ? "; domain=" + n.domain : "", n.secure ?
								"; secure" : ""
							].join("")
						}
						t || (a = {});
						for (var r = document.cookie ? document.cookie.split("; ") : [], o = 0; o < r
							.length; o++) {
							var d = r[o].split("="),
								c = d.slice(1).join("=");
							'"' === c.charAt(0) && (c = c.slice(1, -1));
							try {
								var u = d[0].replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
								if (c = c.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent), this.json) try {
									c = JSON.parse(c)
								} catch (h) {}
								if (t === u) {
									a = c;
									break
								}
								t || (a[u] = c)
							} catch (h) {}
						}
						return a
					}
				};
			return t.set = t, t.get = function(e) {
				return t.call(t, e)
			}, t.getJSON = function() {
				return t.apply({
					json: !0
				}, [].slice.call(arguments))
			}, t.defaults = e, t.remove = function(e, i) {
				t(e, "", $.extend(i, {
					expires: -1
				}))
			}, t
		}()
	} catch (i) {
		console.log(i), e.exports = {}
	}
}, function(e, t) {
	e.exports =
		'    <%\n        var preloadUrl="http://statics.itc.cn/web/static/images/pic/preload.png";\n    %>\n    \x3c!-- 页面内容渲染 --\x3e\n    <div class="left pub-left" data-spm="focus-<%=channelNameForSpmB%>-left">\n        <% for(var i = 0; i < focusList.length; i++) {%>\n            <%\n                var focus = focusList[i]\n                if(i< 3){ \n            %>\n            <div class="wei-pic"><a class="img-warp" href="https://www.sohu.com<%= focus.url%>&tc_tab=s_<%= channelNameForSpmB%>&block=s_focus&index=s_<%=i%>" target="_blank"><img src="<%= focus.imgUrl%>" alt="" ><span class="desc"><em class="bg"></em><em class="txt"><%=focus.title%></em></span></a></div>\n        <% }} %>\n    </div>\n    <div class="left pub-center" data-spm="fd-<%=channelNameForSpmB%>">\n        <div class="list">\n            <ul>\n                <% for(var i=0; i < newsList.length; i++){ %>\n                    <% var news = newsList[i] %>\n                \n                    <% if(i%6 == 0) {%>\n                        <h3><a href="https://www.sohu.com<%= news.url%>&tc_tab=s_<%= channelNameForSpmB%>&block=s_news&index=s_<%=i%>" target="_blank"><%= news.title%></a></h3> \n                        \n                    <% }else{ %>\n                        <li><span class="title-point"></span><a href="https://www.sohu.com<%= news.url%>&tc_tab=s_<%= channelNameForSpmB%>&block=s_news&index=s_<%= i %>" target="_blank"><%= news.title%></a></li>\n                    <% } %>\n                    \n                <% } %>\n            </ul>\n        </div>\n    </div>\n    <div class="right pub-right" data-spm="focus-<%=channelNameForSpmB%>-right">\n        <% for(var i = 0; i < focusList.length; i++) {%>\n            <% var focus = focusList[i] %>\n            <% if(i >= 3 && i< 6){%>\n                <div class="wei-pic"><a class="img-warp" href="https://www.sohu.com<%= focus.url%>&tc_tab=s_<%= channelNameForSpmB%>&block=s_focus&index=s_<%=i%>" target="_blank"><img src="<%= focus.imgUrl%>" alt="" ><span class="desc"><em class="bg"></em><em class="txt"><%=focus.title%></em></span></a></div>\n            <% } %>\n        <% } %>\n    </div>\n'
}, function(e, t) {
	e.exports =
		'<div class="state-page">\n    <% if(state ==\'loading\') {%>\n        <div class="channel-loading">\n            <span class="loading-icon"></span>\n            加载中...\n        </div>\n    <%} else if(state == \'error\'){%>\n        <div class="channel-error">\n            加载失败，刷新试试~\n        </div>\n    <% } %>\n</div>'
}, function(e, t, i) {
	var n = i(13);
	e.exports = Backbone.View.extend({
		data: {
			sendReq: null,
			advertPos: {
				broadcast: {
					frame: "news",
					index: 4
				}
			},
//			BROADCAST_URL: "http://sp.qf.56.com/type/getOpBanner.do?count=1&type=22"
			// bashbet elan orni
		},
		render: {},
		events: {},
		initialize: function() {
			var e = this;
			this.data.sendReq = new n, this.data.sendReq.on("sync", function(t) {
				try {
					e.addAdvert(t.message.banners[0])
				} catch (i) {
					console.log("data is null")
				}
			}), this.data.sendReq.on("error", function() {
				e.$el.find(".wei-main #frame-news .img-list li").eq(e.data.advertPos
					.broadcast.index).html(
					'<a href="http://www.uzdil.net" target="_blank"><img src="https://cdnf.nur.cn/uqurfile/2019/1201/2019120184f6b6630a2782deb0825bad70073d2a152423.jpgthumb_210_150.jpg" alt="" ></a>'
					)
			}), this.data.sendReq.fetch(this.data.BROADCAST_URL, "GET")
		},
		addAdvert: function(e) {
			this.$el.find(".wei-main #frame-" + this.data.advertPos.broadcast.frame).find(
				".img-list li").eq(this.data.advertPos.broadcast.index).find("a").attr("href", e
				.url).find("img").attr("src", e.picUrl).next().find(".txt").html(e.title)
		}
	})
}, function(e, t, i) {
	var n = i(5);
	e.exports = n.extend({
		fetch: function(e, t) {
			var i = this;
			$.ajax({
				url: e,
				type: t,
				dataType: "jsonp",
				success: function(e) {
					i.trigger("sync", e)
				},
				error: function(e) {
					i.trigger("error", e)
				},
				timeout: 3e3
			})
		}
	})
}, function(e, t) {
	e.exports = Backbone.View.extend({
		data: {},
		render: {},
		events: {
			"mouseenter .wei-nav .wei-menu li": "navHoverEnter"
		},
		initialize: function() {},
		navHoverEnter: function(e) {
			var t = $(e.currentTarget).attr("name");
			this.$el.find("#frame-" + t + " .wei-pic img[data-src]").each(function(e, t) {
				var i = $(this).data("src");
				t.src = i
			})
		}
	})
}, function(e, t) {
	function i(e) {
		var t = window.sohu_IP_Loc;
		$(e.auto).html('<iframe width="346" height="172" class="frame-page" src="' + e.autoUrl +
				"?sohu_IP_Loc=" + t +
				'" frameborder="0" scrolling="no" style="height:172px;width:346px;"></iframe>'), $(e.focus)
			.html('<iframe width="748" height="383" class="frame-page" src="' + e.focusUrl + "?sohu_IP_Loc=" +
				t + '" frameborder="0" scrolling="no"></iframe>')
	}
	e.exports = i
}, function(e, t, i) {
	var n = i(17);
	e.exports = {
		newsBlkRectAd: function() {
			return n($("#frame-news .img-list li").eq(2), "rectangle", $.extend({}, {
				type: "popup",
				empty_ad: function() {}
			})), this
		}
	}
}, function(e, t, i) {
	var n = i(18),
		a = function(e, t, i) {
			var a = "";
			a = i && i.sub_id && i.channel_id ? "sub" : i && "dsy" == i.type ? "pic_collection" : i && i
				.news_id && i.channel_id ? "article" : i && i.tag_id && i.channel_id ? "tag" : i &&
				"news_channel" == i.type ? "news_channel" : i && i.channel_id ? "channel" : i && "v3" == i
				.type ? "v3_index" : i && "popup" == i.type ? "popup" : "index";
			var s = new n(a, t, e);
			return s.init(i), s
		};
	e.exports = a
}, function(e, t, i) {
	function n(e) {
		if ("object" != typeof e || null == e) return 0;
		try {
			if (Object.keys) return Object.keys(e).length;
			var t, i = [];
			for (t in o) Object.prototype.hasOwnProperty.call(o, t) && i.push(t);
			return i.length
		} catch (n) {
			return 0
		}
	}
	var a = i(19),
		s = i(22),
		r = new s,
		d = (i(9), i(24)),
		c = i(29),
		u = i(32),
		h = i(23),
		l = function(e, t, i) {
			this.$el = i, d[e] && (this.page_type = e, this.ad_type = t, this.ad = d[e][t], this.ad && (this
				.adps = this.ad.size, this.AdInstance = this.ad.Ins, this.support_flash = h(t) ? "1" :
				"0", this.needMultiItem = this.ad.needMultiItem))
		},
		f = i(33),
		p = i(34);
	l.prototype = {
		init: function(e) {
			if (!this.ad) return void(this.empty_ad ? this.empty_ad() : this.$el.hide());
			var t = this;
			this.empty_ad = e.empty_ad || this.empty_ad;
			var i, s = (new Date).getTime(),
				o = this.ad.ad_id;
			this.$el.attr("data-god-id", o);
			var d = f(e),
				h = u(this.page_type, this.ad_type, e),
				l = e.maxreads ? e.maxreads > 21 ? 21 : e.maxreads : 1,
				m = p(e),
				_ = e.data,
				g = new a({
					turn: h || 1,
					id: o,
					position: e.position,
					channel_id: d,
					sub_id: e.sub_id,
					tag_id: e.tag_id,
					news_id: e.news_id,
					subid: e.subid,
					adps: t.adps,
					maxreads: l,
					multichn: m,
					support_flash: t.support_flash
				});
			i = (new Date).getTime() - s;
			var v = function(n) {
				var a = n && n.monitorkey || "",
					s = t.$el.offset() || {};
				"" === a ? s.left = s.top = "" : t.$el.is(":visible") ? (s.left = s.left.toFixed(1),
					s.top = s.top.toFixed(1)) : s.left = s.top = 0, r.pv_trigger({
					source: n && n.source || "",
					newsid: e.news_id || "",
					subid: e.subid || "",
					aid: n && n.adid || "",
					apid: "beans_" + o,
					impid: n && n.impression_id || "",
					mkey: a,
					latcy: i,
					freq: n && n.freq || 0,
					ax: s && s.left,
					ay: s && s.top,
					ed: n && n.ed || "",
					bucket: n && n.bucket || "",
					ext: n && n.ext || "",
					uloc: n && n.uloc || "",
					newschn: d,
					turn: h,
					position: e.position || "",
					pgid: c.get(e),
					shbd_monitor_ext: n && n.shbd_monitor_ext || "",
					sf: t.support_flash
				})
			};
			g.on("sync", function(a) {
				if (("column_2" == t.ad_type || "column_3" == t.ad_type || "column_4" == t
						.ad_type) && "v3" == e.type) {
					if (1 == a.length && a[0]) a[0].resource.width <= 575 && (a = a[0].source ?
						[{
							source: a[0].source
						}] : [], v(a[0]));
					else if (a.length > 1 && a[0]) switch (a[0].resource && a[0].resource
					.type) {
						case "iframe":
							break;
						case "image":
						case "flash":
							a[0].resource.width <= 575 && (a[1] && 575 == a[1].resource
								.width && "iframe" != a[1].resource.type || (a = a[0]
									.source ? [{
										source: a[0].source
									}] : [], v(a[0])));
							break;
						default:
							console.log("请求数据", a)
					} else v(a[0]);
					console.log("请求数据", a)
				}
				a[0] && n(a[0]) > 1 ? (t.$el.show().attr("data-monitorkey", a[0].monitorkey), t
					.ad_instance = new t.AdInstance({
						newsid: e.news_id || "",
						subid: e.subid || "",
						data: t.needMultiItem ? a : a[0],
						turn: h,
						ad_id: o,
						el: t.$el,
						latcy: i,
						position: e.position,
						channel_id: e.channel_id,
						sub_id: e.sub_id,
						tag_id: e.tag_id,
						news_id: e.news_id,
						ad_channel_id: d,
						sf: t.support_flash,
						ad_type: t.ad_type,
						type: e.type
					}), t.ad_instance.render()) : (t.ad_instance && t.ad_instance.hide && t
					.ad_instance.hide(), t.empty_ad ? t.empty_ad() : t.$el.hide()), v(a[0])
			}), g.on("error", function() {
				v(), t.ad_instance && t.ad_instance.hide && t.ad_instance.hide(), t.empty_ad ? t
					.empty_ad() : t.$el.hide()
			}), _ ? g.trigger("sync", [_]) : this.ad.ad_id && g.fetch()
		},
		reset: function(e) {
			this.ad_instance && this.ad_instance.undelegateEvents(), this.init(e)
		}
	}, e.exports = l
}, function(e, t, i) {
	var n = i(5),
		a = i(9),
		s = i(20),
		r = i(21).ad_gtr_server,
		o = function(e) {
			e.file && "string" == typeof e.file && /^http/gi.test(e.file) && (e.file = e.file.replace(
				/^http(s)?:/gi, ""))
		};
	e.exports = n.extend({
		init: function(e) {
			this.itemspaceid = e.id, this.pgid = e.pgid, this.adsrc = 13, this.turn = e.turn, this
				.adps = e.adps, this.newsid = e.news_id || "", this.subid = e.subid || "", this
				.appid = "pcnews", this.newschn = e.channel_id, this._smuid = a.get("_smuid") || "",
				this.suv = a.get("SUV"), this.yyid = a.get("yyid") || "", this.support_flash = e
				.support_flash, this.duid = a.get("_duid"), this.position = e.position, this
				.maxreads = e.maxreads, this.multichn = e.multichn
		},
		fetch: function() {
			var e = this;
			this.url = r + "adgtr/?callback=?", $.ajax({
				url: this.url,
				dataType: "jsonp",
				data: {
					itemspaceid: this.itemspaceid,
					sf: this.support_flash,
					pgid: this.pgid,
					newschn: this.newschn,
					smuid: this._smuid,
					SUV: this.suv,
					newsid: this.newsid,
					subid: this.subid,
					appid: this.appid,
					yyid: this.yyid,
					adsrc: this.adsrc,
					adps: this.adps,
					turn: this.turn,
					duid: this.duid,
					position: this.position,
					pgid: s.get(),
					maxreads: this.maxreads,
					multichn: this.multichn
				},
				success: function(t) {
					if (t[0]) {
						var i = t[0];
						i.resource && o(i.resource), i.resource1 && o(i.resource1), i
							.resource2 && o(i.resource2), i.resource3 && o(i.resource3),
							i.resource4 && o(i.resource4), i.resource5 && o(i
							.resource5), i.resource6 && o(i.resource6)
					}
					e.trigger("sync", t)
				},
				error: function() {
					e.trigger("error")
				}
			})
		}
	})
}, function(e, t) {
	function i() {
		this.date = new Date, "function" != typeof this.newGUID && (i.prototype.newGUID = function() {
			this.date = new Date;
			var e = "";
			sexadecimalDate = this.hexadecimal(this.getGUIDDate(), 16), sexadecimalTime = this
				.hexadecimal(this.getGUIDTime(), 16);
			for (var t = 0; t < 9; t++) e += Math.floor(16 * Math.random()).toString(16);
			for (e += sexadecimalDate, e += sexadecimalTime; e.length < 32;) e += Math.floor(16 * Math
				.random()).toString(16);
			return this.formatGUID(e)
		}, i.prototype.getGUIDDate = function() {
			return this.date.getFullYear() + this.addZero(this.date.getMonth() + 1) + this.addZero(this
				.date.getDay())
		}, i.prototype.getGUIDTime = function() {
			return this.addZero(this.date.getHours()) + this.addZero(this.date.getMinutes()) + this
				.addZero(this.date.getSeconds()) + this.addZero(parseInt(this.date.getMilliseconds() /
					10))
		}, i.prototype.addZero = function(e) {
			return "NaN" != Number(e).toString() && e >= 0 && e < 10 ? "0" + Math.floor(e) : e
			.toString()
		}, i.prototype.hexadecimal = function(e, t, i) {
			return i != undefined ? parseInt(e.toString(), i).toString(t) : parseInt(e.toString())
				.toString(t)
		}, i.prototype.formatGUID = function(e) {
			return e.slice(0, 8) + "-" + e.slice(8, 12) + "-" + e.slice(12, 16) + "-" + e.slice(16,
				20) + "-" + e.slice(20)
		})
	}
	var n = new i;
	e.exports = {
		get: function() {
			return this._guid = this._guid || n.newGUID(), this._guid
		},
		reset: function() {
			this._guid = n.newGUID()
		}
	}
}, function(e, t) {
	var i = window.location.protocol || "http:";
	e.exports = {
		changyan_key: "cyqemw6s1",
		changyan_conf: "prod_54aaa410c404b5eca1efa2bb0bae7f64",
		counter_server: i + "http://pv.sohu.com",
		ad_gtr_server: i + "http://s.go.sohu.com/"
	}
}, function(e, t, i) {
	var n = i(5),
		a = (i(23), i(9)),
		s = document.referrer,
		r = function(e) {
			return window.encodeURIComponent && "function" == typeof encodeURIComponent ? encodeURIComponent(
				e) : window.encodeURI && "function" == typeof window.encodeURI ? window.encodeURI(e) : e
		},
		o = a.get("SUV"),
		d = function(e, t) {
			var i = "";
			t.at = t.at || "1", t.supplyid = "1", t.sf = t.sf, t.timestamp = (new Date).getTime(), t.r = Math
				.random(), t.rsln = window.screen.width + "*" + window.screen.height, t.smuid = a.get(
				"_smuid") || "";
			for (var n in t) i += n + "=" + t[n] + "&";
			return i = i.substring(0, i.length - 1), e = e + "?" + i, e = e + "&suv=" + o + "&pagerefer=" + r(
				s) + "&appid=pcnews"
		},
		c = function(e, t) {
			e = d(e, t), u(e)
		},
		u = function(e) {
			setTimeout(function() {
				var t = document.createElement("img");
				e.indexOf("?") > 0 ? t.src = e + "&_r=" + (new Date).getTime() : t.src = e + "?_r=" + (
					new Date).getTime(), $(t).css({
					display: "none",
					width: 0,
					height: 0
				}).appendTo("body").on("load error", function() {
					$(this).remove()
				})
			}, 0)
		};
	e.exports = n.extend({
		init: function() {},
		pv_trigger: function(e) {
			c("http://i.go.sohu.com/count/v", e)
		},
		av_trigger: function(e) {
			c("http://i.go.sohu.com/count/av", e)
		},
		click_trigger: function(e) {
			c("http://i.go.sohu.com/count/c", e)
		},
		get_click_trigger_url: function(e) {
			return d("http://i.go.sohu.com/count/c", e)
		},
		play_trigger: function(e) {
			c("http://i.go.sohu.com/count/vp", e)
		},
		trigger_imp: function(e) {
			e.url && 0 == e.url.indexOf("http") && u(e.url)
		},
		count_trigger: function(e) {
			u("http://pv.sohu.com/click.gif?id=10000063&suv=1506101635319085")
		}
	})
}, function(e, t) {
	e.exports = function(e) {
		var t = null;
		if (/chrome/.test(navigator.userAgent.toLowerCase()) && "feeds" == e) return !1;
		if ("index_side_txt" == e) return !1;
		if (document.all || document.getElementsByTagName("*")) {
			try {
				if (t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) return !0
			} catch (i) {}
			if (!t && navigator.plugins && navigator.plugins.length > 0) {
				var t = navigator.plugins["Shockwave Flash"];
				if (t) return !0
			}
		}
		return !1
	}
}, function(e, t, i) {
	var n = i(25),
		a = {
			popup: {
				rectangle: {
					ad_id: $("#frame-news .wei-ppa").attr("data-ad-id"),
					desc: "要闻频道左侧第三位置矩形广告",
					size: $("#frame-news .wei-ppa").attr("data-adps"),
					Ins: n
				}
			}
		};
	e.exports = a
}, function(e, t, i) {
	var n = i(26),
		a = function(e) {
			if (e.using_resource = {}, "picturetxt" === e.form && e.special && e.special.dict) {
				var t = e[e.special.dict.txt] || {},
					i = e[e.special.dict.picture] || {};
				e.using_resource.title = t, e.using_resource.picture = i
			}
		};
	e.exports = n.extend({
		template: _.template(i(31)),
		render: function() {
			var e = this;
			this.data && (this.data.adstyle = this.data.adstyle || "1", a(this.data), this.data
				.using_resource && (n.prototype.fix_ad_plus.call(this, this.data.using_resource
					.title), n.prototype.fix_ad_plus.call(this, this.data.using_resource
					.picture)), this.$el.html(this.template(this.data)), this.data
				.using_resource && this.data.using_resource.picture && n.prototype.trigger_imp
				.call(this, this.data.using_resource.picture.imp), 1 == this.$el.find(
					"img:eq(0)").size() ? this.$el.find("img:eq(0)").one("load", function() {
					e._ad_img_load()
				}) : e._ad_img_load())
		}
	})
}, function(e, t, i) {
	var n = i(22),
		a = new n,
		s = i(27),
		r = i(28),
		o = i(29);
	e.exports = Backbone.View.extend({
		template: _.template(i(30)),
		data: {},
		events: {
			"click a": "_click"
		},
		_click: function(e) {
			if (!$(e.currentTarget).is(".got-i-icon") && "javascript:void(0)" !== $(e.currentTarget)
				.attr("href")) {
				if (this.data.resource.clkm)
					for (var t = r.fix_imp_str(this.data.resource.clkm, {
							apid: "beans_" + this.ad_id,
							impid: this.data.impression_id
						}), i = 0; i < t.length; i++) a.trigger_imp({
						url: t[i]
					});
				var n = this.$el.offset(),
					s = e.target || e.srcElement;
				a.click_trigger({
					source: this.data.source || "",
					newsid: this.news_id || "",
					subid: this.subid || "",
					aid: this.data.adid,
					apid: "beans_" + this.ad_id,
					impid: this.data.impression_id,
					mkey: this.data.monitorkey,
					freq: this.data.freq || 0,
					ax: n && n.left.toFixed(1) || "",
					ay: n && n.top.toFixed(1) || "",
					cx: e.offsetX || e.clientX - s.getBoundingClientRect().left || e
						.clientX,
					cy: e.offsetY || e.clientY - s.getBoundingClientRect().top || e.clientY,
					ed: this.data.ed,
					bucket: this.data.bucket,
					ext: this.data.ext,
					uloc: this.data.uloc,
					turn: this.turn,
					sf: this.sf,
					newschn: this.ad_channel_id,
					pgid: this.pgid,
					shbd_monitor_ext: this.data.shbd_monitor_ext,
					latcy: this.latcy,
					position: this.position || ""
				})
			}
		},
		pv_trigger: function() {
			var e = this.$el.offset();
			a.pv_trigger({
				source: this.data.source || "",
				newsid: this.news_id || "",
				subid: this.subid || "",
				aid: this.data.adid,
				apid: "beans_" + this.ad_id,
				impid: this.data.impression_id,
				mkey: this.data.monitorkey,
				freq: this.data.freq || 0,
				ax: e && e.left || "",
				ay: e && e.top || "",
				ed: this.data.ed,
				bucket: this.data.bucket,
				ext: this.data.ext,
				uloc: this.data.uloc,
				turn: this.turn,
				newschn: this.ad_channel_id,
				rsln: window.screen.height + "0" + window.screen.width,
				shbd_monitor_ext: this.data.shbd_monitor_ext,
				pgid: this.pgid,
				latcy: this.latcy,
				sf: this.sf,
				position: this.position || ""
			})
		},
		av_trigger: function() {
			if (!this.av_triggered) {
				var e = this.$el.offset();
				s(this.$el) && (a.av_trigger({
					source: this.data.source || "",
					newsid: this.news_id || "",
					subid: this.subid || "",
					aid: this.data.adid,
					apid: "beans_" + this.ad_id,
					impid: this.data.impression_id,
					mkey: this.data.monitorkey,
					freq: this.data.freq || 0,
					ax: e && e.left || "",
					ay: e && e.top || "",
					ed: this.data.ed,
					bucket: this.data.bucket,
					ext: this.data.ext,
					uloc: this.data.uloc,
					turn: this.turn,
					newschn: this.ad_channel_id,
					rsln: window.screen.height + "0" + window.screen.width,
					shbd_monitor_ext: this.data.shbd_monitor_ext,
					pgid: this.pgid,
					latcy: this.latcy || "",
					position: this.position || "",
					sf: this.sf
				}), this.av_triggered = !0)
			}
		},
		initialize: function(e) {
			this.data = e.data, this.ad_id = e.ad_id, this.turn = e.turn, this.channel_id = e
				.channel_id, this.sub_id = e.sub_id, this.news_id = e.news_id, this.newsid = e
				.news_id || "", this.subid = e.subid || "", this.ad_channel_id = e.ad_channel_id,
				this.pgid = o.get(e), this.latcy = e.latcy, this.av_triggered = !1, this.position =
				e.position, this.sf = e.sf
		},
		_ad_img_load: function() {
			var e = this;
			$(window).on("resize scroll", function() {
				e.av_trigger()
			}), this.av_trigger()
		},
		trigger_imp: function(e) {
			if (e)
				for (var t = r.fix_imp_str(e, {
						apid: "beans_" + this.ad_id,
						impid: this.data.impression_id
					}), i = 0; i < t.length; i++) a.trigger_imp({
					url: t[i]
				})
		},
		fix_ad_plus: function(e) {
			e && e.click && (e.click = r.fix_adplus(e.click, {
				apid: "beans_" + this.ad_id,
				impid: this.data.impression_id
			}))
		},
		fix_ad_frame_url: function(e) {
			if (e && "iframe" == e.type) {
				var t = this.$el.offset(),
					i = a.get_click_trigger_url({
						source: this.data.source || "",
						newsid: this.news_id || "",
						subid: this.subid || "",
						aid: this.data.adid,
						apid: "beans_" + this.ad_id,
						impid: this.data.impression_id,
						mkey: this.data.monitorkey,
						freq: this.data.freq || 0,
						ax: t && t.left || "",
						ay: t && t.top || "",
						ed: this.data.ed,
						bucket: this.data.bucket,
						ext: this.data.ext,
						uloc: this.data.uloc,
						turn: this.turn,
						sf: this.sf,
						newschn: this.ad_channel_id,
						pgid: this.pgid,
						shbd_monitor_ext: this.data.shbd_monitor_ext,
						latcy: this.latcy,
						position: this.position || ""
					});
				/\[_SOHU_CLICK_ENC_\]/gi.test(e.file) ? e.file = e.file.replace(
					/\[_SOHU_CLICK_ENC_\]/gi, encodeURIComponent(i)) : e.file = e.file + (e.file
					.indexOf("?") > 0 ? "&" : "?") + "clkm=" + encodeURIComponent(i)
			}
		},
		render: function() {
			var e = this;
			if (this.data) {
				if (this.fix_ad_frame_url(this.data.resource), this.data.using_resource)
					for (var t in this.data.using_resource) this.fix_ad_plus.call(this, this.data
						.using_resource[t]);
				else this.data.resource && this.fix_ad_plus(this.data.resource);
				this.$el.html(this.template(this.data));
				for (var i = r.fix_imp_str(this.data.resource.imp, {
						apid: "beans_" + this.ad_id,
						impid: this.data.impression_id
					}), n = 0; n < i.length; n++) a.trigger_imp({
					url: i[n]
				});
				1 == this.$el.find("img:eq(0)").size() ? this.$el.find("img:eq(0)").one("load",
					function() {
						e._ad_img_load()
					}) : e._ad_img_load()
			}
		}
	})
}, function(e, t) {
	var i = function(e) {
		if (!e.is(":visible")) return !1;
		var t = $(window),
			i = {
				top: t.scrollTop(),
				left: t.scrollLeft()
			};
		i.right = i.left + t.width(), i.bottom = i.top + t.height();
		var n = e.outerHeight(),
			a = e.outerWidth();
		if (!a || !n) return !1;
		var s = e.offset();
		return s.right = s.left + a, s.bottom = s.top + n, !(i.right < s.left || i.left > s.right || i
			.bottom < s.top || i.top > s.bottom)
	};
	e.exports = i
}, function(e, t) {
	var i = function(e, t) {
		return /imp\.optaim.com|clk.optaim\.com|trackimp/gi.test(e) ? e.indexOf("?") > 0 ? e + "&apid=" + (
			t && t.apid) + "&impid=" + (t && t.impid) : e + "?apid=" + (t && t.apid) + "&impid=" + (t &&
			t.impid) : e
	};
	e.exports = {
		fix_imp_str: function(e, t) {
			var n = [];
			if (e)
				if (e instanceof Array)
					for (var a = 0; a < e.length; a++) n.push(i(e[a], t));
				else if ("string" == typeof e)
				if (0 == e.indexOf("[")) try {
					for (var s = JSON.parse(e), a = 0; a < s.length; a++) s[a] && n.push(i(s[a], t))
				} catch (r) {} else
					for (var s = e.split("|"), a = 0; a < s.length; a++) s[a] && n.push(i(s[a], t));
			return n
		},
		fix_adplus: i
	}
}, function(e, t) {
	var i = {
			42: "game",
			23: "fashion",
			15: "business",
			19: "yule",
			17: "sports",
			18: "auto",
			30: "it",
			41: "dm",
			12: "cul",
			13: "history",
			25: "learning",
			27: "astro",
			45: "joke",
			44: "pets",
			10: "mil",
			43: "view",
			28: "food",
			29: "travel",
			24: "health",
			8: "news",
			26: "baby"
		},
		n = function(e) {
			return e.sub_id ? "sub" : e.news_id ? "article" : "dsy" == e.type ? "pic" : e.tag_id ? "tag" : e
				.channel_id ? "channel" : "index"
		};
	e.exports = {
		get: function(e) {
			return (i[e.channel_id] || "sohu") + "-" + n(e)
		}
	}
}, function(e, t) {
	e.exports =
		'<%if(resource.type== "text"){%>\n<a  href="<%=resource.click%>" target="_blank"><%=resource.text%></a>\n<%}else{%>\n\n<%if(dsp_source){%>\n<span class="god-mark god-mark-origin"><%=dsp_source%></span>\n<%}%>\n<%if(!adstyle||adstyle=="1"){%>\n<span class="god-mark">广告</span>\n<%}%>\n<%if(resource.type!== "iframe"){%>\n<a  class="swf-top" href="<%=resource.click%>" target="_blank"></a>\n<%}%>\n<div>\n    <%if (resource.type== "flash"){%>\n    \x3c!--<embed src="<%=resource.file%>" width="<%=resource.width%>" height="<%=resource.height%>"></embed>--\x3e\n    <object type="application/x-shockwave-flash" data="<%=resource.file%>" width="<%=resource.width%>" height="<%=resource.height%>">\n        <param name="movie" value="<%=resource.file%>" />\n        <param name="wmode" value="opaque" />\n        <embed wmode="opaque"></embed>\n    </object>\n    <%}else if(resource.type== "image"){%>\n    <img src="<%=resource.file%>"/>\n    <%}else if(resource.type== "iframe"){%>\n    <iframe src="<%=resource.file%>" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes" width="<%=resource.width%>" height="<%=resource.height%>"></iframe>\n    <%}%>\n</div>\n<%}%>'
}, function(e, t) {
	e.exports =
		'<a href="<%=using_resource.picture.click%>" class="img-warp" target="_blank">\n    <img src="<%=using_resource.picture.file%>" alt="<%=using_resource.title.text%>" />\n    <span class="desc">\n        <em class="bg"></em>\n        <em class="txt"><%=using_resource.title.text%></em>\n    </span>\n</a>\n<%if(!adstyle||adstyle=="1"){%>\n    <span class="god-mark">广告</span>\n<%}%>'
}, function(e, t, i) {
	var n = i(9),
		a = function() {
			this.prefix = "ad_t_";
			for (var e = 1; e <= 6; e++) {
				var t = this.prefix + e;
				this[t] = parseInt(n.get(t)) || Math.ceil(Math.random() * e)
			}
		};
	a.prototype = {
		get_cur_turn: function(e, t) {
			return t && t.fromCookie ? parseInt(n.get(e)) : this[e]
		},
		save_ad_turn: function(e, t) {
			n.set(e, t, {
				expires: new Date((new Date).getTime() + 864e5),
				doamin: window.location.hostname,
				path: window.location.pathname
			})
		},
		del_old_cookie: function(e, t) {
			n.set(e, t, {
				expires: new Date((new Date).getTime() - 1)
			})
		}
	};
	var s = new a,
		r = function(e, t) {
			if ("channel" == e) {
				if (15 == t.channel_id) {
					if ([1, 2, 3].indexOf(t.position) >= 0) return 3
				} else if ([30, 23].indexOf(t.channel_id) >= 0) {
					if ([1, 2, 3, 4, 5].indexOf(t.position) >= 0) return 2
				} else if (10 == t.channel_id) {
					if ([1, 2, 3].indexOf(t.position) >= 0) return 2
				} else if (26 == t.channel_id && [1].indexOf(t.position) >= 0) return 2
			} else if ("sub" == e) {
				if (15 == t.channel_id) {
					if ([997].indexOf(t.sub_id) >= 0) {
						if ([1, 2, 3, 5].indexOf(t.position) >= 0) return 2
					} else if (998 == t.sub_id) {
						if ([1].indexOf(t.position) >= 0) return 3;
						if ([2].indexOf(t.position) >= 0) return 4;
						if ([3, 4, 5].indexOf(t.position) >= 0) return 2
					}
				} else if (30 == t.channel_id && [936].indexOf(t.sub_id) >= 0 && [1, 2, 3, 5].indexOf(t
						.position) >= 0) return 2
			} else if ("index" == e) {
				if ([1].indexOf(t.position) >= 0) return 5;
				if ([2, 3, 4, 5, 6].indexOf(t.position) >= 0) return 3
			}
			return 1
		},
		o = function(e, t, i) {
			if ("channel" == t) {
				var n = {
					15: 3,
					30: 2,
					23: 2,
					12: {
						side_1: 2
					},
					43: {
						side_1: 2
					},
					41: {
						side_1: 2
					},
					42: {
						side_1: 2
					},
					19: {
						side_1: 2
					},
					10: {
						side_1: 2,
						side_2: 2,
						side_3: 2,
						side_fix: 2
					},
					26: {
						side_1: 2
					}
				};
				if (n[i.channel_id]) return "number" == typeof n[i.channel_id] ? n[i.channel_id] : n[i
					.channel_id][e] || 1
			} else if ("sub" == t) {
				if (15 == i.channel_id) return [994, 996, 995].indexOf(i.sub_id) >= 0 ? 3 : [997].indexOf(i
					.sub_id) >= 0 ? 2 : 1;
				if (30 == i.channel_id) {
					if (936 !== i.sub_id) return 2
				} else {
					if (23 == i.channel_id) return 2;
					if ([12, 43, 41, 42, 19, 26].indexOf(i.channel_id) >= 0) {
						if ("side_1" == e) return 2
					} else if (10 == i.channel_id && ["side_1", "side_2", "side_3", "side_fix"].indexOf(e) >= 0)
						return 2
				}
			} else {
				if ("article" == t) {
					if (18 == i.channel_id) return 3;
					if ([17, 28, 10, 26].indexOf(i.channel_id) >= 0) {
						if (["side_1", "side_2", "side_3", "side_4", "side_fix"].indexOf(e) >= 0) return 2
					} else {
						if ([24, 29].indexOf(i.channel_id) >= 0) return 2;
						if (8 == i.channel_id && "side_1" == e) return 3
					}
					return 2
				}
				if ("v3_index" == t) return "side_1" == e ? 4 : "side_6" == e || "side_8" == e || "side_7" ==
					e ? 2 : 3;
				if ("pic_collection" == t) return "side_1" == e || "side_2" == e || "side_3" == e ? 2 : 1;
				if ("news_channel" == t) return 3
			}
		},
		d = function(e, t) {
			return [17, 18, 8].indexOf(t.channel_id) >= 0 ? "article" == e ? 3 : 1 : 3
		},
		c = function(e, t, i) {
			return "pic_collection" == t ? "column_1" == e || "column_2" == e ? 2 : 1 : "news_channel" == t ?
				"column_3" == e ? 4 : 3 : "column_1" == e ? 5 : ["column_7", "column_8"].indexOf(e) >= 0 ? 1 : 3
		},
		u = function(e) {
			return e.block_name && "history" == e.block_name ? 6 : 1
		},
		h = {},
		l = 0,
		f = function(e, t, i) {
			var n = "ad_t_" + e + "_" + t + "_" + i.channel_id + "_" + (i.sub_id || "") + "_" + (i.tag_id ||
				"") + "_" + (i.position || ""),
				a = "ad_t_",
				f = 1;
			if (i.sub_id = parseInt(i.sub_id) || 0, i.channel_id = parseInt(i.channel_id) || 0, "feeds" == t ?
				f = r(e, i) || 1 : ["side_1", "side_2", "side_3", "side_4", "side_5", "side_6", "side_fix",
					"side_7", "side_8"
				].indexOf(t) >= 0 ? f = o(t, e, i) || 1 : ["writer", "recommends", "hot_spot"].indexOf(t) >= 0 ?
				f = d(e, i) || 1 : "index_focus" == t ? f = 3 : ["column_1", "column_2", "column_3", "column_4",
					"column_5", "column_6", "column_7", "column_8"
				].indexOf(t) >= 0 ? f = c(t, e) || 1 : t.match(/txt\w+\_\d+/gi) ? f = u(i) : "rectangle" ===
				t && (f = 3), 1 == f) return 1;
			var p = {
				fromCookie: !1
			};
			"side_fix" == t && (p.fromCookie = !0, a += "side_fix_");
			var m = s.get_cur_turn(a + f, p) || Math.ceil(Math.random() * f);
			if (m = m % f + 1, s.del_old_cookie(n, m), "hot_spot" == t) {
				if (l) return l;
				l = m
			}
			if ("feeds" == t) {
				if (h[f]) return h[f];
				h[f] = m, console.log(h)
			}
			return s.save_ad_turn(a + f, m), m
		};
	e.exports = f
}, function(e, t) {
	var i = function(e) {
		var t = 1e4 + (e.channel_id ? parseInt(e.channel_id) : 0),
			i = "";
		if (e.sub_id) {
			for (var n = e.sub_id.toString(), a = 0; a < 5 - n.length; a++) i += "0";
			i += n
		} else i = "00000";
		return t + "" + i
	};
	e.exports = i
}, function(e, t) {
	var i = function(e) {
			return "" + (1e4 + (e ? parseInt(e) : 0))
		},
		n = function(e) {
			var t = "";
			if (e) {
				for (var i = e.toString(), n = 0; n < 5 - i.length; n++) t += "0";
				t += i
			} else t = "00000";
			return t
		},
		a = function(e) {
			var t = i(e.channel_id);
			if (e.sub_id) {
				return [t + "00000", t + n(e.sub_id)].join(",")
			}
			return t + "00000"
		};
	e.exports = a
}, function(e, t) {
	var i = i || function(e) {
		var t = e.document,
			i = e.navigator,
			n = i.userAgent.toLowerCase(),
			a = t.documentMode,
			s = e.chrome || !1,
			r = {
				agent: n,
				isIE: /msie/.test(n),
				isGecko: n.indexOf("gecko") > 0 && n.indexOf("like gecko") < 0,
				isWebkit: n.indexOf("webkit") > 0,
				isStrict: "CSS1Compat" === t.compatMode,
				supportSubTitle: function() {
					return "track" in t.createElement("track")
				},
				supportScope: function() {
					return "scoped" in t.createElement("style")
				},
				ieVersion: function() {
					try {
						return n.match(/msie ([\d.]+)/)[1] || 0
					} catch (e) {
						return console.log("error"), a
					}
				},
				operaVersion: function() {
					try {
						if (e.opera) return n.match(/opera.([\d.]+)/)[1];
						if (n.indexOf("opr") > 0) return n.match(/opr\/([\d.]+)/)[1]
					} catch (t) {
						return console.log("error"), 0
					}
				},
				versionFilter: function() {
					if (1 === arguments.length && "string" == typeof arguments[0]) {
						var e = arguments[0];
						return start = e.indexOf("."), start > 0 && (end = e.indexOf(".", start + 1), -
							1 !== end) ? e.substr(0, end) : e
					}
					return 1 === arguments.length ? arguments[0] : 0
				}
			};
		try {
			r.type = r.isIE ? "IE" : e.opera || n.indexOf("opr") > 0 ? "Opera" : n.indexOf("chrome") > 0 ?
				"Chrome" : e.openDatabase ? "Safari" : n.indexOf("firefox") > 0 ? "Firefox" : "unknow", r
				.version = "IE" === r.type ? r.ieVersion() : "Firefox" === r.type ? n.match(
					/firefox\/([\d.]+)/)[1] : "Chrome" === r.type ? n.match(/chrome\/([\d.]+)/)[1] :
				"Opera" === r.type ? r.operaVersion() : "Safari" === r.type ? n.match(/version\/([\d.]+)/)[
					1] : "0", r.shell = function() {
					if (n.indexOf("maxthon") > 0) return r.version = n.match(/maxthon\/([\d.]+)/)[1] || r
						.version, "傲游浏览器";
					if (n.indexOf("qqbrowser") > 0) return r.version = n.match(/qqbrowser\/([\d.]+)/)[1] ||
						r.version, "QQ浏览器";
					if (n.indexOf("se 2.x") > 0) return "搜狗浏览器";
					if (s && "Opera" !== r.type) {
						var t = e.external,
							i = e.clientInformation,
							a = i.languages;
						if (t && "LiebaoGetVersion" in t) return "猎豹浏览器";
						if (n.indexOf("bidubrowser") > 0) return r.version = n.match(
							/bidubrowser\/([\d.]+)/)[1] || n.match(/chrome\/([\d.]+)/)[1], "百度浏览器";
						if (r.supportSubTitle() && void 0 === a) {
							var o = Object.keys(s.webstore).length;
							return o > 1 ? "360极速浏览器" : "360安全浏览器"
						}
						return "Chrome"
					}
					return r.type
				}, r.name = r.shell(), r.version = r.versionFilter(r.version)
		} catch (o) {
			console.log("error")
		}
		return {
			client: r
		}
	}(window);
	e.exports = i
}, function(e, t) {}, function(e, t) {
	for (var i = function() {}, n = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception",
			"group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd",
			"table", "time", "timeEnd", "timeStamp", "trace", "warn"
		], a = n.length, s = {}; a--;) method = n[a], s[method] || (s[method] = i);
	e.exports = s
}]);
