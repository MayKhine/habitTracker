import { UpdateHabitTrackerFN } from "./HabitTypes"
import { light1, light3 } from "../UI/ColorPalette"

export type HabitBoxProps = {
  updateHabitTrackerData: UpdateHabitTrackerFN
  value: number
  index: number
  habitId: string
  trackerId: string
}

export const HabitBox = ({
  value,
  index,
  habitId,
  trackerId,
  updateHabitTrackerData,
}: HabitBoxProps) => {
  const boxColor = value == 0 ? light1 : light3
  return (
    <div
      onClick={() => {
        updateHabitTrackerData(value == 0 ? 1 : 0, index, habitId, trackerId)
      }}
      style={{
        width: "1.5rem",
        height: "1.5rem",
        backgroundColor: boxColor,
        borderColor: "black",
        margin: "3px",
      }}
    ></div>
  )
}
