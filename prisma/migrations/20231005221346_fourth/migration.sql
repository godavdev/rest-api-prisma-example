/*
  Warnings:

  - You are about to drop the column `carreraId` on the `Alumno` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Alumno" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "numeroControl" TEXT NOT NULL,
    "fechaCreado" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Alumno" ("fechaCreado", "id", "name", "numeroControl") SELECT "fechaCreado", "id", "name", "numeroControl" FROM "Alumno";
DROP TABLE "Alumno";
ALTER TABLE "new_Alumno" RENAME TO "Alumno";
CREATE UNIQUE INDEX "Alumno_numeroControl_key" ON "Alumno"("numeroControl");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
