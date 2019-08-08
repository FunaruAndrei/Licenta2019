using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Domain.EF.Context;
using Domain.IRepostories;
using Domain.Models.Client;
using Domain.Models.Services;
using Microsoft.EntityFrameworkCore;

namespace Domain.EF.Repositories
{
    public class ServiceLocationAppointmentRepository:IServiceLocationAppointmentRepository
    {
        private readonly EServiceDbContext _dbContext;

        public ServiceLocationAppointmentRepository(EServiceDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<ServiceLocationAppointment>> GetAllAsync()
        {
            return await _dbContext.ServiceLocationAppointments.ToListAsync();
        }

        public async Task<ServiceLocationAppointment> GetById(int id)
        {
            return await _dbContext.ServiceLocationAppointments.Include(e=>e.ServiceLocationOperation)
                .Include(e=>e.CarManufacturer)
                .SingleOrDefaultAsync(e => e.ServiceLocationAppointmentId == id);
        }

        public async Task<IEnumerable<ServiceLocationAppointment>> WhereAsync(Expression<Func<ServiceLocationAppointment, bool>> exp)
        {
            return await _dbContext.ServiceLocationAppointments.Include(e => e.ServiceLocationOperation)
                .Include(e => e.CarManufacturer)
                .Where(exp).ToListAsync();
        }

        public async Task<bool> Insert(ServiceLocationAppointment entity)
        {
            entity.CarManufacturerId = entity.CarManufacturer.CarManufacturerId;
            entity.ServiceLocationOperationId = entity.ServiceLocationOperation.ServiceLocationOperationId;
            entity.ServiceLocationId = entity.ServiceLocation.ServiceLocationId;

            entity.CarManufacturer = null;
            entity.ServiceLocation = null;
            entity.ServiceLocationOperation = null;
            try
            {
                await _dbContext.ServiceLocationAppointments.AddAsync(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }

        }

        public async Task<bool> Update(ServiceLocationAppointment entity)
        {
            try
            {
                _dbContext.ServiceLocationAppointments.Update(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public async Task<bool> Delete(ServiceLocationAppointment entity)
        {
            try
            {
                _dbContext.ServiceLocationAppointments.Remove(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }
    }
}
