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
    id: 'vegetable,_salmon_&_barley_bake',
    name: 'Vegetable, salmon & barley bake',
    thumbnail: 'https://edamam-product-images.s3.amazonaws.com/web-img/960/960ad038afcc1df4198eec15473a4b86.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLWVhc3QtMSJGMEQCIFMzIJle5R0ef8eGFXtco5%2FMN9ZlyLnoWAKbwD%2BVS%2F9OAiBYTUtGsOCJbOKEUwvn1Scpj%2F3%2B%2B%2BLYJq04cK5G3bUrCiq5BQgoEAAaDDE4NzAxNzE1MDk4NiIMVZFq43QWEnRjb%2BgVKpYFXQ17dM5tO6%2FRFvH8B8Q5dTAZWbqRkqeBpOcVg0EMVp3PR3xDwDuNUhDl4lSX2pxHg7%2BnPRW9iqmsO5Z5eQAtruydik8sPfVZs%2BKXta%2F8r%2BCoHCtlgGKDDnWq%2FtyKHs6yAzuHW2%2B0blEYfiDx2HHVH1jU%2FPcP7JHuA3EuJh84Z5nF6aHbT3QhgzwCBXj3Z2BbgAyp2djf6XYkky12UfgRFjk6fiE6Zelp7jG5GB7EyLBKOsurlYZFDoBhlTq7k6NRwt6%2FiB8YQm4gI8khI9j99WgEz1mD3WAfhJySVZPQoUUiGQwvN4AwON0lKEipwPPIYp%2FS4fzQXAjgR0qSyhUzTriwp9stUL60VdU5%2FkSWSDX7kpZYoA4bwj0n4tgP8kFpHgscebwAP38aAOMQXxUVtveCEMoRmJm5GhdXyolpEWiJbEwF%2Fh0lRqNwPDNFu8gtCEBA9oJLAcjWpks3A0XRP0X2ZpaLzWI3b34QtTJgW%2F7EpZhzhdQGDhY8XA9HOTRn%2Fp5s3PfkiU4eSb6ksHRukDkAuVBTBcH1m%2F2lZ1CMJvXpCwigBgkxSidWkR%2BzN8hZT%2FBHMIW6Q%2B2Nacax1f34kzWE6HoWB9aHY5Ug42TEtu%2FeRjEuy5y7f%2Bn%2FGeftmc%2FosqCEiqU8whXZOnjutPw%2BI1M3HMu2CqGf%2F3OO2d2lJhnBESr5JOWfhGkg7%2BELORtJmp1BdKUDWB3kCzJLzbq7TKyGUSMXAkUdU9ID4A1puawfBNxlLmajiC4uBd7F4TO5tfozstWBekH%2BXZkiPPImODx6vrryEwC%2Bam0sTZ%2BkSOUQMR5g7v70Ec6eXPP4StFK5LitfAaLsVtkhFQ7siwxfNQs0QbIQypTqEdrvsPt92pViODwsmIwpZ7QoAY6sgHLL45LwSYsBwCdSR4%2Bn8y9jZkReDB%2BZidmhic0s%2Bc2ky0r1JFRuhJTY61alpgRRNwq7G8%2FPGcQX0TMgaSA25xM%2Fv%2B1fd4pxBdXwjYLoBBVZR%2FPjCLKkr4DsjFdJKEXtpYRlw4eZDwA%2BwOqC5ZBcoat4AO8dagPCc8l2zN6RKsI%2BZ6KWG3i2gueY0XbndZIkUulfcJYuczzqUd8j4nj7Cx%2B0cS8B0ON8Z73jYQb7XDYUBjh&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230317T081422Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFSEC5FOZ%2F20230317%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c46c43dd1b2eabb332cf4528f12c7976e484569f38f4ae7e9162620e23fa2e2d',
    ingredients: [
      '1 cup (200g) pearl barley',
      '3 cups (750ml) Massel vegetable liquid stock',
      '1 large parsnip, peeled, cut into 2cm pieces',
      '2 corn cobs, kernels removed',
      '4 shallots, thinly sliced',
      '50g baby spinach leaves',
      '415g can red salmon, drained, flaked',
      '1 1/2 cups (180g) grated light cheddar cheese',
      '3 eggs, lightly whisked',
      'Sea salt & freshly ground black pepper, to taste',
      'Baby rocket leaves, to serve'
    ],
    cuisineType: [ 'nordic' ],
    steps: 'https://www.taste.com.au/recipes/vegetable-salmon-barley-bake/dac27c28-3581-4a9c-b0a9-a6b715b7b8e1',
    calories: 3037.410250551595,
    source: 'taste.com.au',
    serves: 6
  },
  {
    id: 'green_goddess_bowl_with_chicken_and_quinoa',
    name: 'Green Goddess Bowl with Chicken and Quinoa',
    thumbnail: 'https://edamam-product-images.s3.amazonaws.com/web-img/cb6/cb6e3f81d3e714a1a018131daff9d29f.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLWVhc3QtMSJGMEQCIFMzIJle5R0ef8eGFXtco5%2FMN9ZlyLnoWAKbwD%2BVS%2F9OAiBYTUtGsOCJbOKEUwvn1Scpj%2F3%2B%2B%2BLYJq04cK5G3bUrCiq5BQgoEAAaDDE4NzAxNzE1MDk4NiIMVZFq43QWEnRjb%2BgVKpYFXQ17dM5tO6%2FRFvH8B8Q5dTAZWbqRkqeBpOcVg0EMVp3PR3xDwDuNUhDl4lSX2pxHg7%2BnPRW9iqmsO5Z5eQAtruydik8sPfVZs%2BKXta%2F8r%2BCoHCtlgGKDDnWq%2FtyKHs6yAzuHW2%2B0blEYfiDx2HHVH1jU%2FPcP7JHuA3EuJh84Z5nF6aHbT3QhgzwCBXj3Z2BbgAyp2djf6XYkky12UfgRFjk6fiE6Zelp7jG5GB7EyLBKOsurlYZFDoBhlTq7k6NRwt6%2FiB8YQm4gI8khI9j99WgEz1mD3WAfhJySVZPQoUUiGQwvN4AwON0lKEipwPPIYp%2FS4fzQXAjgR0qSyhUzTriwp9stUL60VdU5%2FkSWSDX7kpZYoA4bwj0n4tgP8kFpHgscebwAP38aAOMQXxUVtveCEMoRmJm5GhdXyolpEWiJbEwF%2Fh0lRqNwPDNFu8gtCEBA9oJLAcjWpks3A0XRP0X2ZpaLzWI3b34QtTJgW%2F7EpZhzhdQGDhY8XA9HOTRn%2Fp5s3PfkiU4eSb6ksHRukDkAuVBTBcH1m%2F2lZ1CMJvXpCwigBgkxSidWkR%2BzN8hZT%2FBHMIW6Q%2B2Nacax1f34kzWE6HoWB9aHY5Ug42TEtu%2FeRjEuy5y7f%2Bn%2FGeftmc%2FosqCEiqU8whXZOnjutPw%2BI1M3HMu2CqGf%2F3OO2d2lJhnBESr5JOWfhGkg7%2BELORtJmp1BdKUDWB3kCzJLzbq7TKyGUSMXAkUdU9ID4A1puawfBNxlLmajiC4uBd7F4TO5tfozstWBekH%2BXZkiPPImODx6vrryEwC%2Bam0sTZ%2BkSOUQMR5g7v70Ec6eXPP4StFK5LitfAaLsVtkhFQ7siwxfNQs0QbIQypTqEdrvsPt92pViODwsmIwpZ7QoAY6sgHLL45LwSYsBwCdSR4%2Bn8y9jZkReDB%2BZidmhic0s%2Bc2ky0r1JFRuhJTY61alpgRRNwq7G8%2FPGcQX0TMgaSA25xM%2Fv%2B1fd4pxBdXwjYLoBBVZR%2FPjCLKkr4DsjFdJKEXtpYRlw4eZDwA%2BwOqC5ZBcoat4AO8dagPCc8l2zN6RKsI%2BZ6KWG3i2gueY0XbndZIkUulfcJYuczzqUd8j4nj7Cx%2B0cS8B0ON8Z73jYQb7XDYUBjh&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230317T081426Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFFSEC5FOZ%2F20230317%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=077937d8402929e3833e58b38aa58a0f38fc80ce8ddb1cdcbac358969cfd4d6c',
    ingredients: [
      '1 c. quinoa',
      '2 pt. cherry tomatoes',
      'extra-virgin olive oil',
      'kosher salt',
      '1/2 c. chopped parsley',
      '1/2 c. chopped dill',
      '1/2 c. chopped scallions',
      '2 tsp. anchovy paste',
      '1/2 c. mayonnaise',
      '1 tbsp. white vinegar',
      '2 small garlic cloves, chopped',
      '2 tbsp. milk',
      '1 c. crumbled feta',
      '2 c. shredded grilled chicken',
      '1 c. shredded red cabbage'
    ],
    cuisineType: [ 'south american' ],
    steps: 'http://www.delish.com/cooking/recipe-ideas/recipes/a47014/green-goddess-bowl-with-chicken-and-quinoa-recipe/',
    calories: 2839.4070263999997,
    source: 'Delish',
    serves: 4
  },
  {
    id: 'curry_lentil_soup',
    name: 'Curry Lentil Soup',
    thumbnail: 'https://edamam-product-images.s3.amazonaws.com/web-img/77c/77c88fdd373b900dccb5c88f1ed74291.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLWVhc3QtMSJIMEYCIQC31xQ1yKI4jeS%2FixTnrJA5xp%2F0a%2FBaM%2B71dTWSHR0N5gIhAKYEnfBvsBr9cidX82DS0G7lJjIgGYerPRujJtw2OQ%2FOKrkFCCkQABoMMTg3MDE3MTUwOTg2IgxfeA0wRlSMOuvSbx4qlgUJ6p9I0COF%2FpOU7ykaxY3jN8jN4Mnp7WcQn5rvQtcgTi6rIRZzJ45H4jScbpgbm2BM%2BPIxDlAg%2BpgJb3QoOjWssg6BMzPg7hdbtJxvfF2skK%2FD436x9IsNAiiG79Y8R9JMluL3X1AyDBaXLlgjeLMPIWQh3EWkyxQDXmg3DKVEuMgXvMFC5R4bNcxAfpo9EG5NuM4RB0lcPHwPnQXrrfjA43m%2FItxCechhNn5C2cUVJIwLjAdHtTqJcaLpuJWxkjddWOgk8PhI7OcyC%2FQgJReJrHHjW6J79kyd0JMjiv%2FyyYGxDUqBDe4c%2FMikM1M%2BpOoATs%2Fh33GBSB%2BAGDeUKw42zT0ArtKH%2FWwFjf4uiQAEHaV2h6FZq7WgYeC2jdmDiF8%2FpRrqIqK1ymXDuE%2FI0Q%2Bp95fWQNd9fThETAwDTyTRUV6mxJkvUMsbevhWG3fe16x4Bcgu8UNHHqhyEYWijCzgls6AkZ1HPjWLSzFygm7P6NBcp3uEiLGCixVg0x5pntnTwU5t3DOYR52EQ%2BxxsHvSK52cYJ1F%2B3zchbY4%2BJKfYKN9feQlOqgh%2BMKIfP356i8jCebly48zvdSwPoCNz%2F%2BtYy3LaLsyCFK2AwwYmmKl5q9j3XDdc6MJjjAc6uwC9w%2FFYNpDihH%2FCmeenXXY4QSf3rvtS9NatxU%2Bygvna2EO%2BsBl9udIySFveA2DcZG7gZB%2FVgUAoQKBHAilZLBFsF0Onl5DrUld0YtwgQRH5xz7UdWFkgX%2F%2FBIV4rje0Uyvkec%2Fsa18BqBIkIAvw5GxXpvvWD5c2eiTsQyD56vgGbdurkQCf%2Br2zBzc8hVP8zQ8UW%2FQCEuUz%2FQuFiwyUuI5VWLHgXKBpBu1piqd5qn1sj49XWXk02q9fTDztNCgBjqwAc%2FPobK3cWLlKrTdbxlxmIQF98HTcBuUh8oCBN%2FUp8vQlqZY9iduHVXBY8XEAgjt2QqWqDIsqe4uLChwFjZsXURYdK6Bbm%2B1E76q%2BdH78OIGMxjD7YMDm0naNEsdq11oMiwE5Uyg%2B05g162x%2B9qtTO%2BZKAMtgj%2B%2FkxfJAIZlzjqoK7kcm8PI%2FGmEP6vpQn0o0ozcUYKZH6LEF6Qye8a0QGv1Q1MX%2Fy%2BIPHea%2FLyBIof8&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230317T081431Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGY2ON36F%2F20230317%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8eb7cce30a30b925c486e3f379121253abf00154a035350809833503bf9a1cb2',
    ingredients: [
      '1 tablespoon olive oil, plus more for serving',
      '1 large yellow onion, diced',
      '2 cloves garlic, minced',
      '2 tablespoons dried parsley',
      '1 tablespoon + 1 teaspoon curry powder',
      '1/2 teaspoon ground ginger',
      '1 bay leaf',
      '1 dried california chile pepper',
      '2 teaspoons kosher salt',
      '8 cups chicken stock, vegetable stock, or water + more as needed',
      '9 ounces green lentils (about 1 1/2 cups)',
      '9 ounces red lentils (about 1 1/2 cups)'
    ],
    cuisineType: [ 'indian' ],
    steps: 'https://food52.com/recipes/15673-curry-lentil-soup',
    calories: 2966.2119999999995,
    source: 'Food52',
    serves: 6
  },
  {
    id: 'berry_overnight_oats_recipes',
    name: 'Berry Overnight Oats recipes',
    thumbnail: 'https://edamam-product-images.s3.amazonaws.com/web-img/69b/69bf3b7a5cbd22f6ace8ea5b6a8bba7a?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLWVhc3QtMSJIMEYCIQC31xQ1yKI4jeS%2FixTnrJA5xp%2F0a%2FBaM%2B71dTWSHR0N5gIhAKYEnfBvsBr9cidX82DS0G7lJjIgGYerPRujJtw2OQ%2FOKrkFCCkQABoMMTg3MDE3MTUwOTg2IgxfeA0wRlSMOuvSbx4qlgUJ6p9I0COF%2FpOU7ykaxY3jN8jN4Mnp7WcQn5rvQtcgTi6rIRZzJ45H4jScbpgbm2BM%2BPIxDlAg%2BpgJb3QoOjWssg6BMzPg7hdbtJxvfF2skK%2FD436x9IsNAiiG79Y8R9JMluL3X1AyDBaXLlgjeLMPIWQh3EWkyxQDXmg3DKVEuMgXvMFC5R4bNcxAfpo9EG5NuM4RB0lcPHwPnQXrrfjA43m%2FItxCechhNn5C2cUVJIwLjAdHtTqJcaLpuJWxkjddWOgk8PhI7OcyC%2FQgJReJrHHjW6J79kyd0JMjiv%2FyyYGxDUqBDe4c%2FMikM1M%2BpOoATs%2Fh33GBSB%2BAGDeUKw42zT0ArtKH%2FWwFjf4uiQAEHaV2h6FZq7WgYeC2jdmDiF8%2FpRrqIqK1ymXDuE%2FI0Q%2Bp95fWQNd9fThETAwDTyTRUV6mxJkvUMsbevhWG3fe16x4Bcgu8UNHHqhyEYWijCzgls6AkZ1HPjWLSzFygm7P6NBcp3uEiLGCixVg0x5pntnTwU5t3DOYR52EQ%2BxxsHvSK52cYJ1F%2B3zchbY4%2BJKfYKN9feQlOqgh%2BMKIfP356i8jCebly48zvdSwPoCNz%2F%2BtYy3LaLsyCFK2AwwYmmKl5q9j3XDdc6MJjjAc6uwC9w%2FFYNpDihH%2FCmeenXXY4QSf3rvtS9NatxU%2Bygvna2EO%2BsBl9udIySFveA2DcZG7gZB%2FVgUAoQKBHAilZLBFsF0Onl5DrUld0YtwgQRH5xz7UdWFkgX%2F%2FBIV4rje0Uyvkec%2Fsa18BqBIkIAvw5GxXpvvWD5c2eiTsQyD56vgGbdurkQCf%2Br2zBzc8hVP8zQ8UW%2FQCEuUz%2FQuFiwyUuI5VWLHgXKBpBu1piqd5qn1sj49XWXk02q9fTDztNCgBjqwAc%2FPobK3cWLlKrTdbxlxmIQF98HTcBuUh8oCBN%2FUp8vQlqZY9iduHVXBY8XEAgjt2QqWqDIsqe4uLChwFjZsXURYdK6Bbm%2B1E76q%2BdH78OIGMxjD7YMDm0naNEsdq11oMiwE5Uyg%2B05g162x%2B9qtTO%2BZKAMtgj%2B%2FkxfJAIZlzjqoK7kcm8PI%2FGmEP6vpQn0o0ozcUYKZH6LEF6Qye8a0QGv1Q1MX%2Fy%2BIPHea%2FLyBIof8&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230317T081437Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGY2ON36F%2F20230317%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8ddf6d20cc264ffa325783d670cfa71c1a58589a1ecf81fe2b6b89d064f71e50',
    ingredients: [
      '1/2 cup Quaker® Oats (Quick or Old Fashioned, uncooked)',
      '1/2 cup non-fat milk',
      '1/2 cup non-fat plain Greek yogurt',
      '1 teaspoon chia seeds (optional)',
      '1 cup fresh mixed berries and fruit'
    ],
    cuisineType: [ 'american' ],
    steps: 'http://allrecipes.com/recipe/257039/berry-overnight-oats/',
    calories: 487.44000000131473,
    source: 'Allrecipes',
    serves: 1
  },
  {
    id: 'tofu_stir_fry',
    name: 'Tofu Stir Fry',
    thumbnail: 'https://edamam-product-images.s3.amazonaws.com/web-img/0c4/0c4088d114b5cf5a9e0151beee5bdffe.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLWVhc3QtMSJGMEQCIFMzIJle5R0ef8eGFXtco5%2FMN9ZlyLnoWAKbwD%2BVS%2F9OAiBYTUtGsOCJbOKEUwvn1Scpj%2F3%2B%2B%2BLYJq04cK5G3bUrCiq5BQgoEAAaDDE4NzAxNzE1MDk4NiIMVZFq43QWEnRjb%2BgVKpYFXQ17dM5tO6%2FRFvH8B8Q5dTAZWbqRkqeBpOcVg0EMVp3PR3xDwDuNUhDl4lSX2pxHg7%2BnPRW9iqmsO5Z5eQAtruydik8sPfVZs%2BKXta%2F8r%2BCoHCtlgGKDDnWq%2FtyKHs6yAzuHW2%2B0blEYfiDx2HHVH1jU%2FPcP7JHuA3EuJh84Z5nF6aHbT3QhgzwCBXj3Z2BbgAyp2djf6XYkky12UfgRFjk6fiE6Zelp7jG5GB7EyLBKOsurlYZFDoBhlTq7k6NRwt6%2FiB8YQm4gI8khI9j99WgEz1mD3WAfhJySVZPQoUUiGQwvN4AwON0lKEipwPPIYp%2FS4fzQXAjgR0qSyhUzTriwp9stUL60VdU5%2FkSWSDX7kpZYoA4bwj0n4tgP8kFpHgscebwAP38aAOMQXxUVtveCEMoRmJm5GhdXyolpEWiJbEwF%2Fh0lRqNwPDNFu8gtCEBA9oJLAcjWpks3A0XRP0X2ZpaLzWI3b34QtTJgW%2F7EpZhzhdQGDhY8XA9HOTRn%2Fp5s3PfkiU4eSb6ksHRukDkAuVBTBcH1m%2F2lZ1CMJvXpCwigBgkxSidWkR%2BzN8hZT%2FBHMIW6Q%2B2Nacax1f34kzWE6HoWB9aHY5Ug42TEtu%2FeRjEuy5y7f%2Bn%2FGeftmc%2FosqCEiqU8whXZOnjutPw%2BI1M3HMu2CqGf%2F3OO2d2lJhnBESr5JOWfhGkg7%2BELORtJmp1BdKUDWB3kCzJLzbq7TKyGUSMXAkUdU9ID4A1puawfBNxlLmajiC4uBd7F4TO5tfozstWBekH%2BXZkiPPImODx6vrryEwC%2Bam0sTZ%2BkSOUQMR5g7v70Ec6eXPP4StFK5LitfAaLsVtkhFQ7siwxfNQs0QbIQypTqEdrvsPt92pViODwsmIwpZ7QoAY6sgHLL45LwSYsBwCdSR4%2Bn8y9jZkReDB%2BZidmhic0s%2Bc2ky0r1JFRuhJTY61alpgRRNwq7G8%2FPGcQX0TMgaSA25xM%2Fv%2B1fd4pxBdXwjYLoBBVZR%2FPjCLKkr4DsjFdJKEXtpYRlw4eZDwA%2BwOqC5ZBcoat4AO8dagPCc8l2zN6RKsI%2BZ6KWG3i2gueY0XbndZIkUulfcJYuczzqUd8j4nj7Cx%2B0cS8B0ON8Z73jYQb7XDYUBjh&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230317T081442Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFSEC5FOZ%2F20230317%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c5c80a0a5b4228cc472298f889fb8f9029fd33a533d627adef9280708ea0242b',
    ingredients: [
      '2 cups Brown Rice, Cooked',
      '½ Tablespoons Vegetable Oil',
      '½ packages (about 16 Oz. Package) Firm Tofu, Cut Into 1-inch Strips 1/4-inch Thick',
      '1 cup Red Onion, Cut Into Thin Strips',
      '1 cup Red Bell Pepper, Cut Into Thin Strips',
      '½ bags (16 Oz. Bag) Frozen Stir-fry Veggies',
      '_____',
      'FOR THE STIR FRY SAUCE:',
      '½ Tablespoons Vegetable Oil',
      '½ Tablespoons Hoisin Sauce',
      '1 Tablespoon Garlic, Minced',
      '½ Tablespoons Ginger, grated',
      '3 Tablespoons Peanut Butter',
      '½ teaspoons Sriracha Chili Sauce',
      '½ teaspoons Soy Sauce',
      '1-½ teaspoon Honey'
    ],
    cuisineType: [ 'asian' ],
    steps: 'https://tastykitchen.com/recipes/special-dietary-needs/vegetarian/tofu-stir-fry/',
    calories: 1684.7309365015287,
    source: 'tastykitchen.com',
    serves: 5
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
