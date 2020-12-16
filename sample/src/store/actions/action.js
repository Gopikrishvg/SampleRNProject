const STORE_DATE = 'STORE_DATA';

const addApiDate = (data) => {
  return {
    type: STORE_DATE,
    data,
  };
};

export {addApiDate};
