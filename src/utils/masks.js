export default {
  unmask: (string) => string.replace(/[^a-zA-Z0-9]/g, ''),
  number: (string) => string.replace(/\D/g, ''),
  state: (string) => string.replace(/\d/, ''),
  hour: (string) =>
    String(string)
      .replace(/\D/, '')
      .replace(/(\d{2})(\d)/, '$1:$2'),
  showHour: (string) => {
    string = String(string);
    return string.length === 3
      ? string.replace(/(\d{1})(\d)/, '$1h$2')
      : string.replace(/(\d{2})(\d)/, '$1h$2');
  },
  cpf: (string) =>
    string
      .replace(/\D/g, '') // Replace any non-number character for nothing
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1'),
  rg: (string) =>
    string
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{1})\d+?$/, '$1'),
  cnpj: (string) =>
    string
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1'),
  zipcode: (string) =>
    string
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1'),
  phone: (string) =>
    string
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{4})(\d)/, '$1'),
  cell: (string) =>
    string
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1'),
  currency: (value) => {
    const string = value.toString();

    if (string.replace(/\D/g, '') !== '')
      return (parseInt(string.replace(/\D/g, ''), 10) / 100).toLocaleString(
        'pt-BR',
        {
          minimumFractionDigits: 2,
          // style: 'currency', To use R$ remove the comments
          // currency: 'BRL',
        }
      );

    return '0,00';
  },
  currencyAllPlatforms: (value) => {
    if (typeof value === 'number') {
      const [currency, cents] = (value / 100).toFixed(2).toString().split('.');

      return `R$ ${currency.replace(/\B(?=(\d{3})+(?!\d))/g, '.')},${cents}`;
    }

    return 'R$ 0,00';
  },
  percentage: (string) => {
    let number = Number(String(string).replace(/\D/g, ''));
    if (number > 100) number = 100;
    return `${number}%`;
  },
  creditCard: (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{4})(\d)/, '$1 $2')
      .replace(/(\d{4})(\d)/, '$1 $2')
      .replace(/(\d{4})(\d)/, '$1 $2')
      .replace(/(.\d{4})\d+?$/, '$1');
  },
  creditCardDate: (value) => {
    value = value
      .replace(/\D/g, '')
      .replace(/([\d]{4})/, '$1')
      .replace(/([\d]{4})[\d]+?$/, '$1')
      .replace(/([\d]{2})([\d]{1})/, '$1/$2');
    const dates = value.split('/');
    if (dates.length) {
      if (parseInt(dates[0]) > 12) dates[0] = '12';
      return dates.join('/');
    }
    return value;
  },
  cvv: (value) =>
    value
      .replace(/[^\d]/g, '')
      .replace(/([\d]{4})/, '$1')
      .replace(/([\d]{4})[\d]+?$/, '$1'),
};
