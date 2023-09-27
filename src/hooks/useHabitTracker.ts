import { useState } from "react"

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

const LOCAL_STORAGE_KEY = "rjqa;oweifnawkegui"

const getLocalStorageHabitTrackerData = () => {
  const localStorageData = localStorage.getItem(LOCAL_STORAGE_KEY)
  if (!localStorageData) {
    return []
  }
  return JSON.parse(localStorageData)
}

export const useHabitTracker = () => {
  const [habitTrackerData, setHabitTrackerData] = useState(
    getLocalStorageHabitTrackerData
  )

  const addHabitTrackerData = (
    title: string,
    startDate: string,
    endDate: string
  ) => {
    console.log(
      "Add habit tracker data in useHabit tracker.ts",
      title,
      startDate,
      endDate
    )
  }

  return { habitTrackerData, addHabitTrackerData }
}
