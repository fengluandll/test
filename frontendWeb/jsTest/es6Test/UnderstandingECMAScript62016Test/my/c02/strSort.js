let normalized = values.map(text => text.normalize());

normalized.sort((first, second) => {
    if (first < second) {
        return -1;
    }else if (first === second) {
        return 0;
    }else {
        return 1;
    }
});