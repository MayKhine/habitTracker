import { useHabitTracker } from "../../hooks/useHabitTracker"
export type BoxProps = {
  value: number
  index: number
  habitId: string
  trackerId: string
}

export const Box = ({ value, index, habitId, trackerId }: BoxProps) => {
  const { updateHabitTrackerData } = useHabitTracker()
  let colorByValue = "pink"

  if (value == 1) {
    colorByValue = "red"
  }

  return (
    <div
      onClick={() => {
        console.log("this box data is: ", value, index, habitId, trackerId)
        //update local storageData

        updateHabitTrackerData(value == 0 ? 1 : 0, index, habitId, trackerId)
      }}
      style={{
        width: "20px",
        height: "20px",
        backgroundColor: colorByValue,
        borderColor: "black",
        margin: "3px",
      }}
    ></div>
  )
}
