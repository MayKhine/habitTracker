import { useState } from "react"
import { HabitTrackerFormDiv } from "../UI/HabitTrackerFormDiv"
import { Button } from "../UI/Button"
import { dateLength } from "../Util/Functions"
import { ErrorText } from "../UI/ErrorText"
export type HabitTrackerFormProp = {
  backgroundColor: string
  onCreateHabitTracker: (formData: {
    title: string
    startDate: string
    endDate: string
  }) => void
}

export const HabitTrackerForm = (props: HabitTrackerFormProp) => {
  const [habitTrackerTitle, setHabitTrackerTitle] = useState("")
  const [habitTrackerStartDate, setHabitTrackerStartDate] = useState("")
  const [habitTrackerEndDate, setHabitTrackerEndDate] = useState("")

  const [titleValid, setTitleValid] = useState(true)
  const [startDateValid, setStartDateValid] = useState(true)
  const [endDateValid, setEndDatevalid] = useState(true)

  const [error, setError] = useState(false)

  //check habit tracker input form
  const checkHabitTrackerInputForm = () => {
    const checkTitle = habitTrackerTitle.trim().length > 0
    const checkStartDate = habitTrackerStartDate.length > 0
    const checkEndDate = habitTrackerEndDate.length > 0

    setTitleValid(checkTitle)
    setStartDateValid(checkStartDate)
    setEndDatevalid(checkEndDate)

    if (checkTitle && checkStartDate && checkEndDate) {
      const days = dateLength(habitTrackerStartDate, habitTrackerEndDate) || 0
      console.log("days: ", days)
      if (days >= 1 && days <= 5) {
        props.onCreateHabitTracker({
          title: habitTrackerTitle,
          startDate: habitTrackerStartDate,
          endDate: habitTrackerEndDate,
        })
      } else {
        setError(true)
        console.log("Error with dates: ")
      }
    }
  }
  return (
    <HabitTrackerFormDiv>
      <div style={{ height: "330px" }}>
        <div>
          <div style={{ height: "80px" }}>
            <label
              style={{
                display: "block",
              }}
            >
              Habit Tracker Name
            </label>
            <input
              style={{
                width: "300px",
                height: "30px",
                borderRadius: "10px",
                border: "0px",
                padding: "3px",
              }}
              onChange={(event) => {
                setTitleValid(true)
                setError(false)
                setHabitTrackerTitle(event.target.value)
              }}
              value={habitTrackerTitle}
            ></input>
            {!titleValid && <ErrorText text="Name cannot be empty." />}
          </div>
          <div style={{ height: "80px" }}>
            <label
              style={{
                display: "block",
              }}
            >
              Starting Date
            </label>
            <input
              style={{
                width: "150px",
                height: "30px",
                borderRadius: "10px",
                border: "0px",
                padding: "3px",
              }}
              type="date"
              onChange={(event) => {
                setStartDateValid(true)
                setError(false)
                setHabitTrackerStartDate(event?.target.value)
              }}
              value={habitTrackerStartDate}
            ></input>
            {!startDateValid && <ErrorText text="Date cannot be empty." />}
          </div>
          <div style={{ height: "80px" }}>
            <label
              style={{
                display: "block",
              }}
            >
              Ending Date
            </label>
            <input
              style={{
                width: "150px",
                height: "30px",
                borderRadius: "10px",
                border: "0px",
                padding: "3px",
              }}
              type="date"
              onChange={(event) => {
                setEndDatevalid(true)
                setError(false)
                setHabitTrackerEndDate(event?.target.value)
              }}
              value={habitTrackerEndDate}
            ></input>
            {!endDateValid && <ErrorText text="Date cannot be empty." />}
          </div>
        </div>
        <div style={{ height: "20px", paddingBottom: "10px" }}>
          {error && (
            <ErrorText text="Please select tracker dates with a length ranging from 1 to 5." />
          )}
        </div>
        <Button
          onButtonClick={() => {
            checkHabitTrackerInputForm()
          }}
          text="Create"
          backgroundColor="pink"
        />
      </div>
    </HabitTrackerFormDiv>
  )
}
