import { FC } from "react"
import { HabitProps, UpdateHabitTrackerFN } from "./HabitTypes"
import { HabitBox } from "./HabitBox"
import { light2 } from "../UI/ColorPalette"
type HBProps = {
  trackerId: string
  habit: HabitProps
  updateHabitTrackerData: UpdateHabitTrackerFN
}

export const Habit: FC<HBProps> = ({
  trackerId,
  habit,
  updateHabitTrackerData,
}: HBProps) => {
  return (
    <div style={{ backgroundColor: "pink", flexWrap: "wrap" }}>
      <div style={{ display: "flex", margin: "1rem" }}>
        <div
          style={{
            color: light2,
            marginRight: "1rem",
            alignSelf: "center",
            width: "150px",
          }}
          key={habit.id}
        >
          {habit.name}
        </div>

        <div style={{ display: "flex" }}>
          {habit.achievements.map((item, index) => {
            return (
              <HabitBox
                updateHabitTrackerData={updateHabitTrackerData}
                key={`${index}`}
                value={item}
                index={index}
                habitId={habit.id}
                trackerId={trackerId}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
