// import './polyfill';
import { isIE, killIE } from '@yiban-shared/kill-ie';
import createMyApp from './main';

isIE ? killIE() : createMyApp();
