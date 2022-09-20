export const incNumber = (numInc) => {
  return {
    type: "INCREMENT",
    payload: numInc,
  };
};

export const decNumber = (num) => {
  return {
    type: "DECREMENT",
    payload: num,
  };
};
