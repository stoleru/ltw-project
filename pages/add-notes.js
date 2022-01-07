import React, { useState } from 'react'
import { useRouter } from 'next/router'

export default function Notes() {
    const router = useRouter()
    const [ formData, setFormData ] = useState({
        title: "",
        text: ""
    })
    const saveNote = (e) => {
        e.preventDefault()
        fetch('/api/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(response => {
            if(response.status == "Done") {
                // redirect
                router.push("/")
            } else {
                alert("Error!")
            }
        })
    }

    const inputChange = (e) => {
        let d = formData;
        d[e.target.name] = e.target.value

        setFormData(d)
    }
    return (
        <div className="notes">
            <h1>Add note</h1>
            <form className="add-form" onSubmit={saveNote}>
                <input defaultValue={formData.title} type="text" placeholder="Note title ..." autoFocus required onChange={inputChange} name="title" />
                <textarea required onChange={inputChange} name="text" defaultValue={formData.text} placeholder="Body of note ..."></textarea>
                <button>Save</button>
            </form>
        </div>
        
    )
}

