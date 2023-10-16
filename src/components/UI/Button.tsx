export type ButtonProps = {
  onButtonClick: () => void
  text: string
  backgroundColor: string
}

export const Button = (props: ButtonProps) => {
  console.log("BUtton props: ", props)
  return (
    <button
      style={{ backgroundColor: props.backgroundColor }}
      onClick={props.onButtonClick}
    >
      {props.text}
    </button>
  )
}
