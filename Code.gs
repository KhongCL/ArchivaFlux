/**
 * Legal Document Management System
 * Upload files to Google Drive and save record to Google Sheet
 */


var folderID = "root"; //Replace the "root" with folder ID to upload files to a specific folder
var sheetName = "Data"; //Replace the "Data" with your data sheet name

function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate();
}


function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

function uploadFiles(formObject) {
  try {
    var folder = DriveApp.getFolderById(folderID);
    var sheet = SpreadsheetApp.getActive().getSheetByName(sheetName);
    var fileUrl = "";
    var fileName = "";

    
    if (formObject.myFile.length > 0) {
      var blob = formObject.myFile;
      var file = folder.createFile(blob);
      file.setDescription("Uploaded by " + formObject.email);
      fileUrl = file.getUrl();
      fileName = file.getName();
    } else {
      fileUrl = "Record saved without a file";
      fileName = "";
    }
    
    // Saving records to Google Sheet
    sheet.appendRow([
      formObject.email,
      fileName,
      fileUrl,
      Utilities.formatDate(new Date(), "GMT+8:00", "yyyy-MM-dd' 'HH:mm:ss")
    ]);
    
    // Return the URL of the saved file
    return fileUrl;
    
  } catch (error) {
    return error.toString();
  }
}
