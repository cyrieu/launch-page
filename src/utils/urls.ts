import { isProd } from "./index"

export function getFrontendAppUrl() {
  return isProd() ? "https://base.usefound.app" : "http://localhost:3001"
}
