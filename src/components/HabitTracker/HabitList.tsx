import { HabitProps } from "./HabitTypes"
import { Habit } from "./Habit"
export type HabitListProps = {
  trackerId: string
  habits: Array<HabitProps>
}

export const HabitList = (props: HabitListProps) => {
  return (
    <div>
      {props.habits.map((habit) => {
        return (
          <Habit key={habit.id} habit={habit} trackerId={props.trackerId} />
        )
      })}
    </div>
  )
}
