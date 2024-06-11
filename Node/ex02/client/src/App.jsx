import { useEffect, useRef, useState } from "react";

import Header from "../components/Header"
import NoteList from "../components/NoteList"

export default function App() {

    const [notes, setNotes] = useState([]);

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        fetch('http://localhost:3000/notes')
            .then(response => response.json())
            .then(data => setNotes(data))
    }, [])

    async function createNote() {
        console.log(content)

        const response = await fetch('http://localhost:3000/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content: content }),
        })

        const data = await response.json()
        if (response.ok) {
            console.log(data)
            setNotes([...notes, data])
        } else {
            alert(data.error)
        }
    }

    return (
        <>
            <Header />
            <div className="flex flex-col bg-slate-200">
                <input
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    type="text" className="p-2 m-4 rounded-xl" placeholder="Título" />
                <textarea
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                    className="p-2 m-4 rounded-xl" placeholder="Descrição" />
                <button onClick={() => createNote()} className="bg-green-100 p-2 m-4 rounded-xl">Nova Nota</button>
            </div>
            <NoteList notes={notes} />
        </>
    )
}