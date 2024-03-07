// Check if the button elements exist before assigning them to variables
const allButton = document.querySelector('#allButton');
const threedButton = document.querySelector('#threedButton');
const playButton = document.querySelector('#playButton');

const allButtonMobile = document.querySelector('#allButtonMobile');
const threedButtonMobile = document.querySelector('#threedButtonMobile');
const playButtonMobile = document.querySelector('#playButtonMobile');

const projects = Array.from(document.querySelectorAll('.project'));
const threedProjects = Array.from(document.querySelectorAll('.threed'));
const playProjects = Array.from(document.querySelectorAll('.play'));
const buttons = document.querySelectorAll('.button-container');

function handleButtonClick(button, projectsToShow) {
    console.log(`click ${button.id}`);
    
    // Remove active class from all buttons
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to the clicked button
    button.classList.add('active');
    
    // Hide everything
    projects.forEach(project => {
        project.style.display = 'none';
    });
    
    // Show only the specified projects
    projectsToShow.forEach(project => {
        project.style.display = 'flex';
    });
}

// Check if the button elements exist before assigning event listeners
if (allButton && threedButton && playButton) {

    // Event listeners for each button
    threedButton.addEventListener('click', () => {
        handleButtonClick(threedButton, threedProjects);
    });

    playButton.addEventListener('click', () => {
        handleButtonClick(playButton, playProjects);
    });

    allButton.addEventListener('click', () => {
        console.log('click all');
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });
        allButton.classList.add('active');
        
        // Show all projects
        projects.forEach(project => {
            project.style.display = 'flex';
        });
    });
}

// Check if the button elements exist before assigning event listeners for mobile buttons
if (allButtonMobile && threedButtonMobile && playButtonMobile) {
    threedButtonMobile.addEventListener('click', () => {
        handleButtonClick(threedButtonMobile, threedProjects);
    });

    playButtonMobile.addEventListener('click', () => {
        handleButtonClick(playButtonMobile, playProjects);
    });

    allButtonMobile.addEventListener('click', () => {
        console.log('click all');
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });
        allButtonMobile.classList.add('active');
        
        // Show all projects
        projects.forEach(project => {
            project.style.display = 'flex';
        });
    });
}

// Check if the upButtons elements exist before assigning event listeners
const upButtons = document.querySelectorAll('.scroll-up-container');
upButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('up!!');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

//icons give messages
const icon = document.querySelectorAll('.placeholder-icon');
icon.forEach(button => {
    button.addEventListener('click', () => {
        console.log('hi!!');
        let number = Math.random() * 3;
        if (number < 1) {
            alert("Virtual hugs");
            number = Math.random() * 3;
        } else if (number < 2) {
            alert("Have a nice day!");
            number = Math.random() * 3;
        } else {
            alert("You look good <3");
            number = Math.random() * 3;
        }
    });
});

//rotate and scale gallery images on hover in desktop mode
document.addEventListener('DOMContentLoaded', () => {
    const isDesktop = window.matchMedia("(min-width: 680px)").matches;
    if (isDesktop) {
        const images = document.querySelectorAll('.image-gallery');
        images.forEach((image, index) => {
            image.addEventListener('mouseenter', () => {
                if (index % 2 === 0) {
                    image.style.transform = 'rotate(5deg) scale(1.04)';
                } else {
                    image.style.transform = 'rotate(-5deg) scale(1.04)';
                }
            });

            image.addEventListener('mouseleave', () => {
                image.style.transform = 'rotate(0deg)';
            });
        });
    }
});

