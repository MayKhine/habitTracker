import { HabitTrackerProps } from "./HabitTypes"
import { CenterDiv } from "../UI/CenteredDiv"
import { Button } from "../UI/Button"
import { light2 } from "../UI/ColorPalette"

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
    // <CenterDiv
    //   width="300px"
    //   height="30px"
    //   backgroundColor={props.backgroundColor}
    //   onClick={habitTrackerSelectHandler}
    // >
    //   <div
    //     style={{
    //       display: "flex",
    //       flexDirection: "row",
    //       justifyContent: "space-between",
    //     }}
    //   >
    //     <div>{title} </div>
    //   </div>
    // </CenterDiv>

    <Button
      backgroundColor={light2}
      text={title}
      onButtonClick={habitTrackerSelectHandler}
    ></Button>
  )
}
