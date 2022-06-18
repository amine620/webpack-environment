import {compose,pipe} from "lodash/fp"


let input ="javascript"

const trim=str=>str.trim()
const wrapInDiv=str=>`<div>${str}</div>`
const toLowerCase=str=>str.toLowerCase()

const transform=compose(toLowerCase,wrapInDiv,trim)
transform(input)
// const result=toLowerCase(wrapInDiv(trim(input)))