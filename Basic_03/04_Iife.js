//  Immediately  Invoked Function Expressions (IIFE)

(function chai(){
    // Named IIFE
    console.log(`DB Connected`);
})();

( (name)=>{
    // UnNamed IIFE
    console.log(`DB Connected two ${name}`);
} )("Sohail")