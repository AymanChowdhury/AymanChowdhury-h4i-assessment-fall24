/* 
This file contains the artist data. DO NOT CHANGE
*/
import {
  default as rey,
  default as rodrigo,
  default as sheeran,
  default as swift,
} from "./images/sheeran.png";

const artists = [
  {
    name: "Ed Sheeran",
    minutes: 1860,
    songs: ["Eraser", "Moving", "Addicted", "If I Could", "Lately"],
    image: sheeran,
  },
  {
    name: "Taylor Swift",
    minutes: 3600,
    songs: [
      "Untouchable",
      "Speak Now",
      "Haunted",
      "Enchanted",
      "Lavender Haze",
    ],
    image: swift,
  },
  {
    name: "Olivia Rodrigo",
    minutes: 525600,
    songs: [
      "Love Is Embarrassing",
      "Out of the Old",
      "What I've Been Looking For",
      "Obsessed",
      "River",
    ],
    image: rodrigo,
  },
  {
    name: "Lana Del Rey",
    minutes: 30,
    songs: [
      "Lucky Ones",
      "Dealer",
      "Nectar of the Gods",
      "Old Money",
      "White Dress",
    ],
    image: rey,
  },
];

export default artists;
