var s = '';
for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
        if (i % 2 == 0) {
            if (j % 2 == 0) {
                s += '#';
            } else {
                s += ' ';
            }
        } else {
            if (j % 2 == 0) {
                s += ' ';
            } else {
                s += '#';
            }
        }
    }
    s += '\n';
}

console.log(s);