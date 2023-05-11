'use client'

const rows = 30
const cols = 10

type Grid = number[][]

// type Piece = Position[]
interface Piece {

  blocks: Position[]
}

type Position = [number, number]

const grid: Grid = Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0))

// x, y
const piece: Piece = {
  blocks: [
    [-1, -1],
    [0, -1],
    [-1, 0],
    [0, 0]
  ]
}

// Return true if the piece can be in the position
const checkPosition = (grid: Grid, piece: Piece, position: Position): boolean => {

  // A cada coordenada de bloque del array pieza
 const result = piece.blocks.every((p) => {
  // Le calculo la posicion de cada bloque
  const positionToCheck: Position = [position[0] + p[0], position[1] + p[1]]
// TODO: Chequear que el bloque este adentro de la grid
  // can be more efficient to return !grid[...]
  const valueAtPosition = grid[positionToCheck[1]][positionToCheck[0]]

  if(valueAtPosition === 0) {
    return true
  } else {
    return false
  }
 })

 return result

}

export default function Home() {
  return (
    <main>
      Hola que hace
    </main>
  )
}
