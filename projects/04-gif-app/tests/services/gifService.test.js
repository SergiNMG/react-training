import { getGifs } from "../../src/services/gifService";

describe("test in gifService()", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test("should return a gif array", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        data: [
          {
            id: "1",
            title: "Naruto",
            alt_text: "Naruto Gif",
            images: {
              downsized_medium: {
                url: "https://naruto.com/naruto.jpg",
              },
            },
          },
        ],
      })
    );

    const gifs = await getGifs(["Naruto"]);
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0].title).toBe("Naruto");
  });
});
