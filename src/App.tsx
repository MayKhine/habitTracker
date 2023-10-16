import { useState } from "react"
import classes from "./App.module.css"
import { useHabitTracker } from "./hooks/useHabitTracker"
import { HabitTracker } from "./components/HabitTracker/HabitTracker"
import { HabitTrackerForm } from "./components/HabitTracker/HabitTrackerForm"
import { HabitTrackerProps } from "./components/HabitTracker/HabitTypes"
import { Modal } from "./components/UI/Modal"
import { Button } from "./components/UI/Button"
import { MainHeader } from "./components/Layout/MainHeader"
import { SideBar } from "./components/Layout/SideBar"
import { Content } from "./components/Layout/Content"
function App() {
  const { localStgHabitTrackerData, addHabitTrackerData } = useHabitTracker()

  const [showHabitTrackerForm, setShowHabitTrackerForm] = useState(false)

  const closeHabitTrackerFormHandler = () => {
    setShowHabitTrackerForm(false)
  }

  const createHabitTrackerHandler = (habitTrackerData: {
    title: string
    startDate: string
    endDate: string
  }) => {
    console.log("habitTrackerData: ", habitTrackerData)

    closeHabitTrackerFormHandler()

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
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <MainHeader />
      <div className={classes.mainContent}>
        <SideBar width="300px">
          <>
            <Button
              backgroundColor="pink"
              onButtonClick={() => {
                setShowHabitTrackerForm(true)
              }}
              text="Create"
            ></Button>
            {showHabitTrackerForm && (
              <Modal
                width="100%"
                height="100%"
                backgroundColor="pink"
                onCloseModal={closeHabitTrackerFormHandler}
              >
                <HabitTrackerForm
                  onCreateHabitTracker={createHabitTrackerHandler}
                />
              </Modal>
            )}
            <div>
              {localStgHabitTrackerData.map((item: HabitTrackerProps) => {
                return <HabitTracker width="300px" habitTracker={item} />
              })}
            </div>
          </>
        </SideBar>
        <Content>
          <div>helllooooooo thisi contnet data</div>
        </Content>
      </div>
    </div>
  )
}

export default App
