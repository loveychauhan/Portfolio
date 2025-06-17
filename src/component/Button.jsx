const Button = ({ Icon, name }) => {
  return (
    <button
      key={name}
      className="flex gap-1.5 cursor-pointer items-center border rounded-2xl px-2.5 py-1">
      <Icon />
      <span>{name}</span>
    </button>
  );
};

export default Button;
