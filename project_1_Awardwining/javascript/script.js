const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut

        })

        .to(".boundingelem", {
            y: 0,
            ease: Expo.easeInOut,
            duration: 2,
            delay: -1,
            stagger: .2

        })

        .from("#herofooter", {
            y: -10,
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: Expo.easeInOut

        })


}

function circlechaptakarao(){
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;


    window.addEventListener("mousemove", function(dets) {

        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circlemousefollower(xscale, yscale);

    })
}

circlechaptakarao();

function circlemousefollower(xscale, yscale) {
    window.addEventListener("mousemove",function(dets){
        this.document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    })
}

circlemousefollower();
firstPageAnim();

// for the image animations

document.querySelectorAll(".elem img")
.forEach(function (elem) {
    elem.addEventListener("mousemove", function (dets) {
        gsap.to(elem.querySelector("img"), {
            opacity: 2,
            ease: power1,
        });
    });
});