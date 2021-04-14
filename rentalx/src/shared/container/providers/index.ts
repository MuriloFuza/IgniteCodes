import { container } from 'tsyringe';

import { IDateProvider } from './DateProvider/IDateProvider';
import { DaysJsDateProvider } from './DateProvider/implementations/DayJsDateProvider';

container.registerSingleton<IDateProvider>(
  'DaysJsDateProvider',
  DaysJsDateProvider,
);
