let num = document.getElementById("number")
let remove = document.getElementById("remove")
let add = document.getElementById("add")
let save = document.getElementById("save")
let reset = document.getElementById("reset")
let myDiv = document.getElementById("myDiv")
let input = document.getElementById("input")
let deleteAll = document.getElementById("deleteAll")
let count = 0


// let today = new Date()
// let day = date.getDate()
// let month = date.getMonth()+1
// let year = date.getFullYear()
// let fulldate = '${day},${month},${year}'
// console.log(fulldate);

let date = new Date().toUTCString().slice(5, 16)
console.log(date);

let today = new Date()
let time = today.getHours() + ":" + today.getMinutes()

let storedrecords = window.localStorage.getItem("mysave")

if (storedrecords) {
    myDiv.innerHTML = storedrecords
    myDiv.innerHTML
}



add.onclick = () => {
    count += 1
    num.textContent = count
}

function inputnum() {
    count = 0
    num.textContent = input.value
}

remove.onclick = () => {
    if (count <= 0) {
        return
    }
    count -= 1
    num.textContent = count
}

reset.ondblclick = () => {
    count -= count
    num.textContent = count
}

function data() {
    myDiv.innerHTML += "<div>" + "<h1>" + count +" " + "products" + "</h1>" + "<p>" + date + " - " + time + "</p>" + "</div>"
    localStorage.setItem("mysave", myDiv.innerHTML)
    myDiv.innerHTML.ondblclick = () => {
        localStorage.removeItem("myDiv.innerHTML")
    }
}


save.ondblclick = () => {
    data()
    count = 0
    num.textContent = count
}


deleteAll.ondblclick = () => {
    window.localStorage.clear()
}