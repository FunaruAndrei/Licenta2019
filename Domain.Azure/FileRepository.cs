using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.IRepostories;
using Microsoft.Extensions.Options;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Auth;
using Microsoft.WindowsAzure.Storage.Blob;

namespace Domain.Azure
{
    public class FileRepository : IFileRepository
    {
        private readonly AzureStorageConfig _storageConfig = null;

        public FileRepository(IOptions<AzureStorageConfig> config)
        {
            _storageConfig = config.Value;
        }

        public async Task<bool> DeleteAsync(string path)
        {
            try
            {


                // Create storagecredentials object by reading the values from the configuration (appsettings.json)
                StorageCredentials storageCredentials = new StorageCredentials(_storageConfig.AccountName, _storageConfig.AccountKey);

                // Create cloudstorage account by passing the storagecredentials
                CloudStorageAccount storageAccount = new CloudStorageAccount(storageCredentials, true);

                // Create the blob client.
                CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();

                var pathSplited = path.Split("/");

                var containerName = pathSplited.FirstOrDefault();
                var folderName = pathSplited.ElementAt(1);
                var fileName = pathSplited.LastOrDefault();

                // Get reference to the blob container by passing the name by reading the value from the configuration (appsettings.json)
                CloudBlobContainer container = blobClient.GetContainerReference(containerName);

                // Get the reference to the block blob from the container
                CloudBlockBlob blockBlob = container.GetBlockBlobReference($"{folderName}/{fileName}");

                return await blockBlob.DeleteIfExistsAsync();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        public async Task<bool> FileExists(string path)
        {
            try
            {


                // Create storagecredentials object by reading the values from the configuration (appsettings.json)
                StorageCredentials storageCredentials = new StorageCredentials(_storageConfig.AccountName, _storageConfig.AccountKey);

                // Create cloudstorage account by passing the storagecredentials
                CloudStorageAccount storageAccount = new CloudStorageAccount(storageCredentials, true);

                // Create the blob client.
                CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();

                var pathSplited = path.Split("/");

                var containerName = pathSplited.FirstOrDefault();
                var folderName = pathSplited.ElementAt(1);
                var fileName = pathSplited.LastOrDefault();

                // Get reference to the blob container by passing the name by reading the value from the configuration (appsettings.json)
                CloudBlobContainer container = blobClient.GetContainerReference(containerName);

                // Get the reference to the block blob from the container
                CloudBlockBlob blockBlob = container.GetBlockBlobReference($"{folderName}/{fileName}");

                return await blockBlob.ExistsAsync();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        public async Task<bool> Save(Stream fileStream, string path)
        {
            try
            {


                // Create storagecredentials object by reading the values from the configuration (appsettings.json)
                StorageCredentials storageCredentials = new StorageCredentials(_storageConfig.AccountName, _storageConfig.AccountKey);

                // Create cloudstorage account by passing the storagecredentials
                CloudStorageAccount storageAccount = new CloudStorageAccount(storageCredentials, true);

                // Create the blob client.
                CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();

                var pathSplited = path.Split("/");

                var containerName = pathSplited.FirstOrDefault();
                var folderName = pathSplited.ElementAt(1);
                var fileName = pathSplited.LastOrDefault();

                // Get reference to the blob container by passing the name by reading the value from the configuration (appsettings.json)
                CloudBlobContainer container = blobClient.GetContainerReference(containerName);

                // Get the reference to the block blob from the container
                CloudBlockBlob blockBlob = container.GetBlockBlobReference($"{folderName}/{fileName}");
                
                // Upload the file
                await blockBlob.UploadFromStreamAsync(fileStream);

                return await Task.FromResult(true);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
    }
}
