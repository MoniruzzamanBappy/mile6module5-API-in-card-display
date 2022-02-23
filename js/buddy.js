const buddieslist = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => displayItems(data))
}

const displayItems = data => {
    // const loadName = document.getElementById('load-name');
    console.log(data);
    const buddies = document.getElementById('buddies');
    const buddy = data.results;
    for (const user of buddy) {
        const li = document.createElement('li');
        li.innerHTML = `
        <h3>Name: ${user.name.title + ' ' + user.name.first + ' ' + user.name.last}</h3>
        <h4>Gender: ${user.gender}</h4>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        `
        buddies.appendChild(li);
    }
}