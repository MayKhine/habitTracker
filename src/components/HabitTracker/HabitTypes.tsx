export type HabitTrackerArr = Array<HabitTrackerProps>

export type HabitTrackerProps = {
  id: string
  title: string
  startDate: string
  endDate: string
  habits: Array<HabitProps>
}

export type HabitProps = {
  name: string
  achievements: Array<number>
}
