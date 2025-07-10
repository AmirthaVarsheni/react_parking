import '../../CSS/welcome.css'
import profilepic from '../../assets/profilepic.png';
import { useNavigate } from 'react-router-dom';
 
function Login() {
  const navigate = useNavigate()
  const navigateMain =() =>{
  navigate('/portfolio/about')
  }
  return (
    <>
      <div className="main-layout">
        <img className="profile-pic" src={profilepic} alt="Profile" />
        <div>
          <div className="wel-text">Hello, I'm Amirtha</div>
          <div className="wel-text">I'm a Full-Stack Developer</div>
          <div className="intro-text">
            I build modern web applications with clean, maintainable code.  
            Focused on performance, usability, and simplicity.  
            Turning ideas into scalable web solutions.  
            Passionate about code, design, and user experience.  
            Crafting full-featured apps with React and Node.js.  
            Always learning. Always building.
          </div>
          <div className='start-button'>
            <button className='button-keys' onClick={navigateMain}>Let's get start </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
