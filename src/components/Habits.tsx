import { FC } from "react"

export type HabitProps = {
  habitText: string
}
export const Habit: FC<HabitProps> = ({ habitText }) => {
  return <>{habitText}</>
}
