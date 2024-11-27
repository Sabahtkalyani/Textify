import React, { useState } from "react";

export default function About(props) {
  let myStyle = {
    color: props.Mode === "dark" ? "white" : "black",
    backgroundColor: props.Mode === "dark" ? "black" : "white",
  };

  return (
    <>
      <div classNameName="container" style={myStyle}>
        <h2>About Textify</h2>
        <div id="accordion" style={myStyle}>
          <div className="card">
            <div className="card-body" style={myStyle}>
              Welcome to Textify, your ultimate text utility tool designed to
              make text manipulation quick, easy, and efficient. Whether you're
              a writer, student, blogger, or anyone working with text, our
              website provides a comprehensive suite of tools to streamline your
              work. Best of all, it's completely free and requires no sign-ups!
            </div>
            <div className="card-header" id="headingOne" style={myStyle}>
              <h5 className="mb-0">Features You’ll Love:</h5>
            </div>
            <div className="card-body" style={myStyle}>
              • Convert to Uppercase & Lowercase: Easily transform your text to
              uppercase or lowercase with just one click.
              <br></br>• Remove Extra Spaces: Say goodbye to unnecessary spaces
              and format your text perfectly.
              <br></br>• Copy to Clipboard: With a single click, copy your text
              to the clipboard and use it wherever you need.
              <br></br>• Convert to Points: Convert paragraphs into neatly
              organized bullet points, making information easier to digest.
              <br></br>• Convert to Paragraphs: Change bullet points back into
              readable paragraphs, keeping your content flexible and structured.
              <br></br>• Clear Text: Quickly clear your text box when you need a
              fresh start.
              <br></br>
            </div>
            <div className="card-header" id="headingOne" style={myStyle}>
              <h6 className="mb-0">
                Additionally, we provide important insights:
              </h6>
            </div>
            <div className="card-body" style={myStyle}>
              • Word Count & Character Count: Track how many words and
              characters are in your text, ensuring you stay within the limits.
              <br></br>• Minutes Reading: Estimate how long it will take to read
              your text, helping you manage time effectively.
              <br></br>• Real-Time Preview: See changes in real-time with a live
              preview of your text as you apply different features.
            </div>

            <div className="card-header" id="headingOne" style={myStyle}>
              <h5 className="mb-0">Why Choose Us?</h5>
            </div>

            <div className="card-body" style={myStyle}>
              At Textify, we focus on making text management effortless. With no
              text size limit, you can work with any amount of text without
              worrying about constraints. Our user-friendly interface ensures
              that anyone can navigate the features without any technical
              knowledge, making it perfect for beginners and experts alike.
              <br></br>
              We value your time and aim to simplify the text editing process so
              you can focus on what truly matters. Whether you need to clean up
              your writing, format it for presentation, or just manage your text
              more efficiently, we’ve got you covered.
            </div>

            <div className="card-header" id="headingOne" style={myStyle}>
              <h5 className="mb-0">Get Started Today!</h5>
            </div>
            <div className="card-body" style={myStyle}>
              No need for downloads or sign-ups—simply visit, paste your text,
              and start using the tools immediately. Whether you’re editing,
              formatting, or analyzing text, Textify is here to make it easier
              for you.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
