-- CreateTable
CREATE TABLE "Alumno" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "numeroControl" TEXT NOT NULL,
    "fechaCreado" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Alumno_numeroControl_key" ON "Alumno"("numeroControl");
