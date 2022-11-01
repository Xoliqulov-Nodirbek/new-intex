const ArrowBtn = ({ right, handleClick, handleLeftBtnClick }) => {
  return (
    <button
      onClick={right === "right" ? handleClick : handleLeftBtnClick}
      className={`${
        right === "right"
          ? "right z-40 border-none rounded-full w-9 rotate-180 h-9 text-base bg-azure flex items-center justify-center ml-4 active:bg-blueActive active:text-white"
          : "border-none rounded-full w-9 h-9 bg-azure text-base flex items-center justify-center active:bg-blueActive active:text-white"
      }`}
    >
      <svg
        width="18"
        height="14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.336 1.545.818 7.064l5.518 5.518M16.273 7.063H.973"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default ArrowBtn;
