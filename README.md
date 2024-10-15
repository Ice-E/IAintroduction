# Object Recognition Application

This project is a web application that uses Azure Cognitive Services to identify common objects from images uploaded by users. The application allows users to input their Azure subscription key and endpoint to perform image analysis.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Features

- Upload an image from your device.
- Identify objects in the image using Azure Computer Vision.
- Display the results in a user-friendly format.
- Easy integration with Azure services.

## Technologies Used

- HTML
- CSS
- JavaScript
- Azure Cognitive Services (Computer Vision API)

## Getting Started

To get started with the application, follow these steps:

### Accessing the Application

The application is hosted on GitHub Pages and can be accessed directly at the following URL:

[https://ice-e.github.io/IAintroduction/](https://ice-e.github.io/IAintroduction/)

### Prerequisites

- An Azure account. You will need to create a Computer Vision resource to get your subscription key and endpoint.

## Usage

1. **Enter Azure Credentials**

   In the "Azure Credentials" section, input your Azure subscription key and endpoint URL. You can find these details in the Azure Portal after creating your Computer Vision resource.

2. **Upload an Image**

   Click the "Upload an Image" button to select an image file from your device (supported formats: JPEG, PNG).

3. **Analyze the Image**

   After uploading, click the "Upload and Identify" button to analyze the image. The results will be displayed below in a formatted JSON structure.

## Project Structure

Here’s a brief overview of the project structure:

IAINTRODUCTION/ 
        │
        ├── index.html # Main HTML file     
        ├── app.js # JavaScript file for handling logic 
        └── styles.css # CSS file for styling the application


### JavaScript Logic

The JavaScript file (`app.js`) handles the logic for uploading images, sending requests to the Azure API, and displaying results.

### Styling

The CSS file (`styles.css`) contains styles to enhance the user interface of the application.

## Contributing

Contributions are welcome! To contribute to this project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Open a pull request.

## Instructions for Use

1. **Create the `README.md` file**: Open your code editor or IDE, create a new file, and name it `README.md`.
2. **Copy and Paste**: Copy the above content and paste it into your newly created `README.md` file.
3. **Replace Placeholders**: 
   - Change `YOUR_USERNAME` to your actual GitHub username.
   - Update your contact information (name and email) in the "Contact" section.
4. **Save the File**: Save the changes to ensure the README is updated.

This `README.md` provides comprehensive information for users and contributors, including features, usage details, project structure, and contact information.
