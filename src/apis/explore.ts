import client from "./client";

export const getExplore = async (
  page: number = 1,
  type: "song" | "playlist" | "mv" = "song"
) => {
  const data = await client.get("/explore", {
    params: {
      type,
      page,
    },
  });

  return data.data;
};

export const getExploreArtists = async (gender: number) => {
  const data = await client.get("/exploreArtists", {
    params: {
      gender,
    },
  });

  return data.data;
};
