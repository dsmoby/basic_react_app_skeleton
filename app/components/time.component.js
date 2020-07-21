import React, { useEffect } from "react"


function MyTime(props) {
  const date = new Date()
  const timeFormatted = date.toLocaleTimeString("sv-SV", {
    timeZone: "Europe/Stockholm",
    hour24: true,
    hours: "numeric",
    minutes: "2-digits",
    seconds: "2-digits"
  })

  return (
    <div>
      <small>{timeFormatted}</small>
    </div>
  )
}

export default MyTime
