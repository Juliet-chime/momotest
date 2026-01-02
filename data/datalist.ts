// Tab options
const tabOptions = [
  { id: "1", label: "Daily", value: "daily" },
  { id: "2", label: "Weekly", value: "weekly" },
  { id: "3", label: "Monthly", value: "monthly" },
  { id: "4", label: "Yearly", value: "yearly" },
];

const airtimeTabOptions = [
  { id: "1", label: "Self", value: "self" },
  { id: "2", label: "Others", value: "others" },
];

// Sample data options
const dataOptions = {
  daily: [
    { id: 1, title: "100MB", validity: "1 Day", price: "₦50" },
    { id: 2, title: "350MB", validity: "1 Day", price: "₦100" },
    { id: 3, title: "1.5GB", validity: "1 Day", price: "₦300" },
  ],
  weekly: [
    { id: 1, title: "1GB", validity: "7 Days", price: "₦500" },
    { id: 2, title: "2GB", validity: "7 Days", price: "₦1000" },
    { id: 3, title: "5GB", validity: "7 Days", price: "₦2000" },
  ],
  monthly: [
    { id: 1, title: "1.5GB", validity: "30 Days", price: "₦1000" },
    { id: 2, title: "3GB", validity: "30 Days", price: "₦1500" },
    { id: 3, title: "6GB", validity: "30 Days", price: "₦2500" },
    { id: 4, title: "10GB", validity: "30 Days", price: "₦4000" },
    { id: 5, title: "20GB", validity: "30 Days", price: "₦6000" },
  ],
  yearly: [
    { id: 1, title: "50GB", validity: "365 Days", price: "₦20000" },
    { id: 2, title: "100GB", validity: "365 Days", price: "₦35000" },
    { id: 3, title: "200GB", validity: "365 Days", price: "₦60000" },
  ],
};

const airtimeOptions = {
  daily: [
    { id: 1, title: "₦100", validity: "1 Day", bonus: "0%" },
    { id: 2, title: "₦200", validity: "1 Day", bonus: "0%" },
    { id: 3, title: "₦500", validity: "1 Day", bonus: "5%" },
  ],
  weekly: [
    { id: 1, title: "₦1000", validity: "7 Days", bonus: "10%" },
    { id: 2, title: "₦2000", validity: "7 Days", bonus: "15%" },
    { id: 3, title: "₦5000", validity: "7 Days", bonus: "20%" },
  ],
  monthly: [
    { id: 1, title: "₦1000", validity: "30 Days", bonus: "5%" },
    { id: 2, title: "₦2000", validity: "30 Days", bonus: "10%" },
    { id: 3, title: "₦5000", validity: "30 Days", bonus: "15%" },
    { id: 4, title: "₦10000", validity: "30 Days", bonus: "20%" },
  ],
  yearly: [
    { id: 1, title: "₦50000", validity: "365 Days", bonus: "25%" },
    { id: 2, title: "₦100000", validity: "365 Days", bonus: "30%" },
    { id: 3, title: "₦200000", validity: "365 Days", bonus: "35%" },
  ],
};

const airtimeAmounts = [
  { id: 1, amount: "100" },
  { id: 2, amount: "200" },
  { id: 3, amount: "500" },
  { id: 4, amount: "1000" },
  { id: 5, amount: "2000" },
  { id: 6, amount: "5000" },
];

export {
    airtimeAmounts,
    airtimeOptions,
    airtimeTabOptions,
    dataOptions,
    tabOptions
};

