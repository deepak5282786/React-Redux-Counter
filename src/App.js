import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber, mulNumber, divNumber } from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const myNewState = useSelector((state) => state.mulDivNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container text-center">
        <h1>Increament/Decrement Counter</h1>
        <h4>Using React and Redux</h4>
        <div
          className="btn btn-primary"
          style={{ width: "5%", margin: "10px" }}
          onClick={() => dispatch(decNumber(5))}
        >
          -
        </div>

        <input
          type="text"
          style={{ width: "15%", margin: "10px" }}
          value={myState}
        />

        <div
          className="btn btn-primary"
          style={{ width: "5%", margin: "10px" }}
          onClick={() => dispatch(incNumber(5))}
        >
          +
        </div>
      </div>
      {/* /////-------new Component---------////// */}
      <div className="container text-center my-5">
        <h1>Multiplication/ Division Counter</h1>
        <h4>Using React and Redux</h4>
        <div
          className="btn btn-primary"
          style={{ width: "5%", margin: "10px" }}
          onClick={() => dispatch(mulNumber(5))}
        >
          *
        </div>

        <input
          type="text"
          style={{ width: "15%", margin: "10px" }}
          value={myNewState}
        />

        <div
          className="btn btn-primary"
          style={{ width: "5%", margin: "10px" }}
          onClick={() => dispatch(divNumber())}
        >
          /
        </div>
      </div>
    </>
  );
}

export default App;
