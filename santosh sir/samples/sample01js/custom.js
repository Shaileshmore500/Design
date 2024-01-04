function autocomplete(e, t) { var n; function o(e) { if (!e) return !1; !function (e) { for (var t = 0; t < e.length; t++) e[t].classList.remove("autocomplete-active") }(e), n >= e.length && (n = 0), n < 0 && (n = e.length - 1), e[n].classList.add("autocomplete-active") } function i(t) { for (var n = document.getElementsByClassName("autocomplete-items"), o = 0; o < n.length; o++) t != n[o] && t != e && n[o].parentNode.removeChild(n[o]) } e.addEventListener("input", function (o) { var a, l, s, r = this.value; if (i(), !r) return !1; for (n = -1, (a = document.createElement("DIV")).setAttribute("id", this.id + "autocomplete-list"), a.setAttribute("class", "autocomplete-items"), this.parentNode.appendChild(a), s = 0; s < t.length; s++) t[s].substr(0, r.length).toUpperCase() == r.toUpperCase() && ((l = document.createElement("DIV")).innerHTML = "<strong>" + t[s].substr(0, r.length) + "</strong>", l.innerHTML += t[s].substr(r.length), l.innerHTML += "<input type='hidden' value='" + t[s] + "'>", l.addEventListener("click", function (t) { e.value = this.getElementsByTagName("input")[0].value, i() }), a.appendChild(l)) }), e.addEventListener("keydown", function (e) { var t = document.getElementById(this.id + "autocomplete-list"); t && (t = t.getElementsByTagName("div")), 40 == e.keyCode ? (n++, o(t)) : 38 == e.keyCode ? (n--, o(t)) : 13 == e.keyCode && (e.preventDefault(), n > -1 && t && t[n].click()) }), document.addEventListener("click", function (e) { i(e.target) }) } $(document).ready(function () {
    $(".btnwork").click(function (e) { e.preventDefault(), $(".listWork").slideToggle(500, "swing") }); $(window).height(), $(window).width(); var e = $(window).height() - 160 - 20; $(".panel__img-col1.hybridpg").css("height", e),
        $(".videoposter").click(function (e)
        {
            var t = document.getElementById("videoPlayer");
            $(window).width() < $(window).height() && ($("#videoPlayer").addClass("videorotate"),
                console.log("Aa")), t.play(),
                $(".videoposter").css("z-index", -1)
        }),
        $(".ex-vid-icon").click(function (e) {
            var t = $(this).data("id"), n = document.getElementById(t + "_video");

            //    $("#" + t).css("z-index", 1),
            //        n.play(),
            //        $("#" + t + "_img").hide()

            $("#" + t).css("z-index", 1),
                // n.play(),
                $("#" + t + "_img").hide()

        }),
        $(".apply-btn").click(function (e) { e.preventDefault(), $("#apply-form-01").hide(), $("#apply-form-02").hide(), $("#apply-form-03").hide(), $("#apply-form-04").hide(), $("#apply-form-05").hide(), $("#apply-form-06").hide(); var t = $(this).data("nxt"); $(".apply_list").removeClass("active"), $(".apply_list").eq(t - 1).addClass("active"), $(".apply_list").eq(t - 2).addClass("complete"), $("#apply-form-0" + t).show(), $("html, body").animate({ scrollTop: $(".applyform").offset().top }, 800) }), $("#admissionform").click(function (e) { e.preventDefault(), $("html, body").animate({ scrollTop: $(".apply-ol-cont").offset().top }, 800) }), $(".cu_more_sut_spek_click").click(function (e) { window.location.href = "Studentspeak" }), $("#owl-hybrid .item").click(function (e) { e.preventDefault(); var t = $(this).children("a").data("tag"); $(".fc-tab-1").hide(), $(".fc-tab-2").hide(), $(".fc-tab-3").hide(), $(".fc-tab-4").hide(), $(".fc-tab-5").hide(), $(".fc-tab-" + t).show(), $(".mobhybrid").removeClass("active"), $(this).children("a").addClass("active") }), $(".know_load_more").click(function (e) { e.preventDefault(); var t = $(this).data("id"); $("#" + t).css("height", "auto").css("transition", "height ease 4s") })
}); var tags = ["Marketing Management", "Finance Management", "Human Resource Management", "Retail Management", "Operations Management", "Supply Chain Management", "Business Administration", "E-business Management", "Banking, Investment And Insurance", "Rural And Agribusiness Management", "Hospitality Management", "Healthcare Management", "Services Excellence", "Travel And Tourism Management", "IT Project Management", "E-commerce Management", "International Business Management", "Media And Advertising Management"], keys = { 37: 1, 38: 1, 39: 1, 40: 1 }; function preventDefault(e) { (e = e || window.event).preventDefault && e.preventDefault(), e.returnValue = !1 } function preventDefaultForScrollKeys(e) { if (keys[e.keyCode]) return preventDefault(e), !1 } function disableScroll() { window.addEventListener && window.addEventListener("DOMMouseScroll", preventDefault, !1), window.onwheel = preventDefault, window.onmousewheel = document.onmousewheel = preventDefault, window.ontouchmove = preventDefault, document.onkeydown = preventDefaultForScrollKeys } function enableScroll() { window.removeEventListener && window.removeEventListener("DOMMouseScroll", preventDefault, !1), window.onmousewheel = document.onmousewheel = null, window.onwheel = null, window.ontouchmove = null, document.onkeydown = null } function showPros(e) { 1 == e ? $("#showprospectus").show() : $("#showprospectus").hide() } function restoreImg(e) { console.log(e), $("#" + e).css("z-index", -1), $("#" + e + "_img").show() }
function restorevidimg()
{
    $(".videoposter").css("z-index", 1),
    $("#videoPlayer").removeClass("videorotate")
}