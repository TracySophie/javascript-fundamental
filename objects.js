// CREATING OBJECTS

const fitBitData = {
    totalSteps :308727,
    totalMiles :211.7,
    avgCalorieBurn :5755,
    workoutsThisWeek:'5 of 7',
    avgGoodSleep :'2:13',
 100 : 'one hundred',
 bestPet : 'cat'
}
fitBitData['bestPet'] = 'cat';
// fitBitData.totalMiles = 300;
console.log(fitBitData.bestPet);
fitBitData.heartStillBeating = true;
// console.log(fitBitData.)
fitBitData.totalSteps += 1000;

const learners = {
    firstName : 'David',
    lastName : 'jones',
    strengths : ['Music','Arts'],
    exams : {
        midterm : 92,
        final : 88,
    }
}

console.log(learners.strengths[1]);
console.log(learners);

console.log(learners.strengths.push('GBV'));
console.log(learners);

// The total examination marks is :180
const totalMarks = `The total examination marks is : = ${learners.exams.midterm+learners.exams.final}`;
console.log(totalMarks);

cohort = {
    cohortOne : 15,
    cohortTwo : 19
}


// The total number of two cohorts is : 34 !
const person1 = `The total number of two cohorts is : ${cohort.cohortOne + cohort.cohortTwo}!`;
console.log(person1);

const firstNum = {
    one : 1,
    two : 2,
    three : 3
}
const secondNum = {
    one :1,
    two : 2,
    three :3
}
console.log(typeof secondNum);
console.log(typeof firstNum);
console.log(firstNum === secondNum);