using AntiqueApi.Interfaces;
using AntiqueApi.Services;
using Azure.Storage.Blobs;
using Microsoft.AspNetCore.Http.Features;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Azure Storage Blob register service
builder.Services.AddScoped(x => new BlobServiceClient(builder.Configuration.GetValue<string>("AzureBlobStorage")));

builder.Services.AddScoped<IBlobService, BlobService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
