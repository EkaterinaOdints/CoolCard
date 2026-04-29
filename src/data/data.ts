type DesignCategory = "landscapes" | "animals" | "cars" | "flowers" | "abstraction" | "all";

type DesignCategoryTitle = "Пейзажи" | "Животные" | "Машины" | "Цветы" | "Абстракция" | "Все";

interface Color {
  name: string;
  style: string;
}

interface Picture {
  name: string;
  src: string;
  alt: string;
  category?: DesignCategory;
}

interface designCategoryItem {
  id: DesignCategory;
  title: DesignCategoryTitle;
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
    category: "landscapes",
  },
  {
    name: "animals",
    src: "/images/designs/animals.png",
    alt: "Лесные жители",
    category: "animals",
  },
  {
    name: "cars",
    src: "/images/designs/cars.png",
    alt: "Машины",
    category: "cars",
  },
  {
    name: "sight",
    src: "/images/designs/sight.png",
    alt: "Достопримечательности",
    category: "landscapes",
  },
  {
    name: "flowers",
    src: "/images/designs/flowers.png",
    alt: "Цветы",
    category: "flowers",
  },
  {
    name: "figures",
    src: "/images/designs/figures.png",
    alt: "Абстрактные фигуры",
    category: "abstraction",
  },
  {
    name: "egypt",
    src: "/images/designs/egypt.png",
    alt: "Египет",
    category: "landscapes",
  },
  {
    name: "bird",
    src: "/images/designs/bird.png",
    alt: "Птица",
    category: "animals",
  },
  {
    name: "mountains2",
    src: "/images/designs/mountains.png",
    alt: "Горы",
    category: "landscapes",
  },
  {
    name: "animals2",
    src: "/images/designs/animals.png",
    alt: "Лесные жители",
    category: "animals",
  },
  {
    name: "cars2",
    src: "/images/designs/cars.png",
    alt: "Машины",
    category: "cars",
  },
  {
    name: "sight2",
    src: "/images/designs/sight.png",
    alt: "Достопримечательности",
    category: "landscapes",
  },
  {
    name: "flowers2",
    src: "/images/designs/flowers.png",
    alt: "Цветы",
    category: "flowers",
  },
  {
    name: "figures2",
    src: "/images/designs/figures.png",
    alt: "Абстрактные фигуры",
    category: "abstraction",
  },
  {
    name: "egypt2",
    src: "/images/designs/egypt.png",
    alt: "Египет",
    category: "landscapes",
  },
  {
    name: "bird2",
    src: "/images/designs/bird.png",
    alt: "Птица",
    category: "animals",
  },
];

const designCategories: designCategoryItem[] = [
  {
    id: "all",
    title: "Все",
  },
  {
    id: "landscapes",
    title: "Пейзажи",
  },
  {
    id: "animals",
    title: "Животные",
  },
  {
    id: "cars",
    title: "Машины",
  },
  {
    id: "flowers",
    title: "Цветы",
  },
  {
    id: "abstraction",
    title: "Абстракция",
  },
] as const;

const fonts = [
  { id: "nunito", title: "Nunito (по умолчанию)", src: null },
  { id: "roboto", title: "Roboto", src: "Roboto-Regular.woff2" },
  { id: "inter", title: "Inter", src: "Inter-Regular.woff2" },
  { id: "opensans", title: "Open Sans", src: "OpenSans-Regular.woff2" },
  { id: "montserrat", title: "Montserrat", src: "Montserrat-Regular.woff2" },
];

export { colors, pictures, designCategories, fonts, type DesignCategory, type DesignCategoryTitle };
