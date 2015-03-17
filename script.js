document.onreadystatechange = function () {
	console.log('hellow world');
    var state = document.readyState;
    if (state == 'complete') {
        // Place all your clicking logic here.
        document.getElementById("button-about").onclick = function () { window.scroll(0, findPos(document.getElementById("scroll-about")))};
        document.getElementById("button-my-work").onclick = function () { window.scroll(0, findPos(document.getElementById("scroll-my-work")))};
        document.getElementById("button-contact").onclick = function () { window.scroll(0, findPos(document.getElementById("scroll-contact")))};
    }
};

// This will help you with finding how much to scroll the window.
// elem is DOM element
function findPos(elem) {
    var top = 0;
    if (elem.offsetParent) {
        do {
            top += elem.offsetTop;
        } while (elem = elem.offsetParent);
        return [top];
    }
}