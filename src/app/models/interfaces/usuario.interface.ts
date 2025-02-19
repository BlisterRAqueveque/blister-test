export interface Usuario {
  id?: string;
  nombre: string;
  apellido: string;
}

export interface Login {
  usuario: string;
  contrasenia: string;
}
