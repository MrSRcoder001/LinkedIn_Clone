import './LikeSection.css';
import { useState } from "react"


     
function LikeSection(){
     let [like=0, setCount] = useState(0);
    let setCounts = () => {
        setCount(like++);
}
    return(
        <div className="module">
            <div className="sub1">
                <div className="img">
                <h1>&#9654;</h1>
            </div>
            <div>
                <p>My blog video, Watch Now!!</p>
                          <button className='btn' > Subscribe &#9654;</button>

            </div>
            </div>
            <div className="sub2">
          <button onClick={setCounts}> &#10084; Like {like}</button>
          </div>
        </div>
    );
}
export default LikeSection;