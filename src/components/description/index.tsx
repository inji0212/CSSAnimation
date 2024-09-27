import AniButton from "../aniButton";
import HoverButton from "../hoverButton";

export default function Description() {
  return (
    <>
      <div className="container  flex  items-start flex-col font-bold max-w-60 ">
        <div className="whitespace-pre-wrap">
          Discover Why millions of entrepreneurs chose Shopify to build their
          business ㅡ
        </div>
        <p className=" from-[#e9f9f4] bg-gradient-to-r via-45% via-[#cfebfe] to-[#f2eefe] mb-4">
          from hello world to IPO
        </p>
        <AniButton />
        <HoverButton />
      </div>
    </>
  );
}
