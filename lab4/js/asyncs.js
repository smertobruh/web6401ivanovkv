document.getElementById("load-btn").addEventListener("click", async (event) => {
    try {
        let responce = await fetch("http://localhost:8000/f90-table", {
            method: "GET"
        });
        if (!responce.ok) {
            throw new Error(`Произошла ошибка: ${responce.status}`);
        }
        let data = await responce.json();
        fillTable(data["data"]);
    } catch(err) {
        alert(err);
    }
});

function fillTable(data) {
    let table = document.getElementById("f90-table");
    let rows = table.rows;
    for (let i = 0; i < rows.length; i++) {
        let ceils = rows[i].children;
        console.log(rows[i].className);
        ceils[1].textContent = data[0][rows[i].className];
    }
}