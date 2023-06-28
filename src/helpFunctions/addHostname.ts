import "dotenv";

export function addHostName(url: string): string {
  return import.meta.env.VITE_APP_API_HOSTNAME + "/" + url;
}
