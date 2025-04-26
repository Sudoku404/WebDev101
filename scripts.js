//This is all for changing the theme of the site from darkMode(default) to lightMode
let lightMode = localStorage.getItem('lightMode');
const themeToggle = document.getElementById("themeToggle");

const header = document.querySelector('header');
const body = document.querySelector('body');
const coverImage = document.querySelector('.cover-image');

const getCurrentTheme = () => {
    return themeToggle.textContent === '☀️' ? 'light' : 'dark';
};

const changeTheme = () => {
    const theme = getCurrentTheme();
    
    if (theme === 'light') {
        console.log("Changing to dark theme");
        themeToggle.textContent = '🌙';
        //chaning the colors to dark mode
        header.classList.remove('lightMode');
        body.classList.remove('lightMode');
        coverImage.src = coverImage.dataset.darkSrc;
        localStorage.setItem('lightMode', null)
    } else {
        console.log("Changing to light theme");
        themeToggle.textContent = '☀️';
        //changing the colors to light mode
        header.classList.add('lightMode');
        body.classList.add('lightMode');
        coverImage.src = coverImage.dataset.lightSrc;
        localStorage.setItem('lightMode', 'active')
    }
};

// Event Listener for ***THEME CHANGING***
themeToggle.addEventListener('click', changeTheme);

//<=============Theme Changing Ends Here=======================================================================> */



//<=============Member Sign Up starts Here====================================================================> */

//initializing the default and empty array for member and newest members
let newestMembers = ["Matt", "Andrew", "Kaitlyn"];
let memberList = [];

//DOM elements
const newMember1 = document.getElementById('newMember1');
const newMember2 = document.getElementById('newMember2');
const newMember3 = document.getElementById('newMember3');

//initializing the newMemberList Display
updateNewestMembersDisplay();

const form = document.getElementById('memberSignUp'); //getting inputs form memberSignUp form

form.addEventListener('submit', validateForm);

function addMember() {
    
    // Creating new member object with current form values
    const member = {
        fName: document.getElementById('fNameInput').value,
        lName: document.getElementById('lNameInput').value,
        email: document.getElementById('emailInput').value,
        bYear: document.getElementById('bYearInput').value,
        gender: document.querySelector('input[name="genderInput"]:checked').value
    };

    memberList.unshift(member);
    
    // Update the newest member list (top 3)
    newestMembers = [`${member.fName} ${member.lName}`, ...newestMembers.slice(0, 2)];
    
    // Update the display
    updateNewestMembersDisplay();

    // Reset form and show welcome alert
    form.reset();
    showModal(member);
    console.log("All members:", memberList);
    console.log("Newest members:", newestMembers);
}

function validateForm(event) {
    event.preventDefault();
    let containsErrors = false;
    const signUpInputs = document.getElementById("memberSignUp").elements;

    for (let index = 0; index < signUpInputs.length; index++) {
        const input = signUpInputs[index];
        
        // Skip radio buttons, submit button, and other non-text inputs
        if (input.type === 'radio' || input.type === 'submit' || input.type === 'button') {
            continue;
        }

        if (input.value.length < 2) {
            containsErrors = true;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    }

    //If no errors call addMember() and clear fields
    if(containsErrors == false){
        addMember();
    }
}

function updateNewestMembersDisplay(){
    // Update the DOM elements
    newMember1.textContent = newestMembers[0] || '';
    newMember2.textContent = newestMembers[1] || '';
    newMember3.textContent = newestMembers[2] || '';
}

//Never Used Pop Up Greeting and Modal its redundant. Also Pop up is ugly.
/*
const addPopUpGreeting = (member) => {
    alert(`Welcome, ${member.fName} ${member.lName}! You've been added to our member list.`);
}
*/

const modal = document.querySelector('.modal-overlay');
const modalTitle = document.querySelector('.modal-title');
const modalMessage = document.querySelector('.modal-message');
const modalImage = document.querySelector('.modal-image');

function showModal(member) {
  // Personalize modal content
  modalTitle.textContent = `Thank you, ${member.fName}!`;
  modalMessage.textContent = `We've received your request for ${member.eventName || 'our community'}.`;
  
  // Show modal
  modal.classList.add('active');
  
  // Auto-hide after 3 seconds
  setTimeout(() => {
    modal.classList.remove('active');
  }, 3000);
}