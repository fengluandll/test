using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;

namespace HelloServer
{
    /// <summary>
    /// Summary description for SayHello
    /// </summary>
    public class SayHello : IHttpHandler
    {
        public void ProcessRequest(HttpContext context)
        {
            // Below line is to convey client browser / hybrid application
            // that we are retunring data in JSON format
            
            context.Response.ContentType = "text/json";

            // Create a person class object 
            // Assign dummy information to the same
            Person person = new Person();
            person.Name = "James";
            person.Address = "London";

            string jsonResult = string.Empty;

            // Create Javascript serializer helper object
            // Need to refer below namespace for the same
            // Put using "System.Web.Script.Serialization" 
            
            JavaScriptSerializer jss = new JavaScriptSerializer();

            // Serialize person's data in JSON format
            jsonResult = jss.Serialize(person);

            // Write JSON data to browser / App
            context.Response.Write(jsonResult);
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