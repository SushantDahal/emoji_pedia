import React from "react";
// import emoji from "../emojiPedia";

function Entry(props) {
  return (
    <>
      <div className="term">
        <dt>
          <span className="emoji" role="img" arial-aria-label="Tense-Bicep">
            {props.emoji}
          </span>
          <span className="name">{props.name}</span>
        </dt>
        <dd>{props.description}</dd>
      </div>
    </>
  );
}

export default Entry;
