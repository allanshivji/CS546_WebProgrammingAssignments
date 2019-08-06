function checkForNumber(val, name){
    if(typeof val!='number'){
        throw `${name} is not a number`;
    }
    if(val<=0){
        throw `Entered ${name} is less than or equal to 0`;
    }
}

module.exports={
    volumeOfRectangularPrism: (length, width, height) =>{
        checkForNumber(length, 'Number 1')
        checkForNumber(width, 'Number 2')
        checkForNumber(height, 'Number 3')
        return length*width*height;
    },

    surfaceAreaOfRectangularPrism: (length, width, height) =>{
        checkForNumber(length, 'Number 1')
        checkForNumber(width, 'Number 2')
        checkForNumber(height, 'Number 3')
        return (2*((length*width)+(height*length)+(height*width)));
    },

    volumeOfSphere: (radius) =>{
        checkForNumber(radius, 'radius')
        return ((4/3)*Math.PI*Math.pow(radius,3));
    },

    surfaceAreaOfSphere: (radius) =>{
        checkForNumber(radius, 'radius')
        return 4*Math.PI*Math.pow(radius,2);
    }
}