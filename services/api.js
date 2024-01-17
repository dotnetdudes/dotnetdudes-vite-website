import { create } from 'apisauce';

const createDudesApi = () => {
    const api = create({
      baseURL: import.meta.env.VITE_API_URL,
      credentials: 'omit',
      headers: {
        'X-DUDES-Key': import.meta.env.VITE_API_KEY
      }
    });
  
    const postContactForm = (data) => api.post('/contactform', data);
  
    return {
      postContactForm,
      axiosInstance: api.axiosInstance
    };
  };
  export default createDudesApi();