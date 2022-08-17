var tags: string[] = ['Mouse','Cat','Dog'];
const tagInputElement: any = document.querySelector('lib-tag-input');

console.log("Test");

function updateDOMTags(tags: string[]){
    var allTagsElement: any = document.getElementById("all_tags");
    allTagsElement.replaceChildren([]);
    tags.map((tag) => {
        var tagElement = document.createElement('li');
        tagElement.innerHTML = tag;
        allTagsElement.appendChild(tagElement);
    });
}

tagInputElement.tags = tags;
updateDOMTags(tags);
console.log(tagInputElement);

tagInputElement.addEventListener('tagsChanged', (event: { detail: string[]; }) => {
    tags = event.detail;
    updateDOMTags(tags);
})