//modal subscriber//

let modal = document.getElementById("modal");

setTimeout(() =>{
    showModal();
}, 500);

function showModal(){
    modal.style.display = "block";
}

function closeModal(){
    modal.style.display = "none";
}

function isModalOpen(){
    return modal.style.display === "block";
}


//videos slider//

var video1 = document.getElementById('video1');
var video2 = document.getElementById('video2');
var video3 = document.getElementById('video3');

video1.onended = function () {
  video2.play();
  video1.style.opacity=0;
  video2.style.opacity=1;
}

video2.onended = function () {
  video3.play();
  video2.style.opacity=0;
  video3.style.opacity=1;
}

video3.onended = function () {
  video1.play();
  video3.style.opacity=0;
  video1.style.opacity=1;
}



//feature collection//

// Select the container and buttons
const featureContainer = document.querySelector('.f-collect');
const nextButton = document.querySelector('.nxt-btn');
const prevButton = document.querySelector('.pre-btn');

// Get the width of the container
const containerWidth = featureContainer.offsetWidth;

// Attach event listeners to buttons
nextButton.addEventListener('click', () => {
  featureContainer.scrollLeft += containerWidth; // Scroll right
});

prevButton.addEventListener('click', () => {
  featureContainer.scrollLeft -= containerWidth; // Scroll left
});

// Debugging logs to test functionality
console.log('Container width:', containerWidth);

