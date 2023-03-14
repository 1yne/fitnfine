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
    id: "grilled_chicken_breasts_with_chimichurri_sauce_recipe",
    name: "Grilled Chicken Breasts With Chimichurri Sauce Recipe",
    thumbnail:
      "https://edamam-product-images.s3.amazonaws.com/web-img/534/53489d0dffcf8cf451426d1cb14f920f.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLWVhc3QtMSJGMEQCIBMgAufZpR0rtRe0voPIkOWIJCjngFWl9kAjJ65MHkOoAiA3%2BBewYl0PatoGuLfr8iz%2F%2F2QJ9wvFZ5OI6vXUrA1%2FZCrBBQjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMmV2daJvPeWsu8Pp4KpUFjj3roJMoXn48UnJ7%2Brtg66bwmSjvLx%2BiXgFpTt%2F9imzTYmHUkgjH%2B3QNfLqRdTZq1fJz2UJqafC0bPyDk3Fw5QuI5i%2FooLnOE6k4DJ4l2mpgdlow3qTVKEZXuuq7vKkdgwXJN3uhnrdQMNWMTejztwluSpNfsWdavtSmlNva3rbtH4F4c9BMVde3uisA%2BOPbOOC%2F6yUPkvmJSLHSmEcouLIa7IiIgboVDjgZzFXmWYRrvuSg9ckKfRGWOc1Q75phtm%2FWA7vi5Tpij8wC1KwE164WFyfwIJ8Kygl2%2F0rEAk4jFDdNQ4JGfm%2B7nT7xxGEiOUU6cZnqMZma60uhi6eGxJ5GzCPeo5ktcUZNRouyznovIFFEd33Il6VKwmAHYgunNRueUjm%2F%2BxGgVAR3J79blR6RH%2BIcuxBS%2B9ufaIkKLhdrkUbsGhxi78SSFclwcmjkPoUQbzQVsvFzrVTYtCNIuAQInxRkmZWgvl37aOuzJ9E3iffErr0ccCQP7JsXt1X1zhiJwJaUaS8F0V4unut3tBkWpaB8og6zvcCsNo2T1fT0BDmx5IQwg6d%2Bg14qqiXIZURYAssiZC5aFbvAFDFGUO94Oy0uECH9N4aPTCIJcZVl0How%2F9iEOSVrIy8NkWPKITLPmC5saBCw4%2Fkj6l8SB5Jmf0tQjeQgqJ1wcd6ZxVqIIDTOmuYnEh0npq0RCl%2BHdFsT3uj%2Ff01iCF3iocMGZgQCqM8GdLGSsNgmzgufT57axKQgemu0nTwKJKZ6aGEzXxtCg6bso3bVlYBXxtmcg3wmYTCYlTC7EimfH15MKJFSqP9MWrRUia9h3PWqwwaYB9Z8yRO1F5z880CNytWtUeUPJAbmcX%2Bc9ZYU0hOnvfyBBkPTWzCmusGgBjqyAbKfq1oMba%2Bbwm%2FB6TwooolMOpWNna3V0i%2B9d1Qi6Hi9KuLrHs2EWjV3n6YhufJ1UNTn%2BnUORSXnTXuwuG4e0mB%2FIA51tQu6vs0ubvIjX78%2BDkfL%2Bzguozv%2FdGiJUyc2PRNl17KJ%2FjqibZOpJYMEO%2FPnX85rbh7Xgj5OXVHRti%2B%2BbiYj7dNWFvu9Ogozs9fBvW8pOl6BBMg4MQChxGAVhN2cZ0kPUFxW4dRi%2Bp7nI4L8ckU%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230314T114236Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOYL7W3OT%2F20230314%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=aac686142957626cd67957aba1509b1aa198640f8aaae4ce68fad01ac64f6543",
    ingredients: [
      "10 medium garlic cloves, peeled and dark ends removed",
      "1 bunch italian parsley, stems removed",
      "3/4 cup olive oil , plus",
      "2 tsp olive oil (divided )",
      "1/4 cup water or 1/4 cup chicken broth",
      "1/4 cup white balsamic vinegar",
      "3/4 tsp dried oregano",
      "3/4 tsp dried basil",
      "1/4 tsp crushed hot pepper flakes (to taste)",
      "salt & freshly ground black pepper , to taste",
      "3 whole boneless chicken breasts, halved and flattened",
    ],
    cuisineType: ["south american"],
    steps:
      "http://recipeofhealth.com/recipe/grilled-chicken-breasts-with-chimichurri-sauce-213335rb",
    calories: 2285.5632500000156,
    source: "recipeofhealth.com",
    serves: 6,
  },
  {
    id: "roasted_tomato_shrimp_cocktail",
    name: "Roasted Tomato Shrimp Cocktail",
    thumbnail:
      "https://edamam-product-images.s3.amazonaws.com/web-img/926/92639f2b1de2ce59c1bddae27a6d301a.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLWVhc3QtMSJGMEQCIBMgAufZpR0rtRe0voPIkOWIJCjngFWl9kAjJ65MHkOoAiA3%2BBewYl0PatoGuLfr8iz%2F%2F2QJ9wvFZ5OI6vXUrA1%2FZCrBBQjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMmV2daJvPeWsu8Pp4KpUFjj3roJMoXn48UnJ7%2Brtg66bwmSjvLx%2BiXgFpTt%2F9imzTYmHUkgjH%2B3QNfLqRdTZq1fJz2UJqafC0bPyDk3Fw5QuI5i%2FooLnOE6k4DJ4l2mpgdlow3qTVKEZXuuq7vKkdgwXJN3uhnrdQMNWMTejztwluSpNfsWdavtSmlNva3rbtH4F4c9BMVde3uisA%2BOPbOOC%2F6yUPkvmJSLHSmEcouLIa7IiIgboVDjgZzFXmWYRrvuSg9ckKfRGWOc1Q75phtm%2FWA7vi5Tpij8wC1KwE164WFyfwIJ8Kygl2%2F0rEAk4jFDdNQ4JGfm%2B7nT7xxGEiOUU6cZnqMZma60uhi6eGxJ5GzCPeo5ktcUZNRouyznovIFFEd33Il6VKwmAHYgunNRueUjm%2F%2BxGgVAR3J79blR6RH%2BIcuxBS%2B9ufaIkKLhdrkUbsGhxi78SSFclwcmjkPoUQbzQVsvFzrVTYtCNIuAQInxRkmZWgvl37aOuzJ9E3iffErr0ccCQP7JsXt1X1zhiJwJaUaS8F0V4unut3tBkWpaB8og6zvcCsNo2T1fT0BDmx5IQwg6d%2Bg14qqiXIZURYAssiZC5aFbvAFDFGUO94Oy0uECH9N4aPTCIJcZVl0How%2F9iEOSVrIy8NkWPKITLPmC5saBCw4%2Fkj6l8SB5Jmf0tQjeQgqJ1wcd6ZxVqIIDTOmuYnEh0npq0RCl%2BHdFsT3uj%2Ff01iCF3iocMGZgQCqM8GdLGSsNgmzgufT57axKQgemu0nTwKJKZ6aGEzXxtCg6bso3bVlYBXxtmcg3wmYTCYlTC7EimfH15MKJFSqP9MWrRUia9h3PWqwwaYB9Z8yRO1F5z880CNytWtUeUPJAbmcX%2Bc9ZYU0hOnvfyBBkPTWzCmusGgBjqyAbKfq1oMba%2Bbwm%2FB6TwooolMOpWNna3V0i%2B9d1Qi6Hi9KuLrHs2EWjV3n6YhufJ1UNTn%2BnUORSXnTXuwuG4e0mB%2FIA51tQu6vs0ubvIjX78%2BDkfL%2Bzguozv%2FdGiJUyc2PRNl17KJ%2FjqibZOpJYMEO%2FPnX85rbh7Xgj5OXVHRti%2B%2BbiYj7dNWFvu9Ogozs9fBvW8pOl6BBMg4MQChxGAVhN2cZ0kPUFxW4dRi%2Bp7nI4L8ckU%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230314T114238Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOYL7W3OT%2F20230314%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=602d5ff0ca19914ce94a3f528d73059261fb8fbc2df85f039f7ba6a8fd172b07",
    ingredients: [
      "1 lb. tomatoes (or 1 1/2 cups canned fire-roasted, diced tomatoes)",
      "1 small red onion",
      "3 clove garlic",
      "1 tbsp. olive or vegetable oil",
      "2 tbsp. balsamic or sweet sherry vinegar",
      "2 tbsp. brown sugar",
      "¼ c. Tamazula hot sauce, or another favorite Mexican offering",
      "salt",
    ],
    cuisineType: ["american"],
    steps:
      "http://www.delish.com/cooking/recipe-ideas/recipes/a3863/roasted-tomato-shrimp-cocktail-recipe/",
    calories: 327.25962659852087,
    source: "Delish",
    serves: 8,
  },
  {
    id: "seattle_salmon_burgers",
    name: "Seattle Salmon Burgers",
    thumbnail:
      "https://edamam-product-images.s3.amazonaws.com/web-img/bfb/bfb7cbf33266d07302f2aff17919e6c8.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLWVhc3QtMSJHMEUCIQCCBdhHBL8x7%2F0MEPXuhcPX48UrJQ995FI4g1DitBfUfQIgHRwNFF1kOpkRDJE%2BzXuhg7EKR0nm6PLoBpg4zvMqgmAqwgUI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDPv3wHr1jEtSPh9jsyqWBXpzSFxMujiY8EfKl7SDjkgSXO7QYGFfdMvsgsxp3T71xKgUqBqGSqjbljj6bp2Vg3BfVKgMPBUddUi7k%2B3o4huO6wnxfmJenYfcgSVzaGgSQYJFvJESzeZlT2XGBF3q%2BZVFIaQMDcsNH9c3hjVz38jL7OQQZtxDoY%2FAEWw3llztuoX5LALhGKFWuav5M9NWnz3HeT2NbHWbiQLcvoIi%2BQF8YKgQlBlsHbEe7JhbXKWn5YCYgCFjesKbcJLMlWI7GUYfmP7Tuh10WUWQHIhsDdcUcl88arlErwQCM12qgY502KP9mubBAluWrFhTucbwNSTvds2HUkfDdqravXYOt121AlO%2B%2B9kzjnXXrk2WZOsWxs8%2FHmXJ4uZGtDS4ZCjeb4vTJGFehx9ra3DSuXhEGCvkddUR3lGwcgEv0EaLXzG%2FYjfIeXzGymz2APViC74HmzMMTBUuyJcSdnsydGM2Z0V%2FZFS9FIThpvLErHwfo8aVDNPHGLnQwl4iEVDmGuatcJE%2FSccQFP9Kxvf4Xx5PqXrBxUXQoC82OcYHYVcL9%2BVjsebB3cDWUenQu90G2yxO5VuZotK2IdxN%2B0hQwejwveXXXWANBVHe9isMUrjT6VeVuASUQ0XaETTyvjxqAw%2BI6yXk5ouNA0Jxmfk0YIQ5i%2FqQC6RRgol9xFFCRY%2BuB8UEXbmfn5pJlu3WKaROA4LQwi2vo%2BpSXblsqpCDd23yWB1v0wAwdUilp4MhlBr4FCxx7vduPEZEeMiWq2UsR1va6tOf52DRmwpliB5sDI6qwGzgY9uxiGDuREK%2BIguRhOWoqVigQkfn0mIYhVCXYvAKYC577t6z338zrAt%2FsDFm1y0qKDDysn0O%2BBA%2BVjAHi0e%2BluktimgKMIytwaAGOrEBlWI8duoaSOPoNz3I22%2FdpHccBFL%2B43jzNcYir6%2FUEZAM9aqvSbPahrHQ2a02Nhbu7qC6hYTDTbvLWEfEQKsYWxCrq7bwzXb6R9F90EiFp%2BOO8j2N1GuEt7DB8ix0TAQs0BbxQAZnO4%2BM81QW%2BwL%2FuZb8dFx0FGKqGHnQZE7BW3O3MDbgu12NJbAL9f3DSU6QfUyohcxL9sjY3qyVUZLdJ2TPJSrXjrS2LwlWGgItS8mN&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230314T114239Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFGHTE6U7%2F20230314%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=26b56da0be06f9177c17702d45b0cb7d5f897e91c708a5f10e3d1a8b0e76dfc0",
    ingredients: [
      "Salmon Bake:",
      "1 (3 ounce) fillet salmon fillet",
      "1 teaspoon salt",
      "1 teaspoon ground black pepper",
      "3/4 teaspoon chopped fresh dill",
      "1 tablespoon lemon juice",
      "2 brioche buns, halved",
      "1 tablespoon butter",
      "1 yellow onion, sliced",
      "3 tablespoons cream cheese, softened",
    ],
    cuisineType: ["nordic"],
    steps: "https://www.allrecipes.com/recipe/260840/seattle-salmon-burgers/",
    calories: 720.1928211749463,
    source: "Allrecipes",
    serves: 2,
  },
  {
    id: "dijon_salmon_with_green_bean_pilaf",
    name: "Dijon Salmon with Green Bean Pilaf",
    thumbnail:
      "https://edamam-product-images.s3.amazonaws.com/web-img/098/098ca69a7b44e1ddc238093d14d4cd22.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLWVhc3QtMSJGMEQCIBMgAufZpR0rtRe0voPIkOWIJCjngFWl9kAjJ65MHkOoAiA3%2BBewYl0PatoGuLfr8iz%2F%2F2QJ9wvFZ5OI6vXUrA1%2FZCrBBQjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMmV2daJvPeWsu8Pp4KpUFjj3roJMoXn48UnJ7%2Brtg66bwmSjvLx%2BiXgFpTt%2F9imzTYmHUkgjH%2B3QNfLqRdTZq1fJz2UJqafC0bPyDk3Fw5QuI5i%2FooLnOE6k4DJ4l2mpgdlow3qTVKEZXuuq7vKkdgwXJN3uhnrdQMNWMTejztwluSpNfsWdavtSmlNva3rbtH4F4c9BMVde3uisA%2BOPbOOC%2F6yUPkvmJSLHSmEcouLIa7IiIgboVDjgZzFXmWYRrvuSg9ckKfRGWOc1Q75phtm%2FWA7vi5Tpij8wC1KwE164WFyfwIJ8Kygl2%2F0rEAk4jFDdNQ4JGfm%2B7nT7xxGEiOUU6cZnqMZma60uhi6eGxJ5GzCPeo5ktcUZNRouyznovIFFEd33Il6VKwmAHYgunNRueUjm%2F%2BxGgVAR3J79blR6RH%2BIcuxBS%2B9ufaIkKLhdrkUbsGhxi78SSFclwcmjkPoUQbzQVsvFzrVTYtCNIuAQInxRkmZWgvl37aOuzJ9E3iffErr0ccCQP7JsXt1X1zhiJwJaUaS8F0V4unut3tBkWpaB8og6zvcCsNo2T1fT0BDmx5IQwg6d%2Bg14qqiXIZURYAssiZC5aFbvAFDFGUO94Oy0uECH9N4aPTCIJcZVl0How%2F9iEOSVrIy8NkWPKITLPmC5saBCw4%2Fkj6l8SB5Jmf0tQjeQgqJ1wcd6ZxVqIIDTOmuYnEh0npq0RCl%2BHdFsT3uj%2Ff01iCF3iocMGZgQCqM8GdLGSsNgmzgufT57axKQgemu0nTwKJKZ6aGEzXxtCg6bso3bVlYBXxtmcg3wmYTCYlTC7EimfH15MKJFSqP9MWrRUia9h3PWqwwaYB9Z8yRO1F5z880CNytWtUeUPJAbmcX%2Bc9ZYU0hOnvfyBBkPTWzCmusGgBjqyAbKfq1oMba%2Bbwm%2FB6TwooolMOpWNna3V0i%2B9d1Qi6Hi9KuLrHs2EWjV3n6YhufJ1UNTn%2BnUORSXnTXuwuG4e0mB%2FIA51tQu6vs0ubvIjX78%2BDkfL%2Bzguozv%2FdGiJUyc2PRNl17KJ%2FjqibZOpJYMEO%2FPnX85rbh7Xgj5OXVHRti%2B%2BbiYj7dNWFvu9Ogozs9fBvW8pOl6BBMg4MQChxGAVhN2cZ0kPUFxW4dRi%2Bp7nI4L8ckU%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230314T114241Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOYL7W3OT%2F20230314%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ccc07bebbc50f37d021bbff002bf4d274f0ec6e99b4c778e207c30bebf96c00f",
    ingredients: [
      "1¼ pounds wild salmon (see Tip), skinned and cut into 4 portions",
      "3 tablespoons extra-virgin olive oil, divided",
      "1 tablespoon minced garlic",
      "¾ teaspoon salt",
      "2 tablespoons mayonnaise",
      "2 teaspoons whole-grain mustard",
      "½ teaspoon ground pepper, divided",
      "12 ounces pretrimmed haricots verts or thin green beans, cut into thirds",
      "1 small lemon, zested and cut into 4 wedges",
      "2 tablespoons pine nuts",
      "1 8-ounce package precooked brown rice",
      "2 tablespoons water",
      "Chopped fresh parsley for garnish",
    ],
    cuisineType: ["nordic"],
    steps:
      "http://www.eatingwell.com/recipe/255150/dijon-salmon-with-green-bean-pilaf/",
    calories: 2465.3356570059073,
    source: "EatingWell",
    serves: 4,
  },
  {
    id: "owen’s_‘barry’_pops",
    name: "Owen’s ‘Barry’ Pops",
    thumbnail:
      "https://edamam-product-images.s3.amazonaws.com/web-img/aa1/aa122181c4a151a71146c878ca977973.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLWVhc3QtMSJHMEUCIQCCBdhHBL8x7%2F0MEPXuhcPX48UrJQ995FI4g1DitBfUfQIgHRwNFF1kOpkRDJE%2BzXuhg7EKR0nm6PLoBpg4zvMqgmAqwgUI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDPv3wHr1jEtSPh9jsyqWBXpzSFxMujiY8EfKl7SDjkgSXO7QYGFfdMvsgsxp3T71xKgUqBqGSqjbljj6bp2Vg3BfVKgMPBUddUi7k%2B3o4huO6wnxfmJenYfcgSVzaGgSQYJFvJESzeZlT2XGBF3q%2BZVFIaQMDcsNH9c3hjVz38jL7OQQZtxDoY%2FAEWw3llztuoX5LALhGKFWuav5M9NWnz3HeT2NbHWbiQLcvoIi%2BQF8YKgQlBlsHbEe7JhbXKWn5YCYgCFjesKbcJLMlWI7GUYfmP7Tuh10WUWQHIhsDdcUcl88arlErwQCM12qgY502KP9mubBAluWrFhTucbwNSTvds2HUkfDdqravXYOt121AlO%2B%2B9kzjnXXrk2WZOsWxs8%2FHmXJ4uZGtDS4ZCjeb4vTJGFehx9ra3DSuXhEGCvkddUR3lGwcgEv0EaLXzG%2FYjfIeXzGymz2APViC74HmzMMTBUuyJcSdnsydGM2Z0V%2FZFS9FIThpvLErHwfo8aVDNPHGLnQwl4iEVDmGuatcJE%2FSccQFP9Kxvf4Xx5PqXrBxUXQoC82OcYHYVcL9%2BVjsebB3cDWUenQu90G2yxO5VuZotK2IdxN%2B0hQwejwveXXXWANBVHe9isMUrjT6VeVuASUQ0XaETTyvjxqAw%2BI6yXk5ouNA0Jxmfk0YIQ5i%2FqQC6RRgol9xFFCRY%2BuB8UEXbmfn5pJlu3WKaROA4LQwi2vo%2BpSXblsqpCDd23yWB1v0wAwdUilp4MhlBr4FCxx7vduPEZEeMiWq2UsR1va6tOf52DRmwpliB5sDI6qwGzgY9uxiGDuREK%2BIguRhOWoqVigQkfn0mIYhVCXYvAKYC577t6z338zrAt%2FsDFm1y0qKDDysn0O%2BBA%2BVjAHi0e%2BluktimgKMIytwaAGOrEBlWI8duoaSOPoNz3I22%2FdpHccBFL%2B43jzNcYir6%2FUEZAM9aqvSbPahrHQ2a02Nhbu7qC6hYTDTbvLWEfEQKsYWxCrq7bwzXb6R9F90EiFp%2BOO8j2N1GuEt7DB8ix0TAQs0BbxQAZnO4%2BM81QW%2BwL%2FuZb8dFx0FGKqGHnQZE7BW3O3MDbgu12NJbAL9f3DSU6QfUyohcxL9sjY3qyVUZLdJ2TPJSrXjrS2LwlWGgItS8mN&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230314T114243Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFGHTE6U7%2F20230314%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=50243bbabf0afd86c4c1f581cac7c16dc93c28ec7d4f20c5c5e68334f2aa6d26",
    ingredients: [
      "2 ½ Cups fresh fruit, such as chopped strawberries, mango, pineapple, or kiwis, or whole blueberries, blackberries, or raspberries",
      "2 Tablespoons fresh lemon or lime juice",
      "2 Tablespoons coconut nectar or palm sugar",
      "1 Tablespoon dried yacon slices (optional)",
      "1 100-gram unsweetened frozen acai smoothie pack (optional)",
      "2 Teaspoons maqui powder (optional)",
    ],
    cuisineType: ["american"],
    steps: "http://www.thedailymeal.com/recipes/owen-s-barry-pops-recipe",
    calories: 390.42599999785807,
    source: "The Daily Meal",
    serves: 4,
  },
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
