import { useState, useEffect } from "react"
import { HabitTrackerProps } from "../components/HabitTracker/HabitTypes"

const LOCAL_STORAGE_KEY = "useHabitTracker"

export const calculateTotalDays = (startDate: string, endDate: string) => {
  const date1 = new Date(startDate)
  const date2 = new Date(endDate)
  const diffTime = Math.abs(date2 - date1) + 1
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}

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

  const createDefaultHabitAchievements = (days: number) => {
    const defaultHabitAchievements: Array<number> = []
    for (let i = 0; i < days; i++) {
      if (i == 0) {
        defaultHabitAchievements.push(1)
      } else {
        defaultHabitAchievements.push(0)
      }
    }
    return defaultHabitAchievements
  }

  useEffect(() => {
    console.log(
      "useEffect localStgHabitTrackerData change, set to localstr",
      localStgHabitTrackerData[0]?.habits[0]?.achievements
    )
    setLocalStorageHabitTrackerData(localStgHabitTrackerData)
  }, [localStgHabitTrackerData])

  const addHabitTrackerData = (
    title: string,
    startDate: string,
    endDate: string
  ) => {
    // const defaultHabitAchievements: Array<number> = []

    const totalTrackingDays = calculateTotalDays(startDate, endDate)

    const defaultHabitAchievements =
      createDefaultHabitAchievements(totalTrackingDays)

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
    const updatedData: Array<HabitTrackerProps> = localStgHabitTrackerData
    console.log(
      "Before mutating updatedData",
      localStgHabitTrackerData[0].habits[0].achievements,
      { value, index }
    )
    updatedData.forEach((tracker: HabitTrackerProps) => {
      if (tracker.id == trackerId) {
        tracker.habits.forEach((habit) => {
          if (habit.id == habitId) {
            habit.achievements[index] = value
          }
        })
      }
    })
    console.log(
      "Rightbefore setLocalStgHabitTrackerData",
      updatedData[0].habits[0].achievements
    )
    setLocalStgHabitTrackerData([...updatedData])
  }

  const addHaibtToHabitTracker = (habitName: string, trackerId: string) => {
    console.log("Add Habit to Tracker: ", habitName, trackerId)
    localStgHabitTrackerData.forEach((tracker: HabitTrackerProps) => {
      if (tracker.id == trackerId) {
        const totalTrackingDays = calculateTotalDays(
          tracker.startDate,
          tracker.endDate
        )

        const defaultHabitAchievements =
          createDefaultHabitAchievements(totalTrackingDays)

        tracker.habits.push({
          id: Math.random(),
          name: habitName,
          achievements: defaultHabitAchievements,
        })
      }
    })
    setLocalStgHabitTrackerData([...localStgHabitTrackerData])
  }
  return {
    localStgHabitTrackerData,
    addHabitTrackerData,
    updateHabitTrackerData,
    addHaibtToHabitTracker,
  }
}

export const getHabitTrackerByID = () => {
  return {}
}
