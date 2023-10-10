export interface Account {
    token: string;
}

export interface LoginData {
    nombreUsuario: string;
    claveUsuario: string;
}

export interface PasswordData {
    clave: string;
    confirmarClave: string;
}

export interface Profile {
    id: number;
    idEmpresa: number;
    nombreUsuario: string;
    nombrePersonal: string;
    email: string;
    telefono: string;
    idZona: number;
    zona: string;
    direccion: string;
    idRol: number;
    estado: boolean;
    menues: Array<Menu>;
}

export interface MenuItem {
    idmenu: number;
    nombremenu: string;
    icono: string;
    idpermiso: number;
    permiso: string;
}

export interface Menu extends MenuItem {
    children: Array<MenuItem>
}

export interface User {
    idusuario: number;
    idsocio: number;
    nombreempresa: string;
    email: string | null;
    telefono: number;
    direccion: string | null;
    nombreusuario: string;
    estado: boolean;
}

export interface CreateUserData {
    idEmpresa: number;
    nombrePersonal: string;
    email: string;
    telefono: string;
    idZona: number;
    direccion: string;
    nombreUsuario: string;
    claveUsuario: string;
    idRol: number;
    estado: boolean;
}

export interface UpdateUserData {
    id: number;
    idEmpresa?: number;
    nombrePersonal?: string;
    email?: string;
    telefono?: string;
    idZona?: number;
    zona?: number;
    direccion?: string;
    nombreUsuario?: string;
    claveUsuario?: string;
    idRol?: number;
    estado?: boolean;
}

export interface Role {
    id: number;
    descripcion: string;
}

export interface ApiError {
    error: string;
    message: string;
    statusCode: number;
}