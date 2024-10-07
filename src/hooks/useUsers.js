import { useInfiniteQuery } from "react-query";

import { fetchUsers } from "../methods/fetchUsers";

import {
  MAX_STORAGE_CACHE_TIME,
  STALE_FRESH_CACHE_TIME,
} from "../constants/api";

export const useUsers = (username) => {
  return useInfiniteQuery(["users", username], fetchUsers, {
    enabled: !!username,

    getNextPageParam: (lastPage) =>
      lastPage.hasMore ? lastPage.nextPage : undefined,

    staleTime: STALE_FRESH_CACHE_TIME,

    cacheTime: MAX_STORAGE_CACHE_TIME,
  });
};
