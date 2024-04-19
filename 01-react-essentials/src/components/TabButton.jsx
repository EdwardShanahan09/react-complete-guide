const TabButton = ({ children, onSelect }) => {
  const handleClick = () => {
    console.log("Hello");
  };
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
};

export default TabButton;
