/**
 * @file log4js配置
 * @author dongkunshan(windwithfo@yeah.net)
 */

 import log4js from 'log4js';

 log4js.configure({
    appenders: [
        {
            type: 'console'
        },
        {
            type: 'dateFile',
            filename: 'server/logs/user/user.log',
            pattern: '-yyyy-MM-dd',
            alwaysIncludePattern: false,
            category: 'user'
        },
        {
            type: 'dateFile',
            filename: 'server/logs/api/api.log',
            pattern: '-yyyy-MM-dd',
            alwaysIncludePattern: false,
            category: 'api'
        }
    ],
    levels: {
        user: 'INFO',
        api: 'INFO'
    }
});

export default log4js;
