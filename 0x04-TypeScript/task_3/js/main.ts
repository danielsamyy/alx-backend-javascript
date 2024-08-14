/// <reference path="./crud.js" />
import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};
const newRowID: typeof RowID = CRUD.insertRow(row);
const updatedRow: RowElement = {
  ...row,
  age: 23,
};
CRUD.updateRow(newRowID, row);
CRUD.deleteRow(newRowID);

const obj = { firstName: "Guillaume", lastName: "Salva" };
CRUD.insertRow(obj);
