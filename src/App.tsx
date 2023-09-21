import { useEffect, useState } from "react"
import "./App.css"
import { Habit } from "./components/Habits"
import { HabitsCanvas } from "./styledComponents/HabitsCanvas"
import { DateTime } from "luxon"
import { Week, useWeeklyHabits } from "./hooks/useWeeklyHabits"

function App() {
  const { weeks, addHabit } = useWeeklyHabits()
  const [habitText, setHabitText] = useState("")
  console.log("Weeks: ", weeks)

  const onClickAddHabit = () => {
    console.log("Add habit")
    addHabit(habitText)
    setHabitText("")
  }

  const curWeek: Week | undefined = weeks[weeks.length - 1]

  return (
    <>
      habit tracker
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
    </>
  )
}

export default App
