$(document).on("ready", inicio);

function inicio () {

	$('#job').hide(0);
	$('#contact').hide(0);
	$('.know').hide(0);
	$('.tools ').hide(0);
	$('.certifications_content').hide(0);
	$('#intro .button').on("click" , show_job);
	$('#job .button').on("click" , show_contact);
	$('#job .back').on("click" , back);
	$('#contact .back_b').on("click" , back_b);
	$('.skills h4').on("click" , show_skills);
	$('.certifications h4').on("click" , show_certifications);
	$('h6').on("click" , show_contact);

}

function show_job () {

	$('#intro').hide(300);
	$('#job').show(300);

}
function show_contact () {

	$('#intro').hide(0);
	$('#job').hide(300);
	$('#contact').show(300);
	$('h6').hide(100);

}
function back () {

	$('#job').hide(300);
	$('#intro').show(300);
	$('h6').show(100);

}
function back_b () {

	$('#contact').hide(300);
	$('#job').show(300);
	$('h6').show(100);

}

function show_skills () {

	$('.know').toggle(300);
	$('.tools').toggle(300);
	$('h6').show(100);

}

function show_certifications () {

	$('.certifications_content').toggle(300);

}