const companyCreated = (value) => {
  return {
    type: 'COMPANY_CREATED',
    payload: value
  };
};

export default companyCreated;
