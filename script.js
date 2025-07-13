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
  // Sigue agregando los demás semestres aquí...
];

const contenedor = document.getElementById("malla");

function guardarEstado(nombre, estado) {
  localStorage.setItem(nombre, estado);
}

function obtenerEstado(nombre) {
  return localStorage.getItem(nombre) === "true";
}

malla.forEach(bloque => {
  const semestreDiv = document.createElement("div");
  semestreDiv.className = "semestre";

  const titulo = document.createElement("h2");
  titulo.textContent = bloque.semestre;
  semestreDiv.appendChild(titulo);

  bloque.materias.forEach(materia => {
    const materiaDiv = document.createElement("div");
    materiaDiv.className = "materia";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = obtenerEstado(materia);
    checkbox.addEventListener("change", () => {
      guardarEstado(materia, checkbox.checked);
    });

    const label = document.createElement("label");
    label.textContent = materia;

    materiaDiv.appendChild(checkbox);
    materiaDiv.appendChild(label);
    semestreDiv.appendChild(materiaDiv);
  });

  contenedor.appendChild(semestreDiv);
});
