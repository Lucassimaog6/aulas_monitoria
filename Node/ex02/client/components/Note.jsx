export default function Note({ title, content }) {
    return (
        <div className="bg-green-100 p-4 m-4 rounded-xl">
            <h2 className="text-2xl">{title}</h2>
            <p>{content}</p>
        </div>
    )
}