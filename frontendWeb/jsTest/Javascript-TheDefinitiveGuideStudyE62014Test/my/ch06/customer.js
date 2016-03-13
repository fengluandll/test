var addr = "";
var customer = {
    address0: "address-0",
    address1: "address-1",
    address2: "address-2",
    address3: "address-3",
    address4: "address-4",
};
for(i = 0; i < 4; i++) {
    addr += customer["address" + i] + '\n';
}
console.log(addr);