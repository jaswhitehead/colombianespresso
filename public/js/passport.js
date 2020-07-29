var API = {
    saveExample: function(socialPost) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/signup",
        data: JSON.stringify(socialPost)
      });
    }
}

var handleFormSubmit = function(event) {
    event.preventDefault();
  
    var addUser = {
      username: $("#username").val().trim(),
      user_password: $("#password").val().trim(),
    };
  
    if (!(addUser.username && addUser.user_password)) {
      alert("You must enter an example text and description!");
      return;
    }
  
    API.saveExample(addPost).then(function() {
    });
  
    $("#username").val("");
    $("#password").val("");
  };