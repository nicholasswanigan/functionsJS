console.log("hello node");

function welcome()
{
    console.log("Welcome");
}

welcome();

function welcomeFlex(hello)
{
    console.log(hello);
}

welcomeFlex("hello person")

function welcomeTwoParts(hello, name)
{
    console.log(hello + " " + name);
}

welcomeTwoParts("hello people","nick");

//console.log(welcomeTwoPart(hello)); does not work bc the variable is only defined in the function welcomeTwoPart

let defaultName = "josh";

console.log(defaultName);
welcomeTwoParts("hello",defaultName);

function betterwelcome(hello = "Hello", Name = "Shawn")
{
    console.log(hello + " " + Name);
}

betterwelcome();
betterwelcome(undefined,"nick");
betterwelcome("welcome",undefined);
betterwelcome("welcome");


function welcomeif(name) {
    if (name === "Alice") {
        console.log("Goodbye, Alice!");
    } else {
        console.log("Hello, " + name + "! Welcome to JS");
    }
}

welcomeif("Bob");  
welcomeif("Alice");