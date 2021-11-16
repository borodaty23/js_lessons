
// const validation = (text, numberField) =>{
//   if (!numberField) {
//     let result = prompt(text);

//     while(!result){ 
//         result = prompt(`Try again ${text}`);
//     }
//     return result;
// }else{
//     let result = +prompt(text);

//     while(!result){ 
//         result = +prompt(`Try again ${text}`);
//     }
//     return result;
// }
// }



// const getInfo = (text, numberField = false) => {
//     const result = validation(text, numberField);

//     return result;
// }



// const getGenderBoolean = () => {
//     const resul = confirm("Your gender is male?");

//     return result;
// }



// const getPension = (age, genderBoolean ) =>{
//     if (genderBoolean && age >= 65 || !gengerBoolean &&  age>= 55){
//         return "yes";
//     }
//     else{
//         return "No";
//     }
// };



// const init = () => {
//     const name = getInfo("Enter your name");
//     const surName = getInfo("Enter your surname");
//     const patronimic = getInfo("Enter your patronimic");
//     const age = getInfo("Your age?", true);
//     const genderBoolean = getGenderBoolean()
//     const gender =  genderBoolean? "male" : "female" ;
//     const pension = getPension(age, genderBoolean);
//     showInfo (name, surName, patronimic, age, gender, pension);
// };



// const showInfo = (name, surName, patronimic, age, gender, pension) => {
//     alert(`
// Ваше ФИО: ${name} ${surName} ${patronimic};
// Ваш возраст в года: ${age};
// Ваш возраст в днях: ${age * 365};
// Через 5 лет вам будет: ${+age + 5};
// ваш пол: ${gender};
// Вы на пенсии: ${pension}
// `)
// }

// init()