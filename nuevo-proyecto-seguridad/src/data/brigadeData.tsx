import {RoleStyle, BrigadistaRoleKey} from '@/types/brigade';
import {Shield, HeartPulse, DoorOpen, BellElectric} from 'lucide-react';

export const roleStyles: Record<BrigadistaRoleKey, RoleStyle> = {
    Lider_de_Emergencia: {gradient: 'from-purple-500 to-indigo-600', icon: <Shield/>, textColor: 'text-purple-600'},
    comite_de_crisis: {gradient: 'from-cyan-400 to-blue-500', icon: <HeartPulse/>, textColor: 'text-blue-500'},
    lider_de_brigada: {gradient: 'from-red-500 to-orange-500', icon: <BellElectric/>, textColor: 'text-red-500'},
    brigadista: {gradient: 'from-red-500 to-orange-500', icon: <BellElectric/>, textColor: 'text-red-500'},
    lider_evacuacion: {gradient: 'from-green-500 to-emerald-500', icon: <DoorOpen/>, textColor: 'text-green-600'},
    coordinador_de_evacuacion: {
        gradient: 'from-green-500 to-emerald-500',
        icon: <DoorOpen/>,
        textColor: 'text-green-600'
    },
};