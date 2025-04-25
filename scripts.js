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

// Register the event listener to button
themeToggle.addEventListener('click', changeTheme);

const form = document.getElementById('signUp');

//Members list updating

let members = ["Matt", "Andew", "Kaitlyn"];
let newMember1 = document.getElementById("newMember1");
let newMember2 = document.getElementById("newMember2");
let newMember3 = document.getElementById("newMember3");

const updateMemberList = () => {
    newMember1.textContent = members[0] || 'null';
    newMember2.textContent = members[1] || 'null';
    newMember3.textContent = members[2] || 'null';
}
updateMemberList();
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const fName = document.getElementById('fName')

    members.unshift(fName.value);

    updateMemberList();

    form.reset();

    members= members.slice(0,3);
});




