function hello(event){
    console.log(" Its operation perform by using onclick");
    console.log(event)
}
function OnclickOp(){
    return (
    
        <div>  <button onClick={hello} >Don`t Click here</button>
        <button onDoubleClick={hello}>Dont double click here !!</button>
        <p onMouseOver={hello}>Lorem ipsum, qui tenetur id laborum perspiciatis blanditiis at ducimus totam temporibus?</p>
                <p onKeyDown={hello}>Lorem ipsum, qui tenetur id laborum perspiciatis blanditiis at ducimus totam temporibus?</p>


         </div>
        
    )
}
export default OnclickOp;