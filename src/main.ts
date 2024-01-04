import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./app/main-page/main.config";
import { AppComponent } from "./app/main-page/main.component";

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
