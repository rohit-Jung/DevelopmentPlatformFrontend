# How will the todo app be built?

## Tech used

- React with Vite (Bundler)
- Tailwind CSS for Styling
- Redux Toolkit and React-Redux for State Mangement

## Guide

- configure the redux store
- create slice and reducer
- the inital state should contain an array of todos with each todo and its id, text, completed ?
- reducer - addTodo removeTodo updateTodo toggleTodo
- addTodo - id from `nanoid()` by redux and text from the `action.payload`
- removeTodo - take out the previous todos from state and filter the array excluding the deleted one
- updateTodo - from the state map each todo from todos array and if the id matches update the too with the payload else don't
- toggleTodo - find the todo from array using the `.find()` method and by comparing the todo id with payload id. If todo available change the completed state to previous one

### Components

- **TodoForm**
  - this form will be used to add todo
  - the addTodo reducer will dispatch here
  - onChange of input a state will update which will eventually update the store on button click (form submit)
- **TodoInput**
  - pass a todo prop - this will be passed from app.jsx by using useSelector and mapping it 
  - checkbox, input, 2 buttons
  - two states - one to extract the text using selector - one to check if its editable
  - when the input is being updated the editable is true and not then false : use this to display buttons
  - onEditClick - check for completion, check for ifEditable then handle edit if not then change the state/Completion
