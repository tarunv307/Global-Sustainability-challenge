/* =========================================================
   TRIFORGE - WEBSITE JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ACTIVE NAVIGATION
       ===================================================== */

    const navLinks = document.querySelectorAll("nav a");

    const sections = document.querySelectorAll(
        "section[id]"
    );

    function updateActiveNav() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 85;

            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === `#${currentSection}`) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveNav
    );


    /* =====================================================
       SMOOTH SCROLL
       ===================================================== */

    navLinks.forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            if (
                targetId &&
                targetId.startsWith("#")
            ) {

                event.preventDefault();

                const target =
                    document.querySelector(targetId);

                if (target) {

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });


    /* =====================================================
       SCROLL REVEAL ANIMATION
       ===================================================== */

    const revealElements = document.querySelectorAll(
        ".quick-card, .about-content, .about-image, " +
        ".workflow-card, .team-card, .info-card, " +
        ".technology-card, .mentor-card, .dashboard-content"
    );

    revealElements.forEach(element => {
        element.classList.add("reveal");
    });


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(element => {
        observer.observe(element);
    });


    /* =====================================================
       DASHBOARD BUTTON
       ===================================================== */

    const dashboardButtons =
        document.querySelectorAll(
            ".dashboard-btn, " +
            ".primary-btn"
        );


    dashboardButtons.forEach(button => {

        button.addEventListener(
            "mouseenter",
            () => {

                button.style.transform =
                    "translateY(-3px)";

            }
        );

        button.addEventListener(
            "mouseleave",
            () => {

                button.style.transform =
                    "";

            }
        );

    });


    /* =====================================================
       SENSOR RISK ANIMATION
       ===================================================== */

    const riskZone =
        document.querySelector(".risk-zone");


    if (riskZone) {

        let growing = true;

        setInterval(() => {

            if (growing) {

                riskZone.style.transform =
                    "scale(1.08)";

                riskZone.style.opacity =
                    "1";

            } else {

                riskZone.style.transform =
                    "scale(0.95)";

                riskZone.style.opacity =
                    "0.7";

            }

            growing = !growing;

        }, 1200);

    }


    /* =====================================================
       LIVE RISK STATUS
       ===================================================== */

    const warningBox =
        document.querySelector(".warning-box");


    if (warningBox) {

        let riskState = 0;

        const riskMessages = [
            "GROUND STABLE",
            "MONITORING",
            "RISK DETECTED"
        ];


        setInterval(() => {

            riskState++;

            if (
                riskState >=
                riskMessages.length
            ) {
                riskState = 0;
            }

            const strong =
                warningBox.querySelector(
                    "strong"
                );

            if (strong) {

                strong.textContent =
                    riskMessages[riskState];

            }

        }, 4000);

    }


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const footerYear =
        document.querySelector(
            ".footer-bottom p"
        );

    if (footerYear) {

        const currentYear =
            new Date().getFullYear();

        footerYear.innerHTML =
            footerYear.innerHTML.replace(
                "2026",
                currentYear
            );

    }


    /* =====================================================
       INITIAL NAV UPDATE
       ===================================================== */

    updateActiveNav();

});