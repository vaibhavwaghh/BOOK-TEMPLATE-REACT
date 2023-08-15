import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { arr } from "./arr.js";
import BookList from "./Hook";
function MyComponent() {
  const arr3 = arr.map(v);

  function v(item, index) {
    return <BookList {...item} number={index} />;
  }
  return (
    <>
      <header className="header">Amazon best seller Books</header>

      <section className="m">{arr3}</section>
    </>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<MyComponent />);
