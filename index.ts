import { Application, ApplicationConfig } from "innerscope";
import { route_config } from "./routes";
import HomePage from "./pages";

export const app = new Application({
  title: "Innerscope DocuLibrary",
  routes: route_config,
});
app.onStart(HomePage);
