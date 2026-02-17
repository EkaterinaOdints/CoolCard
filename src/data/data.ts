interface Color {
  name: string;
  style: string;
}

interface Picture {
  name: string;
  src: string;
  alt: string;
}

const colors: Color[] = [
  {
    name: "Gradient Dark Tangerine",
    style: "linear-gradient(130deg, #FF9F0E 0%, #FADCAF 26%,#FAE2BF 33%, #FADEB5 36%, #FF9F0E 59%, #FFBA35 84%, #FF9F0E 93%)",
  },
  {
    name: "Gradient Metallic Gold",
    style: "linear-gradient(100deg, #d4af37 0%, #fff3b0 25%, #e6be8a 45%, #b8860b 75%, #d4af37 100%)",
  },
  {
    name: "Gradient Bright Turquoise",
    style: "linear-gradient(125deg, #00f5d4 0%, #00bbf9 40%,#3a0ca3 75%, #240046 100%)",
  },
  {
    name: "Gradient Astronaut Blue",
    style: "linear-gradient(120deg, #134e5e 0%, #71b280 40%, #2e8b57 70%, #0f3d3e 100%)",
  },
  {
    name: "Golden Yellow",
    style: "#FFE600",
  },
  {
    name: "Tangerine",
    style: "#FF7A00",
  },
  {
    name: "Red",
    style: "#FF0000",
  },
  {
    name: "Violet",
    style: "#F26EE6",
  },
  {
    name: "Oyster Pink",
    style: "#D0ABAB",
  },
  {
    name: "Blue",
    style: "#0500FF",
  },
  {
    name: "Cobalt",
    style: "#0058a7",
  },
  {
    name: "Cornflower Blue",
    style: "#778bfd",
  },
  {
    name: "Light Green",
    style: "#99f285",
  },
  {
    name: "Ocean Green",
    style: "#46A56C",
  },
];

const pictures: Picture[] = [
  {
    name: "mountains",
    src: "/images/designs/mountains.png",
    alt: "Горы",
  },
  {
    name: "animals",
    src: "/images/designs/animals.png",
    alt: "Лесные жители",
  },
  {
    name: "cars",
    src: "/images/designs/cars.png",
    alt: "Машины",
  },
  {
    name: "sight",
    src: "/images/designs/sight.png",
    alt: "Достопримечательности",
  },
  {
    name: "flowers",
    src: "/images/designs/flowers.png",
    alt: "Цветы",
  },
  {
    name: "figures",
    src: "/images/designs/figures.png",
    alt: "Абстрактные фигуры",
  },
  {
    name: "egypt",
    src: "/images/designs/egypt.png",
    alt: "Египет",
  },
  {
    name: "bird",
    src: "/images/designs/bird.png",
    alt: "Птица",
  },
];

export { colors, pictures };
