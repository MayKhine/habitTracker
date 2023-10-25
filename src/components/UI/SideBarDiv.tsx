export type SideBarDivProps = {
  onSelectClick: () => void
  onDeleteClick: () => void
  text: string
  backgroundColor: string
  width?: string
  fontSize?: string
  height?: string
}

export const SideBarDiv = ({
  onSelectClick,
  onDeleteClick,
  text,
  backgroundColor,
  width,
  fontSize,
  height,
}: SideBarDivProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        // padding: "15px",
        width: width,
        // height: height || "40px",
        backgroundColor: backgroundColor,
        fontSize: fontSize,
        margin: "10px",
      }}
    >
      <div
        onClick={onSelectClick}
        style={{
          // backgroundColor: "red",
          width: "100%",
          // height: "40px",
          padding: "10px",
        }}
      >
        {text}
      </div>
      <button onClick={onDeleteClick}>X</button>
    </div>
  )
}
