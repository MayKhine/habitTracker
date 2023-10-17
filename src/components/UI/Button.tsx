export type ButtonProps = {
  onButtonClick: () => void
  text: string
  backgroundColor: string
  width?: string
  fontSize?: string
  height?: string
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: props.backgroundColor,
        height: props.height || "3rem",
        borderRadius: "15px",
        margin: "10px",
        border: "0px",
        fontSize: props.fontSize || "1.3rem",
        width: props.width || "70%",
        alignSelf: "center",
      }}
      onClick={props.onButtonClick}
    >
      {props.text}
    </button>
  )
}
