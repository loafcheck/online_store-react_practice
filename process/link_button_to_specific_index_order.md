
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


![Screen Shot 2022-12-04 at 7 58 11 PM](https://user-images.githubusercontent.com/106638262/205486852-ec2ae789-6a7c-411e-8bbf-705d12116fa8.png)
