const generateData = (data) => {
  const doubledArr = [...data, ...data];
  const result = doubledArr.map((el, i) => ({...el, id: i}))
  const shuffleArray = (arr) => arr.sort(() => Math.round(Math.random() * 100) - 50);
  return shuffleArray(result);

}
const getData = async (url) => {
  const response = await fetch(url);
  return await response.json();
}

export {generateData, getData};
