
var can = document.getElementById("canvas"),
    ctx = can.getContext('2d'),
    img = new Image();

img.src = 'fish.png';
can.onclick= function(evt) {
    var x = evt.offsetX - img.width/2,
        y = evt.offsetY - img.height/2;
	
    ctx.drawImage(img, x, y);
};
function rightclick(event) {
  if (event.button == 2) {
	  const context = canvas.getContext('2d');

	  context.clearRect(0, 0, canvas.width, canvas.height);
	  alert("Fish will be deleted")

  }
}
/*
can.onmousemove= function(evt) {
    var x = evt.offsetX - img.width/2,
        y = evt.offsetY - img.height/2;

    ctx.drawImage(img, x, y);
};
*/
function resize() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	render();
}
window.addEventListener('resize', resize, false); resize();
function render() { // draw to screen here
}
