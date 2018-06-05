using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

namespace Proxy
{
    [ServiceContract]
    public interface IProxyService
    {
        [OperationContract]
        [WebGet(ResponseFormat = WebMessageFormat.Json)]
        TemporaryCredentials GetToken();
    }
}
