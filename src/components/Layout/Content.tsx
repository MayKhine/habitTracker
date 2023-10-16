import { dark1, light3 } from "../UI/ColorPalette"

export type ContentProps = {
  children: JSX.Element
}

export const Content = (props: ContentProps) => {
  return (
    <div style={{ backgroundColor: dark1, color: light3, width: "100%" }}>
      {props.children}
    </div>
  )
}
