// Modalin avaus ja sulkeminen
var modal = document.getElementById("modal");
var images = document.getElementsByClassName("preview-image");
var modalImg = document.getElementById("modal-image");
var closeBtn = document.getElementById("close");

for (var i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}