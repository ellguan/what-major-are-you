//data
var q1a1 = document.getElementById("q1a1")
if (q1a1) {
  q1a1.addEventListener("click", cs);
  q1a1.addEventListener("click", gd);
}
var q1a2 = document.getElementById("q1a2")
if (q1a2) { q1a2.addEventListener("click", bio) };
var q1a3 = document.getElementById("q1a3")
if (q1a3) { q1a3.addEventListener("click", business) };

var q2a1 = document.getElementById("q2a1")
if (q2a1) { q2a1.addEventListener("click", cs) };
var q2a2 = document.getElementById("q2a2")
if (q2a2) { q2a2.addEventListener("click", gd) };
var q2a3 = document.getElementById("q2a3")
if (q2a3) { q2a3.addEventListener("click", bio) };
var q2a4 = document.getElementById("q2a4")
if (q2a4) { q2a4.addEventListener("click", business) };
var q2a5 = document.getElementById("q2a5")
if (q2a5) {
  q2a5.addEventListener("click", business);
  q2a5.addEventListener("click", gd);
}

var q3a1 = document.getElementById("q3a1")
if (q3a1) { q3a1.addEventListener("click", cs) };
var q3a2 = document.getElementById("q3a2")
if (q3a2) {
  q3a2.addEventListener("click", business);
  q3a2.addEventListener("click", bio);
}
var q3a3 = document.getElementById("q3a3")
if (q3a3) { q3a3.addEventListener("click", gd) };
var q3a4 = document.getElementById("q3a4")
if (q3a4) { q3a4.addEventListener("click", business) };

var q4a1 = document.getElementById("q4a1")
if (q4a1) { q4a1.addEventListener("click", gd) };
var q4a2 = document.getElementById("q4a2")
if (q4a2) {
  q4a2.addEventListener("click", cs);
  q4a2.addEventListener("click", bio);
}
var q4a3 = document.getElementById("q4a3")
if (q4a3) { q4a3.addEventListener("click", business) };
var q4a4 = document.getElementById("q4a4")
if (q4a4) { q4a4.addEventListener("click", bio) };

var q5a1 = document.getElementById("q5a1")
if (q5a1) { q5a1.addEventListener("click", gd) };
var q5a2 = document.getElementById("q5a2")
if (q5a2) { q5a2.addEventListener("click", bio) };
var q5a3 = document.getElementById("q5a3")
if (q5a3) {
  q5a3.addEventListener("click", cs);
  q5a3.addEventListener("click", business)
};

var q6a1 = document.getElementById("q6a1")
if (q6a1) { q6a1.addEventListener("click", gd) };
var q6a2 = document.getElementById("q6a2")
if (q6a2) { q6a2.addEventListener("click", business) };
var q6a3 = document.getElementById("q6a3")
if (q6a3) { q6a3.addEventListener("click", cs) };
var q6a4 = document.getElementById("q6a4")
if (q6a4) { q6a4.addEventListener("click", bio) };

var q7a1 = document.getElementById("q7a1")
if (q7a1) {
  q7a1.addEventListener("click", bio);
  q7a1.addEventListener("click", gd);
}
var q7a2 = document.getElementById("q7a2")
if (q7a2) { q7a2.addEventListener("click", cs); }
var q7a3 = document.getElementById("q7a3")
if (q7a3) {
  q7a3.addEventListener("click", cs);
  q7a3.addEventListener("click", business);
}
var q7a4 = document.getElementById("q7a4")
if (q7a4) { q7a4.addEventListener("click", business); }

var q8a1 = document.getElementById("q8a1")
if (q8a1) { q8a1.addEventListener("click", cs) };
var q8a2 = document.getElementById("q8a2")
if (q8a2) { q8a2.addEventListener("click", gd) };
var q8a3 = document.getElementById("q8a3")
if (q8a3) { q8a3.addEventListener("click", business) };
var q8a4 = document.getElementById("q8a4")
if (q8a4) { q8a4.addEventListener("click", bio) };

var q9a1 = document.getElementById("q9a1")
if (q9a1) { q9a1.addEventListener("click", bio) };
var q9a2 = document.getElementById("q9a2")
if (q9a2) { q9a2.addEventListener("click", cs) };
var q9a3 = document.getElementById("q9a3")
if (q9a3) { q9a3.addEventListener("click", business) };
var q9a4 = document.getElementById("q9a4")
if (q9a4) { q9a4.addEventListener("click", gd) };

var q10a1 = document.getElementById("101a1")
if (q10a1) { q10a1.addEventListener("click", bio) };
var q10a2 = document.getElementById("q10a2")
if (q10a2) { q10a2.addEventListener("click", gd) };
var q10a3 = document.getElementById("q10a3")
if (q10a3) { q10a3.addEventListener("click", cs) };
var q10a4 = document.getElementById("q10a4")
if (q10a4) { q10a4.addEventListener("click", business) };


var csCount = 0;
var businessCount = 0;
var bioCount = 0;
var gdCount = 0;

var questionCount = 0;
var result = "";

function cs() {
  csCount++;
  questionCount++;
  console.log(csCount, questionCount);
  if (questionCount == 10) {
    var max = 0;
    if (csCount > max) {
      max = csCount;
      result = "cs";
    }
    if (businessCount > max) {
      max = businessCount;
      result = "business";
    }
    if (bioCount > max) {
      max = bioCount;
      result = "bio";
    }
    if (gdCount > max) {
      max = gdCount;
      result = "gd";
    }
  }
}

function business() {
  businessCount++;
  questionCount++;
  console.log(businessCount, questionCount);
  if (questionCount == 10) {
    var max = 0;
    if (csCount > max) {
      max = csCount;
      result = "cs";
    }
    if (businessCount > max) {
      max = businessCount;
      result = "business";
    }
    if (bioCount > max) {
      max = bioCount;
      result = "bio";
    }
    if (gdCount > max) {
      max = gdCount;
      result = "gd";
    }
  }
}

function bio() {
  bioCount++;
  questionCount++;
  console.log(bioCount, questionCount);
  if (questionCount == 10) {
    var max = 0;
    if (csCount > max) {
      max = csCount;
      result = "cs";
    }
    if (businessCount > max) {
      max = businessCount;
      result = "business";
    }
    if (bioCount > max) {
      max = bioCount;
      result = "bio";
    }
    if (gdCount > max) {
      max = gdCount;
      result = "gd";
    }
  }
}

function gd() {
  gdCount++;
  questionCount++;
  console.log(gdCount, questionCount);
  if (questionCount == 10) {
    var max = 0;
    if (csCount > max) {
      max = csCount;
      result = "cs";
    }
    if (businessCount > max) {
      max = businessCount;
      result = "business";
    }
    if (bioCount > max) {
      max = bioCount;
      result = "bio";
    }
    if (gdCount > max) {
      max = gdCount;
      result = "gd";
    }
  }
}

function resultPage() {
  if (result == "cs") {
    window.location.href = "cs.html";
    //location.replace("https://what-major-are-you.inevitablyellen.repl.co/cs.html");
  }
  if (result == "business") {
    window.location.href = "business.html";
    //location.replace("https://what-major-are-you.inevitablyellen.repl.co/business.html");
  }
  if (result == "bio") {
    window.location.href = "bio.html";
    //location.replace("https://what-major-are-you.inevitablyellen.repl.co/bio.html");
  }
  if (result == "gd") {
    window.location.href = "gd.html";
    //location.replace("https://what-major-are-you.inevitablyellen.repl.co/gd.html");
  }
}

//scrolling window
function scrollWindow(element) {
  const scroll = document.getElementById(element);
  scroll.scrollIntoView({ behavior: "smooth", block: "center" });
}

//revealing effect
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 300;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
