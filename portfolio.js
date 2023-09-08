let bars = document.getElementById('bars')
let crossMark = document.getElementById('crossMark')
let navbarNav = document.getElementById('navbarNav');

bars.onclick = function() {
    bars.style.display = 'none';
    crossMark.style.display = 'block';
}
crossMark.onclick = function() {
    bars.style.display = 'block';
    crossMark.style.display = 'none';
}

function mainPage() {
    document.getElementById('mainPage').style.display = 'block';
    document.getElementById('loaderEl').style.display = 'none';

}

function loading() {
    loader = setTimeout(mainPage, 3000);
    document.getElementById('loaderEl').style.display = 'block';

}
/*btns */

let home = document.getElementById('homeBtn');
let about = document.getElementById('aboutBtn');
let service = document.getElementById('serviceBtn');
let project = document.getElementById('projectBtn');
let contact = document.getElementById('contactBtn');


let homePageEl = document.getElementById('homePageSection');
let aboutSectionEl = document.getElementById('aboutSection');
let serviceSectionEl = document.getElementById('serviceSection');
let projectSectionEl = document.getElementById('projectSection');
let contactEl = document.getElementById('contactSectionEl');

home.onclick = function() {

    //Display //

    home.style.backgroundColor = 'black';
    home.style.color = 'white';
    about.style.backgroundColor = 'transparent';
    about.style.color = 'black';
    service.style.backgroundColor = 'transparent';
    service.style.color = 'black';
    project.style.backgroundColor = 'transparent';
    project.style.color = 'black';
    contact.style.backgroundColor = 'transparent';
    contact.style.color = 'black';

    home.style.color = 'white';

    homePageEl.classList.add('homePage')
    //

}
about.onclick = function() {

    //Display //

    home.style.backgroundColor = 'transparent';
    home.style.color = 'black';
    about.style.backgroundColor = 'black';
    about.style.color = 'white';
    service.style.backgroundColor = 'transparent';
    service.style.color = 'black';
    project.style.backgroundColor = 'transparent';
    project.style.color = 'black';
    contact.style.backgroundColor = 'transparent';
    contact.style.color = 'black';


    //   

}
service.onclick = function() {

    //Display //

    home.style.backgroundColor = 'transparent';
    home.style.color = 'black';
    about.style.backgroundColor = 'transparent';
    about.style.color = 'black';
    service.style.backgroundColor = 'black';
    service.style.color = 'white';
    project.style.backgroundColor = 'transparent';
    project.style.color = 'black';
    contact.style.backgroundColor = 'transparent';
    contact.style.color = 'black';


    //
}

project.onclick = function() {

    //Display //

    home.style.backgroundColor = 'transparent';
    home.style.color = 'black';
    about.style.backgroundColor = 'transparent';
    about.style.color = 'black';
    service.style.backgroundColor = 'transparent';
    service.style.color = 'black';
    project.style.backgroundColor = 'black';
    project.style.color = 'white';
    contact.style.backgroundColor = 'transparent';
    contact.style.color = 'black';




    //

}
contact.onclick = function() {

    //Display //

    home.style.backgroundColor = 'transparent';
    home.style.color = 'black';
    about.style.backgroundColor = 'transparent';
    about.style.color = 'black';
    service.style.backgroundColor = 'transparent';
    service.style.color = 'black';
    project.style.backgroundColor = 'transparent';
    project.style.color = 'black';
    contact.style.backgroundColor = 'black';
    contact.style.color = 'white';

    //
}

//Contact Form //

let moreBtnEl = document.getElementById('moreBtn');
let closeProjectsEl = document.getElementById('closeProjects');
let moreProjectsEl = document.getElementById('moreProjects');

moreBtnEl.onclick = function() {

    moreProjectsEl.style.display = 'block';
    closeProjectsEl.style.display = 'block';
    moreBtnEl.style.display = 'none';
}
closeProjectsEl.onclick = function() {

    moreProjectsEl.style.display = 'none';
    closeProjectsEl.style.display = 'none';
    moreBtnEl.style.display = 'block';
}
//Contact Info //
let msgFormEl = document.getElementById('msgForm');
let firstnameEl = document.getElementById('firstname');
let lastnameEl = document.getElementById('lastname');
let emailEl = document.getElementById('email');
let msgTxtEl = document.getElementById('msgTxt');
let sendBtnEl = document.getElementById('sendBtn');
let errorMsgEl = document.getElementById('errorMsg');
let errorMsgEl1 = document.getElementById('errorMsg1');


sendBtnEl.onclick = function() {
    if (firstnameEl.value === "") {
        errorMsgEl.textContent = 'Enter First Name';
        errorMsgEl1.textContent = '';
    } else if (lastnameEl.value === "") {
        errorMsgEl.textContent = 'Enter Last Name';
        errorMsgEl1.textContent = '';

    } else if (emailEl.value === "") {
        errorMsgEl.textContent = 'Enter Email';
        errorMsgEl1.textContent = '';

    } else if (msgTxtEl.value === "") {
        errorMsgEl.textContent = 'Enter Message';
        errorMsgEl1.textContent = '';

    } else {
        firstnameEl.value = '';
        lastnameEl.value = '';
        emailEl.value = '';
        msgTxtEl.value = '';
        sendBtnEl.textContent = 'Send'
        errorMsgEl1.textContent = 'Thank You...!'
        errorMsgEl1.classList.add('thank')
    }
}
