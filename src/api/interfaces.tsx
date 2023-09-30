export interface LoginData {
	nombreUsuario: string;
	claveUsuario: string;
}

export interface User {
	id: number;
	idEmpresa: number;
	nombreUsuario: string;
	nombrePersonal: string;
	telefono: string;
	idZona: number;
	direccion: null;
	token: string;
	menues: Array<Menu>;
}

export interface Menu {
	idmenu: number;
	nombremenu: string;
	icono: string;
	idpermiso: number;
	permiso: string;
}
