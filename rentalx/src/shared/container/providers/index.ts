import { container } from 'tsyringe';

import { IDateProvider } from './DateProvider/IDateProvider';
import { DaysJsDateProvider } from './DateProvider/implementations/DayJsDateProvider';
import { IMailProvider } from './MailProvider/IMailProvider';
import { EtherealMailProvider } from './MailProvider/Implementations/EtherealMailProvider';
import { LocalStorageProvider } from './StorageProvider/Implementations/LocalStorageProvider';
import { S3StorageProvider } from './StorageProvider/Implementations/S3StorageProvider';
import { IStorageProvider } from './StorageProvider/IStorageProvider';

container.registerSingleton<IDateProvider>(
  'DaysJsDateProvider',
  DaysJsDateProvider,
);

container.registerInstance<IMailProvider>(
  'EtherealMailProvider',
  new EtherealMailProvider(),
);

const diskStorage = {
  local: LocalStorageProvider,
  S3: S3StorageProvider,
};

container.registerSingleton<IStorageProvider>(
  'LocalStorageProvider',
  diskStorage[process.env.disk],
);
