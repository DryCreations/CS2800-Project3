var changeColor = function(event) {
  //only one image on the page, set its value to the proper image on click
  document.getElementsByTagName("img")[0].src = "images/shirt_" + event.target.value + ".png";
}

var reset = function() {
  //clear generic form elements
  document.getElementById("order_form").reset();
  
  //reset image to top most radio button color
  document.getElementsByName("color")[0].click();
  
  //reset error messages to empty strings
  var errors = document.getElementsByTagName("span");
  for(var i = 0; i < errors.length; i++) {
    errors[i].innerHTML = "";
  }
}

var submit = function() {
  //fetch values
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  
  //validate phone numbers
  var validatePhone = /^\d{3}-\d{3}-\d{4}$/;
  var phoneIsValid = validatePhone.test(phone);
  
  //set error messages
  document.getElementById("name").nextSibling.innerHTML=name?"":"You must enter a name";
  document.getElementById("phone").nextSibling.innerHTML=phone?phoneIsValid?"":"Phone format must be 132-123-1234":"You must enter a phone number";
  document.getElementById("email").nextSibling.innerHTML=email?"":"You must enter a email";
  
  //if everything exists and is valid, submit
  if (name && phone && email && phoneIsValid) {
    document.getElementById("order_form").submit();
  }
}

window.onload = function() {
  
  //iterate over all radio buttons and change their click event
  var radioButtons = document.getElementsByName("color");
  for(var i = 0; i < radioButtons.length; i++) {
     radioButtons[i].onclick = changeColor;
  }
  
  //bind reset function to reset button onclick event
  document.getElementById("resetButton").onclick = reset;
  
  //bind submit function to submit button onclick event
  document.getElementById("submitButton").onclick = submit;
};
