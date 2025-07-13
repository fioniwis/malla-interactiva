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
  {
    semestre: "Semestre 3",
    materias: [
      "ENFERMERÍA EN NIÑEZ Y ADOLESCENCIA I",
      "FISIOPATOLOGÍA",
      "FARMACOLOGÍA",
      "INGLÉS BÁSICO"
    ]
  },
  {
    semestre: "Semestre 4",
    materias: [
      "ENFERMERÍA EN PERSONAS ADULTAS",
      "ENFERMERÍA DEL ENVEJECIMIENTO",
      "FUNDAMENTOS SOCIOCULTURALES PARA ENFERMERÍA",
      "INTRODUCCIÓN A LA INVESTIGACIÓN PARA ENFERMERÍA",
      "FORMACIÓN GENERAL Y PROFESIONAL II"
    ]
  },
  {
    semestre: "Semestre 5",
    materias: [
      "ENFERMERÍA EN PERSONAS ADULTAS Y MAYORES",
      "ÉTICA Y LEGISLACIÓN",
      "METODOLOGÍA DE LA INVESTIGACIÓN PARA ENFERMERÍA I",
      "TIPE I"
    ]
  },
  {
    semestre: "Semestre 6",
    materias: [
      "ENFERMERÍA EN NIÑEZ Y ADOLESCENCIA I",
      "ENFERMERÍA EN SALUD MENTAL II",
      "METODOLOGÍA DE LA INVESTIGACIÓN PARA ENFERMERÍA II",
      "TIPE II"
    ]
  },
  {
    semestre: "Semestre 7",
    materias: [
      "ENFERMERÍA EN SALUD FAMILIAR Y COMUNITARIA II",
      "GESTIÓN DE CALIDAD E INNOVACIÓN EN SALUD I",
      "TRABAJO FINAL DE GRADO I"
    ]
  },
  {
    semestre: "Semestre 8",
    materias: [
      "ENFERMERÍA EN URGENCIA Y DESASTRE",
      "GESTIÓN DE CALIDAD E INNOVACIÓN EN SALUD II",
      "TRABAJO FINAL DE GRADO II",
      "FORMACIÓN GENERAL Y PROFESIONAL III"
    ]
  },
  {
    semestre: "Semestre 9",
    materias: [
      "PRÁCTICA PROFESIONAL I"
    ]
  },
  {
    semestre: "Semestre 10",
    materias: [
      "PRÁCTICA PROFESIONAL II"
    ]
  }
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
