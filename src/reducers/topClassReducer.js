const company = {
  foundDate: new Date('March 2015'),
  founder: 'Danybayev Sanzhar',
  companyName: 'Topclass',
  fb: 'https://www.facebook.com/s.danybay'
};

export default function (state = company, action) {
  switch (action.type) {
    case 'COMPANY_CREATED':
      return action.payload;
    default:
      return state;
  }
}
