import React from "react";

interface Props {
  name: string;
}

function WorkCard({ name }: Props) {
  return (
    <div className="flex-1 overflow-hidden relative">
      <img
        src={`images/${name}.png`}
        alt="Optimized Logo"
        className="w-full h-full object-cover"
      ></img>
    </div>
  );
}

export default WorkCard;
