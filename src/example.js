export const functionExample = function(x) {
    return x * 10;
}

export const constructorExample = function(x) {

    this.x = x;

    this.getX = function() {
        return this.x;
    }

}

export class classExample {
    constructor(x) {
        this.x = x;
    }
    getX() {
        return this.x
    }
    notCodeCovered() {
        return "code coverage won't get to this";
    }
}
