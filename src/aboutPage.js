function createAboutHeader() {
    const header = document.createElement('div');
    header.className = 'about-header';

    const heading = document.createElement('h1');
    heading.textContent = 'Our Story';
    heading.className = 'about-heading';

    const subheading = document.createElement('p');
    subheading.className = 'about-subheading';
    subheading.textContent = 'A Culinary Journey of Passion and Excellence';

    header.appendChild(heading);
    header.appendChild(subheading);

    return header;
}

function createHistorySection() {
    const historySection = document.createElement('div');
    historySection.className = 'history-section';

    const historyHeading = document.createElement('h2');
    historyHeading.textContent = 'Our History';

    const historyImage = document.createElement('img');
    historyImage.src = 'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80';
    historyImage.alt = 'Restaurant history';
    historyImage.className = 'history-image';

    const historyText = document.createElement('p');
    historyText.textContent = 'Founded in 2010, Ode to Odin began as a small family-owned restaurant with a big dream: to create an unforgettable dining experience that celebrates the art of fine cuisine. What started as a modest establishment has grown into one of the city\'s most beloved culinary destinations.';

    const historyText2 = document.createElement('p');
    historyText2.textContent = 'Our journey has been marked by continuous innovation, a commitment to quality, and an unwavering dedication to our guests. Over the years, we\'ve expanded our menu, refined our techniques, and created a warm, inviting atmosphere where food lovers can gather and create lasting memories.';

    historySection.appendChild(historyHeading);
    historySection.appendChild(historyImage);
    historySection.appendChild(historyText);
    historySection.appendChild(historyText2);

    return historySection;
}

function createTeamSection() {
    const teamSection = document.createElement('div');
    teamSection.className = 'team-section';

    const teamHeading = document.createElement('h2');
    teamHeading.textContent = 'Meet Our Team';

    const teamDescription = document.createElement('p');
    teamDescription.textContent = 'Our talented team of chefs, sommeliers, and service staff work together to create an exceptional dining experience for every guest.';

    const teamMembers = document.createElement('div');
    teamMembers.className = 'team-members';

    const members = [
        {
            name: 'Chef Marcus Johnson',
            role: 'Executive Chef',
            bio: 'With over 15 years of culinary experience, Chef Marcus brings creativity and precision to every dish.'
        },
        {
            name: 'Sarah Chen',
            role: 'Pastry Chef',
            bio: 'Sarah\'s passion for desserts has earned her recognition in numerous culinary competitions.'
        },
        {
            name: 'David Rodriguez',
            role: 'Sommelier',
            bio: 'David curates our extensive wine selection, ensuring the perfect pairing for every meal.'
        }
    ];

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'team-member';

        const memberName = document.createElement('h3');
        memberName.textContent = member.name;

        const memberRole = document.createElement('p');
        memberRole.className = 'member-role';
        memberRole.textContent = member.role;

        const memberBio = document.createElement('p');
        memberBio.className = 'member-bio';
        memberBio.textContent = member.bio;

        memberCard.appendChild(memberName);
        memberCard.appendChild(memberRole);
        memberCard.appendChild(memberBio);
        teamMembers.appendChild(memberCard);
    });

    teamSection.appendChild(teamHeading);
    teamSection.appendChild(teamDescription);
    teamSection.appendChild(teamMembers);

    return teamSection;
}

function createValuesSection() {
    const valuesSection = document.createElement('div');
    valuesSection.className = 'values-section';

    const valuesHeading = document.createElement('h2');
    valuesHeading.textContent = 'Our Values';

    const valuesContainer = document.createElement('div');
    valuesContainer.className = 'values-container';

    const values = [
        {
            title: 'Quality',
            description: 'We source only the finest ingredients and maintain the highest standards in food preparation.'
        },
        {
            title: 'Sustainability',
            description: 'We are committed to environmentally responsible practices, from sourcing to waste management.'
        },
        {
            title: 'Community',
            description: 'We believe in giving back to our community and supporting local producers and artisans.'
        },
        {
            title: 'Innovation',
            description: 'We continuously explore new culinary techniques and flavors to surprise and delight our guests.'
        }
    ];

    values.forEach(value => {
        const valueCard = document.createElement('div');
        valueCard.className = 'value-card';

        const valueTitle = document.createElement('h3');
        valueTitle.textContent = value.title;

        const valueDescription = document.createElement('p');
        valueDescription.textContent = value.description;

        valueCard.appendChild(valueTitle);
        valueCard.appendChild(valueDescription);
        valuesContainer.appendChild(valueCard);
    });

    valuesSection.appendChild(valuesHeading);
    valuesSection.appendChild(valuesContainer);

    return valuesSection;
}

function loadAboutContent() {
    const content = document.createElement('div');
    content.className = 'about-content';

    content.appendChild(createAboutHeader());
    content.appendChild(createHistorySection());
    content.appendChild(createTeamSection());
    content.appendChild(createValuesSection());

    return content;
}

export default loadAboutContent; 