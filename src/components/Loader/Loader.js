import "./Loader.css";

import { CircularProgress } from "@mui/material";

export const Loader = () => {
  return (
    <CircularProgress className="loader" data-testid="loader" size="3rem" />
  );
};
