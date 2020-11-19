export const fetchData = async () => {
  try {
    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://randomuser.me/api/?results=28"
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};