using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Activities.Any()) return;
            
            var activities = new List<Activity>
            {
                new Activity
                {
                    method = "Visa",
                    Status = "Enabled",
                    Description = "Card Payment",
                    District = "Rr. Enver Maloku",
                },
                new Activity
                {
                    method = "MasterCard",
                    Status = "Enabled",
                    Description = "Card Payment",
                    District = "Rr. Qamil Bala",
                },
                new Activity
                {
                    method = "VisaElectron",
                    Status = "Disabled",
                    Description = "Card Payment",
                    District = "Rr. Mark Isaku",
                },
                new Activity
                {
                    method = "Delta",
                    Status = "Disabled",
                    Description = "Card Payment",
                    District = "Rr. Bill Clinton",
                },
                new Activity
                {
                    method = "American Express",
                    Status = "Disabled",
                    Description = "Card Payment",
                    District = "Rr. Bajram Kelmendi",
                },
            };

            await context.Activities.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }
    }
}