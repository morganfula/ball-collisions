import './style.css';

class App {
	constructor() {
		this.canvas = document.createElement('canvas');
		this.ctx = this.canvas.getContext('2d');

		document.body.appendChild(this.canvas);

		window.addEventListener('resize', this.resize.bind(this), false);

		window.requestAnimationFrame(this.animate.bind(this), false);
	}

	resize() {
		this.stageWidth = document.body.clientWidth;
		this.stageHeight = document.body.clientHeight;

		this.canvas.width = this.stageWidth * 2;
		this.canvas.height = this.stageHeight * 2;

		this.ctx.scale(2, 2);
	}

	animate(t) {
		window.requestAnimationFrame(this.animate.bind(this), false);
	}
}

window.onload = () => {
	new App();
};
