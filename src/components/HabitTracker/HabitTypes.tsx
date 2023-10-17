export type HabitTrackerArr = Array<HabitTrackerProps>

export type HabitTrackerProps = {
  id: string
  title: string
  startDate: string
  endDate: string
  habits: Array<HabitProps>
}

export type HabitProps = {
  id: string
  name: string
  achievements: Array<number>
}

export type UpdateHabitTrackerFN = (
  value: number,
  index: number,
  habitId: string,
  trackerId: string
) => void
