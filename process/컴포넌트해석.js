



function BrandCampaign (props) {
  return (
    <>
    <Container className="container">
      <Row>
        {
          props.blog_data.map((a,i)=>{
            return (
            <Blog blog_data={props.blog_data[i]} i={i+1} /> )
            // 이것의 의미는 Blog컴포넌트에 blog_data라는 이름을 갖은 {props.blog_data[i]} 를 불러오고 
                                        i   라는 이름을 갖으 {i+1}을 불러와라
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
    <h4>{props.blog_data.title}</h4>  
    <p>{props.blog_data.content}</p>
    </>
  )
}
