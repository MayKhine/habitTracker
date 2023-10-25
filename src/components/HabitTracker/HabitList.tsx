import {
  AddHabitToHabitTrackerFN,
  HabitProps,
  UpdateHabitTrackerFN,
} from "./HabitTypes"
import { Habit } from "./Habit"
import { HabitInput } from "./HabitInput"
import { HabitDates } from "./HabitDates"
export type HabitListProps = {
  trackerId: string
  habits: Array<HabitProps>
  updateHabitTrackerData: UpdateHabitTrackerFN
  addHaibtToHabitTracker: AddHabitToHabitTrackerFN
  startDate: string
  endDate: string
}

export const HabitList = ({
  trackerId,
  habits,
  updateHabitTrackerData,
  addHaibtToHabitTracker,
  startDate,
  endDate,
}: HabitListProps) => {
  return (
    <div style={{ flex: 1, maxWidth: "100%" }}>
      <HabitInput
        addHaibtToHabitTracker={addHaibtToHabitTracker}
        trackerId={trackerId}
      ></HabitInput>
      <HabitDates startDate={startDate} endDate={endDate}></HabitDates>

      {habits.map((habit) => {
        return (
          <Habit
            key={habit.id}
            habit={habit}
            trackerId={trackerId}
            updateHabitTrackerData={updateHabitTrackerData}
          />
        )
      })}
    </div>
  )
}
