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

export const edamamResponse: UserDietStoreType[] = [
  {
    id: 'healthy_brown_rice_and_hemp_seed_salad',
    name: 'Healthy Brown Rice And Hemp Seed Salad',
    thumbnail: 'https://edamam-product-images.s3.amazonaws.com/web-img/7b2/7b2ce05bfc46933e7fb7cccde2b8c647.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQDojQ%2FTMfV2JUUJu40Gb9BQeF3xNZ3clzokS3HdFMlzgAIgBGpjYcnh2Bs6Zz%2FnrfycKLrvLwqy9Oy0l83l0Ln2tMwquQUIWhAAGgwxODcwMTcxNTA5ODYiDK8hoQ13PRp%2BDi0yLSqWBWJG4LNJdp4SdaLKQu00G0E5vDqKc0vT9rcgyhYdBxUiN%2BLYpA4%2BYwpIOxjj8HmJ0n3l86UKnKm6m9fkh%2Fp910r%2B7iH7AuIcO45G%2FbbRWmkl52PD5dk%2FbW5OuoEbcxDkmRbOB9a3gKihQVpgYYxEFiK7bTbJkm1oleg74QRMG9Qh5ZWTllxQ%2FZcCBBRxKYjY73FIE1z9mkEefE3lolbR4WIA80FcO38wW%2F6int7%2BYwOEY0JQbUw4a9y3NTAwmQqQN0Vt934i7PPRKahbeYu1EZdbqpWPtq2vLfcZode6kdynH4QJUcOZnVZaD7xeg6J0Eb3OeMvjF47xUzrCvnmTNnUtfumH%2Ba%2FtTdEpcfD2vHZwWIsz%2Ba8VwQf6udfFxAmkJE1zGTe2%2BQV%2F8lTsI6lO6UY%2FCGMTjAtlFQTwDc0J2w%2FTJX7Pmbzb8tjrzlvWkwHANCGfRlWliY%2FBsesILagJBIV0Ca8FNcmFe3Y936ACv3ybtEWYKfdbRVZxCuMimYqApGkQgo9VRGT2VM61S1EBsQXRa%2FuLNSlXIchT2edsDE3iR9H6uYnSmVgAwqqareHgL4D7%2FWoTBjVOFiuvOi3YgHwLLQ00JNQpNf07PBgPQRsbev1LmP7N9MC82lUTYtakcwgagknJJyMVApgC2tj%2FI6g2%2BHsSVgvd6xZfovRDr0Nsm%2FkZWzcv%2F1JuHjNO9bvuzz8E%2FxmcX1DllyMh0nxbT1vtREVw4C0ccubPo9tBxl8M9VrDHjm%2Fv6YwxHGTzJ4QggoJDg%2B2hu%2FGpF6nEVAZMeXGUBg44IEu%2Bq5hgN42Fk17lZogJ2yWtTXRfDUiIT48FW4N8r59XyHOWx%2BU%2FDgmhIyNEyDZc%2BKOb2c%2BBPtasMhLsKCkOx4fMJ6f26AGOrEBYgKkBy7VOCixX7p46wVoL6dzcsSjW8XKTMgDNgORwuO3Qenq2KJzGH0MG4BxnGY1hWWrMWt3yna3tFrTVjBd9V5CPAJaV9J%2FCAPU%2B8KOCjXA6MoXmh%2F9qrRjpR6akjFAhkuDaA85zBocQv4ekLJeY7%2BNswmITfPHVMDsbip1M3MunAxw9nNsj8Oq9ryVRJUnkZrJYDhUtOH6AZOIPH%2BBwRSaQ7O%2BONb5U7KhLkEgbcs%2F&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230319T095809Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL6OIGUWP%2F20230319%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8fbba119bfb10305338deccd85485f0b86abaa471cd6b08a1ba378a5ffc526d8',
    ingredients: [
      '150 g brown rice',
      '50 g hemp seeds',
      '150 g aubergine',
      '2 tbs extra virgin olive oil',
      '1/2 tsp ground cumin',
      'Salt and freshly cracked black pepper',
      'Pinch of sugar',
      '1/2 tsp Ras-el-Hanout',
      '150 g grated raw swede',
      'Zest and juice of 1 lemon',
      '50 g finely sliced sweetheart cabbage',
      '2 spring onions, sliced',
      '3 tbs mung beans'
    ],
    cuisineType: [ 'middle eastern' ],
    steps: 'http://www.britishlarder.co.uk/healthy-brown-rice-and-hemp-seed-salad/#axzz1SMG0fFUc',
    calories: 1345.2159854943359,
    source: 'The British Larder',
    serves: 8
  },
  {
    id: 'slow_cooker_spicy_and_creamy_pumpkin_soup_recipes',
    name: 'Slow Cooker Spicy and Creamy Pumpkin Soup recipes',
    thumbnail: 'https://edamam-product-images.s3.amazonaws.com/web-img/ad3/ad320216cbfe2bd9ee3b00e37aba2715?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIGu9HEWkTszh7OouISBLE3sP6xmuLqIuZO933JcbNTEbAiEA%2F%2FMAYY1VMJBKSUuZPVVpHdy4GR%2BSbGGRmQlTY63nHWwquQUIWhAAGgwxODcwMTcxNTA5ODYiDKTojYVnoAqyNBAx1CqWBRCvotKWeGRq8Y82MQJHW71zzxu4ZAR%2BABsw7PA0nxeZQMcUOr%2BZd1R5TJIJ2KUehy%2F5SoyEyxUJ4%2BTX%2BHhBZEnaW2PPDut1uczSTkh7d8uu7k95%2Bj6KbmlEGwaeypiHZroO%2FkfRRCnzPyDkaaONUrqrt5%2BNQuYG050Zybtl1RusBWvJJY%2FErTMD9eJxj7Xo8lZzelzaRTwh2juPGd5AL9CrT93Pmq7ZRXnwTHTnZiuE8hoz6TP6HpJu4SDT1q1Q%2FvrUGZG3Ami0a0ag34wk3adQu%2F5Vihrg9CSmDCAWo5rKGK2SeNIqIHMSv1a1cBizGpxleNEAPVmkHfy3UMANeT58%2F7fmz28QPgpuiHIFTxNYT2SyIl%2BmegIHuPC4WfiOKwupNvec20aFW5gb2g6AtF5dDfXnpLPvP33ffr9Ddr1yfF0MU0onhZ1nKm5AjI43b%2BWO%2Fyi%2F1zfLXM2gy0iHk8Rfd6zteBVoYhGCICKxL2VtGTBXbvZEWae8B3WizM6kV679CFSS792MNUqZb5xqt1GC3pQJfKr2upai6r11BRpiNCeQ6q0c6V2ZAHqVAeu6xlFKOYKy8Oim2zJVSjBT5Jx78N6rrYwKhhiZlfnqg6d1Mw27hGtVEh2TwQ9UE4%2BKrzmBU902bX7nAsLnbdyMNlPNxY3SfEwP6MIL3RfivZpdlkz1FkH8qAaw3pRKGtG8w4eKm29murnA9ZAUC%2FNZrKpclFZ%2Bg42S12hCCdBa2eSHdTjCo7BHZqT%2BTm8%2FgpToX2RUQlLu%2BDIHugd9KCx9m8TOo7NAKT%2BYnLPjYYyVfzgSS1csRnnQibHFNaDrIOKavjT4%2BPZqVe8QBTWlh%2FeoJYkmdzDxvoApmGDsZAB4D4xFItJh1Ff8MPCm26AGOrEBkA%2B2%2Bm0ZojJ%2BKhZXsJHUkkuYG1KQSM1SJGVglA198If8gl5wSVbRb4yMt5yLcSuHYpYuiSAVsml9Vc4OAhJvS%2B4MEDzmk1dVE7FzO4A%2Fqr%2BI7KJvoY17axlEkAA%2BytMN6TziwoUrV6K78nMk0C88PQoZoSNHJ2WmqzH18oyx8fWWU8TJpEPe7UHZXOoexhqbI3x7xtWjHjtB8CFGpGqTmphUOoStvkqJXtMeRm7KYcH%2F&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230319T095810Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAY7O5SXW%2F20230319%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8239c5ac52d1e8ad983c8e48e3780a0a56d32fb46d1fb351aa377fb2f739e46e',
    ingredients: [
      '2 tablespoons canola oil',
      '1 large yellow onion, diced',
      '4 large carrots, peeled and diced',
      '2 stalks of celery, diced',
      '4 cloves of garlic, finely minced',
      '1 tablespoon curry powder',
      '1 teaspoon ground cumin',
      '1 teaspoon ground cardamom',
      '1 teaspoon ground coriander',
      '1/4 teaspoon cayenne pepper (more or less to taste)',
      '1/8 teaspoon ground nutmeg',
      'black pepper',
      'salt',
      '6 cups vegetable stock',
      '1 14-ounce can full-fat coconut milk',
      '20 ounces pumpkin puree (canned or homemade)',
      '1 tablespoon brown sugar',
      '1/4 cup roasted pumpkin seeds, garnish',
      '1/4 cup chopped cilantro, garnish',
      'cream'
    ],
    cuisineType: [ 'american' ],
    steps: 'http://www.cookingandbeer.com/2015/09/slow-cooker-spicy-and-creamy-pumpkin-soup/',
    calories: 2017.9116845649182,
    source: 'cookingandbeer.com',
    serves: 8
  },
  {
    id: 'roasted_curried_cauliflower,_grape_&_s',
    name: 'Roasted Curried Cauliflower, Grape & S',
    thumbnail: 'https://edamam-product-images.s3.amazonaws.com/web-img/a0d/a0d5b0a92d0c0f6fd0e9da0a54a7df0c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQDojQ%2FTMfV2JUUJu40Gb9BQeF3xNZ3clzokS3HdFMlzgAIgBGpjYcnh2Bs6Zz%2FnrfycKLrvLwqy9Oy0l83l0Ln2tMwquQUIWhAAGgwxODcwMTcxNTA5ODYiDK8hoQ13PRp%2BDi0yLSqWBWJG4LNJdp4SdaLKQu00G0E5vDqKc0vT9rcgyhYdBxUiN%2BLYpA4%2BYwpIOxjj8HmJ0n3l86UKnKm6m9fkh%2Fp910r%2B7iH7AuIcO45G%2FbbRWmkl52PD5dk%2FbW5OuoEbcxDkmRbOB9a3gKihQVpgYYxEFiK7bTbJkm1oleg74QRMG9Qh5ZWTllxQ%2FZcCBBRxKYjY73FIE1z9mkEefE3lolbR4WIA80FcO38wW%2F6int7%2BYwOEY0JQbUw4a9y3NTAwmQqQN0Vt934i7PPRKahbeYu1EZdbqpWPtq2vLfcZode6kdynH4QJUcOZnVZaD7xeg6J0Eb3OeMvjF47xUzrCvnmTNnUtfumH%2Ba%2FtTdEpcfD2vHZwWIsz%2Ba8VwQf6udfFxAmkJE1zGTe2%2BQV%2F8lTsI6lO6UY%2FCGMTjAtlFQTwDc0J2w%2FTJX7Pmbzb8tjrzlvWkwHANCGfRlWliY%2FBsesILagJBIV0Ca8FNcmFe3Y936ACv3ybtEWYKfdbRVZxCuMimYqApGkQgo9VRGT2VM61S1EBsQXRa%2FuLNSlXIchT2edsDE3iR9H6uYnSmVgAwqqareHgL4D7%2FWoTBjVOFiuvOi3YgHwLLQ00JNQpNf07PBgPQRsbev1LmP7N9MC82lUTYtakcwgagknJJyMVApgC2tj%2FI6g2%2BHsSVgvd6xZfovRDr0Nsm%2FkZWzcv%2F1JuHjNO9bvuzz8E%2FxmcX1DllyMh0nxbT1vtREVw4C0ccubPo9tBxl8M9VrDHjm%2Fv6YwxHGTzJ4QggoJDg%2B2hu%2FGpF6nEVAZMeXGUBg44IEu%2Bq5hgN42Fk17lZogJ2yWtTXRfDUiIT48FW4N8r59XyHOWx%2BU%2FDgmhIyNEyDZc%2BKOb2c%2BBPtasMhLsKCkOx4fMJ6f26AGOrEBYgKkBy7VOCixX7p46wVoL6dzcsSjW8XKTMgDNgORwuO3Qenq2KJzGH0MG4BxnGY1hWWrMWt3yna3tFrTVjBd9V5CPAJaV9J%2FCAPU%2B8KOCjXA6MoXmh%2F9qrRjpR6akjFAhkuDaA85zBocQv4ekLJeY7%2BNswmITfPHVMDsbip1M3MunAxw9nNsj8Oq9ryVRJUnkZrJYDhUtOH6AZOIPH%2BBwRSaQ7O%2BONb5U7KhLkEgbcs%2F&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230319T095812Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL6OIGUWP%2F20230319%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d1545acfe94ef2cacea8cf0ab660decd7db21255a506ff86f67203486fc30d31',
    ingredients: [
      '* 1 medium cauliflower',
      '* 1/4 cup olive oil',
      '* 2 tbsp curry powder*',
      '* 1 tsp tumeric',
      '* 1/2 tsp cumin',
      '* 1 clove garlic, crushed',
      '* pinch of salt',
      '* 3 cup spinach',
      '* 1/4 cup red onion, thinly sliced',
      '* 3/4 cup red grape (cut in 1/2 or third)',
      '* 1/3 cup almond flake, toasted',
      '* 2 tbsp olive oil',
      '* 1 tbsp apple cider vinegar',
      '* 1 tsp honey',
      '* salt and pepper'
    ],
    cuisineType: [ 'american' ],
    steps: 'http://www.everylastbite.com/2015/11/13/curried-cauliflower-spinach-salad/',
    calories: 1340.1486650948452,
    source: 'everylastbite.com',
    serves: 6
  },
  {
    id: 'eileen',
    name: 'Eileen',
    thumbnail: 'https://edamam-product-images.s3.amazonaws.com/web-img/a44/a443c48bb77becabdb1a7458496f1f22.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIGu9HEWkTszh7OouISBLE3sP6xmuLqIuZO933JcbNTEbAiEA%2F%2FMAYY1VMJBKSUuZPVVpHdy4GR%2BSbGGRmQlTY63nHWwquQUIWhAAGgwxODcwMTcxNTA5ODYiDKTojYVnoAqyNBAx1CqWBRCvotKWeGRq8Y82MQJHW71zzxu4ZAR%2BABsw7PA0nxeZQMcUOr%2BZd1R5TJIJ2KUehy%2F5SoyEyxUJ4%2BTX%2BHhBZEnaW2PPDut1uczSTkh7d8uu7k95%2Bj6KbmlEGwaeypiHZroO%2FkfRRCnzPyDkaaONUrqrt5%2BNQuYG050Zybtl1RusBWvJJY%2FErTMD9eJxj7Xo8lZzelzaRTwh2juPGd5AL9CrT93Pmq7ZRXnwTHTnZiuE8hoz6TP6HpJu4SDT1q1Q%2FvrUGZG3Ami0a0ag34wk3adQu%2F5Vihrg9CSmDCAWo5rKGK2SeNIqIHMSv1a1cBizGpxleNEAPVmkHfy3UMANeT58%2F7fmz28QPgpuiHIFTxNYT2SyIl%2BmegIHuPC4WfiOKwupNvec20aFW5gb2g6AtF5dDfXnpLPvP33ffr9Ddr1yfF0MU0onhZ1nKm5AjI43b%2BWO%2Fyi%2F1zfLXM2gy0iHk8Rfd6zteBVoYhGCICKxL2VtGTBXbvZEWae8B3WizM6kV679CFSS792MNUqZb5xqt1GC3pQJfKr2upai6r11BRpiNCeQ6q0c6V2ZAHqVAeu6xlFKOYKy8Oim2zJVSjBT5Jx78N6rrYwKhhiZlfnqg6d1Mw27hGtVEh2TwQ9UE4%2BKrzmBU902bX7nAsLnbdyMNlPNxY3SfEwP6MIL3RfivZpdlkz1FkH8qAaw3pRKGtG8w4eKm29murnA9ZAUC%2FNZrKpclFZ%2Bg42S12hCCdBa2eSHdTjCo7BHZqT%2BTm8%2FgpToX2RUQlLu%2BDIHugd9KCx9m8TOo7NAKT%2BYnLPjYYyVfzgSS1csRnnQibHFNaDrIOKavjT4%2BPZqVe8QBTWlh%2FeoJYkmdzDxvoApmGDsZAB4D4xFItJh1Ff8MPCm26AGOrEBkA%2B2%2Bm0ZojJ%2BKhZXsJHUkkuYG1KQSM1SJGVglA198If8gl5wSVbRb4yMt5yLcSuHYpYuiSAVsml9Vc4OAhJvS%2B4MEDzmk1dVE7FzO4A%2Fqr%2BI7KJvoY17axlEkAA%2BytMN6TziwoUrV6K78nMk0C88PQoZoSNHJ2WmqzH18oyx8fWWU8TJpEPe7UHZXOoexhqbI3x7xtWjHjtB8CFGpGqTmphUOoStvkqJXtMeRm7KYcH%2F&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230319T095814Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAY7O5SXW%2F20230319%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=54a903b084dfaf0f83bfa9409785fb9af3cef8ad69a0ec3371ffe7090e95f2fc',
    ingredients: [
      '8 dashes Tabasco jalapeno sauce',
      '2 tablespoons olive oil',
      '1 (24 ounce) jar salsa verde',
      '1 cup chicken broth',
      '1 teaspoon garlic , minced',
      '6 potatoes , cubed 3/4-inch size',
      'salt and pepper',
      '1 medium onion , sliced',
      '1/2 (4 ounce) can jalapenos, diced',
      '2 lbs pork , cubed 1 1/2-inch size'
    ],
    cuisineType: [ 'mexican' ],
    steps: 'http://www.recipezaar.com/Eileens-Chili-Verde-345133',
    calories: 3452.8166520669147,
    source: 'recipezaar.com',
    serves: 6
  },
  {
    id: 'roasted_fingerling_and_celery_potato_salad_with_mustard_herb_vinaigrette_recipes',
    name: 'Roasted Fingerling and Celery Potato Salad with Mustard Herb Vinaigrette recipes',
    thumbnail: 'https://edamam-product-images.s3.amazonaws.com/web-img/a07/a07c089df9de99de1cd5af762d054432?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQDojQ%2FTMfV2JUUJu40Gb9BQeF3xNZ3clzokS3HdFMlzgAIgBGpjYcnh2Bs6Zz%2FnrfycKLrvLwqy9Oy0l83l0Ln2tMwquQUIWhAAGgwxODcwMTcxNTA5ODYiDK8hoQ13PRp%2BDi0yLSqWBWJG4LNJdp4SdaLKQu00G0E5vDqKc0vT9rcgyhYdBxUiN%2BLYpA4%2BYwpIOxjj8HmJ0n3l86UKnKm6m9fkh%2Fp910r%2B7iH7AuIcO45G%2FbbRWmkl52PD5dk%2FbW5OuoEbcxDkmRbOB9a3gKihQVpgYYxEFiK7bTbJkm1oleg74QRMG9Qh5ZWTllxQ%2FZcCBBRxKYjY73FIE1z9mkEefE3lolbR4WIA80FcO38wW%2F6int7%2BYwOEY0JQbUw4a9y3NTAwmQqQN0Vt934i7PPRKahbeYu1EZdbqpWPtq2vLfcZode6kdynH4QJUcOZnVZaD7xeg6J0Eb3OeMvjF47xUzrCvnmTNnUtfumH%2Ba%2FtTdEpcfD2vHZwWIsz%2Ba8VwQf6udfFxAmkJE1zGTe2%2BQV%2F8lTsI6lO6UY%2FCGMTjAtlFQTwDc0J2w%2FTJX7Pmbzb8tjrzlvWkwHANCGfRlWliY%2FBsesILagJBIV0Ca8FNcmFe3Y936ACv3ybtEWYKfdbRVZxCuMimYqApGkQgo9VRGT2VM61S1EBsQXRa%2FuLNSlXIchT2edsDE3iR9H6uYnSmVgAwqqareHgL4D7%2FWoTBjVOFiuvOi3YgHwLLQ00JNQpNf07PBgPQRsbev1LmP7N9MC82lUTYtakcwgagknJJyMVApgC2tj%2FI6g2%2BHsSVgvd6xZfovRDr0Nsm%2FkZWzcv%2F1JuHjNO9bvuzz8E%2FxmcX1DllyMh0nxbT1vtREVw4C0ccubPo9tBxl8M9VrDHjm%2Fv6YwxHGTzJ4QggoJDg%2B2hu%2FGpF6nEVAZMeXGUBg44IEu%2Bq5hgN42Fk17lZogJ2yWtTXRfDUiIT48FW4N8r59XyHOWx%2BU%2FDgmhIyNEyDZc%2BKOb2c%2BBPtasMhLsKCkOx4fMJ6f26AGOrEBYgKkBy7VOCixX7p46wVoL6dzcsSjW8XKTMgDNgORwuO3Qenq2KJzGH0MG4BxnGY1hWWrMWt3yna3tFrTVjBd9V5CPAJaV9J%2FCAPU%2B8KOCjXA6MoXmh%2F9qrRjpR6akjFAhkuDaA85zBocQv4ekLJeY7%2BNswmITfPHVMDsbip1M3MunAxw9nNsj8Oq9ryVRJUnkZrJYDhUtOH6AZOIPH%2BBwRSaQ7O%2BONb5U7KhLkEgbcs%2F&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230319T095815Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFL6OIGUWP%2F20230319%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=de875095e9249499a2d234314e1aa05d2eaa833f0e18565995d55060852da630',
    ingredients: [
      '1.5 lb/680g small fingerling potatoes',
      '½ teaspoon sea salt',
      '1/8th teaspoon freshly ground pepper',
      '1 Tablespoon/15ml extra virgin olive oil',
      '½ teaspoon sea salt',
      '1/8th teaspoon freshly ground black pepper',
      '2 Tablespoons chopped fresh parsley',
      '2 Tablespoons chopped fresh chives',
      '2 Tablespoons chopped fresh dill',
      '6 celery ribs, thinly sliced',
      '½ a small of bunch of radishes, thinly sliced into rounds',
      '1 teaspoon/ 5ml Dijon mustard',
      '1 1/2 Tablespoons/ 22ml fresh lemon juice',
      'The zest of ½ a lemon',
      '¼ teaspoon sea salt',
      '1/8th teaspoon freshly ground pepper',
      '2 Tablespoons/30ml extra-virgin olive oil'
    ],
    cuisineType: [ 'american' ],
    steps: 'http://gourmandeinthekitchen.com/2016/roasted-fingerling-potato-celery-salad-with-mustard-herb-vinaigrette/',
    calories: 976.9864649824375,
    source: 'gourmandeinthekitchen.com',
    serves: 4
  }
];

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

export const exerciseDBData = [
  {
    bodyPart: 'waist',
    equipment: 'body weight',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif',
    id: '0001',
    name: '3/4 sit-up',
    target: 'abs'
  },
  {
    bodyPart: 'waist',
    equipment: 'body weight',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0002.gif',
    id: '0002',
    name: '45° side bend',
    target: 'abs'
  },
  {
    bodyPart: 'waist',
    equipment: 'body weight',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0003.gif',
    id: '0003',
    name: 'air bike',
    target: 'abs'
  },
  {
    bodyPart: 'upper legs',
    equipment: 'body weight',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1512.gif',
    id: '1512',
    name: 'all fours squad stretch',
    target: 'quads'
  },
  {
    bodyPart: 'waist',
    equipment: 'body weight',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0006.gif',
    id: '0006',
    name: 'alternate heel touchers',
    target: 'abs'
  },
  {
    bodyPart: 'back',
    equipment: 'cable',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0007.gif',
    id: '0007',
    name: 'alternate lateral pulldown',
    target: 'lats'
  },
  {
    bodyPart: 'lower legs',
    equipment: 'body weight',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1368.gif',
    id: '1368',
    name: 'ankle circles',
    target: 'calves'
  },
  {
    bodyPart: 'back',
    equipment: 'body weight',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/3293.gif',
    id: '3293',
    name: 'archer pull up',
    target: 'lats'
  },
  {
    bodyPart: 'chest',
    equipment: 'body weight',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/3294.gif',
    id: '3294',
    name: 'archer push up',
    target: 'pectorals'
  },
  {
    bodyPart: 'waist',
    equipment: 'body weight',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/2355.gif',
    id: '2355',
    name: 'arm slingers hanging bent knee legs',
    target: 'abs'
  },
  {
    bodyPart: 'waist',
    equipment: 'body weight',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/2333.gif',
    id: '2333',
    name: 'arm slingers hanging straight legs',
    target: 'abs'
  },
  {
    bodyPart: 'upper legs',
    equipment: 'body weight',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/3214.gif',
    id: '3214',
    name: 'arms apart circular toe touch (male)',
    target: 'glutes'
  },
  {
    bodyPart: 'waist',
    equipment: 'body weight',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/3204.gif',
    id: '3204',
    name: 'arms overhead full sit-up (male)',
    target: 'abs'
  },
  {
    bodyPart: 'chest',
    equipment: 'leverage machine',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0009.gif',
    id: '0009',
    name: 'assisted chest dip (kneeling)',
    target: 'pectorals'
  },
  {
    bodyPart: 'waist',
    equipment: 'assisted',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0011.gif',
    id: '0011',
    name: 'assisted hanging knee raise',
    target: 'abs'
  },
  {
    bodyPart: 'waist',
    equipment: 'assisted',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0010.gif',
    id: '0010',
    name: 'assisted hanging knee raise with throw down',
    target: 'abs'
  },
  {
    bodyPart: 'lower legs',
    equipment: 'assisted',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1708.gif',
    id: '1708',
    name: 'assisted lying calves stretch',
    target: 'calves'
  },
  {
    bodyPart: 'upper legs',
    equipment: 'assisted',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1709.gif',
    id: '1709',
    name: 'assisted lying glutes stretch',
    target: 'glutes'
  },
  {
    bodyPart: 'upper legs',
    equipment: 'assisted',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1710.gif',
    id: '1710',
    name: 'assisted lying gluteus and piriformis stretch',
    target: 'glutes'
  },
  {
    bodyPart: 'waist',
    equipment: 'assisted',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0012.gif',
    id: '0012',
    name: 'assisted lying leg raise with lateral throw down',
    target: 'abs'
  },
  {
    bodyPart: 'waist',
    equipment: 'assisted',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0013.gif',
    id: '0013',
    name: 'assisted lying leg raise with throw down',
    target: 'abs'
  },
  {
    bodyPart: 'waist',
    equipment: 'medicine ball',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0014.gif',
    id: '0014',
    name: 'assisted motion russian twist',
    target: 'abs'
  },
  {
    bodyPart: 'back',
    equipment: 'leverage machine',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0015.gif',
    id: '0015',
    name: 'assisted parallel close grip pull-up',
    target: 'lats'
  },
  {
    bodyPart: 'upper legs',
    equipment: 'assisted',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0016.gif',
    id: '0016',
    name: 'assisted prone hamstring',
    target: 'hamstrings'
  },
  {
    bodyPart: 'upper legs',
    equipment: 'assisted',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1713.gif',
    id: '1713',
    name: 'assisted prone lying quads stretch',
    target: 'quads'
  },
  {
    bodyPart: 'waist',
    equipment: 'assisted',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1714.gif',
    id: '1714',
    name: 'assisted prone rectus femoris stretch',
    target: 'abs'
  },
  {
    bodyPart: 'back',
    equipment: 'leverage machine',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0017.gif',
    id: '0017',
    name: 'assisted pull-up',
    target: 'lats'
  },
  {
    bodyPart: 'chest',
    equipment: 'assisted',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1716.gif',
    id: '1716',
    name: 'assisted seated pectoralis major stretch with stability ball',
    target: 'pectorals'
  },
  {
    bodyPart: 'upper legs',
    equipment: 'assisted',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1712.gif',
    id: '1712',
    name: 'assisted side lying adductor stretch',
    target: 'adductors'
  },
  {
    bodyPart: 'waist',
    equipment: 'assisted',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1758.gif',
    id: '1758',
    name: 'assisted sit-up',
    target: 'abs'
  },
  {
    bodyPart: 'back',
    equipment: 'leverage machine',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1431.gif',
    id: '1431',
    name: 'assisted standing chin-up',
    target: 'lats'
  },
  {
    bodyPart: 'back',
    equipment: 'leverage machine',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1432.gif',
    id: '1432',
    name: 'assisted standing pull-up',
    target: 'lats'
  },
  {
    bodyPart: 'upper arms',
    equipment: 'assisted',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0018.gif',
    id: '0018',
    name: 'assisted standing triceps extension (with towel)',
    target: 'triceps'
  },
  {
    bodyPart: 'upper arms',
    equipment: 'leverage machine',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0019.gif',
    id: '0019',
    name: 'assisted triceps dip (kneeling)',
    target: 'triceps'
  },
  {
    bodyPart: 'chest',
    equipment: 'leverage machine',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/2364.gif',
    id: '2364',
    name: 'assisted wide-grip chest dip (kneeling)',
    target: 'pectorals'
  },
  {
    bodyPart: 'cardio',
    equipment: 'body weight',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/3220.gif',
    id: '3220',
    name: 'astride jumps (male)',
    target: 'cardiovascular system'
  },
  {
    bodyPart: 'cardio',
    equipment: 'body weight',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/3672.gif',
    id: '3672',
    name: 'back and forth step',
    target: 'cardiovascular system'
  },
  {
    bodyPart: 'back',
    equipment: 'stability ball',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1314.gif',
    id: '1314',
    name: 'back extension on exercise ball',
    target: 'spine'
  },
  {
    bodyPart: 'back',
    equipment: 'body weight',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/3297.gif',
    id: '3297',
    name: 'back lever',
    target: 'upper back'
  },
  {
    bodyPart: 'back',
    equipment: 'body weight',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1405.gif',
    id: '1405',
    name: 'back pec stretch',
    target: 'lats'
  },
  {
    bodyPart: 'upper legs',
    equipment: 'body weight',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1473.gif',
    id: '1473',
    name: 'backward jump',
    target: 'quads'
  },
  {
    bodyPart: 'upper legs',
    equipment: 'body weight',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0020.gif',
    id: '0020',
    name: 'balance board',
    target: 'quads'
  },
  {
    bodyPart: 'upper arms',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0968.gif',
    id: '0968',
    name: 'band alternating biceps curl',
    target: 'biceps'
  },
  {
    bodyPart: 'waist',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0969.gif',
    id: '0969',
    name: 'band alternating v-up',
    target: 'abs'
  },
  {
    bodyPart: 'back',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0970.gif',
    id: '0970',
    name: 'band assisted pull-up',
    target: 'lats'
  },
  {
    bodyPart: 'waist',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0971.gif',
    id: '0971',
    name: 'band assisted wheel rollerout',
    target: 'abs'
  },
  {
    bodyPart: 'chest',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1254.gif',
    id: '1254',
    name: 'band bench press',
    target: 'pectorals'
  },
  {
    bodyPart: 'upper legs',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0980.gif',
    id: '0980',
    name: 'band bent-over hip extension',
    target: 'glutes'
  },
  {
    bodyPart: 'waist',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0972.gif',
    id: '0972',
    name: 'band bicycle crunch',
    target: 'abs'
  },
  {
    bodyPart: 'back',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0974.gif',
    id: '0974',
    name: 'band close-grip pulldown',
    target: 'lats'
  },
  {
    bodyPart: 'upper arms',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0975.gif',
    id: '0975',
    name: 'band close-grip push-up',
    target: 'triceps'
  },
  {
    bodyPart: 'upper arms',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0976.gif',
    id: '0976',
    name: 'band concentration curl',
    target: 'biceps'
  },
  {
    bodyPart: 'back',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/3117.gif',
    id: '3117',
    name: 'band fixed back close grip pulldown',
    target: 'lats'
  },
  {
    bodyPart: 'back',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/3116.gif',
    id: '3116',
    name: 'band fixed back underhand pulldown',
    target: 'lats'
  },
  {
    bodyPart: 'shoulders',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0977.gif',
    id: '0977',
    name: 'band front lateral raise',
    target: 'delts'
  },
  {
    bodyPart: 'shoulders',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0978.gif',
    id: '0978',
    name: 'band front raise',
    target: 'delts'
  },
  {
    bodyPart: 'upper legs',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1408.gif',
    id: '1408',
    name: 'band hip lift',
    target: 'glutes'
  },
  {
    bodyPart: 'waist',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0979.gif',
    id: '0979',
    name: 'band horizontal pallof press',
    target: 'abs'
  },
  {
    bodyPart: 'waist',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0981.gif',
    id: '0981',
    name: 'band jack knife sit-up',
    target: 'abs'
  },
  {
    bodyPart: 'back',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0983.gif',
    id: '0983',
    name: 'band kneeling one arm pulldown',
    target: 'lats'
  },
  {
    bodyPart: 'waist',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0985.gif',
    id: '0985',
    name: 'band kneeling twisting crunch',
    target: 'abs'
  },
  {
    bodyPart: 'upper legs',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0984.gif',
    id: '0984',
    name: 'band lying hip internal rotation',
    target: 'glutes'
  },
  {
    bodyPart: 'waist',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1002.gif',
    id: '1002',
    name: 'band lying straight leg raise',
    target: 'abs'
  },
  {
    bodyPart: 'upper arms',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0986.gif',
    id: '0986',
    name: 'band one arm overhead biceps curl',
    target: 'biceps'
  },
  {
    bodyPart: 'upper legs',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0987.gif',
    id: '0987',
    name: 'band one arm single leg split squat',
    target: 'quads'
  },
  {
    bodyPart: 'back',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0988.gif',
    id: '0988',
    name: 'band one arm standing low row',
    target: 'upper back'
  },
  {
    bodyPart: 'chest',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0989.gif',
    id: '0989',
    name: 'band one arm twisting chest press',
    target: 'pectorals'
  },
  {
    bodyPart: 'back',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0990.gif',
    id: '0990',
    name: 'band one arm twisting seated row',
    target: 'upper back'
  },
  {
    bodyPart: 'upper legs',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0991.gif',
    id: '0991',
    name: 'band pull through',
    target: 'glutes'
  },
  {
    bodyPart: 'waist',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0992.gif',
    id: '0992',
    name: 'band push sit-up',
    target: 'abs'
  },
  {
    bodyPart: 'shoulders',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0993.gif',
    id: '0993',
    name: 'band reverse fly',
    target: 'delts'
  },
  {
    bodyPart: 'lower arms',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0994.gif',
    id: '0994',
    name: 'band reverse wrist curl',
    target: 'forearms'
  },
  {
    bodyPart: 'upper legs',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0996.gif',
    id: '0996',
    name: 'band seated hip internal rotation',
    target: 'glutes'
  },
  {
    bodyPart: 'waist',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1011.gif',
    id: '1011',
    name: 'band seated twist',
    target: 'abs'
  },
  {
    bodyPart: 'shoulders',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0997.gif',
    id: '0997',
    name: 'band shoulder press',
    target: 'delts'
  },
  {
    bodyPart: 'back',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1018.gif',
    id: '1018',
    name: 'band shrug',
    target: 'traps'
  },
  {
    bodyPart: 'upper arms',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0998.gif',
    id: '0998',
    name: 'band side triceps extension',
    target: 'triceps'
  },
  {
    bodyPart: 'lower legs',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0999.gif',
    id: '0999',
    name: 'band single leg calf raise',
    target: 'calves'
  },
  {
    bodyPart: 'lower legs',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1000.gif',
    id: '1000',
    name: 'band single leg reverse calf raise',
    target: 'calves'
  },
  {
    bodyPart: 'upper legs',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1001.gif',
    id: '1001',
    name: 'band single leg split squat',
    target: 'quads'
  },
  {
    bodyPart: 'upper legs',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1004.gif',
    id: '1004',
    name: 'band squat',
    target: 'glutes'
  },
  {
    bodyPart: 'upper legs',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1003.gif',
    id: '1003',
    name: 'band squat row',
    target: 'glutes'
  },
  {
    bodyPart: 'waist',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1005.gif',
    id: '1005',
    name: 'band standing crunch',
    target: 'abs'
  },
  {
    bodyPart: 'shoulders',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1022.gif',
    id: '1022',
    name: 'band standing rear delt row',
    target: 'delts'
  },
  {
    bodyPart: 'waist',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1007.gif',
    id: '1007',
    name: 'band standing twisting crunch',
    target: 'abs'
  },
  {
    bodyPart: 'upper legs',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1008.gif',
    id: '1008',
    name: 'band step-up',
    target: 'glutes'
  },
  {
    bodyPart: 'upper legs',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1009.gif',
    id: '1009',
    name: 'band stiff leg deadlift',
    target: 'glutes'
  },
  {
    bodyPart: 'upper legs',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1023.gif',
    id: '1023',
    name: 'band straight back stiff leg deadlift',
    target: 'glutes'
  },
  {
    bodyPart: 'back',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1010.gif',
    id: '1010',
    name: 'band straight leg deadlift',
    target: 'spine'
  },
  {
    bodyPart: 'shoulders',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1012.gif',
    id: '1012',
    name: 'band twisting overhead press',
    target: 'delts'
  },
  {
    bodyPart: 'lower legs',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1369.gif',
    id: '1369',
    name: 'band two legs calf raise - (band under both legs) v. 2',
    target: 'calves'
  },
  {
    bodyPart: 'back',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1013.gif',
    id: '1013',
    name: 'band underhand pulldown',
    target: 'lats'
  },
  {
    bodyPart: 'waist',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1014.gif',
    id: '1014',
    name: 'band v-up',
    target: 'abs'
  },
  {
    bodyPart: 'waist',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1015.gif',
    id: '1015',
    name: 'band vertical pallof press',
    target: 'abs'
  },
  {
    bodyPart: 'lower arms',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1016.gif',
    id: '1016',
    name: 'band wrist curl',
    target: 'forearms'
  },
  {
    bodyPart: 'shoulders',
    equipment: 'band',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1017.gif',
    id: '1017',
    name: 'band y-raise',
    target: 'delts'
  },
  {
    bodyPart: 'upper arms',
    equipment: 'barbell',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0023.gif',
    id: '0023',
    name: 'barbell alternate biceps curl',
    target: 'biceps'
  },
  {
    bodyPart: 'upper legs',
    equipment: 'barbell',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0024.gif',
    id: '0024',
    name: 'barbell bench front squat',
    target: 'quads'
  },
  {
    bodyPart: 'chest',
    equipment: 'barbell',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0025.gif',
    id: '0025',
    name: 'barbell bench press',
    target: 'pectorals'
  },
  {
    bodyPart: 'upper legs',
    equipment: 'barbell',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0026.gif',
    id: '0026',
    name: 'barbell bench squat',
    target: 'quads'
  },
]