import { light2, dark3 } from "../UI/ColorPalette"
import classes from "./SideBar.module.css"
export type SideBarProps = {
  width: string
  children: JSX.Element
}

export const SideBar = (props: SideBarProps) => {
  return (
    <div //style={{ backgroundColor: dark3, color: light2, width: props.width }}
      className={classes.SideBar}
    >
      {props.children}
    </div>
  )
}
