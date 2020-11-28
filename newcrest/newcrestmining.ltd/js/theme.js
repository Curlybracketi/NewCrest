/**
 * MyCoin
 *
 * This file contains all template JS functions
 *
 * @package MyCoin
--------------------------------------------------------------
                   Contents
--------------------------------------------------------------

 * 01 - Owl Carousel
 * 02 - Smooth Scroll
 * 03 - Mailchimp Form
 * 04 - Projects Filter
 * 05 - Navigation 
 * 06 - Facts Count
 * 07 - Quantity Increase Decrease
 * 08 - Price Slider / Filter
 * 09 - Product Zoom 
 * 10 - Search
 * 11 - Process
 * 12 - Popup Dialog
 * 13 - Market
 * 14 - Revolution Slider Home1
 * 15 - Revolution Slider Home3
 * 16 - Preloader

--------------------------------------------------------------*/
(function($) {
  "use strict";

// Owl Carousel 
    // Home Slider    
      $("#home-slider").owlCarousel({
      loop: true,
      items: 1,
      dots: false,
      nav: true,
      autoplayTimeout: 10000,
      smartSpeed: 6000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 0,
      autoplay: true,
      slideSpeed: 2000,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 1,
            nav: false,
        },
        1100: {
            items: 1,
            nav: true,
        }
      }
    });

    // Testimonials Slider    
    $("#testimonials-slider").owlCarousel({
      loop: true,
      items: 2,
      dots: false,
      nav: false,
      autoplayTimeout: 10000,
      smartSpeed: 6000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 30,
      autoplay: true,
      slideSpeed: 2500,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 1,
            nav: false,
            dots: false,
        },
        1100: {
            items: 2,
            nav: false,
            dots: false,
        }
      }
    });
    
    // Clients Slider    
    $("#client-slider").owlCarousel({
      loop: true,
      items: 6,
      dots: false,
      nav: false,
      autoplayTimeout: 10000,
      smartSpeed: 10000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 30,
      autoplay: true,
      slideSpeed: 2500,
      navText: ['', ''],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 4,
            nav: false,
            dots: false,
        },
        1100: {
            items: 6,
            nav: false,
            dots: false,
        }
      }
    });

  // Love Us Slider    
      $("#love-us-slider").owlCarousel({
      loop: true,
      items: 1,
      dots: false,
      nav: false,
      autoplayTimeout: 10000,
      smartSpeed: 6000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 0,
      autoplay: true,
      slideSpeed: 2500,
      navText: ['', ''],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 1,
            nav: false,
        },
        1100: {
            items: 1,
            nav: false,
        }
      }
    });

  // Love Us Gallery Slider    
      $("#love-us-gallery").owlCarousel({
      loop: true,
      items: 3,
      dots: false,
      nav: false,
      autoplayTimeout: 10000,
      smartSpeed: 6000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 10,
      autoplay: true,
      slideSpeed: 2500,
      navText: ['', ''],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 1,
            nav: false,
        },
        1100: {
            items: 3,
            nav: false,
        }
      }
    });

  // News Two Slider    
    $("#news-two-slider").owlCarousel({
      loop: true,
      items: 3,
      dots: false,
      nav: false,
      autoplayTimeout: 10000,
      smartSpeed: 6000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 30,
      autoplay: true,
      slideSpeed: 2500,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 2,
            nav: false,
            dots: false,
        },
        1100: {
            items: 3,
            nav: false,
            dots: false,
        }
      }
    });

  // Featured Slider Two
    $("#featured-slider-two").owlCarousel({
      loop: true,
      items: 5,
      dots: false,
      nav: true,
      autoplayTimeout: 10000,
      smartSpeed: 6000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 0,
      autoplay: true,
      slideSpeed: 2500,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 4,
            nav: true,
        },
        1100: {
            items: 5,
            nav: true,
        }
      }
    });     

// Smooth Scroll
    smoothScroll.init();
    
// Mailchimp Form
    $('#subscribe-form').ajaxChimp({
        url: 'http://blahblah.us1.list-manage.com/subscribe/post?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh9'
    });

// Projects Filter
    $(function() {
        var selectedClass = "";
        $(".fil-cat").on('click',function(){ 
        selectedClass = $(this).attr("data-rel"); 
         $("#projects-gallery").fadeTo(100, 0.1);
        $("#projects-gallery .projects-gallery-block").not("."+selectedClass).fadeOut().removeClass('scale-anm');
        setTimeout(function() {
          $("."+selectedClass).fadeIn().addClass('scale-anm');
          $("#projects-gallery").fadeTo(300, 1);
        }, 300);     
      });
    });

// Navigation 
    // Navigation / Menu
    $("#cssmenu").menumaker({
      title: "Menu",
      format: "multitoggle"
    });

// Facts Count 
    if ($('.counter').length) {   
      $(function( $ ) {
        $('.counter').counterUp({
          delay: 20,
          time: 2000
        });
      });  
    }

// Quantity Increase Decrease
    $(".cart-plus-minus").append('<div class="dec qtybutton"><i class="fa fa-angle-down"></i></div><div class="inc qtybutton"><i class="fa fa-angle-up"></i></div>');
      $(".qtybutton").on("click", function() {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.text() == " ") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
       // Don't allow decrementing below zero
      if (oldValue > 0) {
      var newVal = parseFloat(oldValue) - 1;
      } else {
      newVal = 0;
        }
        }
    $button.parent().find("input").val(newVal);
    });    

// Price Slider / Filter
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 1000,
        values: [ 50, 250 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );

// Product Zoom 
    $(window).load(function() {
      $("#zoom-01").elevateZoom({gallery:'gallery-01', zoomType: 'lens', lensShape: 'round', lensSize : 200, galleryActiveClass: 'active', imageCrossfade: true}); 
      $("#zoom-01").on("click", function(e) {  
        var ez =   $('#zoom-01').data('elevateZoom'); 
        $.fancybox(ez.getGalleryList());
        return false;
      }); 
    });  
    
// Search
  $('.search-icon').on('click', function (e) {
    e.preventDefault();
    $('.search').addClass('active');
  });

  $('.search-close').on('click', function (e) {
    e.preventDefault();
    $('.search').removeClass('active');
  });

// Popup Dialog    
    $('.gallery-block').magnificPopup({
      delegate: 'a',
      type: 'image',    
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',    
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
          return item.el.attr('title') + '<small>by MyCoin</small>';
        }
      }
    });  
// Process
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var href = $(e.target).attr('href');
        var $curr = $(".process-model  a[href='" + href + "']").parent();
        $('.process-model li').removeClass();
        $curr.addClass("active");
        $curr.prevAll().addClass("visited");
    });
    
// Market
  var coinURL = "https://api.coindesk.com/v1/bpi/currentprice.json";
  $.getJSON(coinURL, function(data){
      document.getElementById("placeholder").innerHTML = "Last updated: " + data.time.updated;
      document.getElementById("footer").innerHTML = data.disclaimer;
      document.getElementById("placeholder3").innerHTML = " USD per Bitcoin: " + data.bpi.USD.rate;
     })

// Revolution Slider Index1
  var tpj=jQuery;  
  var revapi1068;
  tpj(document).ready(function() {
    if(tpj("#rev_slider_1068_1").revolution == undefined){
      revslider_showDoubleJqueryError("#rev_slider_1068_1");
    }else{
      revapi1068 = tpj("#rev_slider_1068_1").show().revolution({
        sliderType:"standard",
jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
        sliderLayout:"fullscreen",
        dottedOverlay:"none",
        delay:17000,
        navigation: {
          keyboardNavigation:"off",
          keyboard_direction: "horizontal",
          mouseScrollNavigation:"on",
          mouseScrollReverse:"default",
          onHoverStop:"off",
          touch:{
            touchenabled:"on",
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: "vertical",
            drag_block_vertical: false
          }
          ,
          bullets: {
            enable:true,
            hide_onmobile:true,
            hide_under:1024,
            style:"uranus",
            hide_onleave:false,
            direction:"vertical",
            h_align:"right",
            v_align:"center",
            h_offset:30,
            v_offset:0,
            space:5,
            tmp:'<span class="tp-bullet-inner"></span>'
          }
        },
        viewPort: {
          enable:true,
          outof:"wait",
          visible_area:"80%",
          presize:false
        },
        responsiveLevels:[1240,1024,778,480],
        visibilityLevels:[1240,1024,778,480],
        lazyType:"single",
        shadow:0,
        autoHeight:"on",
        fullScreenOffsetContainer: ".nav-bar",
        disableProgressBar:"on",
        hideThumbsOnMobile:"off",
        hideSliderAtLimit:0,
        hideCaptionAtLimit:0,
        hideAllCaptionAtLilmit:0,
        debugMode:false,
        fallbacks: {
          simplifyAll:"off",
          nextSlideOnWindowFocus:"off",
          disableFocusListener:false,
        }
      });
    }
  }); /*ready*/

//Revolution Slider Index3
  var tpj=jQuery;
  var revapi1063;
  tpj(document).ready(function() {
  if(tpj("#rev_slider_1063_1").revolution == undefined){
  revslider_showDoubleJqueryError("#rev_slider_1063_1");
  }else{
  revapi1063 = tpj("#rev_slider_1063_1").show().revolution({
    sliderType:"standard",
  jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
    sliderLayout:"auto",
    dottedOverlay:"none",
    delay:9000,
    navigation: {
      keyboardNavigation:"off",
      keyboard_direction: "horizontal",
      mouseScrollNavigation:"on",
      mouseScrollReverse:"default",
      onHoverStop:"off",
      touch:{
        touchenabled:"on",
        swipe_threshold: 75,
        swipe_min_touches: 1,
        swipe_direction: "horizontal",
        drag_block_vertical: false
      }
      ,
      tabs: {
        style:"zeus",
        enable:true,
        width:100,
        height:30,
        min_width:100,
        wrapper_padding:0,
        wrapper_color:"transparent",
        wrapper_opacity:"0",
        tmp:'<span class="tp-tab-title">{{title}}</span>',
        visibleAmount: 3,
        hide_onmobile: true,
        hide_under:480,
        hide_onleave:false,
        hide_delay:200,
        direction:"horizontal",
        span:true,
        position:"inner",
        space:1,
        h_align:"left",
        v_align:"top",
        h_offset:30,
        v_offset:30
      }
    },
    viewPort: {
      enable:true,
      outof:"pause",
      visible_area:"80%",
      presize:false
    },
    responsiveLevels:[1240,1024,778,480],
    visibilityLevels:[1240,1024,778,480],
    lazyType:"none",
    parallax: {
      type:"scroll",
      origo:"enterpoint",
      speed:400,
      levels:[5,10,15,20,25,30,35,40,45,50,46,47,48,49,50,55],
      type:"scroll",
    },
    shadow:0,
    spinner:"off",
    stopLoop:"off",
    stopAfterLoops:-1,
    stopAtSlide:-1,
    shuffle:"off",
    autoHeight:"off",
    minHeight: 350,
    hideThumbsOnMobile:"off",
    hideSliderAtLimit:0,
    hideCaptionAtLimit:0,
    hideAllCaptionAtLilmit:0,
    debugMode:false,
    fallbacks: {
      simplifyAll:"off",
      nextSlideOnWindowFocus:"off",
      disableFocusListener:false,
    }
  });
  }
  }); /*ready*/

// Preloader   
    $(window).on('load', function()  { 
      $('.status').fadeOut();
      $('.preloader').delay(350).fadeOut('slow'); 
    });

})(jQuery);