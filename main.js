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
sr.reveal('.home__contact',{origin:'left', delay:200})


// SCROLL LOGO

sr.reveal('.logo__group',{ origin:'left',delay:500})



// SCROLL SHOWCASE
sr.reveal('.showcase__titles',{})
sr.reveal('.row1',{ origin:'left',distance:'20px', delay:50, interval:100})
sr.reveal('.row2',{ origin:'right', delay:400})
sr.reveal('.row3',{ origin:'left',delay:400})


// SCROLL TESTIMONIAL

sr.reveal('.testimonialz',{interval:200})

// SCROLL CONTACT

sr.reveal('.contact__title',{})
sr.reveal('.contact__subtitle',{interval:200})
sr.reveal('.contact__first-batch',{delay:400})
sr.reveal('.contact__second-batch',{ origin:'right', delay:500})
