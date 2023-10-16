import { FC } from "react"

export type HabitProps = {
  name: string
  achievements: Array<number>
}
export const Habit: FC<HabitProps> = (props: HabitProps) => {
  return <>{props.name}</>
}
