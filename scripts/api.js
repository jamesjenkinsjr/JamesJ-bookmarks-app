'use-strict';

// eslint-disable-next-line
const api = (function(){
  const BASE_URL = 'https://bookmarker-app-api.herokuapp.com'; //'https://bookmarker-app-api.herokuapp.com';

  // create a fetch promise for a POST request
  const createBookmark = function(bookmark = Object){
    // bookmark.title and bookmark.url required, 
    // bookmark.desc and bookmark.rating optional
    return fetch(`${BASE_URL}/bookmarks`, 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookmark)
      })
      .then(res => {
        if(res.ok) {
          return res;
        }
        throw new Error('Something went wrong', res);
      });
  };

  // return a fetch promise for a GET request
  const getBookmarks = function(){
    return fetch(`${BASE_URL}/bookmarks`)
      .then(res => {
        if(res.ok) {
          return res;
        }
        throw new Error('Something went wrong', res);
      });
  };

  // return a fetch promise for a PATCH request
  const updateBookmark = function(id, options){
    return fetch(`${BASE_URL}/bookmarks/${id}`, 
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(options)
      })
      .then(res => {
        if(res.ok) {
          return res;
        }
        throw new Error('Something went wrong', res);
      });
  };

  // delete bookmark
  const deleteBookmark = function(id){
    return fetch(`${BASE_URL}/bookmarks/${id}`, 
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        if(res.ok) {
          return res;
        }
        throw new Error('Something went wrong', res);
      });
  };
  
  return {
    createBookmark,
    getBookmarks,
    updateBookmark,
    deleteBookmark
  };
})();