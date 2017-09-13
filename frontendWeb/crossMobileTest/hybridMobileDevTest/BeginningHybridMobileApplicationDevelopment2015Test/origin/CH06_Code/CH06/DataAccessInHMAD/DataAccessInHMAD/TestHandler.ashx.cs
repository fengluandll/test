using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;

namespace DataAccessInHMAD
{
    /// <summary>
    /// Summary description for TestHandler
    /// </summary>
    public class TestHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "application/json";
            JavaScriptSerializer jss = new JavaScriptSerializer();
            context.Response.Write(jss.Serialize(new Employee()));
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}