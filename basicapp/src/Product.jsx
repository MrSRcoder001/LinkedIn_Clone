
import './Product.css'
function Product({ title, feature, price }) {
    let list = feature.map((feature) => <li>{feature}</li>);
   let isDiscounts=price>10000;
   let color={backgroundColor: isDiscounts?"yellow":""};
        return (
            <div>
            
              
                <div className="box" style={color}>
                    <h2 className="para">Name is {title} </h2>
                    <p className="para">{list}</p>
                    <p className="para">price:  {price}</p>
                    {isDiscounts?<b><p className="para" > "5% discounts"</p></b>:null}
                    <button className="btn">Click Here</button>
                    <br />
                </div>
                <br />
            </div>
        );


}
export default Product;