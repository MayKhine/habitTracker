export type HabitTrackerFormDivProps = {
  children: JSX.Element
}

export const HabitTrackerFormDiv = (props: HabitTrackerFormDivProps) => {
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "gray",
        padding: "10px",
        flexDirection: "column",
      }}
    >
      {props.children}
    </div>
  )
}
