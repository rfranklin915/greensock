var tl = new TimelineLite({ pause: true });

tl.to('#lighthouse', 2, { autoAlpha: 0.5, onComplete: myFunction, ease: Power3.easeOut, repeat: -1, yoyo: true })
.to('#lighthouse', 2, { width: "100%", onComplete: myFunction, ease: Power3.easeOut, repeat:-1, yoyo: true }, 0)

tl.pause();

function myFunction() {
    console.log('complete!');
}

$('#btn-go').click(function () {
    tl.resume();
});

$('#btn-pause').click(function () {
    tl.pause();
});

$('#btn-reverse').click(function () {
    tl.reverse();
});

$('#btn-restart').click(function () {
    tl.restart();
});

$('#btn-skip').click(function () {
    tl.play("widthLabel");
});