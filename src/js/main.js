

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


function swapDiv(event,elem){
  elem.parentNode.insertBefore(elem,elem.parentNode.firstChild);
  let black = document.querySelector('.about__slider-squad-black'),
      yellow = document.querySelector('.about__slider-squad-yellow');
  yellow.style.left = '0px';
  black.style.left ='-15px';
};



$("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 1;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
});


var service = new Swiper('.service-container', {
  navigation: {
    nextEl: '.nav__arrow-right',
    prevEl: '.nav__arrow-left',
  },
  slidesPerView: 1,
  loop: true,
  loopFillGroupWithBlank: true,
});

//ANIMATION
	
var c1= document.getElementById('con_1');
var c2= document.getElementById('con_2');

function change_con(){
  if(c1.classList.contains('con-main')){
    swipe_con(c1, c2);
  }else{
    swipe_con(c2, c1);
  }
}


function swipe_con(c1, c2){
     check_main(c2);
    check_minor(c1);
}

function check_main(c){
    c.classList.add('con-main');
    c.classList.remove('con-minor');
}

function check_minor(c){
    c.classList.add('con-minor');
    c.classList.remove('con-main');
}