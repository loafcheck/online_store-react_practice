import {useEffect, useState} from "react";
// import styled from 'styled-components';  

function Cart () {

//     let StyledBtn = styled.button`
//     background:${props => props.bg};
//     color: ${props => props.bg =='blue'? 'white' : 'black'};
//     padding: 10px;
//   `
//     let Box = styled.div `
//     background: grey;
//     padding: 20px;
//     `

    useEffect(()=>{
        console.log ('useEffect mount, update 되면 실행시켜준다니 실험해보자 ')})
    let [count,setCount] = useState(0)

    //useEffect 후크는 렌더링 생애주기 마지막에 작동한다. 무거운 연산, 서버에서 데이터 갖고 오는 작업시 사용하는 것이 좋다. 가벼운 Html같은 것들은 먼저 렌더링 시켜놓아서 사용자가 체감상 속도가 빠르다 느끼게 하는 것도 중요합니다. 

    return (
      <>
  
      <p>hello</p>
     

      <button onClick={()=>{setCount(count+1)}} bg="blue">Press</button>


     
      </>
    )
  }
  
  export default Cart;

------------------------

/*
컴포넌트 인생주기
mount: 페이지에 장착됨
update: 업데이트 됨
unmount: 필요없으면 제거됨


후크 달기 
mount: 페이지에 장착됨
- 이곳에 hook를 단다면 컴포넌트 등장전에 이것좀 해줘
update: 업데이트 됨
- 이곳에 hook를 단다면 컴포넌트 사라지기전에 이것좀 해줘
unmount: 필요없으면 제거됨
-- 이곳에 hook를 단다면 컴포넌트 업데이트 되고 나서 이것좀 해줘
*/
