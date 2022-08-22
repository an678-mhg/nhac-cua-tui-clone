import client from "./client";

export const getPlaylistDetail = async (key: string) => {
  const data = await client.get("/playlist", {
    params: {
      key,
    },
  });

  return data.data;
};
