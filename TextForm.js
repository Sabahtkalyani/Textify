import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleLoCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleToPoints = () => {
    let points = text.split(".").filter(Boolean);
    const newText = points.map((point) => `• ${point.trim()}.`).join("\n\n");
    setText(newText);
    props.showAlert("Converted to Points", "success");
  };
  const handleToPara = () => {
    let firstText = text.split("\n").filter((line) => line.trim() !== "");
    let cleanText = firstText.map((point) => point.trim().replace(/^•\s*/, ""));
    const newText = cleanText.join(" ") + (cleanText.length > 0 ? "." : "");
    setText(newText);
    props.showAlert("Converted to Paragraph", "success");
  };

  const handleSpace = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    props.showAlert("Extra spaces are removed", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard", "success");
  };

  const handleClear = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  const buttonStyle = {
    width: "100%",
    maxWidth: "150px",
    padding: "10px",
    margin: "5px auto",
    textAlign: "center",
    cursor: "pointer",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "clamp(12px, 2vw, 16px)",
    boxSizing: "border-box",
  };

  return (
    <>
      <div className="container-fluid" style={{ margin: 0, padding: 0 }}>
        <div className="row">
          <div
            className="col-2 sidebar"
            style={{
              background: props.Mode === "dark" ? "#212529" : "white",
              color: props.Mode === "dark" ? "#white" : "black",
              height: "100vh",
              position: "sticky",
              top: 0,
              padding: "20px",
              borderRight: "2px solid #ccc",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
            }}
          >
            
            <button
              style={buttonStyle}
              disabled={text.length === 0}
              className="btn btn-primary mx-1 my-1"
              onClick={handleLoCase}
            >
              Convert to Lowercase
            </button>
            <button
              style={buttonStyle}
              disabled={text.length === 0}
              className="btn btn-primary mx-1 my-1"
              onClick={handleSpace}
            >
              Remove extra Spaces
            </button>
            <button
              style={buttonStyle}
              disabled={text.length === 0}
              className="btn btn-primary mx-1 my-1"
              onClick={handleClear}
            >
              Clear Text
            </button>
            <button
              style={buttonStyle}
              disabled={text.length === 0}
              className="btn btn-primary mx-1 my-1"
              onClick={handleCopy}
            >
              Copy Text
            </button>
            <button
              style={buttonStyle}
              disabled={text.length === 0}
              className="btn btn-primary mx-1 my-1"
              onClick={handleToPoints}
            >
              Convert to Points
            </button>
            <button
              style={buttonStyle}
              disabled={text.length === 0}
              className="btn btn-primary mx-1 my-1"
              onClick={handleToPara}
            >
              Convert to Paragraph
            </button>
          </div>

          <div className="col-10">
            <div
              style={{
                padding: "20px",
                color: props.Mode === "dark" ? "white" : "black",
              }}
              className="container"
            >
              <h1>{props.heading}</h1>
              <div className="mb-3">
                <label for="myBox" className="form-label">
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  style={{
                    background: props.Mode === "dark" ? "#333333" : "white",
                    color: props.Mode === "light" ? "black" : "white",

                    caretColor: "#000",
                    padding: "10px",
                    border:
                      props.Mode === "light"
                        ? "2px solid black"
                        : "2px solid white",
                    outline: "none",
                  }}
                  id="myBox"
                  value={text}
                  onChange={handleOnChange}
                  rows="8"
                ></textarea>
              </div>
            </div>
            <div
              className="container my-3"
              style={{ color: props.Mode === "dark" ? "white" : "black" }}
            >
              <h1>Your text summary</h1>
              <p>
                {
                  text.split(/\s+/).filter((element) => {
                    return element.length !== 0;
                  }).length
                }{" "}
                words and {text.length} characters
              </p>
              <p>
                {0.008 *
                  text.split(" ").filter((element) => {
                    return element.length !== 0;
                  }).length}{" "}
                minutes read
              </p>
              <h2>Preview</h2>
              <p
                style={{
                  whiteSpace: "pre-wrap",
                  wordWrap: "break-word",
                }}
              >
                {text.length > 0
                  ? text
                  : "Enter something in to text box above to preview it here"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
