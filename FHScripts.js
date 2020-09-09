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
    var name=document.login.name.value;  
    var password=document.login.password.value;  
    
    if (name==null || name==""){  
        alert("Name can't be blank");  
        return false;  
    }else if(password.length<5){  
        alert("Password must be at least 6 characters long.");  
        return false;  
    } else if(name === "admin" && password === "admin") {
      alert("Login Success!");
      location.href = "Home.html";
      return false;
    }
}

function validateSignUp(){  
  var name=document.signup.name.value;  
  var password=document.signup.password.value;  
  var verpassword=document.signup.verpassword.value;
  
  if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
  }else if(password.length<5){  
      alert("Password must be at least 6 characters long.");  
      return false;  
  } else if(password === verpassword) {
      alert("Sign Up Successful");
      location.href = "Login.html"
      return false;
  } else {
      alert("Please verify password again.");
      return false;
  }
}

const backToTopButton = document.querySelector("#back-to-top-btn");

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