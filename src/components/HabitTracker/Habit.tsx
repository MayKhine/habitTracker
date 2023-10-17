import { FC } from "react"
import { HabitProps, UpdateHabitTrackerFN } from "./HabitTypes"
import { Box } from "../UI/Box"
type HBProps = {
  trackerId: string
  habit: HabitProps
  updateHabitTrackerData: UpdateHabitTrackerFN
}
export const Habit: FC<HBProps> = (props: HBProps) => {
  return (
    <div style={{ display: "flex" }}>
      <div key={props.habit.id}> {props.habit.name}</div>
      <div style={{ display: "flex" }}>
        {props.habit.achievements.map((item, index) => {
          return (
            <Box
              updateHabitTrackerData={props.updateHabitTrackerData}
              key={`${index}`}
              value={item}
              index={index}
              habitId={props.habit.id}
              trackerId={props.trackerId}
            />
          )
        })}
      </div>
    </div>
  )
}
