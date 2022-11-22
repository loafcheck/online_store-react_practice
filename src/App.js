import {Navbar, Container, Nav} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import "./App.css";
import {useState} from "react";
// import 작명 from './img/img01.jpg';
import data from './data.js';


function App() {

  let [furniture] = useState(data)

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">SENSE SPACE.com</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>
      {/* <div className="main-bg"></div>
      <div className="container">
        <div className="row">
        <Item furniture={furniture}/>
        </div>
      </div>  */}
       <Container className="container">
        <Row>
        <Item furniture={furniture[0] }/>
        {/* 컴포넌트작명: 함수이름 작명={변수 } */}
        <Item furniture={furniture[1]}/>
        <Item furniture={furniture[2]}/>
        </Row>
      </Container>
    </div>
  );
}


function Item(props) {
  return (
    <div className="col-md-4">
    <img src="https://loafcheck.github.io/online_store-react_practice/img/1.jpg" alt="light" className="image"/>
    <h4>{props.furniture.title}</h4>  
    <p>{props.furniture.content}</p>
    <span>{props.furniture.price}</span>
    </div>
  )
}
export default App;
