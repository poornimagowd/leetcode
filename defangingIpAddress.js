// 1108. Defanging an IP Address

// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"


var defangIPaddr = function(address) {
    return address.split('.').join('[.]');
};


function defangIPaddr(address) {
    return address.replace(/\./g, "[.]");
}
console.log(defangIPaddr('1.1.1.1'));


function defangIPaddr(address) {
    let result = '';
    for (let char of address) {
        result += char === '.' ? '[.]' : char;
    }
    return result;
}
console.log(defangIPaddr('1.1.1.1'));

