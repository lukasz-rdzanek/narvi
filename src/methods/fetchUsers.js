import axios from "axios";

import { GITHUB_API_URL, MAX_USERS_PER_PAGE } from "../constants/api";

import { hasMoreResults } from "./hasMoreResults";

export const fetchUsers = async ({ queryKey, pageParam = 1 }) => {
  const [, username] = queryKey;

  const { data } = await axios.get(GITHUB_API_URL, {
    params: {
      q: username,
      per_page: MAX_USERS_PER_PAGE,
      page: pageParam,
    },
  });

  return {
    users: data.items,
    nextPage: pageParam + 1,
    total_count: data.total_count,
    hasMore: hasMoreResults(data.items.length, pageParam, data.total_count),
  };
};
