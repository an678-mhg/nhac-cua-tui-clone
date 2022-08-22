import client from "./client";

export const getVideoDetail = async (key: string) => {
  const data = await client.get("/video", {
    params: {
      key,
    },
  });

  return data.data;
};
