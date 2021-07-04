import React from 'react'
import './Button.css'

function myFunction() {
    var popup = document.getElementById("myPopup1");
    popup.classList.toggle("show");
  }

export default function Button(props) {
    const {textBtn}=props
    return (
        <div>
            <button className="formBtn btnpopup" onClick={myFunction} textBtn={textBtn} type={"submit"}><span class="btnpopuptext" id="myPopup1">Thank you!</span>{textBtn}</button>
        </div>
    )
}
