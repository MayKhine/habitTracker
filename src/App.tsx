import { useState } from "react"
import classes from "./App.module.css"

import { useHabitTracker } from "./hooks/useHabitTracker"
import { HabitTracker } from "./components/HabitTracker"
import { HabitTrackerForm } from "./components/HabitTrackerForm"
import { HabitTrackerProps } from "./components/HabitTypes"
import { Modal } from "./UI/Modal"
import { Button } from "./UI/Button"

function App() {
  // const [habitTrackerTitle, setHabitTrackerTitle] = useState("")
  // const [habitTrackerStartDate, setHabitTrackerStartDate] = useState("")
  // const [habitTracketEndDate, setHabitTrackerEndDate] = useState("")
  const { localStgHabitTrackerData, addHabitTrackerData } = useHabitTracker()

  const [showHabitTrackerForm, setShowHabitTrackerForm] = useState(false)
  const createHabitTrackerHandler = (habitTrackerData: {
    title: string
    startDate: string
    endDate: string
  }) => {
    console.log("habitTrackerData: ", habitTrackerData)
    //remove modal
    setShowHabitTrackerForm(false)
    if (habitTrackerData.title.length == 0) {
      return
    }

    addHabitTrackerData(
      habitTrackerData.title,
      habitTrackerData.startDate,
      habitTrackerData.endDate
    )
  }

  return (
    <div style={classes.body}>
      <Button
        backgroundColor="pink"
        onButtonClick={() => {
          setShowHabitTrackerForm(true)
        }}
        text="Create"
      ></Button>
      {showHabitTrackerForm && (
        <Modal backgroundColor="pink">
          <HabitTrackerForm onCreateHabitTracker={createHabitTrackerHandler} />
        </Modal>
      )}

      <div>
        {localStgHabitTrackerData.map((item: HabitTrackerProps) => {
          return <HabitTracker habitTracker={item} />
        })}
      </div>
    </div>
  )
}

export default App
