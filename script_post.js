
document.addEventListener('DOMContentLoaded', send_mail)
function send_mail() {
  document.getElementById('postSubmit').addEventListener('click', function(event){
    /* send the email*/
    var req = new XMLHttpRequest();
    var payload = { dataToSend: null };
    payload.dataToSend = document.getElementById('email').value;
    /*req.open('POST','http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php', false);*/
    req.open('POST','http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php', false);
    req.send(JSON.stringify(payload.dataToSend));
    var response = JSON.parse(req.responseText);
    console.log(response);

    document.getElementById('result').textContent = response.data;
    event.preventDefault();
  })
}
