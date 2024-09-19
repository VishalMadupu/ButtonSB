# Button Component with Spinner

This project includes a button component that displays a spinner in the center when clicked. The button and spinner are styled using SCSS, and the project uses Storybook for development and visual testing.

## Project Setup

### Prerequisites

- Node.js (version 14 or later)
- npm (Node Package Manager)

### Installation

1. Clone the repository:


git clone https://github.com/yourusername/your-repository.git

2. Navigate to the project directory:

cd your-repository
S

3. Install the dependencies:
 
npm install
S

## Running the Project
Development Server
To start the development server and see the button component in action:

### npm run dev


it http://localhost:3000 in your browser to see the button. When you click the button, a spinner will appear in the center.

## Storybook
To run Storybook and view the button component with different states:

### npm run storybook



## Chromatic

To publish your Storybook online with Chromatic:

1. Sign up for a Chromatic account at Chromatic.

2. Install the Chromatic CLI:

### npm install -g chromatic


3. Add the Chromatic project token to your environment variables. You can find the token in your Chromatic project settings.

4. Run the Chromatic publish command:

npx chromatic --project-token <your-chromatic-project-token>


**Code Structure**
src/components/Button.js: The main button component file.
src/assets/scss/button.scss: SCSS styles for the button component.
src/pages/index.js: Example usage of the button component.
.storybook/: Configuration files for Storybook.
Contributing
Feel free to open an issue or submit a pull request if you have suggestions or improvements for the button component or other parts of the project.