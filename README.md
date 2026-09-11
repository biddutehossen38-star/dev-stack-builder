Dev Stack Builder
Project Description

Dev Stack Builder is a React website where developers can explore technologies and build their own development stack.

Technologies Used
React
TypeScript
Tailwind CSS
React Toastify
React Icons
JSON
Vite
Features
Explore different technologies.
Add and remove technologies from your stack.
Prevent duplicate technologies with toast alerts.
React Questions & Answers
1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside React. It makes UI code easier to write and understand.

2. What is the difference between props and state?

Props pass data from parent to child. State stores data that can change.

3. What does the useState hook do, and where did you use it?

useState stores and updates changing data. I used it for technologies, selected technologies, and loading.

4. What does the useEffect hook do, and why did you need it?

useEffect handles side effects. I used it to load the technology JSON data.

5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each list item and update it correctly.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. I used it to show the empty stack message when no technology is selected.

7. How do you pass data from a parent to a child, and how does a child send something back?

The parent passes data through props. The child can send something back by calling a function received through props.