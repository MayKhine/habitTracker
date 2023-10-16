import classes from "./SideBar.module.css"
import { dark2 } from "../UI/ColorPalette"
export type SideBarProps = {
  children: JSX.Element
}

export const SideBar = (props: SideBarProps) => {
  return (
    <div className={classes.sideBar} style={{ backgroundColor: dark2 }}>
      {props.children}
    </div>
  )
}
