// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(socialPost) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/post",
      data: JSON.stringify(socialPost)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/getPost",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/post/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $textPost = data.map(function(example) {
      var $a = $("<a>")
        .text(example.post_title)
        .attr("href", "/post/" + example.id);

      var $p = $("<p>").text(example.post_body);
      

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);
        

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($p)
      $li.append($button);


      return $li;
    });

    $exampleList.empty();
    $exampleList.append($textPost);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var socialPost = {
    post_title: $("#post-title").val().trim(),
    post_body: $("#post-body").val().trim()
  };

  if (!(socialPost.post_title && socialPost.post_body)) {
    alert("You must enter a text and description!");
    return;
  }

  API.saveExample(socialPost).then(function() {
    refreshExamples();
  });

  $("#post-title").val("");
  $("#post-body").val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
