## Workout Tracker - Frontend

**LIVE DEMO: https://workout-tracker-frontend-eta.vercel.app/**

Here is the link for the backend repo: https://github.com/marcelohcortez/workout-tracker-backend

MERN project to track workout exercises. Including 'add workout' page, 'list workouts' page and 'login/signup' blog.
The workouts list only shows the workouts created by the registered user.
On the live project the 'signup' and the addition of new workouts are deactivated for security reasons.
To log in the live project use the following credentials:
    username: 'testlive@testlive.com'
    password: 'ABCabc123!'

## Tech & 3rd party used in the project:
- [React](https://nodejs.org/)
- [react-router-dom](https://expressjs.com/)

## Services & tools used in the project
- [Vercel](https://vercel.com/)

# How to run the project:
- Clone the repository
- Remove all the 'serverURL' constants or change it's value for whatever you need
- On package.json file, change the "proxy" value to you backend address to avoid CORS issues locally, if using on production, relay on the 'cors' 3rd party plugin.

Start the project with:
```bash
npm run start
```

**LIVE DEMO: https://workout-tracker-frontend-eta.vercel.app/**