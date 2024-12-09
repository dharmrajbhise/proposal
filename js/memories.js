const memories = [
    {
        date: 'First Meeting',
        location: 'The Coffee Shop',
        description: 'The day our eyes met, and time stood still.',
        image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80'
    },
    {
        date: 'First Date',
        location: 'Central Park',
        description: 'A perfect evening under the stars.',
        image: 'https://images.unsplash.com/photo-1496360166961-10a51d5f367a?auto=format&fit=crop&q=80'
    },
    {
        date: 'First Dance',
        location: 'Summer Festival',
        description: 'When we danced like no one was watching.',
        image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80'
    },
    {
        date: 'First Trip',
        location: 'Beach Getaway',
        description: 'Creating memories by the ocean.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80'
    }
];

function createMemoryCards() {
    const container = document.getElementById('memories-container');
    
    memories.forEach(memory => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-3';
        
        col.innerHTML = `
            <div class="memory-card shadow">
                <img src="${memory.image}" alt="${memory.date}" class="memory-image w-100">
                <div class="memory-content">
                    <h3 class="h5">${memory.date}</h3>
                    <p class="text-muted mb-2">${memory.location}</p>
                    <p class="mb-0">${memory.description}</p>
                </div>
            </div>
        `;
        
        container.appendChild(col);
    });
}