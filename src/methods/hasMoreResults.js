import { MAX_USERS_PER_PAGE } from "../constants/api";

export const hasMoreResults = (currentItemsCount, pageParam, totalCount) => {
  return currentItemsCount > 0 && pageParam * MAX_USERS_PER_PAGE < totalCount;
};
