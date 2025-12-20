// src/components/Board/Board.jsx
import "./Board.css";

export const Board = ({ text }) => {
  return (
    <div className="board">
      <p className="board-text">{text}</p>
    </div>
  )
}


