import { useState } from "react";

const Present = ({
  numberOfBoughtProducts,
  isCartOpen,
  setIsCartOpen,
}: {
  numberOfBoughtProducts: number;
  isCartOpen: boolean;
  setIsCartOpen: (arg: boolean) => void;
}) => {
  const [isOnHover, setIsOnHover] = useState<boolean>(false);

  const onHoverHandler = () => {
    setIsOnHover(!isOnHover);
  };

  return (
    <div
      onClick={() => setIsCartOpen(!isCartOpen)}
      className="group flex relative mt-[17px] mr-5 cursor-pointer select-none"
    >
      <div
        className={`${
          isOnHover || isCartOpen
            ? "visible opacity-100 translate-x-0 delay-200"
            : "invisible opacity-0 translate-x-[10%]"
        } absolute w-[360px] right-3 bg-[#ff6666c2] px-6 py-1.5 rounded-l-full translate-y-[-2px] text-white transition-all ease-in-out duration-600 `}
      >
        Bisher gekaufte Geschenke ansehen &gt;&gt;&gt;
      </div>
      <div
        className={`${
          isOnHover || isCartOpen
            ? "bg-[#ff6666] scale-[120%] rotate-[10deg] translate-y-[-2px]"
            : ""
        } relative w-[px] h-[38px] p-1 rounded-full flex items-center justify-center transition-all ease-in-out duration-200 translate-y-[-2px]`}
        onMouseEnter={() => onHoverHandler()}
        onMouseLeave={() => onHoverHandler()}
      >
        <svg
          fill="#000000"
          width="30px"
          height="30px"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1024 320.496c0-35.344-28.654-64-63.998-64H850.754c28.272-27.888 46.368-64.447 46.368-109.472 0-55.44-31.84-115.664-121.216-115.664-117.6 0-215.84 125.216-262 195.408-46.192-70.176-147.44-195.392-265.024-195.392-89.376 0-121.216 60.224-121.216 115.664 0 45.008 18.592 81.584 47.44 109.472H64.002c-35.344 0-64 28.656-64 64V512.08h64.56v416.56c0 35.344 28.655 64 64 64h767.68c35.343 0 64-28.656 64-64V512.064h63.76V320.496zM775.906 95.376c39.568 0 57.216 16.625 57.216 51.665 0 71.088-79.344 109.439-153.968 109.439H570.818c45.471-67.536 125.504-161.104 205.088-161.104zm-527.025.001c79.6 0 162.655 93.568 208.127 161.088H348.64c-74.624 0-156.976-39.344-156.976-110.432 0-35.024 17.648-50.656 57.217-50.656zm711.12 352.687h-416V320.496h416v127.568zm-896-127.568h416v127.568h-416zm64.56 191.568h351.44v416.56h-351.44zm767.696 416.56H544.001v-416.56h352.256v416.56z" />
        </svg>
        <div className="absolute top-[-7px] right-[-7px] bg-[#fffe] border-black border-2 w-[1.3rem] h-[1.3rem] rounded-full">
          <div className="absolute mx-auto left-0 right-0 top-[50%] translate-y-[-50%] text-center">
            {numberOfBoughtProducts}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Present;
