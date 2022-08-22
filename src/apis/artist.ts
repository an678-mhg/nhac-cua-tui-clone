import client from "./client";

export const getArtistDetails = async (key: string) => {
  const data = await client.get("/artist", {
    params: {
      key,
    },
  });

  return data.data;
};
