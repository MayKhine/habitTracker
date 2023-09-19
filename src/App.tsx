import { useState } from "react"
import "./App.css"
import { Habit } from "./components/Habits"
import { HabitsCanvas } from "./styledComponents/habitsCanvas"
function App() {
  const [habits, setHabits] = useState<Array<string>>([])
  const [habitText, setHabitText] = useState<string>("")
  const addHabit = () => {
    console.log("Add Habit is clicked", habits)
    setHabits((habits) => [...habits, habitText])
    setHabitText("")
  }
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
      <button onClick={addHabit}>Add</button>
      <div>
        {habits.map((e) => {
          return (
            <HabitsCanvas backgroundColor="red" width="50px" height="50px">
              <Habit habitText={e}></Habit>
            </HabitsCanvas>
          )
        })}
      </div>
    </>
  )
}

export default App
