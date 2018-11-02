using System;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Web.Configuration;

namespace WebApplication2
{
    public class IdentityConfig
    {
        public class PersonalEmail
        {
            public async Task SendAsync(MailMessage message)
            {
                var GmailUsername = WebConfigurationManager.AppSettings["username"];
                var GmailPassword = WebConfigurationManager.AppSettings["password"];
                var host = WebConfigurationManager.AppSettings["host"];
                int port = Convert.ToInt32(WebConfigurationManager.AppSettings["port"]);


                using (var smtp = new SmtpClient()
                {
                    Host = host,
                    Port = port,
                    EnableSsl = true,
                    DeliveryMethod = SmtpDeliveryMethod.Network,
                    UseDefaultCredentials = false,
                    Credentials = new NetworkCredential(GmailUsername, GmailPassword)
                })
                {
                    try
                    {
                        await smtp.SendMailAsync(message);
                    }
                    catch (Exception error)
                    {
                        Console.WriteLine(error.Message);
                        await Task.FromResult(0);

                    }
                }
            }
        }
    }
}