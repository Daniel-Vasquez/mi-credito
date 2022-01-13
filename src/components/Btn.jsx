import './styles/Btn.css'

const Btn = (props) => {
  return (
    <button className={`main-btn ${props.color}`}>
      {props.title}
      {props.children}
      </button>
  )
}

export default Btn
