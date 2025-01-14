import { createLogger, format, transports } from 'winston';

const {combine, timestamp, printf} = format;

const logger = createLogger({
    level: 'info',
    format: combine(timestamp({format: "DD-MM-YYYY HH:mm:ss"}), printf(info => {
        return `${info.timestamp} ${info.level}: ${info.message}`;
    })),
    transports: [new transports.Console()]
})


export default logger;