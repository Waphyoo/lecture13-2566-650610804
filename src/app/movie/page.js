import { MovieRow } from "@/components/MovieRow";
import { movieDB } from "@/libs/movieDB";

export default function Movie() {
  return (
    <div className="text-center">
      <p className="fw-bold fs-4">Top 10 Movies</p>
      {movieDB.map((m, i) => (
        <MovieRow
          key={m.id}
          id={m.id}
          title={m.title}
          detail={m.detail}
          rating={m.rating}
          number={i + 1}
        />
      ))}
    </div>
  );
}
