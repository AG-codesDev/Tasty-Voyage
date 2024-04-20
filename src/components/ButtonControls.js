const ButtonControls = (props) => {
  const { data } = props;
  const { resList, setResList } = data;
  console.log(resList);
  setResList(null);
  console.log(resList);
};

export default ButtonControls;
