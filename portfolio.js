/*btns */
let skillsBtnEl = document.getElementById('skillsBtn');
let experienceBtnEl = document.getElementById('experienceBtn');
let educationBtnEl = document.getElementById('educationBtn');

/*info */
let skillsInfoEl = document.getElementById('skillsInfo');
let experienceInfoEl = document.getElementById('experienceInfo');
let educationInfoEl = document.getElementById('educationInfo');


skillsBtnEl.onclick = function() {
    experienceInfoEl.style.display = 'none';
    educationInfoEl.style.display = 'none';
    skillsInfoEl.style.display = 'block';

    skillsBtnEl.style.backgroundColor = 'black';
    skillsBtnEl.style.color = 'white';

    experienceBtnEl.style.backgroundColor = 'white';
    experienceBtnEl.style.color = 'black';

    educationBtnEl.style.backgroundColor = 'white';
    educationBtnEl.style.color = 'black';

};

experienceBtnEl.onclick = function() {
    educationInfoEl.style.display = 'none';
    skillsInfoEl.style.display = 'none';
    experienceInfoEl.style.display = 'block';

    experienceBtnEl.style.backgroundColor = 'black';
    experienceBtnEl.style.color = 'white';
    skillsBtnEl.style.backgroundColor = 'white';
    skillsBtnEl.style.color = 'black';
    educationBtnEl.style.backgroundColor = 'white';
    educationBtnEl.style.color = 'black';


};

educationBtnEl.onclick = function() {
    experienceInfoEl.style.display = 'none';
    skillsInfoEl.style.display = 'none';
    educationInfoEl.style.display = 'block';

    educationBtnEl.style.backgroundColor = 'black';
    educationBtnEl.style.color = 'white';

    skillsBtnEl.style.backgroundColor = 'white';
    skillsBtnEl.style.color = 'black';

    experienceBtnEl.style.backgroundColor = 'white';
    experienceBtnEl.style.color = 'black';

};

let home = document.getElementById('homeBtn');
let about = document.getElementById('aboutBtn');
let service = document.getElementById('serviceBtn');
let project = document.getElementById('projectBtn');
let contact = document.getElementById('contactBtn');


let homePageEl = document.getElementById('homePageSection');
let aboutSectionEl = document.getElementById('aboutSection');
let serviceSectionEl = document.getElementById('serviceSection');
let projectSectionEl = document.getElementById('projectSection');
let contactSectionEl = document.getElementById('contactSection');

home.onclick = function() {

    //Display //
    homePageEl.style.display = 'block';
    aboutSectionEl.style.display = 'block';
    serviceSectionEl.style.display = 'block';
    contactSectionEl.style.display = 'block';
    projectSectionEl.style.display = 'block';
    //
}
about.onclick = function() {

    //Display //
    homePageEl.style.display = 'none';

    aboutSectionEl.style.display = 'block';

    serviceSectionEl.style.display = 'none';
    contactSectionEl.style.display = 'none';
    projectSectionEl.style.display = 'none';
    //
}
service.onclick = function() {

    //Display //
    homePageEl.style.display = 'none';
    aboutSectionEl.style.display = 'none';

    serviceSectionEl.style.display = 'block';

    contactSectionEl.style.display = 'none';
    projectSectionEl.style.display = 'none';
    //
}

project.onclick = function() {

    //Display //
    homePageEl.style.display = 'none';
    aboutSectionEl.style.display = 'none';
    serviceSectionEl.style.display = 'none';
    contactSectionEl.style.display = 'none';

    projectSectionEl.style.display = 'block';
    //

}
contact.onclick = function() {

    //Display //
    homePageEl.style.display = 'none';
    aboutSectionEl.style.display = 'none';
    serviceSectionEl.style.display = 'none';

    contactSectionEl.style.display = 'block';

    projectSectionEl.style.display = 'none';
    //
}

//Contact Form //

let inputName = document.getElementById('inputName');
let inputEmail = document.getElementById('inputMail');
let inputMsg = document.getElementById('inputMsg');

let submitBtn = document.getElementById('submitBtn');
let err = document.getElementById('ErrorMsg');
submitBtn.onclick = function() {
    if (inputName.value === "") {
        err.textContent = "";
    } else if (inputEmail.value === "") {
        err.textContent = "";

    } else if (inputMsg.value === "") {
        err.textContent = "";

    } else {
        inputName.value = '';
        inputMsg.value = '';
        inputEmail.value = '';
        err.textContent = 'Thank You';

    }
}

//scroll to Top //
window.onscroll = function() {
    scrollToTopFunc()
};

function scrollToTopFunc() {
    if (document.body.scrollToTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = 'block';

    } else {
        topBtn.style.display = 'none';
    }

}

function topBtn() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}