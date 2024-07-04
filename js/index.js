function alertAd() {
  var str = "Hurry! You Are Wasting Time, Click Here To Get The Admmisson Now";
  var i = 1;
  alertNow();
  function alertNow() {
    document.getElementById("alertAdLink").innerHTML = str.substring(0, i);
    if (i >= str.length) {
      i = 1;
      setTimeout(stopIt, 3000);
    } else {
      i++;
      setTimeout(alertNow, 50);
    }
  }
  function stopIt() {
    document.getElementById("alertAdLink").innerHTML = str.substring(
      i,
      str.length
    );
    if (i > str.length) {
      i = 1;
      setTimeout(alertNow, 1000);
    } else {
      i++;

      setTimeout(stopIt, 50);
    }
  }
}
function sizeValidate() {
  if (window.outerWidth < 1200) {
    alert("Page Is Not Responsive Do Not Change Size Of Window ");
  } else if (window.outerHeight < 500) {
    alert("Page Is Not Responsive Do Not Change Size Of Window ");
  }
}
function makeScroll() {
  alertAd();
  var creators = "Made By MAHESH And AJAY";
  i = 1;
  makeScrollIn();
  function makeScrollIn() {
    document.getElementById("creators").innerHTML = creators.substring(0, i);
    if (i >= creators.length) {
      i = 1;
      setTimeout(makeScrollOut, 3000);
    } else {
      i++;
      setTimeout(makeScrollIn, 50);
    }
  }
  function makeScrollOut() {
    document.getElementById("creators").innerHTML = creators.substring(
      i,
      creators.length
    );
    if (i > creators.length) {
      i = 1;
      setTimeout(makeScrollIn, 1000);
    } else {
      i++;
      setTimeout(makeScrollOut, 50);
    }
  }
}
