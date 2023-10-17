import { FC } from "react"
import { HabitProps, UpdateHabitTrackerFN } from "./HabitTypes"
import { HabitBox } from "./HabitBox"
import { dark2, light2 } from "../UI/ColorPalette"
import { Button } from "../UI/Button"
import { HabitInput } from "../UI/HabitInput"
type HBProps = {
  trackerId: string
  habit: HabitProps
  updateHabitTrackerData: UpdateHabitTrackerFN
}
export const Habit: FC<HBProps> = (props: HBProps) => {
  return (
    <div>
      <HabitInput></HabitInput>
      <div style={{ display: "flex", margin: "1rem" }}>
        <div
          style={{ color: light2, marginRight: "1rem", alignSelf: "center" }}
          key={props.habit.id}
        >
          {props.habit.name}
        </div>

        <div style={{ display: "flex" }}>
          {props.habit.achievements.map((item, index) => {
            return (
              <HabitBox
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
    </div>
  )
}
