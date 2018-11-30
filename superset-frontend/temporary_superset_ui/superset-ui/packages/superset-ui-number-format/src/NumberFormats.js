const DOLLAR = '$,.2f';
const DOLLAR_CHANGE = '+$,.2f';
const DOLLAR_ROUND = '$,d';
const DOLLAR_ROUND_CHANGE = '+$,d';

const FLOAT_1_POINT = ',.1f';
const FLOAT_2_POINT = ',.2f';
const FLOAT_3_POINT = ',.3f';
const FLOAT = FLOAT_2_POINT;

const FLOAT_CHANGE_1_POINT = '+,.1f';
const FLOAT_CHANGE_2_POINT = '+,.2f';
const FLOAT_CHANGE_3_POINT = '+,.3f';
const FLOAT_CHANGE = FLOAT_CHANGE_2_POINT;

const INTEGER = ',d';
const INTEGER_CHANGE = '+,d';

const PERCENT_1_POINT = ',.1%';
const PERCENT_2_POINT = ',.2%';
const PERCENT_3_POINT = ',.3%';
const PERCENT = PERCENT_2_POINT;

const PERCENT_CHANGE_1_POINT = '+,.1%';
const PERCENT_CHANGE_2_POINT = '+,.2%';
const PERCENT_CHANGE_3_POINT = '+,.3%';
const PERCENT_CHANGE = PERCENT_CHANGE_2_POINT;

const SI_1_DIGIT = '.1s';
const SI_2_DIGIT = '.2s';
const SI_3_DIGIT = '.3s';
const SI = SI_3_DIGIT;

const NumberFormats = {
  DOLLAR,
  DOLLAR_CHANGE,
  DOLLAR_ROUND,
  DOLLAR_ROUND_CHANGE,
  FLOAT,
  FLOAT_1_POINT,
  FLOAT_2_POINT,
  FLOAT_3_POINT,
  FLOAT_CHANGE,
  FLOAT_CHANGE_1_POINT,
  FLOAT_CHANGE_2_POINT,
  FLOAT_CHANGE_3_POINT,
  INTEGER,
  INTEGER_CHANGE,
  PERCENT,
  PERCENT_1_POINT,
  PERCENT_2_POINT,
  PERCENT_3_POINT,
  PERCENT_CHANGE,
  PERCENT_CHANGE_1_POINT,
  PERCENT_CHANGE_2_POINT,
  PERCENT_CHANGE_3_POINT,
  SI,
  SI_1_DIGIT,
  SI_2_DIGIT,
  SI_3_DIGIT,
};

export default NumberFormats;
