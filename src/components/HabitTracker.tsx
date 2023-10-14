import { HabitProps } from "./Habit"
export type HabitTracketProps = {
  startDate: Date
  endDate: Date
  habits: Array<HabitProps>
}
export const HabitTracker = () => {
  return <>Habit Tracker </>
}
