
export function Shuffle(Array: Array<string>):Array<string> {
    for ( let i = Array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = Array[i];
        Array[i] = Array[j];
        Array[j] = temp; 
    }
    let divide= Dispach(Array);

    return divide;
};

export function Dispach(Array: Array<string>):Array<string> {
    let coup = (Array.length)/2 ;
    let a = Array.slice(0,coup)
    return a
	};
	