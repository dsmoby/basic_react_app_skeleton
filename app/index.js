import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/header.component"
import Footer from "./components/footer.component"
import Content from "./components/content.component"
//import "./index.css"

function App(props) {
  const message = "This is Hello from Moby"
  return (
    <div className="container">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))

if (module.hot) {
  module.hot.accept()
}
