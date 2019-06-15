using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace Domain.IRepostories
{
    public interface IFileRepository
    {
        Task<bool> FileExists(string path);
        Task<bool> Save(Stream fileStream, string path);
        Task<bool> DeleteAsync(string path);
    }
}
