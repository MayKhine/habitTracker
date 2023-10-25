import { useState } from "react"
import { Button } from "../UI/Button"
import { dark2, light2, light3 } from "../UI/ColorPalette"
import { AddHabitToHabitTrackerFN } from "./HabitTypes"
import { ErrorText } from "../UI/ErrorText"
export type HabitInputProps = {
  addHaibtToHabitTracker: AddHabitToHabitTrackerFN
  trackerId: string
}
export const HabitInput = ({
  addHaibtToHabitTracker,
  trackerId,
}: HabitInputProps) => {
  const [habit, setHabit] = useState("")
  const [error, setError] = useState(false)
  const checkHabitInput = () => {
    if (habit.trim().length > 0) {
      addHaibtToHabitTracker(habit, trackerId)
      setHabit("")
    } else {
      setError(true)
    }
  }
  return (
    <div
      style={{
        paddingLeft: "1rem",
        paddingRight: "1rem",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        backgroundColor: "gray",
        color: dark2,
        height: "70px",
        // width: "100%",
        paddingBottom: "5px",
      }}
    >
      <label>Habit: </label>
      <div
        style={{
          width: "100%",
          height: "2rem",
          paddingRight: "5px",
        }}
      >
        <input
          value={habit}
          onChange={(event) => {
            setError(false)
            setHabit(event?.target.value)
          }}
          style={{
            width: "100%",
            height: "2rem",
            borderRadius: "15px",
            border: "0px",
            paddingLeft: "10px",
          }}
        ></input>
        {error && <ErrorText text="Habit text cannot be empty." />}
      </div>
      <Button
        onButtonClick={() => {
          checkHabitInput()
        }}
        backgroundColor={light2}
        text="Add"
        width="4rem"
        fontSize="1rem"
        height="2rem"
      />
    </div>
  )
}
