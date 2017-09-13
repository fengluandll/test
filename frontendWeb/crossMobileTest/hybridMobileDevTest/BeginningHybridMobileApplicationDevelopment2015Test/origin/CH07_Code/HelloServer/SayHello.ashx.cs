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

            // Create a person class object's collection 
            // Assign dummy information to the same. Consider as if information comes from DB

            Person person1 = new Person() { No = 1, Name = "James", Address = "London" };
            Person person2 = new Person() { No = 2, Name = "Jack", Address = "Newyork" };
            Person person3 = new Person() { No = 3, Name = "Rita", Address = "Boston" };
            Person person4 = new Person() { No = 4, Name = "Celestin", Address = "SF" };

            List<Person> people = new List<Person>() { person1, person2, person3, person4 };

            string jsonResult = string.Empty;

            // Create Javascript serializer helper object
            // Need to refer below namespace for the same
            // Put using "System.Web.Script.Serialization" 

            JavaScriptSerializer jss = new JavaScriptSerializer();

            // Serialize person's data in JSON format
            jsonResult = jss.Serialize(people);

            // Write JSON data to browser / App
            context.Response.Write(jsonResult);
            context.Response.AppendHeader("Access-Control-Allow-Origin", "*");
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }

    public class Person
    {
        public int No { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
    }
}