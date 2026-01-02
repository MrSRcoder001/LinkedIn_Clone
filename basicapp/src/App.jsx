
import './App.css'
import Product from "./Product.jsx";
import MsgBox from './MsgBox.jsx';
import SellProduct from './SellProduct.jsx';
import OnclickOp from './OnclickOp.jsx';
import Counter from './Counter.jsx';
import LikeSection from './LikeSection.jsx';
import Lodo from './Lodo.jsx';
import Todo from './Todo.jsx';
import Lottory from './lottory.jsx';
import Form from './Form.jsx';
import Comment from './Comment.jsx';
function App() {
  let option = ["HI-tech", "Sony-max", "AppleAIR-Drop"];
  let info = ["8,000DPI", "programable Buttons", "Latest IP65 rating", "new Lounch"];
  return (
    <>
      <Counter />
      <MsgBox Name="IDEAL-HACK" color="olive" />
      <Product title="Satish rathod" feature={option} price={10021} />
      <Product title="Aman bro" feature={option} price={2001} />
      <div className='Main-container'>
        <SellProduct title="logistech mx master 35" data={info} price="8,999/" />
        <SellProduct title="microphone master Gtx35" data={["9800-DPI", " 3 programable Buttons", "better IP65 rating"]} price="9,999/" />
        <SellProduct title="logistech mx master 35" data={info} price="8,999/" />
        <SellProduct title="microphone master Gtx35" data={["9800-DPI", " 3 programable Buttons", "better IP65 rating"]} price="9,999/" />
      </div>

      <LikeSection />
      <br />
      <Lodo />
      <br />
      <Todo />
      <br />
      <Lottory n={3} win={15} />
      <br />
      <br />
      <Form />
      <br />
      <Comment/>
    </>
  )
}

export default App
