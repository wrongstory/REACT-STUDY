import styled from "styled-components";
import { useState } from "react";

const Component = styled.div`
  font-weight: 700;
  border: 3px solid blue;
  border-radius: 10px;
  flex-grow: 1;
  line-height: 30px;
  text-align: center;
  padding: 10px;
  margin: 10px;
  > button {
    margin-left: 10px;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export default function App() {
  const [counter, setCounter] = useState(1);
  console.log("App");
  return (
    <Container>
      <Component>
        App
        <Container>
          <Child1 counter={counter} />
          <Child2 counter={counter} setCounter={setCounter} />
        </Container>
      </Component>
    </Container>
  );
}

function Child1({ counter }) {
  console.log("Child1");
  return (
    <Component>
      Child1
      <Container>
        <Child3 counter={counter} />
        <Child4 />
      </Container>
    </Component>
  );
}

function Child2({ counter, setCounter }) {
  console.log("Child2");
  return (
    <Component>
      Child2
      <Container>
        <Child5 />
        <Child6 counter={counter} setCounter={setCounter} />
      </Container>
    </Component>
  );
}

function Child3({ counter }) {
  console.log("Child3");
  return <Component>Child3 : {counter} </Component>;
}

function Child4() {
  console.log("Child4");
  return <Component>Child4</Component>;
}

function Child5() {
  console.log("Child5");
  return <Component>Child5</Component>;
}

function Child6({ counter, setCounter }) {
  console.log("Child6");
  return (
    <Component>
      Child6
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
    </Component>
  );
}
