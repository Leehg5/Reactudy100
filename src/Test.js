import React, { useState } from "react";

function Test() {
  const [Content, setContent] = useState("");
  const [ContentList, setContentList] = useState([]);
  const onSubmit = () => {
    let tempArr = [...ContentList];
    tempArr.push(Content);
    setContentList([...tempArr]);
    setContent("");
  };

  return (
    <div className="LeeTest_inpos">
      {ContentList.map((Content, idx) => {
        return (
          <div className="LeeTest_sdjka" key={idx}>
            내용 :{Content}{" "}
          </div>
        );
      })}
      <input
        type="text"
        value={Content}
        onChange={(e) => {
          setContent(e.currentTarget.value);
        }}
      />

      <button
        className="LeeTest_sawsd"
        onClick={() => {
          onSubmit();
        }}
      >
        제출
      </button>
    </div>
  );
}

export default Test;
