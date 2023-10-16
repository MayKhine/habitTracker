import { useState } from "react"
import classes from "./App.module.css"

import { useHabitTracker } from "./hooks/useHabitTracker"
import { HabitTracker } from "./components/HabitTracker"
import { HabitTrackerForm } from "./components/HabitTrackerForm"
import { HabitTrackerProps } from "./components/HabitTypes"
function App() {
  // const [habitTrackerTitle, setHabitTrackerTitle] = useState("")
  // const [habitTrackerStartDate, setHabitTrackerStartDate] = useState("")
  // const [habitTracketEndDate, setHabitTrackerEndDate] = useState("")
  const { localStgHabitTrackerData, addHabitTrackerData } = useHabitTracker()

  const createHabitTrackerHandler = (habitTrackerData: {
    title: string
    startDate: string
    endDate: string
  }) => {
    console.log("habitTrackerData: ", habitTrackerData)
    if (habitTrackerData.title.length == 0) {
      return
    }

    addHabitTrackerData(
      habitTrackerData.title,
      habitTrackerData.startDate,
      habitTrackerData.endDate
    )
  }

  return (
    <div style={classes.body}>
      <HabitTrackerForm onCreateHabitTracker={createHabitTrackerHandler} />

      <div>
        {localStgHabitTrackerData.map((item: HabitTrackerProps) => {
          return <HabitTracker habitTracker={item} />
        })}
      </div>
    </div>
  )
}

export default App
