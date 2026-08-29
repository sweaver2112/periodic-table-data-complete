import fs from "node:fs";
import { json2csv } from "json-2-csv";

const data = JSON.parse(
    fs.readFileSync("../pTable.json", "utf8")
);

const csv = await json2csv(data, {
    sortHeader: true
});

fs.writeFileSync("../pTable.csv", csv + "\n");