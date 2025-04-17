# How Innerscope Works

Innerscope is a thin wrapper around the DOM functions available to make creating pure javascript
based applications simpler.

The library introduces an `Application` class- it allows you to declare variables that are
common.

For example when initializing the app, you will have these available to modify;

- routes
- title
- icon
- statusbarcolor
- allowzoom

The app would be initialized like;

```javascript
import { Application, ApplicationConfig } from "innerscope";
import { route_config } from "./routes";
import HomePage from "./pages";

export const app = new Application({
  title: "Innerscope DocuLibrary",
  routes: route_config,
});

//title & routes must always be declared
app.onStart(HomePage);
```

## Available app Methods

After declaration of your app there are these methods you can use to gain control over your spa.

| **Method Name** | **Event Type**      | **Event Trigger**                            | **Purpose**                                 |
|------------------|---------------------|-----------------------------------------------|---------------------------------------------|
| `onExit`         | `beforeunload`      | When user tries to close/refresh the page     | Handle cleanup or warning on exit           |
| `onBack`         | `popstate`          | When navigating back/forward in history       | Handle browser history navigation           |
| `onStart`        | `load`              | When the page finishes loading                | Initialize actions on page load             |
| `onPause`        | `blur`              | When the page loses focus                     | Pause or save state when user switches tab  |
| `onResume`       | `focus`             | When the page gains focus                     | Resume tasks when user returns to page      |
| `onOffline`      | `offline`           | When the browser goes offline                 | Handle loss of network connectivity         |
| `onOnline`       | `online`            | When the browser comes back online            | Handle restoration of network connectivity  |
| `onResize`       | `resize`            | When the window is resized                    | Adjust layout or elements on resize         |
| `onScroll`       | `scroll`            | When the user scrolls the window              | Handle scroll-based behaviors               |
| `addRoute`       | *(custom method)*   | Adds a route to `router_map`                  | Register route path with callback           |
| `openRoute`      | *(custom method)*   | Triggers route handling logic                 | Navigate to a registered route              |

---

### Sample use

```javascript
app.onStart(HomePage);
app.onPause(PauseGame);
```
