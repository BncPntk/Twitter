// main page buttons
const signupBtn = document.querySelector('#signupBtn');
const signinBtn = document.querySelector('#signinBtn');
// main page buttons
// main page elements
const mainPageContainer = document.querySelector('.main-page-container');
// main page elements


// sign in page buttons
const closeSignIn = document.querySelector('.fa-xmark');
// sign in page buttons
// sign in page elements
const signInPageContainer = document.querySelector('.sign-in-page-container');
// sign in page elements


const user1 = {
    username: 'user1',
    password: '12345',
    name: 'Random Name'
}
const user2 = {
    username: 'user2',
    password: '12345',
    name: 'Random User'
}

const users = [user1, user2];

const goToPage = (page) => {
    page.style.display = 'block';
};
const closePage = (page) => {
    page.style.display = 'none';
}

// sign up via phone or email

// sign up via phone or email

// main to sign in
signinBtn.addEventListener('click', () => {
    goToPage(signInPageContainer);
    closePage(mainPageContainer);
})
// main to sign in

// sign in to main

closeSignIn.addEventListener('click', () => {
    goToPage(mainPageContainer);
    closePage(signInPageContainer);
})
// sign in to main
