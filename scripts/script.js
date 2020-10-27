const name = document.getElementById('name');
const addr = document.getElementById('address');
const dob = document.getElementById('dob');
const email = document.getElementById('email');
const phoneNum = document.getElementById('phone-number');
const username = document.getElementById('username');
const password = document.getElementById('password');
const repass = document.getElementById('repass');
const gender = document.getElementsByName('gender');
const courses = document.getElementsByName('courses');
const note = document.getElementById('note');
//errors
const nameErr = document.getElementById('name-error');
const dobErr = document.getElementById('dob-error');
const emailErr = document.getElementById('email-error');
const usernameErr = document.getElementById('usrname-error');
const passErr = document.getElementById('pass-error');
const repassErr = document.getElementById('repass-error');
 
const form = document.getElementById('form');

//Focus another field when press Enter
name.focus();

name.addEventListener('keydown', async (event) => {
    
    if (event.keyCode === 13) {
        name.value = await nameStdl(name.value);
        addr.focus();
    };

});

dob.addEventListener('keydown', (event) => {
    
    if (event.keyCode === 13) {
        
        email.focus();
    };
    if (event.keyCode !== 8){
        if (dob.value.length === 2 || dob.value.length === 5) {
                dob.value += '/';
        }   
    }
});

email.addEventListener('keydown', (event) => {
    
    if (event.keyCode === 13) {
        
        phoneNum.focus();
    };

});

username.addEventListener('keydown', (event) => {
    
    if (event.keyCode === 13) {
        
        password.focus();
    };

});

password.addEventListener('keydown', (event) => {
    
    if (event.keyCode === 13) {
        
        repass.focus();
    };

});

repass.addEventListener('keydown', (event) => {
    
    if (event.keyCode === 13) {
        
        note.focus();
    };

});

//Disable enter to submit
form.addEventListener('keydown', (event) => {
    
    if (event.keyCode === 13) {
        event.preventDefault();
    };

});

form.addEventListener('submit', async (event) => {
    const isNameValid = await validName();
    const isDOBValid = await validDOB();
    const isEmailValid = await validEmail();
    const isUsernameValid = await validUsername();
    const isPassValid = await validPass();
    
    if (!isNameValid || !isDOBValid || !isEmailValid|| !isUsernameValid || !isPassValid) {
        event.preventDefault();
    }
    
});

// Name standardlized

const nameStdl = (str) => {
    const res = str.split(' ').filter((item) => {
        return item !== '';
    });
      
    return res.map((item) => {
        return item[0].toUpperCase() + item.slice(1);
    }).join(' ');
}


//Check errors

const validName = () => {

    if (name.value.length === 0) {
        nameErr.innerHTML = 'Please input your full name!';
        return false;
    }
    nameErr.innerHTML = '';
    return true;
};

const validDOB = () => {
    const regDOB = new RegExp('^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/(19[3-9][0-9]|20[01][0-7])$');
    if (dob.value.length === 0) {
        dobErr.innerHTML = 'Please input your date of birth to continue!';
        return false;
    }
    // console.log(dob.value);
    if (!regDOB.test(dob.value)) {
        dobErr.innerHTML = 'Wrong date/month/year!';
        return false;
    }
    dobErr.innerHTML = '';
    return true;
}

const validEmail = () => {
    const regEmail = new RegExp('^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$');
    if (email.value.length === 0) {
        emailErr.innerHTML = 'Please input your email!';
        return false;
    }

    if (!regEmail.test(email.value.toLowerCase())) {
        emailErr.innerHTML = 'Wrong type of email!';
        return false;
    }

    emailErr.innerHTML = '';
    return true;
}

const validUsername = () => {

    if (username.value.length === 0) {
        usernameErr.innerHTML = 'Please input username!';
        return false;
    }
    usernameErr.innerHTML = '';
    return true;
};

const validPass = () => {
    if (password.value.length === 0) {
        passErr.innerHTML = 'Please input password!';
        return false;
    }
    
    if (repass.value.length === 0) {
        repassErr.innerHTML = 'Please reinput password!';
        return false;
    }

    if (password.value !== repass.value) {
        repassErr.innerHTML = 'Please reinput the right password!';
        return false;
    }

    passErr.innerHTML = '';
    repassErr.innerHTML = '';
    return true;
}