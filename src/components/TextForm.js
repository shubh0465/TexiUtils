import React,{ useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        let newText= text.toUpperCase();
        setText(newText);
        props.showalert("converted to upper case", "success");
    }
    const handleLoClick=()=>{
        let newText= text.toLowerCase();
        setText(newText);
        props.showalert("converted to lower case", "success");
    }
    const handleOnChange =(event)=>{
        setText(event.target.value);
    }
    const handleClearText=()=>{
        let newText='';
        setText(newText);
        props.showalert("cleared all text", "success");
    }
    const handleCopy =()=>{
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showalert("Copied to Clipboard", "success");
    }
    const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showalert("Removed Extra Spaces", "success");
    }
    const [text,setText] = useState("");
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#6d6bde', color: props.mode==='light'?'black':'white'}} id="mybox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert To UpperCase Letters</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert To LowerCase Letters</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearText}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy to Clipboard</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div> 
        <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} Characters</p>
            <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes to read this</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
