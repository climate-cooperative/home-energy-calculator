data "aws_acm_certificate" "zwell_ssl_cert" {
  provider = aws.us-east-1
  domain = "*.zwell.io"
  statuses = [ "ISSUED" ]
}

resource "aws_cloudfront_distribution" "zwell_home_energy_distro" {
  default_root_object = "index.html"
  enabled = true
  is_ipv6_enabled = false
  comment = "Zwell Home Energy Calculator CF Disro"
  
  aliases = [ "app.zwell.io" ]

  origin {
    domain_name = aws_s3_bucket.zwell-static-hosting-bucket.bucket_regional_domain_name
    origin_id = var.s3_origin_id
    origin_access_control_id = aws_cloudfront_origin_access_identity.s3_oai.id
  }

  restrictions {
    geo_restriction {
      restriction_type = "whitelist"
      locations = [ "US", "CA", "GB", "DE" ] // DNS server locales
    }
  }

  viewer_certificate {
    acm_certificate_arn = data.aws_acm_certificate.zwell_ssl_cert.arn
    cloudfront_default_certificate = true
    ssl_support_method = "sni-only"
  }

  default_cache_behavior {
    allowed_methods = [ "GET" ]
    cached_methods = [ "GET" ]
    target_origin_id = var.s3_origin_id

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "https-only"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400

  }
}

resource "aws_cloudfront_origin_access_identity" "s3_oai" {

}