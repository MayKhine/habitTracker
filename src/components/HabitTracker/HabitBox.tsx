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
        minWidth: "1.5rem",
        minHeight: "1.5rem",
        maxWidth: "1.5rem",
        maxHeight: "1.5rem",
        backgroundColor: boxColor,
        borderColor: "black",
        margin: "3px",
        flex: 1,
        cursor: "pointer",
        flexShrink: "0",
      }}
    ></div>
  )
}
