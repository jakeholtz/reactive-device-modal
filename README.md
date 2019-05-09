# reactive-device-modal
> Integrative UI Modal - Built with ReactJS and LESS, no boilerplates or other JS / CSS frameworks

# Directory Overview

````
reactive-device-modal/ <- ROOT
  src/
  |- index.html ______________________________# HTML Entry point
  |- index.js _______________________________ # JS Entry Point 
  |- App/ ___________________________________ # Application
  |  |- App.jsx _____________________________ # Main Application File
  |  |- Components/
  |    |- DeviceModal.jsx ___________________ # Unique Modal Component
  |    |- Dropdown.jsx ______________________ # Dropdown Component (Reuseable)
  |    |- Input.jsx _________________________ # Text Input Component (Reuseable)
  |    |- Radio.jsx _________________________ # Radio Input Component (Reuseable)
  |    |- SubmissionOptions.jsx _____________ # Modal Submission Buttons Component (Reuseable)
  |    |- TextSection.jsx ________________ __ # Text Section / Paragraph Component (Reuseable)
  
  NOTE: All components except DeviceModal.jsx and App.jsx are meant to be reuseable.
````


# Setup Instructions
1) Download / clone repository 
2) Make sure all dependencies are installed correcty -> Run `npm install` in the root folder
3) To run application, run `npm run build && npm run start`
4) Application will run in browser. Use Google Chrome for optimal performance.

# Testing Instructions
1) Make sure you've gone through the setup instructions
2) Run `npm run test` in the root directory. This will run Jest / Enzyme unit tests

# Author
BUILT BY JAKE HOLTZ - 5/7/2019 & 5/8/2019
