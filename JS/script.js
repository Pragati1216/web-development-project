// Add your JavaScript code here

document.addEventListener("DOMContentLoaded" , function() {

    const form = document.querySelector(".booking-form");

    form.addEventListener("submit" , function(e) {

        e.preventDefault(); 
   

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const phone = document.getElementById("phone").value.trim();
const destination = document.getElementById("destination").value.trim();
const fromDate = document.getElementById("fromDate").value.trim();
const toDate = document.getElementById("toDate").value.trim();
const people = document.getElementById("people").value.trim();
 const message = document.getElementById("message").value.trim();

 if(!name || !email || !phone || !destination || !fromDate || !toDate || !people){
         alert("please fill all the required feilds");
         return;
 }

 if(new Date(fromDate) > new Date(toDate)){
    alert("'From Date' can not be ater 'To Date' !");
 }

const booking = {
    name,
    email,
    phone,
    destination,
    fromDate,
    toDate,
    people,
    message,
    id:Date.now(), 
};

let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

bookings.push(booking);



localStorage.setItem("bookings" , JSON.stringify(bookings));

alert(`booking confirmed for ${destination} !\n we'll contact you soon.`);


form.reset();



 })
})



