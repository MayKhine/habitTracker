import { HabitTrackerProps } from "./HabitTypes"
import { CenterDiv } from "../UI/CenteredDiv"

export type HTProps = {
  width: string
  habitTracker: HabitTrackerProps
}

export const HabitTracker = (props: HTProps) => {
  console.log(props, props.habitTracker)
  const { title, startDate, endDate } = props.habitTracker

  return (
    <CenterDiv width={props.width} height="30px" backgroundColor="pink">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>{title} </div>
        <div>{startDate} </div>
        <div>{endDate} </div>
      </div>
    </CenterDiv>
  )
}
