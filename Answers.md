1. What problem does the context API help solve?
    Context API is a way to share state values without prop drilling. It is useful because it can be applied to specific branches of the state tree, unlike redux which is always global.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions: A function called by a UI event that tells the reducer how to update state.
    Reducers: Decide how to update state when an action is dispatched, re-renders ui.
    Store: Keeps global state. Everything refers back to it, so it is a single source of truth.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state is the global state, with redux it can be accessed through any component. Component state is a state that only affects the elements inside that component. A good time to use it is for forms, especially for input updating as the user types. This doesn't affect the rest of the components until the input is complete and the form submitted. The form end results that were submitted would be better to add to global state.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    A thunk is a function that's returned by another function. The library Thunk is a middleware that alows us to make asynchronous calls using dynamic data from redux.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
    I like redux, it has a clear organizational scheme, you know where to look for all your actions, and it makes sense how different types of code are separated. It seems very useful for large scale projects.