export function showFirstResult(res) {
  console.log("asda", res);

  let pizzaCount = 0;
  let pastaCount = 0;
  let sarmaCount = 0;
  let pommesCount = 0;

  res.forEach((el) => {
    // if statement for el.data.favorite_food was used because of mistake on my part when creating object to favourite_food, so that part pevented me
    // from getting data normaly so had to pick one between favorite_food or favourite_food.
    if (el.data.favorite_food) {
      switch (el.data.favorite_food.value) {
        case "pommes_frites":
          pommesCount++;
          break;
        case "sarma":
          sarmaCount++;
          break;
        case "pasta":
          pastaCount++;
          break;
        case "pizza":
          pizzaCount++;
          break;
        default:
          break;
      }
    }
  });
  return [
    { foodname: "Pizza", count: pizzaCount },
    { foodname: "Pasta", count: pastaCount },
    { foodname: "Sarma", count: sarmaCount },
    { foodname: "Pommes", count: pommesCount },
  ].sort((a, b) => b.count - a.count);
}
