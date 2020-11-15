"use strict";

$(document).foundation();

// ======================================================================
//  ██████  ██████  ███    ███ ██████   ██████  ███    ██ ███████ ███    ██ ████████ ███████
// ██      ██    ██ ████  ████ ██   ██ ██    ██ ████   ██ ██      ████   ██    ██    ██
// ██      ██    ██ ██ ████ ██ ██████  ██    ██ ██ ██  ██ █████   ██ ██  ██    ██    ███████
// ██      ██    ██ ██  ██  ██ ██      ██    ██ ██  ██ ██ ██      ██  ██ ██    ██         ██
//  ██████  ██████  ██      ██ ██       ██████  ██   ████ ███████ ██   ████    ██    ███████
// ======================================================================


Foundation.Abide.defaults.patterns["dashes_only"] = /^[0-9-+]*$/;

$("[data-off-canvas]").on("opened.zf.offcanvas", function() {
    fixScroll();
    $(window).on("scroll", fixScroll);
});

$("[data-off-canvas]").on("closed.zf.offcanvas", function() {
    $(window).off("scroll", fixScroll);
    $sticky.css("transform", "translateY(0)");
});

// ======================================================================
// LAZY LOADING
// ======================================================================

// window.lazySizesConfig = window.lazySizesConfig || {};
// lazySizesConfig.loadMode = 3;
// lazySizesConfig.expFactor = 4;
// lazySizesConfig.expand = 500;
//add simple support for background images:
document.addEventListener("lazybeforeunveil", function(e) {
    var bg = e.target.getAttribute("data-bg");
    if (bg) {
        e.target.style.backgroundImage = "url(" + bg + ")";
    }
});

// -----  End of LAZY LOADING  ----------


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


// ======================================================================
//  █████   ██████  ███████
// ██   ██ ██    ██ ██
// ███████ ██    ██ ███████
// ██   ██ ██    ██      ██
// ██   ██  ██████  ███████
// ======================================================================

//$(document).ready(function() {
//AOS.init({
// duration: 750,
// mirror: false,
//startEvent: "load",
//offset: "150"
//});
//});

// -----  End of AOS- ANIMATE ON SCROLL  ----------


// ======================================================================
// ███████ ██     ██ ██ ██████  ███████ ██████
// ██      ██     ██ ██ ██   ██ ██      ██   ██
// ███████ ██  █  ██ ██ ██████  █████   ██████
//      ██ ██ ███ ██ ██ ██      ██      ██   ██
// ███████  ███ ███  ██ ██      ███████ ██   ██
// ======================================================================
//var mySwiper = new Swiper(".swiper-container", {
//loop: true,
//autoHeight: true,
//centeredSlides: true,
//grabCursor: true,
//preloadImages: false,
//lazy: {
// loadPrevNext: true,
// loadPrevNextAmount: 5
//},
//loadOnTransitionStart: true,
//keyboard: {
//enabled: true
//},
//pagination: {
//el: ".swiper-pagination",
//type: "bullets",
//clickable: true
//},
//navigation: {
//nextEl: ".swiper-button-next",
// prevEl: ".swiper-button-prev"
// },
//observer: true,
// observeParents: true
//});

// need to validate
//var mySwiper = new Swiper(".swiper-container", {
// loop: true,
// autoHeight: true,
// centeredSlides: true,
//  grabCursor: true,
// preloadImages: false,
//lazy: {
// loadPrevNext: true,
// loadPrevNextAmount: 5
// },
//loadOnTransitionStart: true,
// keyboard: {
// enabled: true
// },
//pagination: {
// el: ".swiper-pagination",
//type: "bullets",
//clickable: true
//},
//navigation: {
//nextEl: ".swiper-button-next",
//prevEl: ".swiper-button-prev"
// },
// observer: true,
// observeParents: true
//});
// -----  End of SWIPER  -----------------------------------
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
// // ===================================================================================
// // THOUGHT LEADERSHIP (CAROUSAL - 3D) SWIPER
// // ===================================================================================
// var swiper = new Swiper(".thoughtLeadership", {
//     observer: true,
//     observeParents: true,
//     observeSlideChildren: true,
//     slideToClickedSlide: true,
//     loop: true,
//     grabCursor: true,
//     centeredSlides: true,
//     breakpoints: {
//       320: {
//         slidesPerView: 1,
//         // slidesOffsetBefore: 20,
//         // slidesOffsetAfter: 20
//       },
//       768: {
//         slidesPerView: 3
//       },
//     },
//     // Disable preloading of all images
//     preloadImages: false,
//     // Enable lazy loading
//     lazy: true,
//     watchSlidesVisibility: true,
//     loadPrevNext: true,
//     loadPrevNextAmount: 4,
//     effect: "coverflow",
//     coverflowEffect: {
//       rotate: 50,
//       stretch: 0,
//       depth: 100,
//       modifier: 1,
//       slideShadows: true
//     },
//     keyboard: {
//       enabled: true
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       type: "bullets",
//       clickable: true
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev"
//     },
//   });
//   // -----  End of SWIPER  -----------------------------------  

//   // ===================================================================================
// // BASIC OFFCANVAS AJAX LOAD after opened
// // ===================================================================================
// $(".thoughtLeadership-button").on("click", function() {
//   // console.log($(this).attr('data-url'));
//   $.ajax($(this).data("url"))
//     .done(function(content) {
//       $("#offCanvas").html(content);
//       // $("#offCanvas").foundation("openedEnd");
//     });
// });

// // ======================================================================
// // UNLOAD OFFCANVAS AJAX CONTENT WHEN CLOSED
// // ======================================================================
// $("#offCanvas").on("closed.zf.offCanvas", function() {
//     $("#offCanvas").empty();
//     // foundation.reInit("offCanvas");
// });
"use strict";
// $(document).ready(function() {
// var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
// var eventer = window[eventMethod];
// var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
//           // Listen for a message from the iframe.
//   eventer(messageEvent, function(e) {
//     if (isNaN(e.data)) return;
//        // replace #sizetracker with what ever what ever iframe id you need
//        if($('.pardot_form').length > 0){
//         $.each($('.pardot_form'),function(i){
//           $(this).css('height',e.data + 'px');
//          })
//        }
//       // document.getElementById('pardot_form').style.height = e.data + 'px';              
//      }, false);
// })
"use strict";
"use strict";

if ($('.curtain').length > 0) {
    window.addEventListener("load", function() {
        // set up our WebGL context and append the canvas to our wrapper
        var curtains = new Curtains({
            container: "canvas",
            autoResize: true,
            watchScroll: false,
            renderingScale: 0.3
        });

        function check() {
            var top_of_element = $(".curtain").offset().top;
            var bottom_of_element = $(".curtain").offset().top + $(".curtain").outerHeight();
            var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
            var top_of_screen = $(window).scrollTop();

            if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
                // the element is visible, do something
                curtains.enableDrawing();
            } else {
                // the element is not visible, do something else
                curtains.disableDrawing();
            }
        }

        window.addEventListener("scroll", check, false, {
            passive: true
        });

        // get our plane element
        var planeElement = document.getElementsByClassName("plane")[0];

        // set our initial parameters (basic uniforms)
        var params = {
            vertexShaderID: "plane-vs", // our vertex shader ID
            fragmentShaderID: "plane-fs", // our fragment shader ID
            uniforms: {
                time: {
                    name: "uTime", // uniform name that will be passed to our shaders
                    type: "1f", // this means our uniform is a float
                    value: 0
                }
            }
        };

        // create our plane
        var plane = curtains.addPlane(planeElement, params);

        var initial = 500;
        var incrementer = 0.5;
        var scrollSpeed = 0;
        $('.curtain').scroll(function() {
            check();
            if (scrollSpeed < 28) {
                // prevent too flickery animation loops
                scrollSpeed += 1.5;
                incrementer = 0.5;
            }
        });

        var baseSpeed = 0.05;
        $('.curtain').on('increaseAnimationSpeed', function() {
            baseSpeed = 0.07;
        });

        var once = true;

        // if our plane has been successfully created
        if (plane) {
            plane.onRender(function() {
                if (once) {
                    $('.curtain').trigger('canvasReady');
                    once = false;
                }
                // use the onRender method of our plane fired at each requestAnimationFrame call
                if (initial > 0) {
                    if (initial < 10) {
                        // plane.uniforms.time.value += 0.5;
                        plane.uniforms.time.value += 0.15;
                    } else {
                        // plane.uniforms.time.value += 0.75;
                        plane.uniforms.time.value += 0.175;
                    }
                    initial--;
                } else {
                    if (scrollSpeed > 0) {
                        incrementer += .035;
                        plane.uniforms.time.value += 1 / incrementer;
                        scrollSpeed--;
                        if (scrollSpeed === 0) {
                            baseSpeed = 1.2;
                        }
                    } else {
                        if (baseSpeed > 0.07) {
                            baseSpeed = baseSpeed - 0.05;
                        }
                        plane.uniforms.time.value += baseSpeed; // update our time uniform value
                    }
                }
            });
        }
    }, {
        passive: true
    });
}
// $(document).ready(function(){
// // var input = document.getElementById("tagsChk");
//     var availableTags = ["Aircraft Hub Technology", "Advanced Solutions Cognizant", "Disclaimer", "Application Services", "Application Services Technology", "Application Development Technology", "About Us Cognizant", "Application Services Cognizant", "Approach Cognizant", "BFS", "Business Process Outsourcing", "Banking Financial Services", "Business Consulting Technology", "MDM in a Box", "Cognizant BPO", "Two in a Box", "Communications", "Cognizant", "Careers", "Cognizant Technology", "Cognizant Technology Services", "Cognizant Solutions", "Cognizant Technology System", "Cognizant IT Services", "Careers in Media and Entertainment", "Cognizant Technology Solutions", "Digital Media Management", "Diversified Manufacturing", "Enterprise Analytics Technology", "Cognizant Event", "Product Engineering", "Future Work Cognizant", "Financial Services Banking", "Cognizant Finland", "Go Green Technology", "Consumer Goods", "Healthcare Technology", "Healthcare Cognizant", "History Cognizant", "Travel and Hospitality", "Cognizant Hospitality", "Insurance", "India Cognizant", "Insurance Cognizant", "Information Services Technology", "Innovation Cognizant", "Industry Solutions Technology", "Insurance Practice Cognizant", "Information Cognizant", "Instance Consolidation Technology", "IT Infrastructure Services", "Cognizant Japan", "Cognizant Jobs", "LCA Notices Technology", "LCA Notices Cognizant", "Life Sciences Cognizant", "LCA Notices", "Life Sciences Technology", "Mobility", "Manufacturing Cognizant", "MDM Express Technology", "Managed Services Technology", "Cognizant Media", "News Cognizant", "Oracle Services Technology", "Oracle Solutions Cognizant", "Overview Cognizant", "Cognizant Outsourcing", "Cognizant Offices", "Product Engineering Cognizant", "Product Engineering Technology", "Retail", "Retail Cognizant", "Retail Practice Cognizant", "Regulatory Compliance Technology", "Shopperstudy", "Solutions Industries Broadcast", "Strategic Services Technology", "Supply Chain Management Cognizant", "Solutions Frameworks Technology", "Sentiment Analyzer Technology", "Strategic Services Cognizant", "Services Cognizant", "SAP Services Technology", "SAP Practice Cognizant", "Test Technology Cognizant", "Testing Cognizant", "Testing Practice Technology", "Testing Solutions Technology", "SMAC", "Testing Services Technology", "Technology Solutions Cognizant", "Cognizant Teaneck", "Cognizant U.S.", "blockchain","Adaptive Data", "Adaptive Data Analysis", "Adaptive Data Foundation", "Adaptive Data Model", "Adaptive Data Storage", "Future Of AI In Agriculture", "AI In Agriculture", "AI In Wealth Management", "Application Of Machine Learning In Banking","Machine Learning In Banking", "AI In Banking", "AI Portfolio Management", "Artificial Intelligence In Banking", "Artificial Intelligence Benefits", "Benefits Of AI", "Benefits Of Artificial Intelligence", "Advantages Of AI", "AI For Business", "AI For Business Strategy", "AI In Business And Industry", "Application Of Artificial Intelligence In Business" ,"Artificial Intelligence In Business Management", "AI Cloud Services", "Artificial Intelligence", "AI Business Solutions", "Evolutionary AI", "AI Solutions", "AI Planning", "AI", "Cognizant AI", "Artificial Intelligence Solutions", "AI For Business", "Evolutionary AI Expert", "AI Technology", "AI For Business Decisions", "AI Business", "Artificial Intelligence Expert", "AI Expert", "AI Capabilities", "AI Blog", "Conversational AI", "AI Strategies", "AI Strategy", "Data Strategy", "Data Governance", "Data Privacy", "Data Organizational Models", "Business Self-Service", "Communities Of Excellence", "Artificial Intelligence Consulting", "AI Consulting", "Conversational Artificial Intelligence", "Voice Technology", "Chatbot Technology", "AI Customer Intelligence", "AI Intelligence", "Cognizant Customer Intelligence", "AI Data", "AI Preparing Data", "Big Data Analytics", "Adaptive Data Foundation", "AI Data Modernization", "AI Platforms", "Cognizant Bigdecisions", "Cognizant Bigframe", "Data Modernization", "Cloud Data Management", "Data Warehouse Modernization", "Deep Learning", "Neural Network", "Convolutional Neural Network", "Recurrent Neural Network", "Evolutionary AI Research", "Evolutionary AI Technology", "AI Experts", "AI Leaders", "Fraud Intelligence Solution", "AI Report", "Idc Marketspace AI Services Vendor Assessment", "Cognizant Artificial Intelligence", "Evolutionary Computation", "Deep Learning Research", "AI Data Scientist", "AI Cognitive Computing", "Artificial Intelligence Enterprise Systems", "Machine Learning Solutions", "AI Machine Learning", "AI Technology Resources", "AI Analytics", "Cognitive Systems", "AI Cognitive Systems", "Evolutionary AI Architect", "AI Operations Intelligence", "AI And Machine Learning", "Predictive Analytics, AI Predictive Solution, Cognizant's Predictive Analysis", "AI Product Intelligence, Omnichannel Data Intelligence, Cognizant Product Intelligence", "AI Distributed Computing Technology, AI Expert, AI And Analytics", "Evolutionary AI, Neuroevolution AI Expert, Risto Miikkulainen", "Evolutionary AI Expert, Evolutionary Computation, Bandit Algorithms, Xin Qiu"]
//     $("#tagsChk").autocomplete({
//         source: function(req,res){
//             var results = $.ui.autocomplete.filter(availableTags, req.term);
//             res(results)
//         },
//         response: function(event, ui) {
//             if (ui.content.length === 0) {
//                 $(".errorMsg").text("Please enter the valid input");
//                 $('.header-submenu.search-container input').addClass('border-on-error')
//                 $('.content-hide-on-error').css('display','none');
//             } else {
//                 $(".errorMsg").empty();
//                 $('.header-submenu.search-container input').removeClass('border-on-error');
//                 $('.content-hide-on-error').css('display','block');
//             }
//         }
//     });
//    $(".ui-autocomplete").addClass("search-dropdown");

//  $(".search").on("click", function() {

//         $(".search-container").height($(window).height());
//         //$(".search-container").width($(window).width());
//         $(".search-container").show();
//         $(".search-dropdown .ui-menu-item").css("display", " ");
//         $("#tagsChk").focus();
//         $("html,body").css("overflow", "hidden")
//         $(".header-menu li a").parent().removeClass("is-active");
//         $(".header-menu li a").next().removeClass("js-dropdown-active");

//         $("#tagsChk").focus();
//         $("#tagsChk").autocomplete({
//             select: function(event, ui) {
//                 $('#tagsChk').focus();
//                 $('#tagsChk').val(ui.item.value);
//                 $(".header-search .search-container").addClass("js-dropdown-active");
//                 $(".header-search.is-dropdown-submenu-parent").addClass("is-active");
//                 $(".search-dropdown,.header-search .search-container").css("display", "block");
//             },
//             open: function(event, ui) {
//                 if (navigator.userAgent.match(/iPad/)) {
//                     $('.ui-autocomplete').off('menufocus hover mouseover');                     
//                 }
//             }
//         });
//     });
//     $("#tagsChk").keypress(function(e) {
//         // On KeyPress enter
//         if(e.keyCode===13){
//             gss_new_search($('#tagsChk').val())
//         }

//         $(".search-dropdown .ui-menu-item").css("display", "");
//     });
//     $('.ui-autocomplete').on('touchmove', function(e) {
//         e.preventDefault();});
//     $('.ui-autocomplete').addClass('search-dropdown');
//     $("#tagsChk").on("click touchstart touchend blur", function(e) {
//         $(".search-dropdown").css("display", "block");
//         $(".header-search .search-container").addClass("js-dropdown-active");
//         $(".header-search.is-dropdown-submenu-parent").addClass("is-active");
//         //e.preventDefault();
//     });
//     $(".header-search .search-container").on("click touchstart touchend", function(e) {
//         if (e.target.nodeName != "SPAN") {
//             $(this).css("display", "block");
//             $(".search-dropdown").css("display", "block");
//             $(".header-search .search-container").addClass("js-dropdown-active");
//             $(".header-search.is-dropdown-submenu-parent").addClass("is-active");
//             e.preventDefault();
//         }
//     });
//     $(".search-container .close-button").on("click touchstart touchend", function(e) {
//         $('html,body').css("overflow", "auto");
//         setTimeout(function() {
//             $(".header-search .search-container").removeClass("js-dropdown-active");
//             $(".header-search.is-dropdown-submenu-parent").removeClass("is-active");
//             $(".primary-menu .search-container").hide();
//             $(".search-dropdown").css("display", "none");
//             $('.search-container .input-group input#tagsChk').val("");
//             $('#ui-id-1 li').remove();
//         }, 100);
//         e.preventDefault();
//         if ($("#fullpage").length > 0) {
//             $("#parallax-menu").css("z-index", "");
//         }
//     });
//     $('.search-container .input-group input#tagsChk').on('click touchstart touchend', function(e) {
//         $(this).focus();
//     });
// });


// function setCookie(b, f, c) {
//     var e = new Date();
//     e.setTime(e.getTime() + (30 * 60 * 1000));
//     var a = "expires=" + e.toGMTString();
//     document.cookie = b + "=" + f + "; " + a + "; path=/"
// }

// function gss_new_search(c) {

//     var b = c;
//     var oldquery = getCookie("gss_query");
//     if(b!=(oldquery))
//     {
//         setCookie("pagination_no",1,1);
//     }
//     var a = /[`~!@#$%\^&*(){}=,[\]<>?\/|\+\\]/;
//     if (a.test(c) === true || c == "") {
//         return false
//     }

//     if (b != undefined && b != "") {
//         b = b.replace(/"/g, "%22");
//         setCookie("gss_query", b, 1);
//         window.location = "https://www.cognizant.com/searchresults"
//     }
// }
"use strict";
"use strict";

$(document).ready(function() {
    // var input = document.getElementById("tagsChk");
    var availableTags = ["Aircraft Hub Technology", "Advanced Solutions Cognizant", "Disclaimer", "Application Services", "Application Services Technology", "Application Development Technology", "About Us Cognizant", "Application Services Cognizant", "Approach Cognizant", "BFS", "Business Process Outsourcing", "Banking Financial Services", "Business Consulting Technology", "MDM in a Box", "Cognizant BPO", "Two in a Box", "Communications", "Cognizant", "Careers", "Cognizant Technology", "Cognizant Technology Services", "Cognizant Solutions", "Cognizant Technology System", "Cognizant IT Services", "Careers in Media and Entertainment", "Cognizant Technology Solutions", "Digital Media Management", "Diversified Manufacturing", "Enterprise Analytics Technology", "Cognizant Event", "Product Engineering", "Future Work Cognizant", "Financial Services Banking", "Cognizant Finland", "Go Green Technology", "Consumer Goods", "Healthcare Technology", "Healthcare Cognizant", "History Cognizant", "Travel and Hospitality", "Cognizant Hospitality", "Insurance", "India Cognizant", "Insurance Cognizant", "Information Services Technology", "Innovation Cognizant", "Industry Solutions Technology", "Insurance Practice Cognizant", "Information Cognizant", "Instance Consolidation Technology", "IT Infrastructure Services", "Cognizant Japan", "Cognizant Jobs", "LCA Notices Technology", "LCA Notices Cognizant", "Life Sciences Cognizant", "LCA Notices", "Life Sciences Technology", "Mobility", "Manufacturing Cognizant", "MDM Express Technology", "Managed Services Technology", "Cognizant Media", "News Cognizant", "Oracle Services Technology", "Oracle Solutions Cognizant", "Overview Cognizant", "Cognizant Outsourcing", "Cognizant Offices", "Product Engineering Cognizant", "Product Engineering Technology", "Retail", "Retail Cognizant", "Retail Practice Cognizant", "Regulatory Compliance Technology", "Shopperstudy", "Solutions Industries Broadcast", "Strategic Services Technology", "Supply Chain Management Cognizant", "Solutions Frameworks Technology", "Sentiment Analyzer Technology", "Strategic Services Cognizant", "Services Cognizant", "SAP Services Technology", "SAP Practice Cognizant", "Test Technology Cognizant", "Testing Cognizant", "Testing Practice Technology", "Testing Solutions Technology", "SMAC", "Testing Services Technology", "Technology Solutions Cognizant", "Cognizant Teaneck", "Cognizant U.S.", "blockchain", "Adaptive Data", "Adaptive Data Analysis", "Adaptive Data Foundation", "Adaptive Data Model", "Adaptive Data Storage", "Future Of AI In Agriculture", "AI In Agriculture", "AI In Wealth Management", "Application Of Machine Learning In Banking", "Machine Learning In Banking", "AI In Banking", "AI Portfolio Management", "Artificial Intelligence In Banking", "Artificial Intelligence Benefits", "Benefits Of AI", "Benefits Of Artificial Intelligence", "Advantages Of AI", "AI For Business", "AI For Business Strategy", "AI In Business And Industry", "Application Of Artificial Intelligence In Business", "Artificial Intelligence In Business Management", "AI Cloud Services", "Artificial Intelligence", "AI Business Solutions", "Evolutionary AI", "AI Solutions", "AI Planning", "AI", "Cognizant AI", "Artificial Intelligence Solutions", "AI For Business", "Evolutionary AI Expert", "AI Technology", "AI For Business Decisions", "AI Business", "Artificial Intelligence Expert", "AI Expert", "AI Capabilities", "AI Blog", "Conversational AI", "AI Strategies", "AI Strategy", "Data Strategy", "Data Governance", "Data Privacy", "Data Organizational Models", "Business Self-Service", "Communities Of Excellence", "Artificial Intelligence Consulting", "AI Consulting", "Conversational Artificial Intelligence", "Voice Technology", "Chatbot Technology", "AI Customer Intelligence", "AI Intelligence", "Cognizant Customer Intelligence", "AI Data", "AI Preparing Data", "Big Data Analytics", "Adaptive Data Foundation", "AI Data Modernization", "AI Platforms", "Cognizant Bigdecisions", "Cognizant Bigframe", "Data Modernization", "Cloud Data Management", "Data Warehouse Modernization", "Deep Learning", "Neural Network", "Convolutional Neural Network", "Recurrent Neural Network", "Evolutionary AI Research", "Evolutionary AI Technology", "AI Experts", "AI Leaders", "Fraud Intelligence Solution", "AI Report", "Idc Marketspace AI Services Vendor Assessment", "Cognizant Artificial Intelligence", "Evolutionary Computation", "Deep Learning Research", "AI Data Scientist", "AI Cognitive Computing", "Artificial Intelligence Enterprise Systems", "Machine Learning Solutions", "AI Machine Learning", "AI Technology Resources", "AI Analytics", "Cognitive Systems", "AI Cognitive Systems", "Evolutionary AI Architect", "AI Operations Intelligence", "AI And Machine Learning", "Predictive Analytics, AI Predictive Solution, Cognizant's Predictive Analysis", "AI Product Intelligence, Omnichannel Data Intelligence, Cognizant Product Intelligence", "AI Distributed Computing Technology, AI Expert, AI And Analytics", "Evolutionary AI, Neuroevolution AI Expert, Risto Miikkulainen", "Evolutionary AI Expert, Evolutionary Computation, Bandit Algorithms, Xin Qiu"];
    $("#tagsChk").autocomplete({
        source: function source(req, res) {
            var results = $.ui.autocomplete.filter(availableTags, req.term);
            res(results);
        },
        response: function response(event, ui) {
            if (ui.content.length === 0) {
                $(".errorMsg").text("Please enter the valid input");
                $('.header-submenu.search-container input').addClass('border-on-error');
                $('.content-hide-on-error').css('display', 'none');
            } else {
                $(".errorMsg").empty();
                $('.header-submenu.search-container input').removeClass('border-on-error');
                $('.content-hide-on-error').css('display', 'block');
            }
        }
    });
    $(".ui-autocomplete").addClass("search-dropdown");

    $(".search").on("click", function() {

        $(".search-container").height($(window).height());
        //$(".search-container").width($(window).width());
        $(".search-container").show();
        $(".search-dropdown .ui-menu-item").css("display", " ");
        $("#tagsChk").focus();
        $("html,body").css("overflow", "hidden");
        $(".header-menu li a").parent().removeClass("is-active");
        $(".header-menu li a").next().removeClass("js-dropdown-active");

        $("#tagsChk").focus();
        $("#tagsChk").autocomplete({
            select: function select(event, ui) {
                $('#tagsChk').focus();
                $('#tagsChk').val(ui.item.value);
                $(".header-search .search-container").addClass("js-dropdown-active");
                $(".header-search.is-dropdown-submenu-parent").addClass("is-active");
                $(".search-dropdown,.header-search .search-container").css("display", "block");
            },
            open: function open(event, ui) {
                if (navigator.userAgent.match(/iPad/)) {
                    $('.ui-autocomplete').off('menufocus hover mouseover');
                }
            }
        });
    });
    $("#tagsChk").keypress(function(e) {
        // On KeyPress enter
        if (e.keyCode === 13) {
            gss_new_search($('#tagsChk').val());
        }

        $(".search-dropdown .ui-menu-item").css("display", "");
    });
    $('.ui-autocomplete').on('touchmove', function(e) {
        e.preventDefault();
    });
    $('.ui-autocomplete').addClass('search-dropdown');
    $("#tagsChk").on("click touchstart touchend blur", function(e) {
        $(".search-dropdown").css("display", "block");
        $(".header-search .search-container").addClass("js-dropdown-active");
        $(".header-search.is-dropdown-submenu-parent").addClass("is-active");
        //e.preventDefault();
    });
    $(".header-search .search-container").on("click touchstart touchend", function(e) {
        if (e.target.nodeName != "SPAN") {
            $(this).css("display", "block");
            $(".search-dropdown").css("display", "block");
            $(".header-search .search-container").addClass("js-dropdown-active");
            $(".header-search.is-dropdown-submenu-parent").addClass("is-active");
            e.preventDefault();
        }
    });
    $(".search-container .close-button").on("click touchstart touchend", function(e) {
        $('html,body').css("overflow", "auto");
        setTimeout(function() {
            $(".header-search .search-container").removeClass("js-dropdown-active");
            $(".header-search.is-dropdown-submenu-parent").removeClass("is-active");
            $(".primary-menu .search-container").hide();
            $(".search-dropdown").css("display", "none");
            $('.search-container .input-group input#tagsChk').val("");
            $('#ui-id-1 li').remove();
        }, 100);
        e.preventDefault();
        if ($("#fullpage").length > 0) {
            $("#parallax-menu").css("z-index", "");
        }
    });
    $('.search-container .input-group input#tagsChk').on('click touchstart touchend', function(e) {
        $(this).focus();
    });
});

function getCookie(cname) {
    //alert("get cookie");
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(b, f, c) {
    var e = new Date();
    e.setTime(e.getTime() + 30 * 60 * 1000);
    var a = "expires=" + e.toGMTString();
    document.cookie = b + "=" + f + "; " + a + "; path=/";
}

function gss_new_search(c) {

    var b = c;

    var oldquery = getCookie("gss_query");
    if (b != oldquery) {
        setCookie("pagination_no", 1, 1);
    }

    var a = /[`~!@#$%\^&*(){}=,[\]<>?\/|\+\\]/;
    if (a.test(c) === true || c == "") {
        return false;
    }

    if (b != undefined && b != "") {
        b = b.replace(/"/g, "%22");
        setCookie("gss_query", b, 1);
        window.location = "https://www.cognizant.com/searchresults";
    }
}
// $(document).ready(function(){
//     if($(".thoughtLeadershipBottom , .thoughtLeadership").length>0){
//       var thoughtLeadershipBottom = new Swiper(".thoughtLeadershipBottom", {
//         spaceBetween: 0,
//         slidesPerView: 1,
//         effect: "fade",
//         loop: true,
//         loopedSlides: 4,
//         autoHeight: true,
//         centeredSlides: true,
//         observer: true,  
//         observeParents: true,
//         observeSlideChildren:true,
//         grabCursor: true,
//         keyboard: {
//           enabled: true
//         },
//         pagination: {
//           el: ".thoughtLeadershipBottom-pagination",
//           type: "bullets",
//           clickable: true
//         },
//       });

//       var thoughtLeadership = new Swiper(".thoughtLeadership", {
//         autoheight: true,
//         loop: true,
//         loopedSlides: 4,
//         grabCursor: true,
//         centeredSlides: true,
//         observer: true,  
//         observeParents: true,
//         observeSlideChildren:true,
//         slideToClickedSlide:true,
//         breakpoints: {
//           320: {
//             slidesPerView: 1,
//           },
//           1024: {
//             slidesPerView: 3
//           }
//         },
//         effect: "coverflow",
//         coverflowEffect: {
//           rotate: 0,
//           stretch: 180,
//           slideShadows: false
//         },
//         keyboard: {
//           enabled: true
//         },
//         navigation: {
//           nextEl: ".next-button",
//           prevEl: ".prev-button"
//         }
//       });

//       thoughtLeadership.controller.control=thoughtLeadershipBottom
//       thoughtLeadershipBottom.controller.control=thoughtLeadership

//       thoughtLeadership.on('click', function() {
//         var podcastId =$(this.clickedSlide.lastElementChild).attr('data-open-id');
//         var popup = new Foundation.Reveal($('#'+podcastId));
//         popup.open();
//       });
//     }
//   })
"use strict";
// $(".horz_accordion").on("click",function(){

//     $(".horz_accordion").css("flex-basis","");
//     $(".horz_accordion").find(".parent").css("visibility","");
//     $(".horz_accordion").find(".child").css("opacity","");
//     $(".horz_accordion").find(".child").css("visibility","");
//    // setTimeout(function(){
//         $(this).css("flex-basis","50%");
//         $(this).find(".parent").css("visibility","hidden");
//         $(this).find(".child").css("opacity","1");
//         $(this).find(".child").css("visibility","visible");
//    // },500)


// })


//$('#reveal-video').on('open.zf.reveal', function(){
//  $.ajax('data-modernization.html')
//.done(function(resp){
// $('#reveal-video').html(resp).foundation('open');
//$('#reveal-video').html(resp);
//});
//});


// $(function(){
//   $(".classloader").click(function(){
//     if($('#contenthere').html() == ""){
//       $("#contenthere").load("/includes/about-info.html");
//     } else {
//       $('#contenthere').html("");
//     }
//   });
// });
// var videoPlayer=videojs('#video-player',{
//   controls:true,
//   width:640,
//   height:264,
//   autoplay:false,
//   techOrder:["youtube"],
//   sources: [
//     {   
//       "type": "video/youtube", 
//       "src": "https://www.youtube.com/watch?v=J3oRUnKHG7w"
//     }
//   ],
// })

// $(".reveal").on("closed.zf.reveal", function(){
//   // videoPlayer.defaultPlaybackRate()
//   videoPlayer.pause();
//   videoPlayer.src('')
// })

// if (videoPlayer) {videoPlayer.dispose()} else {var videoPlayer}
// videoPlayer=videojs('#video-player',{
//   controls:true,
//   width:640,
//   height:264,
//   autoplay:false,
//   techOrder:["youtube"],
//   sources: [
//     {   
//       "type": "video/youtube", 
//       "src": "https://www.youtube.com/watch?v=J3oRUnKHG7w"
//     }
//   ],
// })

// $('.reveal').on('open.zf.reveal', function(){
//   var mediaId= $(this).find('video').attr('id');

//   var MediaPlayer=new  MediaElementPlayer(mediaId);

//   console.log("media-player", MediaPlayer)
// })

// $(".reveal").on("closed.zf.reveal", function() {

//   var mediaId = $(this).find('video').attr("id");
//   var src = $(this).find("video source").attr("src");      
//   var player = new MediaElementPlayer(mediaId);

//   // to set the src again for reint
//   player.setSrc(src);

//   // for reloading the player with updated src, usually used for new src, but here for reinit
//   player.load();

// })
"use strict";
"use strict";

$(document).ready(function() {
    var input = document.getElementById("tagsChk");
    var availableTags = ["Aircraft Hub Technology", "Advanced Solutions Cognizant", "Disclaimer", "Application Services", "Application Services Technology", "Application Development Technology", "About Us Cognizant", "Application Services Cognizant", "Approach Cognizant", "BFS", "Business Process Outsourcing", "Banking Financial Services", "Business Consulting Technology", "MDM in a Box", "Cognizant BPO", "Two in a Box", "Communications", "Cognizant", "Careers", "Cognizant Technology", "Cognizant Technology Services", "Cognizant Solutions", "Cognizant Technology System", "Cognizant IT Services", "Careers in Media and Entertainment", "Cognizant Technology Solutions", "Digital Media Management", "Diversified Manufacturing", "Enterprise Analytics Technology", "Cognizant Event", "Product Engineering", "Future Work Cognizant", "Financial Services Banking", "Cognizant Finland", "Go Green Technology", "Consumer Goods", "Healthcare Technology", "Healthcare Cognizant", "History Cognizant", "Travel and Hospitality", "Cognizant Hospitality", "Insurance", "India Cognizant", "Insurance Cognizant", "Information Services Technology", "Innovation Cognizant", "Industry Solutions Technology", "Insurance Practice Cognizant", "Information Cognizant", "Instance Consolidation Technology", "IT Infrastructure Services", "Cognizant Japan", "Cognizant Jobs", "LCA Notices Technology", "LCA Notices Cognizant", "Life Sciences Cognizant", "LCA Notices", "Life Sciences Technology", "Mobility", "Manufacturing Cognizant", "MDM Express Technology", "Managed Services Technology", "Cognizant Media", "News Cognizant", "Oracle Services Technology", "Oracle Solutions Cognizant", "Overview Cognizant", "Cognizant Outsourcing", "Cognizant Offices", "Product Engineering Cognizant", "Product Engineering Technology", "Retail", "Retail Cognizant", "Retail Practice Cognizant", "Regulatory Compliance Technology", "Shopperstudy", "Solutions Industries Broadcast", "Strategic Services Technology", "Supply Chain Management Cognizant", "Solutions Frameworks Technology", "Sentiment Analyzer Technology", "Strategic Services Cognizant", "Services Cognizant", "SAP Services Technology", "SAP Practice Cognizant", "Test Technology Cognizant", "Testing Cognizant", "Testing Practice Technology", "Testing Solutions Technology", "SMAC", "Testing Services Technology", "Technology Solutions Cognizant", "Cognizant Teaneck", "Cognizant U.S.", "blockchain"];
    var availableTags = ["Adaptive Data", "Adaptive Data Analysis", "Adaptive Data Foundation", "Adaptive Data Model", "Adaptive Data Storage", "Future Of AI In Agriculture", "AI In Agriculture", "AI In Wealth Management", "Application Of Machine Learning In Banking", "Machine Learning In Banking", "AI In Banking", "AI Portfolio Management", "Artificial Intelligence In Banking", "Artificial Intelligence Benefits", "Benefits Of AI", "Benefits Of Artificial Intelligence", "Advantages Of AI", "AI For Business", "AI For Business Strategy", "AI In Business And Industry", "Application Of Artificial Intelligence In Business", "Artificial Intelligence In Business Management", "AI Cloud Services", "Artificial Intelligence", "AI Business Solutions", "Evolutionary AI", "AI Solutions", "AI Planning", "AI", "Cognizant AI", "Artificial Intelligence Solutions", "AI For Business", "Evolutionary AI Expert", "AI Technology", "AI For Business Decisions", "AI Business", "Artificial Intelligence Expert", "AI Expert", "AI Capabilities", "AI Blog", "Conversational AI", "AI Strategies", "AI Strategy", "Data Strategy", "Data Governance", "Data Privacy", "Data Organizational Models", "Business Self-Service", "Communities Of Excellence", "Artificial Intelligence Consulting", "AI Consulting", "Conversational Artificial Intelligence", "Voice Technology", "Chatbot Technology", "AI Customer Intelligence", "AI Intelligence", "Cognizant Customer Intelligence", "AI Data", "AI Preparing Data", "Big Data Analytics", "Adaptive Data Foundation", "AI Data Modernization", "AI Platforms", "Cognizant Bigdecisions", "Cognizant Bigframe", "Data Modernization", "Cloud Data Management", "Data Warehouse Modernization", "Deep Learning", "Neural Network", "Convolutional Neural Network", "Recurrent Neural Network", "Evolutionary AI Research", "Evolutionary AI Technology", "AI Experts", "AI Leaders", "Fraud Intelligence Solution", "AI Report", "Idc Marketspace AI Services Vendor Assessment", "Cognizant Artificial Intelligence", "Evolutionary Computation", "Deep Learning Research", "AI Data Scientist", "AI Cognitive Computing", "Artificial Intelligence Enterprise Systems", "Machine Learning Solutions", "AI Machine Learning", "AI Technology Resources", "AI Analytics", "Cognitive Systems", "AI Cognitive Systems", "Evolutionary AI Architect", "AI Operations Intelligence", "AI And Machine Learning", "Predictive Analytics, AI Predictive Solution, Cognizant's Predictive Analysis", "AI Product Intelligence, Omnichannel Data Intelligence, Cognizant Product Intelligence", "AI Distributed Computing Technology, AI Expert, AI And Analytics", "Evolutionary AI, Neuroevolution AI Expert, Risto Miikkulainen", "Evolutionary AI Expert, Evolutionary Computation, Bandit Algorithms, Xin Qiu"];
    $("#tagsChk").autocomplete({
        source: availableTags
    });
    $(".ui-autocomplete").addClass("search-dropdown");

    $(".search").on("click", function() {

        $(".search-container").height($(window).height());
        //$(".search-container").width($(window).width());
        $(".search-container").show();
        $(".search-dropdown .ui-menu-item").css("display", " ");
        $("#tagsChk").focus();
        $("html,body").css("overflow", "hidden");
        $(".header-menu li a").parent().removeClass("is-active");
        $(".header-menu li a").next().removeClass("js-dropdown-active");

        $("#tagsChk").focus();
        $("#tagsChk").autocomplete({
            select: function select(event, ui) {
                $('#tagsChk').focus();
                $('#tagsChk').val(ui.item.value);
                $(".header-search .search-container").addClass("js-dropdown-active");
                $(".header-search.is-dropdown-submenu-parent").addClass("is-active");
                $(".search-dropdown,.header-search .search-container").css("display", "block");
            },
            open: function open(event, ui) {
                if (navigator.userAgent.match(/iPad/)) {
                    $('.ui-autocomplete').off('menufocus hover mouseover');
                }
            }
        });
    });
    /*$("html,body").on("touchstart touchmove click", function(o) {
            if (($(".off-canvas.is-open").length > 0) && ($("#Glossary").length == 0)) {
                $(".js-off-canvas-overlay.is-overlay-fixed").addClass("is-visible")
            }
           if (o.relatedTarget == null) {
                $(".search-dropdown").css("display", "block");
                $(".header-search .search-container").addClass("js-dropdown-active");
                $(".header-search.is-dropdown-submenu-parent").addClass("is-active")
            }
            if ($(".primary-menu .search-container").css("display") == "block") {} else {
                if ($(".search-container").css("display") == "none") {
                    $(this).unbind("touchstart touchmove")
                }
            }
        });*/
    $("#tagsChk").keypress(function(e) {
        // On KeyPress enter
        if (e.keyCode === 13) {
            gss_new_search($('#tagsChk').val());
        }
        $(".search-dropdown .ui-menu-item").css("display", "");
    });
    $('.ui-autocomplete').on('touchmove', function(e) {
        e.preventDefault();
    });
    $('.ui-autocomplete').addClass('search-dropdown');
    $("#tagsChk").on("click touchstart touchend blur", function(e) {
        $(".search-dropdown").css("display", "block");
        $(".header-search .search-container").addClass("js-dropdown-active");
        $(".header-search.is-dropdown-submenu-parent").addClass("is-active");
        //e.preventDefault();
    });
    $(".header-search .search-container").on("click touchstart touchend", function(e) {
        if (e.target.nodeName != "SPAN") {
            $(this).css("display", "block");
            $(".search-dropdown").css("display", "block");
            $(".header-search .search-container").addClass("js-dropdown-active");
            $(".header-search.is-dropdown-submenu-parent").addClass("is-active");
            e.preventDefault();
        }
    });
    $(".search-container .close-button").on("click touchstart touchend", function(e) {
        $('html,body').css("overflow", "auto");
        setTimeout(function() {
            $(".header-search .search-container").removeClass("js-dropdown-active");
            $(".header-search.is-dropdown-submenu-parent").removeClass("is-active");
            $(".primary-menu .search-container").hide();
            $(".search-dropdown").css("display", "none");
            $('.search-container .input-group input#tagsChk').val("");
            $('#ui-id-1 li').remove();
        }, 100);
        e.preventDefault();
        if ($("#fullpage").length > 0) {
            $("#parallax-menu").css("z-index", "");
        }
    });
    $('.search-container .input-group input#tagsChk').on('click touchstart touchend', function(e) {
        $(this).focus();
    });
});

function setCookie(b, f, c) {
    var e = new Date();
    e.setTime(e.getTime() + 30 * 60 * 1000);
    var a = "expires=" + e.toGMTString();
    document.cookie = b + "=" + f + "; " + a + "; path=/";
}

function gss_new_search(c) {
    var b = c;
    var a = /[`~!@#$%\^&*(){}=,[\]<>?\/|\+\\]/;
    if (a.test(c) === true || c == "") {
        alert("Enter correct search");
        return false;
    }
    if (b != undefined && b != "") {
        b = b.replace(/"/g, "%22");
        setCookie("gss_query", b, 1);
        window.location = "/SearchResults";
    }
}