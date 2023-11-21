b8d7d89f197d26db40ec55b0893fc528

import axios from "axios";
const KEY_URL = "b8d7d89f197d26db40ec55b0893fc528"
axios.defaults.baseURL = 'themoviedb.org API';

export const fetchSearch = async ({ query, page}) => {
   
    const searchParams = new URLSearchParams({
        key: KEY_URL,
        q: query,
        image_type: "photo",
        orientation: "horizontale",
        safesearch: true,
        page,
        per_page: 12,
    });

    const response = await axios.get(`?${searchParams}`);
    return response.data;
};

