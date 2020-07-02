var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 1500); 
}


function signin() {
    username = document.getElementById('userName').value;
    document.getElementById('student').innerHTML = username;
}
function openForm() {
    document.getElementById('myForm').style.display = 'block';
}

function closeForm() {
    document.getElementById('myForm').style.display = 'none'; 
}

myForm = document.getElementById('myForm');

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
});