function createHeroSection() {
    const hero = document.createElement('div');
    hero.className = 'hero';

    const heroImage = document.createElement('img');
    heroImage.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80';
    heroImage.alt = 'Restaurant interior';
    heroImage.className = 'hero-image';

    const heroText = document.createElement('div');
    heroText.className = 'hero-text';

    const heading = document.createElement('h1');
    heading.textContent = 'Ode to Odin';

    const tagline = document.createElement('p');
    tagline.className = 'tagline';
    tagline.textContent = 'Where Culinary Excellence Meets Unforgettable Moments';

    heroText.appendChild(heading);
    heroText.appendChild(tagline);
    hero.appendChild(heroImage);
    hero.appendChild(heroText);

    return hero;
}

function createAboutSection() {
    const aboutSection = document.createElement('div');
    aboutSection.className = 'about-section';

    const welcomeHeading = document.createElement('h2');
    welcomeHeading.textContent = 'Welcome to Ode to Odin';

    const paragraph1 = document.createElement('p');
    paragraph1.textContent = 'Nestled in the heart of the city, Ode to Odin offers an extraordinary dining experience that tantalizes your taste buds and creates lasting memories. Our passionate chefs craft each dish with precision, using only the finest locally-sourced ingredients to bring you flavors that dance on your palate.';

    const paragraph2 = document.createElement('p');
    paragraph2.textContent = 'Whether you\'re celebrating a special occasion or simply enjoying a night out, our warm atmosphere and attentive service ensure that every visit is exceptional. From our signature dishes to our carefully curated wine selection, we invite you to indulge in a culinary journey that will leave you craving more.';

    const featuredItems = document.createElement('div');
    featuredItems.className = 'featured-items';

    const features = [
        {
            title: 'Seasonal Menu',
            description: 'Our menu changes with the seasons, ensuring the freshest ingredients and most innovative flavors.'
        },
        {
            title: 'Private Events',
            description: 'Host your special occasions in our elegant private dining rooms with customized menus.'
        },
        {
            title: 'Wine Cellar',
            description: 'Explore our extensive collection of fine wines, carefully selected to complement our dishes.'
        }
    ];

    features.forEach(feature => {
        const featureDiv = document.createElement('div');
        featureDiv.className = 'feature';

        const featureTitle = document.createElement('h3');
        featureTitle.textContent = feature.title;

        const featureDesc = document.createElement('p');
        featureDesc.textContent = feature.description;

        featureDiv.appendChild(featureTitle);
        featureDiv.appendChild(featureDesc);
        featuredItems.appendChild(featureDiv);
    });

    aboutSection.appendChild(welcomeHeading);
    aboutSection.appendChild(paragraph1);
    aboutSection.appendChild(paragraph2);
    aboutSection.appendChild(featuredItems);

    return aboutSection;
}

function loadHomeContent() {
    let homeContent = document.createElement('div');
    homeContent.appendChild(createHeroSection());
    homeContent.appendChild(createAboutSection());
    return homeContent;
}

export default loadHomeContent; 