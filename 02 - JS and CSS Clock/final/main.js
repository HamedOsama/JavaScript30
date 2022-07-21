const secondsHand = document.querySelector('.second-hand')
const minsHand = document.querySelector('.min-hand')
const hoursHand = document.querySelector('.hour-hand')

const clock = () => {
    const now = new Date()
    const currentTime = now.getSeconds();
    const secondsDeg = (currentTime / 60) * 360 + 90;
    secondsHand.style.transform = `rotate(${secondsDeg}deg)`;
    const mins = now.getMinutes();
    const minutesDeg = (mins / 60) * 360 + 90 + ((currentTime / 60) * 6);
    minsHand.style.transform = `rotate(${minutesDeg}deg)`;
    const hours = now.getHours()
    const hoursDeg = (hours / 12) * 360 + 90 + ((mins / 60) * 30);
    hoursHand.style.transform = `rotate(${hoursDeg}deg)`;
}
clock();
setInterval(() => clock(), 1000)