# JamesJ-bookmarks-app

## User Stories
### As a user:

- [x] I can add bookmarks to my bookmark list. Bookmarks contain:
  - title
  - url link
  - description
  - rating (1-5)
- [x] I can see a list of my bookmarks when I first open the app
- [x] Form to add new bookmark should NOT be visible by default
- [x] Form should render on click of 'Add Bookmark' button
- [x] All bookmarks in the list default to a "condensed" view showing only title and rating
- [x] I can click on a bookmark to display the "detailed" view
- [x] Detailed view expands to additionally display description and a "Visit Site" link
- [x] I can remove bookmarks from my bookmark list
- [x] I receive appropriate feedback when I cannot submit a bookmark
- [x] Check all validations in the API documentation (e.g. title and url field required)
- [x] I can select from a dropdown a "minimum rating" to filter the list by all bookmarks rated at or above the chosen selection

## Technical Requirements
- [x] Use fetch for AJAX calls and jQuery for DOM manipulation
- [x] Use namespacing to adhere to good architecture practices
- [x] Minimal global variables
- [x] Create modules in separate files to organize your code
- [x] Logically group your functions (e.g. API methods, store methods...)
- [x] Keep your Data out of the DOM
- [x] No direct DOM manipulation in your event handlers!
- [x] Follow the React-ful design pattern - change your state, re-render your component
- [x] Use semantic HTML
- [x] Use responsive design
- [x] Visually and functionally solid in viewports for mobile and desktop
- [x] Follow a11y best practices

## To-Do List
- [x] Clicking to expand a new bookmark doesn't work without refresh
- [x] Delete and expand actions look at same click event (need to rearrange HTML)
- [x] Implement API error/response handling
- [x] Cleanup CSS to not use IDs for styling anything
