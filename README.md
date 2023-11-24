# Air Call
## Description
This is a simple call list app that allows you to check calls and archive them. It is built with React and deployed with Vercel.

![AirCallDemo](https://github.com/sabakantaro/sabakantaro/assets/79243411/cfc8250d-6649-4353-a51a-7aab57999dd7)

link: [https://aircall-sabakantaro.vercel.app/](https://aircall-sabakantaro.vercel.app/)

## Highlights

- Intuitive UI: The UI is designed to be intuitive and easy to use. The user can archive and unarchive calls with a single click.
- Best practices: The app is built with reusable components and follows best practices. Created custom hooks like `useFetchCalls` to handle API calls and state management.
- Code readability: The code is well organized and easy to read. All the components are in the `components` folder and the hooks are in the `hooks` folder, and the `pages` folder contains the pages.

## Additional points
- Used Kanban board to manage the project
<img width="1440" alt="GithubKanbanboard" src="https://github.com/sabakantaro/sabakantaro/assets/79243411/37dce5c4-7021-46e4-abe6-df22dfa9eff4">

- Created issues and pull requests to manage the project
<img width="1439" alt="githubIssues" src="https://github.com/sabakantaro/sabakantaro/assets/79243411/70d0435b-3ab9-4a21-bcff-ec5c4d8abbc3">

## Tech stacks
- React
- React Router
- React Hooks
- Webpack
- Babel
- Tailwind CSS
- Vercel

## Features

- Activity Feed - simple list of calls
- Activity Detail - detail of a call
- Archive - the final user should be able to archive (and unarchive) a call.
- Archived calls will no longer be displayed on the Activity Feed and should have a separate Archived Tab.
- A button to archive all calls in the activity feed
- A button to unarchive all calls in the archived calls tab

## Future improvements
- Change CDN to install packages about Tailwind CSS: Currently, Tailwind CSS is installed with CDN in order to meet the deadline. However, it is better to install it with npm or yarn.
- Remove .env file from the repository: Currently, the .env file is included in the repository to solve the problem on Vercel deployment. However, it is better to remove it from the repository and use the environment variables on Vercel.
- Add tests: Currently, there are no tests. It is better to add tests to make sure the app works as expected.