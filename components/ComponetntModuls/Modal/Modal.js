export const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClick = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      id="wrapper"
      onClick={handleClick}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <div className="w-96 h-[350px] bg-white p-2 rounded-lg">
        {/* Close btn */}
        <div className="flex justify-end">
          <button
            onClick={() => onClose()}
            className="text-black text-2xl w-10 bg-amber-400 rounded-md"
          >
            X
          </button>
        </div>
        {/* Content */}
        {children}
      </div>
    </div>
  );
};
