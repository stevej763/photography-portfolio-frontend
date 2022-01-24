import axios from "axios";

export async function getPhotosByCategory(categoryId) {
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

export async function addPhoto(
  photoName,
  photoDescription,
  photoAltText,
  photoCategories,
  photoFile
) {
  console.log("test this is called");
  let response;
  let formData = new FormData();
  formData.append("photoName", photoName);
  formData.append("photoDescription", photoDescription);
  formData.append("photoAltText", photoAltText);
  formData.append("photoCategories", photoCategories);
  formData.append("photoFile", photoFile);
  try {
    response = await axios({
      method: "post",
      url: process.env.REACT_APP_API_ADD_PHOTO_URL,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
  } catch (error) {
    console.log("error thrown");
    console.log(error);
  }
  return response;
}
