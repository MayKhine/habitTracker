import { useState, useEffect } from "react"

export type HabitTrackerArr = Array<HabitTracker>

export type HabitTracker = {
  habitTrackerTitle: string
  startDate: string
  endDate: string
  habits: Array<Habit>
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

const setLocalStorageHabitTrackerData = (data) => {
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
  }, [localStgHabitTrackerData])

  const addHabitTrackerData = (
    title: string,
    startDate: string,
    endDate: string
  ) => {
    const newHabitTracker = { title, startDate, endDate }
    console.log(
      "UseHabitTracker.ts:  ",
      localStgHabitTrackerData,
      "and New data: ",
      title
    )

    setLocalStgHabitTrackerData((prevData) => [...prevData, newHabitTracker])

    console.log("What is current habit data: ", localStgHabitTrackerData)
    setLocalStorageHabitTrackerData(localStgHabitTrackerData)
  }
  return { localStgHabitTrackerData, addHabitTrackerData }
}
