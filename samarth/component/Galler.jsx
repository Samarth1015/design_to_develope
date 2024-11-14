import { CiSearch } from "react-icons/ci";
import Card from "./Card";
let top = [
  "/gallery/1.png",
  "/gallery/2.png",
  "/gallery/3.png",
  "/gallery/4.png",
  "/gallery/5.png",
  "/gallery/6.png",
  "/gallery/7.png",
];
export default function Galler() {
  return (
    <div className="ml-20 bg-[#29274c]  h-screen">
      <div>
        <div className="top flex justify-between">
          <div className="p-9">
            <p className="content text-[#F5F5F5]  text-3xl font-bold">
              Top of the week!
            </p>{" "}
            <p className="font-bold text-[#C0CAD7AB]">
              explore the most viewed...
            </p>
          </div>
          <div className="search p-9 flex relative">
            <input
              type="text"
              className="bg-[#28274D] w-[395px] h-[43px] border-2 rounded-md border-[#393B70] text-[12px] pl-10"
              placeholder="Search Datewise..."
            />
            <CiSearch className="absolute right-14 size-6 top-14 transform -translate-y-1/2 text-[#393B70]" />
          </div>
        </div>
      </div>

      <div className="popular h-[158px]  flex  px-9 gap">
        {top.map((item) => {
          console.log(item);

          return <Card li={item} />;
        })}
        <div className=" rounded-3xl px-6 py-4 subscription h-[158px] w-[395px] bg-[#393B70]">
          <h1 className="text-[#fff]">Subscribe to Premium</h1>
          <p className="text-[#8E94A9]">
            Subscribe to unlock new features and if eligible, receive a share of
            revenue.
          </p>
          <button
            style={{
              background: "linear-gradient(90deg, #C19A51 0%, #5B4926 100%)",
            }}
            className=" h-5 w-[71px] text-[14px] rounded-[999px] text-[#fff] absolute right-16 "
          >
            Get it
          </button>
        </div>
      </div>
      <div className="images"></div>
    </div>
  );
}
