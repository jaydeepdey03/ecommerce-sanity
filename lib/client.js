import ImageUrlBuilder from "@sanity/image-url";
import SanityClient  from "@sanity/client";

export const client = SanityClient({
    projectId: "sr22fuyf",
    dataset: "production",
    apiVersion: 1,
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = ImageUrlBuilder(client)

export const urlFor = (source) => {
    return builder.image(source)
}
