import { light3, dark2 } from "../UI/ColorPalette"

export type HabitTrackerHeaderProps = {
  title: string
  startDate: string
  endDate: string
}

export const HabitTrackerHeader = (props: HabitTrackerHeaderProps) => {
  return (
    <div
      style={{
        color: dark2,
        backgroundColor: light3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "1.3rem",
      }}
    >
      <div>{props.title}</div>
      <div>
        <div>
          {props.startDate} to {props.endDate}
        </div>
      </div>
    </div>
  )
}
