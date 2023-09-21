import { useState } from "react"

export type Week = {
  weekNo: number
  weekStartDate: string
  habitList: Array<Habit>
}

export type Habit = {
  name: string
  achievement: Array<number>
}

const WEEKS_LOCAL_STORE_KEY = "waeoraveuj"

const getWeeksFromLocalStorage = () => {
  const dataStr = localStorage.getItem(WEEKS_LOCAL_STORE_KEY)
  if (!dataStr) {
    return []
  }
  return JSON.parse(dataStr)
}

export const useWeeklyHabits = () => {
  const [weeks, _setWeeks] = useState<Array<Week>>(getWeeksFromLocalStorage())

  // it's got to build newWeeks obj!
  // must call _setWeeks(newWeeks)
  // must set localStore w/ our key, ...newWeeks
  const addHabit = (habitName: string) => {
    console.log("call _setWeeks")
    console.log("_setWeeks inside")
    const curWeekStartDate = "this week start date"
    let curWeek: Week | undefined
    for (let i = 0; i < weeks.length; i++) {
      if (weeks[i].weekStartDate == curWeekStartDate) {
        curWeek = weeks[i]
        break
      }
    }

    if (!curWeek) {
      curWeek = {
        weekNo: weeks.length + 1,
        weekStartDate: curWeekStartDate,
        habitList: [],
      }
      weeks.push(curWeek)
    }

    curWeek.habitList.push({
      name: habitName,
      achievement: [0, 0, 0, 0, 0, 0, 0],
    })

    _setWeeks([...weeks])
    localStorage.setItem(WEEKS_LOCAL_STORE_KEY, JSON.stringify(weeks))
  }

  return {
    weeks,
    addHabit,
  }
}
