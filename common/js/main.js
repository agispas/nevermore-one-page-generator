
var DEMO = (function( $ ) {
  'use strict';

  var $grid = $('.grid'),
      $filterOptions = $('.filter-options'),
      $sizer = $grid.find('.shuffle__sizer'),

  init = function() {


    // None of these need to be executed synchronously
    setTimeout(function() {
      setupFilters();
    }, 100);

    // You can subscribe to custom events.
    // shrink, shrunk, filter, filtered, sorted, load, done
    $grid.on('loading.shuffle done.shuffle shrink.shuffle shrunk.shuffle filter.shuffle filtered.shuffle sorted.shuffle layout.shuffle', function(evt, shuffle) {
      // Make sure the browser has a console
      if ( window.console && window.console.log && typeof window.console.log === 'function' ) {
        console.log( 'Shuffle:', evt.type );
      }
    });

    // instantiate the plugin
    $grid.shuffle({
      itemSelector: '.picture-item',
      sizer: $sizer
    });

    // Destroy it! o_O
    // $grid.shuffle('destroy');
  },

  // Set up button clicks
  setupFilters = function() {
    var $btns = $filterOptions.children();
    $btns.on('click', function() {
      var $this = $(this),
          isActive = $this.hasClass( 'active' ),
          group = isActive ? 'all' : $this.data('group');

      // Hide current label, show current label in title
      if ( !isActive ) {
        $('.filter-options .active').removeClass('active');
      }

      $this.toggleClass('active');

      // Filter elements
      $grid.shuffle( 'shuffle', group );
    });

    $btns = null;
  };

  return {
    init: init
  };
}( jQuery ));



$(document).ready(function() {
  DEMO.init();
$(window).scroll(function(){
       if ($(window).scrollTop() > 400){
    $('.navbar-03').addClass( "nav-black");
}
else {
    $('.navbar-03').removeClass("nav-black");
}
    });
});

jQuery(document).ready(function($){
  var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;

  //open team-member bio
  $('.thumbnail').find('a').on('click', function(event){
    event.preventDefault();
    var selected_member = $(this).data('type');
    $('.cd-member-bio.'+selected_member+'').addClass('slide-in');
    $('.cd-member-bio-close').addClass('is-visible');

    // firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
    if( is_firefox ) {
      $('main').addClass('slide-out').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
        $('body').addClass('overflow-hidden');
      });
    } else {
      $('main').addClass('slide-out');
      $('body').addClass('overflow-hidden');
    }

  });

  //close team-member bio
  $(document).on('click', '.cd-overlay, .cd-member-bio-close', function(event){
    event.preventDefault();
    $('.cd-member-bio').removeClass('slide-in');
    $('.cd-member-bio-close').removeClass('is-visible');

    if( is_firefox ) {
      $('main').removeClass('slide-out').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
        $('body').removeClass('overflow-hidden');
      });
    } else {
      $('main').removeClass('slide-out');
      $('body').removeClass('overflow-hidden');
    }
  });
});
    


$(document).ready(function() {
 
    $('.lava').lavalamp({
    easing: 'easeOutBack'
});
      $('.features').lavalamp({
    easing: 'easeOutBack',
    setOnClick:true
});
   

 $(".btn-load").click(function() {
    var $btn = $(this);
    $btn.button('loading');

    $(".hide-project").show();
    // After that has finished, reset the button state using
    setTimeout(function () {
        $btn.button('reset');
    }, 1000);
});



$('#team-01').owlCarousel({
 
    items:1,
     dots:true,
    dotsContainer:'.dots',
   

  });


$('#team-02').owlCarousel({
 
    items:1,
    dots:true,

  });



  
$("#header-1-carousel").owlCarousel({
    items:1,
    video:true,
    nav:false,
    videoHeight:600

});

$("#header-2-carousel").owlCarousel({
    items:1,
    animateOut: 'fadeOut',
    autoHeight:true
   

  
});

$("#portfolio-1").owlCarousel({
    items:1,
    autoHeight:true,
    dots:false,
    nav:true,
     navText:[
            "<i class='fa fa-angle-left fa-2x'></i>",
            "<i class='fa fa-angle-right fa-2x'></i>"
        ]

   
});

$("#portfolio-2").owlCarousel({
    items:1,
    autoHeight:true,
    dots:false,
    nav:true,
     navText:[
            "<i class='fa fa-angle-left fa-2x'></i>",
            "<i class='fa fa-angle-right fa-2x'></i>"
        ]

   
});

$('#test').owlCarousel({
 
    items:1,
     dots:true,
    dotsContainer:'.dots',
   

  });



});
/*
TRIGGER STICKY HEADER
*/
 
 $(document).ready(function(){
    $(".header-01").sticky({topSpacing:0});
  

 
  $('.menu-link').bigSlide({

    side: 'right',
    menuWidth: '22.625em' 
      });

  /* default settings */
  $('.venobox').venobox(); 
  

  


    $(".ratio").imgLiquid();
     $(".project-ratio").imgLiquid();

});
 


/*
HIDE HEADER WHEN SCROLL DOWN, SHOW HEADER WHEN SCROLL UP 
*/ 

(function() {
    var header = document.querySelector(".navbar-simple");
    if(window.location.hash) {
        header.classList.add("slide--up");

    }

    new Headroom(header, {
        tolerance: {
          down : 10,
          up : 20
        },
        offset : 205,
        classes: {
          initial: "slide",
          pinned: "slide--reset",
          unpinned: "slide--up"
        }
    }).init();

}());
$(document).ready(function(){
  
  $('#nav-icon3, .side-menu').click(function(){
    $('#nav-icon3, .side-menu').toggleClass('open');
  });
$.scrollIt({
  upKey: 38,             // key code to navigate to the next section
  downKey: 40,           // key code to navigate to the previous section
  easing: 'linear',      // the easing function for animation
  scrollTime: 600,       // how long (in ms) the animation takes
  activeClass: 'nav-active', // class given to the active nav element
  onPageChange: null,    // function(pageIndex) that is called when page is changed
  topOffset: 0           // offste (in px) for fixed top navigation
});
        
 $('.content-04').waypoint(function(direction) {
 $('.count').each(function () {
  var $this = $(this);
  jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
    duration: 2500,
    easing: 'swing',
    step: function () {
      $this.text(Math.ceil(this.Counter));
    }
  });
});
}, { offset: 100 })

       
});



 var url ='../../common/icons/icons.svg';
  var c=new XMLHttpRequest(); c.open('GET', url, false); c.setRequestHeader('Content-Type', 'text/xml'); c.send();
  document.body.insertBefore(c.responseXML.firstChild, document.body.firstChild)

// validate contact form
$(function() {
    $('#contactForm').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            }
            
        },
      
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"process.php",
                success: function() {
                    $('#contactForm :input').attr('disabled', 'disabled');
                    $('#contactForm').fadeTo( "slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#success').fadeIn();
                    });
                },
                error: function() {
                    $('#contactForm').fadeTo( "slow", 0.15, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });
});





