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

export async function addCategory(categoryName, thumbnail) {
  let response;
  let formData = new FormData();
  formData.append("categoryName", categoryName);
  formData.append("thumbnailImage", thumbnail);
  try {
    response = await axios({
      method: "post",
      url: process.env.REACT_APP_API_ADD_CATEGORY_URL,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
  } catch (error) {
    console.log(error);
  }
  return response;
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
