using System;
using System.Web.Mvc;

namespace MasteringTypeScriptCh06Samples.Controllers
{
    public class JasmineController : Controller
    {
        public ViewResult Run()
        {
            // setup forms auth ticket here.
            return View("SpecRunner");
        }
    }
}
