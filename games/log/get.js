async function get() {
    var user = document.getElementById("user").value
    var pass = document.getElementById("pass").value   
    var data = await $.get("http://localhost:5501/get.js")
    console.log(data)
    var d = data.responseText
    window.alert(d)
}