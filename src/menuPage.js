function createMenuSection(title, items) {
    const section = document.createElement('div');
    section.className = 'menu-section';

    const sectionTitle = document.createElement('h2');
    sectionTitle.textContent = title;

    const menuItems = document.createElement('div');
    menuItems.className = 'menu-items';

    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';

        const itemName = document.createElement('h3');
        itemName.textContent = item.name;

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;

        const itemPrice = document.createElement('span');
        itemPrice.className = 'price';
        itemPrice.textContent = item.price;

        menuItem.appendChild(itemName);
        menuItem.appendChild(itemDescription);
        menuItem.appendChild(itemPrice);
        menuItems.appendChild(menuItem);
    });

    section.appendChild(sectionTitle);
    section.appendChild(menuItems);

    return section;
}

function loadMenuContent() {
    const content = document.createElement('div');
    content.className = 'menu-content';

    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';
    heading.className = 'menu-heading';

    const menuDescription = document.createElement('p');
    menuDescription.className = 'menu-description';
    menuDescription.textContent = 'Discover our carefully crafted dishes, made with the finest ingredients and prepared with passion by our expert chefs.';

    const appetizers = [
        {
            name: 'Bruschetta',
            description: 'Toasted bread topped with fresh tomatoes, garlic, and basil',
            price: '$8.99'
        },
        {
            name: 'Calamari',
            description: 'Crispy fried squid served with marinara sauce',
            price: '$12.99'
        },
        {
            name: 'Caprese Salad',
            description: 'Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze',
            price: '$10.99'
        }
    ];

    const mainCourses = [
        {
            name: 'Grilled Salmon',
            description: 'Fresh Atlantic salmon with lemon butter sauce and seasonal vegetables',
            price: '$24.99'
        },
        {
            name: 'Beef Tenderloin',
            description: '8oz tenderloin with red wine reduction and truffle mashed potatoes',
            price: '$32.99'
        },
        {
            name: 'Mushroom Risotto',
            description: 'Creamy Arborio rice with wild mushrooms and parmesan',
            price: '$18.99'
        }
    ];

    const desserts = [
        {
            name: 'Tiramisu',
            description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream',
            price: '$8.99'
        },
        {
            name: 'Chocolate Lava Cake',
            description: 'Warm chocolate cake with a molten center, served with vanilla ice cream',
            price: '$9.99'
        },
        {
            name: 'Crème Brûlée',
            description: 'French vanilla custard with caramelized sugar crust',
            price: '$7.99'
        }
    ];

    content.appendChild(heading);
    content.appendChild(menuDescription);
    content.appendChild(createMenuSection('Appetizers', appetizers));
    content.appendChild(createMenuSection('Main Courses', mainCourses));
    content.appendChild(createMenuSection('Desserts', desserts));

    return content;
}

export default loadMenuContent;