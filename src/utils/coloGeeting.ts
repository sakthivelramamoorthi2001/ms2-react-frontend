export const ColorGettingRandom = () => {

    let color = 'rgb(';
    for (let i = 1; i <= 3; i++) {
        let number = Math.floor(Math.random() * 255)
        color += String(number);
        if (i != 3) {
            color += ','
        } else color += ')'
    }
    return String(color);
}
