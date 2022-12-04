
function Item(props) {
  let navigate = useNavigate()

  return (
    <>
    <div className="col-md-4">
    <img src={`./img/furniture/${props.i}.jpg`} alt="light" className="image"/>
    <h4>{props.furniture.title}</h4>  
    <p>{props.furniture.content}</p>
    <span>{props.furniture.price}</span>
    <button onClick= {() => {navigate(`/${props.i}`)}} className="butItem" style={{padding:'10px 50px'}}>Purchase</button>
    </div>
    </>
  )
}
