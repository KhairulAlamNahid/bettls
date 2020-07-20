//fixed menu
$(window).scroll(function () {
    $scrollamount = $(window).scrollTop();
    if ($scrollamount > 200) {
        $(".menubar").addClass("fixed");
    } else {
        $(".menubar").removeClass("fixed");
    }

    //back-to buttom
    if ($scrollamount > 500) {
        $(".btop").fadeIn();
    } else {
        $(".btop").fadeOut();
    }
})

//$(".btop").click(function () {
//    $('html,body').animate({
//        scrollTop: 0
//    }, 1000)
//})


//banner slider
$('#banner-part').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    fade: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
    },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    }
  ]
});


//service slider
$('.service-slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
    },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    }
  ]
});

//portfolio part venobox js
$('.venobox').venobox();


//testimonial slider
$('.test-slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
    },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    }
  ]
});
