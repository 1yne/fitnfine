export function getGreeting() {
  var today = new Date();
  var curHr = today.getHours();

  if (curHr < 12) {
    return "Good morning";
  } else if (curHr < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
}

export const parseCookie = (str: any) =>
  str
    .split(";")
    .map((v: any) => v.split("="))
    .reduce((acc: any, v: any) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const edamamResponse = [
  {
    id: 'newks_copycat_kosher_chicken_salad_recipes',
    name: 'Newks Copycat Kosher Chicken Salad recipes',
    thumbnail: 'https://edamam-product-images.s3.amazonaws.com/web-img/e90/e907078431e3bff4a06410ccbbabe3f5?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLWVhc3QtMSJHMEUCIQCx34QjmZWxk1UjYSEQDzP7rxK3%2BuXKMwExfapxMMUbvwIgCc0rmzlTnqlqzyrYmzZH5iVzeWQoZfyKLG2ryZieYVYqwgUIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDOVOytYEuge65cTXjiqWBdlkMKv5C%2F%2Bu6pQP8X3kozcj5pUu%2BqG1j2jj6r0faoUyQOvMKtodI665liB1D7fHo3I0ZpK2Du5%2BrYOS57BIkcLujQGm6a86sV38GoRnYAwqETemCdVMhS2vOgZJ%2BomIGlPS8W2rgJ%2F%2BBQ%2BlJ%2BBYYL8d5mOgJ7jowaMeZir90j%2FIlvQRWJZlf3MWg3AdQMgjBvBqpVVNjJVQiFI7Ed0e2PT318jGkTrn%2B0zQnkoBbDAJQ2z3WxdB9yZ3K8tMOXFnAxglElrChFG08APX%2FBPelmWypXSI6PZvjwLizxldwErlUEjmdtlNi5gYbs96rwn4Dxk3k0SjAfCNeZ7IVnSl4GBC2h%2FWETtK5YWrJYNYWjH3pbZhKnaSorHbhUhVGcO3KHWgUfwCalBMW3evk5YQSqVywH3867FmzO2PkLtqS%2FK%2FpD0zqq9KLjqF23VaaOpoM3x2IW5m23OI5jmjk8qsEf280wEULtHFW%2FSmX6AzTJW2N1UbE4ePCSB%2BzDLk%2BBl0tlMsN%2FRLJU5BU3VhS%2BTX3WCyinlpynxZefvoCi3GkP0vuGSyJfyAl334iO96hjCY8%2FH1ARR%2FGOM0iLKCsOzn5eStKCZ95QxfRO0WYIhpfQG3Ugjq0SlfEfTJt0XwROf5yu3ynDQXOzz%2FdCeyBnCk3xKTZZiSKgMsZNSUYCa68r3z6DANF90hk1AatfLPiCh0uu2iy5aQCH109pJ34IN4yvxIc2F8MtKgUs9rpxBMKh9NaeaebGt1az1wvmfDtWo4ZuQMQTsDLx6IXWiXjsX2%2BE9FDYgX%2BJAm3Vle0Y3TDZtXakjIk%2Fq%2FcUM3BKkDOJsYxLezJ7VNtwKwi%2BKbdqGS%2BabEkNdTbTpZyKoHenY8Haq%2FZJcsQBdxMJLWu6AGOrEBpi0dCIhnfV3iPJErRMtfdb2G28J6AYvxv5leLj8PNrLt8Q1tMSL1gGix7nttgcX8skWLaKRXCpFduEEOfwLDmeLdIJDya5Y7s0wlOpBl19ASDMgpZqPvFAWob0RuPTcgEUwlcZwEKweEAXPe0Kt3FoE4Fr1VUSDpxoh9H6jaT%2B5vTkZqU9zhW0DqCztRXAXDC9CLjf%2BAHO8%2BDQH3fx3pW9Hrl4FJ5M%2BXVWdstW%2FY17S6&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230313T094221Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOAOCTM5X%2F20230313%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=74add460ccd0a799db8fc7e67a1c37a8d7e179ec55202c2443c4075bc05ec3f0',
    ingredients: [
      '3 lbs. grilled boneless chicken, cut into chunks',
      '1/2 teaspoon lemon juice',
      '2/3-cup pecans, chopped',
      '¼ cup red onions, chopped',
      '½ cup celery, chopped',
      '1-cup mayonnaise',
      '1 cup sliced seedless grapes',
      '½ cup dried cranberries',
      '1/4-teaspoon black pepper',
      '½ teaspoon celery seeds',
      '½ teaspoon sugar'
    ],
    cuisineType: [ 'american', 'kosher' ],
    steps: 'http://www.koshereye.com/copycat-kosher/3616-houstons-copycat-kosher-asian-chicken-salad.html',
    calories: 5355.680036500028,
    source: 'koshereye.com',
    serves: 8
  },
  {
    id: 'delicious_baked_salmon_with_potatoes_and_vegetables_—_step_to_health',
    name: 'Delicious Baked Salmon with Potatoes and Vegetables — Step To Health',
    thumbnail: 'https://edamam-product-images.s3.amazonaws.com/web-img/770/770666043f41ae3dc998d1cb5a0f35a4.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJHMEUCIAyn9qWjTmaG1e4rT7Tr2XwioRipFfQcMGC9Fhjm16zOAiEAseGzDAfqz%2BHH%2FyuDXiVvG1jwblSJsPzRVF%2FlVHxH4pEqwQUIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDN7x%2FCnpf1THppK21CqVBThbHspWqh2J6KL63BIRLinvjmwoM6PWxOfWGlmn578ldNClBB%2BkIlcw0bLqQrNSVlSdgD3JZPikCcci1cVxnS1PGfDQxxEtGgwxg8pIKcCnVdlWiK9TxavlVvGXlnTjyK7ecRnvaw8GDEnOPXNGnK5voo4a3QlOz72VuenqjAOFPJ10iS0ELgNKcX6uCMpErSFqMcCqmbzp4eIM0ODk76pUAYvc4vQs5GVgYH%2BZ3v%2B212sq8LOmGr4t8Ib2Wqqtmmabb9eKgopnZ7838xnMsQuW%2F7mwMndsnVHSYT35qfZ0avfIe4A3Y4C%2FERG3%2BaUTbaZFDp0wGbXBlKW5KWXjEjyDmU9UbjaQjW%2F3TRrQ3K8vfzNp1gg8MInwlriRhbrSE4%2FxPTCKI7FbZxFlZjk3M54HmtZtWeJMaARuyhBJoM%2FfjDCYIcoti3UXzdRfjNivmgwRbvyv%2FehYEiw0l0d8YbgtMB%2B4Pyg0PpDCoUo2su1LlClBWeb7HmxePnT3TQbSYcUxpWqTBZT9G4abM3A2N4gTwhBjA5uHQzURHtY88OIwLYey3bCQZAm7Iawx2GtpSg%2Bnrx1nIwViEgtQrtwzaNwX8p4y8CRobH3znLjnlVyDgPuj377SA3%2FmAtcrAaVSdOInICsCG3DbKwIRO%2FW60dk3KOmqwcLSOl%2Fi2no%2Bta5ENQqOjU2Ano9lFL9xwLXWp%2Br1LD%2BdqUYeddrGrRkCcMcu4DmAGOxo9NfWK06u95YsGEbj%2BcVXsFxyklU6xzWUit3AMqVUWoipA%2B49kkCbAgiFsVc%2F0ni28tnVIvlOSvzW5ZN7J4%2Bqe7AddldceBTJH%2FNxyX0uHOxXgoZH0v%2F9%2FlqbRB6fTxq4HZNcgMn4h1ybQS%2F1V18w2ca7oAY6sQEhRaeqOkOL0DKtYDj9wrXWm4ZHTmutt%2BlJNcmVxbM9kridLzA3OotlybRLgCDIsKksS6DPLGGSRjULhfO%2F0Pdeguzu5fOn3HLiIEp0jnTKQD8LQzrGsBRu5ceRX14Yaz%2BHGKihk3yZk63i0WieXKbEJdm%2FI1Eqm7aBEZDRvjjB0t%2F6WAhfqWZ7OM%2F1M2l8hu%2FBYNELHVjhrGUIMWp6j2s6UmL6H4rNMj4g9E1VnEgSCz4%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230313T094223Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFNKKTCL2W%2F20230313%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2dc7f10b078c329c1abe980849eda9f3ea8b338053ddfaf518239080fdb808b4',
    ingredients: [
      '3 fillets of salmon (about 800 g)',
      '2 cups of broccoli (240 g)',
      '2 potatoes',
      '1 carrot 2 radishes',
      '2 tablespoons of extra virgin olive oil (30 ml)',
      '3 garlic cloves',
      '1 tablespoon of thyme (15 g)',
      '1 tablespoon of salt (15 g)',
      '½ cup of white wine (125 ml)',
      '1 tablespoon of pepper (15 g)',
      '½ tablespoon of parsley (8 g)',
      '1 tablespoon of leek (15 g)'
    ],
    cuisineType: [ 'nordic' ],
    steps: 'https://steptohealth.com/delicious-baked-salmon-with-potatoes-and-vegetables/',
    calories: 3238.6440531540557,
    source: 'steptohealth.com',
    serves: 12
  },
  {
    id: 'vegetable_stir_fry_recipes',
    name: 'Vegetable Stir Fry recipes',
    thumbnail: 'https://edamam-product-images.s3.amazonaws.com/web-img/932/932d211c45880ecc52df4d2166e076e2?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLWVhc3QtMSJHMEUCIQCx34QjmZWxk1UjYSEQDzP7rxK3%2BuXKMwExfapxMMUbvwIgCc0rmzlTnqlqzyrYmzZH5iVzeWQoZfyKLG2ryZieYVYqwgUIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDOVOytYEuge65cTXjiqWBdlkMKv5C%2F%2Bu6pQP8X3kozcj5pUu%2BqG1j2jj6r0faoUyQOvMKtodI665liB1D7fHo3I0ZpK2Du5%2BrYOS57BIkcLujQGm6a86sV38GoRnYAwqETemCdVMhS2vOgZJ%2BomIGlPS8W2rgJ%2F%2BBQ%2BlJ%2BBYYL8d5mOgJ7jowaMeZir90j%2FIlvQRWJZlf3MWg3AdQMgjBvBqpVVNjJVQiFI7Ed0e2PT318jGkTrn%2B0zQnkoBbDAJQ2z3WxdB9yZ3K8tMOXFnAxglElrChFG08APX%2FBPelmWypXSI6PZvjwLizxldwErlUEjmdtlNi5gYbs96rwn4Dxk3k0SjAfCNeZ7IVnSl4GBC2h%2FWETtK5YWrJYNYWjH3pbZhKnaSorHbhUhVGcO3KHWgUfwCalBMW3evk5YQSqVywH3867FmzO2PkLtqS%2FK%2FpD0zqq9KLjqF23VaaOpoM3x2IW5m23OI5jmjk8qsEf280wEULtHFW%2FSmX6AzTJW2N1UbE4ePCSB%2BzDLk%2BBl0tlMsN%2FRLJU5BU3VhS%2BTX3WCyinlpynxZefvoCi3GkP0vuGSyJfyAl334iO96hjCY8%2FH1ARR%2FGOM0iLKCsOzn5eStKCZ95QxfRO0WYIhpfQG3Ugjq0SlfEfTJt0XwROf5yu3ynDQXOzz%2FdCeyBnCk3xKTZZiSKgMsZNSUYCa68r3z6DANF90hk1AatfLPiCh0uu2iy5aQCH109pJ34IN4yvxIc2F8MtKgUs9rpxBMKh9NaeaebGt1az1wvmfDtWo4ZuQMQTsDLx6IXWiXjsX2%2BE9FDYgX%2BJAm3Vle0Y3TDZtXakjIk%2Fq%2FcUM3BKkDOJsYxLezJ7VNtwKwi%2BKbdqGS%2BabEkNdTbTpZyKoHenY8Haq%2FZJcsQBdxMJLWu6AGOrEBpi0dCIhnfV3iPJErRMtfdb2G28J6AYvxv5leLj8PNrLt8Q1tMSL1gGix7nttgcX8skWLaKRXCpFduEEOfwLDmeLdIJDya5Y7s0wlOpBl19ASDMgpZqPvFAWob0RuPTcgEUwlcZwEKweEAXPe0Kt3FoE4Fr1VUSDpxoh9H6jaT%2B5vTkZqU9zhW0DqCztRXAXDC9CLjf%2BAHO8%2BDQH3fx3pW9Hrl4FJ5M%2BXVWdstW%2FY17S6&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230313T094225Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOAOCTM5X%2F20230313%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=22e2e3ddb239dfd8177eed77b1813ad5d64080d1bfe44e453483cb0e15372253',
    ingredients: [
      '1/3 cup soy sauce',
      '1/2 cup vegetable broth',
      '1/3 cup pineapple juice',
      '1 tablespoons sugar',
      '1 tablespoon sesame oil',
      '1/4 teaspoon white pepper',
      '2 tablespoons cooking oil',
      '1 tablespoon minced garlic',
      '1 tablespoon minced ginger',
      '2 tablespoons cornstarch',
      '1/4 cup water',
      '2 Tablespoons Canola oil',
      '2 carrots, thinly sliced',
      '1 head broccoli, chopped',
      '1 medium zucchini, sliced in half and chopped',
      '1 medium yellow squash, sliced in half and chopped',
      '1 green bell pepper, julienned',
      '1 red bell pepper, julienned',
      '1 cup sliced mushrooms',
      '1 cup snow peas',
      '3 cups cooked brown rice'
    ],
    cuisineType: [ 'chinese' ],
    steps: 'http://www.mymommystyle.com/2013/06/06/vegetable-stir-fry/',
    calories: 2068.5178140769412,
    source: 'mymommystyle.com',
    serves: 4
  },
  {
    id: 'eggnet_omelet_with_asian-style_duck',
    name: 'Eggnet omelet with Asian-style duck',
    thumbnail: 'https://edamam-product-images.s3.amazonaws.com/web-img/e55/e5546bd1379ccea9f90813b34c897177.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJHMEUCIAyn9qWjTmaG1e4rT7Tr2XwioRipFfQcMGC9Fhjm16zOAiEAseGzDAfqz%2BHH%2FyuDXiVvG1jwblSJsPzRVF%2FlVHxH4pEqwQUIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDN7x%2FCnpf1THppK21CqVBThbHspWqh2J6KL63BIRLinvjmwoM6PWxOfWGlmn578ldNClBB%2BkIlcw0bLqQrNSVlSdgD3JZPikCcci1cVxnS1PGfDQxxEtGgwxg8pIKcCnVdlWiK9TxavlVvGXlnTjyK7ecRnvaw8GDEnOPXNGnK5voo4a3QlOz72VuenqjAOFPJ10iS0ELgNKcX6uCMpErSFqMcCqmbzp4eIM0ODk76pUAYvc4vQs5GVgYH%2BZ3v%2B212sq8LOmGr4t8Ib2Wqqtmmabb9eKgopnZ7838xnMsQuW%2F7mwMndsnVHSYT35qfZ0avfIe4A3Y4C%2FERG3%2BaUTbaZFDp0wGbXBlKW5KWXjEjyDmU9UbjaQjW%2F3TRrQ3K8vfzNp1gg8MInwlriRhbrSE4%2FxPTCKI7FbZxFlZjk3M54HmtZtWeJMaARuyhBJoM%2FfjDCYIcoti3UXzdRfjNivmgwRbvyv%2FehYEiw0l0d8YbgtMB%2B4Pyg0PpDCoUo2su1LlClBWeb7HmxePnT3TQbSYcUxpWqTBZT9G4abM3A2N4gTwhBjA5uHQzURHtY88OIwLYey3bCQZAm7Iawx2GtpSg%2Bnrx1nIwViEgtQrtwzaNwX8p4y8CRobH3znLjnlVyDgPuj377SA3%2FmAtcrAaVSdOInICsCG3DbKwIRO%2FW60dk3KOmqwcLSOl%2Fi2no%2Bta5ENQqOjU2Ano9lFL9xwLXWp%2Br1LD%2BdqUYeddrGrRkCcMcu4DmAGOxo9NfWK06u95YsGEbj%2BcVXsFxyklU6xzWUit3AMqVUWoipA%2B49kkCbAgiFsVc%2F0ni28tnVIvlOSvzW5ZN7J4%2Bqe7AddldceBTJH%2FNxyX0uHOxXgoZH0v%2F9%2FlqbRB6fTxq4HZNcgMn4h1ybQS%2F1V18w2ca7oAY6sQEhRaeqOkOL0DKtYDj9wrXWm4ZHTmutt%2BlJNcmVxbM9kridLzA3OotlybRLgCDIsKksS6DPLGGSRjULhfO%2F0Pdeguzu5fOn3HLiIEp0jnTKQD8LQzrGsBRu5ceRX14Yaz%2BHGKihk3yZk63i0WieXKbEJdm%2FI1Eqm7aBEZDRvjjB0t%2F6WAhfqWZ7OM%2F1M2l8hu%2FBYNELHVjhrGUIMWp6j2s6UmL6H4rNMj4g9E1VnEgSCz4%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230313T094226Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFNKKTCL2W%2F20230313%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ce241589fd67db7736899ccb0cba5e3c5e7d9d9bd4dd1639aa41d63625cb922f',
    ingredients: [
      '4 large eggs',
      '1-2 tbsp vegetable oil',
      '2 ready-cooked Peking duck breasts, warmed in the oven*',
      '2 tbsp hoisin sauce',
      'Squeeze of lemon juice',
      '¼ small wombok cabbage finely sliced lengthways',
      '2 handfuls bean shoots',
      '2 tbsp toasted sesame seeds',
      '2 tbsp soy sauce',
      '½ tbsp castor sugar',
      '1 tbsp mirin',
      '2 spring onions, sliced on angle',
      '1 Lebanese cucumber, finely sliced on the mandolin',
      '½ long red chilli, finely sliced',
      'Handful fresh coriander and basil',
      '*Peking duck is available ready-cooked at Asian restaurants or pre-packed from poultry suppliers and select supermarkets.'
    ],
    cuisineType: [ 'chinese', 'asian' ],
    steps: 'https://www.goodfood.com.au/recipes/eggnet-omelet-with-asianstyle-duck-20111018-29uhn',
    calories: 1347.608388888167,
    source: 'goodfood.com.au',
    serves: 4
  },
  {
    id: 'cheesy_rigatoni_bake',
    name: 'Cheesy Rigatoni Bake',
    thumbnail: 'https://edamam-product-images.s3.amazonaws.com/web-img/350/35049e4daaa4de4751eddafbcc96645d.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJHMEUCIAyn9qWjTmaG1e4rT7Tr2XwioRipFfQcMGC9Fhjm16zOAiEAseGzDAfqz%2BHH%2FyuDXiVvG1jwblSJsPzRVF%2FlVHxH4pEqwQUIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDN7x%2FCnpf1THppK21CqVBThbHspWqh2J6KL63BIRLinvjmwoM6PWxOfWGlmn578ldNClBB%2BkIlcw0bLqQrNSVlSdgD3JZPikCcci1cVxnS1PGfDQxxEtGgwxg8pIKcCnVdlWiK9TxavlVvGXlnTjyK7ecRnvaw8GDEnOPXNGnK5voo4a3QlOz72VuenqjAOFPJ10iS0ELgNKcX6uCMpErSFqMcCqmbzp4eIM0ODk76pUAYvc4vQs5GVgYH%2BZ3v%2B212sq8LOmGr4t8Ib2Wqqtmmabb9eKgopnZ7838xnMsQuW%2F7mwMndsnVHSYT35qfZ0avfIe4A3Y4C%2FERG3%2BaUTbaZFDp0wGbXBlKW5KWXjEjyDmU9UbjaQjW%2F3TRrQ3K8vfzNp1gg8MInwlriRhbrSE4%2FxPTCKI7FbZxFlZjk3M54HmtZtWeJMaARuyhBJoM%2FfjDCYIcoti3UXzdRfjNivmgwRbvyv%2FehYEiw0l0d8YbgtMB%2B4Pyg0PpDCoUo2su1LlClBWeb7HmxePnT3TQbSYcUxpWqTBZT9G4abM3A2N4gTwhBjA5uHQzURHtY88OIwLYey3bCQZAm7Iawx2GtpSg%2Bnrx1nIwViEgtQrtwzaNwX8p4y8CRobH3znLjnlVyDgPuj377SA3%2FmAtcrAaVSdOInICsCG3DbKwIRO%2FW60dk3KOmqwcLSOl%2Fi2no%2Bta5ENQqOjU2Ano9lFL9xwLXWp%2Br1LD%2BdqUYeddrGrRkCcMcu4DmAGOxo9NfWK06u95YsGEbj%2BcVXsFxyklU6xzWUit3AMqVUWoipA%2B49kkCbAgiFsVc%2F0ni28tnVIvlOSvzW5ZN7J4%2Bqe7AddldceBTJH%2FNxyX0uHOxXgoZH0v%2F9%2FlqbRB6fTxq4HZNcgMn4h1ybQS%2F1V18w2ca7oAY6sQEhRaeqOkOL0DKtYDj9wrXWm4ZHTmutt%2BlJNcmVxbM9kridLzA3OotlybRLgCDIsKksS6DPLGGSRjULhfO%2F0Pdeguzu5fOn3HLiIEp0jnTKQD8LQzrGsBRu5ceRX14Yaz%2BHGKihk3yZk63i0WieXKbEJdm%2FI1Eqm7aBEZDRvjjB0t%2F6WAhfqWZ7OM%2F1M2l8hu%2FBYNELHVjhrGUIMWp6j2s6UmL6H4rNMj4g9E1VnEgSCz4%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230313T094228Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFNKKTCL2W%2F20230313%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=91e533599cc2c5c92d95b413d227ad7f07ee2f215817bc52d48be0854844090e',
    ingredients: [
      '1 package (16 ounces) whole wheat rigatoni or large tube pasta',
      '2 tablespoons light butter',
      '1/4 cup all-purpose flour',
      '1/2 teaspoon salt',
      '2 cups nonfat milk',
      '1/4 cup water',
      '1 cup egg beaters',
      '2 cans (8 ounces each) tomato sauce',
      '2 cups (8 ounces) fat free shredded mozzarella cheese, divided',
      '1/4 cup grated Reduced Fat Parmesan cheese, divided'
    ],
    cuisineType: [ 'italian' ],
    steps: 'https://recipes.sparkpeople.com/recipe-detail.asp?recipe=1595797',
    calories: 3328.1676097000004,
    source: 'recipes.sparkpeople.com',
    serves: 12
  }
]

export const workoutResponse = [
  {
    id: "push-ups_with_feet_on_an_exercise_ball",
    name: "Push-Ups With Feet On An Exercise Ball",
    type: "strength",
    muscle: "chest",
    equipment: "body_only",
    difficulty: "intermediate",
    instructions:
      "Lie on the floor face down and place your hands about 36 inches apart from each other holding your torso up at arms length. Place your toes on top of an exercise ball. This will allow your body to be elevated. Lower yourself until your chest almost touches the floor as you inhale. Using your pectoral muscles, press your upper body back up to the starting position and squeeze your chest. Breathe out as you perform this step. After a second pause at the contracted position, repeat the movement for the prescribed amount of repetitions. Variations: Another way to perform this exercise is to use a flat bench to elevate your body instead of an exercise ball. See Also: Push-Up",
  },
  {
    id: "dumbell_lunges",
    name: "Dumbbell Lunges",
    type: "stretching",
    muscle: "quadriceps",
    equipment: "dumbbell",
    difficulty: "intermediate",
    instructions:
      "Stand with your torso upright holding two dumbbells in your hands by your sides. This will be your starting position. Step forward with your right leg around 2 feet or so from the foot being left stationary behind and lower your upper body down, while keeping the torso upright and maintaining balance. Inhale as you go down. Note: As in the other exercises, do not allow your knee to go forward beyond your toes as you come down, as this will put undue stress on the knee joint. Make sure that you keep your front shin perpendicular to the ground. Using mainly the heel of your foot, push up and go back to the starting position as you exhale. Repeat the movement for the recommended amount of repetitions and then perform with the left leg.  Caution: This is a movement that requires a great deal of balance so if you suffer from balance problems you may wish to either avoid it or just use your own bodyweight while holding on to a fixed object. Definitely never perform with a barbell on your back if you suffer from balance issues. Variations: There are several ways to perform the exercise. One way is to alternate each leg. For instance do one repetition with the right, then the left, then the right and so on. The other way is to do what I call a static lunge where your starting position is with one of your feet already forward. In this case, you just go up and down from that starting position until you are done with the recommended amount of repetitions. Then you switch legs and do the same. A more challenging version is the walking lunges where you walk across the room but in a lunging fashion. For walking lunges the leg being left back has to be brought forward after the lunging action has happened in order to continue moving ahead. This version is reserved for the most advanced athletes. Lunges can be performed with dumbbells as described above or with a barbell on the back, though the barbell variety is better suited for the advanced athletes who have mastered the exercise and no longer have balance issues.",
  },
  {
    id: "partner_plank_band_row",
    name: "Partner plank band row",
    type: "cardio",
    muscle: "abdominals",
    equipment: "bands",
    difficulty: "intermediate",
    instructions:
      "Get into a plank position with your weight evenly distributed on your elbows and toes, keeping your back straight and your hips in line with your back. Your feet should be slightly spread for balance. Your partner should mirror your body position about 5 feet in front of and facing you. Each person should grasp one end of an elastic band with the right hand. This will be your starting position. Maintaining your body weight on three limbs, elevate the right hand and simultaneously pull the elbow back towards your hip in a rowing movement. Return to the start position allowing your elbow to re-establish contact with the floor. Do all reps for one side before switching sides.",
  },
  {
    id: "partner_plank_band",
    name: "Partner plank band",
    type: "plyometrics",
    muscle: "abdominals",
    equipment: "bands",
    difficulty: "intermediate",
    instructions: "",
  },
];

export const openAIDietResponse = {
  id: "cmpl-6rmpQJHkIAmvWPKvjYXTtWifHV0uj",
  object: "text_completion",
  created: 1678277100,
  model: "text-davinci-003",
  choices: [
    {
      text:
        "\n" +
        "\n" +
        "1. Grilled chicken salad\n" +
        "2. Baked salmon with vegetables\n" +
        "3. Brown rice and vegetable stir-fry\n" +
        "4. Omelet with fresh vegetables\n" +
        "5. Whole wheat pasta with tomato sauce",
      index: 0,
      logprobs: null,
      finish_reason: "stop",
    },
  ],
  usage: { prompt_tokens: 9, completion_tokens: 45, total_tokens: 54 },
};

export const openAIResponse = {
  id: "cmpl-6m3rqkUaMgH3BrQF18JGKh8OE6ISp",
  object: "text_completion",
  created: 1676912630,
  model: "text-davinci-003",
  choices: [
    {
      text:
        "\n" +
        "\n" +
        "1. Bodyweight Squats\n" +
        "\n" +
        "2. Push-Ups\n" +
        "\n" +
        "3. Lunges\n" +
        "\n" +
        "4. Plank\n" +
        "\n" +
        "5. Jumping Jacks",
      index: 0,
      logprobs: null,
      finish_reason: "length",
    },
  ],
  usage: { prompt_tokens: 16, completion_tokens: 256, total_tokens: 272 },
};