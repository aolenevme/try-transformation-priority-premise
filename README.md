# Example of a kata done with TDD and [Trasformation Priority Premise](https://blog.cleancoder.com/uncle-bob/2013/05/27/TheTransformationPriorityPremise.html)

## [Task](./task.js)

## Flow
    1. Null
    2. Null to Constant
    3. Constant to Variable
    4. Add Computation (can add one or two simple computations and then may also initialize a variable. But it never changes the state of an existing variable.)
    5. Split Flow (add if or something similar. Split flow into two paths)
    6. Variable to Array (when you have only one. But you want to have many of something. Transform object into array of objects.)
    7. Array to Container (when you want to transform array into dictionary or set)
    8. If to While (use it when you want a splitted way to be repeated)
    9. Recurse (when we want the function to call itself. It is usually simplier than whiles)
    10. Iterate (usually it is a for loop, if you don`t want to use recursion)
    11. Assign (Be careful. Any change of a state is an assignment. The main source of errors.)
    12. Add Case (switch cases when you have to split flows more then ones)
