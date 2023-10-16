export type ButtonProps = {
  onButtonClick: () => void
  text: string
  backgroundColor: string
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: props.backgroundColor,
        height: "3rem",
        borderRadius: "15px",
        margin: "10px",
        border: "0px",
        fontSize: "1.3rem",
        width: "70%",
        alignSelf: "center",
      }}
      onClick={props.onButtonClick}
    >
      {props.text}
    </button>
  )
}
