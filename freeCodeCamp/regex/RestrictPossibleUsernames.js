/* 

You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.
    > Usernames can only use alpha-numeric characters.
    > The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
    > Username letters can be lowercase and uppercase.
    > Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

Test cases: 
    Your regex should match the string JACK
    Your regex should match the string Jo
    Your regex should match the string Oceans11
    Your regex should match the string RegexGuru
    Your regex should match the string Z97
    Your regex should match the string AB1
    Your regex should not match the string J
    Your regex should not match the string 007
    Your regex should not match the string 9
    Your regex should not match the string A1
    Your regex should not match the string BadUs3rnam3
    Your regex should not match the string c57bT3
    Your regex should not match the string J%4
    
*/

let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}\d*$|^[a-z]\d\d+$/i; // Change this line
let result = userCheck.test(username);

