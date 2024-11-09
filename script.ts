function generateResume(): void {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;

    // Image handling
    const profilePicture = (document.getElementById('profile-picture') as HTMLInputElement).files![0];
    let imageUrl = '';
    if (profilePicture) {
        imageUrl = URL.createObjectURL(profilePicture);
    }

    const resumeOutput = document.getElementById('resume-output')!;
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