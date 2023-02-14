import { useSelector } from "react-redux";

const FirstName = () => {
  const name = useSelector((state) => state.user.firstName);
  return <div className="">{name}</div>;
};

export default FirstName;
