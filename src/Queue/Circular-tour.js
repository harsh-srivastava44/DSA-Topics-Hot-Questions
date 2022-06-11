//Question : https://practice.geeksforgeeks.org/problems/circular-tour/1
/**
 * class PetrolPump{
    constructor(p, d){
        this.petrol = p;
        this.distance = d;
    }
}
 */

function Tour(p, n) {
  let deficit = 0;
  let start = 0;
  let balance = 0;
  for (let i = 0; i < n; i++) {
    balance += p[i].petrol - p[i].distance;
    if (balance < 0) {
      deficit += balance;
      start = i + 1;
      balance = 0;
    }
  }
  if (balance + deficit >= 0) return start;
  else return -1;
}
