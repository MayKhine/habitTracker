import { useState } from "react"
import { HabitTrackerFormDiv } from "../UI/HabitTrackerFormDiv"
import { Button } from "../UI/Button"
export type HabitTrackerFormProp = {
  onCreateHabitTracker: (formData: {
    title: string
    startDate: string
    endDate: string
  }) => void
}

export const HabitTrackerForm = (props: HabitTrackerFormProp) => {
  const [habitTrackerTitle, setHabitTrackerTitle] = useState("")
  const [habitTrackerStartDate, setHabitTrackerStartDate] = useState("")
  const [habitTracketEndDate, setHabitTrackerEndDate] = useState("")

  return (
    <HabitTrackerFormDiv>
      <div>
        <div>
          <label>Habit Tracker Name</label>
          <input
            onChange={(event) => {
              setHabitTrackerTitle(event.target.value)
            }}
            value={habitTrackerTitle}
          ></input>
        </div>
        <div>
          <label> Starting Date</label>
          <input
            type="date"
            onChange={(event) => {
              setHabitTrackerStartDate(event?.target.value)
            }}
            value={habitTrackerStartDate}
          ></input>
        </div>
        <div>
          <label> Ending Date</label>
          <input
            type="date"
            onChange={(event) => {
              setHabitTrackerEndDate(event?.target.value)
            }}
            value={habitTracketEndDate}
          ></input>
        </div>
      </div>
      <Button
        onButtonClick={() => {
          setHabitTrackerTitle("")
          setHabitTrackerStartDate("")
          setHabitTrackerEndDate("")
          props.onCreateHabitTracker({
            title: habitTrackerTitle,
            startDate: habitTrackerStartDate,
            endDate: habitTracketEndDate,
          })
        }}
        text="Create"
        backgroundColor="pink"
      />
    </HabitTrackerFormDiv>
  )
}
