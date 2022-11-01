function Button({ children, className }) {
  return (
    <button className={`max-w-orderBtn w-full bg-blue-base p-2 md:p-13 text-center rounded-xl text-white shadow-order_btn ${className}`}>
      {children}
    </button>
  );
}

export default Button;
