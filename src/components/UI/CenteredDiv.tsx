export type CenterDivProps = {
  width?: string
  height?: string
  backgroundColor?: string
  children: JSX.Element
  onClick: () => void
}

export const CenterDiv = (props: CenterDivProps) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: props.backgroundColor,
        width: props.width,
        height: props.height,
        margin: "15px",
        borderRadius: "15px",
        padding: "0px",
      }}
    >
      {props.children}
    </div>
  )
}
