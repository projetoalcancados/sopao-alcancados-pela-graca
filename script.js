document.getElementById('donation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = document.getElementById('donation-amount').value;
    if(amount) {
        alert(`Você doou R$ ${amount}! Agora vamos gerar o QR Code Pix para sua doação.`);
        // Aqui você pode fazer a chamada para a API do Pix
    } else {
        alert("Por favor, insira um valor.");
    }
});
