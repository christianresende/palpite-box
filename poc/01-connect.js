const { GoogleSpreadsheet } = require("google-spreadsheet");
const credentials = require("./credentials.json");

const doc = new GoogleSpreadsheet(
  "1J_31MZzM5oWhFy190TAcOQ5WEghvz8Z1pexnHvh-Brs"
);

const run = async () => {
  await doc.useServiceAccountAuth(credentials);
  await doc.loadInfo();
  console.log(doc.title);

  const sheet = doc.sheetsByIndex[2];
  await sheet.loadCells("A2:B2");

  console.log(sheet.title);

  const mostrarPrommocaoCell = sheet.getCell(1, 0);
  console.log(mostrarPrommocaoCell.value);

  const textoCell = sheet.getCell(1, 1);
  console.log(textoCell.value);
};

run();
