class User {
  constructor(name, password, verpassword) {
    this.name = name;
    this.password = password;
    if (verpassword == undefined) {
      this.verpassword = password;
    } else {
      this.verpassword = verpassword;
    }
  }

  get nam() {
    return this.name;
  }
  
  set nam(x) {
    this.name = x;
  }
  
  get pass() {
    return this.password;
  }

  set pass(x) {
    this.password = x;
  }

  get verpass() {
    return this.verpassword;
  }

  set verpass(x) {
    this.verpassword = x;
  }
  
}  

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); 
}



function validateLogin(){  
  user = new User(document.login.name.value, document.login.password.value);

  if (user.nam==null || user.nam==""){  
    alert("Name can't be blank");  
    return false;  
  }else if(user.pass.length<5){  
    alert("Password must be at least 6 characters long.");  
    return false;  
  } else if(checkCreds(user.nam, user.pass)) {
    alert("Login Success!");
    sessionStorage.isLoggedIn = true;
    sessionStorage.currentUser = user.nam;
    location.href = "Home.html";
    return false;
  } else {
    alert("Login Failed!");
    return false;
  }
}

function checkLog() {
  if (sessionStorage.isLoggedIn == "true") {
    return true;
  }
}

function logOut() {
  if(checkLog()) {
    document.getElementById("log").innerHTML = "LOG IN &#9661; &nbsp;";
    sessionStorage.isLoggedIn = false;
    sessionStorage.currentUser = null;
  }
}

function checkCreds(user, pass) {
  var storedUsers = JSON.parse(localStorage.getItem("li_users"));
  var storedPass = JSON.parse(localStorage.getItem("li_pass"));

  if (storedUsers === null) {
    alert("No accounts created in this session. Please sign up.");
    return false;
  } else {
    

    for (x = 0; x < storedUsers.length; x++) {
      if (user === storedUsers[x] && pass === storedPass[x]) {
        return true;
        break;
      }
    }
  }
}

function validateSignUp(){
  user = new User(document.login.name.value, document.login.password.value, document.login.verpassword.value);

  if (user.nam==null || user.nam==""){  
    alert("Name can't be blank");  
    return false;  
  }else if(user.pass.length<5){  
    alert("Password must be at least 6 characters long.");  
    return false;  
  } else if(user.pass === user.verpass) {
    addUser(user);
    location.href = "Login.html";
    return false;
  } else {
    alert("Please verify password again.");
    return false;
  }
}

function addUser(user) {
  if (localStorage.hasList == "true") {
    var storedUsers = JSON.parse(localStorage.getItem("li_users"));
    storedUsers.push(user.nam);
    localStorage.setItem("li_users", JSON.stringify(storedUsers));
    var storedPass = JSON.parse(localStorage.getItem("li_pass"));
    storedPass.push(user.pass);
    localStorage.setItem("li_pass", JSON.stringify(storedPass));
  } else {
    localStorage.hasList = true;
    var storedUsers = [user.nam];
    var storedPass = [user.pass];
    localStorage.setItem("li_users", JSON.stringify(storedUsers));
    localStorage.setItem("li_pass", JSON.stringify(storedPass));
    alert("Sign Up Successful");
 }
}

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) { 
    if(! document.querySelector("#back-to-top-btn").classList.contains("btnEntrance")) {
      document.querySelector("#back-to-top-btn").classList.remove("btnExit");
      document.querySelector("#back-to-top-btn").classList.add("btnEntrance");
      document.querySelector("#back-to-top-btn").style.display = "block";
    }
  }
  else {
    if( document.querySelector("#back-to-top-btn").classList.contains("btnEntrance")) {
      document.querySelector("#back-to-top-btn").classList.remove("btnEntrance");
      document.querySelector("#back-to-top-btn").classList.add("btnExit");
      setTimeout(function() {
        document.querySelector("#back-to-top-btn").style.display = "none";
      }, 250);
    }
  }
}

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};

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

function setDateAndUser() {
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var d = new Date();
  var min = (d.getMinutes()<10?("0"+d.getMinutes()):(d.getMinutes()));
  document.getElementById("date").innerHTML = "Date: " + months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear() + " " + "Time: " + d.getHours() + ":" + min + " &nbsp;&nbsp;&nbsp;|| &nbsp;&nbsp;&nbsp;";
  if (sessionStorage.currentUser == "null" || !sessionStorage.currentUser) {
    document.getElementById("currUser").innerHTML = "User not logged in.";
  } else {
    document.getElementById("currUser").innerHTML = "Hi " +  sessionStorage.currentUser + "!&nbsp;&nbsp;&nbsp;Enjoy using FictionHub! ";
  }
  
}

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

