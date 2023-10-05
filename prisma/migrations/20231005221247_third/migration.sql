-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Alumno" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "numeroControl" TEXT NOT NULL,
    "fechaCreado" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "carreraId" INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT "Alumno_carreraId_fkey" FOREIGN KEY ("carreraId") REFERENCES "Carrera" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Alumno" ("carreraId", "fechaCreado", "id", "name", "numeroControl") SELECT "carreraId", "fechaCreado", "id", "name", "numeroControl" FROM "Alumno";
DROP TABLE "Alumno";
ALTER TABLE "new_Alumno" RENAME TO "Alumno";
CREATE UNIQUE INDEX "Alumno_numeroControl_key" ON "Alumno"("numeroControl");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
