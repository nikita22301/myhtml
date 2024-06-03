// owl crausal

$('.f-slider-one').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    animateOut: 'fadeOut',
    animateIn: 'flipInX',
    items: 1,
    smartSpeed: 450,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
// project_carosel
$('.project_carosel').owlCarousel({
    // loop:true,
    margin:12,
    dots:true,
    items: 2,
    autoplay: true,
    smartSpeed: 600,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
})
// number increment
  function countStart() {
    const counters = document.querySelectorAll(".js-count-up"),
          options = {
              useEasing: true,
              useGrouping: true,
              separator: ",",
              decimal: "."
          };

    counters.forEach((item) => {
        const value = item.dataset.value;
        const counter = new CountUp(item, value, options);
        if (!counter.error) {
            counter.start();
        } else {
            console.error(counter.error);
        }
    });
}
document.addEventListener("DOMContentLoaded", function() {
    new Waypoint({
        element: document.querySelector('.level'),
        handler: function() {
            countStart();
            this.destroy();  // Optional: to trigger only once
        },
        offset: '50%'
    });
});