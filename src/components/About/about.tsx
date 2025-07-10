import aboutImg from '../../assets/about.png';

function About() {
  return (
    <>
      <div className="about-layout">
        <img className="about-img" src={aboutImg} alt="About" />

        <div className="about-text">
          <p>
            I’m a passionate front-end engineer with over two years of professional experience developing sleek and scalable web applications. My primary focus is on delivering seamless user experiences using technologies like React.js, Vue.js, and Next.js.
          </p>
          <p>
            I’m also expanding into full-stack development with Node.js and robust databases like PostgreSQL and MongoDB. I believe in writing clean, maintainable code and thrive in Agile environments where collaboration and quality matter.
          </p>
          <p>
            Whether it’s integrating secure PayPal payment gateways or troubleshooting critical issues in production, I’m committed to delivering solutions that work — beautifully and reliably.
          </p>
        </div>
      </div>

      <style>
        {`
          .about-layout {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 60px;
            text-align: center;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
           
          }

          .about-img {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 20px;
          }

          .about-text {
            max-width: 800px;
            font-size: 1rem;
            line-height: 1.6;
            color: #fff;
          }
        `}
      </style>
    </>
  );
}

export default About;
