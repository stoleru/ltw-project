let fs = require('fs')
import path from 'path'

export default function handler(req, res) {
    if(req.method == "POST") {
        let slug = string_to_slug(req.body.title)
        const notesDirectory = path.join(process.cwd(), 'notes')
        const fileName = notesDirectory + "/" + slug + ".md"
        const today = new Date()
        const dateR = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate()
        let data = 
`---
title: ${req.body.title}
date: ${dateR}
---

${req.body.text}`

        fs.writeFile(fileName, data, err => {
            if(err) {
                res.status(400).json({ status: 'Error writing file ...' })        
                return
            }
        })
        
        res.status(200).json({ status: 'Done' })
    } else {
        res.status(200).json({ name: 'Nothing here ...' })
    }
    
  }
  


  function string_to_slug (str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
  
    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
}