# nextjs-challenge-boilerplate
A basic boilerplate for nextjs challenge

You are responsible for writing a node app using nextjs. Your app will consist of two pages (a form, and a feed), and a server that reads and writes to the feed.

Challenge: Create a new Github project with NextJS and React that meets the following criteria:
1. Starts with the command `npm i && npm dev`
   - note: I think this should be `npm i && npm run dev` instead
2. Shows a form with “name” and “message” when it runs at localhost:3000
3. When submitting form, runs a `POST` to `/api/guestbook` and resets with a success message (should show an error if things are missing).
4. A link on the homepage takes you to `/guestbook` and shows all posts that have been submitted from the previous form.
  - A link on that page exists to go back to the homepage
  - You do not need to persist that data in any database, just keep it in memory.

##### BONUS

Feel free to add the following
1. Add some UI/UX features
2. Unit tests (coverage)
3. Code linting 
   - note: `standard --parser babel-eslint` works via cli but not via `npm run lint` :/ (this might be linux/pop!_os related... both standard and babel-eslint are installed 'locally' and not globally on my linux machine though... which is the same setup as my windows machine)
