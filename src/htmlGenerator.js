
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
                <p>&#128203 ${el.position}</p>
                <p>ID: ${el.id}</p>
                <p>Email: <a href="mailto:${el.email}">${el.email}</a></p>
                <p>Office: ${el.office}</p>
            </div>`
      } else if (el.position === 'Engineer') {
        bodyHTML += `
            <div class="card">
                <h5>${el.name}<h5>
                <p>&#128187 ${el.position}</p>
                <p>ID: ${el.id}</p>
                <p>Email: <a href="mailto:${el.email}">${el.email}</a></p>
                <p>Github: <a href="https://github.com/${el.username}" target="_blank">${el.username}</a></p>

            </div>`
      } else if (el.position === 'Intern') {
        bodyHTML += `
            <div class="card">
                <h5>${el.name}<h5>
                <p>&#127979 ${el.position}</p>
                <p>ID: ${el.id}</p>
                <p>Email: <a href="mailto:${el.email}">${el.email}</a></p>
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

