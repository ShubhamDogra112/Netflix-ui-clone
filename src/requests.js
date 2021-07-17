const baseUrl = "https://api.themoviedb.org/3"
const apiKey = "942836b0b506cc32f5674cc262bd905f";
export const urls = {
    "trending": `${baseUrl}/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`,
    "top_rated": `${baseUrl}/discover/movie?api_key=${apiKey}&certification_country=US&sort_by=vote_average.desc`,
    "netflix_originals": `${baseUrl}/discover/movie?api_key=${apiKey}&with_networks=213`,
    "action": `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=10759`,
    "comedy": `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=35`,
    "crime": `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=80`,
    "mystery": `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=9648`,
    "sci-fi": `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=10765`
}