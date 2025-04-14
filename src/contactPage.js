function createContactHeader() {
    const header = document.createElement('div');
    header.className = 'contact-header';

    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us';
    heading.className = 'contact-heading';

    const subheading = document.createElement('p');
    subheading.className = 'contact-subheading';
    subheading.textContent = 'We\'d Love to Hear from You';

    header.appendChild(heading);
    header.appendChild(subheading);

    return header;
}

function createContactInfoSection() {
    const infoSection = document.createElement('div');
    infoSection.className = 'contact-info-section';

    const infoHeading = document.createElement('h2');
    infoHeading.textContent = 'Get in Touch';

    const contactInfo = document.createElement('div');
    contactInfo.className = 'contact-info';

    const infoItems = [
        {
            icon: '📞',
            label: 'Phone',
            value: '(555) 123-4567'
        },
        {
            icon: '✉️',
            label: 'Email',
            value: 'info@odetoodin.com'
        },
        {
            icon: '📍',
            label: 'Address',
            value: '123 Culinary Lane, Foodie City, FC 12345'
        },
        {
            icon: '⏰',
            label: 'Hours',
            value: 'Mon-Sun: 11:00 AM - 10:00 PM'
        }
    ];

    infoItems.forEach(item => {
        const infoItem = document.createElement('div');
        infoItem.className = 'info-item';

        const itemIcon = document.createElement('span');
        itemIcon.className = 'info-icon';
        itemIcon.textContent = item.icon;

        const itemLabel = document.createElement('span');
        itemLabel.className = 'info-label';
        itemLabel.textContent = item.label;

        const itemValue = document.createElement('span');
        itemValue.className = 'info-value';
        itemValue.textContent = item.value;

        infoItem.appendChild(itemIcon);
        infoItem.appendChild(itemLabel);
        infoItem.appendChild(itemValue);
        contactInfo.appendChild(infoItem);
    });

    infoSection.appendChild(infoHeading);
    infoSection.appendChild(contactInfo);

    return infoSection;
}

function createLocationSection() {
    const locationSection = document.createElement('div');
    locationSection.className = 'location-section';

    const locationHeading = document.createElement('h2');
    locationHeading.textContent = 'Find Us';

    const locationMap = document.createElement('div');
    locationMap.className = 'location-map';
    
    // Using a placeholder image for the map
    const mapImage = document.createElement('img');
    mapImage.src = 'https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80';
    mapImage.alt = 'Restaurant location map';
    mapImage.className = 'map-image';
    
    const locationText = document.createElement('p');
    locationText.className = 'location-text';
    locationText.textContent = 'We are conveniently located in the heart of Foodie City, just a short walk from the central station. Parking is available in the adjacent garage.';

    locationMap.appendChild(mapImage);
    locationSection.appendChild(locationHeading);
    locationSection.appendChild(locationMap);
    locationSection.appendChild(locationText);

    return locationSection;
}

function createContactForm() {
    const formSection = document.createElement('div');
    formSection.className = 'form-section';

    const formHeading = document.createElement('h2');
    formHeading.textContent = 'Send Us a Message';

    const form = document.createElement('form');
    form.className = 'contact-form';

    const formFields = [
        {
            type: 'text',
            id: 'name',
            name: 'name',
            label: 'Your Name',
            required: true
        },
        {
            type: 'email',
            id: 'email',
            name: 'email',
            label: 'Your Email',
            required: true
        },
        {
            type: 'tel',
            id: 'phone',
            name: 'phone',
            label: 'Your Phone (optional)'
        },
        {
            type: 'select',
            id: 'subject',
            name: 'subject',
            label: 'Subject',
            options: [
                { value: 'reservation', text: 'Reservation Inquiry' },
                { value: 'event', text: 'Private Event' },
                { value: 'feedback', text: 'Feedback' },
                { value: 'other', text: 'Other' }
            ],
            required: true
        }
    ];

    formFields.forEach(field => {
        const formGroup = document.createElement('div');
        formGroup.className = 'form-group';

        const label = document.createElement('label');
        label.htmlFor = field.id;
        label.textContent = field.label;

        let input;
        if (field.type === 'select') {
            input = document.createElement('select');
            input.id = field.id;
            input.name = field.name;
            
            if (field.required) {
                input.required = true;
            }

            field.options.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option.value;
                optionElement.textContent = option.text;
                input.appendChild(optionElement);
            });
        } else {
            input = document.createElement('input');
            input.type = field.type;
            input.id = field.id;
            input.name = field.name;
            
            if (field.required) {
                input.required = true;
            }
        }

        formGroup.appendChild(label);
        formGroup.appendChild(input);
        form.appendChild(formGroup);
    });

    const messageGroup = document.createElement('div');
    messageGroup.className = 'form-group';

    const messageLabel = document.createElement('label');
    messageLabel.htmlFor = 'message';
    messageLabel.textContent = 'Your Message';

    const messageTextarea = document.createElement('textarea');
    messageTextarea.id = 'message';
    messageTextarea.name = 'message';
    messageTextarea.rows = 5;
    messageTextarea.required = true;

    messageGroup.appendChild(messageLabel);
    messageGroup.appendChild(messageTextarea);
    form.appendChild(messageGroup);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.className = 'submit-button';
    submitButton.textContent = 'Send Message';

    form.appendChild(submitButton);

    // Add form submission handler
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // In a real application, you would handle form submission here
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    });

    formSection.appendChild(formHeading);
    formSection.appendChild(form);

    return formSection;
}

function loadContactContent() {
    const content = document.createElement('div');
    content.className = 'contact-content';

    content.appendChild(createContactHeader());
    content.appendChild(createContactInfoSection());
    content.appendChild(createLocationSection());
    content.appendChild(createContactForm());

    return content;
}

export default loadContactContent; 