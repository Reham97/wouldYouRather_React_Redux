# "Would You Rather?" Project - React and Redux

a web app that lets a user play the “Would You Rather?” game.<br />
The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”.<br />
Answering "neither" or "both" is against the rules.<br />

In this app users will be able to 
- login with exist user
- If tries to navigate anywhere by entering the address in the address bar, He is asked to sign in and then the requested page is shown. 
- log out and log back in
- answer questions 
- see which questions they haven’t answered & arranged from the most recently created (top) to the least recently created (bottom).
- see which questions they answered & arranged from the most recently created (top) to the least recently created (bottom).
- see how other people have voted
- post questions
- see the ranking of users on the leaderboard
- only vote once per poll, he shouldn’t be allowed to change his/her answer after voting -- no cheating allowed! 
- see a 404 page if is trying to access a page that does not exist

## Notes

### Files

_DATA.js file :- which represents a fake database and contains methods that let you access the data.<br /> 
helper file :- for helper functions.<br />

### Route

| path | PAge |
|-----------------|------------------|
| /log             | Login | 
| /                | Home  |
| /add              | Create New Question |
| /leaderBoard              | View Leader Board |
| /questions/:id?    | View Question to Answer |
| /viewQuestion/:id               | View Question |


## Installation

get all dependencies

```bash
npm install
npm start
```

## Demo

### Screenshots

<img src="screens/pic (1).png" width="700" height="500">

<img src="screens/pic (2).png" width="700" height="500">

<img src="screens/pic (3).png" width="700" height="500">

<img src="screens/pic (4).png" width="700" height="500">

<img src="screens/pic (5).png" width="700" height="500">

<img src="screens/pic (6).png" width="700" height="500">
