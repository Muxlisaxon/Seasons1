let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")
let btn4 = document.querySelector(".btn4")
let btn5 = document.querySelector(".btn5")
let btn6 = document.querySelector(".btn6")

let h2 = document.querySelector(".he")
let inp = document.querySelector(".inp")



// btn1.onclick = () => {
//     maydon.innerHTML = input.value
// }

// btn2.onclick = () => {
//     maydon.innerHTML = input.value
// }

// btn3.onclick = () => {
//     maydon.innerHTML = input.value
// }


// btn4.onclick = () => {
//     maydon.innerHTML = input.value
// }

// btn5.onclick = () => {
//     maydon.innerHTML = input.value
// }

// btn6.onclick = () => {
//     maydon.innerHTML = input.value
// }



// let inp = document.querySelector(".inp")
// let a = document.querySelector("#A")
// let b = document.querySelector("#B")
// let c = document.querySelector("#C")
// let d = document.querySelector("#D")
// let f = document.querySelector("#F")
// let g = document.querySelector("#G")

// let h2 = document.querySelector(".he")






btn1.onclick = () => {
    let inpvalue = inp.value
    h2.innerHTML = inpvalue.toUpperCase()
}

btn2.onclick = () => {
    let inpvalue = inp.value
    h2.innerHTML = inpvalue.toLowerCase()
}
btn3.onclick = () => {
    let inpvalue = inp.value
    h2.innerHTML = inpvalue.slice(0,1).toUpperCase()
    h2.innerHTML += inpvalue.slice(1).toLowerCase()
}

btn4.onclick = () => {
    let inpvalue = inp.value
    h2.innerHTML = inpvalue.bold()
}
btn5.onclick = () => {
    let inpvalue = inp.value
    h2.innerHTML = inpvalue.italics()
}

btn6.onclick = () => {
    let inpvalue = inp.value
    h2.style.textDecoration = "underline"
    h2.innerHTML = inpvalue.toUpperCase().bold().italics()
}
