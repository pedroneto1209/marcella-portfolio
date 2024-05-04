"use client";

import ProfileImage from "@/components/profile/ProfileImage";
import { useGlobal } from "@/hooks/GlobalContext";
import React, { useEffect } from "react";

function ProfileContainer() {
  const { globalBoolean, startGlobalBoolean } = useGlobal();

  useEffect(() => {
    startGlobalBoolean();
  }, []);

  return (
    <div
      className={`flex flex-col space-y-3 ${globalBoolean ? "px-8 pt-20" : ""}`}
    >
      {globalBoolean && (
        <>
          <h1 className="font-main font-semibold text-[61px] text-black">
            Be Different
          </h1>
          <h1 className="font-main font-semibold text-[61px] text-black">
            Be Effective
          </h1>
          <h1 className="font-main font-semibold text-[61px] text-black">
            Be Created
          </h1>
        </>
      )}
      <ProfileImage />
    </div>
  );
}

export default ProfileContainer;
