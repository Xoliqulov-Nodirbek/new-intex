function Button({ children, className }) {
  return (
    <button className={`w-orderBtn bg-blue-base p-13 text-center rounded-xl text-white shadow-order_btn ${className}`}>
      {children}
    </button>
  );
}

export default Button;
