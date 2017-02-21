function Counter() {
    this.age = 30;
    setTimeout(()=>{
        this.age += 1;
        console.log(this.age);
    },5000);
}

new Counter();

