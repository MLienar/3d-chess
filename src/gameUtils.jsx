export function getColor(column, row) {
  const evenRow = row % 2 === 0;
  const evenColumn = column % 2 === 0;

  if (!evenRow) {
    return evenColumn ? "white" : "darkgrey";
  }
  return evenColumn ? "darkgrey" : "white";
}

export const INITIAL_BOARD = {
  A: ["r_lw", "n_lw", "b_lw", "q_w", "k_w", "b_rw", "n_rw", "r_rw"],
  B: ["p_1w", "p_2w", "p_3w", "p_4w", "p_5w", "p_6w", "p_7w", "p_8w"],
  C: [0, 0, 0, 0, 0, 0, 0, 0],
  D: [0, 0, 0, 0, 0, 0, 0, 0],
  E: [0, 0, 0, 0, 0, 0, 0, 0],
  F: [0, 0, 0, 0, 0, 0, 0, 0],
  G: ["p_1b", "p_2b", "p_3b", "p_4b", "p_5b", "p_6b", "p_7b", "p_8b"],
  H: ["r_lb", "n_lb", "b_lb", "q_b", "k_b", "b_rb", "n_rb", "r_rb"],
};

export const COL_TO_NUM = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
  F: 5,
  G: 6,
  H: 7,
};

export function positionToVec(position) {
  const [col, row] = position.split("");
  return [Number(COL_TO_NUM[col]), 0, Number(row)];
}
