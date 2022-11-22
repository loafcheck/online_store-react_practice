 <div className='main-bg'></div>
 
      {/* 
      
      1) 처음에 아래와 같이 상품을 진열한다. 
      
      <div className="container">
        <div className="row">
        <Item furniture={furniture}/>
        </div>
      </div>  
      
      */}
      
      
      {/*
      
      3) map 함수를 이용하여 반복문을 줄이도록 한다. 
      map(a,i)->맵은 2가지 파라미터를 받을 수 있다. map(element, index)
      예시) 
       let array = [1,2,3,4];
        console.log(
            array.map((x, index) => {
            console.log(`Visit ${index}`);
            return x * 2;
          })
        );
      */}
      
       <Container className="container">
        <Row>
        {
        furniture.map((a,i)=>{
          return (
            <Item furniture={furniture[i]} i={i+1}/>
          )
        })
      }
        {/* 
        2) 반복되지만 data.js에서 데이터를 받아 아래와 같이 코드를 만든다.
        
        컴포넌트작명: 함수이름 작명={변수}
        
        <Item furniture={furniture[0]} i={1}/>
        <Item furniture={furniture[1]} i={2}/>
        <Item furniture={furniture[2]} i={3}/>
        <Item furniture={furniture[3]} i={4}/>
        <Item furniture={furniture[4]} i={5}/>
        <Item furniture={furniture[5]} i={6}/> 
        
        */}
        </Row>
      </Container>
    </div>
