import React, { FC, useState, useRef } from "react";

export enum ColorVariant {
  red = "red",
  yellow = "yellow",
  green = "green",
}

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<ColorVariant>(ColorVariant.red);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(value);
  };

  const handleSecondClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("Drag");
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(ColorVariant.green);
    console.log("Drop");
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(ColorVariant.red);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(ColorVariant.yellow);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        value={value}
        placeholder="Managed"
      />
      <button onClick={handleClick}>Click me!</button>
      <input type="text" ref={inputRef} placeholder="Unmanaged" />
      <button onClick={handleSecondClick}>Click me!</button>
      <div
        draggable
        onDrag={handleDrag}
        onDragLeave={handleDragLeave}
        style={{ width: "200px", height: "200px", backgroundColor: "red" }}
      ></div>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: isDrag,
          marginTop: 15,
        }}
      ></div>
    </div>
  );
};

export default EventsExample;
