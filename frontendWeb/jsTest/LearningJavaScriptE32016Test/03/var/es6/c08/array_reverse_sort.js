const arr = [5, 3, 2, 4, 1];
arr.sort(); // arr is now [1, 2, 3, 4, 5]

const arr = [{ name: "Suzanne" }, { name: "Jim" },
    { name: "Trevor" }, { name: "Amanda" }];
arr.sort(); // arr unchanged
arr.sort((a, b) => a.name > b.name); // arr sorted alphabetically
// by name property
arr.sort((a, b) => a.name[1] < b.name[1]); // arr sorted reverse alphabetically
// by second letter of name property