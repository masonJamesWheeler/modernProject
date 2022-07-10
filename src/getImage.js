import React, { useState } from "react";
export default function App() {
    const [img, setImg] = useState();
  
    const onImageChange = (e) => {
      const [file] = e.target.files;
      setImg(URL.createObjectURL(file));
    };
  
    return (
      <div>
        <input type="file" onChange={onImageChange} />
        <img src={img} alt="" />
      </div>
    );
  }