import { useState } from "react"
import { Button } from "./Button"
import { light2 } from "./ColorPalette"
export const HabitInput = () => {
  const [habit, setHabit] = useState("")
  return (
    <div
      style={{
        marginLeft: "1rem",
        marginRight: "1rem",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
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
          console.log("add habit to local stg", habit)
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
