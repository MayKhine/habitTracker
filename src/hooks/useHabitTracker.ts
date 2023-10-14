import { useState, useEffect } from "react"

export type HabitTrackerArr = Array<HabitTracker>

export type HabitTracker = {
  habitTrackerTitle: string
  startDate: string
  endDate: string
  // habits: Array<Habit>
}

export type Habit = {
  habitName: string
  achievement: Array<boolean>
}

const LOCAL_STORAGE_KEY = "useHabitTracker"

const getLocalStorageHabitTrackerData = () => {
  const localStorageData = localStorage.getItem(LOCAL_STORAGE_KEY)

  if (!localStorageData) {
    return []
  }
  return JSON.parse(localStorageData)
}

const setLocalStorageHabitTrackerData = (data: HabitTracker) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
}

export const useHabitTracker = () => {
  const [localStgHabitTrackerData, setLocalStgHabitTrackerData] = useState(
    getLocalStorageHabitTrackerData
  )

  useEffect(() => {
    console.log(
      "UseEffect is updated and this is current ",
      localStgHabitTrackerData
    )
    setLocalStorageHabitTrackerData(localStgHabitTrackerData)
  }, [localStgHabitTrackerData])

  const addHabitTrackerData = (
    title: string,
    startDate: string,
    endDate: string
  ) => {
    const newHabitTracker = { title, startDate, endDate }
    setLocalStgHabitTrackerData((prevData: Array<HabitTracker>) => [
      ...prevData,
      newHabitTracker,
    ])
  }
  console.log("About to return: ", localStgHabitTrackerData)
  return { localStgHabitTrackerData, addHabitTrackerData }
}
