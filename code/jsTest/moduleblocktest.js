const m = module {
    import diag from 'functionexportmodule.js'; // import everything that the module export
 
    export var y = diag(3,4);

    export function square(x) {
        return x * x;
    }
};

function test(x) {
    return x;
}

let tester = await import(m);