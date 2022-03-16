const form =document.getElementById('f1');
const username =document.getElementById('username');
const Email =document.getElementById('email');
const Password =document.getElementById('password');
const Password2 =document.getElementById('password2');



function showeRRor(input,msg)
{

const fcontrol=input.parentElement;     
fcontrol.className='form-control error';
const small=fcontrol.querySelector('small');
small.innerText=msg;

}
function showeSuccess(input)
{

const fcontrol=input.parentElement;
fcontrol.className='form-control success';


}
function check(inputarray)
{
inputarray.forEach(function(input)
{
    if(input.value=='')
    {
        console.log(input.id);
        showeRRor(input,`${ getfield(input)} is required`)
    }
    else
    {
        showeSuccess(input);
    }
})

}
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ( re.test(input.value.trim()) ) {
        showeSuccess(input);
    } else {
        showeRRor(input, `Please provide  valid email`)
    }
}
function checkLength(input, min, max) {
    if ( input.value.length < min ) {
        showeRRor(input,`${getfield(input)} needs to be at least ${min} characters`);
    } else if (input.value.length > max) {
        showeRRor(input,`${getfield(input)} needs to be less than ${max} characters`);
    } else {
        showeSuccess(input);
    }
}
function getfield(inp)
{
return inp.id.charAt(0).toUpperCase() + inp.id.slice(1);
}
function checkPasswordsMatch(input1, input2) {
    if ( input1.value !== input2.value ) {
        showeRRor(input2,"Passwords don't match")
    }
}
form.addEventListener('submit',function(f){
    f.preventDefault();
    
   
   check([username,Email,Password,Password2]);
   checkLength(username,3,10);
    checkLength(Password,6,30);
    checkEmail(Email);
    checkPasswordsMatch(Password,Password2);
   
});