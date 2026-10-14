import data from "./toaster-project.json";
import { parseProject, type SongProject } from "./model";
export { renderLyrics as sunoLyrics } from "./production";
export function toasterProject(): SongProject {
  return parseProject(JSON.stringify(data));
}
