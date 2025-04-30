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
        compareDNA(specimen){
            const length = specimen.dna.length;
            let matchingCount = 0;
            for(let i=0; i<length; i++){
                if(specimen.dna[i] == this.dna[i]) matchingCount++;
            }
            const percentageInCommon = (100 * matchingCount/length).toFixed(2);
            console.log(`specimen ${this.specimennum} and specimen ${specimen.specimennum} have ${percentageInCommon}% DNA in common`);
            
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

const strand1 = pAequorFactory(1,mockUpStrand());
const strand2 = pAequorFactory(2,mockUpStrand());
console.log(strand1.dna);
console.log(strand2.dna);
strand1.compareDNA(strand2);
// strand1.mutate();
// console.log(strand1.dna);
// strand1.mutate_alt();
// console.log(strand1.dna);


strand1.willLikelySurvive() ? console.log("likely to survive") : console.log("unlikely to survive");
strand2.willLikelySurvive() ? console.log("likely to survive") : console.log("unlikely to survive");
