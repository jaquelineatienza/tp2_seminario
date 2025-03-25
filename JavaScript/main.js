import promptSync from "prompt-sync";
const prompt = promptSync();
let datos = [];
const userPhones = [];

let name = prompt("ingrese su nombre");
let lastName = prompt("ingrese su apellido");
let phone = prompt("ingrese su numero de telefono");
let dni = prompt("ingrese su numero de dni");

let asnwer = prompt("¿Desea ingresar otro numero de telefono?(si/no)")
  .toLowerCase()
  .trim();

while (asnwer === "si") {
  let phone = prompt("ingrese su numero de telefono");
  userPhones.push(phone);

  asnwer = prompt(
    "¿Desea ingresar otro numero de telefono?(si/no)"
  ).toLowerCase();
}
userPhones.push(phone);
datos.push(lastName, name, userPhones, dni);
console.log(datos);
