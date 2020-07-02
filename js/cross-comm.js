
var thanks = document.getElementById('thanks')
var confirm = document.getElementById('confirm');
confirm.addEventListener('click', (e) => {
    

    e.preventDefault();
    var emailget = document.getElementById('email').value;
    var nameget = document.getElementById('namesurname').value;
    localStorage.clear();
    localStorage.setItem('youremail', emailget);
    localStorage.setItem('yourname', nameget);
    
    window.location.replace('index.html');
})

