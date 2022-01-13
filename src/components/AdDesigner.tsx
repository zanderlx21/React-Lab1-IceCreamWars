import React, { useState } from "react";


function AdDesigner() {
const [flavor, setFlavor] = useState("")
const [fontSize, setFontSize] = useState(12)
const [theme, setTheme] = useState(false)
let addTheme = "";
if (theme) {
 addTheme = "Dark";
}

const fontStyle = {
    fontSize: fontSize + "px",
};

    return(
        <div className="AdDesigner">
            <h1>Ad Designer</h1>
            <div className={"AdContainer" + addTheme }>
                <p>Vote For</p>
                <h3 style={fontStyle}> {flavor} </h3>
            </div>
            <section className="Support">
                <h4>What to support</h4>
                <button disabled={flavor === "SuperMan"} onClick={() => setFlavor((flavor) => flavor = "SuperMan")}>SuperMan</button>
                <button disabled={flavor === "Rocky Road"} onClick={() => setFlavor((flavor) => flavor = "Rocky Road")}>Rocky Road</button>
                <button disabled={flavor === "Vanilla"} onClick={() => setFlavor((flavor) => flavor = "Vanilla")}>Vanilla</button>
            </section>
            <section className="Theme">
                <h4>Color Theme</h4>
                <button disabled={theme === false} onClick= {() => setTheme((theme) => theme = false)}>Light</button>
                <button disabled={theme === true} onClick={() => setTheme((theme) => theme = true)}>Dark</button>
            </section>
            <section className="FontSize">
                <h4>Font Size</h4>
                <div className="fontButtons">
                <button onClick={() => setFontSize((size) => size = fontSize + 1)}>Up</button>
                <p>{fontSize}</p>
                <button onClick={() => setFontSize((size) => size = fontSize -1)}>Down</button>
                </div>
            </section>

        </div>

    )
}

export default AdDesigner;