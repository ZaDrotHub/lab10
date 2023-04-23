const checkers = 8
const checkersBoard = []

for (let i = 0; i < checkers; i++) {
    const row = []
    for (let j = 0; j < checkers; j++) {
    row.push((i + j) % 2 === 0 ? 'white' : 'black')
}
checkersBoard.push(row)
}

const app = document.getElementById('app')

for (let i = 0; i < checkers; i++) {
    const row = document.createElement('div')
    for (let j = 0; j < checkers; j++) {
    const cell = document.createElement('tr')
    cell.style.width = '80px'
    cell.style.height = '80px'
    row.style.display = 'flex'
    cell.style.backgroundColor = checkersBoard[i][j]
    cell.style.border = '3px solid black'
    row.appendChild(cell)
  }
  app.appendChild(row)
}
document.body.appendChild(app)