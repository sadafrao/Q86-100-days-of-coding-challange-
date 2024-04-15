// Q86
//this function is checking text presence by using .includes()
function includetext(str : string): boolean{
  return  str.includes("sadaf")
}
console.log(includetext("hi i am sadaf a web developer"));// output true sadaf is here
console.log(includetext("hi i am friends a web developer"));// out put false sadaf is not here