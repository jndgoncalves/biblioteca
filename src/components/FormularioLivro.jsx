import { useState } from "react";

export default function FormularioLivro(props) {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [alreadyRead, setAlreadyRead] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        let id = new Date().getTime();

        let newLivro = {
            id,
            title,
            author,
            alreadyRead,
            imageUrl,
        }

        props.onFormSubmit(newLivro);
    }

    return (
        <section className="acrescentar">
            <form id="acrescentarForm" action="" autoComplete='off'>
                <div>
                    <label htmlFor="title">Titulo</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="author">Autor</label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="alreadyRead"
                        checked={alreadyRead}
                        onChange={(e) => setAlreadyRead(e.checked)}
                    />
                    <label htmlFor="alreadyRead">lido</label>
                </div>
                <div>
                    <label htmlFor="imageUrl">Imagem</label>
                    <input
                        type="text"
                        id="imageUrl"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                </div>
                <button onClick={handleSubmit}>Acrescentar livro</button>
            </form>
        </section>
    );
}