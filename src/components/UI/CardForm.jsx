
const CardForm = (props) => {
  return (
    <div className={`rounded-lg bg-white p-5 ${props.className}`}>
      {props.children}
    </div>
  )
}

export default CardForm