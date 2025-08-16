import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormControl, FormHelperText, Input, FormLabel, Button } from '@mui/material';
import '../../CSS/welcome.css';
import Loginlogo from '../../assets/Loginlogo.png';
import type { AppDispatch, RootState } from '../../store';
import AlertBox from '../Alert/Alert';
import { useSelector, useDispatch } from 'react-redux';
import loginSlice, { sendOTPthunk,verifyOTPthunk } from '../../store/login'
import type { LoginState } from '../../interface/interface';

function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const { setField }: any = loginSlice.actions;
  const loginForm: any = useSelector((state: RootState) => state.login as LoginState);
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState<boolean>(false);
  const [isOTP, setIsOTP] = useState<boolean>(false);
  const [isValidOTP, setisValidOTP] = useState<boolean>(false)
  const [generatedOTP, setgeneratedOTP] = useState('')

  const generateOTP = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(loginForm.contact)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
    try {
      const resp: any = await dispatch(sendOTPthunk(loginForm.contact))
      if (resp?.meta?.requestStatus === 'fulfilled') {
        setgeneratedOTP(resp?.payload)
        setIsOTP(true);
      }
    } catch (error) {
      console.error('Failed to send OTP:', error);
    }
  };



  const handleSubmit = async () => {
    try {
      const verified :any = await dispatch(verifyOTPthunk({ contact: loginForm?.contact, otp: loginForm?.otp }))
      if (verified?.meta?.requestStatus === 'fulfilled') {
        setisValidOTP(true);
        localStorage.setItem('user', JSON.stringify(verified?.data?.user));
        navigate(`/spendee/dashboard/${verified?.data?.user?.id}`);
      } else {
        alert('Incorrect OTP. Please try again.');
      }
    } catch (error) {
      console.error('OTP verification failed:', error);
      alert('Verification error. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <img className="profile-pic" src={Loginlogo} alt="Login logo" />
        <div className="wel-text">The only app that gets your money into shape</div>
      </div>
      <div className="right-section">
        <div className="secondary-layout">
          <h1>Log in</h1>
          {isOTP && <AlertBox severity={isValidOTP ? 'success' : 'info'} message={isValidOTP ? 'OTP is validated succesfully' : `Your OTP is ${generatedOTP}`} />}
          <FormControl error={emailError} fullWidth margin="normal">
            <FormLabel htmlFor="email-input">Email address</FormLabel>
            <Input
              id="email-input"
              type="email"
              value={loginForm.contact}
              onChange={(e) => dispatch(setField({ field: 'contact', value: e.target.value }))}
              aria-describedby="email-helper-text"
            />
            <FormHelperText id="email-helper-text">
              {emailError ? 'Please enter a valid email address.' : ' '}
            </FormHelperText>
            {isOTP && 
              <div style={{ marginTop: '1rem' }}>
                <FormLabel htmlFor="otp-input">OTP</FormLabel>
                <Input
                  id="otp-input"
                  type="number"
                  value={loginForm.otp}
                  onChange={(e) => dispatch(setField({ field: 'otp', value: e.target.value }))}
                  aria-describedby="otp-helper-text"
                />
              </div>
            }
          </FormControl>

          <Button
            variant="contained"
            color="primary"
            className="button-keys"
            onClick={() => (isOTP && loginForm.otp !== '') ? handleSubmit() : generateOTP()}
          >
            {isOTP ? 'Submit' : 'Get OTP'}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;


