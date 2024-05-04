import React from "react";
import Image from "next/image";
import { useGlobal } from "@/hooks/GlobalContext";

function ProfileImage() {
  const { globalBoolean } = useGlobal();
  return (
    <div>
      <Image
        src="/profile.png"
        alt="Optimized Logo"
        width={0}
        height={0}
        sizes="100vw"
        className={`w-full ${globalBoolean ? "rounded-3xl" : ""}`}
      />
    </div>
  );
}

export default ProfileImage;
