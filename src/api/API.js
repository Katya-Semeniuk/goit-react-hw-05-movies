import axios from 'axios';

const API_KEY = '991596626fb93000a24867e82c352474';



// export const fetchTrendMovies = () => {
//     return axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
//     )
// };

export const fetchTrendMovies = async () => { 
   const  BASE_URL= 'https://api.themoviedb.org/3/trending/all/day?'
    try { 
        const responcse = await axios.get(BASE_URL, {
            params: {
                api_key:API_KEY,
            }
        });
        return responcse;
    }
    catch (error) {
        console.log(error); 
    }
};


export const fetchMovieById = async (id) => { 
    try { 
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
        return response;
    }
    catch (error) {
        console.log(error);
    }
};

export const fetchCastById = async (id) => { 
    try { 
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
        return response;
    }
    catch (error) {
        console.log(error);
    }
};

export const fetchMovieReview = async (id) => { 
    try { 
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
        return response;
    }
    catch (error) {
        console.log(error);
    }
};

