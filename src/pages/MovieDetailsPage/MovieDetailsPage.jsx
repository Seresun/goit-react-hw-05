import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { fetchMovieDetails } from "../../services/api";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLocationRef = useRef(location.state?.from || "/movies");

  useEffect(() => {
    fetchMovieDetails(movieId).then((data) => setMovie(data));
  }, [movieId]);

  if (!movie) {
    return <p>Loading movie details...</p>;
  }

  return (
    <div>
      <Link to={backLocationRef.current}>Go back</Link>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <nav>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default MovieDetailsPage;
