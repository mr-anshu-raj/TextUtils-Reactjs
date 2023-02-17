import React, { useState } from 'react'

const TextForm = (props) => {
    const [text, setText] = useState('Enter text here');
    //setText('new text');


    const handleUpClick = () =>{
        //console.log("uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");

    }

    const handleLoClick = () =>{
        //console.log("uppercase was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");

    }

    const handleOnChange = (event) =>{
        //console.log("on change");
        setText(event.target.value);
    }

    const handleCopy =()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }


    /*const count = ()=>{
        if (text.length>0){
            text.trim().split(/[ ]+/);
            let ct=0;
            for (let i = 0; i < text.length; i++){
                if(text[i]===" ");
                ct+=1;
            }
            return ct;
        }
        else{
            return 0;
        }
    }*/

  return (
    <>
    <div className='container' style={{color: props.Mode==='light'?'grey':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor: props.Mode==='light'?'white':'grey', 
            color: props.Mode==='light'?'black':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to lowercase</button>
        <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className='container my-3' style={{color: props.Mode==='light'?'grey':'white'}}>
        <h2>Your text summary</h2>
        <p>{text.trim().length === 0 ? 0 : text.trim().split(" ").length} words and {text.length} character</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
  )
}

export default TextForm
