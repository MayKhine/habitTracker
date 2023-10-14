import { HabitProps } from "./Habit"
export type HabitTrackerProps = {
  title: string
  startDate: string
  endDate: string
  // children: JSX.Element
}
export const HabitTracker = (props: HabitTrackerProps) => {
  console.log("In habit tracker: ", props, props.title)

  return <div>{props.title} </div>
}
