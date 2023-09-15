import React ,{useState} from 'react'

export default function TextForm(props) {

  const handleUpClick=()=>{
    console.log(text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowClick=()=>{
    console.log(text);
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleCapitalizerdClick=()=>{
    console.log(text);
    const arr = text.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const newText = arr.join(" ");
    setText(newText);
  }

  const handleBinaryCode =()=>{
    console.log(text);
    const binary = [];
    // const number = [0-9];
    for (let i = 0; i < text.length; i++) {
      binary.push(text[i].charCodeAt(0).toString(2));
    }
    // for (let i = 0; i < number.length; i++) {
    //   binary.push(number[i].toString(2));
    // }
  const newText = binary.join(" ");
    setText(newText);
  }


  const handleCopy=()=>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleClearClick=()=>{
    console.log(text);
    let newText = '';
    setText(newText);
  }

  const handleOnChange=(event)=>{
    setText(event.target.value);
  }

  

  const [text, setText] = useState('Enter text here');
  
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>   
      <div className="mb-3">
         <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleCapitalizerdClick}>Capitalized Case</button>
      <button className="btn btn-primary mx-2" onClick={handleBinaryCode}>Binary Code translator</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className='container'>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}


