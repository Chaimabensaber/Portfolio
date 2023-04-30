const app = document.getElementById('parent')
let pageYOffset = window.pageYOffset

const render = () => {
	const newPageOffset = window.pageYOffset
	const diff = newPageOffset - pageYOffset
	
	TweenMax.to(app, .3, {
		skewY: diff * 0.1,
		ease: Power4.ease
	})
  
	pageYOffset = newPageOffset
  requestAnimationFrame(render)
}

render()