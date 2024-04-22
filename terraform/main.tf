resource "aws_s3_bucket" "zwell-static-hosting-bucket" {
  bucket = "app.zwell.io"
}

resource "aws_s3_bucket_website_configuration" "static-hosting-config" {
  bucket = aws_s3_bucket.zwell-static-hosting-bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    // front end will handle errors
    key = "index.html"
  }
}

resource "aws_s3_bucket_public_access_block" "static-hosting-access-block" {
  bucket = aws_s3_bucket.zwell-static-hosting-bucket.id

  block_public_acls   = false
  block_public_policy = false
}

resource "aws_s3_bucket_policy" "static-hosting-policy" {
  bucket = aws_s3_bucket.zwell-static-hosting-bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect    = "Allow"
        Principal = {
          "AWS": "${aws_cloudfront_origin_access_identity.s3_oai.iam_arn}"
        }
        Action = [
          "s3:GetObject"
        ]
        Resource = [
          "${aws_s3_bucket.zwell-static-hosting-bucket.arn}/*"
        ]
      }
    ]
  })
}
