try {
    let s = new Symbol();
} catch (e) {
    console.log(e.message); //=> Symbol is not a constructor
}