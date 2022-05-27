

function validateInput(){

    event.preventDefault();
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confpassword = document.getElementById('confpassword').value;

    if(name!=='' && surname!=='' && email!=='' && password!=='' && confpassword!==''){
        
        if(confpassword === password){
            alert('form submitted');
        }
        else{
            document.getElementById('confpassword-err').classList.add('show');
            document.getElementById('confpassword-err').innerHTML = 'Passwords do not match'
        }
    }else{
        if(name ===''){
            document.getElementById('name-err').classList.add('show');
        }
        if(surname ===''){
            document.getElementById('surname-err').classList.add('show');
        }
        if(email ===''){
            document.getElementById('email-err').classList.add('show');
        }
        if(password ===''){
            document.getElementById('password-err').classList.add('show');
        }
        if(confpassword ===''){
            document.getElementById('confpassword-err').classList.add('show');
        }
    }
   
}

const firstName = document.getElementById('name');
const lastName = document.getElementById('surname');
const emailAddress = document.getElementById('email');
const passwrd = document.getElementById('password');
const confpasswrd  =document.getElementById('confpassword');

firstName.addEventListener('keypress', ()=>{

    removeErr('name')
});

lastName.addEventListener('keypress', ()=>{
    
    removeErr('surname')
});

emailAddress.addEventListener('keypress', ()=>{

    removeErr('email')
});

passwrd.addEventListener('keydown', ()=>{

    removeErr('password')

    if(document.getElementById('confpassword-err').innerHTML === 'Passwords do not match'){
        removeErr('confpassword');
    }
    
});

confpasswrd.addEventListener('keydown', ()=>{

    removeErr('confpassword');
});

function removeErr(id){
    id = id + '-err';
    document.getElementById(id).classList.remove('show');
}

document.getElementById('check').addEventListener('click', ()=>{
    var isChecked = document.getElementById('check');
    if(isChecked.checked === false){
        document.getElementById('confpassword').type = 'password';
        document.getElementById('password').type = 'password';
        
    }else{
        document.getElementById('confpassword').type = 'text';
        document.getElementById('password').type = 'text';
        
    }
    
})

