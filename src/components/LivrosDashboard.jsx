import ListaLivros from "./ListaLivros"
import { data } from '../data'
import { useState } from "react";
import FormularioLivro from "./FormularioLivro";

export default function LivrosDashboard() {
    const [livros, setLivros] = useState(data.books)


    

    const createLivro = () => {

    }

    const handleDelete = (id) => {
        console.log('Livro a apagar', id);
        setLivros(livros.filter(l => l.id !== id));
    }


    const handleAdd = () => {
        console.log("Livro a adicionar");
    }

    return (
        <div>
            <FormularioLivro
                onAdd={handleAdd}
            />
            <ListaLivros
                livros={livros}
                onDelete={handleDelete}
            />
        </div>
    )
}