import { Component } from "@angular/core";
import { IconComponentComponent } from "./infoboxicon.component";

@Component({
  selector: "app-infobox",
  standalone: true,
  imports: [IconComponentComponent],
  template: `
    <div class="h-full flex flex-col justify-center items-center bg-blue-50 relative">
      <img
        src="./assets/lion.png"
        alt="Lion xD"
        class="absolute w-1/4 max-w-1/2 max-h-1/2 object-cover opacity-50 left-1/4"
      />
      <h2 class="font-bold text-customBlue text-2xl p-5 z-10">
        <span [innerHTML]="formatText2(title, ['Warum'])"></span>
      </h2>

      <div class="flex">
        <div class="m-2 p-4 w-1/2 pl-10 max-w-lg relative">
          <p class="text-customBlue text-sm mb-4 relative z-10">
            <span
              [innerHTML]="
                formatText(paragraph1, [
                  'amet',
                  'consectetur',
                  'adipisicing',
                  'elit.',
                  'Ipsam,',
                  'expedita',
                  'culpa',
                  'velit',
                  'eaque',
                  'soluta',
                  'optio',
                  'debitis'
                ])
              "
            ></span>
          </p>
          <p class="text-customBlue text-sm text-9 relative z-10">
            {{ paragraph2 }}
          </p>
        </div>
        <div class="m-2 p-4 w-1/2 pl-20">
          <div class="flex items-center">
            <app-icon-component />
            <p class="ml-2 text-xs">
              <span [innerHTML]="formatText(tick1, ['Lorem', 'ipsum'])"></span>
            </p>
          </div>
          <div class="flex items-center">
            <app-icon-component />
            <p class="ml-2 text-xs">
              <span [innerHTML]="formatText(tick2, ['amet', 'sit'])"></span>
            </p>
          </div>
          <div class="flex items-center">
            <app-icon-component />
            <p class="ml-2 text-xs">
              <span [innerHTML]="formatText(tick3, ['consectetur'])"></span>
            </p>
          </div>
          <div class="flex items-center">
            <app-icon-component />
            <p class="ml-2 text-xs">
              <span [innerHTML]="formatText(tick4, ['lorem', 'ipsum', 'dolor,'])"></span>
            </p>
          </div>
          <div class="flex items-center">
            <app-icon-component />
            <p class="ml-2 text-xs">
              <span [innerHTML]="formatText(tick5, [])"></span>
            </p>
          </div>
          <div class="flex items-center">
            <app-icon-component />
            <p class="ml-2 text-xs">
              <span [innerHTML]="formatText(tick6, [])"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class InfoboxComponent {
  title = "Warum die Bayerische (...)";

  paragraph1 =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, aut at nulla laborum expedita, culpa velit eaque soluta optio debitis sequi ad aliquam amet quaerat in! Temporibus debitis quis quae!";

  paragraph2 =
    "Temporibus debitis quis quae! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut at nulla laborum expedita, culpa velit eaque soluta optio! ";

  tick1 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
  tick2 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
  tick3 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
  tick4 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
  tick5 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
  tick6 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

  formatText(text: string, boldWords: string[]): string {
    const words = text.split(" ");
    const formattedWords = words.map((word) => {
      if (boldWords.includes(word)) {
        return `<span class="font-bold">${word}</span>`;
      } else {
        return word;
      }
    });
    return formattedWords.join(" ");
  }
  formatText2(text: string, colorWords: string[]): string {
    const words = text.split(" ");
    const formattedWords = words.map((word) => {
      if (colorWords.includes(word)) {
        return `<span class="text-blue-500">${word}</span>`;
      } else {
        return word;
      }
    });
    return formattedWords.join(" ");
  }
}
