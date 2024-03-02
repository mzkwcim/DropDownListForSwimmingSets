function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu("Testowanie funkcji")
  .addItem("AEC2","AEC2")
  .addItem("zadanie ....x75m","ZadanieXrazy75m")
  .addItem("ANC wytrzymałość szybkościowa krótka", "ANC")
  .addItem("ANC wytrzymałość szybkościowa", "ANC2")
  .addItem("zadanie 10x35m", "Zadanie")
  .addItem("ANP", "ANP")
  .addToUi();

}

function AEC2(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();
  const cell = sheet.getRange("A6");
  const list = SpreadsheetApp.newDataValidation().requireValueInList(["36x50m 1-16 co 4 mocno 1', 17-28 co 3 mocno 1'15\" 29-36 co 2 mocno 1\"30", "4x(3x50m + rozpływanie)"]).build();
  cell.setDataValidation(list)

}

function ZadanieXrazy75m(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();
  const cell = sheet.getRange("A7");
  const list = SpreadsheetApp.newDataValidation().requireValueInList(["4x75m 70% T50m", "6x75m 70% T50m","4x75m 78% T50m", "2x(75m styl L + 3x25m NN)" ]).build();
  cell.setDataValidation(list)
}

function ANC(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();
  const cell = sheet.getRange("A8");
  const list = SpreadsheetApp.newDataValidation().requireValueInList(["3x4x15m sprint (nawrot, skok, finisz)" ]).build();
  cell.setDataValidation(list)
}

function ANC2(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();
  const cell = sheet.getRange("A9");
  const list = SpreadsheetApp.newDataValidation().requireValueInList(["4x25m T100 + 2x50m FES", "4x50m T100 FES"]).build();
  cell.setDataValidation(list)
}

function Zadanie(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();
  const cell = sheet.getRange("A10");
  const list = SpreadsheetApp.newDataValidation().requireValueInList(["10x35m 75% T50m"]).build();
  cell.setDataValidation(list)
}

function ANP(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();
  const cell = sheet.getRange("A11");
  const list = SpreadsheetApp.newDataValidation().requireValueInList(["2x(35m + 5x15m + 35m)", "2x(2x25 + 25m R15\")" ]).build();
  cell.setDataValidation(list)
}





