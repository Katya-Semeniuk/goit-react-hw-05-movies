import axios from 'axios';

const API_KEY = '991596626fb93000a24867e82c352474';
const BASE_URL = 'https://api.themoviedb.org/3/movie?';



// export const fetchTrendMovies = () => {
//     return axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
//     )
// };
     
export const fetchTrendMovies = async () => { 
    try { 
        const responcse = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
        );
        return responcse;
    }
    
    catch (error) {
        console.log(error); 
    }
};



export const fetchMovieById = async () => { 
    try { }
    catch (error) {
        console.log(error);
    }
};