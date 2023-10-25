export type ErrorTextProps = {
  text: string
}

export const ErrorText = ({ text }: ErrorTextProps) => {
  return <p style={{ color: "red", margin: "0", fontSize: "0.8rem" }}>{text}</p>
}
