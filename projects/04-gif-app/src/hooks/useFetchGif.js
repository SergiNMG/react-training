import { useState, useEffect } from "react";
import { getGifs } from "../services/gifService";

export const useFetchGif = ({ category }) => {
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getNewGif = async () => {
      try {
        const gifs = await getGifs({ category });
        setGifs(gifs);
        setIsLoading(false);
      } catch {
        console.error("Error while getting Gifs", error);
      }
    };
  
    useEffect(() => {
      getNewGif();
    }, []);

    return { gifs, isLoading }
}