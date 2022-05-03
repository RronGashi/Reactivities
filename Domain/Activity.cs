using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Activity
    {
        public Guid Id { get; set; }
        
        public string Method { get; set; }
        public string Description { get; set; }
        public string Status { get; set; }
        public string District { get; set; }
    }
}