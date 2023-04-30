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


//Titres projets deplacement
const first = document.getElementById("first")
const second = document.getElementById("second")
const container = document.getElementById("title_projects")
const rect = container.getBoundingClientRect()

const animate = (element,position) => {
     element.style.transform = `translateX(${position}px)`
} 

       

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;
    
   window.requestAnimationFrame(function() {
     
      animate(first,lastKnownScrollPosition*.2)
      animate(second,lastKnownScrollPosition*-.2)
      
    });
});


//Liste scroll
const app = document.getElementById('parent')
let pageYOffset = window.pageYOffset

const render = () => {
	const newPageOffset = window.pageYOffset
	const diff = newPageOffset - pageYOffset
	
	TweenMax.to(app, .3, {
		// skewX: -diff * 0.03,
		skewY: diff * 0.1,
		ease: Power4.ease
	})
  
	pageYOffset = newPageOffset
  requestAnimationFrame(render)
}

render()

