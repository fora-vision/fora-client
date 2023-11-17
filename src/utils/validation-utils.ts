import dayjs from 'dayjs';

export const validateEmail = (email: string) => {
  const emailRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegular.test(String(email).toLowerCase());
}

export const isValidName = (name: string) => {
  return typeof name === 'string' && name.trim().length > 2;
};

export const isValidDate = (date: string) => {
  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(date)) return false;
  const [day, month, year] = date.split('/').map(Number);
  if (year < 1900 || year > 2009) return false;
  const formattedDate = date.split('/').reverse().join('-');
  const parsedDate = dayjs(formattedDate, 'DD/MM/YYYY');
  return parsedDate.isValid() && parsedDate.date() === day && parsedDate.month() + 1 === month && parsedDate.year() === year;
};

export const validateHeight = (height: number) => {
  const min = 120;
  const max = 220;
  return height >= min && height <= max;
};

export const validateWeight = (weight: number) => {
  const min = 30;
  const max = 300;
  return weight >= min && weight <= max;
};

export const setValidatedName = (value: string, setter: (value: string) => void) => {
  if (/^[A-Za-zА-Яа-я-]*$/.test(value)) {
    setter(value);
  }
};

export const setValidatedNumber = (value: string, setter: (value: number) => void) => {
  if (/^\d*\.?\d*$/.test(value)) {
    setter(value === '' ? 0 : parseFloat(value));
  }
};