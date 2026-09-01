const accomodation = document.querySelector(".accomodation")
const booking = document.querySelector(".main-form")

const book_buttons = document.querySelectorAll(".reserve-btn")

console.log(book_buttons);


book_buttons.forEach( button =>{
    button.addEventListener("click", ()=>{
        accomodation.classList.add("hide")
        booking.classList.remove("hide")
    })
})
