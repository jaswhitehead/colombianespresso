<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

  
  function searchDice(job) {

    // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
    var queryURL = "https://api.dice.com/jobs?" + jobTitle + "?access_token=";
    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      // Printing the entire object to console
      console.log(response);

    // Constructing HTML containing the job information
      var jobTitle = $("<h1>").text(response.title);
      var jobURL = $("<a>").attr("href", response.url);
      var jobDescription = $("<h2>").text(response.description);
      var jobQualifications = $("<h2>").text(response.qualifications);
      var jobSalary = $("<h2>").text(response.salary + " is the annual income for this job");
      var employerURL = $("<a>").attr("href", response.url).text("Visit the company website");
    
      // Empty the contents of the artist-div, append the new artist content
    $("#job-div").empty();
    $("#job-div").append(jobTitle, jobURL, jobDescription, jobSalary, jobQualifications, employerURL);
  });
}
 // Event handler for user clicking the findJobs button
  $("#findJobs").on("click", function(event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the job name
    var inputJob = $("#jobType").val().trim();

    // Running the searchDice function(passing in the job title as an argument)
    searchDice(inputJob);
  });
