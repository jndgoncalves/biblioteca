import ListaLivros from "./ListaLivros"
import { data } from '../data'
import { useState } from "react";

export default function LivrosDashboard() {

    const [livros, setLivros] = useState(data.books)

    const handleDelete = (id) => {
        console.log('Livro a apagar', id);

        setLivros(livros.filter(l => l.id !== id));

    }

    return (
        <div>
            <ListaLivros
                livros={livros}
                onDelete={handleDelete}
            />
        </div>
    )

}