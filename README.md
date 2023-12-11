# HorizonHub - Full Stack Social Media App

## Introduction

Welcome to HorizonHub, a full-stack social media app designed to connect people, share experiences, and build a community. This application is built using TypeScript, React, Vite, and leverages AppWrite as the backend for seamless data management.

## Features

- **User Authentication**: Secure user registration and authentication with AppWrite.
- **Create and Share Posts**: Users can create, edit, and delete posts, sharing their thoughts, images, and experiences.
- **Like and Comment**: Engage with others by liking and commenting on their posts.
- **Real-time Updates**: Experience real-time updates with WebSockets for immediate post notifications.
- **Responsive Design**: A responsive user interface to ensure a seamless experience across various devices.

## Technologies Used

- **TypeScript**: Provides type safety and enhances code quality.
- **React**: A popular JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web development.
- **AppWrite**: An open-source backend server that helps developers build scalable and secure applications.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/kashan16/HorizonHub.git
```

2. Install dependencies:

```bash
cd horizonhub
npm install
```

3. Configure AppWrite:

   - Create an account on [AppWrite](https://appwrite.io/).
   - Create a new project and note down the API endpoint and project ID.
   - Set up authentication (e.g., email/password) in AppWrite.
   - Create a collection for storing posts.

4. Configure the app:

   - Create a `.env` file in the root of the project:

     ```
     REACT_APP_APPWRITE_ENDPOINT=https://your-appwrite-endpoint/api/v1
     REACT_APP_APPWRITE_PROJECT_ID=your-appwrite-project-id
     REACT_APP_APPWRITE_COLLECTION_ID=your-appwrite-collection-id
     ```

5. Run the app:

```bash
npm run dev
```
## UI Screenshots

- Login Page
  ![Login Page](https://i.postimg.cc/rs3s0Xz7/Screenshot-from-2023-12-11-13-46-12.png)
- Sign-Up page
  ![Sign-Up page](https://i.postimg.cc/XYhRRjmR/Screenshot-from-2023-12-11-13-46-01.png)

## Contributing

We welcome contributions from the community. Feel free to submit issues or pull requests to help improve HorizonHub.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- The HorizonHub team acknowledges the contributions of the open-source community and the creators of TypeScript, React, Vite, and AppWrite.

Thank you for using HorizonHub! We hope you enjoy connecting with others in this vibrant community. If you have any questions or feedback, please don't hesitate to reach out.