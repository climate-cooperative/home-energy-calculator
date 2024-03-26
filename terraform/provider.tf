terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  required_version = "~> 1.7"
}

provider "aws" {
  region = "us-west-2"
}