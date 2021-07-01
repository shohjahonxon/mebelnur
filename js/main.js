window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
}); 

function menuToggle(){
    const menuToggle = document.querySelector('menuToggle');
    menuToggle.classList.toggle('active');
}  

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }