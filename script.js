// main page buttons
const signupBtn = document.querySelector('#signupBtn');
const signinBtn = document.querySelector('#signinBtn');
// main page buttons
// main page elements
const mainPageContainer = document.querySelector('.main-page-container');
// main page elements


// sign in page buttons
const closeSignIn = document.querySelector('.fa-xmark');
const nextBtn = document.querySelector('.next');
// sign in page buttons

// sign in page elements
const signInPageContainer = document.querySelector('.sign-in-page-container');
const singInContainer = document.querySelector('.sign-in-container')
const signInModal = document.querySelector('.sign-in-modal');
const singInModelContainer = document.querySelector('.sign-in-modal-content')
const username = document.querySelector('.sign-in-phone-email');
const noId = document.querySelector('.no-id-modal-error');
const usernameField = document.querySelector('.username-from-input')
// sign in page elements

// log in elements
const loginCloseBtn = document.querySelector('#log-in-close');
const logInModal = document.querySelector('.log-in-after-id');
const loginBtn = document.querySelector('.log-in-button');
// log in elements

// feed page buttons
const feedUsernameP = document.querySelector('.feedpage-username-p');
const feedUsernameSpan = document.querySelector('.feedpage-username-span');
// feed page buttons

// feed page elements
const feedPage = document.querySelector('.feeds-page-container');
// feed page elements

// const user1 = {
//     username: 'user1',
//     password: '12345',
//     name: 'Random Name'
// }
// const user2 = {
//     username: 'user2',
//     password: '12345',
//     name: 'Random User'
// }

// const users = [user1, user2];

// clear inputs
username.value = '';
// clear inputs

// show error modal
const noIdMessage = () => {
    noId.style.display = 'flex';
    setTimeout(() => {
        noId.style.display = 'none';
    }, 2000);
}

const goToPage = (page, type) => {
    page.style.display = type + '';
};
const closePage = (page) => {
    page.style.display = 'none';
}

// sign up via phone or email

// sign up via phone or email

// main to sign in
signinBtn.addEventListener('click', () => {
    goToPage(singInContainer, 'grid');
    // goToPage(singInModelContainer, 'grid')
    goToPage(signInPageContainer, 'block');
    closePage(mainPageContainer);
})
// main to sign in

// sign in to main

closeSignIn.addEventListener('click', () => {
    goToPage(mainPageContainer, 'block');
    closePage(signInPageContainer);
    username.value = '';
})

// sign in second stage

// show error if no id else go to next modal
nextBtn.addEventListener('click', () => {
    if (username.value === '') {
        noIdMessage();
    } else {
        closePage(signInModal);
        goToPage(logInModal, 'block');
        usernameField.innerHTML = username.value;
    }

})
// show error if no id else go to next modal
// sign in second stage

// sign in to main

// log in close
loginCloseBtn.addEventListener('click', () => {
    location.reload();
})
// log in close

// log in to feeds page
loginBtn.addEventListener('click', () => {
    closePage(logInModal);
    closePage(signInModal);
    closePage(mainPageContainer);
    closePage(singInContainer);
    goToPage(feedPage, 'flex');
    feedUsernameP.innerHTML = `${username.value}`;
    feedUsernameSpan.innerHTML = `@${username.value}`;

})
// log in to feeds page

