import React from "react";

interface Props {
  name: string;
}

function SkillsCard({ name }: Props) {
  return (
    <div className="relative skill-cards bg-brand rounded-3xl w-40 md:w-80">
      <img
        src={`/icons/Icon=${name}.svg`}
        alt="Description"
        className="absolute top-[65px] left-[32px]"
      />

      <h2 className="absolute left-[24px] bottom-[60px] font-main font-bold text-[20px] md:text-[31px] text-white">
        {name}
      </h2>
    </div>
  );
}

export default SkillsCard;
