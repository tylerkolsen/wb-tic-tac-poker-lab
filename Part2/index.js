const cardId = document.querySelector('#cardIdInput')
const colorAtt = document.querySelector('#colorInput')

const setCard = () => {
    const cardType = document.querySelector("#" + cardId.value)
    console.log(cardType)
    cardType.style.color = colorAtt.value
}

document.querySelector('#editBtn').addEventListener('click', setCard)

const addEle = (cardId) => {
    const p = document.createElement('p')
    p.innerText = "I'm Here!"
    p.className = `${cardId}`
    document.body.appendChild(p)
}

document.querySelector('#diamonds').addEventListener('click', () => addEle('diamonds'))

document.querySelector('#clubs').addEventListener('click', () => addEle('clubs'))

document.querySelector('#hearts').addEventListener('click', () => addEle('hearts'))

document.querySelector('#spades').addEventListener('click', () => addEle('spades'))