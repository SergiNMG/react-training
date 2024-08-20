import { GifCard } from "../GifCard/GifCard";
import "./GifGrid.scss";
import { useFetchGif } from "../../hooks/useFetchGif";

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGif({ category });

  return (
    <>
      <div className="l-gifs">
        {isLoading && <p>Loading...</p>}
        {gifs.map((gif) => (
          // <img key={gif.id} src={gif.image} alt={gif.title} />
          <GifCard key={gif.id} {...gif}></GifCard>
        ))}
      </div>
    </>
  );
};
