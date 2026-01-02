import './SellProduct.css';
function SellProduct({title,data,price}){
        let list = data.map((info) => <li>{info}</li>);
    return(
      <div className='Main-Container'>
      
          <div className='Sell-Box'>
            <h3>{title}</h3>
              <div className='imageBox'></div>
            <p>{list}</p>
          </div>
          <div className='price'><b>{price}</b></div>
        
      </div>
      
    );
}
export default SellProduct;