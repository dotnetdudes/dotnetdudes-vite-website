import { create } from 'apisauce';

const createBlogsApi = () => {
    const api = create({
      baseURL: import.meta.env.VITE_BLOGS_API_URL,
      credentials: 'omit',
      headers: {
        'Bearer': 'token',
      }
    });
  
    const postContactForm = (data) => api.post('/contactform', data);
  
    return {
      postContactForm,
    };
  };
  export default createBlogsApi();