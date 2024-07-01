var Typed = new Typed(".text1", {
    strings: ["Software Engineer", "Competitive Programmer", "Full Stack Developer", "App Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


document.addEventListener("DOMContentLoaded", function () {

    setPercentage();

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar li a");


    window.addEventListener("wheel", function () {
        let scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.getBoundingClientRect().top + window.pageYOffset - 450;
            const sectionId = current.getAttribute("id");

            if (sectionId) {
                const navLink = document.querySelector(`.navbar li a[href*=${sectionId}]`);  
                if (navLink) {
                    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                        navLink.classList.add("active");
                    } else {
                        navLink.classList.remove("active");
                    }
                }
            }
        });

        
    });


    navLinks.forEach(link => {

        link.addEventListener('click', function () {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');

        });

    });

    function setPercentage() {
        const pathLength = 503;
        const percent = [0.9,0.65,0.8,0.7];

        for(let i=1;i<=percent.length;i++){
            let dashoffset = pathLength - (pathLength * percent[i-1]);
            document.documentElement.style.setProperty(`--dashoffset${i}`, dashoffset);
        }
        
    }



});