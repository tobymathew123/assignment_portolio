
const welcomeButton = document.getElementById('welcomeButton');
const profilePic = document.getElementById('profilePic');


const originalBodyColor = document.body.style.backgroundColor;


welcomeButton.addEventListener('click', function() {
    alert('This is an Event!');
});


profilePic.addEventListener('mouseover', function() {
  
    document.body.style.backgroundColor = "lightblue";
});


profilePic.addEventListener('mouseout', function() {
    document.body.style.backgroundColor = originalBodyColor;
});