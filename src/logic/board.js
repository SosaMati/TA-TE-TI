import { WINNER_COMBOS } from '../constants'

export const checkWinnerFrom = (boardToCheck) => {
  // revisamos las combinaciones ganadoras
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] && // si hay algo en la posicion a
      boardToCheck[a] === boardToCheck[b] && // si a es igual a b
      boardToCheck[a] === boardToCheck[c] // si a es igual a c
    ) {
      return boardToCheck[a] // devuelve el valor de a que es el ganador
    }
  }
  return null // si no hay ganador devuelve null
}

export const checkEndGame = (newBoard) => {
  // revisa si el tablero esta lleno y no hay ganador
  return newBoard.every(item => item !== null)
}
