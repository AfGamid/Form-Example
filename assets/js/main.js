

let parent = document.querySelector('.parent')
let signInBtn = document.querySelector(".btn1")
let signUpBtn = document.querySelector(".btn2")
let leftSide = document.querySelector(".left_side")
let rightSide = document.querySelector(".right_side")

signInBtn.addEventListener("click",()=>{
    parent.style.flexDirection = "row-reverse"
    leftSide.style.borderTopLeftRadius = "100px"
    leftSide.style.borderBottomLeftRadius = "100px"
    leftSide.style.borderTopRightRadius = "30px"
    leftSide.style.borderBottomRightRadius = "30px"
})


signUpBtn.addEventListener("click",()=>{
    parent.style.flexDirection = "row"
    leftSide.style.borderTopLeftRadius = "30px"
    leftSide.style.borderBottomLeftRadius = "30px"
    leftSide.style.borderTopRightRadius = "100px"
    leftSide.style.borderBottomRightRadius = "100px"
})

