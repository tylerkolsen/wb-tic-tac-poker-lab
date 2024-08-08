const cardId = document.querySelector('#cardIdInput')
const colorAtt = document.querySelector('#colorInput')

const setCard = () => {
    const cardType = document.querySelector("#" + cardId.value)
    console.log(cardType)
    cardType.style.color = colorAtt.value
}

document.querySelector('#editBtn').addEventListener('click', setCard)