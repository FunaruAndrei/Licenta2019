using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.EF.Models.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Domain.EF.Context
{
    public class EServiceDbContext:IdentityDbContext<EServiceUser, EServiceRole, int>
    {
        public EServiceDbContext(DbContextOptions<EServiceDbContext> options)
            : base(options)
        {
        }
    }
}
