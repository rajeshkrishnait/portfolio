

# Personal Portfolio

This repository contains the source code for my **personal portfolio website**, showcasing my skills, projects, and professional background. It is built using modern web technologies and is designed to provide a sleek and responsive interface for visitors to explore.

## Features

- **Home Section**: A landing page with an introduction and links to other sections of the portfolio.
- **About Section**: Information about my professional background, skills, and experience.
- **Projects Section**: Showcases key projects, with descriptions and links to live demos or GitHub repositories.
- **Skills Section**: A breakdown of technical skills, tools, and technologies I’m proficient in.
- **Contact Section**: Allows users to get in touch via a contact form or directly through email or social media links.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.

## Demo

You can view the live portfolio at: [Live URL](https://<your-username>.github.io/portfolio)

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **Chakra UI**: A simple, modular, and accessible component library for React.
- **Framer Motion**: A library for animation and smooth transitions.
- **SCSS**: For styling the application with advanced CSS capabilities.
- **EmailJS**: To handle contact form submissions via email.
- **React Router**: For navigation between sections.

## Getting Started

### Prerequisites

Make sure you have the following installed on your local machine:

- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rajeshkrishnait/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

   The site will be available at `http://localhost:3000`.

### Building for Production

To build the portfolio for production, run:

```bash
npm run build
```

This will create an optimized build of the portfolio in the `build` directory, ready for deployment.

### Deployment

To deploy the portfolio to **GitHub Pages**, follow these steps:

1. Install the `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```

2. Add the following to your `package.json`:
   ```json
   {
     "homepage": "https://<your-username>.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

The portfolio will be hosted at `https://<your-username>.github.io/portfolio`.

## Folder Structure

- **src**: Contains the source code for the portfolio.
  - **components**: Reusable UI components such as the navbar, project cards, etc.
  - **pages**: Separate pages for each section of the portfolio (Home, About, Projects, etc.).
  - **styles**: SCSS files for styling the portfolio.
  - **assets**: Images and other static assets used in the portfolio.
  - **utils**: Utility functions such as form handling.

## Customization

Feel free to fork the repository and customize it to fit your own needs. Here’s how you can modify key aspects:

- **Projects**: To add or modify projects in the Projects section, update the data in the `Projects` component.
- **Skills**: You can update the list of skills in the `Skills` section by modifying the relevant component or its data file.
- **Contact Form**: The contact form is powered by **EmailJS**. You’ll need to configure your EmailJS credentials in the `Contact` component for it to function properly.

### Changing Theme and Design

The portfolio uses **Chakra UI** for its design components, which makes it easy to modify the theme (e.g., colors, fonts, etc.). If you want to adjust the styling, you can do so by modifying the Chakra theme configuration or using custom SCSS styles.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

### Steps to Contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes and commit (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Chakra UI](https://chakra-ui.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React.js](https://reactjs.org/)
- [EmailJS](https://www.emailjs.com/)

