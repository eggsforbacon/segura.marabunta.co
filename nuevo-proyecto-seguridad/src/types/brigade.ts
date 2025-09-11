
import { ReactElement } from 'react';

export interface Brigadista {
  id: number;
  nombre: string;
  departamento: string;
  rol: 'LIDER DE LA EMERGENCIA' | 'COMITÉ DE CRISIS' | 'LIDER DE LA BRIGADA' | 'LÍDERE DE EVACUACIÓN' | 'BRIGADISTA' | 'COORDINADOR DE EVACUACIÓN';
  habilidades: string;
  estado: 'Activo' | 'No Activo';
  foto: {
    id: number;
    url: string;
  };
}


export type BrigadistaRoleKey = 'Lider_de_Emergencia' | 'comite_de_crisis' | 'lider_de_brigada' | 'brigadista' | 'lider_evacuacion' | 'coordinador_de_evacuacion';

export interface RoleStyle {
  gradient: string;
  icon: ReactElement;
  textColor: string;
}