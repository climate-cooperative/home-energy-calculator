data "aws_route53_zone" "zwell_io_hosted_zone" {
  name = "zwell.io"
}

resource "aws_route53_record" "zwell_calculator_app_record" {
  zone_id = data.aws_route53_zone.zwell_io_hosted_zone.id
  name = "app.zwell.io"
  type = "A"
  alias {
    name = aws_cloudfront_distribution.zwell_home_energy_distro.domain_name
    zone_id = aws_cloudfront_distribution.zwell_home_energy_distro.hosted_zone_id
    evaluate_target_health = false
  }
}