import { container } from "tsyringe";

import { LocalStorageProvider } from "@shared/container/providers/StorageProvider/implementations/LocalStorageProvider";
import { S3StorageProvider } from "@shared/container/providers/StorageProvider/implementations/S3StorageProvider";
import { IStorageProvider } from "@shared/container/providers/StorageProvider/IStorageProvider";

const DISK_STORAGE = {
  local: LocalStorageProvider,
  s3: S3StorageProvider,
};

container.registerSingleton<IStorageProvider>(
  "StorageProvider",
  DISK_STORAGE[process.env.disk]
);
