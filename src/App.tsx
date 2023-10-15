import { useState } from "react"
import "./App.css"
// import { Habit } from "./components/Habit"
// import { HabitsCanvas } from "./styledComponents/HabitsCanvas"
// import { DateTime } from "luxon"
// import { Week, useWeeklyHabits } from "./hooks/useWeeklyHabits"

import { useHabitTracker } from "./hooks/useHabitTracker"
import { HabitTracker } from "./components/HabitTracker"
function App() {
  const [habitTrackerTitle, setHabitTrackerTitle] = useState("")
  const [habitTrackerStartDate, setHabitTrackerStartDate] = useState("")
  const [habitTracketEndDate, setHabitTrackerEndDate] = useState("")
  const { localStgHabitTrackerData, addHabitTrackerData } = useHabitTracker()

  const onHabitTrackerHandler = () => {
    if (habitTrackerTitle.length == 0) {
      return
    }

    setHabitTrackerTitle("")
    setHabitTrackerStartDate("")
    setHabitTrackerEndDate("")
    addHabitTrackerData(
      habitTrackerTitle,
      habitTrackerStartDate,
      habitTracketEndDate
    )
  }

  return (
    <>
      <div>
        <div>
          <div>
            <label>Habit Tracker Name</label>
            <input
              onChange={(event) => {
                setHabitTrackerTitle(event.target.value)
              }}
              value={habitTrackerTitle}
            ></input>
          </div>
          <div>
            <label> Starting Date</label>
            <input
              type="date"
              onChange={(event) => {
                setHabitTrackerStartDate(event?.target.value)
              }}
              value={habitTrackerStartDate}
            ></input>
          </div>
          <div>
            <label> Ending Date</label>
            <input
              type="date"
              onChange={(event) => {
                setHabitTrackerEndDate(event?.target.value)
              }}
              value={habitTracketEndDate}
            ></input>
          </div>
        </div>
        <button onClick={onHabitTrackerHandler}>Create</button>
      </div>
      <div>
        {localStgHabitTrackerData.map((item) => {
          return <HabitTracker title={item.title} />
        })}
      </div>
    </>
  )
}

export default App
