// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
}
// Returns a random DNA base
function returnRandBase_alt(undesired_base) {
    const dnaBases = ['A', 'T', 'C', 'G'].filter(el => el!=undesired_base);
    return dnaBases[Math.floor(Math.random() * dnaBases.length)] 
}
  
  // Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand
}
  

function pAequorFactory(specimennum, strand){
    const new_pAequor = {
        specimennum: specimennum,
        dna: strand,
        complementStrand(){
            const complements = {
                'A': 'T',
                'T': 'A',
                'C': 'G',
                'G': 'C'
            }
            let newStrand = [];
            this.dna.forEach(el => newStrand.push(complements[el]) )
            return pAequorFactory( -this.specimennum, newStrand );
        },
        compareDNA(specimen){
            const length = specimen.dna.length;
            // let matchingCount = 0;
            // for(let i=0; i<length; i++){
            //     if(specimen.dna[i] == this.dna[i]) matchingCount++;
            // }
            const matchingCount = this.dna.filter( (base,index) => base === specimen.dna[index] ).length; 
            const percentageInCommon = (matchingCount/length);
            console.log(`specimen ${this.specimennum} and specimen ${specimen.specimennum} have ${(100*percentageInCommon).toFixed(2)}% DNA in common`);
            return percentageInCommon;
        },
        willLikelySurvive(){
            const length = this.dna.length;
            let goodBasesCount = 0;
            this.dna.forEach(el => {
                if(el == 'C' || el == 'G') goodBasesCount++;
            });
            const survivalChance = goodBasesCount/length;
            console.log("Survival chance: "+survivalChance);
            return survivalChance>=0.6 ? true : false;
            
        },
        mutate(){
            console.log("mutate")
            const randomPosition = Math.floor(Math.random() * this.dna.length);
            const selBase = this.dna[randomPosition]; // 'A', 'T', 'C', 'G'
            console.log("randomPosition: "+randomPosition);
            console.log("selBase: "+selBase);
            let newBase = selBase;
            while(newBase == selBase){
                newBase = returnRandBase();
                console.log("newBase: "+newBase)
            }
            this.dna[randomPosition] = newBase;
            return this.dna;
        },
        
        mutate_alt(){
            console.log("mutate2")
            const randomPosition = Math.floor(Math.random() * this.dna.length);
            const selBase = this.dna[randomPosition]; // 'A', 'T', 'C', 'G'
            console.log("randomPosition: "+randomPosition);
            console.log("selBase: "+selBase);
            let newBase = selBase;
            newBase = returnRandBase_alt(selBase);
            console.log("newBase: "+newBase)
                
            this.dna[randomPosition] = newBase;
            return this.dna;
        }
    }
    return new_pAequor;
}

// const strand1 = pAequorFactory(1,mockUpStrand());
// const strand2 = pAequorFactory(2,mockUpStrand());
// console.log(strand1.dna);
// console.log(strand2.dna);
// strand1.compareDNA(strand2);
// strand1.mutate();
// console.log(strand1.dna);
// strand1.mutate_alt();
// console.log(strand1.dna);
// strand1.willLikelySurvive() ? console.log("likely to survive") : console.log("unlikely to survive");
// strand2.willLikelySurvive() ? console.log("likely to survive") : console.log("unlikely to survive");

// arrayOfpAequor.forEach( el => console.log(el.dna) )

// console.log('------');

// const s1complement = strand1.complementStrand();
// console.log(strand1.dna);
// console.log(s1complement);

class MatchTracker{
    constructor(strand1, strand2, match = 0){
        this.strand1 = strand1;
        this.strand2 = strand2;
        this.match = match;
    }
    assignIfBigger(value, s1, s2){
        if(value > this.match){
            this.strand1 = s1;
            this.strand2 = s2;
            this.match = value;
            return true;
        }
        return false;
    }
}

function findClosestStrands(arrayOfpAequor){
    if(arrayOfpAequor.length < 2) {
        console.log("Not enough strands to compare!");
        return;
    }
    let first = new MatchTracker(arrayOfpAequor[0],arrayOfpAequor[0]);
    let second = new MatchTracker(arrayOfpAequor[0],arrayOfpAequor[0]);

    for(let i=0; i < arrayOfpAequor.length; i++){
        const element_i = arrayOfpAequor[i];
        for (let j = i+1; j < arrayOfpAequor.length; j++) {
            const element_j = arrayOfpAequor[j];
            const match = element_i.compareDNA(element_j);
            first.assignIfBigger(match, element_i, element_j) || second.assignIfBigger(match, element_i, element_j);            
        }
    }
    
    console.log("");
    console.log(`Closest match: sNum ${first.strand1.specimennum} and ${first.strand2.specimennum} (${(100*first.match).toFixed(2)}% match):`);
    console.log(`Strand num ${first.strand1.specimennum}: ${first.strand1.dna}`);
    console.log(`Strand num ${first.strand2.specimennum}: ${first.strand2.dna}`);
    console.log("");
    console.log(`2nd closest match: sNum ${second.strand1.specimennum} and ${second.strand2.specimennum} (${(100*second.match).toFixed(2)}% match):`);
    console.log(`Strand num ${second.strand1.specimennum}: ${second.strand1.dna}`);
    console.log(`Strand num ${second.strand2.specimennum}: ${second.strand2.dna}`);    
    console.log("");
}

let arrayOfpAequor = [];
for(let i=0; i<30; i++) arrayOfpAequor.push(pAequorFactory(i+1,mockUpStrand()));

findClosestStrands(arrayOfpAequor);
/* Expected output example: 
specimen 1 and specimen 2 have 40.00% DNA in common
specimen 1 and specimen 3 have 20.00% DNA in common
...
specimen 1 and specimen 29 have 40.00% DNA in common
specimen 1 and specimen 30 have 20.00% DNA in common
specimen 2 and specimen 3 have 40.00% DNA in common
specimen 2 and specimen 4 have 20.00% DNA in common
...
specimen 27 and specimen 28 have 13.33% DNA in common
specimen 27 and specimen 29 have 40.00% DNA in common
specimen 27 and specimen 30 have 26.67% DNA in common
specimen 28 and specimen 29 have 33.33% DNA in common
specimen 28 and specimen 30 have 6.67% DNA in common
specimen 29 and specimen 30 have 20.00% DNA in common

Closest match: sNum 10 and 25 (66.67% match):
1st strand1: G,A,A,G,T,C,G,G,A,C,A,T,T,G,G
1st strand2: G,A,A,C,T,C,A,G,A,A,A,T,T,T,C

2nd closest match: sNum 18 and 20 (60.00% match):
2nd strand1: T,G,A,G,C,A,C,G,G,A,T,C,C,T,C
2nd strand2: A,T,A,G,C,G,C,T,G,A,C,C,C,G,C

*/
