const movies = [
    { title: "Dangal", genre: "Drama", rating: 8.4, releaseYear: 2016 },
    { title: "3 Idiots", genre: "Comedy", rating: 8.4, releaseYear: 2009 },
    { title: "Pushpa", genre: "Action", rating: 8.7, releaseYear: 2020 }
];


const addMovie = (collection, movie) => {
    collection.push(movie);
};
addMovie(movies, { title: "Singham Return", genre: "Action", rating: 8.0, releaseYear: 2024 });
console.log("------All movies------");
console.log(movies);


const listMoviesByGenre = (collection, genre) => {
    return collection.filter(movie => movie.genre === genre);
};
console.log("\n------Movies based on Genre(Action)------");
console.log(listMoviesByGenre(movies, "Action"));


const findHighestRatedMovie = collection => {
    return collection.reduce((highest, movie) => movie.rating > highest.rating ? movie : highest);
};
console.log("\n------Movie based on Highest rating------");
console.log(findHighestRatedMovie(movies));


const movieTitle = collection => {
    return collection.map(movies => movies.title);
}
console.log("\n------Movies Name------");
console.log(movieTitle(movies));


const moviesAfterYear = (collection, year) => {
    return collection.filter(movie => movie.releaseYear > year);
};
console.log("\n------Movies release after 2015------");
console.log(moviesAfterYear(movies, 2015))


console.log("\n------Using template Literals------");
movies.forEach(movie => {
    console.log(`${movie.title} (${movie.releaseYear}) is a ${movie.genre} movie with a rating of ${movie.rating}.`);
});
