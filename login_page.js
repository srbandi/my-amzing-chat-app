function login(){

    var username = document.getElementById("user_name").value;
    localStorage.setItem("username",username);
    window.location="sonu_room.html";

}