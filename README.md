# Hey Ian LLC Website

Welcome to the repository for the Hey Ian LLC website! This project is a simple, responsive website designed to showcase IT support services for individuals and small businesses in Iowa and California.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [File Structure](#file-structure)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview
This website provides information about Hey Ian LLC's IT services, including help desk support, system optimization, and device setup. It also features a portfolio section, testimonials, and a contact form.

## Features
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Dark/Light Mode Toggle**: Users can switch between themes.
- **Contact Form**: Allows users to send inquiries directly.
- **Portfolio Section**: Showcases completed projects.

## File Structure
```
crispy-doodle/
├── index.html       # Main HTML file
├── styles.css       # Stylesheet for the website
├── script.js        # JavaScript for interactivity
├── assets/          # Folder for assets
│   └── icons/       # Icons for dark/light mode
│       ├── day-icon.png
│       └── night-icon.png
```

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. Navigate to the project directory:
   ```bash
   cd crispy-doodle
   ```
3. Open the `index.html` file in your browser to view the website.

### Using a Local Server (Recommended)
To avoid issues with JavaScript modules or CORS, use a local server:
- **Python**:
  ```bash
  python -m http.server
  ```
- **Node.js (http-server)**:
  ```bash
  npx http-server
  ```

## Usage
- Open the website in a browser.
- Navigate through the sections using the navbar.
- Use the contact form to send inquiries.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.