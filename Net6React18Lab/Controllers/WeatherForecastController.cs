using Microsoft.AspNetCore.Mvc;
using Net6React18Lab.Models;

namespace Net6React18Lab.Controllers
{
    [ApiController]
  [Route("api/[controller]/[action]")]
  public class WeatherForecastController : ControllerBase
  {
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<WeatherForecastController> _logger;

    public WeatherForecastController(ILogger<WeatherForecastController> logger)
    {
      _logger = logger;
    }

    [HttpPost]
    public IEnumerable<WeatherForecast> QryDataList()
    {
      // 模擬長時間計算
      SpinWait.SpinUntil(() => false, 2000); // 等二秒

      return Enumerable.Range(1, 15).Select(index => new WeatherForecast
      {
        Date = DateTime.Now.AddDays(index),
        TemperatureC = Random.Shared.Next(-20, 55),
        Summary = Summaries[Random.Shared.Next(Summaries.Length)]
      })
      .ToArray();
    }
  }
}