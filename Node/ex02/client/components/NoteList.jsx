import Note from "./Note"

export default function NoteList({ notes }) {
    return (
        <div className="flex flex-col justify-center">
            {notes.map(note => <Note key={note.id} title={note.title} content={note.content} />)}
        </div>
    )
}