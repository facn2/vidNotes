# Vid Notes
## A notepad for YouTube videos


## Goals
- Allow users to import videos from YouTube
- Allow users to to leave timestamped notes on videos for study and reference purposes


## User Journey
- As a user I want to import videos from YouTube which I'm using for study or educational purposes.
- I want to leave notes on videos which I can reference to after creating them.
- I want those notes to be timestamped based on the time slot of the video which I'm leaving notes on.


## App Flow
1. The user lands on the home page which describes the purpose of the application with a "Register to start" button allowing them to create an account and start using the application.
1. Once the user has created an account and is logged in they will be directed to their profile page.
1. The profile page will allow the user to import videos of their choice from YouTube by providing a video URL.
1. The user will see all the videos they have imported in their profile page within a gallery view.
1. When user clicks on an imported video, they will go to a page which allows them to stream the video while provided with a notepad function allowing them to leave notes on a video, each note timestamping the point of the video when leaving the note.
1. User can click on "notes" tab from the profile page which will direct to a page which displays all of the notes they have created collectively between all the videos.
1. Notes will be filterable & searchable by filtering tags issued to notes and searching an input field for a notes title.


## Technology Stack
Based on our applications features and functionalities along with our personal interests in web development, we have decided to go with the following stack:
- Express
- PostgreSQL
- React


## Architecture
![Image](https://api.monosnap.com/rpc/file/download?id=OtioxqrafP1I69wJ605XDy84067VTB)

## Database Schema
![Image](https://api.monosnap.com/rpc/file/download?id=R5yLxDJ0UFuhuGd8IpK5jy3fObkuXG)


## Prototype
[Click Here](https://www.figma.com/proto/G3g492pap029OgUpMgprehdh/Vid-Notes-2?scaling=min-zoom&node-id=1%3A2) to view prototype


## Strech Goals
- User Login
- Sign in with Google
- Search notes with search bar
- Allow users to search notes
- Allow users to share notes
- Allow users to reference & study their notes separate from the video page
- Delete videos on the video gallery page
- Edit and Delete notes
