import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/header.component"
//import "./index.css"

function App(props) {
  const message = "This is Hello from Moby"
  return (
    <div className="container">
      <Header />
      <h1>{message}</h1>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))

if (module.hot) {
  module.hot.accept()
}
