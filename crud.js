var Fila = null
function onSubmit() {
        let DataForm = Leer()
        if (Fila == null){
            InsertarDatos(DataForm)
        } else{
            Actualizar(DataForm)
            Vaciar()
    }
}
function Leer() {
    let DataForm = {}
    DataForm["rut"] = document.getElementById("rut").value
    DataForm["nom"] = document.getElementById("nom").value
    DataForm["sex"] = document.getElementById("sex").value
    DataForm["car"] = document.getElementById("car").value
    return DataForm
}
function InsertarDatos(data) {
    let table = document.getElementById("tabla").getElementsByTagName('tbody')[0]
    let Fila = table.insertRow(table.length)
    columna1 = Fila.insertCell(0).innerHTML = data.rut
    columna2 = Fila.insertCell(1).innerHTML = data.nom
    columna3 = Fila.insertCell(2).innerHTML = data.sex
    columna3 = Fila.insertCell(3).innerHTML = data.car
    columna3 = Fila.insertCell(4).innerHTML = `<input class="submit" type="button" onClick="Editarr(this)" value="Editar" >
                                            <input class="submit" type="button" onClick="Borrarr(this)" value="Borrar" >`
    document.getElementById("rut").focus()
    Vaciar()
}
function Vaciar() {
    document.getElementById("rut").value = ""
    document.getElementById("nom").value = ""
    document.getElementById("sex").value = ""
    document.getElementById("car").value = ""
    Fila = null
}
function Editarr(td) {
    Fila = td.parentElement.parentElement
    document.getElementById("rut").value = Fila.cells[0].innerHTML
    document.getElementById("nom").value = Fila.cells[1].innerHTML
    document.getElementById("sex").value = Fila.cells[2].innerHTML
    document.getElementById("car").value = Fila.cells[3].innerHTML
}
function Actualizar(DataForm) {
    Fila.cells[0].innerHTML = DataForm.rut
    Fila.cells[1].innerHTML = DataForm.nom
    Fila.cells[2].innerHTML = DataForm.sex
    Fila.cells[3].innerHTML = DataForm.car
    document.getElementById("rut").focus()
}
function Borrarr(td) {
    if (confirm('¿Seguro de borrar este registro?')) {
        row = td.parentElement.parentElement
        document.getElementById("tabla").deleteRow(row.rowIndex)
        Vaciar()
    }
}
