import "./works.scss";
import mobile from "../../assets/mobile.png";
import blog from "../../assets/BlogApp.png";
const works = () => {
  return (
    <div className="works" id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={mobile} />
                </div>
                <h2>Title</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur perspiciatis, corporis consectetur provident velit
                  earum alias maxime rerum!  
                </p>
                <span>Project</span>
              </div>
            </div>
            <div className="right">

              <img src={blog} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default works;
