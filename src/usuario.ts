export class usuario {
  public id: number;
  public nombre: string;
  public profesion: string;

  constructor(id: number, nombre: string, profesion: string) {
    this.id = id;
    this.nombre = nombre;
    this.profesion = profesion;
  }
}
