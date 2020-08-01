$(document).ready(function(){



var $submitBtn = $("#submit-user");

var APIsignUp = {
    saveExample: function(user) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/signup",
        data: JSON.stringify(user)
      });
    }
}

var handleFormSubmitSignUp = function(event) {
    event.preventDefault();
  
    var addUser = {
      username: $("#username").val().trim(),
      user_password: $("#password").val().trim(),
    };

  console.log(addUser);

    if (!addUser.username && !addUser.user_password) {
      alert("You must enter an example text and description!");
      return;
    }
  
    APIsignUp.saveExample(addUser)
  
    $("#username").val("");
    $("#password").val("");
  };

  $submitBtn.on("click", handleFormSubmitSignUp);

});