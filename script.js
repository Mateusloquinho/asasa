let materias = ["Matemática", "Português", "História", "Geografia"];
let indiceMateria = 0;

function alternarMateria() {
    indiceMateria = (indiceMateria + 1) % materias.length;
    const materiaTexto = document.getElementById('materia-texto');
    materiaTexto.textContent = `Matéria atual: ${materias[indiceMateria]}`;
}
