const UserName = document.querySelector('.UserName')
const StartQuiz = document.querySelector('.StartQuiz')

StartQuiz.addEventListener('click', ()=>{
    if(!UserName.value){
    const Error = document.querySelector('.Error')
    Error.style.display = "flex"
}else{ 
    localStorage.setItem("EflexQuizUserInfo", JSON.stringify(UserName.value))
    window.location= "quiz.html"
}
})