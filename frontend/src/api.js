const apiBaseUrl = import.meta.env.VITE_API_URL?.replace(/\/+$/, "");

if (!apiBaseUrl) {
  throw new Error("VITE_API_URL must be set in the frontend environment.");
}

export const apiUrl = (path) =>
  `${apiBaseUrl}${path.startsWith("/") ? path : `/${path}`}`;
