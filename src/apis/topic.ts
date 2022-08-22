import client from "./client";

export const getTopicDetail = async (key: string) => {
  const data = await client.get("/topic", {
    params: {
      key,
    },
  });

  return data.data;
};

export const getTopics = async () => {
  const data = await client.get("/topics");
  return data.data;
};
