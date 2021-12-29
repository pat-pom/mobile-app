﻿// <auto-generated />
using System;
using AntiqueApi.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace AntiqueApi.Migrations
{
    [DbContext(typeof(AntiqueDbContext))]
    partial class AntiqueDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("AntiqueApi.Models.GeolocationModel", b =>
                {
                    b.Property<Guid>("Id")
                        .HasColumnType("uniqueidentifier");

                    b.Property<double>("Latitude")
                        .HasColumnType("float");

                    b.Property<double>("Longitude")
                        .HasColumnType("float");

                    b.HasKey("Id");

                    b.ToTable("Geolocations");
                });

            modelBuilder.Entity("AntiqueApi.Models.ImagesModel", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("ImageName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("ImageSize")
                        .HasColumnType("bigint");

                    b.Property<string>("ImageType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ImageUrl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid?>("ProductModelId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("ProductModelId");

                    b.ToTable("Images");
                });

            modelBuilder.Entity("AntiqueApi.Models.ProductModel", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Category")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(500)
                        .HasColumnType("nvarchar(500)");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("State")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<DateTime>("UpdatedDate")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("AntiqueApi.Models.GeolocationModel", b =>
                {
                    b.HasOne("AntiqueApi.Models.ProductModel", "Product")
                        .WithOne("Localization")
                        .HasForeignKey("AntiqueApi.Models.GeolocationModel", "Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Product");
                });

            modelBuilder.Entity("AntiqueApi.Models.ImagesModel", b =>
                {
                    b.HasOne("AntiqueApi.Models.ProductModel", null)
                        .WithMany("Images")
                        .HasForeignKey("ProductModelId");
                });

            modelBuilder.Entity("AntiqueApi.Models.ProductModel", b =>
                {
                    b.Navigation("Images");

                    b.Navigation("Localization")
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}