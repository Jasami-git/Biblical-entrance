import Placeholder1 from "@/assets/placeholders/Biblical_Entrance_01.jpg";
import Placeholder2 from "@/assets/placeholders/Biblical_Entrance_02.jpg";
import Placeholder3 from "@/assets/placeholders/Biblical_Entrance_03.jpg";
import Placeholder4 from "@/assets/placeholders/Biblical_Entrance_04.jpg";
import Placeholder5 from "@/assets/placeholders/Biblical_Entrance_05.jpg";
import Placeholder6 from "@/assets/placeholders/Biblical_Entrance_06.jpg";
import Placeholder7 from "@/assets/placeholders/Biblical_Entrance_07.jpg";
import Placeholder8 from "@/assets/placeholders/Biblical_Entrance_08.jpg";
import Placeholder9 from "@/assets/placeholders/Biblical_Entrance_09.jpg";
import Placeholder10 from "@/assets/placeholders/Biblical_Entrance_10.jpg";
import Placeholder11 from "@/assets/placeholders/Biblical_Entrance_11.jpg";
import Placeholder12 from "@/assets/placeholders/Biblical_Entrance_12.jpg";
import Placeholder13 from "@/assets/placeholders/Biblical_Entrance_13.jpg";
import Placeholder14 from "@/assets/placeholders/Biblical_Entrance_14.jpg";

import { COLLECTION_ADDRESS } from "./constants";

export const config: Config = {
  collection_id: COLLECTION_ADDRESS,

  // Removing one or all of these socials will remove them from the page
  socials: {
    twitter: "https://twitter.com",
    discord: "https://discord.com",
    homepage: "#",
  },

  defaultCollection: {
    name: "Biblical Entrance",
    description: "#KEY #Biblical entrance From the intricate details of the mosaics to the striking colors of the icons, this creative prompt captures the essence of a biblical entrance in a modern and captivating way, sure to inspire endless variations and styles in the AI-generated image.",
    image: Placeholder1,
  },

  ourStory: {
    title: "Biblical Entrance",
    subTitle: "Proin lorem",
    description:
      "#KEY #Biblical entrance From the intricate details of the mosaics to the striking colors of the icons, this creative prompt captures the essence of a biblical entrance in a modern and captivating way, sure to inspire endless variations and styles in the AI-generated image.",
    discordLink: "https://discord.com",
    images: [Placeholder1, Placeholder2, Placeholder3, Placeholder4, Placeholder5, Placeholder6, Placeholder7, Placeholder8, Placeholder9, Placeholder10, Placeholder11, Placeholder12, Placeholder13, Placeholder14],
  },

  ourTeam: {
    title: "Biblical Entrance",
    members: [
      {
        name: "Paster_01",
        role: "Aliquip Esse",
        img: Placeholder1,
        socials: {
          twitter: "https://twitter.com",
        },
      },
       {
        name: "Paster_02",
        role: "Aliquip Esse",
        img: Placeholder2,
        socials: {
          twitter: "https://twitter.com",
        },
      },
        {
        name: "Paster_03",
        role: "Aliquip Esse",
        img: Placeholder3,
        socials: {
          twitter: "https://twitter.com",
        },
      },
        {
        name: "Paster_04",
        role: "Aliquip Esse",
        img: Placeholder4,
        socials: {
          twitter: "https://twitter.com",
        },
      },
        {
        name: "Paster_05",
        role: "Aliquip Esse",
        img: Placeholder5,
        socials: {
          twitter: "https://twitter.com",
        },
      },
        {
        name: "Paster_06",
        role: "Aliquip Esse",
        img: Placeholder6,
        socials: {
          twitter: "https://twitter.com",
        },
      },
        {
        name: "Paster_07",
        role: "Aliquip Esse",
        img: Placeholder7,
        socials: {
          twitter: "https://twitter.com",
        },
      },
        {
        name: "Paster_08",
        role: "Aliquip Esse",
        img: Placeholder8,
        socials: {
          twitter: "https://twitter.com",
        },
      },
        {
        name: "Paster_09",
        role: "Aliquip Esse",
        img: Placeholder9,
        socials: {
          twitter: "https://twitter.com",
        },
      },
        {
        name: "Paster_10",
        role: "Aliquip Esse",
        img: Placeholder10,
        socials: {
          twitter: "https://twitter.com",
        },
      },
        {
        name: "Paster_11",
        role: "Aliquip Esse",
        img: Placeholder11,
        socials: {
          twitter: "https://twitter.com",
        },
      },
        {
        name: "Paster_12",
        role: "Aliquip Esse",
        img: Placeholder12,
        socials: {
          twitter: "https://twitter.com",
        },
      },
        {
        name: "Paster_13",
        role: "Aliquip Esse",
        img: Placeholder13,
        socials: {
          twitter: "https://twitter.com",
        },
      },
        {
        name: "Paster_14",
        role: "Aliquip Esse",
        img: Placeholder14,
        socials: {
          twitter: "https://twitter.com",
        },
      },
    ],
  },

  faqs: {
    title: "F.A.Q.",

    questions: [
      {
        title: "Biblical Entrance",
        description:
          "#KEY #Biblical entrance From the intricate details of the mosaics to the striking colors of the icons, this creative prompt captures the essence of a biblical entrance in a modern and captivating way, sure to inspire endless variations and styles in the AI-generated image.",
      },
    
    ],
  },

  nftBanner: [Placeholder1, Placeholder2, Placeholder3, Placeholder4, Placeholder5, Placeholder6, Placeholder7, Placeholder8, Placeholder9, Placeholder10, Placeholder11, Placeholder12, Placeholder13, Placeholder14],
};

export interface Config {
  collection_id: string;

  socials?: {
    twitter?: string;
    discord?: string;
    homepage?: string;
  };

  defaultCollection?: {
    name: string;
    description: string;
    image: string;
  };

  ourTeam?: {
    title: string;
    members: Array<ConfigTeamMember>;
  };

  ourStory?: {
    title: string;
    subTitle: string;
    description: string;
    discordLink: string;
    images?: Array<string>;
  };

  faqs?: {
    title: string;
    questions: Array<{
      title: string;
      description: string;
    }>;
  };

  nftBanner?: Array<string>;
}

export interface ConfigTeamMember {
  name: string;
  role: string;
  img: string;
  socials?: {
    twitter?: string;
    discord?: string;
  };
}
