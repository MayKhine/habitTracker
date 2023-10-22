import { useState } from "react"
import { HabitTrackerFormDiv } from "../UI/HabitTrackerFormDiv"
import { DateTime } from "luxon"
import { Button } from "../UI/Button"
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
  const [habitTracketEndDate, setHabitTrackerEndDate] = useState("")
  const [habitTrackerInputValid, setHabitTrackerInputValid] = useState(false)
  const [error, setError] = useState("")

  const end = DateTime.fromISO("2017-03-13")
  const start = DateTime.fromISO("2017-02-11")
  const difdate = end.diff(start, ["months", "days"]).toObject()

  console.log("difdate: ", difdate)
  const checkHabitTrackerInputForm = () =>
    // habitTrackerTitle,
    // habitTrackerStartDate,
    // habitTracketEndDate
    {
      if (habitTrackerTitle == null) {
        setError("Habit Tracker Title cannot be empty.")
        setHabitTrackerInputValid(false)
      }

      const luxonStartDate = DateTime.fromISO(habitTrackerStartDate)
      const luxonEndDate = DateTime.fromISO(habitTracketEndDate)
      const difdate = luxonEndDate
        .diff(luxonStartDate, ["months", "days"])
        .toObject()
      console.log("luxondate: ", difdate)
    }

  return (
    <HabitTrackerFormDiv>
      <div>
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
            checkHabitTrackerInputForm()
            props.onCreateHabitTracker({
              title: habitTrackerTitle,
              startDate: habitTrackerStartDate,
              endDate: habitTracketEndDate,
            })
          }}
          text="Create"
          backgroundColor="pink"
        />
      </div>
    </HabitTrackerFormDiv>
  )
}
