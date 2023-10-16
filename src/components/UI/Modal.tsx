// import { createPortal } from "react-dom"
import ReactDOM from "react-dom"

type BackdropProps = {
  onCloseModal: () => void
}
const Backdrop = (props: BackdropProps) => {
  console.log("Backdrop props: ", props)
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        zIndex: "20",
        backgroundColor: "gray",
        opacity: "50%",
      }}
      onClick={props.onCloseModal}
    ></div>
  )
}

type ModalOverLayProps = {
  backgroundColor: string
  children: JSX.Element
}
const ModalOverLay = (props: ModalOverLayProps) => {
  console.log("ModaloverLay CHild", props.children)
  return (
    <div
      style={{
        position: "fixed",
        top: "20vh",
        left: "5%",
        width: "90%",
        backgroundColor: props.backgroundColor || "white",
        padding: "1rem",
        borderRadius: "15px",
        zIndex: "30",
        animation: "slide-down 300ms ease-out forwards",
      }}
    >
      {props.children}
    </div>
  )
}

type ModalProps = {
  width: string
  height: string
  backgroundColor: string
  children: JSX.Element
  onCloseModal: () => void
}
export const Modal = (props: ModalProps) => {
  const portalElement = document.getElementById("overlay")
  console.log("what is ", props.children)

  return (
    <div
      style={{
        width: props.width,
        height: props.height,
        backgroundColor: props.backgroundColor,
      }}
    >
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverLay backgroundColor={props.backgroundColor}>
          {props.children}
        </ModalOverLay>,
        portalElement
      )}
    </div>
  )
}
