$(document).ready(function() {
    function dateTime() {
        var format = "";
        var ndate = new Date();
        var hr = ndate.getHours();
        var h = hr % 12;

        if (hr < 12) {
            greet = 'Good Morning';
            format = 'AM';
        } else if (hr >= 12 && hr <= 17) {
            greet = 'Good Afternoon';
            format = 'PM';
        } else if (hr >= 17 && hr <= 24)
            greet = 'Good evening';

        var m = ndate.getMinutes().toString();
        var s = ndate.getSeconds().toString();

        if (h < 12) {
            h = "0" + h;
            $("h3.day-message").html(greet);
        } else if (h < 18) {
            $("h3.day-message").html(greet);
        } else {
            $("h3.day-message").html(greet);
        }

        if (s < 10) {
            s = "0" + s;
        }

        if (m < 10) {
            m = "0" + m;
        }

        $('.date').html(h + ":" + m + ":" + s + format);
        $('.sub-welcome-text').html(greet + ', ' + 'welcome back.')
    }
    setInterval(dateTime, 1000);
});
var burger = $('.hamburger');
var menuToggle = document.querySelector('[data-js="menu-toggle"]');
var HiddenPanel = document.getElementById("HiddenPanel");

menuToggle.addEventListener('click', function() {
    document.body.classList.toggle('panel-open');
    menuToggle.classList.toggle('open');
    CloseMenu.classList.remove('hide');
    HiddenPanel.classList.remove('hide');
    burger.toggleClass("is-active");
});

var closePanel = document.querySelector('[data-js="hidden-panel-close"]');
var CloseMenu = document.getElementById("CloseMenu");

closePanel.addEventListener('click', function() {
    document.body.classList.remove('panel-open');
    menuToggle.classList.remove('open');
    CloseMenu.classList.add('hide');
    HiddenPanel.classList.add('hide');
    burger.toggleClass("is-active");

});

function Closemypanel() {
    menuToggle.classList.remove('open');
    CloseMenu.classList.add('hide');
    HiddenPanel.classList.add('hide');
    document.body.classList.remove('panel-open');
    burger.toggleClass("is-active");

}
var $loginForm = $(".form-signin"),
    $login_text_fields = $loginForm.find("input[type='text']");

$(".form-container").removeClass("off-canvas");

$loginForm.validate({
    errorElement: "span",
    success: function(label) {
        _form_success_aria(label);
    },
    invalidHandler: function(event, validator) {
        _form_error_aria(event);
    }
});

function _form_success_aria(label) {
    var target = label.parent().find("input");
    target.attr("aria-invalid", "false");
}

function _form_error_aria(validator) {
    console.log(validator.target.elements[0]);
}

function showPassword() {
    var x = document.getElementById("password");
    var openEye = document.getElementById("Eye");

    if (x.type === "password") {
        x.type = "text";
        openEye.classList.add("fa-eye-slash");
    } else {
        x.type = "password";
        openEye.classList.remove("fa-eye-slash");
        openEye.classList.add("fa-eye");
    }
}

document.getElementById('formsigin').onsubmit = () => {
    var name = document.getElementById('Email').value;
    localStorage.setItem('Email', name);

    var email = document.getElementById('Email').value;
    var password = document.getElementById('password').value;

    if (password == 'dashboard') {
        alert('Welcome ' + email);
        location.href = "dashboard";
    } else if (password !== 'dashboard') {
        alert('wrong password');
    }
    return false;

}