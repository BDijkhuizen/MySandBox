using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;

namespace MySandBox.Controllers
{
    public class HelloController : Controller
    {
        public class person
        {
            public string name { get; set; }
            public DateTime birthdate { get; set; }
            public bool married { get; set; }
        }
        // GET: Hello
        public ActionResult Index()
        {
            var Output = 
                new List<person>()
                {
                    new person(){
                        name = "Hello World",
                        birthdate = DateTime.Now,
                        married = false
                    },
                    new person(){
                        name = "Arie Ribbens",
                        birthdate = DateTime.Now,
                        married = true
                    },
                    new person(){
                        name = "Rob Williams",
                        birthdate = DateTime.Now,
                        married = true
                    }

                }.ToList();
            return View("Index","",JsonConvert.SerializeObject( Output));
        }
    }
}