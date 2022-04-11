
const Card = (props) => {
  return (
    <div className={`rounded-lg bg-purple-300 p-5 ${props.className}`}>
      {props.children}
    </div>
  )
}

export default Card