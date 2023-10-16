import { useState, useEffect } from "react"
import { HabitTrackerProps } from "../components/HabitTracker/HabitTypes"

const LOCAL_STORAGE_KEY = "useHabitTracker"

const getLocalStorageHabitTrackerData = () => {
  const localStorageData = localStorage.getItem(LOCAL_STORAGE_KEY)

  if (!localStorageData) {
    return []
  }
  return JSON.parse(localStorageData)
}

const setLocalStorageHabitTrackerData = (data: HabitTrackerProps) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
}

export const useHabitTracker = () => {
  const [localStgHabitTrackerData, setLocalStgHabitTrackerData] = useState(
    getLocalStorageHabitTrackerData
  )

  useEffect(() => {
    setLocalStorageHabitTrackerData(localStgHabitTrackerData)
  }, [localStgHabitTrackerData])

  const addHabitTrackerData = (
    title: string,
    startDate: string,
    endDate: string
  ) => {
    const newHabitTracker = { id: Math.random(), title, startDate, endDate }
    setLocalStgHabitTrackerData((prevData: Array<HabitTrackerProps>) => [
      ...prevData,
      newHabitTracker,
    ])
  }
  return { localStgHabitTrackerData, addHabitTrackerData }
}

export const getHabitTrackerByID = () => {
  return {}
}
