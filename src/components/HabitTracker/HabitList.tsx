import {
  AddHabitToHabitTrackerFN,
  HabitProps,
  UpdateHabitTrackerFN,
} from "./HabitTypes"
import { Habit } from "./Habit"
import { HabitInput } from "../UI/HabitInput"
export type HabitListProps = {
  trackerId: string
  habits: Array<HabitProps>
  updateHabitTrackerData: UpdateHabitTrackerFN
  addHaibtToHabitTracker: AddHabitToHabitTrackerFN
}

export const HabitList = ({
  trackerId,
  habits,
  updateHabitTrackerData,
  addHaibtToHabitTracker,
}: HabitListProps) => {
  return (
    <div>
      <HabitInput
        addHaibtToHabitTracker={addHaibtToHabitTracker}
        trackerId={trackerId}
      ></HabitInput>

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
