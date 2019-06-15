using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Models.Utils
{
    public class ImageAddRequest
    {
        public string Filename { get; set; }
        public Stream Stream { get; set; }
    }
}
