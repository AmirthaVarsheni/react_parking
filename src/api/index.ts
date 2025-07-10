import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

export const sendOTP = (contact: string) => axios.post(`${API_BASE_URL}/generateOTP/send`, { contact });
export const verifyOTP = (data:any) => axios.post(`${API_BASE_URL}/generateOTP/verify`,data)
