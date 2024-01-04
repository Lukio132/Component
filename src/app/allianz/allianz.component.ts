import { Component } from "@angular/core";
import { IconComponentComponent } from "../infobox/infoboxicon.component";

@Component({
  selector: "app-allianz",
  standalone: true,
  imports: [IconComponentComponent],
  styleUrls: ["./allianz.component.css"],
  template: `
    <div class="h-full flex flex-col justify-center items-center bg-green-50 relative">
      <h2 class="font-bold text-green-500 text-2xl p-5 z-10 neon-text">Allianz</h2>

      <div class="flex">
        <div class="m-2 p-4 w-1/2 max-w-lg relative">
          <p class="text-customBlue text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias in sed
            adipisci et, voluptatum nisi similique! Quam soluta consequuntur officiis,
            dolorum corrupti error consequatur reprehenderit recusandae necessitatibus at,
            accusamus itaque.
          </p>
          <p class="text-customBlue text-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente numquam
            corporis reiciendis, inventore vitae quae commodi neque cumque explicabo,
            quasi sint odit aliquid distinctio eligendi id ea fuga rem deleniti.
          </p>
        </div>
        <div class="m-2 p-4 w-1/2 max-w-lg relative">
          <p class="text-customBlue text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi accusamus
            explicabo corporis libero animi suscipit consectetur eos, delectus excepturi
            ipsum debitis sequi obcaecati repellat quos dignissimos laboriosam odio iure
            eaque.
          </p>
          <p class="text-customBlue text-sm ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet ducimus unde
            rerum magnam facere omnis ut illum. Mollitia veniam eos obcaecati laboriosam
            sapiente, quasi reprehenderit commodi laudantium blanditiis quaerat porro.
          </p>
        </div>
        <div class="m-2 p-4 w-1/2 max-w-lg relative">
          <p class="text-customBlue text-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt doloremque
            porro provident ratione iure fugiat excepturi voluptatibus quis, doloribus
            qui, laboriosam inventore, omnis commodi dolorum tempore sit perspiciatis
            quasi necessitatibus!
          </p>
          <p class="text-customBlue text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae dicta
            debitis nesciunt, numquam at quas ullam dolor quibusdam consequuntur eius
            accusamus praesentium, quidem dolores ipsam facere expedita molestiae harum!
            Voluptates.
          </p>
        </div>
      </div>
      <div class="m-2 p-4 w-full max-w-lg relative text-center">
        <details>
          <summary
            class="text-customBlue text-lg font-bold mb-2 cursor-pointer neon-text animate-bounce"
          >
            Erweitern Sie mich
          </summary>

          <p class="text-customBlue text-sm">Hier gibt es nichts Interessantes ✅</p>
        </details>
      </div>
    </div>
  `,
})
export class AllianzComponent {}
