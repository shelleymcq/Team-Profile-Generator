
const htmlGenerator = (employeesArray) => {

    const openHTML =
    ` <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <!-- only keep style.css if everything can't be done in bootstrap -->
        <link rel="stylesheet" href="../dist/style.css">
        <title>Document</title>
    </head>
    <body>`

    let bodyHTML = '';

    employeesArray.forEach(el => {
      //  name, id, email
      bodyHTML += `
        <div>
            <h3>Name: ${el.name}<h3>
            <p>ID: ${el.id}</p>
            <p>Email: ${el.email}</p>
        </div>`
    })


    const closingHTML = `
    </body>
    </html>`


 return openHTML + bodyHTML + closingHTML;

}

module.exports = htmlGenerator

