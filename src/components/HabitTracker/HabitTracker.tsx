import { dark3, light3 } from "../UI/ColorPalette"
import {
  AddHabitToHabitTrackerFN,
  HabitTrackerProps,
  UpdateHabitTrackerFN,
} from "./HabitTypes"
import { HabitTrackerHeader } from "../Layout/HabitTrackerHeader"
import { HabitList } from "./HabitList"

export type HabitTrackerDivProps = {
  habitTracker: Array<HabitTrackerProps>
  updateHabitTrackerData: UpdateHabitTrackerFN
  addHaibtToHabitTracker: AddHabitToHabitTrackerFN
}

export const HabitTracker = (props: HabitTrackerDivProps) => {
  if (props.habitTracker.length == 0) {
    return
  }

  const { id, title, startDate, endDate, habits } = props.habitTracker[0]
  return (
    <div
      style={{
        color: light3,
        flex: 1,
        maxWidth: "100%",
        display: "flex",
        width: "100%",
        flexDirection: "column",
        backgroundColor: dark3,
      }}
    >
      <HabitTrackerHeader
        title={title}
        startDate={startDate}
        endDate={endDate}
      />
      <HabitList
        habits={habits}
        trackerId={id}
        updateHabitTrackerData={props.updateHabitTrackerData}
        addHaibtToHabitTracker={props.addHaibtToHabitTracker}
        startDate={startDate}
        endDate={endDate}
      ></HabitList>
    </div>
  )
}
