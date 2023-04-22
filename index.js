let users = [
    { "name": "John", "profession": "developer", "age": "18" },
    { "name": "Jack", "profession": "developer", "age": "20" },
    { "name": "Karen ", "profession": "admin", "age": "19" },
];
let professionArray = ["developer", "admin"];
let select = document.getElementById("profession");
let resultSet = document.getElementById("results");
let filter = document.getElementById("filter");
const addUser = document.getElementById("submit");
//Styling of dynamic elements
function cssStyle(div, srNo, userName, userProfession, userAge) {
    // div css styling
    div.style.display = 'flex';
    div.style.flexFlow = 'row wrap';
    div.style.width = '100%';
    div.style.gap = '7.1%';
    div.style.height = 'auto';
    div.style.border = '1px solid grey';
    div.style.borderRadius = '8px'
    div.style.alignItems = 'center';
    // span stying
    srNo.style.display = 'inline-block';
    srNo.style.width = '10px';
    srNo.style.marginLeft = "15px";
    userName.style.display = 'inline-block';
    userName.style.width = '200px';
    userProfession.style.display = 'inline-block';
    userProfession.style.width = '280px';
    userAge.style.display = 'inline-block';
    userAge.style.width = '70px';

    //append childs to parent
    div.appendChild(srNo);
    div.appendChild(userName);
    div.appendChild(userProfession);
    div.appendChild(userAge);

    resultSet.appendChild(div);
}
//loadScreenFunction as soon as window loads
function loadScreen() {
    let i = 1;
    users.forEach((element) => {
        let div = document.createElement('div');
        let srNo = document.createElement('span');
        srNo.innerText = (i++) + '.';
        let userName = document.createElement('span');
        userName.innerText = "Name: " + element.name;
        let userProfession = document.createElement('span');
        userProfession.innerText = "Profession: " + element.profession;
        let userAge = document.createElement('span');
        userAge.innerText = "Age: " + element.age;

        // styling and css and appending child to its paren
        cssStyle(div, srNo, userName, userProfession, userAge);

    });
    professionArray.forEach((element) => {
        let option = document.createElement("option");
        option.text = element;
        option.value = element;
        select.add(option);
    });
}
// add user event listener
addUser.addEventListener('click', (event) => {
    event.preventDefault();
    const userName = document.getElementById("user-name").value.toLowerCase();
    const userProfession = document.getElementById("user-profession").value.toLowerCase();
    const userAge = document.getElementById("user-age").value;

    if (userName === '' || userAge === '' || userAge === '') {
        alert("Enter all values Name, Profession and Age");
    }
    //update users array
    let user = {};
    user["name"] = userName;
    user["profession"] = userProfession;
    user["age"] = userAge;
    users.push(user);

    // update profession
    if (!professionArray.includes(userProfession)) {
        let option = document.createElement("option");
        option.text = userProfession;
        option.value = userProfession;
        professionArray.push(userProfession);
        select.add(option);
    }
    document.getElementById("user-name").value = '';
    document.getElementById("user-profession").value = '';
    document.getElementById("user-age").value = '';
})
// filter function
filter.addEventListener('click', (event) => {
    let profession = select.selectedOptions[0].text;
    if (profession === "Profession") {
        alert("select a profession before clicking the button.");
    }
    else {
        let selectUser = [];
        for (let i of users) {
            if (i.profession == profession) {
                selectUser.push(i);
            }
        }
        resultSet.innerHTML = '';

        for (let i = 0; i < selectUser.length; i++) {
            // create div and add sr-no, name, profession and age inside that div

            let div = document.createElement('div');
            let srNo = document.createElement('span');
            srNo.innerText = i + 1 + '.';
            let userName = document.createElement('span');
            userName.innerText = "Name: " + selectUser[i].name;
            let userProfession = document.createElement('span');
            userProfession.innerText = "Profession: " + selectUser[i].profession;
            let userAge = document.createElement('span');
            userAge.innerText = "Age: " + selectUser[i].age;

            // styling and css and appending child to its paren
        cssStyle(div, srNo, userName, userProfession, userAge);
        }
    }
})

loadScreen(); // loading screen