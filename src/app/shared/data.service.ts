import { Injectable } from '@angular/core';
import { Conciliador, Servicio, Testimonio } from './models';
@Injectable({ providedIn: 'root' })
export class DataService {
  conciliadores: Conciliador[] = [
    { id:1, nombre:'Dra. Lucía Paredes', especialidad:'Familiar', resumen:'Acuerdos parentales y alimentos.', foto:'assets/people/1.jpg', colegiatura:'CAL 123456', experiencia:12 },
    { id:2, nombre:'Dr. Mateo Rivas', especialidad:'Civil', resumen:'Propiedad y contratos.', foto:'assets/people/2.jpg', colegiatura:'CAL 654321', experiencia:10 },
    { id:3, nombre:'Dra. Ángela Díaz', especialidad:'Laboral', resumen:'Negociación colectiva.', foto:'assets/people/3.jpg', colegiatura:'CAL 111222', experiencia:9 },
    { id:4, nombre:'Dr. Bruno Campos', especialidad:'Empresarial', resumen:'Societario y comercial.', foto:'assets/people/4.jpg', colegiatura:'CAL 333444', experiencia:15 }
  ];
  servicios: Servicio[] = [
    { id:1, nombre:'Conciliación Familiar', descripcion:'Alimentos, tenencia, régimen de visitas.', icono:'👨‍👩‍👧', categoria:'Familiar' },
    { id:2, nombre:'Conciliación Civil', descripcion:'Propiedad, contratos, desalojos.', icono:'⚖️', categoria:'Civil' },
    { id:3, nombre:'Conciliación Laboral', descripcion:'Beneficios, despidos, hostigamiento.', icono:'💼', categoria:'Laboral' },
    { id:4, nombre:'Conciliación Empresarial', descripcion:'Socios, proveedores, cobranzas.', icono:'🏢', categoria:'Empresarial' }
  ];
  testimonios: Testimonio[] = [
    { id:1, nombre:'María & José', texto:'Acuerdo de alimentos en una semana. Mucha humanidad.', ambito:'Familiar' },
    { id:2, nombre:'Constructora Andina', texto:'Mediación efectiva que evitó juicio.', ambito:'Empresarial' },
    { id:3, nombre:'Rosa H.', texto:'Acuerdo justo con mi ex empleador.', ambito:'Laboral' }
  ];
  getConciliadores(){ return this.conciliadores; }
  getServicios(){ return this.servicios; }
  getTestimonios(){ return this.testimonios; }
}
