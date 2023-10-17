import { useState } from "react"
import { Button } from "./Button"
import { dark2, light2, light3 } from "./ColorPalette"
import { AddHabitToHabitTrackerFN } from "../HabitTracker/HabitTypes"

export type HabitInputProps = {
  addHaibtToHabitTracker: AddHabitToHabitTrackerFN
  trackerId: string
}
export const HabitInput = ({
  addHaibtToHabitTracker,
  trackerId,
}: HabitInputProps) => {
  const [habit, setHabit] = useState("")
  return (
    <div
      style={{
        paddingLeft: "1rem",
        paddingRight: "1rem",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        backgroundColor: light3,
        color: dark2,
      }}
    >
      <label>Habit: </label>
      <input
        value={habit}
        onChange={(event) => {
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
      <Button
        onButtonClick={() => {
          addHaibtToHabitTracker(habit, trackerId)
          setHabit("")
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
