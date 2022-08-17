var groceries: string[] = ['Mehl', 'Eier', 'Birnen', 'Mehl'];
const tagInputElement: any = document.querySelector('lib-tag-input');

function updateDOMTags(tags: string[]){
    var allTagsElement: any = document.getElementById("all_tags");
    allTagsElement.replaceChildren([]);
    tags.map((tag) => {
        var tagElement = document.createElement('li');
        tagElement.innerHTML = tag;
        allTagsElement.appendChild(tagElement);
    });
}

function sortGroceries() {
    var sortedGroceries = [...new Set(groceries)].sort();
    return sortedGroceries;
  }

tagInputElement.tags = groceries;
updateDOMTags(sortGroceries());
console.log(tagInputElement);

tagInputElement.addEventListener('tagsChanged', (event: { detail: string[]; }) => {
    groceries = event.detail;
    updateDOMTags(sortGroceries());
})