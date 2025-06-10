import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [rerender, setRerender] = useState(false);

  const plus1 = (number) => {
    console.log("plus1 실행");
    return number + 1;
  };

  const numberPlus1 = useMemo(() => {
    return plus1(number);
  }, [number]);

  return (
    <>
      <div>numberPlus1 : {numberPlus1}</div>
      <button onClick={() => setNumber(number + 1)}>+1</button>
      <button onClick={() => setRerender(!rerender)}>Rerender</button>
    </>
  );
}

export default App;
