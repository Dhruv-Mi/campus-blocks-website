import { Team_card } from "./Team_card";
import logo from "../../assets/images/logo.png";

export const Team = () => {
  return (
    <>
      <div className="h-fit bg-black text-white" id="team">
        <div className="text-transparent">h</div>
        <div className="text-center mt-2 text-4xl font-bold">Meet Our Team</div>
        <div className="text-center text-lg mt-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam dolor
          iste architecto sapiente recusandae eius quidem sint repellendus
          voluptatem ea consectetur
        </div>
        <div className="grid grid-cols-3 gap-x-8 gap-y-4 m-auto w-fit mt-8">
          <Team_card
            name="Name"
            designation="Designation"
            instagram="https://www.google.com/"
            linkedin="https://www.google.com/"
            photo={logo}
          />
          <Team_card
            name="Name"
            designation="Designation"
            instagram="https://www.google.com/"
            linkedin="https://www.google.com/"
            photo={logo}
          />
          <Team_card
            name="Name"
            designation="Designation"
            instagram="https://www.google.com/"
            linkedin="https://www.google.com/"
            photo={logo}
          />
          <Team_card
            name="Name"
            designation="Designation"
            instagram="https://www.google.com/"
            linkedin="https://www.google.com/"
            photo={logo}
          />
          <Team_card
            name="Name"
            designation="Designation"
            instagram="https://www.google.com/"
            linkedin="https://www.google.com/"
            photo={logo}
          />
          <Team_card
            name="Name"
            designation="Designation"
            instagram="https://www.google.com/"
            linkedin="https://www.google.com/"
            photo={logo}
          />
          <Team_card
            name="Name"
            designation="Designation"
            instagram="https://www.google.com/"
            linkedin="https://www.google.com/"
            photo={logo}
          />
          <Team_card
            name="Name"
            designation="Designation"
            instagram="https://www.google.com/"
            linkedin="https://www.google.com/"
            photo={logo}
          />
          <Team_card
            name="Name"
            designation="Designation"
            instagram="https://www.google.com/"
            linkedin="https://www.google.com/"
            photo={logo}
          />
        </div>
      </div>
    </>
  );
};
