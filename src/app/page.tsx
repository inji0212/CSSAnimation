"use client";
import Description from "@/components/description";
import Icon from "@/components/Icon";
import Text from "@/components/text";
import CustomSelector from "@/components/customSelector";

export default function Home() {
  return (
    <body>
      <header className=" flex gap-5 h-16 items-center from-[#e9f9f4] bg-gradient-to-r via-45% via-[#cfebfe] to-[#f2eefe] fixed top-0 w-full  ">
        <Icon />
        <Text />
      </header>
      <main className="min-h-screen overflow-auto flex justify-center items-center flex-col gap-4 ">
        <Description />
        <CustomSelector />
      </main>
    </body>
  );
}
