import { FC } from "react"

export type HabitsCanvasType = {
  backgroundColor: string
  height: string
  width: string
  children?: React.ReactNode
}
export const HabitsCanvas: FC<HabitsCanvasType> = ({
  backgroundColor,
  height,
  width,
  children,
}) => {
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        width: width ? width : "100%",
        height: height ? height : "100%",
      }}
    >
      {children}
    </div>
  )
}
