Test for sharing states through context in single page.

## Problem
When there's complex components in page, it's hard to predict where state or logics are.

Basically this comes from the React's state system. Since props can goes down but not up, single responsibility is hard to keep.
Let's say there are ToDo page - TopSection - ToDo list.
And developer named John have to fix the fetch logic of todo and John is not the one who wrote this code.

Then John would expect 2 location.
1) ToDo list component
2) Page component

But actually logic that John was finding for is in TopSection component because...
At first, writer of code(Ann) put that fetch code in ToDo list component.
But she found there is "Add ToDo" button on TopSection from design which should effect ToDo data.
So to drill down that state, Ann moved logic and states to TopSection.
Now Ann thinks "Okay now this ToDo states are only shared to the components that uses these".

This is why John couldn't expect ToDo logic's location.
Problem is in real application, there are tons of components and tons of this kind of tricks there, so even after you find this location, sometimes it's really tricky to understand where bug happens, and how to fix.

This would not happen if it was possible to access downwards like ToDoList.createNewToDo(text) on TopSection component. Then John would find that logic in ToDo list component at first, and doesn't have to worry where to put logics.
