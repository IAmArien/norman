$(document).ready(() => {
    // about
    $("#aboutNav").click(() => {
        console.log("Hello World, I was clicked");
        $('html, body').animate({
        scrollTop: $("#aboutContainer").offset().top - 40
        }, 100);
    });
    // what I do
    $("#whatIdoNav").click(() => {
        console.log("Hello World, I was clicked");
        $('html, body').animate({
        scrollTop: $("#whatIdoContainer").offset().top - 40
        }, 100);
    });
    // experience
    $("#experienceNav").click(() => {
        console.log("Hello World, I was clicked");
        $('html, body').animate({
        scrollTop: $("#experienceContainer").offset().top - 80
        }, 100);
    });
    // projects
    $("#projectsNav").click(() => {
        console.log("Hello World, I was clicked");
        $('html, body').animate({
        scrollTop: $("#projectsContainer").offset().top - 30
        }, 100);
    });
    // skills and technologies
    $("#skillsNav").click(() => {
        console.log("Hello World, I was clicked");
        $('html, body').animate({
        scrollTop: $("#skillsContainer").offset().top - 30
        }, 100);
    });
    // testimonials
    $("#testimonialsNav").click(() => {
        console.log("Hello World, I was clicked");
        $('html, body').animate({
        scrollTop: $("#testimonialsContainer").offset().top - 80
        }, 100);
    });
    // contact us
    $("#contactUsNav").click(() => {
        console.log("Hello World, I was clicked");
        $('html, body').animate({
        scrollTop: $("#contactUsContainer").offset().top - 30
        }, 100);
    });
});