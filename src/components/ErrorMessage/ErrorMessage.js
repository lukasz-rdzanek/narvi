import { Typography } from "@mui/material";

import { FETCH_USERS_ERROR_MESSAGE } from "../../constants/api";

export const ErrorMessage = ({ error }) => {
  if (error) {
    // * Here should be report for Sentry or other system
    const timestamp = new Date().toISOString();

    console.error(`[${timestamp}] Error: ${error.message}`, error);
  }

  return (
    <Typography
      color="error"
      align="center"
      marginTop={2}
      data-testid="errorMessage"
    >
      {FETCH_USERS_ERROR_MESSAGE}
    </Typography>
  );
};
