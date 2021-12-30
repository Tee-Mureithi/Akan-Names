let maleNames = ['Kwasi', 'Kwadwo', 'Kwabena' ,'Kwaku','Yaw','Kofi','Kwame']
var femaleNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']
var weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
var year 
var dateOfBirth 
var months 
var dd

function validate () {


if(
    document.myForm.year.value == '' ||
    document.myForm.year.value.length > 4 ||
    document.myForm.year.value > 2021 ||
    document.myForm.year.value <=1900
) {
    alert("Please provide a valid year")
    document.myForm.year.focus();
    return false;
} else if (
    document.myForm.month.value == "" ||
    isNaN(document.myForm.month.value) ||
    document.myForm.month.value.length > 2 ||
    document.myForm.month.value > 12 ||
    document.myForm.month.value <= 0
) {
    alert('Please enter valid month')
    document.myForm.month.focus();
    return false;
} else if (
    document.myForm.date.value == "" ||
    isNaN(document.myForm.month.value) ||
    document.myForm.month.value.length > 2 ||
    document.myForm.date.value > 31 ||
    document.myForm.date.value <= 0
) {
    alert('please enter valid date')
    document.myForm.day.focus();
    return false;
} else if (
    document.getElementById("male").checked == false && document.getElementById("female").checked == false
) {
    alert('Please select gender')
    return false;
} else {
    return true;
}

}
    












function calculateDay(){

    year = document.getElementById('year').value
    months = document.getElementById('month').value
    dateOfBirth = document.getElementById('date').value

    let cc =(year.slice(0,2));
    let yy =(year.slice(2,4));
    
     var weekDays = (((cc/4) -2*cc-1) + ((5*yy/4)) + ((26*(months+1)/10)) + dateOfBirth)%7;
   
     dd = Math.floor(weekDays);
    return(dd);

}



function findName() {

var gender = document.getElementById ('male').value
var gender = document.getElementById ('female').value

calculateDay()



if (gender == 'male' && dd == 0) {
    alert("Your Akan Name is " + maleNames[0])
} else if (gender == 'male' && dd == 1){
    alert("Your Akan Name is " +maleNames[1])
} else if (gender == 'male' && dd == 2){
    alert("Your Akan Name is " +maleNames[2])
} else if (gender == 'male' && dd == 3){
    alert("Your Akan Name is " +maleNames[3])
} else if (gender == 'male' && dd == 4){
    alert("Your Akan Name is " +maleNames[4])
} else if (gender == 'male' && dd == 5){
    alert("Your Akan Name is " +maleNames[5])
} else if (gender == 'male' && dd == 6){
    alert("Your Akan Name is " +maleNames[6])
} else if (gender === 'female' && dd === 0){
    alert("Your Akan Name is " +femaleNames[0])
} else if (gender === 'female' && dd === 1){
    alert("Your Akan Name is " +femaleNames[1])
} else if (gender === 'female' && dd === 2){
    alert("Your Akan Name is " +femaleNames[2])
} else if (gender === 'female' && dd === 3){
    alert("Your Akan Name is " +femaleNames[3])
} else if (gender === 'female' && dd === 4){
    alert("Your Akan Name is " +femaleNames[4])
} else if (gender === 'female' && dd === 5){
    alert("Your Akan Name is " +femaleNames[4])
} else if (gender === 'female' && dd === 6){
    alert("Your Akan Name is " +femaleNames[6])
} else alert('We do not have an akan')
    
}
              
 




 


