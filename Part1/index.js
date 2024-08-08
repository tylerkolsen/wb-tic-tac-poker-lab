let player = 'X'

const play = (evt) => {
    player === 'X' ? player = 'O' : player = 'X'
    const currentPlayer = document.querySelector('#current-player')
    currentPlayer.innerText = player
    evt.target.innerText = player
    const winner = calculateWinner();
        if (winner) {
            alert(`${winner} is the winner!`)
        } else if (isBoardFull()) {
            alert('Game is a tie!')
}
}

const squares = document.querySelectorAll('.square')

for (let square of squares) {
    square.addEventListener('click', play)
}
// code i came up with for detection of winner. Not great
// const winner = () => {
//     for (i = 0; i < squares.length; i += 3) {
//         if (squares[i].innerText === squares[i+1].innerText && squares[i].innerText === squares[i+2].innerText && squares[i].innerText !== '') {
//             alert(`Player ${player} is the winner!`)
//         }
//     }
//     for (i = 0; i < 3; i++) {
//         if (squares[i].innerText === squares[i+3].innerText && squares[i].innerText === squares[i+6].innerText && squares[i].innerText !== '') {
//             alert(`Player ${player} is the winner!`)
//         }
//     }
//     if (squares[0].innerText === squares[4].innerText && squares[0].innerText === squares[8].innerText && squares[0].innerText !== '') {
//         alert(`Player ${player} is the winner!`)
//     }
//     if (squares[2].innerText === squares[4].innerText && squares[2].innerText === squares[6].innerText && squares[2].innerText !== '') {
//         alert(`Player ${player} is the winner!`)
//     }
// }

const calculateWinner = () => {
    const lines = [
        // Horizontal Lines
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Vertical Lines
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonal Lines
        [0, 4, 8],
        [2, 4, 6]
    ]
    // for... of loop in order to cycle through these lines
    for (const line of lines) {
        const [a, b, c] = line
        // get the text in each square
        const squareAText = squares[a].innerText
        const squareBText = squares[b].innerText
        const squareCText = squares[c].innerText
        // If the first square is not blank, and it matches the other squares then we have a winner
        if (squareAText !== '' && squareAText === squareBText && squareAText === squareCText) {
            return squareAText
        }
    }
    return undefined
}

const isBoardFull = () => {
    for (const square of squares) {
        if (square.innerText === '') {
            return false
        }
    }
    return true
}

// Here's how i originally solved the alert for a winner. I've updated the code to the official solution so that I can test it out and wrap my head around it
// const calculateWinner = () => {
//     const lines = [
//         // Horizontal Lines
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         // Vertical Lines
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         // Diagonal Lines
//         [0, 4, 8],
//         [2, 4, 6]
//     ]
//     // for... of loop in order to cycle through these lines
//     for (const line of lines) {
//         const [a, b, c] = line
//         // get the text in each square
//         const squareAText = squares[a].innerText
//         const squareBText = squares[b].innerText
//         const squareCText = squares[c].innerText
        // If the first square is not blank, and it matches the other squares then we have a winner
//     if (squareAText !== '' && squareAText === squareBText && squareAText === squareCText) {
//         return alert(`Player ${squareAText} is the Winner!`)
// }
// }
// // check if there are no blank innerText portions. If true, return tie game
//     let checkTie = true
//     for (i = 0; i < squares.length; i++) {
//         if (squares[i].innerText === '') {
//             checkTie = false 
//         } 
//     }
//     if (checkTie) {
//         return alert("Tie Game!")
//     }

// }