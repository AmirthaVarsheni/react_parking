import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

export const sendOTP = (contact: string) => axios.post(`${API_BASE_URL}/generateOTP/send`, { contact });
export const verifyOTP = (data: any) => axios.post(`${API_BASE_URL}/generateOTP/verify`,data);
export const postFrom = (data:any) => axios.post(`${API_BASE_URL}/postForm/expense`,data);
export const getExpenseFrom = (ContactId:any,currentMonth:any) => axios.get(`${API_BASE_URL}/getForm/getExpense/${ContactId}/${currentMonth}`);
export const putExpenseForm = (id:any,data:any) =>  axios.put(`${API_BASE_URL}/putForm/Expense/${id}`,data);