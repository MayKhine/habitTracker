import { useState } from "react"
import { UpdateHabitTrackerFN } from "../HabitTracker/HabitTypes"
export type BoxProps = {
  updateHabitTrackerData: UpdateHabitTrackerFN
  value: number
  index: number
  habitId: string
  trackerId: string
}

export const Box = ({
  value,
  index,
  habitId,
  trackerId,
  updateHabitTrackerData,
}: BoxProps) => {
  const [boxColor, setBoxColor] = useState(value == 1 ? "red" : "pink")
  return (
    <div
      onClick={() => {
        setBoxColor("red")
        updateHabitTrackerData(value == 0 ? 1 : 0, index, habitId, trackerId)
      }}
      style={{
        width: "20px",
        height: "20px",
        backgroundColor: boxColor,
        borderColor: "black",
        margin: "3px",
      }}
    ></div>
  )
}
