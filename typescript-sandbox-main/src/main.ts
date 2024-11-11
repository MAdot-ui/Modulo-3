/*
Nombre del grupo / cantante / compositor (string).
Año de fundación: cuando se formó el grupo (numero).
Si está en activo (booleano).
Género musical (string).
Cada género queremos tenerlo en una variable.

Los grupos que vamos a mostrar:

The Beatles / 1960 / Activo: true / 🎵 Pop Rock
Queen / 1970 / Activo: false / 🎸 Rock
AC DC / 1973 / Activo: true / 🤘 Hard Rock
Ludwig van Beethoven / 1770 / Activo: false / 🎼 Clásica
The Rolling Stones / 1962 / Activo: true / 🎸 Rock

Queremos mostrar cada grupo por consola, el nombre del grupo de música queremos ponerlo en negrita, con fuente más grande y color de fondo verde.
*/

interface Grupo {
  nombre: string;
  año: number;
  activo: boolean;
  género: string;
}

const popRock = "🎵 Pop Rock";
const rock = "🎸 Rock";
const hardRock = "🤘 Hard Rock";
const clásica = "🎼 Clásica";

const estiloTitulo =
  "color: white; font-weight: bold; font-size: 18px; background-color: green;";

const GrupoA: Grupo = {
  nombre: "The Beatles",
  año: 1960,
  activo: true,
  género: popRock,
};

const GrupoB: Grupo = {
  nombre: "Queen",
  año: 1970,
  activo: false,
  género: rock,
};

const GrupoC: Grupo = {
  nombre: "AC DC",
  año: 1973,
  activo: true,
  género: hardRock,
};

const GrupoD: Grupo = {
  nombre: "Ludwig van Beethoven",
  año: 1770,
  activo: false,
  género: clásica,
};

const GrupoE: Grupo = {
  nombre: "The Rolling Stones",
  año: 1962,
  activo: true,
  género: rock,
};

console.log(
  `%c${GrupoA.nombre}%c / ${GrupoA.año} / Activo: ${GrupoA.activo} / ${GrupoA.género}`,
  estiloTitulo,
  ""
);

console.log(
  `%c${GrupoB.nombre}%c / ${GrupoB.año} / Activo: ${GrupoB.activo} / ${GrupoB.género}`,
  estiloTitulo,
  ""
);
console.log(
  `%c${GrupoC.nombre}%c / ${GrupoC.año} / Activo: ${GrupoC.activo} / ${GrupoC.género}`,
  estiloTitulo,
  ""
);
console.log(
  `%c${GrupoD.nombre}%c / ${GrupoD.año} / Activo: ${GrupoD.activo} / ${GrupoD.género}`,
  estiloTitulo,
  ""
);
console.log(
  `%c${GrupoE.nombre}%c / ${GrupoE.año} / Activo: ${GrupoE.activo} / ${GrupoE.género}`,
  estiloTitulo,
  ""
);
