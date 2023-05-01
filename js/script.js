const quests = document.querySelectorAll('.quest')
/*const answer = document.querySelector('.answer')*/

quests.forEach((quest) =>{
    const answer = quest.querySelector('.answer')
    quest.addEventListener('click', () =>{
        answer.classList.toggle('open')
        
    })
})

