# ArchivaFlux: A Legal Document Management System
 ![image](https://github.com/user-attachments/assets/a48a1dbc-322c-4abf-85e7-9a576713134e)

Disclaimer: This is a basic version of ArchivaFlux designed for demonstration purposes. It provides core functionalities for document upload, storage, and basic record-keeping.

## Step 1: Create a Google Sheet:
[https://docs.google.com/spreadsheets/d/1Fkonmy7nJ_nxueovmaRSW1qViGQp-A_JFogwqPIrxIg/copy](https://docs.google.com/spreadsheets/d/1Fkonmy7nJ_nxueovmaRSW1qViGQp-A_JFogwqPIrxIg/copy)

Make a copy of the provided Google Sheet template to your google drive.

## Step 2: Deploy the App Script:
Open the Google Sheet.

Go to Extensions > Apps Script.

### Deploy the script as a web app following the steps below:

Go to the App Script Editor and click the Deploy button at the top Right.

Then click New Deployment.

Select the deployment type as Web app from the gear icon

For Description type a name for this deployment.

Execute as: Your email address.

Who has access: Anyone

Authorize the web app when prompted.

Click Authorize access button.

Chose an account (the email address you are currently working with).

Go to the Advanced link at the bottom left.

Then click the link name “Go to …Your file name…” link at the bottom.

Click Allow button at the bottom right corner.

Then you will have the URL to the web app at the bottom of the dialog box. Then Click on the URL to go to the web app.

## Step 3:Use the Web App:
Access the deployed web app using the generated URL.

Enter your email address.

Upload the desired legal document.

The uploaded file will be stored in your Google Drive and its details recorded in the Google Sheet.

### **Make sure to allow third party cookies. **

## How it Works:
The web app collects user email and uploaded file.

The file is stored in the user's Google Drive.

File metadata (email, filename, file URL, timestamp) is recorded in the Google Sheet.


## Limitations:
This is a basic prototype with limited functionality.

Data security relies on Google Drive's security measures.

## Future Improvements:
Implement advanced search and filtering options.

Add document version control.

Enhance user interface and user experience.
