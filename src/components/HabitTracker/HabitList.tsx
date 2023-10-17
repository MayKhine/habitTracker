import { HabitProps, UpdateHabitTrackerFN } from "./HabitTypes"
import { Habit } from "./Habit"
export type HabitListProps = {
  trackerId: string
  habits: Array<HabitProps>
  updateHabitTrackerData: UpdateHabitTrackerFN
}

export const HabitList = (props: HabitListProps) => {
  return (
    <div>
      {props.habits.map((habit) => {
        return (
          <Habit
            key={habit.id}
            habit={habit}
            trackerId={props.trackerId}
            updateHabitTrackerData={props.updateHabitTrackerData}
          />
        )
      })}
    </div>
  )
}
