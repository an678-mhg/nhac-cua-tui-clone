import client from "./client";

export const getBXH = async () => {
  const res = await client.get("/bxh");
  return res.data;
};
