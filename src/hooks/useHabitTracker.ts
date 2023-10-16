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

  const calculateTotalDays = (startDate: string, endDate: string) => {
    const date1 = new Date(startDate)
    const date2 = new Date(endDate)
    const diffTime = Math.abs(date2 - date1) + 1
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }
  useEffect(() => {
    setLocalStorageHabitTrackerData(localStgHabitTrackerData)
  }, [localStgHabitTrackerData])

  const addHabitTrackerData = (
    title: string,
    startDate: string,
    endDate: string
  ) => {
    const defaultHabitAchievements: Array<number> = []

    const totalTrackingDays = calculateTotalDays(startDate, endDate)

    for (let i = 0; i < totalTrackingDays; i++) {
      if (i == 0) {
        defaultHabitAchievements.push(1)
      } else {
        defaultHabitAchievements.push(0)
      }
    }

    const newHabitTracker = {
      id: Math.random(),
      title,
      startDate,
      endDate,
      habits: [
        {
          id: Math.random(),
          name: "defaultHabit",
          achievements: defaultHabitAchievements,
        },
      ],
    }
    setLocalStgHabitTrackerData((prevData: Array<HabitTrackerProps>) => [
      ...prevData,
      newHabitTracker,
    ])
  }

  const updateHabitTrackerData = (
    value: number,
    index: number,
    habitId: string,
    trackerId: string
  ) => {
    console.log("local data", localStgHabitTrackerData, trackerId)
  }

  return {
    localStgHabitTrackerData,
    addHabitTrackerData,
    updateHabitTrackerData,
  }
}

export const getHabitTrackerByID = () => {
  return {}
}
