import { Character, Episode } from "rickmortyapi";

export const getEpisodeIds = (
  episodes?: Character["episode"]
): Episode["id"][] => {
  if (!episodes) return [];

  const episodeIds = episodes.map((episode) =>
    Number(episode.split("/").pop())
  );

  if (!episodeIds || episodeIds.length === 0) return [];
  return episodeIds;
};
