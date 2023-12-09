var crsr = document.querySelector('#cursor');
var crsrBlur = document.querySelector('#cursor-blur');
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+2 + "px";
    crsr.style.top = dets.y +  "px";
    crsrBlur.style.left = dets.x-250 + "px";
    crsrBlur.style.top = dets.y-250 + "px";
});
var h4all = document.querySelectorAll('#nav p');
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 4;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    });
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95c11e";
        crsr.style.backgroundColor = "#95c11e";
    });
});
gsap.to("#nav",{
    backgroundColor : "#000",
    height : "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub:1
    }
});
gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger : {
        trigger:"#main",
        scroller: "body",
        start : "top -50%",
        end:"top -100%",
        scrub:2
    }
});
gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });