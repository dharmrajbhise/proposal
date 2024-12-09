function handleResponse(response) {
    const proposalContent = document.getElementById('proposal-content');
    const responseContent = document.getElementById('response-content');
    
    proposalContent.classList.add('fade-out');
    
    setTimeout(() => {
        proposalContent.classList.add('d-none');
        responseContent.classList.remove('d-none');
        
        if (response === 'yes') {
            responseContent.innerHTML = `
                <div class="fade-in">
                    <i class="proposal-icon pulse mb-4"></i>
                    <h3 class="display-5 text-primary mb-4">You've Made Me the Happiest Person Alive! 💑</h3>
                    <p class="lead">This is the beginning of our forever. I love you! ❤️</p>
                </div>
            `;
            // Send email notification when she says yes
            sendProposalEmail();
        } else {
            responseContent.innerHTML = `
                <div class="fade-in">
                    <p class="lead mb-4">Take all the time you need. My heart will wait for you. 💝</p>
                    <button class="btn btn-lg btn-primary" onclick="resetProposal()">
                        Let me ask again
                    </button>
                </div>
            `;
        }
    }, 600);
}

function resetProposal() {
    const proposalContent = document.getElementById('proposal-content');
    const responseContent = document.getElementById('response-content');
    
    responseContent.classList.add('d-none');
    proposalContent.classList.remove('d-none', 'fade-out');
}