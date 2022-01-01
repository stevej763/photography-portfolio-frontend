import axios from "axios";

async function getPhotosByCategory(categoryId) {
  let photos = [];
  await axios
    .get(
      process.env.REACT_APP_PHOTOS_BASE_URL + `/find-by-category/${categoryId}`
    )
    .then((response) => {
      photos = response.data;
    });
  return photos;
}

export default getPhotosByCategory;
