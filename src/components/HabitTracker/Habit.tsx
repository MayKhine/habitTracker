import { FC } from "react"
import { HabitProps } from "./HabitTypes"
import { Box } from "../UI/Box"
type HBProps = {
  trackerId: string
  habit: HabitProps
}
export const Habit: FC<HBProps> = (props: HBProps) => {
  return (
    <div style={{ display: "flex" }}>
      <div key={props.habit.id}> {props.habit.name}</div>
      <div style={{ display: "flex" }}>
        {props.habit.achievements.map((item, index) => {
          return (
            <Box
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
