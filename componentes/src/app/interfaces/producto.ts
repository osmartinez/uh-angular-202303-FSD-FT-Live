export interface Producto {
    codigo: string;
    nombre: string;
    precio: number;
    stock: number;
    img: string;
    comprado: boolean;
    categorias: string[];
}
