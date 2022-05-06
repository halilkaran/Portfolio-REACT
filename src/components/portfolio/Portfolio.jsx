import "./portfolio.scss"
import Blog from "../../assets/BlogApp.png";
import PortfolioList from "../portfolioList/PortfolioList";
import { useState } from "react";
import { featuredPortfolio, mobilePortfolio, webPortfolio, contentPortfolio } from "../../data";
import { useEffect } from "react";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([])
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
        setData(mobilePortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
       setData(featuredPortfolio);
    }
    
  }, [selected])
  
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
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio