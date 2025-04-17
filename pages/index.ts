import { LinearLayout, Button } from "innerscope";
import { app } from "..";

export default function HomePage() {
  const page = LinearLayout(app.root);
  page.ElementAlignment = "VCENTER";
  page.ParentFill = "FILLXY";
  page.LayoutDirection = "TOP_TO_BOTTOM";

  Button(page).textContent = "Hello World";
}
