export interface Conciliador { id:number; nombre:string; especialidad:'Familiar'|'Civil'|'Laboral'|'Empresarial'; resumen:string; foto:string; colegiatura:string; experiencia:number; }
export interface Servicio { id:number; nombre:string; descripcion:string; icono:string; categoria:'Familiar'|'Civil'|'Laboral'|'Empresarial'; }
export interface Testimonio { id:number; nombre:string; texto:string; ambito:string; }
