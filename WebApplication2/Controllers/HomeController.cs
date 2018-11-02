using WebApplication2.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using static WebApplication2.IdentityConfig;

namespace WebApplication2.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            EmailModel model = new EmailModel();
            return View(model);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Contact(EmailModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    ViewBag.Message = "";
                    var body = "<p>Email From: <bold>{0}</bold>" + "({1})</p>" + "<p> Subject:</p><p>{2}</p>" + "<p> Message:</p><p>{3}</p>";
                    var from = "ZWPortfolio<zacharywilsonm@gmail.com>";

                    var email = new MailMessage(from, ConfigurationManager.AppSettings["emailto"])
                    {
                        Subject = "Portfolio Contact Email - " + model.Subject,
                        Body = string.Format(body, model.FromName, model.FromEmail, model.Body, model.Subject),
                        IsBodyHtml = true
                    };

                    var svc = new PersonalEmail();
                    await svc.SendAsync(email);

                    ModelState.Clear();
                    TempData["status"] = "Success";
                    return RedirectToAction("Index");
                }
                catch (Exception ex)
                {
                    TempData["status"] = "Error";
                    Console.WriteLine(ex.Message);
                    await Task.FromResult(0);
                    return RedirectToAction("Index");
                }
            }
            return View(model);
        }
    }
}