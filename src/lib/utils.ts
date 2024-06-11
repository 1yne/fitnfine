import type { UserDietStoreType } from "$lib/types";

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

export function capitalizeWords(string: string) {
  let capitalisedStringsArr: string[] = []
  const splitStrings = string.split(" ")
  splitStrings.forEach((splitString) => {
    capitalisedStringsArr.push(splitString.charAt(0).toUpperCase() + splitString.slice(1))
  })
  let capitalisedStrings = capitalisedStringsArr.join(" ")
  return capitalisedStrings
}

export const storedEdamamResponse: UserDietStoreType[] = [
  {
    id: "healthy_brown_rice_and_hemp_seed_salad",
    name: "Healthy Brown Rice And Hemp Seed Salad",
    thumbnail:
      "https://edamam-product-images.s3.amazonaws.com/web-img/7b2/7b2ce05bfc46933e7fb7cccde2b8c647.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQDojQ%2FTMfV2JUUJu40Gb9BQeF3xNZ3clzokS3HdFMlzgAIgBGpjYcnh2Bs6Zz%2FnrfycKLrvLwqy9Oy0l83l0Ln2tMwquQUIWhAAGgwxODcwMTcxNTA5ODYiDK8hoQ13PRp%2BDi0yLSqWBWJG4LNJdp4SdaLKQu00G0E5vDqKc0vT9rcgyhYdBxUiN%2BLYpA4%2BYwpIOxjj8HmJ0n3l86UKnKm6m9fkh%2Fp910r%2B7iH7AuIcO45G%2FbbRWmkl52PD5dk%2FbW5OuoEbcxDkmRbOB9a3gKihQVpgYYxEFiK7bTbJkm1oleg74QRMG9Qh5ZWTllxQ%2FZcCBBRxKYjY73FIE1z9mkEefE3lolbR4WIA80FcO38wW%2F6int7%2BYwOEY0JQbUw4a9y3NTAwmQqQN0Vt934i7PPRKahbeYu1EZdbqpWPtq2vLfcZode6kdynH4QJUcOZnVZaD7xeg6J0Eb3OeMvjF47xUzrCvnmTNnUtfumH%2Ba%2FtTdEpcfD2vHZwWIsz%2Ba8VwQf6udfFxAmkJE1zGTe2%2BQV%2F8lTsI6lO6UY%2FCGMTjAtlFQTwDc0J2w%2FTJX7Pmbzb8tjrzlvWkwHANCGfRlWliY%2FBsesILagJBIV0Ca8FNcmFe3Y936ACv3ybtEWYKfdbRVZxCuMimYqApGkQgo9VRGT2VM61S1EBsQXRa%2FuLNSlXIchT2edsDE3iR9H6uYnSmVgAwqqareHgL4D7%2FWoTBjVOFiuvOi3YgHwLLQ00JNQpNf07PBgPQRsbev1LmP7N9MC82lUTYtakcwgagknJJyMVApgC2tj%2FI6g2%2BHsSVgvd6xZfovRDr0Nsm%2FkZWzcv%2F1JuHjNO9bvuzz8E%2FxmcX1DllyMh0nxbT1vtREVw4C0ccubPo9tBxl8M9VrDHjm%2Fv6YwxHGTzJ4QggoJDg%2B2hu%2FGpF6nEVAZMeXGUBg44IEu%2Bq5hgN42Fk17lZogJ2yWtTXRfDUiIT48FW4N8r59XyHOWx%2BU%2FDgmhIyNEyDZc%2BKOb2c%2BBPtasMhLsKCkOx4fMJ6f26AGOrEBYgKkBy7VOCixX7p46wVoL6dzcsSjW8XKTMgDNgORwuO3Qenq2KJzGH0MG4BxnGY1hWWrMWt3yna3tFrTVjBd9V5CPAJaV9J%2FCAPU%2B8KOCjXA6MoXmh%2F9qrRjpR6akjFAhkuDaA85zBocQv4ekLJeY7%2BNswmITfPHVMDsbip1M3MunAxw9nNsj8Oq9ryVRJUnkZrJYDhUtOH6AZOIPH%2BBwRSaQ7O%2BONb5U7KhLkEgbcs%2F&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230319T095809Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL6OIGUWP%2F20230319%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8fbba119bfb10305338deccd85485f0b86abaa471cd6b08a1ba378a5ffc526d8",
    ingredients: [
      "150 g brown rice",
      "50 g hemp seeds",
      "150 g aubergine",
      "2 tbs extra virgin olive oil",
      "1/2 tsp ground cumin",
      "Salt and freshly cracked black pepper",
      "Pinch of sugar",
      "1/2 tsp Ras-el-Hanout",
      "150 g grated raw swede",
      "Zest and juice of 1 lemon",
      "50 g finely sliced sweetheart cabbage",
      "2 spring onions, sliced",
      "3 tbs mung beans",
    ],
    cuisineType: ["middle eastern"],
    steps:
      "http://www.britishlarder.co.uk/healthy-brown-rice-and-hemp-seed-salad/#axzz1SMG0fFUc",
    calories: 1345.2159854943359,
    source: "The British Larder",
    serves: 8,
  },
  {
    id: "slow_cooker_spicy_and_creamy_pumpkin_soup_recipes",
    name: "Slow Cooker Spicy and Creamy Pumpkin Soup recipes",
    thumbnail:
      "https://edamam-product-images.s3.amazonaws.com/web-img/ad3/ad320216cbfe2bd9ee3b00e37aba2715?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIGu9HEWkTszh7OouISBLE3sP6xmuLqIuZO933JcbNTEbAiEA%2F%2FMAYY1VMJBKSUuZPVVpHdy4GR%2BSbGGRmQlTY63nHWwquQUIWhAAGgwxODcwMTcxNTA5ODYiDKTojYVnoAqyNBAx1CqWBRCvotKWeGRq8Y82MQJHW71zzxu4ZAR%2BABsw7PA0nxeZQMcUOr%2BZd1R5TJIJ2KUehy%2F5SoyEyxUJ4%2BTX%2BHhBZEnaW2PPDut1uczSTkh7d8uu7k95%2Bj6KbmlEGwaeypiHZroO%2FkfRRCnzPyDkaaONUrqrt5%2BNQuYG050Zybtl1RusBWvJJY%2FErTMD9eJxj7Xo8lZzelzaRTwh2juPGd5AL9CrT93Pmq7ZRXnwTHTnZiuE8hoz6TP6HpJu4SDT1q1Q%2FvrUGZG3Ami0a0ag34wk3adQu%2F5Vihrg9CSmDCAWo5rKGK2SeNIqIHMSv1a1cBizGpxleNEAPVmkHfy3UMANeT58%2F7fmz28QPgpuiHIFTxNYT2SyIl%2BmegIHuPC4WfiOKwupNvec20aFW5gb2g6AtF5dDfXnpLPvP33ffr9Ddr1yfF0MU0onhZ1nKm5AjI43b%2BWO%2Fyi%2F1zfLXM2gy0iHk8Rfd6zteBVoYhGCICKxL2VtGTBXbvZEWae8B3WizM6kV679CFSS792MNUqZb5xqt1GC3pQJfKr2upai6r11BRpiNCeQ6q0c6V2ZAHqVAeu6xlFKOYKy8Oim2zJVSjBT5Jx78N6rrYwKhhiZlfnqg6d1Mw27hGtVEh2TwQ9UE4%2BKrzmBU902bX7nAsLnbdyMNlPNxY3SfEwP6MIL3RfivZpdlkz1FkH8qAaw3pRKGtG8w4eKm29murnA9ZAUC%2FNZrKpclFZ%2Bg42S12hCCdBa2eSHdTjCo7BHZqT%2BTm8%2FgpToX2RUQlLu%2BDIHugd9KCx9m8TOo7NAKT%2BYnLPjYYyVfzgSS1csRnnQibHFNaDrIOKavjT4%2BPZqVe8QBTWlh%2FeoJYkmdzDxvoApmGDsZAB4D4xFItJh1Ff8MPCm26AGOrEBkA%2B2%2Bm0ZojJ%2BKhZXsJHUkkuYG1KQSM1SJGVglA198If8gl5wSVbRb4yMt5yLcSuHYpYuiSAVsml9Vc4OAhJvS%2B4MEDzmk1dVE7FzO4A%2Fqr%2BI7KJvoY17axlEkAA%2BytMN6TziwoUrV6K78nMk0C88PQoZoSNHJ2WmqzH18oyx8fWWU8TJpEPe7UHZXOoexhqbI3x7xtWjHjtB8CFGpGqTmphUOoStvkqJXtMeRm7KYcH%2F&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230319T095810Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAY7O5SXW%2F20230319%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8239c5ac52d1e8ad983c8e48e3780a0a56d32fb46d1fb351aa377fb2f739e46e",
    ingredients: [
      "2 tablespoons canola oil",
      "1 large yellow onion, diced",
      "4 large carrots, peeled and diced",
      "2 stalks of celery, diced",
      "4 cloves of garlic, finely minced",
      "1 tablespoon curry powder",
      "1 teaspoon ground cumin",
      "1 teaspoon ground cardamom",
      "1 teaspoon ground coriander",
      "1/4 teaspoon cayenne pepper (more or less to taste)",
      "1/8 teaspoon ground nutmeg",
      "black pepper",
      "salt",
      "6 cups vegetable stock",
      "1 14-ounce can full-fat coconut milk",
      "20 ounces pumpkin puree (canned or homemade)",
      "1 tablespoon brown sugar",
      "1/4 cup roasted pumpkin seeds, garnish",
      "1/4 cup chopped cilantro, garnish",
      "cream",
    ],
    cuisineType: ["american"],
    steps:
      "http://www.cookingandbeer.com/2015/09/slow-cooker-spicy-and-creamy-pumpkin-soup/",
    calories: 2017.9116845649182,
    source: "cookingandbeer.com",
    serves: 8,
  },
  {
    id: "roasted_curried_cauliflower,_grape_&_s",
    name: "Roasted Curried Cauliflower, Grape & S",
    thumbnail:
      "https://edamam-product-images.s3.amazonaws.com/web-img/a0d/a0d5b0a92d0c0f6fd0e9da0a54a7df0c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQDojQ%2FTMfV2JUUJu40Gb9BQeF3xNZ3clzokS3HdFMlzgAIgBGpjYcnh2Bs6Zz%2FnrfycKLrvLwqy9Oy0l83l0Ln2tMwquQUIWhAAGgwxODcwMTcxNTA5ODYiDK8hoQ13PRp%2BDi0yLSqWBWJG4LNJdp4SdaLKQu00G0E5vDqKc0vT9rcgyhYdBxUiN%2BLYpA4%2BYwpIOxjj8HmJ0n3l86UKnKm6m9fkh%2Fp910r%2B7iH7AuIcO45G%2FbbRWmkl52PD5dk%2FbW5OuoEbcxDkmRbOB9a3gKihQVpgYYxEFiK7bTbJkm1oleg74QRMG9Qh5ZWTllxQ%2FZcCBBRxKYjY73FIE1z9mkEefE3lolbR4WIA80FcO38wW%2F6int7%2BYwOEY0JQbUw4a9y3NTAwmQqQN0Vt934i7PPRKahbeYu1EZdbqpWPtq2vLfcZode6kdynH4QJUcOZnVZaD7xeg6J0Eb3OeMvjF47xUzrCvnmTNnUtfumH%2Ba%2FtTdEpcfD2vHZwWIsz%2Ba8VwQf6udfFxAmkJE1zGTe2%2BQV%2F8lTsI6lO6UY%2FCGMTjAtlFQTwDc0J2w%2FTJX7Pmbzb8tjrzlvWkwHANCGfRlWliY%2FBsesILagJBIV0Ca8FNcmFe3Y936ACv3ybtEWYKfdbRVZxCuMimYqApGkQgo9VRGT2VM61S1EBsQXRa%2FuLNSlXIchT2edsDE3iR9H6uYnSmVgAwqqareHgL4D7%2FWoTBjVOFiuvOi3YgHwLLQ00JNQpNf07PBgPQRsbev1LmP7N9MC82lUTYtakcwgagknJJyMVApgC2tj%2FI6g2%2BHsSVgvd6xZfovRDr0Nsm%2FkZWzcv%2F1JuHjNO9bvuzz8E%2FxmcX1DllyMh0nxbT1vtREVw4C0ccubPo9tBxl8M9VrDHjm%2Fv6YwxHGTzJ4QggoJDg%2B2hu%2FGpF6nEVAZMeXGUBg44IEu%2Bq5hgN42Fk17lZogJ2yWtTXRfDUiIT48FW4N8r59XyHOWx%2BU%2FDgmhIyNEyDZc%2BKOb2c%2BBPtasMhLsKCkOx4fMJ6f26AGOrEBYgKkBy7VOCixX7p46wVoL6dzcsSjW8XKTMgDNgORwuO3Qenq2KJzGH0MG4BxnGY1hWWrMWt3yna3tFrTVjBd9V5CPAJaV9J%2FCAPU%2B8KOCjXA6MoXmh%2F9qrRjpR6akjFAhkuDaA85zBocQv4ekLJeY7%2BNswmITfPHVMDsbip1M3MunAxw9nNsj8Oq9ryVRJUnkZrJYDhUtOH6AZOIPH%2BBwRSaQ7O%2BONb5U7KhLkEgbcs%2F&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230319T095812Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL6OIGUWP%2F20230319%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d1545acfe94ef2cacea8cf0ab660decd7db21255a506ff86f67203486fc30d31",
    ingredients: [
      "* 1 medium cauliflower",
      "* 1/4 cup olive oil",
      "* 2 tbsp curry powder*",
      "* 1 tsp tumeric",
      "* 1/2 tsp cumin",
      "* 1 clove garlic, crushed",
      "* pinch of salt",
      "* 3 cup spinach",
      "* 1/4 cup red onion, thinly sliced",
      "* 3/4 cup red grape (cut in 1/2 or third)",
      "* 1/3 cup almond flake, toasted",
      "* 2 tbsp olive oil",
      "* 1 tbsp apple cider vinegar",
      "* 1 tsp honey",
      "* salt and pepper",
    ],
    cuisineType: ["american"],
    steps:
      "http://www.everylastbite.com/2015/11/13/curried-cauliflower-spinach-salad/",
    calories: 1340.1486650948452,
    source: "everylastbite.com",
    serves: 6,
  },
  {
    id: "eileen",
    name: "Eileen",
    thumbnail:
      "https://edamam-product-images.s3.amazonaws.com/web-img/a44/a443c48bb77becabdb1a7458496f1f22.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIGu9HEWkTszh7OouISBLE3sP6xmuLqIuZO933JcbNTEbAiEA%2F%2FMAYY1VMJBKSUuZPVVpHdy4GR%2BSbGGRmQlTY63nHWwquQUIWhAAGgwxODcwMTcxNTA5ODYiDKTojYVnoAqyNBAx1CqWBRCvotKWeGRq8Y82MQJHW71zzxu4ZAR%2BABsw7PA0nxeZQMcUOr%2BZd1R5TJIJ2KUehy%2F5SoyEyxUJ4%2BTX%2BHhBZEnaW2PPDut1uczSTkh7d8uu7k95%2Bj6KbmlEGwaeypiHZroO%2FkfRRCnzPyDkaaONUrqrt5%2BNQuYG050Zybtl1RusBWvJJY%2FErTMD9eJxj7Xo8lZzelzaRTwh2juPGd5AL9CrT93Pmq7ZRXnwTHTnZiuE8hoz6TP6HpJu4SDT1q1Q%2FvrUGZG3Ami0a0ag34wk3adQu%2F5Vihrg9CSmDCAWo5rKGK2SeNIqIHMSv1a1cBizGpxleNEAPVmkHfy3UMANeT58%2F7fmz28QPgpuiHIFTxNYT2SyIl%2BmegIHuPC4WfiOKwupNvec20aFW5gb2g6AtF5dDfXnpLPvP33ffr9Ddr1yfF0MU0onhZ1nKm5AjI43b%2BWO%2Fyi%2F1zfLXM2gy0iHk8Rfd6zteBVoYhGCICKxL2VtGTBXbvZEWae8B3WizM6kV679CFSS792MNUqZb5xqt1GC3pQJfKr2upai6r11BRpiNCeQ6q0c6V2ZAHqVAeu6xlFKOYKy8Oim2zJVSjBT5Jx78N6rrYwKhhiZlfnqg6d1Mw27hGtVEh2TwQ9UE4%2BKrzmBU902bX7nAsLnbdyMNlPNxY3SfEwP6MIL3RfivZpdlkz1FkH8qAaw3pRKGtG8w4eKm29murnA9ZAUC%2FNZrKpclFZ%2Bg42S12hCCdBa2eSHdTjCo7BHZqT%2BTm8%2FgpToX2RUQlLu%2BDIHugd9KCx9m8TOo7NAKT%2BYnLPjYYyVfzgSS1csRnnQibHFNaDrIOKavjT4%2BPZqVe8QBTWlh%2FeoJYkmdzDxvoApmGDsZAB4D4xFItJh1Ff8MPCm26AGOrEBkA%2B2%2Bm0ZojJ%2BKhZXsJHUkkuYG1KQSM1SJGVglA198If8gl5wSVbRb4yMt5yLcSuHYpYuiSAVsml9Vc4OAhJvS%2B4MEDzmk1dVE7FzO4A%2Fqr%2BI7KJvoY17axlEkAA%2BytMN6TziwoUrV6K78nMk0C88PQoZoSNHJ2WmqzH18oyx8fWWU8TJpEPe7UHZXOoexhqbI3x7xtWjHjtB8CFGpGqTmphUOoStvkqJXtMeRm7KYcH%2F&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230319T095814Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAY7O5SXW%2F20230319%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=54a903b084dfaf0f83bfa9409785fb9af3cef8ad69a0ec3371ffe7090e95f2fc",
    ingredients: [
      "8 dashes Tabasco jalapeno sauce",
      "2 tablespoons olive oil",
      "1 (24 ounce) jar salsa verde",
      "1 cup chicken broth",
      "1 teaspoon garlic , minced",
      "6 potatoes , cubed 3/4-inch size",
      "salt and pepper",
      "1 medium onion , sliced",
      "1/2 (4 ounce) can jalapenos, diced",
      "2 lbs pork , cubed 1 1/2-inch size",
    ],
    cuisineType: ["mexican"],
    steps: "http://www.recipezaar.com/Eileens-Chili-Verde-345133",
    calories: 3452.8166520669147,
    source: "recipezaar.com",
    serves: 6,
  },
  {
    id: "roasted_fingerling_and_celery_potato_salad_with_mustard_herb_vinaigrette_recipes",
    name: "Roasted Fingerling and Celery Potato Salad with Mustard Herb Vinaigrette recipes",
    thumbnail:
      "https://edamam-product-images.s3.amazonaws.com/web-img/a07/a07c089df9de99de1cd5af762d054432?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQDojQ%2FTMfV2JUUJu40Gb9BQeF3xNZ3clzokS3HdFMlzgAIgBGpjYcnh2Bs6Zz%2FnrfycKLrvLwqy9Oy0l83l0Ln2tMwquQUIWhAAGgwxODcwMTcxNTA5ODYiDK8hoQ13PRp%2BDi0yLSqWBWJG4LNJdp4SdaLKQu00G0E5vDqKc0vT9rcgyhYdBxUiN%2BLYpA4%2BYwpIOxjj8HmJ0n3l86UKnKm6m9fkh%2Fp910r%2B7iH7AuIcO45G%2FbbRWmkl52PD5dk%2FbW5OuoEbcxDkmRbOB9a3gKihQVpgYYxEFiK7bTbJkm1oleg74QRMG9Qh5ZWTllxQ%2FZcCBBRxKYjY73FIE1z9mkEefE3lolbR4WIA80FcO38wW%2F6int7%2BYwOEY0JQbUw4a9y3NTAwmQqQN0Vt934i7PPRKahbeYu1EZdbqpWPtq2vLfcZode6kdynH4QJUcOZnVZaD7xeg6J0Eb3OeMvjF47xUzrCvnmTNnUtfumH%2Ba%2FtTdEpcfD2vHZwWIsz%2Ba8VwQf6udfFxAmkJE1zGTe2%2BQV%2F8lTsI6lO6UY%2FCGMTjAtlFQTwDc0J2w%2FTJX7Pmbzb8tjrzlvWkwHANCGfRlWliY%2FBsesILagJBIV0Ca8FNcmFe3Y936ACv3ybtEWYKfdbRVZxCuMimYqApGkQgo9VRGT2VM61S1EBsQXRa%2FuLNSlXIchT2edsDE3iR9H6uYnSmVgAwqqareHgL4D7%2FWoTBjVOFiuvOi3YgHwLLQ00JNQpNf07PBgPQRsbev1LmP7N9MC82lUTYtakcwgagknJJyMVApgC2tj%2FI6g2%2BHsSVgvd6xZfovRDr0Nsm%2FkZWzcv%2F1JuHjNO9bvuzz8E%2FxmcX1DllyMh0nxbT1vtREVw4C0ccubPo9tBxl8M9VrDHjm%2Fv6YwxHGTzJ4QggoJDg%2B2hu%2FGpF6nEVAZMeXGUBg44IEu%2Bq5hgN42Fk17lZogJ2yWtTXRfDUiIT48FW4N8r59XyHOWx%2BU%2FDgmhIyNEyDZc%2BKOb2c%2BBPtasMhLsKCkOx4fMJ6f26AGOrEBYgKkBy7VOCixX7p46wVoL6dzcsSjW8XKTMgDNgORwuO3Qenq2KJzGH0MG4BxnGY1hWWrMWt3yna3tFrTVjBd9V5CPAJaV9J%2FCAPU%2B8KOCjXA6MoXmh%2F9qrRjpR6akjFAhkuDaA85zBocQv4ekLJeY7%2BNswmITfPHVMDsbip1M3MunAxw9nNsj8Oq9ryVRJUnkZrJYDhUtOH6AZOIPH%2BBwRSaQ7O%2BONb5U7KhLkEgbcs%2F&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230319T095815Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL6OIGUWP%2F20230319%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=de875095e9249499a2d234314e1aa05d2eaa833f0e18565995d55060852da630",
    ingredients: [
      "1.5 lb/680g small fingerling potatoes",
      "½ teaspoon sea salt",
      "1/8th teaspoon freshly ground pepper",
      "1 Tablespoon/15ml extra virgin olive oil",
      "½ teaspoon sea salt",
      "1/8th teaspoon freshly ground black pepper",
      "2 Tablespoons chopped fresh parsley",
      "2 Tablespoons chopped fresh chives",
      "2 Tablespoons chopped fresh dill",
      "6 celery ribs, thinly sliced",
      "½ a small of bunch of radishes, thinly sliced into rounds",
      "1 teaspoon/ 5ml Dijon mustard",
      "1 1/2 Tablespoons/ 22ml fresh lemon juice",
      "The zest of ½ a lemon",
      "¼ teaspoon sea salt",
      "1/8th teaspoon freshly ground pepper",
      "2 Tablespoons/30ml extra-virgin olive oil",
    ],
    cuisineType: ["american"],
    steps:
      "http://gourmandeinthekitchen.com/2016/roasted-fingerling-potato-celery-salad-with-mustard-herb-vinaigrette/",
    calories: 976.9864649824375,
    source: "gourmandeinthekitchen.com",
    serves: 4,
  },
];

export const storedWorkouts = [
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
    id: "0001",
    name: "3/4 Sit-up",
    target: "abs",
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0002.gif",
    id: "0002",
    name: "45° Side Bend",
    target: "abs",
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0003.gif",
    id: "0003",
    name: "Air Bike",
    target: "abs",
  },
  {
    bodyPart: "upper legs",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1512.gif",
    id: "1512",
    name: "All Fours Squad Stretch",
    target: "quads",
  },
];

export const storedOpenAIDietResponse = {
  data: {
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
  },
};

export const storedOpenAIWorkoutResponse = {
  data: {
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
  },
};
