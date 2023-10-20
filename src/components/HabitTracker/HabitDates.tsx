import { DateTime } from "luxon"
import { calculateTotalDays } from "../../hooks/useHabitTracker"
export type HabitDatesProps = {
  startDate: string
  endDate: string
}

export const HabitDates = ({ startDate, endDate }: HabitDatesProps) => {
  const dateArr: Array<DateTime> = []
  const days: number = calculateTotalDays(startDate, endDate)
  // for (let i = 0; i <= days; i++) {
  // const curDate = new Date(startDate)
  // curDate.setDate(curDate.getDate() + i)
  // dateArr.push(curDate)

  // }

  const luxonStartDate = DateTime.fromISO(startDate)
  for (let i = 0; i <= days; i++) {
    const curDate = luxonStartDate.plus({ days: i })
    dateArr.push(curDate)
    console.log("CurDate: ", curDate)
  }

  return (
    <div>
      {dateArr.map((day) => {
        return (
          <div key={day.toLocaleString(DateTime.DATE_SHORT)}>
            {day.toFormat("LL/dd")}
          </div>
        )
      })}
    </div>
  )
}
