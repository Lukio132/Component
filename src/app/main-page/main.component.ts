import { getLocaleEraNames } from "@angular/common";
import { Component } from "@angular/core";
import { IconComponentComponent } from "../infobox/infoboxicon.component";
import { InfoboxComponent } from "../infobox/infobox.component";
import { AllianzComponent } from "../allianz/allianz.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [IconComponentComponent, InfoboxComponent, AllianzComponent],
  template: `
    <h1 class="text-center text-lg text-orange-500 bg-black p-4">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    </h1>
    <p class="m-2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est rem excepturi magnam,
      delectus illum tenetur pariatur quia aliquam sint voluptatibus ut totam amet magni
      veniam consectetur praesentium culpa quos nulla?
    </p>
    <app-infobox></app-infobox>
    <app-allianz></app-allianz>
    <p class="m-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dicta quaerat odit! Quo
      quos tenetur excepturi blanditiis in fugiat consectetur magni quam atque quod?
      Corporis impedit animi ex iure error.
    </p>
    <p class="m-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nostrum sit,
      reiciendis saepe ratione totam laborum aliquid consectetur et illum rerum unde
      accusamus ea excepturi omnis dignissimos pariatur quaerat quae.
    </p>
  `,
})
export class AppComponent {}
