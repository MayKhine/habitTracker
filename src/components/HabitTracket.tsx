import { HabitProps } from "./Habit"
export type HabitTracketProps = {
  startDate: Date
  endDate: Date
  habits: Array<HabitProps>
}
export const HabitTracket = () => {
  return <>Habit Tracker </>
}
