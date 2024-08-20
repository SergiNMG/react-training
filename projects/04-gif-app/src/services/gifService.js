export const getGifs = async ({category}) => {
    const URL = "https://api.giphy.com/v1/gifs/search";
    const API_KEY = "api_key=m37G94R9zLcv4O1wIsZK5n3WCaB5vUxb";

    const response = await fetch(`${URL}?${API_KEY}&q=${category}&limit=10`);
    const { data } = await response.json();

    const gifs = data.map((gif) => ({
      id: gif.id,
      title: gif.title,
      text: gif.alt_text,
      image: gif.images.downsized_medium.url,
    }));

    return gifs;
  };