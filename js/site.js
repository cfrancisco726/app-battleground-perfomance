"use strict";

// ======================================================================
// PAGE LOADING ANIMATION
// ======================================================================
$(window).on("load", function() {

    //Load wrapper removing
    $(".loader-wrapper").fadeOut(500, function() {
        $('body').removeClass('no-scroll');
    });

    //Pardot form dynamic loading
    if ($(".pardot_form").length > 0) {
        $.each($('.pardot_form'), function(i) {
            var formSrc = $(this).attr('data-src');
            $(this).attr('src', formSrc);
        });
    }
    //Video dynamic loading
    if ($(".youtubeVideo").length > 0) {
        $.each($('.youtubeVideo iframe'), function(i) {
            var formSrc = $(this).attr('data-src');
            $(this).attr('src', formSrc);
        });
    }
});

// ===================================================================================
// HAMBURGER ICON ACTIVE/INACTIVE
// ===================================================================================

$(document).ready(function() {
    $(".hamburger").click(function() {
        $(this).toggleClass("is-active");
    });
    $(".js-off-canvas-overlay").click(function() {
        $(".hamburger").removeClass("is-active");
    });
});
// ===================================================================================
// AOS SETTINGS
// ===================================================================================
AOS.init({
    duration: 750,
    mirror: false,
    startEvent: "load",
    offset: "150"
});

// ======================================================================
// SCROLLUP            
// ======================================================================
if ($("#scrollUp").length) {
    var scrollTrigger = 300,
        // px
        backToTop = function backToTop() {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $("#scrollUp").addClass("scrollup--show");
            } else {
                $("#scrollUp").removeClass("scrollup--show");
            }
        };
    backToTop();
    $(window).on("scroll", function() {
        backToTop();
    });
    $("#scrollUp").on("click", function(e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: 0
        }, 750);
    });
}
// -----  End of SCROLLUP  -------------------------

//For Pardot Resizing
$('.reveal.pardot-reveal').on('open.zf.reveal', function() {
    if ($(".pardot_form").length > 0) {
        $.each($('.pardot_form'), function(i) {
            var formId = $(this).attr("id");
            iFrameResize({
                log: true
            }, "#" + formId);
        });
    }
});
// ===================================================================================
// LAZY SIZES, BACKGROUND IMAGES
// ===================================================================================
document.addEventListener("lazybeforeunveil", function(e) {
    var bg = e.target.getAttribute("data-bg");
    if (bg) {
        e.target.style.backgroundImage = "url(" + bg + ")";
    }
}, {
    passive: true
});

// ======================================================================
// VIDEO PAUSE WHEN CLOSING MODAL
// ======================================================================

$(".youtubeVideo .close-button").on('click', function() {
    var iframeId = $(this).siblings("iframe").attr("id");
    var iframeSrc = $("#" + iframeId).attr("src");
    var iframeSrcSplit = iframeSrc.split("&autoplay");
    $("#" + iframeId).attr("src", "");
    setTimeout(function() {
        $("#" + iframeId).attr("src", iframeSrcSplit[0]);
    }, 500);
});