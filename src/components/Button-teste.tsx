import { useState } from "react";

type ButtonProps = {
  //    text?: string;
  //    text?: string[];      //Tipar como um array de String, opcao 1
  //    text?: Array<string>; //Tipar como um array de String, opcao 2
  children?: string; //Tipar um componentes como children para utilizar como uma tag HTML
}

export function Button(props: ButtonProps) {
  return (
    <button>{props.children || `Clique aqui`}</button>
  )
}

export function ButtonIncrement() {
  // let counter = 0;
  const [counter, setCounter] = useState(0)

  function increment() {
    // counter ++; //uso com variavel let
    setCounter(counter + 1);
    // console.log(counter);
  }

  return (
    <button onClick={increment}>
      {counter}
    </button>
  )
}
