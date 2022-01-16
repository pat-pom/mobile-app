﻿using System.ComponentModel.DataAnnotations;

namespace AntiqueApi.Models.DTOs.Requests
{
    public class UserLoginDto
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
