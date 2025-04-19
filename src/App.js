//Q1
import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import StyledButton from "./StyledButton";
import LifecycleDemo from "./LifecycleDemo";
import Counter from "./Counter"; // useState version
import CounterReducer from "./CounterReducer"; // useReducer version
import JokeFetcher from "./JokeFetcher";
import FocusInputForm from "./FocusInputForm";
import Parent from "./Parent";
import StateForm from "./StateForm";
import RefForm from "./RefForm";
const App = () => {
  const handleClick = () => {
    alert("Styled Button Clicked!");
  };
  const [showComponent, setShowComponent] = useState(true);
  const toggleComponent = () => {
    setShowComponent((prev) => !prev);
  };
  return (
    <div>
      <Header title="Welcome to the Joke App!" />
      <Content />
      <Footer />
      <h2>Styled Button Example</h2>
      <StyledButton label="Click Me" onClick={handleClick} />
      <h2>React Lifecycle Methods</h2>
      <button onClick={toggleComponent}>
        {showComponent ? "Unmount LifecycleDemo" : "Mount LifecycleDemo"}
      </button>

      {showComponent && <LifecycleDemo />}
      <Counter />
      <hr />
      <CounterReducer />
      <h2>useEffect Joke Fetcher</h2>
      <JokeFetcher />
      <h2>useRef Example</h2>
      <FocusInputForm />
      <h1>React Props Example</h1>
      <Parent />
      <StateForm />
      <hr />
      <RefForm />
    </div>
  );
};

export default App;
