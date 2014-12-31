using System;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Routing;
using Microsoft.Framework.DependencyInjection;

namespace Building_Stuff
{
  public class Startup
  {
    public void Configure(IApplicationBuilder app)
    {
      app.UseErrorPage();

      app.UseServices(services =>
      {
        services.AddMvc();
      });

      app.UseMvc();

      app.UseWelcomePage();
    }
  }
}
