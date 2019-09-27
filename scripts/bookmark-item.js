'use strict';

// eslint-disable-next-line 
const bookmarkItem = function(){
  
  // produce the HTML needed to render a bookmark within the DOM
  const createBookmarkHTML = function(obj){
    let stars = '';
    switch (obj.rating) {
    case 1:
      stars = '&#x2605&#x2606;&#x2606;&#x2606;&#x2606;';
      break;
    case 2:
      stars = '&#x2605;&#x2605&#x2606;&#x2606;&#x2606;';
      break;
    case 3:
      stars = '&#x2605;&#x2605;&#x2605&#x2606;&#x2606;';
      break;
    case 4:
      stars = '&#x2605;&#x2605;&#x2605;&#x2605&#x2606;';
      break;
    case 5:
      stars = '&#x2605;&#x2605;&#x2605;&#x2605;&#x2605';
      break;
    default:
      stars = 'N/A';
    }

    if(obj.expanded) {
      return `
      <li data-bookmark-id="${obj.id}" class="bookmark">
        <button id="delete" class="delete">x</button>
        <div data-bookmark-id="${obj.id}" class="bookmark-expand">
          <h3>${obj.title}</h3>
          <p class="rating">${stars}</p>
          <p class="desc" placeholder="No description provided" disabled>${obj.content ? obj.content : 'No description provided'}</p>
          <a href="${obj.url}">Visit Site</a>
        </div>
      </li>
    `;
    }

    return `
    <li data-bookmark-id="${obj.id}" class="bookmark">
      <button id="delete" class="delete">x</button>
      <div data-bookmark-id="${obj.id}" class="bookmark-collapse">
        <h3>${obj.title}</h3>
        <p>${stars}</p>
      </div>
    </li>
  `;
  };
  
  return {
    createBookmarkHTML
  };
}();