import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/header.component"

function App(props) {
    const message = "This is Hello from Moby"
  return (
    <>
      <Header />
      <h1>{message}</h1>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
