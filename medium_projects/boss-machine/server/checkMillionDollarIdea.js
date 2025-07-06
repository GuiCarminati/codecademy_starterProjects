const minimumValue = 1000000; // only accept ideas worth $1,000,000 or more

const checkMillionDollarIdea = (req, res, next) => {
  const { numWeeks, weeklyRevenue } = req.body;
  const totalMoney = Number(numWeeks) * Number(weeklyRevenue);
  const invalidInput = !numWeeks || !weeklyRevenue || isNaN(totalMoney);
  const lessThanMin =  totalMoney < minimumValue;
  if (invalidInput || lessThanMin) {
    const message = `This idea is not worth at least $${minimumValue}.`;
    res.status(400).send(message);
  } else {
    next();
  }
}

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
