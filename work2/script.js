document.getElementById('loginbtn').addEventListener('click',  function(event){
    event.preventDefault(); 
    
    const Uname = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const rememberme = document.getElementById('check').value;
    
    console.log('Credential', {
        username: Uname,
        password: pass,
        remember: rememberme
    })
})