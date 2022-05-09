import "./portfolio.scss";

import PortfolioList from "../portfolioList/PortfolioList";
import { useState } from "react";
import { featuredPortfolio, webPortfolio, contentPortfolio } from "../../data";
import { useEffect } from "react";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured"
    },
    {
      id: "web",
      title: "Web App"
    },
    {
      id: "mobile",
      title: "Mobile App"
    },
    {
      id: "content",
      title: "Content"
    }
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData("");
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            id={item.id}
            active={selected === item.id}
            setSelected={setSelected}
            key={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data ? (
          data.map((d) => (
            <div className="item" key={d.id}>
              <a href={d.url}>
                <img src={d.img} alt="" />
              </a>
              <h3>{d.title}</h3>
            </div>
          ))
        ) : (
          <h1>I will lern too</h1>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
