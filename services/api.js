import { create } from 'apisauce';

const createDudesApi = () => {
    const api = create({
      baseURL: import.meta.env.VITE_API_URL,
      credentials: 'omit',
      headers: {
        'X-DUDES-Key': 'a1dce51c-glrt-7553-iyiw-dac8a402f96d'
      }
    });
  
    const postContactForm = (data) => api.post('/contactform', data);
  
    return {
      postContactForm,
    };
  };
  export default createDudesApi();