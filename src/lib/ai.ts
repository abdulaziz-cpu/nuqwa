import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function generateArtworkMetadata(description: string) {
    if (!process.env.OPENAI_API_KEY) {
        // Mock response if no key
        return {
            title: "Echoes of the Desert",
            description: "A mesmerizing representation of the Saudi desert, blending traditional calligraphy with modern abstract forms. The golden hues evoke the warmth of the sun.",
            tags: ["Calligraphy", "Abstract", "Desert", "Gold"]
        };
    }

    const completion = await openai.chat.completions.create({
        messages: [
            { role: "system", content: "You are an expert art curator. Generate a catchy title, a professional description, and 4 tags for an artwork based on the user's rough input. Return JSON." },
            { role: "user", content: description }
        ],
        model: "gpt-3.5-turbo",
        response_format: { type: "json_object" },
    });

    return JSON.parse(completion.choices[0].message.content || "{}");
}

export async function estimateArtworkPrice(details: string) {
    if (!process.env.OPENAI_API_KEY) {
        // Mock response
        return {
            min: 12000,
            max: 18000,
            currency: "SAR",
            reasoning: "Based on similar oil paintings of this size and style in the Saudi market."
        };
    }

    const completion = await openai.chat.completions.create({
        messages: [
            { role: "system", content: "You are an expert art appraiser in the Saudi market. Estimate a price range (min, max) in SAR and provide brief reasoning based on the artwork details. Return JSON." },
            { role: "user", content: details }
        ],
        model: "gpt-3.5-turbo",
        response_format: { type: "json_object" },
    });

    return JSON.parse(completion.choices[0].message.content || "{}");
}
