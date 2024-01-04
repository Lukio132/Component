import { Component } from "@angular/core";

@Component({
  selector: "app-icon-component",
  standalone: true,
  template: `
    <svg
      class="h-8 w-8 text-blue-500"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <polyline points="9 11 12 14 20 6" />
      <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
    </svg>
  `,
  styles: ``,
})
export class IconComponentComponent {}
