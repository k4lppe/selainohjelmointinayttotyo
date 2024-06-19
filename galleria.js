// Get the modal
var modal = document.getElementById('modal');

// Get the images and set up event listeners
var images = document.getElementsByClassName('preview-image');
for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function(event) {
        var img = event.target;
        var modalImg = document.getElementById('modal-image');
        modalImg.src = img.src;
        modal.style.display = 'block';
    });
}

// Get the <span> element that closes the modal
var span = document.getElementById('close');

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = 'none';
};
