import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [rerender, setRerender] = useState(false);

  // useCallback 함수 자체를 변수에 할당하여 재사용
  const plus1 = useCallback(
    (number) => {
      console.log("plus1 실행");
      return number + 1;
    },
    [rerender]
  );

  // useMemo 함수의 호출 결과를 저장
  const numberPlus1 = useMemo(() => {
    return plus1(number);
  }, [rerender]);

  useEffect(() => {
    console.log("plus1 생성");
  }, [plus1]);

  return (
    <>
      <div>numberPlus1 : {numberPlus1}</div>
      <button onClick={() => setNumber(number + 1)}>+1</button>
      <button onClick={() => setRerender(!rerender)}>Rerender</button>
    </>
  );
}

export default App;
