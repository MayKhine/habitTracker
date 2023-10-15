import { HabitTrackerProps } from "./HabitTypes"
import { CenterDiv } from "../UI/CenteredDiv"

export const HabitTracker = (props: HabitTrackerProps) => {
  return (
    <CenterDiv width="400px" height="30px" backgroundColor="pink">
      {props.title}
    </CenterDiv>
  )
}
