import { isProd } from "./index"

export function getFrontendAppUrl() {
  return isProd() ? "https://app.found.app" : "http://localhost:3001"
}
