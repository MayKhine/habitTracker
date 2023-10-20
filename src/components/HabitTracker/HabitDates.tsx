import { DateTime } from "luxon"
import { calculateTotalDays } from "../../hooks/useHabitTracker"
export type HabitDatesProps = {
  startDate: string
  endDate: string
}

export const HabitDates = ({ startDate, endDate }: HabitDatesProps) => {
  const dateArr: Array<Date> = []
  const days = calculateTotalDays(startDate, endDate)
  for (let i = 0; i <= days; i++) {
    const curDate = new Date(startDate)
    curDate.setDate(curDate.getDate() + i)
    dateArr.push(curDate)
    console.log(curDate.toLocaleDateString("mm/dd"))
  }

  return (
    <div>
      {dateArr.map((day) => {
        return <div> {day.toDateString()}</div>
      })}
    </div>
  )
}
