"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateResume() {
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const email = document.getElementById('email').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;
    const experience = document.getElementById('experience').value;
    // Image handling
    const profilePicture = document.getElementById('profile-picture').files[0];
    let imageUrl = '';
    if (profilePicture) {
        imageUrl = URL.createObjectURL(profilePicture);
    }
    const resumeOutput = document.getElementById('resume-output');
    resumeOutput.innerHTML = `
        ${imageUrl ? `<img src="${imageUrl}" alt="Profile Picture">` : ''}
        <div class="resume-name">${name}</div>
        
        <h4 class="resume-section-title">Contact</h4>
        <div class="resume-section-content contact-info">
            <p><strong>Phone:</strong> ${contact}</p>
            <p><strong>Email:</strong> ${email}</p>
        </div>
        
        <h4 class="resume-section-title">Education</h4>
        <div class="resume-section-content">
            <p>${education}</p>
        </div>
        
        <h4 class="resume-section-title">Skills</h4>
        <div class="resume-section-content">
            <p>${skills.split(',').map(skill => skill.trim()).join(', ')}</p>
        </div>

        <h4 class="resume-section-title">Work Experience</h4>
        <div class="resume-section-content">
            <p>${experience}</p>
        </div>
    `;
}
