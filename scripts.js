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


form.addEventListener('submit', function(event) { //on Submit of memberSignUp form assign the inputs to each varaible of the member object.
    event.preventDefault();
    // Creating new member object with current form values
        // Get values at submission time (better than storing elements)
        const member = {
            fName: document.getElementById('fNameInput').value,
            lName: document.getElementById('lNameInput').value,
            email: document.getElementById('emailInput').value,
            bYear: document.getElementById('bYearInput').value,
            gender: document.querySelector('input[name="genderInput"]:checked').value
        };

    memberList.unshift(member);
    
    //update the newest member list (top 3)
    newestMembers = [ `${member.fName} ${member.lName}`, ...newestMembers.slice(0,2)]; //keeping on the first two from previous
    
    // Update the display
    updateNewestMembersDisplay();

    //reset and show welcome alert
    form.reset();
    addPopUpGreeting(member); 

    console.log("All members:", memberList);
    console.log("Newest members:", newestMembers);
    
});

function updateNewestMembersDisplay(){
    // Update the DOM elements
    newMember1.textContent = newestMembers[0] || '';
    newMember2.textContent = newestMembers[1] || '';
    newMember3.textContent = newestMembers[2] || '';
}
const addPopUpGreeting = (member) => {
    alert(`Welcome, ${member.fName} ${member.lName}! You've been added to our member list.`);
}