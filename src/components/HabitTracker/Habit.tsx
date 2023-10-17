import { FC } from "react"
import { HabitProps, UpdateHabitTrackerFN } from "./HabitTypes"
import { HabitBox } from "./HabitBox"
import { light2 } from "../UI/ColorPalette"
import { HabitDates } from "./HabitDates"
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
    <div style={{ flex: 1, maxWidth: "100%" }}>
      <div
        style={{ margin: "1rem", flex: 1, maxWidth: "100%", display: "flex" }}
      >
        <div
          style={{
            color: light2,
            marginRight: "1rem",
            alignSelf: "center",
            minWidth: "150px",
            flex: 1,
            maxWidth: "100%",
            flexShrink: "0",
            flexGrow: "0",
          }}
          key={habit.id}
        >
          {habit.name}
        </div>
        <div style={{ maxWidth: "100%", display: "flex", flexWrap: "wrap" }}>
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
