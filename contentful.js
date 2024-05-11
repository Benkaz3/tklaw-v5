const contentful = require("contentful");

const client = contentful.createClient({
  space: "stste79qbcbt",
  accessToken: "IKFfVRpuHeTEFNlvIEDBrdrgBK9zJOfS_mhJV9UCBdw",
});

async function fetchBlogPosts() {
  try {
    const response = await client.getEntries({
      content_type: "Blog page", // Replace with your content type ID
      order: "-fields.date", // Optionally, order by date field
    });
    return response.items;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

module.exports = { fetchBlogPosts };
