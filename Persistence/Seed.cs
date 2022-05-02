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
                    Method = "Visa",
                    Description = "Credit card payment",
                    Status = "Enabled",
                    District = "Rruga Enver Maloku",
                },
                new Activity
                {
                    Method = "Mastercard",
                    Description = "Credit card payment",
                    Status = "Enabled",
                    District = "Rruga Qamil Bala",
                },
                new Activity
                {
                    Method = "Visa Electron",
                    Description = "Credit card payment",
                    Status = "Disabled",
                    District = "Rruga Mark Isaku",
                },
                new Activity
                {
                    Method = "Delta",
                    Description = "Credit card payment",
                    Status = "Disabled",
                    District = "Rruga Fehmi Agani",
                },
                new Activity
                {
                    Method = "American Express",
                    Description = "Credit card payment",
                    Status = "Disabled",
                    District = "Rruga Tirana",
                },
                new Activity
                {
                    Method = "Paypal",
                    Description = "Through paypal account",
                    Status = "Enabled",
                    District = "Rruga Bajram Curri",
                },
                new Activity
                {
                    Method = "Apple pay",
                    Description = "Credit card linked to apple pay",
                    Status = "Enabled",
                    District = "Rruga Hys Popova",
                },
            };

            await context.Activities.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }
    }
}