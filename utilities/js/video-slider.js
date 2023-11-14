
let CurrentSlide = 0;
ChooseSlide();
selectedThumbnail();
const images = document.getElementsByClassName('carosel-image');
const imageCaption = document.getElementById('image-caption');


function ChooseSlide() {
  const MainImage = document.getElementsByClassName('mainImage-slider');
  for (let index = 0; index < MainImage.length; index++) {

    MainImage[index].style.display = 'none';

  }
  MainImage[CurrentSlide].style.display = 'block';
  // var video = MainImage[CurrentSlide].querySelector('video');
  // if (video) {
  //   video.currentTime = 0;
  //   video.play();
  // }
}

function selectedThumbnail() {
  const images = document.getElementsByClassName('carosel-image');
  for (let index = 0; index < images.length; index++) {
    images[index].classList.remove('opacity-[0.7]');
  }
  images[CurrentSlide].classList.add('opacity-[0.7]');
}


function setCurrentImage(index) {
  const images = document.getElementsByClassName('carosel-image');
  CurrentSlide = index;
  imageCaption.innerHTML = images[CurrentSlide].alt;
  selectedThumbnail()
  ChooseSlide()
}

function moveGallery(value) {
  console.log(value)
  const images = document.getElementsByClassName('carosel-image');
  const newValue = CurrentSlide + value;
  if (newValue >= images.length) {
    CurrentSlide = 0
  }

  else if (newValue < 0) {

    CurrentSlide = images.length - 1;
  }
  else {
    CurrentSlide = newValue;
  }

  imageCaption.innerHTML = images[CurrentSlide].alt;
  selectedThumbnail();
  ChooseSlide();
}

let mouseDown = false;
let startX, scrollLeft;
const slider = document.getElementById('thumbnail-slider');

const startDragging = (e) => {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}

const stopDragging = (e) => {
  mouseDown = false;
}

const move = (e) => {
  e.preventDefault();
  if (!mouseDown) { return; }
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;
}

// Add the event listeners
slider.addEventListener('mousemove', move, false);
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);


function autoSlide() {
  moveGallery(1);
  console.log("I repeats")
  setTimeout(autoSlide, 3000);
}

// autoSlide();
// selectedThumbnail();




function calculateAgeInWeeks(dateOfBirth) {

  // Convert the date of birth string to a Date object
  const dob = new Date(dateOfBirth);

  // Calculate the current date
  const currentDate = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = currentDate - dob;

  // Calculate the age in weeks
  const ageInWeeks = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 7));

  return ageInWeeks;
}

