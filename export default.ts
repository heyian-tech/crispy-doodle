export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Ensure the request is for the custom domain
    if (url.hostname !== 'photos.heyian.cloud') {
      return new Response('Forbidden', { status: 403 });
    }

    // Handle all files in the workspace dynamically
    const bucketUrl = url.pathname.startsWith('/') ? url.pathname.slice(1) : url.pathname;

    // Add debugging logs for troubleshooting
    console.log(`Request URL: ${url}`);
    console.log(`Bucket URL: ${bucketUrl}`);

    try {
      // Use env.BUCKET to access the R2 bucket
      const object = await env.BUCKET.get(bucketUrl);

      if (!object) {
        console.log(`File not found in R2 bucket: ${bucketUrl}`);
        return new Response('Not Found', { status: 404 });
      }

      console.log(`File found: ${bucketUrl}`);
      return new Response(object.body, {
        headers: {
          'Content-Type': object.httpMetadata.contentType || 'application/octet-stream',
          'Cache-Control': 'public, max-age=31536000',
        },
      });
    } catch (error) {
      console.error(`Error fetching file: ${bucketUrl}`, error);
      return new Response('Internal Server Error', { status: 500 });
    }
  },
};