//==================header Theme Mode================//
// Get the toggle button and body element
const light_1 = document.getElementById("light1");
const dark_1 = document.getElementById("dark1");
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check the localStorage for saved theme preference
const savedTheme = localStorage.getItem('theme');

// Apply the saved theme if it exists
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  themeToggleButton.classList.add('dark-mode');
}
// Add an event listener to toggle the theme
themeToggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  themeToggleButton.classList.toggle('dark-mode');

  // Save the current theme to localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    dark_1.style.display = "block";
    light_1.style.display = "none";
  } else {
    localStorage.setItem('theme', 'light');
    dark_1.style.display = "none";
    light_1.style.display = "block";
  }
});
//================== header Theme Mode end================//


//================== active class================//
const navLinkEls=document.querySelectorAll(".nav_link");
navLinkEls.forEach(navLinkEls =>{
  navLinkEls.addEventListener('click',()=>{
    document.querySelector('.active')?.classList.remove('active');
  navLinkEls.classList.add('active');
  });
});
//================== active class end================//



//================== page function================//

const live1=document.getElementById("live1");
const live2=document.getElementById("live2");
const live3=document.getElementById("live3");

function stream1(){
  live1.style.display="block";
  live1.classList.add('page_effect');
  live2.style.display="none";
  live3.style.display="none";
}

function stream2(){
  live1.style.display="none";
  live2.style.display="block";
   live2.classList.add('page_effect');
  live3.style.display="none";
}

function stream3(){
  live1.style.display="none";
  live2.style.display="none";
   live3.classList.add('page_effect');
  live3.style.display="block";
}

//================== page function end================//

