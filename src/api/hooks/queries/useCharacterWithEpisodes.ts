import { useQuery } from "@tanstack/react-query";
import { Character, getEpisode } from "rickmortyapi";
import useCharacter from "./useCharacter";
import { getEpisodeIds } from "../../helpers/getEpisodeIds";

export const useCharacterWithEpisodes = (characterId: Character["id"]) => {
  const { data: characterData, isPending: isCharacterPending } =
    useCharacter(characterId);
  const episodeIds = getEpisodeIds(characterData?.data?.episode);

  const {
    data,
    isPending: isEpisodesPending,
    error,
  } = useQuery({
    queryKey: ["episodes", episodeIds],
    queryFn: () => getEpisode(episodeIds),
    enabled: !!episodeIds.length,
  });

  const episodes = data?.data
    ? Array.isArray(data.data)
      ? data.data
      : [data.data]
    : [];

  return {
    data,
    isPending: isCharacterPending || isEpisodesPending,
    error,
    character: characterData?.data,
    episodes,
  };
};
