using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebService.Controllers
{
    public class ProvisionController : ApiController
    {
        public HttpResponseMessage Get()
        {
            var response = Request.CreateResponse(HttpStatusCode.Found);
            response.Headers.Location = new Uri("<redirectURL>"); //for test purporse it may be hardcoded but for more production release it will need to be fetched from query string
            return response;
        }
    }
}
