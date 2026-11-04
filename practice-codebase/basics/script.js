{
  var a="hello";

  console.log(a);

}
console.log(a);


function fun(){
    var a="hello1";

  console.log(a);

}

fun()
console.log(a)


let name="  raj  ";
let age=18;

// let result="my name is"+name+"my age is"+age;

let result=`my name is ${name} my age is ${age}`;

console.log(name.trim())
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.indexOf("j"))
console.log(name.slice(2,5))
console.log(name.slice(5))
console.log(name.length)
console.log(name.trim().toUpperCase().split(" "));


let password="Dfghjio345678@$";


function checkPassword(password) {

    let check = password.trim();

    if (check.length < 8) {
        return "Password must contain at least 8 characters.";
    }

    if (!/[A-Z]/.test(check)) {
        return "Password must contain at least one uppercase letter.";
    }

    if (!/[a-z]/.test(check)) {
        return "Password must contain at least one lowercase letter.";
    }

    if (!/[0-9]/.test(check)) {
        return "Password must contain at least one number.";
    }

    if (!/[!@#$%^&*]/.test(check)) {
        return "Password must contain at least one special character.";
    }

    if (/\s/.test(check)) {
        return "Password must not contain spaces.";
    }

    return "Strong Password!";
}

console.log(checkPassword(password));
