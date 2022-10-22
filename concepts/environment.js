let name = process.env.NAME || 'NoName'; //remember to use UpperCase for the environment variables
let web = process.env.WEB || 'NoWeb';

console.log('Hello ' + name);
console.log('My website is ' + web);
