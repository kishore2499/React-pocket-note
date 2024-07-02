# React + Vite

# Pocket Notes

Pocket Notes is a simple web application for creating and managing note groups. Each note group can be assigned a name and a color, and you can easily switch between different groups to manage your notes. The application is built using React and local storage to persist data.

## Features

- **Create Note Groups:** Add new note groups with a unique name and color.
- **View Note Groups:** See all created note groups in a list.
- **Delete Note Groups:** Remove note groups when they are no longer needed.
- **Responsive Design:** Works well on both desktop and mobile devices.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager) or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/pocket-notes.git
   cd pocket-notes
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

   The application will be available at `http://localhost:5173`.

## Project Structure

- **`src/components`**: Contains all the React components.
  - **`Left`**: Left panel for creating and viewing note groups.
  - **`Right`**: Right panel (details not provided in the initial code).
  - **`Notes`**: Component for displaying notes within a group.
  - **`NotesGrp`**: Component for rendering individual note groups.
- **`src/App.js`**: Main application component.
- **`src/index.js`**: Entry point for the React application.
- **`src/styles`**: CSS module files for styling components.

## Key Components

### HomeMainPage Component

This is the main component that renders the left and right panels, handles modals for creating new note groups, and manages state for the application.

### LeftSidePannel Component

This component is responsible for displaying the list of note groups and providing options to create or delete note groups.

### NotesGrp Component

This component displays individual note groups with their respective names and colors.

## State Management

State is managed using React's `useState` and `useEffect` hooks. Note groups are stored in local storage to persist data between page reloads.

## Adding New Features

1. **Clone the repository and create a new branch:**
   ```bash
   git checkout -b feature-name
   ```

2. **Make your changes and commit them:**
   ```bash
   git commit -m "Description of new feature"
   ```

3. **Push to the branch:**
   ```bash
   git push origin feature-name
   ```

4. **Create a pull request on GitHub.**

## Contributing

Contributions are welcome! Please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

If you have any questions or feedback, feel free to contact us at [kunalkk2499@gmail.com].

---

Thank you for using Pocket Notes! We hope it helps you stay organized and productive.

