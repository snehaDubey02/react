import React ,{useState} from 'react'


export default function TextFrom(props) {
    const [text, setText] = useState("");
    //setText=("new text");
    const handleUpClick=()=>{
       // alert("submit button clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success");
    }
    const handleLoClick=()=>{
        // alert("submit button clicked");
         let newText=text.toLowerCase();
         setText(newText);
         props.showAlert("Converted to Lower Case","success");
     }
     const handleClearClick=()=>{
        // alert("submit button clicked");
         let newText=''
         setText(newText);
         props.showAlert("Text cleared ","success");
     }
    const handleOnChange=(event)=>{
        //console.log("on change");
        setText(event.target.value);
    }
  return (
    <>
    <div className='container'style={{color:props.mode==='dark'?'white':'black'}}>
          <h3>{props.heading}</h3>
          {/* <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div> */}
        <div className="mb-3">
          {/* <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange}></textarea>
        </div>
  <button type="submit" className="btn btn-primary mx-2" onClick={handleUpClick}>To Upper Case</button>
  <button type="submit" className="btn btn-primary mx-2" onClick={handleLoClick}>To Lower Case</button>
  <button type="submit" className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
  
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length-1} words and {text.length} characters </p>
        <p>{0.008* text.split(" ").length} Minutes read</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Enter something In the text book above to preview it here "}</p>
    </div>
    </>
  )
}
