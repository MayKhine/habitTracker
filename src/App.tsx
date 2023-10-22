import { useEffect, useState } from "react"
import classes from "./App.module.css"
import { useHabitTracker } from "./hooks/useHabitTracker"
import { HabitTrackerList } from "./components/HabitTracker/HabitTrackerList"
import { HabitTrackerForm } from "./components/HabitTracker/HabitTrackerForm"
import { HabitTrackerProps } from "./components/HabitTracker/HabitTypes"
import { Modal } from "./components/UI/Modal"
import { Button } from "./components/UI/Button"
import { MainHeader } from "./components/Layout/MainHeader"
import { SideBar } from "./components/Layout/SideBar"
import { HabitTracker } from "./components/HabitTracker/HabitTracker"
import { light2 } from "./components/UI/ColorPalette"
import { DateTime } from "luxon"
function App() {
  const {
    localStgHabitTrackerData,
    addHabitTrackerData,
    updateHabitTrackerData,
    addHaibtToHabitTracker,
  } = useHabitTracker()

  const [showHabitTrackerForm, setShowHabitTrackerForm] = useState(false)
  const [showSelectedHabitTracker, setShowSelectedHabitTracker] =
    useState(false)

  const closeHabitTrackerFormHandler = () => {
    setShowHabitTrackerForm(false)
  }

  const createHabitTrackerHandler = (habitTrackerData: {
    title: string
    startDate: string
    endDate: string
  }) => {
    closeHabitTrackerFormHandler()
    addHabitTrackerData(
      habitTrackerData.title,
      habitTrackerData.startDate,
      habitTrackerData.endDate
    )
  }

  const [selectedHabitTrackerID, setSelectedHabitTrackerID] = useState<string>()
  const [selectedHabitTracker, setSelectedHabitTracker] =
    useState<Array<HabitTrackerProps>>()

  const habitTrackerSelectHandler = (title: string, id: string) => {
    console.log("Habit tracker is selected ", title, id)
    setShowSelectedHabitTracker(true)
    setSelectedHabitTrackerID(id)
  }

  useEffect(() => {
    const selectedTracker = localStgHabitTrackerData.filter(
      (item: HabitTrackerProps) => item.id == selectedHabitTrackerID
    )
    if (selectedTracker) {
      setSelectedHabitTracker(selectedTracker)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedHabitTrackerID, localStgHabitTrackerData])

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "red",
      }}
    >
      {showHabitTrackerForm && (
        <Modal
          // width="100%"
          // height="100%"
          backgroundColor={light2}
          onCloseModal={closeHabitTrackerFormHandler}
        >
          <HabitTrackerForm
            backgroundColor={light2}
            onCreateHabitTracker={createHabitTrackerHandler}
          />
        </Modal>
      )}
      <MainHeader />

      <div className={classes.mainContent}>
        <SideBar>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignSelf: "center",
                fontSize: "1.5rem",
                color: light2,
              }}
            >
              Habit Trackers
            </div>
            <Button
              backgroundColor={light2}
              onButtonClick={() => {
                setShowHabitTrackerForm(true)
              }}
              text="+ Add Habit Tracker"
            ></Button>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              {localStgHabitTrackerData.map((item: HabitTrackerProps) => {
                return (
                  <HabitTrackerList
                    key={item.id}
                    backgroundColor={light2}
                    habitTracker={item}
                    onHabitTrackerSelect={habitTrackerSelectHandler}
                  />
                )
              })}
            </div>
          </div>
        </SideBar>
        {showSelectedHabitTracker && (
          <HabitTracker
            habitTracker={selectedHabitTracker}
            updateHabitTrackerData={updateHabitTrackerData}
            addHaibtToHabitTracker={addHaibtToHabitTracker}
          />
        )}
      </div>
    </div>
  )
}

{
  /* <HabitTracker
habitTracker={selectedHabitTracker}
updateHabitTrackerData={updateHabitTrackerData}
addHaibtToHabitTracker={addHaibtToHabitTracker}
/> */
}

export default App
