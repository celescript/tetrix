"use client"

const rows = 30
const cols = 10

type Grid = Cell[][]
type Cell = number
// type Piece = Position[]
type Position = [number, number]
interface Piece {
  blocks: Position[]
}

const grid: Grid = Array.from(
  { length: rows },
  () => Array.from({ length: cols }, () => 0)
  // grid es un array que por dentro tiene 30 veces (cant de rows) un array de 10 (cant de cols) items de largo
)

// x, y
const piece: Piece = {
  blocks: [
    [-1, -1],
    [0, -1],
    [-1, 0],
    [0, 0],
  ],
}

const getCell = (grid: Grid, position: Position): Cell => {
  return grid[position[1]][position[0]]
}

// Return true if the piece can be in the position
const checkPosition = (
  grid: Grid,
  piece: Piece,
  position: Position
): boolean => {
  // A cada coordenada de bloque del array pieza
  const result = piece.blocks.every((p) => {
    // Le calculo la posicion de cada bloque
    // ej bloque [-1, -1] || position [0, 0]
    const positionToCheck: Position = [position[0] + p[0], position[1] + p[1]] // [[0 + -1], [0 + -1]]
    // [-1, -1]

    // Chequeo si el bloque es parte de la grid
    if (
      positionToCheck[0] < 0 ||
      positionToCheck[0] >= cols ||
      positionToCheck[1] < 0 ||
      positionToCheck[1] >= rows
    ) {
      return false
    }

    const valueAtPosition = getCell(grid, position)

    // can be more efficient to return !grid[...]
    if (valueAtPosition === 0) {
      return true
    } else {
      return false
    }
  })

  return result
}

export default function Home() {
  return <main>Hola que hace</main>
}
