function submitForm() {
    // Validate the form data here and construct the output
    // You can add your validation logic here
    var output = "";
    output += "First Name: " + document.getElementById("firstName").value + "<br>";
    output += "Last Name: " + document.getElementById("lastName").value + "<br>";
    output += "Date of Birth: " + document.getElementById("dob").value + "<br>";
    output += "Country: " + document.getElementById("country").value + "<br>";

    var genderInputs = document.querySelectorAll('input[name="gender"]:checked');
    output += "Gender: ";
    for (var i = 0; i < genderInputs.length; i++) {
        output += genderInputs[i].value + " ";
    }
    output += "<br>";

    output += "Profession: " + document.getElementById("profession").value + "<br>";
    output += "Email: " + document.getElementById("email").value + "<br>";
    output += "Mobile Number: " + document.getElementById("mobile").value + "<br>";

    document.getElementById("formOutput").innerHTML = output;
    document.getElementById("popup").style.display = "block";

    // Prevent the form from actually submitting
    return false;
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("surveyForm").reset();
}

function resetForm() {
    document.getElementById("surveyForm").reset();
}