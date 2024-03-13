import Image from "next/image";
import { CrossButton, CancleButton, BuyButton } from "./Button";
import RangeInputExample from "./Range";

const Credit = () => {
  return (
    <div className="flex items-center justify-center absolute w-auto h-auto bg-gray-100">
      <div className="w-full max-w-2xl p-8 rounded-lg shadow-md bg-white relative">
        <div className="absolute mt-6 top-2 right-14">
          <CrossButton />
        </div>

        <div className="flex justify-center items-center">
          <Image
            className="rounded-full w-14 h-14"
            src={`https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRYaI1MmBYe7MHFRLoNH3m-4vkWSmtytZ6CWzddczL7Dnbq0M0u`}
            width={10}
            height={10}
            alt="userImg"
          />
        </div>
        <br />

        <div>
          <div className="flex-1 ml-4">
            <div className="flex justify-center items-center">
              <div className="font-bold text-2xl">Buy more credits</div>
            </div>
            <div className="flex justify-center items-center">
              <div className="text-lg">One video require around 2 credits</div>
            </div>
          </div>
        </div>
        <br />

        {/* handle the range of the credit  */}
        <RangeInputExample />

        <div className="flex justify-center items-center mb-5 mt-2">
          <p>1 credit ≈ $2</p>
        </div>
        <hr className="my-2" />
       

       {/* button to cancle and but */}
        <div className="flex justify-between gap-4">
          <CancleButton />
          <BuyButton />
        </div>
      </div>
    </div>
  );
};

export default Credit;
