let player = 'X'

const play = (evt) => {
    player === 'X' ? player = 'O' : player = 'X'
    const currentPlayer = document.querySelector('#current-player')
    currentPlayer.innerText = player
    evt.target.innerText = player
    winner()
}

const squares = document.querySelectorAll('.square')

for (let square of squares) {
    square.addEventListener('click', play)
}

const winner = () => {
    for (i = 0; i < squares.length; i += 3) {
        if (squares[i].innerText === squares[i+1].innerText && squares[i].innerText === squares[i+2].innerText && squares[i].innerText !== '') {
            alert(`Player ${player} is the winner!`)
        }
    }
    for (i = 0; i < 3; i++) {
        if (squares[i].innerText === squares[i+3].innerText && squares[i].innerText === squares[i+6].innerText && squares[i].innerText !== '') {
            alert(`Player ${player} is the winner!`)
        }
    }
    if (squares[0].innerText === squares[4].innerText && squares[0].innerText === squares[8].innerText && squares[0].innerText !== '') {
        alert(`Player ${player} is the winner!`)
    }
    if (squares[2].innerText === squares[4].innerText && squares[2].innerText === squares[6].innerText && squares[2].innerText !== '') {
        alert(`Player ${player} is the winner!`)
    }
    
}