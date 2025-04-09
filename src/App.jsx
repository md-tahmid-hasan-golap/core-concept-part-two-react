import "./App.css";

function App() {
  //   function handleClick() {
  //     alert("I Am Clicked");
  //   }

  //   const clicked3 = () => {
  //     alert("i am clicked 3");
  //   };

  const clicked = (num) => {
    const newNum = num + 2;
    alert(newNum);
  };
  return (
    <>
      <h1>Vite + React</h1>
      {/* <button onClick="handleClick">click me</button> */}
      {/* <button onClick={handleClick}>click me</button>
      <button
        onClick={function clicked2() {
          alert("clicked");
        }}
      >
        click me
      </button>
      <button onClick={clicked3}>click me</button>
      <button onClick={() => alert("Hi")}>click me</button> */}

      <button onClick={() => clicked(3)}>Click</button>
    </>
  );
}

export default App;
