import { container } from 'tsyringe';

import { IDateProvider } from './DateProvider/IDateProvider';
import { DaysJsDateProvider } from './DateProvider/implementations/DayJsDateProvider';
import { IMailProvider } from './MailProvider/IMailProvider';
import { EtherealMailProvider } from './MailProvider/Implementations/EtherealMailProvider';
import { LocalStorageProvider } from './StorageProvider/Implementations/LocalStorageProvider';
import { IStorageProvider } from './StorageProvider/IStorageProvider';

container.registerSingleton<IDateProvider>(
  'DaysJsDateProvider',
  DaysJsDateProvider,
);

container.registerInstance<IMailProvider>(
  'EtherealMailProvider',
  new EtherealMailProvider(),
);

container.registerSingleton<IStorageProvider>(
  'LocalStorageProvider',
  LocalStorageProvider,
);
