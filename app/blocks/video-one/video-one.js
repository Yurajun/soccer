
let isTouchDevice = true;
let touchEvent;
function touchDevice(){
	try {
		document.createEvent('TouchEvent');
		document.addEventListener('touchmove', function (event){event.preventDefault();}, true);
	}
	catch (err) {isTouchDevice = false;}
	touchEvent = isTouchDevice ? 'touchstart' : 'click';

}

touchDevice();

const vid = document.querySelector('.video-one__video');
const btn = document.querySelector('.video-one__play');

btn.addEventListener(touchEvent, e => {
	vid.play();
	e.currentTarget.style.opacity = 0;
});

vid.onplay = () => {
	btn.style.opacity = 0;
};

vid.onpause = () => {
	btn.style.opacity = 1;
};

vid.addEventListener(touchEvent, () => {
	if (vid.paused) {
		vid.play();
	}else {
		vid.pause();
	}
});
