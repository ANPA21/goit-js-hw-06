const categoryItem = document.querySelectorAll(".item");

const categoryElementCount = (i) => categoryItem[i].lastElementChild.children.length;
const categoryTitleText = (i) => {
  const categoryTitle = document.querySelectorAll("h2");

  return categoryTitle[i].textContent;
};

console.log(`Number of categories: ${categoryItem.length} `);

for (let i = 0; i < categoryItem.length; i += 1) {
  console.log(`Category: ${categoryTitleText(i)}`);
  console.log(`Elements: ${categoryElementCount(i)}`);
}
