using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebApplication4.Controllers
{
    public class ValuesController : ApiController
    {
        [EnableCors(origins: "https://<yourTenantName>.sharepoint.com", headers: "Content-Type", methods: "get", SupportsCredentials = true)]
        // GET api/values
        public IEnumerable<string> Get()
        {
            var headers = Request.Headers;
            if (headers.Contains("Custom"))
            {
                string token = headers.GetValues("Custom").First();
            }

            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
