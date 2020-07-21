import React, { useEffect } from "react"

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
      <small>{dateFormatted.toLocaleUpperCase()}</small>
    </div>
  )
}

export default MyDate
