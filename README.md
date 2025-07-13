# malla-interactiva/malla-enfermeria
├── index.html
├── style.css
└── script.js
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Malla Enfermería UV</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Malla Curricular Enfermería - UV</h1>
  <div class="grid">
    <!-- Cada semestre irá aquí -->
  </div>
  <script src="script.js"></script>
</body>
</html>
body {
  font-family: Arial, sans-serif;
  margin: 20px;
  background: #f4f4f4;
}

h1 {
  text-align: center;
  color: #333;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.semestre {
  background: white;
  border-radius: 10px;
  padding: 15px;
  width: 250px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.semestre h2 {
  margin-bottom: 10px;
  color: #006699;
}

.materia {
  margin: 5px 0;
  cursor: pointer;
  padding: 5px;
  border-left: 4px solid #ccc;
}

.materia:hover {
  background-color: #eef;
}
const malla = [
  {
    semestre: "Semestre 1",
    materias: [
      "INTRODUCCIÓN A LA ENFERMERÍA",
      "ANATOMÍA",
      "BIOLOGÍA",
      "QUÍMICA Y BIOQUÍMICA",
      "HERRAMIENTAS PARA LA INVESTIGACIÓN",
      "FORMACIÓN GENERAL Y PROFESIONAL I"
    ]
  },
  {
    semestre: "Semestre 2",
    materias: [
      "ENFERMERÍA EN SALUD FAMILIAR Y COMUNITARIA I",
      "ENFERMERÍA EN SALUD MENTAL I",
      "HISTOLOGÍA",
      "FISIOLOGÍA",
      "MICROBIOLOGÍA"
    ]
  },
  // Agrega los otros semestres aquí siguiendo el mismo formato...
];

const grid = document.querySelector(".grid");

malla.forEach(bloque => {
  const semestreDiv = document.createElement("div");
  semestreDiv.className = "semestre";

  const titulo = document.createElement("h2");
  titulo.textContent = bloque.semestre;

  semestreDiv.appendChild(titulo);

  bloque.materias.forEach(materia => {
    const materiaDiv = document.createElement("div");
    materiaDiv.className = "materia";
    materiaDiv.textContent = materia;
    semestreDiv.appendChild(materiaDiv);
  });

  grid.appendChild(semestreDiv);
});
