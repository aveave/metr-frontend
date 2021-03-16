import { extend } from 'vee-validate';

extend('odd', value => {
    return value % 2 !== 0;
})

extend('positive', value => {
  return value >= 0;
});