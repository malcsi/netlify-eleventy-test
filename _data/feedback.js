    const hero = document.querySelector(".hero");
    const tl = new TimelineMax();

    tl.fromTo(hero, 0.8, { height: "0%" }, {height: '85%', ease: Power2.easeInOut })
    .fromTo(hero, 0.5, {width: "100%"}, {width: "85%"});