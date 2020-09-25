
//animations
function fadeOut() {
    var element = document.getElementById("loader-wrapper");
    var op = 1;
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";
 
function focusUser() {
if (document.forms["login"]["name"].value == "") {
    var x = document.querySelector("#userlabel");

    let start = Date.now();

    let timer = setInterval(function() {
    let timePassed = Date.now() - start;

    if (timePassed >= 500) {
    clearInterval(timer); 
    return;
    }

    draw(timePassed);

    }, 20);
    
    function draw(timePassed) {
    var time = 20 - (timePassed/25);
    x.style.top = time + "px"; 
    }
    x.style.zIndex = 1;
}
}

function focusUserOut() {
if (document.forms["login"]["name"].value == "") {
    var x = document.querySelector("#userlabel");

    let start = Date.now();

    let timer = setInterval(function() {
    let timePassed = Date.now() - start;

    if (timePassed >= 500) {
    clearInterval(timer); 
    return;
    }

    draw(timePassed);

    }, 20);

    function draw(timePassed) {
    x.style.top = timePassed/25 + "px"; 
    }
    x.style.zIndex = -1;
}

}

function focusPass() {
if (document.forms["login"]["password"].value == "") {
    var x = document.querySelector("#passlabel");

    let start = Date.now();

    let timer = setInterval(function() {
    let timePassed = Date.now() - start;

    if (timePassed >= 500) {
    clearInterval(timer); 
    return;
    }

    draw(timePassed);

    }, 20);
    
    function draw(timePassed) {
    var time = 20 - (timePassed/25);
    x.style.top = time + "px"; 
    }
    x.style.zIndex = 1;
}
}

function focusPassOut() {
if (document.forms["login"]["password"].value == "") {
    var x = document.querySelector("#passlabel");

    let start = Date.now();

    let timer = setInterval(function() {
    let timePassed = Date.now() - start;

    if (timePassed >= 500) {
    clearInterval(timer); 
    return;
    }

    draw(timePassed);

    }, 20);

    function draw(timePassed) {
    x.style.top = timePassed/25 + "px"; 
    }
    x.style.zIndex = -1;
}
}

function focusVer() {
if (document.forms["login"]["verpassword"].value == "") {
    var x = document.querySelector("#verpasslabel");

    let start = Date.now();

    let timer = setInterval(function() {
    let timePassed = Date.now() - start;

    if (timePassed >= 500) {
    clearInterval(timer); 
    return;
    }

    draw(timePassed);

    }, 20);
    
    function draw(timePassed) {
    var time = 20 - (timePassed/25);
    x.style.top = time + "px"; 
    }
    x.style.zIndex = 1;
}
}
function focusVerOut() {
if (document.forms["login"]["verpassword"].value == "") {
    var x = document.querySelector("#verpasslabel");

    let start = Date.now();

    let timer = setInterval(function() {
    let timePassed = Date.now() - start;

    if (timePassed >= 500) {
    clearInterval(timer); 
    return;
    }

    draw(timePassed);

    }, 20);

    function draw(timePassed) {
    x.style.top = timePassed/25 + "px"; 
    }
    x.style.zIndex = -1;
}

}

//utilities
function showPass() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function showPassVer() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
    var x = document.getElementById("verpassword");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}