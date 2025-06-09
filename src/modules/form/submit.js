import dayjs from "dayjs"

const form = document.querySelector("form")
const selectDate = document.getElementById("date")

const inputToday = dayjs(new Date()).format("YYYY-MM-DD")
selectDate.value = inputToday
selectDate.min = inputToday

form.onsubmit = (event) => {
    event.preventDefault()

    console.log("Submitted !!!")
}