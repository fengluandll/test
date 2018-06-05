using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using Amazon.IdentityManagement;
using Amazon.SecurityToken;
using Amazon.SecurityToken.Model;
using System.Collections.Specialized;
using System.Configuration;
using System.Text.RegularExpressions;
using System.ServiceModel.Web;
using System.Web;
using System.Net;

namespace Proxy
{
    public class ProxyService : IProxyService
    {
        TemporaryCredentials IProxyService.GetToken()
        {
            //Get username from client request.
            string userName = HttpContext.Current.Request.LogonUserIdentity.Name;

            TemporaryCredentials objTemporaryCredentials = new TemporaryCredentials();

            //Get the app settings from web.config file.
            NameValueCollection appConfig = ConfigurationManager.AppSettings;
            string accessKeyId = appConfig["accessKeyId"];
            string secretAccessKey = appConfig["secretAccessKey"];
            string bucketName = appConfig["bucketName"];

            // Create a client.
            AmazonSecurityTokenServiceConfig config = new AmazonSecurityTokenServiceConfig();
            AmazonSecurityTokenServiceClient client = new AmazonSecurityTokenServiceClient(
                                                          accessKeyId,
                                                          secretAccessKey,
                                                          config);

            //Split the user name.
            string[] usernameParts01 = userName.Split('\\');

            // Build the aws username.
            string awsUsernameDomain = usernameParts01[1] + "@" + usernameParts01[0];

            // Split username@domain to retrieve the username only.
            string[] usernameParts02 = awsUsernameDomain.Split('@');

            //Get username only.
            string awsUsername = usernameParts02[0];

            string policy = appConfig["policy_" + awsUsername];

            // Replace the [*] values with real values at runtime.
            policy = policy.Replace("[BUCKET-NAME]", bucketName);
            policy = policy.Replace("[USER-NAME]", awsUsername.ToLowerInvariant());
            policy = policy.Replace("'", "\"");

            //Request to get temporary credentials.
            GetFederationTokenRequest request = new GetFederationTokenRequest
            {
                DurationSeconds = 3600 * 8,
                Name = awsUsername,
                Policy = policy
            };

            //Get temporary credentials.
            GetFederationTokenResponse objGetFederationTokenResponse = client.GetFederationToken(request);

            //Get federation token result.
            GetFederationTokenResult objGetFederationTokenResult = objGetFederationTokenResponse.GetFederationTokenResult;

            //Get credentials.
            Credentials objCredentials = objGetFederationTokenResult.Credentials;

            //Set user name.
            objTemporaryCredentials.User = userName;

            //Set access key id.
            objTemporaryCredentials.AccessKeyId = objCredentials.AccessKeyId;

            //Set secret access key.
            objTemporaryCredentials.SecretAccessKey = objCredentials.SecretAccessKey;

            //Set expiration.
            objTemporaryCredentials.Expiration = objCredentials.Expiration;

            //Set token.
            objTemporaryCredentials.Token = objCredentials.SessionToken;

            //Return result.
            return objTemporaryCredentials;
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
