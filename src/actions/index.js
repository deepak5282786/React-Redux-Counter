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

export const mulNumber = (num) => {
  return {
    type: "MULTIPLICATION",
    payload: num,
  };
};

export const divNumber = () => {
  return {
    type: "DIVISION",
  };
};
