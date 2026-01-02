 
 function MsgBox({Name,color}){
    let style={backgroundColor:color}
    return (
     <h3 style={style}>organization Name is {Name}</h3>
    );
 }
 export default MsgBox;
