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
        cursor: "pointer",
        backgroundColor: props.backgroundColor,
        height: props.height || "3rem",
        borderRadius: "15px",
        margin: "5px",
        border: "0px",
        fontSize: props.fontSize || "1.3rem",
        width: props.width || "90%",
        alignSelf: "center",
        overflow: "hidden",
      }}
      onClick={props.onButtonClick}
    >
      {props.text}
    </button>
  )
}
