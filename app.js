console.log("Hello");
let total = 1 + 3;
console.log("Goodbye");

//========================
//BASIC EXERCISE OPERATORS
//========================
let rating = 3;
if (rating === 3) {
    console.log('You are a superstar');
}

//====================
//GET A RANDOM NUMBER 
//====================
let random = Math.random();
if (random < 0.5) {
    console.log('Your number is less than 0.5')
}
else {
    console.log('Your number is greater that 0.5')
}
console.log(random)

//===============
//DAY OF THE WEEK
//=============== 
const dayOfWeek = prompt('ENTER A DAY OF THE WEEK').toLowerCase();


if (dayOfWeek === 'monday') {
    console.log('I HATE MONDAYS')
}

else if (dayOfWeek === 'saturday') {
    console.log('YAY I LOVE SATURDAYS')
}

else if (dayOfWeek === 'friday') {
    console.log('FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK')
}
else {
    console.log('MEH!')
}

//==================
//ENTER A PASSWORD 
//==================
const password = prompt('please enter a new password');
if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log('valid password');
    }


    else {
        console.log('Password can not contain spaces');
    }

}

else {
    console.log('PASSWORD TOO SHORT Must be 6+ characters')
}


//===========================================
//ENTER A PASSWORD USING LOGICAL AND OPERATOR
//===========================================
const psw = prompt('Please enter a new password');
if (psw.length > +6 && psw.indexOf(' ') === -1) {
    console.log('VALID PASSWORD');

}
else {
    console.log('INCORRECT FORMAT FOR PASSWORD!');
}

//========================================
//NESTED CONDITIONAL WITH A VARIABLE NUM
//========================================
const num = prompt('please enter a number');

if (num <= 100) {
    if (num >= 50) {
        console.log('HEY');
    }
}
else {
    if (num < 103) {
        if (num % 2 === 0) {
            console.log('YOU GOT ME!')
        }
    }
}

console.log(num)

//====================================
//AGE EXAMPLE USING LOGICAL OPERATORS 
//====================================

const age = prompt('Enter your age');
if ((age >= 0 && age < 5) || age >= 65) {
    console.log('FREE');
}
else if (age >= 5 && age < 10) {
    console.log('$10');
}
else if (age >= 10 && age < 65) {
    console.log("$20");
}
else {
    console.log('ENTER A VALID AGE');
}

//=====================================
//AGE EXAMPLE USING COMBINING && AND ||
// and using ! (if is not)
//=====================================

const age2 = prompt('Enter your age');
if (!(age2 >= 0 && age2 < 5 || age >= 65)) {
    console.log('YOU ARE NOT A BABY OR A SENIOR');
}

//=======================
// USING SWITCH STATEMENT
//=======================

//const day2 = prompt('Please enter a number from 1 to 5');
const day2 = 2;
switch (day2) {
    case 1:
        console.log('MONDAY');
        break;

    case 2:
        console.log('TUESDAY');
        break;

    case 3:
        console.log('WEDNESDAY');
        break;

    case 4:
        console.log('THRUSDAY');
        break;

    case 5:
        console.log('FRIDAY');
        break;
    default:
        console.log('INVALID NUMBER');
}
