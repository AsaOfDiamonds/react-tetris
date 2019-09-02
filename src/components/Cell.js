import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../tetrominos";

const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color} />
);
// react memo reduces the renders, only re-renders when the cells actually are changing, only render the cells that are changing
export default React.memo(Cell);