const { GoogleSpreadsheet } = require("google-spreadsheet");
const credentials = require("./credentials.json");

const doc = new GoogleSpreadsheet(
  "1J_31MZzM5oWhFy190TAcOQ5WEghvz8Z1pexnHvh-Brs"
);

const run = async () => {
  try {
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[1];
    await sheet.addRow({
      Nome: "Christian",
      Email: "contato@devpleno.com",
      Whatsapp: "35999090011",
      Cupom: "aaa111",
      Promo: "asdfljfçlas",
    });
    console.log(doc.title);
  } catch (err) {
    console.log(err);
  }
};

run();
