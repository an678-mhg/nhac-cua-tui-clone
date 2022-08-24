import client from "./client";

export const getTopKeyword = async () => {
  const res = await client.get("top-keyword");
  return res.data;
};

export const searchKeyword = async (keyword: string) => {
  const res = await client.get("search", {
    params: {
      keyword,
    },
  });

  return res.data;
};
