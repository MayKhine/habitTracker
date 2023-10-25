export type ErrorTextProps = {
  text: string
}

export const ErrorText = ({ text }: ErrorTextProps) => {
  return <p style={{ color: "red", margin: "0" }}>{text}</p>
}
