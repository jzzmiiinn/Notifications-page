# Notifications Page

A responsive notifications page built with React, TypeScript, and Tailwind CSS as part of a Frontend Mentor challenge.

## Features

* Display notifications with user avatars
* Show read and unread notification states
* Display the number of unread notifications
* Mark all notifications as read
* Responsive layout for mobile and desktop
* Reusable React components
* TypeScript interfaces for notification data
* Conditional styling for read and unread notifications

## Built With

* React
* TypeScript
* Tailwind CSS
* Vite

## Project Structure

```text
src/
├── components/
│   ├── Header.tsx
│   ├── NotificationItem.tsx
│   └── NotificationList.tsx
├── data/
│   └── notifications.ts
├── types/
│   └── notification.ts
├── App.tsx
├── main.tsx
└── index.css
```

## React Concepts Practiced

This project was built to practice the fundamentals of React, including:

* Functional components
* Props
* `useState`
* Rendering lists with `.map()`
* Conditional rendering
* Event handling
* Derived state
* Component-based architecture
* TypeScript with React

## Getting Started

### Clone the repository

```bash
git clone <your-repository-url>
```

### Navigate to the project

```bash
cd notifications-page
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The application will then be available at the local development URL provided by Vite.

## How It Works

The notification data is stored in a separate data file and typed using a TypeScript interface.

The `App` component manages the notification state and calculates the number of unread notifications.

The `Header` receives the unread count and the `markAsRead` function through props.

The `NotificationList` receives the current notifications and renders a `NotificationItem` for each notification.

When the user clicks **Mark all as read**, the notification state is updated and React automatically re-renders the affected components.

## Responsive Design

The layout is designed to work across different screen sizes, with adjustments for:

* Mobile devices
* Tablets
* Desktop screens

## What I Learned

Through this project, I practiced moving from vanilla JavaScript DOM manipulation to React's component and state-based approach. I also gained more experience passing data through props, managing state with `useState`, rendering dynamic content, and using Tailwind CSS for responsive styling.

## Credits

This project is based on the [Frontend Mentor Notifications Page challenge](https://www.frontendmentor.io/).

## Author

Yasmin Ali
