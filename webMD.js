/*
  Given an array of ailments (illnesses), and an array of medication objects that have a nested array of treatedSymptoms
  return the medication name(s) that treats the most given symptoms
*/

const medications = [
    {
        name: "Sulforaphane",
        treatableSymptoms: [
            "dementia",
            "alzheimer's",
            "inflammation",
            "neuropathy",
        ],
    },
    {
        name: "Longvida Curcumin",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "depression",
            "arthritis",
            "anxiety",
        ],
    },
    {
        name: "Hericium erinaceus",
        treatableSymptoms: [
            "anxiety",
            "cognitive decline",
            "depression"],
    },
    {
        name: "Nicotinamide mononucleotide",
        treatableSymptoms: [
            "ageing",
            "low NAD",
            "obesity",
            "mitochondrial myopathy",
            "diabetes",
        ],
    },
    {
        name: "PainAssassinator",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "cramps",
            "headache",
            "toothache",
            "back pain",
            "fever",
        ],
    },
];

/*
Input: ["pain"], medications
Output: ["PainAssassinator", "Longvida Curcumin"]
*/

/*
Input: ["pain", "inflammation", "depression"], medications
Output: ["Longvida Curcumin"]
*/

/*
Input: ["existential dread"], medications
Output: []
*/


function webMD(ailments, meds) {
    // setup the result array
    const result = []
    // go thru the each med
    for (const med of meds) {
        // get the list of symptoms from the med
        const symptoms = med.treatableSymptoms;
        // default med has the ailments
        let hasSymptoms = true;

        // in each med we go thru the ailments
        for (let i = 0; i < ailments.length; i++) {
            // check 1 ailment at a time
            const ailment = ailments[i]
            // if the med has NO single ailment
            if (!symptoms.includes(ailment)) {
                // turn flag to false
                hasSymptoms = false
                // stop running
                break;
            }
        }
        // if the symptoms still true we add to our result
        if (hasSymptoms) result.push(med.name);
    }
    // return the result
    return result
}

console.log(webMD(["pain", "inflammation", "depression"], medications))
console.log(webMD(["pain"], medications))
console.log(webMD(["existential dread"], medications))