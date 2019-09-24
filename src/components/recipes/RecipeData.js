const mealTypes = [
  "",
  "Brunch",
  "Raw Veg",
  "Cooked Veg",
  "Rice, Grains, and Pulses",
  "Noodles and Pasta",
  "Meat",
  "Fish",
  "Pudding"
];

const simpleCategories = [
  {
    name: "S",
    description: "short on time"
  },
  {
    name: "I",
    description: "10 ingredients or less"
  },
  {
    name: "M",
    description: "make ahead"
  },
  {
    name: "P",
    description: "pantry"
  },
  {
    name: "L",
    description: "lazy"
  },
  {
    name: "E",
    description: "easier than you think"
  }
];
const simpleRatings = ["simple", "not simple"];
const tasteRatings = [0, 1, 2, 3, 4, 5];

const averageTasteRatings = tasteRatings => {
  if (tasteRatings != null) {
    let average =
      tasteRatings.reduce((a, b) => parseInt(a) + parseInt(b)) /
      tasteRatings.length;
    return Math.round(average * 100) / 100;
  }
  return 0;
};
const countSimpleRatings = simpleRatings => {
  if (simpleRatings != null)
    return {
      simple: simpleRatings.filter(s => s === "simple").length,
      notSimple: simpleRatings.filter(s => s === "not simple").length
    };
  return 0;
};

module.exports = {
  mealTypes: mealTypes,
  simpleCategories: simpleCategories,
  tasteRatings: tasteRatings,
  simpleRatings: simpleRatings,
  averageTasteRatings: averageTasteRatings,
  countSimpleRatings: countSimpleRatings
};
