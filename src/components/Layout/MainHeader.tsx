import { light2, dark3 } from "../UI/ColorPalette"
export const MainHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        fontSize: "3rem",
        backgroundColor: dark3,
        width: "100%",
        color: light2,
        // position: "relative",
      }}
    >
      Habit Tracker
    </div>
  )
}
