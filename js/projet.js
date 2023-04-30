//Ouverture btn nav
document.addEventListener("DOMContentLoaded", () => {
    const revealerNav = window.revealer({
        revealElementSelector: ".btn_nav",
        options: {
            anchorSelector: ".circle_btn",
        },
    });

    const actionBtn = document.querySelector(".circle_btn");
    actionBtn.addEventListener("click", () => {
        if (!revealerNav.isRevealed()) {
            revealerNav.reveal();
            actionBtn.setAttribute("data-open", true);
        } else {
            revealerNav.hide();
            actionBtn.setAttribute("data-open", false);
        }
    });
});

//projet scroll
const body = document.body,
            scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
            height = scrollWrap.getBoundingClientRect().height - 1,
            speed = 0.04;

        var offset = 0;

        body.style.height = Math.floor(height) + "px";

        function smoothScroll() {
            offset += (window.pageYOffset - offset) * speed;

            var scroll = "translateY(-" + offset + "px) translateZ(0)";
            scrollWrap.style.transform = scroll;

            callScroll = requestAnimationFrame(smoothScroll);
        }

        smoothScroll();

