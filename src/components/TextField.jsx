const TextField = (props) => {
  const { className } = props;

  return (
    <input
      {...props}
      className={`bg-white m-h-14 px-2 py-5 focus:border-blue focus:outline-none ${className}`}
    />
  );
};

export default TextField;
