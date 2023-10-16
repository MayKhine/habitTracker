export type CenterDivProps = {
  width: string
  height: string
  backgroundColor: string
  children: JSX.Element
}

export const CenterDiv = (prop: CenterDivProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: prop.backgroundColor,
        width: prop.width,
        height: prop.height,
        margin: "3px",
      }}
    >
      {prop.children}
    </div>
  )
}
