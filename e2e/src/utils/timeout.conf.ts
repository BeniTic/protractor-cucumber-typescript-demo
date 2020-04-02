import { defineSupportCode } from 'cucumber';

defineSupportCode(({setDefaultTimeout}) => {
    setDefaultTimeout(15000);
});
