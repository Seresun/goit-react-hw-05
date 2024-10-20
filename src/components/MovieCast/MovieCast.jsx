import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieCast } from "../../services/tmdbApi";

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then((data) => setCast(data.cast));
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            {actor.name} as {actor.character}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieCast;
