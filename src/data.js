//다른파일에서 사용가능해짐. 변수 내보냄.
//변수명 한개 시 -> export default data;
//변수명 여러개 시-> export{a,b}
//오브젝트자료형: [{},{},{}] 시작기호: {}
//어레이자료형:let a = ['kim', 20] 시작기호: []
//오브젝트 vs 어레이자료형:
//let a = ['kim', 20]
//let b ={name: 'kim', age: 20} key 와 value가 있어야함
//오브젝트 자료형 부르기. key 를 호출하기 예시) b.age
let data= [ 
    {
        id : 0,
        title : "Stain Lamp",
        content : "Made in France",
        price : "12,000,000 " + "won"
    },

    {
        id : 1,
        title : "Silk Velvet Couch",
        content : "Made in France",
        price : "7,000,000 " + "won"
    },

    {
        id : 2,
        title : "Grey Dining Table",
        content : "Made in France",
        price : "1,300,000 " + "won"
    }
] 


export default data;