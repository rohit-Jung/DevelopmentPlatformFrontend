# React + Vite

# Making ?

## Tech used

- React with Vite (Bundler)
- Tailwind CSS for Styling
- Redux Toolkit and React-Redux for State Mangement

## Guide

1. **Create Store** - Single Source of Truth

   - Use `configureStore` to create the Redux store.

2. **Create Slice (Reducers)**

   - Use `createSlice` method.
   - A slice consists of:
     - `name`: Name of the slice.
     - `initialState`: Initial state value.
     - `reducers`: Object containing functions that describe state changes.
   - Access `state` and `action`:
     - `state`: Current state value in the store.
     - `action`: Action payload.
       - `action.type` determines the action type.
       - Access `action.payload` for state updates.
   - Export individual functionalities and the main source export.

3. **Add Todo** - Dispatching Actions

   - Use `useDispatch` to dispatch actions.
   - Example: `dispatch(addTodo())` to add a todo.

4. **Retrieve Values** - Accessing State
   - Use `useSelector` hook to access state values.
   - Example: `useSelector((state) => state.todos)` to retrieve todos from the state.

### Reducers in this Prooject
- **addTodo** 
  - id from `nanoid()` by redux and text from the `action.payload`
- **removeTodo** 
  - take out the previous todos from state and filter the array excluding the deleted one
- **updateTodo** 
  - from the state map each todo from todos array and if the id matches update the too with the payload else don't
- **toggleTodo** 
  - find the todo from array using the `.find()` method and by comparing the todo id with payload id. If todo available change the completed state to previous one
- **deleteAll** 
  - sets the state of todos to empty array
- **deleteCompleted** 
  - checks the completed state and filters out
## Components

- **TodoForm**
  - this form will be used to add todo
  - the addTodo reducer will dispatch here
  - onChange of input a state will update which will eventually update the store on button click (form submit)
- **TodoItem**
  - pass a todo prop - this will be passed from app.jsx by using useSelector and mapping it 
  - checkbox, input, 2 buttons
  - two states - one to extract the text using selector - one to check if its editable
  - when the input is being updated the editable is true and not then false : use this to display buttons
  - onEditClick - check for completion, check for ifEditable then handle edit if not then change the state/Completion



