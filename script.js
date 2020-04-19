function enviaEmail(nomeFrom, mailFrom, foneFrom, mailSubject, mailBody) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "be2.site@gmail.com",
    Password: "Xuxu2019++",
    To: 'robertoabreu@outlook.com.br',
    From: mailFrom,
    Subject: mailSubject,
    Body: '<h1>Nova mensagem via COVID1-9 (Gama)</h1><br>' +
      'Interessado: <b>' + nomeFrom + '</b><br>' +
      'Contato: <b>' + foneFrom + '</b><br>' +
      '<h2>Mensagem:</h2>' +
      '<b>' + mailBody + '</b><br><br><br>'
  }).then(message => alert(message == 'OK'
    ? 'Mensagem enviada com sucesso! Aguarde contato.'
    : 'Erro ao enviar mensagem! Tente mais tarde.'));
    
   window.location = 'index.html'; 
}