import { useEffect, useState } from "react"
import "./App.css"
import { Habit } from "./components/Habit"
import { HabitsCanvas } from "./styledComponents/HabitsCanvas"
import { DateTime } from "luxon"
import { Week, useWeeklyHabits } from "./hooks/useWeeklyHabits"

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
  const [habitTrackerStartDate, setHabitTrackerStartDate] = useState()
  const [habitTracketEndDate, setHabitTrackerEndDate] = useState()
  const onHabitTrackerHandler = () => {
    console.log(
      "Create a new habit tracker",
      habitTrackerTitle,
      habitTrackerStartDate,
      habitTracketEndDate
    )

    setHabitTrackerTitle("")
    setHabitTrackerStartDate("")
    setHabitTrackerEndDate("")
  }
  return (
    <>
      habit tracker
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
          <input
            onChange={(event) => {
              setHabitTrackerTitle(event.target.value)
            }}
            value={habitTrackerTitle}
          ></input>
          <input
            type="date"
            onChange={(event) => {
              console.log("Date is changed", event?.target.value)
              setHabitTrackerStartDate(event?.target.value)
            }}
            value={habitTrackerStartDate}
          ></input>
          <input
            type="date"
            onChange={(event) => {
              setHabitTrackerEndDate(event?.target.value)
            }}
            value={habitTracketEndDate}
          ></input>
        </div>
        <button onClick={onHabitTrackerHandler}>Create Habit Tracket</button>
      </div>
    </>
  )
}

export default App
