# BookedInn

Welcome to the GitHub repository of BookedInn, a hotel booking website. 

> ### **[Live site]( https://bookedinn-a11.web.app)**
>  **[Server side repo](https://github.com/samwaseee/BookedInn-server)**


## Features and Characteristics

- **Home Page**: Contains a navbar with active routes. The navbar includes the Website name, Rooms, My Bookings, and About Us. Also, the Home page contains several aesthetically pleasing galleries and room showcases with carrousel.
- **User Profile**: Conditional display based on user login status. The user image and a logout button are displayed if a user is logged in. If not, a login button is shown.
- **Rooms Page**: Displays a list of available rooms with images, descriptions, and prices. Users can filter rooms by price range.
- **Room Details Page**: Displays detailed information about a specific room, including price per night, room size, availability, special offers, and reviews.
- **My Bookings Page**: A protected route where users can see all the booked rooms.
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

## Setup and Installation
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies using `npm install`.
4. Create a `.env` file and define the necessary environment variables.
5. Start the server using `npm start`.

## Usage
To run this application on your local machine, you need to create a `.env` file in the root directory with the following keys and their respective descriptions:

- `VITE_APIKEY`: Your Firebase API key.
- `VITE_AUTHDOMAIN`: Your Firebase Auth domain.
- `VITE_PROJECTID`: Your Firebase project ID.
- `VITE_STORAGEBUCKET`: Your Firebase storage bucket.
- `VITE_MESSAGINGSENDERID`: Your Firebase messaging sender ID.
- `VITE_APPID`: Your Firebase app ID.

After setting up the project, navigate to the specified localhost port in your browser. Explore the application by visiting the different pages and trying out the features.
