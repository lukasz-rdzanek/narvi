import { Typography } from "@mui/material";

import { FETCH_NO_USERS } from "../../constants/api";

export const InfoMessage = () => {
  return (
    <Typography align="center" marginTop={2} data-testid="infoMessage">
      {FETCH_NO_USERS}
    </Typography>
  );
};
