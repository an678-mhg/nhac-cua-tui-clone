import client from "./client";

export const getSong = async (key: string) => {
  const data = await client.get("/song", {
    params: {
      key,
    },
  });

  return data.data;
};

export const getLyric = async (key: string) => {
  const data = await client.get("/lyric", {
    params: {
      key,
    },
  });

  return data.data;
};
