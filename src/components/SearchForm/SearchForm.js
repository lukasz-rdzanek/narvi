import "./SearchForm.css";

import InfiniteScroll from "react-infinite-scroller";
import React, { useEffect, useState, useCallback } from "react";

import { useForm } from "react-hook-form";
import { useUsers } from "../../hooks/useUsers";

import { INPUT_LABEL, SEARCH_DELAY } from "../../constants/form";

import { Box } from "@mui/material";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { InfoMessage } from "../InfoMessage/InfoMessage";
import { Input } from "../Input/Input";
import { Loader } from "../Loader/Loader";
import { Tile } from "../Tile/Tile";

export const SearchForm = () => {
  const { register, watch } = useForm();
  const [username, setUsername] = useState("");

  const watchUsername = watch("username", "");

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useUsers(username);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (watchUsername !== username) {
        setUsername(watchUsername);
      }
    }, SEARCH_DELAY);

    return () => clearTimeout(timeoutId);
  }, [watchUsername, username]);

  const loadMore = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <Box className="search-form" data-testid="searchForm">
      <Input label={INPUT_LABEL} register={register("username")} />

      {username && isLoading && <Loader />}

      {error && <ErrorMessage error={error} />}

      {data && (
        <InfiniteScroll
          className="search-form__loader-box"
          pageStart={0}
          loadMore={loadMore}
          hasMore={hasNextPage}
          loader={<Loader />}
        >
          {data.pages.map((page) =>
            page.users.map((user) => <Tile key={user.id} {...user} />)
          )}
        </InfiniteScroll>
      )}

      {data && data.pages[0].users.length === 0 && !isLoading && (
        <InfoMessage />
      )}
    </Box>
  );
};
