const TabButton = ({ children, onSelect, isSelected }) => {
  const handleClick = () => {
    console.log("Hello");
  };
  return (
    <li>
      <button className={isSelected ? "active" : ""} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
