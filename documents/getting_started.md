# Getting Started With Innerscope

To get started with innerscope we need to install the library within your testing runtime;

```
npm install innerscope@latest
```

If you are not using the innerscope cli tool then ;

- Create a directory with components, pages, routes.ts files and subfolders in your src
- Then we need to initialize the app by adding routes and some defaults values.

## Initializing Your Application

After referencing your main script within html, you need to modify like this:

```typescript
import { Application, ApplicationConfig } from "innerscope";
import { route_config } from "./routes";
import HomePage from "./pages";

export const app = new Application({
  title: "Innerscope DocuLibrary",
  routes: route_config,
});
app.onStart(HomePage);
```

Your `routes.ts` will have this structure:

```typescript
import { PageRouterConfig, Routes } from "innerscope";
import HomePage from "./pages";

export const page_routes: Routes = [
  {
    path: "./",
    component: HomePage,
  },
];

export const route_config: PageRouterConfig = {
  mode: "history",
  routes: page_routes,
};
```

Your file exporting the function HomePage in a pages folder may have;

```typescript
import { LinearLayout, Button } from "innerscope";
import { app } from "..";

export default function HomePage() {
  const page = LinearLayout(app.root);
  page.ElementAlignment = "VCENTER";
  page.ParentFill = "FILLXY";
  page.LayoutDirection = "TOP_TO_BOTTOM";

  Button(page).textContent = "Hello World";
}
```
