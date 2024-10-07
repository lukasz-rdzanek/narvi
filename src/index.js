import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";

import reportWebVitals from "./reportWebVitals";

import App from "./pages/App/App";

const queryClient = new QueryClient();

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);

reportWebVitals();
