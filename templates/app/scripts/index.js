// import './polyfill';
import { isIE, killIE } from '@yiban-shared/kill-ie';
import createMyApp from './main';

import '@mock-server'; // For mock apis

isIE ? killIE() : createMyApp();
