import { HabitProps } from "./Habit"
export type HabitTrackerProps = {
  title: string
  startDate: string
  endDate: string
  // children: JSX.Element
}
export const HabitTracker = (props: HabitTrackerProps) => {
  return <div>{props.title} </div>
}
