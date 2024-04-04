variable "s3_origin_id" {
  description = "Unique Origin ID given to the S3 Static Hosting origin in Cloudfront"
  type = string
  default = "zwell_calculator_origin_id"
}