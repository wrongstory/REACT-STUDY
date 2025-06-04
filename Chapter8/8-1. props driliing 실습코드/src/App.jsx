import styled from "styled-components";

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
  console.log("App");
  return (
    <Container>
      <Component>
        App
        <Container>
          <Child1 />
          <Child2 />
        </Container>
      </Component>
    </Container>
  );
}

function Child1() {
  console.log("Child1");
  return (
    <Component>
      Child1
      <Container>
        <Child3 />
        <Child4 />
      </Container>
    </Component>
  );
}

function Child2() {
  console.log("Child2");
  return (
    <Component>
      Child2
      <Container>
        <Child5 />
        <Child6 />
      </Container>
    </Component>
  );
}

function Child3() {
  console.log("Child3");
  return <Component>Child3 : 0</Component>;
}

function Child4() {
  console.log("Child4");
  return <Component>Child4</Component>;
}

function Child5() {
  console.log("Child5");
  return <Component>Child5</Component>;
}

function Child6() {
  console.log("Child6");
  return (
    <Component>
      Child6
      <button onClick={() => {}}>+</button>
    </Component>
  );
}
