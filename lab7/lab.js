// Author: Shiyen Yang <shhyang@ucsc.edu>
// Date: 2023 October 31
// Lab 7 - Functions

function sortUsername() {
    console.log("function is called");

    let name = window.prompt("Hi, please give me your name so I can fix it");
    console.log("name");

    if (name.length < 1) {
        return "nameless being";
    }

    let nameArr = name.split(' ');
    for (let i = 0; i < nameArr.length; ++i) {
        nameArr[i] = nameArr[i].toLowerCase().split('').sort().reverse().join('');
    }

    name = nameArr.join(' ');
    return name;
}

document.writeln(sortUserName());