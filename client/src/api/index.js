import axios from 'axios';

const url = 'https://backend-memories-dpz6.onrender.com/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost); 