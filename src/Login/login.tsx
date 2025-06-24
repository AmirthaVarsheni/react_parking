 
import '../CSS/login.css';
import "tailwindcss";
function Login() {
 

  return (
    <>
      <div className="login-layout">
        <h1>Login</h1>
        <div>
          <form action="">
            <div className='label-section mb-4'>
            <label className="mb-8" htmlFor="user">Email or PhoneNumber</label>
             <input
              className="text-base labeltext"
              type="text"
              placeholder=""
            />
            </div>
            <div className='label-section '>
            <label className="mb-8" htmlFor="OTP">OTP</label>
             <input
              className="text-base labeltext"
              type="text"
              placeholder=""
            />
            </div>
            <div>
              <button>sumbit</button>
            </div>

          </form>
        </div>
      </div>

      <p>Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default Login;
