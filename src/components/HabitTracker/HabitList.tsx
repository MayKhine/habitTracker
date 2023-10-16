import { HabitProps } from "./HabitTypes"

export type HabitListProps = {
  habitList: Array<HabitProps>
}

export const HabitList = (props: HabitListProps) => {
  return <div>Habit List </div>
}
