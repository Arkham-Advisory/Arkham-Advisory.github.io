import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { siteConfig } from "../config/site";

export const GET: APIRoute = async () => {
  const services = await getCollection("services");
  const writing = await getCollection("writing");

  const sortedServices = services.sort((a, b) => a.data.order - b.data.order);
  const sortedWriting = writing.sort(
    (a, b) =>
      new Date(b.data.publishedAt).getTime() -
      new Date(a.data.publishedAt).getTime()
  );

  const serviceLines = sortedServices
    .map((s) => `- [${s.data.title}](${siteConfig.url}/advisory/): ${s.data.summary}`)
    .join("\n");

  const writingLines = sortedWriting
    .map((w) => `- [${w.data.title}](${w.data.externalUrl}): ${w.data.description}`)
    .join("\n");

  const body = `# ${siteConfig.name}

> ${siteConfig.description}

${siteConfig.name} provides senior advisory on data, AI, and organisational transformation. Engagements are independent, commercially neutral, and focused on consequential decisions.

## Advisory Services

${serviceLines}

## Writing

${writingLines}

## Contact

- Email: ${siteConfig.email}
- LinkedIn: ${siteConfig.linkedInUrl}
- Website: ${siteConfig.url}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
