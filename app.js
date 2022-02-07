const point = {
        x: 3,
        y: 4
};
function displayPointInSpace(z, t) {
        // "this" - reference to any object having properties x and y
        console.log(`x: ${this.x}, y: ${this.y}, z: ${z}, t: ${t}`);
};
// displayPointInSpace.call(point, 10, 20);
// displayPointInSpace.myBind(point, 10, 20)();
// displayPointInSpace.apply(point, [10, 20]);

////////////////////////////////////////////////////////////////////////

Function.prototype.myBind = function(thisObj, ...args){
        // this - reference to any functional object (in example - displayPointInSpace)
        // thisObject - reference to any object (in example - point) 
        return (...params) => {
                thisObj.method123 = this;
                const res = thisObj.method123(...args.concat(params));
                delete thisObj.method123;
                return res;
        }
}

////////////////////////////////////////////////////////////////////////

// arguments are passed at function call
const funDisplay = displayPointInSpace.myBind(point);
funDisplay(10, 20); 

////////////////////////////////////////////////////////////////////////

// all arguments are bound by the method myBind
const funDisplayArguments = displayPointInSpace.myBind(point, 10, 20);
funDisplayArguments();

////////////////////////////////////////////////////////////////////////

// mixed - part of arguments are passed by the method myBind 
// other part is passed by function call
const funDisplayMixed = displayPointInSpace.myBind(point, 10);
funDisplayMixed(20);

////////////////////////////////////////////////////////////////////////