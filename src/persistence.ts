import Dexie, { type Table } from "dexie";
import type { Work } from "./schema";
class Database extends Dexie {
  works!: Table<Work, string>;
  constructor() {
    super("foundphone-studio");
    this.version(1).stores({ works: "id,updatedAt", saves: "id" });
    // Version 2 removes the legacy player-save table while retaining author works.
    this.version(2).stores({ works: "id,updatedAt", saves: null });
  }
}
export const db = new Database();
