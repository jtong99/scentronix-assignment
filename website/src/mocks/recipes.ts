export type RecipeDataType = {
  id: number;
  name: string;
  title: string;
  description: string;
  image?: string;
  dish: dishDataType[];
};

export type dishDataType = {
  id: number;
  name?: string;
  title?: string;
  description?: string;
  prep?: number; // mins
  bake_from?: number; // mins
  bake_to?: number; // mins
  yield?: string;
  image?: string;
  total?: number;
};

export const recipes: RecipeDataType[] = [
  {
    id: 1,
    name: "Breads",
    title: "Homemade Heaven",
    image: "/bread.jpg",
    description:
      "Discover the perfect balance of health and indulgence with our collection of artisanal bread recipes. From wholesome whole-grain creations to classic comfort loaves, our bread selection offers a delightful range of flavors and textures. Whether you're a novice baker or a seasoned pro, these recipes will fill your home with the irresistible aroma of freshly baked bread and bring warmth to your table.",

    dish: [
      {
        id: 1,
        name: "Quick Bread",
        title: "Whole-Grain Banana Bread",
        description:
          "<p>This one-bowl banana bread — our <u>2018 Recipe of the Year</u> — uses the simplest ingredients, but is incredibly moist and flavorful. While the recipe calls for a 50/50 mix of flours (all-purpose and whole wheat), we often make the bread 100% whole wheat, and honestly? No one can tell, it's that good! And not only is this bread delicious — it's versatile.<p>",
        prep: 10,
        bake_from: 60,
        bake_to: 75,
        yield: "1 loaf, 12 generous servings",
        image: "/wholegrain_bread2.jpg",
        total: 70,
      },
      {
        id: 2,
        name: "Sourdough",
        title: "Rustic Sourdough Boule",
        description:
          "<p>This artisanal sourdough boule features a crispy crust and a tender, tangy interior. Our long fermentation process ensures maximum flavor development and a beautiful open crumb structure. Perfect for sandwiches or as an accompaniment to your favorite soup.</p>",
        prep: 30,
        bake_from: 35,
        bake_to: 40,
        yield: "1 large boule, 8-10 servings",
        image: "/sourdough.jpg",
        total: 70,
      },
      {
        id: 3,
        name: "Enriched Bread",
        title: "Buttery Brioche Loaf",
        description:
          "<p>Indulge in the rich, buttery goodness of our classic brioche loaf. This French-inspired bread is perfect for elevating your morning toast or creating decadent French toast. The dough is enriched with eggs and butter, resulting in a tender crumb and irresistible flavor.</p>",
        prep: 25,
        bake_from: 30,
        bake_to: 35,
        yield: "1 loaf, 12 slices",
        image: "/enriched_bread.jpg",
        total: 60,
      },
    ],
  },
  {
    id: 2,
    name: "Pasta",
    title: "Pasta Perfection",
    image: "/pasta.jpg",
    description:
      "Embark on a culinary journey through Italy with our exquisite pasta recipes. From quick weeknight dinners to impressive date-night dishes, our collection offers a variety of flavors and techniques. Whether you prefer classic recipes or innovative twists, these pasta dishes will satisfy your cravings and transport your taste buds to the heart of Italian cuisine.",
    dish: [
      {
        id: 1,
        name: "Classic",
        title: "Spaghetti Carbonara",
        description:
          "<p>Master the art of this Roman classic with our foolproof recipe. Our Spaghetti Carbonara features a silky smooth egg-based sauce, crispy pancetta, and a generous sprinkle of Pecorino Romano. It's a simple yet elegant dish that's sure to impress with its rich flavors and creamy texture.</p>",
        prep: 15,
        bake_from: 15,
        bake_to: 20,
        yield: "4 servings",
        image: "/spaghetti_carbonara.jpg",
        total: 35,
      },
      {
        id: 2,
        name: "Vegetarian",
        title: "Creamy Mushroom Risotto",
        description:
          "<p>Indulge in the comfort of our Creamy Mushroom Risotto. This northern Italian rice dish is elevated with a medley of wild mushrooms, Arborio rice, and Parmesan cheese. The slow-cooking process results in a luxuriously creamy texture that's both satisfying and elegant.</p>",
        prep: 10,
        bake_from: 25,
        bake_to: 30,
        yield: "4 servings",
        image: "/mushroom_risotto.jpg",
        total: 40,
      },
      {
        id: 3,
        name: "Seafood",
        title: "Linguine alle Vongole",
        description:
          "<p>Transport yourself to the Italian coast with our Linguine alle Vongole. This classic Neapolitan dish combines al dente linguine with fresh clams, garlic, white wine, and a hint of chili. It's a light yet flavorful pasta that captures the essence of Mediterranean cuisine.</p>",
        prep: 20,
        bake_from: 15,
        bake_to: 20,
        yield: "4 servings",
        image: "/linguine_vongole.jpg",
        total: 40,
      },
    ],
  },
  {
    id: 3,
    name: "Desserts",
    title: "Sweet Endings",
    image: "/desserts.jpg",
    description:
      "Indulge your sweet tooth with our irresistible collection of dessert recipes. From classic favorites to innovative creations, our desserts cater to every palate and occasion. Whether you're a novice baker or a pastry enthusiast, these recipes will help you create memorable sweet treats that will delight family and friends alike.",
    dish: [
      {
        id: 1,
        name: "Chocolate",
        title: "Decadent Chocolate Lava Cake",
        description:
          "<p>Impress your guests with our foolproof Chocolate Lava Cake recipe. This indulgent dessert features a rich chocolate exterior with a gooey, molten center that oozes out with each spoonful. Serve warm with a scoop of vanilla ice cream for the ultimate chocolate lover's dream.</p>",
        prep: 15,
        bake_from: 12,
        bake_to: 14,
        yield: "4 individual cakes",
        image: "/lava_cake.jpg",
        total: 29,
      },
      {
        id: 2,
        name: "Fruit",
        title: "Classic Apple Pie",
        description:
          "<p>Nothing says comfort like a slice of homemade Apple Pie. Our recipe features a flaky, buttery crust filled with tender apples, warm spices, and a touch of lemon zest. Whether served warm or at room temperature, this timeless dessert is perfect for any occasion.</p>",
        prep: 30,
        bake_from: 45,
        bake_to: 50,
        yield: "1 9-inch pie, 8 servings",
        image: "/apple_pie.jpg",
        total: 80,
      },
      {
        id: 3,
        name: "No-Bake",
        title: "Creamy Lemon Cheesecake",
        description:
          "<p>Enjoy the refreshing taste of our no-bake Lemon Cheesecake. This easy-to-make dessert combines a crunchy graham cracker crust with a smooth, tangy lemon filling. It's the perfect balance of sweet and tart, and ideal for warm summer days when you don't want to turn on the oven.</p>",
        prep: 20,
        bake_from: 45,
        bake_to: 50,
        yield: "1 9-inch cheesecake, 12 servings",
        image: "/lemon_cheesecake.jpg",
        total: 260,
      },
    ],
  },
];
