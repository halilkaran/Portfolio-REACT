import "./testimonials.scss"

 

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Mehmet Akkoc",
      title: "Co-Pilot & Aviation Engineer & Former Fighter Pilot",
      img: "https://media-exp1.licdn.com/dms/image/C5603AQHpJgFTNtYmbQ/profile-displayphoto-shrink_800_800/0/1585771087222?e=1657756800&v=beta&t=gk1qmNQqmyT1s3LPb-armnxqMo9_ObLdJwYbF8v88Xs",
      icon: "assets/linkedin.png",
      url: "https://www.linkedin.com/in/yusuf-celik-8a12b2208/",
      desc: "It's a real pleasure to work with Halil. He always works with practical and complementary solutions in his job."
    },
    {
      id: 2,
      name: "Yusuf Celik",
      title: "Software QA Test Engineer",
      img: "https://media-exp1.licdn.com/dms/image/C5603AQFVnMuiKAUn_w/profile-displayphoto-shrink_800_800/0/1615686221745?e=1657756800&v=beta&t=vxfYfPCge6ZxCgqm0HAznXUA6CpuL7O9N-gENeMMhPI",
      icon: "assets/linkedin.png",
      url: "https://www.linkedin.com/in/yusuf-celik-8a12b2208/",
      desc: " It was really fun when I worked with Halil. he can make people love and enjoy every job.  ",
      featured: true
    },
    {
      id: 3,
      name: "Prof. Murat Çakıroğlu",
      title: "Software Engineer ",
      img: "https://media-exp1.licdn.com/dms/image/C4D03AQGiSST_UO-2Rw/profile-displayphoto-shrink_800_800/0/1609158397322?e=1657756800&v=beta&t=0hezbnldicpJApJTQbx0IgGt5B2dig1KOQj9VcXkt4E",
      icon: "assets/linkedin.png",
      url: "https://www.linkedin.com/in/yusuf-celik-8a12b2208/",
      desc: "It was really nice to train him. He always improved his learning by challenging me and himself."
    }
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}  key={d.id}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <a href={d.url}>
                <img className="right" src={d.icon} alt="" />
              </a>
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
