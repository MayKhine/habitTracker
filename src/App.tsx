import { useState } from "react"
import "./App.css"
// import { Habit } from "./components/Habit"
// import { HabitsCanvas } from "./styledComponents/HabitsCanvas"
import { DateTime } from "luxon"
// import { Week, useWeeklyHabits } from "./hooks/useWeeklyHabits"

import { useHabitTracker } from "./hooks/useHabitTracker"
function App() {
  // const { weeks, addHabit } = useWeeklyHabits()
  // const [habitText, setHabitText] = useState("")
  // console.log("Weeks: ", weeks)

  // const onClickAddHabit = () => {
  //   console.log("Add habit")
  //   addHabit(habitText)
  //   setHabitText("")
  // }

  // const curWeek: Week | undefined = weeks[weeks.length - 1]

  const [habitTrackerTitle, setHabitTrackerTitle] = useState("")
  const [habitTrackerStartDate, setHabitTrackerStartDate] = useState("")
  const [habitTracketEndDate, setHabitTrackerEndDate] = useState("")
  const { localStorageHabitTrackerData, addHabitTrackerData } =
    useHabitTracker()

  const onHabitTrackerHandler = () => {
    if (habitTrackerTitle.length == 0) {
      return
    }
    console.log(
      "IN APP: Create a new habit tracker",
      habitTrackerTitle,
      habitTrackerStartDate,
      habitTracketEndDate
    )

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
      {/* <div>
        <input
          type="text"
          value={habitText}
          onChange={(e) => {
            setHabitText(e.target.value)
          }}
        ></input>
        <button onClick={onClickAddHabit}>Add</button>
        <div>
          {curWeek?.habitList.map((habit) => {
            return (
              <HabitsCanvas backgroundColor="red" width="50px" height="50px">
                <Habit habitText={habit.name}></Habit>
              </HabitsCanvas>
            )
          })}
        </div>
      </div> */}
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
    </>
  )
}

export default App
