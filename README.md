# BookedInn

Welcome to the GitHub repository of BookedInn, a hotel booking website. 
## You can visit the live site here. > https://bookedinn-a11.web.app/

### Server-side repo: https://github.com/samwaseee/BookedInn-server

## Features and Characteristics

- **Home Page**: Contains a navbar with active routes. The navbar includes the Website name, Rooms, My Bookings, About Us.Also Home page contains several asthetically pleasing gallery and room showcase with carrosel.
- **User Profile**: Conditional display based on user login status. If a user is logged in, the user image and a logout button are displayed. If not, a login button is shown.
- **Rooms Page**: Displays a list of available rooms with images, descriptions, and prices. Users can filter rooms by price range.
- **Room Details Page**: Displays detailed information about a specific room, including price per night, room size, availability, special offers, and reviews.
- **My Bookings Page**: A protected route where users can see all the rooms they have booked.
- **Review System**: Users can post reviews for rooms only they have booked. Reviews include a username, rating, comment, and timestamp.
- **Booking System**: Users can select a room and choose the booking date using a date picker. The system ensures that users can only book available rooms.
- **Booking Cancellation System**: Users can cancel a booking one day before the booked date. After canceling the room, the room will be available again.
- **JWT Authentication**: JWT authentication is implemented for private routes.
- **User Authentication**: Users can create an account with email and password or log in using Google authentication via Firebase. It also uses the React Context API for the auth provider.
- **Routing**: Uses the React Router concept for routing to different pages.
- **User Information**: Once a user is logged in, user information will show on the navbar even if he/she reloads the website.
- **Loader**: A loader is displayed when the data is in a loading state.
- **Deployment**: The website is deployed on Firebase.


## NPM Packages Used

- React Tooltip
- Update the browser tab title, meta-data (Helmet)
- Animation library Aos.
- Map Library. (pigeon-maps)

## Authentication

The website uses Firebase authentication for email, Google, and GitHub-based authentication. It also uses the React Context API for the auth provider. The onAuthStateChanged method of Firebase is used to maintain user information on the navbar even after reloading the website.
And JWT authentication for private routes.
## Routing

The website uses the React Router concept for routing to different pages.


## 404 Page

Create a 404 page with an exciting jpg/gif and a "Back to home" button that redirects the user to the home page.


## Future Enhancements

Stay tuned for future enhancements and features!