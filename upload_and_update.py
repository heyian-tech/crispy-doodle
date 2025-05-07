import os
import re
import boto3
from botocore.exceptions import NoCredentialsError

# Configuration
R2_BUCKET_NAME = "heyian-webbucket-main"
R2_ENDPOINT_URL = "https://fcdafc0f1db7e22eca040087f94a6621.r2.cloudflarestorage.com"
R2_ACCESS_KEY = "9990786f72708b36ddc4777a892b4cdc"
R2_SECRET_KEY = "1850707ccf55d4d295e6b562c1898afa0219aa39554b608e9fb7eec11585efc6"
LOCAL_IMAGE_DIR = "images/"
HTML_CSS_FILES = ["index.html", "about.html", "contact.html", "qa.html", "services.html", "css/custom.css", "css/itservice4.css", "css/structure.css"]

# Initialize R2 client
s3 = boto3.client(
    's3',
    endpoint_url=R2_ENDPOINT_URL,
    aws_access_key_id=R2_ACCESS_KEY,
    aws_secret_access_key=R2_SECRET_KEY
)

def upload_images_to_r2():
    """Uploads all images in the local directory to the R2 bucket."""
    for root, _, files in os.walk(LOCAL_IMAGE_DIR):
        for file in files:
            local_path = os.path.join(root, file)
            s3_key = os.path.relpath(local_path, LOCAL_IMAGE_DIR).replace("\\", "/")
            try:
                s3.upload_file(local_path, R2_BUCKET_NAME, s3_key)
                print(f"Uploaded: {file} to {R2_BUCKET_NAME}/{s3_key}")
            except NoCredentialsError:
                print("Credentials not available.")
                return


def update_image_paths():
    """Replaces local image paths with R2 bucket URLs in HTML and CSS files."""
    bucket_url = f"{R2_ENDPOINT_URL}/{R2_BUCKET_NAME}"
    for file_path in HTML_CSS_FILES:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()

        # Replace local image paths with R2 URLs
        updated_content = re.sub(
            r'(?<=src=")[^"]*images/([^"]+)',
            lambda match: f"{bucket_url}/{match.group(1)}",
            content
        )
        updated_content = re.sub(
            r'(?<=url\()[^\)]+images/([^\)]+)',
            lambda match: f"{bucket_url}/{match.group(1)}",
            updated_content
        )

        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(updated_content)
        print(f"Updated paths in: {file_path}")

if __name__ == "__main__":
    print("Uploading images to R2 bucket...")
    upload_images_to_r2()
    print("Updating image paths in project files...")
    update_image_paths()
    print("Done!")