import "./portfolioList.scss";

const PortfolioList = ({ id, title, active, setSelected }) => {
  return (
    <li onClick={() =>setSelected(id) } className={active ? "portfolioList active " : "portfolioList"}>
      {title}
    </li>
  );
};

export default PortfolioList;
