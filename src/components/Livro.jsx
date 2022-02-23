export default function Livro(props) {

    const { id, title, author, alreadyRead, description, imageUrl } = props.livro;

    const handleDelete = () => {
        props.onDelete(id);
    }

    return (
        <article>
            <h1>{title}</h1>
            <h2>{author}</h2>
            <img src={`livros/${imageUrl}`} alt={title} />
            <p> Already Read: {alreadyRead ? '✅' : '❌'}</p>
            <button onClick={handleDelete}>Delete</button>
        </article>
    );

}
