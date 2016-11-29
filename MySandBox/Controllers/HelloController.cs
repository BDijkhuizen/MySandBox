using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;

namespace MySandBox.Controllers
{
    public class HelloController : Controller
    {
        public class Person
        {
            public string Name { get; set; }
            public DateTime Birthdate { get; set; }
            public bool Married { get; set; }

        }

        private List<Person> GetJSonData()
        {
            var output =
            new List<Person>()
            {
                            new Person(){
                                Name = "Hello World",
                                Birthdate = DateTime.Now,
                                Married = false
                            },
                            new Person(){
                                Name = "Arie Ribbens",
                                Birthdate = DateTime.Now,
                                Married = true
                            },
                            new Person(){
                                Name = "Rob Williams",
                                Birthdate = DateTime.Now,
                                Married = true
                            }

            }.ToList();
            return output;
        }

        // GET: JustTheData
        public ActionResult JustTheData()
        {
            return Json(GetJSonData(), JsonRequestBehavior.AllowGet);
        }
        // GET: Hello
        public ActionResult Index()
        {
            return View("Index","", JsonConvert.SerializeObject(GetJSonData()));
        }

        [HttpPost]
        public HttpStatusCodeResult Save(String dataToSave )
        {
            var x = dataToSave;
            return new HttpStatusCodeResult(HttpStatusCode.OK);
        }
    }
}