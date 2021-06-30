
const htmlGenerator = (employeesArray) => {

    const openHTML =
    ` <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="../dist/style.css">
        <title>Document</title>
    </head>
    <body>`

    let bodyHTML = '';

    employeesArray.forEach(el => {

      if (el.position === 'manager') {
        bodyHTML += `
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-4">
                        <h3>Name: ${el.name}<h3>
                        <p>ID: ${el.id}</p>
                        <p>Email: ${el.email}</p>
                        <p>Position: ${el.position}</p>
                    </div>
                </div>
            </div>`
      } else if (el.position === 'engineer') {
        bodyHTML += `
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-4">
                        <h3>Name: ${el.name}<h3>
                        <p>ID: ${el.id}</p>
                        <p>Email: ${el.email}</p>
                        <p>Position: ${el.position}</p>
                    </div>
                </div>
            </div>`
      } else if (el.position === 'intern') {
        bodyHTML += `
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-4">
                        <h3>Name: ${el.name}<h3>
                        <p>ID: ${el.id}</p>
                        <p>Email: ${el.email}</p>
                        <p>Position: ${el.position}</p>
                    </div>
                </div>
            </div>`
        }
    })



    const closeHTML = `
    </body>
    </html>`

    // concatenate the strings to form the whole page

 return openHTML + bodyHTML + closeHTML;

}

module.exports = htmlGenerator

