<!-- 1. What problem does the context API help solve?  -->

Context API gives us the ability to store data on a context instead passing props. Which is very useful beacuse passing props can becone very messy.

<!-- 2) In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application? -->

actions- i think of action as a trigger, that when pulled tells the state to update accordingly.

reducers- are what makes up the state.

store- Everything that changes within our application is represented object called the store. The store contains the state for our application. The store is known as 'single source of truth' because it is immutable, and it all of the application state data.

<!-- 3. What is the difference between Application state and Component state? When would be a good time to use one over the other? -->

Application stateis data that's used across an application. Component state ris data that can be used be one component or any of its child components.

<!-- 4) Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`? -->

thunk gives us the ability to handle asynchronous operation.

<!-- 5. What is your favorite state management system you've learned and this sprint?  -->

Please explain why! My favorite state management system is redux. It can be simple and you can track back your actions and see what youre doing.
