const form = document.getElementById('resume-form')as HTMLFormElement;

const resumeDisplayElement = document.getElementById('resume-display')as HTMLDivElement;

form.addEventListener('submit',(event:Event) =>{
    event.preventDefault();

    const name=(document.getElementById('name')as HTMLInputElement).value
    const phoneno=(document.getElementById('phone no')as HTMLInputElement).value
    const email=(document.getElementById('email')as HTMLInputElement).value
    const education=(document.getElementById('education')as HTMLInputElement).value
    const Experience=(document.getElementById('experience')as HTMLInputElement).value
    const skills=(document.getElementById('skills')as HTMLInputElement).value

    const resumeHTML = `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true"> ${name}</span></p>
    <p><b>Phone no:</b><span contenteditable="true"> ${phoneno}</span></p>
    <p><b>Email:</b><span contenteditable="true"> ${email}</span></p>

    <h3>Education</h3>
     <p contenteditable="true"> ${education}</p>

      <h3>Experience</h3>
     <p contenteditable="true"> ${Experience}</p>


      <h3>Skills</h3>
     <p contenteditable="true"> ${skills}</p>
    `;
   
 if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML;
 } else{
    console.error('the resume display element is missing.');
 }  
    
})