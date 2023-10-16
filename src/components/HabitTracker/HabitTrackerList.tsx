import { HabitTrackerProps } from "./HabitTypes"
import { CenterDiv } from "../UI/CenteredDiv"

export type HabitTrackerListProps = {
  habitTracker: HabitTrackerProps
  backgroundColor: string
  onHabitTrackerSelect: (title: string, id: string) => void
}

export const HabitTrackerList = (props: HabitTrackerListProps) => {
  const { id, title, startDate, endDate } = props.habitTracker

  const habitTrackerSelectHandler = () => {
    props.onHabitTrackerSelect(title, id)
  }
  return (
    <CenterDiv
      height="30px"
      backgroundColor={props.backgroundColor}
      onClick={habitTrackerSelectHandler}
    >
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
