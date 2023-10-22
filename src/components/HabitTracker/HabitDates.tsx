import { DateTime } from "luxon"
import { calculateTotalDays } from "../../hooks/useHabitTracker"
import { HabitBox } from "./HabitBox"
import { light1 } from "../UI/ColorPalette"
export type HabitDatesProps = {
  startDate: string
  endDate: string
}

export const HabitDates = ({ startDate, endDate }: HabitDatesProps) => {
  const dateArr: Array<DateTime> = []
  const days: number = calculateTotalDays(startDate, endDate)
  const luxonStartDate = DateTime.fromISO(startDate)

  for (let i = 0; i < days; i++) {
    const curDate = luxonStartDate.plus({ days: i })
    dateArr.push(curDate)
  }

  return (
    <div
      style={{
        maxWidth: "100%",
        display: "flex",
        flexWrap: "wrap",
        marginLeft: "182px",
      }}
    >
      {dateArr.map((day) => {
        return (
          <div
            key={day.toLocaleString(DateTime.DATE_SHORT)}
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              minWidth: "2rem",
              minHeight: "2rem",
              maxWidth: "2rem",
              maxHeight: "2rem",
              backgroundColor: light1,
              borderColor: "black",
              margin: "3px",
              flex: 1,
              flexShrink: "0",
              color: "black",
              fontSize: ".7rem",
              fontWeight: "900",
            }}
          >
            <div style={{ margin: "0px" }}>{day.toFormat("LLL")}</div>
            <div style={{ margin: "0px" }}>{day.toFormat("dd")}</div>
          </div>
        )
      })}
    </div>
  )
}
