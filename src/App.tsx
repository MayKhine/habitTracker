import { useState } from "react"
import classes from "./App.module.css"

import { useHabitTracker } from "./hooks/useHabitTracker"
import { HabitTracker } from "./components/HabitTracker"
import { HabitTrackerForm } from "./components/HabitTrackerForm"
import { HabitTrackerCreateForm } from "./UI/HabitTrackerCreateForm"
import { HabitTrackerProps } from "./components/HabitTypes"
function App() {
  // const [habitTrackerTitle, setHabitTrackerTitle] = useState("")
  // const [habitTrackerStartDate, setHabitTrackerStartDate] = useState("")
  // const [habitTracketEndDate, setHabitTrackerEndDate] = useState("")
  const { localStgHabitTrackerData, addHabitTrackerData } = useHabitTracker()

  const onHabitTrackerHandler = (habitTrackerData: HabitTrackerProps) => {
    console.log("habitTrackerData: ", habitTrackerData)
    if (habitTrackerData.title.length == 0) {
      return
    }

    // setHabitTrackerTitle("")
    // setHabitTrackerStartDate("")
    // setHabitTrackerEndDate("")
    addHabitTrackerData(
      habitTrackerData.title,
      habitTrackerData.startDate,
      habitTrackerData.endDate
    )
  }

  return (
    <div style={classes.body}>
      <HabitTrackerForm onHabitTrackerHandler={onHabitTrackerHandler} />

      <div>
        {localStgHabitTrackerData.map((item) => {
          return <HabitTracker title={item.title} />
        })}
      </div>
    </div>
  )
}

export default App
