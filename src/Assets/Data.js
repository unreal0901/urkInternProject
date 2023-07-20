export const Data = [
  {
    id: 1,
    year: 2016,
    userGain: 50,
    userb: 10,
    userLost: 30,
  },
  {
    id: 2,
    year: 2017,
    userGain: 60,
    userb: 30,
    userLost: 42,
  },
  {
    id: 3,
    year: 2018,
    userGain: 120,
    userb: 40,
    userLost: 70, // Random value greater than the previous year (2017), total sum <= 300
  },
  {
    id: 4,
    year: 2019,
    userGain: 150, // Random value greater than the previous year (2018), total sum <= 300
    userb: 50, // Random value greater than the previous year (2018), total sum <= 300
    userLost: 80, // Random value greater than the previous year (2018), total sum <= 300
  },
  {
    id: 5,
    year: 2020,
    userGain: 170, // Random value greater than the previous year (2019), total sum <= 300
    userb: 60, // Random value greater than the previous year (2019), total sum <= 300
    userLost: 90, // Random value greater than the previous year (2019), total sum <= 300
  },
  {
    id: 6,
    year: 2021,
    userGain: 190, // Random value greater than the previous year (2020), total sum <= 300
    userb: 80, // Random value greater than the previous year (2020), total sum <= 300
    userLost: 120, // Random value greater than the previous year (2020), total sum <= 300
  },

  {
    id: 7,
    year: 2021,
    userGain: 200, // Random value greater than the previous year (2020), total sum <= 300
    userb: 90, // Random value greater than the previous year (2020), total sum <= 300
    userLost: 140, // Random value greater than the previous year (2020), total sum <= 300
  },
];
