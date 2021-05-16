// SCROLL REVEAL ANIMATION

const sr = ScrollReveal({
    origin:'top',
    distance:'80px',
    duration:2000,
    reset:true
})

// SCROLL HOME

sr.reveal('.home__title',{})
sr.reveal('.home__subtitle',{delay:200})
sr.reveal('.home__description',{delay:200})
sr.reveal('.home__contact',{origin:'left', delay:400})


// SCROLL LOGO

sr.reveal('.logo__group',{delay:500})
// sr.reveal('.about__subtitle',{delay:300})
// sr.reveal('.about__profession',{delay:400})
// sr.reveal('.about__text',{delay:500})
// sr.reveal('.about__social-icon',{delay:600, interval:200})



// SCROLL SHOWCASE
sr.reveal('.showcase__titles',{})
sr.reveal('.row1',{distance:'20px', delay:50, interval:100})
sr.reveal('.row2',{delay:400})
sr.reveal('.row3',{delay:400})


// SCROLL TESTIMONIAL

sr.reveal('.testimonialz',{interval:200})

// SCROLL CONTACT

sr.reveal('.contact__title',{})
sr.reveal('.contact__subtitle',{interval:200})
sr.reveal('.contact__first-batch',{delay:400})
sr.reveal('.contact__second-batch',{delay:500})
