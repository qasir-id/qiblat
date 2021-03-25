import express from 'express';
import next from 'next';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import chalk from 'chalk';
import dayjs from 'dayjs';
import open from 'open';
import 'dayjs/locale/id';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

morgan.token('dateTime', (req, res, tz) => {
  return dayjs().locale('id').format('dddd, D MMMM YYYY, HH.mm');
});

app.prepare().then(() => {
  const server = express();
  const port = process.env.NEXT_PUBLIC_APP_PORT ? process.env.NEXT_PUBLIC_APP_PORT : 3000;

  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());

  // Disabling x-powered-by in response headers
  server.set('x-powered-by', false);

  // Access log
  if (dev) {
    server.use(
      morgan(
        `[ ${chalk.blue('request')} ] ${chalk.greenBright(':method')} ${chalk.yellowBright(
          ':url'
        )} ${chalk.magentaBright(':status')} ${chalk.cyanBright(':response-time ms')}`
      )
    );
  } else {
    server.use(
      morgan(
        `${chalk.blueBright('[:dateTime]')} ${chalk.greenBright(':method')} ${chalk.yellowBright(
          ':url'
        )} ${chalk.magentaBright(':status')} ${chalk.cyanBright(':response-time ms')} ":user-agent"`
      )
    );
  }

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    const appName = process.env.NEXT_PUBLIC_APP_NAME ? process.env.NEXT_PUBLIC_APP_NAME : 'Application';
    if (err) {
      console.log(chalk.redBright(err));
      throw err;
    }
    // Development console
    if (dev) {
      open(`http://localhost:${port}`);
      console.log(
        chalk.green(
          `> Development ${appName} Ready on ${chalk.yellowBright(
            `http://localhost:${port}`
          )} => ${chalk.cyanBright('HAPPY CODING :D')}`
        )
      );
    }
    // Production console
    else {
      console.log(chalk.greenBright(`> ${appName} is already running`));
    }
  });
});
