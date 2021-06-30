
const htmlGenerator = (employeesArray) => {

    const openHTML =
    ` <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.7/css/all.css"></link>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="../dist/style.css">
        <title>My Team</title>
    </head>
    <body>
    
    <header>My Team</header>
    
    <section>
    `

    let bodyHTML = '';

    employeesArray.forEach(el => {

      if (el.position === 'Manager') {
        bodyHTML += `
            <div class="card">
                <h5>${el.name}<h5>
                <p>                
                    <span class="icon">
                    <i class="fa-solid fa-clipboard-check"></i>
                    </span>${el.position}</p>
                <p>ID: ${el.id}</p>
                <p>Email: ${el.email}</p>
                <p>Office: ${el.office}</p>
            </div>`
      } else if (el.position === 'Engineer') {
        bodyHTML += `
            <div class="card">
                <h5>${el.name}<h5>
                <p>${el.position}</p>
                <p>ID: ${el.id}</p>
                <p>Email: ${el.email}</p>
                <p>Github: ${el.github}</p>

            </div>`
      } else if (el.position === 'Intern') {
        bodyHTML += `
            <div class="card">
                <h5>${el.name}<h5>
                <p>${el.position}</p>
                <p>ID: ${el.id}</p>
                <p>Email: ${el.email}</p>
                <p>School: ${el.school}</p>

            </div>`
        }
    })



    const closeHTML = `
    </section>
    </body>
    </html>`

    // concatenate the strings to form the whole page

 return openHTML + bodyHTML + closeHTML;

}

module.exports = htmlGenerator

