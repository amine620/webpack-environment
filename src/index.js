import {compose,pipe} from "lodash/fp"


let input ="javascript"

const trim=str=>str.trim()
const toLower=str=>str.toLowerCase()
const wrapInElement=element=>str=>`<${element}>${str}</${element}>`

const transform=pipe(trim,toLower,wrapInElement('div'))
console.log(transform(input));
// const result=toLowerCase(wrapInDiv(trim(input)))