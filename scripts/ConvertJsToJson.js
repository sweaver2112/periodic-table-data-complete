import fs from "node:fs";
import { pTable } from "../pTable.json";

const prettyJson = JSON.stringify(JSON.parse(pTable), null, 2);

fs.writeFileSync("../pTable.csv", prettyJson + "\n");