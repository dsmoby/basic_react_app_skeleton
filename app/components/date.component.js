import React, { useEffect } from "react"

function sentenceCase(str) {
  if (str === null || str === "") return false
  else str = str.toString()

  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

function MyDate(props) {
  const date = new Date()
  const dateFormatted = date.toLocaleDateString("sv-SV", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  })

  return (
    <div>
      <small>{sentenceCase(dateFormatted)}</small>
    </div>
  )
}

export default MyDate
