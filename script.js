// Define an array of cryptocurrencies
const cryptocurrencies = [
  { name: 'Bitcoin', price: 32347.12 },
  { name: 'Ethereum', price: 1957.34 },
  { name: 'Cardano', price: 1.23 },
  // Add more cryptocurrencies as needed
];

// Function to display the crypto list
function displayCryptoList() {
  const cryptoList = document.getElementById('cryptoList');

  // Clear the existing content of the crypto list
  cryptoList.innerHTML = '';

  // Create and append crypto item elements for each cryptocurrency
  cryptocurrencies.forEach(crypto => {
    const cryptoElement = document.createElement('div');
    cryptoElement.classList.add('crypto-item');
    cryptoElement.textContent = `${crypto.name}: $${crypto.price.toFixed(2)}`;

    cryptoList.appendChild(cryptoElement);
  });
}

// Call the displayCryptoList function
displayCryptoList();
