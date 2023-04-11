import {surpriseMePrompts} from '../constants'
export function getRandomPromt(promt){
    const randomIndex= Math.floor(Math.random() *surpriseMePrompts.length);
    const randomPromt = surpriseMePrompts[randomIndex];
    if(randomPromt ===promt) return getRandomPromt(promt);
    return randomPromt;
}