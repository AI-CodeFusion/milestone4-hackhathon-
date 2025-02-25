var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var phoneno = document.getElementById('phone no').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var Experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\"> ".concat(name, "</span></p>\n    <p><b>Phone no:</b><span contenteditable=\"true\"> ").concat(phoneno, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\"> ").concat(email, "</span></p>\n\n    <h3>Education</h3>\n     <p contenteditable=\"true\"> ").concat(education, "</p>\n\n      <h3>Experience</h3>\n     <p contenteditable=\"true\"> ").concat(Experience, "</p>\n\n\n      <h3>Skills</h3>\n     <p contenteditable=\"true\"> ").concat(skills, "</p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('the resume display element is missing.');
    }
});
