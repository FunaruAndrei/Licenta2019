using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Azure
{
    public  class AzureStorageConfig
    {
        public string AccountName { get; set; }
        public string AccountKey { get; set; }
        public string ServicesLogoContainer { get; set; }
        public string ServicesLogoThumbsContainer { get; set; }
        public string ServicesImagesContainer { get; set; }
        public string ServicesImagesThumbnailsContainer { get; set; }
    }
}
