$(function () {
	$('.toggles button').click(function(){
		var get_id = this.id;
		var get_current = $('.posts .' + get_id);

		$('.post').not(get_current).hide(500);
		get_current.show(500);
	});

	$('#showall').click(function() {
		$('.post').show(500);
	});
   
});
window.onload = function menuF() {
var menu = document.getElementById('myTopnav');
menu.onclick = function myFunction() {
 if (menu.className === 'topnav') {
  menu.className += ' responsive';
 } else {
  menu.className = 'topnav';
 }
}
}



$(document).ready(function(){

	$(".image").click(function(){
		var img = $(this);
		var src = img.attr('src');
		$("body").append("<div class='popup'>"+
						 "<div class='popup_bg'></div>"+ 
						 "<img src='"+src+"' class='popup_img' />"+
						 "</div>"); 
		$(".popup").fadeIn(800);
		$(".popup_bg").click(function(){
			$(".popup").fadeIn(800);
			setTimeout(function(){
				$(".popup").remove();
			},800);
		});
	});

});

$(function(){
  $('.minimized').click(function(event) {
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
    $('#magnify').css({
     left: ($(document).width() - $('#magnify').outerWidth())/2,
     // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
            top: ($(window).height() - $('#magnify').outerHeight())/2
   });
    $('#overlay, #magnify').fadeIn('fast');
  });
  
  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();
    $('#overlay, #magnify').fadeOut('fast', function() {
      $('#close-popup, #magnify, #overlay').remove();
    });
  });
});


$(document).ready(function(){
	$('.header-burger').click(function(event){
		$('.header-burger, .menu-body').toggleClass('active');
		$('.body').toggleClass('lock');
	})
})



function ibg(){
$.each($('.ibg'), function(index, val) {
    if($(this).find('img').length>0){
        $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
        }
    });
}
ibg();

if($('.slider-body').length>0){
   $('.slider-body').slick({
		arrows:false,
		dots:true,
		accessibility:false,
		slidesToShow:1,
		speed:3000,
		autoplay:true,
		pausOnDontsHover:false,
		waitForAnimate:false,
		
	});

}

"use strict"

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		
		if (error === 0) {
            form.classList.add('_sending');
			let response = await fetch('sendmail.php', {
				method: 'POST',
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				alert(result.message);
				form.reset();
				form.classList.remove('_sending');
			}
			else {
				alert('Помилка!');
				form.classList.remove('_sending');
			}

		} 
		else {
			alert("Заповніть обов'язкові поля!");
		}
	} 

	function formValidate(form){
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for(let index = 0; index < formReq.length; index++){
			const input = formReq[index];
		    formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else if(input.getAttribute("type") === "checkbox" && input.checked === false){
				    formAddError(input);
					error++;
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
});

/*//===================================================== calculator*/
// Функція для розрахунку калорій
function calculateCalories() {
    // Отримуємо значення з полів введення
    const height = parseFloat(document.getElementById('height').value); // Ріст в сантиметрах
    const weight = parseFloat(document.getElementById('weight').value); // Вага в кілограмах
    const age = parseInt(document.getElementById('age').value); // Вік в роках
    const gender = document.querySelector('input[name="gender"]:checked').value; // Стать
    const activityLevel = parseFloat(document.getElementById('activity-level').value); // Рівень активності
  
    // Розрахунок розміру Basal Metabolic Rate (BMR)
    let bmr = 0;
    if (gender === 'male') {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
  
    // Розрахунок загального рекомендованого рівня калорій з урахуванням активності
    const totalCalories = bmr * activityLevel;
  
    // Виводимо результат
    document.getElementById('result').innerHTML = `Вам потрібно споживати приблизно ${totalCalories.toFixed(2)} калорій на день.`;
  }
  
  // Обробник події для кнопки розрахунку
  document.getElementById('calculate-btn').addEventListener('click', calculateCalories);
  

