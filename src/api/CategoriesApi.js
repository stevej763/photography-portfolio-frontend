import axios from "axios";

export async function getCategories() {
  let categories;
  await axios
    .get(process.env.REACT_APP_CATEGORIES_BASE_URL + "/find-all")
    .then((response) => {
      categories = response.data;
    });
  return categories;
}

export async function getCategoryTitleFromId(id) {
  let category;
  await axios
    .get(process.env.REACT_APP_CATEGORIES_BASE_URL + `/find-by-id/${id}`)
    .then((response) => {
      category = response.data;
    });
  return category;
}
