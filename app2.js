import {Navbar, Container, Nav,Row,Button } from 'react-bootstrap';
import "./App.css";
import {useState} from "react";
// import 작명 from './img/img01.jpg';
import {data} from './data';
//여러데이터일때 export default가 아니라 default
import {blog} from './blogdata';
// import images from './img/furniture';
import  {Routes, Route} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';



function App() {

  let [furniture_data] = useState(data);
  let [blog_data] = useState(blog);
  


  return (
    <div className="App">

    <Navbar bg="dark" variant="dark">
        <Container>
       
          <Navbar.Brand href="http://localhost:3000/">Sense Space</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="http://localhost:3000/products">Products</Nav.Link>
            <Nav.Link href="http://localhost:3000/reservation">Reservation</Nav.Link>
            <Nav.Link href="http://localhost:3000/cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>

        <Route path="/" element={
          <Main furniture={furniture_data}/>}>
        </Route>
        <Route path="/products" element={
          <Products furniture={furniture_data}/> }>
        </Route>
        <Route path="/reservation" element={
          <Reservation blog_data={blog_data}/>}>
        </Route>
        <Route path="/cart" element={
          <Cart/> }>
        </Route>
        
      </Routes>

      <div>

    </div> 
    </div>
  );
}


function Item(props) {
  return (
    <div className="col-md-4">
    <img src={`./img/furniture/${props.i}.jpg`} alt="light" className="image"/>
    <h4>{props.furniture.title}</h4>  
    <p>{props.furniture.content}</p>
    <span>{props.furniture.price}</span>
    </div>
  )
}

function Main (props) {
  return (
  <>
        <div className='main-bg'></div>
        <Container className="container">
          <Row>
            {
              props.furniture.map((a,i)=>{
                return (
                <Item furniture={props.furniture[i]} i={i+1}/>
            )
            })
            }
          </Row> 
        </Container>
        </>
        )
}

function Products (props) {
  return (
  <>
        <Container className="container">
          <Row>
            {
              props.furniture.map((a,i)=>{
                return (
                <Item furniture={props.furniture[i]} i={i+1}/>
            )
            })
            }
          </Row> 
        </Container>
        </>
        )
}

function Reservation (props) {
  let [modal,Setmodal] = useState(false);
  return (
    <>
    <Container className="container">
      <Row>
        {
          props.blog_data.map((a,i)=>{
            return (
              <>
            <Blog blog_data={props.blog_data[i]} i={i+1}/>
            <Button variant="outline-info" onClick={()=>{
              Setmodal(prev => !prev);
            }}>Tour Reservation</Button>

            {
              modal === true ? <Modal/>: null
              //modal 상태가 true이면 모달반환 아니면 텅빈 null
            }
        
            </>
        )
        })
        }
      </Row> 
    </Container>
    </>
  )
}


function Blog (props) {
  return (
    <>
    <h1>{props.title}</h1>
    <img src={`./img/blog/${props.i}.jpg`} alt="interior idea" className="blog_image"/>
    <h4 >{props.blog_data.title}</h4>  
    <p>{props.blog_data.content}</p>
 
    </>
  )
}

function Modal(props) {

  return (
    <div className='Modal'>
      <InputGroup className="mb-3">
        <InputGroup.Text>First and last name</InputGroup.Text>
        <Form.Control aria-label="First name" />
        <Form.Control aria-label="Last name" />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
      <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"> Date </InputGroup.Text>
        <Form.Control
          placeholder=" Date (MMDD)"
        />
      </InputGroup>
      <Button variant="light" className='submit' onClick={()=>{
        props.Setmodal(prev => !prev)
       
      }}>Submit</Button>

      {/* {
        submit === false? <props.Link to="/brandcampaign"/> : null
      }
           */}
      
    </div>
  )
}

function Cart () {
  return (
    <p>hello</p>
  )
}
export default App;
