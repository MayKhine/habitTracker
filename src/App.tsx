import { useEffect, useState } from "react"
import "./App.css"
import { Habit } from "./components/Habits"
import { HabitsCanvas } from "./styledComponents/HabitsCanvas"
import { DateTime } from "luxon"
function App() {
  const [habitTracker, setHabitTracker] = useState<JSON>(
    JSON.parse(localStorage.getItem("habitTracker")) || {}
  )
  const [habits, setHabits] = useState<Array<string>>([])
  const [habitText, setHabitText] = useState<string>("")

  const now = DateTime.now()
  const weekNumber = now.weekNumber
  const weekDay = now.weekday

  // console.log("HABIT TRACKER FROM LOCALSTORAGE: ", habitTracker)

  const addHabit = () => {
    console.log("Add Habit is clicked", habits)
    //get the current week
    setHabits((habits) => [...habits, habitText])
    setHabitText("")
    // go to current  week no and add it in the habits list
    const curWeekHabitList =
      habitTracker["weekNo"] == weekNumber ? habitTracker["habitList"] : []

    const newHabit = {
      name: habitText,
      achievement: [0, 0, 0, 0, 0, 0, 0],
    }

    curWeekHabitList.push(newHabit)
    console.log(
      "updatedWeekHabitList , ",
      curWeekHabitList,
      habitTracker["habitList"]
    )

    // const newHabitTracker =
    //   habitTracker["weekNo"] == weekNumber ? habitTracker : {}
    // console.log("newHabitTracker: ", newHabitTracker)
    // newHabitTracker.habitList = curWeekHabitList

    //get cur week's habit list
    // setHabitTracker((habitTracker) => {
    //   curWeekHabitList
    // })
  }

  //set up the habits for the first time then commented it out
  useEffect(() => {
    console.log("Use Efffect is called")
    // localStorage.setItem("habitTracker", JSON.stringify(habitTracker))

    localStorage.setItem(
      "habitTracker",
      JSON.stringify({
        weekNo: 38,
        habitList: [
          { name: "study", achievement: [1, 1, 1, 0, 0, 0, 0] },
          { name: "exercise", achievement: [1, 1, 1, 0, 0, 0, 0] },
        ],
      })
    )
  }, [habitTracker])

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
