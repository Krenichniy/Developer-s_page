const prices = {
    'landing-page': {
        pm: 700,
        design: 600,
        developer: 1200,
        qa: 500
    },
    'online-store': {
        pm: 1200,
        design: 900,
        developer: 2500,
        qa: 800,
    },
    'web-application': {
        pm: 2000,
        design:1100,
        developer:3000,
        qa: 1000,
    },
    'mobile-application': {
        pm: 3000,
        design: 1500,
        developer: 4000,
        qa: 1300,
    }
};


function getFormValues () {
    const websiteTypeElement = document.querySelector('#project_type');

     const pmEl = document.querySelector('#project_management');
     const designEl = document.querySelector('#design');
     const developmentEl = document.querySelector('#development');
     const qaEl = document.querySelector('#qa');
    
    
    


    return {
        websiteType: websiteTypeElement .value,
        pm: pmEl .checked,
        design: designEl .checked,
        developer: developmentEl .checked,
        qa: qaEl .checked,
    }
}

function calculateWork() {
        const values = getFormValues();

        let totalPrice = 0;

        const workTypes = prices[values.websiteType];

        if (values.pm) {
            totalPrice = workTypes.pm;
        }

        if (values.design) {
            totalPrice = totalPrice + workTypes.design;
        }

        if (values.developer) {
            totalPrice = totalPrice  + workTypes.developer;
        }

        if (values.qa) {
            totalPrice = totalPrice   + workTypes.qa;
        }

        const totalPriceEl = document.querySelector('#totalPrice');

        totalPriceEl.textContent = totalPrice;

        console.log(totalPrice);
}



const formEl = document.querySelector('#project_price_form');
const emailModal = document.querySelector('#modal_email');
const successModal = document.querySelector('#success_modal');


formEl.addEventListener('change' , calculateWork);
formEl.addEventListener('submit' , function(event) {
        event.preventDefault();

        emailModal.classList.add('modal_active');

});

const closeButtons = document.querySelectorAll('.modal_close_btn')

closeButtons.forEach( function(closeBtn){
        closeBtn.addEventListener('click', function () {
                emailModal.classList.remove('modal_active');
                successModal.classList.remove('modal_active');
        });
});

const modalEmailContainer = document.querySelector('#modal_email_container');

modalEmailContainer.addEventListener('submit', function(event){
    event.preventDefault();

    const userEmailInput = document.querySelector('#user_email');

    if (userEmailInput.value) {
        emailModal.classList.remove('modal_active');
        successModal.classList.add('modal_active');
    }

    const inputContainer = document.querySelector('#email_input_container');

    inputContainer.classList.add('email_input_container_error')

    
});
