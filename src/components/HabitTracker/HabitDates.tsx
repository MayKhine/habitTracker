export type HabitDatesProps = {
  startDate: string
  endDate: string
}

export const HabitDates = ({ startDate, endDate }: HabitDatesProps) => {
  // create a date array from start date to end date
  startDate = new Date(startDate)
  endDate = new Date(endDate)
  const dateArr = []

  // for (let i = startDate; i <= endDate; i++) {
  //   dateArr.push(i)
  // }

  console.log("dateArr: ", dateArr)
  return <div>Habit Date</div>
}
