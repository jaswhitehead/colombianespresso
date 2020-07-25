// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(addPosting) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/classifieds",
      data: JSON.stringify(addPosting)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/getClassifieds",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/classifieds/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $textPost = data.map(function(example) {
      var $a = $("<a>")
        .text(example.listing_name)
        .attr("href", "/classifieds/" + example.id);

      var $p = $("<p>").text(example.listing_description);
      var $pTwo = $("<p>").text(example.listing_location);
      var $pThree = $("<p>").text(example.price);
      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);
        

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($p, $pTwo, $pThree)
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

  var addPost = {
    listing_name: $("#add-name").val().trim(),
    listing_description: $("#add-description").val().trim(),
    listing_location: $("#add-location").val().trim(),
    price: $("#add-price").val().trim(),
  };

  if (!(addPost.listing_name && addPost.listing_description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(addPost).then(function() {
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
