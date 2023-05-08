let baseSize = 16;
function resize() {
    let scale = document.documentElement.clientWidth / 1920;
    document.documentElement.style.fontSize = Math.min(scale, 2) * baseSize + 'px';
}
resize();
window.onresize = function () {
    resize();
}