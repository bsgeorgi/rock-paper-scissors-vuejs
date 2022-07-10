export default () => {
    const a = ['Small', 'Blue', 'Ugly', 'Funky', 'Smelly', 'Smart', 'Silly', 'Rare', 'Tiny', 'Strange'];
    const b = ['Bear', 'Dog', 'Boy', 'Tom', 'Corgi', 'Boot', 'Bob'];
    
    const generateUsername = () => {
        const rA = Math.floor(Math.random()*a.length);
        const rB = Math.floor(Math.random()*b.length);

        return a[rA] + b[rB];
    };

    return {
        generateUsername
    };
};