function sendNTFOfLastEditedRow() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];

  var lastRow = sheet.getLastRow();
  var numRows = 1;   
  var cols = sheet.getLastColumn();


 
  var dataRange = sheet.getRange(lastRow, 1, numRows, cols)


  var data = dataRange.getValues();


  var linemsg = "มีการเพิ่มข้อมูลดังนี้\nชื่อ - นามสกุล : " + data[0][1] + "\n ที่อยู่ : " +data[0][3]+ "\n รหัสประจำตัว : " + data[0][4];

  sendNTF(linemsg);

}

function sendNTF(message)
{
 var token = "Line Notify Token";
  
  var formData = {
    'message': message,
  };
 
  var options = {
    'method' : 'post',
    'headers' : {'Authorization': "Bearer " + token},
    'contentType': 'application/x-www-form-urlencoded',
    'payload' : formData
  };
  UrlFetchApp.fetch('https://notify-api.line.me/api/notify', options);
}
