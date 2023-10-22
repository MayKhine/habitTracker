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
  const [habitTrackerEndDate, setHabitTrackerEndDate] = useState("")

  const [titleValid, setTitleValid] = useState(true)
  const [startDateValid, setStartDateValid] = useState(true)
  const [endDateValid, setEndDatevalid] = useState(true)
  const [error, setError] = useState(false)
  const [habitTrackerInputValid, setHabitTrackerInputValid] = useState(false)
  const checkHabitTrackerInputForm = () => {
    console.log("wht is date: ", habitTrackerStartDate, habitTrackerEndDate)
    habitTrackerTitle.length <= 0 ? setTitleValid(false) : setTitleValid(true)
    habitTrackerStartDate.length <= 0
      ? setStartDateValid(false)
      : setStartDateValid(true)
    habitTrackerEndDate.length <= 0
      ? setEndDatevalid(false)
      : setEndDatevalid(true)

    const luxonStartDate = DateTime.fromISO(habitTrackerStartDate)
    const luxonEndDate = DateTime.fromISO(habitTrackerEndDate)
    const difdate = luxonEndDate.diff(luxonStartDate, ["days"]).toObject()
    console.log(
      "difDays:",
      difdate,
      "titlevalid",
      titleValid,
      "startDateValid: ",
      startDateValid,
      "enddateValid",
      endDateValid
    )

    if (difdate.days >= 1 && difdate.days <= 31) {
      setHabitTrackerInputValid(true)
      setHabitTrackerTitle("")
      setHabitTrackerStartDate("")
      setHabitTrackerEndDate("")
      return
    } else {
      setError("Please pick days between 1 and 31. ")
      setHabitTrackerInputValid(false)
      return
    }
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
            {!titleValid && <p>Name cannot be empty.</p>}
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
            {!startDateValid && <p>Date cannot be empty.</p>}
          </div>
          <div>
            <label> Ending Date</label>
            <input
              type="date"
              onChange={(event) => {
                setHabitTrackerEndDate(event?.target.value)
              }}
              value={habitTrackerEndDate}
            ></input>
            {!endDateValid && <p>Date cannot be empty.</p>}
          </div>
        </div>
        {error && <div> {error}</div>}
        <Button
          onButtonClick={() => {
            checkHabitTrackerInputForm()
            habitTrackerInputValid &&
              props.onCreateHabitTracker({
                title: habitTrackerTitle,
                startDate: habitTrackerStartDate,
                endDate: habitTrackerEndDate,
              })
          }}
          text="Create"
          backgroundColor="pink"
        />
      </div>
    </HabitTrackerFormDiv>
  )
}
