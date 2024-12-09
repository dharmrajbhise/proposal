// Function to send email notification using fetch
async function sendProposalEmail() {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: 'f9a69c79-3a46-49fb-858e-fe3c1fba1f8a', // Replace with your Web3Forms access key
        subject: 'Marriage Proposal Response! 💍',
        message: `She said YES! 💍\n\nDate: ${new Date().toLocaleDateString()}\nTime: ${new Date().toLocaleTimeString()}`,
        from_name: 'Proposal Website',
      })
    });

    const result = await response.json();
    if (result.success) {
      console.log('Email notification sent successfully!');
    }
  } catch (error) {
    console.error('Failed to send email notification:', error);
  }
}