import "./works.scss";
 
 
import { useState } from "react";
 
const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    {
      id: "1",
      icon: "../../assets/mobile.png",
      title: "Web Design",
      desc: "I have published many projects that I have done on netlify. I improved my React and JS skills with Bootcamp. ",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
    },
    {
      id: "2",
      icon: "../assets/globe.png",
      title: "Mobile Application",
      desc: "I will lern too",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg"
    },
    {
      id: "3",
      icon: "../assets/writing.png",
      title: "Branding",
      desc: " ",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg"
    }
  ];

  const handleclick = (prop) => {
  prop === "left"
    ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
    : setCurrentSlide(currentSlide <data.length-1 ? currentSlide + 1 : 0);
}
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((item) => (
          <div className="container" key={item.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={item.icon} alt="m" />
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <span>
                    {" "}
                    <a href="https://app.netlify.com/teams/halilkarancontact/sites">
                      Netlify
                    </a>
                  </span>
                </div>
              </div>
              <div className="right">
                <img src={item.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        alt="a"
        className="arrow left"
        onClick={() => handleclick("left")}
      />
      <img
        src="assets/arrow.png"
        alt="b"
        className="arrow right"
        onClick={() => handleclick()}
      />
    </div>
  );
};

export default Works;
