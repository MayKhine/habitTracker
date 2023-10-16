import { dark1, light3 } from "../UI/ColorPalette"
import { HabitTrackerProps } from "./HabitTypes"
import { HabitTrackerHeader } from "../Layout/HabitTrackerHeader"

export type HabitTrackerDivProps = {
  habitTracker: Array<HabitTrackerProps>
}

export const HabitTracker = (props: HabitTrackerDivProps) => {
  if (props.habitTracker.length == 0) {
    return
  }

  const { id, title, startDate, endDate } = props.habitTracker[0]
  console.log("Content: ", id, title, startDate, endDate)
  return (
    <div style={{ backgroundColor: dark1, color: light3, flexGrow: "1" }}>
      <HabitTrackerHeader
        title={title}
        startDate={startDate}
        endDate={endDate}
      />
    </div>
  )
}
