
import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Spinners from "./Spinners";
import { ReactSortable } from "react-sortablejs";

export default function FormProducto({
    _id,
    nombre: existingNombre,
    categoria: existingCategoria,
    marca: existingMarca,
    descripcion: existingDescripcion,
    precio: existingPrecio,
    imagen: existingImagen
}) {
    const [nombre, setNombre] = useState(existingNombre || "");
    const [categoria, setCategoria] = useState(existingCategoria || '');
    const [categorias, setCategorias] = useState([]);
    const [precio, setPrecio] = useState(existingPrecio || "");
    const [descripcion, setDescripcion] = useState(existingDescripcion || "");
    const [imagen, setImagen] = useState(existingImagen || []);
    const [marca, setMarca] = useState(existingMarca || "");
    const [marcas, setMarcas] = useState([]);
    const [isUploading, setIsUploading] = useState(false);

    const [irProductos, setIrProductos] = useState(false);
    const router = useRouter();

    useEffect(() => {
        axios.get('/api/categoria').then(res => {
            setCategorias(res.data);
        })
    }, [])

    useEffect(() => {
        axios.get('/api/marca').then(res => {
            setMarcas(res.data);
        })
    }, [])

    //console.log({ _id })


    async function subirFoto(ev) {
        const files = ev.target?.files;
        if (files?.length > 0) {
            setIsUploading(true);
            const data = new FormData();
            for (const file of files) {
                data.append('file', file);
            }
            const res = await axios.post('/api/upload', data);
            console.log(res.data)
            setImagen(oldImagen => {
                return [...oldImagen, ...res.data.links];
            });
            setIsUploading(false);
        }
    }

    async function saveProduct(ev) {
        ev.preventDefault();

        const data = { nombre, categoria, descripcion, precio, imagen, marca};
        if (_id) {
            //actualizar
            await axios.put('/api/productos', { ...data, _id })
        } else {
            //crear
            await axios.post('/api/productos', data);
        }
        setIrProductos(true);
    }
    

    if (irProductos) {
        router.push('/productos')
    }

    function updateImagesOrder(imagen) {
        setImagen(imagen)
    }

    return (
        <form onSubmit={saveProduct}>
            <label>Nombre</label>
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(ev) => setNombre(ev.target.value)}
            ></input>

            <label>Categoria</label>
            <select value={categoria} onChange={ev => setCategoria(ev.target.value)}>
                <option value="">Sin Categoria</option>
                {categorias.length > 0 && categorias.map(c => (
                    <option value={c._id}>{c.nombre}</option>
                ))}
            </select>

            <label>Marca</label>
            <select value={marca} onChange={ev => setMarca(ev.target.value)}>
                <option value="">Sin Marca</option>
                {marcas.length > 0 && marcas.map(m => (
                    <option value={m._id}>{m.nombre}</option>
                ))}
            </select>

            <label>Descripcion</label>
            <textarea
                placeholder="Descripcion"
                value={descripcion}
                onChange={(ev) => setDescripcion(ev.target.value)}
            ></textarea>

            <label>Precio</label>
            <input type="number" placeholder="Precio" value={precio} onChange={(ev) => setPrecio(ev.target.value)}></input>

            <label>Imagen</label>
            <div className="mb-2 flex flex-wrap gap-2">
                <ReactSortable
                    list={imagen}
                    className="flex flex-wrap gap-1"
                    setList={updateImagesOrder}>

                    {!!imagen?.length && imagen.map(link => (
                        <div key={link}>
                            <img src={link} alt="Producto" className="h-44  rounded-lg" />
                        </div>
                    ))}
                </ReactSortable>
                {isUploading && (
                    <div className="h-44 p-1 bg-gray-200 flex items-center">
                        <Spinners></Spinners>
                    </div>
                )

                }
                <label className="w-44 h-44 cursor-pointer border text-center flex items-center  rounded-lg justify-center bg-gray-200 mb-2 text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    Imagen
                    <input type="file" className="hidden" onChange={subirFoto}></input>
                </label>
                {!imagen?.length && (
                    <div>No hay imagen en este producto</div>
                )}
            </div>

            <button className="btn-primary" type="submit">
                Guardar
            </button>
        </form>
    );
}


