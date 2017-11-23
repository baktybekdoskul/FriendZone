'use strict';
import {environment} from '../../environments/environment';

/* текущий залогиненый пользователь */
export const LS_CURRENT_USER = 'currentUser';
export const LS_CURRENT_USER_OBJECT = 'currentUserObject';
/* определение хоста для запросов */
const SYS_PROTOCOL = 'http';
const SYS_HOST = environment.rest_host;
const SYS_PORT = environment.rest_port;
export const SYS_ORIGIN = SYS_PROTOCOL + '://' + SYS_HOST + ':' + SYS_PORT;
