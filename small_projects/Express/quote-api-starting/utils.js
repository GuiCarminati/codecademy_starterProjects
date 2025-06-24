const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
}

const getElementsByPerson = (person,arr) => {
  const personElements = arr.filter(el => el.person===person);
  return personElements; // returns an empty array if no quotes are found for the author
};

const addNewElementToArray = (newValue,arr) => {
  const newId = arr[arr.length-1].id+1;
  newValue.id = newId;
  arr.push(newValue);
  return newValue;
};

const getElementById = (id,arr) => {
  return arr.find(el => el.id==id);
};

const getElementIndexById = (id,arr) => {
  return arr.findIndex(el => el.id==id);
};

const updateElementInArray = (newValue,index,arr) => {
  arr[index] = newValue;
};

const deleteElementInArray = (index,arr) => {
  arr.splice(index,1);
}

module.exports = {
  getRandomElement,
  getElementsByPerson,
  addNewElementToArray,
  getElementById,
  getElementIndexById,
  updateElementInArray,
  deleteElementInArray
};
