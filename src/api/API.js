import axios from 'axios';

const API_KEY = '991596626fb93000a24867e82c352474';
const BASE_URL = 'https://api.themoviedb.org/3/movie?';



export const fetchTrendMovies = () => {
    return axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
    )
};
     
        
// const fetchMovie = async () => {
// 	try {
// 		const res = await axios.get(`BASE_URL`, {
// 			params: {
//           api_key: API_KEY,
//           query: this.searchQuery,
//           page: this.page,
//           include_adult: false,
//         },
// 		});
// 	} catch (err) {
// 		console.log(err);
// 	}
// };




// async function fetchMovie() {
//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }