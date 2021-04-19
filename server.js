const http = require('http');
const fs = require('fs');
const fetch = require('node-fetch');
const path = require('path');
const p = path.join(
    path.dirname(process.mainModule.filename),
    'result',
    'post.json'
);

const server = (res, req) => {
    fetch("http://jsonplaceholder.typicode.com/posts")
        .then(response => response.json()) 
        // .then((response) => { 
        //     console.log(response.json());
        //     const jsonContent = JSON.stringify(response.json());
        //     fs.writeFile(p, jsonContent, (err) => {
        //         console.log(err);
        //     });
        // })
        .then(json => {
            
            const jsonContent = JSON.stringify(json);
            fs.writeFile(p, jsonContent, (err) => {
                console.log(err);
            });

        })
        .catch((err) => console.log(err));

    req.end('success')

}

http.createServer(server).listen(4000, () => console.log('running'));