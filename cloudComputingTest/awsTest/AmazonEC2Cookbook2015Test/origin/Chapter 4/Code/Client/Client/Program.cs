using Amazon.Runtime;
using Amazon.S3;
using Amazon.S3.Model;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Json;
using System.Text;
using System.Threading.Tasks;

namespace Client
{
    class Program
    {
        static void Main(string[] args)
        {
            //Web request to call proxy service.
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create("http://ProxyServiceURL/ProxyService.svc/GetToken");
            request.UseDefaultCredentials = true;
            request.Credentials = System.Net.CredentialCache.DefaultCredentials;

            //Get the response.
            HttpWebResponse response = response = (HttpWebResponse)request.GetResponse();

            //Check for status code.
            if (response.StatusCode == HttpStatusCode.OK)
            {
                //Get response stream.
                using (StreamReader reader = new StreamReader(response.GetResponseStream()))
                {
                    //Read response.
                    string json = reader.ReadToEnd();

                    //Initialize DataContractJsonSerializer.
                    DataContractJsonSerializer serializer = new DataContractJsonSerializer(typeof(TemporaryCredentials));

                    //Get memory stream.
                    MemoryStream ms = new MemoryStream(Encoding.Default.GetBytes(json));

                    //Get deserialized object.
                    TemporaryCredentials objTemporaryCredentials = (TemporaryCredentials)serializer.ReadObject(ms);

                    //Bucket name.
                    string bucketName = "clientdocs01";

                    //File name.
                    string fileName = "administrator/Note.txt";

                    //Set AWS credentials and token.
                    SessionAWSCredentials objSessionAWSCredentials = new
                    SessionAWSCredentials(
                                          objTemporaryCredentials.AccessKeyId,
                                          objTemporaryCredentials.SecretAccessKey,
                                          objTemporaryCredentials.Token);

                    //Create S3 client object to access S3 service.
                    AmazonS3Client objAmazonS3Client = new AmazonS3Client(objSessionAWSCredentials, Amazon.RegionEndpoint.APSoutheast1);

                    //Prepare list object request.
                    ListObjectsRequest objListObjectsRequest = new ListObjectsRequest();

                    //Set bucket name.
                    objListObjectsRequest.BucketName = bucketName;

                    //Get response from AWS S3.
                    ListObjectsResponse objListObjectsResponse = objAmazonS3Client.ListObjects(objListObjectsRequest);

                    //Iterate over S3 objects.
                    for (int i = 0; i < objListObjectsResponse.S3Objects.Count; i++)
                    {
                        //Display object name.
                        Console.WriteLine("\t" + objListObjectsResponse.S3Objects[i].Key);
                    }

                    //Prepare get object request.
                    GetObjectRequest objGetObjectRequest = new GetObjectRequest();

                    //Set bucket name.
                    objGetObjectRequest.BucketName = bucketName;

                    //Set file name.
                    objGetObjectRequest.Key = fileName;

                    //Get object data.
                    GetObjectResponse objGetObjectResponse = objAmazonS3Client.GetObject(objGetObjectRequest);

                    //Get response stream.
                    using (StreamReader objStreamReader = new StreamReader(objGetObjectResponse.ResponseStream))
                    {
                        //Read response.
                        Console.WriteLine("Contents :" + objStreamReader.ReadToEnd());
                    }
                }
            }

            Console.WriteLine("\nPress Enter to exit!");
            Console.ReadLine();
            return;
        }
    }

    [DataContract]
    public class TemporaryCredentials
    {
        [DataMember]
        public string User { get; set; }

        [DataMember]
        public string AccessKeyId { get; set; }

        [DataMember]
        public string SecretAccessKey { get; set; }

        [DataMember]
        public string Token { get; set; }

        [DataMember]
        public DateTime Expiration { get; set; }
    }
}
