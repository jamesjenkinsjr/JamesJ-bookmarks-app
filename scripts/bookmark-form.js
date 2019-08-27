'use strict';

/* global store, api, bookmarkList */

// eslint-disable-next-line 
const bookmarkForm = function(){
  
  const render = function(){
    const form = `
      <form id="bookmark-form">
        <label for="title">Title: </label>
        <input type="text" name="title" id="title" placeholder="My Awesome Site" required />
        <label for="url">Bookmark URL: </label>
        <input type="url" name="url" id="url" placeholder="http://site.com" required />
        <label for="desc">Description: </label>
        <input type="text" name="desc" id="desc" placeholder="Enter a summary for your bookmark"/>
        <label for="rating">My Rating (1 - 5): </label>
        <select name="rating" id="rating" min="1" max="5">
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
        <button type="submit">Add</button>
        <button type="reset">Cancel</button>
      </form>
    `;
    if(store.adding) {
      $('.js-bookmark-list').after(form);
      $('#display-form').toggleClass('hide-button');
    } else {
      $('#bookmark-form').remove();
      $('#display-form').toggleClass('hide-button');
    }
  };

  // on click, toggle display of the form
  const handleAddBookmarkClick = function(){
    $('#display-form').on('click', () => {
      store.adding = !store.adding;
      render();
    });
  };

  // on form reset, hide form and restore default view
  const handleFormCancel = function(){
    $('body').on('reset', '#bookmark-form', e => {
      e.preventDefault();
      store.adding = false;
      render();
    });
  };

  // on submit, send api request to add new bookmark
  // use FormData() function native to JS for handling forms
  const handleSubmitNewBookmark = function(){
    $('body').on('submit', '#bookmark-form', e => {
      e.preventDefault();
      let formData = new FormData(document.getElementById('bookmark-form'));
      let formObject = {};
      formData.forEach((value, key) => {
        formObject[key] = value;
      });
      api.createBookmark(formObject)
        .then(res => res.json())
        .then(resJSON => {
          api.getBookmarks()
            .then(res => res.json())
            .then(bookmarks => {
              store.bookmarks = [];
              bookmarks.forEach( bookmark => {
                store.addBookmark(bookmark);
                bookmarkList.render();
                return resJSON;
              }
              );});
        })
        .then(resJSON => {
          console.log(resJSON);
          store.adding = false;
          render();
        });
    });
  };

  const bindFormEventListeners = function(){
    handleAddBookmarkClick();
    handleSubmitNewBookmark();
    handleFormCancel();
  };

  return {
    render,
    bindFormEventListeners
  };
}();