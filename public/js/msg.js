let send = () => {
    let text = document.getElementById("text");
    
    let ref = firebase.database().ref('conect-chat');
    let key = ref.push().key;

    let msg = {
        msg : text.value,
        key : key
    }
    ref.child(key).set(msg);
    text.value = "";
}

firebase.database().ref("conect-chat").on('child_added', (data) => {
    let msgArea = document.getElementById("messages");
    let alert = document.createElement("div");
    alert.setAttribute('class', 'alert alert-primary');
    alert.setAttribute('role', 'alert');

    let alertText = document.createTextNode(data.val().value);

    alert.appendChild(alertText);
    msgArea.appendChild(alert);
    console.log(alert);
})