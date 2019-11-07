import { isProd } from "./index"

export function getFrontendAppUrl() {
  return isProd() ? "https://app.usefound.app" : "http://localhost:3001"
}
