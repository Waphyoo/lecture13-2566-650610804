import { movieDB } from "@/libs/movieDB";

export default function MovieId(params) {
  const id = Number(params.id);
  const selMovie = movieDB.find((m) => m.id === id);
  if (!selMovie) {
    return <p className="text-center">Movie is not found</p>;
  }
  return (
    <div className="d-flex justify-content-center gap-3">
      <img src={selMovie.imgSrc} width="200" />
      <div>
        <p className="fw-bold fs-4">{selMovie.title}</p>
        <p>{selMovie.detail}</p>
        <span className="fw-bold fs-4 text-primary d-flex gap-1">
          <IconStar size={35} />
          {selMovie.rating}
        </span>
      </div>
    </div>
  );
}
