import Livro from "./Livro";

export default function ListaLivros(props) {

    return (
        <section className='grid'>
            {
                props.livros.map(l => (
                    <Livro 
                    livro={l} 
                    key={l.id} 
                    onDelete={props.onDelete}
                    />
                ))
            }
        </section>
    )


}